define(["./_base/kernel","./_base/lang"],function(r,t){var i=r.AdapterRegistry=function(r){
this.pairs=[],this.returnWrappers=r||!1};return t.extend(i,{register:function(r,t,i,s,e){
this.pairs[e?"unshift":"push"]([r,t,i,s])},match:function(){for(var r=0;r<this.pairs.length;r++){
var t=this.pairs[r];if(t[1].apply(this,arguments))return t[3]||this.returnWrappers?t[2]:t[2].apply(this,arguments);
}throw new Error("No match found")},unregister:function(r){for(var t=0;t<this.pairs.length;t++){
var i=this.pairs[t];if(i[0]==r)return this.pairs.splice(t,1),!0}return!1}}),i});