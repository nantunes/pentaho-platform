define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(e,t,a,i,s,r,o,n,h,l,c){
var d=h.lambda("item.purgeGroup()");return a("dojox.charting.plot2d.Columns",[s,r],{
defaultParams:{gap:0,animate:null,enableCache:!1},optionalParams:{minBarSize:1,maxBarSize:1,
stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:""
},constructor:function(t,a){this.opt=e.clone(e.mixin(this.opt,this.defaultParams)),
l.updateWithObject(this.opt,a),l.updateWithPattern(this.opt,a,this.optionalParams),
this.animate=this.opt.animate},getSeriesStats:function(){var e=o.collectSimpleStats(this.series);
return e.hmin-=.5,e.hmax+=.5,e},createRect:function(e,t,a){var i;return this.opt.enableCache&&e._rectFreePool.length>0?(i=e._rectFreePool.pop(),
i.setShape(a),t.add(i)):i=t.createRect(a),this.opt.enableCache&&e._rectUsePool.push(i),
i},render:function(a,s){if(this.zoom&&!this.isDataDirty())return this.performZoom(a,s);
this.resetEvents(),this.dirty=this.isDirty();var r;this.dirty&&(t.forEach(this.series,d),
this._eventSeries={},this.cleanGroup(),r=this.getGroup(),n.forEachRev(this.series,function(e){
e.cleanGroup(r)}));for(var o=this.chart.theme,h=this._hScaler.scaler.getTransformerFromModel(this._hScaler),l=this._vScaler.scaler.getTransformerFromModel(this._vScaler),c=Math.max(0,this._vScaler.bounds.lower),u=l(c),m=this.events(),p=this.getBarProperties(),f=this.series.length-1;f>=0;--f){
var y=this.series[f];if(this.dirty||y.dirty){y.cleanGroup(),this.opt.enableCache&&(y._rectFreePool=(y._rectFreePool?y._rectFreePool:[]).concat(y._rectUsePool?y._rectUsePool:[]),
y._rectUsePool=[]);var g=o.next("column",[this.opt,y]),_=new Array(y.data.length);
r=y.group;for(var v=t.some(y.data,function(e){return"number"==typeof e||e&&!e.hasOwnProperty("x");
}),x=v?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,b=v?Math.min(y.data.length,Math.ceil(this._hScaler.bounds.to)):y.data.length,S=x;b>S;++S){
var F=y.data[S];if(null!=F){var P,w,j=this.getValue(F,S,f,v),k=l(j.y),C=Math.abs(k-u);
if(this.opt.styleFunc||"number"!=typeof F){var M="number"!=typeof F?[F]:[];this.opt.styleFunc&&M.push(this.opt.styleFunc(F)),
P=o.addMixin(g,"column",M,!0)}else P=o.post(g,"column");if(p.width>=1&&C>=0){var B={
x:s.l+h(j.x+.5)+p.gap+p.thickness*f,y:a.height-s.b-(j.y>c?k:u),width:p.width,height:C
};if(P.series.shadow){var E=e.clone(B);E.x+=P.series.shadow.dx,E.y+=P.series.shadow.dy,
w=this.createRect(y,r,E).setFill(P.series.shadow.color).setStroke(P.series.shadow),
this.animate&&this._animateColumn(w,a.height-s.b+u,C)}var z=this._plotFill(P.series.fill,a,s);
z=this._shapeFill(z,B);var G=this.createRect(y,r,B).setFill(z).setStroke(P.series.stroke);
if(G.setFilter&&P.series.filter&&G.setFilter(P.series.filter),y.dyn.fill=G.getFill(),
y.dyn.stroke=G.getStroke(),m){var R={element:"column",index:S,run:y,shape:G,shadow:w,
cx:j.x+.5,cy:j.y,x:v?S:y.data[S].x,y:v?y.data[S]:y.data[S].y};this._connectEvents(R),
_[S]=R}!isNaN(j.py)&&j.py>c&&(B.height=k-l(j.py)),this.createLabel(r,F,B,P),this.animate&&this._animateColumn(G,a.height-s.b-u,C);
}}}this._eventSeries[y.name]=_,y.dirty=!1}else o.skip(),this._reconnectEvents(y.name);
}return this.dirty=!1,i("dojo-bidi")&&this._checkOrientation(this.group,a,s),this;
},getValue:function(e,t,a,i){var s,r;return i?(s="number"==typeof e?e:e.y,r=t):(s=e.y,
r=e.x-1),{x:r,y:s}},getBarProperties:function(){var e=o.calculateBarSize(this._hScaler.bounds.scale,this.opt);
return{gap:e.gap,width:e.size,thickness:0}},_animateColumn:function(t,a,i){0==i&&(i=1),
c.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",
start:[0,a-a/i],end:[0,0]},{name:"scale",start:[1,1/i],end:[1,1]},{name:"original"
}]},this.animate)).play()}})});