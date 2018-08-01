define(["dojo/_base/kernel","../main","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom-geometry","./cells","./_RowSelector"],function(e,i,t,r,l,s){
return t("dojox.grid._Layout",null,{constructor:function(e){this.grid=e},cells:[],
structure:null,defaultWidth:"6em",moveColumn:function(e,i,t,l,s){for(var d,n=this.structure[e].cells[0],o=this.structure[i].cells[0],u=null,a=0,h=0,c=0;d=n[c];c++)if(d.index==t){
a=c;break}for(u=n.splice(a,1)[0],u.view=this.grid.views.views[i],c=0,d=null;d=o[c];c++)if(d.index==l){
h=c;break}s||(h+=1),o.splice(h,0,u);var f=this.grid.getCell(this.grid.getSortIndex());
f&&(f._currentlySorted=this.grid.getSortAsc()),this.cells=[],t=0;var p;for(c=0;p=this.structure[c];c++)for(var w,g=0;w=p.cells[g];g++)for(var v=0;d=w[v];v++){
if(d.index=t,this.cells.push(d),"_currentlySorted"in d){var _=t+1;_*=d._currentlySorted?1:-1,
this.grid.sortInfo=_,delete d._currentlySorted}t++}r.forEach(this.cells,function(e){
var i=e.markup[2].split(" "),t=parseInt(i[1].substring(5));t!=e.index&&(i[1]='idx="'+e.index+'"',
e.markup[2]=i.join(" "))}),this.grid.setupHeaderMenu()},setColumnVisibility:function(e,i){
var t=this.cells[e];if(t.hidden==i){t.hidden=!i;var r=t.view,l=r.viewWidth;return l&&"auto"!=l&&(r._togglingColumn=s.getMarginBox(t.getHeaderNode()).w||0),
r.update(),!0}return!1},addCellDef:function(e,t,r){var s=this,d=function(e){var i=0;
return e.colSpan>1?i=0:(i=e.width||s._defaultCellProps.width||s.defaultWidth,isNaN(i)||(i+="em")),
i},n={grid:this.grid,subrow:e,layoutIndex:t,index:this.cells.length};if(r&&r instanceof i.grid.cells._Base){
var o=l.clone(r);return n.unitWidth=d(o._props),o=l.mixin(o,this._defaultCellProps,r._props,n);
}var u=r.type||r.cellType||this._defaultCellProps.type||this._defaultCellProps.cellType||i.grid.cells.Cell;
return l.isString(u)&&(u=l.getObject(u)),n.unitWidth=d(r),new u(l.mixin({},this._defaultCellProps,r,n));
},addRowDef:function(e,i){for(var t,l,s=[],d=0,n=0,o=!0,u=0;t=i[u];u++)if(l=this.addCellDef(e,u,t),
s.push(l),this.cells.push(l),o&&l.relWidth)d+=l.relWidth;else if(l.width){var a=l.width;
"string"==typeof a&&"%"==a.slice(-1)?n+=window.parseInt(a,10):"auto"==a&&(o=!1)}return d&&o&&r.forEach(s,function(e){
e.relWidth&&(e.width=e.unitWidth=e.relWidth/d*(100-n)+"%")}),s},addRowsDef:function(e){
var i=[];if(l.isArray(e))if(l.isArray(e[0]))for(var t,r=0;e&&(t=e[r]);r++)i.push(this.addRowDef(r,t));else i.push(this.addRowDef(0,e));
return i},addViewDef:function(e){return this._defaultCellProps=e.defaultCell||{},
e.width&&"auto"==e.width&&delete e.width,l.mixin({},e,{cells:this.addRowsDef(e.rows||e.cells)
})},setStructure:function(e){this.fieldIndex=0,this.cells=[];var t=this.structure=[];
if(this.grid.rowSelector){var r={type:i._scopeName+".grid._RowSelector"};if(l.isString(this.grid.rowSelector)){
var s=this.grid.rowSelector;"false"==s?r=null:"true"!=s&&(r.width=s)}else this.grid.rowSelector||(r=null);
r&&t.push(this.addViewDef(r))}var d=function(e){return"name"in e||"field"in e||"get"in e;
},n=function(e){return l.isArray(e)&&(l.isArray(e[0])||d(e[0]))?!0:!1},o=function(e){
return null!==e&&l.isObject(e)&&("cells"in e||"rows"in e||"type"in e&&!d(e))};if(l.isArray(e)){
for(var u,a=!1,h=0;u=e[h];h++)if(o(u)){a=!0;break}if(a)for(h=0;u=e[h];h++)n(u)?t.push(this.addViewDef({
cells:u})):o(u)&&t.push(this.addViewDef(u));else t.push(this.addViewDef({cells:e}));
}else o(e)&&t.push(this.addViewDef(e));this.cellCount=this.cells.length,this.grid.setupHeaderMenu();
}})});