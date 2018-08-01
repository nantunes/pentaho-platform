define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/fx","dojo/dom-style","dojo/dom-class","dojo/dom-geometry","dijit/registry","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/BackgroundIframe","dojo/fx","dojo/has","dojo/_base/window","dojo/window"],function(i,t,e,s,o,n,d,h,a,r,c,l,p,m,f){
t.getObject("dojox.widget",!0);var u=function(i){return i.substring(0,1).toUpperCase()+i.substring(1);
};return i("dojox.widget.Toaster",[a,r],{templateString:'<div class="dijitToasterClip" dojoAttachPoint="clipNode"><div class="dijitToasterContainer" dojoAttachPoint="containerNode" dojoAttachEvent="onclick:onSelect"><div class="dijitToasterContent" dojoAttachPoint="contentNode"></div></div></div>',
messageTopic:"",messageTypes:{MESSAGE:"message",WARNING:"warning",ERROR:"error",FATAL:"fatal"
},defaultType:"message",positionDirection:"br-up",positionDirectionTypes:["br-up","br-left","bl-up","bl-right","tr-down","tr-left","tl-down","tl-right"],
duration:2e3,slideDuration:500,separator:"<hr></hr>",postCreate:function(){this.inherited(arguments),
this.hide(),m.body().appendChild(this.domNode),this.messageTopic&&e.subscribe(this.messageTopic,this,"_handleMessage");
},_handleMessage:function(i){t.isString(i)?this.setContent(i):this.setContent(i.message,i.type,i.duration);
},setContent:function(i,e,h){if(h=h||this.duration,this.slideAnim&&("playing"!=this.slideAnim.status()&&this.slideAnim.stop(),
"playing"==this.slideAnim.status()||this.fadeAnim&&"playing"==this.fadeAnim.status()))return void setTimeout(t.hitch(this,function(){
this.setContent(i,e,h)}),50);for(var a in this.messageTypes)n.remove(this.containerNode,"dijitToaster"+u(this.messageTypes[a]));
o.set(this.containerNode,"opacity",1),this._setContent(i),n.add(this.containerNode,"dijitToaster"+u(e||this.defaultType)),
this.show();var r=d.getMarginBox(this.containerNode);if(this._cancelHideTimer(),this.isVisible)this._placeClip(),
this._stickyMessage||this._setHideTimer(h);else{var c=this.containerNode.style,p=this.positionDirection;
if(p.indexOf("-up")>=0)c.left="0px",c.top=r.h+10+"px";else if(p.indexOf("-left")>=0)c.left=r.w+10+"px",
c.top="0px";else if(p.indexOf("-right")>=0)c.left=0-r.w-10+"px",c.top="0px";else{
if(!(p.indexOf("-down")>=0))throw new Error(this.id+".positionDirection is invalid: "+p);
c.left="0px",c.top=0-r.h-10+"px"}this.slideAnim=l.slideTo({node:this.containerNode,
top:0,left:0,duration:this.slideDuration}),this.connect(this.slideAnim,"onEnd",function(i,t){
this.fadeAnim=s.fadeOut({node:this.containerNode,duration:1e3}),this.connect(this.fadeAnim,"onEnd",function(i){
this.isVisible=!1,this.hide()}),this._setHideTimer(h),this.connect(this,"onSelect",function(i){
this._cancelHideTimer(),this._stickyMessage=!1,this.fadeAnim.play()}),this.isVisible=!0;
}),this.slideAnim.play()}},_setContent:function(i){return t.isFunction(i)?void i(this):(i&&this.isVisible&&(i=this.contentNode.innerHTML+this.separator+i),
void(this.contentNode.innerHTML=i))},_cancelHideTimer:function(){this._hideTimer&&(clearTimeout(this._hideTimer),
this._hideTimer=null)},_setHideTimer:function(i){this._cancelHideTimer(),i>0?(this._cancelHideTimer(),
this._hideTimer=setTimeout(t.hitch(this,function(i){this.bgIframe&&this.bgIframe.iframe&&(this.bgIframe.iframe.style.display="none"),
this._hideTimer=null,this._stickyMessage=!1,this.fadeAnim.play()}),i)):this._stickyMessage=!0;
},_placeClip:function(){var i=f.getBox(),t=d.getMarginBox(this.containerNode),e=this.clipNode.style;
e.height=t.h+"px",e.width=t.w+"px";var s=this.positionDirection;if(s.match(/^t/)?e.top=i.t+"px":s.match(/^b/)&&(e.top=i.h-t.h-2+i.t+"px"),
s.match(/^[tb]r-/)?e.left=i.w-t.w-1-i.l+"px":s.match(/^[tb]l-/)?e.left="0px":s.match(/^[tb]c-/)&&(e.left=Math.round((i.w-t.w-1-i.l)/2)+"px"),
e.clip="rect(0px, "+t.w+"px, "+t.h+"px, 0px)",p("ie")){this.bgIframe||(this.clipNode.id=h.getUniqueId("dojox_widget_Toaster_clipNode"),
this.bgIframe=new c(this.clipNode));var o=this.bgIframe.iframe;o&&(o.style.display="block");
}},onSelect:function(i){},show:function(){o.set(this.domNode,"display","block"),this._placeClip(),
this._scrollConnected||(this._scrollConnected=e.connect(f,"onscroll",this,this._placeClip));
},hide:function(){o.set(this.domNode,"display","none"),this._scrollConnected&&(e.disconnect(this._scrollConnected),
this._scrollConnected=!1),o.set(this.containerNode,"opacity",1)}})});