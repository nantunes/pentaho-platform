define(["dojo/_base/lang","dojo/_base/declare","dojo/Evented"],function(t,n,o){return n("dojox.charting.action2d.Base",o,{
constructor:function(n,o){this.chart=n,this.plot=o?t.isString(o)?this.chart.getPlot(o):o:this.chart.getPlot("default");
},connect:function(){},disconnect:function(){},destroy:function(){this.disconnect();
}})});