define(["../../_base/lang","../../_base/kernel","./sorter"],function(t,e,r){var o={};
return t.setObject("dojo.data.util.simpleFetch",o),o.errorHandler=function(t,r){if(r.onError){
var o=r.scope||e.global;r.onError.call(o,t,r)}},o.fetchHandler=function(t,o){var n=o.abort||null,l=!1,a=o.start?o.start:0,c=o.count&&o.count!==1/0?a+o.count:t.length;
o.abort=function(){l=!0,n&&n.call(o)};var s=o.scope||e.global;if(o.store||(o.store=this),
o.onBegin&&o.onBegin.call(s,t.length,o),o.sort&&t.sort(r.createSortFunction(o.sort,this)),
o.onItem)for(var i=a;i<t.length&&c>i;++i){var h=t[i];l||o.onItem.call(s,h,o)}if(o.onComplete&&!l){
var f=null;o.onItem||(f=t.slice(a,c)),o.onComplete.call(s,f,o)}},o.fetch=function(e){
return e=e||{},e.store||(e.store=this),this._fetchItems(e,t.hitch(this,"fetchHandler"),t.hitch(this,"errorHandler")),
e},o});