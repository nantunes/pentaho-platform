define(["dojo/_base/lang","dojo/_base/declare","dojo/on","../Controller","../utils/hash","dojo/topic"],function(t,i,e,o,a,n){
return i("dojox.app.controllers.History",o,{_currentPosition:0,currentState:{},constructor:function(){
this.events={"app-domNode":this.onDomNodeChange},this.app.domNode&&this.onDomNodeChange({
oldNode:null,newNode:this.app.domNode}),this.bind(window,"popstate",t.hitch(this,this.onPopState));
},onDomNodeChange:function(i){null!=i.oldNode&&this.unbind(i.oldNode,"startTransition"),
this.bind(i.newNode,"startTransition",t.hitch(this,this.onStartTransition))},onStartTransition:function(i){
var e=window.location.hash,o=a.getTarget(e,this.app.defaultView),s=a.getParams(e),r=t.clone(i.detail);
r.target=r.title=o,r.url=e,r.params=s,r.id=this._currentPosition,1==history.length&&history.pushState(r,r.href,e),
r.bwdTransition=r.transition,t.mixin(this.currentState,r),history.replaceState(this.currentState,this.currentState.href,e),
this._currentPosition+=1,i.detail.id=this._currentPosition;var h=i.detail.url||"#"+i.detail.target;
i.detail.params&&(h=a.buildWithParams(h,i.detail.params)),i.detail.fwdTransition=i.detail.transition,
history.pushState(i.detail,i.detail.href,h),this.currentState=t.clone(i.detail),n.publish("/app/history/pushState",i.detail.target);
},onPopState:function(i){if(this.app.getStatus()===this.app.lifecycle.STARTED&&i.state){
var e=i.state.id<this._currentPosition;e?this._currentPosition-=1:this._currentPosition+=1;
var o=t.mixin({reverse:e?!0:!1},i.state);o.transition=e?o.bwdTransition:o.fwdTransition,
this.app.emit("app-transition",{viewId:i.state.target,opts:o}),n.publish("/app/history/popState",i.state.target);
}}})});