define(["dojo/_base/declare","./Columns","./common"],function(e,t,s){return e("dojox.charting.plot2d.ClusteredColumns",t,{
getBarProperties:function(){var e=s.calculateBarSize(this._hScaler.bounds.scale,this.opt,this.series.length);
return{gap:e.gap,width:e.size,thickness:e.size}}})});