define("cde/components/Map/Map.lifecycle",["amd!cdf/lib/underscore"],function(e){
"use strict";return{maybeToggleBlock:function(e){this.isSilent()||(e?this.block():this.unblock());
},getQueryData:function(){var t=this.queryState=this.query=this.dashboard.getQuery(this.queryDefinition);
t.setAjaxOptions({async:!0}),t.fetchData(this.parameters,this.getSuccessHandler(e.bind(this.onDataReady,this)),this.getErrorHandler());
},_concludeUpdate:function(){this.postExec(),this.maybeToggleBlock(!1)}}}),define("cde/components/Map/Map.selector",[],function(){
"use strict";return{getValue:function(){var e=this.model.leafs().filter(function(e){
return e.getSelection()===!0}).map(function(e){return e.get("id")}).value();return e;
},setValue:function(e){if(!this.model)throw"Model is not initialized";return this.model.setSelectedItems(e),
this},updateSelection:function(){var e=this.dashboard.getParameterValue(this.parameter);
this.setValue(e)},processChange:function(){return this.dashboard.processChange(this.name),
this}}}),define("cde/components/Map/model/MapModel",["cdf/lib/BaseSelectionTree","amd!cdf/lib/underscore","cdf/lib/jquery"],function(e,t,o){
"use strict";function n(e){switch(e){case d.ALL:return s.allSelected;case d.SOME:
return s.someSelected;case d.NONE:return s.noneSelected;case"disabled":return s.disabled;
}}function i(e,o,n,i,p,d){var u=[t.values(c),t.values(l),t.values(r),t.values(s)],h=t.map(u,function(e,a){
return t.intersection(e,[[p||"",i||"",o||"",n||""][a]])[0]});return a(e,h)}function a(e,n){
var i={},r={};t.each(e,function(e,o){t.isObject(e)?r[o]=e:i[o]=e});var s=t.reduce(r,function(e,i,r){
return t.each(n,function(t){t===r&&o.extend(!0,e,a(i,n))}),e},i);return s}var r={
pan:"pan",zoombox:"zoombox",selection:"selection"},s={allSelected:"allSelected",someSelected:"someSelected",
noneSelected:"noneSelected",disabled:"disabled"},l={selected:"selected",unselected:"unselected"
},c={normal:"normal",hover:"hover"},p={shapes:"shape",markers:"marker"},d=e.SelectionStates;
return e.extend({defaults:{id:void 0,label:"",isSelected:!1,isHighlighted:!1,isVisible:!0,
numberOfSelectedItems:0,numberOfItems:0,rawData:null,styleMap:{}},constructor:function(){
this.base.apply(this,arguments),this.isRoot()&&(this.setPanningMode(),this.set("canSelect",!0));
},setSelection:function(){this.root().get("canSelect")===!0&&this.base.apply(this,arguments);
},setPanningMode:function(){return this.isSelectionMode()&&this.trigger("selection:complete"),
this.root().set("mode",r.pan),this},setZoomBoxMode:function(){return this.root().set("mode",r.zoombox),
this},setSelectionMode:function(){return this.root().set("mode",r.selection),this;
},getMode:function(){return this.root().get("mode")},isPanningMode:function(){return this.root().get("mode")===r.pan;
},isZoomBoxMode:function(){return this.root().get("mode")===r.zoombox},isSelectionMode:function(){
return this.root().get("mode")===r.selection},isHover:function(){return this.get("isHighlighted")===!0;
},setHover:function(e){return this.set("isHighlighted",e===!0)},_getStyle:function(e,t,n,a,r){
var s,l=this.get("styleMap");return s=this.parent()?this.parent()._getStyle(e,t,n,a,r):{},
o.extend(!0,i(s,e,t,n,a,r),i(l,e,t,n,a,r))},getStyle:function(){var e=this.root().get("mode"),t=this.root().get("canSelect")===!0,o=n(t?this.root().getSelection():"disabled"),i=this.getSelection()===d.ALL?l.selected:l.unselected,a=this.isHover()===!0?c.hover:c.normal,r=this.root().get("isDragging")?"dragging":"moving";
return this._getStyle(e,o,i,a,r)},getFeatureType:function(){return p[this._getParents([])[1]];
},_getParents:function(e){return e.unshift(this.get("id")),this.parent()?this.parent()._getParents(e):e;
}},{Modes:r,States:l,Actions:c,FeatureTypes:p,SelectionStates:e.SelectionStates});
}),define("cde/components/Map/_getMapping",["amd!cdf/lib/underscore"],function(e){
"use strict";function t(t){var o={};if(!t.metadata||0===t.metadata.length)return o;
var n={key:"id",id:"id",fill:"fill",fillColor:"fill",r:"r",latitude:"latitude",longitude:"longitude",
address:"address",description:"description",marker:"marker",markerwidth:"markerWidth",
markerheight:"markerHeight",popupcontents:"popupContents",popupwidth:"popupWidth",
popupheight:"popupHeight"},i=e.chain(t.metadata).pluck("colName").map(function(e){
return e.toLowerCase()}).value();return o=e.chain(i).map(function(e,t){var o=n[e];
return o?[o,t]:[e,t]}).compact().object().value(),("latitude"in o||"longitude"in o)&&(o.addressType="coordinates"),
"address"in o&&!o.addressType&&(o.addressType="address"),o.id||(o.id=0),o}return t;
}),define("cde/components/Map/FeatureStore/shapeConversion",[],function(){"use strict";
return{simplifyPoints:function(e,t){function o(e,t){var i=e[0],a=e[e.length-1];if(e.length<3)return e;
for(var r=-1,s=0,l=1;l<e.length-1;l++){var c=n(e[l],i,a);c>s&&(s=c,r=l)}if(s>t){var p=e.slice(0,r+1),d=e.slice(r),u=o(p,t),h=o(d,t),m=u.slice(0,u.length-1).concat(h);
return m}return[i,a]}function n(e,t,o){var n,i,a;return t[0]==o[0]?n=Math.abs(e[0]-t[0]):(i=(o[1]-t[1])/(o[0]-t[0]),
a=t[1]-i*t[0],n=Math.abs(i*e[0]-e[1]+a)/Math.sqrt(Math.pow(i,2)+1)),n}return 0>t?e:o(e,t/63e5);
},exportShapeDefinition:function(){this.shapeDefinition&&window.open("data:text/json;charset=utf-8,"+escape(JSON.stringify(this.shapeDefinition)));
}}}),define("cde/components/Map/FeatureStore/resolveShapes",["cdf/lib/jquery","amd!cdf/lib/underscore","./shapeConversion"],function(e,t,o){
"use strict";function n(n,i,a){var r=this.getAddIn("ShapeResolver",a.addIns.ShapeResolver.name),s=a.addIns.ShapeResolver.options.url;
!r&&s&&(r=s.endsWith("json")||s.endsWith("js")?this.getAddIn("ShapeResolver","simpleJSON"):this.getAddIn("ShapeResolver","kml"));
var l=e.Deferred();if(!r)return l.resolve({}),l.promise();var c=t.pluck(n.resultset,i.id),p={
keys:c,ids:c,tableData:n,_simplifyPoints:o.simplifyPoints,_parseShapeKey:a.addIns.ShapeResolver.options.parseShapeKey,
_shapeSource:s},d=r.call(this,p,this.getAddInOptions("ShapeResolver",r.getName()));
return e.when(d).then(function(e){var o=t.chain(e).map(function(e,t){return[t,e]}).object().value();
l.resolve(o)}),l.promise()}return n}),define("cde/components/Map/FeatureStore/resolveMarkers",["cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t){
"use strict";function o(o,i,a){var r=this.getAddIn("LocationResolver",a.addIns.LocationResolver.name),s=e.Deferred();
if(!r)return s.resolve({}),s.promise();var l,c=this,p=this.getAddInOptions("LocationResolver",r.getName());
return l="coordinates"===i.addressType?t.chain(o.resultset).map(function(e){var t=e[i.id],o=[e[i.longitude],e[i.latitude]];
return[t,n(o)]}).object().value():t.chain(o.resultset).map(function(a,s){var l=e.Deferred(),d=a[i.id],u=void 0!=i.address?a[i.address]:void 0,h={
data:a,position:s,address:u,addressType:i.addressType,key:d,id:d,mapping:i,tableData:o,
continuationFunction:function(e){l.resolve(n(e))}},m=["country","city","county","region","state"];
t.each(t.pick(i,m),function(e,t){void 0!=e&&(h[t]=a[e])});try{r.call(c,h,p)}catch(g){
l.resolve(null)}return[d,l.promise()]}).object().value(),s.resolve(l),s.promise();
}function n(e){var t=e[0],o=e[1],n={geometry:{coordinates:[t,o],type:"Point",properties:{
latitude:o,longitude:t}},type:"Feature"};return n}return o}),define("cde/components/Map/Map.model",["cdf/lib/jquery","amd!cdf/lib/underscore","cdf/Logger","./model/MapModel","./_getMapping","./FeatureStore/resolveShapes","./FeatureStore/resolveMarkers"],function(e,t,o,n,i,a,r){
"use strict";return{resolveFeatures:function(t){var o=i(t);this.mapping=e.extend(!0,o,this.visualRoles),
this.features=this.features||{};var n,a=this;return n="shapes"===this.mapMode?this._resolveShapes(t,this.mapping,this.configuration).then(function(e){
return a.features.shapes=e,t}):"markers"===this.mapMode?this._resolveMarkers(t,this.mapping,this.configuration).then(function(e){
return a.features.markers=e,t}):e.when(t),n.promise()},_resolveShapes:a,_resolveMarkers:r,
initModel:function(e){this.model=new n({styleMap:this.getStyleMap("global")}),this.model.set("canSelect",this.configuration.isSelector),
this.configuration.isSelector===!0?this.model.setSelectionMode():this.model.setPanningMode();
var t=this._initSeries(this.mapMode,e);e&&e.metadata&&e.resultset&&e.resultset.length>0&&this._addSeriesToModel(t,e);
},_initSeries:function(e,t){var o=this.getColorMap(),n={id:e,label:e,styleMap:this.getStyleMap(e),
colormap:o,extremes:this._detectExtremes(t)};return this.model.add(n),this.model.findWhere({
id:e})},visualRoles:{},scales:{fill:"default",r:[10,20]},attributeMapping:{fill:function(e,o,n,i){
var a=i[n.fill],r=o.get("colormap")||this.getColorMap();return t.isNumber(a)?this.mapColor(a,o.get("extremes").fill.min,o.get("extremes").fill.max,r):void 0;
},label:function(e,o,n,i){return t.isEmpty(i)?void 0:i[n.label]+""},r:function(e,o,n,i){
var a=i[n.r];if(t.isNumber(a)){var r=this.scales.r[0],s=this.scales.r[1],l=o.get("extremes").r,c=Math.sqrt(r*r+(s*s-r*r)*(a-l.min)/(l.max-l.min));
if(t.isFinite(c))return c}}},_detectExtremes:function(e){var o=t.chain(this.mapping).map(function(o,n){
if(!t.isFinite(o))return[n,{}];var i,a=t.pluck(e.resultset,o);return i="Numeric"===e.metadata[o].colType?{
type:"numeric",min:t.min(a),max:t.max(a)}:{type:"categoric",items:t.uniq(a)},[n,i];
}).object().value();return o},_addSeriesToModel:function(o,i){var a=e.extend({},this.mapping),r=t.pluck(i.metadata,"colName"),s=this,l=n.Modes,c=n.States,p=n.Actions,d=t.map(i.resultset,function(e,n){
var i=s._getItemId(a,e,n),d={};t.each(l,function(i){t.each(c,function(r){t.each(p,function(l){
t.each(s.attributeMapping,function(c,p){if(!(t.isUndefined(a[p])||a[p]>=e.length)){
var u={mode:i,state:r,action:l},h=t.isFunction(c)?c.call(s,u,o,a,e,n):c;t.isUndefined(h)||(d[i]=d[i]||{},
d[i][r]=d[i][r]||{},d[i][r][l]=d[i][r][l]||{},d[i][r][l][p]=h)}})})})});var u=s.features.shapes?s.features.shapes[i]:void 0,h=s.features.markers?s.features.markers[i]:void 0,m="shape"===o.getFeatureType()?u:h;
return{id:i,label:i,styleMap:d,geoJSON:m,rowIdx:n,rawData:e,data:t.object(t.zip(r,e))
}});o.add(d)},_getItemId:function(e,o,n){var i=e.id;return t.isFinite(i)||(i="shapes"===this.mapMode?0:-1),
i>=0&&i<o.length?o[i]:n}}}),define("cde/components/Map/Map.configuration",["cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t){
"use strict";function o(){var o={MarkerImage:{name:this.markerCggGraph?"cggMarker":this.markerImageGetter,
options:{cggScript:this.markerCggGraph,parameters:this.cggGraphParameters,height:this.markerHeight,
width:this.markerWidth,iconUrl:this.marker}},ShapeResolver:{name:this.shapeResolver,
options:{url:this.shapeSource,parseShapeKey:this.parseShapeKey}},LocationResolver:{
name:this.locationResolver||"openstreetmap",options:{}},MapEngine:{name:this.mapEngineType,
options:{}}},n={services:this.tileServices,tilesets:t.isString(this.tilesets)?[this.tilesets]:this.tilesets
},i={doubleClickTimeoutMilliseconds:300,enableKeyboardNavigation:!0,enableZoomOnMouseWheel:!1
},a={extent:{southEast:{latitude:-72.7,longitude:-180},northWest:{latitude:84.2,longitude:180
}},center:{latitude:parseFloat(this.centerLatitude),longitude:parseFloat(this.centerLongitude)
},zoomLevel:{min:0,max:1/0,"default":this.defaultZoomLevel}},r=e.extend(!0,{},{API_KEY:this.API_KEY||window.API_KEY,
tiles:n,isSelector:!t.isEmpty(this.parameter),addIns:o,controls:i,styleMap:this.styleMap,
viewport:a});return t.isUndefined(this.options)||(r=e.extend(!0,r,t.isFunction(this.options)?this.options(r):this.options)),
r}return{getConfiguration:o}}),define("cde/components/Map/Map.ext",[],function(){
return{getMarkerImgPath:function(){return CONTEXT_PATH+"api/repos/pentaho-cdf-dd/resources/components/NewMapComponent/legacy/images/";
}}}),define("cde/components/Map/Map.featureStyles",["cdf/lib/jquery","amd!cdf/lib/underscore","./Map.ext","cdf/Logger"],function(e,t,o,n){
"use strict";function i(o){var i=e.extend(!0,{},a.global,a[o]);switch(o){case"shapes":
n.warn("Usage of the 'shapeSettings' property (including shapeSettings.fillOpacity, shapeSettings.strokeWidth and shapeSettings.strokeColor) is deprecated."),
n.warn("Support for these properties will be removed in the next major version."),
e.extend(!0,i,this.shapeSettings)}var r=t.result(this,"styleMap")||{};return e.extend(!0,i,r.global,r[o]);
}var a={global:{cursor:"inherit","stroke-width":1,stroke:"white",hover:{stroke:"black"
},unselected:{"fill-opacity":.2},selected:{"fill-opacity":.8},disabled:{unselected:{
"fill-opacity":.8}},noneSelected:{unselected:{"fill-opacity":.8}},allSelected:{selected:{
"fill-opacity":.8}}},markers:{r:10,symbol:"circle",labelAlign:"cm",labelYOffset:-20,
fill:"red","stroke-width":2},shapes:{"stroke-width":1.5,normal:{"z-index":0},hover:{
"z-index":1}}};return{getStyleMap:i}}),define("cde/components/Map/Map.colorMap",["amd!cdf/lib/underscore"],function(e){
"use strict";function t(t){var o=e.clone(t);return e.isArray(t)?(o=t,3===o.length&&o.push(1)):e.isString(t)&&("#"===t[0]?o=[parseInt(t.substring(1,3),16),parseInt(t.substring(3,5),16),parseInt(t.substring(5,7),16),1]:"rgba"===t.substring(0,4)&&(o=t.slice(5,-1).split(",").map(parseFloat))),
o}function o(e,t,o){var n,i,a,r=[],s=[];for(n=0;n<e.length;n++)for(r[n]=[],i=0,a=(t[n]-e[n])/o;o>i;i++)r[n][i]=e[n]+i*a;
for(n=0;n<r[0].length&&3>n;n++)for(s[n]=[],i=0;i<r.length;i++)s[n][i]=Math.round(r[i][n]);
return s}return{colormaps:{"default":["#79be77","#96b761","#b6ae4c","#e0a433","#f4a029","#fa8e1f","#f47719","#ec5f13","#e4450f","#dc300a"],
default0:[[0,102,0,1],[255,255,0,1],[255,0,0,1]],jet:[],gray:[[0,0,0,255],[255,255,255,1]],
"french-flag":[[255,0,0,1],[255,254,255,1],[0,0,255,1]]},getColorMap:function(){var n=[];
n=null==this.colormap||e.isArray(this.colormap)&&!this.colormap.length?e.clone(this.colormaps["default"]):e.map(this.colormap,JSON.parse),
n=e.map(n,t);for(var i=[],a=1,r=n.length;r>a;a++)i=i.concat(o(n[a-1],n[a],32));return e.map(i,function(e){
return"rgba("+e.join(",")+")"})},mapColor:function(e,t,o,n){var i=n.length,a=(e-t)/(o-t);
return n[Math.floor(a*(i-1))]},toGrayscale:function(e){var o=t(e),n=Math.round(Math.sqrt(.2989*o[0]*o[0]+.587*o[1]*o[1]+.114*o[2]*o[2])),i=[n,n,n,o[3]];
return"rgba("+i.join(",")+")"}}}),define("text!cde/components/Map/ControlPanel/ControlPanel.html",[],function(){
return'<div class="map-control-panel {{mode}}">\n    <div class="map-controls-zoom">\n        <div class="map-control-button map-control-zoom-in"></div>\n        <div class="map-control-button map-control-zoom-out"></div>\n        <div class="map-control-button map-control-zoombox"></div>\n    </div>\n    <div class="map-controls-mode">\n        {{#configuration.isSelector}}\n        <div class="map-control-button map-control-select"></div>\n        {{/configuration.isSelector}}\n        <div class="map-control-button map-control-pan"></div>\n    </div>\n</div>';
}),define("cde/components/Map/ControlPanel/ControlPanel",["cdf/lib/jquery","amd!cdf/lib/underscore","cdf/lib/mustache","cdf/lib/BaseEvents","../model/MapModel","text!./ControlPanel.html","css!./ControlPanel"],function(e,t,o,n,i,a){
"use strict";return n.extend({constructor:function(t,o,n){return this.base(),this.ph=e(t),
this.model=o,this.configuration=n,this},render:function(){var e={mode:this.model.getMode(),
configuration:this.configuration},t=o.render(a,e);return this.ph.empty().append(t),
this._bindEvents(),this},zoomOut:function(){return this.trigger("zoom:out"),this},
zoomIn:function(){return this.trigger("zoom:in"),this},setPanningMode:function(){
return this.model.setPanningMode(),this},setZoomBoxMode:function(){return this.model.setZoomBoxMode(),
this},setSelectionMode:function(){return this.model.setSelectionMode(),this},_bindEvents:function(){
var e={".map-control-zoom-out":this.zoomOut,".map-control-zoom-in":this.zoomIn,".map-control-pan":this.setPanningMode,
".map-control-zoombox":this.setZoomBoxMode,".map-control-select":this.setSelectionMode
},o=this;t.each(e,function(e,n){o.ph.find(n).click(t.bind(e,o))}),this.listenTo(this.model,"change:mode",t.bind(this._updateView,this));
},_updateView:function(){var e=this.model.getMode();this.ph.find(".map-control-panel").removeClass(t.values(i.Modes).join(" ")).addClass(e);
}})}),define("cde/components/Map/Map.tileServices",["cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t){
"use strict";function o(e,o){return t.object(t.map(e,function(e,t){return[t,o(e,t)];
}))}var n=e.extend({google:{},"google-roadmap":{},"google-terrain":{},"google-satellite":{},
"google-hybrid":{}},o({openstreetmaps:"http://{switch:a,b,c}.tile.openstreetmap.org/${z}/${x}/${y}.png",
"openstreemaps-bw":"http://{switch:a,b}.tiles.wmflabs.org/bw-mapnik/${z}/${x}/${y}.png"
},function(e,t){return{id:t,url:e,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreeMap</a> contributors',
legaInfo:["http://www.openstreetmap.org/copyright"]}}),o({"nokia-normal":"http://maptile.maps.svc.ovi.com/maptiler/maptile/newest/normal.day/${z}/${x}/${y}/256/png8",
"nokia-normal-grey":"http://maptile.maps.svc.ovi.com/maptiler/maptile/newest/normal.day.grey/${z}/${x}/${y}/256/png8",
"nokia-normal-transit":"http://maptile.maps.svc.ovi.com/maptiler/maptile/newest/normal.day.transit/${z}/${x}/${y}/256/png8",
"nokia-satellite":"http://maptile.maps.svc.ovi.com/maptiler/maptile/newest/satellite.day/${z}/${x}/${y}/256/png8",
"nokia-terrain":"http://maptile.maps.svc.ovi.com/maptiler/maptile/newest/terrain.day/${z}/${x}/${y}/256/png8"
},function(e,t){return{id:t,url:e,attribution:'Map tiles by <a href="https://www.here.com/">HERE</a>',
legalInfo:["https://legal.here.com/en/terms/serviceterms/us/"]}}),o({mapquest:"http://otile{switch:1,2,3,4}.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
"mapquest-normal":"http://otile{switch:1,2,3,4}.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
"mapquest-hybrid":"http://otile{switch:1,2,3,4}.mqcdn.com/tiles/1.0.0/hyb/${z}/${x}/${y}.png",
"mapquest-sat":"http://otile{switch:1,2,3,4}.mqcdn.com/tiles/1.0.0/sat/${z}/${x}/${y}.jpg"
},function(e,t){return{id:t,url:e,attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
legalInfo:["http://maps.stamen.com/"]}}),o({stamen:"http://{switch:a,b,c,d}.tile.stamen.com/terrain/${z}/${x}/${y}.jpg",
"stamen-terrain":"http://{switch:a,b,c,d}.tile.stamen.com/terrain/${z}/${x}/${y}.jpg",
"stamen-terrain-background":"http://{switch:a,b,c,d}.tile.stamen.com/terrain-background/${z}/${x}/${y}.jpg",
"stamen-terrain-labels":"http://{switch:a,b,c,d}.tile.stamen.com/terrain-labels/${z}/${x}/${y}.jpg",
"stamen-toner":"http://{switch:a,b,c,d}.tile.stamen.com/toner/${z}/${x}/${y}.png",
"stamen-toner-lite":"http://{switch:a,b,c,d}.tile.stamen.com/toner-lite/${z}/${x}/${y}.png",
"stamen-toner-background":"http://{switch:a,b,c,d}.tile.stamen.com/toner-background/${z}/${x}/${y}.png",
"stamen-toner-hybrid":"http://{switch:a,b,c,d}.tile.stamen.com/toner-hybrid/${z}/${x}/${y}.png",
"stamen-toner-labels":"http://{switch:a,b,c,d}.tile.stamen.com/toner-labels/${z}/${x}/${y}.png",
"stamen-toner-lines":"http://{switch:a,b,c,d}.tile.stamen.com/toner-lines/${z}/${x}/${y}.png",
"stamen-toner-2010":"http://{switch:a,b,c,d}.tile.stamen.com/toner-2010/${z}/${x}/${y}.png",
"stamen-toner-2011":"http://{switch:a,b,c,d}.tile.stamen.com/toner-2011/${z}/${x}/${y}.png",
"stamen-watercolor":"http://{switch:a,b,c,d}.tile.stamen.com/watercolor/${z}/${x}/${y}.jpg"
},function(e,t){return{id:t,url:e,attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
legalInfo:["http://maps.stamen.com/"]}}),o({"mapbox-satellite":"https://{switch:a,b,c,d}.tiles.mapbox.com/v3/examples.map-qfyrx5r8/${z}/${x}/${y}.png",
"mapbox-control-room":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.control-room/${z}/${x}/${y}.png",
"mapbox-blue-marble-jan":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jan/${z}/${x}/${y}.png",
"mapbox-blue-marble-jul":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jul/${z}/${x}/${y}.png",
"mapbox-blue-marble-jul-bw":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jul-bw/${z}/${x}/${y}.png",
"mapbox-natural-earth-1":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.natural-earth-1/${z}/${x}/${y}.png",
"mapbox-natural-earth-2":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.natural-earth-2/${z}/${x}/${y}.png",
"mapbox-natural-earth-hypso":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.natural-earth-hypso/${z}/${x}/${y}.png",
"mapbox-natural-earth-hypso-bathy":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.natural-earth-hypso-bathy/${z}/${x}/${y}.png",
"mapbox-oceans-white":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.oceans-white/${z}/${x}/${y}.png",
"mapbox-world-black":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.world-black/${z}/${x}/${y}.png",
"mapbox-world-blank-bright":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.world-blank-bright/${z}/${x}/${y}.png",
"mapbox-world-blank-light":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.world-blank-light/${z}/${x}/${y}.png",
"mapbox-world-blue":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.world-blue/${z}/${x}/${y}.png",
"mapbox-world-bright":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.world-bright/${z}/${x}/${y}.png",
"mapbox-world-dark":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.world-dark/${z}/${x}/${y}.png",
"mapbox-world-glass":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.world-glass/${z}/${x}/${y}.png",
"mapbox-world-light":"https://{switch:a,b,c,d}.tiles.mapbox.com/v3/mapbox.world-light/${z}/${x}/${y}.png",
"mapbox-world-print":"https://{switch:a,b}.tiles.mapbox.com/v3/mapbox.world-print/${z}/${x}/${y}.png"
},function(e,t){return{id:t,url:e,attribution:'Map tiles by <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Data by &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
legalInfo:["http://mapbox.com/about/maps/","http://www.openstreetmap.org/copyright"]
}}),o({openmapsurfer:"http://129.206.74.245:8001/tms_r.ashx?x=${x}&y=${y}&z=${z}",
"openmapsurfer-roads":"http://129.206.74.245:8001/tms_r.ashx?x=${x}&y=${y}&z=${z}",
"openmapsurfer-roads-grayscale":"http://129.206.74.245:8008/tms_rg.ashx?x=${x}&y=${y}&z=${z}",
"openmapsurfer-semitransparent":"http://129.206.74.245:8003/tms_h.ashx?x=${x}&y=${y}&z=${z}",
"openmapsurfer-hillshade":"http://129.206.74.245:8004/tms_hs.ashx?x=${x}&y=${y}&z=${z}",
"openmapsurfer-contour":"http://129.206.74.245:8006/tms_il.ashx?x=${x}&y=${y}&z=${z}",
"openmapsurfer-administrative":"http://129.206.74.245:8007/tms_b.ashx?x=${x}&y=${y}&z=${z}"
},function(e,t){return{id:t,url:e,attribution:'Map tiles by <a href="http://korona.geog.uni-heidelberg.de/contact.html">OpenMapSurfer</a>',
legalInfo:["http://korona.geog.uni-heidelberg.de/contact.html"]}}),o({"cartodb-positron":"http://{switch:a,b,c,d}.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png",
"cartodb-positron-nolabels":"http://{switch:a,b,c,d}.basemaps.cartocdn.com/light_nolabels/${z}/${x}/${y}.png",
"cartodb-darkmatter":"http://{switch:a,b,c,d}.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png",
"cartodb-darkmatter-nolabels":"http://{switch:a,b,c,d}.basemaps.cartocdn.com/dark_nolabels/${z}/${x}/${y}.png"
},function(e,t){return{id:t,url:e,attribution:'Map tiles by <a href="http://cartodb.com/attributions#basemaps">CartoDB</a>, under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a>. Data by <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, under ODbL.',
legalInfo:["https://cartodb.com/basemaps/"]}}),o({"esri-street":{url:"http://services.arcgisonline.com/ArcGIS/rest/services/World_street_Map/MapServer/tile/${z}/${y}/${x}",
attribution:'Map tiles by &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer">Esri</a>'
},"esri-ocean-basemap":{url:"http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/${z}/${y}/${x}",
attribution:'Map tiles by &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer">Esri</a>'
},"esri-natgeo":{url:"http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/${z}/${y}/${x}",
attribution:'Map tiles by &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer">Esri</a>'
},"esri-world":{url:"http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/${z}/${y}/${x}",
attribution:'Map tiles by &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">Esri</a>'
},"esri-lightgray":{url:"http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/${z}/${y}/${x}",
attribution:'Map tiles by &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer">Esri</a>'
},"esri-delorme":{url:"http://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/${z}/${y}/${x}",
attribution:'Map tiles by &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer">Esri</a>'
}},function(t,o){return e.extend(t,{id:o,legalInfo:["http://www.esri.com/legal/software-license","http://downloads2.esri.com/ArcGISOnline/docs/tou_summary.pdf"]
})}));return n["default"]=n.openstreetmaps,{tileServices:n,otherTileServices:[],tileServicesOptions:{
apple:{minZoom:3,maxZoom:14}}}}),define("cde/components/Map/engines/MapEngine",["cdf/lib/jquery","amd!cdf/lib/underscore","cdf/lib/BaseEvents","../model/MapModel"],function(e,t,o,n){
"use strict";return o.extend({tileServices:void 0,tileServicesOptions:void 0,$map:null,
tileLayer:function(e){},init:function(){var t=e.Deferred();return t.resolve(),t.promise();
},renderMap:function(e){},render:function(e){this.model=e;var t=this;this.listenTo(this.model.root(),"change:mode",function(e,o){
var n={selection:t.setSelectionMode,zoombox:t.setZoomBoxMode,pan:t.setPanningMode
};n[o]&&n[o].call(t),e.leafs().each(function(e){t.updateItem(e)})}),this.listenTo(this.model,"change:isSelected change:isHighlighted change:isVisible",function(e,o){
e.parent()!==e.root()&&e.leafs().each(function(e){t.updateItem(e)})}),e.leafs().each(function(e){
t.renderItem(e)}),e.isPanningMode()&&t.setPanningMode(),e.isZoomBoxMode()&&t.setZoomBoxMode(),
e.isSelectionMode()&&t.setSelectionMode()},updateViewport:function(e,t,o){},showPopup:function(){},
_wrapEvent:function(t){return{model:t,data:e.extend(!0,{},t.get("data"),t.get("rawData")),
id:t.get("id"),featureType:t.getFeatureType(),style:t.getStyle(),isSelected:function(){
return t.getSelection()===n.SelectionStates.ALL}}},toNativeStyle:function(e){var o={};
return t.each(e,function(e,t){switch(t){case"visible":case"zIndex":case"fillColor":
case"fillOpacity":case"strokeColor":case"strokeOpacity":case"strokeWidth":}}),o},
wrapEvent:function(e,t){return{latitude:void 0,longitude:void 0,data:void 0,feature:void 0,
featureType:t,style:void 0,mapEngineType:"abstract",draw:function(e){},raw:void 0
}},_updateMode:function(e){this.$map.removeClass(t.values(n.Modes).join(" ")).addClass(n.Modes[e]);
},_updateDrag:function(e){this.model.set("isDragging",!!e),this.$map.toggleClass("dragging",!!e).toggleClass("moving",!e);
},_selectUrl:function(e,t){for(var o=1,n=(Math.sqrt(5)-1)/2,i=0,a=e.length;a>i;i++)o*=e.charCodeAt(i)*n,
o-=Math.floor(o);return t[Math.floor(o*t.length)]},_switchUrl:function(e){var o=e.match(/(http[s]?:\/\/[0-9a-z.]*?)\{switch:([a-z0-9,]+)\}(.*)/);
if(!o||0==o.length)return e;var n=o[2].split(","),i=t.map(n,function(e){return o[1]+e+o[3];
});return i},_getTileServiceURL:function(e){var o=this.options.tiles.services[e],n=t.isObject(o)?o.url:o;
return n||e.length>0&&e.indexOf("{")>-1&&(n=e),n},_getTileServiceAttribution:function(e){
var o=this.options.tiles.services[e];return t.isObject(o)?o.attribution:""},_getTileServiceOptions:function(e){
var o=this.options.tiles.services[e],n=t.isObject(o)?o.options:{};return n||{}},_createClickHandler:function(e,o,n){
var i=this,a=0;return function(){a++;var r=this,s=t.map(arguments,t.identity);s.unshift(i),
1===a&&setTimeout(function(){1===a?t.isFunction(e)&&e.apply(r,s):t.isFunction(o)&&o.apply(r,s),
a=0},n||i.options.controls.doubleClickTimeoutMilliseconds||300)}}})}),define("cde/components/Map/engines/google/MapComponentAsyncLoader",["cdf/lib/jquery"],function(e){
"use strict";return function(e){var t,o=e.now();return function(n,i){if(t)return t;
var a=e.Deferred(),r=function(){a.resolve(window.google&&google.maps?google.maps:!1);
};if(window.google&&google.maps)r();else if(window.google&&google.load)google.load("maps",n||3,{
callback:r});else{var s="loadGoogleMaps_"+o++,l=e.extend({v:n||3,callback:s},i?{key:i
}:{});window[s]=function(){r(),setTimeout(function(){try{delete window[s]}catch(e){}
},20)},e.ajax({dataType:"script",data:l,url:"//maps.googleapis.com/maps/api/js"});
}return t=a.promise()}}(e)}),define("cde/components/Map/engines/openlayers2/MapEngineOpenLayers",["cdf/lib/jquery","amd!cdf/lib/underscore","../MapEngine","cdf/lib/OpenLayers","../../model/MapModel","../google/MapComponentAsyncLoader","css!./styleOpenLayers2"],function(e,t,o,n,i,a){
"use strict";function r(e,t){e.model&&(e.model.flatten().each(function(e){e.setSelection(i.SelectionStates.NONE);
}),e.trigger("engine:selection:complete"))}function s(e){e.setSelection(i.SelectionStates.ALL);
}function l(e){e.zoomIn()}function c(e,t){this.clickFeature(t);var o=t.attributes.model;
p(o);var n=o.getFeatureType()+":click";e.trigger("engine:selection:complete"),e.trigger(n,e.wrapEvent({
feature:t}))}function p(e){var t=i.SelectionStates,o={};o[t.ALL]=t.NONE,o[t.SOME]=t.NONE,
o[t.NONE]=t.ALL;var n=o[e.getSelection()];e.setSelection(n)}return o.extend({map:void 0,
API_KEY:0,constructor:function(e){this.base(),this.options=e,this.layers={},this.controls={};
},init:function(){var o=t.some(this.options.tiles.tilesets,function(e){return e.indexOf("google")>-1;
});return o?e.when(a("3",this.options.API_KEY)):this.base()},toNativeStyle:function(e){
var o={fill:"fillColor","fill-opacity":"fillOpacity",stroke:"strokeColor","stroke-opacity":"strokeOpacity",
"stroke-width":"strokeWidth",r:"pointRadius","z-index":"graphicZIndex","icon-url":"externalGraphic",
iconUrl:"externalGraphic",width:"graphicWidth",height:"graphicHeight",symbol:"graphicName",
fillColor:"fillColor",fillOpacity:"fillOpacity",strokeColor:"strokeColor",strokeOpacity:"strokeOpacity",
strokeWidth:"strokeWidth",zIndex:"graphicZIndex"},n={};return t.each(e,function(e,t){
var i=o[t];if(i)n[i]=e;else switch(t){case"visible":n.display=e?!0:"none";break;default:
n[t]=e}}),n},wrapEvent:function(t){var o,i=t.feature,a=t.feature.attributes.model,r=this.controls.mousePosition.lastXy;
o=r?this.map.getLonLatFromPixel(r).transform(this.map.getProjectionObject(),new n.Projection("EPSG:4326")):{
lat:void 0,lon:void 0};var s=this;return e.extend(this._wrapEvent(a),{mapEngineType:"openlayers2",
latitude:o.lat,longitude:o.lon,feature:i,_popup:function(t,o){var n=e.extend({width:100,
height:100},o||{});s.showPopup(null,i,n.height,n.width,t,null,null)},draw:function(e){
var o=s.toNativeStyle(e);t.feature.layer.drawFeature(i,o)},_setSelectedStyle:function(e){
t.feature.attributes.clickSelStyle=e},_getSelectedStyle:function(){return t.feature.attributes.clickSelStyle;
},raw:t})},renderItem:function(t){if(t){var o=this.layers[t.root().children().first().get("id")],n=t.get("geoJSON"),i=this;
e.when(n).then(function(n){if(n){var a=i._geoJSONParser.parseFeature(n),r=t.getStyle();
e.extend(!0,a,{attributes:{id:t.get("id"),model:t},style:i.toNativeStyle(r)}),o.addFeatures([a]);
}})}},showPopup:function(o,i,a,r,s,l,c){if(l&&l.length>0){var p=e("<div/>");p.append(e("#"+l)),
s=p.html()}var d="featurePopup";void 0!==c&&(d+=c.substring(1));var u=i.geometry.getCentroid();
i.lonlat=new n.LonLat(u.x,u.y);var h=new n.Popup.Anchored(d,i.lonlat,new n.Size(r,a),s,null,!0,null);
i.popup=h,h.feature=i,t.each(this.map.popups,function(e){e.hide()}),this.map.addPopup(h,!0);
},renderMap:function(o){var i=new n.Projection("EPSG:900913"),a=new n.Projection("EPSG:4326"),r=this.options.viewport.extent,s=new n.Bounds(r.southEast.longitude,r.southEast.latitude,r.northWest.longitude,r.northWest.latitude).transform(a,i),l={
zoom:this.options.viewport.zoomLevel["default"],zoomDuration:10,displayProjection:a,
restrictedExtent:s,projection:i,controls:[new n.Control.ScaleLine,new n.Control.Attribution]
};n.TileManager&&(l.tileManager=new n.TileManager),this.map=new n.Map(o,l),this.$map=e(o);
var c=this;this.map.isValidZoomLevel=function(e){var o=c.options.viewport.zoomLevel,n=t.isFinite(o.min)?o.min:0,i=t.isFinite(o.max)?o.max:this.getNumZoomLevels();
return null!=e&&e>=n&&i>=e},this.addLayers(),this.addControls(),this.registerViewportEvents(),
this._geoJSONParser=new n.Format.GeoJSON({ignoreExtraDims:!0,internalProjection:this.map.getProjectionObject(),
externalProjection:a})},addLayers:function(){var e=this;t.each(this.options.tiles.tilesets,function(o){
var i,a=t.isString(o)?o:o.id,r=a.slice(0).split("-")[0],s=a.slice(0).split("-").slice(1).join("-")||"default";
switch(r){case"google":var l={"default":{type:google.maps.MapTypeId.ROADMAP},roadmap:{
type:google.maps.MapTypeId.ROADMAP},terrain:{type:google.maps.MapTypeId.TERRAIN},
satellite:{type:google.maps.MapTypeId.SATELLITE},hybrid:{type:google.maps.MapTypeId.HYBRID
}};i=new n.Layer.Google(a,l[s]);break;case"opengeo":i=new n.Layer.WMS(a,"http://maps.opengeo.org/geowebcache/service/wms",{
layers:s,bgcolor:"#A1BDC4"},{wrapDateLine:!0,transitionEffect:"resize"});break;default:
i=e.tileLayer(a)}e.map.addLayer(i),e.layers[a]=i}),this.layers.shapes=new n.Layer.Vector("Shapes",{
rendererOptions:{zIndexing:!0}}),this.layers.markers=new n.Layer.Vector("Markers"),
this.map.addLayers([this.layers.shapes,this.layers.markers])},setPanningMode:function(){
this.controls.clickCtrl.activate(),this.controls.zoomBox.deactivate(),this.controls.boxSelector.deactivate(),
this._updateMode("pan")},setZoomBoxMode:function(){this.controls.clickCtrl.activate(),
this.controls.zoomBox.activate(),this.controls.boxSelector.deactivate(),this._updateMode("zoombox");
},setSelectionMode:function(){this.controls.clickCtrl.deactivate(),this.controls.boxSelector.activate(),
this.controls.zoomBox.deactivate(),this._updateMode("selection")},zoomIn:function(){
this.map.zoomIn()},zoomOut:function(){this.map.zoomOut()},updateViewport:function(e,o,i){
var a;if(t.isFinite(i))this.map.zoomTo(i);else{a=new n.Bounds;var r=this.layers.markers.getDataExtent(),s=this.layers.shapes.getDataExtent();
r||s?(a.extend(r),a.extend(s)):a=null,a?this.map.zoomToExtent(a):this.map.zoomTo(this.options.viewport.zoomLevel["default"]);
}var l,c=new n.Projection("EPSG:4326");t.isFinite(o)&&t.isFinite(e)?(l=new n.LonLat(e,o).transform(c,this.map.getProjectionObject()),
this.map.setCenter(l)):a||(l=new n.LonLat(-10,20).transform(c,this.map.getProjectionObject()),
this.map.setCenter(l))},addControls:function(){this._addControlKeyboardNavigation(),
this._addControlMouseNavigation(),this._addControlMousePosition(),this._addControlHover(),
this._addControlClick(),this._addControlBoxSelector(),this._addControlZoomBox()},
_addControlKeyboardNavigation:function(){var e=this.options.controls.enableKeyboardNavigation===!0;
this.controls.keyboardNavigation=new n.Control.KeyboardDefaults({}),this.map.addControl(this.controls.keyboardNavigation),
e?this.controls.keyboardNavigation.activate():this.controls.keyboardNavigation.deactivate();
},__patchDragHandler:function(e){var t=this;e.down=function(){t._updateDrag(!0)},
e.up=function(){t._updateDrag(!1)}},_addControlMouseNavigation:function(){var e=this.options.controls.enableZoomOnMouseWheel===!0;
this.controls.mouseNavigation=new n.Control.Navigation({zoomWheelEnabled:e}),this.map.addControl(this.controls.mouseNavigation),
this.__patchDragHandler(this.controls.mouseNavigation.dragPan.handler),this.controls.touchNavigation=new n.Control.TouchNavigation,
this.map.addControl(this.controls.touchNavigation),e?this.controls.touchNavigation.activate():this.controls.touchNavigation.deactivate();
},_addControlMousePosition:function(){this.controls.mousePosition=new n.Control.MousePosition,
this.map.addControl(this.controls.mousePosition)},_addControlClick:function(){this.controls.clickCtrl=new n.Control.SelectFeature([this.layers.markers,this.layers.shapes],{
clickout:!0,callbacks:{clickout:this._createClickHandler(null,l),click:function(t){
this.clickFeature(t);var o=t.attributes.model,n=o.getFeatureType()+":click";e.trigger(n,e.wrapEvent({
feature:t}))}}}),this.controls.clickCtrl.handlers.feature.stopDown=!1,this.map.addControl(this.controls.clickCtrl);
var e=this;this.controls.clickCtrl.events.on({activate:function(t){e._updateDrag(!1);
}})},_addControlBoxSelector:function(){var e=this;this.controls.boxSelector=new n.Control.SelectFeature([this.layers.shapes,this.layers.markers],{
clickout:!0,toggle:!0,multiple:!0,hover:!1,box:!0,callbacks:{clickout:this._createClickHandler(r,l),
click:this._createClickHandler(c,c)}}),this.map.addControl(this.controls.boxSelector),
this.__patchDragHandler(this.controls.boxSelector.handlers.box.dragHandler),this.controls.boxSelector.events.on({
activate:function(t){t.object.unselectAll(),e._updateDrag(!1)},boxselectionstart:function(e){
e.object.unselectAll()},boxselectionend:function(o){t.each(o.layers,function(e){t.each(e.selectedFeatures,function(e){
s(e.attributes.model)})}),o.object.unselectAll(),e.trigger("engine:selection:complete");
}})},_addControlZoomBox:function(){this.controls.zoomBox=new n.Control.ZoomBox({zoomOnClick:!1
}),this.map.addControl(this.controls.zoomBox);var e=this;this.controls.zoomBox.events.on({
activate:function(t){e._updateDrag(!1)}}),this.__patchDragHandler(this.controls.zoomBox.handler.dragHandler);
},_addControlHover:function(){function e(e){var o={featurehighlighted:"mouseover",
featureunhighlighted:"mouseout"};if(o[e.type]){var n=e.feature.attributes.model;n.setHover("mouseover"===o[e.type]),
t.trigger(n.getFeatureType()+":"+o[e.type],t.wrapEvent(e))}}var t=this;this.controls.hoverCtrl=new n.Control.SelectFeature([this.layers.markers,this.layers.shapes],{
hover:!0,highlightOnly:!0,renderIntent:"temporary",eventListeners:{featurehighlighted:e,
featureunhighlighted:e},outFeature:function(e){if(this.hover)if(this.highlightOnly)if(e._lastHighlighter==this.id)if(e._prevHighlighter&&e._prevHighlighter!=this.id){
delete e._lastHighlighter;var t=this.map.getControl(e._prevHighlighter);t&&(t.highlight(e),
this.events.triggerEvent("featureunhighlighted",{feature:e}))}else this.unhighlight(e);else this.events.triggerEvent("featureunhighlighted",{
feature:e});else this.unselect(e)}}),this.controls.hoverCtrl.handlers.feature.stopDown=!1,
this.map.addControl(this.controls.hoverCtrl),this.controls.hoverCtrl.activate()},
updateItem:function(e){var o=this.toNativeStyle(e.getStyle()),n=e.getFeatureType(),i="marker"===n?"markers":"shapes",a=this.layers[i],r=a.getFeaturesByAttribute("id",e.get("id"))[0];
r&&!t.isEqual(r.style,o)&&(r.style=o,r.layer.drawFeature(r,o))},tileLayer:function(e){
var o=this._getTileServiceURL(e),i=this._getTileServiceAttribution(e),a=t.extend({
attribution:i,transitionEffect:"resize"},this._getTileServiceOptions(e));return new n.Layer.XYZ(e,this._switchUrl(o),t.extend({},a));
},registerViewportEvents:function(){function e(e){var t=this.map.getProjectionObject(),o=new n.Projection("EPSG:4326"),i=function(e){
var n;if(e){var i=e.clone().transform(t,o);n={latitude:i.lat,longitude:i.lon}}else n={
latitude:void 0,longitude:void 0};return n},a=e.object.getExtent(),r={northEast:{},
southWest:{}};if(a){var s=a.transform(t,o);r={northEast:{latitude:s.top,longitude:s.right
},southWest:{latitude:s.bottom,longitude:s.left}}}var l={zoomLevel:e.object.getZoom(),
center:i(e.object.center),viewport:r,raw:e};return l}var o=this,i={zoomend:"map:zoom",
movestart:"map:center"};t.each(i,function(t,n){o.map.events.register(n,o.map,function(n){
var i=e.call(o,n);o.trigger(t,i)})})}})}),define("cde/components/Map/engines/google/MapOverlay",["cdf/lib/jquery"],function(e){
"use strict";function t(e,t,o,n,i,a,r){this.startPoint_=e,this.width_=t,this.height_=o,
this.map_=a,this.htmlContent_=n,this.popupContentDiv_=i,this.borderColor_=r,this.div_=null,
this.setMap(a)}return t}),define("cde/components/Map/engines/google/MapEngineGoogle",["cdf/lib/jquery","amd!cdf/lib/underscore","../MapEngine","./MapComponentAsyncLoader","../../model/MapModel","./MapOverlay","css!./styleGoogle"],function(e,t,o,n,i,a){
"use strict";function r(e){e.root().setSelection(i.SelectionStates.NONE)}function s(e){
e.setSelection(i.SelectionStates.ALL)}function l(e){e.setSelection(e.getSelection()===i.SelectionStates.ALL?i.SelectionStates.NONE:i.SelectionStates.ALL);
}function c(e,o){function n(e,o){var n=function(t){return i(e,t)};return t.some(o,n);
}function i(e,o){var n=function(t){return a(e,t)};return t.some(o,function(e){return t.some(e,n);
})}function a(e,t){var o=new google.maps.LatLng(t[1],t[0]);return e.contains(o)}if(!o)return!1;
switch(e.type){case"MultiPolygon":return n(o,e.coordinates);case"Polygon":return i(o,e.coordinates);
case"Point":return a(o,e.coordinates);default:return!1}}return o.extend({map:void 0,
centered:!1,boxStyle:{fillOpacity:.15,strokeWeight:.9},overlays:[],selectedFeature:void 0,
constructor:function(e){this.base(),this.options=e,this.controls={},this.controls.listenersHandle={};
},init:function(){return e.when(n("3",this.options.API_KEY)).then(function(t){a.prototype=new google.maps.OverlayView,
a.prototype.onAdd=function(){var t=document.createElement("DIV");t.id="MapOverlay",
t.style.position="absolute",this.borderColor_?t.style.border="3px solid "+this.borderColor_:t.style.border="none";
var o=this,n=e('<div id="MapOverlay_close" class="olPopupCloseBox" style="position: absolute;"></div>');
n.click(function(){o.setMap(null)}),e(t).append(n),this.popupContentDiv_&&this.popupContentDiv_.length>0?e(t).append(e("#"+this.popupContentDiv_)):t.innerHTML=this.htmlContent_,
this.div_=t;var i=this.getPanes();i.overlayLayer.appendChild(t)},a.prototype.draw=function(){
var e=this.getProjection(),t=e.fromLatLngToDivPixel(this.startPoint_),o=this.div_;
o.style.left=t.x+"px",o.style.top=t.y+30+"px",o.style.width=this.width_+"px",o.style.height=this.height_+"px";
},a.prototype.onRemove=function(){this.popupContentDiv_&&(e("#"+this.popupContentDiv_).append(e(this.div_)),
e(this.div_).detach()),this.div_.style.display="none",this.div_.parentNode.removeChild(this.div_),
this.div_=null}})},wrapEvent:function(o,n){var i=this,a=o.feature,r=a.getProperty("model");
return e.extend(this._wrapEvent(r),{latitude:o.latLng.lat(),longitude:o.latLng.lng(),
_popup:function(t,o){var n=e.extend({width:100,height:100},o||{});i.showPopup(null,a,n.height,n.width,t,null,null);
},feature:a,mapEngineType:"google3",draw:function(e){var o=i.toNativeStyle(e);a.setOptions(o),
a.setVisible(!1),a.setVisible(t.has(e,"visible")?!!e.visible:!0)},_setSelectedStyle:function(e){
a._selStyle=e},_getSelectedStyle:function(){return a._selStyle},raw:o})},toNativeStyle:function(e,o){
var n={fill:"fillColor","fill-opacity":"fillOpacity",stroke:"strokeColor","stroke-opacity":"strokeOpacity",
"stroke-width":"strokeWeight",r:"scale","z-index":"zIndex",fillColor:"fillColor",
fillOpacity:"fillOpacity",strokeColor:"strokeColor",strokeOpacity:"strokeOpacity",
strokeWidth:"strokeWeight",zIndex:"zIndex"},i={};return t.each(e,function(o,a){var r=n[a];
if(r)i[r]=o;else switch(a){case"visible":i.display=o?!0:"none";break;case"icon-url":
i.icon=o,i.size=new google.maps.Size(e.width,e.height);break;case"symbol":var s={
circle:google.maps.SymbolPath.CIRCLE},l=s[o];i.path=t.isUndefined(l)?o:l;break;default:
i[a]=o}}),o&&"marker"===o.getFeatureType()&&(i.icon||(i={icon:i})),i},updateItem:function(e){
var t=e.get("id"),o=this.map.data.getFeatureById(t),n=this.toNativeStyle(e.getStyle(),e);
this.map.data.overrideStyle(o,n)},renderMap:function(t){var o={mapTypeId:google.maps.MapTypeId.ROADMAP,
draggingCursor:"inherit",draggableCursor:"inherit",scrollwheel:this.options.controls.enableZoomOnMouseWheel===!0,
keyboardShortcuts:this.options.controls.enableKeyboardNavigation===!0,disableDefaultUI:!0
};this.map=new google.maps.Map(t,o),this.$map=e(this.map.getDiv()),this.$attribution=e('<div class="map-attribution" />'),
e(t).after(this.$attribution),this.addLayers(),this.addControls(),this.registerViewportEvents(),
this._registerDragCallbacks()},_registerDragCallbacks:function(){var e=this;google.maps.event.addListener(this.map,"dragstart",function(){
e._updateDrag(!0)});var t=this.options.viewport.extent,o=new google.maps.LatLngBounds(new google.maps.LatLng(t.southEast.latitude,t.southEast.longitude),new google.maps.LatLng(t.northWest.latitude,t.northWest.longitude));
google.maps.event.addListener(this.map,"dragend",function(){e._restrictPanning(o),
e._updateDrag(!1)})},_restrictPanning:function(e){var t=this.map.getCenter(),o=t.lng(),n=t.lat(),i=this.map.getBounds(),a=.5*(i.getNorthEast().lat()-i.getSouthWest().lat()),r=.5*(i.getNorthEast().lng()-i.getSouthWest().lng()),s=e.getNorthEast().lng(),l=e.getSouthWest().lng(),c=e.getNorthEast().lat(),p=e.getSouthWest().lat();
l>o-r&&(o=l+r),o+r>s&&(o=s-r),p>n-a&&(n=p+a),n+a>c&&(n=c-a),(t.lng()!==o||t.lat()!==n)&&this.map.setCenter(new google.maps.LatLng(n,o));
},zoomExtends:function(){var e=new google.maps.LatLngBounds;return this.map.data.forEach(function(t){
"Point"==t.getGeometry().getType()&&e.extend(t.getGeometry().get())}),e.isEmpty()?!1:(this.map.setCenter(e.getCenter()),
this.map.fitBounds(e),!0)},renderItem:function(o){if(o){var n=o.get("geoJSON"),i=this;
e.when(n).then(function(n){if(n){e.extend(!0,n,{properties:{id:o.get("id"),model:o
}});var a=i.map.data.addGeoJson(n,{idPropertyName:"id"});t.each(a,function(e){var t=i.toNativeStyle(o.getStyle(),o);
i.map.data.overrideStyle(e,t)})}})}},addControls:function(){this._addControlHover(),
this._addControlZoomBox(),this._addControlBoxSelector(),this._addLimitZoomLimits();
},_removeListeners:function(){t.each(this.controls.listenersHandle,function(e){e.remove();
})},_addControlHover:function(){function e(e,t){var o=e.feature.getProperty("model");
o.setHover("hover"===t)}var t=this;this.map.data.addListener("mouseover",function(o){
e(o,"hover");var n=o.feature.getProperty("model").getFeatureType();t.trigger(n+":mouseover",t.wrapEvent(o));
}),this.map.data.addListener("mouseout",function(o){e(o,"normal");var n=o.feature.getProperty("model").getFeatureType();
t.trigger(n+":mouseout",t.wrapEvent(o))})},_addControlZoomBox:function(){this.controls.zoomBox={
bounds:null,gribBoundingBox:null,mouseIsDown:!1}},_addControlBoxSelector:function(){
this.controls.boxSelector={bounds:null,gribBoundingBox:null,mouseIsDown:!1}},_addControlClick:function(){
var e=this;this.map.data.addListener("click",function(t){var o=t.feature.getProperty("model").getFeatureType();
e.trigger(o+":click",e.wrapEvent(t)),e.trigger("engine:selection:complete")})},_addLimitZoomLimits:function(){
var e=t.isFinite(this.options.viewport.zoomLevel.min)?this.options.viewport.zoomLevel.min:0,o=t.isFinite(this.options.viewport.zoomLevel.max)?this.options.viewport.zoomLevel.max:null,n=this;
google.maps.event.addListener(this.map,"zoom_changed",function(){n.map.getZoom()<e?n.map.setZoom(e):!t.isNull(o)&&n.map.getZoom()>o&&n.map.setZoom(o);
})},zoomIn:function(){this.map.setZoom(this.map.getZoom()+1)},zoomOut:function(){
this.map.setZoom(this.map.getZoom()-1)},setPanningMode:function(){return this._removeListeners(),
this._updateMode("pan"),this._updateDrag(!1),void this.map.setOptions({draggingCursor:"inherit",
draggableCursor:"inherit",draggable:!0})},setZoomBoxMode:function(){this._removeListeners(),
this._updateMode("zoombox"),this._updateDrag(!1);var e=this,t=this.controls.zoomBox,o=this.controls.listenersHandle;
this.map.setOptions({draggingCursor:"inherit",draggableCursor:"inherit",draggable:!1
}),o.drag=google.maps.event.addDomListener(this.map.getDiv(),"mousemove",function(e){
t.isDragging=1===e.buttons});var n=function(o){e.model.isZoomBoxMode()&&t.isDragging&&(t.mouseIsDown?e._onBoxResize(t,o):e._beginBox(t,o));
};o.mousemove=google.maps.event.addListener(this.map,"mousemove",n),o.mousemoveFeature=this.map.data.addListener("mousemove",n);
var i=this._endBox(t,function(){return e.model.isZoomBoxMode()},function(t){e.map.fitBounds(t);
});o.mouseup=google.maps.event.addListener(this.map,"mouseup",i),o.mouseupFeature=this.map.data.addListener("mouseup",i);
},setSelectionMode:function(){this._removeListeners(),this._updateMode("selection"),
this._updateDrag(!1);var t=this,o=t.controls.boxSelector,n=this.controls.listenersHandle;
this.map.setOptions({draggingCursor:"inherit",draggableCursor:"inherit",draggable:!1
}),n.drag=google.maps.event.addDomListener(this.map.getDiv(),"mousemove",function(e){
o.isDragging=1===e.buttons});var i=function(e){t.model.isSelectionMode()&&o.isDragging&&(o.mouseIsDown?t._onBoxResize(o,e):t._beginBox(o,e));
};n.mousemove=google.maps.event.addListener(this.map,"mousemove",i),n.mousemoveFeature=this.map.data.addListener("mousemove",i);
var a=function(){return t.model.isSelectionMode()},p=function(o){t.model.leafs().each(function(n){
var i=n.get("id");void 0!=t.map.data.getFeatureById(i)&&e.when(n.get("geoJSON")).then(function(e){
c(e.geometry,o)&&s(n)})}),t.trigger("engine:selection:complete")},d=this._endBox(o,a,p,this._createClickHandler(function(e,t){
r(e.model),e.trigger("engine:selection:complete")})),u=this._endBox(o,a,p,this._createClickHandler(function(e,t){
var o=t.feature.getProperty("model");l(o),e.trigger("engine:selection:complete");var n=o.getFeatureType();
e.trigger(n+":click",e.wrapEvent(t))},null));n.mouseup=google.maps.event.addListener(this.map,"mouseup",d),
n.mouseupFeature=this.map.data.addListener("mouseup",u)},_beginBox:function(e,t){
e.mouseIsDown=!0,e.mouseDownPos=t.latLng,this._updateDrag(!0)},_endBox:function(e,o,n,i){
var a=this;return function(r){if(o())if(e.mouseIsDown&&e.gribBoundingBox){e.mouseIsDown=!1,
e.mouseUpPos=r.latLng;var s=e.gribBoundingBox.getBounds();n(s),e.gribBoundingBox.setMap(null),
e.gribBoundingBox=null,a._updateDrag(!1)}else t.isFunction(i)&&i(r)}},_onBoxResize:function(t,o){
if(null!==t.gribBoundingBox){var n=new google.maps.LatLngBounds(t.mouseDownPos,null);
n.extend(o.latLng),t.gribBoundingBox.setBounds(n)}else t.gribBoundingBox=new google.maps.Rectangle(e.extend({
map:this.map,clickable:!1},this.boxStyle))},addLayers:function(){for(var o=[],n=[],i=[],a=0;a<this.options.tiles.tilesets.length;a++){
var r=this.options.tiles.tilesets[a].slice(0);n.push(r);var s=r.slice(0).split("-")[0],l=r.slice(0).split("-").slice(1).join("-")||"default";
switch(s){case"google":var c={"default":{mapTypeId:google.maps.MapTypeId.ROADMAP},
roadmap:{mapTypeId:google.maps.MapTypeId.ROADMAP},terrain:{mapTypeId:google.maps.MapTypeId.TERRAIN
},satellite:{mapTypeId:google.maps.MapTypeId.SATELLITE},hybrid:{mapTypeId:google.maps.MapTypeId.HYBRID
}};i.push(c[l]||c["default"]),o.push("");break;default:if(i.push({mapTypeId:r}),this.options.tiles.services[r]){
o.push(this.tileLayer(r));var p=this._getTileServiceAttribution(r);t.isEmpty(p)||this.$attribution.append(e("<div>"+p+"</div>"));
}else o.push("")}}for(a=0;a<o.length;a++)t.isEmpty(o[a])||(this.map.mapTypes.set(n[a],o[a]),
this.map.setMapTypeId(n[a]),this.map.setOptions(i[a]))},updateViewport:function(e,t,o){
o||(o=this.options.viewport.zoomLevel["default"]),this.map.setZoom(o),this.zoomExtends()||this.map.panTo(new google.maps.LatLng(38,-9));
},tileLayer:function(e){var o=t.extend({tileSize:new google.maps.Size(256,256),minZoom:1,
maxZoom:19},this.options.tiles.services[e].options||{}),n=this._switchUrl(this._getTileServiceURL(e)),i=this;
return new google.maps.ImageMapType(t.defaults({name:e.indexOf("/")>=0?"custom":e,
getTileUrl:function(e,o){var a=Math.pow(2,o);if(e.y<0||e.y>=a)return"404.png";e.x=(e.x%a+a)%a;
var r;if(t.isArray(n)){var s=t.template("${z}/${x}/${y}",{x:e.x,y:e.y,z:o},{interpolate:/\$\{(.+?)\}/g
});r=i._selectUrl(s,n)}else r=n;return t.template(r,{x:e.x,y:e.y,z:o},{interpolate:/\$\{(.+?)\}/g
})}},o))},showPopup0:function(o,n,i,r,s,l,c){l&&l.length>0&&(s=e("#"+l).html());var p=new a(n.getGeometry().get(),r,i,s,l,this.map,c);
this._popups=this._popups||[],t.each(this._popups,function(e){e.setMap(null)}),this._popups.push(p);
},showPopup:function(e,o,n,i,a,r,s){var l=new google.maps.InfoWindow({content:a,position:o.getGeometry().get(),
maxWidth:i});this._popups=this._popups||[],t.each(this._popups,function(e){e.close();
}),l.open(this.map),this._popups.push(l)},registerViewportEvents:function(){function e(){
function e(e){var t={latitude:e.lat(),longitude:e.lng()};return t}function t(t){o=t?{
northEast:e(t.getNorthEast()),southWest:e(t.getSouthWest())}:{northEast:{},southWest:{}
}}var o=t(this.map.getBounds()),n={zoomLevel:this.map.getZoom(),center:e(this.map.getCenter()||new google.maps.LatLng),
viewport:o,raw:this.map};return n}var o=this,n={zoom_changed:"map:zoom",center_changed:"map:center"
};t.each(n,function(t,n){google.maps.event.addListener(o.map,n,function(){var n=e.call(o);
o.trigger(t,n)})})}})}),define("cde/components/Map/addIns/LocationResolver/geonames/geonames",["cdf/AddIn","cdf/Dashboard.Clean","cdf/lib/jquery"],function(e,t,o){
"use strict";var n={name:"geonames",label:"GeoNames",defaults:{username:"",url:"http://ws.geonames.org/searchJSON"
},implementation:function(e,t,n){var i,a,r=t.address;r||(t.city?(r=t.city,a="P"):t.county?(r=t.county,
a="A"):t.region?(r=t.region,a="A"):t.state?(r=t.state,a="A"):t.country&&(r=t.country,
a="A"));var s={q:r.replace(/&/g,","),maxRows:1,dataType:"json",username:n.username,
featureClass:a};a&&(s.featureClass=a);var l=function(e){e.geonames&&e.geonames.length>0&&(i=[parseFloat(e.geonames[0].lng),parseFloat(e.geonames[0].lat)],
t.continuationFunction(i))},c=function(){t.continuationFunction(void 0)};return o.ajax({
dataType:"json",url:n.url,method:"GET",data:s,success:l,error:c})}};return t.registerGlobalAddIn("NewMapComponent","LocationResolver",new e(n)),
n}),define("cde/components/Map/addIns/LocationResolver/nominatim/nominatim",["cdf/AddIn","cdf/Dashboard.Clean","cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t,o,n){
"use strict";var i={name:"openstreetmap",label:"OpenStreetMap",defaults:{url:"//nominatim.openstreetmap.org/search",
serviceParams:{format:"json",limit:"1"},mapping:{street:"street",postalcode:"postalcode",
city:"city",county:"county",state:"state",country:"country"}},implementation:function(e,t,i){
if(t.latitude||t.longitude){var a=[parseFloat(t.longitude),parseFloat(t.latitude)];
return void t.continuationFunction(a)}var r=o.extend(!0,{},i.serviceParams);n.each(n.keys(t),function(e){
if(!n.isFunction(t[e])){var o=e.toLowerCase();o in i.mapping&&(r[i.mapping[o]]=t[e]);
}}),r.q&&(r={q:r.q+", "+n.compact(n.map(i.mapping,function(e){return r[e]})).join(", ")
});var s=function(e){if(e&&e.length>0){var o=[parseFloat(e[0].lon),parseFloat(e[0].lat)];
t.continuationFunction(o)}},l=function(){t.continuationFunction([])};return o.ajax({
dataType:"json",method:"GET",url:i.url,data:o.extend({},i.serviceParams,r),success:s,
error:l})}};return t.registerGlobalAddIn("NewMapComponent","LocationResolver",new e(i)),
i}),define("cde/components/Map/addIns/LocationResolver/mapquest/mapquest",["cdf/lib/jquery","cdf/AddIn","cdf/Dashboard.Clean","../nominatim/nominatim"],function(e,t,o,n){
"use strict";var i=e.extend(!0,{},n,{name:"mapquest",label:"MapQuest",defaults:{url:"http://open.mapquestapi.com/nominatim/v1/search"
}});return o.registerGlobalAddIn("NewMapComponent","LocationResolver",new t(i)),i;
}),define("cde/components/Map/addIns/MarkerImage/cggMarker/cggMarker",["cdf/AddIn","cdf/Dashboard.Clean","cdf/components/CggComponent.ext"],function(e,t,o){
"use strict";var n={name:"cggMarker",label:"CGG Marker",defaults:{},implementation:function(e,n,i){
var a=o.getCggDrawUrl()+"?script="+n.cggGraphName,r={};n.width&&(r.width=n.width),
n.height&&(r.height=n.height),r.noChartBg=!0;var s;for(s in n.parameters)r[s]=n.parameters[s];
var l=t.debug;l>1&&(r.debug=!0,r.debugLevel=l);for(s in r)void 0!==r[s]&&(a+="&param"+s+"="+encodeURIComponent(r[s]));
return a}};return t.registerGlobalAddIn("NewMapComponent","MarkerImage",new e(n)),
n}),define("cde/components/Map/addIns/MarkerImage/urlMarker/urlMarker",["cdf/AddIn","cdf/Dashboard.Clean","../../../Map.ext"],function(e,t,o){
"use strict";var n={name:"urlMarker",label:"Url Marker",defaults:{defaultUrl:o.getMarkerImgPath()+"marker_grey.png",
imagePath:o.getMarkerImgPath(),images:["marker_grey.png","marker_blue.png","marker_grey02.png","marker_orange.png","marker_purple.png"]
},implementation:function(e,t,o){return t.url?t.url:t.position?o.imagePath+o.images[t.position%o.images.length]||o.defaultUrl:o.defaultUrl;
}};return t.registerGlobalAddIn("NewMapComponent","MarkerImage",new e(n)),n}),define("cde/components/Map/addIns/ShapeResolver/simpleJSON",["cdf/AddIn","cdf/Dashboard.Clean","cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t,o,n){
"use strict";function i(e){var t=n.map(e,function(e){return n.map(e,function(e){return n.map(e,function(e){
return e.reverse()})})});return{type:"Feature",geometry:{type:"MultiPolygon",coordinates:t
},properties:{}}}var a={name:"simpleJSON",label:"Simple JSON shape resolver",defaults:{
url:""},implementation:function(e,t,a){var r=o.Deferred(),s=a.url||t._shapeSource;
return s?o.ajax(s,{async:!0,type:"GET",dataType:"json",success:function(e){r.resolve(n.chain(e).map(function(e,t){
return[t,i(e)]}).object().value())},error:function(){r.resolve({})}}):r.resolve(null),
r.promise()}};return t.registerGlobalAddIn("NewMapComponent","ShapeResolver",new e(a)),
a}),define("cde/components/Map/addIns/ShapeResolver/kml",["cdf/AddIn","cdf/Dashboard.Clean","cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t,o,n){
"use strict";function i(e,t,i){var r={};return o(e).find("Placemark").each(function(e,s){
var l;if(n.isFunction(i))try{l=i(s)}catch(c){l=o(s).find(t).text()}else l=o(s).find(t).text();
var p=n.map(o(s).find("Polygon"),function(e){var t=[];return n.each(["outerBoundaryIs","innerBoundaryIs"],function(i){
var a=o(e).find(i+" LinearRing coordinates");n.each(a,function(e){var i=o(e).text().trim();
if(i.length>0){var a=n.map(i.split(" "),function(e){return n.map(e.split(",").slice(0,2),parseFloat);
});t.push(a)}})}),t});n.isEmpty(p)||r[l]||(r[l]=a(p))}),r}function a(e){return{type:"Feature",
geometry:{type:"MultiPolygon",coordinates:e},properties:{}}}var r={name:"kml",label:"KML shape resolver",
defaults:{url:"",idSelector:"name",parseShapeKey:null},implementation:function(e,t,n){
var a=o.Deferred(),r=n.url||t._shapeSource,s=n.parseShapeKey||t._parseShapeKey;return r?o.ajax(r,{
async:!0,type:"GET",processData:!1,success:function(e){a.resolve(i(e,n.idSelector,s));
},error:function(){a.resolve({})}}):a.resolve(null),a.promise()}};return t.registerGlobalAddIn("NewMapComponent","ShapeResolver",new e(r)),
r}),define("cde/components/Map/addIns/ShapeResolver/geoJSON",["cdf/AddIn","cdf/Dashboard.Clean","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore"],function(e,t,o,n,i){
"use strict";function a(e,t){var o=i.chain(e.features).map(function(e,o){var n=r(e,t)||o;
return[n,e]}).object().value();return o}function r(e,t){var o=e.id;return t&&(o=e.properties[t]||o),
o}var s={name:"geoJSON",label:"GeoJSON shape resolver",defaults:{url:"",idPropertyName:""
},implementation:function(e,t,i){var r=n.Deferred(),s=i.url||t._shapeSource;return s?n.ajax(s,{
async:!0,type:"GET",dataType:"json",success:function(e){var t=a(e,i.idPropertyName);
r.resolve(t)},error:function(){o.log("NewMapComponent geoJSON addIn: failed to retrieve data at"+s,"debug"),
r.resolve({})}}):(o.log("NewMapComponent geoJSON addIn: no url is defined","debug"),
r.resolve(null)),r.promise()}};return t.registerGlobalAddIn("NewMapComponent","ShapeResolver",new e(s)),
s}),define("cde/components/Map/addIns/mapAddIns",["./LocationResolver/geonames/geonames","./LocationResolver/nominatim/nominatim","./LocationResolver/mapquest/mapquest","./MarkerImage/cggMarker/cggMarker","./MarkerImage/urlMarker/urlMarker","./ShapeResolver/simpleJSON","./ShapeResolver/kml","./ShapeResolver/geoJSON"],function(){}),
define("cde/components/Map/Map",["cdf/lib/jquery","amd!cdf/lib/underscore","cdf/components/UnmanagedComponent","./Map.lifecycle","./Map.selector","./Map.model","./Map.configuration","./Map.featureStyles","./Map.colorMap","./ControlPanel/ControlPanel","./Map.tileServices","./engines/openlayers2/MapEngineOpenLayers","./engines/google/MapEngineGoogle","./addIns/mapAddIns","css!./Map"],function(e,t,o,n,i,a,r,s,l,c,p,d,u){
"use strict";return o.extend(n).extend(i).extend(a).extend(r).extend(s).extend(l).extend(p).extend({
mapEngine:void 0,locationResolver:void 0,API_KEY:!1,update:function(){return this.preExec()?(this.maybeToggleBlock(!0),
this.configuration=this.getConfiguration(),void this._initMapEngine().then(t.bind(this.init,this)).then(t.bind(function(){
this.queryDefinition&&!t.isEmpty(this.queryDefinition)?this.getQueryData():this.onDataReady(this.testData||{});
},this))):!1},onDataReady:function(o){return e.when(this.resolveFeatures(o)).then(t.bind(function(e){
this.initModel(e),this._initControlPanel(),this.updateSelection(),this._processMarkerImages();
},this)).then(t.bind(this.render,this)).then(t.bind(this._concludeUpdate,this))},
_initMapEngine:function(){return"google"===this.configuration.addIns.MapEngine.name?this.mapEngine=new u(this.configuration):this.mapEngine=new d(this.configuration),
this.mapEngine.init()},init:function(){var t=e('<div class="map-container"/>');t.css({
position:"relative",overflow:"hidden",width:"100%",height:"100%"}),t.appendTo(this.placeholder().empty()),
this._relayMapEngineEvents(),this._registerEvents(),this.mapEngine.renderMap(t.get(0)),
this._initPopup()},_initControlPanel:function(){var o=e('<div class="map-controls" />').prependTo(this.placeholder());
this.controlPanel=new c(o,this.model,this.configuration),this.controlPanel.render();
var n=this,i={"zoom:in":t.bind(this.mapEngine.zoomIn,this.mapEngine),"zoom:out":t.bind(this.mapEngine.zoomOut,this.mapEngine)
};t.each(i,function(e,o){t.isFunction(e)&&n.listenTo(n.controlPanel,o,e)})},render:function(){
this.mapEngine.render(this.model);var e=this.configuration.viewport.center.latitude,t=this.configuration.viewport.center.longitude,o=this.configuration.viewport.zoomLevel["default"];
this.mapEngine.updateViewport(t,e,o)},_relayMapEngineEvents:function(){var e=this.mapEngine,o=this,n=["marker:click","marker:mouseover","marker:mouseout","shape:click","shape:mouseover","shape:mouseout","map:zoom","map:center"];
t.each(n,function(n){o.listenTo(e,n,function(){var e=t.union([n],arguments);o.trigger.apply(o,e);
})}),this.listenTo(this.mapEngine,"engine:selection:complete",function(){o.processChange();
})},_registerEvents:function(){function e(e,n,i){var a={};t.isFunction(n)&&(a=n.call(o,e)),
a=t.isObject(a)?a:{},t.size(a)>0&&e.draw(t.defaults(a,i,e.style))}var o=this;this.on("marker:click",function(e){
var n;t.isFunction(o.markerClickFunction)&&(n=o.markerClickFunction(e)),n!==!1&&o.model.isPanningMode()&&t.isEmpty(this.parameter)&&o.showPopup(e);
}),this.on("shape:mouseover",function(t){e(t,o.shapeMouseOver,{"z-index":1})}),this.on("shape:mouseout",function(t){
e(t,o.shapeMouseOut,{"z-index":0})}),this.on("shape:click",function(t){e(t,o.shapeMouseClick);
})},_processMarkerImages:function(){function o(o){var n=this.mapping||{},a=o.get("rawData")||[],r=e.extend(!0,{},i,{
data:a,position:o.get("rowIdx"),height:a[n.markerHeight],width:a[n.markerWidth]}),s=this.configuration.addIns.MarkerImage.name,l={},c={};
"cggMarker"===s&&(l={cggGraphName:this.configuration.addIns.MarkerImage.options.cggScript,
parameters:t.object(t.map(this.configuration.addIns.MarkerImage.options.parameters,function(e){
return[e[0],a[n[e[1]]]]}))});var p=this.getAddIn("MarkerImage",s);if(p){e.extend(!0,r,l);
var d=e.extend(!0,{},this.getAddInOptions("MarkerImage",p.getName()),c),u=p.call(this.placeholder(),r,d);
t.isObject(u)?e.extend(!0,o.attributes.styleMap,u):e.extend(!0,o.attributes.styleMap,{
width:r.width,height:r.height,"icon-url":u})}}var n=this.model.findWhere({id:"markers"
});if(n){var i={height:this.configuration.addIns.MarkerImage.options.height,width:this.configuration.addIns.MarkerImage.options.width,
url:this.configuration.addIns.MarkerImage.options.iconUrl};n.leafs().each(t.bind(o,this)).value();
}},_initPopup:function(){if(this.popupContentsDiv){var t=e("#"+this.popupContentsDiv),o=t.clone();
this.popupContentsDiv&&1!=t.length&&this.placeholder().append(o.html("None"))}},showPopup:function(o){
var n=o.data||[],i=this;if(this.popupContentsDiv||n[i.mapping.popupContents]){t.each(this.popupParameters,function(e){
i.dashboard.fireChange(e[1],n[i.mapping[e[0].toLowerCase()]])});var a=n[i.mapping.popupContentsHeight]||this.popupHeight,r=n[i.mapping.popupContentsWidth]||this.popupWidth,s=n[i.mapping.popupContents]||e("#"+this.popupContentsDiv).html(),l="#394246",c=t.isUndefined(n.marker)&&!this.markerCggGraph&&t.isUndefined(i.marker)&&"urlMarker"===i.configuration.addIns.MarkerImage.name;
if(c){var p=["#394246","#11b4eb","#7a879a","#e35c15","#674f73"];l=p[o.model.get("rowIdx")%p.length];
}this.mapEngine.showPopup(o.data,o.feature,a,r,s,this.popupContentsDiv,l)}}})});