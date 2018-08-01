dojo.provide("dojox.xmpp.xmppSession"),dojo.require("dojox.xmpp.TransportSession"),
dojo.require("dojox.xmpp.RosterService"),dojo.require("dojox.xmpp.PresenceService"),
dojo.require("dojox.xmpp.UserService"),dojo.require("dojox.xmpp.ChatService"),dojo.require("dojox.xmpp.sasl"),
dojox.xmpp.xmpp={STREAM_NS:"http://etherx.jabber.org/streams",CLIENT_NS:"jabber:client",
STANZA_NS:"urn:ietf:params:xml:ns:xmpp-stanzas",SASL_NS:"urn:ietf:params:xml:ns:xmpp-sasl",
BIND_NS:"urn:ietf:params:xml:ns:xmpp-bind",SESSION_NS:"urn:ietf:params:xml:ns:xmpp-session",
BODY_NS:"http://jabber.org/protocol/httpbind",XHTML_BODY_NS:"http://www.w3.org/1999/xhtml",
XHTML_IM_NS:"http://jabber.org/protocol/xhtml-im",INACTIVE:"Inactive",CONNECTED:"Connected",
ACTIVE:"Active",TERMINATE:"Terminate",LOGIN_FAILURE:"LoginFailure",INVALID_ID:-1,
NO_ID:0,error:{BAD_REQUEST:"bad-request",CONFLICT:"conflict",FEATURE_NOT_IMPLEMENTED:"feature-not-implemented",
FORBIDDEN:"forbidden",GONE:"gone",INTERNAL_SERVER_ERROR:"internal-server-error",ITEM_NOT_FOUND:"item-not-found",
ID_MALFORMED:"jid-malformed",NOT_ACCEPTABLE:"not-acceptable",NOT_ALLOWED:"not-allowed",
NOT_AUTHORIZED:"not-authorized",SERVICE_UNAVAILABLE:"service-unavailable",SUBSCRIPTION_REQUIRED:"subscription-required",
UNEXPECTED_REQUEST:"unexpected-request"}},dojox.xmpp.xmppSession=function(e){this.roster=[],
this.chatRegister=[],this._iqId=Math.round(1e9*Math.random()),e&&dojo.isObject(e)&&dojo.mixin(this,e),
this.session=new dojox.xmpp.TransportSession(e),dojo.connect(this.session,"onReady",this,"onTransportReady"),
dojo.connect(this.session,"onTerminate",this,"onTransportTerminate"),dojo.connect(this.session,"onProcessProtocolResponse",this,"processProtocolResponse");
},dojo.extend(dojox.xmpp.xmppSession,{roster:[],chatRegister:[],_iqId:0,open:function(e,t,s){
if(!e)throw new Error("User id cannot be null");this.jid=e,-1==e.indexOf("@")&&(this.jid=this.jid+"@"+this.domain),
t&&(this.password=t),s&&(this.resource=s),this.session.open()},close:function(){this.state=dojox.xmpp.xmpp.TERMINATE,
this.session.close(dojox.xmpp.util.createElement("presence",{type:"unavailable",xmlns:dojox.xmpp.xmpp.CLIENT_NS
},!0))},processProtocolResponse:function(e){var t=e.nodeName,s=t.indexOf(":");switch(s>0&&(t=t.substring(s+1)),
t){case"iq":case"presence":case"message":case"features":this[t+"Handler"](e);break;
default:e.getAttribute("xmlns")==dojox.xmpp.xmpp.SASL_NS&&this.saslHandler(e)}},messageHandler:function(e){
switch(e.getAttribute("type")){case"chat":this.chatHandler(e);break;case"normal":
break;default:this.simpleMessageHandler(e)}},iqHandler:function(e){return"set"==e.getAttribute("type")?void this.iqSetHandler(e):void("get"==e.getAttribute("type"));
},presenceHandler:function(e){switch(e.getAttribute("type")){case"subscribe":this.presenceSubscriptionRequest(e.getAttribute("from"));
break;case"subscribed":case"unsubscribed":break;case"error":this.processXmppError(e);
break;default:this.presenceUpdate(e)}},featuresHandler:function(e){var t=[],s=!1,i=!1;
if(e.hasChildNodes())for(var r=0;r<e.childNodes.length;r++){var o=e.childNodes[r];
switch(o.nodeName){case"mechanisms":for(var n=0;n<o.childNodes.length;n++)t.push(o.childNodes[n].firstChild.nodeValue);
break;case"bind":s=!0;break;case"session":i=!0}}if(this.state==dojox.xmpp.xmpp.CONNECTED)if(this.auth)s&&this.bindResource(i);else for(var r=0;r<t.length;r++)try{
this.auth=dojox.xmpp.sasl.registry.match(t[r],this);break}catch(a){console.warn("No suitable auth mechanism found for: ",t[r]);
}},saslHandler:function(e){return"success"==e.nodeName?void this.auth.onSuccess():"challenge"==e.nodeName?void this.auth.onChallenge(e):void(e.hasChildNodes()&&(this.onLoginFailure(e.firstChild.nodeName),
this.session.setState("Terminate",e.firstChild.nodeName)))},sendRestart:function(){
this.session._sendRestart()},chatHandler:function(e){for(var t={from:e.getAttribute("from"),
to:e.getAttribute("to")},s=null,i=0;i<e.childNodes.length;i++){var r=e.childNodes[i];
if(r.hasChildNodes())switch(r.nodeName){case"thread":t.chatid=r.firstChild.nodeValue;
break;case"body":r.getAttribute("xmlns")&&""!==r.getAttribute("xmlns")||(t.body=r.firstChild.nodeValue);
break;case"subject":t.subject=r.firstChild.nodeValue;break;case"html":r.getAttribute("xmlns")==dojox.xmpp.xmpp.XHTML_IM_NS&&(t.xhtml=r.getElementsByTagName("body")[0]);
break;case"x":}}var o=-1;if(t.chatid)for(var i=0;i<this.chatRegister.length;i++){
var n=this.chatRegister[i];if(n&&n.chatid==t.chatid){o=i;break}}else for(var i=0;i<this.chatRegister.length;i++){
var n=this.chatRegister[i];n&&n.uid==this.getBareJid(t.from)&&(o=i)}if(o>-1&&s){var a=this.chatRegister[o];
a.setState(s),a.firstMessage&&s==dojox.xmpp.chat.ACTIVE_STATE&&(a.useChatState=null!==s?!0:!1,
a.firstMessage=!1)}if(t.body&&""!==t.body||t.xhtml)if(o>-1){var a=this.chatRegister[o];
a.recieveMessage(t)}else{var d=new dojox.xmpp.ChatService;d.uid=this.getBareJid(t.from),
d.chatid=t.chatid,d.firstMessage=!0,s&&s==dojox.xmpp.chat.ACTIVE_STATE||(this.useChatState=!1),
this.registerChatInstance(d,t)}},simpleMessageHandler:function(e){},registerChatInstance:function(e,t){
e.setSession(this),this.chatRegister.push(e),this.onRegisterChatInstance(e,t),e.recieveMessage(t,!0);
},iqSetHandler:function(e){if(e.hasChildNodes()){var t=e.firstChild;switch(t.nodeName){
case"query":"jabber:iq:roster"==t.getAttribute("xmlns")&&(this.rosterSetHandler(t),
this.sendIqResult(e.getAttribute("id"),e.getAttribute("from")))}}},sendIqResult:function(e,t){
var s={id:e,to:t||this.domain,type:"result",from:this.jid+"/"+this.resource};this.dispatchPacket(dojox.xmpp.util.createElement("iq",s,!0));
},rosterSetHandler:function(e){for(var t,s=0;s<e.childNodes.length;s++){var i=e.childNodes[s];
if("item"==i.nodeName){for(var r=!1,o=-1,n=null,a=null,d=0;d<this.roster.length;d++)if(t=this.roster[d],
i.getAttribute("jid")==t.jid){if(r=!0,"remove"==i.getAttribute("subscription")){n={
id:t.jid,name:t.name,groups:[]};for(var p=0;p<t.groups.length;p++)n.groups.push(t.groups[p]);
this.roster.splice(d,1),o=dojox.xmpp.roster.REMOVED}else{a=dojo.clone(t);var h=i.getAttribute("name");
h&&(this.roster[d].name=h),t.groups=[],i.getAttribute("subscription")&&(t.status=i.getAttribute("subscription")),
t.substatus=dojox.xmpp.presence.SUBSCRIPTION_SUBSTATUS_NONE,"subscribe"==i.getAttribute("ask")&&(t.substatus=dojox.xmpp.presence.SUBSCRIPTION_REQUEST_PENDING);
for(var p=0;p<i.childNodes.length;p++){var c=i.childNodes[p];if("group"==c.nodeName&&c.hasChildNodes()){
var u=c.firstChild.nodeValue;t.groups.push(u)}}n=t,o=dojox.xmpp.roster.CHANGED}break;
}switch(r||"remove"==i.getAttribute("subscription")||(t=this.createRosterEntry(i),
n=t,o=dojox.xmpp.roster.ADDED),o){case dojox.xmpp.roster.ADDED:this.onRosterAdded(n);
break;case dojox.xmpp.roster.REMOVED:this.onRosterRemoved(n);break;case dojox.xmpp.roster.CHANGED:
this.onRosterChanged(n,a)}}}},presenceUpdate:function(e){if(e.getAttribute("to")){
var t=this.getBareJid(e.getAttribute("to"));if(t!=this.jid)return}var s=this.getResourceFromJid(e.getAttribute("from")),i={
from:this.getBareJid(e.getAttribute("from")),resource:s,show:dojox.xmpp.presence.STATUS_ONLINE,
priority:5,hasAvatar:!1};"unavailable"==e.getAttribute("type")&&(i.show=dojox.xmpp.presence.STATUS_OFFLINE);
for(var r=0;r<e.childNodes.length;r++){var o=e.childNodes[r];if(o.hasChildNodes())switch(o.nodeName){
case"status":case"show":i[o.nodeName]=o.firstChild.nodeValue;break;case"priority":
i.priority=parseInt(o.firstChild.nodeValue,10);break;case"x":o.firstChild&&o.firstChild.firstChild&&""!==o.firstChild.firstChild.nodeValue&&(i.avatarHash=o.firstChild.firstChild.nodeValue,
i.hasAvatar=!0)}}this.onPresenceUpdate(i)},retrieveRoster:function(){var e={id:this.getNextIqId(),
from:this.jid+"/"+this.resource,type:"get"},t=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",e,!1));
t.append(dojox.xmpp.util.createElement("query",{xmlns:"jabber:iq:roster"},!0)),t.append("</iq>");
var s=this.dispatchPacket(t,"iq",e.id);s.addCallback(this,"onRetrieveRoster")},getRosterIndex:function(e){
-1==e.indexOf("@")&&(e+="@"+this.domain);for(var t=0;t<this.roster.length;t++)if(e==this.roster[t].jid)return t;
return-1},createRosterEntry:function(e){var t={name:e.getAttribute("name"),jid:e.getAttribute("jid"),
groups:[],status:dojox.xmpp.presence.SUBSCRIPTION_NONE,substatus:dojox.xmpp.presence.SUBSCRIPTION_SUBSTATUS_NONE
};t.name||(t.name=t.id);for(var s=0;s<e.childNodes.length;s++){var i=e.childNodes[s];
"group"==i.nodeName&&i.hasChildNodes()&&t.groups.push(i.firstChild.nodeValue)}return e.getAttribute("subscription")&&(t.status=e.getAttribute("subscription")),
"subscribe"==e.getAttribute("ask")&&(t.substatus=dojox.xmpp.presence.SUBSCRIPTION_REQUEST_PENDING),
t},bindResource:function(e){var t={id:this.getNextIqId(),type:"set"},s=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",t,!1));
s.append(dojox.xmpp.util.createElement("bind",{xmlns:dojox.xmpp.xmpp.BIND_NS},!1)),
this.resource&&(s.append(dojox.xmpp.util.createElement("resource")),s.append(this.resource),
s.append("</resource>")),s.append("</bind></iq>");var i=this.dispatchPacket(s,"iq",t.id);
i.addCallback(this,function(t){return this.onBindResource(t,e),t})},getNextIqId:function(){
return"im_"+this._iqId++},presenceSubscriptionRequest:function(e){this.onSubscriptionRequest(e);
},dispatchPacket:function(e,t,s){return"Terminate"!=this.state?this.session.dispatchPacket(e,t,s):void 0;
},setState:function(e,t){this.state!=e&&(this["on"+e]&&this["on"+e](e,this.state,t),
this.state=e)},search:function(e,t,s){var i={id:this.getNextIqId(),"xml:lang":this.lang,
type:"set",from:this.jid+"/"+this.resource,to:t},r=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",i,!1));
r.append(dojox.xmpp.util.createElement("query",{xmlns:"jabber:iq:search"},!1)),r.append(dojox.xmpp.util.createElement(s,{},!1)),
r.append(e),r.append("</").append(s).append(">"),r.append("</query></iq>");var o=this.dispatchPacket(r.toString,"iq",i.id);
o.addCallback(this,"_onSearchResults")},_onSearchResults:function(e){"result"==e.getAttribute("type")&&e.hasChildNodes()&&this.onSearchResults([]);
},onLogin:function(){this.retrieveRoster()},onLoginFailure:function(e){},onBindResource:function(e,t){
if("result"==e.getAttribute("type")){if(e.hasChildNodes()&&"bind"==e.firstChild.nodeName){
var s=e.firstChild;if(s.hasChildNodes()&&"jid"==s.firstChild.nodeName&&s.firstChild.hasChildNodes()){
var i=s.firstChild.firstChild.nodeValue;this.jid=this.getBareJid(i),this.resource=this.getResourceFromJid(i);
}if(t){var r={id:this.getNextIqId(),type:"set"},o=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",r,!1));
o.append(dojox.xmpp.util.createElement("session",{xmlns:dojox.xmpp.xmpp.SESSION_NS
},!0)),o.append("</iq>");var n=this.dispatchPacket(o,"iq",r.id);return void n.addCallback(this,"onBindSession");
}}this.onLogin()}else if("error"==e.getAttribute("type")){var a=this.processXmppError(e);
this.onLoginFailure(a)}},onBindSession:function(e){if("error"==e.getAttribute("type")){
var t=this.processXmppError(e);this.onLoginFailure(t)}else this.onLogin()},onSearchResults:function(e){},
onRetrieveRoster:function(e){if("result"==e.getAttribute("type")&&e.hasChildNodes()){
var t=e.getElementsByTagName("query")[0];if("jabber:iq:roster"==t.getAttribute("xmlns"))for(var s=0;s<t.childNodes.length;s++)"item"==t.childNodes[s].nodeName&&(this.roster[s]=this.createRosterEntry(t.childNodes[s]));
}else"error"==e.getAttribute("type");return this.setState(dojox.xmpp.xmpp.ACTIVE),
this.onRosterUpdated(),e},onRosterUpdated:function(){},onSubscriptionRequest:function(e){},
onPresenceUpdate:function(e){},onTransportReady:function(){this.setState(dojox.xmpp.xmpp.CONNECTED),
this.rosterService=new dojox.xmpp.RosterService(this),this.presenceService=new dojox.xmpp.PresenceService(this),
this.userService=new dojox.xmpp.UserService(this)},onTransportTerminate:function(e,t,s){
this.setState(dojox.xmpp.xmpp.TERMINATE,s)},onConnected:function(){},onTerminate:function(e,t,s){},
onActive:function(){},onRegisterChatInstance:function(e,t){},onRosterAdded:function(e){},
onRosterRemoved:function(e){},onRosterChanged:function(e,t){},processXmppError:function(e){
for(var t={stanzaType:e.nodeName,id:e.getAttribute("id")},s=0;s<e.childNodes.length;s++){
var i=e.childNodes[s];switch(i.nodeName){case"error":t.errorType=i.getAttribute("type");
for(var r=0;r<i.childNodes.length;r++){var o=i.childNodes[r];"text"==o.nodeName&&o.getAttribute("xmlns")==dojox.xmpp.xmpp.STANZA_NS&&o.hasChildNodes()?t.message=o.firstChild.nodeValue:o.getAttribute("xmlns")!=dojox.xmpp.xmpp.STANZA_NS||o.hasChildNodes()||(t.condition=o.nodeName);
}}}return t},sendStanzaError:function(e,t,s,i,r,o){var n={type:"error"};t&&(n.to=t),
s&&(n.id=s);var a=new dojox.string.Builder(dojox.xmpp.util.createElement(e,n,!1));
if(a.append(dojox.xmpp.util.createElement("error",{type:i},!1)),a.append(dojox.xmpp.util.createElement("condition",{
xmlns:dojox.xmpp.xmpp.STANZA_NS},!0)),o){var d={xmlns:dojox.xmpp.xmpp.STANZA_NS,"xml:lang":this.lang
};a.append(dojox.xmpp.util.createElement("text",d,!1)),a.append(o).append("</text>");
}a.append("</error></").append(e).append(">"),this.dispatchPacket(a.toString())},
getBareJid:function(e){var t=e.indexOf("/");return-1!=t?e.substring(0,t):e},getResourceFromJid:function(e){
var t=e.indexOf("/");return-1!=t?e.substring(t+1,e.length):""}});