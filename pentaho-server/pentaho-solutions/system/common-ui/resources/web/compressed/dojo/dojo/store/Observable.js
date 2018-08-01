define(["../_base/kernel","../_base/lang","../when","../_base/array"],function(e,t,n,r){
var i=function(e){function i(t,r){var i=e[t];i&&(e[t]=function(e){if(s)return i.apply(this,arguments);
s=!0;try{var t=i.apply(this,arguments);return n(t,function(t){r("object"==typeof t&&t||e);
}),t}finally{s=!1}})}var a,o=[],f=0;e=t.delegate(e),e.notify=function(e,t){f++;for(var n=o.slice(),r=0,i=n.length;i>r;r++)n[r](e,t);
};var u=e.query;e.query=function(i,s){s=s||{};var c=u.apply(this,arguments);if(c&&c.forEach){
var l=t.mixin({},s);delete l.start,delete l.count;var v,y=e.queryEngine&&e.queryEngine(i,l),d=f,h=[];
c.observe=function(t,i){1==h.push(t)&&o.push(v=function(t,o){n(c,function(n){var u,c,l,v=n.length!=s.count;
if(++d!=f)throw new Error("Query is out of date, you must observe() the query prior to any data modifications");
var p,g=-1,b=-1;if(o!==a)for(u=0,c=n.length;c>u;u++){var m=n[u];if(e.getIdentity(m)==o){
p=m,g=u,(y||!t)&&n.splice(u,1);break}}if(y){if(t&&(y.matches?y.matches(t):y([t]).length)){
var q=g>-1?g:n.length;n.splice(q,0,t),b=r.indexOf(y(n),t),n.splice(q,1),s.start&&0==b||!v&&b==n.length?b=-1:n.splice(b,0,t);
}}else t&&(o!==a?b=g:s.start||(b=e.defaultIndex||0,n.splice(b,0,t)));if((g>-1||b>-1)&&(i||!y||g!=b)){
var x=h.slice();for(u=0;l=x[u];u++)l(t||p,g,b)}})});var u={};return u.remove=u.cancel=function(){
var e=r.indexOf(h,t);e>-1&&(h.splice(e,1),h.length||o.splice(r.indexOf(o,v),1))},
u}}return c};var s;return i("put",function(t){e.notify(t,e.getIdentity(t))}),i("add",function(t){
e.notify(t)}),i("remove",function(t){e.notify(void 0,t)}),e};return t.setObject("dojo.store.Observable",i),
i});