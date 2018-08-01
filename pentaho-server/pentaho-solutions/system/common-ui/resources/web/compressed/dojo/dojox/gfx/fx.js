define(["dojo/_base/lang","./_base","./matrix","dojo/_base/Color","dojo/_base/array","dojo/_base/fx","dojo/_base/connect","dojo/sniff"],function(t,n,e,i,a,s,r,o){
function u(t,n){this.start=t,this.end=n}function l(t,n,e){this.start=t,this.end=n,
this.units=e}function f(t,n){this.start=t,this.end=n,this.temp=new i}function c(t){
this.values=t,this.length=t.length}function v(t,n){this.values=t,this.def=n?n:{}}
function h(t,n){this.stack=t,this.original=n}function g(t,e,i,a){if(t.values)return new c(t.values);
var s,r,o;return r=t.start?n.normalizeColor(t.start):s=e?i?e[i]:e:a,t.end?o=n.normalizeColor(t.end):(s||(s=e?i?e[i]:e:a),
o=s),new f(r,o)}function d(t,n,e,i){if(t.values)return new c(t.values);var a,s,r;return s=t.start?t.start:a=n?n[e]:i,
t.end?r=t.end:("number"!=typeof a&&(a=n?n[e]:i),r=a),new u(s,r)}var m=n.fx={};u.prototype.getValue=function(t){
return(this.end-this.start)*t+this.start},l.prototype.getValue=function(t){return(this.end-this.start)*t+this.start+this.units;
},f.prototype.getValue=function(t){return i.blendColors(this.start,this.end,t,this.temp);
},c.prototype.getValue=function(t){return this.values[Math.min(Math.floor(t*this.length),this.length-1)];
},v.prototype.getValue=function(n){var e=t.clone(this.def);for(var i in this.values)e[i]=this.values[i].getValue(n);
return e},h.prototype.getValue=function(t){var n=[];return a.forEach(this.stack,function(i){
if(i instanceof e.Matrix2D)return void n.push(i);if("original"==i.name&&this.original)return void n.push(this.original);
if("matrix"!=i.name){if(i.name in e){var s=e[i.name];if("function"!=typeof s)return void n.push(s);
var r=a.map(i.start,function(n,e){return(i.end[e]-n)*t+n}),o=s.apply(e,r);o instanceof e.Matrix2D&&n.push(o);
}}else if(i.start instanceof e.Matrix2D&&i.end instanceof e.Matrix2D){var u=new e.Matrix2D;
for(var l in i.start)u[l]=(i.end[l]-i.start[l])*t+i.start[l];n.push(u)}},this),n};
var p=new i(0,0,0,0);return m.animateStroke=function(t){t.easing||(t.easing=s._defaultEasing);
var n,e=new s.Animation(t),i=t.shape;return r.connect(e,"beforeBegin",e,function(){
n=i.getStroke();var e,a,s=t.color,r={};s&&(r.color=g(s,n,"color",p)),s=t.style,s&&s.values&&(r.style=new c(s.values)),
s=t.width,s&&(r.width=d(s,n,"width",1)),s=t.cap,s&&s.values&&(r.cap=new c(s.values)),
s=t.join,s&&(s.values?r.join=new c(s.values):(e=s.start?s.start:n&&n.join||0,a=s.end?s.end:n&&n.join||0,
"number"==typeof e&&"number"==typeof a&&(r.join=new u(e,a)))),this.curve=new v(r,n);
}),r.connect(e,"onAnimate",i,"setStroke"),e},m.animateFill=function(t){t.easing||(t.easing=s._defaultEasing);
var n,e=new s.Animation(t),i=t.shape;return r.connect(e,"beforeBegin",e,function(){
n=i.getFill();var e=t.color;e&&(this.curve=g(e,n,"",p))}),r.connect(e,"onAnimate",i,"setFill"),
e},m.animateFont=function(t){t.easing||(t.easing=s._defaultEasing);var n,e=new s.Animation(t),i=t.shape;
return r.connect(e,"beforeBegin",e,function(){n=i.getFont();var e,a,s=t.style,r={};
s&&s.values&&(r.style=new c(s.values)),s=t.variant,s&&s.values&&(r.variant=new c(s.values)),
s=t.weight,s&&s.values&&(r.weight=new c(s.values)),s=t.family,s&&s.values&&(r.family=new c(s.values)),
s=t.size,s&&s.units&&(e=parseFloat(s.start?s.start:i.font&&i.font.size||"0"),a=parseFloat(s.end?s.end:i.font&&i.font.size||"0"),
r.size=new l(e,a,s.units)),this.curve=new v(r,n)}),r.connect(e,"onAnimate",i,"setFont"),
e},m.animateTransform=function(t){t.easing||(t.easing=s._defaultEasing);var e,i=new s.Animation(t),u=t.shape;
if(r.connect(i,"beforeBegin",i,function(){e=u.getTransform(),this.curve=new h(t.transform,e);
}),r.connect(i,"onAnimate",u,"setTransform"),"svg"===n.renderer&&o("ie")>=10)var l=[r.connect(i,"onBegin",i,function(){
for(var t=u.getParent();t&&t.getParent;)t=t.getParent();t&&(u.__svgContainer=t.rawNode.parentNode);
}),r.connect(i,"onAnimate",i,function(){try{if(u.__svgContainer){var t=u.__svgContainer.style.visibility;
u.__svgContainer.style.visibility="visible";u.__svgContainer.offsetHeight;u.__svgContainer.style.visibility=t;
}}catch(n){}}),r.connect(i,"onEnd",i,function(){if(a.forEach(l,r.disconnect),u.__svgContainer){
var t=u.__svgContainer.style.visibility,n=u.__svgContainer;u.__svgContainer.style.visibility="visible",
setTimeout(function(){try{n.style.visibility=t,n=null}catch(e){}},100)}delete u.__svgContainer;
})];return i},m});