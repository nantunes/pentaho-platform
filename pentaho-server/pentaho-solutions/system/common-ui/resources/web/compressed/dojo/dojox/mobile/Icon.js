define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","./iconUtils"],function(o,t,i,n,c){
return o("dojox.mobile.Icon",null,{icon:"",iconPos:"",alt:"",tag:"div",constructor:function(o,i){
o&&t.mixin(this,o),this.domNode=i||n.create(this.tag),c.createIcon(this.icon,this.iconPos,null,this.alt,this.domNode);
}})});