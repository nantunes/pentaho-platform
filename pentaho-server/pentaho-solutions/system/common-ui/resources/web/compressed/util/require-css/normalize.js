define([],function(){function t(t,u,i){if(t.match(e)||t.match(a))return t;t=n(t);var o=i.match(a),c=u.match(a);
return!c||o&&o[1]==c[1]&&o[2]==c[2]?s(r(t,u),i):r(t,u)}function r(t,r){if("./"==t.substr(0,2)&&(t=t.substr(2)),
t.match(e)||t.match(a))return t;var s=r.split("/"),u=t.split("/");for(s.pop();curPart=u.shift();)".."==curPart?s.pop():s.push(curPart);
return s.join("/")}function s(t,r){var s=r.split("/");for(s.pop(),r=s.join("/")+"/",
i=0;r.substr(i,1)==t.substr(i,1);)i++;for(;"/"!=r.substr(i,1);)i--;r=r.substr(i+1),
t=t.substr(i+1),s=r.split("/");var u=t.split("/");for(out="";s.shift();)out+="../";
for(;curPart=u.shift();)out+=curPart+"/";return out.substr(0,out.length-1)}var u=/([^:])\/+/g,n=function(t){
return t.replace(u,"$1/")},a=/[^\:\/]*:\/\/([^\/])*/,e=/^(\/|data:)/,o=function(r,s,u){
s=n(s),u=n(u);for(var i,a,r,e=/@import\s*("([^"]*)"|'([^']*)')|url\s*\((?!#)\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/gi;i=e.exec(r);){
a=i[3]||i[2]||i[5]||i[6]||i[4];var o;o=t(a,s,u);var c=i[5]||i[6]?1:0;r=r.substr(0,e.lastIndex-a.length-c-1)+o+r.substr(e.lastIndex-c-1),
e.lastIndex=e.lastIndex+(o.length-a.length)}return r};return o.convertURIBase=t,o.absoluteURI=r,
o.relativeURI=s,o});