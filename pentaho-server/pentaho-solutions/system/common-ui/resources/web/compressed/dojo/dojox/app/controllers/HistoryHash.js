define(["dojo/_base/lang","dojo/_base/declare","dojo/topic","dojo/on","../Controller","../utils/hash","dojo/hash"],function(t,i,s,h,o,e){
return i("dojox.app.controllers.HistoryHash",o,{constructor:function(i){this.events={
"app-domNode":this.onDomNodeChange},this.app.domNode&&this.onDomNodeChange({oldNode:null,
newNode:this.app.domNode}),s.subscribe("/dojo/hashchange",t.hitch(this,function(t){
this._onHashChange(t)})),this._historyStack=[],this._historyLen=0,this._historyDiff=0,
this._current=null,this._next=null,this._previous=null,this._index=0,this._oldHistoryLen=0,
this._newHistoryLen=0,this._addToHistoryStack=!1,this._startTransitionEvent=!1;var h=window.location.hash;
h&&h.length>1&&(h=h.substr(1)),this._historyStack.push({hash:h,url:window.location.href,
detail:{target:h}}),this._historyLen=window.history.length,this._index=this._historyStack.length-1,
this._current=h,this._historyDiff=window.history.length-this._historyStack.length;
},onDomNodeChange:function(i){null!=i.oldNode&&this.unbind(i.oldNode,"startTransition"),
this.bind(i.newNode,"startTransition",t.hitch(this,this.onStartTransition))},onStartTransition:function(t){
var i=t.detail.target,s=/#(.+)/;!i&&s.test(t.detail.href)&&(i=t.detail.href.match(s)[1]);
var h=t.detail.url||"#"+i;t.detail.params&&(h=e.buildWithParams(h,t.detail.params)),
this._oldHistoryLen=window.history.length,window.location.hash=h,this._addToHistoryStack=!0,
this._startTransitionEvent=!0},_addHistory:function(t){this._historyStack.push({hash:t,
url:window.location.href,detail:{target:t}}),this._historyLen=window.history.length,
this._index=this._historyStack.length-1,this._previous=this._current,this._current=t,
this._next=null,this._historyDiff=window.history.length-this._historyStack.length,
this._addToHistoryStack=!1},_onHashChange:function(t){if(this._index<0||this._index>window.history.length-1)throw Error("Application history out of management.");
if(this._newHistoryLen=window.history.length,this._oldHistoryLen>this._newHistoryLen&&(this._historyStack.splice(this._newHistoryLen-this._historyDiff-1,this._historyStack.length-1),
this._historyLen=this._historyStack.length,this._oldHistoryLen=0),this._addToHistoryStack&&this._oldHistoryLen===this._newHistoryLen)return this._historyStack.splice(this._newHistoryLen-this._historyDiff-1,this._historyStack.length-1),
void this._addHistory(t);if(this._historyLen<window.history.length)this._addHistory(t),
this._startTransitionEvent||this.app.emit("app-transition",{viewId:e.getTarget(t),
opts:{params:e.getParams(t)||{}}});else if(t==this._current);else if(t===this._previous)this._back(t,this._historyStack[this._index].detail);else if(t===this._next)this._forward(t,this._historyStack[this._index].detail);else{
for(var i=-1,s=this._index;s>0;s--)if(t===this._historyStack[s].hash){i=s;break}if(-1===i)for(var s=this._index;s<this._historyStack.length;s++)if(t===this._historyStack[s].hash){
i=s;break}i>0<this._historyStack.length?this._go(i,i-this._index):this.app.log("go error. index out of history stack.");
}this._startTransitionEvent=!1},_back:function(i,h){this.app.log("back"),this._next=this._historyStack[this._index].hash,
this._index--,this._index>0?this._previous=this._historyStack[this._index-1].hash:this._previous=null,
this._current=i;var o=e.getTarget(i,this.app.defaultView);s.publish("/app/history/back",{
viewId:o,detail:h}),this.app.emit("app-transition",{viewId:o,opts:t.mixin({reverse:!0
},h,{params:e.getParams(i)})})},_forward:function(i,h){this.app.log("forward"),this._previous=this._historyStack[this._index].hash,
this._index++,this._index<this._historyStack.length-1?this._next=this._historyStack[this._index+1].hash:this._next=null,
this._current=i;var o=e.getTarget(i,this.app.defaultView);s.publish("/app/history/forward",{
viewId:o,detail:h}),this.app.emit("app-transition",{viewId:o,opts:t.mixin({reverse:!1
},h,{params:e.getParams(i)})})},_go:function(i,h){if(0>i||i>window.history.length-1)throw Error("Application history.go steps out of management, index: "+i+" length: "+window.history.length);
this._index=i,this._current=this._historyStack[i].hash,this._previous=this._historyStack[i-1]?this._historyStack[i-1].hash:null,
this._next=this._historyStack[i+1]?this._historyStack[i+1].hash:null;var o=e.getTarget(this._current,this.app.defaultView);
s.publish("/app/history/go",{viewId:o,step:h,detail:this._historyStack[i].detail}),
this.app.emit("app-transition",{viewId:o,opts:t.mixin({reverse:0>=h},this._historyStack[i].detail,{
params:e.getParams(this._current)})})}})});