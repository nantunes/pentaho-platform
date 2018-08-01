define(["../Theme","dojox/gfx/gradutils","./common"],function(l,e,r){var o=l.generateGradient,t={
type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:75};return r.Electric=new l({chart:{
fill:"#252525",stroke:{color:"#252525"},pageStyle:{backgroundColor:"#252525",backgroundImage:"none",
color:"#ccc"}},plotarea:{fill:"#252525"},axis:{stroke:{color:"#aaa",width:1},tick:{
color:"#777",position:"center",font:"normal normal normal 7pt Helvetica, Arial, sans-serif",
fontColor:"#777"}},series:{stroke:{width:2,color:"#ccc"},outline:null,font:"normal normal normal 8pt Helvetica, Arial, sans-serif",
fontColor:"#ccc"},marker:{stroke:{width:3,color:"#ccc"},outline:null,font:"normal normal normal 8pt Helvetica, Arial, sans-serif",
fontColor:"#ccc"},seriesThemes:[{fill:o(t,"#004cbf","#06f")},{fill:o(t,"#bf004c","#f06")
},{fill:o(t,"#43bf00","#6f0")},{fill:o(t,"#7300bf","#90f")},{fill:o(t,"#bf7300","#f90")
},{fill:o(t,"#00bf73","#0f9")}],markerThemes:[{fill:"#06f",stroke:{color:"#06f"}},{
fill:"#f06",stroke:{color:"#f06"}},{fill:"#6f0",stroke:{color:"#6f0"}},{fill:"#90f",
stroke:{color:"#90f"}},{fill:"#f90",stroke:{color:"#f90"}},{fill:"#0f9",stroke:{color:"#0f9"
}}]}),r.Electric.next=function(e,r,o){var t="line"==e;if(t||"area"==e){var i=this.seriesThemes[this._current%this.seriesThemes.length];
i.fill.space="plot",t&&(i.stroke={width:2.5,color:i.fill.colors[1].color}),"area"==e&&(i.fill.y2=90);
var s=l.prototype.next.apply(this,arguments);return delete i.stroke,i.fill.y2=75,
i.fill.space="shape",s}return l.prototype.next.apply(this,arguments)},r.Electric.post=function(r,o){
return r=l.prototype.post.apply(this,arguments),"slice"!=o&&"circle"!=o||!r.series.fill||"radial"!=r.series.fill.type||(r.series.fill=e.reverse(r.series.fill)),
r},r.Electric});