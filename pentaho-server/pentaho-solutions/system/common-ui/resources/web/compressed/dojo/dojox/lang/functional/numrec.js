dojo.provide("dojox.lang.functional.numrec"),dojo.require("dojox.lang.functional.lambda"),
dojo.require("dojox.lang.functional.util"),function(){var n=dojox.lang.functional,o=n.inlineLambda,a=["_r","_i"];
n.numrec=function(i,r){var t,_,e={},l=function(n){e[n]=1};"string"==typeof r?_=o(r,a,l):(t=n.lambda(r),
_="_a.call(this, _r, _i)");var u=n.keys(e),c=new Function(["_x"],"var _t=arguments.callee,_r=_t.t,_i".concat(u.length?","+u.join(","):"",t?",_a=_t.a":"",";for(_i=1;_i<=_x;++_i){_r=",_,"}return _r"));
return c.t=i,t&&(c.a=t),c}}();