define(["dojo/_base/declare","dojo/dom-class","dojo/date/locale"],function(e,t,s){
return e("dojox.mobile._TimePickerMixin",null,{reset:function(){var e=new Date,t=e.getHours()+"",s=e.getMinutes();
s=(10>s?"0":"")+s,this.set("colors",[t,s]),this.values?(this.set("values",this.values),
this.values=null):this.values12?(this.set("values12",this.values12),this.values12=null):this.set("values",[t,s]);
},_getDateAttr:function(){var e=this.get("values");return s.parse(e[0]+":"+e[1],{
timePattern:"H:m",selector:"time"})}})});