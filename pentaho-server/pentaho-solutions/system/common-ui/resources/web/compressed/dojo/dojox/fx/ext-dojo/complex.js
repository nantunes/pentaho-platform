define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/connect","dojo/_base/Color","dojo/_base/fx","dojo/fx"],function(t,e,r,o,s,n,i,a){
e.getObject("dojox.fx.ext-dojo.complex",!0);var p=i.animateProperty;return t.animateProperty=i.animateProperty=function(e){
var r=p(e);return s.connect(r,"beforeBegin",function(){r.curve.getValue=function(e){
var r={};for(var o in this._properties){var s=this._properties[o],n=s.start;n instanceof t.Color?r[o]=t.blendColors(n,s.end,e,s.tempColor).toCss():n instanceof dojox.fx._Complex?r[o]=n.getValue(e):t.isArray(n)||(r[o]=(s.end-n)*e+n+("opacity"!=o?s.units||"px":0));
}return r};for(var e in this.properties){var o=this.properties[e];"string"==typeof o.start&&/\(/.test(o.start)&&(this.curve._properties[e].start=new dojox.fx._Complex(o));
}}),r},o("dojox.fx._Complex",null,{PROP:/\([\w|,|+|\-|#|\.|\s]*\)/g,constructor:function(t){
var e=t.start.match(this.PROP),o=t.end.match(this.PROP),s=r.map(e,this.getProps,this),n=r.map(o,this.getProps,this);
this._properties={},this.strProp=t.start,r.forEach(s,function(t,e){r.forEach(t,function(t,r){
this.strProp=this.strProp.replace(t,"PROP_"+e+r),this._properties["PROP_"+e+r]=this.makePropObject(t,n[e][r]);
},this)},this)},getValue:function(t){var e,r=this.strProp;for(var o in this._properties){
var s,i=this._properties[o];"isColor"==i.units?(s=n.blendColors(i.beg,i.end,t).toCss(!1),
e=""):(s=(i.end-i.beg)*t+i.beg,e=i.units),r=r.replace(o,s+e)}return r},makePropObject:function(t,e){
var r=this.getNumAndUnits(t),o=this.getNumAndUnits(e);return{beg:r.num,end:o.num,
units:r.units}},getProps:function(t){t=t.substring(1,t.length-1);var e;return/,/.test(t)?(t=t.replace(/\s/g,""),
e=t.split(",")):(t=t.replace(/\s{2,}/g," "),e=t.split(" ")),e},getNumAndUnits:function(t){
if(!t)return{};if(/#/.test(t))return{num:new n(t),units:"isColor"};var e={num:parseFloat(/-*[\d\.\d|\d]{1,}/.exec(t).join(""))
};return e.units=/[a-z]{1,}/.exec(t),e.units=e.units&&e.units.length?e.units.join(""):"",
e}})});