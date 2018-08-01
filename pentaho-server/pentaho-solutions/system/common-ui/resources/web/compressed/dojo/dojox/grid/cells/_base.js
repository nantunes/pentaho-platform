define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/event","dojo/_base/connect","dojo/_base/array","dojo/_base/sniff","dojo/dom","dojo/dom-attr","dojo/dom-construct","dijit/_Widget","../util"],function(t,e,i,o,r,a,n,s,d,l,u,c){
var h=e("dojox.grid._DeferredTextWidget",u,{deferred:null,_destroyOnRemove:!0,postCreate:function(){
this.deferred&&this.deferred.addBoth(i.hitch(this,function(t){this.domNode&&(this.domNode.innerHTML=t);
}))}}),f=function(t){try{c.fire(t,"focus"),c.fire(t,"select")}catch(e){}},g=function(){
setTimeout(i.hitch.apply(t,arguments),0)},p=e("dojox.grid.cells._Base",null,{styles:"",
classes:"",editable:!1,alwaysEditing:!1,formatter:null,defaultValue:"...",value:null,
hidden:!1,noresize:!1,draggable:!0,_valueProp:"value",_formatPending:!1,constructor:function(t){
this._props=t||{},i.mixin(this,t),void 0===this.draggable&&(this.draggable=!0)},_defaultFormat:function(t,e){
var i=this.grid.formatterScope||this,o=this.formatter;o&&i&&"string"==typeof o&&(o=this.formatter=i[o]);
var r=t!=this.defaultValue&&o?o.apply(i,e):t;return"undefined"==typeof r?this.defaultValue:(r&&r.addBoth&&(r=new h({
deferred:r},l.create("span",{innerHTML:this.defaultValue}))),r&&r.declaredClass&&r.startup?"<div class='dojoxGridStubNode' linkWidget='"+r.id+"' cellIdx='"+this.index+"'>"+this.defaultValue+"</div>":r);
},format:function(t,e){var i=this.grid.edit.info,o=this.get?this.get(t,e):this.value||this.defaultValue;
return o=o&&o.replace&&this.grid.escapeHTMLInData?o.replace(/&/g,"&amp;").replace(/</g,"&lt;"):o,
this.editable&&(this.alwaysEditing||i.rowIndex==t&&i.cell==this)?this.formatEditing(i.value?i.value:o,t):this._defaultFormat(o,[o,t,this]);
},formatEditing:function(t,e){},getNode:function(t){return this.view.getCellNode(t,this.index);
},getHeaderNode:function(){return this.view.getHeaderCellNode(this.index)},getEditNode:function(t){
return(this.getNode(t)||0).firstChild||0},canResize:function(){var t=this.unitWidth;
return t&&"auto"!==t},isFlex:function(){var t=this.unitWidth;return t&&i.isString(t)&&("auto"==t||"%"==t.slice(-1));
},applyEdit:function(t,e){this.getNode(e)&&this.grid.edit.applyCellEdit(t,this,e);
},cancelEdit:function(t){this.grid.doCancelEdit(t)},_onEditBlur:function(t){this.grid.edit.isEditCell(t,this.index)&&this.grid.edit.apply();
},registerOnBlur:function(t,e){this.commitOnBlur&&r.connect(t,"onblur",function(t){
setTimeout(i.hitch(this,"_onEditBlur",e),250)})},needFormatNode:function(t,e){this._formatPending=!0,
g(this,"_formatNode",t,e)},cancelFormatNode:function(){this._formatPending=!1},_formatNode:function(t,e){
this._formatPending&&(this._formatPending=!1,n("ie")||s.setSelectable(this.grid.domNode,!0),
this.formatNode(this.getEditNode(e),t,e))},formatNode:function(t,e,i){n("ie")?g(this,"focus",i,t):this.focus(i,t);
},dispatchEvent:function(t,e){return t in this?this[t](e):void 0},getValue:function(t){
return this.getEditNode(t)[this._valueProp]},setValue:function(t,e){var i=this.getEditNode(t);
i&&(i[this._valueProp]=e)},focus:function(t,e){f(e||this.getEditNode(t))},save:function(t){
this.value=this.value||this.getValue(t)},restore:function(t){this.setValue(t,this.value);
},_finish:function(t){s.setSelectable(this.grid.domNode,!1),this.cancelFormatNode();
},apply:function(t){this.applyEdit(this.getValue(t),t),this._finish(t)},cancel:function(t){
this.cancelEdit(t),this._finish(t)}});p.markupFactory=function(t,e){var o=i.trim(d.get(t,"formatter")||"");
o&&(e.formatter=i.getObject(o)||o);var r=i.trim(d.get(t,"get")||"");r&&(e.get=i.getObject(r));
var a=function(e,o,r){var a=i.trim(d.get(t,e)||"");a&&(o[r||e]=!("false"==a.toLowerCase()));
};a("sortDesc",e),a("editable",e),a("alwaysEditing",e),a("noresize",e),a("draggable",e);
var n=i.trim(d.get(t,"loadingText")||d.get(t,"defaultValue")||"");n&&(e.defaultValue=n);
var s=function(e,o,r){var a=i.trim(d.get(t,e)||"")||void 0;a&&(o[r||e]=a)};s("styles",e),
s("headerStyles",e),s("cellStyles",e),s("classes",e),s("headerClasses",e),s("cellClasses",e);
};var m=p.Cell=e("dojox.grid.cells.Cell",p,{constructor:function(){this.keyFilter=this.keyFilter;
},keyFilter:null,formatEditing:function(t,e){return this.needFormatNode(t,e),'<input class="dojoxGridInput" type="text" value="'+t+'">';
},formatNode:function(t,e,i){this.inherited(arguments),this.registerOnBlur(t,i)},
doKey:function(t){if(this.keyFilter){var e=String.fromCharCode(t.charCode);-1==e.search(this.keyFilter)&&o.stop(t);
}},_finish:function(t){this.inherited(arguments);var e=this.getEditNode(t);try{c.fire(e,"blur");
}catch(i){}}});m.markupFactory=function(t,e){p.markupFactory(t,e);var o=i.trim(d.get(t,"keyFilter")||"");
o&&(e.keyFilter=new RegExp(o))};var v=p.RowIndex=e("dojox.grid.cells.RowIndex",m,{
name:"Row",postscript:function(){this.editable=!1},get:function(t){return t+1}});v.markupFactory=function(t,e){
m.markupFactory(t,e)};var y=p.Select=e("dojox.grid.cells.Select",m,{options:null,
values:null,returnIndex:-1,constructor:function(t){this.values=this.values||this.options;
},formatEditing:function(t,e){this.needFormatNode(t,e);for(var i,o,r=['<select class="dojoxGridSelect">'],a=0;void 0!==(i=this.options[a])&&void 0!==(o=this.values[a]);a++)o=o.replace?o.replace(/&/g,"&amp;").replace(/</g,"&lt;"):o,
i=i.replace?i.replace(/&/g,"&amp;").replace(/</g,"&lt;"):i,r.push("<option",t==o?" selected":"",' value="'+o+'"',">",i,"</option>");
return r.push("</select>"),r.join("")},_defaultFormat:function(t,e){var i=this.inherited(arguments);
if(!this.formatter&&this.values&&this.options){var o=a.indexOf(this.values,i);o>=0&&(i=this.options[o]);
}return i},getValue:function(t){var e=this.getEditNode(t);if(e){var i=e.selectedIndex,o=e.options[i];
return this.returnIndex>-1?i:o.value||o.innerHTML}}});y.markupFactory=function(t,e){
m.markupFactory(t,e);var o=i.trim(d.get(t,"options")||"");if(o){var r=o.split(",");
r[0]!=o&&(e.options=r)}var a=i.trim(d.get(t,"values")||"");if(a){var n=a.split(",");
n[0]!=a&&(e.values=n)}};var N=p.AlwaysEdit=e("dojox.grid.cells.AlwaysEdit",m,{alwaysEditing:!0,
_formatNode:function(t,e){this.formatNode(this.getEditNode(e),t,e)},applyStaticValue:function(t){
var e=this.grid.edit;e.applyCellEdit(this.getValue(t),this,t),e.start(this,t,!0)}
});N.markupFactory=function(t,e){m.markupFactory(t,e)};var _=p.Bool=e("dojox.grid.cells.Bool",N,{
_valueProp:"checked",formatEditing:function(t,e){return'<input class="dojoxGridInput" type="checkbox"'+(t?' checked="checked"':"")+' style="width: auto" />';
},doclick:function(t){"INPUT"==t.target.tagName&&this.applyStaticValue(t.rowIndex);
}});return _.markupFactory=function(t,e){N.markupFactory(t,e)},p});