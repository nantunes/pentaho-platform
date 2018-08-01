dojo.provide("dojox.lang.functional.tailrec"),dojo.require("dojox.lang.functional.lambda"),
dojo.require("dojox.lang.functional.util"),function(){var t=dojox.lang.functional,n=t.inlineLambda,a="_x";
t.tailrec=function(o,l,e){var i,_,c,r,u,d,x={},b={},f=function(t){x[t]=1};"string"==typeof o?r=n(o,a,f):(i=t.lambda(o),
r="_c.apply(this, _x)",b["_c=_t.c"]=1),"string"==typeof l?u=n(l,a,f):(_=t.lambda(l),
u="_t.t.apply(this, _x)"),"string"==typeof e?d=n(e,a,f):(c=t.lambda(e),d="_b.apply(this, _x)",
b["_b=_t.b"]=1);var g=t.keys(x),p=t.keys(b),j=new Function([],"var _x=arguments,_t=_x.callee,_c=_t.c,_b=_t.b".concat(g.length?","+g.join(","):"",p.length?",_t=_x.callee,"+p.join(","):_?",_t=_x.callee":"",";for(;!",r,";_x=",d,");return ",u));
return i&&(j.c=i),_&&(j.t=_),c&&(j.b=c),j}}();