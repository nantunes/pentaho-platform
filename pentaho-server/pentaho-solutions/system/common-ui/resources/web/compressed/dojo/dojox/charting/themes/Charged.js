define(["../Theme","dojox/gfx/gradutils","./common"],function(e,l,r){var o=e.generateGradient,t={
type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:75};return r.Charged=new e({chart:{
fill:"#ededdf",pageStyle:{backgroundColor:"#ededdf",backgroundImage:"none",color:"inherit"
}},plotarea:{fill:"transparent"},axis:{stroke:{color:"#808078",width:1},tick:{color:"#b3b3a8",
position:"center",font:"normal normal normal 7pt Helvetica, Arial, sans-serif",fontColor:"#808078"
}},series:{stroke:{width:2,color:"#595954"},outline:null,font:"normal normal normal 8pt Helvetica, Arial, sans-serif",
fontColor:"#808078"},marker:{stroke:{width:3,color:"#595954"},outline:null,font:"normal normal normal 8pt Helvetica, Arial, sans-serif",
fontColor:"#808078"},seriesThemes:[{fill:o(t,"#004cbf","#06f")},{fill:o(t,"#bf004c","#f06")
},{fill:o(t,"#43bf00","#6f0")},{fill:o(t,"#7300bf","#90f")},{fill:o(t,"#bf7300","#f90")
},{fill:o(t,"#00bf73","#0f9")}],markerThemes:[{fill:"#06f",stroke:{color:"#06f"}},{
fill:"#f06",stroke:{color:"#f06"}},{fill:"#6f0",stroke:{color:"#6f0"}},{fill:"#90f",
stroke:{color:"#90f"}},{fill:"#f90",stroke:{color:"#f90"}},{fill:"#0f9",stroke:{color:"#0f9"
}}]}),r.Charged.next=function(l,r,o){var t="line"==l;if(t||"area"==l){var i=this.seriesThemes[this._current%this.seriesThemes.length];
i.fill.space="plot",t&&(i.stroke={width:2.5,color:i.fill.colors[1].color}),"area"==l&&(i.fill.y2=90);
var f=e.prototype.next.apply(this,arguments);return delete i.stroke,i.fill.y2=75,
i.fill.space="shape",f}return e.prototype.next.apply(this,arguments)},r.Charged.post=function(r,o){
return r=e.prototype.post.apply(this,arguments),"slice"!=o&&"circle"!=o||!r.series.fill||"radial"!=r.series.fill.type||(r.series.fill=l.reverse(r.series.fill)),
r},r.Charged});