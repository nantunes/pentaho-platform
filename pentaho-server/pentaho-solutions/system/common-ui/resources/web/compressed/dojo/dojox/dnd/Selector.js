define(["dojo","dojox","dojo/dnd/Selector"],function(e,t){return e.declare("dojox.dnd.Selector",e.dnd.Selector,{
conservative:!0,isSelected:function(t){var i=e.isString(t)?t:t.id,s=this.getItem(i);
return s&&this.selected[i]},selectNode:function(t,i){i||this.selectNone();var s=e.isString(t)?t:t.id,o=this.getItem(s);
return o&&(this._removeAnchor(),this.anchor=e.byId(t),this._addItemClass(this.anchor,"Anchor"),
this.selection[s]=1,this._addItemClass(this.anchor,"Selected")),this},deselectNode:function(t){
var i=e.isString(t)?t:t.id,s=this.getItem(i);return s&&this.selection[i]&&(this.anchor===e.byId(t)&&this._removeAnchor(),
delete this.selection[i],this._removeItemClass(this.anchor,"Selected")),this},selectByBBox:function(t,i,s,o,n){
return n||this.selectNone(),this.forInItems(function(n,r){var h=e.byId(r);h&&this._isBoundedByBox(h,t,i,s,o)&&this.selectNode(r,!0);
},this),this},_isBoundedByBox:function(e,t,i,s,o){return this.conservative?this._conservativeBBLogic(e,t,i,s,o):this._liberalBBLogic(e,t,i,s,o);
},shift:function(e,t){var i=this.getSelectedNodes();i&&i.length&&this.selectNode(this._getNodeId(i[i.length-1].id,e),t);
},_getNodeId:function(e,t){for(var i=this.getAllNodes(),s=e,o=0,n=i.length;n>o;++o)if(i[o].id==e){
var r=Math.min(n-1,Math.max(0,o+(t?1:-1)));o!=r&&(s=i[r].id);break}return s},_conservativeBBLogic:function(t,i,s,o,n){
var r,h=e.coords(t);return i>o&&(r=i,i=o,o=r),s>n&&(r=s,s=n,n=r),h.x>=i&&h.x+h.w<=o&&h.y>=s&&h.y+h.h<=n;
},_liberalBBLogic:function(t,i,s,o,n){var r,h,c,d,l,a,u=e.position(t),v=!1,g=!1,B=u.x,f=u.y,I=u.x+u.w,_=u.y+u.h;
return o>i?(c=i,d=s):(v=!0,c=o,d=n),n>s?(g=!0,l=o,a=n):(l=i,a=s,c=o,d=n),v&&g&&(l=i,
a=n,c=o,d=s),r=(B>=c||l>=I)&&I>=c&&l>=B||c>=B&&I>=l,h=_>=d&&a>=f||_>=a&&a>=f,r&&h;
}})});