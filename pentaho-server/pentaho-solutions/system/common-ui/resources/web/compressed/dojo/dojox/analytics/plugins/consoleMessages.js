define(["dojo/_base/lang","../_base","dojo/_base/config","dojo/aspect"],function(o,a,e,s){
var n=o.getObject("dojox.analytics.plugins.consoleMessages",!0);this.addData=o.hitch(a,"addData","consoleMessages");
var c=e.consoleLogFuncs||["error","warn","info","rlog"];console||(console={});for(var t=0;t<c.length;t++){
var l=c[t],r=o.hitch(this,"addData",l);console[l]?s.after(console,l,r,!0):console[l]=r;
}return n});