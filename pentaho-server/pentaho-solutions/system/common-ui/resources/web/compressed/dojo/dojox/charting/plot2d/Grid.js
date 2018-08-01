define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/sniff","./CartesianBase","./common","dojox/lang/utils","dojox/gfx/fx"],function(t,e,i,r,o,n,s,a){
var h=function(t,e){return t.value-e.value};return e("dojox.charting.plot2d.Grid",o,{
defaultParams:{hMajorLines:!0,hMinorLines:!1,vMajorLines:!0,vMinorLines:!1,hStripes:!1,
vStripes:!1,animate:null,enableCache:!1,renderOnAxis:!0},optionalParams:{majorHLine:{},
minorHLine:{},majorVLine:{},minorVLine:{},hFill:{},vFill:{},hAlternateFill:{},vAlternateFill:{}
},constructor:function(e,i){this.opt=t.clone(this.defaultParams),s.updateWithObject(this.opt,i),
s.updateWithPattern(this.opt,i,this.optionalParams),this.animate=this.opt.animate,
this.opt.enableCache&&(this._lineFreePool=[],this._lineUsePool=[],this._rectFreePool=[],
this._rectUsePool=[])},addSeries:function(t){return this},getSeriesStats:function(){
return t.delegate(n.defaultStats)},cleanGroup:function(){this.inherited(arguments),
this.opt.enableCache&&(this._lineFreePool=this._lineFreePool.concat(this._lineUsePool),
this._lineUsePool=[],this._rectFreePool=this._rectFreePool.concat(this._rectUsePool),
this._rectUsePool=[])},createLine:function(t,e){var i;return this.opt.enableCache&&this._lineFreePool.length>0?(i=this._lineFreePool.pop(),
i.setShape(e),t.add(i)):i=t.createLine(e),this.opt.enableCache&&this._lineUsePool.push(i),
i},createRect:function(t,e){var i;return this.opt.enableCache&&this._rectFreePool.length>0?(i=this._rectFreePool.pop(),
i.setShape(e),t.add(i)):i=t.createRect(e),this.opt.enableCache&&this._rectUsePool.push(i),
i},render:function(t,e){if(this.zoom)return this.performZoom(t,e);if(this.dirty=this.isDirty(),
!this.dirty)return this;this.cleanGroup();var i,o,n=this.getGroup(),s=this.chart.theme;
if(r("ios")&&r("ios")<6||r("android")||r("safari")&&!r("ios")){var a=Math.max(0,t.width-e.l-e.r),h=Math.max(0,t.height-e.t-e.b);
n.createRect({x:e.l,y:e.t,width:a,height:h})}if(this._vAxis){o=this._vAxis.getTicks();
var l=this._vAxis.getScaler();if(null!=o&&null!=l){var d=l.scaler.getTransformerFromModel(l);
this.opt.hStripes&&this._renderHRect(o,s.grid,t,e,l,d),this.opt.hMinorLines&&(i=this.opt.minorHLine||s.grid&&s.grid.minorLine||s.axis.minorTick,
this._renderHLines(o.minor,i,t,e,l,d)),this.opt.hMajorLines&&(i=this.opt.majorHLine||s.grid&&s.grid.majorLine||s.axis.majorTick,
this._renderHLines(o.major,i,t,e,l,d))}}if(this._hAxis){o=this._hAxis.getTicks();var c=this._hAxis.getScaler();
if(null!=o&&null!=c){var u=c.scaler.getTransformerFromModel(c);this.opt.vStripes&&this._renderVRect(o,s.grid,t,e,c,u),
o&&this.opt.vMinorLines&&(i=this.opt.minorVLine||s.grid&&s.grid.minorLine||s.axis.minorTick,
this._renderVLines(o.minor,i,t,e,c,u)),o&&this.opt.vMajorLines&&(i=this.opt.majorVLine||s.grid&&s.grid.majorLine||s.axis.majorTick,
this._renderVLines(o.major,i,t,e,c,u))}}return this.dirty=!1,this},_renderHLines:function(t,e,r,o,n,s){
var a=this.getGroup();i.forEach(t,function(t){if(this.opt.renderOnAxis||t.value!=(this._vAxis.opt.leftBottom?n.bounds.from:n.bounds.to)){
var i=r.height-o.b-s(t.value),h=this.createLine(a,{x1:o.l,y1:i,x2:r.width-o.r,y2:i
}).setStroke(e);this.animate&&this._animateGrid(h,"h",o.l,o.r+o.l-r.width)}},this);
},_renderVLines:function(t,e,r,o,n,s){var a=this.getGroup();i.forEach(t,function(t){
if(this.opt.renderOnAxis||t.value!=(this._hAxis.opt.leftBottom?n.bounds.from:n.bounds.to)){
var i=o.l+s(t.value),h=this.createLine(a,{x1:i,y1:o.t,x2:i,y2:r.height-o.b}).setStroke(e);
this.animate&&this._animateGrid(h,"v",r.height-o.b,r.height-o.b-o.t)}},this)},_renderHRect:function(t,e,i,r,o,n){
var s,a,l,d,c,u=t.major.concat(t.minor);u.sort(h),u[0].value>o.bounds.from&&u.splice(0,0,{
value:o.bounds.from}),u[u.length-1].value<o.bounds.to&&u.push({value:o.bounds.to});
for(var m=this.getGroup(),p=0;p<u.length-1;p++)a=u[p],l=i.height-r.b-n(a.value),d=i.height-r.b-n(u[p+1].value),
s=p%2==0?this.opt.hAlternateFill||e&&e.alternateFill:this.opt.hFill||e&&e.fill,s&&(c=this.createRect(m,{
x:r.l,y:l,width:i.width-r.r,height:l-d}).setFill(s),this.animate&&this._animateGrid(c,"h",r.l,r.r+r.l-i.width));
},_renderVRect:function(t,e,i,r,o,n){var s,a,l,d,c,u=t.major.concat(t.minor);u.sort(h),
u[0].value>o.bounds.from&&u.splice(0,0,{value:o.bounds.from}),u[u.length-1].value<o.bounds.to&&u.push({
value:o.bounds.to});for(var m=this.getGroup(),p=0;p<u.length-1;p++)a=u[p],l=r.l+n(a.value),
d=r.l+n(u[p+1].value),s=p%2==0?this.opt.vAlternateFill||e&&e.alternateFill:this.opt.vFill||e&&e.fill,
s&&(c=this.createRect(m,{x:l,y:r.t,width:d-l,height:i.width-r.r}).setFill(s),this.animate&&this._animateGrid(c,"v",i.height-r.b,i.height-r.b-r.t));
},_animateGrid:function(e,i,r,o){var n="h"==i?[r,0]:[0,r],s="h"==i?[1/o,1]:[1,1/o];
a.animateTransform(t.delegate({shape:e,duration:1200,transform:[{name:"translate",
start:n,end:[0,0]},{name:"scale",start:s,end:[1,1]},{name:"original"}]},this.animate)).play();
}})});