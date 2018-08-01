define(["dojo/_base/declare","dojo/_base/array","dojo/dom-geometry","./_ExportWriter","../Exporter"],function(e,t,i,r,o){
return o.registerWriter("table","dojox.grid.enhanced.plugins.exporter.TableWriter"),
e("dojox.grid.enhanced.plugins.exporter.TableWriter",r,{constructor:function(e){this._viewTables=[],
this._tableAttrs=e||{}},_getTableAttrs:function(e){var t=this._tableAttrs[e]||"";return t&&" "!=t[0]&&(t=" "+t),
t},_getRowClass:function(e){return e.isHeader?" grid_header":[" grid_row grid_row_",e.rowIdx+1,e.rowIdx%2?" grid_even_row":" grid_odd_row"].join("");
},_getColumnClass:function(e){var t=e.cell.index+e.colOffset+1;return[" grid_column grid_column_",t,t%2?" grid_odd_column":" grid_even_column"].join("");
},beforeView:function(e){var t,r=e.viewIdx,o=this._viewTables[r],n=i.getMarginBox(e.view.contentNode).w;
if(!o){for(var s=0,a=0;r>a;++a)s+=this._viewTables[a]._width;o=this._viewTables[r]=['<div class="grid_view" style="position: absolute; top: 0; ',i.isBodyLtr()?"left":"right",":",s,'px;">'];
}if(o._width=n,e.isHeader)t=i.getContentBox(e.view.headerContentNode).h;else{var d=e.grid.getRowNode(e.rowIdx);
t=d?i.getContentBox(d).h:e.grid.scroller.averageRowHeight}return o.push('<table class="',this._getRowClass(e),'" style="table-layout:fixed; height:',t,"px; width:",n,'px;" ','border="0" cellspacing="0" cellpadding="0" ',this._getTableAttrs("table"),"><tbody ",this._getTableAttrs("tbody"),">"),
!0},afterView:function(e){this._viewTables[e.viewIdx].push("</tbody></table>")},beforeSubrow:function(e){
return this._viewTables[e.viewIdx].push("<tr",this._getTableAttrs("tr"),">"),!0},
afterSubrow:function(e){this._viewTables[e.viewIdx].push("</tr>")},handleCell:function(e){
var r=e.cell;if(!(r.hidden||t.indexOf(e.spCols,r.index)>=0)){var o=e.isHeader?"th":"td",n=[r.colSpan?' colspan="'+r.colSpan+'"':"",r.rowSpan?' rowspan="'+r.rowSpan+'"':"",' style="width: ',i.getContentBox(r.getHeaderNode()).w,'px;"',this._getTableAttrs(o),' class="',this._getColumnClass(e),'"'].join(""),s=this._viewTables[e.viewIdx];
s.push("<",o,n,">"),e.isHeader?s.push(r.name||r.field):s.push(this._getExportDataForCell(e.rowIdx,e.row,r,e.grid)),
s.push("</",o,">")}},afterContent:function(){t.forEach(this._viewTables,function(e){
e.push("</div>")})},toString:function(){var e=t.map(this._viewTables,function(e){
return e.join("")}).join("");return['<div style="position: relative;">',e,"</div>"].join("");
}})});