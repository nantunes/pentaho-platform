/*! *
* Copyright (c) 2011 Felix Gnass [fgnass at neteye dot de]
* Licensed under the MIT license
*/

/**
   * Copyright (c) 2011 Felix Gnass [fgnass at neteye dot de]
   * Licensed under the MIT license
   */

!function(t,e,i){function o(t,i){var o,r=e.createElement(t||"div");for(o in i)r[o]=i[o];
return r}function r(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);
return t}function n(t,e,i,o){var r=["opacity",e,~~(100*t),i,o].join("-"),n=.01+i/o*100,a=Math.max(1-(1-t)/e*(100-n),t),s=p.substring(0,p.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";
return c[r]||(d.insertRule("@"+l+"keyframes "+r+"{0%{opacity:"+a+"}"+n+"%{opacity:"+t+"}"+(n+.01)+"%{opacity:1}"+(n+e)%100+"%{opacity:"+t+"}100%{opacity:"+a+"}}",d.cssRules.length),
c[r]=1),r}function a(t,e){var o,r,n=t.style;if(n[e]!==i)return e;for(e=e.charAt(0).toUpperCase()+e.slice(1),
r=0;r<u.length;r++)if(o=u[r]+e,n[o]!==i)return o}function s(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];
return t}function l(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)t[r]===i&&(t[r]=o[r]);
}return t}function f(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,
e.y+=t.offsetTop;return e}var p,u=["webkit","Moz","ms","O"],c={},d=function(){var t=o("style",{
type:"text/css"});return r(e.getElementsByTagName("head")[0],t),t.sheet||t.styleSheet;
}(),h={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,
trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto"
},m=function y(t){return this.spin?void(this.opts=l(t||{},y.defaults,h)):new y(t);
};m.defaults={},l(m.prototype,{spin:function(t){this.stop();var e,i,r=this,n=r.opts,a=r.el=s(o(0,{
className:n.className}),{position:"relative",width:0,zIndex:n.zIndex}),l=n.radius+n.length+n.width;
if(t&&(t.insertBefore(a,t.firstChild||null),i=f(t),e=f(a),s(a,{left:("auto"==n.left?i.x-e.x+(t.offsetWidth>>1):parseInt(n.left,10)+l)+"px",
top:("auto"==n.top?i.y-e.y+(t.offsetHeight>>1):parseInt(n.top,10)+l)+"px"})),a.setAttribute("aria-role","progressbar"),
r.lines(a,r.opts),!p){var u=0,c=n.fps,d=c/n.speed,h=(1-n.opacity)/(d*n.trail/100),m=d/n.lines;
!function y(){u++;for(var t=n.lines;t;t--){var e=Math.max(1-(u+t*m)%d*h,n.opacity);
r.opacity(a,n.lines-t,e,n)}r.timeout=r.el&&setTimeout(y,~~(1e3/c))}()}return r},stop:function(){
var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),
this.el=i),this},lines:function(t,e){function i(t,i){return s(o(),{position:"absolute",
width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",
transform:"rotate("+~~(360/e.lines*l+e.rotate)+"deg) translate("+e.radius+"px,0)",
borderRadius:(e.corners*e.width>>1)+"px"})}for(var a,l=0;l<e.lines;l++)a=s(o(),{position:"absolute",
top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,
animation:p&&n(e.opacity,e.trail,l,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&r(a,s(i("#000","0 0 4px #000"),{
top:"2px"})),r(t,r(a,i(e.color,"0 0 1px rgba(0,0,0,.1)")));return t},opacity:function(t,e,i){
e<t.childNodes.length&&(t.childNodes[e].style.opacity=i)}}),function(){function t(t,e){
return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}var e=s(o("group"),{
behavior:"url(#default#VML)"});!a(e,"transform")&&e.adj?(d.addRule(".spin-vml","behavior:url(#default#VML)"),
m.prototype.lines=function(e,i){function o(){return s(t("group",{coordsize:f+" "+f,
coordorigin:-l+" "+-l}),{width:f,height:f})}function n(e,n,a){r(u,r(s(o(),{rotation:360/i.lines*e+"deg",
left:~~n}),r(s(t("roundrect",{arcsize:i.corners}),{width:l,height:i.width,left:i.radius,
top:-i.width>>1,filter:a}),t("fill",{color:i.color,opacity:i.opacity}),t("stroke",{
opacity:0}))))}var a,l=i.length+i.width,f=2*l,p=2*-(i.width+i.length)+"px",u=s(o(),{
position:"absolute",top:p,left:p});if(i.shadow)for(a=1;a<=i.lines;a++)n(a,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
for(a=1;a<=i.lines;a++)n(a);return r(e,u)},m.prototype.opacity=function(t,e,i,o){
var r=t.firstChild;o=o.shadow&&o.lines||0,r&&e+o<r.childNodes.length&&(r=r.childNodes[e+o],
r=r&&r.firstChild,r=r&&r.firstChild,r&&(r.opacity=i))}):p=a(e,"animation")}(),"function"==typeof define&&define.amd?define([],function(){
return m}):t.Spinner=m}(window,document);