define(["dojo/_base/lang","dojo/_base/array","dijit/_base/manager","dojo/_base/connect","dojo/_base/declare"],function(t,e,i,n,s){
return s("dojox.form._SelectStackMixin",null,{stackId:"",stackPrefix:"",_paneIdFromOption:function(t){
return(this.stackPrefix||"")+t},_optionValFromPane:function(t){var e=this.stackPrefix;
return e&&0===t.indexOf(e)?t.substring(e.length):t},_togglePane:function(t,i){if(void 0==t._shown||t._shown!=i){
var n=e.filter(t.getDescendants(),"return item.name;");if(i){var s=t._savedStates||{};
e.forEach(n,function(t){var e=s[t.id];void 0==e&&(e=!1),t.set("disabled",e)}),delete t._savedStates;
}else s={},e.forEach(n,function(t){s[t.id]=t.disabled,t.set("disabled",!0)}),t._savedStates=s;
t._shown=i}},_connectTitle:function(e,i){var n=t.hitch(this,function(t){this.updateOption({
value:i,label:t})});e._setTitleAttr?this.connect(e,"_setTitleAttr",n):this.connect(e,"attr",function(t,e){
"title"==t&&arguments.length>1&&n(e)})},onAddChild:function(e,i){if(!this._panes[e.id]){
this._panes[e.id]=e;var n=this._optionValFromPane(e.id);this.addOption({value:n,label:e.title
}),this._connectTitle(e,n)}e.onShow&&e.onHide&&void 0!=e._shown||(e.onShow=t.hitch(this,"_togglePane",e,!0),
e.onHide=t.hitch(this,"_togglePane",e,!1),e.onHide())},_setValueAttr:function(t){
"_savedValue"in this||this.inherited(arguments)},attr:function(t,e){return"value"==t&&2==arguments.length&&"_savedValue"in this&&(this._savedValue=e),
this.inherited(arguments)},onRemoveChild:function(t){this._panes[t.id]&&(delete this._panes[t.id],
this.removeOption(this._optionValFromPane(t.id)))},onSelectChild:function(t){this._setValueAttr(this._optionValFromPane(t.id));
},onStartup:function(n){var s=n.selected;this.addOption(e.filter(e.map(n.children,function(e){
var i=this._optionValFromPane(e.id);this._connectTitle(e,i);var n=null;return this._panes[e.id]||(this._panes[e.id]=e,
n={value:i,label:e.title}),e.onShow&&e.onHide&&void 0!=e._shown||(e.onShow=t.hitch(this,"_togglePane",e,!0),
e.onHide=t.hitch(this,"_togglePane",e,!1),e.onHide()),"_savedValue"in this&&i===this._savedValue&&(s=e),
n},this),function(t){return t}));var a=this,o=function(){delete a._savedValue,a.onSelectChild(s),
s._shown||a._togglePane(s,!0)};if(s!==n.selected)var h=i.byId(this.stackId),d=this.connect(h,"_showChild",function(t){
this.disconnect(d),o()});else o()},postMixInProperties:function(){this._savedValue=this.value,
this.inherited(arguments),this.connect(this,"onChange","_handleSelfOnChange")},postCreate:function(){
this.inherited(arguments),this._panes={},this._subscriptions=[n.subscribe(this.stackId+"-startup",this,"onStartup"),n.subscribe(this.stackId+"-addChild",this,"onAddChild"),n.subscribe(this.stackId+"-removeChild",this,"onRemoveChild"),n.subscribe(this.stackId+"-selectChild",this,"onSelectChild")];
var t=i.byId(this.stackId);t&&t._started&&this.onStartup({children:t.getChildren(),
selected:t.selectedChildWidget})},destroy:function(){e.forEach(this._subscriptions,n.unsubscribe),
delete this._panes,this.inherited("destroy",arguments)},_handleSelfOnChange:function(t){
var e=this._panes[this._paneIdFromOption(t)];if(e){var n=i.byId(this.stackId);e==n.selectedChildWidget?n._transition(e):n.selectChild(e);
}}})});