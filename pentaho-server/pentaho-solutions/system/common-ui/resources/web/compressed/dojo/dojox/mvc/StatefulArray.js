define(["dojo/_base/lang","dojo/Stateful"],function(t,e){function n(t){return t._watchElementCallbacks&&t._watchElementCallbacks(),
t}var s=function(r){var i=t._toArray(r||[]),a=s;return i.constructor=a,t.mixin(i,{
pop:function(){return this.splice(this.get("length")-1,1)[0]},push:function(){return this.splice.apply(this,[this.get("length"),0].concat(t._toArray(arguments))),
this.get("length")},reverse:function(){return n([].reverse.apply(this,t._toArray(arguments)));
},shift:function(){return this.splice(0,1)[0]},sort:function(){return n([].sort.apply(this,t._toArray(arguments)));
},splice:function(e,n){var s=this.get("length");e+=0>e?s:0;var r=Math.min(e,s),i=this.slice(e,e+n),a=t._toArray(arguments).slice(2);
[].splice.apply(this,[e,n].concat(new Array(a.length)));for(var h=0;h<a.length;h++)this[r+h]=a[h];
return this._watchElementCallbacks&&this._watchElementCallbacks(e,i,a),this._watchCallbacks&&this._watchCallbacks("length",s,s-i.length+a.length),
i},unshift:function(){return this.splice.apply(this,[0,0].concat(t._toArray(arguments))),
this.get("length")},concat:function(t){return new s([].concat.apply(this,arguments));
},join:function(t){for(var e=[],n=this.get("length"),s=0;n>s;s++)e.push(this.get(s));
return e.join(t)},slice:function(t,e){var n=this.get("length");t+=0>t?n:0,e=(void 0===e?n:e)+(0>e?n:0);
for(var r=[],i=t||0;i<Math.min(e,this.get("length"));i++)r.push(this.get(i));return new s(r);
},watchElements:function(t){var e=this._watchElementCallbacks,n=this;e||(e=this._watchElementCallbacks=function(t,s,r){
for(var i=[].concat(e.list),a=0;a<i.length;a++)i[a].call(n,t,s,r)},e.list=[]),e.list.push(t);
var s={};return s.unwatch=s.remove=function(){for(var n=e.list,s=0;s<n.length;s++)if(n[s]==t){
n.splice(s,1);break}},s}},e.prototype,{set:function(t,n){if("length"==t){var s=this.get("length");
return n>s?this.splice.apply(this,[s,0].concat(new Array(n-s))):s>n&&this.splice.apply(this,[n,s-n]),
this}var r=this.length;return e.prototype.set.call(this,t,n),r!=this.length&&e.prototype.set.call(this,"length",this.length),
this},isInstanceOf:function(t){return e.prototype.isInstanceOf.apply(this,arguments)||t==s;
}})};return s._meta={bases:[e]},t.setObject("dojox.mvc.StatefulArray",s)});