define(["dijit/Tooltip","dojo/_base/lang","dojo/_base/declare","dojo/_base/window","dojo/_base/connect","dojo/dom-style","./PlotAction","dojox/gfx/matrix","dojo/has","dojo/has!dojo-bidi?../bidi/action2d/Tooltip","dojox/lang/functional","dojox/lang/functional/scan","dojox/lang/functional/fold"],function(t,e,o,a,n,i,c,r,s,d,h){
var l=function(t,e){var o=t.run&&t.run.data&&t.run.data[t.index];return o&&"number"!=typeof o&&(o.tooltip||o.text)?o.tooltip||o.text:e.tooltipFunc?e.tooltipFunc(t):t.y;
},u=Math.PI/4,p=Math.PI/2,x=o(s("dojo-bidi")?"dojox.charting.action2d.NonBidiTooltip":"dojox.charting.action2d.Tooltip",c,{
defaultParams:{text:l,mouseOver:!0},optionalParams:{},constructor:function(t,e,o){
this.text=o&&o.text?o.text:l,this.mouseOver=o&&void 0!=o.mouseOver?o.mouseOver:!0,
this.connect()},process:function(o){if("onplotreset"===o.type||"onmouseout"===o.type)return t.hide(this.aroundRect),
this.aroundRect=null,void("onplotreset"===o.type&&delete this.angles);if(!(!o.shape||this.mouseOver&&"onmouseover"!==o.type||!this.mouseOver&&"onclick"!==o.type)){
var i={type:"rect"},c=["after-centered","before-centered"];switch(o.element){case"marker":
i.x=o.cx,i.y=o.cy,i.w=i.h=1;break;case"circle":i.x=o.cx-o.cr,i.y=o.cy-o.cr,i.w=i.h=2*o.cr;
break;case"spider_circle":i.x=o.cx,i.y=o.cy,i.w=i.h=1;break;case"spider_plot":return;
case"column":c=["above-centered","below-centered"];case"bar":i=e.clone(o.shape.getShape()),
i.w=i.width,i.h=i.height;break;case"candlestick":i.x=o.x,i.y=o.y,i.w=o.width,i.h=o.height;
break;default:this.angles||("number"==typeof o.run.data[0]?this.angles=h.map(h.scanl(o.run.data,"+",0),"* 2 * Math.PI / this",h.foldl(o.run.data,"+",0)):this.angles=h.map(h.scanl(o.run.data,"a + b.y",0),"* 2 * Math.PI / this",h.foldl(o.run.data,"a + b.y",0)));
var d=r._degToRad(o.plot.opt.startAngle),l=(this.angles[o.index]+this.angles[o.index+1])/2+d;
i.x=o.cx+o.cr*Math.cos(l),i.y=o.cy+o.cr*Math.sin(l),i.w=i.h=1,d&&(0>l||l>2*Math.PI)&&(l=Math.abs(2*Math.PI-Math.abs(l))),
u>l||(p+u>l?c=["below-centered","above-centered"]:l<Math.PI+u?c=["before-centered","after-centered"]:l<2*Math.PI-u&&(c=["above-centered","below-centered"]));
}s("dojo-bidi")&&this._recheckPosition(o,i,c);var x=this.chart.getCoords();i.x+=x.x,
i.y+=x.y,i.x=Math.round(i.x),i.y=Math.round(i.y),i.w=Math.ceil(i.w),i.h=Math.ceil(i.h),
this.aroundRect=i;var b=this.text(o,this.plot);b&&t.show(this._format(b),this.aroundRect,c),
this.mouseOver||(this._handle=n.connect(a.doc,"onclick",this,"onClick"))}},onClick:function(){
this.process({type:"onmouseout"})},_recheckPosition:function(t,e,o){},_format:function(t){
return t}});return s("dojo-bidi")?o("dojox.charting.action2d.Tooltip",[x,d]):x});