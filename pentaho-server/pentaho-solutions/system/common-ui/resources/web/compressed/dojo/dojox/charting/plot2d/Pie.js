define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","./Base","./_PlotEvents","./common","dojox/gfx","dojox/gfx/matrix","dojox/lang/functional","dojox/lang/utils","dojo/has"],function(t,e,i,s,a,r,l,n,h,o,c){
var f=.2;return i("dojox.charting.plot2d.Pie",[s,a],{defaultParams:{labels:!0,ticks:!1,
fixed:!0,precision:1,labelOffset:20,labelStyle:"default",htmlLabels:!0,radGrad:"native",
fanSize:5,startAngle:0},optionalParams:{radius:0,omitLabels:!1,stroke:{},outline:{},
shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:"",labelWiring:{}},constructor:function(e,i){
this.opt=t.clone(this.defaultParams),o.updateWithObject(this.opt,i),o.updateWithPattern(this.opt,i,this.optionalParams),
this.axes=[],this.run=null,this.dyn=[]},clear:function(){return this.inherited(arguments),
this.dyn=[],this.run=null,this},setAxis:function(t){return this},addSeries:function(t){
return this.run=t,this},getSeriesStats:function(){return t.delegate(r.defaultStats);
},getRequiredColors:function(){return this.run?this.run.data.length:0},render:function(i,s){
if(!this.dirty)return this;this.resetEvents(),this.dirty=!1,this._eventSeries={},
this.cleanGroup();var a=this.group,r=this.chart.theme;if(!this.run||!this.run.data.length)return this;
var o,u,d,p,x,y,b=(i.width-s.l-s.r)/2,g=(i.height-s.t-s.b)/2,m=Math.min(b,g),v="font"in this.opt?this.opt.font:r.series.font,M=n._degToRad(this.opt.startAngle),_=M,P=this.run.data,R=this.events();
this.dyn=[],"radius"in this.opt&&(m=this.opt.radius,y=m-this.opt.labelOffset);var k={
cx:s.l+b,cy:s.t+g,r:m};if(this.opt.shadow||r.shadow){var T=this.opt.shadow||r.shadow,F=t.clone(k);
F.cx+=T.dx,F.cy+=T.dy,a.createCircle(F).setFill(T.color).setStroke(T)}if(a.setFilter&&(this.opt.filter||r.filter)&&a.createCircle(k).setFill(r.series.stroke).setFilter(this.opt.filter||r.filter),
"number"==typeof P[0]){if(u=h.map(P,"x ? Math.max(x, 0) : 0"),h.every(u,"<= 0"))return a.createCircle(k).setStroke(r.series.stroke),
this.dyn=e.map(u,function(){return{}}),this;d=h.map(u,"/this",h.foldl(u,"+",0)),this.opt.labels&&(p=e.map(d,function(t){
return t>0?this._getLabel(100*t)+"%":""},this))}else{if(u=h.map(P,"x ? Math.max(x.y, 0) : 0"),
h.every(u,"<= 0"))return a.createCircle(k).setStroke(r.series.stroke),this.dyn=e.map(u,function(){
return{}}),this;d=h.map(u,"/this",h.foldl(u,"+",0)),this.opt.labels&&(p=e.map(d,function(t,e){
if(0>t)return"";var i=P[e];return"text"in i?i.text:this._getLabel(100*t)+"%"},this));
}var S=h.map(P,function(t,e){var i=[this.opt,this.run];return null!==t&&"number"!=typeof t&&i.push(t),
this.opt.styleFunc&&i.push(this.opt.styleFunc(t)),r.next("slice",i,!0)},this);this.opt.labels&&(o=v?l.normalizedLength(l.splitFontString(v).size):0,
x=h.foldl1(h.map(p,function(t,e){var i=S[e].series.font;return l._base._getTextBox(t,{
font:i}).w},this),"Math.max(a, b)")/2,this.opt.labelOffset<0&&(m=Math.min(b-2*x,g-o)+this.opt.labelOffset),
y=m-this.opt.labelOffset);var L=new Array(d.length);if(e.some(d,function(t,e){if(0>t)return!1;
if(0==t)return this.dyn.push({fill:null,stroke:null}),!1;var r,l,h=P[e],o=S[e];if(t>=1){
r=this._plotFill(o.series.fill,i,s),r=this._shapeFill(r,{x:k.cx-k.r,y:k.cy-k.r,width:2*k.r,
height:2*k.r}),r=this._pseudoRadialFill(r,{x:k.cx,y:k.cy},k.r);var c=a.createCircle(k).setFill(r).setStroke(o.series.stroke);
return this.dyn.push({fill:r,stroke:o.series.stroke}),R&&(l={element:"slice",index:e,
run:this.run,shape:c,x:e,y:"number"==typeof h?h:h.y,cx:k.cx,cy:k.cy,cr:m},this._connectEvents(l),
L[e]=l),!1}var u=_+2*t*Math.PI;e+1==d.length&&(u=M+2*Math.PI);var p=u-_,x=k.cx+m*Math.cos(_),y=k.cy+m*Math.sin(_),b=k.cx+m*Math.cos(u),g=k.cy+m*Math.sin(u),v=n._degToRad(this.opt.fanSize);
if(o.series.fill&&"radial"===o.series.fill.type&&"fan"===this.opt.radGrad&&p>v){var T=a.createGroup(),F=Math.ceil(p/v),w=p/F;
r=this._shapeFill(o.series.fill,{x:k.cx-k.r,y:k.cy-k.r,width:2*k.r,height:2*k.r});
for(var j=0;F>j;++j){var I=0==j?x:k.cx+m*Math.cos(_+(j-f)*w),O=0==j?y:k.cy+m*Math.sin(_+(j-f)*w),C=j==F-1?b:k.cx+m*Math.cos(_+(j+1+f)*w),B=j==F-1?g:k.cy+m*Math.sin(_+(j+1+f)*w);
T.createPath().moveTo(k.cx,k.cy).lineTo(I,O).arcTo(m,m,0,w>Math.PI,!0,C,B).lineTo(k.cx,k.cy).closePath().setFill(this._pseudoRadialFill(r,{
x:k.cx,y:k.cy},m,_+(j+.5)*w,_+(j+.5)*w))}T.createPath().moveTo(k.cx,k.cy).lineTo(x,y).arcTo(m,m,0,p>Math.PI,!0,b,g).lineTo(k.cx,k.cy).closePath().setStroke(o.series.stroke),
c=T}else c=a.createPath().moveTo(k.cx,k.cy).lineTo(x,y).arcTo(m,m,0,p>Math.PI,!0,b,g).lineTo(k.cx,k.cy).closePath().setStroke(o.series.stroke),
r=o.series.fill,r&&"radial"===r.type?(r=this._shapeFill(r,{x:k.cx-k.r,y:k.cy-k.r,
width:2*k.r,height:2*k.r}),"linear"===this.opt.radGrad&&(r=this._pseudoRadialFill(r,{
x:k.cx,y:k.cy},m,_,u))):r&&"linear"===r.type&&(r=this._plotFill(r,i,s),r=this._shapeFill(r,c.getBoundingBox())),
c.setFill(r);return this.dyn.push({fill:r,stroke:o.series.stroke}),R&&(l={element:"slice",
index:e,run:this.run,shape:c,x:e,y:"number"==typeof h?h:h.y,cx:k.cx,cy:k.cy,cr:m},
this._connectEvents(l),L[e]=l),_=u,!1},this),this.opt.labels){var w=c("dojo-bidi")&&this.chart.isRightToLeft();
if("default"==this.opt.labelStyle)_=M,e.some(d,function(t,e){if(0>=t)return!1;var s=S[e];
if(t>=1)return this.renderLabel(a,k.cx,k.cy+o/2,p[e],s,this.opt.labelOffset>0),!0;
var r=_+2*t*Math.PI;if(e+1==d.length&&(r=M+2*Math.PI),this.opt.omitLabels&&.001>r-_)return!1;
var l=(_+r)/2,n=k.cx+y*Math.cos(l),h=k.cy+y*Math.sin(l)+o/2;return this.renderLabel(a,w?i.width-n:n,h,p[e],s,this.opt.labelOffset>0),
_=r,!1},this);else if("columns"==this.opt.labelStyle){_=M;var j=this.opt.omitLabels,I=[];
e.forEach(d,function(t,e){var i=_+2*t*Math.PI;e+1==d.length&&(i=M+2*Math.PI);var s=(_+i)/2;
I.push({angle:s,left:Math.cos(s)<0,theme:S[e],index:e,omit:j?.001>i-_:!1}),_=i});var O=l._base._getTextBox("a",{
font:v}).h;this._getProperLabelRadius(I,O,1.1*k.r),e.forEach(I,function(t,e){if(!t.omit){
var s=k.cx-2*k.r,r=k.cx+2*k.r,n=l._base._getTextBox(p[e],{font:t.theme.series.font
}).w,h=k.cx+t.labelR*Math.cos(t.angle),o=k.cy+t.labelR*Math.sin(t.angle),c=t.left?s+n:r-n,f=t.left?s:c,u=a.createPath().moveTo(k.cx+k.r*Math.cos(t.angle),k.cy+k.r*Math.sin(t.angle));
Math.abs(t.labelR*Math.cos(t.angle))<2*k.r-n&&u.lineTo(h,o),u.lineTo(c,o).setStroke(t.theme.series.labelWiring),
this.renderLabel(a,w?i.width-n-f:f,o,p[e],t.theme,!1,"left")}},this)}}var C=0;return this._eventSeries[this.run.name]=h.map(P,function(t){
return 0>=t?null:L[C++]}),c("dojo-bidi")&&this._checkOrientation(this.group,i,s),
this},_getProperLabelRadius:function(t,e,i){var s,a,r=1,l=1;if(1==t.length)return void(t[0].labelR=i);
for(var n=0;n<t.length;n++){var h=Math.abs(Math.sin(t[n].angle));t[n].left?r>=h&&(r=h,
s=t[n]):l>=h&&(l=h,a=t[n])}s.labelR=a.labelR=i,this._calculateLabelR(s,t,e),this._calculateLabelR(a,t,e);
},_calculateLabelR:function(t,e,i){for(var s,a=t.index,r=e.length,l=t.labelR;!(e[a%r].left^e[(a+1)%r].left);)e[(a+1)%r].omit||(s=(Math.sin(e[a%r].angle)*l+(e[a%r].left?-i:i))/Math.sin(e[(a+1)%r].angle),
l=s<t.labelR?t.labelR:s,e[(a+1)%r].labelR=l),a++;a=t.index;for(var n=0==a?r-1:a-1;!(e[a].left^e[n].left);)e[n].omit||(s=(Math.sin(e[a].angle)*l+(e[a].left?i:-i))/Math.sin(e[n].angle),
l=s<t.labelR?t.labelR:s,e[n].labelR=l),a--,n--,a=0>a?a+e.length:a,n=0>n?n+e.length:n;
}})});