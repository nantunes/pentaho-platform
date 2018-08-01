define(["dojo/_base/declare","./common","dojo/dom-class"],function(t,e,i){return t(null,{
_setBadgeAttr:function(t){this.inherited(arguments),this.badgeObj.setTextDir(this.textDir);
},_setIcon:function(t,e){this.inherited(arguments),this.iconDivNode&&!this.isLeftToRight()&&(i.remove(this.iconDivNode,"mblTabBarButtonIconArea"),
i.add(this.iconDivNode,"mblTabBarButtonIconAreaRtl"))}})});