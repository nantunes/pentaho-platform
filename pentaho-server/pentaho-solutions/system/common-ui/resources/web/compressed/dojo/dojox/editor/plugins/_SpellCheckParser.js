define(["dojo","dojox","dojo/_base/connect","dojo/_base/declare"],function(e,r){var n=e.declare("dojox.editor.plugins._SpellCheckParser",null,{
lang:"english",parseIntoWords:function(e){function r(e){var r=e.charCodeAt(0);return r>=48&&57>=r||r>=65&&90>=r||r>=97&&122>=r;
}for(var n=this.words=[],o=this.indices=[],s=0,t=e&&e.length,i=0;t>s;){for(var c;t>s&&!r(c=e.charAt(s))&&"&"!=c;)s++;
if("&"==c)for(;++s<t&&";"!=(c=e.charAt(s))&&r(c););else{for(i=s;++s<t&&r(e.charAt(s)););
t>i&&(n.push(e.substring(i,s)),o.push(i))}}return n},getIndices:function(){return this.indices;
}});return e.subscribe(dijit._scopeName+".Editor.plugin.SpellCheck.getParser",null,function(e){
e.parser||(e.parser=new n)}),n});