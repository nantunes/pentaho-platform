define(["dojo/_base/lang","dojo/regexp","dojox/main"],function(o,l,a){var e=o.getObject("validate.regexp",!0,a);
return e=a.validate.regexp={ipAddress:function(o){o="object"==typeof o?o:{},"boolean"!=typeof o.allowDottedDecimal&&(o.allowDottedDecimal=!0),
"boolean"!=typeof o.allowDottedHex&&(o.allowDottedHex=!0),"boolean"!=typeof o.allowDottedOctal&&(o.allowDottedOctal=!0),
"boolean"!=typeof o.allowDecimal&&(o.allowDecimal=!0),"boolean"!=typeof o.allowHex&&(o.allowHex=!0),
"boolean"!=typeof o.allowIPv6&&(o.allowIPv6=!0),"boolean"!=typeof o.allowHybrid&&(o.allowHybrid=!0);
var l="((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])",a="(0[xX]0*[\\da-fA-F]?[\\da-fA-F]\\.){3}0[xX]0*[\\da-fA-F]?[\\da-fA-F]",e="(0+[0-3][0-7][0-7]\\.){3}0+[0-3][0-7][0-7]",t="(0|[1-9]\\d{0,8}|[1-3]\\d{9}|4[01]\\d{8}|42[0-8]\\d{7}|429[0-3]\\d{6}|4294[0-8]\\d{5}|42949[0-5]\\d{4}|429496[0-6]\\d{3}|4294967[01]\\d{2}|42949672[0-8]\\d|429496729[0-5])",r="0[xX]0*[\\da-fA-F]{1,8}",d="([\\da-fA-F]{1,4}\\:){7}[\\da-fA-F]{1,4}",n="([\\da-fA-F]{1,4}\\:){6}((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])",i=[];
o.allowDottedDecimal&&i.push(l),o.allowDottedHex&&i.push(a),o.allowDottedOctal&&i.push(e),
o.allowDecimal&&i.push(t),o.allowHex&&i.push(r),o.allowIPv6&&i.push(d),o.allowHybrid&&i.push(n);
var f="";return i.length>0&&(f="("+i.join("|")+")"),f},host:function(o){o="object"==typeof o?o:{},
"boolean"!=typeof o.allowIP&&(o.allowIP=!0),"boolean"!=typeof o.allowLocal&&(o.allowLocal=!1),
"boolean"!=typeof o.allowPort&&(o.allowPort=!0),"boolean"!=typeof o.allowNamed&&(o.allowNamed=!1);
var l="(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)",a="(?:[a-zA-Z](?:[-\\da-zA-Z]{0,6}[\\da-zA-Z])?)",t=o.allowPort?"(\\:\\d+)?":"",r="((?:"+l+"\\.)+"+a+"\\.?)";
return o.allowIP&&(r+="|"+e.ipAddress(o)),o.allowLocal&&(r+="|localhost"),o.allowNamed&&(r+="|^[^-][a-zA-Z0-9_-]*"),
"("+r+")"+t},url:function(o){o="object"==typeof o?o:{},"scheme"in o||(o.scheme=[!0,!1]);
var a=l.buildGroupRE(o.scheme,function(o){return o?"(https?|ftps?)\\://":""}),t="(/(?:[^?#\\s/]+/)*(?:[^?#\\s/]+(?:\\?[^?#\\s/]*)?(?:#[A-Za-z][\\w.:-]*)?)?)?";
return a+e.host(o)+t},emailAddress:function(o){o="object"==typeof o?o:{},"boolean"!=typeof o.allowCruft&&(o.allowCruft=!1),
o.allowPort=!1;var l="([!#-'*+\\-\\/-9=?A-Z^-~]+[.])*[!#-'*+\\-\\/-9=?A-Z^-~]+",a=l+"@"+e.host(o);
return o.allowCruft&&(a="<?(mailto\\:)?"+a+">?"),a},emailAddressList:function(o){
o="object"==typeof o?o:{},"string"!=typeof o.listSeparator&&(o.listSeparator="\\s;,");
var l=e.emailAddress(o),a="("+l+"\\s*["+o.listSeparator+"]\\s*)*"+l+"\\s*["+o.listSeparator+"]?\\s*";
return a},numberFormat:function(o){o="object"==typeof o?o:{},"undefined"==typeof o.format&&(o.format="###-###-####");
var a=function(o){return l.escapeString(o,"?").replace(/\?/g,"\\d?").replace(/#/g,"\\d");
};return l.buildGroupRE(o.format,a)},ca:{postalCode:function(){return"([A-Z][0-9][A-Z] [0-9][A-Z][0-9])";
},province:function(){return"(AB|BC|MB|NB|NL|NS|NT|NU|ON|PE|QC|SK|YT)"}},us:{state:function(o){
o="object"==typeof o?o:{},"boolean"!=typeof o.allowTerritories&&(o.allowTerritories=!0),
"boolean"!=typeof o.allowMilitary&&(o.allowMilitary=!0);var l="AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY",a="AS|FM|GU|MH|MP|PW|PR|VI",e="AA|AE|AP";
return o.allowTerritories&&(l+="|"+a),o.allowMilitary&&(l+="|"+e),"("+l+")"}}}});