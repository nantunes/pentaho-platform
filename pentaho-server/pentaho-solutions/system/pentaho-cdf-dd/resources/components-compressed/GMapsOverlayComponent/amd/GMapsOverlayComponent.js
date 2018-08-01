define("cde/components/GMapsOverlayComponent/GMapComponentAsyncLoader",["cdf/lib/jquery"],function(e){
return function(e){var n,t=e.now();return function(){if(n)return n;var o,a=e.Deferred(),i=function(){
a.resolve(window.google&&google.maps?google.maps:!1)},s="loadGoogleMapsOverlay_"+t++;
return window.google&&google.maps?i():window.google&&google.load?google.load("maps","3.exp",{
other_params:"sensor=false&libraries=places",callback:i}):(o={v:"3.exp",sensor:!1,
libraries:"places",callback:s},window[s]=function(){i(),setTimeout(function(){try{
delete window[s]}catch(e){}},20)},e.ajax({dataType:"script",data:o,url:"//maps.googleapis.com/maps/api/js"
})),n=a.promise()}}(e)}),define("cde/components/GMapsOverlayComponent/GMapEngine",["cdf/lib/Base","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore","./GMapComponentAsyncLoader"],function(e,n,t,o,a){
function i(e,n,t,o,a,i,s){this.startPoint_=e,this.width_=n,this.height_=t,this.map_=i,
this.htmlContent_=o,this.popupContentDiv_=a,this.borderColor_=s,this.div_=null,this.setMap(i);
}function s(e){return function(t){var o;window.event&&(o=window.event.keyCode),13==o&&geocoder.geocode({
address:e.value},function(e,t){t==google.maps.GeocoderStatus.OK?map.fitBounds(e[0].geometry.viewport):n.warn("The location entered could not be found");
})}}return e.extend({map:void 0,opts:{mapOptions:{styles:[{featureType:"administrative",
stylers:[{visibility:"off"}]}],disableDefaultUI:!1,mapTypeControl:!1,streetViewControl:!1
}},opened_info:void 0,centered:!1,overlays:[],init:function(e){t.when(a()).then(function(n){
e.draw()})},createMap:function(e,n,o,a,i,s){var l=t.extend(!0,{zoom:parseInt(a),center:new google.maps.LatLng(o,n),
mapTypeId:google.maps.MapTypeId.TERRAIN},this.opts.mapOptions);this.map=new google.maps.Map(e,l),
this.opened_info=new google.maps.InfoWindow,t(e).css("height",i+"px"),t(e).css("width",s+"px");
},renderMap:function(e,n,t,a){if(e){var i=this;for(var s in e){for(var l=e[s],r=[],p=0;p<l.length;p++)r.push(new google.maps.LatLng(l[p][0],l[p][1]));
var d={fillColor:n[s]?n[s].fillColor:t,fillOpacity:n[s]?n[s].fillOpacity:0,strokeWeight:n[s]?n[s].strokeWeight:0,
strokeColor:"#8c8c8c"},g=new google.maps.Polygon(o.extend({paths:r},d)),c=n[s]?n[s].value:null;
g.infowindow=new google.maps.InfoWindow({content:i.tooltipMessage(s,c),pixelOffset:{
width:0,height:-3}}),g.infowindow.dataPayload=o.extend({name:s,value:c,level:n[s]?n[s].level:0
},d),n[s]&&(n[s].shape=g),g.setMap(i.map),google.maps.event.addListener(g,"click",function(e){
i.clickCallback(this.infowindow,e),i.displayCoordinates(e.latLng)}),google.maps.event.addListener(g,"click",function(e){
this.fillOpacity=1,this.strokeColor="#000000",this.setVisible(!1),this.setVisible(!0),
this.infowindow.setOptions({maxWidth:500}),this.infowindow.setPosition(e.latLng),
this.infowindow.getMap()||this.infowindow.open(i.map),i.opened_info=this.infowindow;
}),google.maps.event.addListener(g,"mouseout",function(e){i.opened_info.close(),this.fillOpacity=.6,
this.strokeColor="#8c8c8c",this.setVisible(!1),this.setVisible(!0)})}}},tooltipMessage:function(e,n){
var t=e+"</br>"+(n?n:"-");return'<div class="gmapsoverlay-tooltip">'+t+"</div>"},
clickCallback:function(e,t){n.log(e.dataPayload.name+":"+e.dataPayload.value+":"+100*e.dataPayload.level+"%");
},displayCoordinates:function(e){var t=e.lat();t=t.toFixed(4);var o=e.lng();o=o.toFixed(4),
n.log("Lat: "+t+"  Lng: "+o)},showInfo:function(e,n,t){n.opened_info.close(),t.setPosition(e.latLng),
t.open(n.map),n.opened_info=t},resetButton:function(e,n,t,o){var a=this,i=document.createElement("div"),s=document.createElement("a");
i.appendChild(s),i.setAttribute("id","controlReset_"+e),s.setAttribute("id","linkReset_"+e),
s.href="javascript:void(0)",s.className="gmapsoverlay-button",s.onclick=function(){
a.map.setZoom(n),a.map.setCenter(new google.maps.LatLng(o,t))},s.innerHTML="Reset",
a.map.controls[google.maps.ControlPosition.TOP_LEFT].push(i)},searchBox:function(e){
var n=this,t=document.createElement("div"),o=document.createElement("input");t.appendChild(o),
t.setAttribute("id","locationField_"+e),o.style.width="250px",o.style.height="100%",
o.style.margin="0px",o.style.border="1px solid #A9BBDF",o.style.borderRadius="2px",
o.setAttribute("id","locationInput_"+e),n.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(t);
var a=new google.maps.places.Autocomplete(o,{types:["geocode"]});google.maps.event.addListener(a,"place_changed",function(){
var e=a.getPlace();e.geometry.viewport?n.map.fitBounds(e.geometry.viewport):(n.map.setCenter(e.geometry.location),
n.map.setZoom(17))}),google.maps.event.addListener(n.map,"bounds_changed",function(){
o.blur(),o.value=""}),o.onkeyup=s(o)},renderLegend:function(e,n,t,a,i,s,l,r){if(l){
var p=function(e,n){if(0==e)return 0;if(Math.round(e)==e)return e;var t=Math.round(-Math.log(Math.abs(e))/Math.LN10+(n||2));
return 0>t&&(t=0),e.toFixed(t)};if(t&&n){var d=o.map(t,function(e){return e.value;
}),g=o.min(d),c=o.max(d),u=a.length,m=1;-5>c&&(m=((c-g)/5).toString().split("."),
m=m.length>1?Math.pow(10,Math.max(m[1].length,3)):1);var f=o.map(i,function(e){var n=(g+e*(c-g)*m)/m;
return{value:p(n,1),level:e,fillColor:a[Math.floor(e*u-1)]}})}this.legend=f}var h=document.createElement("DIV");
h.style.padding="5px",h.setAttribute("id","legendDiv_"+e);var v=document.createElement("DIV");
v.setAttribute("id","legendUI_"+e),v.title="Legend",h.appendChild(v);var y=document.createElement("DIV");
if(y.setAttribute("id","legendText_"+e),y.style.fontFamily="Arial,sans-serif",y.style.fontSize="12px",
y.style.paddingLeft="4px",y.style.paddingRight="4px",l){var C="";o.each(f,function(e){
var n=0!=e.level?100*e.level+"%":"-1px";C+="<div class='gmapsoverlay-legend-label' style='left:"+n+";position:absolute;'><div>"+e.value+"</div></div>";
}),y.innerHTML="<div class='gmapsoverlay-legend'>  <div class='gmapsoverlay-legend-title'>"+s.text+"</div>  <div class='gmapsoverlay-legend-scale'>    <div class='gmapsoverlay-legend-labels'>"+C+"</div>  </div>  <div class='gmapsoverlay-legend-source'>"+s.source+"</div></div>";
}else{for(var C="",w=Object.keys(s.ranges).length,M=0;w>M;M++)C+=r?"<li><span style='background:"+s.ranges[M].color+";'></span>"+s.ranges[M].desc+"</li>":isNaN(s.ranges[M].min)?"<li><span style='background:"+s.ranges[M].color+";'><= "+s.ranges[M].max+"</span>"+s.ranges[M].desc+"</li>":isNaN(s.ranges[M].max)?"<li><span style='background:"+s.ranges[M].color+";'>>= "+s.ranges[M].min+"</span>"+s.ranges[M].desc+"</li>":"<li><span style='background:"+s.ranges[M].color+";'>"+s.ranges[M].max+"</span>"+s.ranges[M].desc+"</li>";
y.innerHTML="<div class='gmapsoverlay-legend' style='width: auto'>  <div class='gmapsoverlay-legend-title'>"+s.text+"</div>  <div class='gmapsoverlay-legend-scale-range'>    <ul class='gmapsoverlay-legend-labels-range'>"+C+"</ul>  </div>  <div class='gmapsoverlay-legend-source'>"+s.source+"</div></div>";
}v.appendChild(y),this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(h);
},showPopup:function(e,n,o,a,s,l,r){var p=new i(n.getPosition(),a,o,s,l,this.map,r);
t(this.overlays).each(function(e,n){n.setMap(null)}),this.overlays.push(p)}})}),define("cde/components/GMapsOverlayComponent/GMapsOverlayComponent.ext",[],function(){
return{getResourceUrl:function(){return"res"},getBaseSolutionPluginRoot:function(){
return"/public/"}}}),define("cde/components/GMapsOverlayComponent/GMapsOverlayComponent",["cdf/components/UnmanagedComponent","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore","./GMapEngine","./GMapsOverlayComponent.ext","css!./GMapsOverlayComponent"],function(e,n,t,o,a,i){
return e.extend({mapEngineOpts:void 0,colormap:[[0,102,0,255],[255,255,0,255],[255,0,0,255]],
getColorLegend:function(e,n){for(var t=Object.keys(n.ranges).length,o=0;t>o;o++)if(isNaN(n.ranges[o].min)&&e<=n.ranges[o].max||isNaN(n.ranges[o].max)&&e>=n.ranges[o].min||e>=n.ranges[o].min&&e<=n.ranges[o].max)return n.ranges[o].color;
},getColorMap:function(){for(var e=function(e,n,t){var o,a,i,s=[],l=[];for(o=0;o<e.length;o++)for(s[o]=[],
a=0,i=(n[o]-e[o])/t;t>a;a++)s[o][a]=e[o]+a*i;for(o=0;o<s[0].length;o++)for(l[o]=[],
a=0;a<s.length;a++)l[o][a]=Math.round(s[a][o]);return l},n=[],t=1;t<this.colormap.length;t++)n=n.concat(e(this.colormap[t-1],this.colormap[t],512));
return o.map(n,function(e){return"rgba("+e.join(",")+")"})},_getMapDefinition:function(e,n){
if(!!e.mapName&!e.mapDefinition){var o=/\.[a-zA-Z]+$/.test(e.mapName)?i.getResourceUrl()+e.mapName:i.getResourceUrl()+i.getBaseSolutionPluginRoot()+"cde/components/gmapsoverlay/map-def/"+e.mapName+".js";
t.getJSON(o,function(n,t){n&&(e.mapDefinition=n)})}n(e)},postProcessData:function(e,n){
var a=.6,i=.5;n.queryResult={},n.isContinuousMapColor=t.isEmptyObject(n.legend);var s=e.metadata.length;
for(var l in e.resultset){var r,p,d=e.resultset[l];3>s?(r=parseFloat(d[1]),p="",n.isColorDefinedInDS=!1):(r=d[1],
p=d[2],n.isColorDefinedInDS=!0),n.queryResult[d[0]]={value:r,color:p},d.length>2&&(n.queryResult[d[0]].payload=d.slice(2));
}if(n._parseLegend(n.isContinuousMapColor),n.isContinuousMapColor){var g=n.getColorMap(),c=o.map(n.queryResult,function(e){
return e.value}),u=o.min(c),m=o.max(c),f=g.length;o.each(n.queryResult,function(e,t){
var s=(e.value-u)/(m-u);n.queryResult[t]=o.extend({level:s,fillColor:g[Math.floor(s*(f-1))],
fillOpacity:a,strokeWeight:i},n.queryResult[t])})}else o.each(n.queryResult,function(e,t){
var s;s=n.isColorDefinedInDS?e.color:n.getColorLegend(e.value,n.legendRanges),n.queryResult[t]=o.extend({
fillColor:s,fillOpacity:a,strokeWeight:i},n.queryResult[t])})},_parseLegend:function(e){
if(this.legendRanges=new Object,this.legendRanges.ranges=new Object,this.legendRanges.text=this.legendText?this.legendText:"",
this.legendRanges.source=this.sourceText?this.sourceText:" ",!e)for(var n=0;n<this.legend.length;n++){
var t=this.legend[n][1].split(";");this.legendRanges.ranges[n]=new Object,this.legendRanges.ranges[n].min=parseFloat(t[0]),
this.legendRanges.ranges[n].max=parseFloat(t[1]),this.legendRanges.ranges[n].color=t[2],
this.legendRanges.ranges[n].desc=this.legend[n][0]}},update:function(){var e=this;
return t.isEmptyObject(e.queryDefinition)?void n.error("GMaps - Datasource not defined."):e.mapName?e.mapHeight&&e.mapWidth?void e._getMapDefinition(e,function(e){
e.triggerQuery(e.queryDefinition,function(n){e.postProcessData(n,e),e._initialize();
})}):void n.error("GMaps - Map Height and/or Width not defined."):void n.error("GMaps - Map Name not defined.");
},_initialize:function(){this.mapEngine=new a,this.mapEngine.opts=t.extend(!0,this.mapEngine.opts,this.mapEngineOpts),
this.clickCallback&&(this.mapEngine.clickCallback=this.clickCallback),this.mapEngine.init(this);
},draw:function(){var e=this;e.ph=t("#"+e.htmlObject),e.ph.empty(),e.mapEngine.createMap(e.ph[0],e.centerLongitude,e.centerLatitude,e.defaultZoomLevel,e.mapHeight,e.mapWidth),
e.mapEngine.renderMap(e.mapDefinition,e.queryResult,e.defaultColor?e.defaultColor:"#EAEAEA",e.legendRanges),
e.mapEngine.resetButton(e.ph[0].id,e.defaultZoomLevel,e.centerLongitude,this.centerLatitude),
1==e.search&&e.mapEngine.searchBox(e.ph[0].id),e.mapEngine.renderLegend(e.ph[0].id,e.mapDefinition,e.queryResult,e.getColorMap(),[0,.5,1],e.legendRanges,e.isContinuousMapColor,e.isColorDefinedInDS);
}})}),define("cde/components/GMapsOverlayComponent",["cde/components/GMapsOverlayComponent/GMapsOverlayComponent"],function(e){
return e});