define(["../Theme","dojox/gfx/gradutils","./common"],function(e,o,l){var r=e.generateGradient,t={
type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:100};return l.Tom=new e({chart:{fill:"#181818",
stroke:{color:"#181818"},pageStyle:{backgroundColor:"#181818",backgroundImage:"none",
color:"#eaf2cb"}},plotarea:{fill:"#181818"},axis:{stroke:{color:"#a0a68b",width:1
},tick:{color:"#888c76",position:"center",font:"normal normal normal 7pt Helvetica, Arial, sans-serif",
fontColor:"#888c76"}},series:{stroke:{width:2.5,color:"#eaf2cb"},outline:null,font:"normal normal normal 8pt Helvetica, Arial, sans-serif",
fontColor:"#eaf2cb"},marker:{stroke:{width:1.25,color:"#eaf2cb"},outline:{width:1.25,
color:"#eaf2cb"},font:"normal normal normal 8pt Helvetica, Arial, sans-serif",fontColor:"#eaf2cb"
},seriesThemes:[{fill:r(t,"#bf9e0a","#ecc20c")},{fill:r(t,"#73b086","#95e5af")},{
fill:r(t,"#c7212d","#ed2835")},{fill:r(t,"#87ab41","#b6e557")},{fill:r(t,"#b86c25","#d37d2a")
}],markerThemes:[{fill:"#bf9e0a",stroke:{color:"#ecc20c"}},{fill:"#73b086",stroke:{
color:"#95e5af"}},{fill:"#c7212d",stroke:{color:"#ed2835"}},{fill:"#87ab41",stroke:{
color:"#b6e557"}},{fill:"#b86c25",stroke:{color:"#d37d2a"}}]}),l.Tom.next=function(o,l,r){
var t="line"==o;if(t||"area"==o){var a=this.seriesThemes[this._current%this.seriesThemes.length];
a.fill.space="plot",t&&(a.stroke={width:4,color:a.fill.colors[0].color});var i=e.prototype.next.apply(this,arguments);
return delete a.outline,delete a.stroke,a.fill.space="shape",i}return e.prototype.next.apply(this,arguments);
},l.Tom.post=function(l,r){return l=e.prototype.post.apply(this,arguments),"slice"!=r&&"circle"!=r||!l.series.fill||"radial"!=l.series.fill.type||(l.series.fill=o.reverse(l.series.fill)),
l},l.Tom});