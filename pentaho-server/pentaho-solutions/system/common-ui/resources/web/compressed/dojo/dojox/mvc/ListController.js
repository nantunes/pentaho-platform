define(["dojo/_base/array","dojo/_base/lang","dojo/_base/declare","./ModelRefController"],function(r,e,t,s){
function o(r){for(var e in{_listModelWatchHandle:1,_tableModelWatchHandle:1})r[e]&&(r[e].unwatch(),
r[e]=null)}function n(r,e,t){o(r),t&&e!==t&&(t.watchElements?r._listModelWatchHandle=t.watchElements(function(e,t,s){
if(t&&s){var o=r.get("cursorIndex");if(t&&o>=e&&o<e+t.length)return void r.set("cursorIndex",-1);
(t.length||s.length)&&o>=e&&r.set(r._refCursorProp,r.get("cursor"))}else r.set(r._refCursorProp,r.get(r._refCursorProp));
}):t.set&&t.watch&&(r.get("cursorIndex")<0&&r._set("cursorIndex",""),r._tableModelWatchHandle=t.watch(function(e,t,s){
t!==s&&e==r.get("cursorIndex")&&r.set(r._refCursorProp,s)}))),r._setCursorIndexAttr(r.cursorIndex);
}function i(t,s,o){var n=t[t._refInModelProp];if(n&&s!==o)if(e.isArray(n)){var i=r.indexOf(n,o);
if(0>i){var d=t.get("cursorIndex");d>=0&&d<n.length&&n.set(d,o)}else t.set("cursorIndex",i);
}else{for(var u in n)if(n[u]==o)return void t.set("cursorIndex",u);var d=t.get("cursorIndex");
d&&n.set(d,o)}}return t("dojox.mvc.ListController",s,{idProperty:"uniqueId",cursorId:null,
cursorIndex:-1,cursor:null,model:null,_listModelWatchHandle:null,_tableModelWatchHandle:null,
_refCursorProp:"cursor",_refModelProp:"cursor",destroy:function(){o(this),this.inherited(arguments);
},set:function(r,e){var t=this[this._refCursorProp],s=this[this._refInModelProp];this.inherited(arguments),
r==this._refCursorProp&&i(this,t,e),r==this._refInModelProp&&n(this,s,e)},_setCursorIdAttr:function(r){
var t=this.cursorId;this._set("cursorId",r);var s=this[this._refInModelProp];if(s&&t!==r)if(e.isArray(s)){
for(var o=0;o<s.length;o++)if(s[o][this.idProperty]==r)return void this.set("cursorIndex",o);
this._set("cursorIndex",-1)}else{for(var n in s)if(s[n][this.idProperty]==r)return void this.set("cursorIndex",n);
this._set("cursorIndex","")}},_setCursorIndexAttr:function(r){this._set("cursorIndex",r),
this[this._refInModelProp]&&(this.set(this._refCursorProp,this[this._refInModelProp][r]),
this.set("cursorId",this[this._refInModelProp][r]&&this[this._refInModelProp][r][this.idProperty]));
},hasControllerProperty:function(r){return this.inherited(arguments)||r==this._refCursorProp;
}})});