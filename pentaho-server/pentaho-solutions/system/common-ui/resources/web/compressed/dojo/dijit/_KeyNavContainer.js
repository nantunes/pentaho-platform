define(["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/_base/kernel","dojo/keys","dojo/_base/lang","./registry","./_Container","./_FocusMixin","./_KeyNavMixin"],function(t,e,i,n,h,s,o,r,a,d){
return e("dijit._KeyNavContainer",[a,d,r],{connectKeyNavHandlers:function(e,i){var n=this._keyNavCodes={},o=s.hitch(this,"focusPrev"),r=s.hitch(this,"focusNext");
t.forEach(e,function(t){n[t]=o}),t.forEach(i,function(t){n[t]=r}),n[h.HOME]=s.hitch(this,"focusFirstChild"),
n[h.END]=s.hitch(this,"focusLastChild")},startupKeyNavChildren:function(){n.deprecated("startupKeyNavChildren() call no longer needed","","2.0");
},startup:function(){this.inherited(arguments),t.forEach(this.getChildren(),s.hitch(this,"_startupChild"));
},addChild:function(t,e){this.inherited(arguments),this._startupChild(t)},_startupChild:function(t){
t.set("tabIndex","-1")},_getFirst:function(){var t=this.getChildren();return t.length?t[0]:null;
},_getLast:function(){var t=this.getChildren();return t.length?t[t.length-1]:null;
},focusNext:function(){this.focusChild(this._getNextFocusableChild(this.focusedChild,1));
},focusPrev:function(){this.focusChild(this._getNextFocusableChild(this.focusedChild,-1),!0);
},childSelector:function(t){var t=o.byNode(t);return t&&t.getParent()==this}})});