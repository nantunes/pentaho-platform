function submitGeocode(e){return function(t){var n;window.event&&(n=window.event.keyCode),
13==n&&geocoder.geocode({address:e.value},function(e,t){t==google.maps.GeocoderStatus.OK?map.fitBounds(e[0].geometry.viewport):alert("The location entered could not be found");
})}}var gMapsOverlayComponent=UnmanagedComponent.extend({mapEngineOpts:void 0,colormap:[[0,102,0,255],[255,255,0,255],[255,0,0,255]],
getColorLegend:function(e,t){for(var n=Object.keys(t.ranges).length,o=0;n>o;o++)if(isNaN(t.ranges[o].min)&&e<=t.ranges[o].max||isNaN(t.ranges[o].max)&&e>=t.ranges[o].min||e>=t.ranges[o].min&&e<=t.ranges[o].max)return t.ranges[o].color;
},getColorMap:function(){var e=function(e,t,n){var o,i,a,s=[],l=[];for(o=0;o<e.length;o++)for(s[o]=[],
i=0,a=(t[o]-e[o])/n;n>i;i++)s[o][i]=e[o]+i*a;for(o=0;o<s[0].length;o++)for(l[o]=[],
i=0;i<s.length;i++)l[o][i]=Math.round(s[i][o]);return l},t=[];for(k=1;k<this.colormap.length;k++)t=t.concat(e(this.colormap[k-1],this.colormap[k],512));
return _.map(t,function(e){return"rgba("+e.join(",")+")"})},_getMapDefinition:function(e,t){
if(!!e.mapName&!e.mapDefinition){var n=/\.[a-zA-Z]+$/.test(e.mapName)?wd.helpers.repository.getRsourceUrl()+e.mapName:wd.helpers.repository.getRsourceUrl()+wd.helpers.repository.getBaseSolutionPluginRoot()+"cde/components/gmapsoverlay/map-def/"+e.mapName+".js";
$.getJSON(n,function(t,n){t&&(e.mapDefinition=t)})}t(e)},postProcessData:function(e,t){
var n=.6,o=.5;t.queryResult={},t.isContinuousMapColor=$.isEmptyObject(t.legend);var a=e.metadata.length;
for(i in e.resultset){var s,l=e.resultset[i];3>a?(s=parseFloat(l[1]),color="",t.isColorDefinedInDS=!1):(s=l[1],
color=l[2],t.isColorDefinedInDS=!0),t.queryResult[l[0]]={value:s,color:color},l.length>2&&(t.queryResult[l[0]].payload=l.slice(2));
}if(t._parseLegend(t.isContinuousMapColor),t.isContinuousMapColor){var r=t.getColorMap(),d=_.map(t.queryResult,function(e){
return e.value}),p=_.min(d),g=_.max(d),c=r.length;_.each(t.queryResult,function(e,i){
var a=(e.value-p)/(g-p);t.queryResult[i]=_.extend({level:a,fillColor:r[Math.floor(a*(c-1))],
fillOpacity:n,strokeWeight:o},t.queryResult[i])})}else _.each(t.queryResult,function(e,i){
var a;a=t.isColorDefinedInDS?e.color:t.getColorLegend(e.value,t.legendRanges),t.queryResult[i]=_.extend({
fillColor:a,fillOpacity:n,strokeWeight:o},t.queryResult[i])})},_parseLegend:function(e){
if(this.legendRanges=new Object,this.legendRanges.ranges=new Object,this.legendRanges.text=this.legendText?this.legendText:"",
this.legendRanges.source=this.sourceText?this.sourceText:" ",!e)for(var t=0;t<this.legend.length;t++){
var n=this.legend[t][1].split(";");this.legendRanges.ranges[t]=new Object,this.legendRanges.ranges[t].min=parseFloat(n[0]),
this.legendRanges.ranges[t].max=parseFloat(n[1]),this.legendRanges.ranges[t].color=n[2],
this.legendRanges.ranges[t].desc=this.legend[t][0]}},update:function(){return myself=this,
$.isEmptyObject(myself.queryDefinition)?void Dashboards.error("GMaps - Datasource not defined."):myself.mapName?myself.mapHeight&&myself.mapWidth?void myself._getMapDefinition(myself,function(e){
e.triggerQuery(e.queryDefinition,function(t){e.postProcessData(t,e),e._initialize();
})}):void Dashboards.error("GMaps - Map Height and/or Width not defined."):void Dashboards.error("GMaps - Map Name not defined.");
},_initialize:function(){this.mapEngine=new GMapEngine,this.mapEngine.opts=$.extend(!0,this.mapEngine.opts,this.mapEngineOpts),
this.clickCallback&&(this.mapEngine.clickCallback=this.clickCallback),this.mapEngine.init(this);
},draw:function(){var e=this;this.ph=$("#"+this.htmlObject),this.ph.empty(),this.mapEngine.createMap(this.ph[0],this.centerLongitude,this.centerLatitude,this.defaultZoomLevel,this.mapHeight,this.mapWidth),
this.mapEngine.renderMap(this.mapDefinition,this.queryResult,this.defaultColor?this.defaultColor:"#EAEAEA",e.legendRanges),
this.mapEngine.resetButton(this.ph[0].id,this.defaultZoomLevel,this.centerLongitude,this.centerLatitude),
1==this.search&&this.mapEngine.searchBox(this.ph[0].id),this.mapEngine.renderLegend(this.ph[0].id,this.mapDefinition,this.queryResult,this.getColorMap(),[0,.5,1],e.legendRanges,e.isContinuousMapColor,e.isColorDefinedInDS);
}}),GMapEngine=Base.extend({map:void 0,opts:{mapOptions:{styles:[{featureType:"administrative",
stylers:[{visibility:"off"}]}],disableDefaultUI:!1,mapTypeControl:!1,streetViewControl:!1
}},opened_info:void 0,centered:!1,overlays:[],init:function(e){$.when(loadGoogleMapsOverlay()).then(function(t){
e.draw()})},createMap:function(e,t,n,o,i,a){var s=$.extend(!0,{zoom:parseInt(o),center:new google.maps.LatLng(n,t),
mapTypeId:google.maps.MapTypeId.TERRAIN},this.opts.mapOptions);this.map=new google.maps.Map(e,s),
this.opened_info=new google.maps.InfoWindow,$(e).css("height",i+"px"),$(e).css("width",a+"px");
},renderMap:function(e,t,n,o){if(e){var i=this;for(var a in e){for(var s=e[a],l=[],r=0;r<s.length;r++)l.push(new google.maps.LatLng(s[r][0],s[r][1]));
var d={fillColor:t[a]?t[a].fillColor:n,fillOpacity:t[a]?t[a].fillOpacity:0,strokeWeight:t[a]?t[a].strokeWeight:0,
strokeColor:"#8c8c8c"},p=new google.maps.Polygon(_.extend({paths:l},d)),g=t[a]?t[a].value:null;
p.infowindow=new google.maps.InfoWindow({content:i.tooltipMessage(a,g),pixelOffset:{
width:0,height:-3}}),p.infowindow.dataPayload=_.extend({name:a,value:g,level:t[a]?t[a].level:0
},d),t[a]&&(t[a].shape=p),p.setMap(i.map),google.maps.event.addListener(p,"click",function(e){
i.clickCallback(this.infowindow,e),i.displayCoordinates(e.latLng)}),google.maps.event.addListener(p,"click",function(e){
this.fillOpacity=1,this.strokeColor="#000000",this.setVisible(!1),this.setVisible(!0),
this.infowindow.setOptions({maxWidth:500}),this.infowindow.setPosition(e.latLng),
this.infowindow.getMap()||this.infowindow.open(i.map),i.opened_info=this.infowindow;
}),google.maps.event.addListener(p,"mouseout",function(e){i.opened_info.close(),this.fillOpacity=.6,
this.strokeColor="#8c8c8c",this.setVisible(!1),this.setVisible(!0)})}}},tooltipMessage:function(e,t){
var n=e+"</br>"+(t?t:"-");return'<div class="gmapsoverlay-tooltip">'+n+"</div>"},
clickCallback:function(e,t){Dashboards.log(e.dataPayload.name+":"+e.dataPayload.value+":"+100*e.dataPayload.level+"%");
},displayCoordinates:function(e){var t=e.lat();t=t.toFixed(4);var n=e.lng();n=n.toFixed(4),
Dashboards.log("Lat: "+t+"  Lng: "+n)},showInfo:function(e,t,n){t.opened_info.close(),
n.setPosition(e.latLng),n.open(t.map),t.opened_info=n},resetButton:function(e,t,n,o){
var i=this,a=document.createElement("div"),s=document.createElement("a");a.appendChild(s),
a.setAttribute("id","controlReset_"+e),s.setAttribute("id","linkReset_"+e),s.href="javascript:void(0)",
s.className="gmapsoverlay-button",s.onclick=function(){i.map.setZoom(t),i.map.setCenter(new google.maps.LatLng(o,n));
},s.innerHTML="Reset",i.map.controls[google.maps.ControlPosition.TOP_LEFT].push(a);
},searchBox:function(e){var t=this,n=document.createElement("div"),o=document.createElement("input");
n.appendChild(o),n.setAttribute("id","locationField_"+e),o.style.width="250px",o.style.height="100%",
o.style.margin="0px",o.style.border="1px solid #A9BBDF",o.style.borderRadius="2px",
o.setAttribute("id","locationInput_"+e),t.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(n);
var i=new google.maps.places.Autocomplete(o,{types:["geocode"]});google.maps.event.addListener(i,"place_changed",function(){
var e=i.getPlace();e.geometry.viewport?t.map.fitBounds(e.geometry.viewport):(t.map.setCenter(e.geometry.location),
t.map.setZoom(17))}),google.maps.event.addListener(t.map,"bounds_changed",function(){
o.blur(),o.value=""}),o.onkeyup=submitGeocode(o)},renderLegend:function(e,t,n,o,i,a,s,l){
if(s){var r=function(e,t){if(0==e)return 0;if(Math.round(e)==e)return e;var n=Math.round(-Math.log(Math.abs(e))/Math.LN10+(t||2));
return 0>n&&(n=0),e.toFixed(n)};if(n&&t){var d=_.map(n,function(e){return e.value;
}),p=_.min(d),g=_.max(d),c=o.length,u=1;-5>g&&(u=((g-p)/5).toString().split("."),
u=u.length>1?Math.pow(10,Math.max(u[1].length,3)):1);var h=_.map(i,function(e){var t=(p+e*(g-p)*u)/u;
return{value:r(t,1),level:e,fillColor:o[Math.floor(e*c-1)]}})}this.legend=h}var m=document.createElement("DIV");
m.style.padding="5px",m.setAttribute("id","legendDiv_"+e);var f=document.createElement("DIV");
f.setAttribute("id","legendUI_"+e),f.title="Legend",m.appendChild(f);var v=document.createElement("DIV");
if(v.setAttribute("id","legendText_"+e),v.style.fontFamily="Arial,sans-serif",v.style.fontSize="12px",
v.style.paddingLeft="4px",v.style.paddingRight="4px",s){var y="";_.each(h,function(e){
var t=0!=e.level?100*e.level+"%":"-1px";y+="<div class='gmapsoverlay-legend-label' style='left:"+t+";position:absolute;'><div>"+e.value+"</div></div>";
}),v.innerHTML="<div class='gmapsoverlay-legend'>  <div class='gmapsoverlay-legend-title'>"+a.text+"</div>  <div class='gmapsoverlay-legend-scale'>    <div class='gmapsoverlay-legend-labels'>"+y+"    </div>  </div><div class='gmapsoverlay-legend-source'>"+a.source+"</div></div>";
}else{for(var y="",w=Object.keys(a.ranges).length,b=0;w>b;b++)y+=l?"<li><span style='background:"+a.ranges[b].color+";'></span>"+a.ranges[b].desc+"</li>":isNaN(a.ranges[b].min)?"<li><span style='background:"+a.ranges[b].color+";'><= "+a.ranges[b].max+"</span>"+a.ranges[b].desc+"</li>":isNaN(a.ranges[b].max)?"<li><span style='background:"+a.ranges[b].color+";'>>= "+a.ranges[b].min+"</span>"+a.ranges[b].desc+"</li>":"<li><span style='background:"+a.ranges[b].color+";'>"+a.ranges[b].max+"</span>"+a.ranges[b].desc+"</li>";
v.innerHTML="<div class='gmapsoverlay-legend' style='width: auto'><div class='gmapsoverlay-legend-title'>"+a.text+"</div><div class='gmapsoverlay-legend-scale-range'>  <ul class='gmapsoverlay-legend-labels-range'>"+y+"  </ul></div><div class='gmapsoverlay-legend-source'>"+a.source+"</div></div>";
}f.appendChild(v),this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(m);
},showPopup:function(e,t,n,o,i,a,s){var l=new OurMapOverlay(t.getPosition(),o,n,i,a,this.map,s);
$(this.overlays).each(function(e,t){t.setMap(null)}),this.overlays.push(l)}});