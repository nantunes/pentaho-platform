define(["dojo","dijit","dijit/_Widget","dijit/_TemplatedMixin"],function(t,i,s,e){
return t.declare("dojox.av.widget.PlayButton",[s,e],{templateString:t.cache("dojox.av.widget","resources/PlayButton.html"),
postCreate:function(){this.showPlay()},setMedia:function(i){this.media=i,t.connect(this.media,"onEnd",this,"showPlay"),
t.connect(this.media,"onStart",this,"showPause")},onClick:function(){"play"==this._mode?this.onPlay():this.onPause();
},onPlay:function(){this.media&&this.media.play(),this.showPause()},onPause:function(){
this.media&&this.media.pause(),this.showPlay()},showPlay:function(){this._mode="play",
t.removeClass(this.domNode,"Pause"),t.addClass(this.domNode,"Play")},showPause:function(){
this._mode="pause",t.addClass(this.domNode,"Pause"),t.removeClass(this.domNode,"Play");
}})});