define(["dojo/_base/lang","dojo/query","dojo/NodeList-fx","dojo/fx","../style"],function(n,e,o,t,s){
var r=e.NodeList;return n.extend(r,{addClassFx:function(n,e){return t.combine(this.map(function(o){
return s.addClass(o,n,e)}))},removeClassFx:function(n,e){return t.combine(this.map(function(o){
return s.removeClass(o,n,e)}))},toggleClassFx:function(n,e,o){return t.combine(this.map(function(t){
return s.toggleClass(t,n,e,o)}))}}),r});