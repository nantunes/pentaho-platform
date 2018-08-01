define(["dojo","dojox/embed/Flash","dojox/timing/doLater"],function(i,t){return i.experimental("dojox.av.FLVideo"),
i.declare("dojox.av.FLAudio",null,{id:"",initialVolume:.7,initialPan:0,isDebug:!1,
statusInterval:200,_swfPath:i.moduleUrl("dojox.av","resources/audio.swf"),allowScriptAccess:"always",
allowNetworking:"all",constructor:function(t){i.global.swfIsInHTML=function(){return!0;
},i.mixin(this,t||{}),this.id||(this.id="flaudio_"+(new Date).getTime()),this.domNode=i.doc.createElement("div"),
i.style(this.domNode,{position:"relative",width:"1px",height:"1px",top:"1px",left:"1px"
}),i.body().appendChild(this.domNode),this.init()},init:function(){this._subs=[],
this.initialVolume=this._normalizeVolume(this.initialVolume);var t={path:this._swfPath,
width:"1px",height:"1px",minimumVersion:9,expressInstall:!0,params:{wmode:"transparent",
allowScriptAccess:this.allowScriptAccess,allowNetworking:this.allowNetworking},vars:{
id:this.id,autoPlay:this.autoPlay,initialVolume:this.initialVolume,initialPan:this.initialPan,
statusInterval:this.statusInterval,isDebug:this.isDebug}};this._sub("mediaError","onError"),
this._sub("filesProgress","onLoadStatus"),this._sub("filesAllLoaded","onAllLoaded"),
this._sub("mediaPosition","onPlayStatus"),this._sub("mediaEnd","onComplete"),this._sub("mediaMeta","onID3"),
this._flashObject=new dojox.embed.Flash(t,this.domNode),this._flashObject.onError=function(i){
console.warn("Flash Error:",i)},this._flashObject.onLoad=i.hitch(this,function(i){
this.flashMedia=i,this.isPlaying=this.autoPlay,this.isStopped=!this.autoPlay,this.onLoad(this.flashMedia);
})},load:function(i){if(dojox.timing.doLater(this.flashMedia,this))return!1;if(!i.url)throw new Error("An url is required for loading media");
return i.url=this._normalizeUrl(i.url),this.flashMedia.load(i),i.url},doPlay:function(i){
this.flashMedia.doPlay(i)},pause:function(i){this.flashMedia.pause(i)},stop:function(i){
this.flashMedia.doStop(i)},setVolume:function(i){this.flashMedia.setVolume(i)},setPan:function(i){
this.flashMedia.setPan(i)},getVolume:function(i){return this.flashMedia.getVolume(i);
},getPan:function(i){return this.flashMedia.getPan(i)},getPosition:function(i){return this.flashMedia.getPosition(i);
},onError:function(i){console.warn("SWF ERROR:",i)},onLoadStatus:function(i){},onAllLoaded:function(){},
onPlayStatus:function(i){},onComplete:function(i){},onLoad:function(){},onID3:function(i){},
destroy:function(){return this.flashMedia?(i.forEach(this._subs,function(t){i.unsubscribe(t);
}),i.forEach(this._cons,function(t){i.disconnect(t)}),void this._flashObject.destroy()):void this._cons.push(i.connect(this,"onLoad",this,"destroy"));
},_sub:function(t,o){i.subscribe(this.id+"/"+t,this,o)},_normalizeVolume:function(i){
if(i>1)for(;i>1;)i*=.1;return i},_normalizeUrl:function(i){if(i&&i.toLowerCase().indexOf("http")<0){
var t=window.location.href.split("/");t.pop(),t=t.join("/")+"/",i=t+i}return i}});
});