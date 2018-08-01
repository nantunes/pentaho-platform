define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dijit/_WidgetBase","./iconUtils"],function(t,e,i,a,o){
return t("dojox.mobile.Rating",a,{image:"",numStars:5,value:0,alt:"",baseClass:"mblRating",
buildRendering:function(){this.inherited(arguments),this.domNode.style.display="inline-block";
var t=this.imgNode=i.create("img");this.connect(t,"onload",e.hitch(this,function(){
this.set("value",this.value)})),o.createIcon(this.image,null,t)},_setValueAttr:function(t){
this._set("value",t);var e=this.imgNode.height;if(0!=e){i.empty(this.domNode);var a,s,n=this.imgNode.width/3;
for(a=0;a<this.numStars;a++){s=t-1>=a?0:a>=t?n:2*n;var l=i.create("div",{style:{"float":"left"
}},this.domNode);o.createIcon(this.image,"0,"+s+","+n+","+e,null,this.alt,l)}}}});
});