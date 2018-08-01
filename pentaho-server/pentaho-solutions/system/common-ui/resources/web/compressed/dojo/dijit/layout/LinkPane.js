define(["./ContentPane","../_TemplatedMixin","dojo/_base/declare"],function(t,e,i){
return i("dijit.layout.LinkPane",[t,e],{templateString:'<div class="dijitLinkPane" data-dojo-attach-point="containerNode"></div>',
postMixInProperties:function(){this.srcNodeRef&&(this.title+=this.srcNodeRef.innerHTML),
this.inherited(arguments)},_fillContent:function(){}})});