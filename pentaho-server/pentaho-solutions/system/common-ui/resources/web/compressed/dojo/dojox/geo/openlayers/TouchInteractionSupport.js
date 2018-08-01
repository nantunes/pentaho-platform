define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/html","dojo/_base/lang","dojo/_base/event","dojo/_base/window"],function(t,e,n,i,o,a){
return t("dojox.geo.openlayers.TouchInteractionSupport",null,{_map:null,_centerTouchLocation:null,
_touchMoveListener:null,_touchEndListener:null,_initialFingerSpacing:null,_initialScale:null,
_tapCount:null,_tapThreshold:null,_lastTap:null,constructor:function(t){this._map=t,
this._centerTouchLocation=new OpenLayers.LonLat(0,0);var n=this._map.div;e.connect(n,"touchstart",this,this._touchStartHandler),
e.connect(n,"touchmove",this,this._touchMoveHandler),e.connect(n,"touchend",this,this._touchEndHandler),
this._tapCount=0,this._lastTap={x:0,y:0},this._tapThreshold=100},_getTouchBarycenter:function(t){
var e=t.touches,i=e[0],o=null;o=e.length>1?e[1]:e[0];var a=n.marginBox(this._map.div),h=(i.pageX+o.pageX)/2-a.l,s=(i.pageY+o.pageY)/2-a.t;
return{x:h,y:s}},_getFingerSpacing:function(t){var e=t.touches,n=-1;if(e.length>=2){
var i=e[1].pageX-e[0].pageX,o=e[1].pageY-e[0].pageY;n=Math.sqrt(i*i+o*o)}return n;
},_isDoubleTap:function(t){var e=!1,n=t.touches;if(this._tapCount>0&&1==n.length){
var o=n[0].pageX-this._lastTap.x,a=n[0].pageY-this._lastTap.y,h=o*o+a*a;h<this._tapThreshold?e=!0:this._tapCount=0;
}return this._tapCount++,this._lastTap.x=n[0].pageX,this._lastTap.y=n[0].pageY,setTimeout(i.hitch(this,function(){
this._tapCount=0}),300),e},_doubleTapHandler:function(t){var e=t.touches,i=n.marginBox(this._map.div),o=e[0].pageX-i.l,a=e[0].pageY-i.t,h=this._map.getLonLatFromPixel(new OpenLayers.Pixel(o,a));
this._map.setCenter(new OpenLayers.LonLat(h.lon,h.lat),this._map.getZoom()+1)},_touchStartHandler:function(t){
if(o.stop(t),this._isDoubleTap(t))return void this._doubleTapHandler(t);var n=this._getTouchBarycenter(t);
this._centerTouchLocation=this._map.getLonLatFromPixel(new OpenLayers.Pixel(n.x,n.y)),
this._initialFingerSpacing=this._getFingerSpacing(t),this._initialScale=this._map.getScale(),
this._touchMoveListener||(this._touchMoveListener=e.connect(a.global,"touchmove",this,this._touchMoveHandler)),
this._touchEndListener||(this._touchEndListener=e.connect(a.global,"touchend",this,this._touchEndHandler));
},_touchEndHandler:function(t){o.stop(t);var n=t.touches;if(0==n.length)this._touchMoveListener&&(e.disconnect(this._touchMoveListener),
this._touchMoveListener=null),this._touchEndListener&&(e.disconnect(this._touchEndListener),
this._touchEndListener=null);else{var i=this._getTouchBarycenter(t);this._centerTouchLocation=this._map.getLonLatFromPixel(new OpenLayers.Pixel(i.x,i.y));
}},_touchMoveHandler:function(t){o.stop(t);var e=this._getTouchBarycenter(t),n=this._map.getLonLatFromPixel(new OpenLayers.Pixel(e.x,e.y)),i=n.lon-this._centerTouchLocation.lon,a=n.lat-this._centerTouchLocation.lat,h=1,s=t.touches;
if(s.length>=2){var c=this._getFingerSpacing(t);h=c/this._initialFingerSpacing,this._map.zoomToScale(this._initialScale/h);
}var r=this._map.getCenter();this._map.setCenter(new OpenLayers.LonLat(r.lon-i,r.lat-a));
}})});