define(["dojo/_base/kernel","dojo/_base/declare","dojo/parser","./widgetParser"],function(o,e,r){
return dojo.getObject("xml",!0,dojox),o("dojox.xml.Script",null,{constructor:function(o,t){
e.instantiate(r._processScript(t))}}),dojox.xml.Script});