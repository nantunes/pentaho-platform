define(["dojo/_base/lang","dojo/_base/fx","dojo/dom-style"],function(n,t,e){function o(n,t,e,o){
var r=[0,t,0,0];return n==a?r=[0,t,e,t]:n==c?r=[e,t,e,0]:n==d&&(r=[0,0,e,0]),null!=o&&(r[n]=n==u||n==d?o:(n%2?t:e)-o),
r}function r(n,t,r,i,u){e.set(n,"clip",null==t?"auto":"rect("+o(t,r,i,u).join("px,")+"px)");
}function i(o,i){var u=i.next.node,a=i.rotatorBox.w,c=i.rotatorBox.h;return e.set(u,{
display:"",zIndex:(e.get(i.current.node,"zIndex")||1)+1}),r(u,o,a,c),new t.Animation(n.mixin({
node:u,curve:[0,o%2?a:c],onAnimate:function(n){r(u,o,a,c,parseInt(n))}},i))}var u=2,a=3,c=0,d=1,f={
wipeDown:function(n){return i(u,n)},wipeRight:function(n){return i(a,n)},wipeUp:function(n){
return i(c,n)},wipeLeft:function(n){return i(d,n)}};return n.mixin(n.getObject("dojox.widget.rotator"),f),
f});