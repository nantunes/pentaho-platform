define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","../_Plugin","../../_RowSelector","../../EnhancedGrid","../../cells/_base"],function(e,t,r,i,o,s){
var n=r.getObject("dojox.grid.cells"),a=e("dojox.grid.enhanced.plugins.Exporter",i,{
name:"exporter",constructor:function(e,t){this.grid=e,this.formatter=t&&r.isObject(t)&&t.exportFormatter,
this._mixinGrid()},_mixinGrid:function(){var e=this.grid;e.exportTo=r.hitch(this,this.exportTo),
e.exportGrid=r.hitch(this,this.exportGrid),e.exportSelected=r.hitch(this,this.exportSelected),
e.setExportFormatter=r.hitch(this,this.setExportFormatter)},setExportFormatter:function(e){
this.formatter=e},exportGrid:function(e,t,i){if(r.isFunction(t)&&(i=t,t={}),r.isString(e)&&r.isFunction(i)){
t=t||{};var o=this.grid,s=this,n=this._getExportWriter(e,t.writerArgs),a=t.fetchArgs&&r.isObject(t.fetchArgs)?t.fetchArgs:{},h=a.onComplete;
if(o.store)a.onComplete=function(e,t){h&&h(e,t),i(s._goThroughGridData(e,n))},a.sort=a.sort||o.getSortProps(),
o._storeLayerFetch(a);else{for(var c=a.start||0,f=a.count||-1,u=[],d=c;d!=c+f&&d<o.rowCount;++d)u.push(o.getItem(d));
i(this._goThroughGridData(u,n))}}},exportSelected:function(e,t,i){if(!r.isString(e))return"";
var o=this._getExportWriter(e,t);return i(this._goThroughGridData(this.grid.selection.getSelected(),o));
},_buildRow:function(e,r){var i=this;t.forEach(e._views,function(o,s){e.view=o,e.viewIdx=s,
r.beforeView(e)&&(t.forEach(o.structure.cells,function(o,s){e.subrow=o,e.subrowIdx=s,
r.beforeSubrow(e)&&(t.forEach(o,function(t,o){e.isHeader&&i._isSpecialCol(t)&&e.spCols.push(t.index),
e.cell=t,e.cellIdx=o,r.handleCell(e)}),r.afterSubrow(e))}),r.afterView(e))})},_goThroughGridData:function(e,r){
var i=this.grid,s=t.filter(i.views.views,function(e){return!(e instanceof o)}),n={
grid:i,isHeader:!0,spCols:[],_views:s,colOffset:s.length<i.views.views.length?-1:0
};return r.beforeHeader(i)&&(this._buildRow(n,r),r.afterHeader()),n.isHeader=!1,r.beforeContent(e)&&(t.forEach(e,function(e,t){
n.row=e,n.rowIdx=t,r.beforeContentRow(n)&&(this._buildRow(n,r),r.afterContentRow(n));
},this),r.afterContent()),r.toString()},_isSpecialCol:function(e){return e.isRowSelector||e instanceof n.RowIndex;
},_getExportWriter:function(e,t){var i,o,s=a;if(s.writerNames){if(i=s.writerNames[e.toLowerCase()],
o=r.getObject(i)){var n=new o(t);return n.formatter=this.formatter,n}throw new Error('Please make sure class "'+i+'" is required.');
}throw new Error('The writer for "'+e+'" has not been registered.')}});return a.registerWriter=function(e,t){
a.writerNames=a.writerNames||{},a.writerNames[e]=t},s.registerPlugin(a),a});