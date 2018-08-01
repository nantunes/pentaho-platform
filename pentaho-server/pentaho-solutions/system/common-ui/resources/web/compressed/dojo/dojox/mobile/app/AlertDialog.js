dojo.provide("dojox.mobile.app.AlertDialog"),dojo.experimental("dojox.mobile.app.AlertDialog"),
dojo.require("dijit._WidgetBase"),dojo.declare("dojox.mobile.app.AlertDialog",dijit._WidgetBase,{
title:"",text:"",controller:null,buttons:null,defaultButtonLabel:"OK",onChoose:null,
constructor:function(){this.onClick=dojo.hitch(this,this.onClick),this._handleSelect=dojo.hitch(this,this._handleSelect);
},buildRendering:function(){this.domNode=dojo.create("div",{"class":"alertDialog"
});var o=dojo.create("div",{"class":"alertDialogBody"},this.domNode);dojo.create("div",{
"class":"alertTitle",innerHTML:this.title||""},o),dojo.create("div",{"class":"alertText",
innerHTML:this.text||""},o);var t=dojo.create("div",{"class":"alertBtns"},o);this.buttons&&0!=this.buttons.length||(this.buttons=[{
label:this.defaultButtonLabel,value:"ok","class":"affirmative"}]);var e=this;dojo.forEach(this.buttons,function(o){
var i=new dojox.mobile.Button({btnClass:o["class"]||"",label:o.label});i._dialogValue=o.value,
dojo.place(i.domNode,t),e.connect(i,"onClick",e._handleSelect)});var i=this.controller.getWindowSize();
this.mask=dojo.create("div",{"class":"dialogUnderlayWrapper",innerHTML:'<div class="dialogUnderlay"></div>',
style:{width:i.w+"px",height:i.h+"px"}},this.controller.assistant.domNode),this.connect(this.mask,"onclick",function(){
e.onChoose&&e.onChoose(),e.hide()})},postCreate:function(){this.subscribe("/dojox/mobile/app/goback",this._handleSelect);
},_handleSelect:function(o){var t;if(console.log("handleSelect"),o&&o.target)for(t=o.target;!dijit.byNode(t);)t=t.parentNode;
this.onChoose&&this.onChoose(t?dijit.byNode(t)._dialogValue:void 0),this.hide()},
show:function(){this._doTransition(1)},hide:function(){this._doTransition(-1)},_doTransition:function(o){
var t,e=dojo.marginBox(this.domNode.firstChild).h,i=this.controller.getWindowSize().h;
console.log("dialog height = "+e," body height = "+i);var d=i-e,n=i,l=dojo.fx.slideTo({
node:this.domNode,duration:400,top:{start:0>o?d:n,end:0>o?n:d}}),s=dojo[0>o?"fadeOut":"fadeIn"]({
node:this.mask,duration:400}),t=dojo.fx.combine([l,s]),a=this;dojo.connect(t,"onEnd",this,function(){
0>o&&(a.domNode.style.display="none",dojo.destroy(a.domNode),dojo.destroy(a.mask));
}),t.play()},destroy:function(){this.inherited(arguments),dojo.destroy(this.mask);
},onClick:function(){}});