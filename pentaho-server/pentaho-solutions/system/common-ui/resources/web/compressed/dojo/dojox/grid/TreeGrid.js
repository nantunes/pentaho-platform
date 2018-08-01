define(["dojo/_base/kernel","../main","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/event","dojo/dom-attr","dojo/dom-class","dojo/query","dojo/keys","dijit/tree/ForestStoreModel","./DataGrid","./_Layout","./_FocusManager","./_RowManager","./_EditManager","./TreeSelection","./cells/tree","./_TreeView"],function(e,t,i,r,s,n,l,o,a,h,d,u,g,c,f,p,_,m){
e.experimental("dojox.grid.TreeGrid");var v=i("dojox.grid._TreeAggregator",null,{
cells:[],grid:null,childFields:[],constructor:function(e){this.cells=e.cells||[],
this.childFields=e.childFields||[],this.grid=e.grid,this.store=this.grid.store},_cacheValue:function(e,t,i){
return e[t]=i,i},clearSubtotalCache:function(){this.store&&delete this.store._cachedAggregates;
},cnt:function(e,t,i){var s=0,n=this.store,l=this.childFields;if(l[t]){var o=n.getValues(i,l[t]);
e.index<=t+1?s=o.length:r.forEach(o,function(i){s+=this.getForCell(e,t+1,i,"cnt");
},this)}else s=1;return s},sum:function(e,t,i){var s=0,n=this.store,l=this.childFields;
return l[t]?r.forEach(n.getValues(i,l[t]),function(i){s+=this.getForCell(e,t+1,i,"sum");
},this):s+=n.getValue(i,e.field),s},value:function(e,t,i){},getForCell:function(e,t,i,r){
var s=this.store;if(!s||!i||!s.isItem(i))return"";var n=s._cachedAggregates=s._cachedAggregates||{},l=s.getIdentity(i),o=n[l]=n[l]||[];
e.getOpenState||(e=this.grid.getCell(e.layoutIndex+t+1));var a=e.index,h=o[a]=o[a]||{};
r=r||(e.parentCell?e.parentCell.aggregate:"sum")||"sum";var d=e.field;d==s.getLabelAttributes()[0]&&(r="cnt");
var u=h[r]=h[r]||[];if(void 0!=u[t])return u[t];var g=(e.parentCell&&e.parentCell.itemAggregates?e.parentCell.itemAggregates[e.idxInParent]:"")||"";
return g&&s.hasAttribute(i,g)?this._cacheValue(u,t,s.getValue(i,g)):g?this._cacheValue(u,t,0):this._cacheValue(u,t,this[r](e,t,i));
}}),w=i("dojox.grid._TreeLayout",g,{_isCollapsable:!1,_getInternalStructure:function(e){
var t=this.grid,i=e,n=i[0].cells[0],l={type:"dojox.grid._TreeView",cells:[[]]},o=[],a=0,h=function(e,t){
var i=e.children,n=function(i,r){var n,l={};for(n in i)l[n]=i[n];return l=s.mixin(l,{
level:t,idxInParent:t>0?r:-1,parentCell:t>0?e:null})},l=[];return r.forEach(i,function(e,i){
if("children"in e){o.push(e.field);var r=l[l.length-1];r.isCollapsable=!0,e.level=t,
l=l.concat(h(e,t+1))}else l.push(n(e,i))}),a=Math.max(a,t),l},d={children:n,itemAggregates:[]
};return l.cells[0]=h(d,0),t.aggregator=new v({cells:l.cells[0],grid:t,childFields:o
}),t.scroller&&t.defaultOpen&&(t.scroller.defaultRowHeight=t.scroller._origDefaultRowHeight*(2*a+1)),
[l]},setStructure:function(e){var t=e,i=this.grid;if(i&&i.treeModel&&!r.every(t,function(e){
return"cells"in e})&&(t=arguments[0]=[{cells:[t]}]),1==t.length&&1==t[0].cells.length)if(i&&i.treeModel)t[0].type="dojox.grid._TreeView",
this._isCollapsable=!0,t[0].cells[0][this.grid.treeModel?this.grid.expandoCell:0].isCollapsable=!0;else{
var s=r.filter(t[0].cells[0],function(e){return"children"in e});1===s.length&&(this._isCollapsable=!0);
}!this._isCollapsable||i&&i.treeModel||(arguments[0]=this._getInternalStructure(t)),
this.inherited(arguments)},addCellDef:function(e,t,i){var r=this.inherited(arguments);
return s.mixin(r,m)}}),y=i("dojox.grid.TreePath",null,{level:0,_str:"",_arr:null,
grid:null,store:null,cell:null,item:null,constructor:function(e,t){s.isString(e)?(this._str=e,
this._arr=r.map(e.split("/"),function(e){return parseInt(e,10)})):s.isArray(e)?(this._str=e.join("/"),
this._arr=e.slice(0)):"number"==typeof e?(this._str=String(e),this._arr=[e]):(this._str=e._str,
this._arr=e._arr.slice(0)),this.level=this._arr.length-1,this.grid=t,this.store=this.grid.store,
t.treeModel?this.cell=t.layout.cells[t.expandoCell]:this.cell=t.layout.cells[this.level];
},item:function(){return this._item||(this._item=this.grid.getItem(this._arr)),this._item;
},compare:function(e){if(s.isString(e)||s.isArray(e)){if(this._str==e)return 0;if(e.join&&this._str==e.join("/"))return 0;
e=new y(e,this.grid)}else if(e instanceof y&&this._str==e._str)return 0;for(var t=0,i=this._arr.length<e._arr.length?this._arr.length:e._arr.length;i>t;t++){
if(this._arr[t]<e._arr[t])return-1;if(this._arr[t]>e._arr[t])return 1}return this._arr.length<e._arr.length?-1:this._arr.length>e._arr.length?1:0;
},isOpen:function(){return this.cell.openStates&&this.cell.getOpenState(this.item());
},previous:function(){var e=this._arr.slice(0);if("0"==this._str)return null;var t=e.length-1;
if(0===e[t])return e.pop(),new y(e,this.grid);e[t]--;var i=new y(e,this.grid);return i.lastChild(!0);
},next:function(){var e=this._arr.slice(0);if(this.isOpen())e.push(0);else{e[e.length-1]++;
for(var t=this.level;t>=0;t--){var i=this.grid.getItem(e.slice(0,t+1));if(t>0)i||(e.pop(),
e[t-1]++);else if(!i)return null}}return new y(e,this.grid)},children:function(e){
if(!this.isOpen()&&!e)return null;var t=[],i=this.grid.treeModel;if(i){var s=this.item(),n=i.store;
if(!i.mayHaveChildren(s))return null;r.forEach(i.childrenAttrs,function(e){t=t.concat(n.getValues(s,e));
})}else if(t=this.store.getValues(this.item(),this.grid.layout.cells[this.cell.level+1].parentCell.field),
t.length>1&&this.grid.sortChildItems){var l=this.grid.getSortProps();if(l&&l.length){
var o=l[0].attribute,a=this.grid;if(o&&t[0][o]){var h=!!l[0].descending;t=t.slice(0),
t.sort(function(e,t){return a._childItemSorter(e,t,o,h)})}}}return t},childPaths:function(){
var e=this.children();return e?r.map(e,function(e,t){return new y(this._str+"/"+t,this.grid);
},this):[]},parent:function(){return 0===this.level?null:new y(this._arr.slice(0,this.level),this.grid);
},lastChild:function(e){var t=this.children();if(!t||!t.length)return this;var i=new y(this._str+"/"+String(t.length-1),this.grid);
return e?i.lastChild(!0):i},toString:function(){return this._str}}),C=i("dojox.grid._TreeFocusManager",c,{
setFocusCell:function(e,t){e&&e.getNode(t)&&this.inherited(arguments)},isLastFocusCell:function(){
if(this.cell&&this.cell.index==this.grid.layout.cellCount-1){var e=new y(this.grid.rowCount-1,this.grid);
return e=e.lastChild(!0),this.rowIndex==e._str}return!1},next:function(){if(this.cell){
var e=(this.rowIndex,this.cell.index+1),t=this.grid.layout.cellCount-1,i=new y(this.rowIndex,this.grid);
if(e>t){var r=i.next();r?(e=0,i=r):e--}if(this.grid.edit.isEditing()){var s=this.grid.getCell(e);
if(!this.isLastFocusCell()&&!s.editable)return this._focusifyCellNode(!1),this.cell=s,
this.rowIndex=i._str,void this.next()}this.setFocusIndex(i._str,e)}},previous:function(){
if(this.cell){var e=this.rowIndex||0,t=(this.cell.index||0)-1,i=new y(e,this.grid);
if(0>t){var r=i.previous();r?(t=this.grid.layout.cellCount-1,i=r):t=0}if(this.grid.edit.isEditing()){
var s=this.grid.getCell(t);if(!this.isFirstFocusCell()&&!s.editable)return this._focusifyCellNode(!1),
this.cell=s,this.rowIndex=i._str,void this.previous()}this.setFocusIndex(i._str,t);
}},move:function(e,t){if(this.isNavHeader())return void this.inherited(arguments);
if(this.cell){var i=this.grid.scroller,r=this.rowIndex,s=(this.grid.rowCount-1,new y(this.rowIndex,this.grid));
if(e){var n;e>0?(s=s.next(),n=s._arr[0],n>i.getLastPageRow(i.page)&&this.grid.setScrollTop(this.grid.scrollTop+i.findScrollTop(n)-i.findScrollTop(r))):0>e&&(s=s.previous(),
n=s._arr[0],n<=i.getPageRow(i.page)&&this.grid.setScrollTop(this.grid.scrollTop-i.findScrollTop(r)-i.findScrollTop(n)));
}for(var l=this.grid.layout.cellCount-1,o=this.cell.index,a=Math.min(l,Math.max(0,o+t)),h=this.grid.getCell(a),d=0>t?-1:1;a>=0&&l>a&&h&&h.hidden===!0;)a+=d,
h=this.grid.getCell(a);h&&h.hidden!==!0||(a=o),e&&this.grid.updateRow(r),this.setFocusIndex(s._str,a);
}}}),x=i("dojox.grid.TreeGrid",u,{defaultOpen:!0,sortChildItems:!1,openAtLevels:[],
treeModel:null,expandoCell:0,aggregator:null,_layoutClass:w,createSelection:function(){
this.selection=new _(this)},_childItemSorter:function(e,t,i,r){var s=this.store.getValue(e,i),n=this.store.getValue(t,i);
return s!=n?n>s==r?1:-1:0},_onNew:function(e,t){if(t&&t.item){var i=this.getItemIndex(t.item);
"string"==typeof i?this.updateRow(i.split("/")[0]):i>-1&&this.updateRow(i)}else this.inherited(arguments);
},_onSet:function(e,t,i,r){this._checkUpdateStatus(),this.aggregator&&this.aggregator.clearSubtotalCache();
var s=this.getItemIndex(e);"string"==typeof s?this.updateRow(s.split("/")[0]):s>-1&&this.updateRow(s);
},_onDelete:function(e){this._cleanupExpandoCache(this._getItemIndex(e,!0),this.store.getIdentity(e),e),
this.inherited(arguments)},_clearData:function(){this.inherited(arguments),this._by_idty_paths={};
},_cleanupExpandoCache:function(e,t,i){},_addItem:function(e,t,i,s){!s&&this.model&&-1==r.indexOf(this.model.root.children,e)&&(this.model.root.children[t]=e),
this.inherited(arguments)},getItem:function(e){var t=s.isArray(e);if(s.isString(e)&&e.indexOf("/")&&(e=e.split("/"),
t=!0),t&&1==e.length&&(e=e[0],t=!1),!t)return u.prototype.getItem.call(this,e);var i,r,n,l=this.store,o=u.prototype.getItem.call(this,e[0]);
if(this.aggregator){if(i=this.aggregator.childFields||[])for(r=0;r<e.length-1&&o;r++)o=i[r]?(l.getValues(o,i[r])||[])[e[r+1]]:null;
}else if(this.treeModel&&(i=this.treeModel.childrenAttrs||[],i&&o))for(r=1,il=e.length;r<il&&o;r++)for(n=0,
jl=i.length;n<jl&&!(o=i[n]?(l.getValues(o,i[n])||[])[e[r]]:null);n++);return o||null;
},_getItemIndex:function(e,t){if(!t&&!this.store.isItem(e))return-1;var i=this.inherited(arguments);
if(-1==i){var r=this.store.getIdentity(e);return this._by_idty_paths[r]||-1}return i;
},postMixInProperties:function(){!this.treeModel||"defaultOpen"in this.params||(this.defaultOpen=!1);
var e=this.defaultOpen;this.openAtLevels=r.map(this.openAtLevels,function(t){if("string"==typeof t)switch(t.toLowerCase()){
case"true":return!0;case"false":return!1;default:var i=parseInt(t,10);return isNaN(i)?e:i;
}return t}),this._by_idty_paths={},this.inherited(arguments)},postCreate:function(){
this.inherited(arguments),this.treeModel&&this._setModel(this.treeModel)},setModel:function(e){
this._setModel(e),this._refresh(!0)},_setModel:function(e){if(!(!e||d&&e instanceof d))throw new Error("dojox.grid.TreeGrid: treeModel must be an instance of dijit.tree.ForestStoreModel");
this.treeModel=e,o.toggle(this.domNode,"dojoxGridTreeModel",this.treeModel?!0:!1),
this._setQuery(e?e.query:null),this._setStore(e?e.store:null)},createScroller:function(){
this.inherited(arguments),this.scroller._origDefaultRowHeight=this.scroller.defaultRowHeight;
},createManagers:function(){this.rows=new f(this),this.focus=new C(this),this.edit=new p(this);
},_setStore:function(e){this.inherited(arguments),this.treeModel&&!this.treeModel.root.children&&(this.treeModel.root.children=[]),
this.aggregator&&(this.aggregator.store=e)},getDefaultOpenState:function(e,t){var i,r=this.store;
if(this.treeModel)return this.defaultOpen;if(!(e&&r&&r.isItem(t)&&(i=this.aggregator.childFields[e.level])))return this.defaultOpen;
if(this.openAtLevels.length>e.level){var s=this.openAtLevels[e.level];if("boolean"==typeof s)return s;
if("number"==typeof s)return r.getValues(t,i).length<=s}return this.defaultOpen},
onStyleRow:function(e){if(!this.layout._isCollapsable)return void this.inherited(arguments);
var t=l.get(e.node,"dojoxTreeGridBaseClasses");t&&(e.customClasses=t);var i=e,r=i.node.tagName.toLowerCase();
i.customClasses+=(i.odd?" dojoxGridRowOdd":"")+(i.selected&&"tr"==r?" dojoxGridRowSelected":"")+(i.over&&"tr"==r?" dojoxGridRowOver":""),
this.focus.styleRow(i),this.edit.styleRow(i)},styleRowNode:function(e,t){t&&("div"==t.tagName.toLowerCase()&&this.aggregator&&a("tr[dojoxTreeGridPath]",t).forEach(function(e){
this.rows.styleRowNode(l.get(e,"dojoxTreeGridPath"),e)},this),this.rows.styleRowNode(e,t));
},onCanSelect:function(e){var t=a("tr[dojoxTreeGridPath='"+e+"']",this.domNode);return t.length&&o.contains(t[0],"dojoxGridSummaryRow")?!1:this.inherited(arguments);
},onKeyDown:function(e){if(!e.altKey&&!e.metaKey)switch(e.keyCode){case h.UP_ARROW:
this.edit.isEditing()||"0"==this.focus.rowIndex||(n.stop(e),this.focus.move(-1,0));
break;case h.DOWN_ARROW:var t=new y(this.focus.rowIndex,this),i=new y(this.rowCount-1,this);
i=i.lastChild(!0),this.edit.isEditing()||t.toString()==i.toString()||(n.stop(e),this.focus.move(1,0));
break;default:this.inherited(arguments)}},canEdit:function(e,t){var i=e.getNode(t);
return i&&this._canEdit},doApplyCellEdit:function(e,t,i){var r=this.getItem(t),s=this.store.getValue(r,i);
if("number"==typeof s)e=isNaN(e)?e:parseFloat(e);else if("boolean"==typeof s)e="true"==e?!0:"false"==e?!1:e;else if(s instanceof Date){
var n=new Date(e);e=isNaN(n.getTime())?e:n}this.store.setValue(r,i,e),this.onApplyCellEdit(e,t,i);
}});return x.markupFactory=function(e,i,n,o){var h=function(e){var t=l.get(e,"width")||"auto";
return"auto"!=t&&"em"!=t.slice(-2)&&"%"!=t.slice(-1)&&(t=parseInt(t,10)+"px"),t},d=function(e){
var i;if("table"==e.nodeName.toLowerCase()&&0===a("> colgroup",e).length&&1==(i=a("> thead > tr",e)).length){
i[0];return a("> th",i[0]).map(function(e){var i={type:s.trim(l.get(e,"cellType")||""),
field:s.trim(l.get(e,"field")||"")};i.type&&(i.type=s.getObject(i.type));var n=a("> table",e)[0];
return n?(i.name="",i.children=d(n),l.has(e,"itemAggregates")?i.itemAggregates=r.map(l.get(e,"itemAggregates").split(","),function(e){
return s.trim(e)}):i.itemAggregates=[],l.has(e,"aggregate")&&(i.aggregate=l.get(e,"aggregate")),
i.type=i.type||t.grid.cells.SubtableCell):(i.name=s.trim(l.get(e,"name")||e.innerHTML),
l.has(e,"width")&&(i.width=h(e)),l.has(e,"relWidth")&&(i.relWidth=window.parseInt(l.get(e,"relWidth"),10)),
l.has(e,"hidden")&&(i.hidden="true"==l.get(e,"hidden")),i.field=i.field||i.name,u.cell_markupFactory(o,e,i),
i.type=i.type||t.grid.cells.Cell),i.type&&i.type.markupFactory&&i.type.markupFactory(e,i),
i})}return[]};if(!e.structure){var g=d(i);g.length&&(e.structure=[{__span:1/0,cells:[g]
}])}return u.markupFactory(e,i,n,o)},x});