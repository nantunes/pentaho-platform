dojo.provide("dojox.lang.oo.general"),dojo.require("dojox.lang.oo.Decorator"),function(){
var n=dojox.lang.oo,t=n.makeDecorator,r=n.general,e=dojo.isFunction;r.augment=t(function(n,t,r){
return"undefined"==typeof r?t:r}),r.override=t(function(n,t,r){return"undefined"!=typeof r?t:r;
}),r.shuffle=t(function(n,t,r){return e(r)?function(){return r.apply(this,t.apply(this,arguments));
}:r}),r.wrap=t(function(n,t,r){return function(){return t.call(this,r,arguments)};
}),r.tap=t(function(n,t,r){return function(){return t.apply(this,arguments),this};
}),r.before=t(function(n,t,r){return e(r)?function(){return t.apply(this,arguments),
r.apply(this,arguments)}:t}),r.after=t(function(n,t,r){return e(r)?function(){return r.apply(this,arguments),
t.apply(this,arguments)}:t})}();