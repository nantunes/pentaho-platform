define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/fx","dojo/_base/window","dojo/dom-style","dojo/_base/sniff","dojo/text!./resources/FileInputAuto.html","dojox/form/FileInput","dojo/io/iframe"],function(t,e,i,n,s,o,r,l,h){
var d=t("dojox.form.FileInputAuto",l,{url:"",blurDelay:2e3,duration:500,uploadMessage:"Uploading ...",
triggerEvent:"onblur",_sent:!1,templateString:r,onBeforeSend:function(){return{}},
startup:function(){this._blurListener=this.connect(this.fileInput,this.triggerEvent,"_onBlur"),
this._focusListener=this.connect(this.fileInput,"onfocus","_onFocus"),this.inherited(arguments);
},_onFocus:function(){this._blurTimer&&clearTimeout(this._blurTimer)},_onBlur:function(){
this._blurTimer&&clearTimeout(this._blurTimer),this._sent||(this._blurTimer=setTimeout(e.hitch(this,"_sendFile"),this.blurDelay));
},setMessage:function(t){this.overlay.removeChild(this.overlay.firstChild),this.overlay.appendChild(document.createTextNode(t));
},_sendFile:function(t){if(!this._sent&&!this._sending&&this.fileInput.value){this._sending=!0,
s.set(this.fakeNodeHolder,"display","none"),s.set(this.overlay,{opacity:0,display:"block"
}),this.setMessage(this.uploadMessage),i.fadeIn({node:this.overlay,duration:this.duration
}).play();var r;o("ie")<9||o("ie")&&o("quirks")?(r=document.createElement('<form enctype="multipart/form-data" method="post">'),
r.encoding="multipart/form-data"):(r=document.createElement("form"),r.setAttribute("enctype","multipart/form-data")),
r.appendChild(this.fileInput),n.body().appendChild(r),h.send({url:this.url,form:r,
handleAs:"json",handle:e.hitch(this,"_handleSend"),content:this.onBeforeSend()})}
},_handleSend:function(t,e){this.overlay.removeChild(this.overlay.firstChild),this._sent=!0,
this._sending=!1,s.set(this.overlay,{opacity:0,border:"none",background:"none"}),
this.overlay.style.backgroundImage="none",this.fileInput.style.display="none",this.fakeNodeHolder.style.display="none",
i.fadeIn({node:this.overlay,duration:this.duration}).play(250),this.disconnect(this._blurListener),
this.disconnect(this._focusListener),n.body().removeChild(e.args.form),this.fileInput=null,
this.onComplete(t,e,this)},reset:function(t){this._blurTimer&&clearTimeout(this._blurTimer),
this.disconnect(this._blurListener),this.disconnect(this._focusListener),this.overlay.style.display="none",
this.fakeNodeHolder.style.display="",this.inherited(arguments),this._sent=!1,this._sending=!1,
this._blurListener=this.connect(this.fileInput,this.triggerEvent,"_onBlur"),this._focusListener=this.connect(this.fileInput,"onfocus","_onFocus");
},onComplete:function(t,e,i){}});return t("dojox.form.FileInputBlind",d,{startup:function(){
this.inherited(arguments),this._off=s.get(this.inputNode,"width"),this.inputNode.style.display="none",
this._fixPosition()},_fixPosition:function(){o("ie")?s.set(this.fileInput,"width","1px"):s.set(this.fileInput,"left","-"+this._off+"px");
},reset:function(t){this.inherited(arguments),this._fixPosition()}}),d});