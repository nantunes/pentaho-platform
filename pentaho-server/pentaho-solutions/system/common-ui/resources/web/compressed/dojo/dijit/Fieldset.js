define(["dojo/_base/declare","dojo/query!css2","dijit/TitlePane","dojo/text!./templates/Fieldset.html"],function(e,t,i,n){
return e("dijit.Fieldset",i,{baseClass:"dijitFieldset",title:"",open:!0,templateString:n,
postCreate:function(){if(!this.title){var e=t("legend",this.containerNode);e.length&&(this.set("title",e[0].innerHTML),
e[0].parentNode.removeChild(e[0]))}this.inherited(arguments)}})});