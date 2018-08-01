dojo.provide("dojox.lang.functional.binrec"),dojo.require("dojox.lang.functional.lambda"),
dojo.require("dojox.lang.functional.util"),function(){var _=dojox.lang.functional,a=_.inlineLambda,r="_x",n=["_z.r","_r","_z.a"];
_.binrec=function(t,i,o,l){var e,c,p,y,d,x,u,f,z={},b={},g=function(_){z[_]=1};"string"==typeof t?d=a(t,r,g):(e=_.lambda(t),
d="_c.apply(this, _x)",b["_c=_t.c"]=1),"string"==typeof i?x=a(i,r,g):(c=_.lambda(i),
x="_t.apply(this, _x)"),"string"==typeof o?u=a(o,r,g):(p=_.lambda(o),u="_b.apply(this, _x)",
b["_b=_t.b"]=1),"string"==typeof l?f=a(l,n,g):(y=_.lambda(l),f="_a.call(this, _z.r, _r, _z.a)",
b["_a=_t.a"]=1);var h=_.keys(z),s=_.keys(b),j=new Function([],"var _x=arguments,_y,_z,_r".concat(h.length?","+h.join(","):"",s.length?",_t=_x.callee,"+s.join(","):"",c?s.length?",_t=_t.t":"_t=_x.callee.t":"",";while(!",d,"){_r=",u,";_y={p:_y,a:_r[1]};_z={p:_z,a:_x};_x=_r[0]}for(;;){do{_r=",x,';if(!_z)return _r;while("r" in _z){_r=',f,";if(!(_z=_z.p))return _r}_z.r=_r;_x=_y.a;_y=_y.p}while(",d,");do{_r=",u,";_y={p:_y,a:_r[1]};_z={p:_z,a:_x};_x=_r[0]}while(!",d,")}"));
return e&&(j.c=e),c&&(j.t=c),p&&(j.b=p),y&&(j.a=y),j}}();