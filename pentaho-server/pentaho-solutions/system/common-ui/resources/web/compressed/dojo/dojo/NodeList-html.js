define(["./query","./_base/lang","./html"],function(t,e,n){var r=t.NodeList;return e.extend(r,{
html:function(t,e){var r=new n._ContentSetter(e||{});return this.forEach(function(e){
r.node=e,r.set(t),r.tearDown()}),this}}),r});