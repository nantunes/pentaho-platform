define(["dojo/_base/declare","./Default","./commonStacked"],function(t,e,a){return t("dojox.charting.plot2d.Stacked",e,{
getSeriesStats:function(){var t=a.collectStats(this.series);return t},buildSegments:function(t,e){
for(var n=this.series[t],l=e?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,s=e?Math.min(n.data.length-1,Math.ceil(this._hScaler.bounds.to)):n.data.length-1,r=null,i=[],o=l;s>=o;o++){
var u=e?a.getIndexValue(this.series,t,o):a.getValue(this.series,t,n.data[o]?n.data[o].x:null);
null==u[0]||!e&&null==u[0].y?(!this.opt.interpolate||e)&&(r=null):(r||(r=[],i.push({
index:o,rseg:r})),r.push(u[0]))}return i}})});