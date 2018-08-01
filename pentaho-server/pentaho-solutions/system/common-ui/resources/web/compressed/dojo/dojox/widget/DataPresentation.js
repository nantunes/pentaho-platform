dojo.provide("dojox.widget.DataPresentation"),dojo.experimental("dojox.widget.DataPresentation"),
dojo.require("dojox.grid.DataGrid"),dojo.require("dojox.charting.Chart2D"),dojo.require("dojox.charting.widget.Legend"),
dojo.require("dojox.charting.action2d.Tooltip"),dojo.require("dojox.charting.action2d.Highlight"),
dojo.require("dojo.colors"),dojo.require("dojo.data.ItemFileWriteStore"),function(){
var e=function(e,t,r,i){var s=[];s[0]={value:0,text:""};var a=e.length;if("ClusteredBars"!==r&&"StackedBars"!==r){
var n=i.offsetWidth,o=(""+e[0]).length*e.length*7;if(1==t)for(var d=1;500>d&&!(n>o/d);++d)++t;
}for(var h=0;a>h;h++)s.push({value:h+1,text:!t||h%t?"":e[h]});return s.push({value:a+1,
text:""}),s},t=function(e,t){var r={vertical:!1,labels:t,min:0,max:t.length-1,majorTickStep:1,
minorTickStep:1};return("ClusteredBars"===e||"StackedBars"===e)&&(r.vertical=!0),
("Lines"===e||"Areas"===e||"StackedAreas"===e)&&(r.min++,r.max--),r},r=function(e,t,r,i){
var s={vertical:!0,fixLower:"major",fixUpper:"major",natural:!0};return"secondary"===t&&(s.leftBottom=!1),
("ClusteredBars"===e||"StackedBars"===e)&&(s.vertical=!1),r==i&&(s.min=r-1,s.max=i+1),
s},i=function(e,t,r){var i={type:e,hAxis:"independent",vAxis:"dependent-"+t,gap:4,
lines:!1,areas:!1,markers:!1};return("ClusteredBars"===e||"StackedBars"===e)&&(i.hAxis=i.vAxis,
i.vAxis="independent"),("Lines"===e||"Hybrid-Lines"===e||"Areas"===e||"StackedAreas"===e)&&(i.lines=!0),
("Areas"===e||"StackedAreas"===e)&&(i.areas=!0),"Lines"===e&&(i.markers=!0),"Hybrid-Lines"===e&&(i.shadows={
dx:2,dy:2,dw:2},i.type="Lines"),"Hybrid-ClusteredColumns"===e&&(i.type="ClusteredColumns"),
r&&(i.animate=r),i},s=function(s,a,n,o,d,h,l,c,u,g,f){var p=a;p||(s.innerHTML="",
p=new dojox.charting.Chart2D(s)),l&&(l._clone=function(){var e=new dojox.charting.Theme({
chart:this.chart,plotarea:this.plotarea,axis:this.axis,series:this.series,marker:this.marker,
antiAlias:this.antiAlias,assignColors:this.assignColors,assignMarkers:this.assigneMarkers,
colors:dojo.delegate(this.colors)});return e.markers=this.markers,e._buildMarkerArray(),
e},p.setTheme(l));var v=u.series_data[0].slice(0);o&&v.reverse();var m=e(v,h,n,s),y={},x=null,j=null,N={};
for(var W in p.runs)N[W]=!0;for(var I=u.series_name.length,_=0;I>_;_++)if(u.series_chart[_]&&u.series_data[_].length>0){
var L=n,C=u.series_axis[_];if("Hybrid"==L&&(L="line"==u.series_charttype[_]?"Hybrid-Lines":"Hybrid-ClusteredColumns"),
y[C]||(y[C]={}),!y[C][L]){var S=C+"-"+L;p.addPlot(S,i(L,C,d));var k={};"string"==typeof c?k.text=function(e){
var t=[e.element,e.run.name,v[e.index],"ClusteredBars"===L||"StackedBars"===L?e.x:e.y];
return dojo.replace(c,t)}:"function"==typeof c&&(k.text=c),new dojox.charting.action2d.Tooltip(p,S,k),
"Lines"!==L&&"Hybrid-Lines"!==L&&new dojox.charting.action2d.Highlight(p,S),y[C][L]=!0;
}for(var H=[],b=u.series_data[_].length,A=0;b>A;A++){var w=u.series_data[_][A];H.push(w),
(null===x||w>x)&&(x=w),(null===j||j>w)&&(j=w)}o&&H.reverse();var T={plot:C+"-"+L};
u.series_linestyle[_]&&(T.stroke={style:u.series_linestyle[_]}),p.addSeries(u.series_name[_],H,T),
delete N[u.series_name[_]]}for(W in N)p.removeSeries(W);return p.addAxis("independent",t(n,m)),
p.addAxis("dependent-primary",r(n,"primary",j,x)),p.addAxis("dependent-secondary",r(n,"secondary",j,x)),
p},a=function(e,t,r,i){var s=t;return s?s.refresh():s=new dojox.charting.widget.Legend({
chart:r,horizontal:i},e),s},n=function(e,t,r,i,s){var a=t||new dojox.grid.DataGrid({},e);
a.startup(),a.setStore(r,i,s);for(var n=[],o=0;o<r.series_name.length;o++)r.series_grid[o]&&r.series_data[o].length>0&&n.push({
field:"data."+o,name:r.series_name[o],width:"auto",formatter:r.series_gridformatter[o]
});return a.setStructure(n),a},o=function(e,t){t.title&&(e.innerHTML=t.title)},d=function(e,t){
t.footer&&(e.innerHTML=t.footer)},h=function(e,t){var r=e;if(t)for(var i=t.split(/[.\[\]]+/),s=0,a=i.length;a>s;s++)r&&(r=r[i[s]]);
return r};dojo.declare("dojox.widget.DataPresentation",null,{type:"chart",chartType:"clusteredBars",
reverse:!1,animate:null,labelMod:1,legendHorizontal:!0,constructor:function(e,t){
dojo.mixin(this,t),this.domNode=dojo.byId(e),this[this.type+"Node"]=this.domNode,
"string"==typeof this.theme&&(this.theme=dojo.getObject(this.theme)),this.chartNode=dojo.byId(this.chartNode),
this.legendNode=dojo.byId(this.legendNode),this.gridNode=dojo.byId(this.gridNode),
this.titleNode=dojo.byId(this.titleNode),this.footerNode=dojo.byId(this.footerNode),
this.legendVertical&&(this.legendHorizontal=!this.legendVertical),this.url?this.setURL(null,null,this.refreshInterval):this.data?this.setData(null,this.refreshInterval):this.setStore();
},setURL:function(e,t,r){r&&this.cancelRefresh(),this.url=e||this.url,this.urlContent=t||this.urlContent,
this.refreshInterval=r||this.refreshInterval;var i=this;dojo.xhrGet({url:this.url,
content:this.urlContent,handleAs:"json-comment-optional",load:function(e,t){i.setData(e);
},error:function(e,t){i.urlError&&"function"==typeof i.urlError&&i.urlError(e,t)}
}),r&&this.refreshInterval>0&&(this.refreshIntervalPending=setInterval(function(){
i.setURL()},this.refreshInterval))},setData:function(e,t){t&&this.cancelRefresh(),
this.data=e||this.data,this.refreshInterval=t||this.refreshInterval;for(var r="function"==typeof this.series?this.series(this.data):this.series,i=[],s=[],a=[],n=[],o=[],d=[],l=[],c=[],u=[],g=0,f=0;f<r.length;f++)i[f]=h(this.data,r[f].datapoints),
i[f]&&i[f].length>g&&(g=i[f].length),s[f]=[],a[f]=r[f].name||(r[f].namefield?h(this.data,r[f].namefield):null)||"series "+f,
n[f]=r[f].chart!==!1,o[f]=r[f].charttype||"bar",d[f]=r[f].linestyle,l[f]=r[f].axis||"primary",
c[f]=r[f].grid!==!1,u[f]=r[f].gridformatter;var p,v,m,y,x=[];for(p=0;g>p;p++){for(v={
index:p},f=0;f<r.length;f++)i[f]&&i[f].length>p&&(m=h(i[f][p],r[f].field),n[f]&&(y=parseFloat(m),
isNaN(y)||(m=y)),v["data."+f]=m,s[f].push(m));x.push(v)}0>=g&&x.push({index:0});var j=new dojo.data.ItemFileWriteStore({
data:{identifier:"index",items:x}});if(this.data.title&&(j.title=this.data.title),
this.data.footer&&(j.footer=this.data.footer),j.series_data=s,j.series_name=a,j.series_chart=n,
j.series_charttype=o,j.series_linestyle=d,j.series_axis=l,j.series_grid=c,j.series_gridformatter=u,
this.setPreparedStore(j),t&&this.refreshInterval>0){var N=this;this.refreshIntervalPending=setInterval(function(){
N.setData()},this.refreshInterval)}},refresh:function(){this.url?this.setURL(this.url,this.urlContent,this.refreshInterval):this.data&&this.setData(this.data,this.refreshInterval);
},cancelRefresh:function(){this.refreshIntervalPending&&(clearInterval(this.refreshIntervalPending),
this.refreshIntervalPending=void 0)},setStore:function(e,t,r){this.setPreparedStore(e,t,r);
},setPreparedStore:function(e,t,r){this.preparedstore=e||this.store,this.query=t||this.query,
this.queryOptions=r||this.queryOptions,this.preparedstore&&(this.chartNode&&(this.chartWidget=s(this.chartNode,this.chartWidget,this.chartType,this.reverse,this.animate,this.labelMod,this.theme,this.tooltip,this.preparedstore,this.query,this.queryOptions),
this.renderChartWidget()),this.legendNode&&(this.legendWidget=a(this.legendNode,this.legendWidget,this.chartWidget,this.legendHorizontal)),
this.gridNode&&(this.gridWidget=n(this.gridNode,this.gridWidget,this.preparedstore,this.query,this.queryOptions),
this.renderGridWidget()),this.titleNode&&o(this.titleNode,this.preparedstore),this.footerNode&&d(this.footerNode,this.preparedstore));
},renderChartWidget:function(){this.chartWidget&&this.chartWidget.render()},renderGridWidget:function(){
this.gridWidget&&this.gridWidget.render()},getChartWidget:function(){return this.chartWidget;
},getGridWidget:function(){return this.gridWidget},destroy:function(){this.cancelRefresh(),
this.chartWidget&&(this.chartWidget.destroy(),delete this.chartWidget),this.legendWidget&&delete this.legendWidget,
this.gridWidget&&delete this.gridWidget,this.chartNode&&(this.chartNode.innerHTML=""),
this.legendNode&&(this.legendNode.innerHTML=""),this.gridNode&&(this.gridNode.innerHTML=""),
this.titleNode&&(this.titleNode.innerHTML=""),this.footerNode&&(this.footerNode.innerHTML="");
}})}();