define(["require","dojo/Deferred"],function(e,r){return function(n,o){var i=n.nls;
if(i){var f,t=new r;try{var d=i,u=d.indexOf("./");u>=0&&(d=i.substring(u+2)),f=e.on("error",function(e){
t.isResolved()||t.isRejected()||e.info[0]&&e.info[0].indexOf(d)>=0&&(t.resolve(!1),
f.remove())}),0==i.indexOf("./")&&(i="app/"+i),e(["dojo/i18n!"+i],function(e){t.resolve(e),
f.remove()})}catch(v){t.reject(v),f&&f.remove()}return t}return!1}});