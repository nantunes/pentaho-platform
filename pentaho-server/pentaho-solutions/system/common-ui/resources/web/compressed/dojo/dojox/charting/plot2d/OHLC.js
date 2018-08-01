define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/lang/functional","dojox/lang/functional/reversed","dojox/lang/utils","dojox/gfx/fx"],function(t,e,a,i,r,s,n,o,h,l,m){
var c=h.lambda("item.purgeGroup()");return a("dojox.charting.plot2d.OHLC",[r,s],{
defaultParams:{gap:2,animate:null},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},
outline:{},shadow:{},fill:{},font:"",fontColor:""},constructor:function(e,a){this.opt=t.clone(this.defaultParams),
l.updateWithObject(this.opt,a),l.updateWithPattern(this.opt,a,this.optionalParams),
this.animate=this.opt.animate},collectStats:function(a){for(var i=t.delegate(n.defaultStats),r=0;r<a.length;r++){
var s=a[r];if(s.data.length){var o=i.vmin,h=i.vmax;"ymin"in s&&"ymax"in s||e.forEach(s.data,function(t,e){
if(null!==t){var a=t.x||e+1;i.hmin=Math.min(i.hmin,a),i.hmax=Math.max(i.hmax,a),i.vmin=Math.min(i.vmin,t.open,t.close,t.high,t.low),
i.vmax=Math.max(i.vmax,t.open,t.close,t.high,t.low)}}),"ymin"in s&&(i.vmin=Math.min(o,s.ymin)),
"ymax"in s&&(i.vmax=Math.max(h,s.ymax))}}return i},getSeriesStats:function(){var t=this.collectStats(this.series);
return t.hmin-=.5,t.hmax+=.5,t},render:function(t,a){if(this.zoom&&!this.isDataDirty())return this.performZoom(t,a);
if(this.resetEvents(),this.dirty=this.isDirty(),this.dirty){e.forEach(this.series,c),
this._eventSeries={},this.cleanGroup();var r=this.getGroup();o.forEachRev(this.series,function(t){
t.cleanGroup(r)})}var s,h,l,m=this.chart.theme,d=this._hScaler.scaler.getTransformerFromModel(this._hScaler),f=this._vScaler.scaler.getTransformerFromModel(this._vScaler),u=this.events();
s=n.calculateBarSize(this._hScaler.bounds.scale,this.opt),h=s.gap,l=s.size;for(var x=this.series.length-1;x>=0;--x){
var v=this.series[x];if(this.dirty||v.dirty){v.cleanGroup();for(var p=m.next("candlestick",[this.opt,v]),r=v.group,g=new Array(v.data.length),y=0;y<v.data.length;++y){
var S=v.data[y];if(null!==S){var k=m.addMixin(p,"candlestick",S,!0),_=d(S.x||y+.5)+a.l+h,M=t.height-a.b,j=f(S.open),b=f(S.close),w=f(S.high),E=f(S.low);
if(E>w){var G=w;w=E,E=G}if(l>=1){var L={x1:l/2,x2:l/2,y1:M-w,y2:M-E},P={x1:0,x2:l/2+(k.series.stroke.width||1)/2,
y1:M-j,y2:M-j},z={x1:l/2-(k.series.stroke.width||1)/2,x2:l,y1:M-b,y2:M-b},C=r.createGroup();
C.setTransform({dx:_,dy:0});var O=C.createGroup();if(O.createLine(L).setStroke(k.series.stroke),
O.createLine(P).setStroke(k.series.stroke),O.createLine(z).setStroke(k.series.stroke),
v.dyn.stroke=k.series.stroke,u){var B={element:"candlestick",index:y,run:v,shape:O,
x:_,y:M-Math.max(j,b),cx:l/2,cy:M-Math.max(j,b)+Math.max(j>b?j-b:b-j,1)/2,width:l,
height:Math.max(j>b?j-b:b-j,1),data:S};this._connectEvents(B),g[y]=B}}this.animate&&this._animateOHLC(C,M-E,w-E);
}}this._eventSeries[v.name]=g,v.dirty=!1}else m.skip(),this._reconnectEvents(v.name);
}return this.dirty=!1,i("dojo-bidi")&&this._checkOrientation(this.group,t,a),this;
},_animateOHLC:function(e,a,i){m.animateTransform(t.delegate({shape:e,duration:1200,
transform:[{name:"translate",start:[0,a-a/i],end:[0,0]},{name:"scale",start:[1,1/i],
end:[1,1]},{name:"original"}]},this.animate)).play()}})});