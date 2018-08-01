define(["dijit/registry","../main","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/event","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/query","dojo/parser","dojo/text!./resources/Expando.html","dijit/_Widget","dijit/_TemplatedMixin","./_View","./_Builder","./util"],function(e,t,o,i,d,r,s,n,a,l,h,p,x,g,u,c,_,f){
o("dojox.grid._Expando",[g,u],{open:!1,toggleClass:"",itemId:"",cellIdx:-1,view:null,
rowNode:null,rowIdx:-1,expandoCell:null,level:0,templateString:x,_toggleRows:function(t,o){
if(t&&this.rowNode){if(h("table.dojoxGridRowTableNeedsRowUpdate").length)return void(this._initialized&&this.view.grid.updateRow(this.rowIdx));
var i=this,d=this.view.grid;if(d.treeModel){var r=this._tableRow?s.get(this._tableRow,"dojoxTreeGridPath"):"";
r&&h('tr[dojoxTreeGridPath^="'+r+'/"]',this.rowNode).forEach(function(i){var d=h(".dojoxGridExpando",i)[0];
if(d&&d.parentNode&&d.parentNode.parentNode&&!n.contains(d.parentNode.parentNode,"dojoxGridNoChildren")){
var r=e.byNode(d);r&&r._toggleRows(t,r.open&&o)}i.style.display=o?"":"none"})}else h("tr."+t,this.rowNode).forEach(function(t){
if(n.contains(t,"dojoxGridExpandoRow")){var d=h(".dojoxGridExpando",t)[0];if(d){var r=e.byNode(d),s=r?r.toggleClass:d.getAttribute("toggleClass"),a=r?r.open:i.expandoCell.getOpenState(d.getAttribute("itemId"));
i._toggleRows(s,a&&o)}}t.style.display=o?"":"none"})}},setOpen:function(e){e&&n.contains(this.domNode,"dojoxGridExpandoLoading")&&(e=!1);
var t=this.view,o=t.grid,i=o.store,r=o.treeModel,a=this,l=this.rowIdx,h=o._by_idx[l];
if(h)if(r&&!this._loadedChildren)if(e){var p=o.getItem(s.get(this._tableRow,"dojoxTreeGridPath"));
p?(this.expandoInner.innerHTML="o",n.add(this.domNode,"dojoxGridExpandoLoading"),
r.getChildren(p,function(t){a._loadedChildren=!0,a._setOpen(e)})):this._setOpen(e);
}else this._setOpen(e);else if(!r&&i)if(e){var x=o._by_idx[this.rowIdx];x&&!i.isItemLoaded(x.item)?(this.expandoInner.innerHTML="o",
n.add(this.domNode,"dojoxGridExpandoLoading"),i.loadItem({item:x.item,onItem:d.hitch(this,function(t){
var d=i.getIdentity(t);o._by_idty[d]=o._by_idx[this.rowIdx]={idty:d,item:t},this._setOpen(e);
})})):this._setOpen(e)}else this._setOpen(e);else this._setOpen(e)},_setOpen:function(e){
if(e&&this._tableRow&&n.contains(this._tableRow,"dojoxGridNoChildren"))return void this._setOpen(!1);
if(this.expandoInner.innerHTML=e?"-":"+",n.remove(this.domNode,"dojoxGridExpandoLoading"),
n.toggle(this.domNode,"dojoxGridExpandoOpened",e),this._tableRow){n.toggle(this._tableRow,"dojoxGridRowCollapsed",!e);
var t=s.get(this._tableRow,"dojoxTreeGridBaseClasses"),o="";o=e?d.trim((" "+t+" ").replace(" dojoxGridRowCollapsed "," ")):(" "+t+" ").indexOf(" dojoxGridRowCollapsed ")<0?t+(t?" ":"")+"dojoxGridRowCollapsed":t,
s.set(this._tableRow,"dojoxTreeGridBaseClasses",o)}var i=this.open!==e;this.open=e,
this.expandoCell&&this.itemId&&(this.expandoCell.openStates[this.itemId]=e);var r=this.view,a=r.grid;
this.toggleClass&&i&&(this._tableRow&&this._tableRow.style.display||this._toggleRows(this.toggleClass,e)),
r&&this._initialized&&this.rowIdx>=0&&(a.rowHeightChanged(this.rowIdx),a.postresize(),
r.hasVScrollbar(!0)),this._initialized=!0},onToggle:function(e){this.setOpen(!this.open),
r.stop(e)},setRowNode:function(e,t,o){if(this.cellIdx<0||!this.itemId)return!1;this._initialized=!1,
this.view=o,this.rowNode=t,this.rowIdx=e,this.expandoCell=o.structure.cells[0][this.cellIdx];
var i=this.domNode;return i&&i.parentNode&&i.parentNode.parentNode&&(this._tableRow=i.parentNode.parentNode),
this.open=this.expandoCell.getOpenState(this.itemId),o.grid.treeModel&&(a.set(this.domNode,"marginLeft",18*this.level+"px"),
this.domNode.parentNode&&a.set(this.domNode.parentNode,"backgroundPosition",18*this.level+3+"px")),
this.setOpen(this.open),!0}});var w=o("dojox.grid._TreeContentBuilder",_._ContentBuilder,{
generateHtml:function(e,o){var d=this.getTableArray(),r=this.view,s=r.structure.cells[0],n=this.grid.getItem(o),a=this.grid,l=this.grid.store;
f.fire(this.view,"onBeforeRow",[o,[s]]);var h=function(e,o,n,p,x,g){if(!g)return void(-1==d[0].indexOf("dojoxGridRowTableNeedsRowUpdate")&&(d[0]=d[0].replace("dojoxGridRowTable","dojoxGridRowTable dojoxGridRowTableNeedsRowUpdate")));
var u=d.length;p=p||[];var c=p.join("|"),_=p[p.length-1],f=_+(n?" dojoxGridSummaryRow":""),w="";
a.treeModel&&o&&!a.treeModel.mayHaveChildren(o)&&(f+=" dojoxGridNoChildren"),d.push('<tr style="'+w+'" class="'+f+'" dojoxTreeGridPath="'+x.join("/")+'" dojoxTreeGridBaseClasses="'+f+'">');
for(var j,m=e+1,v=null,N=0;j=s[N];N++){var y=j.markup,b=j.customClasses=[],C=j.customStyles=[];
y[5]=j.formatAtLevel(x,o,e,n,_,b),y[1]=b.join(" "),y[3]=C.join(";"),d.push.apply(d,y),
!v&&j.level===m&&j.parentCell&&(v=j.parentCell)}if(d.push("</tr>"),o&&l&&l.isItem(o)){
var G=l.getIdentity(o);"undefined"==typeof a._by_idty_paths[G]&&(a._by_idty_paths[G]=x.join("/"));
}var R,I,T,E,O=x.concat([]);if(a.treeModel&&o)a.treeModel.mayHaveChildren(o)&&(R=r.structure.cells[0][a.expandoCell||0],
I=R.getOpenState(o)&&g,T=new t.grid.TreePath(x.join("/"),a),E=T.children(!0)||[],
i.forEach(E,function(e,t){var o=c.split("|");o.push(o[o.length-1]+"-"+t),O.push(t),
h(m,e,!1,o,O,I),O.pop()}));else if(o&&v&&!n)if(R=r.structure.cells[0][v.level],I=R.getOpenState(o)&&g,
l.hasAttribute(o,v.field)){var P=c.split("|");P.pop(),T=new t.grid.TreePath(x.join("/"),a),
E=T.children(!0)||[],E.length?(d[u]='<tr class="'+P.join(" ")+' dojoxGridExpandoRow" dojoxTreeGridPath="'+x.join("/")+'">',
i.forEach(E,function(e,t){var o=c.split("|");o.push(o[o.length-1]+"-"+t),O.push(t),
h(m,e,!1,o,O,I),O.pop()}),O.push(E.length),h(e,o,!0,p,O,I)):d[u]='<tr class="'+_+' dojoxGridNoChildren" dojoxTreeGridPath="'+x.join("/")+'">';
}else l.isItemLoaded(o)?d[u]='<tr class="'+_+' dojoxGridNoChildren" dojoxTreeGridPath="'+x.join("/")+'">':d[0]=d[0].replace("dojoxGridRowTable","dojoxGridRowTable dojoxGridRowTableNeedsRowUpdate");else o&&!n&&p.length>1&&(d[u]='<tr class="'+p[p.length-2]+'" dojoxTreeGridPath="'+x.join("/")+'">');
};return h(0,n,!1,["dojoxGridRowToggle-"+o],[o],!0),d.push("</table>"),d.join("");
},findTarget:function(e,t){for(var o=e;o&&o!=this.domNode&&(!o.tagName||"tr"!=o.tagName.toLowerCase());)o=o.parentNode;
return o!=this.domNode?o:null},getCellNode:function(e,t){var o=h("td[idx='"+t+"']",e)[0];
return o&&o.parentNode&&!n.contains(o.parentNode,"dojoxGridSummaryRow")?o:void 0},
decorateEvent:function(e){return e.rowNode=this.findRowTarget(e.target),e.rowNode?(e.rowIndex=s.get(e.rowNode,"dojoxTreeGridPath"),
this.baseDecorateEvent(e),e.cell=this.grid.getCell(e.cellIndex),!0):!1}});return o("dojox.grid._TreeView",c,{
_contentBuilderClass:w,_onDndDrop:function(e,t,o){this.grid&&this.grid.aggregator&&this.grid.aggregator.clearSubtotalCache(),
this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.connect(this.grid,"_cleanupExpandoCache","_cleanupExpandoCache");
},_cleanupExpandoCache:function(e,o,d){if(-1!=e)if(i.forEach(this.grid.layout.cells,function(e){
"undefined"!=typeof e.openStates&&o in e.openStates&&delete e.openStates[o]}),"string"==typeof e&&e.indexOf("/")>-1){
for(var r=new t.grid.TreePath(e,this.grid),s=r.parent();s;)r=s,s=r.parent();var n=r.item();
if(!n)return;var a=this.grid.store.getIdentity(n);if("undefined"!=typeof this._expandos[a]){
for(var l in this._expandos[a]){var h=this._expandos[a][l];h&&h.destroy(),delete this._expandos[a][l];
}delete this._expandos[a]}}else{for(var l in this._expandos)if("undefined"!=typeof this._expandos[l])for(var p in this._expandos[l]){
var h=this._expandos[l][p];h&&h.destroy()}this._expandos={}}},postMixInProperties:function(){
this.inherited(arguments),this._expandos={}},onBeforeRow:function(e,t){var o=this.grid;
if(o._by_idx&&o._by_idx[e]&&o._by_idx[e].idty){var i=o._by_idx[e].idty;this._expandos[i]=this._expandos[i]||{};
}this.inherited(arguments)},onAfterRow:function(e,t,o){i.forEach(h("span.dojoxGridExpando",o),function(t){
if(t&&t.parentNode){var i,d,r=t.getAttribute("toggleClass"),s=this.grid;s._by_idx&&s._by_idx[e]&&s._by_idx[e].idty&&(i=s._by_idx[e].idty,
d=this._expandos[i][r]),d?(l.place(d.domNode,t,"replace"),d.itemId=t.getAttribute("itemId"),
d.cellIdx=parseInt(t.getAttribute("cellIdx"),10),isNaN(d.cellIdx)&&(d.cellIdx=-1)):i&&(d=p.parse(t.parentNode)[0],
this._expandos[i][r]=d),d&&!d.setRowNode(e,o,this)&&d.domNode.parentNode.removeChild(d.domNode);
}},this);var d=!1,r=this;h("tr[dojoxTreeGridPath]",o).forEach(function(e){n.toggle(e,"dojoxGridSubRowAlt",d),
s.set(e,"dojoxTreeGridBaseClasses",e.className),d=!d,r.grid.rows.styleRowNode(s.get(e,"dojoxTreeGridPath"),e);
}),this.inherited(arguments)},updateRowStyles:function(e){var t=h("tr[dojoxTreeGridPath='"+e+"']",this.domNode);
t.length&&this.styleRowNode(e,t[0])},getCellNode:function(e,t){var o=h("tr[dojoxTreeGridPath='"+e+"']",this.domNode)[0];
return o?this.content.getCellNode(o,t):void 0},destroy:function(){this._cleanupExpandoCache(),
this.inherited(arguments)}})});