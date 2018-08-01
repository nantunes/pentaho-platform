define(["dojo/_base/lang","dojo/_base/kernel","dojo/_base/event","dojo/window","./_Mixin","dojo/_base/declare"],function(t,e,i,n,o,r){
var s=t.getObject("dojox.form.manager",!0),a=s.actionAdapter;return r("dojox.form.manager._FormMixin",null,{
name:"",action:"",method:"",encType:"","accept-charset":"",accept:"",target:"",startup:function(){
this.isForm="form"==this.domNode.tagName.toLowerCase(),this.isForm&&(this.connect(this.domNode,"onreset","_onReset"),
this.connect(this.domNode,"onsubmit","_onSubmit")),this.inherited(arguments)},_onReset:function(t){
var e={returnValue:!0,preventDefault:function(){this.returnValue=!1},stopPropagation:function(){},
currentTarget:t.currentTarget,target:t.target};return this.onReset(e)!==!1&&e.returnValue&&this.reset(),
i.stop(t),!1},onReset:function(){return!0},reset:function(){return this.inspectFormWidgets(a(function(t,e){
e.reset&&e.reset()})),this.isForm&&this.domNode.reset(),this},_onSubmit:function(t){
this.onSubmit(t)===!1&&i.stop(t)},onSubmit:function(){return this.isValid()},submit:function(){
this.isForm&&this.onSubmit()!==!1&&this.domNode.submit()},isValid:function(){for(var t in this.formWidgets){
var e=!1;if(a(function(t,i){i.get("disabled")||!i.isValid||i.isValid()||(e=!0)}).call(this,null,this.formWidgets[t].widget),
e)return!1}return!0},validate:function(){var t,e=!0,i=this.formWidgets,o=!1;for(t in i)a(function(t,i){
i._hasBeenBlurred=!0;var r=i.disabled||!i.validate||i.validate();r||o||(n.scrollIntoView(i.containerNode||i.domNode),
i.focus(),o=!0),e=e&&r}).call(this,null,i[t].widget);return e}})});