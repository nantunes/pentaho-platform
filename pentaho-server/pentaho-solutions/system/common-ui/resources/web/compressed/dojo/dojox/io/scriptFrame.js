define(["dojo/main","dojo/io/script","dojo/io/iframe"],function(t,r,o){t.deprecated("dojox.io.scriptFrame","dojo.io.script now supports parallel requests without dojox.io.scriptFrame","2.0"),
t.getObject("io.scriptFrame",!0,dojox),dojox.io.scriptFrame={_waiters:{},_loadedIds:{},
_getWaiters:function(t){return this._waiters[t]||(this._waiters[t]=[])},_fixAttachUrl:function(t){},
_loaded:function(a){var e=this._getWaiters(a);this._loadedIds[a]=!0,this._waiters[a]=null;
for(var i=0;i<e.length;i++){var s=e[i];s.frameDoc=o.doc(t.byId(a)),r.attach(s.id,s.url,s.frameDoc);
}}};var a=r._canAttach,e=dojox.io.scriptFrame;return r._canAttach=function(r){var i=r.args.frameDoc;
if(i&&t.isString(i)){var s=t.byId(i),d=e._getWaiters(i);return s?e._loadedIds[i]?(r.frameDoc=o.doc(s),
this.attach(r.id,r.url,r.frameDoc)):d.push(r):(d.push(r),o.create(i,dojox._scopeName+".io.scriptFrame._loaded('"+i+"');")),
!1}return a.apply(this,arguments)},dojox.io.scriptFrame});