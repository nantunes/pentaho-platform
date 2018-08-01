define(["dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/_base/kernel","dojo/sniff","dojo/_base/lang","./_Widget","./_TemplatedMixin","./_Contained","./_CssStateMixin","dojo/text!./templates/MenuItem.html"],function(e,t,i,s,o,n,d,a,c,l,r,h){
var u=e("dijit.MenuItem"+(n("dojo-bidi")?"_NoBidi":""),[a,c,l,r],{templateString:h,
baseClass:"dijitMenuItem",label:"",_setLabelAttr:function(e){this._set("label",e);
var t,i="",s=e.search(/{\S}/);if(s>=0){i=e.charAt(s+1);var o=e.substr(0,s),n=e.substr(s+3);
t=o+i+n,e=o+'<span class="dijitMenuItemShortcutKey">'+i+"</span>"+n}else t=e;this.domNode.setAttribute("aria-label",t+" "+this.accelKey),
this.containerNode.innerHTML=e,this._set("shortcutKey",i)},iconClass:"dijitNoIcon",
_setIconClassAttr:{node:"iconNode",type:"class"},accelKey:"",disabled:!1,_fillContent:function(e){
!e||"label"in this.params||this._set("label",e.innerHTML)},buildRendering:function(){
this.inherited(arguments);var e=this.id+"_text";i.set(this.containerNode,"id",e),
this.accelKeyNode&&i.set(this.accelKeyNode,"id",this.id+"_accel"),t.setSelectable(this.domNode,!1);
},onClick:function(){},focus:function(){try{8==n("ie")&&this.containerNode.focus(),
this.focusNode.focus()}catch(e){}},_onFocus:function(){this.getParent()._onItemFocus(this),
this.inherited(arguments)},_setSelected:function(e){s.toggle(this.domNode,"dijitMenuItemSelected",e);
},setLabel:function(e){o.deprecated("dijit.MenuItem.setLabel() is deprecated.  Use set('label', ...) instead.","","2.0"),
this.set("label",e)},setDisabled:function(e){o.deprecated("dijit.Menu.setDisabled() is deprecated.  Use set('disabled', bool) instead.","","2.0"),
this.set("disabled",e)},_setDisabledAttr:function(e){this.focusNode.setAttribute("aria-disabled",e?"true":"false"),
this._set("disabled",e)},_setAccelKeyAttr:function(e){this.accelKeyNode&&(this.accelKeyNode.style.display=e?"":"none",
this.accelKeyNode.innerHTML=e,i.set(this.containerNode,"colSpan",e?"1":"2")),this._set("accelKey",e);
}});return n("dojo-bidi")&&(u=e("dijit.MenuItem",u,{_setLabelAttr:function(e){this.inherited(arguments),
"auto"===this.textDir&&this.applyTextDir(this.textDirNode)}})),u});