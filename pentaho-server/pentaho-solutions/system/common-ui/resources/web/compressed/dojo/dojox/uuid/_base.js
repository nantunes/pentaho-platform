define(["dojo/_base/kernel","dojo/_base/lang"],function(o){return o.getObject("uuid",!0,dojox),
dojox.uuid.NIL_UUID="00000000-0000-0000-0000-000000000000",dojox.uuid.version={UNKNOWN:0,
TIME_BASED:1,DCE_SECURITY:2,NAME_BASED_MD5:3,RANDOM:4,NAME_BASED_SHA1:5},dojox.uuid.variant={
NCS:"0",DCE:"10",MICROSOFT:"110",UNKNOWN:"111"},dojox.uuid.assert=function(o,t){if(!o)throw t||(t="An assert statement failed.\nThe method dojox.uuid.assert() was called with a 'false' value.\n"),
new Error(t)},dojox.uuid.generateNilUuid=function(){return dojox.uuid.NIL_UUID},dojox.uuid.isValid=function(t){
t=t.toString();var e=o.isString(t)&&36==t.length&&t==t.toLowerCase();if(e){var u=t.split("-");
e=5==u.length&&8==u[0].length&&4==u[1].length&&4==u[2].length&&4==u[3].length&&12==u[4].length;
var a=16;for(var i in u){var r=u[i],d=parseInt(r,a);e=e&&isFinite(d)}}return e},dojox.uuid.getVariant=function(o){
if(!dojox.uuid._ourVariantLookupTable){var t=dojox.uuid.variant,e=[];e[0]=t.NCS,e[1]=t.NCS,
e[2]=t.NCS,e[3]=t.NCS,e[4]=t.NCS,e[5]=t.NCS,e[6]=t.NCS,e[7]=t.NCS,e[8]=t.DCE,e[9]=t.DCE,
e[10]=t.DCE,e[11]=t.DCE,e[12]=t.MICROSOFT,e[13]=t.MICROSOFT,e[14]=t.UNKNOWN,e[15]=t.UNKNOWN,
dojox.uuid._ourVariantLookupTable=e}o=o.toString();var u=o.charAt(19),a=16,i=parseInt(u,a);
return dojox.uuid.assert(i>=0&&16>=i),dojox.uuid._ourVariantLookupTable[i]},dojox.uuid.getVersion=function(o){
var t="dojox.uuid.getVersion() was not passed a DCE Variant UUID.";dojox.uuid.assert(dojox.uuid.getVariant(o)==dojox.uuid.variant.DCE,t),
o=o.toString();var e=o.charAt(14),u=16,a=parseInt(e,u);return a},dojox.uuid.getNode=function(o){
var t="dojox.uuid.getNode() was not passed a TIME_BASED UUID.";dojox.uuid.assert(dojox.uuid.getVersion(o)==dojox.uuid.version.TIME_BASED,t),
o=o.toString();var e=o.split("-"),u=e[4];return u},dojox.uuid.getTimestamp=function(o,t){
var e="dojox.uuid.getTimestamp() was not passed a TIME_BASED UUID.";switch(dojox.uuid.assert(dojox.uuid.getVersion(o)==dojox.uuid.version.TIME_BASED,e),
o=o.toString(),t||(t=null),t){case"string":case String:return dojox.uuid.getTimestamp(o,Date).toUTCString();
case"hex":var u=o.split("-"),a=u[0],i=u[1],r=u[2];r=r.slice(1);var d=r+i+a;return dojox.uuid.assert(15==d.length),
d;case null:case"date":case Date:var n=3394248,s=16,j=o.split("-"),x=parseInt(j[0],s),g=parseInt(j[1],s),l=parseInt(j[2],s),N=4095&l;
N<<=16,N+=g,N*=4294967296,N+=x;var S=N/1e4,D=3600,v=n,E=v*D,C=1e3*E,p=S-C,I=new Date(p);
return I;default:dojox.uuid.assert(!1,"dojox.uuid.getTimestamp was not passed a valid returnType: "+t);
}},dojox.uuid});