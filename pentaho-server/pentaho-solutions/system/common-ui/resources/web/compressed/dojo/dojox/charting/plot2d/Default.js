define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(t,e,r,a,i,s,o,n,h,l,d){
var u=h.lambda("item.purgeGroup()"),p=1200;return e("dojox.charting.plot2d.Default",[i,s],{
defaultParams:{lines:!0,areas:!1,markers:!1,tension:"",animate:!1,enableCache:!1,
interpolate:!1},optionalParams:{stroke:{},outline:{},shadow:{},fill:{},filter:{},
styleFunc:null,font:"",fontColor:"",marker:"",markerStroke:{},markerOutline:{},markerShadow:{},
markerFill:{},markerFont:"",markerFontColor:""},constructor:function(e,r){this.opt=t.clone(t.mixin(this.opt,this.defaultParams)),
l.updateWithObject(this.opt,r),l.updateWithPattern(this.opt,r,this.optionalParams),
this.animate=this.opt.animate},createPath:function(t,e,r){var a;return this.opt.enableCache&&t._pathFreePool.length>0?(a=t._pathFreePool.pop(),
a.setShape(r),e.add(a)):a=e.createPath(r),this.opt.enableCache&&t._pathUsePool.push(a),
a},buildSegments:function(t,e){for(var r=this.series[t],a=e?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,i=e?Math.min(r.data.length,Math.ceil(this._hScaler.bounds.to)):r.data.length,s=null,o=[],n=a;i>n;n++)null==r.data[n]||!e&&null==r.data[n].y?(!this.opt.interpolate||e)&&(s=null):(s||(s=[],
o.push({index:n,rseg:s})),s.push(e&&r.data[n].hasOwnProperty("y")?r.data[n].y:r.data[n]));
return o},render:function(e,i){if(this.zoom&&!this.isDataDirty())return this.performZoom(e,i);
this.resetEvents(),this.dirty=this.isDirty();var s;this.dirty&&(r.forEach(this.series,u),
this._eventSeries={},this.cleanGroup(),this.getGroup().setTransform(null),s=this.getGroup(),
n.forEachRev(this.series,function(t){t.cleanGroup(s)}));for(var h,l,c=this.chart.theme,m=this.events(),f=this.series.length-1;f>=0;--f){
var y=this.series[f];if(this.dirty||y.dirty)if(y.cleanGroup(),this.opt.enableCache&&(y._pathFreePool=(y._pathFreePool?y._pathFreePool:[]).concat(y._pathUsePool?y._pathUsePool:[]),
y._pathUsePool=[]),y.data.length){var k,g=c.next(this.opt.areas?"area":"line",[this.opt,y],!0),x=this._hScaler.scaler.getTransformerFromModel(this._hScaler),v=this._vScaler.scaler.getTransformerFromModel(this._vScaler),b=this._eventSeries[y.name]=new Array(y.data.length);
s=y.group;for(var S=r.some(y.data,function(t){return"number"==typeof t||t&&!t.hasOwnProperty("x");
}),P=this.buildSegments(f,S),F=0;F<P.length;F++){var _=P[F];if(k=S?r.map(_.rseg,function(t,r){
return{x:x(r+_.index+1)+i.l,y:e.height-i.b-v(t),data:t}},this):r.map(_.rseg,function(t){
return{x:x(t.x)+i.l,y:e.height-i.b-v(t.y),data:t}},this),S&&this.opt.interpolate)for(;F<P.length;)F++,
_=P[F],_&&(k=k.concat(r.map(_.rseg,function(t,r){return{x:x(r+_.index+1)+i.l,y:e.height-i.b-v(t),
data:t}},this)));var w=this.opt.tension?o.curve(k,this.opt.tension):"";if(this.opt.areas&&k.length>1){
var j=this._plotFill(g.series.fill,e,i),M=t.clone(k);if(this.opt.tension){var E="L"+M[M.length-1].x+","+(e.height-i.b)+" L"+M[0].x+","+(e.height-i.b)+" L"+M[0].x+","+M[0].y;
y.dyn.fill=s.createPath(w+" "+E).setFill(j).getFill()}else M.push({x:k[k.length-1].x,
y:e.height-i.b}),M.push({x:k[0].x,y:e.height-i.b}),M.push(k[0]),y.dyn.fill=s.createPolyline(M).setFill(j).getFill();
}(this.opt.lines||this.opt.markers)&&(h=g.series.stroke,g.series.outline&&(l=y.dyn.outline=o.makeStroke(g.series.outline),
l.width=2*l.width+h.width)),this.opt.markers&&(y.dyn.marker=g.symbol);var C=null,G=null,O=null;
if(h&&g.series.shadow&&k.length>1){var D=g.series.shadow,L=r.map(k,function(t){return{
x:t.x+D.dx,y:t.y+D.dy}});this.opt.lines&&(this.opt.tension?y.dyn.shadow=s.createPath(o.curve(L,this.opt.tension)).setStroke(D).getStroke():y.dyn.shadow=s.createPolyline(L).setStroke(D).getStroke()),
this.opt.markers&&g.marker.shadow&&(D=g.marker.shadow,O=r.map(L,function(t){return this.createPath(y,s,"M"+t.x+" "+t.y+" "+g.symbol).setStroke(D).setFill(D.color);
},this))}if(this.opt.lines&&k.length>1){var T;l&&(this.opt.tension?y.dyn.outline=s.createPath(w).setStroke(l).getStroke():y.dyn.outline=s.createPolyline(k).setStroke(l).getStroke()),
this.opt.tension?y.dyn.stroke=(T=s.createPath(w)).setStroke(h).getStroke():y.dyn.stroke=(T=s.createPolyline(k)).setStroke(h).getStroke(),
T.setFilter&&g.series.filter&&T.setFilter(g.series.filter)}var U=null;if(this.opt.markers){
var A=g;C=new Array(k.length),G=new Array(k.length),l=null,A.marker.outline&&(l=o.makeStroke(A.marker.outline),
l.width=2*l.width+(A.marker.stroke?A.marker.stroke.width:0)),r.forEach(k,function(t,e){
if(this.opt.styleFunc||"number"!=typeof t.data){var r="number"!=typeof t.data?[t.data]:[];
this.opt.styleFunc&&r.push(this.opt.styleFunc(t.data)),A=c.addMixin(g,"marker",r,!0);
}else A=c.post(g,"marker");var a="M"+t.x+" "+t.y+" "+A.symbol;l&&(G[e]=this.createPath(y,s,a).setStroke(l)),
C[e]=this.createPath(y,s,a).setStroke(A.marker.stroke).setFill(A.marker.fill)},this),
y.dyn.markerFill=A.marker.fill,y.dyn.markerStroke=A.marker.stroke,!U&&this.opt.labels&&(U=C[0].getBoundingBox()),
m?r.forEach(C,function(t,e){var r={element:"marker",index:e+_.index,run:y,shape:t,
outline:G[e]||null,shadow:O&&O[e]||null,cx:k[e].x,cy:k[e].y};S?(r.x=e+_.index+1,r.y=y.data[e+_.index]):(r.x=_.rseg[e].x,
r.y=y.data[e+_.index].y),this._connectEvents(r),b[e+_.index]=r},this):delete this._eventSeries[y.name];
}if(this.opt.labels){var B=U?U.width:2,W=U?U.height:2;r.forEach(k,function(t,e){if(this.opt.styleFunc||"number"!=typeof t.data){
var r="number"!=typeof t.data?[t.data]:[];this.opt.styleFunc&&r.push(this.opt.styleFunc(t.data)),
A=c.addMixin(g,"marker",r,!0)}else A=c.post(g,"marker");this.createLabel(s,_.rseg[e],{
x:t.x-B/2,y:t.y-W/2,width:B,height:W},A)},this)}}y.dirty=!1}else y.dirty=!1,c.skip();else c.skip(),
this._reconnectEvents(y.name)}if(a("dojo-bidi")&&this._checkOrientation(this.group,e,i),
this.animate){var z=this.getGroup();d.animateTransform(t.delegate({shape:z,duration:p,
transform:[{name:"translate",start:[0,e.height-i.b],end:[0,0]},{name:"scale",start:[1,0],
end:[1,1]},{name:"original"}]},this.animate)).play()}return this.dirty=!1,this}});
});