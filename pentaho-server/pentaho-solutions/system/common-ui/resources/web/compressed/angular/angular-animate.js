/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

!function(n,t){"use strict";function e(n,t,e){if(!n)throw hn("areq","Argument '{0}' is {1}",t||"?",e||"required");
return n}function a(n,t){return n||t?n?t?(G(n)&&(n=n.join(" ")),G(t)&&(t=t.join(" ")),
n+" "+t):n:t:""}function r(n){var t={};return n&&(n.to||n.from)&&(t.to=n.to,t.from=n.from),
t}function i(n,t,e){var a="";return n=G(n)?n:n&&nn(n)&&n.length?n.split(/\s+/):[],
z(n,function(n,r){n&&n.length>0&&(a+=r>0?" ":"",a+=e?t+n:n+t)}),a}function o(n,t){
var e=n.indexOf(t);t>=0&&n.splice(e,1)}function s(n){if(n instanceof en)switch(n.length){
case 0:return n;case 1:if(n[0].nodeType===R)return n;break;default:return en(u(n));
}return n.nodeType===R?en(n):void 0}function u(n){if(!n[0])return n;for(var t=0;t<n.length;t++){
var e=n[t];if(e.nodeType==R)return e}}function l(n,t,e){z(t,function(t){n.addClass(t,e);
})}function c(n,t,e){z(t,function(t){n.removeClass(t,e)})}function f(n){return function(t,e){
e.addClass&&(l(n,t,e.addClass),e.addClass=null),e.removeClass&&(c(n,t,e.removeClass),
e.removeClass=null)}}function m(n){if(n=n||{},!n.$$prepared){var t=n.domOperation||an;
n.domOperation=function(){n.$$domOperationFired=!0,t(),t=an},n.$$prepared=!0}return n;
}function v(n,t){d(n,t),p(n,t)}function d(n,t){t.from&&(n.css(t.from),t.from=null);
}function p(n,t){t.to&&(n.css(t.to),t.to=null)}function h(n,t,e){var a=t.options||{},r=e.options||{},i=(a.addClass||"")+" "+(r.addClass||""),o=(a.removeClass||"")+" "+(r.removeClass||""),s=g(n.attr("class"),i,o);
r.preparationClasses&&(a.preparationClasses=k(r.preparationClasses,a.preparationClasses),
delete r.preparationClasses);var u=a.domOperation!==an?a.domOperation:null;return V(a,r),
u&&(a.domOperation=u),s.addClass?a.addClass=s.addClass:a.addClass=null,s.removeClass?a.removeClass=s.removeClass:a.removeClass=null,
t.addClass=a.addClass,t.removeClass=a.removeClass,a}function g(n,t,e){function a(n){
nn(n)&&(n=n.split(" "));var t={};return z(n,function(n){n.length&&(t[n]=!0)}),t}var r=1,i=-1,o={};
n=a(n),t=a(t),z(t,function(n,t){o[t]=r}),e=a(e),z(e,function(n,t){o[t]=o[t]===r?null:i;
});var s={addClass:"",removeClass:""};return z(o,function(t,e){var a,o;t===r?(a="addClass",
o=!n[e]||n[e+L]):t===i&&(a="removeClass",o=n[e]||n[e+q]),o&&(s[a].length&&(s[a]+=" "),
s[a]+=e)}),s}function $(n){return n instanceof en?n[0]:n}function C(n,t,e){var a="";
t&&(a=i(t,H,!0)),e.addClass&&(a=k(a,i(e.addClass,q))),e.removeClass&&(a=k(a,i(e.removeClass,L))),
a.length&&(e.preparationClasses=a,n.addClass(a))}function y(n,t){t.preparationClasses&&(n.removeClass(t.preparationClasses),
t.preparationClasses=null),t.activeClasses&&(n.removeClass(t.activeClasses),t.activeClasses=null);
}function D(n,t){var e=t?"-"+t+"s":"";return A(n,[dn,e]),[dn,e]}function b(n,t){var e=t?"paused":"",a=E+cn;
return A(n,[a,e]),[a,e]}function A(n,t){var e=t[0],a=t[1];n.style[e]=a}function k(n,t){
return n?t?n+" "+t:n:t}function w(n){return[vn,n+"s"]}function T(n,t){var e=t?mn:dn;
return[e,n+"s"]}function S(n,t,e){var a=Object.create(null),r=n.getComputedStyle(t)||{};
return z(e,function(n,t){var e=r[n];if(e){var i=e.charAt(0);("-"===i||"+"===i||i>=0)&&(e=j(e)),
0===e&&(e=null),a[t]=e}}),a}function j(n){var t=0,e=n.split(/\s*,\s*/);return z(e,function(n){
"s"==n.charAt(n.length-1)&&(n=n.substring(0,n.length-1)),n=parseFloat(n)||0,t=t?Math.max(n,t):n;
}),t}function x(n){return 0===n||null!=n}function O(n,t){var e=F,a=n+"s";return t?e+=rn:a+=" linear all",
[e,a]}function N(){var n=Object.create(null);return{flush:function(){n=Object.create(null);
},count:function(t){var e=n[t];return e?e.total:0},get:function(t){var e=n[t];return e&&e.value;
},put:function(t,e){n[t]?n[t].total++:n[t]={total:1,value:e}}}}function P(n,t,e){
z(e,function(e){n[e]=X(n[e])?n[e]:t.style.getPropertyValue(e)})}var F,M,E,I,R=1,q="-add",L="-remove",H="ng-",B="-active",J="-prepare",K="ng-animate",Q="$$ngAnimateChildren",U="";
void 0===n.ontransitionend&&void 0!==n.onwebkittransitionend?(U="-webkit-",F="WebkitTransition",
M="webkitTransitionEnd transitionend"):(F="transition",M="transitionend"),void 0===n.onanimationend&&void 0!==n.onwebkitanimationend?(U="-webkit-",
E="WebkitAnimation",I="webkitAnimationEnd animationend"):(E="animation",I="animationend");
var W,V,z,G,X,Y,Z,_,nn,tn,en,an,rn="Duration",on="Property",sn="Delay",un="TimingFunction",ln="IterationCount",cn="PlayState",fn=9999,mn=E+sn,vn=E+rn,dn=F+sn,pn=F+rn,hn=t.$$minErr("ng"),gn=["$$rAF",function(n){
function t(n){a=a.concat(n),e()}function e(){if(a.length){for(var t=a.shift(),i=0;i<t.length;i++)t[i]();
r||n(function(){r||e()})}}var a,r;return a=t.queue=[],t.waitUntilQuiet=function(t){
r&&r(),r=n(function(){r=null,t(),e()})},t}],$n=["$interpolate",function(n){return{
link:function(t,e,a){function r(n){n="on"===n||"true"===n,e.data(Q,n)}var i=a.ngAnimateChildren;
nn(i)&&0===i.length?e.data(Q,!0):(r(n(i)(t)),a.$observe("ngAnimateChildren",r))}};
}],Cn="$$animateCss",yn=1e3,Dn=3,bn=1.5,An={transitionDuration:pn,transitionDelay:dn,
transitionProperty:F+on,animationDuration:vn,animationDelay:mn,animationIterationCount:E+ln
},kn={transitionDuration:pn,transitionDelay:dn,animationDuration:vn,animationDelay:mn
},wn=["$animateProvider",function(n){var t=N(),e=N();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(n,a,s,u,l,c,h,g){
function C(n,t){var e="$$ngAnimateParentKey",a=n.parentNode,r=a[e]||(a[e]=++J);return r+"-"+n.getAttribute("class")+"-"+t;
}function y(e,a,r,i){var o=t.get(r);return o||(o=S(n,e,i),"infinite"===o.animationIterationCount&&(o.animationIterationCount=1)),
t.put(r,o),o}function k(r,o,s,u){var l;if(t.count(s)>0&&(l=e.get(s),!l)){var c=i(o,"-stagger");
a.addClass(r,c),l=S(n,r,u),l.animationDuration=Math.max(l.animationDuration,0),l.transitionDuration=Math.max(l.transitionDuration,0),
a.removeClass(r,c),e.put(s,l)}return l||{}}function j(n){K.push(n),h.waitUntilQuiet(function(){
t.flush(),e.flush();for(var n=l(),a=0;a<K.length;a++)K[a](n);K.length=0})}function N(n,t,e){
var a=y(n,t,e,An),r=a.animationDelay,i=a.transitionDelay;return a.maxDelay=r&&i?Math.max(r,i):r||i,
a.maxDuration=Math.max(a.animationDuration*a.animationIterationCount,a.transitionDuration),
a}var R=f(a),J=0,K=[];return function(n,e){function l(){h()}function f(){h(!0)}function h(t){
if(!(X||Z&&Y)){X=!0,Y=!1,Q.$$skipPreparationClasses||a.removeClass(n,An),a.removeClass(n,Tn),
b(V,!1),D(V,!1),z(cn,function(n){V.style[n[0]]=""}),R(n,Q),v(n,Q),Object.keys(U).length&&z(U,function(n,t){
n?V.style.setProperty(t,n):V.style.removeProperty(t)}),Q.onDone&&Q.onDone(),dn&&dn.length&&n.off(dn.join(" "),J);
var e=n.data(Cn);e&&(u.cancel(e[0].timer),n.removeData(Cn)),_&&_.complete(!t)}}function y(n){
Hn.blockTransition&&D(V,n),Hn.blockKeyframeAnimation&&b(V,!!n)}function S(){return _=new s({
end:l,cancel:f}),j(an),h(),{$$willAnimate:!1,start:function(){return _},end:l}}function J(n){
n.stopPropagation();var t=n.originalEvent||n,e=t.$manualTimeStamp||Date.now(),a=parseFloat(t.elapsedTime.toFixed(Dn));
Math.max(e-ln,0)>=en&&a>=rn&&(Z=!0,h())}function K(){function t(){if(!X){if(y(!1),
z(cn,function(n){var t=n[0],e=n[1];V.style[t]=e}),R(n,Q),a.addClass(n,Tn),Hn.recalculateTimingStyles){
if(wn=V.className+" "+An,xn=C(V,wn),qn=N(V,wn,xn),Ln=qn.maxDelay,tn=Math.max(Ln,0),
rn=qn.maxDuration,0===rn)return void h();Hn.hasTransitions=qn.transitionDuration>0,
Hn.hasAnimations=qn.animationDuration>0}if(Hn.applyAnimationDelay&&(Ln="boolean"!=typeof Q.delay&&x(Q.delay)?parseFloat(Q.delay):Ln,
tn=Math.max(Ln,0),qn.animationDelay=Ln,Bn=T(Ln,!0),cn.push(Bn),V.style[Bn[0]]=Bn[1]),
en=tn*yn,sn=rn*yn,Q.easing){var t,r=Q.easing;Hn.hasTransitions&&(t=F+un,cn.push([t,r]),
V.style[t]=r),Hn.hasAnimations&&(t=E+un,cn.push([t,r]),V.style[t]=r)}qn.transitionDuration&&dn.push(M),
qn.animationDuration&&dn.push(I),ln=Date.now();var i=en+bn*sn,o=ln+i,s=n.data(Cn)||[],l=!0;
if(s.length){var c=s[0];l=o>c.expectedEndTime,l?u.cancel(c.timer):s.push(h)}if(l){
var f=u(e,i,!1);s[0]={timer:f,expectedEndTime:o},s.push(h),n.data(Cn,s)}dn.length&&n.on(dn.join(" "),J),
Q.to&&(Q.cleanupStyles&&P(U,V,Object.keys(Q.to)),p(n,Q))}}function e(){var t=n.data(Cn);
if(t){for(var e=1;e<t.length;e++)t[e]();n.removeData(Cn)}}if(!X){if(!V.parentNode)return void h();
var r=function(n){if(Z)Y&&n&&(Y=!1,h());else if(Y=!n,qn.animationDuration){var t=b(V,Y);
Y?cn.push(t):o(cn,t)}},i=In>0&&(qn.transitionDuration&&0===On.transitionDuration||qn.animationDuration&&0===On.animationDuration)&&Math.max(On.animationDelay,On.transitionDelay);
i?u(t,Math.floor(i*In*yn),!1):t(),nn.resume=function(){r(!0)},nn.pause=function(){
r(!1)}}}var Q=e||{};Q.$$prepared||(Q=m(W(Q)));var U={},V=$(n);if(!V||!V.parentNode||!g.enabled())return S();
var X,Y,Z,_,nn,tn,en,rn,sn,ln,cn=[],mn=n.attr("class"),vn=r(Q),dn=[];if(0===Q.duration||!c.animations&&!c.transitions)return S();
var pn=Q.event&&G(Q.event)?Q.event.join(" "):Q.event,hn=pn&&Q.structural,gn="",$n="";
hn?gn=i(pn,H,!0):pn&&(gn=pn),Q.addClass&&($n+=i(Q.addClass,q)),Q.removeClass&&($n.length&&($n+=" "),
$n+=i(Q.removeClass,L)),Q.applyClassesEarly&&$n.length&&R(n,Q);var An=[gn,$n].join(" ").trim(),wn=mn+" "+An,Tn=i(An,B),Sn=vn.to&&Object.keys(vn.to).length>0,jn=(Q.keyframeStyle||"").length>0;
if(!jn&&!Sn&&!An)return S();var xn,On;if(Q.stagger>0){var Nn=parseFloat(Q.stagger);
On={transitionDelay:Nn,animationDelay:Nn,transitionDuration:0,animationDuration:0
}}else xn=C(V,wn),On=k(V,An,xn,kn);Q.$$skipPreparationClasses||a.addClass(n,An);var Pn;
if(Q.transitionStyle){var Fn=[F,Q.transitionStyle];A(V,Fn),cn.push(Fn)}if(Q.duration>=0){
Pn=V.style[F].length>0;var Mn=O(Q.duration,Pn);A(V,Mn),cn.push(Mn)}if(Q.keyframeStyle){
var En=[E,Q.keyframeStyle];A(V,En),cn.push(En)}var In=On?Q.staggerIndex>=0?Q.staggerIndex:t.count(xn):0,Rn=0===In;
Rn&&!Q.skipBlocking&&D(V,fn);var qn=N(V,wn,xn),Ln=qn.maxDelay;tn=Math.max(Ln,0),rn=qn.maxDuration;
var Hn={};if(Hn.hasTransitions=qn.transitionDuration>0,Hn.hasAnimations=qn.animationDuration>0,
Hn.hasTransitionAll=Hn.hasTransitions&&"all"==qn.transitionProperty,Hn.applyTransitionDuration=Sn&&(Hn.hasTransitions&&!Hn.hasTransitionAll||Hn.hasAnimations&&!Hn.hasTransitions),
Hn.applyAnimationDuration=Q.duration&&Hn.hasAnimations,Hn.applyTransitionDelay=x(Q.delay)&&(Hn.applyTransitionDuration||Hn.hasTransitions),
Hn.applyAnimationDelay=x(Q.delay)&&Hn.hasAnimations,Hn.recalculateTimingStyles=$n.length>0,
(Hn.applyTransitionDuration||Hn.applyAnimationDuration)&&(rn=Q.duration?parseFloat(Q.duration):rn,
Hn.applyTransitionDuration&&(Hn.hasTransitions=!0,qn.transitionDuration=rn,Pn=V.style[F+on].length>0,
cn.push(O(rn,Pn))),Hn.applyAnimationDuration&&(Hn.hasAnimations=!0,qn.animationDuration=rn,
cn.push(w(rn)))),0===rn&&!Hn.recalculateTimingStyles)return S();if(null!=Q.delay){
var Bn;"boolean"!=typeof Q.delay&&(Bn=parseFloat(Q.delay),tn=Math.max(Bn,0)),Hn.applyTransitionDelay&&cn.push(T(Bn)),
Hn.applyAnimationDelay&&cn.push(T(Bn,!0))}return null==Q.duration&&qn.transitionDuration>0&&(Hn.recalculateTimingStyles=Hn.recalculateTimingStyles||Rn),
en=tn*yn,sn=rn*yn,Q.skipBlocking||(Hn.blockTransition=qn.transitionDuration>0,Hn.blockKeyframeAnimation=qn.animationDuration>0&&On.animationDelay>0&&0===On.animationDuration),
Q.from&&(Q.cleanupStyles&&P(U,V,Object.keys(Q.from)),d(n,Q)),Hn.blockTransition||Hn.blockKeyframeAnimation?y(rn):Q.skipBlocking||D(V,!1),
{$$willAnimate:!0,end:l,start:function(){return X?void 0:(nn={end:l,cancel:f,resume:null,
pause:null},_=new s(nn),j(K),_)}}}}]}],Tn=["$$animationProvider",function(n){function t(n){
return n.parentNode&&11===n.parentNode.nodeType}n.drivers.push("$$animateCssDriver");
var e="ng-animate-shim",a="ng-anchor",r="ng-anchor-out",i="ng-anchor-in";this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(n,o,s,u,l,c,m){
function v(n){return n.replace(/\bng-\S+\b/g,"")}function d(n,t){return nn(n)&&(n=n.split(" ")),
nn(t)&&(t=t.split(" ")),n.filter(function(n){return-1===t.indexOf(n)}).join(" ")}
function p(t,o,u){function l(n){var t={},e=$(n).getBoundingClientRect();return z(["width","height","top","left"],function(n){
var a=e[n];switch(n){case"top":a+=C.scrollTop;break;case"left":a+=C.scrollLeft}t[n]=Math.floor(a)+"px";
}),t}function c(){var t=n(h,{addClass:r,delay:!0,from:l(o)});return t.$$willAnimate?t:null;
}function f(n){return n.attr("class")||""}function m(){var t=v(f(u)),e=d(t,g),a=d(g,t),o=n(h,{
to:l(u),addClass:i+" "+e,removeClass:r+" "+a,delay:!0});return o.$$willAnimate?o:null;
}function p(){h.remove(),o.removeClass(e),u.removeClass(e)}var h=en($(o).cloneNode(!0)),g=v(f(h));
o.addClass(e),u.addClass(e),h.addClass(a),D.append(h);var y,b=c();if(!b&&(y=m(),!y))return p();
var A=b||y;return{start:function(){function n(){e&&e.end()}var t,e=A.start();return e.done(function(){
return e=null,!y&&(y=m())?(e=y.start(),e.done(function(){e=null,p(),t.complete()}),
e):(p(),void t.complete())}),t=new s({end:n,cancel:n})}}}function h(n,t,e,a){var r=g(n,an),i=g(t,an),o=[];
return z(a,function(n){var t=n.out,a=n["in"],r=p(e,t,a);r&&o.push(r)}),r||i||0!==o.length?{
start:function(){function n(){z(t,function(n){n.end()})}var t=[];r&&t.push(r.start()),
i&&t.push(i.start()),z(o,function(n){t.push(n.start())});var e=new s({end:n,cancel:n
});return s.all(t,function(n){e.complete(n)}),e}}:void 0}function g(t){var e=t.element,a=t.options||{};
t.structural&&(a.event=t.event,a.structural=!0,a.applyClassesEarly=!0,"leave"===t.event&&(a.onDone=a.domOperation)),
a.preparationClasses&&(a.event=k(a.event,a.preparationClasses));var r=n(e,a);return r.$$willAnimate?r:null;
}if(!l.animations&&!l.transitions)return an;var C=m[0].body,y=$(u),D=en(t(y)||C.contains(y)?y:C);
f(c);return function(n){return n.from&&n.to?h(n.from,n.to,n.classes,n.anchors):g(n);
}}]}],Sn=["$animateProvider",function(n){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(t,e,a){
function r(e){e=G(e)?e:e.split(" ");for(var a=[],r={},i=0;i<e.length;i++){var o=e[i],s=n.$$registeredAnimations[o];
s&&!r[o]&&(a.push(t.get(s)),r[o]=!0)}return a}var i=f(a);return function(n,t,a,o){
function s(){o.domOperation(),i(n,o)}function u(){d=!0,s(),v(n,o)}function l(n,t,a,r,i){
var o;switch(a){case"animate":o=[t,r.from,r.to,i];break;case"setClass":o=[t,g,$,i];
break;case"addClass":o=[t,g,i];break;case"removeClass":o=[t,$,i];break;default:o=[t,i];
}o.push(r);var s=n.apply(n,o);if(s)if(Z(s.start)&&(s=s.start()),s instanceof e)s.done(i);else if(Z(s))return s;
return an}function c(n,t,a,r,i){var o=[];return z(r,function(r){var s=r[i];s&&o.push(function(){
var r,i,o=!1,u=function(n){o||(o=!0,(i||an)(n),r.complete(!n))};return r=new e({end:function(){
u()},cancel:function(){u(!0)}}),i=l(s,n,t,a,function(n){var t=n===!1;u(t)}),r})}),
o}function f(n,t,a,r,i){var o=c(n,t,a,r,i);if(0===o.length){var s,u;"beforeSetClass"===i?(s=c(n,"removeClass",a,r,"beforeRemoveClass"),
u=c(n,"addClass",a,r,"beforeAddClass")):"setClass"===i&&(s=c(n,"removeClass",a,r,"removeClass"),
u=c(n,"addClass",a,r,"addClass")),s&&(o=o.concat(s)),u&&(o=o.concat(u))}if(0!==o.length)return function(n){
var t=[];return o.length&&z(o,function(n){t.push(n())}),t.length?e.all(t,n):n(),function(n){
z(t,function(t){n?t.cancel():t.end()})}}}var d=!1;3===arguments.length&&_(a)&&(o=a,
a=null),o=m(o),a||(a=n.attr("class")||"",o.addClass&&(a+=" "+o.addClass),o.removeClass&&(a+=" "+o.removeClass));
var p,h,g=o.addClass,$=o.removeClass,C=r(a);if(C.length){var y,D;"leave"==t?(D="leave",
y="afterLeave"):(D="before"+t.charAt(0).toUpperCase()+t.substr(1),y=t),"enter"!==t&&"move"!==t&&(p=f(n,t,o,C,D)),
h=f(n,t,o,C,y)}if(p||h){var b;return{$$willAnimate:!0,end:function(){return b?b.end():(u(),
b=new e,b.complete(!0)),b},start:function(){function n(n){u(n),b.complete(n)}function t(t){
d||((a||an)(t),n(t))}if(b)return b;b=new e;var a,r=[];return p&&r.push(function(n){
a=p(n)}),r.length?r.push(function(n){s(),n(!0)}):s(),h&&r.push(function(n){a=h(n);
}),b.setHost({end:function(){t()},cancel:function(){t(!0)}}),e.chain(r,n),b}}}}}];
}],jn=["$$animationProvider",function(n){n.drivers.push("$$animateJsDriver"),this.$get=["$$animateJs","$$AnimateRunner",function(n,t){
function e(t){var e=t.element,a=t.event,r=t.options,i=t.classes;return n(e,a,i,r);
}return function(n){if(n.from&&n.to){var a=e(n.from),r=e(n.to);if(!a&&!r)return;return{
start:function(){function n(){return function(){z(i,function(n){n.end()})}}function e(n){
o.complete(n)}var i=[];a&&i.push(a.start()),r&&i.push(r.start()),t.all(i,e);var o=new t({
end:n(),cancel:n()});return o}}}return e(n)}}]}],xn="data-ng-animate",On="$ngAnimatePin",Nn=["$animateProvider",function(t){
function a(n){if(!n)return null;var t=n.split(d),e=Object.create(null);return z(t,function(n){
e[n]=!0}),e}function r(n,t){if(n&&t){var e=a(t);return n.split(d).some(function(n){
return e[n]})}}function i(n,t,e,a){return p[n].some(function(n){return n(t,e,a)});
}function o(n,t){var e=(n.addClass||"").length>0,a=(n.removeClass||"").length>0;return t?e&&a:e||a;
}var l=1,c=2,d=" ",p=this.rules={skip:[],cancel:[],join:[]};p.join.push(function(n,t,e){
return!t.structural&&o(t)}),p.skip.push(function(n,t,e){return!t.structural&&!o(t);
}),p.skip.push(function(n,t,e){return"leave"==e.event&&t.structural}),p.skip.push(function(n,t,e){
return e.structural&&e.state===c&&!t.structural}),p.cancel.push(function(n,t,e){return e.structural&&t.structural;
}),p.cancel.push(function(n,t,e){return e.state===c&&t.structural}),p.cancel.push(function(n,t,e){
if(e.structural)return!1;var a=t.addClass,i=t.removeClass,o=e.addClass,s=e.removeClass;
return tn(a)&&tn(i)||tn(o)&&tn(s)?!1:r(a,s)||r(i,o)}),this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(a,r,d,p,g,D,b,A,k,w){
function T(){var n=!1;return function(t){n?t():r.$$postDigest(function(){n=!0,t();
})}}function S(n,t){return h(n,t,{})}function j(n,t,e){var a=$(t),r=$(n),i=[],o=J[e];
return o&&z(o,function(n){an.call(n.node,a)?i.push(n.callback):"leave"===e&&an.call(n.node,r)&&i.push(n.callback);
}),i}function x(n,t,e){var a=u(t);return n.filter(function(n){var t=n.node===a&&(!e||n.callback===e);
return!t})}function O(n,t){"close"!==n||t[0].parentNode||rn.off(t)}function N(n,t,e){
function u(t,e,r,i){w(function(){var t=j(g,n,e);t.length?a(function(){z(t,function(t){
t(n,r,i)}),O(r,n)}):O(r,n)}),t.progress(e,r,i)}function f(t){y(n,A),Z(n,A),v(n,A),
A.domOperation(),k.complete(!t)}var d,g,A=W(e);n=s(n),n&&(d=$(n),g=n.parent()),A=m(A);
var k=new b,w=T();if(G(A.addClass)&&(A.addClass=A.addClass.join(" ")),A.addClass&&!nn(A.addClass)&&(A.addClass=null),
G(A.removeClass)&&(A.removeClass=A.removeClass.join(" ")),A.removeClass&&!nn(A.removeClass)&&(A.removeClass=null),
A.from&&!_(A.from)&&(A.from=null),A.to&&!_(A.to)&&(A.to=null),!d)return f(),k;var x=[d.className,A.addClass,A.removeClass].join(" ");
if(!U(x))return f(),k;var N=["enter","move","leave"].indexOf(t)>=0,M=p[0].hidden,R=!H||M||L.get(d),B=!R&&q.get(d)||{},J=!!B.state;
if(R||J&&B.state==l||(R=!E(n,g,t)),R)return M&&u(k,t,"start"),f(),M&&u(k,t,"close"),
k;N&&P(n);var K={structural:N,element:n,event:t,addClass:A.addClass,removeClass:A.removeClass,
close:f,options:A,runner:k};if(J){var Q=i("skip",n,K,B);if(Q)return B.state===c?(f(),
k):(h(n,B,K),B.runner);var V=i("cancel",n,K,B);if(V)if(B.state===c)B.runner.end();else{
if(!B.structural)return h(n,B,K),B.runner;B.close()}else{var X=i("join",n,K,B);if(X){
if(B.state!==c)return C(n,N?t:null,A),t=K.event=B.event,A=h(n,B,K),B.runner;S(n,K);
}}}else S(n,K);var Y=K.structural;if(Y||(Y="animate"===K.event&&Object.keys(K.options.to||{}).length>0||o(K)),
!Y)return f(),F(n),k;var tn=(B.counter||0)+1;return K.counter=tn,I(n,l,K),r.$$postDigest(function(){
var e=q.get(d),a=!e;e=e||{};var r=n.parent()||[],i=r.length>0&&("animate"===e.event||e.structural||o(e));
if(a||e.counter!==tn||!i)return a&&(Z(n,A),v(n,A)),(a||N&&e.event!==t)&&(A.domOperation(),
k.end()),void(i||F(n));t=!e.structural&&o(e,!0)?"setClass":e.event,I(n,c);var s=D(n,t,e.options);
k.setHost(s),u(k,t,"start",{}),s.done(function(e){f(!e);var a=q.get(d);a&&a.counter===tn&&F($(n)),
u(k,t,"close",{})})}),k}function P(n){var t=$(n),e=t.querySelectorAll("["+xn+"]");
z(e,function(n){var t=parseInt(n.getAttribute(xn)),e=q.get(n);if(e)switch(t){case c:
e.runner.end();case l:q.remove(n)}})}function F(n){var t=$(n);t.removeAttribute(xn),
q.remove(t)}function M(n,t){return $(n)===$(t)}function E(n,t,e){var a,r=en(p[0].body),i=M(n,r)||"HTML"===n[0].nodeName,o=M(n,d),s=!1,u=L.get($(n)),l=en.data(n[0],On);
for(l&&(t=l),t=$(t);t&&(o||(o=M(t,d)),t.nodeType===R);){var c=q.get(t)||{};if(!s){
var f=L.get(t);if(f===!0&&u!==!1){u=!0;break}f===!1&&(u=!1),s=c.structural}if(tn(a)||a===!0){
var m=en.data(t,Q);X(m)&&(a=m)}if(s&&a===!1)break;if(i||(i=M(t,r)),i&&o)break;t=o||!(l=en.data(t,On))?t.parentNode:$(l);
}var v=(!s||a)&&u!==!0;return v&&o&&i}function I(n,t,e){e=e||{},e.state=t;var a=$(n);
a.setAttribute(xn,t);var r=q.get(a),i=r?V(r,e):e;q.put(a,i)}var q=new g,L=new g,H=null,B=r.$watch(function(){
return 0===A.totalPendingRequests},function(n){n&&(B(),r.$$postDigest(function(){
r.$$postDigest(function(){null===H&&(H=!0)})}))}),J=Object.create(null),K=t.classNameFilter(),U=K?function(n){
return K.test(n)}:function(){return!0},Z=f(k),an=n.Node.prototype.contains||function(n){
return this===n||!!(16&this.compareDocumentPosition(n))},rn={on:function(n,t,e){var a=u(t);
J[n]=J[n]||[],J[n].push({node:a,callback:e}),en(t).on("$destroy",function(){var r=q.get(a);
r||rn.off(n,t,e)})},off:function(n,t,e){if(1!==arguments.length||nn(arguments[0])){
var a=J[n];a&&(J[n]=1===arguments.length?null:x(a,t,e))}else{t=arguments[0];for(var r in J)J[r]=x(J[r],t);
}},pin:function(n,t){e(Y(n),"element","not an element"),e(Y(t),"parentElement","not an element"),
n.data(On,t)},push:function(n,t,e,a){return e=e||{},e.domOperation=a,N(n,t,e)},enabled:function(n,t){
var e=arguments.length;if(0===e)t=!!H;else{var a=Y(n);if(a){var r=$(n);1===e?t=!L.get(r):L.put(r,!t);
}else t=H=!!n}return t}};return rn}]}],Pn=["$animateProvider",function(n){function t(n,t){
n.data(s,t)}function e(n){n.removeData(s)}function r(n){return n.data(s)}var i="ng-animate-ref",o=this.drivers=[],s="$$animationRunner";
this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(n,s,u,l,c,d){
function p(n){function t(n){if(n.processed)return n;n.processed=!0;var e=n.domNode,a=e.parentNode;
i.put(e,n);for(var o;a;){if(o=i.get(a)){o.processed||(o=t(o));break}a=a.parentNode;
}return(o||r).children.push(n),n}function e(n){var t,e=[],a=[];for(t=0;t<n.children.length;t++)a.push(n.children[t]);
var r=a.length,i=0,o=[];for(t=0;t<a.length;t++){var s=a[t];0>=r&&(r=i,i=0,e.push(o),
o=[]),o.push(s.fn),s.children.forEach(function(n){i++,a.push(n)}),r--}return o.length&&e.push(o),
e}var a,r={children:[]},i=new c;for(a=0;a<n.length;a++){var o=n[a];i.put(o.domNode,n[a]={
domNode:o.domNode,fn:o.fn,children:[]})}for(a=0;a<n.length;a++)t(n[a]);return e(r);
}var h=[],g=f(n);return function(c,f,C){function y(n){var t="["+i+"]",e=n.hasAttribute(i)?[n]:n.querySelectorAll(t),a=[];
return z(e,function(n){var t=n.getAttribute(i);t&&t.length&&a.push(n)}),a}function D(n){
var t=[],e={};z(n,function(n,a){var r=n.element,o=$(r),s=n.event,u=["enter","move"].indexOf(s)>=0,l=n.structural?y(o):[];
if(l.length){var c=u?"to":"from";z(l,function(n){var t=n.getAttribute(i);e[t]=e[t]||{},
e[t][c]={animationID:a,element:en(n)}})}else t.push(n)});var a={},r={};return z(e,function(e,i){
var o=e.from,s=e.to;if(!o||!s){var u=o?o.animationID:s.animationID,l=u.toString();
return void(a[l]||(a[l]=!0,t.push(n[u])))}var c=n[o.animationID],f=n[s.animationID],m=o.animationID.toString();
if(!r[m]){var v=r[m]={structural:!0,beforeStart:function(){c.beforeStart(),f.beforeStart();
},close:function(){c.close(),f.close()},classes:b(c.classes,f.classes),from:c,to:f,
anchors:[]};v.classes.length?t.push(v):(t.push(c),t.push(f))}r[m].anchors.push({out:o.element,
"in":s.element})}),t}function b(n,t){n=n.split(" "),t=t.split(" ");for(var e=[],a=0;a<n.length;a++){
var r=n[a];if("ng-"!==r.substring(0,3))for(var i=0;i<t.length;i++)if(r===t[i]){e.push(r);
break}}return e.join(" ")}function A(n){for(var t=o.length-1;t>=0;t--){var e=o[t],a=u.get(e),r=a(n);
if(r)return r}}function k(){c.addClass(K),N&&n.addClass(c,N),P&&(n.removeClass(c,P),
P=null)}function w(n,t){function e(n){var e=r(n);e&&e.setHost(t)}n.from&&n.to?(e(n.from.element),
e(n.to.element)):e(n.element)}function T(){var n=r(c);!n||"leave"===f&&C.$$domOperationFired||n.end();
}function S(t){c.off("$destroy",T),e(c),g(c,C),v(c,C),C.domOperation(),N&&n.removeClass(c,N),
c.removeClass(K),x.complete(!t)}C=m(C);var j=["enter","move","leave"].indexOf(f)>=0,x=new l({
end:function(){S()},cancel:function(){S(!0)}});if(!o.length)return S(),x;t(c,x);var O=a(c.attr("class"),a(C.addClass,C.removeClass)),N=C.tempClasses;
N&&(O+=" "+N,C.tempClasses=null);var P;return j&&(P="ng-"+f+J,n.addClass(c,P)),h.push({
element:c,classes:O,event:f,structural:j,options:C,beforeStart:k,close:S}),c.on("$destroy",T),
h.length>1?x:(s.$$postDigest(function(){var n=[];z(h,function(t){r(t.element)?n.push(t):t.close();
}),h.length=0;var t=D(n),e=[];z(t,function(n){e.push({domNode:$(n.from?n.from.element:n.element),
fn:function(){n.beforeStart();var t,e=n.close,a=n.anchors?n.from.element||n.to.element:n.element;
if(r(a)){var i=A(n);i&&(t=i.start)}if(t){var o=t();o.done(function(n){e(!n)}),w(n,o);
}else e()}})}),d(p(e))}),x)}}]}],Fn=["$animate","$rootScope",function(n,t){return{
restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(t,e,a,r,i){
var o,s;t.$watchCollection(a.ngAnimateSwap||a["for"],function(a){o&&n.leave(o),s&&(s.$destroy(),
s=null),(a||0===a)&&(s=t.$new(),i(s,function(t){o=t,n.enter(t,null,e)}))})}}}];t.module("ngAnimate",[],function(){
an=t.noop,W=t.copy,V=t.extend,en=t.element,z=t.forEach,G=t.isArray,nn=t.isString,
_=t.isObject,tn=t.isUndefined,X=t.isDefined,Z=t.isFunction,Y=t.isElement}).directive("ngAnimateSwap",Fn).directive("ngAnimateChildren",$n).factory("$$rAFScheduler",gn).provider("$$animateQueue",Nn).provider("$$animation",Pn).provider("$animateCss",wn).provider("$$animateCssDriver",Tn).provider("$$animateJs",Sn).provider("$$animateJsDriver",jn);
}(window,window.angular);