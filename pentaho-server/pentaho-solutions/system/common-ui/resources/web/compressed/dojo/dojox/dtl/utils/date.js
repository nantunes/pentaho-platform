define(["dojo/_base/lang","dojox/date/php","../_base"],function(t,e,n){var a=t.getObject("utils.date",!0,n);
return a.DateFormat=e.DateFormat,t.extend(a.DateFormat,e.DateFormat.prototype,{f:function(){
return this.date.getMinutes()?this.g()+":"+this.i():this.g()},N:function(){return a._months_ap[this.date.getMonth()];
},P:function(){return this.date.getMinutes()||this.date.getHours()?this.date.getMinutes()||12!=this.date.getHours()?this.f()+" "+this.a():"noon":"midnight";
}}),t.mixin(dojox.dtl.utils.date,{format:function(t,e){var n=new dojox.dtl.utils.date.DateFormat(e);
return n.format(t)},timesince:function(t,e){t instanceof Date||(t=new Date(t.year,t.month,t.day)),
e||(e=new Date);for(var n,a=Math.abs(e.getTime()-t.getTime()),o=0;n=dojox.dtl.utils.date._chunks[o];o++){
var r=Math.floor(a/n[0]);if(r)break}return r+" "+n[1](r)},_chunks:[[31536e6,function(t){
return 1==t?"year":"years"}],[2592e6,function(t){return 1==t?"month":"months"}],[6048e5,function(t){
return 1==t?"week":"weeks"}],[864e5,function(t){return 1==t?"day":"days"}],[36e5,function(t){
return 1==t?"hour":"hours"}],[6e4,function(t){return 1==t?"minute":"minutes"}]],_months_ap:["Jan.","Feb.","March","April","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."]
}),a});