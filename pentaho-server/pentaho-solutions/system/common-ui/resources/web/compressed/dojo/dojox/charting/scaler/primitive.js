define(["dojo/_base/lang"],function(r){var n=r.getObject("dojox.charting.scaler.primitive",!0);
return r.mixin(n,{buildScaler:function(r,o,e,t){return r==o&&(r-=.5,o+=.5),{bounds:{
lower:r,upper:o,from:r,to:o,scale:e/(o-r),span:e},scaler:n}},buildTicks:function(r,n){
return{major:[],minor:[],micro:[]}},getTransformerFromModel:function(r){var n=r.bounds.from,o=r.bounds.scale;
return function(r){return(r-n)*o}},getTransformerFromPlot:function(r){var n=r.bounds.from,o=r.bounds.scale;
return function(r){return r/o+n}}})});