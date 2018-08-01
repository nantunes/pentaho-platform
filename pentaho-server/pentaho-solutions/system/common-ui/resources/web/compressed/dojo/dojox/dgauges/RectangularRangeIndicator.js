define(["dojo/_base/declare","dojox/gfx","./ScaleIndicatorBase","dojo/_base/event","dojo/dom-geometry"],function(t,e,i,s,o){
return t("dojox.dgauges.RectangularRangeIndicator",i,{start:0,startThickness:10,endThickness:10,
fill:null,stroke:null,paddingLeft:10,paddingTop:10,paddingRight:10,paddingBottom:10,
constructor:function(){this.fill=[255,120,0],this.stroke={color:"black",width:.2},
this.interactionMode="none",this.addInvalidatingProperties(["start","startThickness","endThickness","fill","stroke"]);
},_defaultHorizontalShapeFunc:function(t,e,i,s,o,a,n,r,l,h){var u=[s,o,a,o,a,o+r,s,o+n,s,o];
return l&&l.colors&&(l.x1=s,l.y1=o,l.x2=a,l.y2=o),e.createPolyline(u).setFill(l).setStroke(h);
},_defaultVerticalShapeFunc:function(t,e,i,s,o,a,n,r,l,h){var u=[s,o,s,a,s+r,a,s+n,o,s,o];
return l&&l.colors&&(l.x1=s,l.y1=o,l.x2=s,l.y2=a),e.createPolyline(u).setFill(l).setStroke(h);
},_shapeFunc:function(t,e,i,s,o,a,n,r,l,h){"horizontal"==this.scale._gauge.orientation?this._defaultHorizontalShapeFunc(t,e,i,s,o,a,n,r,l,h):this._defaultVerticalShapeFunc(t,e,i,s,o,a,n,r,l,h);
},refreshRendering:function(){if(this.inherited(arguments),null!=this._gfxGroup&&null!=this.scale){
var t=this.scale.positionForValue(this.start),e=isNaN(this._transitionValue)?this.value:this._transitionValue,i=this.scale.positionForValue(e);
this._gfxGroup.clear();var s,o,a;"horizontal"==this.scale._gauge.orientation?(s=t,
o=this.paddingTop,a=i):(s=this.paddingLeft,o=t,a=i),this._shapeFunc(this,this._gfxGroup,this.scale,s,o,a,this.startThickness,this.endThickness,this.fill,this.stroke);
}},_onMouseDown:function(t){this.inherited(arguments);var e=o.position(this.scale._gauge.domNode,!0);
this.set("value",this.scale.valueForPosition({x:t.pageX-e.x,y:t.pageY-e.y})),s.stop(t);
},_onMouseMove:function(t){this.inherited(arguments);var e=o.position(this.scale._gauge.domNode,!0);
this.set("value",this.scale.valueForPosition({x:t.pageX-e.x,y:t.pageY-e.y}))}})});