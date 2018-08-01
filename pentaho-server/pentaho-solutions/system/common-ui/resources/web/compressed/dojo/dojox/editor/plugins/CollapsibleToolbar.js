define(["dojo","dijit","dojox","dijit/_Widget","dijit/_TemplatedMixin","dijit/_editor/_Plugin","dijit/form/Button","dijit/focus","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/CollapsibleToolbar"],function(t,e,o,i,s,l){
var a=t.declare("dojox.editor.plugins._CollapsibleToolbarButton",[i,s],{templateString:"<div tabindex='0' role='button' title='${title}' class='${buttonClass}' dojoAttachEvent='ondijitclick: onClick'><span class='${textClass}'>${text}</span></div>",
title:"",buttonClass:"",text:"",textClass:"",onClick:function(t){}}),d=t.declare("dojox.editor.plugins.CollapsibleToolbar",l,{
_myWidgets:null,setEditor:function(t){this.editor=t,this._constructContainer()},_constructContainer:function(){
var e=t.i18n.getLocalization("dojox.editor.plugins","CollapsibleToolbar");this._myWidgets=[];
var o=t.create("table",{style:{width:"100%"},tabindex:-1,"class":"dojoxCollapsibleToolbarContainer"
}),i=t.create("tbody",{tabindex:-1},o),s=t.create("tr",{tabindex:-1},i),l=t.create("td",{
"class":"dojoxCollapsibleToolbarControl",tabindex:-1},s),d=t.create("td",{"class":"dojoxCollapsibleToolbarControl",
tabindex:-1},s),n=t.create("td",{style:{width:"100%"},tabindex:-1},s),r=t.create("span",{
style:{width:"100%"},tabindex:-1},n),c=new a({buttonClass:"dojoxCollapsibleToolbarCollapse",
title:e.collapse,text:"-",textClass:"dojoxCollapsibleToolbarCollapseText"});t.place(c.domNode,l);
var h=new a({buttonClass:"dojoxCollapsibleToolbarExpand",title:e.expand,text:"+",
textClass:"dojoxCollapsibleToolbarExpandText"});t.place(h.domNode,d),this._myWidgets.push(c),
this._myWidgets.push(h),t.style(d,"display","none"),t.place(o,this.editor.toolbar.domNode,"after"),
t.place(this.editor.toolbar.domNode,r),this.openTd=l,this.closeTd=d,this.menu=r,this.connect(c,"onClick","_onClose"),
this.connect(h,"onClick","_onOpen")},_onClose:function(o){o&&t.stopEvent(o);var i=t.marginBox(this.editor.domNode);
t.style(this.openTd,"display","none"),t.style(this.closeTd,"display",""),t.style(this.menu,"display","none"),
this.editor.resize({h:i.h}),t.isIE&&(this.editor.header.className=this.editor.header.className,
this.editor.footer.className=this.editor.footer.className),e.focus(this.closeTd.firstChild);
},_onOpen:function(o){o&&t.stopEvent(o);var i=t.marginBox(this.editor.domNode);t.style(this.closeTd,"display","none"),
t.style(this.openTd,"display",""),t.style(this.menu,"display",""),this.editor.resize({
h:i.h}),t.isIE&&(this.editor.header.className=this.editor.header.className,this.editor.footer.className=this.editor.footer.className),
e.focus(this.openTd.firstChild)},destroy:function(){if(this.inherited(arguments),
this._myWidgets){for(;this._myWidgets.length;)this._myWidgets.pop().destroy();delete this._myWidgets;
}}});return d._CollapsibleToolbarButton=a,t.subscribe(e._scopeName+".Editor.getPlugin",null,function(t){
if(!t.plugin){var e=t.args.name.toLowerCase();"collapsibletoolbar"===e&&(t.plugin=new d({}));
}}),d});