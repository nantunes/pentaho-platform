define(["dojo/_base/declare","./Columns","./commonStacked"],function(e,t,n){return e("dojox.charting.plot2d.StackedColumns",t,{
getSeriesStats:function(){var e=n.collectStats(this.series);return e.hmin-=.5,e.hmax+=.5,
e},getValue:function(e,t,s,r){var a,i;return r?(a=t,i=n.getIndexValue(this.series,s,a)):(a=e.x-1,
i=n.getValue(this.series,s,e.x),i=[i[0]?i[0].y:null,i[1]?i[1]:null]),{x:a,y:i[0],
py:i[1]}}})});