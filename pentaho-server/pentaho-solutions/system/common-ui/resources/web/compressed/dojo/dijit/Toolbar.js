define(["require","dojo/_base/declare","dojo/has","dojo/keys","dojo/ready","./_Widget","./_KeyNavContainer","./_TemplatedMixin"],function(o,e,t,i,a,r,d,n){
return t("dijit-legacy-requires")&&a(0,function(){var e=["dijit/ToolbarSeparator"];
o(e)}),e("dijit.Toolbar",[r,n,d],{templateString:'<div class="dijit" role="toolbar" tabIndex="${tabIndex}" data-dojo-attach-point="containerNode"></div>',
baseClass:"dijitToolbar",_onLeftArrow:function(){this.focusPrev()},_onRightArrow:function(){
this.focusNext()}})});