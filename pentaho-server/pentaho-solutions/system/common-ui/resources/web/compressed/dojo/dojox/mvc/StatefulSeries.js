define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojox/mvc/at"],function(t,e,i,n){
return e("dojox.mvc.StatefulSeries",null,{constructor:function(e){function r(){o.series&&(o.series.chart.updateSeries(o.series.name,o),
o.series.chart.delayedRender())}var o=this;this._handles=[],this.data=t.map(e,function(t,e){
if("dojox.mvc.at"==(t||{}).atsignature){var a=t.target,s=t.targetProp;if(i.isString(a))throw new Error("Literal-based dojox/mvc/at is not supported in dojox/mvc/StatefulSeries.");
if(!t.bindDirection||t.bindDirection&n.from||console.warn("Data binding bindDirection option is ignored in dojox/mvc/StatefulSeries."),
s&&i.isFunction(a.set)&&i.isFunction(a.watch)){var c=t.converter,d=(c||{}).format&&i.hitch({
target:a,source:this},c.format);this._handles.push(a.watch(s,function(t,i,n){o.data[e]=d?d(n):n,
r()}))}return s?i.isFunction(a.get)?a.get(s):a[s]:a}return t},this),r()},destroy:function(){
for(var t=null;t=this._handles.pop();)t.unwatch()},setSeriesObject:function(t){this.series=t;
}})});