define(["require","./_base/kernel","./_base/lang","./_base/array","./_base/config","./dom","./_base/window","./_base/url","./aspect","./promise/all","./date/stamp","./Deferred","./has","./query","./on","./ready"],function(require,dojo,dlang,darray,config,dom,dwindow,_Url,aspect,all,dates,Deferred,has,query,don,ready){
function myEval(text){return eval("("+text+")")}function getNameMap(e){var t=e._nameCaseMap,r=e.prototype;
if(!t||t._extendCnt<extendCnt){t=e._nameCaseMap={};for(var a in r)"_"!==a.charAt(0)&&(t[a.toLowerCase()]=a);
t._extendCnt=extendCnt}return t}function getCtor(e,t){var r=e.join();if(!_ctorMap[r]){
for(var a=[],n=0,o=e.length;o>n;n++){var i=e[n];a[a.length]=_ctorMap[i]=_ctorMap[i]||dlang.getObject(i)||~i.indexOf("/")&&(t?t(i):require(i));
}var s=a.shift();_ctorMap[r]=a.length?s.createSubclass?s.createSubclass(a):s.extend.apply(s,a):s;
}return _ctorMap[r]}new Date("X");var extendCnt=0;aspect.after(dlang,"extend",function(){
extendCnt++},!0);var _ctorMap={},parser={_clearCache:function(){extendCnt++,_ctorMap={};
},_functionFromScript:function(e,t){var r="",a="",n=e.getAttribute(t+"args")||e.getAttribute("args"),o=e.getAttribute("with"),i=(n||"").split(/\s*,\s*/);
return o&&o.length&&darray.forEach(o.split(/\s*,\s*/),function(e){r+="with("+e+"){",
a+="}"}),new Function(i,r+e.innerHTML+a)},instantiate:function(e,t,r){t=t||{},r=r||{};
var a=(r.scope||dojo._scopeName)+"Type",n="data-"+(r.scope||dojo._scopeName)+"-",o=n+"type",i=n+"mixins",s=[];
return darray.forEach(e,function(e){var r=a in t?t[a]:e.getAttribute(o)||e.getAttribute(a);
if(r){var n=e.getAttribute(i),c=n?[r].concat(n.split(/\s*,\s*/)):[r];s.push({node:e,
types:c})}}),this._instantiate(s,t,r)},_instantiate:function(e,t,r,a){function n(e){
return t._started||r.noStart||darray.forEach(e,function(e){"function"!=typeof e.startup||e._started||e.startup();
}),e}var o=darray.map(e,function(e){var a=e.ctor||getCtor(e.types,r.contextRequire);
if(!a)throw new Error("Unable to resolve constructor for: '"+e.types.join()+"'");return this.construct(a,e.node,t,r,e.scripts,e.inherited);
},this);return a?all(o).then(n):n(o)},construct:function(e,t,r,a,n,o){function i(e){
for(v&&dlang.setObject(v,e),m=0;m<S.length;m++)aspect[S[m].advice||"after"](e,S[m].method,dlang.hitch(e,S[m].func),!0);
for(m=0;m<k.length;m++)k[m].call(e);for(m=0;m<M.length;m++)e.watch(M[m].prop,M[m].func);
for(m=0;m<D.length;m++)don(e,D[m].event,D[m].func);return e}var s=e&&e.prototype;a=a||{};
var c={};a.defaults&&dlang.mixin(c,a.defaults),o&&dlang.mixin(c,o);var d;if(has("dom-attributes-explicit"))d=t.attributes;else if(has("dom-attributes-specified-flag"))d=darray.filter(t.attributes,function(e){
return e.specified});else{var u=/^input$|^img$/i.test(t.nodeName)?t:t.cloneNode(!1),p=u.outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g,"").replace(/^\s*<[a-zA-Z0-9]*\s*/,"").replace(/\s*>.*$/,"");
d=darray.map(p.split(/\s+/),function(e){var r=e.toLowerCase();return{name:e,value:"LI"==t.nodeName&&"value"==e||"enctype"==r?t.getAttribute(r):t.getAttributeNode(r).value
}})}var l=a.scope||dojo._scopeName,f="data-"+l+"-",h={};"dojo"!==l&&(h[f+"props"]="data-dojo-props",
h[f+"type"]="data-dojo-type",h[f+"mixins"]="data-dojo-mixins",h[l+"type"]="dojoType",
h[f+"id"]="data-dojo-id");for(var g,v,b,m=0,y=[];g=d[m++];){var j=g.name,x=j.toLowerCase(),_=g.value;
switch(h[x]||x){case"data-dojo-type":case"dojotype":case"data-dojo-mixins":break;case"data-dojo-props":
b=_;break;case"data-dojo-id":case"jsid":v=_;break;case"data-dojo-attach-point":case"dojoattachpoint":
c.dojoAttachPoint=_;break;case"data-dojo-attach-event":case"dojoattachevent":c.dojoAttachEvent=_;
break;case"class":c["class"]=t.className;break;case"style":c.style=t.style&&t.style.cssText;
break;default:if(!(j in s)){var w=getNameMap(e);j=w[x]||j}if(j in s)switch(typeof s[j]){
case"string":c[j]=_;break;case"number":c[j]=_.length?Number(_):NaN;break;case"boolean":
c[j]="false"!=_.toLowerCase();break;case"function":""===_||-1!=_.search(/[^\w\.]+/i)?c[j]=new Function(_):c[j]=dlang.getObject(_,!1)||new Function(_),
y.push(j);break;default:var A=s[j];c[j]=A&&"length"in A?_?_.split(/\s*,\s*/):[]:A instanceof Date?""==_?new Date(""):"now"==_?new Date:dates.fromISOString(_):A instanceof _Url?dojo.baseUrl+_:myEval(_);
}else c[j]=_}}for(var C=0;C<y.length;C++){var N=y[C].toLowerCase();t.removeAttribute(N),
t[N]=null}if(b)try{b=myEval.call(a.propsThis,"{"+b+"}"),dlang.mixin(c,b)}catch(q){
throw new Error(q.toString()+" in data-dojo-props='"+b+"'")}dlang.mixin(c,r),n||(n=e&&(e._noScript||s._noScript)?[]:query("> script[type^='dojo/']",t));
var S=[],k=[],M=[],D=[];if(n)for(m=0;m<n.length;m++){var E=n[m];t.removeChild(E);var L=E.getAttribute(f+"event")||E.getAttribute("event"),T=E.getAttribute(f+"prop"),O=E.getAttribute(f+"method"),F=E.getAttribute(f+"advice"),R=E.getAttribute("type"),I=this._functionFromScript(E,f);
L?"dojo/connect"==R?S.push({method:L,func:I}):"dojo/on"==R?D.push({event:L,func:I
}):c[L]=I:"dojo/aspect"==R?S.push({method:O,advice:F,func:I}):"dojo/watch"==R?M.push({
prop:T,func:I}):k.push(I)}var P=e.markupFactory||s.markupFactory,U=P?P(c,t,e):new e(c,t);
return U.then?U.then(i):i(U)},scan:function(e,t){function r(e,t){return e.getAttribute&&e.getAttribute(t)||e.parentNode&&r(e.parentNode,t);
}function a(e){if(!e.inherited){e.inherited={};var t=e.node,r=a(e.parent),n={dir:t.getAttribute("dir")||r.dir,
lang:t.getAttribute("lang")||r.lang,textDir:t.getAttribute(u)||r.textDir};for(var o in n)n[o]&&(e.inherited[o]=n[o]);
}return e.inherited}var n=[],o=[],i={},s=(t.scope||dojo._scopeName)+"Type",c="data-"+(t.scope||dojo._scopeName)+"-",d=c+"type",u=c+"textdir",p=c+"mixins",l=e.firstChild,f=t.inherited;
if(!f){f={dir:r(e,"dir"),lang:r(e,"lang"),textDir:r(e,u)};for(var h in f)f[h]||delete f[h];
}for(var g,v,b={inherited:f};;)if(l)if(1==l.nodeType)if(g&&"script"==l.nodeName.toLowerCase())m=l.getAttribute("type"),
m&&/^dojo\/\w/i.test(m)&&g.push(l),l=l.nextSibling;else if(v)l=l.nextSibling;else{
var m=l.getAttribute(d)||l.getAttribute(s),y=l.firstChild;if(m||y&&(3!=y.nodeType||y.nextSibling)){
var j,x=null;if(m){var _=l.getAttribute(p),w=_?[m].concat(_.split(/\s*,\s*/)):[m];
try{x=getCtor(w,t.contextRequire)}catch(A){}x||darray.forEach(w,function(e){~e.indexOf("/")&&!i[e]&&(i[e]=!0,
o[o.length]=e)});var C=x&&!x.prototype._noScript?[]:null;j={types:w,ctor:x,parent:b,
node:l,scripts:C},j.inherited=a(j),n.push(j)}else j={node:l,scripts:g,parent:b};g=C,
v=l.stopParser||x&&x.prototype.stopParser&&!t.template,b=j,l=y}else l=l.nextSibling;
}else l=l.nextSibling;else{if(!b||!b.node)break;l=b.node.nextSibling,v=!1,b=b.parent,
g=b.scripts}var N=new Deferred;if(o.length){has("dojo-debug-messages")&&console.warn("WARNING: Modules being Auto-Required: "+o.join(", "));
var q=t.contextRequire||require;q(o,function(){N.resolve(darray.filter(n,function(e){
if(!e.ctor)try{e.ctor=getCtor(e.types,t.contextRequire)}catch(r){}for(var a=e.parent;a&&!a.types;)a=a.parent;
var n=e.ctor&&e.ctor.prototype;return e.instantiateChildren=!(n&&n.stopParser&&!t.template),
e.instantiate=!a||a.instantiate&&a.instantiateChildren,e.instantiate}))})}else N.resolve(n);
return N.promise},_require:function(e,t){var r=myEval("{"+e.innerHTML+"}"),a=[],n=[],o=new Deferred,i=t&&t.contextRequire||require;
for(var s in r)a.push(s),n.push(r[s]);return i(n,function(){for(var e=0;e<a.length;e++)dlang.setObject(a[e],arguments[e]);
o.resolve(arguments)}),o.promise},_scanAmd:function(e,t){var r=new Deferred,a=r.promise;
r.resolve(!0);var n=this;return query("script[type='dojo/require']",e).forEach(function(e){
a=a.then(function(){return n._require(e,t)}),e.parentNode.removeChild(e)}),a},parse:function(e,t){
var r;!t&&e&&e.rootNode?(t=e,r=t.rootNode):!e||!dlang.isObject(e)||"nodeType"in e?r=e:t=e,
r=r?dom.byId(r):dwindow.body(),t=t||{};var a=t.template?{template:!0}:{},n=[],o=this,i=this._scanAmd(r,t).then(function(){
return o.scan(r,t)}).then(function(e){return o._instantiate(e,a,t,!0)}).then(function(e){
return n=n.concat(e)}).otherwise(function(e){throw console.error("dojo/parser::parse() error",e),
e});return dlang.mixin(n,i),n}};return has("extend-dojo")&&(dojo.parser=parser),config.parseOnLoad&&ready(100,parser,"parse"),
parser});