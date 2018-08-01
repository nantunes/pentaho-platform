define(["dojo/_base/declare","dojo/_base/lang","dojo/date","./_DataExprs"],function(e,n,a,r){
function o(e,n,o,t){e=e.applyRow(o,t),n=n.applyRow(o,t);var l=e.getValue(),i=n.getValue();
return e instanceof r.TimeExpr?a.compare(l,i,"time"):e instanceof r.DateExpr?a.compare(l,i,"date"):(e instanceof r.StringExpr&&(l=l.toLowerCase(),
i=String(i).toLowerCase()),l==i?0:i>l?-1:1)}var t=e("dojox.grid.enhanced.plugins.filter.LogicAND",r._BiOpExpr,{
_name:"and",_calculate:function(e,n,a,o){var t=e.applyRow(a,o).getValue()&&n.applyRow(a,o).getValue();
return new r.BooleanExpr(t)}}),l=e("dojox.grid.enhanced.plugins.filter.LogicOR",r._BiOpExpr,{
_name:"or",_calculate:function(e,n,a,o){var t=e.applyRow(a,o).getValue()||n.applyRow(a,o).getValue();
return new r.BooleanExpr(t)}}),i=e("dojox.grid.enhanced.plugins.filter.LogicXOR",r._BiOpExpr,{
_name:"xor",_calculate:function(e,n,a,o){var t=e.applyRow(a,o).getValue(),l=n.applyRow(a,o).getValue();
return new r.BooleanExpr(!!t!=!!l)}}),p=e("dojox.grid.enhanced.plugins.filter.LogicNOT",r._UniOpExpr,{
_name:"not",_calculate:function(e,n,a){return new r.BooleanExpr(!e.applyRow(n,a).getValue());
}}),u=e("dojox.grid.enhanced.plugins.filter.LogicALL",r._OperatorExpr,{_name:"all",
applyRow:function(e,n){for(var a=0,o=!0;o&&this._operands[a]instanceof r._ConditionExpr;++a)o=this._operands[a].applyRow(e,n).getValue();
return new r.BooleanExpr(o)}}),c=e("dojox.grid.enhanced.plugins.filter.LogicANY",r._OperatorExpr,{
_name:"any",applyRow:function(e,n){for(var a=0,o=!1;!o&&this._operands[a]instanceof r._ConditionExpr;++a)o=this._operands[a].applyRow(e,n).getValue();
return new r.BooleanExpr(o)}}),g=e("dojox.grid.enhanced.plugins.filter.EqualTo",r._BiOpExpr,{
_name:"equal",_calculate:function(e,n,a,t){var l=o(e,n,a,t);return new r.BooleanExpr(0===l);
}}),s=e("dojox.grid.enhanced.plugins.filter.LessThan",r._BiOpExpr,{_name:"less",_calculate:function(e,n,a,t){
var l=o(e,n,a,t);return new r.BooleanExpr(0>l)}}),d=e("dojox.grid.enhanced.plugins.filter.LessThanOrEqualTo",r._BiOpExpr,{
_name:"lessEqual",_calculate:function(e,n,a,t){var l=o(e,n,a,t);return new r.BooleanExpr(0>=l);
}}),x=e("dojox.grid.enhanced.plugins.filter.LargerThan",r._BiOpExpr,{_name:"larger",
_calculate:function(e,n,a,t){var l=o(e,n,a,t);return new r.BooleanExpr(l>0)}}),_=e("dojox.grid.enhanced.plugins.filter.LargerThanOrEqualTo",r._BiOpExpr,{
_name:"largerEqual",_calculate:function(e,n,a,t){var l=o(e,n,a,t);return new r.BooleanExpr(l>=0);
}}),E=e("dojox.grid.enhanced.plugins.filter.Contains",r._BiOpExpr,{_name:"contains",
_calculate:function(e,n,a,o){var t=String(e.applyRow(a,o).getValue()).toLowerCase(),l=String(n.applyRow(a,o).getValue()).toLowerCase();
return new r.BooleanExpr(t.indexOf(l)>=0)}}),w=e("dojox.grid.enhanced.plugins.filter.StartsWith",r._BiOpExpr,{
_name:"startsWith",_calculate:function(e,n,a,o){var t=String(e.applyRow(a,o).getValue()).toLowerCase(),l=String(n.applyRow(a,o).getValue()).toLowerCase();
return new r.BooleanExpr(t.substring(0,l.length)==l)}}),f=e("dojox.grid.enhanced.plugins.filter.EndsWith",r._BiOpExpr,{
_name:"endsWith",_calculate:function(e,n,a,o){var t=String(e.applyRow(a,o).getValue()).toLowerCase(),l=String(n.applyRow(a,o).getValue()).toLowerCase();
return new r.BooleanExpr(t.substring(t.length-l.length)==l)}}),h=e("dojox.grid.enhanced.plugins.filter.Matches",r._BiOpExpr,{
_name:"matches",_calculate:function(e,n,a,o){var t=String(e.applyRow(a,o).getValue()),l=new RegExp(n.applyRow(a,o).getValue());
return new r.BooleanExpr(t.search(l)>=0)}}),L=e("dojox.grid.enhanced.plugins.filter.IsEmpty",r._UniOpExpr,{
_name:"isEmpty",_calculate:function(e,n,a){var o=e.applyRow(n,a).getValue();return new r.BooleanExpr(""===o||null==o);
}});return n.mixin({LogicAND:t,LogicOR:l,LogicXOR:i,LogicNOT:p,LogicALL:u,LogicANY:c,
EqualTo:g,LessThan:s,LessThanOrEqualTo:d,LargerThan:x,LargerThanOrEqualTo:_,Contains:E,
StartsWith:w,EndsWith:f,Matches:h,IsEmpty:L},r)});