define(["../../_base/array"],function(t){return function(r,n){function e(e){var i=t.filter(e,r),u=n&&n.sort;
if(u&&i.sort("function"==typeof u?u:function(t,r){for(var n,e=0;n=u[e];e++){var i=t[n.attribute],a=r[n.attribute];
if(i=null!=i?i.valueOf():i,a=null!=a?a.valueOf():a,i!=a)return!!n.descending==(null==i||i>a)?-1:1;
}return 0}),n&&(n.start||n.count)){var a=i.length;i=i.slice(n.start||0,(n.start||0)+(n.count||1/0)),
i.total=a}return i}switch(typeof r){default:throw new Error("Can not query with a "+typeof r);
case"object":case"undefined":var i=r;r=function(t){for(var r in i){var n=i[r];if(n&&n.test){
if(!n.test(t[r],t))return!1}else if(n!=t[r])return!1}return!0};break;case"string":
if(!this[r])throw new Error("No filter function "+r+" was found in store");r=this[r];
case"function":}return e.matches=r,e}});