define(["dojo/_base/config","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dijit/_Contained","dijit/_WidgetBase","./_css3"],function(e,t,o,i,s,n,r,a,d,h,c){
var l=t("dojox.mobile.ProgressIndicator",[h,d],{interval:100,size:40,removeOnStop:!0,
startSpinning:!1,center:!0,colors:null,baseClass:"mblProgressIndicator",constructor:function(){
this.colors=[],this._bars=[]},buildRendering:function(){this.inherited(arguments),
this.center&&i.add(this.domNode,"mblProgressIndicatorCenter"),this.containerNode=s.create("div",{
className:"mblProgContainer"},this.domNode),this.spinnerNode=s.create("div",null,this.containerNode);
for(var e=0;12>e;e++){var t=s.create("div",{className:"mblProg mblProg"+e},this.spinnerNode);
this._bars.push(t)}this.scale(this.size),this.startSpinning&&this.start()},scale:function(e){
var t=e/40;r.set(this.containerNode,c.add({},{transform:"scale("+t+")",transformOrigin:"0 0"
})),n.setMarginBox(this.domNode,{w:e,h:e}),n.setMarginBox(this.containerNode,{w:e/t,
h:e/t})},start:function(){if(this.imageNode){var e=this.imageNode,t=Math.round((this.containerNode.offsetWidth-e.offsetWidth)/2),o=Math.round((this.containerNode.offsetHeight-e.offsetHeight)/2);
return void(e.style.margin=o+"px "+t+"px")}var s=0,n=this,r=12;this.timer=setInterval(function(){
s--,s=0>s?r-1:s;for(var e=n.colors,t=0;r>t;t++){var o=(s+t)%r;e[o]?n._bars[t].style.backgroundColor=e[o]:i.replace(n._bars[t],"mblProg"+o+"Color","mblProg"+(o===r-1?0:o+1)+"Color");
}},this.interval)},stop:function(){this.timer&&clearInterval(this.timer),this.timer=null,
this.removeOnStop&&this.domNode&&this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode);
},setImage:function(e){e?(this.imageNode=s.create("img",{src:e},this.containerNode),
this.spinnerNode.style.display="none"):(this.imageNode&&(this.containerNode.removeChild(this.imageNode),
this.imageNode=null),this.spinnerNode.style.display="")},destroy:function(){this.inherited(arguments),
this===l._instance&&(l._instance=null)}});return l._instance=null,l.getInstance=function(e){
return l._instance||(l._instance=new l(e)),l._instance},l});