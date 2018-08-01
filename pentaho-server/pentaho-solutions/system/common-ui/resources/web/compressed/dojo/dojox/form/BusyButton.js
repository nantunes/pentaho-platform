define(["dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dijit/form/Button","dijit/form/DropDownButton","dijit/form/ComboButton","dojo/i18n","dojo/i18n!dijit/nls/loading","dojo/_base/declare"],function(t,i,o,e,s,n,h,u,a){
var d=a("dojox.form._BusyButtonMixin",null,{isBusy:!1,busyLabel:"",timeout:null,useIcon:!0,
postMixInProperties:function(){this.inherited(arguments),this.busyLabel||(this.busyLabel=h.getLocalization("dijit","loading",this.lang).loadingState);
},postCreate:function(){this.inherited(arguments),this._label=this.containerNode.innerHTML,
this._initTimeout=this.timeout,this.isBusy&&this.makeBusy()},makeBusy:function(){
this.isBusy=!0,this.set("disabled",!0),this.setLabel(this.busyLabel,this.timeout);
},cancel:function(){this.set("disabled",!1),this.isBusy=!1,this.setLabel(this._label),
this._timeout&&clearTimeout(this._timeout),this.timeout=this._initTimeout},resetTimeout:function(i){
this._timeout&&clearTimeout(this._timeout),i?this._timeout=setTimeout(t.hitch(this,function(){
this.cancel()}),i):(void 0==i||0===i)&&this.cancel()},setLabel:function(e,s){for(this.label=e;this.containerNode.firstChild;)this.containerNode.removeChild(this.containerNode.firstChild);
if(this.containerNode.innerHTML=this.label,0!=this.showLabel||i.get(this.domNode,"title")||(this.titleNode.title=t.trim(this.containerNode.innerText||this.containerNode.textContent||"")),
s?this.resetTimeout(s):this.timeout=null,this.useIcon&&this.isBusy){var n=new Image;
n.src=this._blankGif,i.set(n,"id",this.id+"_icon"),o.add(n,"dojoxBusyButtonIcon"),
this.containerNode.appendChild(n)}},_onClick:function(t){this.isBusy||(this.inherited(arguments),
this.makeBusy())}}),l=a("dojox.form.BusyButton",[e,d],{});return a("dojox.form.BusyComboButton",[n,d],{}),
a("dojox.form.BusyDropDownButton",[s,d],{}),l});