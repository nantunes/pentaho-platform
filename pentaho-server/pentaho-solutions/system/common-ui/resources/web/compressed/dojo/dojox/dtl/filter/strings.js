define(["dojo/_base/lang","dojo/_base/array","dojox/string/tokenize","dojox/string/sprintf","../filter/htmlstrings","../_base"],function(r,t,e,n,a,u){
var i=r.getObject("filter.strings",!0,u);return r.mixin(i,{_urlquote:function(r,t){
return t||(t="/"),e(r,/([^\w-_.])/g,function(r){if(-1==t.indexOf(r)){if(" "==r)return"+";
for(var e=r.charCodeAt(0).toString(16).toUpperCase();e.length<2;)e="0"+e;return"%"+e;
}return r}).join("")},addslashes:function(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/'/g,"\\'");
},capfirst:function(r){return r=""+r,r.charAt(0).toUpperCase()+r.substring(1)},center:function(r,t){
t=t||r.length,r+="";var e=t-r.length;e%2&&(r+=" ",e-=1);for(var n=0;e>n;n+=2)r=" "+r+" ";
return r},cut:function(r,t){return t=t+""||"",r+="",r.replace(new RegExp(t,"g"),"");
},_fix_ampersands:/&(?!(\w+|#\d+);)/g,fix_ampersands:function(r){return r.replace(i._fix_ampersands,"&amp;");
},floatformat:function(r,t){t=parseInt(t||-1,10),r=parseFloat(r);var e=r-r.toFixed(0);
return!e&&0>t?r.toFixed():(r=r.toFixed(Math.abs(t)),0>t?parseFloat(r)+"":r)},iriencode:function(r){
return i._urlquote(r,"/#%[]=:;$&()+,!")},linenumbers:function(r){for(var t,e=dojox.dtl.filter,n=r.split("\n"),a=[],u=(n.length+"").length,i=0;i<n.length;i++)t=n[i],
a.push(e.strings.ljust(i+1,u)+". "+dojox.dtl._base.escape(t));return a.join("\n");
},ljust:function(r,t){for(r+="",t=parseInt(t,10);r.length<t;)r+=" ";return r},lower:function(r){
return(r+"").toLowerCase()},make_list:function(r){var t=[];if("number"==typeof r&&(r+=""),
r.charAt){for(var e=0;e<r.length;e++)t.push(r.charAt(e));return t}if("object"==typeof r){
for(var n in r)t.push(r[n]);return t}return[]},rjust:function(r,t){for(r+="",t=parseInt(t,10);r.length<t;)r=" "+r;
return r},slugify:function(r){return r=r.replace(/[^\w\s-]/g,"").toLowerCase(),r.replace(/[\-\s]+/g,"-");
},_strings:{},stringformat:function(r,t){t=""+t;var e=i._strings;return e[t]||(e[t]=new n.Formatter("%"+t)),
e[t].format(r)},title:function(r){for(var t,e,n="",a=0;a<r.length;a++)e=r.charAt(a),
n+=" "!=t&&"\n"!=t&&"	"!=t&&t?e.toLowerCase():e.toUpperCase(),t=e;return n},_truncatewords:/[ \n\r\t]/,
truncatewords:function(r,t){if(t=parseInt(t,10),!t)return r;for(var e,n,a=0,u=r.length,o=0;a<r.length;a++){
if(e=r.charAt(a),i._truncatewords.test(n)){if(!i._truncatewords.test(e)&&(++o,o==t))return r.substring(0,u+1)+" ...";
}else i._truncatewords.test(e)||(u=a);n=e}return r},_truncate_words:/(&.*?;|<.*?>|(\w[\w\-]*))/g,
_truncate_tag:/<(\/)?([^ ]+?)(?: (\/)| .*?)?>/,_truncate_singlets:{br:!0,col:!0,link:!0,
base:!0,img:!0,param:!0,area:!0,hr:!0,input:!0},truncatewords_html:function(r,n){
if(n=parseInt(n,10),0>=n)return"";var a=0,u=[],o=e(r,i._truncate_words,function(r,e){
if(e){if(++a,n>a)return e;if(a==n)return e+" ..."}var o=r.match(i._truncate_tag);if(o&&!(a>=n)){
var s=o[1],f=o[2].toLowerCase();o[3];if(s||i._truncate_singlets[f]);else if(s){var l=t.indexOf(u,f);
-1!=l&&(u=u.slice(l+1))}else u.unshift(f);return r}}).join("");o=o.replace(/\s+$/g,"");
for(var s,f=0;s=u[f];f++)o+="</"+s+">";return o},upper:function(r){return r.toUpperCase();
},urlencode:function(r){return i._urlquote(r)},_urlize:/^((?:[(>]|&lt;)*)(.*?)((?:[.,)>\n]|&gt;)*)$/,
_urlize2:/^\S+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/,urlize:function(r){return i.urlizetrunc(r);
},urlizetrunc:function(r,t){return t=parseInt(t),e(r,/(\S+)/g,function(r){var e=i._urlize.exec(r);
if(!e)return r;var n=(e[1],e[2]),a=(e[3],0==n.indexOf("www.")),u=-1!=n.indexOf("@"),o=-1!=n.indexOf(":"),s=0==n.indexOf("http://"),f=0==n.indexOf("https://"),l=/[a-zA-Z0-9]/.test(n.charAt(0)),c=n.substring(n.length-4),g=n;
return t>3&&(g=g.substring(0,t-3)+"..."),a||!u&&!s&&n.length&&l&&(".org"==c||".net"==c||".com"==c)?'<a href="http://'+n+'" rel="nofollow">'+g+"</a>":s||f?'<a href="'+n+'" rel="nofollow">'+g+"</a>":u&&!a&&!o&&i._urlize2.test(n)?'<a href="mailto:'+n+'">'+n+"</a>":r;
}).join("")},wordcount:function(t){return t=r.trim(t),t?t.split(/\s+/g).length:0},
wordwrap:function(r,t){t=parseInt(t);var e=[],n=r.split(/\s+/g);if(n.length){var a=n.shift();
e.push(a);for(var u=a.length-a.lastIndexOf("\n")-1,i=0;i<n.length;i++){if(a=n[i],
-1!=a.indexOf("\n"))var o=a.split(/\n/g);else var o=[a];u+=o[0].length+1,t&&u>t?(e.push("\n"),
u=o[o.length-1].length):(e.push(" "),o.length>1&&(u=o[o.length-1].length)),e.push(a);
}}return e.join("")}}),i});