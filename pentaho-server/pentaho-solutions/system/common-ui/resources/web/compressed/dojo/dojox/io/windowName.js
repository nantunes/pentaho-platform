define(["dojo/_base/kernel","dojo/_base/window","dojo/_base/xhr","dojo/_base/sniff","dojo/_base/url","dojo/domReady!"],function(e){
return e.getObject("io.windowName",!0,dojox),dojox.io.windowName={send:function(o,n){
n.url+=(n.url.match(/\?/)?"&":"?")+"windowname="+(n.authElement?"auth":!0);var t=n.authElement,r=function(o){
try{var n=i.ioArgs.frame.contentWindow.document;n.write(" "),n.close()}catch(r){}
return(t||e.body()).removeChild(i.ioArgs.outerFrame),o},i=e._ioSetArgs(n,r,r,r);return n.timeout&&setTimeout(function(){
-1==i.fired&&i.callback(new Error("Timeout"))},n.timeout),dojox.io.windowName._send(i,o,t,n.onAuthLoad),
i},_send:function(o,n,t,r){function i(e){e.style.width="100%",e.style.height="100%",
e.style.border="0px"}function a(){var e=p.contentWindow.name;"string"==typeof e&&e!=m&&(b=2,
o.ioArgs.hash=p.contentWindow.location.hash,o.callback(e))}var d=o.ioArgs,l=dojox.io.windowName._frameNum++,c=(e.config.dojoBlankHtmlUrl||e.config.dojoCallbackUrl||e.moduleUrl("dojo","resources/blank.html"))+"#"+l,m=new e._Url(window.location,c),u=e.doc,s=t||e.body();
if(e.isMoz&&![].reduce){var w=u.createElement("iframe");i(w),t||(w.style.display="none"),
s.appendChild(w);var h=w.contentWindow;u=h.document,u.write("<html><body margin='0px'><iframe style='width:100%;height:100%;border:0px' name='protectedFrame'></iframe></body></html>"),
u.close();var f=h[0];h.__defineGetter__(0,function(){}),h.__defineGetter__("protectedFrame",function(){}),
u=f.document,u.write("<html><body margin='0px'></body></html>"),u.close(),s=u.body;
}var p;if(e.isIE){var y=u.createElement("div");y.innerHTML='<iframe name="'+m+'" onload="dojox.io.windowName['+l+']()">',
p=y.firstChild}else p=u.createElement("iframe");d.frame=p,i(p),d.outerFrame=w=w||p,
t||(w.style.display="none");var b=0;if(dojox.io.windowName[l]=p.onload=function(){
try{if(!e.isMoz&&"about:blank"==p.contentWindow.location)return}catch(o){}b||(b=1,
t?r&&r():p.contentWindow.location=c);try{2>b&&a()}catch(o){}},p.name=m,n.match(/GET/i))e._ioAddQueryToUrl(d),
p.src=d.url,s.appendChild(p),p.contentWindow&&p.contentWindow.location.replace(d.url);else{
if(!n.match(/POST/i))throw new Error("Method "+n+" not supported with the windowName transport");
s.appendChild(p);var v=e.doc.createElement("form");e.body().appendChild(v);var _=e.queryToObject(d.query);
for(var j in _){var g=_[j];g=g instanceof Array?g:[g];for(var x=0;x<g.length;x++){
var E=u.createElement("input");E.type="hidden",E.name=j,E.value=g[x],v.appendChild(E);
}}v.method="POST",v.action=d.url,v.target=m,v.submit(),v.parentNode.removeChild(v);
}p.contentWindow&&(p.contentWindow.name=m)},_frameNum:0},dojox.io.windowName});