define(["dojo/_base/kernel","./entities","dojo/_base/array","dojo/_base/window","dojo/_base/sniff"],function(e,n,r,t,i){
var a=e.getObject("dojox.html.format",!0);return a.prettyPrint=function(a,s,o,u,c){
var f,p=[],l=0,h=[],g="	",d="",v=[],m=/[=]([^"']+?)(\s|>)/g,b=/style=("[^"]*"|'[^']*'|\S*)/gi,j=/[\w-]+=("[^"]*"|'[^']*'|\S*)/gi;
if(s&&s>0&&10>s)for(g="",f=0;s>f;f++)g+=" ";var T=t.doc.createElement("div");T.innerHTML=a;
var w=n.encode,L=n.decode,y=function(e){switch(e){case"a":case"b":case"strong":case"s":
case"strike":case"i":case"u":case"em":case"sup":case"sub":case"span":case"font":case"big":
case"cite":case"q":case"small":return!0;default:return!1}},x=T.ownerDocument.createElement("div"),A=function(e){
var n=e.cloneNode(!1);x.appendChild(n);var r=x.innerHTML;return x.innerHTML="",r},O=function(){
var e,n="";for(e=0;l>e;e++)n+=g;return n.length},H=function(){var e;for(e=0;l>e;e++)p.push(g);
},M=function(){p.push("\n")},N=function(e){d+=w(e.nodeValue,u)},C=function(n){var r,t,i=n.split("\n");
for(r=0;r<i.length;r++)i[r]=e.trim(i[r]);if(n=i.join(" "),n=e.trim(n),""!==n){var a=[];
if(o&&o>0){var s=O(),u=o;for(o>s&&(u-=s);n;)if(n.length>o){for(r=u;r>0&&" "!==n.charAt(r);r--);
if(!r)for(r=u;r<n.length&&" "!==n.charAt(r);r++);var c=n.substring(0,r);if(c=e.trim(c),
n=e.trim(n.substring(r==n.length?n.length:r+1,n.length)),c){for(t="",r=0;l>r;r++)t+=g;
c=t+c+"\n"}a.push(c)}else{for(t="",r=0;l>r;r++)t+=g;n=t+n+"\n",a.push(n),n=null}return a.join("");
}for(t="",r=0;l>r;r++)t+=g;return n=t+n+"\n"}return""},_=function(e){return e&&(e=e.replace(/&quot;/gi,'"'),
e=e.replace(/&gt;/gi,">"),e=e.replace(/&lt;/gi,"<"),e=e.replace(/&amp;/gi,"&")),e;
},E=function(n){if(n){n=_(n);var r,t,i,a,s=0,o=n.split("\n"),u=[];for(r=0;r<o.length;r++){
var c=o[r],f=c.indexOf("\n")>-1;if(c=e.trim(c)){var p=s;for(i=0;i<c.length;i++){var h=c.charAt(i);
"{"===h?s++:"}"===h&&(s--,p=s)}for(a="",t=0;l+p>t;t++)a+=g;u.push(a+c+"\n")}else f&&0===r&&u.push("\n");
}n=u.join("")}return n},k=function(n){var t=n.nodeName.toLowerCase(),i=e.trim(A(n)),a=i.substring(0,i.indexOf(">")+1);
a=a.replace(m,'="$1"$2'),a=a.replace(b,function(n){var t=n.substring(0,6),i=n.substring(6,n.length),a=i.charAt(0);
i=e.trim(i.substring(1,i.length-1)),i=i.split(";");var s=[];r.forEach(i,function(n){
n=e.trim(n),n&&(n=n.substring(0,n.indexOf(":")).toLowerCase()+n.substring(n.indexOf(":"),n.length),
s.push(n))}),s=s.sort(),i=s.join("; ");var o=e.trim(i);return o&&";"!==o?(i+=";",
t+a+i+a):""});var s=[];a=a.replace(j,function(n){return s.push(e.trim(n)),""}),s=s.sort(),
a="<"+t,s.length&&(a+=" "+s.join(" ")),-1!=i.indexOf("</")?(h.push(t),a+=">"):(a+=c?" />":">",
h.push(!1));var o=y(t);v.push(o),d&&!o&&(p.push(C(d)),d=""),o?d+=a:(H(),p.push(a),
M(),l++)},q=function(){var e=v.pop();d&&!e&&(p.push(C(d)),d="");var n=h.pop();n?(n="</"+n+">",
e?d+=n:(l--,H(),p.push(n),M())):l--},S=function(e){var n=L(e.nodeValue,u);H(),p.push("<!--"),
M(),l++,p.push(C(n)),l--,H(),p.push("-->"),M()},V=function(n){var r=n.childNodes;if(r){
var t;for(t=0;t<r.length;t++){var a=r[t];if(1===a.nodeType){var s=e.trim(a.tagName.toLowerCase());
if(i("ie")&&a.parentNode!=n)continue;if(s&&"/"===s.charAt(0))continue;if(k(a),"script"===s)p.push(E(a.innerHTML));else if("pre"===s){
var o=a.innerHTML;i("mozilla")&&(o=o.replace("<br>","\n"),o=o.replace("<pre>",""),
o=o.replace("</pre>","")),"\n"!==o.charAt(o.length-1)&&(o+="\n"),p.push(o)}else V(a);
q()}else 3===a.nodeType||4===a.nodeType?N(a):8===a.nodeType&&S(a)}}};return V(T),
d&&(p.push(C(d)),d=""),p.join("")},a});