define(["../Theme","dojox/gfx/gradutils","./common"],function(e,r,o){var l=e.generateGradient,t={
type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:100};return o.Claro=new e({chart:{fill:{
type:"linear",x1:0,x2:0,y1:0,y2:100,colors:[{offset:0,color:"#dbdbdb"},{offset:1,
color:"#efefef"}]},stroke:{color:"#b5bcc7"}},plotarea:{fill:{type:"linear",x1:0,x2:0,
y1:0,y2:100,colors:[{offset:0,color:"#dbdbdb"},{offset:1,color:"#efefef"}]}},axis:{
stroke:{color:"#888c76",width:1},tick:{color:"#888c76",position:"center",font:"normal normal normal 7pt Verdana, Arial, sans-serif",
fontColor:"#888c76"}},series:{stroke:{width:2.5,color:"#fff"},outline:null,font:"normal normal normal 7pt Verdana, Arial, sans-serif",
fontColor:"#131313"},marker:{stroke:{width:1.25,color:"#131313"},outline:{width:1.25,
color:"#131313"},font:"normal normal normal 8pt Verdana, Arial, sans-serif",fontColor:"#131313"
},seriesThemes:[{fill:l(t,"#2a6ead","#3a99f2")},{fill:l(t,"#613e04","#996106")},{
fill:l(t,"#0e3961","#155896")},{fill:l(t,"#55aafa","#3f7fba")},{fill:l(t,"#ad7b2a","#db9b35")
}],markerThemes:[{fill:"#2a6ead",stroke:{color:"#fff"}},{fill:"#613e04",stroke:{color:"#fff"
}},{fill:"#0e3961",stroke:{color:"#fff"}},{fill:"#55aafa",stroke:{color:"#fff"}},{
fill:"#ad7b2a",stroke:{color:"#fff"}}]}),o.Claro.next=function(r,o,l){var t,s,i="line"==r;
if(i||"area"==r){t=this.seriesThemes[this._current%this.seriesThemes.length];var a=this.markerThemes[this._current%this.markerThemes.length];
return t.fill.space="plot",i&&(t.stroke={width:4,color:t.fill.colors[0].color}),a.outline={
width:1.25,color:a.fill},s=e.prototype.next.apply(this,arguments),delete t.outline,
delete t.stroke,t.fill.space="shape",s}return"candlestick"==r?(t=this.seriesThemes[this._current%this.seriesThemes.length],
t.fill.space="plot",t.stroke={width:1,color:t.fill.colors[0].color},s=e.prototype.next.apply(this,arguments)):e.prototype.next.apply(this,arguments);
},o.Claro.post=function(o,l){return o=e.prototype.post.apply(this,arguments),"slice"!=l&&"circle"!=l||!o.series.fill||"radial"!=o.series.fill.type||(o.series.fill=r.reverse(o.series.fill)),
o},o.Claro});