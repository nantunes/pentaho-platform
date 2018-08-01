define(["dojo/_base/lang","dojo/_base/array","dojo/sniff","dojo/_base/declare","dojo/_base/connect","dojo/dom-geometry","./Invisible","../scaler/linear","./common","dojox/gfx","dojox/lang/utils","dojox/lang/functional","dojo/has!dojo-bidi?../bidi/axis2d/Default"],function(t,e,i,a,l,r,n,h,s,o,c,m,x){
var b=45,d=a(i("dojo-bidi")?"dojox.charting.axis2d.NonBidiDefault":"dojox.charting.axis2d.Default",n,{
defaultParams:{vertical:!1,fixUpper:"none",fixLower:"none",natural:!1,leftBottom:!0,
includeZero:!1,fixed:!0,majorLabels:!0,minorTicks:!0,minorLabels:!0,microTicks:!1,
rotation:0,htmlLabels:!0,enableCache:!1,dropLabels:!0,labelSizeChange:!1},optionalParams:{
min:0,max:1,from:0,to:1,majorTickStep:4,minorTickStep:2,microTickStep:1,labels:[],
labelFunc:null,maxLabelSize:0,maxLabelCharCount:0,trailingSymbol:null,stroke:{},majorTick:{},
minorTick:{},microTick:{},tick:{},font:"",fontColor:"",title:"",titleGap:0,titleFont:"",
titleFontColor:"",titleOrientation:""},constructor:function(e,i){this.opt=t.clone(this.defaultParams),
c.updateWithObject(this.opt,i),c.updateWithPattern(this.opt,i,this.optionalParams),
this.opt.enableCache&&(this._textFreePool=[],this._lineFreePool=[],this._textUsePool=[],
this._lineUsePool=[]),this._invalidMaxLabelSize=!0},setWindow:function(t,e){return t!=this.scale&&(this._invalidMaxLabelSize=!0),
this.inherited(arguments)},_groupLabelWidth:function(e,i,a){if(!e.length)return 0;
e.length>50&&(e.length=50),t.isObject(e[0])&&(e=m.map(e,function(t){return t.text;
})),a&&(e=m.map(e,function(e){return 0==t.trim(e).length?"":e.substring(0,a)+this.trailingSymbol;
},this));var l=e.join("<br>");return o._base._getTextBox(l,{font:i}).w||0},_getMaxLabelSize:function(i,a,l,r,n,s){
if(null==this._maxLabelSize&&6==arguments.length){var o=this.opt;this.scaler.minMinorStep=this._prevMinMinorStep=0;
var c=t.clone(o);delete c.to,delete c.from;var m=h.buildScaler(i,a,l,c,o.to-o.from);
m.minMinorStep=0,this._majorStart=m.major.start;var x=h.buildTicks(m,o);if(s&&x){
var b=0,d=0,u=function(t){t.label&&this.push(t.label)},g=[];this.opt.majorLabels&&(e.forEach(x.major,u,g),
b=this._groupLabelWidth(g,n,c.maxLabelCharCount),c.maxLabelSize&&(b=Math.min(c.maxLabelSize,b))),
g=[],this.opt.dropLabels&&this.opt.minorLabels&&(e.forEach(x.minor,u,g),d=this._groupLabelWidth(g,n,c.maxLabelCharCount),
c.maxLabelSize&&(d=Math.min(c.maxLabelSize,d))),this._maxLabelSize={majLabelW:b,minLabelW:d,
majLabelH:s,minLabelH:s}}else this._maxLabelSize=null}return this._maxLabelSize},
calculate:function(t,e,i){if(this.inherited(arguments),this.scaler.minMinorStep=this._prevMinMinorStep,
(this._invalidMaxLabelSize||i!=this._oldSpan)&&t!=1/0&&e!=-(1/0)){this._invalidMaxLabelSize=!1,
this.opt.labelSizeChange&&(this._maxLabelSize=null),this._oldSpan=i;var a=this.opt,l=this.chart.theme.axis,r=a.rotation%360,n=this.chart.theme.axis.tick.labelGap,s=a.font||l.majorTick&&l.majorTick.font||l.tick&&l.tick.font,c=s?o.normalizedLength(o.splitFontString(s).size):0,m=this._getMaxLabelSize(t,e,i,r,s,c);
if("number"!=typeof n&&(n=4),m&&a.dropLabels){var x,b,d=Math.abs(Math.cos(r*Math.PI/180)),u=Math.abs(Math.sin(r*Math.PI/180));
switch(0>r&&(r+=360),r){case 0:case 180:this.vertical?x=b=c:(x=m.majLabelW,b=m.minLabelW);
break;case 90:case 270:this.vertical?(x=m.majLabelW,b=m.minLabelW):x=b=c;break;default:
x=this.vertical?Math.min(m.majLabelW,c/d):Math.min(m.majLabelW,c/u);var g=Math.sqrt(m.minLabelW*m.minLabelW+c*c),f=this.vertical?c*d+m.minLabelW*u:m.minLabelW*d+c*u;
b=Math.min(g,f)}this.scaler.minMinorStep=this._prevMinMinorStep=Math.max(x,b)+n;var p=this.scaler.minMinorStep<=this.scaler.minor.tick*this.scaler.bounds.scale;
p?this._skipInterval=0:this._skipInterval=Math.floor((x+n)/(this.scaler.major.tick*this.scaler.bounds.scale));
}else this._skipInterval=0}return this.ticks=h.buildTicks(this.scaler,this.opt),this;
},getOffsets:function(){var t=this.scaler,e={l:0,r:0,t:0,b:0};if(!t)return e;var i=this.opt,a=this.chart.theme.axis,l=this.chart.theme.axis.tick.labelGap,r=i.titleFont||a.title&&a.title.font,n=0==i.titleGap?0:i.titleGap||a.title&&a.title.gap,h=this.chart.theme.getTick("major",i),s=this.chart.theme.getTick("minor",i),c=r?o.normalizedLength(o.splitFontString(r).size):0,m=i.rotation%360,x=i.leftBottom,d=Math.abs(Math.cos(m*Math.PI/180)),u=Math.abs(Math.sin(m*Math.PI/180));
this.trailingSymbol=void 0===i.trailingSymbol||null===i.trailingSymbol?this.trailingSymbol:i.trailingSymbol,
"number"!=typeof l&&(l=4),0>m&&(m+=360);var g=this._getMaxLabelSize();if(g){var f,p=Math.ceil(Math.max(g.majLabelW,g.minLabelW))+1,y=Math.ceil(Math.max(g.majLabelH,g.minLabelH))+1;
if(this.vertical){switch(f=x?"l":"r",m){case 0:case 180:e[f]=p,e.t=e.b=y/2;break;case 90:
case 270:e[f]=y,e.t=e.b=p/2;break;default:b>=m||m>180&&180+b>=m?(e[f]=y*u/2+p*d,e[x?"t":"b"]=y*d/2+p*u,
e[x?"b":"t"]=y*d/2):m>360-b||180>m&&m>180-b?(e[f]=y*u/2+p*d,e[x?"b":"t"]=y*d/2+p*u,
e[x?"t":"b"]=y*d/2):90>m||m>180&&270>m?(e[f]=y*u+p*d,e[x?"t":"b"]=y*d+p*u):(e[f]=y*u+p*d,
e[x?"b":"t"]=y*d+p*u)}e[f]+=l+Math.max(h.length>0?h.length:0,s.length>0?s.length:0)+(i.title?c+n:0);
}else{switch(f=x?"b":"t",m){case 0:case 180:e[f]=y,e.l=e.r=p/2;break;case 90:case 270:
e[f]=p,e.l=e.r=y/2;break;default:m>=90-b&&90>=m||m>=270-b&&270>=m?(e[f]=y*d/2+p*u,
e[x?"r":"l"]=y*u/2+p*d,e[x?"l":"r"]=y*u/2):m>=90&&90+b>=m||m>=270&&270+b>=m?(e[f]=y*d/2+p*u,
e[x?"l":"r"]=y*u/2+p*d,e[x?"r":"l"]=y*u/2):b>m||m>180&&180+b>m?(e[f]=y*d+p*u,e[x?"r":"l"]=y*u+p*d):(e[f]=y*d+p*u,
e[x?"l":"r"]=y*u+p*d)}e[f]+=l+Math.max(h.length>0?h.length:0,s.length>0?s.length:0)+(i.title?c+n:0);
}}return e},cleanGroup:function(t){this.opt.enableCache&&this.group&&(this._lineFreePool=this._lineFreePool.concat(this._lineUsePool),
this._lineUsePool=[],this._textFreePool=this._textFreePool.concat(this._textUsePool),
this._textUsePool=[]),this.inherited(arguments)},createText:function(t,e,i,a,l,r,n,h,o){
if(!this.opt.enableCache||"html"==t)return s.createText[t](this.chart,e,i,a,l,r,n,h,o);
var c;return this._textFreePool.length>0?(c=this._textFreePool.pop(),c.setShape({
x:i,y:a,text:r,align:l}),e.add(c)):c=s.createText[t](this.chart,e,i,a,l,r,n,h),this._textUsePool.push(c),
c},createLine:function(t,e){var i;return this.opt.enableCache&&this._lineFreePool.length>0?(i=this._lineFreePool.pop(),
i.setShape(e),t.add(i)):i=t.createLine(e),this.opt.enableCache&&this._lineUsePool.push(i),
i},render:function(t,a){var l=this._isRtl();if(!this.dirty||!this.scaler)return this;
var r,n,c,m,x,d,u,g,f,p=this.opt,y=this.chart.theme.axis,L=p.leftBottom,k=p.rotation%360,v=0,M=this.chart.theme.axis.tick.labelGap,S=p.font||y.majorTick&&y.majorTick.font||y.tick&&y.tick.font,_=p.titleFont||y.title&&y.title.font,j=p.fontColor||y.majorTick&&y.majorTick.fontColor||y.tick&&y.tick.fontColor||"black",T=p.titleFontColor||y.title&&y.title.fontColor||"black",C=0==p.titleGap?0:p.titleGap||y.title&&y.title.gap||15,z=p.titleOrientation||y.title&&y.title.orientation||"axis",P=this.chart.theme.getTick("major",p),W=this.chart.theme.getTick("minor",p),w=this.chart.theme.getTick("micro",p),F="stroke"in p?p.stroke:y.stroke,I=S?o.normalizedLength(o.splitFontString(S).size):0,G=Math.abs(Math.cos(k*Math.PI/180)),U=Math.abs(Math.sin(k*Math.PI/180)),E=_?o.normalizedLength(o.splitFontString(_).size):0;
"number"!=typeof M&&(M=4),0>k&&(k+=360);var B=this._getMaxLabelSize();if(B=B&&B.majLabelW,
this.vertical){switch(r={y:t.height-a.b},n={y:a.t},c={y:(t.height-a.b+a.t)/2},m=I*U+(B||0)*G+M+Math.max(P.length>0?P.length:0,W.length>0?W.length:0)+E+C,
x={x:0,y:-1},g={x:0,y:0},d={x:1,y:0},u={x:M,y:0},k){case 0:f="end",g.y=.4*I;break;
case 90:f="middle",g.x=-I;break;case 180:f="start",g.y=.4*-I;break;case 270:f="middle";
break;default:b>k?(f="end",g.y=.4*I):90>k?(f="end",g.y=.4*I):180-b>k?f="start":180+b>k?(f="start",
g.y=.4*-I):270>k?(f="start",g.x=L?0:.4*I):360-b>k?(f="end",g.x=L?0:.4*I):(f="end",
g.y=.4*I)}if(L)r.x=n.x=a.l,v=z&&"away"==z?90:270,c.x=a.l-m+(270==v?E:0),d.x=-1,u.x=-u.x;else switch(r.x=n.x=t.width-a.r,
v=z&&"axis"==z?90:270,c.x=t.width-a.r+m-(270==v?0:E),f){case"start":f="end";break;
case"end":f="start";break;case"middle":g.x+=I}}else{switch(r={x:a.l},n={x:t.width-a.r
},c={x:(t.width-a.r+a.l)/2},m=I*G+(B||0)*U+M+Math.max(P.length>0?P.length:0,W.length>0?W.length:0)+E+C,
x={x:l?-1:1,y:0},g={x:0,y:0},d={x:0,y:1},u={x:0,y:M},k){case 0:f="middle",g.y=I;break;
case 90:f="start",g.x=.4*-I;break;case 180:f="middle";break;case 270:f="end",g.x=.4*I;
break;default:90-b>k?(f="start",g.y=L?I:0):90+b>k?(f="start",g.x=.4*-I):180>k?(f="start",
g.y=L?0:-I):270-b>k?(f="end",g.y=L?0:-I):270+b>k?(f="end",g.y=L?.4*I:0):(f="end",
g.y=L?I:0)}if(L)r.y=n.y=t.height-a.b,v=z&&"axis"==z?180:0,c.y=t.height-a.b+m-(v?E:0);else switch(r.y=n.y=a.t,
v=z&&"away"==z?180:0,c.y=a.t-m+(v?0:E),d.y=-1,u.y=-u.y,f){case"start":f="end";break;
case"end":f="start";break;case"middle":g.y-=I}}this.cleanGroup();var q=this.group,O=this.scaler,D=this.ticks,H=h.getTransformerFromModel(this.scaler),A=p.title&&v||k||!this.opt.htmlLabels||i("ie")||i("opera")?"gfx":"html",R=d.x*P.length,N=d.y*P.length,Z=this._skipInterval;
if(q.createLine({x1:r.x,y1:r.y,x2:n.x,y2:n.y}).setStroke(F),p.title){var J=s.createText[A](this.chart,q,c.x,c.y,"middle",p.title,_,T);
"html"==A?this.htmlElements.push(J):J.setTransform(o.matrix.rotategAt(v,c.x,c.y));
}if(null==D)return this.dirty=!1,this;var K=D.major.length>0?(D.major[0].value-this._majorStart)/O.major.tick:0,Q=this.opt.majorLabels;
return e.forEach(D.major,function(t,e){var i,a=H(t.value),h=(l?n.x:r.x)+x.x*a,s=r.y+x.y*a;
if(e+=K,this.createLine(q,{x1:h,y1:s,x2:h+R,y2:s+N}).setStroke(P),t.label&&(!Z||(e-(1+Z))%(1+Z)==0)){
var c=p.maxLabelCharCount?this.getTextWithLimitCharCount(t.label,S,p.maxLabelCharCount):{
text:t.label,truncated:!1};c=p.maxLabelSize?this.getTextWithLimitLength(c.text,S,p.maxLabelSize,c.truncated):c,
i=this.createText(A,q,h+(P.length>0?R:0)+u.x+(k?0:g.x),s+(P.length>0?N:0)+u.y+(k?0:g.y),f,c.text,S,j),
c.truncated&&this.chart.formatTruncatedLabel(i,t.label,A),c.truncated&&this.labelTooltip(i,this.chart,t.label,c.text,S,A),
"html"==A?this.htmlElements.push(i):k&&i.setTransform([{dx:g.x,dy:g.y},o.matrix.rotategAt(k,h+(P.length>0?R:0)+u.x,s+(P.length>0?N:0)+u.y)]);
}},this),R=d.x*W.length,N=d.y*W.length,Q=this.opt.minorLabels&&O.minMinorStep<=O.minor.tick*O.bounds.scale,
e.forEach(D.minor,function(t){var e,i=H(t.value),a=(l?n.x:r.x)+x.x*i,h=r.y+x.y*i;if(this.createLine(q,{
x1:a,y1:h,x2:a+R,y2:h+N}).setStroke(W),Q&&t.label){var s=p.maxLabelCharCount?this.getTextWithLimitCharCount(t.label,S,p.maxLabelCharCount):{
text:t.label,truncated:!1};s=p.maxLabelSize?this.getTextWithLimitLength(s.text,S,p.maxLabelSize,s.truncated):s,
e=this.createText(A,q,a+(W.length>0?R:0)+u.x+(k?0:g.x),h+(W.length>0?N:0)+u.y+(k?0:g.y),f,s.text,S,j),
s.truncated&&this.chart.formatTruncatedLabel(e,t.label,A),s.truncated&&this.labelTooltip(e,this.chart,t.label,s.text,S,A),
"html"==A?this.htmlElements.push(e):k&&e.setTransform([{dx:g.x,dy:g.y},o.matrix.rotategAt(k,a+(W.length>0?R:0)+u.x,h+(W.length>0?N:0)+u.y)]);
}},this),R=d.x*w.length,N=d.y*w.length,e.forEach(D.micro,function(t){var e=H(t.value),i=r.x+x.x*e,a=r.y+x.y*e;
this.createLine(q,{x1:i,y1:a,x2:i+R,y2:a+N}).setStroke(w)},this),this.dirty=!1,this;
},labelTooltip:function(e,i,a,n,h,s){var c=["dijit/Tooltip"],m={type:"rect"},x=["above","below"],b=o._base._getTextBox(n,{
font:h}).w||0,d=h?o.normalizedLength(o.splitFontString(h).size):0;if("html"==s)t.mixin(m,r.position(e.firstChild,!0)),
m.width=Math.ceil(b),m.height=Math.ceil(d),this._events.push({shape:dojo,handle:l.connect(e.firstChild,"onmouseover",this,function(t){
require(c,function(t){t.show(a,m,x)})})}),this._events.push({shape:dojo,handle:l.connect(e.firstChild,"onmouseout",this,function(t){
require(c,function(t){t.hide(m)})})});else{var u=e.getShape(),g=i.getCoords();m=t.mixin(m,{
x:u.x-b/2,y:u.y}),m.x+=g.x,m.y+=g.y,m.x=Math.round(m.x),m.y=Math.round(m.y),m.width=Math.ceil(b),
m.height=Math.ceil(d),this._events.push({shape:e,handle:e.connect("onmouseenter",this,function(t){
require(c,function(t){t.show(a,m,x)})})}),this._events.push({shape:e,handle:e.connect("onmouseleave",this,function(t){
require(c,function(t){t.hide(m)})})})}},_isRtl:function(){return!1}});return i("dojo-bidi")?a("dojox.charting.axis2d.Default",[d,x]):d;
});