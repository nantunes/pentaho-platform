define(["../Theme","dojox/gfx/gradutils","./common"],function(e,o,l){var r=e.generateGradient,f={
type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:150};return l.Renkoo=new e({chart:{
fill:"#123666",pageStyle:{backgroundColor:"#123666",backgroundImage:"none",color:"#95afdb"
}},plotarea:{fill:"#123666"},axis:{stroke:{color:"#95afdb",width:1},tick:{color:"#95afdb",
position:"center",font:"normal normal normal 7pt Lucida Grande, Helvetica, Arial, sans-serif",
fontColor:"#95afdb"}},series:{stroke:{width:2.5,color:"#123666"},outline:null,font:"normal normal normal 8pt Lucida Grande, Helvetica, Arial, sans-serif",
fontColor:"#95afdb"},marker:{stroke:{width:2.5,color:"#ccc"},outline:null,font:"normal normal normal 8pt Lucida Grande, Helvetica, Arial, sans-serif",
fontColor:"#95afdb"},seriesThemes:[{fill:r(f,"#e7e391","#f8f7de")},{fill:r(f,"#ffb6b6","#ffe8e8")
},{fill:r(f,"#bcda7d","#eef7da")},{fill:r(f,"#d5d5d5","#f4f4f4")},{fill:r(f,"#c1e3fd","#e4f3ff")
}],markerThemes:[{fill:"#fcfcf3",stroke:{color:"#e7e391"}},{fill:"#fff1f1",stroke:{
color:"#ffb6b6"}},{fill:"#fafdf4",stroke:{color:"#bcda7d"}},{fill:"#fbfbfb",stroke:{
color:"#d5d5d5"}},{fill:"#f3faff",stroke:{color:"#c1e3fd"}}]}),l.Renkoo.next=function(o,l,r){
if(-1=="slice,column,bar".indexOf(o)){var f=this.seriesThemes[this._current%this.seriesThemes.length];
f.fill.space="plot",f.stroke={width:2,color:f.fill.colors[0].color},("line"==o||"area"==o)&&(f.stroke.width=4);
var t=e.prototype.next.apply(this,arguments);return delete f.stroke,f.fill.space="shape",
t}return e.prototype.next.apply(this,arguments)},l.Renkoo.post=function(l,r){return l=e.prototype.post.apply(this,arguments),
"slice"!=r&&"circle"!=r||!l.series.fill||"radial"!=l.series.fill.type||(l.series.fill=o.reverse(l.series.fill)),
l},l.Renkoo});