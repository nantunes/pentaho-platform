define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dijit/form/_SearchMixin","dojox/mobile/TextBox","dojo/dom-class","dojo/keys","dojo/touch","dojo/on","./sniff"],function(e,t,o,n,s,i,a,r,h,c){
return e("dojox.mobile.SearchBox",[s,n],{baseClass:"mblTextBox mblSearchBox",type:"search",
placeHolder:"",incremental:!0,_setIncrementalAttr:function(e){this.incremental=e},
_onInput:function(e){e.charOrCode==a.ENTER?e.charOrCode=229:this.incremental||(e.charOrCode=0),
this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.textbox.removeAttribute("incremental"),
this.textbox.hasAttribute("results")||this.textbox.setAttribute("results","0"),c("ios")<5&&(i.add(this.domNode,"iphone4"),
this.connect(this.textbox,"onfocus",function(){""!==this.textbox.value&&this.defer(function(){
""===this.textbox.value&&this._onInput({charOrCode:a.ENTER})})})),this.connect(this.textbox,"onsearch",function(){
this._onInput({charOrCode:a.ENTER})});var e,t,n,s=this;c("ios")&&this.on(r.press,function(i){
var c;e=i.touches?i.touches[0].pageX:i.pageX,t=i.touches?i.touches[0].pageY:i.pageY,
n=h(o.doc,r.release,function(o){var i,r;""!=s.get("value")&&(i=o.pageX-e,r=o.pageY-t,
Math.abs(i)<=4&&Math.abs(r)<=4&&(o.preventDefault(),s.set("value",""),s._onInput({
charOrCode:a.ENTER}))),n&&(n.remove(),n=null)}),c=s.domNode.getBoundingClientRect(),
c.right-(i.touches?i.touches[0].pageX:i.pageX)>=20&&n&&(n.remove(),n=null)})}})});