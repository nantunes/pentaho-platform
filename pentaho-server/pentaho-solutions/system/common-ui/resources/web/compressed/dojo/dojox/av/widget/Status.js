define(["dojo","dijit","dijit/_Widget","dijit/_TemplatedMixin"],function(t,i,n,s){
return t.declare("dojox.av.widget.Status",[n,s],{templateString:t.cache("dojox.av.widget","resources/Status.html"),
setMedia:function(i){this.media=i,t.connect(this.media,"onMetaData",this,function(t){
this.duration=t.duration,this.durNode.innerHTML=this.toSeconds(this.duration)}),t.connect(this.media,"onPosition",this,function(t){
this.timeNode.innerHTML=this.toSeconds(t)});var n=["onMetaData","onPosition","onStart","onBuffer","onPlay","onPaused","onStop","onEnd","onError","onLoad"];
t.forEach(n,function(i){t.connect(this.media,i,this,i)},this)},onMetaData:function(t){
if(this.duration=t.duration,this.durNode.innerHTML=this.toSeconds(this.duration),
this.media.title)this.title=this.media.title;else{var i=this.media.mediaUrl.split("/"),n=i[i.length-1].split(".")[0];
this.title=n}},onBuffer:function(t){this.isBuffering=t,console.warn("status onBuffer",this.isBuffering),
this.isBuffering?this.setStatus("buffering..."):this.setStatus("Playing")},onPosition:function(t){},
onStart:function(){this.setStatus("Starting")},onPlay:function(){this.setStatus("Playing");
},onPaused:function(){this.setStatus("Paused")},onStop:function(){this.setStatus("Stopped");
},onEnd:function(){this.setStatus("Stopped")},onError:function(t){console.log("status error:",t);
var i=t.info.code;"NetStream.Play.StreamNotFound"==i&&(i="Stream Not Found"),this.setStatus("ERROR: "+i,!0);
},onLoad:function(){this.setStatus("Loading...")},setStatus:function(i,n){n?t.addClass(this.titleNode,"statusError"):(t.removeClass(this.titleNode,"statusError"),
this.isBuffering&&(i="buffering...")),this.titleNode.innerHTML='<span class="statusTitle">'+this.title+'</span> <span class="statusInfo">'+i+"</span>";
},toSeconds:function(t){var i=t.toString();return i.indexOf(".")<0?i+=".00":i.length-i.indexOf(".")==2?i+="0":i.length-i.indexOf(".")>2&&(i=i.substring(0,i.indexOf(".")+3)),
i}})});