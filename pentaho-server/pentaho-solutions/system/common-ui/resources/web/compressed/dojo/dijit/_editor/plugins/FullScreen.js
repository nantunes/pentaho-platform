define(["dojo/aspect","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/i18n","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/_base/window","dojo/window","../../focus","../_Plugin","../../form/ToggleButton","../../registry","dojo/i18n!../nls/commands"],function(e,t,i,o,r,s,n,d,h,l,a,u,c,_,f,g){
var w=t("dijit._editor.plugins.FullScreen",_,{zIndex:500,_origState:null,_origiFrameState:null,
_resizeHandle:null,isFullscreen:!1,toggle:function(){this.button.set("checked",!this.button.get("checked"));
},_initButton:function(){var e=s.getLocalization("dijit._editor","commands"),t=this.editor;
this.button=new f({label:e.fullScreen,ownerDocument:t.ownerDocument,dir:t.dir,lang:t.lang,
showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"FullScreen",
tabIndex:"-1",onChange:d.hitch(this,"_setFullScreen")})},setEditor:function(e){this.editor=e,
this._initButton(),this.editor.addKeyHandler(n.F11,!0,!0,d.hitch(this,function(e){
return this.toggle(),e.stopPropagation(),e.preventDefault(),this.editor.defer("focus",250),
!0})),this.own(h(this.editor.domNode,"keydown",d.hitch(this,"_containFocus")))},_containFocus:function(e){
if(this.isFullscreen){var t=this.editor;if(!t.isTabIndent&&t._fullscreen_oldOnKeyDown&&e.keyCode===n.TAB){
var i=c.curNode,o=this._getAltViewNode();i==t.iframe||o&&i===o?setTimeout(d.hitch(this,function(){
t.toolbar.focus()}),10):o&&"none"===r.get(t.iframe,"display")?setTimeout(d.hitch(this,function(){
c.focus(o)}),10):setTimeout(d.hitch(this,function(){t.focus()}),10),event.stopPropagation(),
event.preventDefault()}else t._fullscreen_oldOnKeyDown&&t._fullscreen_oldOnKeyDown(e);
}},_resizeEditor:function(){var e=u.getBox(this.editor.ownerDocument);o.setMarginBox(this.editor.domNode,{
w:e.w,h:e.h});var t=this.editor.getHeaderHeight(),i=this.editor.getFooterHeight(),r=o.getPadBorderExtents(this.editor.domNode),s=o.getPadBorderExtents(this.editor.iframe.parentNode),n=o.getMarginExtents(this.editor.iframe.parentNode),d=e.h-(t+r.h+i);
o.setMarginBox(this.editor.iframe.parentNode,{h:d,w:e.w}),o.setMarginBox(this.editor.iframe,{
h:d-(s.h+n.h)})},_getAltViewNode:function(){},_setFullScreen:function(t){var s=this.editor,n=s.ownerDocumentBody,a=s.domNode.parentNode,c=u.getBox(s.ownerDocument);
if(this.isFullscreen=t,t){for(;a&&a!==n;)i.add(a,"dijitForceStatic"),a=a.parentNode;
this._editorResizeHolder=this.editor.resize,s.resize=function(){},s._fullscreen_oldOnKeyDown=s.onKeyDown,
s.onKeyDown=d.hitch(this,this._containFocus),this._origState={},this._origiFrameState={};
var _=s.domNode,f=_&&_.style||{};this._origState={width:f.width||"",height:f.height||"",
top:r.get(_,"top")||"",left:r.get(_,"left")||"",position:r.get(_,"position")||"static",
marginBox:o.getMarginBox(s.domNode)};var w=s.iframe,m=w&&w.style||{},z=r.get(s.iframe,"backgroundColor");
if(this._origiFrameState={backgroundColor:z||"transparent",width:m.width||"auto",
height:m.height||"auto",zIndex:m.zIndex||""},r.set(s.domNode,{position:"absolute",
top:"0px",left:"0px",zIndex:this.zIndex,width:c.w+"px",height:c.h+"px"}),r.set(s.iframe,{
height:"100%",width:"100%",zIndex:this.zIndex,backgroundColor:"transparent"!==z&&"rgba(0, 0, 0, 0)"!==z?z:"white"
}),r.set(s.iframe.parentNode,{height:"95%",width:"100%"}),n.style&&n.style.overflow?this._oldOverflow=r.get(n,"overflow"):this._oldOverflow="",
l("ie")&&!l("quirks")){if(n.parentNode&&n.parentNode.style&&n.parentNode.style.overflow)this._oldBodyParentOverflow=n.parentNode.style.overflow;else try{
this._oldBodyParentOverflow=r.get(n.parentNode,"overflow")}catch(v){this._oldBodyParentOverflow="scroll";
}r.set(n.parentNode,"overflow","hidden")}r.set(n,"overflow","hidden");var p=function(){
var e=u.getBox(s.ownerDocument);if("_prevW"in this&&"_prevH"in this){if(e.w===this._prevW&&e.h===this._prevH)return;
}else this._prevW=e.w,this._prevH=e.h;this._resizer&&(clearTimeout(this._resizer),
delete this._resizer),this._resizer=setTimeout(d.hitch(this,function(){delete this._resizer,
this._resizeEditor()}),10)};this._resizeHandle=h(window,"resize",d.hitch(this,p)),
this._resizeHandle2=e.after(s,"onResize",d.hitch(this,function(){this._resizer&&(clearTimeout(this._resizer),
delete this._resizer),this._resizer=setTimeout(d.hitch(this,function(){delete this._resizer,
this._resizeEditor()}),10)})),this._resizeEditor();var y=this.editor.toolbar.domNode;
setTimeout(function(){u.scrollIntoView(y)},250)}else{for(this._resizeHandle&&(this._resizeHandle.remove(),
this._resizeHandle=null),this._resizeHandle2&&(this._resizeHandle2.remove(),this._resizeHandle2=null),
this._rst&&(clearTimeout(this._rst),this._rst=null);a&&a!==n;)i.remove(a,"dijitForceStatic"),
a=a.parentNode;if(this._editorResizeHolder&&(this.editor.resize=this._editorResizeHolder),
!this._origState&&!this._origiFrameState)return;s._fullscreen_oldOnKeyDown&&(s.onKeyDown=s._fullscreen_oldOnKeyDown,
delete s._fullscreen_oldOnKeyDown);var x=this;setTimeout(function(){var e=x._origState.marginBox,t=x._origState.height;
l("ie")&&!l("quirks")&&(n.parentNode.style.overflow=x._oldBodyParentOverflow,delete x._oldBodyParentOverflow),
r.set(n,"overflow",x._oldOverflow),delete x._oldOverflow,r.set(s.domNode,x._origState),
r.set(s.iframe.parentNode,{height:"",width:""}),r.set(s.iframe,x._origiFrameState),
delete x._origState,delete x._origiFrameState;var i=g.getEnclosingWidget(s.domNode.parentNode);
i&&i.resize?i.resize():(!t||t.indexOf("%")<0)&&setTimeout(d.hitch(this,function(){
s.resize({h:e.h})}),0),u.scrollIntoView(x.editor.toolbar.domNode)},100)}},updateState:function(){
this.button.set("disabled",this.get("disabled"))},destroy:function(){this._resizeHandle&&(this._resizeHandle.remove(),
this._resizeHandle=null),this._resizeHandle2&&(this._resizeHandle2.remove(),this._resizeHandle2=null),
this._resizer&&(clearTimeout(this._resizer),this._resizer=null),this.inherited(arguments);
}});return _.registry.fullScreen=_.registry.fullscreen=function(e){return new w({
zIndex:"zIndex"in e?e.zIndex:500})},w});