define(["dojo/_base/Deferred","dojo/_base/config"],function(e,n){if(n.mblCSS3Transition){
var r=new e;return require([n.mblCSS3Transition],function(e){r.resolve(e)}),r}return null;
});