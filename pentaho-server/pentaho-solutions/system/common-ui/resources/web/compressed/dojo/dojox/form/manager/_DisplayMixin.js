define(["dojo/_base/kernel","dojo/dom-style","dojo/_base/declare"],function(n,t,e){
return e("dojox.form.manager._DisplayMixin",null,{gatherDisplayState:function(n){
var e=this.inspectAttachedPoints(function(n,e){return"none"!=t.get(e,"display")},n);
return e},show:function(n,e){return arguments.length<2&&(e=!0),this.inspectAttachedPoints(function(n,e,i){
t.set(e,"display",i?"":"none")},n,e),this},hide:function(n){return this.show(n,!1);
}})});