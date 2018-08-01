define(["dojo/_base/declare","dojo/sniff","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","dojo/has!dojo-bidi?dojox/mobile/bidi/IconMenu","./IconMenuItem"],function(o,e,t,i,s,d,n,h,r,a){
var l=o(e("dojo-bidi")?"dojox.mobile.NonBidiIconMenu":"dojox.mobile.IconMenu",[r,h,n],{
transition:"slide",iconBase:"",iconPos:"",cols:3,tag:"ul",selectOne:!1,baseClass:"mblIconMenu",
childItemClass:"mblIconMenuItem",_createTerminator:!1,buildRendering:function(){if(this.domNode=this.containerNode=this.srcNodeRef||i.create(this.tag),
d.set(this.domNode,"role","menu"),this.inherited(arguments),this._createTerminator){
var o=this._terminator=i.create("br");o.className=this.childItemClass+"Terminator",
this.domNode.appendChild(o)}},startup:function(){this._started||(this.refresh(),this.inherited(arguments));
},refresh:function(){var o=this.getParent();o&&t.remove(o.domNode,"mblSimpleDialogDecoration");
var i=this.getChildren();if(this.cols){var d=Math.ceil(i.length/this.cols),n=Math.floor(100/this.cols),h=100-n*this.cols,r=Math.floor(100/d),a=100-r*d;
e("ie")&&(h--,a--)}for(var l=0;l<i.length;l++){var c=i[l];if(this.cols){var m=l%this.cols===0,u=(l+1)%this.cols===0,g=Math.floor(l/this.cols);
s.set(c.domNode,{width:n+(u?h:0)+"%",height:r+(g+1===d?a:0)+"%"}),t.toggle(c.domNode,this.childItemClass+"FirstColumn",m),
t.toggle(c.domNode,this.childItemClass+"LastColumn",u),t.toggle(c.domNode,this.childItemClass+"FirstRow",0===g),
t.toggle(c.domNode,this.childItemClass+"LastRow",g+1===d)}}},addChild:function(o,e){
this.inherited(arguments),this.refresh()},hide:function(){var o=this.getParent();o&&o.hide&&o.hide();
}});return e("dojo-bidi")?o("dojox.mobile.IconMenu",[l,a]):l});