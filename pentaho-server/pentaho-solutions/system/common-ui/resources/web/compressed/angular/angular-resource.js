/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

!function(e,r){"use strict";function t(e){return null!=e&&""!==e&&"hasOwnProperty"!==e&&s.test("."+e);
}function a(e,a){if(!t(a))throw o("badmember",'Dotted member path "@{0}" is invalid.',a);
for(var n=a.split("."),s=0,i=n.length;i>s&&r.isDefined(e);s++){var u=n[s];e=null!==e?e[u]:void 0;
}return e}function n(e,t){t=t||{},r.forEach(t,function(e,r){delete t[r]});for(var a in e)!e.hasOwnProperty(a)||"$"===a.charAt(0)&&"$"===a.charAt(1)||(t[a]=e[a]);
return t}var o=r.$$minErr("$resource"),s=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;r.module("ngResource",["ng"]).provider("$resource",function(){
var e=/^https?:\/\/[^\/]*/,t=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,
actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},
remove:{method:"DELETE"},"delete":{method:"DELETE"}}},this.$get=["$http","$log","$q","$timeout",function(s,i,u,c){
function l(e){return p(e,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+");
}function p(e,r){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,r?"%20":"+");
}function f(e,r){this.template=e,this.defaults=g({},t.defaults,r),this.urlParams={};
}function d(e,l,p,b){function y(e,r){var t={};return r=g({},l,r),h(r,function(r,n){
v(r)&&(r=r(e)),t[n]=r&&r.charAt&&"@"==r.charAt(0)?a(e,r.substr(1)):r}),t}function w(e){
return e.resource}function E(e){n(e||{},this)}var P=new f(e,b);return p=g({},t.defaults.actions,p),
E.prototype.toJSON=function(){var e=g({},this);return delete e.$promise,delete e.$resolved,
e},h(p,function(e,a){var l=/^(POST|PUT|PATCH)$/i.test(e.method),p=e.timeout,f=r.isDefined(e.cancellable)?e.cancellable:b&&r.isDefined(b.cancellable)?b.cancellable:t.defaults.cancellable;
p&&!r.isNumber(p)&&(i.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),
delete e.timeout,p=null),E[a]=function(t,i,d,b){var A,R,T,O={};switch(arguments.length){
case 4:T=b,R=d;case 3:case 2:if(!v(i)){O=t,A=i,R=d;break}if(v(t)){R=t,T=i;break}R=i,
T=d;case 1:v(t)?R=t:l?A=t:O=t;break;case 0:break;default:throw o("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length);
}var x,D,q=this instanceof E,k=q?A:e.isArray?[]:new E(A),S={},W=e.interceptor&&e.interceptor.response||w,j=e.interceptor&&e.interceptor.responseError||void 0;
h(e,function(e,r){switch(r){default:S[r]=$(e);break;case"params":case"isArray":case"interceptor":
case"cancellable":}}),!q&&f&&(x=u.defer(),S.timeout=x.promise,p&&(D=c(x.resolve,p))),
l&&(S.data=A),P.setUrlParams(S,g({},y(A,e.params||{}),O),e.url);var U=s(S).then(function(t){
var s=t.data;if(s){if(r.isArray(s)!==!!e.isArray)throw o("badcfg","Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})",a,e.isArray?"array":"object",r.isArray(s)?"array":"object",S.method,S.url);
if(e.isArray)k.length=0,h(s,function(e){"object"==typeof e?k.push(new E(e)):k.push(e);
});else{var i=k.$promise;n(s,k),k.$promise=i}}return t.resource=k,t},function(e){
return(T||m)(e),u.reject(e)});return U["finally"](function(){k.$resolved=!0,!q&&f&&(k.$cancelRequest=r.noop,
c.cancel(D),x=D=S.timeout=null)}),U=U.then(function(e){var r=W(e);return(R||m)(r,e.headers),
r},j),q?U:(k.$promise=U,k.$resolved=!1,f&&(k.$cancelRequest=x.resolve),k)},E.prototype["$"+a]=function(e,r,t){
v(e)&&(t=r,r=e,e={});var n=E[a].call(this,e,this,r,t);return n.$promise||n}}),E.bind=function(r){
return d(e,g({},l,r),p)},E}var m=r.noop,h=r.forEach,g=r.extend,$=r.copy,v=r.isFunction;
return f.prototype={setUrlParams:function(t,a,n){var s,i,u=this,c=n||u.template,f="",d=u.urlParams={};
h(c.split(/\W/),function(e){if("hasOwnProperty"===e)throw o("badname","hasOwnProperty is not a valid parameter name.");
!new RegExp("^\\d+$").test(e)&&e&&new RegExp("(^|[^\\\\]):"+e+"(\\W|$)").test(c)&&(d[e]={
isQueryParamValue:new RegExp("\\?.*=:"+e+"(?:\\W|$)").test(c)})}),c=c.replace(/\\:/g,":"),
c=c.replace(e,function(e){return f=e,""}),a=a||{},h(u.urlParams,function(e,t){s=a.hasOwnProperty(t)?a[t]:u.defaults[t],
r.isDefined(s)&&null!==s?(i=e.isQueryParamValue?p(s,!0):l(s),c=c.replace(new RegExp(":"+t+"(\\W|$)","g"),function(e,r){
return i+r})):c=c.replace(new RegExp("(/?):"+t+"(\\W|$)","g"),function(e,r,t){return"/"==t.charAt(0)?t:r+t;
})}),u.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/"),c=c.replace(/\/\.(?=\w+($|\?))/,"."),
t.url=f+c.replace(/\/\\\./,"/."),h(a,function(e,r){u.urlParams[r]||(t.params=t.params||{},
t.params[r]=e)})}},d}]})}(window,window.angular);