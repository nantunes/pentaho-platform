define(["dojo/_base/declare","./ScaleIndicatorBase","dojox/gfx","dojo/_base/event","dojo/dom-geometry"],function(t,e,i,o,a){
return t("dojox.dgauges.RectangularValueIndicator",e,{paddingLeft:0,paddingTop:0,
paddingRight:0,paddingBottom:0,constructor:function(){this.addInvalidatingProperties(["paddingTop","paddingLeft","paddingRight","paddingBottom"]);
},indicatorShapeFunc:function(t,e){return t.createPolyline([0,0,10,0,0,10,-10,0,0,0]).setStroke({
color:"black",width:1})},refreshRendering:function(){this.inherited(arguments);var t=isNaN(this._transitionValue)?this.value:this._transitionValue,e=this.scale.positionForValue(t),o=0,a=0,n=0;
"horizontal"==this.scale._gauge.orientation?(o=e,a=this.paddingTop):(o=this.paddingLeft,
a=e,n=90),this._gfxGroup.setTransform([{dx:o,dy:a},i.matrix.rotateg(n)])},_onMouseDown:function(t){
this.inherited(arguments);var e=a.position(this.scale._gauge.domNode,!0);this.set("value",this.scale.valueForPosition({
x:t.pageX-e.x,y:t.pageY-e.y})),o.stop(t)},_onMouseMove:function(t){this.inherited(arguments);
var e=a.position(this.scale._gauge.domNode,!0);this.set("value",this.scale.valueForPosition({
x:t.pageX-e.x,y:t.pageY-e.y}))}})});