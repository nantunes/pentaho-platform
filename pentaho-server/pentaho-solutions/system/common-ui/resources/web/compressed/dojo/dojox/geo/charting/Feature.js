define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/html","dojo/dom","dojo/_base/event","dojox/gfx/fx","dojox/color"],function(t,i,e,o,s,h,l,r){
return i("dojox.geo.charting.Feature",null,{_isZoomIn:!1,isSelected:!1,markerText:null,
constructor:function(i,o,s){this.id=o,this.shape=i.mapObj.createGroup(),this.parent=i,
this.mapObj=i.mapObj,this._bbox=s.bbox,this._center=s.center,this._defaultFill=i.defaultColor,
this._highlightFill=i.highlightColor,this._defaultStroke={width:this._normalizeStrokeWeight(.5),
color:"white"};var h=t.isArray(s.shape[0])?s.shape:[s.shape];e.forEach(h,function(t){
this.shape.createPolyline(t).setStroke(this._defaultStroke)},this),this.unsetValue();
},unsetValue:function(){this.value=null,this.unsetColor()},unsetColor:function(){
this._defaultFill=this.parent.defaultColor;var t=new r.Color(this.parent.defaultColor).toHsl();
t.l=1.2*t.l,this._highlightFill=r.fromHsl(t),this._setFillWith(this._defaultFill);
},setValue:function(t){if(this.value=t,null==t)this.unsetValue();else if(0!=this.parent.series.length){
for(var i=0;i<this.parent.series.length;i++){var e=this.parent.series[i];if(t>=e.min&&t<e.max){
this._setFillWith(e.color),this._defaultFill=e.color;var o=new r.Color(e.color).toHsv();
return o.v=o.v+20,void(this._highlightFill=r.fromHsv(o))}}this.unsetColor()}},_setFillWith:function(i){
var o=t.isArray(this.shape.children)?this.shape.children:[this.shape.children];e.forEach(o,t.hitch(this,function(t){
if(this.parent.colorAnimationDuration>0){var e=l.animateFill({shape:t,color:{start:t.getFill(),
end:i},duration:this.parent.colorAnimationDuration});e.play()}else t.setFill(i)}));
},_setStrokeWith:function(i){var o=t.isArray(this.shape.children)?this.shape.children:[this.shape.children];
e.forEach(o,function(t){t.setStroke({color:i.color,width:i.width,join:"round"})});
},_normalizeStrokeWeight:function(t){this.shape._getRealMatrix();return"vml"!=dojox.gfx.renderer?t/(this.shape._getRealMatrix()||{
xx:1}).xx:t},_onmouseoverHandler:function(t){this.parent.onFeatureOver(this),this._setFillWith(this._highlightFill),
this.mapObj.marker.show(this.id,t)},_onmouseoutHandler:function(){this._setFillWith(this._defaultFill),
this.mapObj.marker.hide(),o.style("mapZoomCursor","display","none")},_onmousemoveHandler:function(t){
this.mapObj.marker._needTooltipRefresh&&this.mapObj.marker.show(this.id,t),this.isSelected&&t&&(this.parent.enableFeatureZoom?(t=h.fix(t||window.event),
o.style("mapZoomCursor","left",t.pageX+12+"px"),o.style("mapZoomCursor","top",t.pageY+"px"),
o.byId("mapZoomCursor").className=this._isZoomIn?"mapZoomOut":"mapZoomIn",o.style("mapZoomCursor","display","block")):o.style("mapZoomCursor","display","none"));
},_onclickHandler:function(t){this.parent.onFeatureClick(this),this.isSelected?this.parent.enableFeatureZoom&&(this._isZoomIn?this._zoomOut():this._zoomIn()):(this.parent.deselectAll(),
this.select(!0),this._onmousemoveHandler(t))},select:function(t){t?(this.shape.moveToFront(),
this._setStrokeWith({color:"black",width:this._normalizeStrokeWeight(2)}),this._setFillWith(this._highlightFill),
this.isSelected=!0,this.parent.selectedFeature=this):(this._setStrokeWith(this._defaultStroke),
this._setFillWith(this._defaultFill),this.isSelected=!1,this._isZoomIn=!1)},_zoomIn:function(){
var i=this.mapObj.marker;i.hide(),this.parent.fitToMapArea(this._bbox,15,!0,t.hitch(this,function(){
this._setStrokeWith({color:"black",width:this._normalizeStrokeWeight(2)}),i._needTooltipRefresh=!0,
this.parent.onZoomEnd(this)})),this._isZoomIn=!0,s.byId("mapZoomCursor").className="";
},_zoomOut:function(){var i=this.mapObj.marker;i.hide(),this.parent.fitToMapContents(3,!0,t.hitch(this,function(){
this._setStrokeWith({color:"black",width:this._normalizeStrokeWeight(2)}),i._needTooltipRefresh=!0,
this.parent.onZoomEnd(this)})),this._isZoomIn=!1,s.byId("mapZoomCursor").className="";
},init:function(){this.shape.id=this.id,this.tooltip=null}})});