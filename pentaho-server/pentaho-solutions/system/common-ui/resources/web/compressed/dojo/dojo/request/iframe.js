define(["module","require","./watch","./util","./handlers","../_base/lang","../io-query","../query","../has","../dom","../dom-construct","../_base/window","../NodeList-dom"],function(e,t,o,r,n,a,i,l,d,u,s,c){
function m(e,o,r){if(c.global[e])return c.global[e];if(c.global.frames[e])return c.global.frames[e];
r||(d("config-useXDomain")&&!d("config-dojoBlankHtmlUrl")&&console.warn("dojo/request/iframe: When using cross-domain Dojo builds, please save dojo/resources/blank.html to your domain and set dojoConfig.dojoBlankHtmlUrl to the path on your domain to blank.html"),
r=d("config-dojoBlankHtmlUrl")||t.toUrl("dojo/resources/blank.html"));var n=s.place('<iframe id="'+e+'" name="'+e+'" src="'+r+'" onload="'+o+'" style="position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden">',c.body());
return c.global[e]=n,n}function f(e,t,o){var r=c.global.frames[e.name];r.contentWindow&&(r=r.contentWindow);
try{o?r.location.replace(t):r.location=t}catch(n){console.log("dojo/request/iframe.setSrc: ",n);
}}function h(e){if(e.contentDocument)return e.contentDocument;var t=e.name;if(t){
var o=c.doc.getElementsByTagName("iframe");if(e.document&&o[t].contentWindow&&o[t].contentWindow.document)return o[t].contentWindow.document;
if(c.doc.frames[t]&&c.doc.frames[t].document)return c.doc.frames[t].document}return null;
}function _(){return s.create("form",{name:N+"_form",style:{position:"absolute",top:"-1000px",
left:"-1000px"}},c.body())}function g(){var e;try{if(x._currentDfd||!x._dfdQueue.length)return;
do e=x._currentDfd=x._dfdQueue.shift();while(e&&(e.canceled||e.isCanceled&&e.isCanceled())&&x._dfdQueue.length);
if(!e||e.canceled||e.isCanceled&&e.isCanceled())return void(x._currentDfd=null);var t,o=e.response,n=o.options,l=e._contentToClean=[],d=u.byId(n.form),m=r.notify,f=n.data||null;
if(e._legacy||"POST"!==n.method||d?"GET"===n.method&&d&&o.url.indexOf("?")>-1&&(t=o.url.slice(o.url.indexOf("?")+1),
f=a.mixin(i.queryToObject(t),f)):d=e._tmpForm=_(),d){if(!e._legacy){var h=d;do h=h.parentNode;while(h!==c.doc.documentElement);
h||(d.style.position="absolute",d.style.left="-1000px",d.style.top="-1000px",c.body().appendChild(d)),
d.name||(d.name=N+"_form")}if(f){var g=function(e,t){s.create("input",{type:"hidden",
name:e,value:t},d),l.push(e)};for(var p in f){var v=f[p];if(a.isArray(v)&&v.length>1)for(var b=0;b<v.length;b++)g(p,v[b]);else d[p]?d[p].value=v:g(p,v);
}}var y=d.getAttributeNode("action"),T=d.getAttributeNode("method"),j=d.getAttributeNode("target");
o.url&&(e._originalAction=y?y.value:null,y?y.value=o.url:d.setAttribute("action",o.url)),
e._legacy?T&&T.value||(T?T.value=n.method:d.setAttribute("method",n.method)):(e._originalMethod=T?T.value:null,
T?T.value=n.method:d.setAttribute("method",n.method)),e._originalTarget=j?j.value:null,
j?j.value=x._iframeName:d.setAttribute("target",x._iframeName),d.target=x._iframeName,
m&&m.emit("send",o,e.promise.cancel),x._notifyStart(o),d.submit()}else{var w="";o.options.data&&(w=o.options.data,
"string"!=typeof w&&(w=i.objectToQuery(w)));var A=o.url+(o.url.indexOf("?")>-1?"&":"?")+w;
m&&m.emit("send",o,e.promise.cancel),x._notifyStart(o),x.setSrc(x._frame,A,!0)}}catch(q){
e.reject(q)}}function p(e){return!this.isFulfilled()}function v(e){return!!this._finished;
}function b(e,t){if(!t)try{var o=e.options,r=x.doc(x._frame),i=o.handleAs;if("html"!==i){
if("xml"===i)if("html"===r.documentElement.tagName.toLowerCase()){l("a",r.documentElement).orphan();
var d=r.documentElement.innerText;d=d.replace(/>\s+</g,"><"),e.text=a.trim(d)}else e.data=r;else e.text=r.getElementsByTagName("textarea")[0].value;
n(e)}else e.data=r}catch(u){t=u}t?this.reject(t):this._finished?this.resolve(e):this.reject(new Error("Invalid dojo/request/iframe request state"));
}function y(e){this._callNext()}function x(e,t,n){var a=r.parseArgs(e,r.deepCreate(j,t),!0);
if(e=a.url,t=a.options,"GET"!==t.method&&"POST"!==t.method)throw new Error(t.method+" not supported by dojo/request/iframe");
x._frame||(x._frame=x.create(x._iframeName,T+"();"));var i=r.deferred(a,null,p,v,b,y);
return i._callNext=function(){this._calledNext||(this._calledNext=!0,x._currentDfd=null,
x._fireNextRequest())},i._legacy=n,x._dfdQueue.push(i),x._fireNextRequest(),o(i),
n?i:i.promise}var N=e.id.replace(/[\/\.\-]/g,"_"),T=N+"_onload";c.global[T]||(c.global[T]=function(){
var e=x._currentDfd;if(!e)return void x._fireNextRequest();var t=e.response,o=t.options,r=u.byId(o.form)||e._tmpForm;
if(r){for(var n=e._contentToClean,a=0;a<n.length;a++)for(var i=n[a],l=0;l<r.childNodes.length;l++){
var d=r.childNodes[l];if(d.name===i){s.destroy(d);break}}e._originalAction&&r.setAttribute("action",e._originalAction),
e._originalMethod&&(r.setAttribute("method",e._originalMethod),r.method=e._originalMethod),
e._originalTarget&&(r.setAttribute("target",e._originalTarget),r.target=e._originalTarget);
}e._tmpForm&&(s.destroy(e._tmpForm),delete e._tmpForm),e._finished=!0});var j={method:"POST"
};return x.create=m,x.doc=h,x.setSrc=f,x._iframeName=N+"_IoIframe",x._notifyStart=function(){},
x._dfdQueue=[],x._currentDfd=null,x._fireNextRequest=g,r.addCommonMethods(x,["GET","POST"]),
x});