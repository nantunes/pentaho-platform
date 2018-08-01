define(["dojo/aspect","dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/array","dojo/_base/fx","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/topic","dojo/on","dojo/parser","dojo/query","dojo/fx/easing","dojo/NodeList-dom"],function(aspect,declare,Deferred,lang,array,fx,dom,domAttr,domConstruct,domGeometry,domStyle,topic,on,parser,query){
var _defaultTransition="dojox.widget.rotator.swap",_defaultTransitionDuration=500,_displayStr="display",_noneStr="none",_zIndex="zIndex",Rotator=declare("dojox.widget.Rotator",null,{
transition:_defaultTransition,transitionParams:"duration:"+_defaultTransitionDuration,
panes:null,constructor:function(params,node){lang.mixin(this,params);var _t=this,t=_t.transition,tt=_t._transitions={},idm=_t._idMap={},tp=_t.transitionParams=eval("({ "+_t.transitionParams+" })"),node=_t._domNode=dom.byId(node),cb=_t._domNodeContentBox=domGeometry.getContentBox(node),p={
left:0,top:0},warn=function(t,o){console.warn(_t.declaredClass,' - Unable to find transition "',t,'", defaulting to "',o,'".');
};_t.id=node.id||(new Date).getTime(),"static"==domStyle.get(node,"position")&&domStyle.set(node,"position","relative"),
tt[t]=lang.getObject(t),tt[t]||(warn(t,_defaultTransition),tt[_t.transition=_defaultTransition]=d.getObject(_defaultTransition)),
tp.duration||(tp.duration=_defaultTransitionDuration),array.forEach(_t.panes,function(t){
domConstruct.create("div",t,node)});var pp=_t.panes=[];query("> *",node).forEach(function(n,i){
var q={node:n,idx:i,params:lang.mixin({},tp,eval("({ "+(domAttr.get(n,"transitionParams")||"")+" })"))
},r=q.trans=domAttr.get(n,"transition")||_t.transition;array.forEach(["id","title","duration","waitForEvent"],function(t){
q[t]=domAttr.get(n,t)}),q.id&&(idm[q.id]=i),tt[r]||(tt[r]=lang.getObject(r))||warn(r,q.trans=_t.transition),
p.position="absolute",p.display=_noneStr,(null==_t.idx||domAttr.get(n,"selected"))&&(null!=_t.idx&&domStyle.set(pp[_t.idx].node,_displayStr,_noneStr),
_t.idx=i,p.display=""),domStyle.set(n,p),query("> script[type^='dojo/method']",n).orphan().forEach(function(t){
var o=domAttr.get(t,"event");o&&(q[o]=parser._functionFromScript(t))}),pp.push(q);
}),_t._controlSub=topic.subscribe(_t.id+"/rotator/control",lang.hitch(_t,this.control));
},destroy:function(){array.forEach([this._controlSub,this.wfe],function(t){t.remove();
}),domConstruct.destroy(this._domNode)},next:function(){return this.go(this.idx+1);
},prev:function(){return this.go(this.idx-1)},go:function(t){var o=this,n=o.idx,e=o.panes,r=e.length,a=o._idMap[t];
if(o._resetWaitForEvent(),t=null!=a?a:t||0,t=r>t?0>t?r-1:t:0,t==n||o.anim)return null;
var i=e[n],d=e[t];domStyle.set(i.node,_zIndex,2),domStyle.set(d.node,_zIndex,1);var s={
current:i,next:d,rotator:o},l=o.anim=o._transitions[d.trans](lang.mixin({rotatorBox:o._domNodeContentBox
},s,d.params));if(l){var u=new Deferred,c=d.waitForEvent,f=aspect.after(l,"onEnd",function(){
domStyle.set(i.node,{display:_noneStr,left:0,opacity:1,top:0,zIndex:0}),f.remove(),
o.anim=null,o.idx=t,i.onAfterOut&&i.onAfterOut(s),d.onAfterIn&&d.onAfterIn(s),o.onUpdate("onAfterTransition"),
c||(o._resetWaitForEvent(),u.callback())},!0);return o.wfe=c?topic.subscribe(c,function(){
o._resetWaitForEvent(),u.callback(!0)}):null,o.onUpdate("onBeforeTransition"),i.onBeforeOut&&i.onBeforeOut(s),
d.onBeforeIn&&d.onBeforeIn(s),l.play(),u}},onUpdate:function(t,o){topic.publish(this.id+"/rotator/update",t,this,o||{});
},_resetWaitForEvent:function(){this.wfe&&(this.wfe.remove(),delete this.wfe)},control:function(t){
var o=lang._toArray(arguments),n=this;if(o.shift(),n._resetWaitForEvent(),n[t]){var e=n[t].apply(n,o);
e&&e.addCallback(function(){n.onUpdate(t)}),n.onManualChange(t)}else console.warn(n.declaredClass,' - Unsupported action "',t,'".');
},resize:function(t,o){var n=this._domNodeContentBox={w:t,h:o};domGeometry.setContentSize(this._domNode,n),
array.forEach(this.panes,function(t){domGeometry.setContentSize(t.node,n)})},onManualChange:function(){}
});return lang.setObject(_defaultTransition,function(t){return new fx.Animation({
play:function(){domStyle.set(t.current.node,_displayStr,_noneStr),domStyle.set(t.next.node,_displayStr,""),
this._fire("onEnd")}})}),Rotator});