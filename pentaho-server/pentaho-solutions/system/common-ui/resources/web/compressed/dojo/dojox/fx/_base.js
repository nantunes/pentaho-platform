define(["dojo/_base/array","dojo/_base/lang","dojo/_base/fx","dojo/fx","dojo/dom","dojo/dom-style","dojo/dom-geometry","dojo/_base/connect","dojo/_base/html"],function(t,e,o,n,i,r,a,d,s){
var f=e.getObject("dojox.fx",!0);return e.mixin(f,{anim:o.anim,animateProperty:o.animateProperty,
fadeTo:o._fade,fadeIn:o.fadeIn,fadeOut:o.fadeOut,combine:n.combine,chain:n.chain,
slideTo:n.slideTo,wipeIn:n.wipeIn,wipeOut:n.wipeOut}),f.sizeTo=function(t){var a=t.node=i.byId(t.node),d="absolute",s=t.method||"chain";
t.duration||(t.duration=500),"chain"==s&&(t.duration=Math.floor(t.duration/2));var f,u,p,l,c,y=null,h=function(e){
return function(){var o=r.getComputedStyle(e),n=o.position,i=o.width,a=o.height;if(f=n==d?e.offsetTop:parseInt(o.top)||0,
p=n==d?e.offsetLeft:parseInt(o.left)||0,c="auto"==i?0:parseInt(i),y="auto"==a?0:parseInt(a),
l=p-Math.floor((t.width-c)/2),u=f-Math.floor((t.height-y)/2),n!=d&&"relative"!=n){
var s=r.coords(e,!0);f=s.y,p=s.x,e.style.position=d,e.style.top=f+"px",e.style.left=p+"px";
}}}(a),m=o.animateProperty(e.mixin({properties:{height:function(){return h(),{end:t.height||0,
start:y}},top:function(){return{start:f,end:u}}}},t)),b=o.animateProperty(e.mixin({
properties:{width:function(){return{start:c,end:t.width||0}},left:function(){return{
start:p,end:l}}}},t)),v=n["combine"==t.method?"combine":"chain"]([m,b]);return v},
f.slideBy=function(t){var n,s,f=t.node=i.byId(t.node),u=function(t){return function(){
var e=r.getComputedStyle(t),o=e.position;if(n="absolute"==o?t.offsetTop:parseInt(e.top)||0,
s="absolute"==o?t.offsetLeft:parseInt(e.left)||0,"absolute"!=o&&"relative"!=o){var i=a.coords(t,!0);
n=i.y,s=i.x,t.style.position="absolute",t.style.top=n+"px",t.style.left=s+"px"}}}(f);
u();var p=o.animateProperty(e.mixin({properties:{top:n+(t.top||0),left:s+(t.left||0)
}},t));return d.connect(p,"beforeBegin",p,u),p},f.crossFade=function(t){var r=t.nodes[0]=i.byId(t.nodes[0]),a=s.style(r,"opacity"),d=t.nodes[1]=i.byId(t.nodes[1]),f=(s.style(d,"opacity"),
n.combine([o[0==a?"fadeIn":"fadeOut"](e.mixin({node:r},t)),o[0==a?"fadeOut":"fadeIn"](e.mixin({
node:d},t))]));return f},f.highlight=function(t){var n=t.node=i.byId(t.node);t.duration=t.duration||400;
var r=t.color||"#ffff99",a=s.style(n,"backgroundColor");"rgba(0, 0, 0, 0)"==a&&(a="transparent");
var f=o.animateProperty(e.mixin({properties:{backgroundColor:{start:r,end:a}}},t));
return"transparent"==a&&d.connect(f,"onEnd",f,function(){n.style.backgroundColor=a;
}),f},f.wipeTo=function(t){t.node=i.byId(t.node);var n=t.node,r=n.style,a=t.width?"width":"height",d=t[a],f={};
f[a]={start:function(){if(r.overflow="hidden","hidden"==r.visibility||"none"==r.display)return r[a]="1px",
r.display="",r.visibility="",1;var t=s.style(n,a);return Math.max(t,1)},end:d};var u=o.animateProperty(e.mixin({
properties:f},t));return u},f});