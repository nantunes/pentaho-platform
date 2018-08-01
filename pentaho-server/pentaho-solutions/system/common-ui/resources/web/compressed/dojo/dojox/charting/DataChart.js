define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/html","dojo/_base/connect","dojo/_base/array","./Chart2D","./themes/PlotKit/blue","dojo/dom"],function(t,e,s,i,h,r,a,n,o){
t.experimental("dojox.charting.DataChart");var l={vertical:!0,min:0,max:10,majorTickStep:5,
minorTickStep:1,natural:!1,stroke:"black",majorTick:{stroke:"black",length:8},minorTick:{
stroke:"gray",length:2},majorLabels:!0},c={natural:!0,majorLabels:!0,includeZero:!1,
majorTickStep:1,majorTick:{stroke:"black",length:8},fixUpper:"major",stroke:"black",
htmlLabels:!0,from:1},u={markers:!0,tension:2,gap:2};return s("dojox.charting.DataChart",a,{
scroll:!0,comparative:!1,query:"*",queryOptions:"",fieldName:"value",chartTheme:n,
displayRange:0,stretchToFit:!0,minWidth:200,minHeight:100,showing:!0,label:"name",
constructor:function(t,s){this.domNode=o.byId(t),e.mixin(this,s),this.xaxis=e.mixin(e.mixin({},c),s.xaxis),
"seriesLabels"==this.xaxis.labelFunc&&(this.xaxis.labelFunc=e.hitch(this,"seriesLabels")),
this.yaxis=e.mixin(e.mixin({},l),s.yaxis),"seriesLabels"==this.yaxis.labelFunc&&(this.yaxis.labelFunc=e.hitch(this,"seriesLabels")),
this._events=[],this.convertLabels(this.yaxis),this.convertLabels(this.xaxis),this.onSetItems={},
this.onSetInterval=0,this.dataLength=0,this.seriesData={},this.seriesDataBk={},this.firstRun=!0,
this.dataOffset=0,this.chartTheme.plotarea.stroke={color:"gray",width:3},this.setTheme(this.chartTheme),
this.displayRange&&(this.stretchToFit=!1),this.stretchToFit||(this.xaxis.to=this.displayRange);
var i=s.type&&"Pie"!=s.type&&"dojox.charting.plot2d.Pie"!=s.type.prototype.declaredClass;
i&&(this.addAxis("x",this.xaxis),this.addAxis("y",this.yaxis)),u.type=s.type||"Markers",
this.addPlot("default",e.mixin(u,s.chartPlot)),i&&this.addPlot("grid",e.mixin(s.grid||{},{
type:"Grid",hMinorLines:!0})),this.showing&&this.render(),s.store&&this.setStore(s.store,s.query,s.fieldName,s.queryOptions);
},destroy:function(){r.forEach(this._events,h.disconnect),this.inherited(arguments);
},setStore:function(t,e,s,i){this.firstRun=!0,this.store=t||this.store,this.query=e||this.query,
this.fieldName=s||this.fieldName,this.label=this.store.getLabelAttributes(),this.queryOptions=i||i,
r.forEach(this._events,h.disconnect),this._events=[h.connect(this.store,"onSet",this,"onSet"),h.connect(this.store,"onError",this,"onError")],
this.fetch()},show:function(){this.showing||(i.style(this.domNode,"display",""),this.showing=!0,
this.render())},hide:function(){this.showing&&(i.style(this.domNode,"display","none"),
this.showing=!1)},onSet:function(t){var s=this.getProperty(t,this.label);(s in this.runs||this.comparative)&&(clearTimeout(this.onSetInterval),
this.onSetItems[s]||(this.onSetItems[s]=t),this.onSetInterval=setTimeout(e.hitch(this,function(){
clearTimeout(this.onSetInterval);var t=[];for(var e in this.onSetItems)t.push(this.onSetItems[e]);
this.onData(t),this.onSetItems={}}),200))},onError:function(t){console.error("DataChart Error:",t);
},onDataReceived:function(t){},getProperty:function(t,e){if(e==this.label)return this.store.getLabel(t);
if("id"==e)return this.store.getIdentity(t);var s=this.store.getValues(t,e);return s.length<2&&(s=this.store.getValue(t,e)),
s},onData:function(t){if(t&&t.length){if(this.items&&this.items.length!=t.length&&(r.forEach(t,function(t){
var e=this.getProperty(t,"id");r.forEach(this.items,function(t,s){this.getProperty(t,"id")==e&&(this.items[s]=t);
},this)},this),t=this.items),this.stretchToFit&&(this.displayRange=t.length),this.onDataReceived(t),
this.items=t,this.comparative){var s="default";this.seriesData[s]=[],this.seriesDataBk[s]=[],
r.forEach(t,function(t){var e=this.getProperty(t,this.fieldName);this.seriesData[s].push(e);
},this)}else r.forEach(t,function(t,s){var i=this.store.getLabel(t);this.seriesData[i]||(this.seriesData[i]=[],
this.seriesDataBk[i]=[]);var h=this.getProperty(t,this.fieldName);if(e.isArray(h))this.seriesData[i]=h;else{
if(this.scroll)this.seriesDataBk[i].length>this.seriesData[i].length&&(this.seriesData[i]=this.seriesDataBk[i]),
this.seriesData[i].push(Number(h));else{var a=r.map(new Array(s+1),function(){return 0;
});a.push(Number(h)),this.seriesData[i]=a}this.seriesDataBk[i].push(Number(h))}},this);
var i;if(this.firstRun){this.firstRun=!1;for(s in this.seriesData)this.addSeries(s,this.seriesData[s]),
i=this.seriesData[s]}else for(s in this.seriesData)i=this.seriesData[s],this.scroll&&i.length>this.displayRange&&(this.dataOffset=i.length-this.displayRange-1,
i=i.slice(i.length-this.displayRange,i.length)),this.updateSeries(s,i);this.dataLength=i.length,
this.showing&&this.render()}},fetch:function(){this.store&&this.store.fetch({query:this.query,
queryOptions:this.queryOptions,start:this.start,count:this.count,sort:this.sort,onComplete:e.hitch(this,function(t){
setTimeout(e.hitch(this,function(){this.onData(t)}),0)}),onError:e.hitch(this,"onError")
})},convertLabels:function(t){return!t.labels||e.isObject(t.labels[0])?null:(t.labels=r.map(t.labels,function(t,e){
return{value:e,text:t}}),null)},seriesLabels:function(t){if(t--,this.series.length<1||!this.comparative&&t>this.series.length)return"-";
if(this.comparative)return this.store.getLabel(this.items[t]);for(var e=0;e<this.series.length;e++)if(this.series[e].data[t]>0)return this.series[e].name;
return"-"},resizeChart:function(t){var e=Math.max(t.w,this.minWidth),s=Math.max(t.h,this.minHeight);
this.resize(e,s)}})});