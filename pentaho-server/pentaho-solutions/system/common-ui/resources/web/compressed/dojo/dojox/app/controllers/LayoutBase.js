define(["dojo/_base/lang","dojo/_base/declare","dojo/sniff","dojo/_base/window","dojo/_base/config","dojo/dom-attr","dojo/topic","dojo/dom-style","../utils/constraints","../Controller"],function(i,e,o,t,s,n,d,a,l,h){
return e("dojox.app.controllers.LayoutBase",h,{constructor:function(e,n){this.events={
"app-initLayout":this.initLayout,"app-layoutView":this.layoutView,"app-resize":this.onResize
},s.mblHideAddressBar?d.subscribe("/dojox/mobile/afterResizeAll",i.hitch(this,this.onResize)):this.bind(t.global,o("ios")?"orientationchange":"resize",i.hitch(this,this.onResize));
},onResize:function(){this._doResize(this.app);for(var i in this.app.selectedChildren)this.app.selectedChildren[i]&&this._doResize(this.app.selectedChildren[i]);
},initLayout:function(i){n.set(i.view.domNode,"id",i.view.id),i.callback&&i.callback();
},_doLayout:function(i){i||console.warn("layout empty view.")},_doResize:function(i){
this.app.log("in LayoutBase _doResize called for view.id="+i.id+" view=",i),this._doLayout(i);
},layoutView:function(i){var e=i.parent||this.app,o=i.view;if(o){this.app.log("in LayoutBase layoutView called for event.view.id="+i.view.id);
var t=l.getSelectedChild(e,o.constraint);i.removeView?(o.viewShowing=!1,this.hideView(o),
o==t&&l.setSelectedChild(e,o.constraint,null)):o!==t?(t&&(t.viewShowing=!1,("none"==i.transition||i.currentLastSubChildMatch!==t)&&this.hideView(t)),
o.viewShowing=!0,this.showView(o),l.setSelectedChild(e,o.constraint,o)):o.viewShowing=!0;
}},hideView:function(i){this.app.log("logTransitions:","LayoutBase setting domStyle display none for view.id=["+i.id+"], visibility=["+i.domNode.style.visibility+"]"),
a.set(i.domNode,"display","none")},showView:function(i){i.domNode&&(this.app.log("logTransitions:","LayoutBase setting domStyle display to display for view.id=["+i.id+"], visibility=["+i.domNode.style.visibility+"]"),
a.set(i.domNode,"display",""))}})});