define(["../Theme","dojox/gfx/gradutils","./common"],function(e,l,o){var r=e.generateGradient,c={
type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:100};return o.Julie=new e({seriesThemes:[{
fill:r(c,"#59a0bd","#497c91"),stroke:{color:"#22627d"}},{fill:r(c,"#8d88c7","#6c6d8e"),
stroke:{color:"#8a84c5"}},{fill:r(c,"#85a54a","#768b4e"),stroke:{color:"#5b6d1f"}
},{fill:r(c,"#e8e667","#c6c361"),stroke:{color:"#918e38"}},{fill:r(c,"#e9c756","#c7a223"),
stroke:{color:"#947b30"}},{fill:r(c,"#a05a5a","#815454"),stroke:{color:"#572828"}
},{fill:r(c,"#b17044","#72543e"),stroke:{color:"#74482e"}},{fill:r(c,"#a5a5a5","#727272"),
stroke:{color:"#535353"}},{fill:r(c,"#9dc7d9","#59a0bd"),stroke:{color:"#22627d"}
},{fill:r(c,"#b7b3da","#8681b3"),stroke:{color:"#8a84c5"}},{fill:r(c,"#a8c179","#85a54a"),
stroke:{color:"#5b6d1f"}},{fill:r(c,"#eeea99","#d6d456"),stroke:{color:"#918e38"}
},{fill:r(c,"#ebcf81","#e9c756"),stroke:{color:"#947b30"}},{fill:r(c,"#c99999","#a05a5a"),
stroke:{color:"#572828"}},{fill:r(c,"#c28b69","#7d5437"),stroke:{color:"#74482e"}
},{fill:r(c,"#bebebe","#8c8c8c"),stroke:{color:"#535353"}},{fill:r(c,"#c7e0e9","#92baca"),
stroke:{color:"#22627d"}},{fill:r(c,"#c9c6e4","#ada9d6"),stroke:{color:"#8a84c5"}
},{fill:r(c,"#c0d0a0","#98ab74"),stroke:{color:"#5b6d1f"}},{fill:r(c,"#f0eebb","#dcd87c"),
stroke:{color:"#918e38"}},{fill:r(c,"#efdeb0","#ebcf81"),stroke:{color:"#947b30"}
},{fill:r(c,"#ddc0c0","#c99999"),stroke:{color:"#572828"}},{fill:r(c,"#cfb09b","#c28b69"),
stroke:{color:"#74482e"}},{fill:r(c,"#d8d8d8","#bebebe"),stroke:{color:"#535353"}
},{fill:r(c,"#ddeff5","#a5c4cd"),stroke:{color:"#22627d"}},{fill:r(c,"#dedcf0","#b3afd3"),
stroke:{color:"#8a84c5"}},{fill:r(c,"#dfe9ca","#c0d0a0"),stroke:{color:"#5b6d1f"}
},{fill:r(c,"#f8f7db","#e5e28f"),stroke:{color:"#918e38"}},{fill:r(c,"#f7f0d8","#cfbd88"),
stroke:{color:"#947b30"}},{fill:r(c,"#eedede","#caafaf"),stroke:{color:"#572828"}
},{fill:r(c,"#e3cdbf","#cfb09b"),stroke:{color:"#74482e"}},{fill:r(c,"#efefef","#cacaca"),
stroke:{color:"#535353"}}]}),o.Julie.next=function(l,o,r){if("line"==l||"area"==l){
var c=this.seriesThemes[this._current%this.seriesThemes.length];c.fill.space="plot";
var f=e.prototype.next.apply(this,arguments);return c.fill.space="shape",f}return e.prototype.next.apply(this,arguments);
},o.Julie.post=function(o,r){return o=e.prototype.post.apply(this,arguments),"slice"==r&&o.series.fill&&"radial"==o.series.fill.type&&(o.series.fill=l.reverse(o.series.fill)),
o},o.Julie});