define("dojox/socket",["dojo","dojo/on","dojo/Evented","dojo/cookie","dojo/_base/url"],function(e,o,t){
function n(e){return"string"==typeof e&&(e={url:e}),r?dojox.socket.WebSocket(e,!0):dojox.socket.LongPoll(e);
}var r=window.WebSocket;return dojox.socket=n,n.WebSocket=function(o,t){var a=new r(new e._Url(document.baseURI.replace(/^http/i,"ws"),o.url));
a.on=function(e,o){a.addEventListener(e,o,!0)};var c;return e.connect(a,"onopen",function(e){
c=!0}),e.connect(a,"onclose",function(e){c||t&&n.replace(a,dojox.socket.LongPoll(o),!0);
}),a},n.replace=function(t,n,r){function a(e){(n.addEventListener||n.on).call(n,e,function(e){
o.emit(t,e.type,e)},!0)}t.send=e.hitch(n,"send"),t.close=e.hitch(n,"close"),r&&a("open"),
e.forEach(["message","close","error"],a)},n.LongPoll=function(n){function r(){0==d.readyState&&a("open",{}),
l.length||d.send()}function a(e,t,n){d["on"+e]&&(t.ioArgs=n&&n.ioArgs,t.type=e,o.emit(d,e,t));
}var c,s=!1,i=!0,l=[],d={send:function(o){var t=e.delegate(n);t.rawBody=o,clearTimeout(c);
var u=i?(i=!1)||d.firstRequest(t):d.transport(t);return l.push(u),u.then(function(o){
d.readyState=1,l.splice(e.indexOf(l,u),1),l.length||(c=setTimeout(r,n.interval)),
o&&a("message",{data:o},u)},function(o){l.splice(e.indexOf(l,u),1),s||(a("error",{
error:o},u),l.length||(d.readyState=3,a("close",{wasClean:!1},u)))}),u},close:function(){
d.readyState=2,s=!0;for(var e=0;e<l.length;e++)l[e].cancel();d.readyState=3,a("close",{
wasClean:!0})},transport:n.transport||e.xhrPost,args:n,url:n.url,readyState:0,CONNECTING:0,
OPEN:1,CLOSING:2,CLOSED:3,on:t.prototype.on,firstRequest:function(e){var o=e.headers||(e.headers={});
o.Pragma="start-long-poll";try{return this.transport(e)}finally{delete o.Pragma}}
};return d.connect=d.on,setTimeout(r),d},n});