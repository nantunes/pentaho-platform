dojo.provide("dojox.xmpp.bosh"),dojo.require("dojo.io.script"),dojo.require("dojo.io.iframe"),
dojo.require("dojox.xml.parser"),dojox.xmpp.bosh={transportIframes:[],initialize:function(o){
this.transportIframes=[];for(var r=dojox._scopeName+".xmpp.bosh",e=dojo.connect(dojo.getObject(r),"_iframeOnload",this,function(r){
0==r&&(o.load(),dojo.disconnect(e))}),i=0;i<o.iframes;i++){var d="xmpp-transport-"+i,t=dojo.byId("xmpp-transport-"+i);
t&&(window[d]&&(window[d]=null),window.frames[d]&&(window.frames[d]=null),dojo.destroy(t)),
t=dojo.io.iframe.create("xmpp-transport-"+i,r+"._iframeOnload("+i+");"),this.transportIframes.push(t);
}},_iframeOnload:function(o){var r=dojo.io.iframe.doc(dojo.byId("xmpp-transport-"+o));
r.write("<script>var isLoaded=true; var rid=0; var transmiting=false; function _BOSH_(msg) { transmiting=false; parent.dojox.xmpp.bosh.handle(msg, rid); } </script>");
},findOpenIframe:function(){for(var o=0;o<this.transportIframes.length;o++){var r=this.transportIframes[o],e=r.contentWindow;
if(e.isLoaded&&!e.transmiting)return r}return!1},handle:function(o,r){var e=this["rid"+r],i=dojox.xml.parser.parse(o,"text/xml");
i?e.ioArgs.xmppMessage=i:e.errback(new Error("Recieved bad document from server: "+o));
},get:function(o){var r=this.findOpenIframe(),e=dojo.io.iframe.doc(r);o.frameDoc=e;
var i=this._makeScriptDeferred(o),d=i.ioArgs;return r.contentWindow.rid=d.rid,r.contentWindow.transmiting=!0,
dojo._ioAddQueryToUrl(d),dojo._ioNotifyStart(i),dojo.io.script.attach(d.id,d.url,e),
dojo._ioWatch(i,this._validCheck,this._ioCheck,this._resHandle),i},remove:function(o,r){
dojo.destroy(dojo.byId(o,r)),this[o]&&delete this[o]},_makeScriptDeferred:function(o){
var r=dojo._ioSetArgs(o,this._deferredCancel,this._deferredOk,this._deferredError),e=r.ioArgs;
return e.id="rid"+o.rid,e.rid=o.rid,e.canDelete=!0,e.frameDoc=o.frameDoc,this[e.id]=r,
r},_deferredCancel:function(o){o.canceled=!0,o.ioArgs.canDelete&&dojox.xmpp.bosh._addDeadScript(o.ioArgs);
},_deferredOk:function(o){var r=o.ioArgs;return r.canDelete&&dojox.xmpp.bosh._addDeadScript(r),
r.xmppMessage||r},_deferredError:function(o,r){return r.ioArgs.canDelete&&("timeout"==o.dojoType?dojox.xmpp.bosh.remove(r.ioArgs.id,r.ioArgs.frameDoc):dojox.xmpp.bosh._addDeadScript(r.ioArgs)),
o},_deadScripts:[],_addDeadScript:function(o){dojox.xmpp.bosh._deadScripts.push({
id:o.id,frameDoc:o.frameDoc}),o.frameDoc=null},_validCheck:function(o){var r=dojox.xmpp.bosh,e=r._deadScripts;
if(e&&e.length>0){for(var i=0;i<e.length;i++)r.remove(e[i].id,e[i].frameDoc),e[i].frameDoc=null;
dojox.xmpp.bosh._deadScripts=[]}return!0},_ioCheck:function(o){var r=o.ioArgs;return r.xmppMessage?!0:!1;
},_resHandle:function(o){dojox.xmpp.bosh._ioCheck(o)?o.callback(o):o.errback(new Error("inconceivable dojox.xmpp.bosh._resHandle error"));
}};