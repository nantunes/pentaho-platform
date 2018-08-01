define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/connect","dijit/form/ToggleButton"],function(t){
return t.declare("dojox.sketch._Plugin",null,{constructor:function(o){o&&t.mixin(this,o),
this._connects=[]},figure:null,iconClassPrefix:"dojoxSketchIcon",itemGroup:"toolsGroup",
button:null,queryCommand:null,shape:"",useDefaultCommand:!0,buttonClass:dijit.form.ToggleButton,
_initButton:function(){if(this.shape.length){var t=this.iconClassPrefix+" "+this.iconClassPrefix+this.shape.charAt(0).toUpperCase()+this.shape.substr(1);
if(!this.button){var o={label:this.shape,showLabel:!1,iconClass:t,dropDown:this.dropDown,
tabIndex:"-1"};this.button=new this.buttonClass(o),this.connect(this.button,"onClick","activate");
}}},attr:function(t,o){return this.button.attr(t,o)},onActivate:function(){},activate:function(t){
this.onActivate(),this.figure.setTool(this),this.attr("checked",!0)},onMouseDown:function(t){},
onMouseMove:function(t){},onMouseUp:function(t){},destroy:function(o){t.forEach(this._connects,t.disconnect);
},connect:function(o,n,i){this._connects.push(t.connect(o,n,this,i))},setFigure:function(t){
this.figure=t},setToolbar:function(t){this._initButton(),this.button&&t.addChild(this.button),
this.itemGroup&&t.addGroupItem(this,this.itemGroup)}})});