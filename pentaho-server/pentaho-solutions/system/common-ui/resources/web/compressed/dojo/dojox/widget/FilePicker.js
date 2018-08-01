dojo.provide("dojox.widget.FilePicker"),dojo.require("dojox.widget.RollingList"),
dojo.require("dojo.i18n"),dojo.requireLocalization("dojox.widget","FilePicker"),dojo.declare("dojox.widget._FileInfoPane",[dojox.widget._RollingListPane],{
templateString:"",templateString:dojo.cache("dojox.widget","FilePicker/_FileInfoPane.html"),
postMixInProperties:function(){this._messages=dojo.i18n.getLocalization("dojox.widget","FilePicker",this.lang),
this.inherited(arguments)},onItems:function(){var t=this.store,e=this.items[0];e?(this.nameNode.innerHTML=t.getLabel(e),
this.pathNode.innerHTML=t.getIdentity(e),this.sizeNode.innerHTML=t.getValue(e,"size"),
this.parentWidget.scrollIntoView(this),this.inherited(arguments)):this._onError("Load",new Error("No item defined"));
}}),dojo.declare("dojox.widget.FilePicker",dojox.widget.RollingList,{className:"dojoxFilePicker",
pathSeparator:"",topDir:"",parentAttr:"parentDir",pathAttr:"path",preloadItems:50,
selectDirectories:!0,selectFiles:!0,_itemsMatch:function(t,e){if(!t&&!e)return!0;if(!t||!e)return!1;
if(t==e)return!0;if(this._isIdentity){var i=[this.store.getIdentity(t),this.store.getIdentity(e)];
return dojo.forEach(i,function(t,e){t.lastIndexOf(this.pathSeparator)==t.length-1&&(i[e]=t.substring(0,t.length-1));
},this),i[0]==i[1]}return!1},startup:function(){if(!this._started){this.inherited(arguments);
var t,e=this.getChildren()[0],i=dojo.hitch(this,function(){t&&this.disconnect(t),
delete t;var i=e.items[0];if(i){var r=this.store,s=r.getValue(i,this.parentAttr),o=r.getValue(i,this.pathAttr);
this.pathSeparator=this.pathSeparator||r.pathSeparator,this.pathSeparator||(this.pathSeparator=o.substring(s.length,s.length+1)),
this.topDir||(this.topDir=s,this.topDir.lastIndexOf(this.pathSeparator)!=this.topDir.length-1&&(this.topDir+=this.pathSeparator));
}});this.pathSeparator&&this.topDir||(e.items?i():t=this.connect(e,"onItems",i))}
},getChildItems:function(t){var e=this.inherited(arguments);return!e&&this.store.getValue(t,"directory")&&(e=[]),
e},getMenuItemForItem:function(t,e,i){var r={iconClass:"dojoxDirectoryItemIcon"};if(!this.store.getValue(t,"directory")){
r.iconClass="dojoxFileItemIcon";var s=this.store.getLabel(t),o=s.lastIndexOf(".");
o>=0&&(r.iconClass+=" dojoxFileItemIcon_"+s.substring(o+1)),this.selectFiles||(r.disabled=!0);
}var n=new dijit.MenuItem(r);return n},getPaneForItem:function(t,e,i){var r=null;return!t||this.store.isItem(t)&&this.store.getValue(t,"directory")?r=new dojox.widget._RollingListGroupPane({}):this.store.isItem(t)&&!this.store.getValue(t,"directory")&&(r=new dojox.widget._FileInfoPane({})),
r},_setPathValueAttr:function(t,e,i){return t?(t.lastIndexOf(this.pathSeparator)==t.length-1&&(t=t.substring(0,t.length-1)),
void this.store.fetchItemByIdentity({identity:t,onItem:function(t){e&&(this._lastExecutedValue=t),
this.set("value",t),i&&i()},scope:this})):void this.set("value",null)},_getPathValueAttr:function(t){
return t||(t=this.value),t&&this.store.isItem(t)?this.store.getValue(t,this.pathAttr):"";
},_setValue:function(t){delete this._setInProgress;var e=this.store;if(t&&e.isItem(t)){
var i=this.store.getValue(t,"directory");if(i&&!this.selectDirectories||!i&&!this.selectFiles)return;
}else t=null;this._itemsMatch(this.value,t)||(this.value=t,this._onChange(t))}});