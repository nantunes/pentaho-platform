define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/sniff","dojo/keys"],function(e,t,n,r,a,c){
e.experimental("dojox.string.BidiComplex");var i=t.getObject("string.BidiComplex",!0,dojox),o=[];
i.attachInput=function(e,t){e.alt=t,r.connect(e,"onkeydown",this,"_ceKeyDown"),r.connect(e,"onkeyup",this,"_ceKeyUp"),
r.connect(e,"oncut",this,"_ceCutText"),r.connect(e,"oncopy",this,"_ceCopyText"),e.value=i.createDisplayString(e.value,e.alt);
},i.createDisplayString=function(e,t){e=i.stripSpecialCharacters(e);var r=i._parse(e,t),a="‪"+e,c=1;
return n.forEach(r,function(e){if(null!=e){var t=a.substring(0,e+c),n=a.substring(e+c,a.length);
a=t+"‎"+n,c++}}),a},i.stripSpecialCharacters=function(e){return e.replace(/[\u200E\u200F\u202A-\u202E]/g,"");
},i._ceKeyDown=function(e){var t=a("ie")?e.srcElement:e.target;o=t.value},i._ceKeyUp=function(e){
var t="‎",n=a("ie")?e.srcElement:e.target,r=n.value,s=e.keyCode;if(s!=c.HOME&&s!=c.END&&s!=c.SHIFT){
var u,l,d=i._getCaretPos(e,n);if(d&&(u=d[0],l=d[1]),a("ie")){var f=u,p=l;if(s==c.LEFT_ARROW)return void(r.charAt(l-1)==t&&u==l&&i._setSelectedRange(n,u-1,l-1));
if(s==c.RIGHT_ARROW)return r.charAt(l-1)==t&&(p=l+1,u==l&&(f=u+1)),void i._setSelectedRange(n,f,p);
}else{if(s==c.LEFT_ARROW)return void(r.charAt(l-1)==t&&i._setSelectedRange(n,u-1,l-1));
if(s==c.RIGHT_ARROW)return void(r.charAt(l-1)==t&&i._setSelectedRange(n,u+1,l+1));
}var g=i.createDisplayString(r,n.alt);r!=g&&(window.status=r+" c="+l,n.value=g,s==c.DELETE&&g.charAt(l)==t&&(n.value=g.substring(0,l)+g.substring(l+2,g.length)),
s==c.DELETE?i._setSelectedRange(n,u,l):s==c.BACKSPACE?o.length>=l&&o.charAt(l-1)==t?i._setSelectedRange(n,u-1,l-1):i._setSelectedRange(n,u,l):n.value.charAt(l)!=t&&i._setSelectedRange(n,u+1,l+1));
}},i._processCopy=function(e,t,n){if(null==t)if(a("ie")){var r=document.selection.createRange();
t=r.text}else t=e.value.substring(e.selectionStart,e.selectionEnd);var c=i.stripSpecialCharacters(t);
return a("ie")&&window.clipboardData.setData("Text",c),!0},i._ceCopyText=function(e){
return a("ie")&&(e.returnValue=!1),i._processCopy(e,null,!1)},i._ceCutText=function(e){
var t=i._processCopy(e,null,!1);if(!t)return!1;if(a("ie"))document.selection.clear();else{
var n=e.selectionStart;e.value=e.value.substring(0,n)+e.value.substring(e.selectionEnd),
e.setSelectionRange(n,n)}return!0},i._getCaretPos=function(e,t){if(a("ie")){var n=0,r=document.selection.createRange().duplicate(),c=r.duplicate(),i=r.text.length;
for("textarea"==t.type?c.moveToElementText(t):c.expand("textedit");r.compareEndPoints("StartToStart",c)>0;)r.moveStart("character",-1),
++n;return[n,n+i]}return[e.target.selectionStart,e.target.selectionEnd]},i._setSelectedRange=function(e,t,n){
if(a("ie")){var r=e.createTextRange();r&&("textarea"==e.type?r.moveToElementText(e):r.expand("textedit"),
r.collapse(),r.moveEnd("character",n),r.moveStart("character",t),r.select())}else e.selectionStart=t,
e.selectionEnd=n};var s=function(e){return e>="0"&&"9">=e||e>"ÿ"},u=function(e){return e>="A"&&"Z">=e||e>="a"&&"z">=e;
},l=function(e,t,n){for(;t>0;){if(t==n)return!1;if(t--,s(e.charAt(t)))return!0;if(u(e.charAt(t)))return!1;
}return!1};return i._parse=function(e,t){var r=-1,a=[],c={FILE_PATH:"/\\:.",URL:"/:.?=&#",
XPATH:"/\\:.<>=[]",EMAIL:"<>@.,;"}[t];switch(t){case"FILE_PATH":case"URL":case"XPATH":
n.forEach(e,function(t,n){c.indexOf(t)>=0&&l(e,n,r)&&(r=n,a.push(n))});break;case"EMAIL":
;n.forEach(e,function(t,n){if('"'==t){l(e,n,r)&&(r=n,a.push(n)),n++;var i=e.indexOf('"',n);
i>=n&&(n=i),l(e,n,r)&&(r=n,a.push(n))}c.indexOf(t)>=0&&l(e,n,r)&&(r=n,a.push(n))});
}return a},i});