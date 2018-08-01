define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class"],function(e,t,o){
var s=function(e,t){void 0==e.style.cssText?e.setAttribute("style",t):e.style.cssText=t;
};return e("dojox.grid._RowManager",null,{constructor:function(e){this.grid=e},linesToEms:2,
overRow:-2,prepareStylingRow:function(e,t){return{index:e,node:t,odd:Boolean(1&e),
selected:!!this.grid.selection.isSelected(e),over:this.isOver(e),customStyles:"",
customClasses:"dojoxGridRow"}},styleRowNode:function(e,t){var o=this.prepareStylingRow(e,t);
this.grid.onStyleRow(o),this.applyStyles(o)},applyStyles:function(e){var t=e;t.node.className=t.customClasses;
var o=t.node.style.height;s(t.node,t.customStyles+";"+(t.node._style||"")),t.node.style.height=o;
},updateStyles:function(e){this.grid.updateRowStyles(e)},setOverRow:function(e){var o=this.overRow;
this.overRow=e,o!=this.overRow&&(t.isString(o)||o>=0)&&this.updateStyles(o),this.updateStyles(this.overRow);
},isOver:function(e){return this.overRow==e&&!o.contains(this.grid.domNode,"dojoxGridColumnResizing");
}})});