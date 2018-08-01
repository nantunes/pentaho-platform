define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dijit/layout/StackContainer","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/i18n","dojo/text!./Wizard/Wizard.html","dojo/i18n!dijit/nls/common","dojo/i18n!./nls/Wizard","dijit/form/Button"],function(t,i,n,e,o,s,d,c){
var a=i("dojox.widget.Wizard",[e,o,s],{templateString:c,nextButtonLabel:"",previousButtonLabel:"",
cancelButtonLabel:"",doneButtonLabel:"",cancelFunction:null,hideDisabled:!1,postMixInProperties:function(){
this.inherited(arguments);var i,n=t.mixin({cancel:d.getLocalization("dijit","common",this.lang).buttonCancel
},d.getLocalization("dojox.widget","Wizard",this.lang));for(i in n)this[i+"ButtonLabel"]||(this[i+"ButtonLabel"]=n[i]);
},startup:function(){this._started||(this.inherited(arguments),this.connect(this.nextButton,"onClick","_forward"),
this.connect(this.previousButton,"onClick","back"),this.cancelFunction?(t.isString(this.cancelFunction)&&(this.cancelFunction=t.getObject(this.cancelFunction)),
this.connect(this.cancelButton,"onClick",this.cancelFunction)):this.cancelButton.domNode.style.display="none",
this.connect(this.doneButton,"onClick","done"),this._subscription=n.subscribe(this.id+"-selectChild",t.hitch(this,"_checkButtons")),
this._started=!0)},resize:function(){this.inherited(arguments),this._checkButtons();
},_checkButtons:function(){var t=this.selectedChildWidget,i=t.isLastChild;this.nextButton.set("disabled",i),
this._setButtonClass(this.nextButton),t.doneFunction?(this.doneButton.domNode.style.display="",
i&&(this.nextButton.domNode.style.display="none")):this.doneButton.domNode.style.display="none",
this.previousButton.set("disabled",!this.selectedChildWidget.canGoBack),this._setButtonClass(this.previousButton);
},_setButtonClass:function(t){t.domNode.style.display=this.hideDisabled&&t.disabled?"none":"";
},_forward:function(){this.selectedChildWidget._checkPass()&&this.forward()},done:function(){
this.selectedChildWidget.done()},destroy:function(){n.unsubscribe(this._subscription),
this.inherited(arguments)}});return a});