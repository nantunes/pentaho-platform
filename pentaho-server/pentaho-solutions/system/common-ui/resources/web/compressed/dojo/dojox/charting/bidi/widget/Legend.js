define(["dojo/_base/declare","dojo/dom","dijit/registry","dojo/_base/connect","dojo/_base/array","dojo/query"],function(t,r,e,i,s,n){
function o(t){return/^(ltr|rtl|auto)$/.test(t)?t:null}return t(null,{postMixInProperties:function(){
if(this.chart)this.textDir=this.chart.textDir,i.connect(this.chart,"setTextDir",this,"_setTextDirAttr");else{
if(!this.chartRef)return;var t=e.byId(this.chartRef);if(!t){var s=r.byId(this.chartRef);
if(!s)return;t=e.byNode(s)}this.textDir=t.chart.textDir,i.connect(t.chart,"setTextDir",this,"_setTextDirAttr");
}},_setTextDirAttr:function(t){if(null!=o(t)&&this.textDir!=t){this._set("textDir",t);
var r=n(".dojoxLegendText",this._tr);s.forEach(r,function(t){t.dir=this.getTextDir(t.innerHTML,t.dir);
},this)}}})});