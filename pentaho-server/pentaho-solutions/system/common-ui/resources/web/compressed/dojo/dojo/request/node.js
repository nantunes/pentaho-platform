define(["require","./util","./handlers","../errors/RequestTimeoutError","../node!http","../node!https","../node!url","../node!stream"],function(e,t,o,s,r,n,a,i){
function p(e,i){var p=t.parseArgs(e,t.deepCreate(d,i),i&&i.data instanceof u);e=p.url,
i=p.options;var c=t.deferred(p,function(e,t){t.clientRequest.abort()});e=a.parse(e);
var h=p.requestOptions={hostname:e.hostname,port:e.port,socketPath:i.socketPath,method:i.method,
headers:i.headers,agent:i.agent,pfx:i.pfx,key:i.key,passphrase:i.passphrase,cert:i.cert,
ca:i.ca,ciphers:i.ciphers,rejectUnauthorized:i.rejectUnauthorized===!1?!1:!0};e.path&&(h.path=e.path),
(i.user||i.password)&&(h.auth=(i.user||"")+":"+(i.password||""));var l=p.clientRequest=("https:"===e.protocol?n:r).request(h);
if(i.socketOptions&&("timeout"in i.socketOptions&&l.setTimeout(i.socketOptions.timeout),
"noDelay"in i.socketOptions&&l.setNoDelay(i.socketOptions.noDelay),"keepAlive"in i.socketOptions)){
var m=i.socketOptions.keepAlive;l.setKeepAlive(m>=0,m||0)}if(l.on("socket",function(){
p.hasSocket=!0,c.progress(p)}),l.on("response",function(e){p.clientResponse=e,p.status=e.statusCode,
p.getHeader=function(t){return e.headers[t.toLowerCase()]||null};var t=[];e.on("data",function(e){
t.push(e)}),e.on("end",function(){f&&clearTimeout(f),p.text=t.join("");try{o(p),c.resolve(p);
}catch(e){c.reject(e)}})}),l.on("error",c.reject),i.data?"string"==typeof i.data?l.end(i.data):i.data.pipe(l):l.end(),
i.timeout)var f=setTimeout(function(){c.cancel(new s(p))},i.timeout);return c.promise;
}var c,u=i.Stream,d={method:"GET",query:null,data:c,headers:{}};return t.addCommonMethods(p),
p});