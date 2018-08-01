define(["dojo/_base/declare"],function(e){return e(null,{_getDelta:function(e){var t=this.inherited(arguments);
return t*(this.chart.isRightToLeft()?-1:1)}})});