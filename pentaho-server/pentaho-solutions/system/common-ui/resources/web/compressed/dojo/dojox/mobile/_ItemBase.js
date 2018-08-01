define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/touch","dijit/registry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./TransitionEvent","./iconUtils","./sniff","dojo/has!dojo-bidi?dojox/mobile/bidi/_ItemBase"],function(t,e,i,n,s,o,h,c,a,r,d,l,u,_){
var f=e(u("dojo-bidi")?"dojox.mobile._NonBidiItemBase":"dojox.mobile._ItemBase",[r,a,c],{
icon:"",iconPos:"",alt:"",href:"",hrefTarget:"",moveTo:"",scene:"",clickable:!1,url:"",
urlTarget:"",back:!1,transition:"",transitionDir:1,transitionOptions:null,callback:null,
label:"",toggle:!1,selected:!1,tabIndex:"0",_setTabIndexAttr:"",paramsToInherit:"transition,icon",
_selStartMethod:"none",_selEndMethod:"none",_delayedSelection:!1,_duration:800,_handleClick:!0,
buildRendering:function(){this.inherited(arguments),this._isOnLine=this.inheritParams();
},startup:function(){this._started||(this._isOnLine||this.inheritParams(),this._updateHandles(),
this.inherited(arguments))},inheritParams:function(){var e=this.getParent();return e&&t.forEach(this.paramsToInherit.split(/,/),function(t){
if(t.match(/icon/i)){var i=t+"Base",n=t+"Pos";this[t]&&e[i]&&"/"===e[i].charAt(e[i].length-1)&&(this[t]=e[i]+this[t]),
this[t]||(this[t]=e[i]),this[n]||(this[n]=e[n])}this[t]||(this[t]=e[t])},this),!!e;
},_updateHandles:function(){this._handleClick&&"touch"===this._selStartMethod?this._onTouchStartHandle||(this._onTouchStartHandle=this.connect(this.domNode,o.press,"_onTouchStart")):this._onTouchStartHandle&&(this.disconnect(this._onTouchStartHandle),
this._onTouchStartHandle=null)},getTransOpts:function(){var e=this.transitionOptions||{};
return t.forEach(["moveTo","href","hrefTarget","url","target","urlTarget","scene","transition","transitionDir"],function(t){
e[t]=e[t]||this[t]},this),e},userClickAction:function(){},defaultClickAction:function(t){
this.handleSelection(t),this.userClickAction(t)!==!1&&this.makeTransition(t)},handleSelection:function(t){
this._delayedSelection&&this.set("selected",!0),this._onTouchEndHandle&&(this.disconnect(this._onTouchEndHandle),
this._onTouchEndHandle=null);var e=this.getParent();this.toggle?this.set("selected",!this._currentSel):e&&e.selectOne?this.set("selected",!0):"touch"===this._selEndMethod?this.set("selected",!1):"timer"===this._selEndMethod&&this.defer(function(){
this.set("selected",!1)},this._duration)},makeTransition:function(t){if(this.back&&history)return void history.back();
if(this.href&&this.hrefTarget&&"_self"!=this.hrefTarget)return n.global.open(this.href,this.hrefTarget||"_blank"),
void this._onNewWindowOpened(t);var e=this.getTransOpts(),i=!!(e.moveTo||e.href||e.url||e.target||e.scene);
this._prepareForTransition(t,i?e:null)!==!1&&i&&(this.setTransitionPos(t),new d(this.domNode,e,t).dispatch());
},_onNewWindowOpened:function(){},_prepareForTransition:function(t,e){},_onTouchStart:function(t){
this.getParent().isEditing||this.onTouchStart(t)===!1||(this._onTouchEndHandle||"touch"!==this._selStartMethod||(this._onTouchMoveHandle=this.connect(n.body(),o.move,"_onTouchMove"),
this._onTouchEndHandle=this.connect(n.body(),o.release,"_onTouchEnd")),this.touchStartX=t.touches?t.touches[0].pageX:t.clientX,
this.touchStartY=t.touches?t.touches[0].pageY:t.clientY,this._currentSel=this.selected,
this._delayedSelection?this._selTimer=this.defer(function(){this.set("selected",!0);
},100):this.set("selected",!0))},onTouchStart:function(){},_onTouchMove:function(t){
var e=t.touches?t.touches[0].pageX:t.clientX,i=t.touches?t.touches[0].pageY:t.clientY;
if(Math.abs(e-this.touchStartX)>=4||Math.abs(i-this.touchStartY)>=4){this.cancel();
var n=this.getParent();n&&n.selectOne?this._prevSel&&this._prevSel.set("selected",!0):this.set("selected",!1);
}},_disconnect:function(){this.disconnect(this._onTouchMoveHandle),this.disconnect(this._onTouchEndHandle),
this._onTouchMoveHandle=this._onTouchEndHandle=null},cancel:function(){this._selTimer&&(this._selTimer.remove(),
this._selTimer=null),this._disconnect()},_onTouchEnd:function(t){(this._selTimer||!this._delayedSelection)&&(this.cancel(),
this._onClick(t))},setTransitionPos:function(t){for(var e=this;;)if(e=e.getParent(),
!e||s.contains(e.domNode,"mblView"))break;e&&(e.clickedPosX=t.clientX,e.clickedPosY=t.clientY);
},transitionTo:function(t,e,i,n){var s=t&&"object"==typeof t?t:{moveTo:t,href:e,url:i,
scene:n,transition:this.transition,transitionDir:this.transitionDir};new d(this.domNode,s).dispatch();
},_setIconAttr:function(t){return this._isOnLine?(this._set("icon",t),void(this.iconNode=l.setIcon(t,this.iconPos,this.iconNode,this.alt,this.iconParentNode,this.refNode,this.position))):void(this._pendingIcon=t);
},_setLabelAttr:function(t){this._set("label",t),this.labelNode.innerHTML=this._cv?this._cv(t):t;
},_setSelectedAttr:function(e){if(e){var i=this.getParent();if(i&&i.selectOne){var n=t.filter(i.getChildren(),function(t){
return t.selected});t.forEach(n,function(t){this._prevSel=t,t.set("selected",!1)},this);
}}this._set("selected",e)}});return u("dojo-bidi")?e("dojox.mobile._ItemBase",[f,_]):f;
});