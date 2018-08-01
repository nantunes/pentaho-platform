dojo.provide("dojox.lang.docs"),function(){function o(o){console.log("Warning, the API docs must be available at ../util/docscripts/api.json or ../util/docscripts/api/*.json in order for dojox.lang.docs to supply schema information, but it could not be loaded: "+o);
}var r={},t=[],n=dojox.lang.docs._loadedDocs={},e=function(o,t){r[t]=o},a=function(o){
var r,t,n=o.type||"",e=!1,a=!1;return n=n.replace(/\?/,function(){return e=!0,""}),
n=n.replace(/\[\]/,function(){return a=!0,""}),n.match(/HTML/)?n="string":"String"==n||"Number"==n||"Boolean"==n||"Object"==n||"Array"==n||"Integer"==n||"Function"==n?n=n.toLowerCase():"bool"==n?n="boolean":n?(r=dojo.getObject(n)||{},
t=!0):r={},r=r||{type:n},a&&(r={items:r,type:"array"},t=!1),t||(e&&(r.optional=!0),
/const/.test(o.tags)&&(r.readonly=!0)),r},s=function(o,r){var t=n[r];if(t){if(o.description=t.description,
o.properties={},o.methods={},t.properties)for(var e=t.properties,i=0,s=e.length;s>i;i++)if("prototype"==e[i].scope){
var c=o.properties[e[i].name]=a(e[i]);c.description=e[i].summary}if(t.methods){var u=t.methods;
for(i=0,s=u.length;s>i;i++)if(r=u[i].name,r&&"prototype"==u[i].scope){var l=o.methods[r]={};
l.description=u[i].summary;var d=u[i].parameters;if(d){l.parameters=[];for(var p=0,f=d.length;f>p;p++){
var j=d[p],m=l.parameters[p]=a(j);m.name=j.name,m.optional="optional"==j.usage}}var h=u[i]["return-types"];
if(h&&h[0]){var v=a(h[0]);v.type&&(l.returns=v)}}}var y=t.superclass;y&&(o["extends"]=dojo.getObject(y));
}},c=function(o){t.push(o)},u=dojo.declare;dojo.declare=function(o){var r=u.apply(this,arguments);
return e(r,o),r},dojo.mixin(dojo.declare,u);var l,d=dojo.require;dojo.require=function(o){
c(o);var r=d.apply(this,arguments);return r},dojox.lang.docs.init=function(a){function u(){
dojo.require=d,t=null;try{dojo.xhrGet({sync:!a,url:dojo.baseUrl+"../util/docscripts/api.json",
handleAs:"text"}).addCallbacks(function(o){n=new Function("return "+o)(),o=null,e=s;
for(var t in r)e(r[t],t);r=null},o)}catch(i){o(i)}}if(l)return null;l=!0;var p=function(o,r){
return dojo.xhrGet({sync:r||!a,url:dojo.baseUrl+"../util/docscripts/api/"+o+".json",
handleAs:"text"}).addCallback(function(o){o=new Function("return "+o)();for(var r in o)n[r]||(n[r]=o[r]);
})};try{var f=t.shift();p(f,!0).addCallbacks(function(){c=function(o){if(!n[o])try{
p(o)}catch(r){n[o]={}}},dojo.forEach(t,function(o){c(o)}),t=null,e=s;for(i in r)e(r[i],i);
r=null},u)}catch(j){u()}return null}}();