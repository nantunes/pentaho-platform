define(["require","dojo/_base/lang","dojo/_base/declare","dojo/has","dojo/on","dojo/Deferred","dojo/when","dojo/dom-style","../Controller","../utils/constraints"],function(e,i,t,a,n,s,r,o,h,l){
var d,c="app/controllers/Transition",u="logTransitions:";return t("dojox.app.controllers.Transition",h,{
proceeding:!1,waitingQueue:[],constructor:function(i,t){this.events={"app-transition":this.transition,
"app-domNode":this.onDomNodeChange},e([this.app.transit||"dojox/css3/transit"],function(e){
d=e}),this.app.domNode&&this.onDomNodeChange({oldNode:null,newNode:this.app.domNode
})},transition:function(e){var t=c+":transition";this.app.log(u,t,"New Transition event.viewId=["+e.viewId+"]"),
this.app.log(t,"event.viewId=["+e.viewId+"]","event.opts=",e.opts);var a=e.viewId||"";
this.proceedingSaved=this.proceeding;var n,s,r=a.split("+"),o=a.split("-");if(r.length>0||o.length>0){
for(;r.length>1;)if(n=r.shift(),s=i.clone(e),n.indexOf("-")>=0){var h=n.split("-");
h.length>0&&(n=h.shift(),n&&(s._removeView=!1,s.viewId=n,this.proceeding=!0,this.proceedTransition(s),
s=i.clone(e)),n=h.shift(),n&&(s._removeView=!0,s.viewId=n,this.proceeding=!0,this.proceedTransition(s)));
}else s._removeView=!1,s.viewId=n,this.proceeding=!0,this.proceedTransition(s);n=r.shift();
var h=n.split("-");if(h.length>0&&(n=h.shift()),n.length>0&&(this.proceeding=this.proceedingSaved,
e.viewId=n,e._doResize=!0,e._removeView=!1,this.proceedTransition(e)),h.length>0)for(;h.length>0;){
var l=h.shift();s=i.clone(e),s.viewId=l,s._removeView=!0,s._doResize=!0,this.proceedTransition(s);
}}else e._doResize=!0,e._removeView=!1,this.proceedTransition(e)},onDomNodeChange:function(e){
null!=e.oldNode&&this.unbind(e.oldNode,"startTransition"),this.bind(e.newNode,"startTransition",i.hitch(this,this.onStartTransition));
},onStartTransition:function(e){e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,
e.stopPropagation&&e.stopPropagation();var t=e.detail.target,a=/#(.+)/;!t&&a.test(e.detail.href)&&(t=e.detail.href.match(a)[1]),
this.transition({viewId:t,opts:i.mixin({},e.detail),data:e.detail.data})},_addTransitionEventToWaitingQueue:function(e){
if(e.defaultView&&this.waitingQueue.length>0){for(var i=!1,t=0;t<this.waitingQueue.length;t++){
var a=this.waitingQueue[t];if(!a.defaultView){this.waitingQueue.splice(t,0,e),i=!0;
break}}i||this.waitingQueue.push(e)}else this.waitingQueue.push(e)},proceedTransition:function(e){
var t=c+":proceedTransition";if(this.proceeding)return this._addTransitionEventToWaitingQueue(e),
this.app.log(t+" added this event to waitingQueue",e),void(this.processingQueue=!1);
this.app.log(t+" this.waitingQueue.length ="+this.waitingQueue.length+" this.processingQueue="+this.processingQueue),
this.waitingQueue.length>0&&!this.processingQueue&&(this.processingQueue=!0,this._addTransitionEventToWaitingQueue(e),
this.app.log(t+" added this event to waitingQueue passed proceeding",e),e=this.waitingQueue.shift(),
this.app.log(t+" shifted waitingQueue to process",e)),this.proceeding=!0,this.app.log(t+" calling trigger load",e),
e.opts||(e.opts={});var a=e.params||e.opts.params;this.app.emit("app-load",{viewId:e.viewId,
params:a,forceTransitionNone:e.forceTransitionNone,callback:i.hitch(this,function(t,n){
if(t){this.proceeding=!1,this.processingQueue=!0;var s=n?this.waitingQueue.shift():this.waitingQueue.pop();
s&&this.proceedTransition(s)}else{var o=this._doTransition(e.viewId,e.opts,a,e.opts.data,this.app,e._removeView,e._doResize,e.forceTransitionNone);
r(o,i.hitch(this,function(){this.proceeding=!1,this.processingQueue=!0;var e=this.waitingQueue.shift();
e&&this.proceedTransition(e)}))}})})},_getTransition:function(e,i,t,a,n){if(n)return"none";
var s=i,r=null;e&&(r=e.transition),!r&&s.views[t]&&(r=s.views[t].transition),r||(r=s.transition);
for(var o=e&&e.defaultTransition?e.defaultTransition:s.defaultTransition;!r&&s.parent;)s=s.parent,
r=s.transition,o||(o=s.defaultTransition);return r||a.transition||o||"none"},_getParamsForView:function(e,t){
var a={};for(var n in t){var s=t[n];i.isObject(s)?n==e&&(a=i.mixin(a,s)):n&&null!=s&&(a[n]=t[n]);
}return a},_doTransition:function(e,t,a,n,s,o,h,p,v){var f=c+":_doTransition";if(!s)throw Error("view parent not found in transition.");
this.app.log(f+" transitionTo=[",e,"], removeView=[",o,"] parent.name=[",s.name,"], opts=",t);
var g,w,C,_;if(g=e?e.split(","):s.defaultView.split(","),w=g.shift(),C=g.join(","),
_=s.children[s.id+"_"+w],!_){if(o)return void this.app.log(f+" called with removeView true, but that view is not available to remove");
throw Error("child view must be loaded before transition.")}!C&&_.defaultView&&(C=_.defaultView);
var b=[_||s];C&&(b=this._getNextSubViewArray(C,_,s));var m=l.getSelectedChild(s,_.constraint),S=this._getCurrentSubViewArray(s,b,o),T=this._getCurrentSubViewNamesArray(S);
if(_.params=this._getParamsForView(_.name,a),o){if(_!==m)return void this.app.log(f+" called with removeView true, but that view is not available to remove");
this.app.log(u,f,"Transition Remove current From=["+T+"]"),_=null}var y="";if(_&&(y=_.name,
C&&(y=y+","+C)),y!=T||_!=m){if(this.app.log(u,f,"Transition current and next DO NOT MATCH From=["+T+"] TO=["+y+"]"),
!o&&_)for(var A=this.nextLastSubChildMatch||_,L=!1,V=b.length-1;V>=0;V--){var M=b[V];
(L||M.id==A.id)&&(L=!0,!M._needsResize&&M.domNode&&(this.app.log(u,f," setting domStyle visibility hidden for v.id=["+M.id+"], display=["+M.domNode.style.display+"], visibility=["+M.domNode.style.visibility+"]"),
this._setViewVisible(M,!1)))}if(m&&m._active&&this._handleBeforeDeactivateCalls(S,this.nextLastSubChildMatch||_,m,n,C),
_&&(this.app.log(f+" calling _handleBeforeActivateCalls next name=[",_.name,"], parent.name=[",_.parent.name,"]"),
this._handleBeforeActivateCalls(b,this.currentLastSubChildMatch||m,n,C)),o)for(var V=0;V<b.length;V++){
var M=b[V];this.app.log(u,f,"setting visibility visible for v.id=["+M.id+"]"),M.domNode&&(this.app.log(u,f,"  setting domStyle for removeView visibility visible for v.id=["+M.id+"], display=["+M.domNode.style.display+"]"),
this._setViewVisible(M,!0))}else{var A=this.nextLastSubChildMatch||_,N=this._getTransition(A,s,w,t,p);
this.app.log(f+" calling _handleLayoutAndResizeCalls trans="+N),this._handleLayoutAndResizeCalls(b,o,h,C,p,N);
}var x=!0;return!d||v&&null==this.currentLastSubChildMatch||this.currentLastSubChildMatch===_||(x=this._handleTransit(_,s,this.currentLastSubChildMatch,t,w,o,p,h)),
r(x,i.hitch(this,function(){if(_&&this.app.log(f+" back from transit for next ="+_.name),
o){var e=this.nextLastSubChildMatch||_,i=this._getTransition(e,s,w,t,p);this._handleLayoutAndResizeCalls(b,o,h,C,p,i);
}this._handleAfterDeactivateCalls(S,this.nextLastSubChildMatch||_,m,n,C),this._handleAfterActivateCalls(b,o,this.currentLastSubChildMatch||m,n,C);
})),x}this.app.log(u,f,"Transition current and next DO MATCH From=["+T+"] TO=["+y+"]"),
this._handleMatchingViews(b,_,m,s,n,o,h,C,T,w,p,t)},_handleMatchingViews:function(e,i,t,a,n,s,r,o,h,l,d,c){
this._handleBeforeDeactivateCalls(e,this.nextLastSubChildMatch||i,t,n,o),this._handleAfterDeactivateCalls(e,this.nextLastSubChildMatch||i,t,n,o),
this._handleBeforeActivateCalls(e,this.currentLastSubChildMatch||t,n,o);var u=this.nextLastSubChildMatch||i,p=this._getTransition(u,a,l,c,d);
this._handleLayoutAndResizeCalls(e,s,r,o,p),this._handleAfterActivateCalls(e,s,this.currentLastSubChildMatch||t,n,o);
},_handleBeforeDeactivateCalls:function(e,i,t,a,n){var s=c+":_handleBeforeDeactivateCalls";
if(t._active)for(var r=e.length-1;r>=0;r--){var o=e[r];o&&o.beforeDeactivate&&o._active&&(this.app.log(u,s,"beforeDeactivate for v.id="+o.id),
o.beforeDeactivate(i,a))}},_handleAfterDeactivateCalls:function(e,i,t,a,n){var s=c+":_handleAfterDeactivateCalls";
if(t&&t._active)for(var r=0;r<e.length;r++){var o=e[r];o&&o.beforeDeactivate&&o._active&&(this.app.log(u,s,"afterDeactivate for v.id="+o.id),
o.afterDeactivate(i,a),o._active=!1)}},_handleBeforeActivateCalls:function(e,i,t,a){
for(var n=c+":_handleBeforeActivateCalls",s=e.length-1;s>=0;s--){var r=e[s];this.app.log(u,n,"beforeActivate for v.id="+r.id),
r.beforeActivate(i,t)}},_handleLayoutAndResizeCalls:function(e,i,t,a,n,s){for(var r=c+":_handleLayoutAndResizeCalls",o=i,h=0;h<e.length;h++){
var l=e[h];this.app.log(u,r,"emit layoutView v.id=["+l.id+"] removeView=["+o+"]"),
this.app.emit("app-layoutView",{parent:l.parent,view:l,removeView:o,doResize:!1,transition:s,
currentLastSubChildMatch:this.currentLastSubChildMatch}),o=!1}t&&(this.app.log(u,r,"emit doResize called"),
this.app.emit("app-resize"),"none"==s&&this._showSelectedChildren(this.app))},_showSelectedChildren:function(e){
var i=c+":_showSelectedChildren";this.app.log(u,i," setting domStyle visibility visible for w.id=["+e.id+"], display=["+e.domNode.style.display+"], visibility=["+e.domNode.style.visibility+"]"),
this._setViewVisible(e,!0),e._needsResize=!1;for(var t in e.selectedChildren)e.selectedChildren[t]&&e.selectedChildren[t].domNode&&(this.app.log(u,i," calling _showSelectedChildren for w.selectedChildren[hash].id="+e.selectedChildren[t].id),
this._showSelectedChildren(e.selectedChildren[t]))},_setViewVisible:function(e,i){
i?o.set(e.domNode,"visibility","visible"):o.set(e.domNode,"visibility","hidden")},
_handleAfterActivateCalls:function(e,i,t,a,n){var s=c+":_handleAfterActivateCalls",r=0;
i&&e.length>1&&(r=1);for(var o=r;o<e.length;o++){var h=e[o];h.afterActivate&&(this.app.log(u,s,"afterActivate for v.id="+h.id),
h.afterActivate(t,a),h._active=!0)}},_getNextSubViewArray:function(e,i,t){var a=[],n=i||t;
e&&(a=e.split(","));for(var s=[n],r=0;r<a.length;r++){toId=a[r];var o=n.children[n.id+"_"+toId];
o&&(s.push(o),n=o)}return s.reverse(),s},_getCurrentSubViewArray:function(e,i,t){
var a,n,s,r=[],o=e;this.currentLastSubChildMatch=null,this.nextLastSubChildMatch=null;
for(var h=i.length-1;h>=0;h--){if(a=i[h].constraint,n=typeof a,s="string"==n||"number"==n?a:a.__hash,
!(o&&o.selectedChildren&&o.selectedChildren[s])){this.currentLastSubChildMatch=null,
this.nextLastSubChildMatch=i[h];break}if(o.selectedChildren[s]!=i[h]){if(this.currentLastSubChildMatch=o.selectedChildren[s],
r.push(this.currentLastSubChildMatch),this.nextLastSubChildMatch=i[h],!t){var d=l.getAllSelectedChildren(this.currentLastSubChildMatch);
r=r.concat(d)}break}this.currentLastSubChildMatch=o.selectedChildren[s],this.nextLastSubChildMatch=i[h],
r.push(this.currentLastSubChildMatch),o=this.currentLastSubChildMatch}if(t){var d=l.getAllSelectedChildren(o);
r=r.concat(d)}return r},_getCurrentSubViewNamesArray:function(e){for(var i=[],t=0;t<e.length;t++)i.push(e[t].name);
return i},_handleTransit:function(e,t,a,n,s,r,o,h){var l=c+":_handleTransit",p=this.nextLastSubChildMatch||e,v=i.mixin({},n);
return v=i.mixin({},v,{reverse:v.reverse||-1===v.transitionDir?!0:!1,transition:this._getTransition(p,t,s,v,o)
}),r&&(p=null),a&&this.app.log(u,l,"transit FROM currentLastSubChild.id=["+a.id+"]"),
p?("none"!==v.transition&&(!h&&p._needsResize&&(this.app.log(u,l,"emit doResize called from _handleTransit"),
this.app.emit("app-resize")),this.app.log(u,l,"  calling _showSelectedChildren for w3.id=["+p.id+"], display=["+p.domNode.style.display+"], visibility=["+p.domNode.style.visibility+"]"),
this._showSelectedChildren(this.app)),this.app.log(u,l,"transit TO nextLastSubChild.id=["+p.id+"] transition=["+v.transition+"]")):this._showSelectedChildren(this.app),
d(a&&a.domNode,p&&p.domNode,v)}})});