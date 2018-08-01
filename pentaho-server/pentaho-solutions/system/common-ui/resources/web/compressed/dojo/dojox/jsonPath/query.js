dojo.provide("dojox.jsonPath.query"),dojox.jsonPath.query=function(obj,expr,arg){
function _str(e){return strs[e]}var re=dojox.jsonPath._regularExpressions;arg||(arg={});
var strs=[],_strName=_str.name,acc;if("PATH"==arg.resultType&&"RESULT"==arg.evalType)throw Error("RESULT based evaluation not supported with PATH based results");
var P={resultType:arg.resultType||"VALUE",normalize:function(expr){var subx=[];expr=expr.replace(/'([^']|'')*'/g,function(t){
return _strName+"("+(strs.push(eval(t))-1)+")"});for(var ll=-1;ll!=subx.length;)ll=subx.length,
expr=expr.replace(/(\??\([^\(\)]*\))/g,function(e){return"#"+(subx.push(e)-1)});for(expr=expr.replace(/[\['](#[0-9]+)[\]']/g,"[$1]").replace(/'?\.'?|\['?/g,";").replace(/;;;|;;/g,";..;").replace(/;$|'?\]|'$/g,""),
ll=-1;ll!=expr;)ll=expr,expr=expr.replace(/#([0-9]+)/g,function(e,r){return subx[r];
});return expr.split(";")},asPaths:function(e){for(var r=0;r<e.length;r++){for(var t="$",a=e[r],n=1,s=a.length;s>n;n++)t+=/^[0-9*]+$/.test(a[n])?"["+a[n]+"]":"['"+a[n]+"']";
e[r]=t}return e},exec:function(e,r,t){function a(e,r,t){e&&e.hasOwnProperty(r)&&"VALUE"!=P.resultType&&c.push(u.concat([r])),
t?p=e[r]:e&&e.hasOwnProperty(r)&&p.push(e[r])}function n(e){p.push(e),c.push(u),P.walk(e,function(r){
if("object"==typeof e[r]){var t=u;u=u.concat(r),n(e[r]),u=t}})}function s(e,r){if(r instanceof Array){
var t=r.length,n=0,s=t,o=1;e.replace(/^(-?[0-9]*):(-?[0-9]*):?(-?[0-9]*)$/g,function(e,r,t,a){
n=parseInt(r||n),s=parseInt(t||s),o=parseInt(a||o)}),n=0>n?Math.max(0,n+t):Math.min(t,n),
s=0>s?Math.max(0,s+t):Math.min(t,s);for(var l=n;s>l;l+=o)a(r,l)}}function o(e){var r=i.match(/^_str\(([0-9]+)\)$/);
return r?strs[r[1]]:e}function l(e){if(/^\(.*?\)$/.test(i))a(e,P.eval(i,e),t);else if("*"===i)P.walk(e,t&&e instanceof Array?function(r){
P.walk(e[r],function(t){a(e[r],t)})}:function(r){a(e,r)});else if(".."===i)n(e);else if(/,/.test(i))for(var r=i.split(/'?,'?/),l=0,u=r.length;u>l;l++)a(e,o(r[l]));else/^\?\(.*?\)$/.test(i)?P.walk(e,function(r){
P.eval(i.replace(/^\?\((.*?)\)$/,"$1"),e[r])&&a(e,r)}):/^(-?[0-9]*):(-?[0-9]*):?([0-9]*)$/.test(i)?s(i,e):(i=o(i),
t&&e instanceof Array&&!/^[0-9*]+$/.test(i)?P.walk(e,function(r){a(e[r],i)}):a(e,i,t));
}for(var u=["$"],p=t?r:[r],c=[u];e.length;){var i=e.shift();if(null===(r=p)||void 0===r)return r;
p=[];var f=c;c=[],t?l(r):P.walk(r,function(e){u=f[e]||u,l(r[e])})}if("BOTH"==P.resultType){
c=P.asPaths(c);for(var h=[],v=0;v<c.length;v++)h.push({path:c[v],value:p[v]});return h;
}return"PATH"==P.resultType?P.asPaths(c):p},walk:function(e,r){if(e instanceof Array)for(var t=0,a=e.length;a>t;t++)t in e&&r(t);else if("object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&r(n);
},eval:function(x,v){try{return $&&v&&eval(x.replace(/@/g,"v"))}catch(e){throw new SyntaxError("jsonPath: "+e.message+": "+x.replace(/@/g,"v").replace(/\^/g,"_a"));
}}},$=obj;return expr&&obj?P.exec(P.normalize(expr).slice(1),obj,"RESULT"==arg.evalType):!1;
};