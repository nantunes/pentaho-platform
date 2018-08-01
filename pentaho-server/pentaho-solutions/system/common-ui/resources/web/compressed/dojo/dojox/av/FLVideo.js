define(["dojo","dijit","dijit/_Widget","dojox/embed/Flash","dojox/av/_Media"],function(i,t,s,e,a){
return i.experimental("dojox.av.FLVideo"),i.declare("dojox.av.FLVideo",[s,a],{_swfPath:i.moduleUrl("dojox.av","resources/video.swf"),
constructor:function(t){i.global.swfIsInHTML=function(){return!0}},postCreate:function(){
this._subs=[],this._cons=[],this.mediaUrl=this._normalizeUrl(this.mediaUrl),this.initialVolume=this._normalizeVolume(this.initialVolume);
var t={path:this._swfPath,width:"100%",height:"100%",minimumVersion:9,expressInstall:!0,
params:{allowFullScreen:this.allowFullScreen,wmode:this.wmode,allowScriptAccess:this.allowScriptAccess,
allowNetworking:this.allowNetworking},vars:{videoUrl:this.mediaUrl,id:this.id,autoPlay:this.autoPlay,
volume:this.initialVolume,isDebug:this.isDebug}};this._sub("stageClick","onClick"),
this._sub("stageSized","onSwfSized"),this._sub("mediaStatus","onPlayerStatus"),this._sub("mediaMeta","onMetaData"),
this._sub("mediaError","onError"),this._sub("mediaStart","onStart"),this._sub("mediaEnd","onEnd"),
this._flashObject=new dojox.embed.Flash(t,this.domNode),this._flashObject.onError=function(i){
console.error("Flash Error:",i)},this._flashObject.onLoad=i.hitch(this,function(i){
this.flashMedia=i,this.isPlaying=this.autoPlay,this.isStopped=!this.autoPlay,this.onLoad(this.flashMedia),
this._initStatus(),this._update()}),this.inherited(arguments)},play:function(i){this.isPlaying=!0,
this.isStopped=!1,this.flashMedia.doPlay(this._normalizeUrl(i))},pause:function(){
this.isPlaying=!1,this.isStopped=!1,this.onPaused&&this.onPaused(),this.flashMedia.pause();
},seek:function(i){this.flashMedia.seek(i)},volume:function(i){return i&&(this.flashMedia||(this.initialVolume=i),
this.flashMedia.setVolume(this._normalizeVolume(i))),this.flashMedia&&this.flashMedia.doGetVolume?this.flashMedia.getVolume():this.initialVolume;
},_checkBuffer:function(i,t){if(100==this.percentDownloaded)return void(this.isBuffering&&(this.onBuffer(!1),
this.flashMedia.doPlay()));if(!this.isBuffering&&.1>t)return this.onBuffer(!0),void this.flashMedia.pause();
var s=.01*this.percentDownloaded*this.duration;!this.isBuffering&&i+.001*this.minBufferTime>s?(this.onBuffer(!0),
this.flashMedia.pause()):this.isBuffering&&i+.001*this.bufferTime<=s&&(this.onBuffer(!1),
this.flashMedia.doPlay())},_update:function(){var t=Math.min(this.getTime()||0,this.duration),s=this.flashMedia.getLoaded();
this.percentDownloaded=Math.ceil(s.bytesLoaded/s.bytesTotal*100),this.onDownloaded(this.percentDownloaded),
this.onPosition(t),this.duration&&this._checkBuffer(t,s.buffer),this._updateHandle=setTimeout(i.hitch(this,"_update"),this.updateTime);
},destroy:function(){clearTimeout(this._updateHandle),i.disconnect(this._positionHandle),
this.inherited(arguments)}})});