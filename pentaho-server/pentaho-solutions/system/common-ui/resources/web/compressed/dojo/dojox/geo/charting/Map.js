define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/html","dojo/dom","dojo/dom-geometry","dojo/dom-class","dojo/_base/xhr","dojo/_base/connect","dojo/_base/window","dojox/gfx","./_base","./Feature","./_Marker","dojo/number","dojo/_base/sniff"],function(t,e,n,i,a,o,s,r,h,d,u,c,l,f,b,m){
return n("dojox.geo.charting.Map",null,{defaultColor:"#B7B7B7",highlightColor:"#D5D5D5",
series:[],dataBindingAttribute:null,dataBindingValueFunction:null,dataStore:null,
showTooltips:!0,enableFeatureZoom:!0,colorAnimationDuration:0,_idAttributes:null,
_onSetListener:null,_onNewListener:null,_onDeleteListener:null,constructor:function(e,n){
i.style(e,"display","block"),this.container=e;var a=this._getContainerBounds();this.surface=u.createSurface(e,a.w,a.h),
this._createZoomingCursor(),this.mapBackground=this.surface.createRect({x:0,y:0,width:a.w,
height:a.w}).setFill("rgba(0,0,0,0)"),this.mapObj=this.surface.createGroup(),this.mapObj.features={},
"object"==typeof n?this._init(n):"string"==typeof n&&n.length>0&&r.get({url:n,handleAs:"json",
sync:!0,load:t.hitch(this,"_init")})},_getContainerBounds:function(){var t=o.position(this.container,!0),e=(o.getMarginBox(this.container),
o.getContentBox(this.container));return this._storedContainerBounds={x:t.x,y:t.y,
w:e.w||100,h:e.h||100},this._storedContainerBounds},resize:function(t,e,n){var i=this._storedContainerBounds,a=this._getContainerBounds();
if((i.w!=a.w||i.h!=a.h)&&(this.mapBackground.setShape({width:a.w,height:a.h}),this.surface.setDimensions(a.w,a.h),
this.mapObj.marker.hide(),this.mapObj.marker._needTooltipRefresh=!0,t)){var o=this.getMapScale(),s=o;
if(e){var r=(this.mapObj.boundBox,a.w/i.w),h=a.h/i.h;s=o*Math.sqrt(r*h)}var d=this.screenCoordsToMapCoords(i.w/2,i.h/2);
this.setMapCenterAndScale(d.x,d.y,s,n)}},_isMobileDevice:function(){return m("safari")&&(navigator.userAgent.indexOf("iPhone")>-1||navigator.userAgent.indexOf("iPod")>-1||navigator.userAgent.indexOf("iPad")>-1)||navigator.userAgent.toLowerCase().indexOf("android")>-1;
},setMarkerData:function(e){r.get({url:e,handleAs:"json",handle:t.hitch(this,"_appendMarker")
})},setDataBindingAttribute:function(t){this.dataBindingAttribute=t,this.dataStore&&this._queryDataStore();
},setDataBindingValueFunction:function(t){this.dataBindingValueFunction=t,this.dataStore&&this._queryDataStore();
},_queryDataStore:function(){if(this.dataBindingAttribute&&0!=this.dataBindingAttribute.length){
var t=this;this.dataStore.fetch({scope:this,onComplete:function(n){this._idAttributes=t.dataStore.getIdentityAttributes({}),
e.forEach(n,function(e){var n=t.dataStore.getValue(e,this._idAttributes[0]);if(t.mapObj.features[n]){
var i=null,a=t.dataStore.getValue(e,t.dataBindingAttribute);a&&(i=this.dataBindingValueFunction?this.dataBindingValueFunction(a):isNaN(i)?b.parse(a):a),
i&&t.mapObj.features[n].setValue(i)}},this)}})}},_onSet:function(t,e,n,i){var a=this.dataStore.getValue(t,this._idAttributes[0]),o=this.mapObj.features[a];
o&&e==this.dataBindingAttribute&&(i?o.setValue(i):o.unsetValue())},_onNew:function(t,e){
var n=this.dataStore.getValue(item,this._idAttributes[0]),i=this.mapObj.features[n];
i&&attribute==this.dataBindingAttribute&&i.setValue(newValue)},_onDelete:function(t){
var e=t[this._idAttributes[0]],n=this.mapObj.features[e];n&&n.unsetValue()},setDataStore:function(t,e){
this.dataStore!=t&&(this._onSetListener&&(h.disconnect(this._onSetListener),h.disconnect(this._onNewListener),
h.disconnect(this._onDeleteListener)),this.dataStore=t,t&&(_onSetListener=h.connect(this.dataStore,"onSet",this,this._onSet),
_onNewListener=h.connect(this.dataStore,"onNew",this,this._onNew),_onDeleteListener=h.connect(this.dataStore,"onDelete",this,this._onDelete))),
e&&this.setDataBindingAttribute(e)},addSeries:function(e){"object"==typeof e?this._addSeriesImpl(e):"string"==typeof e&&e.length>0&&r.get({
url:e,handleAs:"json",sync:!0,load:t.hitch(this,function(t){this._addSeriesImpl(t.series);
})})},_addSeriesImpl:function(t){this.series=t;for(var e in this.mapObj.features){
var n=this.mapObj.features[e];n.setValue(n.value)}},fitToMapArea:function(t,e,n,i){
e||(e=0);var a=t.w,o=t.h,s=this._getContainerBounds(),r=Math.min((s.w-2*e)/a,(s.h-2*e)/o);
this.setMapCenterAndScale(t.x+t.w/2,t.y+t.h/2,r,n,i)},fitToMapContents:function(t,e,n){
var i=this.mapObj.boundBox;this.fitToMapArea(i,t,e,n)},setMapCenter:function(t,e,n,i){
var a=this.getMapScale();this.setMapCenterAndScale(t,e,a,n,i)},_createAnimation:function(t,e,n,i){
var a=e.dx?e.dx:0,o=e.dy?e.dy:0,s=n.dx?n.dx:0,r=n.dy?n.dy:0,d=e.xx?e.xx:1,c=n.xx?n.xx:1,l=u.fx.animateTransform({
duration:1e3,shape:t,transform:[{name:"translate",start:[a,o],end:[s,r]},{name:"scale",
start:[d],end:[c]}]});if(i)var f=h.connect(l,"onEnd",this,function(t){i(t),h.disconnect(f);
});return l},setMapCenterAndScale:function(t,e,n,i,a){var o=this.mapObj.boundBox,s=this._getContainerBounds(),r=s.w/2-n*(t-o.x),h=s.h/2-n*(e-o.y),d=new u.matrix.Matrix2D({
xx:n,yy:n,dx:r,dy:h}),c=this.mapObj.getTransform();if(i&&c){var l=this._createAnimation(this.mapObj,c,d,a);
l.play()}else this.mapObj.setTransform(d)},getMapCenter:function(){var t=this._getContainerBounds();
return this.screenCoordsToMapCoords(t.w/2,t.h/2)},setMapScale:function(t,e,n){var i=this._getContainerBounds(),a=this.screenCoordsToMapCoords(i.w/2,i.h/2);
this.setMapScaleAt(t,a.x,a.y,e,n)},setMapScaleAt:function(t,e,n,i,a){var o=null,s=null;
o={x:e,y:n},s=this.mapCoordsToScreenCoords(o.x,o.y);var r=this.mapObj.boundBox,h=s.x-t*(o.x-r.x),d=s.y-t*(o.y-r.y),c=new u.matrix.Matrix2D({
xx:t,yy:t,dx:h,dy:d}),l=this.mapObj.getTransform();if(i&&l){var f=this._createAnimation(this.mapObj,l,c,a);
f.play()}else this.mapObj.setTransform(c)},getMapScale:function(){var t=this.mapObj.getTransform(),e=t?t.xx:1;
return e},mapCoordsToScreenCoords:function(t,e){var n=this.mapObj.getTransform(),i=u.matrix.multiplyPoint(n,t,e);
return i},screenCoordsToMapCoords:function(t,e){var n=u.matrix.invert(this.mapObj.getTransform()),i=u.matrix.multiplyPoint(n,t,e);
return i},deselectAll:function(){for(var t in this.mapObj.features)this.mapObj.features[t].select(!1);
this.selectedFeature=null,this.focused=!1},_init:function(t){this.mapObj.boundBox={
x:t.layerExtent[0],y:t.layerExtent[1],w:t.layerExtent[2]-t.layerExtent[0],h:t.layerExtent[3]-t.layerExtent[1]
},this.fitToMapContents(3),e.forEach(t.featureNames,function(e){var n=t.features[e];
n.bbox.x=n.bbox[0],n.bbox.y=n.bbox[1],n.bbox.w=n.bbox[2],n.bbox.h=n.bbox[3];var i=new l(this,e,n);
i.init(),this.mapObj.features[e]=i},this),this.mapObj.marker=new f({},this)},_appendMarker:function(t){
this.mapObj.marker=new f(t,this)},_createZoomingCursor:function(){if(!a.byId("mapZoomCursor")){
var t=d.doc.createElement("div");i.attr(t,"id","mapZoomCursor"),s.add(t,"mapZoomIn"),
i.style(t,"display","none"),d.body().appendChild(t)}},onFeatureClick:function(t){},
onFeatureOver:function(t){},onZoomEnd:function(t){}})});