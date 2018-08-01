define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/dom-attr","dojo/_base/declare","dojo/query","dijit/_WidgetBase","../Chart","dojo/has","dojo/has!dojo-bidi?../bidi/widget/Chart","dojox/lang/utils","dojox/lang/functional","dojox/lang/functional/lambda"],function(kernel,lang,arr,domAttr,declare,query,_WidgetBase,ChartBase,has,BidiChart,du,df,dfl){
var collectParams,collectAxisParams,collectPlotParams,collectActionParams,collectDataParams,notNull=function(t){
return t},dc=lang.getObject("dojox.charting");collectParams=function(node,type,kw){
var dp=eval("("+type+".prototype.defaultParams)"),x,attr;for(x in dp)x in kw||(attr=node.getAttribute(x),
kw[x]=du.coerceType(dp[x],null==attr||"undefined"==typeof attr?dp[x]:attr));var op=eval("("+type+".prototype.optionalParams)");
for(x in op)x in kw||(attr=node.getAttribute(x),null!=attr&&(kw[x]=du.coerceType(op[x],attr)));
},collectAxisParams=function(node){var name=node.getAttribute("name"),type=node.getAttribute("type");
if(!name)return null;var o={name:name,kwArgs:{}},kw=o.kwArgs;if(type){dc.axis2d[type]&&(type=kernel._scopeName+"x.charting.axis2d."+type);
var axis=eval("("+type+")");axis&&(kw.type=axis)}else type=kernel._scopeName+"x.charting.axis2d.Default";
return collectParams(node,type,kw),(kw.font||kw.fontColor)&&(kw.tick||(kw.tick={}),
kw.font&&(kw.tick.font=kw.font),kw.fontColor&&(kw.tick.fontColor=kw.fontColor)),o;
},collectPlotParams=function(node){var name=node.getAttribute("name"),type=node.getAttribute("type");
if(!name)return null;var o={name:name,kwArgs:{}},kw=o.kwArgs;if(type){dc.plot2d&&dc.plot2d[type]&&(type=kernel._scopeName+"x.charting.plot2d."+type);
var plot=eval("("+type+")");plot&&(kw.type=plot)}else type=kernel._scopeName+"x.charting.plot2d.Default";
collectParams(node,type,kw);var dp=eval("("+type+".prototype.baseParams)"),x,attr;
for(x in dp)x in kw||(attr=node.getAttribute(x),kw[x]=du.coerceType(dp[x],null==attr||"undefined"==typeof attr?dp[x]:attr));
return o},collectActionParams=function(node){var plot=node.getAttribute("plot"),type=node.getAttribute("type");
plot||(plot="default");var o={plot:plot,kwArgs:{}},kw=o.kwArgs;if(!type)return null;
dc.action2d[type]&&(type=kernel._scopeName+"x.charting.action2d."+type);var action=eval("("+type+")");
return action?(o.action=action,collectParams(node,type,kw),o):null},collectDataParams=function(node){
var ga=lang.partial(domAttr.get,node),name=ga("name");if(!name)return null;var o={
name:name,kwArgs:{}},kw=o.kwArgs,t;return t=ga("plot"),null!=t&&(kw.plot=t),t=ga("marker"),
null!=t&&(kw.marker=t),t=ga("stroke"),null!=t&&(kw.stroke=eval("("+t+")")),t=ga("outline"),
null!=t&&(kw.outline=eval("("+t+")")),t=ga("shadow"),null!=t&&(kw.shadow=eval("("+t+")")),
t=ga("fill"),null!=t&&(kw.fill=eval("("+t+")")),t=ga("font"),null!=t&&(kw.font=t),
t=ga("fontColor"),null!=t&&(kw.fontColor=eval("("+t+")")),t=ga("legend"),null!=t&&(kw.legend=t),
t=ga("data"),null!=t?(o.type="data",o.data=t?arr.map(String(t).split(","),Number):[],
o):(t=ga("array"),null!=t?(o.type="data",o.data=eval("("+t+")"),o):(t=ga("store"),
null!=t?(o.type="store",o.data=eval("("+t+")"),t=ga("field"),o.field=null!=t?t:"value",
t=ga("query"),t&&(kw.query=t),t=ga("queryOptions"),t&&(kw.queryOptions=eval("("+t+")")),
t=ga("start"),t&&(kw.start=Number(t)),t=ga("count"),t&&(kw.count=Number(t)),t=ga("sort"),
t&&(kw.sort=eval("("+t+")")),t=ga("valueFn"),t&&(kw.valueFn=dfl.lambda(t)),o):null));
};var Chart=declare(has("dojo-bidi")?"dojox.charting.widget.NonBidiChart":"dojox.charting.widget.Chart",_WidgetBase,{
theme:null,margins:null,stroke:void 0,fill:void 0,buildRendering:function(){this.inherited(arguments);
var t=this.domNode,e=query("> .axis",t).map(collectAxisParams).filter(notNull),a=query("> .plot",t).map(collectPlotParams).filter(notNull),r=query("> .action",t).map(collectActionParams).filter(notNull),o=query("> .series",t).map(collectDataParams).filter(notNull);
t.innerHTML="";var n=this.chart=new ChartBase(t,{margins:this.margins,stroke:this.stroke,
fill:this.fill,textDir:this.textDir});this.theme&&n.setTheme(this.theme),e.forEach(function(t){
n.addAxis(t.name,t.kwArgs)}),a.forEach(function(t){n.addPlot(t.name,t.kwArgs)}),this.actions=r.map(function(t){
return new t.action(n,t.plot,t.kwArgs)});var l=df.foldl(o,function(t,e){if("data"==e.type)n.addSeries(e.name,e.data,e.kwArgs),
t=!0;else{n.addSeries(e.name,[0],e.kwArgs);var a={};du.updateWithPattern(a,e.kwArgs,{
query:"",queryOptions:null,start:0,count:1},!0),e.kwArgs.sort&&(a.sort=lang.clone(e.kwArgs.sort)),
lang.mixin(a,{onComplete:function(t){var a;if("valueFn"in e.kwArgs){var r=e.kwArgs.valueFn;
a=arr.map(t,function(t){return r(e.data.getValue(t,e.field,0))})}else a=arr.map(t,function(t){
return e.data.getValue(t,e.field,0)});n.addSeries(e.name,a,e.kwArgs).render()}}),
e.data.fetch(a)}return t},!1);l&&n.render()},destroy:function(){this.chart.destroy(),
this.inherited(arguments)},resize:function(t){this.chart.resize.apply(this.chart,arguments);
}});return has("dojo-bidi")?declare("dojox.charting.widget.Chart",[Chart,BidiChart]):Chart;
});