define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-geometry","dojo/dom-style","dojo/dom-attr","dojo/window","dojo/touch","dijit/form/_AutoCompleterMixin","dijit/popup","./_ComboBoxMenu","./TextBox","./sniff"],function(t,o,e,i,n,s,d,r,h,l,a,c,p,m){
return t.experimental("dojox.mobile.ComboBox"),o("dojox.mobile.ComboBox",[p,l],{dropDownClass:"dojox.mobile._ComboBoxMenu",
selectOnClick:!1,autoComplete:!1,dropDown:null,maxHeight:-1,dropDownPosition:["below","above"],
_throttleOpenClose:function(){this._throttleHandler&&this._throttleHandler.remove(),
this._throttleHandler=this.defer(function(){this._throttleHandler=null},500)},_onFocus:function(){
this.inherited(arguments),this._opened||this._throttleHandler||this._startSearchAll(),
m("windows-theme")&&this.domNode.blur()},onInput:function(t){this._onKey(t),this.inherited(arguments);
},_setListAttr:function(t){this._set("list",t)},closeDropDown:function(){this._throttleOpenClose(),
this.endHandler&&(this.disconnect(this.startHandler),this.disconnect(this.endHandler),
this.disconnect(this.moveHandler),clearInterval(this.repositionTimer),this.repositionTimer=this.endHandler=null),
this.inherited(arguments),d.remove(this.domNode,"aria-owns"),d.set(this.domNode,"aria-expanded","false"),
a.close(this.dropDown),this._opened=!1,m("windows-theme")&&this.domNode.disabled&&this.defer(function(){
this.domNode.removeAttribute("disabled")},300)},openDropDown:function(){var t=!this._opened,o=this.dropDown,l=o.domNode,c=this.domNode,p=this;
d.set(o.domNode,"role","listbox"),d.set(this.domNode,"aria-expanded","true"),o.id&&d.set(this.domNode,"aria-owns",o.id),
m("touch")&&i.global.scrollBy(0,n.position(c,!1).y),this._preparedNode||(this._preparedNode=!0,
l.style.width&&(this._explicitDDWidth=!0),l.style.height&&(this._explicitDDHeight=!0));
var u={display:"",overflow:"hidden",visibility:"hidden"};this._explicitDDWidth||(u.width=""),
this._explicitDDHeight||(u.height=""),s.set(l,u);var f=this.maxHeight;if(-1==f){var _=r.getBox(),w=n.position(c,!1);
f=Math.floor(Math.max(w.y,_.h-(w.y+w.h)))}a.moveOffScreen(o),o.startup&&!o._started&&o.startup();
var x=n.position(this.dropDown.containerNode,!1),b=f&&x.h>f;b&&(x.h=f),x.w=Math.max(x.w,c.offsetWidth),
n.setMarginBox(l,x);var D=a.open({parent:this,popup:o,around:c,orient:m("windows-theme")?["above"]:this.dropDownPosition,
onExecute:function(){p.closeDropDown()},onCancel:function(){p.closeDropDown()},onClose:function(){
p._opened=!1}});if(this._opened=!0,t){var v=!1,N=!1,H=!1,g=o.domNode.parentNode,y=n.position(c,!1),C=n.position(g,!1),j=C.x-y.x,M=C.y-y.y,B=-1,k=-1;
this.startHandler=this.connect(i.doc.documentElement,h.press,function(t){N=!0,H=!0,
v=!1,B=t.clientX,k=t.clientY}),this.moveHandler=this.connect(i.doc.documentElement,h.move,function(t){
N=!0,t.touches?H=v=!0:!H||t.clientX==B&&t.clientY==k||(v=!0)}),this.clickHandler=this.connect(o.domNode,"onclick",function(){
N=!0,H=v=!1}),this.endHandler=this.connect(i.doc.documentElement,"onmouseup",function(){
this.defer(function(){N=!0,!v&&H&&this.closeDropDown(),H=!1})}),this.repositionTimer=setInterval(e.hitch(this,function(){
if(N)return void(N=!1);var t=n.position(c,!1),o=n.position(g,!1),e=o.x-t.x,i=o.y-t.y;
(Math.abs(e-j)>=1||Math.abs(i-M)>=1)&&s.set(g,{left:parseInt(s.get(g,"left"))+j-e+"px",
top:parseInt(s.get(g,"top"))+M-i+"px"})}),50)}return m("windows-theme")&&this.domNode.setAttribute("disabled",!0),
D},postCreate:function(){this.inherited(arguments),this.connect(this.domNode,"onclick","_onClick"),
d.set(this.domNode,"role","combobox"),d.set(this.domNode,"aria-expanded","false");
},destroy:function(){this.repositionTimer&&clearInterval(this.repositionTimer),this.inherited(arguments);
},_onClick:function(t){this._throttleHandler||(this.opened?this.closeDropDown():this._startSearchAll());
}})});