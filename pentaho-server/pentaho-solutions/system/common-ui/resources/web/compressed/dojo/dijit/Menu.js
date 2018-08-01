define(["require","dojo/_base/array","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/_base/window","dojo/window","./popup","./DropDownMenu","dojo/ready"],function(e,t,n,o,i,r,d,s,a,u,c,h,m,f,l,p){
return c("dijit-legacy-requires")&&p(0,function(){var t=["dijit/MenuItem","dijit/PopupMenuItem","dijit/CheckedMenuItem","dijit/MenuSeparator"];
e(t)}),n("dijit.Menu",l,{constructor:function(){this._bindings=[]},targetNodeIds:[],
selector:"",contextMenuForWindow:!1,leftClickToOpen:!1,refocus:!0,postCreate:function(){
this.contextMenuForWindow?this.bindDomNode(this.ownerDocumentBody):t.forEach(this.targetNodeIds,this.bindDomNode,this),
this.inherited(arguments)},_iframeContentWindow:function(e){return m.get(this._iframeContentDocument(e))||this._iframeContentDocument(e).__parent__||e.name&&document.frames[e.name]||null;
},_iframeContentDocument:function(e){return e.contentDocument||e.contentWindow&&e.contentWindow.document||e.name&&document.frames[e.name]&&document.frames[e.name].document||null;
},bindDomNode:function(e){e=o.byId(e,this.ownerDocument);var t;if("iframe"==e.tagName.toLowerCase()){
var n=e,r=this._iframeContentWindow(n);t=h.body(r.document)}else t=e==h.body(this.ownerDocument)?this.ownerDocument.documentElement:e;
var d={node:e,iframe:n};i.set(e,"_dijitMenu"+this.id,this._bindings.push(d));var c=a.hitch(this,function(e){
var t=this.selector,o=t?function(e){return u.selector(t,e)}:function(e){return e},i=this;
return[u(e,o(this.leftClickToOpen?"click":"contextmenu"),function(e){e.stopPropagation(),
e.preventDefault(),i._scheduleOpen(this,n,{x:e.pageX,y:e.pageY})}),u(e,o("keydown"),function(e){
e.shiftKey&&e.keyCode==s.F10&&(e.stopPropagation(),e.preventDefault(),i._scheduleOpen(this,n));
})]});d.connects=t?c(t):[],n&&(d.onloadHandler=a.hitch(this,function(){var e=this._iframeContentWindow(n),t=h.body(e.document);
d.connects=c(t)}),n.addEventListener?n.addEventListener("load",d.onloadHandler,!1):n.attachEvent("onload",d.onloadHandler));
},unBindDomNode:function(e){var t;try{t=o.byId(e,this.ownerDocument)}catch(n){return;
}var r="_dijitMenu"+this.id;if(t&&i.has(t,r)){for(var d,s=i.get(t,r)-1,a=this._bindings[s];d=a.connects.pop();)d.remove();
var u=a.iframe;u&&(u.removeEventListener?u.removeEventListener("load",a.onloadHandler,!1):u.detachEvent("onload",a.onloadHandler)),
i.remove(t,r),delete this._bindings[s]}},_scheduleOpen:function(e,t,n){this._openTimer||(this._openTimer=this.defer(function(){
delete this._openTimer,this._openMyself({target:e,iframe:t,coords:n})},1))},_openMyself:function(e){
function t(){v.refocus&&w&&w.focus(),f.close(v)}var n=e.target,i=e.iframe,s=e.coords,a=!s;
if(this.currentTarget=n,s){if(i){var u=r.position(i,!0),h=this._iframeContentWindow(i),m=r.docScroll(h.document),l=d.getComputedStyle(i),p=d.toPixelValue,_=(c("ie")&&c("quirks")?0:p(i,l.paddingLeft))+(c("ie")&&c("quirks")?p(i,l.borderLeftWidth):0),g=(c("ie")&&c("quirks")?0:p(i,l.paddingTop))+(c("ie")&&c("quirks")?p(i,l.borderTopWidth):0);
s.x+=u.x+_-m.x,s.y+=u.y+g-m.y}}else s=r.position(n,!0),s.x+=10,s.y+=10;var v=this,y=this._focusManager.get("prevNode"),j=this._focusManager.get("curNode"),w=!j||o.isDescendant(j,this.domNode)?y:j;
f.open({popup:this,x:s.x,y:s.y,onExecute:t,onCancel:t,orient:this.isLeftToRight()?"L":"R"
}),this.focus(),a||this.defer(function(){this._cleanUp(!0)}),this._onBlur=function(){
this.inherited("_onBlur",arguments),f.close(this)}},destroy:function(){t.forEach(this._bindings,function(e){
e&&this.unBindDomNode(e.node)},this),this.inherited(arguments)}})});