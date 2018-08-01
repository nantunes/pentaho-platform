define(["dojo/_base/kernel","dojo/_base/array"],function(e){return e.getObject("xml",!0,dojox),
dojox.xml.DomParser=new function(){function t(){return new function(){var e={};this.nodeType=p.DOCUMENT,
this.nodeName="#document",this.namespaces={},this._nsPaths={},this.childNodes=[],
this.documentElement=null,this._add=function(t){"undefined"!=typeof t.id&&(e[t.id]=t);
},this._remove=function(t){e[t]&&delete e[t]},this.byId=this.getElementById=function(t){
return e[t]},this.byName=this.getElementsByTagName=n,this.byNameNS=this.getElementsByTagNameNS=a,
this.childrenByName=r,this.childrenByNameNS=s}}function n(t){function n(t,a,r){e.forEach(t.childNodes,function(e){
e.nodeType==p.ELEMENT&&("*"==a?r.push(e):e.nodeName==a&&r.push(e),n(e,a,r))})}var a=[];
return n(this,t,a),a}function a(t,n){function a(t,n,r,s){e.forEach(t.childNodes,function(e){
e.nodeType==p.ELEMENT&&("*"==n&&e.ownerDocument._nsPaths[r]==e.namespace?s.push(e):e.localName==n&&e.ownerDocument._nsPaths[r]==e.namespace&&s.push(e),
a(e,n,r,s))})}n||(n=D);var r=[];return a(this,t,n,r),r}function r(t){var n=[];return e.forEach(this.childNodes,function(e){
e.nodeType==p.ELEMENT&&("*"==t?n.push(e):e.nodeName==t&&n.push(e))}),n}function s(t,n){
var a=[];return e.forEach(this.childNodes,function(e){e.nodeType==p.ELEMENT&&("*"==t&&e.ownerDocument._nsPaths[n]==e.namespace?a.push(e):e.localName==t&&e.ownerDocument._nsPaths[n]==e.namespace&&a.push(e));
}),a}function i(e){return{nodeType:p.TEXT,nodeName:"#text",nodeValue:e.replace(v," ").replace(b,">").replace(y,"<").replace(_,"'").replace(x,'"').replace(A,"&")
}}function o(e){for(var t=0;t<this.attributes.length;t++)if(this.attributes[t].nodeName==e)return this.attributes[t].nodeValue;
return null}function l(e,t){for(var n=0;n<this.attributes.length;n++)if(this.ownerDocument._nsPaths[t]==this.attributes[n].namespace&&this.attributes[n].localName==e)return this.attributes[n].nodeValue;
return null}function u(e,t){for(var n=null,a=0;a<this.attributes.length;a++)if(this.attributes[a].nodeName==e){
n=this.attributes[a].nodeValue,this.attributes[a].nodeValue=t;break}"id"==e&&(null!=n&&this.ownerDocument._remove(n),
this.ownerDocument._add(this))}function h(e,t,n){for(var a=0;a<this.attributes.length;a++)if(this.ownerDocument._nsPaths[n]==this.attributes[a].namespace&&this.attributes[a].localName==e)return void(this.attributes[a].nodeValue=t);
}function c(){var e=this.parentNode;if(e)for(var t=0;t<e.childNodes.length;t++)if(e.childNodes[t]==this&&t>0)return e.childNodes[t-1];
return null}function d(){var e=this.parentNode;if(e)for(var t=0;t<e.childNodes.length;t++)if(e.childNodes[t]==this&&t+1<e.childNodes.length)return e.childNodes[t+1];
return null}var p={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,PROCESSING_INSTRUCTION:7,
COMMENT:8,DOCUMENT:9},N=/<([^>\/\s+]*)([^>]*)>([^<]*)/g,f=/([^=]*)=(("([^"]*)")|('([^']*)'))/g,m=/<!ENTITY\s+([^"]*)\s+"([^"]*)">/g,T=/<!\[CDATA\[([\u0001-\uFFFF]*?)\]\]>/g,g=/<!--([\u0001-\uFFFF]*?)-->/g,E=/^\s+|\s+$/g,v=/\s+/g,b=/\&gt;/g,y=/\&lt;/g,x=/\&quot;/g,_=/\&apos;/g,A=/\&amp;/g,D="_def_";
this.parse=function(e){var S=t();if(null==e)return S;if(0==e.length)return S;if(e.indexOf("<!ENTITY")>0){
var I,O=[];if(m.test(e)){for(m.lastIndex=0;null!=(I=m.exec(e));)O.push({entity:"&"+I[1].replace(E,"")+";",
expression:I[2]});for(var C=0;C<O.length;C++)e=e.replace(new RegExp(O[C].entity,"g"),O[C].expression);
}}for(var M,P=[];null!=(M=T.exec(e));)P.push(M[1]);for(var C=0;C<P.length;C++)e=e.replace(P[C],C);
for(var w,B=[];null!=(w=g.exec(e));)B.push(w[1]);for(C=0;C<B.length;C++)e=e.replace(B[C],C);
for(var V,F=S;null!=(V=N.exec(e));)if("/"==V[2].charAt(0)&&V[2].replace(E,"").length>1){
F.parentNode&&(F=F.parentNode);var L=(V[3]||"").replace(E,"");L.length>0&&F.childNodes.push(i(L));
}else if(V[1].length>0)if("?"==V[1].charAt(0)){var R=V[1].substr(1),j=V[2].substr(0,V[2].length-2);
F.childNodes.push({nodeType:p.PROCESSING_INSTRUCTION,nodeName:R,nodeValue:j})}else if("!"==V[1].charAt(0)){
if(0==V[1].indexOf("![CDATA[")){var U=parseInt(V[1].replace("![CDATA[","").replace("]]",""));
F.childNodes.push({nodeType:p.CDATA_SECTION,nodeName:"#cdata-section",nodeValue:P[U]
})}else if("!--"==V[1].substr(0,3)){var U=parseInt(V[1].replace("!--","").replace("--",""));
F.childNodes.push({nodeType:p.COMMENT,nodeName:"#comment",nodeValue:B[U]})}}else{
var R=V[1].replace(E,""),k={nodeType:p.ELEMENT,nodeName:R,localName:R,namespace:D,
ownerDocument:S,attributes:[],parentNode:null,childNodes:[]};if(R.indexOf(":")>-1){
var G=R.split(":");k.namespace=G[0],k.localName=G[1]}k.byName=k.getElementsByTagName=n,
k.byNameNS=k.getElementsByTagNameNS=a,k.childrenByName=r,k.childrenByNameNS=s,k.getAttribute=o,
k.getAttributeNS=l,k.setAttribute=u,k.setAttributeNS=h,k.previous=k.previousSibling=c,
k.next=k.nextSibling=d;for(var X;null!=(X=f.exec(V[2]));)if(X.length>0){var R=X[1].replace(E,""),U=(X[4]||X[6]||"").replace(v," ").replace(b,">").replace(y,"<").replace(_,"'").replace(x,'"').replace(A,"&");
if(0==R.indexOf("xmlns"))if(R.indexOf(":")>0){var Y=R.split(":");S.namespaces[Y[1]]=U,
S._nsPaths[U]=Y[1]}else S.namespaces[D]=U,S._nsPaths[U]=D;else{var q=R,Y=D;if(R.indexOf(":")>0){
var G=R.split(":");q=G[1],Y=G[0]}k.attributes.push({nodeType:p.ATTRIBUTE,nodeName:R,
localName:q,namespace:Y,nodeValue:U}),"id"==q&&(k.id=U)}}S._add(k),F&&(F.childNodes.push(k),
k.parentNode=F,"/"!=V[2].charAt(V[2].length-1)&&(F=k));var L=V[3];L.length>0&&F.childNodes.push(i(L));
}for(var C=0;C<S.childNodes.length;C++){var $=S.childNodes[C];if($.nodeType==p.ELEMENT){
S.documentElement=$;break}}return S}},dojox.xml.DomParser});