define(["dojo/_base/array","dojo/_base/lang","dojo/_base/event","dojo/_base/declare","dojo/on","dojo/keys","dojo/dom-attr","./_utils","dijit/_FocusMixin"],function(e,t,i,o,n,s,d,r,a){
return o("dojox.treemap.Keyboard",a,{tabIndex:"0",_setTabIndexAttr:"domNode",constructor:function(){},
postCreate:function(){this.inherited(arguments),this.own(n(this.domNode,"keydown",t.hitch(this,this._onKeyDown))),
this.own(n(this.domNode,"mousedown",t.hitch(this,this._onMouseDown)))},createRenderer:function(e,t,i){
var o=this.inherited(arguments);return d.set(o,"tabindex","-1"),o},_onMouseDown:function(e){
this.domNode.focus()},_onKeyDown:function(o){var n=this.get("selectedItem");if(n){
var d,a,h,c=this.itemToRenderer[this.getIdentity(n)],_=c.parentItem;if(o.keyCode!=s.UP_ARROW&&o.keyCode!=s.NUMPAD_MINUS&&o.keyCode!=s.NUMPAD_PLUS){
if(d=o.keyCode==s.DOWN_ARROW?n.children:_.children,!d)return;a=r.initElements(d,t.hitch(this,this._computeAreaForItem)).elements,
h=a[e.indexOf(d,n)],a.sort(function(e,t){return t.size-e.size})}var u;switch(o.keyCode){
case s.LEFT_ARROW:u=d[a[Math.max(0,e.indexOf(a,h)-1)].index];break;case s.RIGHT_ARROW:
u=d[a[Math.min(a.length-1,e.indexOf(a,h)+1)].index];break;case s.DOWN_ARROW:u=d[a[0].index];
break;case s.UP_ARROW:u=_;break;case s.NUMPAD_PLUS:!this._isLeaf(n)&&this.drillDown&&(this.drillDown(c),
i.stop(o));break;case s.NUMPAD_MINUS:!this._isLeaf(n)&&this.drillUp&&(this.drillUp(c),
i.stop(o))}u&&(this._isRoot(u)||(this.set("selectedItem",u),i.stop(o)))}}})});