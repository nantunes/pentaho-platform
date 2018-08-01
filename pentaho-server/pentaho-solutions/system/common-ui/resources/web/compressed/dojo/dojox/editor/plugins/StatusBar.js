define(["dojo","dijit","dojox","dijit/_Widget","dijit/_TemplatedMixin","dijit/_editor/_Plugin","dojo/_base/connect","dojo/_base/declare","dojox/layout/ResizeHandle"],function(t,e,s,i,r,a){
t.experimental("dojox.editor.plugins.StatusBar");var n=t.declare("dojox.editor.plugins._StatusBar",[i,r],{
templateString:'<div class="dojoxEditorStatusBar"><table><tbody><tr><td class="dojoxEditorStatusBarText" tabindex="-1" aria-role="presentation" aria-live="aggressive"><span dojoAttachPoint="barContent">&nbsp;</span></td><td><span dojoAttachPoint="handle"></span></td></tr></tbody><table></div>',
_getValueAttr:function(){return this.barContent.innerHTML},_setValueAttr:function(e){
e?(e=t.trim(e),e||(e="&nbsp;")):e="&nbsp;",this.barContent.innerHTML=e}}),o=t.declare("dojox.editor.plugins.StatusBar",a,{
statusBar:null,resizer:!0,setEditor:function(e){this.editor=e,this.statusBar=new n,
this.resizer?(this.resizeHandle=new s.layout.ResizeHandle({targetId:this.editor,activeResize:!0
},this.statusBar.handle),this.resizeHandle.startup()):t.style(this.statusBar.handle.parentNode,"display","none");
var i=null;e.footer.lastChild&&(i="after"),t.place(this.statusBar.domNode,e.footer.lastChild||e.footer,i),
this.statusBar.startup(),this.editor.statusBar=this,this._msgListener=t.subscribe(this.editor.id+"_statusBar",t.hitch(this,this._setValueAttr));
},_getValueAttr:function(){return this.statusBar.get("value")},_setValueAttr:function(t){
this.statusBar.set("value",t)},set:function(e,s){if(e){var i="_set"+e.charAt(0).toUpperCase()+e.substring(1,e.length)+"Attr";
t.isFunction(this[i])?this[i](s):this[e]=s}},get:function(e){if(e){var s="_get"+e.charAt(0).toUpperCase()+e.substring(1,e.length)+"Attr",i=this[s];
return t.isFunction(i)?this[s]():this[e]}return null},destroy:function(){this.statusBar&&(this.statusBar.destroy(),
delete this.statusBar),this.resizeHandle&&(this.resizeHandle.destroy(),delete this.resizeHandle),
this._msgListener&&(t.unsubscribe(this._msgListener),delete this._msgListener),delete this.editor.statusBar;
}});return o._StatusBar=n,t.subscribe(e._scopeName+".Editor.getPlugin",null,function(t){
if(!t.plugin){var e=t.args.name.toLowerCase();if("statusbar"===e){var s="resizer"in t.args?t.args.resizer:!0;
t.plugin=new o({resizer:s})}}}),o});