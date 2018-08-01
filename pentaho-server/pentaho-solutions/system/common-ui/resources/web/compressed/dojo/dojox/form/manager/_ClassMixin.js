define(["dojo/_base/lang","dojo/_base/kernel","dojo/dom-class","./_Mixin","dojo/_base/declare"],function(n,e,t,o,a){
var r=n.getObject("dojox.form.manager",!0),i=r.actionAdapter,s=r.inspectorAdapter;
return a("dojox.form.manager._ClassMixin",null,{gatherClassState:function(n,e){var o=this.inspect(s(function(e,o){
return t.contains(o,n)}),e);return o},addClass:function(n,e){return this.inspect(i(function(e,o){
t.add(o,n)}),e),this},removeClass:function(n,e){return this.inspect(i(function(e,o){
t.remove(o,n)}),e),this}})});