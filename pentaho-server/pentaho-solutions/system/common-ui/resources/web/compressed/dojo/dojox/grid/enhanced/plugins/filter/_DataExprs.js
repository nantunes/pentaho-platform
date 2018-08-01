define(["dojo/_base/declare","dojo/_base/lang","dojo/date/locale","./_ConditionExpr"],function(e,r,n,t){
var a=e("dojox.grid.enhanced.plugins.filter.BooleanExpr",t._DataExpr,{_name:"bool",
_convertData:function(e){return!!e}}),i=e("dojox.grid.enhanced.plugins.filter.StringExpr",t._DataExpr,{
_name:"string",_convertData:function(e){return String(e)}}),o=e("dojox.grid.enhanced.plugins.filter.NumberExpr",t._DataExpr,{
_name:"number",_convertDataToExpr:function(e){return parseFloat(e)}}),u=e("dojox.grid.enhanced.plugins.filter.DateExpr",t._DataExpr,{
_name:"date",_convertData:function(e){if(e instanceof Date)return e;if("number"==typeof e)return new Date(e);
var t=n.parse(String(e),r.mixin({selector:this._name},this._convertArgs));if(!t)throw new Error("Datetime parse failed: "+e);
return t},toObject:function(){if(this._value instanceof Date){var e=this._value;this._value=this._value.valueOf();
var r=this.inherited(arguments);return this._value=e,r}return this.inherited(arguments);
}}),d=e("dojox.grid.enhanced.plugins.filter.TimeExpr",u,{_name:"time"});return r.mixin({
BooleanExpr:a,StringExpr:i,NumberExpr:o,DateExpr:u,TimeExpr:d},t)});