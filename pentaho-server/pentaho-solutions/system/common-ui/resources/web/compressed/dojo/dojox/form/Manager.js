define(["dijit/_Widget","dijit/_AttachMixin","dijit/_WidgetsInTemplateMixin","./manager/_Mixin","./manager/_NodeMixin","./manager/_FormMixin","./manager/_ValueMixin","./manager/_EnableMixin","./manager/_DisplayMixin","./manager/_ClassMixin","dojo/_base/declare"],function(i,e,n,a,r,t,d,o,g,s,m){
return m("dojox.form.Manager",[i,n,e,a,r,t,d,o,g,s],{searchContainerNode:!0,buildRendering:function(){
this.containerNode||(this.containerNode=this.srcNodeRef),this.inherited(arguments);
}})});