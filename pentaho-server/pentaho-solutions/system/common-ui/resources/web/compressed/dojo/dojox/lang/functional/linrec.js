dojo.provide("dojox.lang.functional.linrec"),dojo.require("dojox.lang.functional.lambda"),
dojo.require("dojox.lang.functional.util"),function(){var a=dojox.lang.functional,n=a.inlineLambda,t="_x",_=["_r","_y.a"];
a.linrec=function(o,l,r,i){var e,c,y,d,u,f,p,x,g={},s={},b=function(a){g[a]=1};"string"==typeof o?u=n(o,t,b):(e=a.lambda(o),
u="_c.apply(this, _x)",s["_c=_t.c"]=1),"string"==typeof l?f=n(l,t,b):(c=a.lambda(l),
f="_t.t.apply(this, _x)"),"string"==typeof r?p=n(r,t,b):(y=a.lambda(r),p="_b.apply(this, _x)",
s["_b=_t.b"]=1),"string"==typeof i?x=n(i,_,b):(d=a.lambda(i),x="_a.call(this, _r, _y.a)",
s["_a=_t.a"]=1);var j=a.keys(g),m=a.keys(s),h=new Function([],"var _x=arguments,_y,_r".concat(j.length?","+j.join(","):"",m.length?",_t=_x.callee,"+m.join(","):c?",_t=_x.callee":"",";for(;!",u,";_x=",p,"){_y={p:_y,a:_x}}_r=",f,";for(;_y;_y=_y.p){_r=",x,"}return _r"));
return e&&(h.c=e),c&&(h.t=c),y&&(h.b=y),d&&(h.a=d),h}}();