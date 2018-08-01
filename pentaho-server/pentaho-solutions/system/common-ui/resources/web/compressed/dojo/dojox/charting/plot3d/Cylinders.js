define(["dojox/gfx3d/matrix","dojo/_base/declare","dojo/_base/Color","dojo/_base/kernel","dojo/has","./Base"],function(t,i,a,e,h,s){
var n=function(t,i,a){t="string"==typeof t?t.split(""):t,a=a||e.global;for(var h=t[0],s=1;s<t.length;h=i.call(a,h,t[s++]));
return h};return i("dojox.charting.plot3d.Cylinders",s,{constructor:function(t,i,e){
if(this.depth="auto",this.gap=0,this.data=[],this.material={type:"plastic",finish:"shiny",
color:"lime"},this.outline=null,e){if("depth"in e&&(this.depth=e.depth),"gap"in e&&(this.gap=e.gap),
"material"in e){var h=e.material;"string"==typeof h||h instanceof a?this.material.color=h:this.material=h;
}"outline"in e&&(this.outline=e.outline)}},getDepth:function(){if("auto"==this.depth){
var t=this.width;return this.data&&this.data.length&&(t/=this.data.length),t-2*this.gap;
}return this.depth},generate:function(i,a){if(!this.data)return this;var e=this.width/this.data.length,s=0,r=this.height/n(this.data,Math.max);
a||(a=i.view);for(var o=0;o<this.data.length;++o,s+=e)a.createCylinder({center:{x:s+e/2,
y:0,z:0},radius:e/2-this.gap,height:this.data[o]*r}).setTransform(t.rotateXg(-90)).setFill(this.material).setStroke(this.outline);
h("dojo-bidi")&&this._checkOrientation(i)}})});