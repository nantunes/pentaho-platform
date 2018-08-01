define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","../plot2d/Indicator","dojo/has","../plot2d/common","../axis2d/common","dojox/gfx"],function(t,i,e,r,o){
var s=function(t,i,e){var r,o=t?{x:i[0],y:e[0][0]}:{x:e[0][0],y:i[0]};return i.length>1&&(r=t?{
x:i[1],y:e[1][0]}:{x:e[1][0],y:i[1]}),[o,r]},a=e("dojox.charting.action2d._IndicatorElement",r,{
constructor:function(t,i){i||(i={}),this.inter=i.inter},_updateVisibility:function(t,i,e){
var r="x"==e?this._hAxis:this._vAxis,o=r.getWindowScale();this.chart.setAxisWindow(r.name,o,r.getWindowOffset()+(t[e]-i[e])/o),
this._noDirty=!0,this.chart.render(),this._noDirty=!1,this._initTrack()},_trackMove:function(){
this._updateIndicator(this.pageCoord),this._tracker=setTimeout(t.hitch(this,this._trackMove),100);
},_initTrack:function(){this._tracker||(this._tracker=setTimeout(t.hitch(this,this._trackMove),500));
},stopTrack:function(){this._tracker&&(clearTimeout(this._tracker),this._tracker=null);
},render:function(){if(this.isDirty()){var i=this.inter,e=i.plot,r=i.opt.vertical;
this.opt.offset=i.opt.offset||(r?{x:0,y:5}:{x:5,y:0}),i.opt.labelFunc&&(this.opt.labelFunc=function(t,e,o,a,n){
var h=s(r,e,o);return i.opt.labelFunc(h[0],h[1],a,n)}),i.opt.fillFunc&&(this.opt.fillFunc=function(t,e,o){
var a=s(r,e,o);return i.opt.fillFunc(a[0],a[1])}),this.opt=t.delegate(i.opt,this.opt),
this.pageCoord?(this.opt.values=[],this.opt.labels=this.secondCoord?"trend":"markers"):(this.opt.values=null,
this.inter.onChange({})),this.hAxis=e.hAxis,this.vAxis=e.vAxis,this.inherited(arguments);
}},_updateIndicator:function(){var t=this._updateCoordinates(this.pageCoord,this.secondCoord);
if(!(t.length>1))return void this.inter.onChange({});var e=this.opt.vertical;this._data=[],
this.opt.values=[],i.forEach(t,function(t){t&&(this.opt.values.push(e?t.x:t.y),this._data.push([e?t.y:t.x]));
},this),this.inherited(arguments)},_renderText:function(t,i,e,r,o,a,n,h){this.inter.opt.labels&&this.inherited(arguments);
var c=s(this.opt.vertical,n,h);this.inter.onChange({start:c[0],end:c[1],label:i});
},_updateCoordinates:function(t,i){o("dojo-bidi")&&this._checkXCoords(t,i);var e=this.inter,r=e.plot,s=e.opt.vertical,a=this.chart.getAxis(r.hAxis),n=this.chart.getAxis(r.vAxis),h=a.name,c=n.name,u=a.getScaler().bounds,l=n.getScaler().bounds,d=s?"x":"y",f=s?h:c,p=s?u:l;
if(i){var v;s?t.x>i.x&&(v=i,i=t,t=v):t.y>i.y&&(v=i,i=t,t=v)}var x,_=r.toData(t);i&&(x=r.toData(i));
var m={};m[h]=u.from,m[c]=l.from;var y=r.toPage(m);m[h]=u.to,m[c]=l.to;var g=r.toPage(m);
if(_[f]<p.from){if(!x&&e.opt.autoScroll&&!e.opt.mouseOver)return this._updateVisibility(t,y,d),
[];if(e.opt.mouseOver)return[];t[d]=y[d],_=r.toData(t)}else if(_[f]>p.to){if(!x&&e.opt.autoScroll&&!e.opt.mouseOver)return this._updateVisibility(t,g,d),
[];if(e.opt.mouseOver)return[];t[d]=g[d],_=r.toData(t)}var b,k=this._snapData(_,d,s);
return null==k.y?[]:(i&&(x[f]<p.from?(i[d]=y[d],x=r.toData(i)):x[f]>p.to&&(i[d]=g[d],
x=r.toData(i)),b=this._snapData(x,d,s),null==b.y&&(b=null)),[k,b])},_snapData:function(t,i,e){
var r,o,s=this.chart.getSeries(this.inter.opt.series).data,a=s.length;for(r=0;a>r;++r)if(o=s[r],
null==o);else if("number"==typeof o){if(r+1>t[i])break}else if(o[i]>t[i])break;var n,h,c,u;
if("number"==typeof o?(n=r+1,h=o,r>0&&(c=r,u=s[r-1])):(n=o.x,h=o.y,r>0&&(c=s[r-1].x,
u=s[r-1].y)),r>0){var l=e?(n+c)/2:(h+u)/2;t[i]<=l&&(n=c,h=u)}return{x:n,y:h}},cleanGroup:function(t){
return this.inherited(arguments),this.group.moveToFront(),this},isDirty:function(){
return!this._noDirty&&(this.dirty||this.inter.plot.isDirty())}});return o("dojo-bidi")&&a.extend({
_checkXCoords:function(t,i){this.chart.isRightToLeft()&&(t&&(t.x=this.chart.dim.width+(this.chart.offsets.l-this.chart.offsets.r)-t.x),
i&&(i.x=this.chart.dim.width+(this.chart.offsets.l-this.chart.offsets.r)-i.x))}}),
a});