define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/xhr"],function(e,t,n,i){
var r=n.getObject("grid.enhanced.plugins",!0,dojox),s=function(e){for(var n=["reorder","sizeChange","normal","presentation"],i=n.length,r=e.length-1;r>=0;--r){
var s=t.indexOf(n,e[r]);s>=0&&i>=s&&(i=s)}return i<n.length-1?n.slice(0,i+1):n},a=function(e){
var t,n=this._layers,i=n.length;if(e){for(t=i-1;t>=0;--t)if(n[t].name()==e){n[t]._unwrap(n[t+1]);
break}n.splice(t,1)}else for(t=i-1;t>=0;--t)n[t]._unwrap();return n.length||(delete this._layers,
delete this.layer,delete this.unwrap,delete this.forEachLayer),this},o=function(e){
var t,n=this._layers;if("undefined"==typeof e)return n.length;if("number"==typeof e)return n[e];
for(t=n.length-1;t>=0;--t)if(n[t].name()==e)return n[t];return null},h=function(e,t){
var n,i,r,s=this._layers.length;t?(n=0,i=s,r=1):(n=s-1,i=-1,r=-1);for(var a=n;a!=i;a+=r)if(e(this._layers[a],a)===!1)return a;
return i};r.wrap=function(e,i,r,u){e._layers||(e._layers=[],e.layer=n.hitch(e,o),
e.unwrap=n.hitch(e,a),e.forEachLayer=n.hitch(e,h));var l=s(r.tags);return t.some(e._layers,function(n,s){
return t.some(n.tags,function(e){return t.indexOf(l,e)>=0})?!1:(e._layers.splice(s,0,r),
r._wrap(e,i,u,n),!0)})||(e._layers.push(r),r._wrap(e,i,u)),e};var u=e("dojox.grid.enhanced.plugins._StoreLayer",null,{
tags:["normal"],layerFuncName:"_fetch",constructor:function(){this._store=null,this._originFetch=null,
this.__enabled=!0},initialize:function(e){},uninitialize:function(e){},invalidate:function(){},
_wrap:function(e,t,i,r){this._store=e,this._funcName=t;var s=n.hitch(this,function(){
return(this.enabled()?this[i||this.layerFuncName]:this.originFetch).apply(this,arguments);
});r?(this._originFetch=r._originFetch,r._originFetch=s):(this._originFetch=e[t]||function(){},
e[t]=s),this.initialize(e)},_unwrap:function(e){this.uninitialize(this._store),e?e._originFetch=this._originFetch:this._store[this._funcName]=this._originFetch,
this._originFetch=null,this._store=null},enabled:function(e){return"undefined"!=typeof e&&(this.__enabled=!!e),
this.__enabled},name:function(){if(!this.__name){var e=this.declaredClass.match(/(?:\.(?:_*)([^\.]+)Layer$)|(?:\.([^\.]+)$)/i);
this.__name=e?(e[1]||e[2]).toLowerCase():this.declaredClass}return this.__name},originFetch:function(){
return n.hitch(this._store,this._originFetch).apply(this,arguments)}}),l=e("dojox.grid.enhanced.plugins._ServerSideLayer",u,{
constructor:function(e){e=e||{},this._url=e.url||"",this._isStateful=!!e.isStateful,
this._onUserCommandLoad=e.onCommandLoad||function(){},this.__cmds={cmdlayer:this.name(),
enable:!0},this.useCommands(this._isStateful)},enabled:function(e){var t=this.inherited(arguments);
return this.__cmds.enable=this.__enabled,t},useCommands:function(e){return"undefined"!=typeof e&&(this.__cmds.cmdlayer=e&&this._isStateful?this.name():null),
!!this.__cmds.cmdlayer},_fetch:function(e){return this.__cmds.cmdlayer?i.post({url:this._url||this._store.url,
content:this.__cmds,load:n.hitch(this,function(t){this.onCommandLoad(t,e),this.originFetch(e);
}),error:n.hitch(this,this.onCommandError)}):(this.onCommandLoad("",e),this.originFetch(e)),
e},command:function(e,t){var n=this.__cmds;return null===t?delete n[e]:"undefined"!=typeof t&&(n[e]=t),
n[e]},onCommandLoad:function(e,t){this._onUserCommandLoad(this.__cmds,t,e)},onCommandError:function(e){
throw console.log(e),e}});return{_StoreLayer:u,_ServerSideLayer:l,wrap:r.wrap}});