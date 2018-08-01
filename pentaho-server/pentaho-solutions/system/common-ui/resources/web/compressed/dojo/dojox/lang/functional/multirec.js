dojo.provide("dojox.lang.functional.multirec"),dojo.require("dojox.lang.functional.lambda"),
dojo.require("dojox.lang.functional.util"),function(){var _=dojox.lang.functional,t=_.inlineLambda,a="_x",n=["_y.r","_y.o"];
_.multirec=function(o,r,i,e){var l,y,c,u,f,g,d,p,s={},x={},b=function(_){s[_]=1};"string"==typeof o?f=t(o,a,b):(l=_.lambda(o),
f="_c.apply(this, _x)",x["_c=_t.c"]=1),"string"==typeof r?g=t(r,a,b):(y=_.lambda(r),
g="_t.apply(this, _x)"),"string"==typeof i?d=t(i,a,b):(c=_.lambda(i),d="_b.apply(this, _x)",
x["_b=_t.b"]=1),"string"==typeof e?p=t(e,n,b):(u=_.lambda(e),p="_a.call(this, _y.r, _y.o)",
x["_a=_t.a"]=1);var m=_.keys(s),h=_.keys(x),j=new Function([],"var _y={a:arguments},_x,_r,_z,_i".concat(m.length?","+m.join(","):"",h.length?",_t=arguments.callee,"+h.join(","):"",y?h.length?",_t=_t.t":"_t=arguments.callee.t":"",";for(;;){for(;;){if(_y.o){_r=",p,";break}_x=_y.a;if(",f,"){_r=",g,";break}_y.o=_x;_x=",d,";_y.r=[];_z=_y;for(_i=_x.length-1;_i>=0;--_i){_y={p:_y,a:_x[_i],z:_z}}}if(!(_z=_y.z)){return _r}_z.r.push(_r);_y=_y.p}"));
return l&&(j.c=l),y&&(j.t=y),c&&(j.b=c),u&&(j.a=u),j}}();