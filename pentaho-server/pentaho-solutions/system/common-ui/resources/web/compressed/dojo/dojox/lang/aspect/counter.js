dojo.provide("dojox.lang.aspect.counter"),function(){var o=dojox.lang.aspect,n=function(){
this.reset()};dojo.extend(n,{before:function(){++this.calls},afterThrowing:function(){
++this.errors},reset:function(){this.calls=this.errors=0}}),o.counter=function(){
return new n}}();