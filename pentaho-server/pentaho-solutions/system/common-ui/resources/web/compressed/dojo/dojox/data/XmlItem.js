define(["dojo/_base/declare"],function(e){return e("dojox.data.XmlItem",null,{constructor:function(e,t,n){
this.element=e,this.store=t,this.q=n},toString:function(){var e="";if(this.element)for(var t=0;t<this.element.childNodes.length;t++){
var n=this.element.childNodes[t];(3===n.nodeType||4===n.nodeType)&&(e+=n.nodeValue);
}return e}})});