!function(k){function n(e,n){k.ajax({url:e,async:!1,cache:n.cache,contentType:"text/plain;charset="+n.encoding,
dataType:"text",success:function(e){r(e,n.mode)}})}function r(c,a){for(var b="",e=c.split(/\n/),d=/(\{\d+\})/g,q=/\{(\d+)\}/g,m=/(\\u.{4})/gi,f=0;f<e.length;f++)if(e[f]=e[f].replace(/^\s\s*/,"").replace(/\s\s*$/,""),
e[f].length>0&&"#"!=e[f].match("^#")){var g=e[f].split("=");if(g.length>0){for(var o=unescape(g[0]).replace(/^\s\s*/,"").replace(/\s\s*$/,""),h=1==g.length?"":g[1];"\\"==h.match(/\\$/);)h=h.substring(0,h.length-1),
h+=e[++f].replace(/\s\s*$/,"");for(var l=2;l<g.length;l++)h+="="+g[l];if(h=h.replace(/^\s\s*/,"").replace(/\s\s*$/,""),
"map"==a||"both"==a){if(g=h.match(m))for(l=0;l<g.length;l++)h=h.replace(g[l],s(g[l]));
k.i18n.map[o]=h}if("vars"==a||"both"==a)if(h=h.replace(/"/g,'\\"'),t(o),d.test(h)){
for(var g=h.split(d),l=!0,j="",n=[],p=0;p<g.length;p++)!d.test(g[p])||0!=n.length&&-1!=n.indexOf(g[p])||(l||(j+=","),
j+=g[p].replace(q,"v$1"),n.push(g[p]),l=!1);b+=o+"=function("+j+"){",o='"'+h.replace(q,'"+v$1+"')+'"',
b+="return "+o+";};"}else b+=o+'="'+h+'";'}}eval(b)}function t(c){if(/\./.test(c))for(var a="",c=c.split(/\./),b=0;b<c.length;b++)b>0&&(a+="."),
a+=c[b],eval("typeof "+a+' == "undefined"')&&eval(a+"={};")}function s(e){var n=[],e=parseInt(e.substr(2),16);
e>=0&&e<Math.pow(2,16)&&n.push(e);for(var e="",t=0;t<n.length;++t)e+=String.fromCharCode(n[t]);
return e}k.i18n={},k.i18n.map={},k.i18n.properties=function(e){e=k.extend({name:"Messages",
language:"",path:"",mode:"vars",cache:!1,encoding:"UTF-8",callback:null},e),(null===e.language||""==e.language)&&(e.language=k.i18n.browserLang()),
null===e.language&&(e.language="");var t=e.name&&e.name.constructor==Array?e.name:[e.name];
for(i=0;i<t.length;i++)n(e.path+t[i]+".properties",e),e.language.length>=2&&n(e.path+t[i]+"_"+e.language.substring(0,2)+".properties",e),
e.language.length>=5&&n(e.path+t[i]+"_"+e.language.substring(0,5)+".properties",e);
e.callback&&e.callback()},k.i18n.prop=function(e){var n=k.i18n.map[e];if(null==n)return"["+e+"]";
var t;if("string"==typeof n){for(t=0;-1!=(t=n.indexOf("\\",t));)n="t"==n[t+1]?n.substring(0,t)+"	"+n.substring(t++ +2):"r"==n[t+1]?n.substring(0,t)+"\r"+n.substring(t++ +2):"n"==n[t+1]?n.substring(0,t)+"\n"+n.substring(t++ +2):"f"==n[t+1]?n.substring(0,t)+"\f"+n.substring(t++ +2):"\\"==n[t+1]?n.substring(0,t)+"\\"+n.substring(t++ +2):n.substring(0,t)+n.substring(t+1);
var r,s,i=[];for(t=0;t<n.length;)if("'"==n[t])if(t==n.length-1)n=n.substring(0,t);else if("'"==n[t+1])n=n.substring(0,t)+n.substring(++t);else{
for(r=t+2;-1!=(r=n.indexOf("'",r));){if(r==n.length-1||"'"!=n[r+1]){n=n.substring(0,t)+n.substring(t+1,r)+n.substring(r+1),
t=r-1;break}n=n.substring(0,r)+n.substring(++r)}-1==r&&(n=n.substring(0,t)+n.substring(t+1));
}else if("{"==n[t])if(r=n.indexOf("}",t+1),-1==r)t++;else if(s=parseInt(n.substring(t+1,r)),
!isNaN(s)&&s>=0){var a=n.substring(0,t);""!=a&&i.push(a),i.push(s),t=0,n=n.substring(r+1);
}else t=r+1;else t++;""!=n&&i.push(n),n=i,k.i18n.map[e]=i}if(0==n.length)return"";
if(1==n.lengh&&"string"==typeof n[0])return n[0];for(a="",t=0;t<n.length;t++)a+="string"==typeof n[t]?n[t]:n[t]+1<arguments.length?arguments[n[t]+1]:"{"+n[t]+"}";
return a},k.i18n.browserLang=function(){var e=navigator.language||navigator.userLanguage,e=e.toLowerCase();
return e.length>3&&(e=e.substring(0,3)+e.substring(3).toUpperCase()),e};var j;j||(j=function(e,n,t){
if("[object RegExp]"!==Object.prototype.toString.call(n))return"undefined"==typeof j._nativeSplit?e.split(n,t):j._nativeSplit.call(e,n,t);
var r,s,i,a=[],g=0,l=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.sticky?"y":""),n=RegExp(n.source,l+"g");
if(e+="",j._compliantExecNpcg||(r=RegExp("^"+n.source+"$(?!\\s)",l)),void 0===t||0>+t)t=1/0;else if(t=Math.floor(+t),
!t)return[];for(;(s=n.exec(e))&&(l=s.index+s[0].length,!(l>g&&(a.push(e.slice(g,s.index)),
!j._compliantExecNpcg&&s.length>1&&s[0].replace(r,function(){for(var e=1;e<arguments.length-2;e++)void 0===arguments[e]&&(s[e]=void 0);
}),s.length>1&&s.index<e.length&&Array.prototype.push.apply(a,s.slice(1)),i=s[0].length,
g=l,a.length>=t)));)n.lastIndex===s.index&&n.lastIndex++;return g===e.length?(i||!n.test(""))&&a.push(""):a.push(e.slice(g)),
a.length>t?a.slice(0,t):a},j._compliantExecNpcg=void 0===/()??/.exec("")[1],j._nativeSplit=String.prototype.split),
String.prototype.split=function(e,n){return j(this,e,n)}}(jQuery);