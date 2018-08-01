define(["dojo/_base/declare","dijit/_WidgetBase","dojox/gfx","dojo/_base/array","dojo/has","dojo/has!dojo-bidi?../bidi/widget/Legend","dojox/lang/functional","dojo/dom","dojo/dom-construct","dojo/dom-class","dijit/registry"],function(e,t,i,a,r,d,o,h,s,n,c){
var l=e(r("dojo-bidi")?"dojox.charting.widget.NonBidiLegend":"dojox.charting.widget.Legend",t,{
chartRef:"",horizontal:!0,swatchSize:18,legendBody:null,postCreate:function(){!this.chart&&this.chartRef&&(this.chart=c.byId(this.chartRef)||c.byNode(h.byId(this.chartRef)),
this.chart||console.log("Could not find chart instance with id: "+this.chartRef)),
this.chart=this.chart.chart||this.chart,this.refresh()},buildRendering:function(){
this.domNode=s.create("table",{role:"group","aria-label":"chart legend","class":"dojoxLegendNode"
}),this.legendBody=s.create("tbody",null,this.domNode),this.inherited(arguments)},
destroy:function(){this._surfaces&&a.forEach(this._surfaces,function(e){e.destroy();
}),this.inherited(arguments)},refresh:function(){for(this._surfaces&&a.forEach(this._surfaces,function(e){
e.destroy()}),this._surfaces=[];this.legendBody.lastChild;)s.destroy(this.legendBody.lastChild);
this.horizontal&&(n.add(this.domNode,"dojoxLegendHorizontal"),this._tr=s.create("tr",null,this.legendBody),
this._inrow=0);var e=this.series||this.chart.series;if(0!=e.length)if("dojox.charting.plot2d.Pie"==e[0].chart.stack[0].declaredClass){
var t=e[0].chart.stack[0];if("number"==typeof t.run.data[0]){var i=o.map(t.run.data,"Math.max(x, 0)"),r=o.map(i,"/this",o.foldl(i,"+",0));
a.forEach(r,function(e,i){this._addLabel(t.dyn[i],t._getLabel(100*e)+"%")},this)}else a.forEach(t.run.data,function(e,i){
this._addLabel(t.dyn[i],e.legend||e.text||e.y)},this)}else a.forEach(e,function(e){
this._addLabel(e.dyn,e.legend||e.name)},this)},_addLabel:function(e,t){var i=s.create("td"),a=s.create("div",null,i),d=s.create("label",null,i),o=s.create("div",{
style:{width:this.swatchSize+"px",height:this.swatchSize+"px","float":"left"}},a);
if(n.add(a,"dojoxLegendIcon dijitInline"),n.add(d,"dojoxLegendText"),this._tr)this._tr.appendChild(i),
++this._inrow===this.horizontal&&(this._tr=s.create("tr",null,this.legendBody),this._inrow=0);else{
var h=s.create("tr",null,this.legendBody);h.appendChild(i)}this._makeIcon(o,e),d.innerHTML=String(t),
r("dojo-bidi")&&(d.dir=this.getTextDir(t,d.dir))},_makeIcon:function(e,t){var a={
h:this.swatchSize,w:this.swatchSize},r=i.createSurface(e,a.w,a.h);if(this._surfaces.push(r),
t.fill)r.createRect({x:2,y:2,width:a.w-4,height:a.h-4}).setFill(t.fill).setStroke(t.stroke);else if(t.stroke||t.marker){
var d={x1:0,y1:a.h/2,x2:a.w,y2:a.h/2};if(t.stroke&&r.createLine(d).setStroke(t.stroke),
t.marker){var o={x:a.w/2,y:a.h/2};r.createPath({path:"M"+o.x+" "+o.y+" "+t.marker
}).setFill(t.markerFill).setStroke(t.markerStroke)}}else r.createRect({x:2,y:2,width:a.w-4,
height:a.h-4}).setStroke("black"),r.createLine({x1:2,y1:2,x2:a.w-2,y2:a.h-2}).setStroke("black"),
r.createLine({x1:2,y1:a.h-2,x2:a.w-2,y2:2}).setStroke("black")}});return r("dojo-bidi")?e("dojox.charting.widget.Legend",[l,d]):l;
});