dojo.provide("dojox.mobile.app.StageController"),dojo.experimental("dojox.mobile.app.StageController"),
dojo.require("dojox.mobile.app.SceneController"),dojo.declare("dojox.mobile.app.StageController",null,{
scenes:null,effect:"fade",constructor:function(e){this.domNode=e,this.scenes=[],dojo.config.mobileAnim&&(this.effect=dojo.config.mobileAnim);
},getActiveSceneController:function(){return this.scenes[this.scenes.length-1]},pushScene:function(e,s){
if(!this._opInProgress){this._opInProgress=!0;var n=dojo.create("div",{"class":"scene-wrapper",
style:{visibility:"hidden"}},this.domNode),t=new dojox.mobile.app.SceneController({},n);
this.scenes.length>0&&this.scenes[this.scenes.length-1].assistant.deactivate(),this.scenes.push(t);
var o=this;dojo.forEach(this.scenes,this.setZIndex),t.stageController=this,t.init(e,s).addCallback(function(){
1==o.scenes.length?(t.domNode.style.visibility="visible",o.scenes[o.scenes.length-1].assistant.activate(s),
o._opInProgress=!1):o.scenes[o.scenes.length-2].performTransition(o.scenes[o.scenes.length-1].domNode,1,o.effect,null,function(){
o.scenes[o.scenes.length-1].assistant.activate(s),o._opInProgress=!1})})}},setZIndex:function(e,s){
dojo.style(e.domNode,"zIndex",s+1)},popScene:function(e){if(!this._opInProgress){
var s=this;this.scenes.length>1?(this._opInProgress=!0,this.scenes[s.scenes.length-2].assistant.activate(e),
this.scenes[s.scenes.length-1].performTransition(s.scenes[this.scenes.length-2].domNode,-1,this.effect,null,function(){
s._destroyScene(s.scenes[s.scenes.length-1]),s.scenes.splice(s.scenes.length-1,1),
s._opInProgress=!1})):console.log("cannot pop the scene if there is just one")}},
popScenesTo:function(e,s){if(!this._opInProgress){for(;this.scenes.length>2&&this.scenes[this.scenes.length-2].sceneName!=e;)this._destroyScene(this.scenes[this.scenes.length-2]),
this.scenes.splice(this.scenes.length-2,1);this.popScene(s)}},_destroyScene:function(e){
e.assistant.deactivate(),e.assistant.destroy(),e.destroyRecursive()}});