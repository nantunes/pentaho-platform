define(["dojo/_base/kernel","dojo/_base/lang","./_base"],function(e,t,r){return e.experimental("dojox.validate.check"),
r.check=function(e,a){var n=[],i=[],s={isSuccessful:function(){return!this.hasInvalid()&&!this.hasMissing();
},hasMissing:function(){return n.length>0},getMissing:function(){return n},isMissing:function(e){
for(var t=0;t<n.length;t++)if(e==n[t])return!0;return!1},hasInvalid:function(){return i.length>0;
},getInvalid:function(){return i},isInvalid:function(e){for(var t=0;t<i.length;t++)if(e==i[t])return!0;
return!1}},o=function(e,t){return"undefined"==typeof t[e]};if(a.trim instanceof Array)for(var l=0;l<a.trim.length;l++){
var p=e[a.trim[l]];o("type",p)||"text"!=p.type&&"textarea"!=p.type&&"password"!=p.type||(p.value=p.value.replace(/(^\s*|\s*$)/g,""));
}if(a.uppercase instanceof Array)for(var l=0;l<a.uppercase.length;l++){var p=e[a.uppercase[l]];
o("type",p)||"text"!=p.type&&"textarea"!=p.type&&"password"!=p.type||(p.value=p.value.toUpperCase());
}if(a.lowercase instanceof Array)for(var l=0;l<a.lowercase.length;l++){var p=e[a.lowercase[l]];
o("type",p)||"text"!=p.type&&"textarea"!=p.type&&"password"!=p.type||(p.value=p.value.toLowerCase());
}if(a.ucfirst instanceof Array)for(var l=0;l<a.ucfirst.length;l++){var p=e[a.ucfirst[l]];
o("type",p)||"text"!=p.type&&"textarea"!=p.type&&"password"!=p.type||(p.value=p.value.replace(/\b\w+\b/g,function(e){
return e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()}))}if(a.digit instanceof Array)for(var l=0;l<a.digit.length;l++){
var p=e[a.digit[l]];o("type",p)||"text"!=p.type&&"textarea"!=p.type&&"password"!=p.type||(p.value=p.value.replace(/\D/g,""));
}if(a.required instanceof Array)for(var l=0;l<a.required.length;l++)if(t.isString(a.required[l])){
var p=e[a.required[l]];if(o("type",p)||"text"!=p.type&&"textarea"!=p.type&&"password"!=p.type&&"file"!=p.type||!/^\s*$/.test(p.value))if(o("type",p)||"select-one"!=p.type&&"select-multiple"!=p.type||-1!=p.selectedIndex&&!/^\s*$/.test(p.options[p.selectedIndex].value)){
if(p instanceof Array){for(var f=!1,u=0;u<p.length;u++)p[u].checked&&(f=!0);f||(n[n.length]=p[0].name);
}}else n[n.length]=p.name;else n[n.length]=p.name}if(a.required instanceof Array)for(var l=0;l<a.required.length;l++)if(t.isObject(a.required[l])){
var p,c;for(var v in a.required[l])p=e[v],c=a.required[l][v];if(p instanceof Array){
for(var f=0,u=0;u<p.length;u++)p[u].checked&&f++;c>f&&(n[n.length]=p[0].name)}else if(!o("type",p)&&"select-multiple"==p.type){
for(var y=0,u=0;u<p.options.length;u++)p.options[u].selected&&!/^\s*$/.test(p.options[u].value)&&y++;
c>y&&(n[n.length]=p.name)}}if(t.isObject(a.dependencies))for(v in a.dependencies){
var p=e[v];if(!o("type",p)&&!("text"!=p.type&&"textarea"!=p.type&&"password"!=p.type||/\S+/.test(p.value)||s.isMissing(p.name))){
var d=e[a.dependencies[v]];("text"==d.type||"textarea"==d.type||"password"==d.type)&&(/^\s*$/.test(d.value)||(n[n.length]=p.name));
}}if(t.isObject(a.constraints))for(v in a.constraints){var p=e[v];if(p&&(o("tagName",p)||!(p.tagName.toLowerCase().indexOf("input")>=0||p.tagName.toLowerCase().indexOf("textarea")>=0)||!/^\s*$/.test(p.value))){
var g=!0;if(t.isFunction(a.constraints[v]))g=a.constraints[v](p.value);else if(t.isArray(a.constraints[v]))if(t.isArray(a.constraints[v][0]))for(var l=0;l<a.constraints[v].length&&(g=r.evaluateConstraint(a,a.constraints[v][l],v,p),
g);l++);else g=r.evaluateConstraint(a,a.constraints[v],v,p);g||(i[i.length]=p.name);
}}if(t.isObject(a.confirm))for(v in a.confirm){var p=e[v],d=e[a.confirm[v]];o("type",p)||o("type",d)||"text"!=p.type&&"textarea"!=p.type&&"password"!=p.type||d.type!=p.type||d.value==p.value||s.isInvalid(p.name)||/^\s*$/.test(d.value)||(i[i.length]=p.name);
}return s},r.evaluateConstraint=function(e,t,r,a){var n=t[0],i=t.slice(1);return i.unshift(a.value),
"undefined"!=typeof n?n.apply(null,i):!1},r.check});