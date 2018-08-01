define(["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/window","dojo/hash","dijit/registry","./TransitionEvent","./View","./viewRegistry"],function(n,i,t,e,a,r,s,o,d){
var f={settingHash:!1,transitionInfo:[],getTransitionInfo:function(n,i){return this.transitionInfo[n.replace(/^#/,"")+":"+i.replace(/^#/,"")];
},addTransitionInfo:function(n,i,t){this.transitionInfo[n.replace(/^#/,"")+":"+i.replace(/^#/,"")]=t;
},findTransitionViews:function(n){if(!n)return[];var i=r.byId(n.replace(/^#/,""));
if(!i)return[];for(var t=i.getParent();t;t=t.getParent())t.isVisible&&!t.isVisible()&&(i=t);
return[i.getShowingView(),i]},onHashChange:function(n){if(this.settingHash)return void(this.settingHash=!1);
var i=this.handleFragIds(n);i.hashchange=!0,new s(e.body(),i).dispatch()},handleFragIds:function(i){
var t,e;if(i)for(var a=i.replace(/^#/,"").split(/,/),s=0;s<a.length;s++){var o=r.byId(a[s]);
if(!o.isVisible()){for(var f=!0,g=d.getParentView(o);g;g=d.getParentView(g))if(-1===n.indexOf(a,g.id)){
f=!1;break}f?(t=this.findTransitionViews(a[s]),2===t.length&&(e=a[s])):n.forEach(o.getSiblingViews(),function(n){
n.domNode.style.display=n===o?"":"none"})}}else e=d.initialView.id,t=this.findTransitionViews(e);
var h=this.getTransitionInfo(t[0].id,t[1].id),l=1;return h||(h=this.getTransitionInfo(t[1].id,t[0].id),
l=-1),{moveTo:"#"+e,transitionDir:h?h.transitionDir*l:1,transition:h?h.transition:"none"
}},setFragIds:function(i){var t=n.filter(d.getViews(),function(n){return n.isVisible();
});this.settingHash=!0,a(n.map(t,function(n){return n.id}).join(","))}};return i.subscribe("/dojo/hashchange",null,function(){
f.onHashChange.apply(f,arguments)}),t.extend(o,{getTransitionInfo:function(){f.getTransitionInfo.apply(f,arguments);
},addTransitionInfo:function(){f.addTransitionInfo.apply(f,arguments)},handleFragIds:function(){
f.handleFragIds.apply(f,arguments)},setFragIds:function(){f.setFragIds.apply(f,arguments);
}}),f});