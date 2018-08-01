define(["dojo/_base/declare","dojo/dom-style"],function(t,e){return t(null,{labelTooltip:function(t,n,i,r,o,l){
var s="rtl"==e.get(n.node,"direction"),a="rtl"==n.getTextDir(i);a&&!s&&(i="<span dir='rtl'>"+i+"</span>"),
!a&&s&&(i="<span dir='ltr'>"+i+"</span>"),this.inherited(arguments)},_isRtl:function(){
return this.chart.isRightToLeft()}})});