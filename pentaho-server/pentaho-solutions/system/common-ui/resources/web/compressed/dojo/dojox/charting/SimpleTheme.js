define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/Color","dojox/lang/utils","dojox/gfx/gradutils"],function(e,r,s,t,i,o){
var l=s("dojox.charting.SimpleTheme",null,{shapeSpaces:{shape:1,shapeX:1,shapeY:1
},constructor:function(s){s=s||{};var t=l.defaultTheme;r.forEach(["chart","plotarea","axis","grid","series","marker","indicator"],function(r){
this[r]=e.delegate(t[r],s[r])},this),s.seriesThemes&&s.seriesThemes.length?(this.colors=null,
this.seriesThemes=s.seriesThemes.slice(0)):(this.seriesThemes=null,this.colors=(s.colors||l.defaultColors).slice(0)),
this.markerThemes=null,s.markerThemes&&s.markerThemes.length&&(this.markerThemes=s.markerThemes.slice(0)),
this.markers=s.markers?e.clone(s.markers):e.delegate(l.defaultMarkers),this.noGradConv=s.noGradConv,
this.noRadialConv=s.noRadialConv,s.reverseFills&&this.reverseFills(),this._current=0,
this._buildMarkerArray()},clone:function(){var e=new this.constructor({chart:this.chart,
plotarea:this.plotarea,axis:this.axis,grid:this.grid,series:this.series,marker:this.marker,
colors:this.colors,markers:this.markers,indicator:this.indicator,seriesThemes:this.seriesThemes,
markerThemes:this.markerThemes,noGradConv:this.noGradConv,noRadialConv:this.noRadialConv
});return r.forEach(["clone","clear","next","skip","addMixin","post","getTick"],function(r){
this.hasOwnProperty(r)&&(e[r]=this[r])},this),e},clear:function(){this._current=0;
},next:function(r,s,o){var l,a,n=i.merge;if(this.colors){l=e.delegate(this.series),
a=e.delegate(this.marker);var h,c=new t(this.colors[this._current%this.colors.length]);
l.stroke&&l.stroke.color?(l.stroke=e.delegate(l.stroke),h=new t(l.stroke.color),l.stroke.color=new t(c),
l.stroke.color.a=h.a):l.stroke={color:c},a.stroke&&a.stroke.color?(a.stroke=e.delegate(a.stroke),
h=new t(a.stroke.color),a.stroke.color=new t(c),a.stroke.color.a=h.a):a.stroke={color:c
},!l.fill||l.fill.type?l.fill=c:(h=new t(l.fill),l.fill=new t(c),l.fill.a=h.a),!a.fill||a.fill.type?a.fill=c:(h=new t(a.fill),
a.fill=new t(c),a.fill.a=h.a)}else l=this.seriesThemes?n(this.series,this.seriesThemes[this._current%this.seriesThemes.length]):this.series,
a=this.markerThemes?n(this.marker,this.markerThemes[this._current%this.markerThemes.length]):l;
var m=a&&a.symbol||this._markers[this._current%this._markers.length],k={series:l,
marker:a,symbol:m};return++this._current,s&&(k=this.addMixin(k,r,s)),o&&(k=this.post(k,r)),
k},skip:function(){++this._current},addMixin:function(s,t,o,l){if(e.isArray(o))r.forEach(o,function(e){
s=this.addMixin(s,t,e)},this);else{var a={};"color"in o&&("line"==t||"area"==t?(e.setObject("series.stroke.color",o.color,a),
e.setObject("marker.stroke.color",o.color,a)):e.setObject("series.fill",o.color,a)),
r.forEach(["stroke","outline","shadow","fill","filter","font","fontColor","labelWiring"],function(r){
var s="marker"+r.charAt(0).toUpperCase()+r.substr(1),t=s in o;r in o&&(e.setObject("series."+r,o[r],a),
t||e.setObject("marker."+r,o[r],a)),t&&e.setObject("marker."+r,o[s],a)}),"marker"in o&&(a.symbol=o.marker,
a.symbol=o.marker),s=i.merge(s,a)}return l&&(s=this.post(s,t)),s},post:function(e,r){
var s,t=e.series.fill;return!this.noGradConv&&this.shapeSpaces[t.space]&&"linear"==t.type&&("bar"==r?s={
x1:t.y1,y1:t.x1,x2:t.y2,y2:t.x2}:this.noRadialConv||"shape"!=t.space||"slice"!=r&&"circle"!=r||(s={
type:"radial",cx:0,cy:0,r:100}),s)?i.merge(e,{series:{fill:s}}):e},getTick:function(e,r){
var s=this.axis.tick,t=e+"Tick",o=i.merge;return s?this.axis[t]&&(s=o(s,this.axis[t])):s=this.axis[t],
r&&(s?r[t]&&(s=o(s,r[t])):s=r[t]),s},inspectObjects:function(e){r.forEach(["chart","plotarea","axis","grid","series","marker","indicator"],function(r){
e(this[r])},this),this.seriesThemes&&r.forEach(this.seriesThemes,e),this.markerThemes&&r.forEach(this.markerThemes,e);
},reverseFills:function(){this.inspectObjects(function(e){e&&e.fill&&(e.fill=o.reverse(e.fill));
})},addMarker:function(e,r){this.markers[e]=r,this._buildMarkerArray()},setMarkers:function(e){
this.markers=e,this._buildMarkerArray()},_buildMarkerArray:function(){this._markers=[];
for(var e in this.markers)this._markers.push(this.markers[e])}});return e.mixin(l,{
defaultMarkers:{CIRCLE:"m-3,0 c0,-4 6,-4 6,0 m-6,0 c0,4 6,4 6,0",SQUARE:"m-3,-3 l0,6 6,0 0,-6 z",
DIAMOND:"m0,-3 l3,3 -3,3 -3,-3 z",CROSS:"m0,-3 l0,6 m-3,-3 l6,0",X:"m-3,-3 l6,6 m0,-6 l-6,6",
TRIANGLE:"m-3,3 l3,-6 3,6 z",TRIANGLE_INVERTED:"m-3,-3 l3,6 3,-6 z"},defaultColors:["#54544c","#858e94","#6e767a","#948585","#474747"],
defaultTheme:{chart:{stroke:null,fill:"white",pageStyle:null,titleGap:20,titlePos:"top",
titleFont:"normal normal bold 14pt Tahoma",titleFontColor:"#333"},plotarea:{stroke:null,
fill:"white"},axis:{stroke:{color:"#333",width:1},tick:{color:"#666",position:"center",
font:"normal normal normal 7pt Tahoma",fontColor:"#333",labelGap:4},majorTick:{width:1,
length:6},minorTick:{width:.8,length:3},microTick:{width:.5,length:1},title:{gap:15,
font:"normal normal normal 11pt Tahoma",fontColor:"#333",orientation:"axis"}},series:{
stroke:{width:1.5,color:"#333"},outline:{width:.1,color:"#ccc"},shadow:null,fill:"#ccc",
font:"normal normal normal 8pt Tahoma",fontColor:"#000",labelWiring:{width:1,color:"#ccc"
}},marker:{stroke:{width:1.5,color:"#333"},outline:{width:.1,color:"#ccc"},shadow:null,
fill:"#ccc",font:"normal normal normal 8pt Tahoma",fontColor:"#000"},indicator:{lineStroke:{
width:1.5,color:"#333"},lineOutline:{width:.1,color:"#ccc"},lineShadow:null,lineFill:null,
stroke:{width:1.5,color:"#333"},outline:{width:.1,color:"#ccc"},shadow:null,fill:"#ccc",
radius:3,font:"normal normal normal 10pt Tahoma",fontColor:"#000",markerFill:"#ccc",
markerSymbol:"m-3,0 c0,-4 6,-4 6,0 m-6,0 c0,4 6,4 6,0",markerStroke:{width:1.5,color:"#333"
},markerOutline:{width:.1,color:"#ccc"},markerShadow:null}}}),l});