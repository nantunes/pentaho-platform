define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/dom","dojo/dom-style","./_base","./TouchInteractionSupport","./Layer","./Patch"],function(e,r,a,t,n,s,o,y,i,l,L){
return e.experimental("dojox.geo.openlayers.Map"),L.patchGFX(),r("dojox.geo.openlayers.Map",null,{
olMap:null,_tp:null,constructor:function(e,r){r||(r={}),e=s.byId(e),this._tp={x:0,
y:0};var a=r.openLayersMapOptions;if(a||(a={controls:[new OpenLayers.Control.ScaleLine({
maxWidth:200}),new OpenLayers.Control.Navigation]}),r.accessible){var t=new OpenLayers.Control.KeyboardDefaults;
a.controls||(a.controls=[]),a.controls.push(t)}var n=r.baseLayerType;n||(n=y.BaseLayerType.OSM);
var o=new OpenLayers.Map(e,a);this.olMap=o,this._layerDictionary={olLayers:[],layers:[]
},r.touchHandler&&(this._touchControl=new i(o));var l=this._createBaseLayer(r);this.addLayer(l),
this.initialFit(r)},initialFit:function(e){var r=e.initialLocation;r||(r=[-160,70,160,-70]),
this.fitTo(r)},setBaseLayerType:function(e){if(e==this.baseLayerType)return null;var r=null;
"string"==typeof e?(r={baseLayerName:e,baseLayerType:e},this.baseLayerType=e):"object"==typeof e&&(r=e,
this.baseLayerType=r.baseLayerType);var a=null;if(null!=r&&(a=this._createBaseLayer(r),
null!=a)){var t=this.olMap,n=t.getZoom(),s=t.getCenter(),o=!!s&&!!t.baseLayer&&!!t.baseLayer.map;
if(o){var i=t.getProjectionObject();null!=i&&(s=s.transform(i,y.EPSG4326))}var l=t.baseLayer;
if(null!=l){var L=this._getLayer(l);this.removeLayer(L)}null!=a&&this.addLayer(a),
o&&(i=t.getProjectionObject(),null!=i&&(s=s.transform(y.EPSG4326,i)),t.setCenter(s,n));
}return a},getBaseLayerType:function(){return this.baseLayerType},getScale:function(e){
var r=null,a=this.olMap;if(e){var t=a.getUnits();if(!t)return null;var n=OpenLayers.INCHES_PER_UNIT;
r=(a.getGeodesicPixelSize().w||1e-6)*n.km*OpenLayers.DOTS_PER_INCH}else r=a.getScale();
return r},getOLMap:function(){return this.olMap},_createBaseLayer:function(e){var r=null,a=e.baseLayerType,t=e.baseLayerUrl,n=e.baseLayerName,s=e.baseLayerOptions;
switch(n||(n=a),s||(s={}),a){case y.BaseLayerType.OSM:s.transitionEffect="resize",
r=new l(n,{olLayer:new OpenLayers.Layer.OSM(n,t,s)});break;case y.BaseLayerType.WMS:
t||(t="http://labs.metacarta.com/wms/vmap0",s.layers||(s.layers="basic")),r=new l(n,{
olLayer:new OpenLayers.Layer.WMS(n,t,s,{transitionEffect:"resize"})});break;case y.BaseLayerType.GOOGLE:
r=new l(n,{olLayer:new OpenLayers.Layer.Google(n,s)});break;case y.BaseLayerType.VIRTUAL_EARTH:
r=new l(n,{olLayer:new OpenLayers.Layer.VirtualEarth(n,s)});break;case y.BaseLayerType.YAHOO:
r=new l(n,{olLayer:new OpenLayers.Layer.Yahoo(n,s)});break;case y.BaseLayerType.ARCGIS:
t||(t="http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer/export"),
r=new l(n,{olLayer:new OpenLayers.Layer.ArcGIS93Rest(n,t,s,{})})}return null==r&&(a instanceof OpenLayers.Layer?r=a:(s.transitionEffect="resize",
r=new l(n,{olLayer:new OpenLayers.Layer.OSM(n,t,s)}),this.baseLayerType=y.BaseLayerType.OSM)),
r},removeLayer:function(e){var r=this.olMap,a=t.indexOf(this._layerDictionary.layers,e);
a>0&&this._layerDictionary.layers.splice(a,1);var n=e.olLayer,s=t.indexOf(this._layerDictionary.olLayers,n);
s>0&&this._layerDictionary.olLayers.splice(a,s),r.removeLayer(n,!1)},layerIndex:function(e,r){
var a=this.olMap;return r?(a.setLayerIndex(e.olLayer,r),this._layerDictionary.layers.sort(function(e,r){
return a.getLayerIndex(e.olLayer)-a.getLayerIndex(r.olLayer)}),this._layerDictionary.olLayers.sort(function(e,r){
return a.getLayerIndex(e)-a.getLayerIndex(r)}),r):a.getLayerIndex(e.olLayer)},addLayer:function(e){
e.dojoMap=this;var r=this.olMap,a=e.olLayer;this._layerDictionary.olLayers.push(a),
this._layerDictionary.layers.push(e),r.addLayer(a),e.added()},_getLayer:function(e){
var r=t.indexOf(this._layerDictionary.olLayers,e);return-1!=r?this._layerDictionary.layers[r]:null;
},getLayer:function(e,r){var a=this.olMap,n=a.getBy("layers",e,r),s=new Array;return t.forEach(n,function(e){
s.push(this._getLayer(e))},this),s},getLayerCount:function(){var e=this.olMap;return null==e.layers?0:e.layers.length;
},fitTo:function(e){var r=this.olMap,a=y.EPSG4326;if(null==e){var t=this.transformXY(0,0,a);
return void r.setCenter(new OpenLayers.LonLat(t.x,t.y))}var s=null;if("string"==typeof e)var o=n.fromJson(e);else o=e;
var i,l;if(o.hasOwnProperty("bounds")){var L=o.bounds;s=new OpenLayers.Bounds,i=this.transformXY(L[0],L[1],a),
s.left=i.x,s.top=i.y,l=this.transformXY(L[2],L[3],a),s.right=l.x,s.bottom=l.y}if(null==s&&o.hasOwnProperty("position")){
var p=o.position,c=o.hasOwnProperty("extent")?o.extent:1;"string"==typeof c&&(c=parseFloat(c)),
s=new OpenLayers.Bounds,i=this.transformXY(p[0]-c,p[1]+c,a),s.left=i.x,s.top=i.y,
l=this.transformXY(p[0]+c,p[1]-c,a),s.right=l.x,s.bottom=l.y}null==s&&4==e.length&&(s=new OpenLayers.Bounds,
i=this.transformXY(e[0],e[1],a),s.left=i.x,s.top=i.y,l=this.transformXY(e[2],e[3],a),
s.right=l.x,s.bottom=l.y),null!=s&&r.zoomToExtent(s,!0)},transform:function(e,r,a){
return this.transformXY(e.x,e.y,r,a)},transformXY:function(e,r,a,t){var n=this._tp;
return n.x=e,n.y=r,a||(a=y.EPSG4326),t||(t=this.olMap.getProjectionObject()),n=OpenLayers.Projection.transform(n,a,t);
}})});