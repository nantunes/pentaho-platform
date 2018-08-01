define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/sniff","dojo/ready","dojo/_base/unload","dojo/_base/window","dojo/dom-geometry"],function(e,t,n,o,i,d,l){
var r=t.getObject("dojox.html.metrics",!0),a=t.getObject("dojox");r.getFontMeasurements=function(){
var e={"1em":0,"1ex":0,"100%":0,"12pt":0,"16px":0,"xx-small":0,"x-small":0,small:0,
medium:0,large:0,"x-large":0,"xx-large":0};n("ie")&&(d.doc.documentElement.style.fontSize="100%");
var t=d.doc.createElement("div"),o=t.style;o.position="absolute",o.left="-100px",
o.top="0",o.width="30px",o.height="1000em",o.borderWidth="0",o.margin="0",o.padding="0",
o.outline="0",o.lineHeight="1",o.overflow="hidden",d.body().appendChild(t);for(var i in e)o.fontSize=i,
e[i]=16*Math.round(12*t.offsetHeight/16)/12/1e3;return d.body().removeChild(t),t=null,
e};var s=null;r.getCachedFontMeasurements=function(e){return(e||!s)&&(s=r.getFontMeasurements()),
s};var c=null,h={};r.getTextBox=function(e,t,n){var o,i;if(c)o=c;else{o=c=d.doc.createElement("div");
var r=d.doc.createElement("div");r.appendChild(o),i=r.style,i.overflow="scroll",i.position="absolute",
i.left="0px",i.top="-10000px",i.width="1px",i.height="1px",i.visibility="hidden",
i.borderWidth="0",i.margin="0",i.padding="0",i.outline="0",d.body().appendChild(r);
}if(o.className="",i=o.style,i.borderWidth="0",i.margin="0",i.padding="0",i.outline="0",
arguments.length>1&&t)for(var a in t)a in h||(i[a]=t[a]);arguments.length>2&&n&&(o.className=n),
o.innerHTML=e;var s=l.position(o);return s.w=o.parentNode.scrollWidth,s};var f={w:16,
h:16};return r.getScrollbar=function(){return{w:f.w,h:f.h}},r._fontResizeNode=null,
r.initOnFontResize=function(e){var t=r._fontResizeNode=d.doc.createElement("iframe"),o=t.style;
o.position="absolute",o.width="5em",o.height="10em",o.top="-10000px",o.display="none",
n("ie")?t.onreadystatechange=function(){"complete"==t.contentWindow.document.readyState&&(t.onresize=t.contentWindow.parent[a._scopeName].html.metrics._fontresize);
}:t.onload=function(){t.contentWindow.onresize=t.contentWindow.parent[a._scopeName].html.metrics._fontresize;
},t.setAttribute("src","javascript:'<html><head><script>if(\"loadFirebugConsole\" in window){window.loadFirebugConsole();}</script></head><body></body></html>'"),
d.body().appendChild(t),r.initOnFontResize=function(){}},r.onFontResize=function(){},
r._fontresize=function(){r.onFontResize()},i.addOnUnload(function(){var e=r._fontResizeNode;
e&&(n("ie")&&e.onresize?e.onresize=null:e.contentWindow&&e.contentWindow.onresize&&(e.contentWindow.onresize=null),
r._fontResizeNode=null)}),o(function(){try{var t=d.doc.createElement("div");t.style.cssText="top:0;left:0;width:100px;height:100px;overflow:scroll;position:absolute;visibility:hidden;",
d.body().appendChild(t),f.w=t.offsetWidth-t.clientWidth,f.h=t.offsetHeight-t.clientHeight,
d.body().removeChild(t),delete t}catch(n){}"fontSizeWatch"in e.config&&e.config.fontSizeWatch&&r.initOnFontResize();
}),r});