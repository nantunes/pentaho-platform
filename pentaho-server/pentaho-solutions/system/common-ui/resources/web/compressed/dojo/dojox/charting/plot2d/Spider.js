define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/_base/array","dojo/dom-geometry","dojo/_base/fx","dojo/fx","dojo/sniff","./Base","./_PlotEvents","./common","../axis2d/common","dojox/gfx","dojox/gfx/matrix","dojox/gfx/fx","dojox/lang/functional","dojox/lang/utils","dojo/fx/easing"],function(t,e,i,r,s,a,o,n,h,l,c,d,p,x,m,u,f,y){
var g=e("dojox.charting.plot2d.Spider",[h,l],{defaultParams:{labels:!0,ticks:!1,fixed:!0,
precision:1,labelOffset:-10,labelStyle:"default",htmlLabels:!0,startAngle:-90,divisions:3,
axisColor:"",axisWidth:0,spiderColor:"",spiderWidth:0,seriesWidth:0,seriesFillAlpha:.2,
spiderOrigin:.16,markerSize:3,spiderType:"polygon",animationType:y.backOut,axisTickFont:"",
axisTickFontColor:"",axisFont:"",axisFontColor:""},optionalParams:{radius:0,font:"",
fontColor:""},constructor:function(e,i){this.opt=t.clone(this.defaultParams),f.updateWithObject(this.opt,i),
f.updateWithPattern(this.opt,i,this.optionalParams),this.dyn=[],this.datas={},this.labelKey=[],
this.oldSeriePoints={},this.animations={}},clear:function(){return this.inherited(arguments),
this.dyn=[],this.axes=[],this.datas={},this.labelKey=[],this.oldSeriePoints={},this.animations={},
this},setAxis:function(t){return t&&(void 0!=t.opt.min&&(this.datas[t.name].min=t.opt.min),
void 0!=t.opt.max&&(this.datas[t.name].max=t.opt.max)),this},addSeries:function(t){
this.series.push(t);var e;for(e in t.data){var i=t.data[e],r=this.datas[e];if(r)r.vlist.push(i),
r.min=Math.min(r.min,i),r.max=Math.max(r.max,i);else{var s="__"+e;this.axes.push(s),
this[s]=e,this.datas[e]={min:i,max:i,vlist:[i]}}}if(this.labelKey.length<=0)for(e in t.data)this.labelKey.push(e);
return this},getSeriesStats:function(){return c.collectSimpleStats(this.series)},
render:function(t,e){if(!this.dirty)return this;this.dirty=!1,this.cleanGroup();var i=this.group,a=this.chart.theme;
if(this.resetEvents(),!this.series||!this.series.length)return this;var o,n,h,l,c,m,f,y,g,v,_,b,k,S,j,C,P,w,T,M,F=this.opt,L=a.axis,A=(t.width-e.l-e.r)/2,E=(t.height-e.t-e.b)/2,O=Math.min(A,E),B=F.font||L.majorTick&&L.majorTick.font||L.tick&&L.tick.font||"normal normal normal 7pt Tahoma",W=F.axisFont||L.tick&&L.tick.titleFont||"normal normal normal 11pt Tahoma",G=F.axisTickFontColor||L.majorTick&&L.majorTick.fontColor||L.tick&&L.tick.fontColor||"silver",K=F.axisFontColor||L.tick&&L.tick.titleFontColor||"black",z=F.axisColor||L.tick&&L.tick.axisColor||"silver",I=F.spiderColor||L.tick&&L.tick.spiderColor||"silver",R=F.axisWidth||L.stroke&&L.stroke.width||2,q=F.spiderWidth||L.stroke&&L.stroke.width||2,D=F.seriesWidth||L.stroke&&L.stroke.width||2,H=p.normalizedLength(p.splitFontString(W).size),J=x._degToRad(F.startAngle),N=J,Q=F.spiderOrigin,U=F.divisions>=3?F.divisions:3,V=F.markerSize,X=F.spiderType,Y=F.animationType,Z=F.labelOffset<-10?F.labelOffset:-10,$=.2;
F.labels&&(o=r.map(this.series,function(t){return t.name},this),n=u.foldl1(u.map(o,function(t){
var e=a.series.font;return p._base._getTextBox(t,{font:e}).w},this),"Math.max(a, b)")/2,
O=Math.min(A-2*n,E-H)+Z,h=O-Z),"radius"in F&&(O=F.radius,h=O-Z),O/=1+$;var tt={cx:e.l+A,
cy:e.t+E,r:O};for(g=this.series.length-1;g>=0;g--)if(j=this.series[g],this.dirty||j.dirty){
if(j.cleanGroup(),C=j.data,null!==C&&(b=this._getObjectLength(C),(!l||l.length<=0)&&(l=[],
c=[],y=[],this._buildPoints(l,b,tt,O,N,!0,t),this._buildPoints(c,b,tt,O*Q,N,!0,t),
this._buildPoints(y,b,tt,h,N,!1,t),U>2)))for(m=[],f=[],v=0;U-2>v;v++)m[v]=[],this._buildPoints(m[v],b,tt,O*(Q+(1-Q)*(v+1)/(U-1)),N,!0,t),
f[v]=O*(Q+(1-Q)*(v+1)/(U-1))}else a.skip();var et=i.createGroup(),it={color:z,width:R
},rt={color:I,width:q};for(v=l.length-1;v>=0;--v){_=l[v];var st={x:_.x+(_.x-tt.cx)*$,
y:_.y+(_.y-tt.cy)*$},at={x:_.x+(_.x-tt.cx)*$/2,y:_.y+(_.y-tt.cy)*$/2};et.createLine({
x1:tt.cx,y1:tt.cy,x2:st.x,y2:st.y}).setStroke(it),this._drawArrow(et,st,at,it)}var ot=i.createGroup();
for(v=y.length-1;v>=0;--v){_=y[v],k=p._base._getTextBox(this.labelKey[v],{font:W}).w||0,
S=this.opt.htmlLabels&&"vml"!=p.renderer?"html":"gfx";var nt=d.createText[S](this.chart,ot,s.isBodyLtr()||"html"!=S?_.x:_.x+k-t.width,_.y,"middle",this.labelKey[v],W,K);
this.opt.htmlLabels&&this.htmlElements.push(nt)}var ht=i.createGroup();if("polygon"==X){
if(ht.createPolyline(l).setStroke(rt),ht.createPolyline(c).setStroke(rt),m.length>0)for(v=m.length-1;v>=0;--v)ht.createPolyline(m[v]).setStroke(rt);
}else if(ht.createCircle({cx:tt.cx,cy:tt.cy,r:O}).setStroke(rt),ht.createCircle({
cx:tt.cx,cy:tt.cy,r:O*Q}).setStroke(rt),f.length>0)for(v=f.length-1;v>=0;--v)ht.createCircle({
cx:tt.cx,cy:tt.cy,r:f[v]}).setStroke(rt);b=this._getObjectLength(this.datas);var lt=i.createGroup(),ct=0;
for(var dt in this.datas){for(P=this.datas[dt],w=P.min,T=P.max,M=T-w,ft=N+2*Math.PI*ct/b,
g=0;U>g;g++){var pt=w+M*g/(U-1);_=this._getCoordinate(tt,O*(Q+(1-Q)*g/(U-1)),ft,t),
pt=this._getLabel(pt),k=p._base._getTextBox(pt,{font:B}).w||0,S=this.opt.htmlLabels&&"vml"!=p.renderer?"html":"gfx",
this.opt.htmlLabels&&this.htmlElements.push(d.createText[S](this.chart,lt,s.isBodyLtr()||"html"!=S?_.x:_.x+k-t.width,_.y,"start",pt,B,G));
}ct++}for(this.chart.seriesShapes={},g=this.series.length-1;g>=0;g--)if(j=this.series[g],
C=j.data,null!==C){var xt=[],mt=[];ct=0;for(dt in C){P=this.datas[dt],w=P.min,T=P.max,
M=T-w;var ut=C[dt],ft=N+2*Math.PI*ct/b;_=this._getCoordinate(tt,O*(Q+(1-Q)*(ut-w)/M),ft,t),
xt.push(_),mt.push({sname:j.name,key:dt,data:ut}),ct++}xt[xt.length]=xt[0],mt[mt.length]=mt[0];
var yt=this._getBoundary(xt),gt=a.next("spider",[F,j]),vt=j.group,_t=p.normalizeColor(gt.series.fill),bt={
color:gt.series.fill,width:D};_t.a=F.seriesFillAlpha,j.dyn={fill:_t,stroke:bt};var kt=this.oldSeriePoints[j.name],St=this._createSeriesEntry(vt,kt||c,xt,_t,bt,O,Q,V,Y);
this.chart.seriesShapes[j.name]=St,this.oldSeriePoints[j.name]=xt;var jt={element:"spider_poly",
index:g,id:"spider_poly_"+j.name,run:j,plot:this,shape:St.poly,parent:vt,brect:yt,
cx:tt.cx,cy:tt.cy,cr:O,f:_t,s:i};this._connectEvents(jt);var Ct={element:"spider_plot",
index:g,id:"spider_plot_"+j.name,run:j,plot:this,shape:j.group};this._connectEvents(Ct),
r.forEach(St.circles,function(t,e){var r={element:"spider_circle",index:e,id:"spider_circle_"+j.name+e,
run:j,plot:this,shape:t,parent:vt,tdata:mt[e],cx:xt[e].x,cy:xt[e].y,f:_t,s:i};this._connectEvents(r);
},this)}return this},_createSeriesEntry:function(t,e,s,n,h,l,c,d,p){for(var x=t.createPolyline(e).setFill(n).setStroke(h),m=[],u=0;u<e.length;u++){
var f=e[u],y=d,g=t.createCircle({cx:f.x,cy:f.y,r:y}).setFill(n).setStroke(h);m.push(g);
}var v=r.map(s,function(t,r){var s=e[r],o=new a.Animation({duration:1e3,easing:p,
curve:[s.y,t.y]}),n=x,h=m[r];return i.connect(o,"onAnimate",function(t){var e=n.getShape();
e.points[r].y=t,n.setShape(e);var i=h.getShape();i.cy=t,h.setShape(i)}),o}),_=r.map(s,function(t,r){
var s=e[r],o=new a.Animation({duration:1e3,easing:p,curve:[s.x,t.x]}),n=x,h=m[r];return i.connect(o,"onAnimate",function(t){
var e=n.getShape();e.points[r].x=t,n.setShape(e);var i=h.getShape();i.cx=t,h.setShape(i);
}),o}),b=o.combine(v.concat(_));return b.play(),{group:t,poly:x,circles:m}},plotEvent:function(t){
"spider_plot"==t.element&&("onmouseover"!=t.type||n("ie")||t.shape.moveToFront());
},tooltipFunc:function(t){return"spider_circle"==t.element?t.tdata.sname+"<br/>"+t.tdata.key+"<br/>"+t.tdata.data:null;
},_getBoundary:function(t){for(var e=t[0].x,i=t[0].x,r=t[0].y,s=t[0].y,a=0;a<t.length;a++){
var o=t[a];e=Math.max(o.x,e),r=Math.max(o.y,r),i=Math.min(o.x,i),s=Math.min(o.y,s);
}return{x:i,y:s,width:e-i,height:r-s}},_drawArrow:function(t,e,i,r){var s=Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)),a=(i.y-e.y)/s,o=(i.x-e.x)/s,n={
x:i.x+s/3*-a,y:i.y+s/3*o},h={x:i.x+s/3*a,y:i.y+s/3*-o};t.createPolyline([e,n,h]).setFill(r.color).setStroke(r);
},_buildPoints:function(t,e,i,r,s,a,o){for(var n=0;e>n;n++){var h=s+2*Math.PI*n/e;
t.push(this._getCoordinate(i,r,h,o))}a&&t.push(this._getCoordinate(i,r,s+2*Math.PI,o));
},_getCoordinate:function(t,e,i,r){var s=t.cx+e*Math.cos(i);return n("dojo-bidi")&&this.chart.isRightToLeft()&&r&&(s=r.width-s),
{x:s,y:t.cy+e*Math.sin(i)}},_getObjectLength:function(e){var i=0;if(t.isObject(e))for(var r in e)i++;
return i},_getLabel:function(t){return c.getLabel(t,this.opt.fixed,this.opt.precision);
}});return g});