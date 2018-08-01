define(["dojo/_base/lang","dojo/_base/declare","dijit/layout/ContentPane"],function(n,t,i){
return t("dojox.widget.WizardPane",i,{canGoBack:!0,passFunction:null,doneFunction:null,
startup:function(){this.inherited(arguments),this.isFirstChild&&(this.canGoBack=!1),
n.isString(this.passFunction)&&(this.passFunction=n.getObject(this.passFunction)),
n.isString(this.doneFunction)&&this.doneFunction&&(this.doneFunction=n.getObject(this.doneFunction));
},_onShow:function(){this.isFirstChild&&(this.canGoBack=!1),this.inherited(arguments);
},_checkPass:function(){var t=!0;if(this.passFunction&&n.isFunction(this.passFunction)){
var i=this.passFunction();switch(typeof i){case"boolean":t=i;break;case"string":alert(i),
t=!1}}return t},done:function(){this.doneFunction&&n.isFunction(this.doneFunction)&&this.doneFunction();
}})});