define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","./CartesianBase","./_PlotEvents","./common","../axis2d/common","dojox/gfx","dojox/lang/utils","dojox/gfx/fx","dojo/has"],function(t,i,e,a,o,r,s,n,h,l,d){
var c=function(t){return p(t,t.getShape().text)},p=function(i,e){var a,o,r=i.declaredClass;
if(-1!=r.indexOf("svg"))try{return t.mixin({},i.rawNode.getBBox())}catch(s){return null;
}else{if(-1!=r.indexOf("vml")){var h=i.rawNode,l=h.style.display;h.style.display="inline",
a=n.pt2px(parseFloat(h.currentStyle.width)),o=n.pt2px(parseFloat(h.currentStyle.height));
var d={x:0,y:0,width:a,height:o};return u(i,d),h.style.display=l,d}if(-1!=r.indexOf("silverlight")){
var c={width:i.rawNode.actualWidth,height:i.rawNode.actualHeight};return u(i,c,.75);
}if(i.getTextWidth){a=i.getTextWidth();var p=i.getFont(),x=p?p.size:n.defaultFont.size;
return o=n.normalizedLength(x),d={width:a,height:o},u(i,d,.75),d}}return null},u=function(t,i,e){
var a=i.width,o=i.height,r=t.getShape(),s=r.align;switch(s){case"end":i.x=r.x-a;break;
case"middle":i.x=r.x-a/2;break;case"start":default:i.x=r.x}return e=e||1,i.y=r.y-o*e,
i},x=e("dojox.charting.plot2d.Indicator",[a,o],{defaultParams:{vertical:!0,fixed:!0,
precision:0,lines:!0,labels:"line",markers:!0},optionalParams:{lineStroke:{},outlineStroke:{},
shadowStroke:{},lineFill:{},stroke:{},outline:{},shadow:{},fill:{},fillFunc:null,
labelFunc:null,font:"",fontColor:"",markerStroke:{},markerOutline:{},markerShadow:{},
markerFill:{},markerSymbol:"",values:[],offset:{},start:!1,animate:!1},constructor:function(i,e){
this.opt=t.clone(this.defaultParams),h.updateWithObject(this.opt,e),"number"==typeof e.values&&(e.values=[e.values]),
h.updateWithPattern(this.opt,e,this.optionalParams),this.animate=this.opt.animate;
},render:function(t,i){return this.zoom?this.performZoom(t,i):this.isDirty()?(this.cleanGroup(null,!0),
this.opt.values?(this._updateIndicator(),this):this):this},_updateIndicator:function(){
var t=this.chart.theme,e=this._hAxis.name,a=this._vAxis.name,o=this._hAxis.getScaler().bounds,s=this._vAxis.getScaler().bounds,n={};
n[e]=o.from,n[a]=s.from;var h=this.toPage(n);n[e]=o.to,n[a]=s.to;var l=this.toPage(n),d=this.events(),c=i.map(this.opt.values,function(t,i){
return this._renderIndicator(t,i,e,a,h,l,d,this.animate)},this),p=c.length;if("trend"==this.opt.labels){
var u=this.opt.vertical,x=this._data[0][0],m=this._data[p-1][0],f=m-x,y=this.opt.labelFunc?this.opt.labelFunc(-1,this.values,this._data,this.opt.fixed,this.opt.precision):r.getLabel(f,this.opt.fixed,this.opt.precision)+" ("+r.getLabel(100*f/x,!0,2)+"%)";
this._renderText(this.getGroup(),y,this.chart.theme,u?(c[0].x+c[p-1].x)/2:c[1].x,u?c[0].y:(c[1].y+c[p-1].y)/2,-1,this.opt.values,this._data);
}var v=void 0!=this.opt.lineFill?this.opt.lineFill:t.indicator.lineFill;if(v&&p>1){
var k=Math.min(c[0].x1,c[p-1].x1),g=Math.min(c[0].y1,c[p-1].y1),S=this.getGroup().createRect({
x:k,y:g,width:Math.max(c[0].x2,c[p-1].x2)-k,height:Math.max(c[0].y2,c[p-1].y2)-g}).setFill(v);
S.moveToBack()}},_renderIndicator:function(e,a,o,s,n,h,l,c){var p=this.chart.theme,u=this.chart.getCoords(),x=this.opt.vertical,m=this.getGroup().createGroup(),f={};
f[o]=x?e:0,f[s]=x?0:e,d("dojo-bidi")&&(f.x=this._getMarkX(f.x)),f=this.toPage(f);var y=x?f.x>=n.x&&f.x<=h.x:f.y>=h.y&&f.y<=n.y,v=f.x-u.x,k=f.y-u.y,g=x?v:n.x-u.x,S=x?n.y-u.y:k,w=x?g:h.x-u.x,b=x?h.y-u.y:S;
if(this.opt.lines&&y){var _=this.opt.hasOwnProperty("lineShadow")?this.opt.lineShadow:p.indicator.lineShadow,F=this.opt.hasOwnProperty("lineStroke")?this.opt.lineStroke:p.indicator.lineStroke,P=this.opt.hasOwnProperty("lineOutline")?this.opt.lineOutline:p.indicator.lineOutline;
_&&m.createLine({x1:g+_.dx,y1:S+_.dy,x2:w+_.dx,y2:b+_.dy}).setStroke(_),P&&(P=r.makeStroke(P),
P.width=2*P.width+(F?F.width:0),m.createLine({x1:g,y1:S,x2:w,y2:b}).setStroke(P)),
m.createLine({x1:g,y1:S,x2:w,y2:b}).setStroke(F)}var O;if(this.opt.markers&&y){var j=this._data[a],T=this;
j&&(O=i.map(j,function(t,i){if(f[o]=x?e:t,f[s]=x?t:e,d("dojo-bidi")&&(f.x=T._getMarkX(f.x)),
f=this.toPage(f),x?f.y<=n.y&&f.y>=h.y:f.x>=n.x&&f.x<=h.x){v=f.x-u.x,k=f.y-u.y;var a=this.opt.markerSymbol?this.opt.markerSymbol:p.indicator.markerSymbol,l="M"+v+" "+k+" "+a;
if(_=void 0!=this.opt.markerShadow?this.opt.markerShadow:p.indicator.markerShadow,
F=void 0!=this.opt.markerStroke?this.opt.markerStroke:p.indicator.markerStroke,P=void 0!=this.opt.markerOutline?this.opt.markerOutline:p.indicator.markerOutline,
_){var c="M"+(v+_.dx)+" "+(k+_.dy)+" "+a;m.createPath(c).setFill(_.color).setStroke(_);
}P&&(P=r.makeStroke(P),P.width=2*P.width+(F?F.width:0),m.createPath(l).setStroke(P));
var y=m.createPath(l),g=this._shapeFill(void 0!=this.opt.markerFill?this.opt.markerFill:p.indicator.markerFill,y.getBoundingBox());
y.setFill(g).setStroke(F)}return t},this))}var L;if(L=this.opt.start?{x:x?g:g,y:x?S:b
}:{x:x?g:w,y:x?b:S},this.opt.labels&&"trend"!=this.opt.labels&&y){var M;this.opt.labelFunc?M=this.opt.labelFunc(a,this.opt.values,this._data,this.opt.fixed,this.opt.precision,this.opt.labels):"markers"==this.opt.labels?(M=i.map(O,function(t){
return r.getLabel(t,this.opt.fixed,this.opt.precision)},this),M=1!=M.length?"[ "+M.join(", ")+" ]":M[0]):M=r.getLabel(e,this.opt.fixed,this.opt.precision),
this._renderText(m,M,p,L.x,L.y,a,this.opt.values,this._data)}return l&&this._connectEvents({
element:"indicator",run:this.run?this.run[a]:void 0,shape:m,value:e}),c&&this._animateIndicator(m,x,x?S:g,x?S+b:g+w,c),
t.mixin(L,{x1:g,y1:S,x2:w,y2:b})},_animateIndicator:function(i,e,a,o,r){var s=e?[0,a]:[a,0],n=e?[1,1/o]:[1/o,1];
l.animateTransform(t.delegate({shape:i,duration:1200,transform:[{name:"translate",
start:s,end:[0,0]},{name:"scale",start:n,end:[1,1]},{name:"original"}]},r)).play();
},clear:function(){this.inherited(arguments),this._data=[]},addSeries:function(t){
this.inherited(arguments),this._data.push(t.data)},_renderText:function(t,i,e,a,o,n,h,l){
this.opt.offset&&(a+=this.opt.offset.x,o+=this.opt.offset.y);var d=s.createText.gfx(this.chart,t,a,o,"middle",i,this.opt.font?this.opt.font:e.indicator.font,this.opt.fontColor?this.opt.fontColor:e.indicator.fontColor),p=c(d);
p.x-=2,p.y-=1,p.width+=4,p.height+=2,p.r=this.opt.radius?this.opt.radius:e.indicator.radius;
var u=void 0!=this.opt.shadow?this.opt.shadow:e.indicator.shadow,x=void 0!=this.opt.stroke?this.opt.stroke:e.indicator.stroke,m=void 0!=this.opt.outline?this.opt.outline:e.indicator.outline;
u&&t.createRect(p).setFill(u.color).setStroke(u),m&&(m=r.makeStroke(m),m.width=2*m.width+(x?x.width:0),
t.createRect(p).setStroke(m));var f=this.opt.fillFunc?this.opt.fillFunc(n,h,l):void 0!=this.opt.fill?this.opt.fill:e.indicator.fill;
t.createRect(p).setFill(this._shapeFill(f,p)).setStroke(x),d.moveToFront()},getSeriesStats:function(){
return t.delegate(r.defaultStats)}});return d("dojo-bidi")&&x.extend({_getMarkX:function(t){
return this.chart.isRightToLeft()?this.chart.axes.x.scaler.bounds.to+this.chart.axes.x.scaler.bounds.from-t:t;
}}),x});