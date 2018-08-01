define(["dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/event","dojo/_base/connect","dojo/dom-style","dojo/dom-class","dojo/dom-construct","dojo/fx","dijit/registry","dijit/TitlePane","dijit/_Container","./PortletSettings","./PortletDialogSettings"],function(t,e,i,o,s,n,r,d,h,a,c,l,u,g,_){
return e.experimental("dojox.widget.Portlet"),t("dojox.widget.Portlet",[l,u],{resizeChildren:!0,
closable:!0,_parents:null,_size:null,dragRestriction:!1,buildRendering:function(){
this.inherited(arguments),r.set(this.domNode,"visibility","hidden")},postCreate:function(){
this.inherited(arguments),d.add(this.domNode,"dojoxPortlet"),d.remove(this.arrowNode,"dijitArrowNode"),
d.add(this.arrowNode,"dojoxPortletIcon dojoxArrowDown"),d.add(this.titleBarNode,"dojoxPortletTitle"),
d.add(this.hideNode,"dojoxPortletContentOuter"),d.add(this.domNode,"dojoxPortlet-"+(this.dragRestriction?"nonmovable":"movable"));
var t=this;if(this.resizeChildren){this.subscribe("/dnd/drop",function(){t._updateSize();
}),this.subscribe("/Portlet/sizechange",function(e){t.onSizeChange(e)}),this.connect(window,"onresize",function(){
t._updateSize()});var e,o=i.hitch(this,function(e,i){var o=c.byId(e);if(o.selectChild){
var s=this.subscribe(e+"-selectChild",function(e){for(var i=t.domNode.parentNode;i;){
if(i==e.domNode){t.unsubscribe(s),t._updateSize();break}i=i.parentNode}}),n=c.byId(i);
o&&n&&t._parents.push({parent:o,child:n})}});this._parents=[];for(var n=this.domNode.parentNode;null!=n;n=n.parentNode){
var h=n.getAttribute?n.getAttribute("widgetId"):null;h&&(o(h,e),e=h)}}this.connect(this.titleBarNode,"onmousedown",function(t){
return d.contains(t.target,"dojoxPortletIcon")?(s.stop(t),!1):!0}),this.connect(this._wipeOut,"onEnd",function(){
t._publish()}),this.connect(this._wipeIn,"onEnd",function(){t._publish()}),this.closable&&(this.closeIcon=this._createIcon("dojoxCloseNode","dojoxCloseNodeHover",i.hitch(this,"onClose")),
r.set(this.closeIcon,"display",""))},startup:function(){if(!this._started){var t=this.getChildren();
this._placeSettingsWidgets(),o.forEach(t,function(t){try{t.started||t._started||t.startup();
}catch(e){console.log(this.id+":"+this.declaredClass,e)}}),this.inherited(arguments),
r.set(this.domNode,"visibility","visible")}},_placeSettingsWidgets:function(){o.forEach(this.getChildren(),i.hitch(this,function(t){
t.portletIconClass&&t.toggle&&!t.get("portlet")&&(this._createIcon(t.portletIconClass,t.portletIconHoverClass,i.hitch(t,"toggle")),
h.place(t.domNode,this.containerNode,"before"),t.set("portlet",this),this._settingsWidget=t);
}))},_createIcon:function(t,e,i){var o=h.create("div",{"class":"dojoxPortletIcon "+t,
waiRole:"presentation"});return h.place(o,this.arrowNode,"before"),this.connect(o,"onclick",i),
e&&(this.connect(o,"onmouseover",function(){d.add(o,e)}),this.connect(o,"onmouseout",function(){
d.remove(o,e)})),o},onClose:function(t){r.set(this.domNode,"display","none")},onSizeChange:function(t){
t!=this&&this._updateSize()},_updateSize:function(){this.open&&this._started&&this.resizeChildren&&(this._timer&&clearTimeout(this._timer),
this._timer=setTimeout(i.hitch(this,function(){for(var t={w:r.get(this.domNode,"width"),
h:r.get(this.domNode,"height")},e=0;e<this._parents.length;e++){var s=this._parents[e],n=s.parent.selectedChildWidget;
if(n&&n!=s.child)return}if(!this._size||this._size.w!=t.w||this._size.h!=t.h){this._size=t;
var d=["resize","layout"];this._timer=null;var h=this.getChildren();o.forEach(h,function(t){
for(var e=0;e<d.length;e++)if(i.isFunction(t[d[e]])){try{t[d[e]]()}catch(o){console.log(o);
}break}}),this.onUpdateSize()}}),100))},onUpdateSize:function(){},_publish:function(){
n.publish("/Portlet/sizechange",[this])},_onTitleClick:function(t){t.target==this.arrowNode&&this.inherited(arguments);
},addChild:function(t){this._size=null,this.inherited(arguments),this._started&&(this._placeSettingsWidgets(),
this._updateSize()),!this._started||t.started||t._started||t.startup()},destroyDescendants:function(t){
this.inherited(arguments),this._settingsWidget&&this._settingsWidget.destroyRecursive(t);
},destroy:function(){this._timer&&clearTimeout(this._timer),this.inherited(arguments);
},_setCss:function(){this.inherited(arguments),r.set(this.arrowNode,"display",this.toggleable?"":"none");
}})});