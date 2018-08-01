define(["dojo/_base/lang","./_base","dojox/string/tokenize","./Context","dojo/dom","dojo/dom-construct","dojo/_base/html","dojo/_base/array","dojo/_base/connect","dojo/_base/sniff"],function(e,t,n,r,o,i,s,h,a,d){
t.BOOLS={checked:1,disabled:1,readonly:1},t.TOKEN_CHANGE=-11,t.TOKEN_ATTR=-12,t.TOKEN_CUSTOM=-13,
t.TOKEN_NODE=1;var c=t.text,u=t.dom={_attributes:{},_uppers:{},_re4:/^function anonymous\(\)\s*{\s*(.*)\s*}$/,
_reTrim:/(?:^[\n\s]*(\{%)?\s*|\s*(%\})?[\n\s]*$)/g,_reSplit:/\s*%\}[\n\s]*\{%\s*/g,
getTemplate:function(t){if("undefined"==typeof this._commentable){this._commentable=!1;
var r=document.createElement("div"),o="Test comment handling, and long comments, using comments whenever possible.";
r.innerHTML="<!--"+o+"-->",r.childNodes.length&&8==r.firstChild.nodeType&&r.firstChild.data==o&&(this._commentable=!0);
}this._commentable||(t=t.replace(/<!--({({|%).*?(%|})})-->/g,"$1")),d("ie")&&(t=t.replace(/\b(checked|disabled|readonly|style)="/g,'t$1="')),
t=t.replace(/\bstyle="/g,'tstyle="');for(var i,s,h=d("webkit"),a=[[!0,"select","option"],[h,"tr","td|th"],[h,"thead","tr","th"],[h,"tbody","tr","td"],[h,"table","tbody|thead|tr","tr","td"]],c=[],u=0;s=a[u];u++)if(s[0]&&-1!=t.indexOf("<"+s[1]))for(var f=new RegExp("<"+s[1]+"(?:.|\n)*?>((?:.|\n)+?)</"+s[1]+">","ig");i=f.exec(t);){
for(var l,p=s[2].split("|"),_=[],m=0;l=p[m];m++)_.push("<"+l+"(?:.|\n)*?>(?:.|\n)*?</"+l+">");
var g=[],v=n(i[1],new RegExp("("+_.join("|")+")","ig"),function(e){var t=/<(\w+)/.exec(e)[1];
return g[t]||(g[t]=!0,g.push(t)),{data:e}});if(g.length){for(var N=1==g.length?g[0]:s[2].split("|")[0],T=[],m=0,w=v.length;w>m;m++){
var y=v[m];if(e.isObject(y))T.push(y.data);else{var x=y.replace(this._reTrim,"");if(!x)continue;
y=x.split(this._reSplit);for(var E=0,C=y.length;C>E;E++){for(var b="",O=2,A=s.length;A>O;O++)if(2==O)b+="<"+N+' dtlinstruction="{% '+y[E].replace('"','\\"')+' %}">';else{
if(N==s[O])continue;b+="<"+s[O]+">"}b+="DTL";for(var O=s.length-1;O>1;O--)if(2==O)b+="</"+N+">";else{
if(N==s[O])continue;b+="</"+s[O]+">"}T.push("ÿ"+c.length),c.push(b)}}}t=t.replace(i[1],T.join(""));
}}for(var u=c.length;u--;)t=t.replace("ÿ"+u,c[u]);for(var D=/\b([a-zA-Z_:][a-zA-Z0-9_\-\.:]*)=['"]/g;i=D.exec(t);){
var k=i[1].toLowerCase();"dtlinstruction"!=k&&(k!=i[1]&&(this._uppers[k]=i[1]),this._attributes[k]=!0);
}var r=document.createElement("div");r.innerHTML=t;for(var K={nodes:[]};r.childNodes.length;)K.nodes.push(r.removeChild(r.childNodes[0]));
return K},tokenize:function(e){for(var t,n=[],r=0;t=e[r++];)1!=t.nodeType?this.__tokenize(t,n):this._tokenize(t,n);
return n},_swallowed:[],_tokenize:function(n,r){var o,i,s,h=!1,a=this._swallowed;if(!r.first){
h=r.first=!0;var c=t.register.getAttributeTags();for(o=0;i=c[o];o++)try{i[2]({swallowNode:function(){
throw 1}},new t.Token(t.TOKEN_ATTR,""))}catch(u){a.push(i)}}for(o=0;i=a[o];o++){var f=n.getAttribute(i[0]);
if(f){var a=!1,l=i[2]({swallowNode:function(){return a=!0,n}},new t.Token(t.TOKEN_ATTR,i[0]+" "+f));
if(a)return n.parentNode&&n.parentNode.removeChild&&n.parentNode.removeChild(n),void r.push([t.TOKEN_CUSTOM,l]);
}}var p=[];if(d("ie")&&"SCRIPT"==n.tagName)p.push({nodeType:3,data:n.text}),n.text="";else for(o=0;s=n.childNodes[o];o++)p.push(s);
r.push([t.TOKEN_NODE,n]);var _=!1;p.length&&(r.push([t.TOKEN_CHANGE,n]),_=!0);for(var m in this._attributes){
var g=!1,v="";if("class"==m)v=n.className||v;else if("for"==m)v=n.htmlFor||v;else{
if("value"==m&&n.value==n.innerHTML)continue;if(n.getAttribute)if(v=n.getAttribute(m,2)||v,
"href"==m||"src"==m){if(d("ie")){var N=location.href.lastIndexOf(location.hash),T=location.href.substring(0,N).split("/");
T.pop(),T=T.join("/")+"/",0==v.indexOf(T)&&(v=v.replace(T,"")),v=decodeURIComponent(v);
}}else"tstyle"==m?(g=m,m="style"):t.BOOLS[m.slice(1)]&&e.trim(v)?m=m.slice(1):this._uppers[m]&&e.trim(v)&&(g=this._uppers[m]);
}g&&(n.setAttribute(g,""),n.removeAttribute(g)),"function"==typeof v&&(v=v.toString().replace(this._re4,"$1")),
_||(r.push([t.TOKEN_CHANGE,n]),_=!0),r.push([t.TOKEN_ATTR,n,m,v])}for(o=0,s;s=p[o];o++){
if(1==s.nodeType){var w=s.getAttribute("dtlinstruction");w&&(s.parentNode.removeChild(s),
s={nodeType:8,data:w})}this.__tokenize(s,r)}!h&&n.parentNode&&n.parentNode.tagName?(_&&r.push([t.TOKEN_CHANGE,n,!0]),
r.push([t.TOKEN_CHANGE,n.parentNode]),n.parentNode.removeChild(n)):r.push([t.TOKEN_CHANGE,n,!0,!0]);
},__tokenize:function(n,r){var o=n.data;switch(n.nodeType){case 1:return void this._tokenize(n,r);
case 3:if(!o.match(/[^\s\n]/)||-1==o.indexOf("{{")&&-1==o.indexOf("{%"))r.push([n.nodeType,n]);else for(var i,s=c.tokenize(o),h=0;i=s[h];h++)"string"==typeof i?r.push([t.TOKEN_TEXT,i]):r.push(i);
return void(n.parentNode&&n.parentNode.removeChild(n));case 8:if(0==o.indexOf("{%")){
var i=e.trim(o.slice(2,-2));if("load "==i.substr(0,5))for(var a,d=e.trim(i).split(/\s+/g),u=1;a=d[u];u++)/\./.test(a)&&(a=a.replace(/\./g,"/")),
require([a]);r.push([t.TOKEN_BLOCK,i])}return 0==o.indexOf("{{")&&r.push([t.TOKEN_VAR,e.trim(o.slice(2,-2))]),
void(n.parentNode&&n.parentNode.removeChild(n))}}};return t.DomTemplate=e.extend(function(e){
if(!e.nodes){var n=o.byId(e);n&&1==n.nodeType?(h.forEach(["class","src","href","name","value"],function(e){
u._attributes[e]=!0}),e={nodes:[n]}):("object"==typeof e&&(e=c.getTemplateString(e)),
e=u.getTemplate(e))}var r=u.tokenize(e.nodes);t.tests&&(this.tokens=r.slice(0));var i=new t._DomParser(r);
this.nodelist=i.parse()},{_count:0,_re:/\bdojo:([a-zA-Z0-9_]+)\b/g,setClass:function(e){
this.getRootNode().className=e},getRootNode:function(){return this.buffer.rootNode;
},getBuffer:function(){return new t.DomBuffer},render:function(e,n){n=this.buffer=n||this.getBuffer(),
this.rootNode=null;for(var r,o=this.nodelist.render(e||new t.Context({}),n),i=0;r=n._cache[i];i++)r._cache&&(r._cache.length=0);
return o},unrender:function(e,t){return this.nodelist.unrender(e,t)}}),t.DomBuffer=e.extend(function(e){
this._parent=e,this._cache=[]},{concat:function(t){var n=this._parent;if(n&&t.parentNode&&t.parentNode===n&&!n._dirty)return this;
if(1==t.nodeType&&!this.rootNode)return this.rootNode=t||!0,this;if(!n){if(3==t.nodeType&&e.trim(t.data))throw new Error("Text should not exist outside of the root node in template");
return this}if(this._closed){if(3!=t.nodeType||e.trim(t.data))throw new Error("Content should not exist outside of the root node in template");
return this}if(n._dirty){if(t._drawn&&t.parentNode==n){var r=n._cache;if(r){for(var o,i=0;o=r[i];i++)this.onAddNode&&this.onAddNode(o),
n.insertBefore(o,t),this.onAddNodeComplete&&this.onAddNodeComplete(o);r.length=0}
}n._dirty=!1}return n._cache||(n._cache=[],this._cache.push(n)),n._dirty=!0,n._cache.push(t),
this},remove:function(e){if("string"==typeof e)this._parent&&this._parent.removeAttribute(e);else{
if(1==e.nodeType&&!this.getRootNode()&&!this._removed)return this._removed=!0,this;
e.parentNode&&(this.onRemoveNode&&this.onRemoveNode(e),e.parentNode&&e.parentNode.removeChild(e));
}return this},setAttribute:function(e,t){var n=s.attr(this._parent,e);return this.onChangeAttribute&&n!=t&&this.onChangeAttribute(this._parent,e,n,t),
"style"==e?this._parent.style.cssText=t:(s.attr(this._parent,e,t),"value"==e&&this._parent.setAttribute(e,t)),
this},addEvent:function(t,n,r,o){if(!t.getThis())throw new Error("You must use Context.setObject(instance)");
this.onAddEvent&&this.onAddEvent(this.getParent(),n,r);var i=r;return e.isArray(o)&&(i=function(e){
this[r].apply(this,[e].concat(o))}),a.connect(this.getParent(),n,t.getThis(),i)},
setParent:function(e,t,n){if(this._parent||(this._parent=this._first=e),t&&n&&e===this._first&&(this._closed=!0),
t){var r=this._parent,o="",i=d("ie")&&"SCRIPT"==r.tagName;if(i&&(r.text=""),r._dirty){
for(var s,h=r._cache,a="SELECT"==r.tagName&&!r.options.length,c=0;s=h[c];c++)s!==r&&(this.onAddNode&&this.onAddNode(s),
i?o+=s.data:(r.appendChild(s),a&&s.defaultSelected&&c&&(a=c)),this.onAddNodeComplete&&this.onAddNodeComplete(s));
a&&(r.options.selectedIndex="number"==typeof a?a:0),h.length=0,r._dirty=!1}i&&(r.text=o);
}return this._parent=e,this.onSetParent&&this.onSetParent(e,t,n),this},getParent:function(){
return this._parent},getRootNode:function(){return this.rootNode}}),t._DomNode=e.extend(function(e){
this.contents=e},{render:function(e,t){return this._rendered=!0,t.concat(this.contents);
},unrender:function(e,t){return this._rendered?(this._rendered=!1,t.remove(this.contents)):t;
},clone:function(e){return new this.constructor(this.contents)}}),t._DomNodeList=e.extend(function(e){
this.contents=e||[]},{push:function(e){this.contents.push(e)},unshift:function(e){
this.contents.unshift(e)},render:function(e,n,r){if(n=n||t.DomTemplate.prototype.getBuffer(),
r)var o=n.getParent();for(var i=0;i<this.contents.length;i++)if(n=this.contents[i].render(e,n),
!n)throw new Error("Template node render functions must return their buffer");return o&&n.setParent(o),
n},dummyRender:function(e,n,r){var o=document.createElement("div"),s=n.getParent(),h=s._clone;
s._clone=o;var a=this.clone(n,o);if(h?s._clone=h:s._clone=null,n=t.DomTemplate.prototype.getBuffer(),
a.unshift(new t.ChangeNode(o)),a.unshift(new t._DomNode(o)),a.push(new t.ChangeNode(o,!0)),
a.render(e,n),r)return n.getRootNode();var c=o.innerHTML;return d("ie")?i.replace(/\s*_(dirty|clone)="[^"]*"/g,""):c;
},unrender:function(e,t,n){if(n)var r=t.getParent();for(var o=0;o<this.contents.length;o++)if(t=this.contents[o].unrender(e,t),
!t)throw new Error("Template node render functions must return their buffer");return r&&t.setParent(r),
t},clone:function(e){for(var n=e.getParent(),r=this.contents,o=new t._DomNodeList,i=[],s=0;s<r.length;s++){
var h=r[s].clone(e);if(h instanceof t.ChangeNode||h instanceof t._DomNode){var a=h.contents._clone;
if(a)h.contents=a;else if(n!=h.contents&&h instanceof t._DomNode){var d=h.contents;
h.contents=h.contents.cloneNode(!1),e.onClone&&e.onClone(d,h.contents),i.push(d),
d._clone=h.contents}}o.push(h)}for(var h,s=0;h=i[s];s++)h._clone=null;return o},rtrim:function(){
for(;;){var e=this.contents.length-1;if(!(this.contents[e]instanceof t._DomTextNode&&this.contents[e].isEmpty()))break;
this.contents.pop()}return this}}),t._DomVarNode=e.extend(function(e){this.contents=new t._Filter(e);
},{render:function(e,n){var r=this.contents.resolve(e),o="text";switch(r&&(r.render&&r.getRootNode?o="injection":r.safe&&(r.nodeType?o="node":r.toString&&(r=r.toString(),
o="html"))),this._type&&o!=this._type&&this.unrender(e,n),this._type=o,o){case"text":
if(this._rendered=!0,this._txt=this._txt||document.createTextNode(r),this._txt.data!=r){
var i=this._txt.data;this._txt.data=r,n.onChangeData&&n.onChangeData(this._txt,i,this._txt.data);
}return n.concat(this._txt);case"injection":var s=r.getRootNode();this._rendered&&s!=this._root&&(n=this.unrender(e,n)),
this._root=s;var h=this._injected=new t._DomNodeList;return h.push(new t.ChangeNode(n.getParent())),
h.push(new t._DomNode(s)),h.push(r),h.push(new t.ChangeNode(n.getParent())),this._rendered=!0,
h.render(e,n);case"node":return this._rendered=!0,this._node&&this._node!=r&&this._node.parentNode&&this._node.parentNode===n.getParent()&&this._node.parentNode.removeChild(this._node),
this._node=r,n.concat(r);case"html":if(this._rendered&&this._src!=r&&(n=this.unrender(e,n)),
this._src=r,!this._rendered){this._rendered=!0,this._html=this._html||[];var a=this._div=this._div||document.createElement("div");
a.innerHTML=r;for(var d=a.childNodes;d.length;){var c=a.removeChild(d[0]);this._html.push(c),
n=n.concat(c)}}return n;default:return n}},unrender:function(e,t){if(!this._rendered)return t;
switch(this._rendered=!1,this._type){case"text":return t.remove(this._txt);case"injection":
return this._injection.unrender(e,t);case"node":return this._node.parentNode===t.getParent()?t.remove(this._node):t;
case"html":for(var n=0,r=this._html.length;r>n;n++)t=t.remove(this._html[n]);return t;
default:return t}},clone:function(){return new this.constructor(this.contents.getExpression());
}}),t.ChangeNode=e.extend(function(e,t,n){this.contents=e,this.up=t,this.root=n},{
render:function(e,t){return t.setParent(this.contents,this.up,this.root)},unrender:function(e,t){
return t.getParent()?t.setParent(this.contents):t},clone:function(){return new this.constructor(this.contents,this.up,this.root);
}}),t.AttributeNode=e.extend(function(e,n){this.key=e,this.value=n,this.contents=n,
this._pool[n]?this.nodelist=this._pool[n]:((this.nodelist=t.quickFilter(n))||(this.nodelist=new t.Template(n,!0).nodelist),
this._pool[n]=this.nodelist),this.contents=""},{_pool:{},render:function(e,n){var r=this.key,o=this.nodelist.dummyRender(e);
return t.BOOLS[r]&&(o=!("false"==o||"undefined"==o||!o)),o!==this.contents?(this.contents=o,
n.setAttribute(r,o)):n},unrender:function(e,t){return this.contents="",t.remove(this.key);
},clone:function(e){return new this.constructor(this.key,this.value)}}),t._DomTextNode=e.extend(function(e){
this.contents=document.createTextNode(e),this.upcoming=e},{set:function(e){return this.upcoming=e,
this},render:function(e,t){if(this.contents.data!=this.upcoming){var n=this.contents.data;
this.contents.data=this.upcoming,t.onChangeData&&t.onChangeData(this.contents,n,this.upcoming);
}return t.concat(this.contents)},unrender:function(e,t){return t.remove(this.contents);
},isEmpty:function(){return!e.trim(this.contents.data)},clone:function(){return new this.constructor(this.contents.data);
}}),t._DomParser=e.extend(function(e){this.contents=e},{i:0,parse:function(n){var r={},o=this.contents;
n||(n=[]);for(var i=0;i<n.length;i++)r[n[i]]=!0;for(var h=new t._DomNodeList;this.i<o.length;){
var a=o[this.i++],d=a[0],u=a[1];if(d==t.TOKEN_CUSTOM)h.push(u);else if(d==t.TOKEN_CHANGE){
var f=new t.ChangeNode(u,a[2],a[3]);u[f.attr]=f,h.push(f)}else if(d==t.TOKEN_ATTR){
var l=c.getTag("attr:"+a[2],!0);if(l&&a[3])(-1!=a[3].indexOf("{%")||-1!=a[3].indexOf("{{"))&&u.setAttribute(a[2],""),
h.push(l(null,new t.Token(d,a[2]+" "+a[3])));else if(e.isString(a[3]))if("style"==a[2]||-1!=a[3].indexOf("{%")||-1!=a[3].indexOf("{{"))h.push(new t.AttributeNode(a[2],a[3]));else if(e.trim(a[3]))try{
s.attr(u,a[2],a[3])}catch(p){}}else if(d==t.TOKEN_NODE){var l=c.getTag("node:"+u.tagName.toLowerCase(),!0);
l&&h.push(l(null,new t.Token(d,u),u.tagName.toLowerCase())),h.push(new t._DomNode(u));
}else if(d==t.TOKEN_VAR)h.push(new t._DomVarNode(u));else if(d==t.TOKEN_TEXT)h.push(new t._DomTextNode(u.data||u));else if(d==t.TOKEN_BLOCK){
if(r[u])return--this.i,h;var _=u.split(/\s+/g);if(_.length){_=_[0];var l=c.getTag(_);
if("function"!=typeof l)throw new Error("Function not found for "+_);var m=l(this,new t.Token(d,u));
m&&h.push(m)}}}if(n.length)throw new Error("Could not find closing tag(s): "+n.toString());
return h},next_token:function(){var e=this.contents[this.i++];return new t.Token(e[0],e[1]);
},delete_first_token:function(){this.i++},skip_past:function(e){return t._Parser.prototype.skip_past.call(this,e);
},create_variable_node:function(e){return new t._DomVarNode(e)},create_text_node:function(e){
return new t._DomTextNode(e||"")},getTemplate:function(e){return new t.DomTemplate(u.getTemplate(e));
}}),u});