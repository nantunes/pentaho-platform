define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/gfx/fx","dojox/lang/utils","dojox/lang/functional","dojox/lang/functional/reversed"],function(e,t,a,i,s,r,o,n,h,l,c){
var d=c.lambda("item.purgeGroup()");return a("dojox.charting.plot2d.Bars",[s,r],{
defaultParams:{gap:0,animate:null,enableCache:!1},optionalParams:{minBarSize:1,maxBarSize:1,
stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:""
},constructor:function(t,a){this.opt=e.clone(e.mixin(this.opt,this.defaultParams)),
h.updateWithObject(this.opt,a),h.updateWithPattern(this.opt,a,this.optionalParams),
this.animate=this.opt.animate},getSeriesStats:function(){var e,t=o.collectSimpleStats(this.series);
return t.hmin-=.5,t.hmax+=.5,e=t.hmin,t.hmin=t.vmin,t.vmin=e,e=t.hmax,t.hmax=t.vmax,
t.vmax=e,t},createRect:function(e,t,a){var i;return this.opt.enableCache&&e._rectFreePool.length>0?(i=e._rectFreePool.pop(),
i.setShape(a),t.add(i)):i=t.createRect(a),this.opt.enableCache&&e._rectUsePool.push(i),
i},createLabel:function(e,t,a,i){if(this.opt.labels&&"outside"==this.opt.labelStyle){
var s=a.y+a.height/2,r=a.x+a.width+this.opt.labelOffset;this.renderLabel(e,r,s,this._getLabel(isNaN(t.y)?t:t.y),i,"start");
}else this.inherited(arguments)},render:function(a,s){if(this.zoom&&!this.isDataDirty())return this.performZoom(a,s);
this.dirty=this.isDirty(),this.resetEvents();var r;this.dirty&&(t.forEach(this.series,d),
this._eventSeries={},this.cleanGroup(),r=this.getGroup(),l.forEachRev(this.series,function(e){
e.cleanGroup(r)}));for(var o=this.chart.theme,n=this._hScaler.scaler.getTransformerFromModel(this._hScaler),h=this._vScaler.scaler.getTransformerFromModel(this._vScaler),c=Math.max(0,this._hScaler.bounds.lower),u=n(c),m=this.events(),p=this.getBarProperties(),f=this.series.length-1;f>=0;--f){
var y=this.series[f];if(this.dirty||y.dirty){y.cleanGroup(),this.opt.enableCache&&(y._rectFreePool=(y._rectFreePool?y._rectFreePool:[]).concat(y._rectUsePool?y._rectUsePool:[]),
y._rectUsePool=[]);var g=o.next("bar",[this.opt,y]),v=new Array(y.data.length);r=y.group;
for(var x=t.some(y.data,function(e){return"number"==typeof e||e&&!e.hasOwnProperty("x");
}),_=x?Math.max(0,Math.floor(this._vScaler.bounds.from-1)):0,b=x?Math.min(y.data.length,Math.ceil(this._vScaler.bounds.to)):y.data.length,S=_;b>S;++S){
var F=y.data[S];if(null!=F){var P,w,j=this.getValue(F,S,f,x),k=n(j.y),B=Math.abs(k-u);
if(this.opt.styleFunc||"number"!=typeof F){var M="number"!=typeof F?[F]:[];this.opt.styleFunc&&M.push(this.opt.styleFunc(F)),
P=o.addMixin(g,"bar",M,!0)}else P=o.post(g,"bar");if(B>=0&&p.height>=1){var C={x:s.l+(j.y<c?k:u),
y:a.height-s.b-h(j.x+1.5)+p.gap+p.thickness*(this.series.length-f-1),width:B,height:p.height
};if(P.series.shadow){var E=e.clone(C);E.x+=P.series.shadow.dx,E.y+=P.series.shadow.dy,
w=this.createRect(y,r,E).setFill(P.series.shadow.color).setStroke(P.series.shadow),
this.animate&&this._animateBar(w,s.l+u,-B)}var z=this._plotFill(P.series.fill,a,s);
z=this._shapeFill(z,C);var G=this.createRect(y,r,C).setFill(z).setStroke(P.series.stroke);
if(G.setFilter&&P.series.filter&&G.setFilter(P.series.filter),y.dyn.fill=G.getFill(),
y.dyn.stroke=G.getStroke(),m){var R={element:"bar",index:S,run:y,shape:G,shadow:w,
cx:j.y,cy:j.x+1.5,x:x?S:y.data[S].x,y:x?y.data[S]:y.data[S].y};this._connectEvents(R),
v[S]=R}!isNaN(j.py)&&j.py>c&&(C.x+=n(j.py),C.width-=n(j.py)),this.createLabel(r,F,C,P),
this.animate&&this._animateBar(G,s.l+u,-B)}}}this._eventSeries[y.name]=v,y.dirty=!1;
}else o.skip(),this._reconnectEvents(y.name)}return this.dirty=!1,i("dojo-bidi")&&this._checkOrientation(this.group,a,s),
this},getValue:function(e,t,a,i){var s,r;return i?(s="number"==typeof e?e:e.y,r=t):(s=e.y,
r=e.x-1),{y:s,x:r}},getBarProperties:function(){var e=o.calculateBarSize(this._vScaler.bounds.scale,this.opt);
return{gap:e.gap,height:e.size,thickness:0}},_animateBar:function(t,a,i){0==i&&(i=1),
n.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",
start:[a-a/i,0],end:[0,0]},{name:"scale",start:[1/i,1],end:[1,1]},{name:"original"
}]},this.animate)).play()}})});