define(["dojo/_base/lang","../_base","dojo/_base/config","dojo/ready"],function(o,a,d,t){
var n=o.getObject("dojox.analytics.plugins",!0);return n.dojo=new function(){this.addData=o.hitch(a,"addData","dojo"),
t(o.hitch(this,function(){var o={};for(var a in dojo)("version"==a||"object"!=typeof dojo[a]&&"function"!=typeof dojo[a]&&"_"!=a[0])&&(o[a]=dojo[a]);
d&&(o.djConfig=d),this.addData(o)}))}});