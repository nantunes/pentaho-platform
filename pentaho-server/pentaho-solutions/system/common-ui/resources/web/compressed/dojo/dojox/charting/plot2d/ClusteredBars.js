define(["dojo/_base/declare","./Bars","./common"],function(e,t,r){return e("dojox.charting.plot2d.ClusteredBars",t,{
getBarProperties:function(){var e=r.calculateBarSize(this._vScaler.bounds.scale,this.opt,this.series.length);
return{gap:e.gap,height:e.size,thickness:e.size}}})});