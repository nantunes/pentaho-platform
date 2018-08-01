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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","dojo/dnd/Selector","dojox/html/entities","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom","dojo/_base/array"],function(e,t,i,s,n,o,l,a,d,c,r,h){
return e("pentaho.common.SelectList",[t,i],{templateString:'<div data-dojo-attach-point="containerNode" class="pentaho-listbox"></div>',
connectHandles:[],singleSelect:!1,getLocaleString:void 0,idMap:{},items:[],folderStyle:!0,
fieldContextMenuCallback:null,sanitizeIdAndClassNames:function(e){var t=l.encode(e);
return t?t.replace(/ /g,"_"):e},clear:function(){h.forEach(this.connectHandles,function(e){
e.remove()}),this.connectHandles=[],c.empty(this.containerNode)},init:function(){
this.fieldContextMenuCallback=this._fieldContextMenuCallback,this.selector=new o(this.containerNode,{
copyOnly:!0,accept:"",selfAccept:!1,singular:this.singleSelect,creator:a.hitch(this,this._dndItemCreator)
}),this.selector._addItemClass=this._addItemClass,this.selector._removeItemClass=this._removeItemClass;
},_fieldContextMenuCallback:function(e){if(this.fieldContextMenu){e.preventDefault();
var t=e.pageX,i=e.pageY;this.fieldContextMenu._scheduleOpen(e.target,null,{x:t,y:i
})}},doubleClickCallback:void 0,clickCallback:void 0,selector:void 0,textSelectionDisabler:function(e){
"undefined"!=typeof e.onselectstart?this.connectHandles.push(s(e,"selectstart",function(){
return!1})):"undefined"!=typeof e.style.MozUserSelect?e.style.MozUserSelect="none":this.connectHandles.push(s(e,"mousedown",function(){
return!1})),e.style.cursor="default"},registerLocalizationLookup:function(e){this.getLocaleString=e,
this._localize()},registerTextSelectionDisabler:function(e){this.textSelectionDisabler=e;
},registerFieldContextMenuCallback:function(e){this.fieldContextMenuCallback=e},registerDoubleClickCallback:function(e){
this.doubleClickCallback=e},registerClickCallback:function(e){this.clickCallback=e;
},_localize:function(){},_addItemClass:function(e,t){d.add(e,"dojoDndItem"+t),("Selected"==t||"Anchor"==t)&&(d.add(e,"pentaho-listitem-selected"),
d.remove(e,"pentaho-listitem-hover"))},_removeItemClass:function(e,t){d.remove(e,"dojoDndItem"+t),
("Selected"==t||"Anchor"==t)&&(d.remove(e,"pentaho-listitem-selected"),d.remove(e,"pentaho-listitem-hover"));
},addItems:function(e){this.items=e;for(var t=this.containerNode,i=0;i<e.length;i++){
var n=e[i];if(n.children){var o=this.sanitizeIdAndClassNames(n.id),l={id:o,"class":"pentaho-selectlist-container",
categoryId:o,collapsed:"true"},r=c.create("div",l,this.containerNode);this.folderStyle&&(d.add(r,"categoryIndicator"),
"true"==l.collapsed?d.add(r,"folder-closed"):d.add(r,"folder-open"));var h=c.create("span",{
id:o+"-span","class":"treenode-branch-label",innerHTML:n.label,categoryId:o},r);this.textSelectionDisabler(h),
this.textSelectionDisabler(r),this.connectHandles.push(s(r,"click",a.hitch(this,this.expandCollapseCategory))),
this.connectHandles.push(s(h,"dblclick",a.hitch(this,this.expandCollapseCategory))),
this.connectHandles.push(s(r,"contextmenu",a.hitch(this,function(e){this.updateSelectionForContextMenu(o),
this.fieldContextMenuCallback&&this.fieldContextMenuCallback(e)}))),this.connectHandles.push(s(h,"contextmenu",a.hitch(this,function(e){
this.updateSelectionForContextMenu(o),this.fieldContextMenuCallback&&this.fieldContextMenuCallback(e);
})));for(var u=c.create("div",{id:o+"-fields","class":"true"==l.collapsed?"hidden":""
},r),m=0;m<n.children.length;m++)this.addItem(n.children[m],u,!0)}else this.addItem(n,t,!1);
}},addItem:function(e,t,i){var n=this._dndItemCreator(e,"");i&&d.add(n.node,"pentaho-selectlist-item-indent"),
t.appendChild(n.node),this.idMap[this.sanitizeIdAndClassNames(e.id)]=e.id,this.selector.setItem(this.sanitizeIdAndClassNames(e.id),{
data:e,type:e.type,itemId:this.sanitizeIdAndClassNames(e.itemId)}),this.connectHandles.push(s(n.node,"mousedown",a.hitch(this,this.onMouseDown))),
this.connectHandles.push(s(n.node,"mouseup",a.hitch(this,this.onMouseUp)))},_dndItemCreator:function(e,t){
var i={id:this.sanitizeIdAndClassNames(e.id),innerHTML:e.label,itemId:this.sanitizeIdAndClassNames(e.id),
"class":e.type};i["class"]||(i["class"]="pentaho-selectlist-item"),e.title?i.title=this.sanitizeIdAndClassNames(e.title):e.label?i.title=this.sanitizeIdAndClassNames(e.label):i.title=i.id;
var n=c.create("div",i);return"avatar"===t?d.add(n,"dragDropAvatar"):(d.add(n,"field"),
d.add(n,"pentaho-listitem"),e.hasIcon?d.add(n,"pentaho-selectlist-item-icon"):d.add(n,"pentaho-selectlist-item"),
this.connectHandles.push(s(n,"contextmenu",a.hitch(this,function(t){this.updateSelectionForContextMenu(e.id),
this.fieldContextMenuCallback&&this.fieldContextMenuCallback(t)}))),this.connectHandles.push(s(n,"dblclick",a.hitch(this,function(t){
this.doubleClickCallback&&this.doubleClickCallback(e.id)}))),this.connectHandles.push(s(n,"mouseover",a.hitch(this,function(e){
this.onFieldMouseOver(e)}))),this.connectHandles.push(s(n,"mouseout",a.hitch(this,function(e){
this.onFieldMouseOut(e)}))),this.connectHandles.push(s(n,"click",a.hitch(this,function(e){
this.onFieldClick(e)})))),{node:n,data:e,type:["pentaho-listitem"]}},onMouseDown:function(e){
this.selector.current=e.target,this.selector.onMouseDown(e)},onMouseUp:function(e){
this.selector.current=e.target,this.selector.onMouseUp(e)},onFieldClick:function(e){
e.target.itemId=this.idMap[e.target.id],this.selector&&this.selector.onClick&&this.selector.onClick(e),
this.clickCallback&&this.clickCallback(e)},onFieldMouseOver:function(e){this.selector&&this.selector.onMouseOver(e),
d.contains(e.target,"pentaho-listitem-selected")||(d.add(e.target,"pentaho-listitem-hover"),
d.remove(e.target,"pentaho-listitem"))},onFieldMouseOut:function(e){this.selector&&this.selector.onMouseOut(e),
d.contains(e.target,"pentaho-listitem-selected")?(d.remove(e.target,"pentaho-listitem-hover"),
d.add(e.target,"pentaho-listitem-selected")):(d.add(e.target,"pentaho-listitem"),
d.remove(e.target,"pentaho-listitem-hover"))},_elementComparator:function(e,t){return e.name<t.name?-1:e.name==t.name?0:1;
},setSelectedIndex:function(e){if(this.clearSelection(),!(0>e||e>=this.items.length)){
var t=this.sanitizeIdAndClassNames(this.items[e].id),i=r.byId(t);this.selector._addItemClass(i,"Anchor"),
this.selector._addItemClass(i,"pentaho-listitem-selected"),this.selector.selection[t]=1;
}},updateSelectionForContextMenu:function(e){var t=!1;this.selector.forInSelectedItems(function(e,i){
e.data.id===i&&(t=!0)});var i=this.sanitizeIdAndClassNames(e),s=r.byId(i);t||(this.clearSelection(),
this.dndObj?(this.dndObj._addItemClass(s,"Anchor"),this.dndObj.selection[i]=1):(this.selector._addItemClass(s,"Anchor"),
this.selector.selection[i]=1))},getSelectedItems:function(){if(this.selector){var e=[];
return this.selector.forInSelectedItems(function(t){t&&e.push(t.data)},this),e}},
clearSelection:function(){this.selector&&this.selector.selectNone()},setContextMenu:function(e){
this.fieldContextMenu=e},expandCollapseCategory:function(e){var t=e.target.getAttribute("categoryId"),i=r.byId(t+"-fields"),s=r.byId(t),n="true"!=s.getAttribute("collapsed");
n?this.folderStyle?(d.add(s,"folder-closed"),d.remove(s,"folder-open")):(d.add(s,"treenode-closed"),
d.remove(s,"treenode-open")):this.folderStyle?(d.add(s,"folder-open"),d.remove(s,"folder-closed")):(d.add(s,"treenode-open"),
d.remove(s,"treenode-closed")),s.setAttribute("collapsed",""+n),n?d.add(i,"hidden"):d.remove(i,"hidden"),
this.expandCollapseCategoryCallback&&this.expandCollapseCategoryCallback(n)}})});