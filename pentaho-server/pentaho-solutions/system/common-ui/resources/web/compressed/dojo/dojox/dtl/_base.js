define(["dojo/_base/kernel","dojo/_base/lang","dojox/string/tokenize","dojo/_base/json","dojo/dom","dojo/_base/xhr","dojox/string/Builder","dojo/_base/Deferred"],function(t,e,r,n,s,o,a,u){
t.experimental("dojox.dtl");var c=e.getObject("dojox.dtl",!0);c._base={},c.TOKEN_BLOCK=-1,
c.TOKEN_VAR=-2,c.TOKEN_COMMENT=-3,c.TOKEN_TEXT=3,c._Context=e.extend(function(t){
t&&(e._mixin(this,t),t.get&&(this._getter=t.get,delete this.get))},{push:function(){
var t=this,r=e.delegate(this);return r.pop=function(){return t},r},pop:function(){
throw new Error("pop() called on empty Context")},get:function(t,e){var r=this._normalize;
if(this._getter){var n=this._getter(t);if(void 0!==n)return r(n)}return void 0!==this[t]?r(this[t]):e;
},_normalize:function(t){return t instanceof Date&&(t.year=t.getFullYear(),t.month=t.getMonth()+1,
t.day=t.getDate(),t.date=t.year+"-"+("0"+t.month).slice(-2)+"-"+("0"+t.day).slice(-2),
t.hour=t.getHours(),t.minute=t.getMinutes(),t.second=t.getSeconds(),t.microsecond=t.getMilliseconds()),
t},update:function(t){var r=this.push();return t&&e._mixin(this,t),r}});var l=/("(?:[^"\\]*(?:\\.[^"\\]*)*)"|'(?:[^'\\]*(?:\\.[^'\\]*)*)'|[^\s]+)/g,f=/\s+/g,h=function(t,e){
if(t=t||f,t instanceof RegExp||(t=new RegExp(t,"g")),!t.global)throw new Error("You must use a globally flagged RegExp with split "+t);
t.exec("");for(var r,n=[],i=0,s=0;(r=t.exec(this))&&(n.push(this.slice(i,t.lastIndex-r[0].length)),
i=t.lastIndex,!(e&&++s>e-1)););return n.push(this.slice(i)),n};c.Token=function(t,r){
this.token_type=t,this.contents=new String(e.trim(r)),this.contents.split=h,this.split=function(){
return String.prototype.split.apply(this.contents,arguments)}},c.Token.prototype.split_contents=function(t){
var e,r=[],n=0;for(t=t||999;n++<t&&(e=l.exec(this.contents));)e=e[0],'"'==e.charAt(0)&&'"'==e.slice(-1)?r.push('"'+e.slice(1,-1).replace('\\"','"').replace("\\\\","\\")+'"'):"'"==e.charAt(0)&&"'"==e.slice(-1)?r.push("'"+e.slice(1,-1).replace("\\'","'").replace("\\\\","\\")+"'"):r.push(e);
return r};var g=c.text={_get:function(t,r,n){var i=c.register.get(t,r.toLowerCase(),n);
if(!i){if(!n)throw new Error("No tag found for "+r);return null}var s,o=i[1],a=i[2];
-1!=o.indexOf(":")&&(s=o.split(":"),o=s.pop());var u=a;/\./.test(a)&&(a=a.replace(/\./g,"/")),
require([a],function(){});var l=e.getObject(u);return l[o||r]||l[r+"_"]||l[o+"_"];
},getTag:function(t,e){return g._get("tag",t,e)},getFilter:function(t,e){return g._get("filter",t,e);
},getTemplate:function(t){return new c.Template(g.getTemplateString(t))},getTemplateString:function(t){
return o._getText(t.toString())||""},_resolveLazy:function(t,e,r){return e?r?r.fromJson(o._getText(t))||{}:c.text.getTemplateString(t):o.get({
handleAs:r?"json":"text",url:t})},_resolveTemplateArg:function(t,e){if(g._isTemplate(t)){
if(!e){var r=new u;return r.callback(t),r}return t}return g._resolveLazy(t,e)},_isTemplate:function(t){
return void 0===t||"string"==typeof t&&(t.match(/^\s*[<{]/)||-1!=t.indexOf(" "))},
_resolveContextArg:function(t,e){if(t.constructor==Object){if(!e){var r=new u;return r.callback(t),
r}return t}return g._resolveLazy(t,e,!0)},_re:/(?:\{\{\s*(.+?)\s*\}\}|\{%\s*(load\s*)?(.+?)\s*%\})/g,
tokenize:function(t){return r(t,g._re,g._parseDelims)},_parseDelims:function(t,r,n){
if(t)return[c.TOKEN_VAR,t];if(!r)return[c.TOKEN_BLOCK,n];for(var i,s=e.trim(n).split(/\s+/g),o=0;i=s[o];o++)/\./.test(i)&&(i=i.replace(/\./g,"/")),
require([i])}};c.Template=e.extend(function(t,e){var r=e?t:g._resolveTemplateArg(t,!0)||"",n=g.tokenize(r),i=new c._Parser(n);
this.nodelist=i.parse()},{update:function(t,e){return g._resolveContextArg(e).addCallback(this,function(e){
var r=this.render(new c._Context(e));return t.forEach?t.forEach(function(t){t.innerHTML=r;
}):s.byId(t).innerHTML=r,this})},render:function(t,e){return e=e||this.getBuffer(),
t=t||new c._Context({}),this.nodelist.render(t,e)+""},getBuffer:function(){return new a;
}});var d=/\{\{\s*(.+?)\s*\}\}/g;c.quickFilter=function(t){return t?-1==t.indexOf("{%")?new c._QuickNodeList(r(t,d,function(t){
return new c._Filter(t)})):void 0:new c._NodeList},c._QuickNodeList=e.extend(function(t){
this.contents=t},{render:function(t,e){for(var r=0,n=this.contents.length;n>r;r++)e=this.contents[r].resolve?e.concat(this.contents[r].resolve(t)):e.concat(this.contents[r]);
return e},dummyRender:function(t){return this.render(t,c.Template.prototype.getBuffer()).toString();
},clone:function(t){return this}}),c._Filter=e.extend(function(t){if(!t)throw new Error("Filter must be called with variable name");
this.contents=t;var e=this._cache[t];e?(this.key=e[0],this.filters=e[1]):(this.filters=[],
r(t,this._re,this._tokenize,this),this._cache[t]=[this.key,this.filters])},{_cache:{},
_re:/(?:^_\("([^\\"]*(?:\\.[^\\"])*)"\)|^"([^\\"]*(?:\\.[^\\"]*)*)"|^([a-zA-Z0-9_.]+)|\|(\w+)(?::(?:_\("([^\\"]*(?:\\.[^\\"])*)"\)|"([^\\"]*(?:\\.[^\\"]*)*)"|([a-zA-Z0-9_.]+)|'([^\\']*(?:\\.[^\\']*)*)'))?|^'([^\\']*(?:\\.[^\\']*)*)')/g,
_values:{0:'"',1:'"',2:"",8:'"'},_args:{4:'"',5:'"',6:"",7:"'"},_tokenize:function(){
for(var t,r,n=0,i=[];n<arguments.length;n++)i[n]=void 0!==arguments[n]&&"string"==typeof arguments[n]&&arguments[n];
if(this.key){for(t in this._args)if(i[t]){var s=arguments[t];"'"==this._args[t]?s=s.replace(/\\'/g,"'"):'"'==this._args[t]&&(s=s.replace(/\\"/g,'"')),
r=[!this._args[t],s];break}var o=g.getFilter(arguments[3]);if(!e.isFunction(o))throw new Error(arguments[3]+" is not registered as a filter");
this.filters.push([o,r])}else for(t in this._values)if(i[t]){this.key=this._values[t]+arguments[t]+this._values[t];
break}},getExpression:function(){return this.contents},resolve:function(t){if(void 0===this.key)return"";
for(var e,r=this.resolvePath(this.key,t),n=0;e=this.filters[n];n++)r=e[1]?e[1][0]?e[0](r,this.resolvePath(e[1][1],t)):e[0](r,e[1][1]):e[0](r);
return r},resolvePath:function(t,r){var n,i,s=t.charAt(0),o=t.slice(-1);if(isNaN(parseInt(s)))if('"'==s&&s==o)n=t.slice(1,-1);else{
if("true"==t)return!0;if("false"==t)return!1;if("null"==t||"None"==t)return null;if(i=t.split("."),
n=r.get(i[0]),e.isFunction(n)){var a=r.getThis&&r.getThis();n=n.alters_data?"":a?n.call(a):"";
}for(var u=1;u<i.length;u++){var l=i[u];if(!n)return"";var f=n;if(e.isObject(n)&&"items"==l&&void 0===n[l]){
var h=[];for(var g in n)h.push([g,n[g]]);n=h}else{if(n.get&&e.isFunction(n.get)&&n.get.safe)n=n.get(l);else{
if(void 0===n[l]){n=n[l];break}n=n[l]}e.isFunction(n)?n=n.alters_data?"":n.call(f):n instanceof Date&&(n=c._Context.prototype._normalize(n));
}}}else n=-1==t.indexOf(".")?parseInt(t):parseFloat(t);return n}}),c._TextNode=c._Node=e.extend(function(t){
this.contents=t},{set:function(t){return this.contents=t,this},render:function(t,e){
return e.concat(this.contents)},isEmpty:function(){return!e.trim(this.contents)},
clone:function(){return this}}),c._NodeList=e.extend(function(t){this.contents=t||[],
this.last=""},{push:function(t){return this.contents.push(t),this},concat:function(t){
return this.contents=this.contents.concat(t),this},render:function(t,e){for(var r=0;r<this.contents.length;r++)if(e=this.contents[r].render(t,e),
!e)throw new Error("Template must return buffer");return e},dummyRender:function(t){
return this.render(t,c.Template.prototype.getBuffer()).toString()},unrender:function(){
return arguments[1]},clone:function(){return this},rtrim:function(){for(;;){if(i=this.contents.length-1,
!(this.contents[i]instanceof c._TextNode&&this.contents[i].isEmpty()))break;this.contents.pop();
}return this}}),c._VarNode=e.extend(function(t){this.contents=new c._Filter(t)},{
render:function(t,e){var r=this.contents.resolve(t);return r.safe||(r=c._base.escape(""+r)),
e.concat(r)}}),c._noOpNode=new function(){this.render=this.unrender=function(){return arguments[1];
},this.clone=function(){return this}},c._Parser=e.extend(function(t){this.contents=t;
},{i:0,parse:function(t){var e,r={};t=t||[];for(var n=0;n<t.length;n++)r[t[n]]=!0;
for(var i=new c._NodeList;this.i<this.contents.length;)if(e=this.contents[this.i++],
"string"==typeof e)i.push(new c._TextNode(e));else{var s=e[0],o=e[1];if(s==c.TOKEN_VAR)i.push(new c._VarNode(o));else if(s==c.TOKEN_BLOCK){
if(r[o])return--this.i,i;var a=o.split(/\s+/g);if(a.length){a=a[0];var u=g.getTag(a);
u&&i.push(u(this,new c.Token(s,o)))}}}if(t.length)throw new Error("Could not find closing tag(s): "+t.toString());
return this.contents.length=0,i},next_token:function(){var t=this.contents[this.i++];
return new c.Token(t[0],t[1])},delete_first_token:function(){this.i++},skip_past:function(t){
for(;this.i<this.contents.length;){var e=this.contents[this.i++];if(e[0]==c.TOKEN_BLOCK&&e[1]==t)return;
}throw new Error("Unclosed tag found when looking for "+t)},create_variable_node:function(t){
return new c._VarNode(t)},create_text_node:function(t){return new c._TextNode(t||"");
},getTemplate:function(t){return new c.Template(t)}}),c.register={_registry:{attributes:[],
tags:[],filters:[]},get:function(t,e){for(var r,n=c.register._registry[t+"s"],i=0;r=n[i];i++)if("string"==typeof r[0]){
if(r[0]==e)return r}else if(e.match(r[0]))return r},getAttributeTags:function(){for(var t,r=[],n=c.register._registry.attributes,i=0;t=n[i];i++)if(3==t.length)r.push(t);else{
var s=e.getObject(t[1]);s&&e.isFunction(s)&&(t.push(s),r.push(t))}return r},_any:function(t,r,n){
for(var i in n)for(var s,o=0;s=n[i][o];o++){var a=s;if(e.isArray(s)&&(a=s[0],s=s[1]),
"string"==typeof a){if("attr:"==a.substr(0,5)){var u=s;"attr:"==u.substr(0,5)&&(u=u.slice(5)),
c.register._registry.attributes.push([u.toLowerCase(),r+"."+i+"."+u])}a=a.toLowerCase();
}c.register._registry[t].push([a,s,r+"."+i])}},tags:function(t,e){c.register._any("tags",t,e);
},filters:function(t,e){c.register._any("filters",t,e)}};var p=/&/g,_=/</g,v=/>/g,m=/'/g,w=/"/g;
return c._base.escape=function(t){return c.mark_safe(t.replace(p,"&amp;").replace(_,"&lt;").replace(v,"&gt;").replace(w,"&quot;").replace(m,"&#39;"));
},c._base.safe=function(t){return"string"==typeof t&&(t=new String(t)),"object"==typeof t&&(t.safe=!0),
t},c.mark_safe=c._base.safe,c.register.tags("dojox.dtl.tag",{date:["now"],logic:["if","for","ifequal","ifnotequal"],
loader:["extends","block","include","load","ssi"],misc:["comment","debug","filter","firstof","spaceless","templatetag","widthratio","with"],
loop:["cycle","ifchanged","regroup"]}),c.register.filters("dojox.dtl.filter",{dates:["date","time","timesince","timeuntil"],
htmlstrings:["linebreaks","linebreaksbr","removetags","striptags"],integers:["add","get_digit"],
lists:["dictsort","dictsortreversed","first","join","length","length_is","random","slice","unordered_list"],
logic:["default","default_if_none","divisibleby","yesno"],misc:["filesizeformat","pluralize","phone2numeric","pprint"],
strings:["addslashes","capfirst","center","cut","fix_ampersands","floatformat","iriencode","linenumbers","ljust","lower","make_list","rjust","slugify","stringformat","title","truncatewords","truncatewords_html","upper","urlencode","urlize","urlizetrunc","wordcount","wordwrap"]
}),c.register.filters("dojox.dtl",{_base:["escape","safe"]}),c});