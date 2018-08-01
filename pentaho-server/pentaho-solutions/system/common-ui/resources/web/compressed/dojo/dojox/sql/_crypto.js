dojo.provide("dojox.sql._crypto"),dojo.mixin(dojox.sql._crypto,{_POOL_SIZE:100,encrypt:function(r,e,o){
this._initWorkerPool();var n={plaintext:r,password:e};n=dojo.toJson(n),n="encr:"+String(n),
this._assignWork(n,o)},decrypt:function(r,e,o){this._initWorkerPool();var n={ciphertext:r,
password:e};n=dojo.toJson(n),n="decr:"+String(n),this._assignWork(n,o)},_initWorkerPool:function(){
if(!this._manager)try{this._manager=google.gears.factory.create("beta.workerpool","1.0"),
this._unemployed=[],this._employed={},this._handleMessage=[];var r=this;this._manager.onmessage=function(e,o){
var n=r._employed["_"+o];if(r._employed["_"+o]=void 0,r._unemployed.push("_"+o),r._handleMessage.length){
var t=r._handleMessage.shift();r._assignWork(t.msg,t.callback)}n(e)};for(var e="function _workerInit(){gearsWorkerPool.onmessage = "+String(this._workerHandler)+";}",o=e+" _workerInit();",n=0;n<this._POOL_SIZE;n++)this._unemployed.push("_"+this._manager.createWorker(o));
}catch(t){throw t.message||t}},_assignWork:function(r,e){if(!this._handleMessage.length&&this._unemployed.length){
var o=this._unemployed.shift().substring(1);this._employed["_"+o]=e,this._manager.sendMessage(r,parseInt(o,10));
}else this._handleMessage={msg:r,callback:e}},_workerHandler:function(msg,sender){
function Cipher(r,e){for(var o=4,n=e.length/o-1,t=[[],[],[],[]],a=0;4*o>a;a++)t[a%4][Math.floor(a/4)]=r[a];
t=AddRoundKey(t,e,0,o);for(var s=1;n>s;s++)t=SubBytes(t,o),t=ShiftRows(t,o),t=MixColumns(t,o),
t=AddRoundKey(t,e,s,o);t=SubBytes(t,o),t=ShiftRows(t,o),t=AddRoundKey(t,e,n,o);for(var i=new Array(4*o),a=0;4*o>a;a++)i[a]=t[a%4][Math.floor(a/4)];
return i}function SubBytes(r,e){for(var o=0;4>o;o++)for(var n=0;e>n;n++)r[o][n]=Sbox[r[o][n]];
return r}function ShiftRows(r,e){for(var o=new Array(4),n=1;4>n;n++){for(var t=0;4>t;t++)o[t]=r[n][(t+n)%e];
for(var t=0;4>t;t++)r[n][t]=o[t]}return r}function MixColumns(r,e){for(var o=0;4>o;o++){
for(var n=new Array(4),t=new Array(4),a=0;4>a;a++)n[a]=r[a][o],t[a]=128&r[a][o]?r[a][o]<<1^283:r[a][o]<<1;
r[0][o]=t[0]^n[1]^t[1]^n[2]^n[3],r[1][o]=n[0]^t[1]^n[2]^t[2]^n[3],r[2][o]=n[0]^n[1]^t[2]^n[3]^t[3],
r[3][o]=n[0]^t[0]^n[1]^n[2]^t[3]}return r}function AddRoundKey(r,e,o,n){for(var t=0;4>t;t++)for(var a=0;n>a;a++)r[t][a]^=e[4*o+a][t];
return r}function KeyExpansion(r){for(var e=4,o=r.length/4,n=o+6,t=new Array(e*(n+1)),a=new Array(4),s=0;o>s;s++){
var i=[r[4*s],r[4*s+1],r[4*s+2],r[4*s+3]];t[s]=i}for(var s=o;e*(n+1)>s;s++){t[s]=new Array(4);
for(var c=0;4>c;c++)a[c]=t[s-1][c];if(s%o==0){a=SubWord(RotWord(a));for(var c=0;4>c;c++)a[c]^=Rcon[s/o][c];
}else o>6&&s%o==4&&(a=SubWord(a));for(var c=0;4>c;c++)t[s][c]=t[s-o][c]^a[c]}return t;
}function SubWord(r){for(var e=0;4>e;e++)r[e]=Sbox[r[e]];return r}function RotWord(r){
r[4]=r[0];for(var e=0;4>e;e++)r[e]=r[e+1];return r}function AESEncryptCtr(r,e,o){
if(128!=o&&192!=o&&256!=o)return"";for(var n=o/8,t=new Array(n),a=0;n>a;a++)t[a]=255&e.charCodeAt(a);
var s=Cipher(t,KeyExpansion(t));s=s.concat(s.slice(0,n-16));for(var i=16,c=new Array(i),f=(new Date).getTime(),a=0;4>a;a++)c[a]=f>>>8*a&255;
for(var a=0;4>a;a++)c[a+4]=f/4294967296>>>8*a&255;for(var d=KeyExpansion(s),h=Math.ceil(r.length/i),l=new Array(h),u=0;h>u;u++){
for(var g=0;4>g;g++)c[15-g]=u>>>8*g&255;for(var g=0;4>g;g++)c[15-g-4]=u/4294967296>>>8*g;
for(var p=Cipher(c,d),v=h-1>u?i:(r.length-1)%i+1,y="",a=0;v>a;a++){var _=r.charCodeAt(u*i+a),C=_^p[a];
y+=String.fromCharCode(C)}l[u]=escCtrlChars(y)}for(var m="",a=0;8>a;a++)m+=String.fromCharCode(c[a]);
return m=escCtrlChars(m),m+"-"+l.join("-")}function AESDecryptCtr(r,e,o){if(128!=o&&192!=o&&256!=o)return"";
for(var n=o/8,t=new Array(n),a=0;n>a;a++)t[a]=255&e.charCodeAt(a);var s=KeyExpansion(t),i=Cipher(t,s);
i=i.concat(i.slice(0,n-16));var c=KeyExpansion(i);r=r.split("-");for(var f=16,d=new Array(f),h=unescCtrlChars(r[0]),a=0;8>a;a++)d[a]=h.charCodeAt(a);
for(var l=new Array(r.length-1),u=1;u<r.length;u++){for(var g=0;4>g;g++)d[15-g]=u-1>>>8*g&255;
for(var g=0;4>g;g++)d[15-g-4]=u/4294967296-1>>>8*g&255;var p=Cipher(d,c);r[u]=unescCtrlChars(r[u]);
for(var v="",a=0;a<r[u].length;a++){var y=r[u].charCodeAt(a),_=y^p[a];v+=String.fromCharCode(_);
}l[u-1]=v}return l.join("")}function escCtrlChars(r){return r.replace(/[\0\t\n\v\f\r\xa0!-]/g,function(r){
return"!"+r.charCodeAt(0)+"!"})}function unescCtrlChars(r){return r.replace(/!\d\d?\d?!/g,function(r){
return String.fromCharCode(r.slice(1,-1))})}function encrypt(r,e){return AESEncryptCtr(r,e,256);
}function decrypt(r,e){return AESDecryptCtr(r,e,256)}var Sbox=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],Rcon=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],cmd=msg.substr(0,4),arg=msg.substr(5);
if("encr"==cmd){arg=eval("("+arg+")");var plaintext=arg.plaintext,password=arg.password,results=encrypt(plaintext,password);
gearsWorkerPool.sendMessage(String(results),sender)}else if("decr"==cmd){arg=eval("("+arg+")");
var ciphertext=arg.ciphertext,password=arg.password,results=decrypt(ciphertext,password);
gearsWorkerPool.sendMessage(String(results),sender)}}});