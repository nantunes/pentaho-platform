define(["../lib/jquery","./InputBaseComponent","../dashboard/Utils"],function(a,e,r){
return e.extend({draw:function(e){var t=this,o=t.dashboard.getParameterValue(t.parameter);
o="function"==typeof o?o():o;var n=!1,l=[];null==o||void 0==o?l=[]:o instanceof Array||"object"==typeof o&&o.join?l=o:"string"==typeof o&&(l=o.split("|"));
var p=0==t.valueAsId?0:1,s=!1;a:for(var i=0;i<l.length;i++)for(var c=0;c<e.length;c++)if(l[i]==e[c][p]){
s=!0;break a}!s&&t.useFirstValue&&(l=[e[0][p]],t.currentVal=l,t.dashboard.setParameter(t.parameter,l),
t.dashboard.processChange(t.name));for(var d=t.verticalOrientation?"toggleGroup vertical":"toggleGroup horizontal",u=a("<ul/>").attr({
"class":d}),i=0,f=e.length;f>i;i++){var h=a("<li/>").attr({"class":d}),m=a("<input/>").click(function(){
t.callAjaxAfterRender(t,t.name)});n=!1;for(var v=0,g=l.length;g>v&&!(n=l[v]==e[i][p]);v++);
"radio"==t.type||"radiocomponent"==t.type.toLowerCase()?((0==i&&!s||s&&e[i][p]==o)&&m.prop("checked",!0),
m.attr({type:"radio"})):((0==i&&!s&&t.useFirstValue||s&&n)&&m.prop("checked",!0),
m.attr({type:"checkbox"})),m.attr({"class":t.name,name:t.name,id:t.name+i,value:e[i][p]
}),m.appendTo(h);var b=r.sanitizeHtml(e[i][1]);h.append(a("<label/>").attr({"for":t.name+i
}).html(b)),u.append(h).append(void 0==t.separator||null==t.separator||"null"==t.separator?"":t.separator);
}t.placeholder().html(u),t.currentVal=null,t._doAutoFocus()},callAjaxAfterRender:function(a,e){
var r=a;setTimeout(function(){r.dashboard.processChange(e)},1)}})});