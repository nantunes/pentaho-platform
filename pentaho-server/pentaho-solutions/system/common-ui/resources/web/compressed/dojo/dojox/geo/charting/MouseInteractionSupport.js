define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/_base/connect","dojo/_base/window","dojo/_base/html","dojo/dom","dojo/_base/sniff"],function(e,s,t,n,o,i,a,r){
return s("dojox.geo.charting.MouseInteractionSupport",null,{_map:null,_mapClickLocation:null,
_screenClickLocation:null,_mouseDragListener:null,_mouseUpListener:null,_mouseUpClickListener:null,
_mouseDownListener:null,_mouseMoveListener:null,_mouseWheelListener:null,_currentFeature:null,
_cancelMouseClick:null,_zoomEnabled:!1,_panEnabled:!1,_onDragStartListener:null,_onSelectStartListener:null,
mouseClickThreshold:2,constructor:function(e,s){this._map=e,this._mapClickLocation={
x:0,y:0},this._screenClickLocation={x:0,y:0},this._cancelMouseClick=!1,s&&(this._zoomEnabled=s.enableZoom,
this._panEnabled=s.enablePan,s.mouseClickThreshold&&s.mouseClickThreshold>0&&(this.mouseClickThreshold=s.mouseClickThreshold));
},setEnableZoom:function(e){if(e&&!this._mouseWheelListener){var s=r("mozilla")?"DOMMouseScroll":"onmousewheel";
this._mouseWheelListener=this._map.surface.connect(s,this,this._mouseWheelHandler);
}else!e&&this._mouseWheelListener&&(n.disconnect(this._mouseWheelListener),this._mouseWheelListener=null);
this._zoomEnabled=e},setEnablePan:function(e){this._panEnabled=e},connect:function(){
this._mouseMoveListener=this._map.surface.connect("onmousemove",this,this._mouseMoveHandler),
this._mouseDownListener=this._map.surface.connect("onmousedown",this,this._mouseDownHandler),
r("ie")&&(_onDragStartListener=n.connect(o.doc,"ondragstart",this,t.stop),_onSelectStartListener=n.connect(o.doc,"onselectstart",this,t.stop)),
this.setEnableZoom(this._zoomEnabled),this.setEnablePan(this._panEnabled)},disconnect:function(){
var e=this._zoomEnabled;this.setEnableZoom(!1),this._zoomEnabled=e,this._mouseMoveListener&&(n.disconnect(this._mouseMoveListener),
this._mouseMoveListener=null,n.disconnect(this._mouseDownListener),this._mouseDownListener=null),
this._onDragStartListener&&(n.disconnect(this._onDragStartListener),this._onDragStartListener=null,
n.disconnect(this._onSelectStartListener),this._onSelectStartListener=null)},_mouseClickHandler:function(e){
var s=this._getFeatureFromMouseEvent(e);if(s)s._onclickHandler(e);else{for(var t in this._map.mapObj.features)this._map.mapObj.features[t].select(!1);
this._map.onFeatureClick(null)}},_mouseDownHandler:function(e){t.stop(e),this._map.focused=!0,
this._cancelMouseClick=!1,this._screenClickLocation.x=e.pageX,this._screenClickLocation.y=e.pageY;
var s=this._map._getContainerBounds(),i=e.pageX-s.x,l=e.pageY-s.y,c=this._map.screenCoordsToMapCoords(i,l);
if(this._mapClickLocation.x=c.x,this._mapClickLocation.y=c.y,r("ie")){var u=a.byId(this._map.container);
this._mouseDragListener=n.connect(u,"onmousemove",this,this._mouseDragHandler),this._mouseUpClickListener=this._map.surface.connect("onmouseup",this,this._mouseUpClickHandler),
this._mouseUpListener=this._map.surface.connect("onmouseup",this,this._mouseUpHandler),
this._map.surface.rawNode.setCapture()}else this._mouseDragListener=n.connect(o.doc,"onmousemove",this,this._mouseDragHandler),
this._mouseUpClickListener=this._map.surface.connect("onmouseup",this,this._mouseUpClickHandler),
this._mouseUpListener=n.connect(o.doc,"onmouseup",this,this._mouseUpHandler)},_mouseUpClickHandler:function(e){
this._cancelMouseClick||this._mouseClickHandler(e),this._cancelMouseClick=!1},_mouseUpHandler:function(e){
t.stop(e),this._map.mapObj.marker._needTooltipRefresh=!0,this._mouseDragListener&&(n.disconnect(this._mouseDragListener),
this._mouseDragListener=null),this._mouseUpClickListener&&(n.disconnect(this._mouseUpClickListener),
this._mouseUpClickListener=null),this._mouseUpListener&&(n.disconnect(this._mouseUpListener),
this._mouseUpListener=null),r("ie")&&this._map.surface.rawNode.releaseCapture()},
_getFeatureFromMouseEvent:function(e){var s=null;return e.gfxTarget&&e.gfxTarget.getParent&&(s=this._map.mapObj.features[e.gfxTarget.getParent().id]),
s},_mouseMoveHandler:function(e){if(!this._mouseDragListener||!this._panEnabled){
var s=this._getFeatureFromMouseEvent(e);s!=this._currentFeature&&(this._currentFeature&&this._currentFeature._onmouseoutHandler(),
this._currentFeature=s,s&&s._onmouseoverHandler()),s&&s._onmousemoveHandler(e)}},
_mouseDragHandler:function(e){t.stop(e);var s=Math.abs(e.pageX-this._screenClickLocation.x),n=Math.abs(e.pageY-this._screenClickLocation.y);
if(!this._cancelMouseClick&&(s>this.mouseClickThreshold||n>this.mouseClickThreshold)&&(this._cancelMouseClick=!0,
this._panEnabled&&this._map.mapObj.marker.hide()),this._panEnabled){var o=this._map._getContainerBounds(),i=e.pageX-o.x,a=e.pageY-o.y,r=this._map.screenCoordsToMapCoords(i,a),l=r.x-this._mapClickLocation.x,c=r.y-this._mapClickLocation.y,u=this._map.getMapCenter();
this._map.setMapCenter(u.x-l,u.y-c)}},_mouseWheelHandler:function(e){t.stop(e),this._map.mapObj.marker.hide();
var s=this._map._getContainerBounds(),n=e.pageX-s.x,o=e.pageY-s.y,i=this._map.screenCoordsToMapCoords(n,o),a=e[r("mozilla")?"detail":"wheelDelta"]/(r("mozilla")?-3:120),l=Math.pow(1.2,a);
this._map.setMapScaleAt(this._map.getMapScale()*l,i.x,i.y,!1),this._map.mapObj.marker._needTooltipRefresh=!0;
}})});