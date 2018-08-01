dojo.provide("dojox.mobile.app.SceneController"),dojo.experimental("dojox.mobile.app.SceneController"),
dojo.require("dojox.mobile._base"),function(){var e=dojox.mobile.app,o={};dojo.declare("dojox.mobile.app.SceneController",dojox.mobile.View,{
stageController:null,keepScrollPos:!1,init:function(s,t){this.sceneName=s,this.params=t;
var i=e.resolveTemplate(s);return this._deferredInit=new dojo.Deferred,o[s]?this._setContents(o[s]):dojo.xhrGet({
url:i,handleAs:"text"}).addCallback(dojo.hitch(this,this._setContents)),this._deferredInit;
},_setContents:function(s){o[this.sceneName]=s,this.domNode.innerHTML="<div>"+s+"</div>";
for(var t="",i=this.sceneName.split("-"),n=0;n<i.length;n++)t+=i[n].substring(0,1).toUpperCase()+i[n].substring(1);
t+="Assistant",this.sceneAssistantName=t;var a=this;dojox.mobile.app.loadResourcesForScene(this.sceneName,function(){
console.log("All resources for ",a.sceneName," loaded");if("undefined"!=typeof dojo.global[t])a._initAssistant();else{
var o=e.resolveAssistant(a.sceneName);dojo.xhrGet({url:o,handleAs:"text"}).addCallback(function(e){
try{dojo.eval(e)}catch(o){throw console.log("Error initializing code for scene "+a.sceneName+". Please check for syntax errors"),
o}a._initAssistant()})}})},_initAssistant:function(){console.log("Instantiating the scene assistant "+this.sceneAssistantName);
var e=dojo.getObject(this.sceneAssistantName);if(!e)throw Error("Unable to resolve scene assistant "+this.sceneAssistantName);
this.assistant=new e(this.params),this.assistant.controller=this,this.assistant.domNode=this.domNode.firstChild,
this.assistant.setup(),this._deferredInit.callback()},query:function(e,o){return dojo.query(e,o||this.domNode);
},parse:function(e){for(var o=this._widgets=dojox.mobile.parser.parse(e||this.domNode,{
controller:this}),s=0;s<o.length;s++)o[s].set("controller",this)},getWindowSize:function(){
return{w:dojo.global.innerWidth,h:dojo.global.innerHeight}},showAlertDialog:function(e){
var o=(dojo.marginBox(this.assistant.domNode),new dojox.mobile.app.AlertDialog(dojo.mixin(e,{
controller:this})));this.assistant.domNode.appendChild(o.domNode),console.log("Appended ",o.domNode," to ",this.assistant.domNode),
o.show()},popupSubMenu:function(e){var o=new dojox.mobile.app.ListSelector({controller:this,
destroyOnHide:!0,onChoose:e.onChoose});this.assistant.domNode.appendChild(o.domNode),
o.set("data",e.choices),o.show(e.fromNode)}})}();