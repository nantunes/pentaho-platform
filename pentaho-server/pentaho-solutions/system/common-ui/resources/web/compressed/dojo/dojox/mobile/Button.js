define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dijit/_WidgetBase","dijit/form/_ButtonMixin","dijit/form/_FormWidgetMixin","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Button"],function(t,i,o,e,s,d,n,r,u){
var a=i(r("dojo-bidi")?"dojox.mobile.NonBidiButton":"dojox.mobile.Button",[s,n,d],{
baseClass:"mblButton",_setTypeAttr:null,duration:1e3,_onClick:function(i){var e=this.inherited(arguments);
if(e&&this.duration>=0){var s=this.focusNode||this.domNode,d=(this.baseClass+" "+this["class"]).split(" ");
d=t.map(d,function(t){return t+"Selected"}),o.add(s,d),this.defer(function(){o.remove(s,d);
},this.duration)}return e},isFocusable:function(){return!1},buildRendering:function(){
if(this.srcNodeRef){if(this._cv){var t=this.srcNodeRef.firstChild;t&&3===t.nodeType&&(t.nodeValue=this._cv(t.nodeValue));
}}else this.srcNodeRef=e.create("button",{type:this.type});this.inherited(arguments),
this.focusNode=this.domNode},postCreate:function(){this.inherited(arguments),this.connect(this.domNode,"onclick","_onClick");
},_setLabelAttr:function(t){this.inherited(arguments,[this._cv?this._cv(t):t])}});
return r("dojo-bidi")?i("dojox.mobile.Button",[a,u]):a});