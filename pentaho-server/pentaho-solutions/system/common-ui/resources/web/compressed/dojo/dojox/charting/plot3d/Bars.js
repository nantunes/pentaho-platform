define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/Color","dojo/has","./Base"],function(t,i,a,h,e){
var s=function(i,a,h){i="string"==typeof i?i.split(""):i,h=h||t.global;for(var e=i[0],s=1;s<i.length;e=a.call(h,e,i[s++]));
return e};return i("dojox.charting.plot3d.Bars",e,{constructor:function(t,i,h){if(this.depth="auto",
this.gap=0,this.data=[],this.material={type:"plastic",finish:"dull",color:"lime"},
h&&("depth"in h&&(this.depth=h.depth),"gap"in h&&(this.gap=h.gap),"material"in h)){
var e=h.material;"string"==typeof e||e instanceof a?this.material.color=e:this.material=e;
}},getDepth:function(){if("auto"==this.depth){var t=this.width;return this.data&&this.data.length&&(t/=this.data.length),
t-2*this.gap}return this.depth},generate:function(t,i){if(!this.data)return this;var a=this.width/this.data.length,e=0,o="auto"==this.depth?a-2*this.gap:this.depth,r=this.height/s(this.data,Math.max);
i||(i=t.view);for(var n=0;n<this.data.length;++n,e+=a)i.createCube({bottom:{x:e+this.gap,
y:0,z:0},top:{x:e+a-this.gap,y:this.data[n]*r,z:o}}).setFill(this.material);h("dojo-bidi")&&this._checkOrientation(t);
}})});