define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/fx","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/cache","dojo/cookie","dojo/domReady","dojo/fx","dojo/window","dijit/_WidgetBase","dijit/_TemplatedMixin"],function(o,i,e,t,n,d,s,a,r,h,c,m,p,f,g,l,u,y,_,j){
o.experimental("dojox.widget.UpgradeBar");var b=t("dojox.widget.UpgradeBar",[_,j],{
notifications:[],buttonCancel:"Close for now",noRemindButton:"Don't Remind Me Again",
templateString:f("dojox.widget","UpgradeBar/UpgradeBar.html"),constructor:function(e,t){
!e.notifications&&t&&i.forEach(t.childNodes,function(i){if(1==i.nodeType){var e=r.get(i,"validate");
this.notifications.push({message:i.innerHTML,validate:function(){var i=!0;try{i=o.eval(e);
}catch(t){}return i}})}},this)},checkNotifications:function(){if(this.notifications.length)for(var o=0;o<this.notifications.length;o++){
var i=this.notifications[o].validate();if(i){this.notify(this.notifications[o].message);
break}}},postCreate:function(){if(this.inherited(arguments),this.domNode.parentNode&&p.set(this.domNode,"display","none"),
d.mixin(this.attributeMap,{message:{node:"messageNode",type:"innerHTML"}}),this.noRemindButton||c.destroy(this.dontRemindButtonNode),
6==s("ie")){var o=this,i=function(){var i=y.getBox();p.set(o.domNode,"width",i.w+"px");
};this.connect(window,"resize",function(){i()}),i()}l(d.hitch(this,"checkNotifications"));
},notify:function(o){g("disableUpgradeReminders")||(this.domNode.parentNode&&this.domNode.parentNode.innerHTML||document.body.appendChild(this.domNode),
p.set(this.domNode,"display",""),o&&this.set("message",o))},show:function(){this._bodyMarginTop=p.get(a.body(),"marginTop"),
this._size=m.getContentBox(this.domNode).h,p.set(this.domNode,{display:"block",height:0,
opacity:0}),this._showAnim||(this._showAnim=u.combine([n.animateProperty({node:a.body(),
duration:500,properties:{marginTop:this._bodyMarginTop+this._size}}),n.animateProperty({
node:this.domNode,duration:500,properties:{height:this._size,opacity:1}})])),this._showAnim.play();
},hide:function(){this._hideAnim||(this._hideAnim=u.combine([n.animateProperty({node:a.body(),
duration:500,properties:{marginTop:this._bodyMarginTop}}),n.animateProperty({node:this.domNode,
duration:500,properties:{height:0,opacity:0}})]),e.connect(this._hideAnim,"onEnd",this,function(){
p.set(this.domNode,{display:"none",opacity:1})})),this._hideAnim.play()},_onDontRemindClick:function(){
g("disableUpgradeReminders",!0,{expires:3650}),this.hide()},_onCloseEnter:function(){
h.add(this.closeButtonNode,"dojoxUpgradeBarCloseIcon-hover")},_onCloseLeave:function(){
h.remove(this.closeButtonNode,"dojoxUpgradeBarCloseIcon-hover")}});return b});