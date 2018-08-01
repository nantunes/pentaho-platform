define("cde/components/TextEditorComponent/TextEditorComponent.ext",["pentaho/environment"],function(t){
return{getUrl:function(){return t.server.root+"plugin/pentaho-cdf-dd/api/editor/getExternalEditor?";
}}}),define("cde/components/TextEditorComponent/TextEditorComponent",["cdf/components/BaseComponent","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/underscore","cdf/lib/mustache","./TextEditorComponent.ext","css!./TextEditorComponent"],function(t,e,i,n,o,a){
return t.extend({$ph:void 0,$rightPanel:void 0,isRightPanelShown:!1,isInitialized:!1,
externalEditor:void 0,defaultButtons:[{clazz:"save",label:"Save",callback:function(){
this.save(),"function"==typeof this.saveCallback&&this.saveCallback()}}],template:function(){
return"<div class='textEditorComponent'><div class='textEditorControls'><div class='textEditorFile'><span class='fileLabel'>File: </span>{{file}}</div><div class='textEditorButtons'>{{#buttons}}<button class='{{clazz}}'>{{label}}</button>{{/buttons}}</div></div><div class='textEditorNotification'><span class='textEditorNotificationMsg'>Test</span></div><div class='textEditorRightPanel'></div><div class='textEditorIframeContainer'><div class='textEditorIframe'><iframe seamless='true' marginheight='0'></iframe></div></div>";
},initialize:function(){e.log("Initializing TextEditorComponent"),this.isInitialized=!0,
this.htmlObject?this.$ph=i("#"+this.htmlObject):this.$ph=i("<div id='textEditorDefautlId'></div>").appendTo("body");
},update:function(){var t=this;t.parameter&&t.setFile(t.dashboard.getParameterValue(t.parameter)),
t.isInitialized||t.initialize(),t.isRightPanelShown=!1;var e=t.getButtons();t.$ph.html(o.render(t.template(),{
file:t.file||"Unknown file",buttons:e})),t.$ph.find(".textEditorControls").on("click","button",function(){
var t=i(this),n=t.prevAll("button").length;e[n].callback(arguments)}),t.file&&t.loadFile();
},getButtons:function(){var t=this,e=t.extraButtons||[];return n.chain(t.defaultButtons).each(function(e){
e.callback=n.bind(e.callback,t)}),t.defaultButtons.concat(e)},setFile:function(t){
this.file=t},getFile:function(){return this.file},loadFile:function(){var t=this;i("button.save",t.$ph).attr("disabled",!0),
t.externalEditor=i("iframe",t.$ph);var e=i(".textEditorControls",t.$ph).height()+i(".textEditorNotification",t.$ph).height(),n=t.$ph.height()-e-5;
t.externalEditor.height(n),t.externalEditor.load(function(){var e=t.getEditorWindow();
e.listeners.onStatusUpdate=t.setDirty,e.listeners.notify=function(e,i){t.notify(e);
},i("#notifications").hide()}),t.externalEditor.attr("src",a.getUrl()+"path="+this.file+"&theme=ace/theme/eclipse&editorOnly=true");
},notify:function(t,e){var i=this.$ph.find(".textEditorNotificationMsg");i.text(t),
i.show().delay(4e3).fadeOut("slow")},setDirty:function(t){i("button.save",this.$ph).attr("disabled",!t);
},getEditorWindow:function(){return this.externalEditor[0].contentWindow},save:function(){
this.getEditorWindow().save()},getRightPanel:function(){return this.$ph.find(".textEditorRightPanel");
},toggleRightPanel:function(){return this.getRightPanel().toggle(),this.isRightPanelShown=!this.isRightPanelShown,
this.getEditorWindow().editor.getEditor().resize(),this.isRightPanelShown}})}),define("cde/components/TextEditorComponent",["cde/components/TextEditorComponent/TextEditorComponent"],function(t){
return t});