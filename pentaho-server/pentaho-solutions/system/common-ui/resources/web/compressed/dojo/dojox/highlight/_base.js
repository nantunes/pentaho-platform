define(["dojo/_base/lang","dojo/_base/array","dojo/dom","dojo/dom-class"],function(e,s,n,t){
function r(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;");
}function i(e){return s.every(e.childNodes,function(e){return 3==e.nodeType||"br"==String(e.nodeName).toLowerCase();
})}function a(e){var n=[];return s.forEach(e.childNodes,function(e){if(3==e.nodeType)n.push(e.nodeValue);else{
if("br"!=String(e.nodeName).toLowerCase())throw"Complex markup";n.push("\n")}}),n.join("");
}function o(e){if(!e.keywordGroups)for(var s in e.keywords){var n=e.keywords[s];n instanceof Object?e.keywordGroups=e.keywords:e.keywordGroups={
keyword:e.keywords};break}}function l(e){e.defaultMode&&e.modes&&(o(e.defaultMode),
s.forEach(e.modes,o))}function d(e,s,n){if("code"==String(e.tagName).toLowerCase()&&"pre"==String(e.parentNode.tagName).toLowerCase()){
var t=document.createElement("div"),r=e.parentNode.parentNode;t.innerHTML='<pre><code class="'+s+'">'+n+"</code></pre>",
r.replaceChild(t.firstChild,e.parentNode)}else e.className=s,e.innerHTML=n}function u(e,s){
var n=new p(e,s);return{result:n.result,langName:e,partialResult:n.partialResult};
}function h(e,s){var n=u(s,a(e));d(e,e.className,n.result)}function c(e){var s="",n="",t=e;
for(var r in g.languages)if(g.languages[r].defaultMode){var i=new p(r,t),a=i.keywordCount+i.relevance,o=0;
(!s||a>o)&&(o=a,s=i.result,n=i.langName)}return{result:s,langName:n}}function f(e){
var s=c(a(e));s.result&&d(e,s.langName,s.result)}var g=e.getObject("dojox.highlight",!0),m="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";
g.languages=g.languages||{},g.constants={IDENT_RE:"[a-zA-Z][a-zA-Z0-9_]*",UNDERSCORE_IDENT_RE:"[a-zA-Z_][a-zA-Z0-9_]*",
NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:m,APOS_STRING_MODE:{className:"string",
begin:"'",end:"'",illegal:"\\n",contains:["escape"],relevance:0},QUOTE_STRING_MODE:{
className:"string",begin:'"',end:'"',illegal:"\\n",contains:["escape"],relevance:0
},BACKSLASH_ESCAPE:{className:"escape",begin:"\\\\.",end:"^",relevance:0},C_LINE_COMMENT_MODE:{
className:"comment",begin:"//",end:"$",relevance:0},C_BLOCK_COMMENT_MODE:{className:"comment",
begin:"/\\*",end:"\\*/"},HASH_COMMENT_MODE:{className:"comment",begin:"#",end:"$"
},C_NUMBER_MODE:{className:"number",begin:m,end:"^",relevance:0}};var p=function(e,s){
this.langName=e,this.lang=g.languages[e],this.modes=[this.lang.defaultMode],this.relevance=0,
this.keywordCount=0,this.result=[],this.lang.defaultMode.illegalRe||(this.buildRes(),
l(this.lang));try{this.highlight(s),this.result=this.result.join("")}catch(n){if("Illegal"!=n)throw n;
this.relevance=0,this.keywordCount=0,this.partialResult=this.result.join(""),this.result=r(s);
}};return e.extend(p,{buildRes:function(){s.forEach(this.lang.modes,function(e){e.begin&&(e.beginRe=this.langRe("^"+e.begin)),
e.end&&(e.endRe=this.langRe("^"+e.end)),e.illegal&&(e.illegalRe=this.langRe("^(?:"+e.illegal+")"));
},this),this.lang.defaultMode.illegalRe=this.langRe("^(?:"+this.lang.defaultMode.illegal+")");
},subMode:function(e){var s=this.modes[this.modes.length-1].contains;if(s)for(var n=this.lang.modes,t=0;t<s.length;++t)for(var r=s[t],i=0;i<n.length;++i){
var a=n[i];if(a.className==r&&a.beginRe.test(e))return a}return null},endOfMode:function(e){
for(var s=this.modes.length-1;s>=0;--s){var n=this.modes[s];if(n.end&&n.endRe.test(e))return this.modes.length-s;
if(!n.endsWithParent)break}return 0},isIllegal:function(e){var s=this.modes[this.modes.length-1].illegalRe;
return s&&s.test(e)},langRe:function(e,s){var n="m"+(this.lang.case_insensitive?"i":"")+(s?"g":"");
return new RegExp(e,n)},buildTerminators:function(){var e=this.modes[this.modes.length-1],n={};
e.contains&&s.forEach(this.lang.modes,function(t){s.indexOf(e.contains,t.className)>=0&&(n[t.begin]=1);
});for(var t=this.modes.length-1;t>=0;--t){var r=this.modes[t];if(r.end&&(n[r.end]=1),
!r.endsWithParent)break}e.illegal&&(n[e.illegal]=1);var i=[];for(t in n)i.push(t);
e.terminatorsRe=this.langRe("("+i.join("|")+")")},eatModeChunk:function(e,s){var n=this.modes[this.modes.length-1];
n.terminatorsRe||this.buildTerminators(),e=e.substr(s);var t=n.terminatorsRe.exec(e);
return t?{buffer:t.index?e.substr(0,t.index):"",lexeme:t[0],end:!1}:{buffer:e,lexeme:"",
end:!0}},keywordMatch:function(e,s){var n=s[0];this.lang.case_insensitive&&(n=n.toLowerCase());
for(var t in e.keywordGroups)if(n in e.keywordGroups[t])return t;return""},buildLexemes:function(e){
var n={};s.forEach(e.lexems,function(e){n[e]=1});var t=[];for(var r in n)t.push(r);
e.lexemsRe=this.langRe("("+t.join("|")+")",!0)},processKeywords:function(e){var s=this.modes[this.modes.length-1];
if(!s.keywords||!s.lexems)return r(e);s.lexemsRe||this.buildLexemes(s),s.lexemsRe.lastIndex=0;
for(var n=[],t=0,i=s.lexemsRe.exec(e);i;){n.push(r(e.substr(t,i.index-t)));var a=this.keywordMatch(s,i);
a?(++this.keywordCount,n.push('<span class="'+a+'">'+r(i[0])+"</span>")):n.push(r(i[0])),
t=s.lexemsRe.lastIndex,i=s.lexemsRe.exec(e)}return n.push(r(e.substr(t,e.length-t))),
n.join("")},processModeInfo:function(e,s,n){var t=this.modes[this.modes.length-1];
if(n)return void this.result.push(this.processKeywords(t.buffer+e));if(this.isIllegal(s))throw"Illegal";
var r=this.subMode(s);if(r)return t.buffer+=e,this.result.push(this.processKeywords(t.buffer)),
r.excludeBegin?(this.result.push(s+'<span class="'+r.className+'">'),r.buffer=""):(this.result.push('<span class="'+r.className+'">'),
r.buffer=s),this.modes.push(r),void(this.relevance+="number"==typeof r.relevance?r.relevance:1);
var i=this.endOfMode(s);if(i){for(t.buffer+=e,t.excludeEnd?this.result.push(this.processKeywords(t.buffer)+"</span>"+s):this.result.push(this.processKeywords(t.buffer+s)+"</span>");i>1;)this.result.push("</span>"),
--i,this.modes.pop();return this.modes.pop(),void(this.modes[this.modes.length-1].buffer="");
}},highlight:function(e){var s=0;this.lang.defaultMode.buffer="";do{var n=this.eatModeChunk(e,s);
this.processModeInfo(n.buffer,n.lexeme,n.end),s+=n.buffer.length+n.lexeme.length}while(!n.end);
if(this.modes.length>1)throw"Illegal"}}),dojox.highlight.processString=function(e,s){
return s?u(s,e):c(e)},dojox.highlight.init=function(e){if(e=n.byId(e),!t.contains(e,"no-highlight")&&i(e)){
var r=e.className.split(/\s+/),a=s.some(r,function(s){return"_"!=s.charAt(0)&&g.languages[s]?(h(e,s),
!0):!1});a||f(e)}},g.Code=function(e,s){g.init(s)},g});