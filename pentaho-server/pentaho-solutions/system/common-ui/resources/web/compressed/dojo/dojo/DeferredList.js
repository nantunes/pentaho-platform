define(["./_base/kernel","./_base/Deferred","./_base/array"],function(e,r,t){return e.DeferredList=function(e,n,f,i,o){
var a=[];r.call(this);var s=this;0!==e.length||n||this.resolve([0,[]]);var u=0;t.forEach(e,function(r,t){
function o(r,n){a[t]=[r,n],u++,u===e.length&&s.resolve(a)}r.then(function(e){n?s.resolve([t,e]):o(!0,e);
},function(e){if(f?s.reject(e):o(!1,e),i)return null;throw e})})},e.DeferredList.prototype=new r,
e.DeferredList.prototype.gatherResults=function(r){var n=new e.DeferredList(r,!1,!0,!1);
return n.addCallback(function(e){var r=[];return t.forEach(e,function(e){r.push(e[1]);
}),r}),n},e.DeferredList});