define(["dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","../Destroyable","../form/Button"],function(t,i,s,e,n){
var o=i("dijit._editor._Plugin",e,{constructor:function(t){this.params=t||{},s.mixin(this,this.params),
this._attrPairNames={}},editor:null,iconClassPrefix:"dijitEditorIcon",button:null,
command:"",useDefaultCommand:!0,buttonClass:n,disabled:!1,getLabel:function(t){return this.editor.commands[t];
},_initButton:function(){if(this.command.length){var t=this.getLabel(this.command),i=this.editor,e=this.iconClassPrefix+" "+this.iconClassPrefix+this.command.charAt(0).toUpperCase()+this.command.substr(1);
if(!this.button){var n=s.mixin({label:t,ownerDocument:i.ownerDocument,dir:i.dir,lang:i.lang,
showLabel:!1,iconClass:e,dropDown:this.dropDown,tabIndex:"-1"},this.params||{});this.button=new this.buttonClass(n);
}}this.get("disabled")&&this.button&&this.button.set("disabled",this.get("disabled"));
},destroy:function(){this.dropDown&&this.dropDown.destroyRecursive(),this.inherited(arguments);
},connect:function(i,s,e){this.own(t.connect(i,s,this,e))},updateState:function(){
var t,i,s=this.editor,e=this.command;if(s&&s.isLoaded&&e.length){var n=this.get("disabled");
if(this.button)try{i=!n&&s.queryCommandEnabled(e),this.enabled!==i&&(this.enabled=i,
this.button.set("disabled",!i)),i&&"boolean"==typeof this.button.checked&&(t=s.queryCommandState(e),
this.checked!==t&&(this.checked=t,this.button.set("checked",s.queryCommandState(e))));
}catch(s){console.log(s)}}},setEditor:function(t){this.editor=t,this._initButton(),
this.button&&this.useDefaultCommand&&(this.editor.queryCommandAvailable(this.command)?this.own(this.button.on("click",s.hitch(this.editor,"execCommand",this.command,this.commandArg))):this.button.domNode.style.display="none"),
this.own(this.editor.on("NormalizedDisplayChanged",s.hitch(this,"updateState")))},
setToolbar:function(t){this.button&&t.addChild(this.button)},set:function(t,i){if("object"==typeof t){
for(var s in t)this.set(s,t[s]);return this}var e=this._getAttrNames(t);if(this[e.s])var n=this[e.s].apply(this,Array.prototype.slice.call(arguments,1));else this._set(t,i);
return n||this},get:function(t){var i=this._getAttrNames(t);return this[i.g]?this[i.g]():this[t];
},_setDisabledAttr:function(t){this._set("disabled",t),this.updateState()},_getAttrNames:function(t){
var i=this._attrPairNames;if(i[t])return i[t];var s=t.charAt(0).toUpperCase()+t.substr(1);
return i[t]={s:"_set"+s+"Attr",g:"_get"+s+"Attr"}},_set:function(t,i){this[t]=i}});
return o.registry={},o});