define(["dojo/_base/lang","dojo/_base/kernel","dojo/_base/declare"],function(t,e,i){
return i("dojox.form.manager._ValueMixin",null,{elementValue:function(t,e){return t in this.formWidgets?this.formWidgetValue(t,e):this.formNodes&&t in this.formNodes?this.formNodeValue(t,e):this.formPointValue(t,e);
},gatherFormValues:function(e){var i=this.inspectFormWidgets(function(t){return this.formWidgetValue(t);
},e);return this.inspectFormNodes&&t.mixin(i,this.inspectFormNodes(function(t){return this.formNodeValue(t);
},e)),t.mixin(i,this.inspectAttachedPoints(function(t){return this.formPointValue(t);
},e)),i},setFormValues:function(t){return t&&(this.inspectFormWidgets(function(t,e,i){
this.formWidgetValue(t,i)},t),this.inspectFormNodes&&this.inspectFormNodes(function(t,e,i){
this.formNodeValue(t,i)},t),this.inspectAttachedPoints(function(t,e,i){this.formPointValue(t,i);
},t)),this}})});