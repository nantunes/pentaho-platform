define(["dojo/_base/declare","dojo/dom-construct","./TextBox"],function(e,t,i){return e("dojox.mobile.TextArea",i,{
baseClass:"mblTextArea",postMixInProperties:function(){!this.value&&this.srcNodeRef&&(this.value=this.srcNodeRef.value),
this.inherited(arguments)},buildRendering:function(){this.srcNodeRef||(this.srcNodeRef=t.create("textarea",{})),
this.inherited(arguments)}})});