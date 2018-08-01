dojo.provide("dojox.lang.async"),function(){var n=dojo,a=n.Deferred,c=n.forEach,r=n.some,t=dojox.lang.async,e=Array.prototype.slice,o=Object.prototype.toString;
t.seq=function(n){var r="[object Array]"==o.call(n)?n:arguments;return function(n){
var t=new a;return c(r,function(n){t.addCallback(n)}),t.callback(n),t}},t.par=function(n){
var t="[object Array]"==o.call(n)?n:arguments;return function(n){var e=new Array(t.length),o=function(){
c(e,function(n){n instanceof a&&n.fired<0&&n.cancel()})},l=new a(o),u=t.length;c(t,function(a,c){
var r;try{r=a(n)}catch(t){r=t}e[c]=r});var f=r(e,function(n){return n instanceof Error?(o(),
l.errback(n),!0):!1});return f||c(e,function(n,c){n instanceof a?n.addCallbacks(function(n){
e[c]=n,--u||l.callback(e)},function(n){o(),l.errback(n)}):--u}),u||l.callback(e),
l}},t.any=function(n){var t="[object Array]"==o.call(n)?n:arguments;return function(e){
var o=new Array(t.length),l=!0;cancel=function(n){c(o,function(c,r){r!=n&&c instanceof a&&c.fired<0&&c.cancel();
})},n=new a(cancel),c(t,function(n,a){var c;try{c=n(e)}catch(r){c=r}o[a]=c});var u=r(o,function(c,r){
return c instanceof a?!1:(cancel(r),n.callback(c),!0)});return u||c(o,function(a,c){
a.addBoth(function(a){l&&(l=!1,cancel(c),n.callback(a))})}),n}},t.select=function(n,c){
var r="[object Array]"==o.call(c)?c:e.call(arguments,1);return function(c){return(new a).addCallback(n).addCallback(function(n){
return"number"==typeof n&&n>=0&&n<r.length?r[n](c):new Error("async.select: out of range");
}).callback(c)}},t.ifThen=function(n,c,r){return function(t){return(new a).addCallback(n).addCallback(function(n){
return(n?c:r)(t)}).callback(t)}},t.loop=function(n,c){return function(r){function t(n){
u.errback(n)}function e(n){return n?l.addCallback(c).addCallback(o):u.callback(n),
n}function o(c){l=(new a).addCallback(n).addCallback(e).addErrback(t),l.callback(c);
}var l,u=new a(function(){l.cancel()});return o(r),u}}}();