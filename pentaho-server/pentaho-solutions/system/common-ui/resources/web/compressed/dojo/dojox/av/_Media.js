define(["dojo"],function(t){return t.experimental("dojox.av.FLVideo"),t.declare("dojox.av._Media",null,{
mediaUrl:"",initialVolume:1,autoPlay:!1,bufferTime:2e3,minBufferTime:300,updateTime:100,
id:"",isDebug:!1,percentDownloaded:0,_flashObject:null,flashMedia:null,allowScriptAccess:"always",
allowNetworking:"all",wmode:"transparent",allowFullScreen:!0,_initStatus:function(){
this.status="ready",this._positionHandle=t.connect(this,"onPosition",this,"_figureStatus");
},getTime:function(){return this.flashMedia.getTime()},onLoad:function(t){},onDownloaded:function(t){},
onClick:function(t){},onSwfSized:function(t){},onMetaData:function(t,s){console.warn("onMeta",t),
this.duration=t.duration},onPosition:function(t){},onStart:function(t){},onPlay:function(t){},
onPause:function(t){},onEnd:function(t){},onStop:function(){},onBuffer:function(t){
this.isBuffering=t},onError:function(t,s){console.warn("ERROR-"+t.type.toUpperCase()+":",t.info.code," - URL:",s);
},onStatus:function(t){},onPlayerStatus:function(t){},onResize:function(){},_figureStatus:function(){
var t=this.getTime();"stopping"==this.status?(this.status="stopped",this.onStop(this._eventFactory())):"ending"==this.status&&t==this._prevPos?(this.status="ended",
this.onEnd(this._eventFactory())):this.duration&&t>this.duration-.5?this.status="ending":0===t?"ready"==this.status||(this.status="stopped",
"stopped"!=this._prevStatus&&this.onStop(this._eventFactory())):"ready"==this.status?(this.status="started",
this.onStart(this._eventFactory()),this.onPlay(this._eventFactory())):this.isBuffering?this.status="buffering":"started"==this.status||"playing"==this.status&&t!=this._prevPos?this.status="playing":this.isStopped||"playing"!=this.status||t!=this._prevPos?"paused"!=this.status&&"stopped"!=this.status||t==this._prevPos||(this.status="started",
this.onPlay(this._eventFactory())):(this.status="paused",console.warn("pause",t,this._prevPos),
this.status!=this._prevStatus&&this.onPause(this._eventFactory())),this._prevPos=t,
this._prevStatus=this.status,this.onStatus(this.status)},_eventFactory:function(){
var t={status:this.status};return t},_sub:function(s,i){t.subscribe(this.id+"/"+s,this,i);
},_normalizeVolume:function(t){if(t>1)for(;t>1;)t*=.1;return t},_normalizeUrl:function(t){
if(console.log("  url:",t),t&&(t.toLowerCase().indexOf("http")<0||0==t.indexOf("/"))){
var s=window.location.href.split("/");s.pop(),s=s.join("/")+"/",console.log("  loc:",s),
t=s+t}return t},destroy:function(){return this.flashMedia?(t.forEach(this._subs,function(s){
t.unsubscribe(s)}),t.forEach(this._cons,function(s){t.disconnect(s)}),void this._flashObject.destroy()):void this._cons.push(t.connect(this,"onLoad",this,"destroy"));
}})});