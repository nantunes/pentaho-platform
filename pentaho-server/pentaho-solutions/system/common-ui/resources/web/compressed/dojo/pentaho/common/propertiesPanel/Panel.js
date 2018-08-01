/*!
 * Copyright 2010 - 2017 Hitachi Vantara.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

define(["dojo/_base/declare","dojo/data/ItemFileReadStore","dijit/registry","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/layout/ContentPane","dijit/layout/BorderContainer","dijit/form/HorizontalSlider","dijit/form/TextBox","dijit/form/ComboBox","dijit/form/Select","dijit/form/CheckBox","dijit/TitlePane","dojo/on","dojo/query","dojo/_base/array","dojo/_base/lang","dojo/html","dojo/dom-construct","dojo/string","dojo/dom-class","dojo/dnd/Target","dojo/dnd/Source","dojo/dnd/Manager","dojo/Evented","dojo/topic","dojo/dom","dojo/dom-geometry","dojo/aspect","pentaho/common/Messages","pentaho/common/propertiesPanel/Configuration"],function(declare,ItemFileReadStore,registry,_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,ContentPane,BorderContainer,HorizontalSlider,TextBox,ComboBox,Select,CheckBox,TitlePane,on,query,array,lang,html,construct,string,domClass,Target,Source,ManagerClass,Evented,topic,dom,geometry,aspect,Messages,Configuration){
function newId(e){return e+ ++nextId}var nextId=0,Panel=declare("pentaho.common.propertiesPanel.Panel",[ContentPane,Evented],{
captionTemplate:"<div class='caption'><span class='caption-text'>${ui.caption:i18n}</span><i class='captionIcon'></i></div>",
seperatorTemplate:"<div class='propPanel-seperator'></div>",propUIs:null,groups:null,
previousGroupsOpenState:null,gutters:!1,baseClass:"pentahoPropertiesPanel",minHeightDeviation:0,
_gemUIByGemId:null,constructor:function(e){this.configuration=e,this._gemUIByGemId={};
},postCreate:function(){array.forEach(this.configuration.items,lang.hitch(this,"initializeItem")),
this.inherited(arguments)},resize:function(){this.minHeightDeviation=0,this.inherited(arguments);
},initializeItem:function(e){if(!e.ui.hidden){var t=Panel.registeredTypes[e.ui.type];
if(!t)throw"No Properties Panel UI implementation found for "+e.ui.type;var i;i=t.create?t.create({
model:e,propPanel:this}):new t({model:e,propPanel:this});var o=this.domNode,n=e.ui.group;
if(n){var s=this._getOrCreateGroup(n);s&&(o=s.content)}if(e.ui.seperator&&o.appendChild(construct.toDom(this.seperatorTemplate)),
e.ui.caption){var r=construct.toDom(string.substitute(this.captionTemplate,e,null,{
i18n:function(e,t){var i=Messages.getString(e,e);return i.length&&":"===i[i.length-1]?i.slice(0,-1):i;
}})),d=query("i",r);d&&null!=d&&d.length>0&&(d=d[d.length-1],e.ui.captionIcon?domClass.add(d,e.ui.captionIcon):d.style.display="none"),
o.appendChild(r)}this.setupEventHandling(i),i instanceof GemUI&&this.registerGemUI(i),
this.propUIs.push(i),this.own(on(i,"UIEvent",lang.hitch(this,"onUIEvent"))),domClass.add(i.domNode,"propPanelItem"),
o.appendChild(i.domNode),this.resize()}},_getOrCreateGroup:function(e){var t=this.groups[e];
if(!t){var i=this.configuration.groups[e];i&&(t=this._createGroup(e,i))}return t},
_createGroup:function(e,t){var i=new TitlePane({title:Messages.getString(t.title,t.title),
content:document.createElement("div"),region:"top",splitter:!1});return null!==this.previousGroupsOpenState&&"undefined"!=typeof this.previousGroupsOpenState[e]&&i.open&&this.previousGroupsOpenState[e].open===!1&&i.toggle(),
aspect.after(i,"resize",lang.hitch(this,function(){this._resizeGroup(i)})),aspect.after(i._wipeOut,"onEnd",lang.hitch(this,"resize")),
aspect.after(i._wipeIn,"onEnd",lang.hitch(this,"resize")),this.domNode.appendChild(i.domNode),
this.groups[e]=i},_resizeGroup:function(e){var t=(geometry.position(this.domNode.children[this.domNode.children.length-1]),
0),i=0,o=0,n=0;for(var s in this.groups){t++;var r=this.groups[s],d=geometry.position(r.titleBarNode).h;
i+=r.open?d+r.hideNode.scrollHeight:0,n+=r.open?r.usingMinHeight?r.heightAdjustment:0:d;
}array.forEach(this.domNode.children,function(e){e.className.match(/dijitTitlePane/)||(o+=geometry.position(e).h);
});var a=(geometry.position(this.domNode).h,geometry.position(this.domNode).h-o-n),h=geometry.position(e.titleBarNode),d=h.h,l=h.w;
if(e.open){var c=d+e.hideNode.scrollHeight,u=c/i*a;u>c?(e.hideNode.style.overflow="hidden",
e.wipeNode.style.width=l+"px"):(e.hideNode.style.overflow="auto",e.wipeNode.style.width="");
var m=2.2;d*m>u?(e.usingMinHeight=!0,e.heightAdjustment=d*m-u,u=d*m):e.usingMinHeight=!1,
isNaN(u)||(e.domNode.style.height=u+"px"),geometry.position(e.domNode).h>0&&(e.hideNode.style.height=Math.min(geometry.position(e.domNode).h-d,e.hideNode.scrollHeight)+"px");
}else isNaN(d)||(e.domNode.style.height=d+"px"),e.usingMinHeight=!1;e.domNode.style.width="";
},onUIEvent:function(e,t){on.emit(this,e,t)},registerGemUI:function(e){this._gemUIByGemId[e.model.id]=e;
},unregisterGemUI:function(e){delete this._gemUIByGemId[e.model.id]},getGemUIById:function(e){
if(e){var t=/^gem_(.*?)(:?_\d+)?$/.exec(e);return t&&(e=t[1]),this._gemUIByGemId[e];
}},setupEventHandling:function(e){this.own(on(e,"contextMenu",function(t){this.onUIEvent("onContextMenu",{
item:e,args:[e,t]})})),this.own(on(e,"click",function(t){this.onUIEvent("onClick",{
item:e,args:[e,t]})})),this.own(on(e,"dblclick",function(t){this.onUIEvent("onDblClick",{
item:e,args:[e,t]})}))},setConfiguration:function(e){this._setConfiguration(new Configuration(e));
},_setConfiguration:function(e){if(this.propUIs&&this.propUIs.length&&this._destroyChildrenDeferred(),
this.groups){this.previousGroupsOpenState={};for(var t in this.groups)this.groups.hasOwnProperty(t)&&(this.previousGroupsOpenState[t]={},
this.previousGroupsOpenState[t].open=this.groups[t].open||!1)}this.propUIs=[],this.groups={},
this._gemUIByGemId={},this.domNode.innerHTML="",this.configuration=e,this.postCreate();
},_destroyChildrenDeferred:function(){function e(){array.forEach(t,function(e){e.destroyRecursive();
})}var t=this.getChildren();window.setTimeout(e,0)},reload:function(){this._setConfiguration(this.configuration);
},set:function(e,t,i){array.forEach(this.propUIs,function(o){o.model.id==t&&o.model.set(e,i);
})}});Panel.registeredTypes={};var StatefulUI=declare([],{constructor:function(e){
this.model=e.model,this.propPanel=e.propPanel,this._watchHandle=this.model.watch(lang.hitch(this,function(e,t,i){
switch(e){case"value":case"default":this._destroyed||this.set(e,i)}}))},onUIEvent:function(e,t){},
destroy:function(){this.inherited(arguments),this.model=this.propPanel=null,this._watchHandle&&(this._watchHandle.remove(),
this._watchHandle=null)}}),GemBarUISource=declare([Source],{constructor:function(e){
this.dropIndicator=document.createElement("div"),this.dropIndicator.className="indicator",
this.dropIndicator.id="propertyPanelIndicator",this.dropIndicator.style.display="none",
this.topics.push(on(this.dropIndicator,"mouseover",lang.hitch(this,"_redirectMouseOver")),on(this.dropIndicator,"mouseup",lang.hitch(this,"_redirectMouseUp")));
var t=document.createElement("div");t.className="indicatorLine",this.dropIndicator.appendChild(t),
this.node.parentNode.appendChild(this.dropIndicator)},destroy:function(){this.inherited(arguments),
this.gemBar=this.dropIndicator=this.gemUIbeingInserted=null},_redirectMouseOver:function(e){
var t=this._getNodeUnderMouse(e);if(this.lastItemOver=t,t>-1)if(document.createEvent){
var i=document.createEvent("MouseEvent");i.initMouseEvent("mouseover",!0,!0,window,0,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),
this.node.dispatchEvent(i),this.node.children[t].dispatchEvent(i),i=document.createEvent("MouseEvent"),
i.initMouseEvent("mousemove",!0,!0,window,0,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),
this.node.dispatchEvent(i),this.node.children[t].dispatchEvent(i)}else if(document.createEventObject){
var i=document.createEventObject(window.event);i.button=1,this.node.children[t].fireEvent("onmouseover",i),
this.node.children[t].fireEvent("onmousemove",i)}},_redirectMouseUp:function(e){var t=this._getNodeUnderMouse(e);
if(t>-1)if(document.createEvent){var i=document.createEvent("MouseEvent");i.initMouseEvent("mouseup",!0,!0,window,0,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),
this.node.children[t].dispatchEvent(i)}else if(document.createEventObject){var i=document.createEventObject(window.event);
this.node.children[t].fireEvent("onmouseup",i)}},onDrop:function(e,t,i,o){if(this.dropAtEnd=o,
this.dropZone2Zone=!1,!t||0==t.length)return!1;var n=t[0],s=this.gemBar.propPanel.getGemUIById(n.id);
if(s&&(!s||s.gemBar==this.gemBar)||this.gemBar.checkAcceptance(this,t,!0)){var r;s?(r=s.model,
s.gemBar==this.gemBar||(this.dropZone2Zone=!0,s.gemBar.remove(s,!0),s.model.previousGemBar=s.gemBar.model,
s.gemBar=this.gemBar)):(r=this.createGemFromNode(n),s=this.createGemUI(r,n),t[0]=s.domNode),
this.gemUIbeingInserted=s;var d=t[0].id;t[0].id=n.id,this.inherited(arguments),t[0].id=d,
this.sync(),e.sync();var a=e.postDrop||r.postDrop;return this._executePostDrop(n.getAttribute("formula"),a),
!0}},_onDrop:function(e,t,i,o,n,s,r,d){var a=this.gemBar,h=this.node;this.gemBar=o,
this.node=r;var l=this.createGemByFormula(e,i);this.gemUIbeingInserted=this.createGembarUIFromGembar(l,o,t),
this.insertNodes(null,null,n,s,!0),this.gemBar=a,this.node=h,this._executePostDrop(e,d);
},_executePostDrop:function(e,t){t&&t.f.call(t.scope,e,this.gemBar.id)},createGemFromNode:function(e){
return this.gemBar.model.createGemFromNode(e)},createGemByFormula:function(e,t){return this.gemBar.model.createGemByFormula(e,t);
},createGembarUIFromGembar:function(e,t){var i=Panel.registeredTypes.gem,o={model:e,
gemBar:this.gemBar,dndType:t};return i.create?i.create(o):new i(o)},createGemUI:function(e,t){
return this.gemBar.createGemUI(e,t)},onMouseMove:function(e){this.showIndicatorIfReorder(e),
this.inherited(arguments)},onMouseOver:function(e){this.showIndicatorIfReorder(e),
this.inherited(arguments)},onMouseOut:function(e){e.target!=this.dropIndicator&&(this.dropIndicator.style.display="none",
this.inherited(arguments))},onDraggingOut:function(e){this.dropIndicator.style.display="none",
this.inherited(arguments)},showIndicatorIfReorder:function(e){if(ManagerClass.manager().source&&this.checkAcceptance(this,ManagerClass.manager().nodes)){
var t=this.dropIndicator,i=function(){t.style.display="none",o.remove()},o=topic.subscribe("/dnd/cancel",i),n=(topic.subscribe("/dnd/drop",i),
this._getNodeUnderMouse(e));if(-1==n)return;var s=1&this.gravity(this.node.children[n],e);
if(this.node.children[n]==ManagerClass.manager().nodes[0]&&(s&&0==n||!s&&this.node.children.length-1==n))return void(this.dropIndicator.style.display="none");
this.placeIndicator(e,n,s)}},_showDropIndicator:function(e){var t=this._getNodeUnderMouse(e);
if(-1!=t){var i=1&this.gravity(this.node.children[t],e);return this.node.children[t]==ManagerClass.manager().nodes[0]&&(i&&0==t||!i&&this.node.children.length-1==t)?void(this.dropIndicator.style.display="none"):(this.placeIndicator(e,t,i),
{before:1===i,anchor:this.node.children[t]})}},_hideDropIndicator:function(){this.dropIndicator&&(this.dropIndicator.style.display="none");
},placeIndicator:function(e,boxIndex,before){var spacing=-5,bbCoords=geometry.position(this.node,!0);
with(this.dropIndicator.style)if(0>boxIndex)if(this.node.children.length){var coords=geometry.position(this.node.children[this.node.children.length-1],!0);
left=coords.x-7-(bbCoords.x-5)+"px";var coords=geometry.position(this.node.children[0]),lastChild=geometry.position(this.node.children[this.node.children.length-1]);
top=(before?coords.y-spacing:lastChild.y+lastChild.h+spacing)-(bbCoords.y-5)+"px",
width=coords.w+"px"}else{var pos=geometry.position(this.node,!0);left=pos.x-7-(bbCoords.x-5)+"px",
top=pos.y+pos.h-(bbCoords.y-5)+"px",width=pos.w+"px"}else{var child=geometry.position(this.node.children[boxIndex],!0);
left=child.x-7-(bbCoords.x-5)+"px",top=before?child.y+spacing-(bbCoords.y-5)+"px":child.y+child.h+spacing-(bbCoords.y-5)+"px",
width=child.w+"px"}this.dropIndicator.style.display=""},_getNodeUnderMouse:function(e){
for(var t=this.node.children,i=0;t&&i<t.length;++i)if(t[i]!=this.dropIndicator){var o=geometry.position(t[i],!0);
if(e.clientX>=o.x&&e.clientX<=o.x+o.w&&e.clientY>=o.y&&e.clientY<=o.y+o.h)return i;
}return-1},gravity:function(node,e){node=dom.byId(node);var mouse={y:e.clientY,x:e.clientX
},bb=geometry.position(node),nodecenterx=bb.x+bb.w/2,nodecentery=bb.y+bb.h/2;with(cv.util.gravity)return(mouse.x<nodecenterx?WEST:EAST)|(mouse.y<nodecentery?NORTH:SOUTH);
},insertNodes:function(e,t,i,o,n){"undefined"!=typeof this.dropAtEnd&&(i=!this.dropAtEnd);
var s=0;if(null==o)s=this.gemBar.gems.length,i=!1;else if(null!=o){for(var r=0;r<this.node.children.length;r++)this.node.children[r]==o&&(s=r);
s=i?s:s+1}this.gemBar.insertAt(this.gemUIbeingInserted,s,this.dropZone2Zone),n||this.inherited(arguments),
this.gemBar.propPanel.resize()},checkAcceptance:function(e,t,i){return this.gemBar.checkAcceptance(e,t,i);
}}),PlaceholderSource=declare([Target],{constructor:function(e,t){this.dropZone=t.dropZone;
},onDrop:function(e,t,i){return this.dropZone.onDrop(e,t,i,!0)},checkAcceptance:function(e,t,i){
return this.dropZone.checkAcceptance(e,t,i)},destroy:function(){this.inherited(arguments),
this.dropZone=null}}),GemBarUI=declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,Evented,StatefulUI],{
className:"propPanel_gemBar",gemLimit:-1,templateString:"<div class='${className}' data-dojo-type='dijit.layout.BorderContainer' data-dojo-props='gutters:false'><div data-dojo-props='region:center'></div><div class='gemPlaceholder'><span>${placeholderText}</span></div></div>",
gems:null,accept:["gem"],showPlaceholder:!0,placeholderText:"Drop Level Here",constructor:function(e){
this.id=newId(this.model.id+"_ui"),this.showPlaceholder=this.model.ui.showPlaceholder,
this.model.ui.placeholderText&&(this.placeholderText=this.model.ui.placeholderText);
},postCreate:function(){domClass.add(this.domNode,this.model.dataType),this.gems=[],
this.placeholder=query(".gemPlaceholder",this.domNode)[0],this.placeholder.style.display=this.showPlaceholder&&(this.model.allowMultiple||0==this.model.gems.length)?"":"none",
this.model.required&&0==this.model.gems.length&&domClass.add(this.placeholder,"reqiured"),
this.dropZoneNode=this.domNode.firstChild,this.dropZone=new GemBarUISource(this.dropZoneNode,{
accept:this.model.ui.dndType,gemBar:this}),this.showPlaceholder&&(this.model.allowMultiple||this.model.gems.length<2)&&(this._placeHolderSource=new PlaceholderSource(this.placeholder,{
accept:this.model.ui.dndType,dropZone:this.dropZone}));var e=lang.hitch(this,function(){
this.domNode&&this._hideDiminish()});this.own(topic.subscribe("/dnd/start",lang.hitch(this,function(){
this.checkAcceptance(this.dropZone,ManagerClass.manager().nodes)||this._showDiminish();
})),topic.subscribe("/dnd/cancel",e),topic.subscribe("/dnd/drop",e),on(this.domNode,"mouseover",lang.hitch(this,function(e){
ManagerClass.manager().source&&this.checkAcceptance(this.dropZone,ManagerClass.manager().nodes)&&this._showOver();
})),on(this.domNode,"mouseout",lang.hitch(this,"_hideOver")),on(this.domNode,"mouseup",lang.hitch(this,"_hideOver")),on(this.dropZone,"createDropIndicator",lang.hitch(this,"createDropIndicator")),on(this.dropZone,"placeDropIndicator",lang.hitch(this,"placeDropIndicator")),on(this.dropZone,"onMouseOver",lang.hitch(this,"onMouseOver")),on(this.dropZone,"onMouseOut",lang.hitch(this,"onMouseOut")),on(this.dropZone,"onDraggingOver",lang.hitch(this,"onDraggingOver")),on(this.dropZone,"onDraggingOver",lang.hitch(this,"onDraggingOut")),on(this.dropZone,"insertNodes",lang.hitch(this,"insertNodes"))),
array.forEach(this.model.gems,function(e){var t=this.createGemUI(e,e.sourceNode);this.domNode.firstChild.appendChild(t.domNode),
this.add(t)},this),this.dropZone.sync(),this.inherited(arguments)},_showOver:function(){
this.domNode&&domClass.add(this.domNode,"over")},_hideOver:function(){this.domNode&&domClass.remove(this.domNode,"over");
},_showDiminish:function(){this.domNode&&domClass.add(this.domNode,"dimished")},_hideDiminish:function(){
this.domNode&&domClass.remove(this.domNode,"dimished")},insertNodes:function(e,t,i,o){
this.onUIEvent("insertNodes",{item:this,args:arguments})},add:function(e){e.model.gemBar=this.model,
e.gemBar=this,this.gems.push(e),this.propPanel.setupEventHandling(e),this.propPanel.registerGemUI(e),
this.model.required&&domClass.remove(this.placeholder,"reqiured")},insertAt:function(e,t,i){
var o=array.indexOf(this.gems,e);o>-1&&this.gems.splice(o,1),this.gems.splice(t,0,e),
this.propPanel.registerGemUI(e),this.model.insertAt(e.model,t,o,i),0==this.model.allowMultiple&&(this.placeholder.style.display="none"),
this.model.required&&domClass.remove(this.placeholder,"reqiured")},remove:function(e,t){
this.dropZoneNode.removeChild(e.domNode);var i=array.indexOf(this.gems,e);this.gems.splice(i,1),
this.model.remove(e.model,t),(1==this.model.allowMultiple||0==this.model.gems.length)&&(this.placeholder.style.display=""),
this.propPanel.unregisterGemUI(e),this.propPanel.resize()},onContextMenu:function(e,t){},
createDropIndicator:function(){},placeDropIndicator:function(e){},onMouseOver:function(){},
onMouseOut:function(){},onDraggingOver:function(){return this.inherited(arguments);
},onDraggingOut:function(){},checkAcceptance:function(e,t){return this.model.allowMultiple||0==this.model.allowMultiple&&0==this.model.gems.length;
},validateGem:function(e){return!0},createGemFromNode:function(e){var t={id:e.innerHTML
};return new Configuration.registeredTypes.gem(t)},createGemUI:function(e,t){var i=Panel.registeredTypes.gem,o={
model:e,postDrop:e.postDrop,dndType:e.dndType,gemBar:this,sourceNode:t};return i.create?i.create(o):new i(o);
},destroyRecursive:function(){this.inherited(arguments),array.forEach(this.gems,function(e){
e.destroyRecursive()})},destroy:function(){this.dropZone&&(this.dropZone.destroy(),
this.dropZone=null),this._placeHolderSource&&(this._placeHolderSource.destroy(),this._placeHolderSource=null),
this.inherited(arguments),this.dropZoneNode=this.placeholder=this._startupWidgets=this._supportingWidgets=null;
}});Panel.registeredTypes.gemBar=GemBarUI;var GemUI=declare([_WidgetBase,_TemplatedMixin,Evented,StatefulUI],{
className:"gem",templateString:"<div id='${id}' class='${className} dojoDndItem' dndType='${dndType}'><div class='gem-label' title='${model.value}'></div><div class='gemMenuHandle'></div></div>",
constructor:function(e){e.id=newId("gem_"+this.model.id+"_"),this.gemBar=e.gemBar,
this.dndType=e.dndType},detach:function(){model.detach()},destroy:function(){this.inherited(arguments),
this.menuHandle=this.postDrop=this.gemBar=this._startupWidgets=this._supportingWidgets=null;
},postCreate:function(){this.menuHandle=query("div.gemMenuHandle",this.domNode)[0],
this.menuHandle||(this.menuHandle=query(".gemMenuHandle",this.domNode)[0]);var e=query("div.gem-label",this.domNode)[0];
e||(e=query(".gem-label",this.domNode)[0]),e.innerHTML=this.model.value,this.own(on(this.domNode,"contextmenu",lang.hitch(this,"onContextMenu")),on(this.menuHandle,"mouseover",function(e){
ManagerClass.manager().source||domClass.add(e.target,"over")}),on(this.menuHandle,"mouseout",function(e){
ManagerClass.manager().source||domClass.remove(e.target,"over")}),on(this.menuHandle,"click",lang.hitch(this,"onContextMenu")),on(this.domNode,"mouseover",lang.hitch(this,"onMouseOver")),on(this.domNode,"mouseout",lang.hitch(this,"onMouseOut"))),
this.inherited(arguments)},onMouseOver:function(){ManagerClass.manager().source||domClass.add(this.domNode,"over");
},onMouseOut:function(){domClass.remove(this.domNode,"over")},onContextMenu:function(e){}
});Panel.registeredTypes.gem=GemUI;var ComboUI=declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,StatefulUI,Evented],{
className:"propPanel_combobox propPanel_control",options:null,templateString:"<div class='${className}' id='${id}'></div>",
constructor:function(e){this.name=this.model.id,e.id=newId(this.name,"_wrapper"),
this.options=[],array.forEach(this.model.values,function(e,t){var i={label:e,value:e
};if(this.model.ui.labels){var o=this.model.ui.labels[t];i.label=Messages.getString(o,o);
}this.options.push(i)},this),null==this.model.value&&this.model.set("value",this.model.values[0]),
this.value=this.model.value},postCreate:function(){var e=this,t=this.options;if(array.forEach(t,function(i,o){
"undefined"==typeof e.value?t.selected=!0:e.value==i.value&&(i.selected=!0)},this),
this.isMobile()){var i=this.id+"_select",o=construct.create("select",{id:i});array.forEach(t,function(e,t){
var i;i="undefined"!=typeof e.selected&&1==e.selected?{label:e.label,value:e.value,
selected:!0}:{label:e.label,value:e.value},construct.create("option",i,o)},this),
this.domNode.appendChild(o),this.own(on(o,"onchange",function(){e.model.set("value",this.value),
e.value=this.value}))}else{domClass.add(this.domNode,this.className);var n=this.selNode=new Select({
options:t,onChange:function(){e.model.set("value",this.value),e.value=this.value}
});n.placeAt(this.domNode)}this.inherited(arguments)},isMobile:function(){return this.isMobileSafari()||void 0!==window.orientation;
},isMobileSafari:function(){return null!=navigator.userAgent.match(/(iPad|iPod|iPhone)/);
},destroy:function(){this.inherited(arguments),this.selNode&&(this.selNode.destroyRecursive(),
this.selNode=null),this._startupWidgets=null,this._supportingWidgets=null}});Panel.registeredTypes.combo=ComboUI;
var SliderUI=declare([HorizontalSlider,StatefulUI,Evented],{className:"propPanel_slider propPanel_control",
minimum:0,maximum:100,style:"width: 100%",intermediateChanges:!0,discreteValues:!0,
constructor:function(e){e.id=newId(this.model.id+"_slider"),this.value=this.model.value,
this.model.minimum&&(this.minimum=this.model.minimum),this.model.maximum&&(this.maximum=this.model.maximum),
this.discreteValues=this.maximum-this.minimum+1},onChange:function(){this.model.set("value",this.value);
}});Panel.registeredTypes.slider=SliderUI;var TextboxUI=declare([TextBox,StatefulUI,Evented],{
className:"propPanel_control",constructor:function(e){this.disabled=this.model.disabled,
this.value=this.model.value,e.id=null,this.inherited(arguments)},onChange:function(){
this.model.set("value",this.value)}});Panel.registeredTypes.textbox=TextboxUI;var CheckBoxUI=declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,StatefulUI,Evented],{
className:"propPanel_checkbox propPanel_control",value:!1,templateString:"<div class='${className}'><label for='${checkBoxId}'>${label}</label></div>",
constructor:function(e){e.id=null,this.checkBoxId=newId(this.model.id+"_checkbox"),
null!=this.model.value?this.value=this.model.value:this.model.set("value",this.value),
this.label=Messages.getString(this.model.ui.label,this.model.ui.label)},postCreate:function(){
var e=this.checkBoxId;this.checkbox=new CheckBox({id:e,name:e,checked:this.model.get("value"),
onChange:lang.hitch(this,function(e){this.model.set("value",e)})},e),this.checkbox.placeAt(this.domNode,"first");
},destroy:function(){this.inherited(arguments),this.checkbox&&(this.checkbox.destroyRecursive(),
this.checkbox=null),this._startupWidgets=this._supportingWidgets=null}});Panel.registeredTypes.checkbox=CheckBoxUI;
var ButtonUI=declare([_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,StatefulUI,Evented],{
templateString:"<div class='button-wrapper'><button id='${buttonId}' name='${buttonId}' data-dojo-type='dijit.form.Button' type='button' >${label}</button></div>",
constructor:function(e){this.buttonId=newId(this.model.id+"_button"),this.disabled=this.model.disabled,
e.id=null;var t=this.model.ui.label;this.label=Messages.getString(t,t),this.inherited(arguments);
},postCreate:function(){var e=registry.byId(this.buttonId);this.own(on(e,"click",lang.hitch(this,"onClick")));
},onClick:function(){this.model.set("clicked",!0)},destroy:function(){this.inherited(arguments),
this._startupWidgets=this._supportingWidgets=null}});return Panel.registeredTypes.button=ButtonUI,
Panel});