var TextEditorComponent=BaseComponent.extend({$ph:void 0,$rightPanel:void 0,isRightPanelShown:!1,
isInitialized:!1,externalEditor:void 0,defaultButtons:[{clazz:"save",label:"Save",
callback:function(){this.save(),"function"==typeof this.saveCallback&&this.saveCallback();
}}],template:function(){return"<div class='textEditorComponent'><div class='textEditorControls'><div class='textEditorFile'><span class='fileLabel'>File: </span>{{file}}</div><div class='textEditorButtons'>{{#buttons}}<button class='{{clazz}}'>{{label}}</button>{{/buttons}}</div></div><div class='textEditorNotification'><span class='textEditorNotificationMsg'>Test</span></div><div class='textEditorRightPanel'></div><div class='textEditorIframeContainer'><div class='textEditorIframe'><iframe seamless='true' marginheight='0'></iframe></div></div>";
},initialize:function(){Dashboards.log("Initializing TextEditorComponent"),this.isInitialized=!0,
this.htmlObject?this.$ph=$("#"+this.htmlObject):this.$ph=$("<div id='textEditorDefautlId'></div>").appendTo("body");
},update:function(){var t=this;this.parameter&&this.setFile(Dashboards.getParameterValue(this.parameter)),
this.isInitialized||t.initialize(),this.isRightPanelShown=!1;var i=this.getButtons();
this.$ph.html(Mustache.render(this.template(),{file:this.file||"Unknown file",buttons:i
})),this.$ph.find(".textEditorControls").on("click","button",function(){var t=$(this),e=t.prevAll("button").length;
i[e].callback(arguments)}),this.file&&this.loadFile()},getButtons:function(){var t=this,i=this.extraButtons||[];
return _.chain(this.defaultButtons).each(function(i){i.callback=_.bind(i.callback,t);
}),this.defaultButtons.concat(i)},setFile:function(t){this.file=t},getFile:function(){
return this.file},loadFile:function(){var t=this;$("button.save",this.$ph).attr("disabled",!0),
this.externalEditor=$("iframe",this.$ph);var i=$(".textEditorControls",this.$ph).height()+$(".textEditorNotification",this.$ph).height(),e=this.$ph.height()-i-5;
this.externalEditor.height(e),this.externalEditor.load(function(){var i=t.getEditorWindow();
i.listeners.onStatusUpdate=t.setDirty,i.listeners.notify=function(i,e){t.notify(i);
},$("#notifications").hide()}),this.externalEditor.attr("src","/pentaho"+wd.helpers.editor.getUrl()+"path="+this.file+"&theme=ace/theme/eclipse&editorOnly=true");
},notify:function(t,i){var e=this.$ph.find(".textEditorNotificationMsg");e.text(t),
e.show().delay(4e3).fadeOut("slow")},setDirty:function(t){$("button.save",this.$ph).attr("disabled",!t);
},getEditorWindow:function(){return this.externalEditor[0].contentWindow},save:function(){
this.getEditorWindow().save()},getRightPanel:function(){return this.$ph.find(".textEditorRightPanel");
},toggleRightPanel:function(){return this.getRightPanel().toggle(),this.isRightPanelShown=!this.isRightPanelShown,
this.getEditorWindow().editor.getEditor().resize(),this.isRightPanelShown}}),PopupTextEditorComponent=BaseComponent.extend({
$ph:void 0,isInitialized:!1,textEditor:void 0,textEditorPopupId:"popupTextEditorId",
isQueryPreviewShown:!1,testPromptPopup:void 0,$testPromptPopupObj:void 0,defaultButtons:[{
clazz:"run",label:"Preview Test",callback:function(){this.runTest()}},{clazz:"previewQuery",
label:"Query results",callback:function(){this.toggleQueryResults()}},{clazz:"close",
label:"Close",callback:function(){this.hide()}}],initialize:function(){Dashboards.log("Initializing PopupTextEditorComponent"),
this.isInitialized=!0,this.$ph=$("#"+this.textEditorPopupId),this.$ph.length>0?Dashboards.log("[PopupTextEditorComponent] Unexpected - Found an element with id "+this.popupTextEditorDefautlId):this.$ph=$("<div id='"+this.textEditorPopupId+"'></div>").appendTo("body"),
this.textEditor={name:"popupInnerTextEditorComponent",type:"textEditor",file:void 0,
htmlObject:this.textEditorPopupId,extraButtons:this.getButtons(),saveCallback:this.saveCallback
},Dashboards.addComponents([this.textEditor])},update:function(){var t=this;this.isQueryPreviewShown=!1,
this.isInitialized||t.initialize(),this.textEditor.update()},show:function(){this.$ph.find(">div.textEditorComponent").height($(window).height()),
this.$ph.slideDown()},hide:function(){this.$ph.slideUp()},runTest:function(){var t=this.setupEnvironment();
if(t){this.getTestToOperate(t,this.runTestCallback,$("button.previewQuery",this.$ph));
}},runTestCallback:function(t,i){var e=this;this.textEditor.notify("Running test..."),
t.cdv.runTest(i,{callback:function(t){e.textEditor.notify(t.getTestResultDescription());
}})},toggleQueryResults:function(){if(this.isQueryPreviewShown)return void(this.isQueryPreviewShown=this.textEditor.toggleRightPanel());
var t=this.setupEnvironment();if(t){this.getTestToOperate(t,this.toggleQueryResultsCallback,$("button.run",this.$ph));
}},toggleQueryResultsCallback:function(t,i){var e=this;this.textEditor.notify("Running query..."),
t.cdv.executeQuery(i,null,function(t,i,o){e.textEditor.notify("Queries ran in "+o.duration+"ms"),
e.textEditor.getRightPanel().html("<pre>"+JSON.stringify(o.resultset,void 0,2)+"</pre>"),
e.isQueryPreviewShown=e.textEditor.toggleRightPanel(),Dashboards.log("Toggling!");
})},getButtons:function(){var t=this,i=this.extraButtons||[];return _.chain(this.defaultButtons).each(function(i){
i.callback=_.bind(i.callback,t)}),this.defaultButtons.concat(i)},setFile:function(t){
this.file=t,this.textEditor.setFile(t)},setupEnvironment:function(){var t=this.textEditor.getEditorWindow().editor.getContents(),i={
cdv:wd.cdv.cdv({isServerSide:!1})};for(p in this)i[p]=void 0;try{new Function("with(this) { "+t+"}").call(i);
}catch(e){return alert(e),null}return i},getTestToOperate:function(t,i,e){var o=this,n=t.cdv.listTestsFlatten().sort(function(t,i){
return t.group+t.name>=i.group+i.name});if(1==n.length)return void i.call(o,t,t.cdv.getTest(n[0].group,n[0].name));
this.testPromptPopup||(this.testPromptPopup={name:"testPromptPopup",type:"popup",
htmlObject:"testPromptPopupObj",gravity:"S",draggable:!1,closeOnClickOutside:!0},
this.$testPromptPopupObj=$("<div id='testPromptPopupObj'></div>").appendTo("body"),
Dashboards.addComponents([this.testPromptPopup]),this.testPromptPopup.update(),this.$testPromptPopupObj.parent("div.popupComponent").addClass("testPromptPopup"));
var s='<div class="testChooserWrapper"><div class="title">Multiple tests found. Choose the one you want:</div><div class="testChooserButtons">{{#tests}}<button> {{group}} - {{name}}</button>{{/tests}}</div></div>';
this.$testPromptPopupObj.html(Mustache.render(s,{tests:n})),this.$testPromptPopupObj.off("click","button"),
this.$testPromptPopupObj.on("click","button",function(e){var s=$(this).prevAll("button").length;
i.call(o,t,t.cdv.getTest(n[s].group,n[s].name)),o.testPromptPopup.hide()}),this.testPromptPopup.popup(e);
}});