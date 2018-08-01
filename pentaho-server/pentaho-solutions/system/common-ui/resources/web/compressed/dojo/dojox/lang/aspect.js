dojo.provide("dojox.lang.aspect"),function(){var e,n=dojo,r=dojox.lang.aspect,t=Array.prototype,a=[],i=function(){
this.next_before=this.prev_before=this.next_around=this.prev_around=this.next_afterReturning=this.prev_afterReturning=this.next_afterThrowing=this.prev_afterThrowing=this,
this.counter=0};n.extend(i,{add:function(e){var r=n.isFunction(e),t={advice:e,dynamic:r
};return this._add(t,"before","",r,e),this._add(t,"around","",r,e),this._add(t,"after","Returning",r,e),
this._add(t,"after","Throwing",r,e),++this.counter,t},_add:function(e,n,r,t,a){var i=n+r;
if(t||a[n]||r&&a[i]){var o="next_"+i,d="prev_"+i;(e[d]=this[d])[o]=e,(e[o]=this)[d]=e;
}},remove:function(e){this._remove(e,"before"),this._remove(e,"around"),this._remove(e,"afterReturning"),
this._remove(e,"afterThrowing"),--this.counter},_remove:function(e,n){var r="next_"+n,t="prev_"+n;
e[r]&&(e[r][t]=e[t],e[t][r]=e[r])},isEmpty:function(){return!this.counter}});var o=function(){
return function(){var n,i,o,d,s,u=arguments.callee,v=u.advices;e&&a.push(e),e={instance:this,
joinPoint:u,depth:a.length,around:v.prev_around,dynAdvices:[],dynIndex:0};try{for(i=v.prev_before;i!=v;i=i.prev_before)i.dynamic?(e.dynAdvices.push(o=new i.advice(e)),
(s=o.before)&&s.apply(o,arguments)):(s=i.advice,s.before.apply(s,arguments));try{
n=(v.prev_around==v?u.target:r.proceed).apply(this,arguments)}catch(d){for(e.dynIndex=e.dynAdvices.length,
i=v.next_afterThrowing;i!=v;i=i.next_afterThrowing)o=i.dynamic?e.dynAdvices[--e.dynIndex]:i.advice,
(s=o.afterThrowing)&&s.call(o,d),(s=o.after)&&s.call(o);throw d}for(e.dynIndex=e.dynAdvices.length,
i=v.next_afterReturning;i!=v;i=i.next_afterReturning)o=i.dynamic?e.dynAdvices[--e.dynIndex]:i.advice,
(s=o.afterReturning)&&s.call(o,n),(s=o.after)&&s.call(o);var c=u._listeners;for(i in c)i in t||c[i].apply(this,arguments);
}finally{for(i=0;i<e.dynAdvices.length;++i)o=e.dynAdvices[i],o.destroy&&o.destroy();
e=a.length?a.pop():null}return n}};r.advise=function(e,t,a){"object"!=typeof e&&(e=e.prototype);
var i=[];t instanceof Array||(t=[t]);for(var o=0;o<t.length;++o){var d=t[o];if(d instanceof RegExp)for(var s in e)n.isFunction(e[s])&&d.test(s)&&i.push(s);else n.isFunction(e[d])&&i.push(d);
}return n.isArray(a)||(a=[a]),r.adviseRaw(e,i,a)},r.adviseRaw=function(e,n,r){if(!n.length||!r.length)return null;
for(var t={},a=r.length,d=n.length-1;d>=0;--d){var s=n[d],u=e[s],v=new Array(a),c=u.advices;
if(!c){var f=e[s]=o();f.target=u.target||u,f.targetName=s,f._listeners=u._listeners||[],
f.advices=new i,c=f.advices}for(var h=0;a>h;++h)v[h]=c.add(r[h]);t[s]=v}return[e,t];
},r.unadvise=function(e){if(e){var r=e[0],a=e[1];for(var i in a){for(var o=r[i],d=o.advices,s=a[i],u=s.length-1;u>=0;--u)d.remove(s[u]);
if(d.isEmpty()){var v=!0,c=o._listeners;if(c.length)for(u in c)if(!(u in t)){v=!1;
break}if(v)r[i]=o.target;else{var f=r[i]=n._listener.getDispatcher();f.target=o.target,
f._listeners=c}}}}},r.getContext=function(){return e},r.getContextStack=function(){
return a},r.proceed=function(){for(var n=e.joinPoint,r=n.advices,t=e.around;t!=r;t=e.around){
if(e.around=t.prev_around,!t.dynamic)return t.advice.around.apply(t.advice,arguments);
var a=e.dynAdvices[e.dynIndex++],i=a.around;if(i)return i.apply(a,arguments)}return n.target.apply(e.instance,arguments);
}}();