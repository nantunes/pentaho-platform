define(["require","pentaho/module/instancesOf!pentaho/visual/color/Palette","amd!../../lib/underscore","../../lib/jquery","pentaho/shim/es6-promise"],function(e,a,t,r,n){
function i(e,a){var r=s.exec(e);if(!r)return null;var n=r[1];if(t.contains(d,n))return null;
switch(n){case"MetricDot":n="Bubble";break;case"MetricLine":n="Scatter";break;case"NormalizedBar":
n="BarNormalized";break;case"Dot":case"StackedDot":n="PointAbstract";break;case"StackedLine":
n="Line";break;case"StackedArea":n="AreaStacked"}if(null!=a&&!t.contains(f,n)){a.valuesNormalized&&!t.contains(k,n)&&(n+="Normalized"),
a.stacked&&!t.contains(m,n)&&(n+="Stacked");var i=(a.orientation||"").toLowerCase();
"horizontal"!==i||t.contains(v,n)||(n+="Horizontal")}return"pentaho/ccc/visual/"+n;
}function o(a){return new n(function(t,n){e([a],function(e){var a=r.extend({},e.type.extensionEffective);
t(a)},n)})}function c(a){var t;return t=null==a?u:e(a),t.colors.toArray().map(function(e){
return e.value})}function l(){var e=a.filter(function(e){return"nominal"===e.level;
});return e.length>0?e[0]:null}var u=l();a=null;var s=/^(.*)Chart$/,d=["Bullet"],f=["Waterfall","Treemap","Boxplot","HeatGrid","Line","Scatter","Pie","PointAbstract","Sunburst"],k=["BarNormalized","Area","AreaStacked"],m=["BarNormalized","AreaStacked"],v=["Area","AreaStacked"];
return{getMatchingVizViewId:i,getExtensionsPromise:o,getColors:c}});