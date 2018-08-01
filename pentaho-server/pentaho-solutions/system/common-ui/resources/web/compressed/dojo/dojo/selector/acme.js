define(["../dom","../sniff","../_base/array","../_base/lang","../_base/window"],function(n,t,e,r,i){
var u=r.trim,o=e.forEach,f=function(){return i.doc},a="BackCompat"==f().compatMode,c=">~+",l=!1,s=function(){
return!0},d=function(n){n+=c.indexOf(n.slice(-1))>=0?" * ":" ";for(var t,e,r=function(t,e){
return u(n.slice(t,e))},i=[],o=-1,f=-1,a=-1,s=-1,d=-1,g=-1,h=-1,p="",v="",m=0,y=n.length,b=null,x=null,O=function(){
if(h>=0){var n=h==m?null:r(h,m);b[c.indexOf(n)<0?"tag":"oper"]=n,h=-1}},A=function(){
g>=0&&(b.id=r(g,m).replace(/\\/g,""),g=-1)},N=function(){d>=0&&(b.classes.push(r(d+1,m).replace(/\\/g,"")),
d=-1)},_=function(){A(),O(),N()},T=function(){_(),s>=0&&b.pseudos.push({name:r(s+1,m)
}),b.loops=b.pseudos.length||b.attrs.length||b.classes.length,b.oquery=b.query=r(e,m),
b.otag=b.tag=b.oper?null:b.tag||"*",b.tag&&(b.tag=b.tag.toUpperCase()),i.length&&i[i.length-1].oper&&(b.infixOper=i.pop(),
b.query=b.infixOper.query+" "+b.query),i.push(b),b=null};p=v,v=n.charAt(m),y>m;m++)if("\\"!=p)if(b||(e=m,
b={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){
return l?this.otag:this.tag}},h=m),t)v==t&&(t=null);else if("'"!=v&&'"'!=v)if(o>=0){
if("]"==v){x.attr?x.matchFor=r(a||o+1,m):x.attr=r(o+1,m);var w=x.matchFor;w&&('"'==w.charAt(0)||"'"==w.charAt(0))&&(x.matchFor=w.slice(1,-1)),
x.matchFor&&(x.matchFor=x.matchFor.replace(/\\/g,"")),b.attrs.push(x),x=null,o=a=-1;
}else if("="==v){var q="|~^$*".indexOf(p)>=0?p:"";x.type=q+v,x.attr=r(o+1,m-q.length),
a=m+1}}else f>=0?")"==v&&(s>=0&&(x.value=r(f+1,m)),s=f=-1):"#"==v?(_(),g=m+1):"."==v?(_(),
d=m):":"==v?(_(),s=m):"["==v?(_(),o=m,x={}):"("==v?(s>=0&&(x={name:r(s+1,m),value:null
},b.pseudos.push(x)),f=m):" "==v&&p!=v&&T();else t=v;return i},g=function(n,t){return n?t?function(){
return n.apply(window,arguments)&&t.apply(window,arguments)}:n:t},h=function(n,t){
var e=t||[];return n&&e.push(n),e},p=function(n){return 1==n.nodeType},v="",m=function(n,t){
return n?"class"==t?n.className||v:"for"==t?n.htmlFor||v:"style"==t?n.style.cssText||v:(l?n.getAttribute(t):n.getAttribute(t,2))||v:v;
},y={"*=":function(n,t){return function(e){return m(e,n).indexOf(t)>=0}},"^=":function(n,t){
return function(e){return 0==m(e,n).indexOf(t)}},"$=":function(n,t){return function(e){
var r=" "+m(e,n),i=r.lastIndexOf(t);return i>-1&&i==r.length-t.length}},"~=":function(n,t){
var e=" "+t+" ";return function(t){var r=" "+m(t,n)+" ";return r.indexOf(e)>=0}},
"|=":function(n,t){var e=t+"-";return function(r){var i=m(r,n);return i==t||0==i.indexOf(e);
}},"=":function(n,t){return function(e){return m(e,n)==t}}},b="undefined"==typeof f().firstChild.nextElementSibling,x=b?"nextSibling":"nextElementSibling",O=b?"previousSibling":"previousElementSibling",A=b?p:s,N=function(n){
for(;n=n[O];)if(A(n))return!1;return!0},_=function(n){for(;n=n[x];)if(A(n))return!1;
return!0},T=function(n){var e=n.parentNode;e=7!=e.nodeType?e:e.nextSibling;var r=0,i=e.children||e.childNodes,u=n._i||n.getAttribute("_i")||-1,o=e._l||("undefined"!=typeof e.getAttribute?e.getAttribute("_l"):-1);
if(!i)return-1;var f=i.length;if(o==f&&u>=0&&o>=0)return u;t("ie")&&"undefined"!=typeof e.setAttribute?e.setAttribute("_l",f):e._l=f,
u=-1;for(var a=e.firstElementChild||e.firstChild;a;a=a[x])A(a)&&(t("ie")?a.setAttribute("_i",++r):a._i=++r,
n===a&&(u=r));return u},w=function(n){return!(T(n)%2)},q=function(n){return T(n)%2;
},E={checked:function(n,t){return function(n){return!!("checked"in n?n.checked:n.selected);
}},disabled:function(n,t){return function(n){return n.disabled}},enabled:function(n,t){
return function(n){return!n.disabled}},"first-child":function(){return N},"last-child":function(){
return _},"only-child":function(n,t){return function(n){return N(n)&&_(n)}},empty:function(n,t){
return function(n){for(var t=n.childNodes,e=n.childNodes.length,r=e-1;r>=0;r--){var i=t[r].nodeType;
if(1===i||3==i)return!1}return!0}},contains:function(n,t){var e=t.charAt(0);return('"'==e||"'"==e)&&(t=t.slice(1,-1)),
function(n){return n.innerHTML.indexOf(t)>=0}},not:function(n,t){var e=d(t)[0],r={
el:1};"*"!=e.tag&&(r.tag=1),e.classes.length||(r.classes=1);var i=k(e,r);return function(n){
return!i(n)}},"nth-child":function(n,t){var e=parseInt;if("odd"==t)return q;if("even"==t)return w;
if(-1!=t.indexOf("n")){var r=t.split("n",2),i=r[0]?"-"==r[0]?-1:e(r[0]):1,u=r[1]?e(r[1]):0,o=0,f=-1;
if(i>0?0>u?u=u%i&&i+u%i:u>0&&(u>=i&&(o=u-u%i),u%=i):0>i&&(i*=-1,u>0&&(f=u,u%=i)),
i>0)return function(n){var t=T(n);return t>=o&&(0>f||f>=t)&&t%i==u};t=u}var a=e(t);
return function(n){return T(n)==a}}},S=t("ie")<9||9==t("ie")&&t("quirks")?function(n){
var t=n.toLowerCase();return"class"==t&&(n="className"),function(e){return l?e.getAttribute(n):e[n]||e[t];
}}:function(n){return function(t){return t&&t.getAttribute&&t.hasAttribute(n)}},k=function(n,t){
if(!n)return s;t=t||{};var e=null;return"el"in t||(e=g(e,p)),"tag"in t||"*"!=n.tag&&(e=g(e,function(t){
return t&&(l?t.tagName:t.tagName.toUpperCase())==n.getTag()})),"classes"in t||o(n.classes,function(n,t,r){
var i=new RegExp("(?:^|\\s)"+n+"(?:\\s|$)");e=g(e,function(n){return i.test(n.className);
}),e.count=t}),"pseudos"in t||o(n.pseudos,function(n){var t=n.name;E[t]&&(e=g(e,E[t](t,n.value)));
}),"attrs"in t||o(n.attrs,function(n){var t,r=n.attr;n.type&&y[n.type]?t=y[n.type](r,n.matchFor):r.length&&(t=S(r)),
t&&(e=g(e,t))}),"id"in t||n.id&&(e=g(e,function(t){return!!t&&t.id==n.id})),e||"default"in t||(e=s),
e},C=function(n){return function(t,e,r){for(;t=t[x];)if(!b||p(t)){r&&!X(t,r)||!n(t)||e.push(t);
break}return e}},F=function(n){return function(t,e,r){for(var i=t[x];i;){if(A(i)){
if(r&&!X(i,r))break;n(i)&&e.push(i)}i=i[x]}return e}},z=function(n){return n=n||s,
function(t,e,r){for(var i,u=0,o=t.children||t.childNodes;i=o[u++];)A(i)&&(!r||X(i,r))&&n(i,u)&&e.push(i);
return e}},I=function(n,t){for(var e=n.parentNode;e&&e!=t;)e=e.parentNode;return!!e;
},B={},D=function(t){var e=B[t.query];if(e)return e;var r=t.infixOper,i=r?r.oper:"",u=k(t,{
el:1}),o=t.tag,c="*"==o,l=f().getElementsByClassName;if(i){var d={el:1};c&&(d.tag=1),
u=k(t,d),"+"==i?e=C(u):"~"==i?e=F(u):">"==i&&(e=z(u))}else if(t.id)u=!t.loops&&c?s:k(t,{
el:1,id:1}),e=function(e,r){var i=n.byId(t.id,e.ownerDocument||e);if(i&&u(i))return 9==e.nodeType?h(i,r):I(i,e)?h(i,r):void 0;
};else if(l&&/\{\s*\[native code\]\s*\}/.test(String(l))&&t.classes.length&&!a){u=k(t,{
el:1,classes:1,id:1});var g=t.classes.join(" ");e=function(n,t,e){for(var r,i=h(0,t),o=0,f=n.getElementsByClassName(g);r=f[o++];)u(r,n)&&X(r,e)&&i.push(r);
return i}}else c||t.loops?(u=k(t,{el:1,tag:1,id:1}),e=function(n,e,r){for(var i,o=h(0,e),f=0,a=t.getTag(),c=a?n.getElementsByTagName(a):[];i=c[f++];)u(i,n)&&X(i,r)&&o.push(i);
return o}):e=function(n,e,r){for(var i,u=h(0,e),o=0,f=t.getTag(),a=f?n.getElementsByTagName(f):[];i=a[o++];)X(i,r)&&u.push(i);
return u};return B[t.query]=e},$=function(n,t){for(var e,r,i,u,o,f=h(n),a=t.length,c=0;a>c;c++){
o=[],e=t[c],r=f.length-1,r>0&&(u={},o.nozip=!0);for(var l=D(e),s=0;i=f[s];s++)l(i,o,u);
if(!o.length)break;f=o}return o},L={},M={},U=function(n){var t=d(u(n));if(1==t.length){
var e=D(t[0]);return function(n){var t=e(n,[]);return t&&(t.nozip=!0),t}}return function(n){
return $(n,t)}},j=t("ie")?"commentStrip":"nozip",H="querySelectorAll",R=!!f()[H],G=/\\[>~+]|n\+\d|([^ \\])?([>~+])([^ =])?/g,J=function(n,t,e,r){
return e?(t?t+" ":"")+e+(r?" "+r:""):n},K=/([^[]*)([^\]]*])?/g,P=function(n,t,e){
return t.replace(G,J)+(e||"")},Q=function(n,e){if(n=n.replace(K,P),R){var r=M[n];if(r&&!e)return r;
}var i=L[n];if(i)return i;var u=n.charAt(0),o=-1==n.indexOf(" ");n.indexOf("#")>=0&&o&&(e=!0);
var f=!(!R||e||-1!=c.indexOf(u)||t("ie")&&-1!=n.indexOf(":")||a&&n.indexOf(".")>=0||-1!=n.indexOf(":contains")||-1!=n.indexOf(":checked")||-1!=n.indexOf("|="));
if(f){var l=c.indexOf(n.charAt(n.length-1))>=0?n+" *":n;return M[n]=function(t){try{
if(9!=t.nodeType&&!o)throw"";var e=t[H](l);return e[j]=!0,e}catch(r){return Q(n,!0)(t);
}}}var s=n.match(/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g);return L[n]=s.length<2?U(n):function(n){
for(var t,e=0,r=[];t=s[e++];)r=r.concat(U(t)(n));return r}},V=0,W=t("ie")?function(n){
return l?n.getAttribute("_uid")||n.setAttribute("_uid",++V)||V:n.uniqueID}:function(n){
return n._uid||(n._uid=++V)},X=function(n,t){if(!t)return 1;var e=W(n);return t[e]?0:t[e]=1;
},Y="_zipIdx",Z=function(n){if(n&&n.nozip)return n;if(!n||!n.length)return[];if(n.length<2)return[n[0]];
var e=[];V++;var r,i;if(t("ie")&&l){var u=V+"";for(r=0;r<n.length;r++)(i=n[r])&&i.getAttribute(Y)!=u&&(e.push(i),
i.setAttribute(Y,u))}else if(t("ie")&&n.commentStrip)try{for(r=0;r<n.length;r++)(i=n[r])&&p(i)&&e.push(i);
}catch(o){}else for(r=0;r<n.length;r++)(i=n[r])&&i[Y]!=V&&(e.push(i),i[Y]=V);return e;
},nn=function(n,t){t=t||f();var e=t.ownerDocument||t;l="div"===e.createElement("div").tagName;
var r=Q(n)(t);return r&&r.nozip?r:Z(r)};return nn.filter=function(t,r,i){for(var u,o=[],f=d(r),a=1!=f.length||/[^\w#\.]/.test(r)?function(t){
return-1!=e.indexOf(nn(r,n.byId(i)),t)}:k(f[0]),c=0;u=t[c];c++)a(u)&&o.push(u);return o;
},nn});