define(["dojo/_base/declare","dojo/_base/window","dojo/dom-construct","dijit/_Contained","dijit/_WidgetBase","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/RoundRectCategory"],function(o,e,i,d,t,n,a){
var s=o(n("dojo-bidi")?"dojox.mobile.NonBidiRoundRectCategory":"dojox.mobile.RoundRectCategory",[t,d],{
label:"",tag:"h2",baseClass:"mblRoundRectCategory",buildRendering:function(){var o=this.domNode=this.containerNode=this.srcNodeRef||i.create(this.tag);
this.inherited(arguments),this.label||1!==o.childNodes.length||3!==o.firstChild.nodeType||(this.label=o.firstChild.nodeValue);
},_setLabelAttr:function(o){this.label=o,this.domNode.innerHTML=this._cv?this._cv(o):o;
}});return n("dojo-bidi")?o("dojox.mobile.RoundRectCategory",[s,a]):s});