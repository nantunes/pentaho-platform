define(["dojo/_base/declare","dojo/_base/lang","dojo/has"],function(e,t,n){return n.add("dom-qsa",!!document.createElement("div").querySelectorAll),
e("dojox.mvc._InlineTemplateMixin",null,{buildRendering:function(){var e=this.srcNodeRef;
if(e){for(var i=n("dom-qsa")?e.querySelectorAll("script[type='dojox/mvc/InlineTemplate']"):e.getElementsByTagName("script"),o=[],r=0,l=i.length;l>r;++r)(n("dom-qsa")||"dojox/mvc/InlineTemplate"==i[r].getAttribute("type"))&&o.push(i[r].innerHTML);
var a=t.trim(o.join(""));a&&(this.templateString=a)}this.inherited(arguments)}})});