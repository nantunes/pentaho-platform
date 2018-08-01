dojo.provide("dojox.lang.oo.aop"),dojo.require("dojox.lang.oo.Decorator"),dojo.require("dojox.lang.oo.general"),
function(){var o=dojox.lang.oo,r=o.makeDecorator,n=o.general,t=o.aop,a=dojo.isFunction;
t.before=n.before,t.around=n.wrap,t.afterReturning=r(function(o,r,n){return a(n)?function(){
var o=n.apply(this,arguments);return r.call(this,o),o}:function(){r.call(this)}}),
t.afterThrowing=r(function(o,r,n){return a(n)?function(){var o;try{o=n.apply(this,arguments);
}catch(t){throw r.call(this,t),t}return o}:n}),t.after=r(function(o,r,n){return a(n)?function(){
var o;try{o=n.apply(this,arguments)}finally{r.call(this)}return o}:function(){r.call(this);
}})}();