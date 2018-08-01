define(["dojo/_base/array","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/fx","dojo/has","dojo/_base/kernel","dojo/keys","./_CssStateMixin","./_TemplatedMixin","./layout/ContentPane","dojo/text!./templates/TitlePane.html","./_base/manager","./a11yclick"],function(t,e,i,s,o,n,a,l,d,h,r,u,p,c,_){
var f=e("dijit.TitlePane",[p,u,r],{title:"",_setTitleAttr:{node:"titleNode",type:"innerHTML"
},open:!0,toggleable:!0,tabIndex:"0",duration:_.defaultDuration,baseClass:"dijitTitlePane",
templateString:c,doLayout:!1,_setTooltipAttr:{node:"focusNode",type:"attribute",attribute:"title"
},buildRendering:function(){this.inherited(arguments),i.setSelectable(this.titleNode,!1);
},postCreate:function(){this.inherited(arguments),this.toggleable&&this._trackMouseState(this.titleBarNode,this.baseClass+"Title");
var t=this.hideNode,e=this.wipeNode;this._wipeIn=a.wipeIn({node:e,duration:this.duration,
beforeBegin:function(){t.style.display=""}}),this._wipeOut=a.wipeOut({node:e,duration:this.duration,
onEnd:function(){t.style.display="none"}})},_setOpenAttr:function(e,i){if(t.forEach([this._wipeIn,this._wipeOut],function(t){
t&&"playing"==t.status()&&t.stop()}),i){var s=this[e?"_wipeIn":"_wipeOut"];s.play();
}else this.hideNode.style.display=this.wipeNode.style.display=e?"":"none";this._started&&(e?this._onShow():this.onHide()),
this.containerNode.setAttribute("aria-hidden",e?"false":"true"),this.focusNode.setAttribute("aria-pressed",e?"true":"false"),
this._set("open",e),this._setCss()},_setToggleableAttr:function(t){this.focusNode.setAttribute("role",t?"button":"heading"),
t?(this.focusNode.setAttribute("aria-controls",this.id+"_pane"),this.focusNode.setAttribute("tabIndex",this.tabIndex),
this.focusNode.setAttribute("aria-pressed",this.open)):(s.remove(this.focusNode,"aria-controls"),
s.remove(this.focusNode,"tabIndex"),s.remove(this.focusNode,"aria-pressed")),this._set("toggleable",t),
this._setCss()},_setContentAttr:function(t){this.open&&this._wipeOut&&"playing"!=this._wipeOut.status()?(this._wipeIn&&"playing"==this._wipeIn.status()&&this._wipeIn.stop(),
n.setMarginBox(this.wipeNode,{h:n.getMarginBox(this.wipeNode).h}),this.inherited(arguments),
this._wipeIn?this._wipeIn.play():this.hideNode.style.display=""):this.inherited(arguments);
},toggle:function(){this._setOpenAttr(!this.open,!0)},_setCss:function(){var t=this.titleBarNode||this.focusNode,e=this._titleBarClass;
this._titleBarClass=this.baseClass+"Title"+(this.toggleable?"":"Fixed")+(this.open?"Open":"Closed"),
o.replace(t,this._titleBarClass,e||""),o.replace(t,this._titleBarClass.replace("TitlePaneTitle",""),(e||"").replace("TitlePaneTitle","")),
this.arrowNodeInner.innerHTML=this.open?"-":"+"},_onTitleKey:function(t){t.keyCode==h.DOWN_ARROW&&this.open&&(this.containerNode.focus(),
t.preventDefault())},_onTitleClick:function(){this.toggleable&&this.toggle()},setTitle:function(t){
d.deprecated("dijit.TitlePane.setTitle() is deprecated.  Use set('title', ...) instead.","","2.0"),
this.set("title",t)}});return l("dojo-bidi")&&f.extend({_setTitleAttr:function(t){
this._set("title",t),this.titleNode.innerHTML=t,this.applyTextDir(this.titleNode);
},_setTooltipAttr:function(t){this._set("tooltip",t),this.textDir&&(t=this.enforceTextDirWithUcc(null,t)),
s.set(this.focusNode,"title",t)},_setTextDirAttr:function(t){this._created&&this.textDir!=t&&(this._set("textDir",t),
this.set("title",this.title),this.set("tooltip",this.tooltip))}}),f});