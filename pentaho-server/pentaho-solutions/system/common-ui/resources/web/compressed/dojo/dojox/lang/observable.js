if(dojo.provide("dojox.lang.observable"),dojo.experimental("dojox.lang.observable"),
dojox.lang.observable=function(e,t,n,o){return dojox.lang.makeObservable(t,n,o)(e);
},dojox.lang.makeObservable=function(e,t,n,o){function r(e,t,o){return function(){
return n(e,t,o,arguments)}}if(o=o||{},n=n||function(e,t,n,o){return t[n].apply(e,o);
},dojox.lang.lettableWin){var a=dojox.lang.makeObservable;a.inc=(a.inc||0)+1;var l="gettable_"+a.inc;
dojox.lang.lettableWin[l]=e;var i="settable_"+a.inc;dojox.lang.lettableWin[i]=t;var c={};
return function(e){if(e.__observable)return e.__observable;if(e.data__)throw new Error("Can wrap an object that is already wrapped");
var t,n,d=[];for(t in o)d.push(t);var u={type:1,event:1};for(t in e)!t.match(/^[a-zA-Z][\w\$_]*$/)||t in o||t in u||d.push(t);
var b,_=d.join(","),f=c[_];if(!f){var s="dj_lettable_"+a.inc++,v=s+"_dj_getter",p=["Class "+s,"	Public data__"];
for(t=0,n=d.length;n>t;t++){b=d[t];var m=typeof e[b];"function"==m||o[b]?p.push("  Public "+b):"object"!=m&&p.push("	Public Property Let "+b+"(val)","		Call "+i+'(me.data__,"'+b+'",val)',"	End Property","	Public Property Get "+b,"		"+b+" = "+l+'(me.data__,"'+b+'")',"	End Property");
}p.push("End Class"),p.push("Function "+v+"()","	Dim tmp","	Set tmp = New "+s,"	Set "+v+" = tmp","End Function"),
dojox.lang.lettableWin.vbEval(p.join("\n")),c[_]=f=function(){return dojox.lang.lettableWin.construct(v);
}}console.log("starting5");var g=f();g.data__=e,console.log("starting6");try{e.__observable=g;
}catch(j){}for(t=0,n=d.length;n>t;t++){b=d[t];try{var y=e[b]}catch(j){console.log("error ",b,j);
}("function"==typeof y||o[b])&&(g[b]=r(g,e,b))}return g}}return function(n){if(n.__observable)return n.__observable;
var a=n instanceof Array?[]:{};a.data__=n;for(var l in n)"_"!=l.charAt(0)&&("function"==typeof n[l]?a[l]=r(a,n,l):"object"!=typeof n[l]&&!function(o){
a.__defineGetter__(o,function(){return e(n,o)}),a.__defineSetter__(o,function(e){
return t(n,o,e)})}(l));for(l in o)a[l]=r(a,n,l);return n.__observable=a,a}},!{}.__defineGetter__){
if(!dojo.isIE)throw new Error("This browser does not support getters and setters");
var frame;document.body?(frame=document.createElement("iframe"),document.body.appendChild(frame)):(document.write("<iframe id='dj_vb_eval_frame'></iframe>"),
frame=document.getElementById("dj_vb_eval_frame")),frame.style.display="none";var doc=frame.contentWindow.document;
dojox.lang.lettableWin=frame.contentWindow,doc.write('<html><head><script language="VBScript" type="text/VBScript">Function vb_global_eval(code)ExecuteGlobal(code)End Function</script><script type="text/javascript">function vbEval(code){ \nreturn vb_global_eval(code);}function construct(name){ \nreturn window[name]();}</script></head><body>vb-eval</body></html>'),
doc.close()}dojox.lang.ReadOnlyProxy=dojox.lang.makeObservable(function(e,t){return e[t];
},function(e,t,n){});