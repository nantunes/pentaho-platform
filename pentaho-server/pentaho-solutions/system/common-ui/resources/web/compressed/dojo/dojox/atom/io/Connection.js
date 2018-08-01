define(["dojo/_base/declare","dojo/_base/kernel","dojo/_base/xhr","./model"],function(e,t,r,s){
return e("dojox.atom.io.Connection",null,{constructor:function(e,t){this.sync=e,this.preventCache=t;
},preventCache:!1,alertsEnabled:!1,getFeed:function(e,t,r,n){this._getXmlDoc(e,"feed",new s.Feed,s._Constants.ATOM_NS,t,r,n);
},getService:function(e,t,r,n){this._getXmlDoc(e,"service",new s.Service(e),s._Constants.APP_NS,t,r,n);
},getEntry:function(e,t,r,n){this._getXmlDoc(e,"entry",new s.Entry,s._Constants.ATOM_NS,t,r,n);
},_getXmlDoc:function(e,s,n,a,l,o,i){i||(i=t.global);var h=this.alertsEnabled,c={
url:e,handleAs:"xml",sync:this.sync,preventCache:this.preventCache,load:function(e,t){
var r,o=null,c=e;if(c){if("undefined"!=typeof c.getElementsByTagNameNS)r=c.getElementsByTagNameNS(a,s),
r&&r.length>0?o=r.item(0):c.lastChild&&(o=c.lastChild);else if("undefined"!=typeof c.getElementsByTagName)if(r=c.getElementsByTagName(s),
r&&r.length>0){for(var d=0;d<r.length;d++)if(r[d].namespaceURI==a){o=r[d];break}}else c.lastChild&&(o=c.lastChild);else{
if(!c.lastChild)return void l.call(i,null,null,t);o=c.lastChild}if(n.buildFromDom(o),
l)l.call(i,n,c,t);else if(h)throw new Error("The callback value does not exist.");
}else l.call(i,null,null,t)}};this.user&&null!==this.user&&(c.user=this.user),this.password&&null!==this.password&&(c.password=this.password),
o?c.error=function(e,t){o.call(i,e,t)}:c.error=function(){throw new Error("The URL requested cannot be accessed");
},r.get(c)},updateEntry:function(e,s,n,a,l,o){o||(o=t.global),e.updated=new Date;var i=e.getEditHref();
if(!i)throw new Error("A URL has not been specified for editing this entry.");var h=this,c=this.alertsEnabled,d={
url:i,handleAs:"text",contentType:"text/xml",sync:this.sync,preventCache:this.preventCache,
load:function(t,r){var n=null;if(a){n=r.xhr.getResponseHeader("Location"),n||(n=i);
var l=function(e,t,r){if(s)s.call(o,e,n,r);else if(c)throw new Error("The callback value does not exist.");
};h.getEntry(n,l)}else if(s)s.call(o,e,r.xhr.getResponseHeader("Location"),r);else if(c)throw new Error("The callback value does not exist.");
return t}};if(this.user&&null!==this.user&&(d.user=this.user),this.password&&null!==this.password&&(d.password=this.password),
n?d.error=function(e,t){n.call(o,e,t)}:d.error=function(){throw new Error("The URL requested cannot be accessed");
},l)d.postData=e.toString(!0),d.headers={"X-Method-Override":"PUT"},r.post(d);else{
d.putData=e.toString(!0);r.put(d)}},addEntry:function(e,s,n,a,l,o){o||(o=t.global),
e.published=new Date,e.updated=new Date;var i=e.feedUrl,h=this.alertsEnabled;if(!s&&i&&(s=i),
s){var c=this,d={url:s,handleAs:"text",contentType:"text/xml",sync:this.sync,preventCache:this.preventCache,
postData:e.toString(!0),load:function(t,r){var a=r.xhr.getResponseHeader("Location");
if(a||(a=s),r.retrieveEntry){var l=function(e,t,r){if(n)n.call(o,e,a,r);else if(h)throw new Error("The callback value does not exist.");
};c.getEntry(a,l)}else if(n)n.call(o,e,a,r);else if(h)throw new Error("The callback value does not exist.");
return t}};this.user&&null!==this.user&&(d.user=this.user),this.password&&null!==this.password&&(d.password=this.password),
a?d.error=function(e,t){a.call(o,e,t)}:d.error=function(){throw new Error("The URL requested cannot be accessed");
},r.post(d)}else if(h)throw new Error("The request cannot be processed because the URL parameter is missing.");
},deleteEntry:function(e,s,n,a,l){l||(l=t.global);var o=null;if(o="string"==typeof e?e:e.getEditHref(),
!o)throw s.call(l,!1,null),new Error("The request cannot be processed because the URL parameter is missing.");
var i={url:o,handleAs:"text",sync:this.sync,preventCache:this.preventCache,load:function(e,t){
return s.call(l,t),e}};this.user&&null!==this.user&&(i.user=this.user),this.password&&null!==this.password&&(i.password=this.password),
n?i.error=function(e,t){n.call(l,e,t)}:i.error=function(){throw new Error("The URL requested cannot be accessed");
},a?(i.headers={"X-Method-Override":"DELETE"},dhxr.post(i)):r.del(i)}})});