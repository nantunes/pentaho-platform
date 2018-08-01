define(["./_base/kernel","require","./_base/config","./aspect","./_base/lang","./topic","./domReady","./sniff"],function(t,o,n,e,i,a,r,s){
function l(t,o){var n=t.indexOf(o);return n>=0?t.substring(n+1):""}function h(){return l(location.href,"#");
}function c(){a.publish("/dojo/hashchange",h())}function u(){h()!==m&&(m=h(),c());
}function d(t){if(g){if(g.isTransitioning())return void setTimeout(i.hitch(null,d,t),p);
var o=g.iframe.location.href,n=o.indexOf("?");return void g.iframe.location.replace(o.substring(0,n)+"?"+t);
}location.replace("#"+t),!b&&u()}function f(){function e(){m=h(),u=b?m:l(v.href,"?"),
d=!1,f=null}var a=document.createElement("iframe"),r="dojo-hash-iframe",s=n.dojoBlankHtmlUrl||o.toUrl("./resources/blank.html");
n.useXDomain&&!n.dojoBlankHtmlUrl&&console.warn("dojo/hash: When using cross-domain Dojo builds, please save dojo/resources/blank.html to your domain and set djConfig.dojoBlankHtmlUrl to the path on your domain to blank.html"),
a.id=r,a.src=s+"?"+h(),a.style.display="none",document.body.appendChild(a),this.iframe=t.global[r];
var u,d,f,g,b,v=this.iframe.location;this.isTransitioning=function(){return d},this.pollLocation=function(){
if(!b)try{var t=l(v.href,"?");document.title!=g&&(g=this.iframe.document.title=document.title);
}catch(o){b=!0,console.error("dojo/hash: Error adding history entry. Server unreachable.");
}var n=h();if(d&&m===n){if(!b&&t!==f)return void setTimeout(i.hitch(this,this.pollLocation),0);
e(),c()}else if(m!==n||!b&&u!==t){if(m!==n)return m=n,d=!0,f=n,a.src=s+"?"+f,b=!1,
void setTimeout(i.hitch(this,this.pollLocation),0);b||(location.href="#"+v.search.substring(1),
e(),c())}else;setTimeout(i.hitch(this,this.pollLocation),p)},e(),setTimeout(i.hitch(this,this.pollLocation),p);
}t.hash=function(t,o){return arguments.length?("#"==t.charAt(0)&&(t=t.substring(1)),
o?d(t):location.href="#"+t,t):h()};var m,g,b,p=n.hashPollFrequency||100;return r(function(){
"onhashchange"in t.global&&(!s("ie")||s("ie")>=8&&"BackCompat"!=document.compatMode)?b=e.after(t.global,"onhashchange",c,!0):document.addEventListener?(m=h(),
setInterval(u,p)):document.attachEvent&&(g=new f)}),t.hash});