define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dijit/registry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./ProgressIndicator","./ToolBarButton","./View","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Heading"],function(t,e,i,o,s,a,n,d,l,h,r,b,c,f,m,u,N,g,v){
var j=(o.getObject("dojox.mobile",!0),i(g("dojo-bidi")?"dojox.mobile.NonBidiHeading":"dojox.mobile.Heading",[f,c,b],{
back:"",href:"",moveTo:"",transition:"slide",label:"",iconBase:"",tag:"h1",busy:!1,
progStyle:"mblProgWhite",baseClass:"mblHeading",buildRendering:function(){this.templateString||(this.domNode=this.containerNode=this.srcNodeRef||s.doc.createElement(this.tag)),
this.inherited(arguments),this.templateString||(this.label||t.forEach(this.domNode.childNodes,function(t){
if(3==t.nodeType){var e=o.trim(t.nodeValue);e&&(this.label=e,this.labelNode=d.create("span",{
innerHTML:e},t,"replace"))}},this),this.labelNode||(this.labelNode=d.create("span",null,this.domNode)),
this.labelNode.className="mblHeadingSpanTitle",this.labelDivNode=d.create("div",{
className:"mblHeadingDivTitle",innerHTML:this.labelNode.innerHTML},this.domNode)),
this.labelDivNode&&(h.set(this.labelDivNode,"role","heading"),h.set(this.labelDivNode,"aria-level","1")),
a.setSelectable(this.domNode,!1)},startup:function(){if(!this._started){var t=this.getParent&&this.getParent();
if(!t||!t.resize){var e=this;e.defer(function(){e.resize()})}this.inherited(arguments);
}},resize:function(){if(this.labelNode){for(var e,i,o=this.containerNode.childNodes,s=o.length-1;s>=0;s--){
var a=o[s];1===a.nodeType&&"none"!==l.get(a,"display")&&(i||"right"!==l.get(a,"float")||(i=a),
e||"left"!==l.get(a,"float")||(e=a))}!this.labelNodeLen&&this.label&&(this.labelNode.style.display="inline",
this.labelNodeLen=this.labelNode.offsetWidth,this.labelNode.style.display="");var d=this.domNode.offsetWidth,h=i?d-i.offsetLeft+5:0,r=e?e.offsetLeft+e.offsetWidth+5:0,b=this.labelNodeLen||0;
n[d-2*Math.max(h,r)>b?"add":"remove"](this.domNode,"mblHeadingCenterTitle")}t.forEach(this.getChildren(),function(t){
t.resize&&t.resize()})},_setBackAttr:function(t){this._set("back",t),this.backButton?this.backButton.set("label",t):(this.backButton=new u({
arrow:"left",label:t,moveTo:this.moveTo,back:!this.moveTo&&!this.href,href:this.href,
transition:this.transition,transitionDir:-1,dir:this.isLeftToRight()?"ltr":"rtl"}),
this.backButton.placeAt(this.domNode,"first")),this.resize()},_setMoveToAttr:function(t){
this._set("moveTo",t),this.backButton&&(this.backButton.set("moveTo",t),this.backButton.set("back",!t&&!this.href));
},_setHrefAttr:function(t){this._set("href",t),this.backButton&&(this.backButton.set("href",t),
this.backButton.set("back",!this.moveTo&&!t))},_setTransitionAttr:function(t){this._set("transition",t),
this.backButton&&this.backButton.set("transition",t)},_setLabelAttr:function(t){this._set("label",t),
this.labelNode.innerHTML=this.labelDivNode.innerHTML=this._cv?this._cv(t):t},_setBusyAttr:function(t){
var e=this._prog;t?(e||(e=this._prog=new m({size:30,center:!1}),n.add(e.domNode,this.progStyle)),
d.place(e.domNode,this.domNode,"first"),e.start()):e&&e.stop(),this._set("busy",t);
}}));return g("dojo-bidi")?i("dojox.mobile.Heading",[j,v]):j});