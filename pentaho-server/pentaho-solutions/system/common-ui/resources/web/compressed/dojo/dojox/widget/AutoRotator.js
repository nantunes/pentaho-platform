define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/on","dojo/mouse","dojox/widget/Rotator"],function(e,s,t,i,n,a){
return e("dojox.widget.AutoRotator",a,{suspendOnHover:!1,duration:4e3,autoStart:!0,
pauseOnManualChange:!1,cycles:-1,random:!1,reverse:!1,constructor:function(){var e=this;
e.cycles-0==e.cycles&&e.cycles>0?e.cycles++:e.cycles=e.cycles?-1:0,e._signals=[i(e._domNode,n.enter,function(){
if(e.suspendOnHover&&!e.anim&&!e.wfe){var s=e._endTime,t=e._now();e._suspended=!0,
e._resetTimer(),e._resumeDuration=s>t?s-t:.01}}),i(e._domNode,n.leave,function(){
e.suspendOnHover&&!e.anim&&(e._suspended=!1,e.playing&&!e.wfe&&e.play(!0))})],e.autoStart&&e.panes.length>1?e.play():e.pause();
},destroy:function(){s.forEach(this._signals,function(e){e.remove()}),delete this._signals,
dojo.forEach(this._connects,dojo.disconnect),this.inherited(arguments)},play:function(e,s){
if(this.playing=!0,this._resetTimer(),e!==!0&&this.cycles>0&&this.cycles--,0==this.cycles)this.pause();else if(!this._suspended)if(this.onUpdate("play"),
s)this._cycle();else{var i=(this._resumeDuration||0)-0,n=(i>0?i:this.panes[this.idx].duration||this.duration)-0;
this._resumeDuration=0,this._endTime=this._now()+n,this._timer=setTimeout(t.hitch(this,"_cycle",!1),n);
}},pause:function(){this.playing=this._suspended=!1,this.cycles=-1,this._resetTimer(),
this.onUpdate("pause")},_now:function(){return(new Date).getTime()},_resetTimer:function(){
clearTimeout(this._timer)},_cycle:function(e){var s,t=this,i=t.idx;if(t.random){do s=Math.floor(Math.random()*t.panes.length+1);while(s==i);
}else s=i+(t.reverse?-1:1);var n=t.go(s);n&&n.addCallback(function(e){t.onUpdate("cycle"),
t.playing&&t.play(!1,e)})},onManualChange:function(e){this.cycles=-1,"play"!=e&&(this._resetTimer(),
this.pauseOnManualChange&&this.pause()),this.playing&&this.play()}})});