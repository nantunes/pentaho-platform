define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/window","dojo/dom-construct"],function(e,r,c,t){
return r("dojox.mobile._ExecScriptMixin",null,{execScript:function(r){var n=r.replace(/\f/g," ").replace(/<\/script>/g,"\f");
return n=n.replace(/<script [^>]*src=['"]([^'"]+)['"][^>]*>([^\f]*)\f/gi,function(e,r){
return t.create("script",{type:"text/javascript",src:r},c.doc.getElementsByTagName("head")[0]),
""}),n=n.replace(/<script>([^\f]*)\f/gi,function(r,c){return e.eval(c),""})}})});