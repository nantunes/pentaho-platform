dojo.provide("dojox.xmpp.TransportSession"),dojo.require("dojox.xmpp.bosh"),dojo.require("dojox.xmpp.util"),
dojo.require("dojox.data.dom"),dojox.xmpp.TransportSession=function(t){this.sendTimeout=1e3*(this.wait+20),
t&&dojo.isObject(t)&&(dojo.mixin(this,t),this.useScriptSrcTransport&&(this.transportIframes=[]));
},dojo.extend(dojox.xmpp.TransportSession,{rid:0,hold:1,polling:1e3,secure:!1,wait:60,
lang:"en",submitContentType:"text/xml; charset=utf=8",serviceUrl:"/httpbind",defaultResource:"dojoIm",
domain:"imserver.com",sendTimeout:0,useScriptSrcTransport:!1,keepAliveTimer:null,
state:"NotReady",transmitState:"Idle",protocolPacketQueue:[],outboundQueue:[],outboundRequests:{},
inboundQueue:[],deferredRequests:{},matchTypeIdAttribute:{},open:function(){this.status="notReady",
this.rid=Math.round(1e9*Math.random()),this.protocolPacketQueue=[],this.outboundQueue=[],
this.outboundRequests={},this.inboundQueue=[],this.deferredRequests={},this.matchTypeIdAttribute={},
this.keepAliveTimer=setTimeout(dojo.hitch(this,"_keepAlive"),1e4),this.useScriptSrcTransport?dojox.xmpp.bosh.initialize({
iframes:this.hold+1,load:dojo.hitch(this,function(){this._sendLogin()})}):this._sendLogin();
},_sendLogin:function(){var t=this.rid++,e={content:this.submitContentType,hold:this.hold,
rid:t,to:this.domain,secure:this.secure,wait:this.wait,"xml:lang":this.lang,"xmpp:version":"1.0",
xmlns:dojox.xmpp.xmpp.BODY_NS,"xmlns:xmpp":"urn:xmpp:xbosh"},i=dojox.xmpp.util.createElement("body",e,!0);
this.addToOutboundQueue(i,t)},_sendRestart:function(){var t=this.rid++,e={rid:t,sid:this.sid,
to:this.domain,"xmpp:restart":"true","xml:lang":this.lang,xmlns:dojox.xmpp.xmpp.BODY_NS,
"xmlns:xmpp":"urn:xmpp:xbosh"},i=dojox.xmpp.util.createElement("body",e,!0);this.addToOutboundQueue(i,t);
},processScriptSrc:function(t,e){var i=dojox.xml.parser.parse(t,"text/xml");i&&this.processDocument(i,e);
},_keepAlive:function(){"wait"==this.state||this.isTerminated()||(this._dispatchPacket(),
this.keepAliveTimer=setTimeout(dojo.hitch(this,"_keepAlive"),1e4))},close:function(t){
var e=this.rid++,i={sid:this.sid,rid:e,type:"terminate"},o=null;t?(o=new dojox.string.Builder(dojox.xmpp.util.createElement("body",i,!1)),
o.append(t),o.append("</body>")):o=new dojox.string.Builder(dojox.xmpp.util.createElement("body",i,!1)),
this.addToOutboundQueue(o.toString(),e),"Terminate"==this.state},dispatchPacket:function(t,e,i,o){
t&&this.protocolPacketQueue.push(t);var s=new dojo.Deferred;return e&&i&&(s.protocolMatchType=e,
s.matchId=i,s.matchProperty=o||"id","id"!=s.matchProperty&&(this.matchTypeIdAttribute[e]=s.matchProperty)),
this.deferredRequests[s.protocolMatchType+"-"+s.matchId]=s,this.dispatchTimer||(this.dispatchTimer=setTimeout(dojo.hitch(this,"_dispatchPacket"),600)),
s},_dispatchPacket:function(){if(clearTimeout(this.dispatchTimer),delete this.dispatchTimer,
!this.sid)return void console.debug("TransportSession::dispatchPacket() No SID, packet dropped.");
if(!this.authId)return void console.debug("TransportSession::dispatchPacket() No authId, packet dropped [FIXME]");
if(!("error"!=this.transmitState&&0==this.protocolPacketQueue.length&&this.outboundQueue.length>0||"wait"==this.state||this.isTerminated())){
var t,e={sid:this.sid,xmlns:dojox.xmpp.xmpp.BODY_NS};if(this.protocolPacketQueue.length>0)e.rid=this.rid++,
t=new dojox.string.Builder(dojox.xmpp.util.createElement("body",e,!1)),t.append(this.processProtocolPacketQueue()),
t.append("</body>"),delete this.lastPollTime;else{if(this.lastPollTime){var i=(new Date).getTime();
if(i-this.lastPollTime<this.polling)return void(this.dispatchTimer=setTimeout(dojo.hitch(this,"_dispatchPacket"),this.polling-(i-this.lastPollTime)+10));
}e.rid=this.rid++,this.lastPollTime=(new Date).getTime(),t=new dojox.string.Builder(dojox.xmpp.util.createElement("body",e,!0));
}this.addToOutboundQueue(t.toString(),e.rid)}},redispatchPacket:function(t){var e=this.outboundRequests[t];
this.sendXml(e,t)},addToOutboundQueue:function(t,e){this.outboundQueue.push({msg:t,
rid:e}),this.outboundRequests[e]=t,this.sendXml(t,e)},removeFromOutboundQueue:function(t){
for(var e=0;e<this.outboundQueue.length;e++)if(t==this.outboundQueue[e].rid){this.outboundQueue.splice(e,1);
break}delete this.outboundRequests[t]},processProtocolPacketQueue:function(){for(var t=new dojox.string.Builder,e=0;e<this.protocolPacketQueue.length;e++)t.append(this.protocolPacketQueue[e]);
return this.protocolPacketQueue=[],t.toString()},sendXml:function(t,e){if(this.isTerminated())return!1;
this.transmitState="transmitting";var i=null;return i=this.useScriptSrcTransport?dojox.xmpp.bosh.get({
rid:e,url:this.serviceUrl+"?"+encodeURIComponent(t),error:dojo.hitch(this,function(t,e){
return this.setState("Terminate","error"),!1}),timeout:this.sendTimeout}):dojo.rawXhrPost({
contentType:"text/xml",url:this.serviceUrl,postData:t,handleAs:"xml",error:dojo.hitch(this,function(t,i){
return this.processError(i.xhr.responseXML,i.xhr.status,e)}),timeout:this.sendTimeout
}),i.addCallback(this,function(t){return this.processDocument(t,e)}),i},processDocument:function(t,e){
if(this.isTerminated()||!t.firstChild)return!1;this.transmitState="idle";var i=t.firstChild;
if("body"!=i.nodeName,this.outboundQueue.length<1)return!1;var o=this.outboundQueue[0].rid;
if(e==o)this.removeFromOutboundQueue(e),this.processResponse(i,e),this.processInboundQueue();else{
var s=e-o;s<this.hold+2&&this.addToInboundQueue(t,e)}return t},processInboundQueue:function(){
for(;this.inboundQueue.length>0;){var t=this.inboundQueue.shift();this.processDocument(t.doc,t.rid);
}},addToInboundQueue:function(t,e){for(var i=0;i<this.inboundQueue.length;i++)e<this.inboundQueue[i].rid||this.inboundQueue.splice(i,0,{
doc:t,rid:e})},processResponse:function(t,e){if("terminate"==t.getAttribute("type")){
var i=t.firstChild.firstChild,o="";return"conflict"==i.nodeName&&(o="conflict"),void this.setState("Terminate",o);
}if("Ready"!=this.state&&"Terminate"!=this.state){var s=t.getAttribute("sid");if(!s)throw new Error("No sid returned during xmpp session startup");
this.sid=s,this.authId=t.getAttribute("authid"),""==this.authId&&this.authRetries--<1&&(console.error("Unable to obtain Authorization ID"),
this.terminateSession()),this.wait=t.getAttribute("wait"),t.getAttribute("polling")&&(this.polling=1e3*parseInt(t.getAttribute("polling"))),
this.inactivity=t.getAttribute("inactivity"),this.setState("Ready")}dojo.forEach(t.childNodes,function(t){
this.processProtocolResponse(t,e)},this),"idle"==this.transmitState&&this.dispatchPacket();
},processProtocolResponse:function(t,e){this.onProcessProtocolResponse(t);var i=t.nodeName+"-"+t.getAttribute("id"),o=this.deferredRequests[i];
o&&(o.callback(t),delete this.deferredRequests[i])},setState:function(t,e){this.state!=t&&(this["on"+t]&&this["on"+t](t,this.state,e),
this.state=t)},isTerminated:function(){return"Terminate"==this.state},processError:function(t,e,i){
if(this.isTerminated())return!1;if(200!=e)return e>=400&&500>e?(this.setState("Terminate",s),
!1):(this.removeFromOutboundQueue(i),setTimeout(dojo.hitch(this,function(){this.dispatchPacket();
}),200),!0);if(t&&t.dojoType&&"timeout"==t.dojoType,this.removeFromOutboundQueue(i),
t&&t.firstChild&&"terminate"==t.firstChild.getAttribute("type")){var o=t.firstChild.firstChild,s="";
return o&&"conflict"==o.nodeName&&(s="conflict"),this.setState("Terminate",s),!1}
return this.transmitState="error",setTimeout(dojo.hitch(this,function(){this.dispatchPacket();
}),200),!0},onTerminate:function(t,e,i){},onProcessProtocolResponse:function(t){},
onReady:function(t,e){}});