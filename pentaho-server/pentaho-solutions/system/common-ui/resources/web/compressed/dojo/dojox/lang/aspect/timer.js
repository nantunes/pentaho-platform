dojo.provide("dojox.lang.aspect.timer"),function(){var n=dojox.lang.aspect,o=0,e=function(n){
this.name=n||"DojoAopTimer #"+ ++o,this.inCall=0};dojo.extend(e,{before:function(){
this.inCall++||console.time(this.name)},after:function(){--this.inCall||console.timeEnd(this.name);
}}),n.timer=function(n){return new e(n)}}();