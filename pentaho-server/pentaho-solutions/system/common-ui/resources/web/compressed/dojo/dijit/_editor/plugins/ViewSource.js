define(["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/i18n","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/window","../../focus","../_Plugin","../../form/ToggleButton","../..","../../registry","dojo/i18n!../nls/commands"],function(e,t,i,s,r,o,n,a,h,d,c,u,l,_,f,p,g,m){
var w=i("dijit._editor.plugins.ViewSource",f,{stripScripts:!0,stripComments:!0,stripIFrames:!0,
readOnly:!1,_fsPlugin:null,toggle:function(){u("webkit")&&(this._vsFocused=!0),this.button.set("checked",!this.button.get("checked"));
},_initButton:function(){var e=a.getLocalization("dijit._editor","commands"),t=this.editor;
this.button=new p({label:e.viewSource,ownerDocument:t.ownerDocument,dir:t.dir,lang:t.lang,
showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"ViewSource",
tabIndex:"-1",onChange:d.hitch(this,"_showSource")}),7==u("ie")&&(this._ieFixNode=r.create("div",{
style:{opacity:"0",zIndex:"-1000",position:"absolute",top:"-1000px"}},t.ownerDocumentBody)),
this.button.set("readOnly",!1)},setEditor:function(e){this.editor=e,this._initButton(),
this.editor.addKeyHandler(h.F12,!0,!0,d.hitch(this,function(e){this.button.focus(),
this.toggle(),e.stopPropagation(),e.preventDefault(),setTimeout(d.hitch(this,function(){
this.editor.focused&&this.editor.focus()}),100)}))},_showSource:function(i){var s,r=this.editor,o=r._plugins;
this._sourceShown=i;var a=this;try{if(this.sourceArea||this._createSourceView(),i){
r._sourceQueryCommandEnabled=r.queryCommandEnabled,r.queryCommandEnabled=function(e){
return"viewsource"===e.toLowerCase()},this.editor.onDisplayChanged(),s=r.get("value"),
s=this._filter(s),r.set("value",s),e.forEach(o,function(e){!e||e instanceof w||!e.isInstanceOf(f)||e.set("disabled",!0);
}),this._fsPlugin&&(this._fsPlugin._getAltViewNode=function(){return a.sourceArea;
}),this.sourceArea.value=s,this.sourceArea.style.height=r.iframe.style.height,this.sourceArea.style.width=r.iframe.style.width,
n.set(r.iframe,"display","none"),n.set(this.sourceArea,{display:"block"});var h=function(){
var e=l.getBox(r.ownerDocument);if("_prevW"in this&&"_prevH"in this){if(e.w===this._prevW&&e.h===this._prevH)return;
this._prevW=e.w,this._prevH=e.h}else this._prevW=e.w,this._prevH=e.h;this._resizer&&(clearTimeout(this._resizer),
delete this._resizer),this._resizer=setTimeout(d.hitch(this,function(){delete this._resizer,
this._resize()}),10)};this._resizeHandle=c(window,"resize",d.hitch(this,h)),setTimeout(d.hitch(this,this._resize),100),
this.editor.onNormalizedDisplayChanged(),this.editor.__oldGetValue=this.editor.getValue,
this.editor.getValue=d.hitch(this,function(){var e=this.sourceArea.value;return e=this._filter(e);
}),this._setListener=t.after(this.editor,"setValue",d.hitch(this,function(e){e=e||"",
e=this._filter(e),this.sourceArea.value=e}),!0)}else{if(!r._sourceQueryCommandEnabled)return;
this._setListener.remove(),delete this._setListener,this._resizeHandle.remove(),delete this._resizeHandle,
this.editor.__oldGetValue&&(this.editor.getValue=this.editor.__oldGetValue,delete this.editor.__oldGetValue),
r.queryCommandEnabled=r._sourceQueryCommandEnabled,this._readOnly||(s=this.sourceArea.value,
s=this._filter(s),r.beginEditing(),r.set("value",s),r.endEditing()),e.forEach(o,function(e){
e&&e.isInstanceOf(f)&&e.set("disabled",!1)}),n.set(this.sourceArea,"display","none"),
n.set(r.iframe,"display","block"),delete r._sourceQueryCommandEnabled,this.editor.onDisplayChanged();
}setTimeout(d.hitch(this,function(){var e=r.domNode.parentNode;if(e){var t=m.getEnclosingWidget(e);
t&&t.resize&&t.resize()}r.resize()}),300)}catch(u){console.log(u)}},updateState:function(){
this.button.set("disabled",this.get("disabled"))},_resize:function(){var e=this.editor,t=e.getHeaderHeight(),i=e.getFooterHeight(),s=o.position(e.domNode),r=o.getPadBorderExtents(e.iframe.parentNode),n=o.getMarginExtents(e.iframe.parentNode),a=o.getPadBorderExtents(e.domNode),h={
w:s.w-a.w,h:s.h-(t+a.h+i)};if(this._fsPlugin&&this._fsPlugin.isFullscreen){var d=l.getBox(e.ownerDocument);
h.w=d.w-a.w,h.h=d.h-(t+a.h+i)}if(u("ie")&&(h.h-=2),this._ieFixNode){var c=-this._ieFixNode.offsetTop/1e3;
h.w=Math.floor((h.w+.9)/c),h.h=Math.floor((h.h+.9)/c)}o.setMarginBox(this.sourceArea,{
w:h.w-(r.w+n.w),h:h.h-(r.h+n.h)}),o.setMarginBox(e.iframe.parentNode,{h:h.h})},_createSourceView:function(){
var e=this.editor,t=e._plugins;this.sourceArea=r.create("textarea"),this.readOnly&&(s.set(this.sourceArea,"readOnly",!0),
this._readOnly=!0),n.set(this.sourceArea,{padding:"0px",margin:"0px",borderWidth:"0px",
borderStyle:"none"}),s.set(this.sourceArea,"aria-label",this.editor.id),r.place(this.sourceArea,e.iframe,"before"),
u("ie")&&e.iframe.parentNode.lastChild!==e.iframe&&n.set(e.iframe.parentNode.lastChild,{
width:"0px",height:"0px",padding:"0px",margin:"0px",borderWidth:"0px",borderStyle:"none"
}),e._viewsource_oldFocus=e.focus;var i=this;e.focus=function(){if(i._sourceShown)i.setSourceAreaCaret();else try{
this._vsFocused?(delete this._vsFocused,_.focus(e.editNode)):e._viewsource_oldFocus();
}catch(t){console.log(t)}};var o,a;for(o=0;o<t.length;o++)if(a=t[o],a&&("dijit._editor.plugins.FullScreen"===a.declaredClass||a.declaredClass===g._scopeName+"._editor.plugins.FullScreen")){
this._fsPlugin=a;break}this._fsPlugin&&(this._fsPlugin._viewsource_getAltViewNode=this._fsPlugin._getAltViewNode,
this._fsPlugin._getAltViewNode=function(){return i._sourceShown?i.sourceArea:this._viewsource_getAltViewNode();
}),this.own(c(this.sourceArea,"keydown",d.hitch(this,function(t){this._sourceShown&&t.keyCode==h.F12&&t.ctrlKey&&t.shiftKey&&(this.button.focus(),
this.button.set("checked",!1),setTimeout(d.hitch(this,function(){e.focus()}),100),
t.stopPropagation(),t.preventDefault())})))},_stripScripts:function(e){return e&&(e=e.replace(/<\s*script[^>]*>((.|\s)*?)<\\?\/\s*script\s*>/gi,""),
e=e.replace(/<\s*script\b([^<>]|\s)*>?/gi,""),e=e.replace(/<[^>]*=(\s|)*[("|')]javascript:[^$1][(\s|.)]*[$1][^>]*>/gi,"")),
e},_stripComments:function(e){return e&&(e=e.replace(/<!--(.|\s){1,}?-->/g,"")),e;
},_stripIFrames:function(e){return e&&(e=e.replace(/<\s*iframe[^>]*>((.|\s)*?)<\\?\/\s*iframe\s*>/gi,"")),
e},_filter:function(e){return e&&(this.stripScripts&&(e=this._stripScripts(e)),this.stripComments&&(e=this._stripComments(e)),
this.stripIFrames&&(e=this._stripIFrames(e))),e},setSourceAreaCaret:function(){var e=this.sourceArea;
if(_.focus(e),this._sourceShown&&!this.readOnly)if(e.setSelectionRange)e.setSelectionRange(0,0);else if(this.sourceArea.createTextRange){
var t=e.createTextRange();t.collapse(!0),t.moveStart("character",-99999),t.moveStart("character",0),
t.moveEnd("character",0),t.select()}},destroy:function(){this._ieFixNode&&r.destroy(this._ieFixNode),
this._resizer&&(clearTimeout(this._resizer),delete this._resizer),this._resizeHandle&&(this._resizeHandle.remove(),
delete this._resizeHandle),this._setListener&&(this._setListener.remove(),delete this._setListener),
this.inherited(arguments)}});return f.registry.viewSource=f.registry.viewsource=function(e){
return new w({readOnly:"readOnly"in e?e.readOnly:!1,stripComments:"stripComments"in e?e.stripComments:!0,
stripScripts:"stripScripts"in e?e.stripScripts:!0,stripIFrames:"stripIFrames"in e?e.stripIFrames:!0
})},w});