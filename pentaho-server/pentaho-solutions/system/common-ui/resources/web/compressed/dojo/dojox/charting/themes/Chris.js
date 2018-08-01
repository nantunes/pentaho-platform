define(["../Theme","dojox/gfx/gradutils","./common"],function(e,l,r){var o=e.generateGradient,i={
type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:100};return r.Chris=new e({chart:{fill:"#c1c1c1",
stroke:{color:"#666"}},plotarea:{fill:"#c1c1c1"},series:{stroke:{width:2,color:"white"
},outline:null,fontColor:"#333"},marker:{stroke:{width:2,color:"white"},outline:{
width:2,color:"white"},fontColor:"#333"},seriesThemes:[{fill:o(i,"#01b717","#238c01")
},{fill:o(i,"#d04918","#7c0344")},{fill:o(i,"#0005ec","#002578")},{fill:o(i,"#f9e500","#786f00")
},{fill:o(i,"#e27d00","#773e00")},{fill:o(i,"#00b5b0","#005f5d")},{fill:o(i,"#ac00cb","#590060")
}],markerThemes:[{fill:"#01b717",stroke:{color:"#238c01"}},{fill:"#d04918",stroke:{
color:"#7c0344"}},{fill:"#0005ec",stroke:{color:"#002578"}},{fill:"#f9e500",stroke:{
color:"#786f00"}},{fill:"#e27d00",stroke:{color:"#773e00"}},{fill:"#00b5b0",stroke:{
color:"#005f5d"}},{fill:"#ac00cb",stroke:{color:"#590060"}}]}),r.Chris.next=function(l,r,o){
var i="line"==l;if(i||"area"==l){var t=this.seriesThemes[this._current%this.seriesThemes.length];
t.fill.space="plot",i&&(t.stroke={color:t.fill.colors[1].color},t.outline={width:2,
color:"white"});var s=e.prototype.next.apply(this,arguments);return delete t.outline,
delete t.stroke,t.fill.space="shape",s}return e.prototype.next.apply(this,arguments);
},r.Chris.post=function(r,o){return r=e.prototype.post.apply(this,arguments),"slice"!=o&&"circle"!=o||!r.series.fill||"radial"!=r.series.fill.type||(r.series.fill=l.reverse(r.series.fill)),
r},r.Chris});