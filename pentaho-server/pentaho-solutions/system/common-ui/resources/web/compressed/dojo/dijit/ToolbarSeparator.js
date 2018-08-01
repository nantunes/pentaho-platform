define(["dojo/_base/declare","dojo/dom","./_Widget","./_TemplatedMixin"],function(e,i,t,n){
return e("dijit.ToolbarSeparator",[t,n],{templateString:'<div class="dijitToolbarSeparator dijitInline" role="presentation"></div>',
buildRendering:function(){this.inherited(arguments),i.setSelectable(this.domNode,!1);
},isFocusable:function(){return!1}})});