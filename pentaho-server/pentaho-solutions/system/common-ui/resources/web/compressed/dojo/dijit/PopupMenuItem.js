define(["dojo/_base/declare","dojo/dom-style","dojo/_base/lang","dojo/query","./popup","./registry","./MenuItem","./hccss"],function(t,e,o,p,i,s,n){
return t("dijit.PopupMenuItem",n,{_fillContent:function(){if(this.srcNodeRef){var t=p("*",this.srcNodeRef);
this.inherited(arguments,[t[0]]),this.dropDownContainer=this.srcNodeRef}},_openPopup:function(t,e){
var p=this.popup;i.open(o.delegate(t,{popup:this.popup,around:this.domNode})),e&&p.focus&&p.focus();
},_closePopup:function(){i.close(this.popup),this.popup.parentMenu=null},startup:function(){
if(!this._started){if(this.inherited(arguments),!this.popup){var t=p("[widgetId]",this.dropDownContainer)[0];
this.popup=s.byNode(t)}this.ownerDocumentBody.appendChild(this.popup.domNode),this.popup.domNode.setAttribute("aria-labelledby",this.containerNode.id),
this.popup.startup(),this.popup.domNode.style.display="none",this.arrowWrapper&&e.set(this.arrowWrapper,"visibility",""),
this.focusNode.setAttribute("aria-haspopup","true")}},destroyDescendants:function(t){
this.popup&&(this.popup._destroyed||this.popup.destroyRecursive(t),delete this.popup),
this.inherited(arguments)}})});