define(["dojo","../../util/oo","../_Plugin","../../manager/_registry"],function(n,i,o,t){
var s=i.declare(o,function(n){},{onClick:function(){var n;for(var i in this.stencils.stencils)if(console.log(" stanceil item:",this.stencils.stencils[i].id,this.stencils.stencils[i]),
"path"==this.stencils.stencils[i].shortType){n=this.stencils.stencils[i];break}n&&(console.log("click Iconize plugin",n.points),
this.makeIcon(n.points))},makeIcon:function(i){var o=function(n){return Number(n.toFixed(1));
},t=1e4,s=1e4;i.forEach(function(n){void 0===n.x||isNaN(n.x)||(t=Math.min(t,n.x),
s=Math.min(s,n.y))});var e=0,c=0;i.forEach(function(n){void 0===n.x||isNaN(n.x)||(n.x=o(n.x-t),
n.y=o(n.y-s),e=Math.max(e,n.x),c=Math.max(c,n.y))}),console.log("xmax:",e,"ymax:",c);
var a=60,l=20;i.forEach(function(n){n.x=o(n.x/e)*a+l,n.y=o(n.y/c)*a+l});var r="[\n";
n.forEach(i,function(n,o){r+="{	",n.t&&(r+="t:'"+n.t+"'"),void 0===n.x||isNaN(n.x)||(n.t&&(r+=", "),
r+="x:"+n.x+",		y:"+n.y),r+="	}",o!=i.length-1&&(r+=","),r+="\n"}),r+="]",console.log(r);
var x=n.byId("data");x&&(x.value=r)}});return s.setup={name:"dojox.drawing.plugins.tools.Iconize",
tooltip:"Iconize Tool",iconClass:"iconPan"},n.setObject("dojox.drawing.plugins.tools.Iconize",s),
t.register(s.setup,"plugin"),s});