define(["dojo/_base/lang","../_base"],function(e,r){var n=e.getObject("filter.htmlstrings",!0,r);
return e.mixin(n,{_linebreaksrn:/(\r\n|\n\r)/g,_linebreaksn:/\n{2,}/g,_linebreakss:/(^\s+|\s+$)/g,
_linebreaksbr:/\n/g,_removetagsfind:/[a-z0-9]+/g,_striptags:/<[^>]*?>/g,linebreaks:function(e){
var r=[],s=n;e=e.replace(s._linebreaksrn,"\n");for(var a=e.split(s._linebreaksn),i=0;i<a.length;i++){
var t=a[i].replace(s._linebreakss,"").replace(s._linebreaksbr,"<br />");r.push("<p>"+t+"</p>");
}return r.join("\n\n")},linebreaksbr:function(e){var r=n;return e.replace(r._linebreaksrn,"\n").replace(r._linebreaksbr,"<br />");
},removetags:function(e,r){for(var s,a=n,i=[];s=a._removetagsfind.exec(r);)i.push(s[0]);
return i="("+i.join("|")+")",e.replace(new RegExp("</?s*"+i+"s*[^>]*>","gi"),"")},
striptags:function(e){return e.replace(dojox.dtl.filter.htmlstrings._striptags,"");
}}),n});