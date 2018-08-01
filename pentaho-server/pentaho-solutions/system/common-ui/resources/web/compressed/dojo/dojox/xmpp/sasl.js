dojo.provide("dojox.xmpp.sasl"),dojo.require("dojox.xmpp.util"),dojo.require("dojo.AdapterRegistry"),
dojo.require("dojox.encoding.digests.MD5"),dojox.xmpp.sasl.saslNS="urn:ietf:params:xml:ns:xmpp-sasl",
dojo.declare("dojox.xmpp.sasl._Base",null,{mechanism:null,closeAuthTag:!0,constructor:function(s){
this.session=s,this.startAuth()},startAuth:function(){var s=new dojox.string.Builder(dojox.xmpp.util.createElement("auth",{
xmlns:dojox.xmpp.sasl.saslNS,mechanism:this.mechanism},this.closeAuthTag));this.appendToAuth(s),
this.session.dispatchPacket(s.toString())},appendToAuth:function(s){},onChallenge:function(s){
this.first_challenge?this.onSecondChallenge(s):(this.first_challenge=!0,this.onFirstChallenge(s));
},onFirstChallenge:function(){},onSecondChallenge:function(){},onSuccess:function(){
this.session.sendRestart()}}),dojo.declare("dojox.xmpp.sasl.SunWebClientAuth",dojox.xmpp.sasl._Base,{
mechanism:"SUN-COMMS-CLIENT-PROXY-AUTH"}),dojo.declare("dojox.xmpp.sasl.Plain",dojox.xmpp.sasl._Base,{
mechanism:"PLAIN",closeAuthTag:!1,appendToAuth:function(s){var e=this.session.jid,o=this.session.jid.indexOf("@");
-1!=o&&(e=this.session.jid.substring(0,o));var n=this.session.jid+"\x00"+e+"\x00"+this.session.password;
n=dojox.xmpp.util.Base64.encode(n),s.append(n),s.append("</auth>"),delete this.session.password;
}}),dojo.declare("dojox.xmpp.sasl.DigestMD5",dojox.xmpp.sasl._Base,{mechanism:"DIGEST-MD5",
onFirstChallenge:function(s){var e=dojox.encoding.digests,o=dojox.encoding.digests.outputTypes,n=function(s){
return e.MD5(s,o.Hex)},t=function(s){return e.MD5(s,o.String)},i=dojox.xmpp.util.Base64.decode(s.firstChild.nodeValue),a={
realm:"",nonce:"",qop:"auth",maxbuf:65536};i.replace(/([a-z]+)=([^,]+)/g,function(s,e,o){
o=o.replace(/^"(.+)"$/,"$1"),a[e]=o});var r="";switch(a.qop){case"auth-int":case"auth-conf":
r=":00000000000000000000000000000000";case"auth":break;default:return!1}var d=e.MD5(1234567890*Math.random(),o.Hex),p="xmpp/"+this.session.domain,l=this.session.jid,u=this.session.jid.indexOf("@");
-1!=u&&(l=this.session.jid.substring(0,u)),l=dojox.xmpp.util.encodeJid(l);var x=new dojox.string.Builder;
x.append(t(l+":"+a.realm+":"+this.session.password),":",a.nonce+":"+d),delete this.session.password;
var c=":"+p+r,h="AUTHENTICATE"+c,m=new dojox.string.Builder;m.append(n(x.toString()),":",a.nonce,":00000001:",d,":",a.qop,":");
var j=new dojox.string.Builder;j.append('username="',l,'",','realm="',a.realm,'",',"nonce=",a.nonce,",",'cnonce="',d,'",','nc="00000001",qop="',a.qop,'",digest-uri="',p,'",','response="',n(m.toString()+n(h)),'",charset="utf-8"');
var g=new dojox.string.Builder(dojox.xmpp.util.createElement("response",{xmlns:dojox.xmpp.xmpp.SASL_NS
},!1));g.append(dojox.xmpp.util.Base64.encode(j.toString())),g.append("</response>"),
this.rspauth=n(m.toString()+n(c)),this.session.dispatchPacket(g.toString())},onSecondChallenge:function(s){
var e=dojox.xmpp.util.Base64.decode(s.firstChild.nodeValue);if(this.rspauth==e.substring(8)){
var o=new dojox.string.Builder(dojox.xmpp.util.createElement("response",{xmlns:dojox.xmpp.xmpp.SASL_NS
},!0));this.session.dispatchPacket(o.toString())}}}),dojox.xmpp.sasl.registry=new dojo.AdapterRegistry,
dojox.xmpp.sasl.registry.register("SUN-COMMS-CLIENT-PROXY-AUTH",function(s){return"SUN-COMMS-CLIENT-PROXY-AUTH"==s;
},function(s,e){return new dojox.xmpp.sasl.SunWebClientAuth(e)}),dojox.xmpp.sasl.registry.register("DIGEST-MD5",function(s){
return"DIGEST-MD5"==s},function(s,e){return new dojox.xmpp.sasl.DigestMD5(e)}),dojox.xmpp.sasl.registry.register("PLAIN",function(s){
return"PLAIN"==s},function(s,e){return new dojox.xmpp.sasl.Plain(e)});