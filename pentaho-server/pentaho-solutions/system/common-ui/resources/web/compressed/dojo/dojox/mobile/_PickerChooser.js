define(["dojo/_base/lang","dojo/_base/window"],function(e,o){return{load:function(n,d,r){
var a=o.global._no_dojo_dm||e.getObject("dojox.mobile",!0);d([("android"===a.currentTheme||"holodark"===a.currentTheme?"./ValuePicker":"./SpinWheel")+n],r);
}}});