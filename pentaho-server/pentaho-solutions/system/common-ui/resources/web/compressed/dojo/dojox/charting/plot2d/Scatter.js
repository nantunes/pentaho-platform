define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx","dojox/gfx/gradutils"],function(t,e,a,r,i,s,n,o,h,l,m,d){
var c=h.lambda("item.purgeGroup()");return a("dojox.charting.plot2d.Scatter",[i,s],{
defaultParams:{shadows:null,animate:null},optionalParams:{markerStroke:{},markerOutline:{},
markerShadow:{},markerFill:{},markerFont:"",markerFontColor:"",styleFunc:null},constructor:function(e,a){
this.opt=t.clone(t.mixin(this.opt,this.defaultParams)),l.updateWithObject(this.opt,a),
l.updateWithPattern(this.opt,a,this.optionalParams),this.animate=this.opt.animate;
},render:function(t,a){if(this.zoom&&!this.isDataDirty())return this.performZoom(t,a);
this.resetEvents(),this.dirty=this.isDirty();var i;this.dirty&&(e.forEach(this.series,c),
this._eventSeries={},this.cleanGroup(),i=this.getGroup(),o.forEachRev(this.series,function(t){
t.cleanGroup(i)}));for(var s=this.chart.theme,h=this.events(),l=this.series.length-1;l>=0;--l){
var m=this.series[l];if(this.dirty||m.dirty)if(m.cleanGroup(),m.data.length){var u,y=s.next("marker",[this.opt,m]),f=this._hScaler.scaler.getTransformerFromModel(this._hScaler),p=this._vScaler.scaler.getTransformerFromModel(this._vScaler);
i=m.group,u="number"==typeof m.data[0]?e.map(m.data,function(e,r){return{x:f(r+1)+a.l,
y:t.height-a.b-p(e)}},this):e.map(m.data,function(e,r){return{x:f(e.x)+a.l,y:t.height-a.b-p(e.y)
}},this);var k=new Array(u.length),g=new Array(u.length),v=new Array(u.length);if(e.forEach(u,function(e,r){
var o,h=m.data[r];if(this.opt.styleFunc||"number"!=typeof h){var l="number"!=typeof h?[h]:[];
this.opt.styleFunc&&l.push(this.opt.styleFunc(h)),o=s.addMixin(y,"marker",l,!0)}else o=s.post(y,"marker");
var c="M"+e.x+" "+e.y+" "+o.symbol;if(o.marker.shadow&&(k[r]=i.createPath("M"+(e.x+o.marker.shadow.dx)+" "+(e.y+o.marker.shadow.dy)+" "+o.symbol).setStroke(o.marker.shadow).setFill(o.marker.shadow.color),
this.animate&&this._animateScatter(k[r],t.height-a.b)),o.marker.outline){var u=n.makeStroke(o.marker.outline);
u.width=2*u.width+o.marker.stroke.width,v[r]=i.createPath(c).setStroke(u),this.animate&&this._animateScatter(v[r],t.height-a.b);
}var f=n.makeStroke(o.marker.stroke),p=this._plotFill(o.marker.fill,t,a);if(!p||"linear"!==p.type&&"radial"!=p.type)g[r]=i.createPath(c).setStroke(f).setFill(p);else{
var x=d.getColor(p,{x:e.x,y:e.y});f&&(f.color=x),g[r]=i.createPath(c).setStroke(f).setFill(x);
}if(this.opt.labels){var S=g[r].getBoundingBox();this.createLabel(i,h,S,o)}this.animate&&this._animateScatter(g[r],t.height-a.b);
},this),g.length&&(m.dyn.marker=y.symbol,m.dyn.markerStroke=g[g.length-1].getStroke(),
m.dyn.markerFill=g[g.length-1].getFill()),h){var x=new Array(g.length);e.forEach(g,function(t,e){
var a={element:"marker",index:e,run:m,shape:t,outline:v&&v[e]||null,shadow:k&&k[e]||null,
cx:u[e].x,cy:u[e].y};"number"==typeof m.data[0]?(a.x=e+1,a.y=m.data[e]):(a.x=m.data[e].x,
a.y=m.data[e].y),this._connectEvents(a),x[e]=a},this),this._eventSeries[m.name]=x;
}else delete this._eventSeries[m.name];m.dirty=!1}else m.dirty=!1,s.skip();else s.skip(),
this._reconnectEvents(m.name)}return this.dirty=!1,r("dojo-bidi")&&this._checkOrientation(this.group,t,a),
this},_animateScatter:function(e,a){m.animateTransform(t.delegate({shape:e,duration:1200,
transform:[{name:"translate",start:[0,a],end:[0,0]},{name:"scale",start:[0,0],end:[1,1]
},{name:"original"}]},this.animate)).play()}})});