/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

!function(t,e){"use strict";function s(t){if(null==t)return"";switch(typeof t){case"string":
return t;case"number":return""+t;default:return j(t)}}function i(t,e){for(var s=t.split(/\n/g),i=0;i<s.length;i++){
var n=s[i];if(!(e>=n.length))return{line:i+1,column:e+1};e-=n.length}}function n(t){
function e(e){return t}var s=F[t];return null!=s?s:(e.$$watchDelegate=function(e,s,i){
var n=e.$watch(W,function(){N(s)&&s.call(null,t,t,e),n()},i);return n},F[t]=e,e.exp=t,
e.expressions=[],e)}function r(t,e){function s(t){return void 0==t?t:t-e}function i(e){
return s(t(e))}if(0===e)return t;var n;return i.$$watchDelegate=function(e,i,r){return n=e.$watch(t,function(t,n){
N(i)&&i.call(null,s(t),s(n),e)},r)},i}function o(t,e){var s=this;if(this.expressionFn=t,
this.choices=e,void 0===e.other)throw L("reqother","“other” is a required option.");
this.parsedFn=function(t){return s.getResult(t)},this.parsedFn.$$watchDelegate=function(t,e,i){
return s.watchDelegate(t,e,i)},this.parsedFn.exp=t.exp,this.parsedFn.expressions=t.expressions;
}function a(t,e,s,i){var n=this;this.scope=e,this.msgSelector=t,this.listener=s,this.objectEquality=i,
this.lastMessage=void 0,this.messageFnWatcher=W;var r=function(t,e){return n.expressionFnListener(t,e);
};this.expressionFnWatcher=e.$watch(t.expressionFn,r,i)}function h(t,e){o.call(this,t,e);
}function l(){}function u(t,e,s,i){o.call(this,t,e),this.offset=s,this.pluralCat=i;
}function c(){}function p(t,e){this.trustedContext=t,this.allOrNothing=e,this.textParts=[],
this.expressionFns=[],this.expressionIndices=[],this.partialText="",this.concatParts=null;
}function x(t,e,s,i){this.interpolationParts=t,this.scope=e,this.previousResult=void 0,
this.listener=s;var n=this;this.expressionFnsWatcher=e.$watchGroup(t.expressionFns,function(t,e){
n.watchListener(t,e)})}function d(t,e){e.expressionFn=t.expressionFn,e.expressionMinusOffsetFn=t.expressionMinusOffsetFn,
e.pluralOffset=t.pluralOffset,e.choices=t.choices,e.choiceKey=t.choiceKey,e.interpolationParts=t.interpolationParts,
e.ruleChoiceKeyword=t.ruleChoiceKeyword,e.msgStartIndex=t.msgStartIndex,e.expressionStartIndex=t.expressionStartIndex;
}function g(t){d(t,this)}function f(t,e,s,i,n,r,o,a){this.text=t,this.index=e||0,
this.$parse=s,this.pluralCat=i,this.stringifier=n,this.mustHaveExpression=!!r,this.trustedContext=o,
this.allOrNothing=!!a,this.expressionFn=null,this.expressionMinusOffsetFn=null,this.pluralOffset=null,
this.choices=null,this.choiceKey=null,this.interpolationParts=null,this.msgStartIndex=null,
this.nestedStateStack=[],this.parsedFn=null,this.rule=null,this.ruleStack=null,this.ruleChoiceKeyword=null,
this.interpNestLevel=null,this.expressionStartIndex=null,this.stringStartIndex=null,
this.stringQuote=null,this.stringInterestsRe=null,this.angularOperatorStack=null,
this.textPart=null}function y(t){switch(t){case"{":return"}";case"[":return"]";case"(":
return")";default:return null}}function v(t){switch(t){case"}":return"{";case"]":
return"[";case")":return"(";default:return null}}var F=Object.create(null);o.prototype.getMessageFn=function(t){
return this.choices[this.categorizeValue(t)]},o.prototype.getResult=function(t){return this.getMessageFn(this.expressionFn(t))(t);
},o.prototype.watchDelegate=function(t,e,s){var i=new a(this,t,e,s);return function(){
i.cancelWatch()}},a.prototype.expressionFnListener=function(t,e){var s=this;this.messageFnWatcher();
var i=function(t,e){return s.messageFnListener(t,e)},n=this.msgSelector.getMessageFn(t);
this.messageFnWatcher=this.scope.$watch(n,i,this.objectEquality)},a.prototype.messageFnListener=function(t,e){
N(this.listener)&&this.listener.call(null,t,t===e?t:this.lastMessage,this.scope),
this.lastMessage=t},a.prototype.cancelWatch=function(){this.expressionFnWatcher(),
this.messageFnWatcher()},l.prototype=o.prototype,h.prototype=new l,h.prototype.categorizeValue=function(t){
return void 0!==this.choices[t]?t:"other"},c.prototype=o.prototype,u.prototype=new c,
u.prototype.categorizeValue=function(t){if(isNaN(t))return"other";if(void 0!==this.choices[t])return t;
var e=this.pluralCat(t-this.offset);return void 0!==this.choices[e]?e:"other"},p.prototype.flushPartialText=function(){
this.partialText&&(null==this.concatParts?this.textParts.push(this.partialText):(this.textParts.push(this.concatParts.join("")),
this.concatParts=null),this.partialText="")},p.prototype.addText=function(t){t.length&&(this.partialText?this.concatParts?this.concatParts.push(t):this.concatParts=[this.partialText,t]:this.partialText=t);
},p.prototype.addExpressionFn=function(t){this.flushPartialText(),this.expressionIndices.push(this.textParts.length),
this.expressionFns.push(t),this.textParts.push("")},p.prototype.getExpressionValues=function(t){
for(var e=new Array(this.expressionFns.length),s=0;s<this.expressionFns.length;s++)e[s]=this.expressionFns[s](t);
return e},p.prototype.getResult=function(t){for(var e=0;e<this.expressionIndices.length;e++){
var s=t[e];if(this.allOrNothing&&void 0===s)return;this.textParts[this.expressionIndices[e]]=s;
}return this.textParts.join("")},p.prototype.toParsedFn=function(t,e){var s=this;if(this.flushPartialText(),
t&&0===this.expressionFns.length)return void 0;if(0===this.textParts.length)return n("");
if(this.trustedContext&&this.textParts.length>1&&L.throwNoconcat(e),0===this.expressionFns.length)return 1!=this.textParts.length&&this.errorInParseLogic(),
n(this.textParts[0]);var i=function(t){return s.getResult(s.getExpressionValues(t));
};i.$$watchDelegate=function(t,e,i){return s.watchDelegate(t,e,i)},i.exp=e,i.expressions=new Array(this.expressionFns.length);
for(var r=0;r<this.expressionFns.length;r++)i.expressions[r]=this.expressionFns[r].exp;
return i},p.prototype.watchDelegate=function(t,e,s){var i=new x(this,t,e,s);return function(){
i.cancelWatch()}},x.prototype.watchListener=function(t,e){var s=this.interpolationParts.getResult(t);
N(this.listener)&&this.listener.call(null,s,t===e?s:this.previousResult,this.scope),
this.previousResult=s},x.prototype.cancelWatch=function(){this.expressionFnsWatcher();
};var m=new g(new f("",0,null,null,null,!1,null,!1));f.prototype.pushState=function(){
this.nestedStateStack.push(new g(this)),d(m,this)},f.prototype.popState=function(){
0===this.nestedStateStack.length&&this.errorInParseLogic();var t=this.nestedStateStack.pop();
d(t,this)},f.prototype.matchRe=function(t,e){t.lastIndex=this.index;var s=t.exec(this.text);
return null==s||e!==!0&&s.index!=this.index?null:(this.index=t.lastIndex,s)},f.prototype.searchRe=function(t){
return this.matchRe(t,!0)},f.prototype.consumeRe=function(t){return!!this.matchRe(t);
},f.prototype.run=function(t){this.ruleStack=[t];do{for(this.rule=this.ruleStack.pop();this.rule;)this.rule();
this.assertRuleOrNull(this.rule)}while(this.ruleStack.length>0)},f.prototype.errorInParseLogic=function(){
throw L("logicbug","The messageformat parser has encountered an internal error.  Please file a github issue against the AngularJS project and provide this message text that triggers the bug.  Text: “{0}”",this.text);
},f.prototype.assertRuleOrNull=function(t){void 0===t&&this.errorInParseLogic()};var w=/\s*(\w+)\s*/g;
f.prototype.errorExpecting=function(){var t,e=this.matchRe(w);if(null==e)throw t=i(this.text,this.index),
L("reqarg","Expected one of “plural” or “select” at line {0}, column {1} of text “{2}”",t.line,t.column,this.text);
var s=e[1];throw"select"==s||"plural"==s?(t=i(this.text,this.index),L("reqcomma","Expected a comma after the keyword “{0}” at line {1}, column {2} of text “{3}”",s,t.line,t.column,this.text)):(t=i(this.text,this.index),
L("unknarg","Unsupported keyword “{0}” at line {0}, column {1}. Only “plural” and “select” are currently supported.  Text: “{3}”",s,t.line,t.column,this.text));
};var S=/['"]/g;f.prototype.ruleString=function(){var t=this.matchRe(S);if(null==t){
var e=i(this.text,this.index);throw L("wantstring","Expected the beginning of a string at line {0}, column {1} in text “{2}”",e.line,e.column,this.text);
}this.startStringAtMatch(t)},f.prototype.startStringAtMatch=function(t){this.stringStartIndex=t.index,
this.stringQuote=t[0],this.stringInterestsRe="'"==this.stringQuote?I:P,this.rule=this.ruleInsideString;
};var I=/\\(?:\\|'|u[0-9A-Fa-f]{4}|x[0-9A-Fa-f]{2}|[0-7]{3}|\r\n|\n|[\s\S])|'/g,P=/\\(?:\\|"|u[0-9A-Fa-f]{4}|x[0-9A-Fa-f]{2}|[0-7]{3}|\r\n|\n|[\s\S])|"/g;
f.prototype.ruleInsideString=function(){var t=this.searchRe(this.stringInterestsRe);
if(null==t){var e=i(this.text,this.stringStartIndex);throw L("untermstr","The string beginning at line {0}, column {1} is unterminated in text “{2}”",e.line,e.column,this.text);
}t[0];t==this.stringQuote&&(this.rule=null)};var O=/\s*(plural|select)\s*,\s*/g;f.prototype.rulePluralOrSelect=function(){
var t=this.searchRe(O);null==t&&this.errorExpecting();var e=t[1];switch(e){case"plural":
this.rule=this.rulePluralStyle;break;case"select":this.rule=this.ruleSelectStyle;break;
default:this.errorInParseLogic()}},f.prototype.rulePluralStyle=function(){this.choices=Object.create(null),
this.ruleChoiceKeyword=this.rulePluralValueOrKeyword,this.rule=this.rulePluralOffset;
},f.prototype.ruleSelectStyle=function(){this.choices=Object.create(null),this.ruleChoiceKeyword=this.ruleSelectKeyword,
this.rule=this.ruleSelectKeyword};var b=/[0]|(?:[1-9][0-9]*)/g,M=new RegExp("\\s*offset\\s*:\\s*("+b.source+")","g");
f.prototype.rulePluralOffset=function(){var t=this.matchRe(M);this.pluralOffset=null==t?0:parseInt(t[1],10),
this.expressionMinusOffsetFn=r(this.expressionFn,this.pluralOffset),this.rule=this.rulePluralValueOrKeyword;
},f.prototype.assertChoiceKeyIsNew=function(t,e){if(void 0!==this.choices[t]){var s=i(this.text,e);
throw L("dupvalue","The choice “{0}” is specified more than once. Duplicate key is at line {1}, column {2} in text “{3}”",t,s.line,s.column,this.text);
}};var E=/\s*(\w+)/g;f.prototype.ruleSelectKeyword=function(){var t=this.matchRe(E);
return null==t?(this.parsedFn=new h(this.expressionFn,this.choices).parsedFn,void(this.rule=null)):(this.choiceKey=t[1],
this.assertChoiceKeyIsNew(this.choiceKey,t.index),void(this.rule=this.ruleMessageText));
};var T=new RegExp("\\s*(?:(?:=("+b.source+"))|(\\w+))","g");f.prototype.rulePluralValueOrKeyword=function(){
var t=this.matchRe(T);return null==t?(this.parsedFn=new u(this.expressionFn,this.choices,this.pluralOffset,this.pluralCat).parsedFn,
void(this.rule=null)):(null!=t[1]?this.choiceKey=parseInt(t[1],10):this.choiceKey=t[2],
this.assertChoiceKeyIsNew(this.choiceKey,t.index),void(this.rule=this.ruleMessageText));
};var R=/\s*{/g;f.prototype.ruleMessageText=function(){if(!this.consumeRe(R)){var t=i(this.text,this.index);
throw L("reqopenbrace","The plural choice “{0}” must be followed by a message in braces at line {1}, column {2} in text “{3}”",this.choiceKey,t.line,t.column,this.text);
}this.msgStartIndex=this.index,this.interpolationParts=new p(this.trustedContext,this.allOrNothing),
this.rule=this.ruleInInterpolationOrMessageText};var $=/\\.|{{|}/g,K=/\\.|{{|#|}/g,k=/\\.|{{/g;
f.prototype.advanceInInterpolationOrMessageText=function(){var t,e=this.index;if(null==this.ruleChoiceKeyword){
if(t=this.searchRe(k),null==t)return this.textPart=this.text.substring(e),this.index=this.text.length,
null}else if(t=this.searchRe(this.ruleChoiceKeyword==this.rulePluralValueOrKeyword?K:$),
null==t){var s=i(this.text,this.msgStartIndex);throw L("reqendbrace","The plural/select choice “{0}” message starting at line {1}, column {2} does not have an ending closing brace. Text “{3}”",this.choiceKey,s.line,s.column,this.text);
}var n=t[0];return this.textPart=this.text.substring(e,t.index),n},f.prototype.ruleInInterpolationOrMessageText=function(){
var t=this.index,e=this.advanceInInterpolationOrMessageText();return null==e?(this.index=this.text.length,
this.interpolationParts.addText(this.text.substring(t)),void(this.rule=null)):"\\"==e[0]?void this.interpolationParts.addText(this.textPart+e[1]):(this.interpolationParts.addText(this.textPart),
void("{{"==e?(this.pushState(),this.ruleStack.push(this.ruleEndMustacheInInterpolationOrMessage),
this.rule=this.ruleEnteredMustache):"}"==e?(this.choices[this.choiceKey]=this.interpolationParts.toParsedFn(!1,this.text),
this.rule=this.ruleChoiceKeyword):"#"==e?this.interpolationParts.addExpressionFn(this.expressionMinusOffsetFn):this.errorInParseLogic()));
},f.prototype.ruleInterpolate=function(){this.interpolationParts=new p(this.trustedContext,this.allOrNothing),
this.rule=this.ruleInInterpolation},f.prototype.ruleInInterpolation=function(){var t=this.index,e=this.searchRe(k);
if(null==e)return this.index=this.text.length,this.interpolationParts.addText(this.text.substring(t)),
this.parsedFn=this.interpolationParts.toParsedFn(this.mustHaveExpression,this.text),
void(this.rule=null);var s=e[0];return"\\"==s[0]?void this.interpolationParts.addText(this.text.substring(t,e.index)+s[1]):(this.interpolationParts.addText(this.text.substring(t,e.index)),
this.pushState(),this.ruleStack.push(this.ruleInterpolationEndMustache),void(this.rule=this.ruleEnteredMustache));
},f.prototype.ruleInterpolationEndMustache=function(){var t=this.parsedFn;this.popState(),
this.interpolationParts.addExpressionFn(t),this.rule=this.ruleInInterpolation},f.prototype.ruleEnteredMustache=function(){
this.parsedFn=null,this.ruleStack.push(this.ruleEndMustache),this.rule=this.ruleAngularExpression;
},f.prototype.ruleEndMustacheInInterpolationOrMessage=function(){var t=this.parsedFn;
this.popState(),this.interpolationParts.addExpressionFn(t),this.rule=this.ruleInInterpolationOrMessageText;
};var C=/\s*}}/g;f.prototype.ruleEndMustache=function(){var t=this.matchRe(C);if(null==t){
var e=i(this.text,this.index);throw L("reqendinterp","Expecting end of interpolation symbol, “{0}”, at line {1}, column {2} in text “{3}”","}}",e.line,e.column,this.text);
}null==this.parsedFn&&(this.parsedFn=this.$parse(this.expressionFn,this.stringifier),
this.parsedFn.exp=this.expressionFn.exp,this.parsedFn.expressions=this.expressionFn.expressions),
this.rule=null},f.prototype.ruleAngularExpression=function(){this.angularOperatorStack=[],
this.expressionStartIndex=this.index,this.rule=this.ruleInAngularExpression};var A=/[[\]{}()'",]/g;
f.prototype.ruleInAngularExpression=function(){var t,e=(this.index,this.searchRe(A));
if(null==e){if(0===this.angularOperatorStack.length)return this.index=this.text.length,
this.expressionFn=this.$parse(this.text.substring(this.expressionStartIndex,this.index)),
this.expressionFn.exp=this.text.substring(this.expressionStartIndex,this.index),this.expressionFn.expressions=this.expressionFn.expressions,
void(this.rule=null);var s=this.angularOperatorStack[0];throw L("badexpr","Unexpected end of Angular expression.  Expecting operator “{0}” at the end of the text “{1}”",this.getEndOperator(s),this.text);
}var n=e[0];if("'"==n||'"'==n)return this.ruleStack.push(this.ruleInAngularExpression),
void this.startStringAtMatch(e);if(","==n){if(this.trustedContext)throw t=i(this.text,this.index),
L("unsafe","Use of select/plural MessageFormat syntax is currently disallowed in a secure context ({0}).  At line {1}, column {2} of text “{3}”",this.trustedContext,t.line,t.column,this.text);
return void(0===this.angularOperatorStack.length&&(this.expressionFn=this.$parse(this.text.substring(this.expressionStartIndex,e.index)),
this.expressionFn.exp=this.text.substring(this.expressionStartIndex,e.index),this.expressionFn.expressions=this.expressionFn.expressions,
this.rule=null,this.rule=this.rulePluralOrSelect))}if(null!=y(n))return void this.angularOperatorStack.unshift(n);
var r=v(n);if(null==r&&this.errorInParseLogic(),this.angularOperatorStack.length>0){
if(r==this.angularOperatorStack[0])return void this.angularOperatorStack.shift();throw t=i(this.text,this.index),
L("badexpr","Unexpected operator “{0}” at line {1}, column {2} in text. Was expecting “{3}”. Text: “{4}”",n,t.line,t.column,y(this.angularOperatorStack[0]),this.text);
}this.index=e.index,this.expressionFn=this.$parse(this.text.substring(this.expressionStartIndex,this.index)),
this.expressionFn.exp=this.text.substring(this.expressionStartIndex,this.index),this.expressionFn.expressions=this.expressionFn.expressions,
this.rule=null};var L,N,W,j,q=["$parse","$locale","$sce","$exceptionHandler",function(t,e,i,n){
function r(t,e,r){return function(o){try{return o=t?i.getTrusted(t,o):i.valueOf(o),
e&&void 0===o?o:s(o)}catch(a){n(L.interr(r,a))}}}function o(s,i,n,o){var a=r(n,o,s),h=new f(s,0,t,e.pluralCat,a,i,n,o);
return h.run(h.ruleInterpolate),h.parsedFn}return{interpolate:o}}],D=["$$messageFormat","$delegate",function(t,e){
if("{{"!=e.startSymbol()||"}}"!=e.endSymbol())throw L("nochgmustache","angular-message-format.js currently does not allow you to use custom start and end symbols for interpolation.");
var s=t.interpolate;return s.startSymbol=e.startSymbol,s.endSymbol=e.endSymbol,s}],V=t.angular.module("ngMessageFormat",["ng"]);
V.factory("$$messageFormat",q),V.config(["$provide",function(e){L=t.angular.$interpolateMinErr,
N=t.angular.isFunction,W=t.angular.noop,j=t.angular.toJson,e.decorator("$interpolate",D);
}])}(window,window.angular);