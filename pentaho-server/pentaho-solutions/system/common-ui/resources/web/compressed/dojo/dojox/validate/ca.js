define(["dojo/_base/lang","./_base","./regexp","./us"],function(e,n,r,t){var i=e.getObject("ca",!0,n);
return e.mixin(i,{isPhoneNumber:function(e){return t.isPhoneNumber(e)},isProvince:function(e){
var n=new RegExp("^"+r.ca.province()+"$","i");return n.test(e)},isSocialInsuranceNumber:function(e){
var r={format:["###-###-###","### ### ###","#########"]};return n.isNumberFormat(e,r);
},isPostalCode:function(e){var n=new RegExp("^"+r.ca.postalCode()+"$","i");return n.test(e);
}}),i});