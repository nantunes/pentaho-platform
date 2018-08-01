define(["dojo/_base/declare","dojo/_base/connect","dojo/dom-style","dojox/gfx","dojox/gfx/matrix","./Feature","./Layer"],function(e,t,i,r,o,a,s){
return e("dojox.geo.openlayers.GfxLayer",s,{_viewport:null,constructor:function(e,i){
var o=r.createSurface(this.olLayer.div,100,100);this._surface=o;var a;a=i&&i.viewport?i.viewport:o.createGroup(),
this.setViewport(a),t.connect(this.olLayer,"onMapResize",this,"onMapResize"),this.olLayer.getDataExtent=this.getDataExtent;
},getViewport:function(){return this._viewport},setViewport:function(e){this._viewport&&this._viewport.removeShape(),
this._viewport=e,this._surface.add(e)},onMapResize:function(){this._surfaceSize();
},setMap:function(e){this.inherited(arguments),this._surfaceSize()},getDataExtent:function(){
var e=this._surface.getDimensions();return e},getSurface:function(){return this._surface;
},_surfaceSize:function(){var e=this.olLayer.map.getSize();this._surface.setDimensions(e.w,e.h);
},moveTo:function(e){var t=i.get(this.olLayer.map.layerContainerDiv),r=parseInt(t.left),a=parseInt(t.top);
if(e.zoomChanged||r||a){var s=this.olLayer.div;if(i.set(s,{left:-r+"px",top:-a+"px"
}),null==this._features)return;var n=this.getViewport();n.setTransform(o.translate(r,a)),
this.inherited(arguments)}},added:function(){this.inherited(arguments),this._surfaceSize();
}})});