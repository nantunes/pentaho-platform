define(["dojo/_base/array","dojo/_base/lang"],function(e,t){return dojo.getObject("json.schema",!0,t.getObject("dojox",!0)),
dojox.json.schema.validate=function(e,t){return this._validate(e,t,!1)},dojox.json.schema.checkPropertyChange=function(e,t,n){
return this._validate(e,t,n||"property")},dojox.json.schema.mustBeValid=function(t){
if(!t.valid)throw new TypeError(e.map(t.errors,function(e){return"for property "+e.property+": "+e.message;
}).join(", "))},dojox.json.schema._validate=function(e,t,n){function a(e,t,i,s){function m(e){
r.push({property:i,message:e})}function f(e,t){if(e){if(!("string"!=typeof e||"any"==e||("null"==e?null===t:typeof t==e)||t instanceof Array&&"array"==e||"integer"==e&&t%1===0))return[{
property:i,message:typeof t+" value found, but a "+e+" is required"}];if(e instanceof Array){
for(var n=[],o=0;o<e.length&&(n=f(e[o],t)).length;o++);if(n.length)return n}else if("object"==typeof e){
var s=r;r=[],a(t,e,i);var m=r;return r=s,m}}return[]}var c;if(i+=i?"number"==typeof s?"["+s+"]":"undefined"==typeof s?"":"."+s:s,
("object"!=typeof t||t instanceof Array)&&(i||"function"!=typeof t))return"function"==typeof t?Object(e)instanceof t||m("is not an instance of the class/constructor "+t.name):t&&m("Invalid schema/property definition "+t),
null;if(n&&t.readonly&&m("is a readonly field, it can not be changed"),t["extends"]&&a(e,t["extends"],i,s),
void 0===e)t.optional||m("is missing and it is not optional");else if(r=r.concat(f(t.type,e)),
t.disallow&&!f(t.disallow,e).length&&m(" disallowed value was matched"),null!==e){
if(e instanceof Array){if(t.items)if(t.items instanceof Array)for(s=0,c=e.length;c>s;s++)r.concat(a(e[s],t.items[s],i,s));else for(s=0,
c=e.length;c>s;s++)r.concat(a(e[s],t.items,i,s));t.minItems&&e.length<t.minItems&&m("There must be a minimum of "+t.minItems+" in the array"),
t.maxItems&&e.length>t.maxItems&&m("There must be a maximum of "+t.maxItems+" in the array");
}else t.properties&&r.concat(o(e,t.properties,i,t.additionalProperties));if(t.pattern&&"string"==typeof e&&!e.match(t.pattern)&&m("does not match the regex pattern "+t.pattern),
t.maxLength&&"string"==typeof e&&e.length>t.maxLength&&m("may only be "+t.maxLength+" characters long"),
t.minLength&&"string"==typeof e&&e.length<t.minLength&&m("must be at least "+t.minLength+" characters long"),
void 0!==typeof t.minimum&&typeof e==typeof t.minimum&&t.minimum>e&&m("must have a minimum value of "+t.minimum),
void 0!==typeof t.maximum&&typeof e==typeof t.maximum&&t.maximum<e&&m("must have a maximum value of "+t.maximum),
t["enum"]){var p=t["enum"];c=p.length;for(var h,u=0;c>u;u++)if(p[u]===e){h=1;break;
}h||m("does not have a value in the enumeration "+p.join(", "))}"number"==typeof t.maxDecimal&&e.toString().match(new RegExp("\\.[0-9]{"+(t.maxDecimal+1)+",}"))&&m("may only have "+t.maxDecimal+" digits of decimal places");
}return null}function o(e,t,o,i){if("object"==typeof t){("object"!=typeof e||e instanceof Array)&&r.push({
property:o,message:"an object is required"});for(var s in t)if(t.hasOwnProperty(s)&&("_"!=s.charAt(0)||"_"!=s.charAt(1))){
var m=e[s],f=t[s];a(m,f,o,s)}}for(s in e){!e.hasOwnProperty(s)||"_"==s.charAt(0)&&"_"==s.charAt(1)||!t||t[s]||i!==!1||r.push({
property:o,message:typeof m+"The property "+s+" is not defined in the schema and the schema does not allow additional properties"
});var c=t&&t[s]&&t[s].requires;!c||c in e||r.push({property:o,message:"the presence of the property "+s+" requires that "+c+" also be present"
}),m=e[s],!t||"object"!=typeof t||s in t||a(m,i,o,s),!n&&m&&m.$schema&&(r=r.concat(a(m,m.$schema,o,s)));
}return r}var r=[];return t&&a(e,t,"",n||""),!n&&e&&e.$schema&&a(e,e.$schema,"",""),
{valid:!r.length,errors:r}},dojox.json.schema});