define(["dojo/_base/declare","dojo/_base/html","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/_base/fx","dojo/fx","dijit/_base/manager","dijit/layout/StackContainer","dijit/layout/StackController","dijit/_Widget","dijit/_Templated","dijit/_Contained"],function(t,i,e,s,n,o,a,h,r,d,c,l,u){
var _=t("dojox.layout.RotatorContainer",[r,l],{templateString:'<div class="dojoxRotatorContainer"><div dojoAttachPoint="tabNode"></div><div class="dojoxRotatorPager" dojoAttachPoint="pagerNode"></div><div class="dojoxRotatorContent" dojoAttachPoint="containerNode"></div></div>',
showTabs:!0,transitionDelay:5e3,transition:"fade",transitionDuration:1e3,autoStart:!0,
suspendOnHover:!1,pauseOnManualChange:null,reverse:!1,pagerId:"",cycles:-1,pagerClass:"dojox.layout.RotatorPager",
postCreate:function(){this.inherited(arguments),i.style(this.domNode,"position","relative"),
this.cycles-0==this.cycles&&-1!=this.cycles?this.cycles++:this.cycles=-1,null===this.pauseOnManualChange&&(this.pauseOnManualChange=!this.suspendOnHover);
var t=this.id||"rotator"+(new Date).getTime(),s=new d({containerId:t},this.tabNode);
this.tabNode=s.domNode,this._stackController=s,i.style(this.tabNode,"display",this.showTabs?"":"none"),
this.connect(s,"onButtonClick","_manualChange"),this._subscriptions=[e.subscribe(this.id+"-cycle",this,"_cycle"),e.subscribe(this.id+"-state",this,"_state")];
var n=Math.round(.75*this.transitionDelay);n<this.transitionDuration&&(this.transitionDuration=n),
this.suspendOnHover&&(this.connect(this.domNode,"onmouseover","_onMouseOver"),this.connect(this.domNode,"onmouseout","_onMouseOut"));
},startup:function(){if(!this._started){for(var t=this.getChildren(),i=0,e=t.length;e>i;i++)if(t[i].declaredClass==this.pagerClass){
this.pagerNode.appendChild(t[i].domNode);break}this.inherited(arguments),this.autoStart?setTimeout(s.hitch(this,"_play"),10):this._updatePager();
}},destroy:function(){n.forEach(this._subscriptions,e.unsubscribe),this.inherited(arguments);
},_setShowTabsAttr:function(t){this.showTabs=t,i.style(this.tabNode,"display",t?"":"none");
},_updatePager:function(){var t=this.getChildren();e.publish(this.id+"-update",[this._playing,n.indexOf(t,this.selectedChildWidget)+1,t.length]);
},_onMouseOver:function(){this._resetTimer(),this._over=!0},_onMouseOut:function(){
this._over=!1,this._playing&&(clearTimeout(this._timer),this._timer=setTimeout(s.hitch(this,"_play",!0),200));
},_resetTimer:function(){clearTimeout(this._timer),this._timer=null},_cycle:function(t){
(t instanceof Boolean||"boolean"==typeof t)&&this._manualChange();var i=this.getChildren(),e=i.length,s=n.indexOf(i,this.selectedChildWidget)+(t===!1||t!==!0&&this.reverse?-1:1);
this.selectChild(i[e>s?0>s?e-1:s:0]),this._updatePager()},_manualChange:function(){
this.pauseOnManualChange&&(this._playing=!1),this.cycles=-1},_play:function(t){this._playing=!0,
this._resetTimer(),t!==!0&&this.cycles>0&&this.cycles--,0==this.cycles?this._pause():this.suspendOnHover&&this._over||!this.transitionDelay||(this._timer=setTimeout(s.hitch(this,"_cycle"),this.selectedChildWidget.domNode.getAttribute("transitionDelay")||this.transitionDelay)),
this._updatePager()},_pause:function(){this._playing=!1,this._resetTimer()},_state:function(t){
t?(this.cycles=-1,this._play()):this._pause()},_transition:function(t,i){if(this._resetTimer(),
i&&this.transitionDuration)switch(this.transition){case"fade":return void this._fade(t,i);
}this._transitionEnd(),this.inherited(arguments)},_transitionEnd:function(){this._playing?this._play():this._updatePager();
},_fade:function(t,i){this._styleNode(i.domNode,1,1),this._styleNode(t.domNode,0,2),
this._showChild(t),this.doLayout&&t.resize&&t.resize(this._containerContentBox||this._contentBox);
var e={duration:this.transitionDuration},n=a.combine([o.fadeOut(s.mixin({node:i.domNode
},e)),o.fadeIn(s.mixin({node:t.domNode},e))]);this.connect(n,"onEnd",s.hitch(this,function(){
this._hideChild(i),this._transitionEnd()})),n.play()},_styleNode:function(t,e,s){
i.style(t,"opacity",e),i.style(t,"zIndex",s),i.style(t,"position","absolute")}});return t("dojox.layout.RotatorPager",[c,l,u],{
widgetsInTemplate:!0,rotatorId:"",postMixInProperties:function(){this.templateString="<div>"+this.srcNodeRef.innerHTML+"</div>";
},postCreate:function(){var t=h.byId(this.rotatorId)||this.getParent();t&&"dojox.layout.RotatorContainer"==t.declaredClass&&(this.previous&&e.connect(this.previous,"onClick",function(){
e.publish(t.id+"-cycle",[!1])}),this.next&&e.connect(this.next,"onClick",function(){
e.publish(t.id+"-cycle",[!0])}),this.playPause&&e.connect(this.playPause,"onClick",function(){
this.set("label",this.checked?"Pause":"Play"),e.publish(t.id+"-state",[this.checked]);
}),this._subscriptions=[e.subscribe(t.id+"-state",this,"_state"),e.subscribe(t.id+"-update",this,"_update")]);
},destroy:function(){n.forEach(this._subscriptions,e.unsubscribe),this.inherited(arguments);
},_state:function(t){this.playPause&&this.playPause.checked!=t&&(this.playPause.set("label",t?"Pause":"Play"),
this.playPause.set("checked",t))},_update:function(t,i,e){this._state(t),this.current&&i&&(this.current.innerHTML=i),
this.total&&e&&(this.total.innerHTML=e)}}),_});