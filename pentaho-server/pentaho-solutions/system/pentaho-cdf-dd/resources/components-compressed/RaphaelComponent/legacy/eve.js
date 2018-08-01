!function(n){var e,r="0.2.4",f="hasOwnProperty",t=/[\.\/]/,i="*",o=function(){},l=function(n,e){
return n-e},u={n:{}},p=function(n,r){var f,t=Array.prototype.slice.call(arguments,2),i=p.listeners(n),o=0,u=!1,s=[],a={};
e=n;for(var h=0,d=i.length;d>h;h++)"zIndex"in i[h]&&(s.push(i[h].zIndex),i[h].zIndex<0&&(a[i[h].zIndex]=i[h]));
for(s.sort(l);s[o]<0;)if(f=a[s[o++]],f.apply(r,t)===u)return u;for(h=0;d>h;h++)if(f=i[h],
"zIndex"in f)if(f.zIndex==s[o]){if(f.apply(r,t)===u)return u;do if(o++,f=a[s[o]],
f&&f.apply(r,t)===u)return u;while(f)}else a[f.zIndex]=f;else if(f.apply(r,t)===u)return u;
};p.listeners=function(n){var e,r,f,o,l,p,s,a,h=n.split(t),d=u,c=[d],g=[];for(o=0,
l=h.length;l>o;o++){for(a=[],p=0,s=c.length;s>p;p++)for(d=c[p].n,r=[d[h[o]],d[i]],
f=2;f--;)e=r[f],e&&(a.push(e),g=g.concat(e.f||[]));c=a}return g},p.on=function(n,e){
for(var r=n.split(t),f=u,i=0,l=r.length;l>i;i++)f=f.n,!f[r[i]]&&(f[r[i]]={n:{}}),
f=f[r[i]];for(f.f=f.f||[],i=0,l=f.f.length;l>i;i++)if(f.f[i]==e)return o;return f.f.push(e),
function(n){+n==+n&&(e.zIndex=+n)}},p.nt=function(n){return n?new RegExp("(?:\\.|\\/|^)"+n+"(?:\\.|\\/|$)").test(e):e;
},p.unbind=function(n,e){for(var r,o,l,p=n.split(t),s=[u],a=0,h=p.length;h>a;a++)for(var d=0;d<s.length;d+=l.length-2){
if(l=[d,1],r=s[d].n,p[a]!=i)r[p[a]]&&l.push(r[p[a]]);else for(o in r)r[f](o)&&l.push(r[o]);
s.splice.apply(s,l)}for(a=0,h=s.length;h>a;a++)for(r=s[a];r.n;){if(e){if(r.f){for(a=0,
h=r.f.length;h>a;a++)if(r.f[a]==e){r.f.splice(a,1);break}!r.f.length&&delete r.f}
for(o in r.n)if(r.n[f](o)&&r.n[o].f){var c=r.n[o].f;for(a=0,h=c.length;h>a;a++)if(c[a]==e){
c.splice(a,1);break}!c.length&&delete r.n[o].f}}else{delete r.f;for(o in r.n)r.n[f](o)&&r.n[o].f&&delete r.n[o].f;
}r=r.n}},p.version=r,p.toString=function(){return"You are running Eve "+r},"undefined"!=typeof module&&module.exports?module.exports=p:n.eve=p;
}(this);