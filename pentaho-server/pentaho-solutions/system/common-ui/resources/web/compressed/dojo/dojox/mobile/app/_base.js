dojo.provide("dojox.mobile.app._base"),dojo.experimental("dojox.mobile.app._base"),
dojo.require("dijit._base"),dojo.require("dijit._WidgetBase"),dojo.require("dojox.mobile"),
dojo.require("dojox.mobile.parser"),dojo.require("dojox.mobile.Button"),dojo.require("dojox.mobile.app._event"),
dojo.require("dojox.mobile.app._Widget"),dojo.require("dojox.mobile.app.StageController"),
dojo.require("dojox.mobile.app.SceneController"),dojo.require("dojox.mobile.app.SceneAssistant"),
dojo.require("dojox.mobile.app.AlertDialog"),dojo.require("dojox.mobile.app.List"),
dojo.require("dojox.mobile.app.ListSelector"),dojo.require("dojox.mobile.app.TextBox"),
dojo.require("dojox.mobile.app.ImageView"),dojo.require("dojox.mobile.app.ImageThumbView"),
function(){function o(e,i){var r,t;do if(r=e.pop(),r.source)t=r.source;else{if(!r.module)return void console.log("Error: invalid JavaScript resource "+dojo.toJson(r));
t=dojo.moduleUrl(r.module)+".js"}while(e.length>0&&n[t]);return e.length<1&&n[t]?void i():void dojo.xhrGet({
url:t,sync:!1}).addCallbacks(function(r){dojo.eval(r),n[t]=!0,e.length>0?o(e,i):i();
},function(){console.log("Failed to load resource "+t)})}var e,i,r,n={},t=[],d=function(){
e=new dojox.mobile.app.StageController(r);var o={id:"com.test.app",version:"1.0.0",
initialScene:"main"};if(dojo.global.appInfo&&dojo.mixin(o,dojo.global.appInfo),i=dojox.mobile.app.info=o,
i.title){dojo.query("head title")[0]||dojo.create("title",{},dojo.query("head")[0]);
document.title=i.title}e.pushScene(i.initialScene)},l=function(){var o=!1;dojo.global.BackButton?(BackButton.override(),
dojo.connect(document,"backKeyDown",function(o){dojo.publish("/dojox/mobile/app/goback");
}),o=!0):dojo.global.Mojo,o&&dojo.addClass(dojo.body(),"mblNativeBack")};dojo.mixin(dojox.mobile.app,{
init:function(i){r=i||dojo.body(),dojox.mobile.app.STAGE_CONTROLLER_ACTIVE=!0,dojo.subscribe("/dojox/mobile/app/goback",function(){
e.popScene()}),dojo.subscribe("/dojox/mobile/app/alert",function(o){dojox.mobile.app.getActiveSceneController().showAlertDialog(o);
}),dojo.subscribe("/dojox/mobile/app/pushScene",function(o,i){e.pushScene(o,i||{});
}),dojo.xhrGet({url:"view-resources.json",load:function(e){var i=[];if(e){t=e=dojo.fromJson(e);
for(var r=0;r<e.length;r++)e[r].scene||i.push(e[r])}i.length>0?o(i,d):d()},error:d
}),l()},getActiveSceneController:function(){return e.getActiveSceneController()},
getStageController:function(){return e},loadResources:function(e,i){o(e,i)},loadResourcesForScene:function(e,i){
for(var r=[],n=0;n<t.length;n++)t[n].scene==e&&r.push(t[n]);r.length>0?o(r,i):i();
},resolveTemplate:function(o){return"app/views/"+o+"/"+o+"-scene.html"},resolveAssistant:function(o){
return"app/assistants/"+o+"-assistant.js"}})}();