dojo.provide("dojox.socket.Reconnect"),dojox.socket.Reconnect=function(e,o){o=o||{};
var n,c,t=o.reconnectTime||1e4;dojo.connect(e,"onclose",function(o){clearTimeout(n),
o.wasClean||e.disconnected(function(){dojox.socket.replace(e,c=e.reconnect())})});
return e.disconnected||(e.disconnected=function(e){setTimeout(function(){e(),n=setTimeout(function(){
c.readyState<2&&(t=o.reconnectTime||1e4)},1e4)},t),t*=o.backoffRate||2}),e.reconnect||(e.reconnect=function(){
return e.args?dojox.socket.LongPoll(e.args):dojox.socket.WebSocket({url:e.URL||e.url
})}),e};