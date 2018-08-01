define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-construct","dijit/registry","./Heading","./ListItem","./ProgressIndicator","./RoundRectList","./ScrollableView","./viewRegistry","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/TreeView"],function(e,i,o,t,d,n,a,l,r,s,m,c,h,b,u){
e.experimental("dojox.mobile.TreeView");var w=o(b("dojo-bidi")?"dojox.mobile.NonBidiTreeView":"dojox.mobile.TreeView",c,{
postCreate:function(){this._load(),this.inherited(arguments)},_customizeListItem:function(e){},
_load:function(){this.model.getRoot(t.hitch(this,function(e){var i=this,o=new m,t={
label:i.model.rootLabel,moveTo:"#",onClick:function(){i.handleClick(this)},item:e
};this._customizeListItem(t);var d=new r(t);o.addChild(d),this.addChild(o)}))},handleClick:function(e){
var o="view_";if(o+=e.item[this.model.newItemIdAttr]?e.item[this.model.newItemIdAttr]:"rootView",
o=o.replace("/","_"),a.byId(o))return void a.byNode(e.domNode).transitionTo(o);var b=s.getInstance();
d.body().appendChild(b.domNode),b.start(),this.model.getChildren(e.item,t.hitch(this,function(t){
var s=this,u=new m;i.forEach(t,function(e,i){var o={item:e,label:e[s.model.store.label],
transition:"slide"};s._customizeListItem(o),s.model.mayHaveChildren(e)&&(o.moveTo="#",
o.onClick=function(){s.handleClick(this)});var t=new r(o);u.addChild(t)});var w=new l({
label:"Dynamic View",back:"Back",moveTo:h.getEnclosingView(e.domNode).id}),j=c({id:o
},n.create("div",null,d.body()));j.addChild(w),j.addChild(u),j.startup(),b.stop(),
a.byNode(e.domNode).transitionTo(j.id)}))}});return b("dojo-bidi")?o("dojox.mobile.TreeView",[w,u]):w;
});