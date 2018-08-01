define(["dojo/_base/kernel","dojo/_base/lang","./_base","dojo/_base/html","dojo/_base/array","dojo/_base/window","dojo/_base/json","dojo/_base/Deferred","dojo/_base/sniff","require","dojo/_base/config"],function(e,n,o,r,i,t,a,l,c,s,f){
var d=o.utils={};return n.mixin(d,{forEach:function(n,r,t){t=t||e.global,r.call(t,n),
(n instanceof o.Surface||n instanceof o.Group)&&i.forEach(n.children,function(e){
d.forEach(e,r,t)})},serialize:function(e){var n,r={},t=e instanceof o.Surface;if(t||e instanceof o.Group){
if(r.children=i.map(e.children,d.serialize),t)return r.children}else r.shape=e.getShape();
return e.getTransform&&(n=e.getTransform(),n&&(r.transform=n)),e.getStroke&&(n=e.getStroke(),
n&&(r.stroke=n)),e.getFill&&(n=e.getFill(),n&&(r.fill=n)),e.getFont&&(n=e.getFont(),
n&&(r.font=n)),r},toJson:function(e,n){return a.toJson(d.serialize(e),n)},deserialize:function(e,o){
if(o instanceof Array)return i.map(o,n.hitch(null,d.deserialize,e));var r="shape"in o?e.createShape(o.shape):e.createGroup();
return"transform"in o&&r.setTransform(o.transform),"stroke"in o&&r.setStroke(o.stroke),
"fill"in o&&r.setFill(o.fill),"font"in o&&r.setFont(o.font),"children"in o&&i.forEach(o.children,n.hitch(null,d.deserialize,r)),
r},fromJson:function(e,n){return d.deserialize(e,a.fromJson(n))},toSvg:function(e){
var n=new l;if("svg"===o.renderer)try{var i=d._cleanSvg(d._innerXML(e.rawNode));n.callback(i);
}catch(a){n.errback(a)}else{d._initSvgSerializerDeferred||d._initSvgSerializer();var c=d.toJson(e),s=function(){
try{var o=e.getDimensions(),i=o.width,a=o.height,l=d._gfxSvgProxy.document.createElement("div");
d._gfxSvgProxy.document.body.appendChild(l),t.withDoc(d._gfxSvgProxy.document,function(){
r.style(l,"width",i),r.style(l,"height",a)},this);var s=d._gfxSvgProxy[dojox._scopeName].gfx.createSurface(l,i,a),f=function(e){
try{d._gfxSvgProxy[dojox._scopeName].gfx.utils.fromJson(e,c);var o=d._cleanSvg(l.innerHTML);
e.clear(),e.destroy(),d._gfxSvgProxy.document.body.removeChild(l),n.callback(o)}catch(r){
n.errback(r)}};s.whenLoaded(null,f)}catch(g){n.errback(g)}};d._initSvgSerializerDeferred.fired>0?s():d._initSvgSerializerDeferred.addCallback(s);
}return n},_gfxSvgProxy:null,_initSvgSerializerDeferred:null,_svgSerializerInitialized:function(){
d._initSvgSerializerDeferred.callback(!0)},_initSvgSerializer:function(){if(!d._initSvgSerializerDeferred){
d._initSvgSerializerDeferred=new l;var n=t.doc.createElement("iframe");r.style(n,{
display:"none",position:"absolute",width:"1em",height:"1em",top:"-10000px"});var o;
c("ie")?n.onreadystatechange=function(){"complete"==n.contentWindow.document.readyState&&(n.onreadystatechange=function(){},
o=setInterval(function(){n.contentWindow[e.scopeMap.dojo[1]._scopeName]&&n.contentWindow[e.scopeMap.dojox[1]._scopeName].gfx&&n.contentWindow[e.scopeMap.dojox[1]._scopeName].gfx.utils&&(clearInterval(o),
n.contentWindow.parent[e.scopeMap.dojox[1]._scopeName].gfx.utils._gfxSvgProxy=n.contentWindow,
n.contentWindow.parent[e.scopeMap.dojox[1]._scopeName].gfx.utils._svgSerializerInitialized());
},50))}:n.onload=function(){n.onload=function(){},o=setInterval(function(){n.contentWindow[e.scopeMap.dojo[1]._scopeName]&&n.contentWindow[e.scopeMap.dojox[1]._scopeName].gfx&&n.contentWindow[e.scopeMap.dojox[1]._scopeName].gfx.utils&&(clearInterval(o),
n.contentWindow.parent[e.scopeMap.dojox[1]._scopeName].gfx.utils._gfxSvgProxy=n.contentWindow,
n.contentWindow.parent[e.scopeMap.dojox[1]._scopeName].gfx.utils._svgSerializerInitialized());
},50)};var i=f.dojoxGfxSvgProxyFrameUrl||s.toUrl("dojox/gfx/resources/gfxSvgProxyFrame.html");
n.setAttribute("src",i.toString()),t.body().appendChild(n)}},_innerXML:function(e){
return e.innerXML?e.innerXML:e.xml?e.xml:"undefined"!=typeof XMLSerializer?(new XMLSerializer).serializeToString(e):null;
},_cleanSvg:function(e){return e&&(-1==e.indexOf('xmlns="http://www.w3.org/2000/svg"')&&(e=e.substring(4,e.length),
e='<svg xmlns="http://www.w3.org/2000/svg"'+e),-1==e.indexOf('xmlns:xlink="http://www.w3.org/1999/xlink"')&&(e=e.substring(4,e.length),
e='<svg xmlns:xlink="http://www.w3.org/1999/xlink"'+e),-1===e.indexOf("xlink:href")&&(e=e.replace(/href\s*=/g,"xlink:href=")),
e=e.replace(/<img\b([^>]*)>/gi,"<image $1 />"),e=e.replace(/\bdojoGfx\w*\s*=\s*(['"])\w*\1/g,""),
e=e.replace(/\b__gfxObject__\s*=\s*(['"])\w*\1/g,""),e=e.replace(/[=]([^"']+?)(\s|>)/g,'="$1"$2')),
e}}),d});