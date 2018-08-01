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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_Templated","dojo/on","dojo/query","dojox/html/entities","dojo/dom-class","dojo/_base/array","dojo/dom-construct","dojo/dnd/Source","dojo/dnd/Selector","dojo/_base/lang","dojo/dom","dojo/_base/event"],function(e,t,i,n,o,s,a,l,d,r,c,h,u,f){
return e("pentaho.common.FieldList",[t,i],{templateString:'<div data-dojo-attach-point="containerNode"></div>',
datasource:void 0,connectHandles:[],enableDragDrop:!0,singleSelect:!1,getLocaleString:void 0,
filters:[],categorize:!0,categoryClassMap:{},usedCategoryIds:{},sanitizeIdAndClassNames:function(e){
return null!=e?s.encode(e).replace(/ /g,"_"):""},generateUniqueClassName:function(e){
for(var t=function(){return Math.round(1e5*Math.random())},i="category"+t();this.usedCategoryIds[i];)i=t();
return this.usedCategoryIds[i]=!0,""+i},getCategoryClassName:function(e){var t=this.categoryClassMap[e];
return t||(t=this.generateUniqueClassName(e),this.categoryClassMap[e]=t),t},fieldContextMenuCallback:function(e){
if(this.fieldContextMenu){f.stop(e);var t=e.pageX,i=e.pageY;this.fieldContextMenu._scheduleOpen(e.target,null,{
x:t,y:i})}},doubleClickCallback:void 0,clickCallback:void 0,dndObj:void 0,selector:void 0,
expandCollapseCategoryCallback:void 0,textSelectionDisabler:function(e){"undefined"!=typeof e.onselectstart?this.connectHandles.push(n(e,"selectstart",function(){
return!1})):"undefined"!=typeof e.style.MozUserSelect?e.style.MozUserSelect="none":this.connectHandles.push(n(e,"mousedown",function(){
return!1})),e.style.cursor="default"},registerLocalizationLookup:function(e){this.getLocaleString=e,
this._localize()},registerTextSelectionDisabler:function(e){this.textSelectionDisabler=e;
},registerFieldContextMenuCallback:function(e){this.fieldContextMenuCallback=e},registerDoubleClickCallback:function(e){
this.doubleClickCallback=e},registerClickCallback:function(e){this.clickCallback=e;
},registerExpandCollapseCategoryCallback:function(e){this.expandCollapseCategoryCallback=e;
},_localize:function(){},_addItemClass:function(e,t){a.add(e,"dojoDndItem"+t),("Selected"==t||"Anchor"==t)&&(a.add(e,"pentaho-listitem-selected"),
a.remove(e,"pentaho-listitem-hover"))},_removeItemClass:function(e,t){a.remove(e,"dojoDndItem"+t),
("Selected"==t||"Anchor"==t)&&(a.remove(e,"pentaho-listitem-selected"),a.remove(e,"pentaho-listitem"),
a.remove(e,"pentaho-listitem-hover"))},unload:function(){this.dndObj&&this.dndObj.destroy(),
l.forEach(this.connectHandles,function(e){e.remove()}),this.connectHandles=[],d.empty(this.containerNode),
this.categoryClassMap={},this.usedCategoryIds={}},configureFor:function(e){if(this.unload(),
this.dndObj=new r(this.containerNode,{copyOnly:!0,accept:"",selfAccept:!1,singular:this.singleSelect,
creator:h.hitch(this,this._dndItemCreator)}),this.enableDragDrop||(this.selector=new c(this.containerNode,{
copyOnly:!0,accept:"",selfAccept:!1,singular:this.singleSelect,creator:h.hitch(this,this._dndItemCreator)
}),this.selector._addItemClass=this._addItemClass,this.selector._removeItemClass=this._removeItemClass),
this.dndObj._addItemClass=this._addItemClass,this.dndObj._removeItemClass=this._removeItemClass,
!this.categorize){var t=this.getFields(e,null,this.filters);return void this.addFields(t,this.containerNode,"");
}var i=[],o=this.getCategories(e);l.forEach(o,function(t,o){if(-1==l.indexOf(i,t.id)){
var s=this.getFields(e,t,this.filters);if(0!=s.length){var a=this.getCategoryClassName(t.id);
i.push(t.id);var r=d.create("div",{id:a},this.containerNode),c=d.create("div",{id:a+"-indicator",
"class":"categoryIndicator treenode-open",categoryId:a},r);this.connectHandles.push(n(c,"click",h.hitch(this,this.expandCollapseCategory)));
var u=d.create("span",{id:a+"-span","class":"treenode-branch-label",innerHTML:t.name,
categoryId:a},r);this.textSelectionDisabler(u),this.connectHandles.push(n(u,"dblclick",h.hitch(this,this.expandCollapseCategory)));
var f=d.create("div",{id:a+"-fields"},r);this.addFields(s,f,a)}}},this)},addFields:function(e,t,i){
var o=[];if(l.forEach(e,function(e){var t={categoryId:i,displayName:e.name,fieldId:e.id,
dataType:e.dataType,type:["treenode-leaf-label"],description:e.description};"true"!=e.hiddenForUser&&(o.push(t),
this.dndObj.setItem("field-"+t.fieldId,{data:t,type:"treenode-leaf-label",fieldId:t.fieldId
}))},this),this.enableDragDrop)this.dndObj.insertNodes(!1,o,!1,t);else for(var s=0;s<o.length;s++){
var a=this._dndItemCreator(o[s],"");t.appendChild(a.node),this.selector.setItem("field-"+o[s].fieldId,{
data:o[s],type:"treenode-leaf-label",fieldId:o[s].fieldId}),this.connectHandles.push(n(a.node,"mousedown",h.hitch(this,this.onMouseDown))),
this.connectHandles.push(n(a.node,"mouseup",h.hitch(this,this.onMouseUp)))}},onMouseDown:function(e){
this.selector.current=e.target,this.selector.onMouseDown(e)},onMouseUp:function(e){
this.selector.current=e.target,this.selector.onMouseUp(e)},_dndItemCreator:function(e,t){
var i={id:"field-"+this.sanitizeIdAndClassNames(e.fieldId),innerHTML:e.displayName,
fieldId:e.fieldId,"class":e.categoryId};e.description?i.title=e.description:i.title=e.fieldId;
var o=d.create("div",i);return"avatar"===t?a.add(o,"dragDropAvatar"):(a.add(o,"field"),
a.add(o,"treenode-leaf-label"),a.add(o,"pentaho-listitem"),this.connectHandles.push(n(o,"contextmenu",h.hitch(this,function(t){
this.updateSelectionForContextMenu(e.fieldId),this.fieldContextMenuCallback&&this.fieldContextMenuCallback(t);
}))),this.connectHandles.push(n(o,"dblclick",h.hitch(this,function(t){this.doubleClickCallback&&this.doubleClickCallback(e.fieldId);
}))),this.connectHandles.push(n(o,"mouseover",h.hitch(this,function(e){this.onFieldMouseOver(e);
}))),this.connectHandles.push(n(o,"mouseout",h.hitch(this,function(e){this.onFieldMouseOut(e);
}))),this.connectHandles.push(n(o,"click",h.hitch(this,function(e){this.onFieldClick(e);
})))),{node:o,data:e,type:["treenode-leaf-label"]}},onFieldClick:function(e){this.selector&&this.selector.onClick(e),
this.clickCallback&&this.clickCallback(e)},onFieldMouseOver:function(e){e.currentTarget!=this.dndObj.anchor&&(this.selector&&this.selector.onMouseOver(e),
a.contains(e.target,"pentaho-listitem-selected")||(a.add(e.target,"pentaho-listitem-hover"),
a.remove(e.target,"pentaho-listitem")))},onFieldMouseOut:function(e){e.currentTarget!=this.dndObj.anchor&&(this.selector&&this.selector.onMouseOut(e),
a.contains(e.target,"pentaho-listitem-selected")||(a.add(e.target,"pentaho-listitem"),
a.remove(e.target,"pentaho-listitem-hover")))},_elementComparator:function(e,t){return e.name<t.name?-1:e.name==t.name?0:1;
},getCategories:function(e){var t=[];return l.forEach(e.getAllElements(),function(e){
e.elementType==pentaho.pda.Column.ELEMENT_TYPES.CATEGORY&&null==t[e]&&t.push(e)}),
t},getFields:function(e,t,i){var n=[];e.getAllElements();return l.forEach(e.getAllElements(),function(e){
if(e.isQueryElement&&(null==t||e.parent==t)&&null==n[e])if(i&&i.length>0){for(var o=!0,s=0;s<i.length;s++){
for(var a=i[s].values,l=!1,d=0;d<a.length;d++)if(e[i[s].type]==a[d]){l=!0;break}if(o=o&&l,
!o)break}o&&n.push(e)}else n.push(e)}),n},expandCollapseCategory:function(e){var t=dojo.attr(e.target,"categoryId"),i=(u.byId(t+"-fields"),
u.byId(t+"-indicator")),n="true"!=dojo.attr(i,"collapsed");n?(a.add(i,"treenode-closed"),
a.remove(i,"treenode-open")):(a.add(i,"treenode-open"),a.remove(i,"treenode-closed")),
dojo.attr(i,"collapsed",""+n);var s=o("."+t,this.containerNode);n?s.addClass("hidden"):s.removeClass("hidden"),
this.expandCollapseCategoryCallback&&this.expandCollapseCategoryCallback(n)},updateFilterIndicators:function(e){
o(".treenode-leaf-label",this.containerNode).removeClass("fieldlist-filtered-field"),
e&&l.forEach(e,function(e){var t=u.byId("field-"+this.sanitizeIdAndClassNames(e.column));
null!=t&&a.add(t,"fieldlist-filtered-field")},this)},updateSelectionForContextMenu:function(e){
var t=!1;this.dndObj.forInSelectedItems(function(i,n){i.data.fieldId===e&&(t=!0)});
var i="field-"+e,n=u.byId(i);t||(this.clearSelection(),this.dndObj.anchor=n,this.dndObj._addItemClass(n,"Anchor"),
this.dndObj.selection[i]=1)},getSelectedItems:function(){if(this.dndObj&&this.enableDragDrop){
var e=[];return this.dndObj.forInSelectedItems(function(t){e.push(t.data)}),e}if(this.selector&&!this.enableDragDrop){
var e=[];return this.selector.forInSelectedItems(function(t){e.push(t.data)},this),
e}},clearSelection:function(){this.dndObj&&this.enableDragDrop&&this.dndObj.selectNone(),
this.selector&&this.selector.selectNone()},addFilter:function(e){this.filters.push(e);
},clearFilters:function(){this.filters=[]},setCategorized:function(e){this.categorize=e;
},setEnableDragDrop:function(e){this.enableDragDrop=e},setContextMenu:function(e){
this.fieldContextMenu=e}})});