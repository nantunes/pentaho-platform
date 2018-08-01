dojo.provide("dojox.help._base"),dojo.require("dojox.rpc.Service"),dojo.require("dojo.io.script"),
dojo.experimental("dojox.help"),console.warn("Script causes side effects (on numbers, strings, and booleans). Call dojox.help.noConflict() if you plan on executing code."),
dojox.help={locate:function(o,e,t){t=t||20;var n,r=[],i={};if(e){dojo.isArray(e)||(e=[e]);
for(var _,s=0;_=e[s];s++){if(n=_,dojo.isString(_)){if(_=dojo.getObject(_),!_)continue;
}else{if(!dojo.isObject(_))continue;n=_.__name__}r.push(_),n&&(n=n.split(".")[0],
i[n]||-1!=dojo.indexOf(dojox.help._namespaces,n)||dojox.help.refresh(n),i[n]=!0)}
}r.length||(r.push({__name__:"window"}),dojo.forEach(dojox.help._namespaces,function(o){
i[o]=!0}));var d=o.toLowerCase(),a=[];o:for(var _,s=0;_=r[s];s++){var p=_.__name__||"",l=dojo.some(r,function(o){
return o=o.__name__||"",0==p.indexOf(o+".")});if(p&&!l){n=p.split(".")[0];var h=[];
if("window"==p)for(n in dojox.help._names)dojo.isArray(dojox.help._names[n])&&(h=h.concat(dojox.help._names[n]));else h=dojox.help._names[n];
for(var c,j=0;c=h[j];j++)if(("window"==p||0==c.indexOf(p+"."))&&-1!=c.toLowerCase().indexOf(d)){
if(".prototype"==c.slice(-10))continue;var u=dojo.getObject(c);if(u&&(a.push([c,u]),
a.length==t))break o}}}return dojox.help._displayLocated(a),dojo.isMoz?void 0:""},
refresh:function(o,e){arguments.length<2&&(e=!0),dojox.help._recurse(o,e)},noConflict:function(o){
if(arguments.length)return dojox.help._noConflict(o);for(;dojox.help._overrides.length;){
var e=dojox.help._overrides.pop(),t=e[0],n=e[1],r=t[n];t[n]=dojox.help._noConflict(r);
}},init:function(o,e){o&&dojox.help._namespaces.concat(o),dojo.addOnLoad(function(){
dojo.require=function(o){return function(){dojox.help.noConflict(),o.apply(dojo,arguments),
dojox.help._timer&&clearTimeout(dojox.help._timer),dojox.help._timer=setTimeout(function(){
dojo.addOnLoad(function(){dojox.help.refresh(),dojox.help._timer=!1})},500)}}(dojo.require),
dojox.help._recurse()})},_noConflict:function(o){return o instanceof String?o.toString():o instanceof Number?+o:o instanceof Boolean?1==o:(dojo.isObject(o)&&(delete o.__name__,
delete o.help),o)},_namespaces:["dojo","dojox","dijit","djConfig"],_rpc:new dojox.rpc.Service(dojo.moduleUrl("dojox.rpc.SMDLibrary","dojo-api.smd")),
_attributes:["summary","type","returns","parameters"],_clean:function(o){for(var e,t={},n=0;e=dojox.help._attributes[n];n++){
var r=o["__"+e+"__"];r&&(t[e]=r)}return t},_displayLocated:function(o){throw new Error("_displayLocated should be overridden in one of the dojox.help packages");
},_displayHelp:function(o,e){throw new Error("_displayHelp should be overridden in one of the dojox.help packages");
},_addVersion:function(o){if(o.name){o.version=[dojo.version.major,dojo.version.minor,dojo.version.patch].join(".");
var e=o.name.split(".");("dojo"==e[0]||"dijit"==e[0]||"dojox"==e[0])&&(o.project=e[0]);
}return o},_stripPrototype:function(o){var e=o.replace(/\.prototype(\.|$)/g,"."),t=e;
return"."==e.slice(-1)?t=e=e.slice(0,-1):e=o,[t,e]},_help:function(){for(var o,e=this.__name__,t=dojox.help._stripPrototype(e)[0],n=[],r=0;o=dojox.help._attributes[r];r++)this["__"+o+"__"]||n.push(o);
return dojox.help._displayHelp(!0,{name:this.__name__}),!n.length||this.__searched__?dojox.help._displayHelp(!1,dojox.help._clean(this)):(this.__searched__=!0,
dojox.help._rpc.get(dojox.help._addVersion({name:t,exact:!0,attributes:n})).addCallback(this,function(o){
if(this.toString===dojox.help._toString&&this.toString(o),o&&o.length){o=o[0];for(var e,t=0;e=dojox.help._attributes[t];t++)o[e]&&(this["__"+e+"__"]=o[e]);
dojox.help._displayHelp(!1,dojox.help._clean(this))}else dojox.help._displayHelp(!1,!1);
})),dojo.isMoz?void 0:""},_parse:function(o){if(delete this.__searching__,o&&o.length){
var e=o[0].parameters;if(e){var t=["function ",this.__name__,"("];this.__parameters__=e;
for(var n,r=0;n=e[r];r++){if(r&&t.push(", "),t.push(n.name),n.types){for(var i,_=[],s=0;i=n.types[s];s++)_.push(i.title);
_.length&&(t.push(": "),t.push(_.join("|")))}n.repeating&&t.push("..."),n.optional&&t.push("?");
}t.push(")"),this.__source__=this.__source__.replace(/function[^\(]*\([^\)]*\)/,t.join(""));
}this.__output__&&(delete this.__output__,console.log(this))}else dojox.help._displayHelp(!1,!1);
},_toStrings:{},_toString:function(o){if(!this.__source__)return this.__name__;var e=!this.__parameters__;
if(this.__parameters__=[],o?dojox.help._parse.call(this,o):e&&(this.__searching__=!0,
dojox.help._toStrings[dojox.help._stripPrototype(this.__name__)[0]]=this,dojox.help._toStringTimer&&clearTimeout(dojox.help._toStringTimer),
dojox.help._toStringTimer=setTimeout(function(){dojox.help.__toString()},50)),!e||!this.__searching__)return this.__source__;
var t="function Loading info for "+this.__name__+"... (watch console for result) {}";
return dojo.isMoz?{toString:dojo.hitch(this,function(){return this.__output__=!0,
t})}:(this.__output__=!0,t)},__toString:function(){dojox.help._toStringTimer&&clearTimeout(dojox.help._toStringTimer);
var o=[];dojox.help.noConflict(dojox.help._toStrings);for(var e in dojox.help._toStrings)o.push(e);
for(;o.length;)dojox.help._rpc.batch(dojox.help._addVersion({names:o.splice(-50,50),
exact:!0,attributes:["parameters"]})).addCallback(this,function(o){for(var e,t=0;e=o[t];t++){
var n=dojox.help._toStrings[e.name];n&&(dojox.help._parse.call(n,[e]),delete dojox.help._toStrings[e.name]);
}})},_overrides:[],_recursions:[],_names:{},_recurse:function(o,e){arguments.length<2&&(e=!0);
var t=[];if(o&&dojo.isString(o))dojox.help.__recurse(dojo.getObject(o),o,o,t,e);else for(var n,r=0;n=dojox.help._namespaces[r];r++)window[n]&&(dojox.help._recursions.push([window[n],n,n]),
window[n].__name__=n,window[n].help||(window[n].help=dojox.help._help));for(;dojox.help._recursions.length;){
var i=dojox.help._recursions.shift();dojox.help.__recurse(i[0],i[1],i[2],t,e)}for(var _,r=0;_=t[r];r++)delete _.__seen__;
},__recurse:function(o,e,t,n,r){for(var i in o)if(!i.match(/([^\w_.$]|__[\w_.$]+__)/)){
var _=o[i];if(!("undefined"==typeof _||_===document||_===window||_===dojox.help._toString||_===dojox.help._help||null===_||+dojo.isIE&&_.tagName||_.__seen__)){
var s=dojo.isFunction(_),d=dojo.isObject(_)&&!dojo.isArray(_)&&!_.nodeType,a=t?t+"."+i:i;
if("dojo._blockAsync"!=a){if(!_.__name__){var p=null;dojo.isString(_)?p=String:"number"==typeof _?p=Number:"boolean"==typeof _&&(p=Boolean),
p&&(_=o[i]=new p(_))}_.__seen__=!0,_.__name__=a,(dojox.help._names[e]=dojox.help._names[e]||[]).push(a),
n.push(_),s||dojox.help._overrides.push([o,i]),(s||d)&&r&&dojox.help._recursions.push([_,e,a]),
s&&(_.__source__||(_.__source__=_.toString().replace(/^function\b ?/,"function "+a)),
_.toString===Function.prototype.toString&&(_.toString=dojox.help._toString)),_.help||(_.help=dojox.help._help);
}}}}};