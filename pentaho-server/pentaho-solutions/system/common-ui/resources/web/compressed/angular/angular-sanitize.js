/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

!function(e,t){"use strict";function n(){function n(e,t){var n,r={},i=e.split(",");
for(n=0;n<i.length;n++)r[t?l(i[n]):i[n]]=!0;return r}function r(t,n){null===t||void 0===t?t="":"string"!=typeof t&&(t=""+t),
v.innerHTML=t;var r=5;do{if(0===r)throw h("uinput","Failed to sanitize html because the input is unstable");
r--,e.document.documentMode&&g(v),t=v.innerHTML,v.innerHTML=t}while(t!==v.innerHTML);
for(var i=v.firstChild;i;){switch(i.nodeType){case 1:n.start(i.nodeName.toLowerCase(),p(i.attributes));
break;case 3:n.chars(i.textContent)}var a;if(!(a=i.firstChild)&&(1==i.nodeType&&n.end(i.nodeName.toLowerCase()),
a=i.nextSibling,!a))for(;null==a&&(i=i.parentNode,i!==v);)a=i.nextSibling,1==i.nodeType&&n.end(i.nodeName.toLowerCase());
i=a}for(;i=v.firstChild;)v.removeChild(i)}function p(e){for(var t={},n=0,r=e.length;r>n;n++){
var i=e[n];t[i.name]=i.value}return t}function f(e){return e.replace(/&/g,"&amp;").replace(y,function(e){
var t=e.charCodeAt(0),n=e.charCodeAt(1);return"&#"+(1024*(t-55296)+(n-56320)+65536)+";";
}).replace(k,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;");
}function m(e,t){var n=!1,r=i(e,e.push);return{start:function(e,i){e=l(e),!n&&D[e]&&(n=e),
n||$[e]!==!0||(r("<"),r(e),o(i,function(n,i){var a=l(i),o="img"===e&&"src"===a||"background"===a;
M[a]!==!0||N[a]===!0&&!t(n,o)||(r(" "),r(i),r('="'),r(f(n)),r('"'))}),r(">"))},end:function(e){
e=l(e),n||$[e]!==!0||x[e]===!0||(r("</"),r(e),r(">")),e==n&&(n=!1)},chars:function(e){
n||r(f(e))}}}function g(t){if(t.nodeType===e.Node.ELEMENT_NODE)for(var n=t.attributes,r=0,i=n.length;i>r;r++){
var a=n[r],o=a.name.toLowerCase();("xmlns:ns1"===o||0===o.lastIndexOf("ns1:",0))&&(t.removeAttributeNode(a),
r--,i--)}var s=t.firstChild;s&&g(s),s=t.nextSibling,s&&g(s)}var b=!1;this.$get=["$$sanitizeUri",function(e){
return b&&a($,T),function(t){var n=[];return u(t,d(n,function(t,n){return!/^unsafe:/.test(e(t,n));
})),n.join("")}}],this.enableSvg=function(e){return s(e)?(b=e,this):b},i=t.bind,a=t.extend,
o=t.forEach,s=t.isDefined,l=t.lowercase,c=t.noop,u=r,d=m;var v,y=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,k=/([^\#-~ |!])/g,x=n("area,br,col,hr,img,wbr"),w=n("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),C=n("rp,rt"),E=a({},C,w),z=a({},w,n("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),L=a({},C,n("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),T=n("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),D=n("script,style"),$=a({},x,z,L,E),N=n("background,cite,href,longdesc,src,xlink:href"),S=n("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),F=n("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),M=a({},N,F,S);
!function(e){var t;if(!e.document||!e.document.implementation)throw h("noinert","Can't create an inert html document");
t=e.document.implementation.createHTMLDocument("inert");var n=t.documentElement||t.getDocumentElement(),r=n.getElementsByTagName("body");
if(1===r.length)v=r[0];else{var i=t.createElement("html");v=t.createElement("body"),
i.appendChild(v),t.appendChild(i)}}(e)}function r(e){var t=[],n=d(t,c);return n.chars(e),
t.join("")}var i,a,o,s,l,c,u,d,h=t.$$minErr("$sanitize");t.module("ngSanitize",[]).provider("$sanitize",n),
t.module("ngSanitize").filter("linky",["$sanitize",function(e){var n=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,i=/^mailto:/i,a=t.$$minErr("linky"),o=t.isDefined,s=t.isFunction,l=t.isObject,c=t.isString;
return function(t,u,d){function h(e){e&&y.push(r(e))}function p(e,t){var n,r=b(e);
y.push("<a ");for(n in r)y.push(n+'="'+r[n]+'" ');!o(u)||"target"in r||y.push('target="',u,'" '),
y.push('href="',e.replace(/"/g,"&quot;"),'">'),h(t),y.push("</a>")}if(null==t||""===t)return t;
if(!c(t))throw a("notstring","Expected string but received: {0}",t);for(var f,m,g,b=s(d)?d:l(d)?function(){
return d}:function(){return{}},v=t,y=[];f=v.match(n);)m=f[0],f[2]||f[4]||(m=(f[3]?"http://":"mailto:")+m),
g=f.index,h(v.substr(0,g)),p(m,f[0].replace(i,"")),v=v.substring(g+f[0].length);return h(v),
e(y.join(""))}}])}(window,window.angular);