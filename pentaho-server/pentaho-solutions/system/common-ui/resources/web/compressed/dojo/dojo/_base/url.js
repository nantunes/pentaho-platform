define(["./kernel"],function(t){var h=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),e=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$"),r=function(){
for(var t=null,i=arguments,s=[i[0]],a=1;a<i.length;a++)if(i[a]){var n=new r(i[a]+""),u=new r(s[0]+"");
if(""!=n.path||n.scheme||n.authority||n.query){if(!n.scheme&&(n.scheme=u.scheme,!n.authority&&(n.authority=u.authority,
"/"!=n.path.charAt(0)))){for(var p=u.path.substring(0,u.path.lastIndexOf("/")+1)+n.path,o=p.split("/"),c=0;c<o.length;c++)"."==o[c]?c==o.length-1?o[c]="":(o.splice(c,1),
c--):c>0&&(1!=c||""!=o[0])&&".."==o[c]&&".."!=o[c-1]&&(c==o.length-1?(o.splice(c,1),
o[c-1]=""):(o.splice(c-1,2),c-=2));n.path=o.join("/")}}else n.fragment!=t&&(u.fragment=n.fragment),
n=u;s=[],n.scheme&&s.push(n.scheme,":"),n.authority&&s.push("//",n.authority),s.push(n.path),
n.query&&s.push("?",n.query),n.fragment&&s.push("#",n.fragment)}this.uri=s.join("");
var f=this.uri.match(h);this.scheme=f[2]||(f[1]?"":t),this.authority=f[4]||(f[3]?"":t),
this.path=f[5],this.query=f[7]||(f[6]?"":t),this.fragment=f[9]||(f[8]?"":t),this.authority!=t&&(f=this.authority.match(e),
this.user=f[3]||t,this.password=f[4]||t,this.host=f[6]||f[7],this.port=f[9]||t)};return r.prototype.toString=function(){
return this.uri},t._Url=r});