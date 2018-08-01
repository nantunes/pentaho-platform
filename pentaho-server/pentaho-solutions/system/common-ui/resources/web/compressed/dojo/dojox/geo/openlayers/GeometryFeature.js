define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojox/gfx/matrix","./Point","./LineString","./Collection","./Feature"],function(e,t,i,r,n,o,a,h){
return e("dojox.geo.openlayers.GeometryFeature",h,{constructor:function(e){this._geometry=e,
this._shapeProperties={},this._fill=null,this._stroke=null},_createCollection:function(e){
var t=this.getLayer(),i=t.getSurface(),r=this.createShape(i,e),n=t.getViewport();return n.add(r),
r},_getCollectionShape:function(e){var t=e.shape;return null==t&&(t=this._createCollection(e),
e.shape=t),t},renderCollection:function(e){void 0==e&&(e=this._geometry),s=this._getCollectionShape(e);
var i=this.getShapeProperties();s.setShape(i),t.forEach(e.coordinates,function(e){
if(e instanceof n)this.renderPoint(e);else if(e instanceof o)this.renderLineString(e);else{
if(!(e instanceof a))throw new Error;this.renderCollection(e)}},this),this._applyStyle(e);
},render:function(e){if(void 0==e&&(e=this._geometry),e instanceof n)this.renderPoint(e);else if(e instanceof o)this.renderLineString(e);else{
if(!(e instanceof a))throw new Error;this.renderCollection(e)}},getShapeProperties:function(){
return this._shapeProperties},setShapeProperties:function(e){return this._shapeProperties=e,
this},createShape:function(e,i){i||(i=this._geometry);var r=null;if(i instanceof n)r=e.createCircle();else if(i instanceof o)r=e.createPolyline();else{
if(!(i instanceof a))throw new Error;var s=e.createGroup();t.forEach(i.coordinates,function(t){
var i=this.createShape(e,t);s.add(i)},this),r=s}return r},getShape:function(){var e=this._geometry;
return e?e.shape?e.shape:(this.render(),e.shape):null},_createPoint:function(e){var t=this.getLayer(),i=t.getSurface(),r=this.createShape(i,e),n=t.getViewport();
return n.add(r),r},_getPointShape:function(e){var t=e.shape;return null==t&&(t=this._createPoint(e),
e.shape=t),t},renderPoint:function(e){void 0==e&&(e=this._geometry);var t=this.getLayer(),n=t.getDojoMap();
s=this._getPointShape(e);var o=i.mixin({},this._defaults.pointShape);o=i.mixin(o,this.getShapeProperties()),
s.setShape(o);var a=this.getCoordinateSystem(),h=n.transform(e.coordinates,a),l=this._getLocalXY(h),c=l[0],p=l[1],f=t.getViewport().getTransform();
f&&s.setTransform(r.translate(c-f.dx,p-f.dy)),this._applyStyle(e)},_createLineString:function(e){
var t=this.getLayer(),i=t._surface,r=this.createShape(i,e),n=t.getViewport();return n.add(r),
e.shape=r,r},_getLineStringShape:function(e){var t=e.shape;return null==t&&(t=this._createLineString(e),
e.shape=t),t},renderLineString:function(e){void 0==e&&(e=this._geometry);var r=this.getLayer(),n=r.getDojoMap(),s=this._getLineStringShape(e),o=this.getCoordinateSystem(),a=new Array(e.coordinates.length),h=r.getViewport().getTransform();
t.forEach(e.coordinates,function(e,t,i){var r=n.transform(e,o),s=this._getLocalXY(r);
h&&(s[0]-=h.dx,s[1]-=h.dy),a[t]={x:s[0],y:s[1]}},this);var l=i.mixin({},this._defaults.lineStringShape);
l=i.mixin(l,this.getShapeProperties()),l=i.mixin(l,{points:a}),s.setShape(l),this._applyStyle(e);
},_applyStyle:function(e){if(e&&e.shape){var t,r=this.getFill();!r||i.isString(r)||i.isArray(r)?t=r:(t=i.mixin({},this._defaults.fill),
t=i.mixin(t,r));var n,s=this.getStroke();!s||i.isString(s)||i.isArray(s)?n=s:(n=i.mixin({},this._defaults.stroke),
n=i.mixin(n,s)),this._applyRecusiveStyle(e,n,t)}},_applyRecusiveStyle:function(e,i,r){
var n=e.shape;n.setFill&&n.setFill(r),n.setStroke&&n.setStroke(i),e instanceof a&&t.forEach(e.coordinates,function(e){
this._applyRecusiveStyle(e,i,r)},this)},setStroke:function(e){return this._stroke=e,
this},getStroke:function(){return this._stroke},setFill:function(e){return this._fill=e,
this},getFill:function(){return this._fill},remove:function(){var e=this._geometry,i=e.shape;
e.shape=null,i&&i.removeShape(),e instanceof a&&t.forEach(e.coordinates,function(e){
this.remove(e)},this)},_defaults:{fill:null,stroke:null,pointShape:{r:30},lineStringShape:null
}})});