define(["dojo/_base/array","dojo/dom-style","dojo/promise/all","dojo/sniff","./transition"],function(i,n,t,e,r){
var s=function(i,s,o){var a=o&&o.reverse?-1:1;if(!o||!o.transition||!r[o.transition]||e("ie")&&e("ie")<10)return i&&n.set(i,"display","none"),
s&&n.set(s,"display",""),o.transitionDefs&&(o.transitionDefs[i.id]&&o.transitionDefs[i.id].resolve(i),
o.transitionDefs[s.id]&&o.transitionDefs[s.id].resolve(s)),new t([]);var d=[],f=[],l=2e3;
if(o.duration?l=o.duration:(l=250,"fade"===o.transition?l=600:"flip"===o.transition&&(l=200)),
i){n.set(i,"display","");var u=r[o.transition](i,{"in":!1,direction:a,duration:l,
deferred:o.transitionDefs&&o.transitionDefs[i.id]?o.transitionDefs[i.id]:null});d.push(u.deferred),
f.push(u)}if(s){n.set(s,"display","");var p=r[o.transition](s,{direction:a,duration:l,
deferred:o.transitionDefs&&o.transitionDefs[s.id]?o.transitionDefs[s.id]:null});d.push(p.deferred),
f.push(p)}return"flip"===o.transition?r.chainedPlay(f):r.groupedPlay(f),t(d)};return s;
});