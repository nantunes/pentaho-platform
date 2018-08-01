dojo.provide("dojox.xmpp.UserService"),dojo.declare("dojox.xmpp.UserService",null,{
constructor:function(e){this.session=e},getPersonalProfile:function(){var e={id:this.session.getNextIqId(),
type:"get"},t=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",e,!1));t.append(dojox.xmpp.util.createElement("query",{
xmlns:"jabber:iq:private"},!1)),t.append(dojox.xmpp.util.createElement("sunmsgr",{
xmlsns:"sun:xmpp:properties"},!0)),t.append("</query></iq>");var r=this.session.dispatchPacket(t.toString(),"iq",e.id);
r.addCallback(this,"_onGetPersonalProfile")},setPersonalProfile:function(e){var t={
id:this.session.getNextIqId(),type:"set"},r=new dojox.string.Builder(dojox.xmpp.util.createElement("iq",t,!1));
r.append(dojox.xmpp.util.createElement("query",{xmlns:"jabber:iq:private"},!1)),r.append(dojox.xmpp.util.createElement("sunmsgr",{
xmlsns:"sun:xmpp:properties"},!1));for(var i in e)r.append(dojox.xmpp.util.createElement("property",{
name:i},!1)),r.append(dojox.xmpp.util.createElement("value",{},!1)),r.append(e[i]),
r.append("</value></props>");r.append("</sunmsgr></query></iq>");var o=this.session.dispatchPacket(r.toString(),"iq",t.id);
o.addCallback(this,"_onSetPersonalProfile")},_onSetPersonalProfile:function(e){if("result"==e.getAttribute("type"))this.onSetPersonalProfile(e.getAttribute("id"));else if("error"==e.getAttribute("type")){
var t=this.session.processXmppError(e);this.onSetPersonalProfileFailure(t)}},onSetPersonalProfile:function(e){},
onSetPersonalProfileFailure:function(e){},_onGetPersonalProfile:function(e){if("result"==e.getAttribute("type")){
var t={};if(e.hasChildNodes()){var r=e.firstChild;if("query"==r.nodeName&&"jabber:iq:private"==r.getAttribute("xmlns")){
var i=r.firstChild;if("query"==i.nodeName&&"sun:xmpp:properties"==i.getAttributes("xmlns"))for(var o=0;o<i.childNodes.length;o++){
var n=i.childNodes[o];if("property"==n.nodeName){var s=n.getAttribute("name"),l=n.firstChild||"";
t[s]=l}}}this.onGetPersonalProfile(t)}}else if("error"==e.getAttribute("type")){var p=this.session.processXmppError(e);
this.onGetPersonalProfileFailure(p)}return e},onGetPersonalProfile:function(e){},
onGetPersonalProfileFailure:function(e){}});