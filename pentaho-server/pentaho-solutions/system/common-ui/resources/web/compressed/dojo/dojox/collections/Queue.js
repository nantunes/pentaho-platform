define(["dojo/_base/kernel","dojo/_base/array","./_base"],function(t,n,e){return e.Queue=function(n){
var u=[];n&&(u=u.concat(n)),this.count=u.length,this.clear=function(){u=[],this.count=u.length;
},this.clone=function(){return new e.Queue(u)},this.contains=function(t){for(var n=0;n<u.length;n++)if(u[n]==t)return!0;
return!1},this.copyTo=function(t,n){t.splice(n,0,u)},this.dequeue=function(){var t=u.shift();
return this.count=u.length,t},this.enqueue=function(t){this.count=u.push(t)},this.forEach=function(n,e){
t.forEach(u,n,e)},this.getIterator=function(){return new e.Iterator(u)},this.peek=function(){
return u[0]},this.toArray=function(){return[].concat(u)}},e.Queue});