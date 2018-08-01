define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dojo/_base/event","dojo/_base/array","dojo/_base/connect","dojo/query"],function(e,o,t,a,s,n,i){
var r="dojoxRotator",l=r+"Play",d=r+"Pause",c=r+"Number",h=r+"Tab",f=r+"Selected";
return e("dojox.widget.rotator.Controller",null,{rotator:null,commands:"prev,play/pause,info,next",
constructor:function(e,p){o.mixin(this,e);var u=this.rotator;if(u){for(;p.firstChild;)p.removeChild(p.firstChild);
var _=this._domNode=t.create("ul",null,p),y=" "+r+"Icon",m=function(e,o,s){t.create("li",{
className:o,innerHTML:'<a href="#"><span>'+e+"</span></a>",onclick:function(e){a.stop(e),
u&&u.control.apply(u,s)}},_)};s.forEach(this.commands.split(","),function(e,o){switch(e){
case"prev":m("Prev",r+"Prev"+y,["prev"]);break;case"play/pause":m("Play",l+y,["play"]),
m("Pause",d+y,["pause"]);break;case"info":this._info=t.create("li",{className:r+"Info",
innerHTML:this._buildInfo(u)},_);break;case"next":m("Next",r+"Next"+y,["next"]);break;
case"#":case"titles":for(var a=0;a<u.panes.length;a++)m("#"==e?a+1:u.panes[a].title||"Tab "+(a+1),("#"==e?c:h)+" "+(a==u.idx?f:"")+" "+r+"Pane"+a,["go",a]);
}},this),i("li:first-child",_).addClass(r+"First"),i("li:last-child",_).addClass(r+"Last"),
this._togglePlay(),this._con=n.connect(u,"onUpdate",this,"_onUpdate")}},destroy:function(){
n.disconnect(this._con),t.destroy(this._domNode)},_togglePlay:function(e){var o=this.rotator.playing;
i("."+l,this._domNode).style("display",o?"none":""),i("."+d,this._domNode).style("display",o?"":"none");
},_buildInfo:function(e){return"<span>"+(e.idx+1)+" / "+e.panes.length+"</span>"},
_onUpdate:function(e){var o=this.rotator;switch(e){case"play":case"pause":this._togglePlay();
break;case"onAfterTransition":this._info&&(this._info.innerHTML=this._buildInfo(o));
var a=function(e){o.idx<e.length&&t.addClass(e[o.idx],f)};a(i("."+c,this._domNode).removeClass(f)),
a(i("."+h,this._domNode).removeClass(f))}}})});