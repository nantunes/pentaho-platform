define(["dojo/_base/connect","dojo/_base/declare","./Base","dojo/fx/easing","dojox/lang/functional"],function(n,t,o,i,e){
var s=400,c=i.backOut;return t("dojox.charting.action2d.PlotAction",o,{overOutEvents:{
onmouseover:1,onmouseout:1},constructor:function(n,t,o){this.anim={},o||(o={}),this.duration=o.duration?o.duration:s,
this.easing=o.easing?o.easing:c},connect:function(){this.handle=this.chart.connectToPlot(this.plot.name,this,"process");
},disconnect:function(){this.handle&&(n.disconnect(this.handle),this.handle=null);
},reset:function(){},destroy:function(){this.inherited(arguments),e.forIn(this.anim,function(n){
e.forIn(n,function(n){n.action.stop(!0)})}),this.anim={}}})});