define(["require","dojo/_base/kernel","dojo/_base/lang","dojo/has!dojo-parser?:dojo/_base/window","dojo/has","dojo/has!dojo-mobile-parser?:dojo/parser","dojo/has!dojo-parser?:dojox/mobile/parser","dojox/mvc/_atBindingMixin","dojox/mvc/Element"],function(e,t,o,r,a,d,s,n){
a.add("dom-qsa",!!document.createElement("div").querySelectorAll);try{a.add("dojo-parser",!!e("dojo/parser"));
}catch(p){}try{a.add("dojo-mobile-parser",!!e("dojox/mobile/parser"))}catch(p){}if(a("dojo-parser")){
var i=d.scan;d.scan=function(e,r){return i.apply(this,o._toArray(arguments)).then(function(o){
for(var d=(r.scope||t._scopeName)+"Type",s="data-"+(r.scope||t._scopeName)+"-",p=s+"type",i=a("dom-qsa")?e.querySelectorAll("["+n.prototype.dataBindAttr+"]"):e.getElementsByTagName("*"),c=0,m=i.length;m>c;c++){
var l=i[c];l.getAttribute(p)||l.getAttribute(d)||!l.getAttribute(n.prototype.dataBindAttr)||o.push({
types:["dojox/mvc/Element"],node:l})}return o})}}if(a("dojo-mobile-parser")){var c=s.parse;
s.parse=function(e,d){var s=((d||{}).scope||t._scopeName)+"Type",p="data-"+((d||{}).scope||t._scopeName)+"-",i=p+"type";
nodes=a("dom-qsa")?(e||r.body()).querySelectorAll("["+n.prototype.dataBindAttr+"]"):(e||r.body()).getElementsByTagName("*");
for(var m=0,l=nodes.length;l>m;m++){var u=nodes[m];u.getAttribute(i)||u.getAttribute(s)||!u.getAttribute(n.prototype.dataBindAttr)||u.setAttribute(i,"dojox/mvc/Element");
}return c.apply(this,o._toArray(arguments))}}return d||s});