define(["dojo/_base/kernel","dojo/_base/window","dojo/io/script","dojox/io/xhrPlugins","dojox/io/scriptFrame"],function(o,r,i,n,t){
return o.getObject("io.xhrScriptPlugin",!0,dojox),dojox.io.xhrScriptPlugin=function(r,t,e){
n.register("script",function(o,i){return i.sync!==!0&&("GET"==o||e)&&i.url.substring(0,r.length)==r;
},function(r,n,c){var u=function(){return n.callbackParamName=t,o.body()&&(n.frameDoc="frame"+Math.random()),
i.get(n)};return(e?e(u,!0):u)(r,n,c)})},dojox.io.xhrScriptPlugin});