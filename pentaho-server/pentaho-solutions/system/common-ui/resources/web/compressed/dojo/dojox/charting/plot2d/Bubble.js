define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(e,t,i,r,a,s,n,l,o,h,u){
var d=o.lambda("item.purgeGroup()");return t("dojox.charting.plot2d.Bubble",[a,s],{
defaultParams:{animate:null},optionalParams:{stroke:{},outline:{},shadow:{},fill:{},
filter:{},styleFunc:null,font:"",fontColor:"",labelFunc:null},constructor:function(t,i){
this.opt=e.clone(e.mixin(this.opt,this.defaultParams)),h.updateWithObject(this.opt,i),
h.updateWithPattern(this.opt,i,this.optionalParams),this.opt.labelFunc||(this.opt.labelFunc=function(e,t,i){
return this._getLabel(e.size,t,i)}),this.animate=this.opt.animate},render:function(e,t){
var a;if(this.zoom&&!this.isDataDirty())return this.performZoom(e,t);this.resetEvents(),
this.dirty=this.isDirty(),this.dirty&&(i.forEach(this.series,d),this._eventSeries={},
this.cleanGroup(),a=this.getGroup(),l.forEachRev(this.series,function(e){e.cleanGroup(a);
}));for(var s=this.chart.theme,o=this._hScaler.scaler.getTransformerFromModel(this._hScaler),h=this._vScaler.scaler.getTransformerFromModel(this._vScaler),u=this.events(),c=this.series.length-1;c>=0;--c){
var f=this.series[c];if(this.dirty||f.dirty)if(f.cleanGroup(),f.data.length)if("number"!=typeof f.data[0]){
a=f.group;var m=s.next("circle",[this.opt,f]),g=i.map(f.data,function(i){return i?{
x:o(i.x)+t.l,y:e.height-t.b-h(i.y),radius:this._vScaler.bounds.scale*(i.size/2)}:null;
},this),p=null,y=null,b=null,x=this.opt.styleFunc,v=function(e){return x?s.addMixin(m,"circle",[e,x(e)],!0):s.addMixin(m,"circle",e,!0);
};if(m.series.shadow&&(b=i.map(g,function(i,r){if(null!==i){var s=v(f.data[r]),n=s.series.shadow,l=a.createCircle({
cx:i.x+n.dx,cy:i.y+n.dy,r:i.radius}).setStroke(n).setFill(n.color);return this.animate&&this._animateBubble(l,e.height-t.b,i.radius),
l}return null},this),b.length&&(f.dyn.shadow=b[b.length-1].getStroke())),m.series.outline&&(y=i.map(g,function(i,r){
if(null!==i){var s=v(f.data[r]),l=n.makeStroke(s.series.outline);l.width=2*l.width+m.series.stroke.width;
var o=a.createCircle({cx:i.x,cy:i.y,r:i.radius}).setStroke(l);return this.animate&&this._animateBubble(o,e.height-t.b,i.radius),
o}return null},this),y.length&&(f.dyn.outline=y[y.length-1].getStroke())),p=i.map(g,function(i,r){
if(null!==i){var s=v(f.data[r]),n={x:i.x-i.radius,y:i.y-i.radius,width:2*i.radius,
height:2*i.radius},l=this._plotFill(s.series.fill,e,t);l=this._shapeFill(l,n);var o=a.createCircle({
cx:i.x,cy:i.y,r:i.radius}).setFill(l).setStroke(s.series.stroke);return o.setFilter&&s.series.filter&&o.setFilter(s.series.filter),
this.animate&&this._animateBubble(o,e.height-t.b,i.radius),this.createLabel(a,f.data[r],n,s),
o}return null},this),p.length&&(f.dyn.fill=p[p.length-1].getFill(),f.dyn.stroke=p[p.length-1].getStroke()),
u){var _=new Array(p.length);i.forEach(p,function(e,t){if(null!==e){var i={element:"circle",
index:t,run:f,shape:e,outline:y&&y[t]||null,shadow:b&&b[t]||null,x:f.data[t].x,y:f.data[t].y,
r:f.data[t].size/2,cx:g[t].x,cy:g[t].y,cr:g[t].radius};this._connectEvents(i),_[t]=i;
}},this),this._eventSeries[f.name]=_}else delete this._eventSeries[f.name];f.dirty=!1;
}else console.warn("dojox.charting.plot2d.Bubble: the data in the following series cannot be rendered as a bubble chart; ",f);else f.dirty=!1,
s.skip();else s.skip(),this._reconnectEvents(f.name)}return this.dirty=!1,r("dojo-bidi")&&this._checkOrientation(this.group,e,t),
this},_animateBubble:function(t,i,r){u.animateTransform(e.delegate({shape:t,duration:1200,
transform:[{name:"translate",start:[0,i],end:[0,0]},{name:"scale",start:[0,1/r],end:[1,1]
},{name:"original"}]},this.animate)).play()}})});