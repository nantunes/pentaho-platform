define(["../_base/config","../_base/json","../_base/kernel","../_base/lang","../_base/xhr","../sniff","../_base/window","../dom","../dom-construct","../query","require","../aspect","../request/iframe"],function(e,r,t,o,n,a,s,i,l,u,f,c,d){
t.deprecated("dojo/io/iframe","Use dojo/request/iframe.","2.0");var m=d._iframeName;
m=m.substring(0,m.lastIndexOf("_"));var h=o.delegate(d,{create:function(){return h._frame=d.create.apply(d,arguments);
},get:null,post:null,send:function(o){var a,s=n._ioSetArgs(o,function(e){a&&a.cancel();
},function(e){var o=null,n=e.ioArgs;try{var s=n.handleAs;"xml"===s||"html"===s?o=a.response.data:(o=a.response.text,
"json"===s?o=r.fromJson(o):"javascript"===s&&(o=t.eval(o)))}catch(i){o=i}return o;
},function(e,r){return r.ioArgs._hasError=!0,e}),l=s.ioArgs,u="GET",f=i.byId(o.form);
o.method&&"POST"===o.method.toUpperCase()&&f&&(u="POST");var m={method:u,handleAs:"json"===o.handleAs||"javascript"===o.handleAs?"text":o.handleAs,
form:o.form,query:f?null:o.content,data:f?o.content:null,timeout:o.timeout,ioArgs:l
};if(m.method&&(m.method=m.method.toUpperCase()),e.ioPublish&&t.publish&&l.args.ioPublish!==!1)var h=c.after(d,"_notifyStart",function(e){
e.options.ioArgs===l&&(h.remove(),n._ioNotifyStart(s))},!0);return a=d(l.url,m,!0),
l._callNext=a._callNext,a.then(function(){s.resolve(s)}).otherwise(function(e){s.ioArgs.error=e,
s.reject(e)}),s},_iframeOnload:s.global[m+"_onload"]});return o.setObject("dojo.io.iframe",h),
h});