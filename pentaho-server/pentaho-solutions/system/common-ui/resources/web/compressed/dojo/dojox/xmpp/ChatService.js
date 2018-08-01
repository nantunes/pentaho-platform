dojo.provide("dojox.xmpp.ChatService"),dojox.xmpp.chat={CHAT_STATE_NS:"http://jabber.org/protocol/chatstates",
ACTIVE_STATE:"active",COMPOSING_STATE:"composing",INACTIVE_STATE:"inactive",PAUSED_STATE:"paused",
GONE_STATE:"gone"},dojo.declare("dojox.xmpp.ChatService",null,{state:"",constructor:function(){
this.state="",this.chatid=Math.round(1e15*Math.random())},recieveMessage:function(e,t){
e&&!t&&this.onNewMessage(e)},setSession:function(e){this.session=e},setState:function(e){
this.state!=e&&(this.state=e)},invite:function(e){if(!this.uid){if(!e||""==e)throw new Error("ChatService::invite() contact is NULL");
this.uid=e;var t={xmlns:"jabber:client",to:this.uid,from:this.session.jid+"/"+this.session.resource,
type:"chat"},s=new dojox.string.Builder(dojox.xmpp.util.createElement("message",t,!1));
s.append(dojox.xmpp.util.createElement("thread",{},!1)),s.append(this.chatid),s.append("</thread>"),
s.append(dojox.xmpp.util.createElement("active",{xmlns:dojox.xmpp.chat.CHAT_STATE_NS
},!0)),s.append("</message>"),this.session.dispatchPacket(s.toString()),this.onInvite(e),
this.setState(dojox.xmpp.chat.CHAT_STATE_NS)}},sendMessage:function(e){if(this.uid&&(e.body&&""!=e.body||e.xhtml)){
var t={xmlns:"jabber:client",to:this.uid,from:this.session.jid+"/"+this.session.resource,
type:"chat"},s=new dojox.string.Builder(dojox.xmpp.util.createElement("message",t,!1)),i=dojox.xmpp.util.createElement("html",{
xmlns:dojox.xmpp.xmpp.XHTML_IM_NS},!1),o=dojox.xmpp.util.createElement("body",{"xml:lang":this.session.lang,
xmlns:dojox.xmpp.xmpp.XHTML_BODY_NS},!1)+e.body+"</body>",a=dojox.xmpp.util.createElement("body",{},!1)+dojox.xmpp.util.stripHtml(e.body)+"</body>";
s.subject&&""!=s.subject&&(s.append(dojox.xmpp.util.createElement("subject",{},!1)),
s.append(s.subject),s.append("</subject>")),s.append(a),s.append(i),s.append(o),s.append("</html>"),
s.append(dojox.xmpp.util.createElement("thread",{},!1)),s.append(this.chatid),s.append("</thread>"),
this.useChatStates&&s.append(dojox.xmpp.util.createElement("active",{xmlns:dojox.xmpp.chat.CHAT_STATE_NS
},!0)),s.append("</message>"),this.session.dispatchPacket(s.toString())}},sendChatState:function(e){
if(this.useChatState&&!this.firstMessage&&e!=this._currentState){var t={xmlns:"jabber:client",
to:this.uid,from:this.session.jid+"/"+this.session.resource,type:"chat"},s=new dojox.string.Builder(dojox.xmpp.util.createElement("message",t,!1));
s.append(dojox.xmpp.util.createElement(e,{xmlns:dojox.xmpp.chat.CHAT_STATE_NS},!0)),
this._currentState=e,s.append("<thread>"),s.append(this.chatid),s.append("</thread></message>"),
this.session.dispatchPacket(s.toString())}},onNewMessage:function(e){},onInvite:function(e){}
});