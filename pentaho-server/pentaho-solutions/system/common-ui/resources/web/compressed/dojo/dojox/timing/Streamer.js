define(["./_base"],function(){return dojo.experimental("dojox.timing.Streamer"),dojox.timing.Streamer=function(t,n,i,o,u){
var r=[];this.interval=i||1e3,this.minimumSize=o||10,this.inputFunction=t||function(t){},
this.outputFunction=n||function(t){};var e=new dojox.timing.Timer(this.interval);this.setInterval=function(t){
this.interval=t,e.setInterval(t)},this.onTick=function(t){},this.start=function(){
if("function"==typeof this.inputFunction&&"function"==typeof this.outputFunction)return void e.start();
throw new Error("You cannot start a Streamer without an input and an output function.");
},this.onStart=function(){},this.stop=function(){e.stop()},this.onStop=function(){},
e.onTick=this.tick,e.onStart=this.onStart,e.onStop=this.onStop,u&&r.concat(u)}});