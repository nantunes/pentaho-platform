define(["dojo/_base/declare","dijit/_WidgetBase","dojo/_base/lang"],function(t,e,n){
return t("dojox.mvc.Group",e,{target:null,startup:function(){n.isFunction(this.getParent)&&this.getParent()&&this.getParent().removeRepeatNode&&(this.select=this.getParent().select,
this.onCheckStateChanged=this.getParent().onCheckStateChanged),this.inherited(arguments);
},_setTargetAttr:function(t){this._set("target",t),this.binding!=t&&this.set("ref",t);
}})});