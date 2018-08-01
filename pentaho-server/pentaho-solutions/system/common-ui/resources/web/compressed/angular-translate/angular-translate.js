/*!
 * angular-translate - v2.1.0 - 2014-09-04
 * http://github.com/PascalPrecht/angular-translate
 * Copyright (c) 2014 ; Licensed MIT
 */

angular.module("pascalprecht.translate",["ng"]).run(["$translate",function(t){var e=t.storageKey(),n=t.storage();
n?n.get(e)?t.use(n.get(e)):angular.isString(t.preferredLanguage())?t.use(t.preferredLanguage()):n.set(e,t.use()):angular.isString(t.preferredLanguage())&&t.use(t.preferredLanguage());
}]),angular.module("pascalprecht.translate").provider("$translate",["$STORAGE_KEY",function(t){
var e,n,r,a,i,o,s,u,l,f,c,g,h,d,v,p={},$=[],m=t,y=[],L=!1,S="translate-cloak",b=!1,w=".",k=function(){
var t=window.navigator;return(t.language||t.browserLanguage||t.systemLanguage||t.userLanguage||"").split("-").join("_");
},I=function(t){for(var e=[],r=angular.lowercase(t),a=0,i=$.length;i>a;a++)e.push(angular.lowercase($[a]));
if(e.indexOf(r)>-1)return t;if(n){var o;for(var s in n){var u=!1,l=n.hasOwnProperty(s)&&angular.lowercase(s)===angular.lowercase(t);
if("*"===s.slice(-1)&&(u=s.slice(0,-1)===t.slice(0,s.length-1)),(l||u)&&(o=n[s],e.indexOf(angular.lowercase(o))>-1))return o;
}}var f=t.split("_");return f.length>1&&e.indexOf(angular.lowercase(f[0]))>-1?f[0]:t;
},E=function(t,e){if(!t&&!e)return p;if(t&&!e){if(angular.isString(t))return p[t];
}else angular.isObject(p[t])||(p[t]={}),angular.extend(p[t],C(e));return this};this.translations=E,
this.cloakClassName=function(t){return t?(S=t,this):S};var C=function(t,e,n,r){var a,i,o,s;
e||(e=[]),n||(n={});for(a in t)t.hasOwnProperty(a)&&(s=t[a],angular.isObject(s)?C(s,e.concat(a),n,a):(i=e.length?""+e.join(w)+w+a:a,
e.length&&a===r&&(o=""+e.join(w),n[o]="@:"+i),n[i]=s));return n};this.addInterpolation=function(t){
return y.push(t),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation");
},this.useInterpolation=function(t){return f=t,this},this.useSanitizeValueStrategy=function(t){
return L=t,this},this.preferredLanguage=function(t){return x(t),this};var x=function(t){
return t&&(e=t),e};this.translationNotFoundIndicator=function(t){return this.translationNotFoundIndicatorLeft(t),
this.translationNotFoundIndicatorRight(t),this},this.translationNotFoundIndicatorLeft=function(t){
return t?(d=t,this):d},this.translationNotFoundIndicatorRight=function(t){return t?(v=t,
this):v},this.fallbackLanguage=function(t){return O(t),this};var O=function(t){return t?(angular.isString(t)?(a=!0,
r=[t]):angular.isArray(t)&&(a=!1,r=t),angular.isString(e)&&r.indexOf(e)<0&&r.push(e),
this):a?r[0]:r};this.use=function(t){if(t){if(!p[t]&&!c)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+t+"'");
return i=t,this}return i};var j=function(t){return t?void(m=t):u?u+m:m};this.storageKey=j,
this.useUrlLoader=function(t){return this.useLoader("$translateUrlLoader",{url:t});
},this.useStaticFilesLoader=function(t){return this.useLoader("$translateStaticFilesLoader",t);
},this.useLoader=function(t,e){return c=t,h=e||{},this},this.useFileFormatAdapter=function(t){
return g=t,this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage");
},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage");
},this.useStorage=function(t){return s=t,this},this.storagePrefix=function(t){return t?(u=t,
this):t},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog");
},this.useMissingTranslationHandler=function(t){return l=t,this},this.usePostCompiling=function(t){
return b=!!t,this},this.determinePreferredLanguage=function(t){var n=t&&angular.isFunction(t)?t():k();
return e=$.length?I(n):n,this},this.registerAvailableLanguageKeys=function(t,e){return t?($=t,
e&&(n=e),this):$},this.$get=["$log","$injector","$rootScope","$q",function(t,n,u,$){
var w,k,P,T=n.get(f||"$translateDefaultInterpolation"),F=!1,A={},N={},V=function(t,n,a){
if(angular.isArray(t)){var o=function(t){for(var e={},r=[],i=function(t){var r=$.defer(),i=function(n){
e[t]=n,r.resolve([t,n])};return V(t,n,a).then(i,i),r.promise},o=0,s=t.length;s>o;o++)r.push(i(t[o]));
return $.all(r).then(function(){return e})};return o(t)}var u=$.defer();t&&(t=t.trim());
var l=function(){var t=e?N[e]:N[i];if(k=0,s&&!t){var n=w.get(m);if(t=N[n],r&&r.length){
var a=K(r,n);k=a>-1?a+=1:0,r.push(e)}}return t}();return l?l.then(function(){J(t,n,a).then(u.resolve,u.reject);
},u.reject):J(t,n,a).then(u.resolve,u.reject),u.promise},K=function(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;
return-1},R=function(t){return d&&(t=[d,t].join(" ")),v&&(t=[t,v].join(" ")),t},M=function(t){
i=t,u.$emit("$translateChangeSuccess"),s&&w.set(V.storageKey(),i),T.setLocale(i),
angular.forEach(A,function(t,e){A[e].setLocale(i)}),u.$emit("$translateChangeEnd");
},_=function(t,e){if(!t)throw"No language key specified for loading.";var r=N[t];if(r&&(!e||null===r.isOk))return r;
var a=$.defer();return r=N[t]=a.promise,r.isOk=null,u.$emit("$translateLoadingStart"),
F=!0,n.get(c)(angular.extend(h,{key:t,fileFormatAdapter:g&&n.get(g)})).then(function(e){
var n={};u.$emit("$translateLoadingSuccess"),angular.isArray(e)?angular.forEach(e,function(t){
angular.extend(n,C(t))}):angular.extend(n,C(e)),F=!1,r.isOk=!0,a.resolve({key:t,table:n
}),u.$emit("$translateLoadingEnd")},function(t){r.isOk=!1,u.$emit("$translateLoadingError"),
a.reject(t),u.$emit("$translateLoadingEnd")}),r};if(s&&(w=n.get(s),!w.get||!w.set))throw new Error("Couldn't use storage '"+s+"', missing get() or set() method!");
angular.isFunction(T.useSanitizeValueStrategy)&&T.useSanitizeValueStrategy(L),y.length&&angular.forEach(y,function(t){
var r=n.get(t);r.setLocale(e||i),angular.isFunction(r.useSanitizeValueStrategy)&&r.useSanitizeValueStrategy(L),
A[r.getInterpolationIdentifier()]=r});var z=function(t){var e=$.defer();return p.hasOwnProperty(t)?(e.resolve(p[t]),
e.promise):(N[t].then(function(t){E(t.key,t.table),e.resolve(t.table)},e.reject),
e.promise)},H=function(t,e,n,r){var a=$.defer();return z(t).then(function(o){o.hasOwnProperty(e)?(r.setLocale(t),
a.resolve(r.interpolate(o[e],n)),r.setLocale(i)):a.reject()},a.reject),a.promise},q=function(t,e,n,r){
var a,o=p[t];return o.hasOwnProperty(e)&&(r.setLocale(t),a=r.interpolate(o[e],n),
r.setLocale(i)),a},D=function(t){if(l){var e=n.get(l)(t,i);return void 0!==e?e:t}
return t},G=function(t,e,n,a){var i=$.defer();if(t<r.length){var o=r[t];H(o,e,n,a).then(function(t){
i.resolve(t)},function(){var r=G(t+1,e,n,a);i.resolve(r)})}else i.resolve(D(e));return i.promise;
},U=function(t,e,n,a){var i;if(t<r.length){var o=r[t];i=q(o,e,n,a),i||(i=U(t+1,e,n,a));
}return i},Y=function(t,e,n){return G(P>0?P:k,t,e,n)},B=function(t,e,n){return U(P>0?P:k,t,e,n);
},J=function(t,e,n){var a=$.defer(),o=i?p[i]:p,s=n?A[n]:T;if(o&&o.hasOwnProperty(t)){
var u=o[t];"@:"===u.substr(0,2)?V(u.substr(2),e,n).then(a.resolve,a.reject):a.resolve(s.interpolate(u,e));
}else{var f;l&&!F&&(f=D(t)),i&&r&&r.length?Y(t,e,s).then(function(t){a.resolve(t);
},function(t){a.reject(R(t))}):l&&!F&&f?a.resolve(f):a.reject(R(t))}return a.promise;
},Q=function(t,e,n){var a,o=i?p[i]:p,s=n?A[n]:T;if(o&&o.hasOwnProperty(t)){var u=o[t];
a="@:"===u.substr(0,2)?Q(u.substr(2),e,n):s.interpolate(u,e)}else{var f;l&&!F&&(f=D(t)),
i&&r&&r.length?(k=0,a=B(t,e,s)):a=l&&!F&&f?f:R(t)}return a};if(V.preferredLanguage=function(t){
return t&&x(t),e},V.cloakClassName=function(){return S},V.fallbackLanguage=function(t){
if(void 0!==t&&null!==t){if(O(t),c&&r&&r.length)for(var e=0,n=r.length;n>e;e++)_(r[e]);
V.use(V.use())}return a?r[0]:r},V.useFallbackLanguage=function(t){if(void 0!==t&&null!==t)if(t){
var e=K(r,t);e>-1&&(P=e)}else P=0},V.proposedLanguage=function(){return o},V.storage=function(){
return w},V.use=function(t){if(!t)return i;var e=$.defer();u.$emit("$translateChangeStart");
var n=I(t);return n&&(t=n),!p[t]&&c?N[t]?(o=t,N[t].then(function(n){e.resolve(t),
o===t&&(M(n.key),o=void 0)})):(o=t,_(t).then(function(n){E(n.key,n.table),e.resolve(n.key),
o===t&&(M(n.key),o=void 0)},function(t){o=void 0,u.$emit("$translateChangeError"),
e.reject(t),u.$emit("$translateChangeEnd")})):(e.resolve(t),M(t)),e.promise},V.storageKey=function(){
return j()},V.isPostCompilingEnabled=function(){return b},V.refresh=function(t){function e(){
a.resolve(),u.$emit("$translateRefreshEnd")}function n(){a.reject(),u.$emit("$translateRefreshEnd");
}if(!c)throw new Error("Couldn't refresh translation table, no loader registered!");
var a=$.defer();if(u.$emit("$translateRefreshStart"),t)p[t]?_(t,!0).then(function(n){
E(n.key,n.table),t===i&&M(i),e()},n):n();else{var o=[];if(r&&r.length)for(var s=0,l=r.length;l>s;s++)i!==N[r]&&o.push(_(r[s],!0));
i&&o.push(_(i,!0)),$.all(o).then(function(t){angular.forEach(t,function(t){p[t.key]&&delete p[t.key],
E(t.key,t.table)}),i&&M(i),e()})}return a.promise},V.instant=function(t,n,a){if(null===t||angular.isUndefined(t))return t;
if(angular.isArray(t)){for(var o={},s=0,u=t.length;u>s;s++)o[t[s]]=V.instant(t[s],n,a);
return o}if(angular.isString(t)&&t.length<1)return t;t&&(t=t.trim());var f,c=[];e&&c.push(e),
i&&c.push(i),r&&r.length&&(c=c.concat(r));for(var g=0,h=c.length;h>g;g++){var d=c[g];
if(p[d]&&"undefined"!=typeof p[d][t]&&(f=Q(t,n,a)),"undefined"!=typeof f)break}return f||""===f||(f=t,
l&&!F&&(f=D(t))),f},c&&(angular.equals(p,{})&&V.use(V.use()),r&&r.length))for(var W=function(t){
E(t.key,t.table)},X=0,Z=r.length;Z>X;X++)_(r[X]).then(W);return V}]}]),angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",["$interpolate",function(t){
var e,n={},r="default",a=null,i={escaped:function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=angular.element("<div></div>").text(t[n]).html());
return e}},o=function(t){var e;return e=angular.isFunction(i[a])?i[a](t):t};return n.setLocale=function(t){
e=t},n.getInterpolationIdentifier=function(){return r},n.useSanitizeValueStrategy=function(t){
return a=t,this},n.interpolate=function(e,n){return a&&(n=o(n)),t(e)(n||{})},n}]),
angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),
angular.module("pascalprecht.translate").directive("translate",["$translate","$q","$interpolate","$compile","$parse","$rootScope",function(t,e,n,r,a,i){
return{restrict:"AE",scope:!0,compile:function(e,o){var s=o.translateValues?o.translateValues:void 0,u=o.translateInterpolation?o.translateInterpolation:void 0,l=e[0].outerHTML.match(/translate-value-+/i),f="^(.*)("+n.startSymbol()+".*"+n.endSymbol()+")(.*)";
return function(e,c,g){if(e.interpolateParams={},e.preText="",e.postText="",g.$observe("translate",function(t){
if(angular.equals(t,"")||!angular.isDefined(t)){var r=c.text().match(f);angular.isArray(r)?(e.preText=r[1],
e.postText=r[3],e.translationId=n(r[2])(e.$parent)):e.translationId=c.text().replace(/^\s+|\s+$/g,"");
}else e.translationId=t}),g.$observe("translateDefault",function(t){e.defaultText=t;
}),s&&g.$observe("translateValues",function(t){t&&e.$parent.$watch(function(){angular.extend(e.interpolateParams,a(t)(e.$parent));
})}),l){var h=function(t){g.$observe(t,function(n){e.interpolateParams[angular.lowercase(t.substr(14,1))+t.substr(15)]=n;
})};for(var d in g)g.hasOwnProperty(d)&&"translateValue"===d.substr(0,14)&&"translateValues"!==d&&h(d);
}var v=function(e,n,a){a||"undefined"==typeof n.defaultText||(e=n.defaultText),c.html(n.preText+e+n.postText);
var i=t.isPostCompilingEnabled(),s="undefined"!=typeof o.translateCompile,u=s&&"false"!==o.translateCompile;
(i&&!s||u)&&r(c.contents())(n)},p=function(){return s||l?function(){var n=function(){
e.translationId&&e.interpolateParams&&t(e.translationId,e.interpolateParams,u).then(function(t){
v(t,e,!0)},function(t){v(t,e,!1)})};e.$watch("interpolateParams",n,!0),e.$watch("translationId",n);
}:function(){var n=e.$watch("translationId",function(r){e.translationId&&r&&t(r,{},u).then(function(t){
v(t,e,!0),n()},function(t){v(t,e,!1),n()})},!0)}}(),$=i.$on("$translateChangeSuccess",p);
p(),e.$on("$destroy",$)}}}}]),angular.module("pascalprecht.translate").directive("translateCloak",["$rootScope","$translate",function(t,e){
return{compile:function(n){var r=t.$on("$translateChangeEnd",function(){n.removeClass(e.cloakClassName()),
r(),r=null});n.addClass(e.cloakClassName())}}}]),angular.module("pascalprecht.translate").filter("translate",["$parse","$translate",function(t,e){
return function(n,r,a){return angular.isObject(r)||(r=t(r)(this)),e.instant(n,r,a);
}}]);