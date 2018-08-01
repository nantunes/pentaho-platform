dojo.provide("dojox.xmpp.PresenceService"),dojox.xmpp.presence={UPDATE:201,SUBSCRIPTION_REQUEST:202,
SUBSCRIPTION_SUBSTATUS_NONE:204,SUBSCRIPTION_NONE:"none",SUBSCRIPTION_FROM:"from",
SUBSCRIPTION_TO:"to",SUBSCRIPTION_BOTH:"both",SUBSCRIPTION_REQUEST_PENDING:"pending",
STATUS_ONLINE:"online",STATUS_AWAY:"away",STATUS_CHAT:"chat",STATUS_DND:"dnd",STATUS_EXTENDED_AWAY:"xa",
STATUS_OFFLINE:"offline",STATUS_INVISIBLE:"invisible"},dojo.declare("dojox.xmpp.PresenceService",null,{
constructor:function(e){this.session=e,this.isInvisible=!1,this.avatarHash=null,this.presence=null,
this.restrictedContactjids={}},publish:function(e){this.presence=e,this._setPresence();
},sendAvatarHash:function(e){this.avatarHash=e,this._setPresence()},_setPresence:function(){
var e=this.presence,t={xmlns:"jabber:client"};if(e&&e.to&&(t.to=e.to),e.show&&e.show==dojox.xmpp.presence.STATUS_OFFLINE&&(t.type="unavailable"),
e.show&&e.show==dojox.xmpp.presence.STATUS_INVISIBLE)return this._setInvisible(),
void(this.isInvisible=!0);this.isInvisible&&this._setVisible();var i=new dojox.string.Builder(dojox.xmpp.util.createElement("presence",t,!1));
e.show&&e.show!=dojox.xmpp.presence.STATUS_OFFLINE&&(i.append(dojox.xmpp.util.createElement("show",{},!1)),
i.append(e.show),i.append("</show>")),e.status&&(i.append(dojox.xmpp.util.createElement("status",{},!1)),
i.append(e.status),i.append("</status>")),this.avatarHash&&(i.append(dojox.xmpp.util.createElement("x",{
xmlns:"vcard-temp:x:update"},!1)),i.append(dojox.xmpp.util.createElement("photo",{},!1)),
i.append(this.avatarHash),i.append("</photo>"),i.append("</x>")),e.priority&&e.show!=dojox.xmpp.presence.STATUS_OFFLINE&&((e.priority>127||e.priority<-128)&&(e.priority=5),
i.append(dojox.xmpp.util.createElement("priority",{},!1)),i.append(e.priority),i.append("</priority>")),
i.append("</presence>"),this.session.dispatchPacket(i.toString())},toggleBlockContact:function(e){
return this.restrictedContactjids[e]||(this.restrictedContactjids[e]=this._createRestrictedJid()),
this.restrictedContactjids[e].blocked=!this.restrictedContactjids[e].blocked,this._updateRestricted(),
this.restrictedContactjids},toggleContactInvisiblity:function(e){return this.restrictedContactjids[e]||(this.restrictedContactjids[e]=this._createRestrictedJid()),
this.restrictedContactjids[e].invisible=!this.restrictedContactjids[e].invisible,
this._updateRestricted(),this.restrictedContactjids},_createRestrictedJid:function(){
return{invisible:!1,blocked:!1}},_updateRestricted:function(){var e={id:this.session.getNextIqId(),
from:this.session.jid+"/"+this.session.resource,type:"set"},t=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",e,!1));
t.append(dojox.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1)),t.append(dojox.xmpp.util.createElement("list",{
name:"iwcRestrictedContacts"},!1));var i=1;for(var s in this.restrictedContactjids){
var n=this.restrictedContactjids[s];n.blocked||n.invisible?(t.append(dojox.xmpp.util.createElement("item",{
value:dojox.xmpp.util.encodeJid(s),action:"deny",order:i++},!1)),n.blocked&&t.append(dojox.xmpp.util.createElement("message",{},!0)),
n.invisible&&t.append(dojox.xmpp.util.createElement("presence-out",{},!0)),t.append("</item>")):delete this.restrictedContactjids[s];
}t.append("</list>"),t.append("</query>"),t.append("</iq>");var o=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",e,!1));
o.append(dojox.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1)),o.append(dojox.xmpp.util.createElement("active",{
name:"iwcRestrictedContacts"},!0)),o.append("</query>"),o.append("</iq>"),this.session.dispatchPacket(t.toString()),
this.session.dispatchPacket(o.toString())},_setVisible:function(){var e={id:this.session.getNextIqId(),
from:this.session.jid+"/"+this.session.resource,type:"set"},t=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",e,!1));
t.append(dojox.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1)),t.append(dojox.xmpp.util.createElement("active",{},!0)),
t.append("</query>"),t.append("</iq>"),this.session.dispatchPacket(t.toString())},
_setInvisible:function(){var e={id:this.session.getNextIqId(),from:this.session.jid+"/"+this.session.resource,
type:"set"},t=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",e,!1));t.append(dojox.xmpp.util.createElement("query",{
xmlns:"jabber:iq:privacy"},!1)),t.append(dojox.xmpp.util.createElement("list",{name:"invisible"
},!1)),t.append(dojox.xmpp.util.createElement("item",{action:"deny",order:"1"},!1)),
t.append(dojox.xmpp.util.createElement("presence-out",{},!0)),t.append("</item>"),
t.append("</list>"),t.append("</query>"),t.append("</iq>"),e={id:this.session.getNextIqId(),
from:this.session.jid+"/"+this.session.resource,type:"set"};var i=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",e,!1));
i.append(dojox.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1)),i.append(dojox.xmpp.util.createElement("active",{
name:"invisible"},!0)),i.append("</query>"),i.append("</iq>"),this.session.dispatchPacket(t.toString()),
this.session.dispatchPacket(i.toString())},_manageSubscriptions:function(e,t){if(e){
-1==e.indexOf("@")&&(e+="@"+this.session.domain);var i=dojox.xmpp.util.createElement("presence",{
to:e,type:t},!0);this.session.dispatchPacket(i)}},subscribe:function(e){this._manageSubscriptions(e,"subscribe");
},approveSubscription:function(e){this._manageSubscriptions(e,"subscribed")},unsubscribe:function(e){
this._manageSubscriptions(e,"unsubscribe")},declineSubscription:function(e){this._manageSubscriptions(e,"unsubscribed");
},cancelSubscription:function(e){this._manageSubscriptions(e,"unsubscribed")}});