define(["./_base"],function(){dojo.experimental("dojox.timing.ThreadPool");var t=dojox.timing;
return t.threadStates={UNSTARTED:"unstarted",STOPPED:"stopped",PENDING:"pending",
RUNNING:"running",SUSPENDED:"suspended",WAITING:"waiting",COMPLETE:"complete",ERROR:"error"
},t.threadPriorities={LOWEST:1,BELOWNORMAL:2,NORMAL:3,ABOVENORMAL:4,HIGHEST:5},t.Thread=function(e,r){
var i=this;this.state=t.threadStates.UNSTARTED,this.priority=r||t.threadPriorities.NORMAL,
this.lastError=null,this.func=e,this.invoke=function(){i.state=t.threadStates.RUNNING;
try{e(this),i.state=t.threadStates.COMPLETE}catch(r){i.lastError=r,i.state=t.threadStates.ERROR;
}}},t.ThreadPool=new function(e,r){var i=this,n=e,o=n,s=r,a=(Math.floor(s/2/n),[]),h=new Array(n+1),u=new dojox.timing.Timer;
this.getMaxThreads=function(){return n},this.getAvailableThreads=function(){return o;
},this.getTickInterval=function(){return s},this.queueUserWorkItem=function(e){var r=e;
r instanceof Function&&(r=new t.Thread(r));for(var i=a.length,n=0;n<a.length;n++)if(a[n].priority<r.priority){
i=n;break}return i<a.length?a.splice(i,0,r):a.push(r),!0},this.removeQueuedUserWorkItem=function(t){
if(t instanceof Function){for(var e=-1,r=0;r<a.length;r++)if(a[r].func==t){e=r;break;
}return e>-1?(a.splice(e,1),!0):!1}for(var e=-1,r=0;r<a.length;r++)if(a[r]==t){e=r;
break}return e>-1?(a.splice(e,1),!0):!1},this.start=function(){u.start()},this.stop=function(){
u.stop()},this.abort=function(){this.stop();for(var t=1;t<h.length;t++)h[t]&&window.clearTimeout(h[t]);
for(var e in h[0])this.queueUserWorkItem(e);h[0]={}},this.reset=function(){this.abort(),
a=[]},this.sleep=function(t){u.stop(),window.setTimeout(u.start,t)},u.onTick=i.invoke;
}(16,5e3),dojox.timing.ThreadPool});