define(["dojo/_base/lang","dojo/query","../_base"],function(e,t,n){var o=(e.getObject("dojox.dtl.ext-dojo.NodeList",!0),
t.NodeList);return e.extend(o,{dtl:function(e,t){var o=n,r=this,a=function(e,t){var n=e.render(new o._Context(t));
r.forEach(function(e){e.innerHTML=n})};return o.text._resolveTemplateArg(e).addCallback(function(n){
e=new o.Template(n),o.text._resolveContextArg(t).addCallback(function(t){a(e,t)});
}),this}}),o});