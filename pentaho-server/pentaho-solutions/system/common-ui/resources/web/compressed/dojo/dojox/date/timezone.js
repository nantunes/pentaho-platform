define(["dojo","dojo/date","dojo/date/locale","dojo/_base/array","dojo/_base/xhr"],function(a,e,r){
function i(e){e=e||{},b=a.mixin(b,e.zones||{}),C=a.mixin(C,e.rules||{})}function t(e){
T[e]=!0,a.xhrGet({url:require.toUrl((p.timezoneFileBasePath||"dojox/date/zoneinfo")+"/"+e),
sync:!0,handleAs:"olson-zoneinfo",load:i,error:function(a){throw console.error("Error loading zone file:",a),
a}})}function n(a){throw new Error('Timezone "'+a+'" is either incorrect, or not loaded in the timezone registry.');
}function o(a){var e=D[a];if(!e){var r=a.split("/")[0];if(e=x[r],!e){var i=b[a];if("string"==typeof i)return o(i);
if(!T.backward)return t("backward"),o(a);n(a)}}return e}function s(a){var e=/(\d+)(?::0*(\d*))?(?::0*(\d*))?([su])?$/,r=a.match(e);
return r?(r[1]=parseInt(r[1],10),r[2]=r[2]?parseInt(r[2],10):0,r[3]=r[3]?parseInt(r[3],10):0,
r):null}function u(a,e,r,i,t,n,o){return Date.UTC(a,e,r,i,t,n)+60*(o||0)*1e3}function c(a){
return k[a.substr(0,3).toLowerCase()]}function m(a){var e=s(a);if(null===e)return 0;
var r=0===a.indexOf("-")?-1:1;return e=1e3*r*(60*(60*e[1]+e[2])+e[3]),-e/60/1e3}function f(a,r,i){
var t=c(a[3]),n=a[4],o=s(a[5]);"u"==o[4]&&(i=0);var m,f,l;if(!isNaN(n))return m=new Date(u(r,t,parseInt(n,10),o[1],o[2],o[3],i));
if("last"==n.substr(0,4))return n=y[n.substr(4,3).toLowerCase()],m=new Date(u(r,t+1,1,o[1]-24,o[2],o[3],i)),
f=e.add(m,"minute",-i).getUTCDay(),l=n>f?n-f-7:n-f,0!==l&&(m=e.add(m,"hour",24*l)),
m;if(n=y[n.substr(0,3).toLowerCase()],"undefined"!=n){if(">="==a[4].substr(3,2))return m=new Date(u(r,t,parseInt(a[4].substr(5),10),o[1],o[2],o[3],i)),
f=e.add(m,"minute",-i).getUTCDay(),l=f>n?n-f+7:n-f,0!==l&&(m=e.add(m,"hour",24*l)),
m;if("<="==n.substr(3,2))return m=new Date(u(r,t,parseInt(a[4].substr(5),10),o[1],o[2],o[3],i)),
f=e.add(m,"minute",-i).getUTCDay(),l=n>f?n-f-7:n-f,0!==l&&(m=e.add(m,"hour",24*l)),
m}return null}function l(e,r){var i=[];return a.forEach(C[e[1]]||[],function(a){for(var t=0;2>t;t++)switch(a[t]){
case"min":a[t]=v;break;case"max":a[t]=z;break;case"only":break;default:if(a[t]=parseInt(a[t],10),
isNaN(a[t]))throw new Error("Invalid year found on rule")}"string"==typeof a[6]&&(a[6]=m(a[6])),
(a[0]<=r&&a[1]>=r||a[0]==r&&"only"==a[1])&&i.push({r:a,d:f(a,r,e[0])})}),i}function h(r,i){
for(var t=w[r]=[],n=0;n<i.length;n++){var o=i[n],h=t[n]=[],d=null,A=null,S=[];"string"==typeof o[0]&&(o[0]=m(o[0])),
0===n?h[0]=Date.UTC(v,0,1,0,0,0,0):(h[0]=t[n-1][1],d=i[n-1],A=t[n-1],S=A[2]);var p,g=new Date(h[0]).getUTCFullYear(),T=o[3]?parseInt(o[3],10):z,b=[];
for(p=g;T>=p;p++)b=b.concat(l(o,p));b.sort(function(a,r){return e.compare(a.d,r.d);
});var C;for(p=0,C;C=b[p];p++){var I=p>0?b[p-1]:null;C.r[5].indexOf("u")<0&&C.r[5].indexOf("s")<0&&(0===p&&n>0?S.length?C.d=e.add(C.d,"minute",S[S.length-1].r[6]):0===e.compare(new Date(A[1]),C.d,"date")?C.d=new Date(A[1]):C.d=e.add(C.d,"minute",m(d[1])):p>0&&(C.d=e.add(C.d,"minute",I.r[6])));
}if(h[2]=b,o[3]){var _=parseInt(o[3],10),k=c(o[4]||"Jan"),y=parseInt(o[5]||"1",10),x=s(o[6]||"0"),D=h[1]=u(_,k,y,x[1],x[2],x[3],"u"==x[4]?0:o[0]);
isNaN(D)&&(D=h[1]=f([0,0,0,o[4],o[5],o[6]||"0"],_,"u"==x[4]?0:o[0]).getTime());var E=a.filter(b,function(a,e){
var r=e>0?60*b[e-1].r[6]*1e3:0;return a.d.getTime()<D+r});"u"!=x[4]&&"s"!=x[4]&&(E.length?h[1]+=60*E[E.length-1].r[6]*1e3:h[1]+=60*m(o[1])*1e3);
}else h[1]=Date.UTC(z,11,31,23,59,59,999)}}function d(a,e){for(var r=e,i=b[r];"string"==typeof i;)r=i,
i=b[r];if(!i){if(!T.backward){t("backward",!0);return d(a,e)}n(r)}w[e]||h(e,i);for(var o,s=w[e],u=a.getTime(),c=0;o=s[c];c++)if(u>=o[0]&&u<o[1])return{
zone:i[c],range:s[c],idx:c};throw new Error('No Zone found for "'+e+'" on '+a)}function A(a,e){
for(var r,i=-1,t=e.range[2]||[],n=a.getTime(),o=(e.range,0);r=t[o];o++)n>=r.d.getTime()&&(i=o);
return i>=0?t[i].r:null}function S(a,e,r){var i,t=e.zone,n=t[2];if(n.indexOf("%s")>-1){
var o;if(r)o=r[7],"-"==o&&(o="");else if(t[1]in E)o=E[t[1]];else if(e.idx>0){var s=b[a][e.idx-1],u=s[2];
o=u.indexOf("%s")<0&&n.replace("%s","S")==u?"S":""}else o="";i=n.replace("%s",o)}else if(n.indexOf("/")>-1){
var c=n.split("/");i=r?c[0===r[6]?0:1]:c[0]}else i=n;return i}a.experimental("dojox.date.timezone"),
a.getObject("date.timezone",!0,dojox);var p=a.config,g=["africa","antarctica","asia","australasia","backward","etcetera","europe","northamerica","pacificnew","southamerica"],v=1835,z=2038,T={},b={},w={},C={},I=p.timezoneLoadingScheme||"preloadAll",_=p.defaultZoneFile||("preloadAll"==I?g:"northamerica");
a._contentHandlers["olson-zoneinfo"]=function(e){for(var r=a._contentHandlers.text(e),i=r.split("\n"),t=[],n="",o=null,s=null,u={
zones:{},rules:{}},c=0;c<i.length;c++){var m=i[c];if(m.match(/^\s/)&&(m="Zone "+o+m),
m=m.split("#")[0],m.length>3)switch(t=m.split(/\s+/),n=t.shift()){case"Zone":o=t.shift(),
t[0]&&(u.zones[o]||(u.zones[o]=[]),u.zones[o].push(t));break;case"Rule":s=t.shift(),
u.rules[s]||(u.rules[s]=[]),u.rules[s].push(t);break;case"Link":if(u.zones[t[1]])throw new Error("Error with Link "+t[1]);
u.zones[t[1]]=t[0];break;case"Leap":}}return u};var k={jan:0,feb:1,mar:2,apr:3,may:4,
jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},y={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,
sat:6},x={EST:"northamerica",MST:"northamerica",HST:"northamerica",EST5EDT:"northamerica",
CST6CDT:"northamerica",MST7MDT:"northamerica",PST8PDT:"northamerica",America:"northamerica",
Pacific:"australasia",Atlantic:"europe",Africa:"africa",Indian:"africa",Antarctica:"antarctica",
Asia:"asia",Australia:"australasia",Europe:"europe",WET:"europe",CET:"europe",MET:"europe",
EET:"europe"},D={"Pacific/Honolulu":"northamerica","Atlantic/Bermuda":"northamerica",
"Atlantic/Cape_Verde":"africa","Atlantic/St_Helena":"africa","Indian/Kerguelen":"antarctica",
"Indian/Chagos":"asia","Indian/Maldives":"asia","Indian/Christmas":"australasia",
"Indian/Cocos":"australasia","America/Danmarkshavn":"europe","America/Scoresbysund":"europe",
"America/Godthab":"europe","America/Thule":"europe","Asia/Yekaterinburg":"europe",
"Asia/Omsk":"europe","Asia/Novosibirsk":"europe","Asia/Krasnoyarsk":"europe","Asia/Irkutsk":"europe",
"Asia/Yakutsk":"europe","Asia/Vladivostok":"europe","Asia/Sakhalin":"europe","Asia/Magadan":"europe",
"Asia/Kamchatka":"europe","Asia/Anadyr":"europe","Africa/Ceuta":"europe","America/Argentina/Buenos_Aires":"southamerica",
"America/Argentina/Cordoba":"southamerica","America/Argentina/Tucuman":"southamerica",
"America/Argentina/La_Rioja":"southamerica","America/Argentina/San_Juan":"southamerica",
"America/Argentina/Jujuy":"southamerica","America/Argentina/Catamarca":"southamerica",
"America/Argentina/Mendoza":"southamerica","America/Argentina/Rio_Gallegos":"southamerica",
"America/Argentina/Ushuaia":"southamerica","America/Aruba":"southamerica","America/La_Paz":"southamerica",
"America/Noronha":"southamerica","America/Belem":"southamerica","America/Fortaleza":"southamerica",
"America/Recife":"southamerica","America/Araguaina":"southamerica","America/Maceio":"southamerica",
"America/Bahia":"southamerica","America/Sao_Paulo":"southamerica","America/Campo_Grande":"southamerica",
"America/Cuiaba":"southamerica","America/Porto_Velho":"southamerica","America/Boa_Vista":"southamerica",
"America/Manaus":"southamerica","America/Eirunepe":"southamerica","America/Rio_Branco":"southamerica",
"America/Santiago":"southamerica","Pacific/Easter":"southamerica","America/Bogota":"southamerica",
"America/Curacao":"southamerica","America/Guayaquil":"southamerica","Pacific/Galapagos":"southamerica",
"Atlantic/Stanley":"southamerica","America/Cayenne":"southamerica","America/Guyana":"southamerica",
"America/Asuncion":"southamerica","America/Lima":"southamerica","Atlantic/South_Georgia":"southamerica",
"America/Paramaribo":"southamerica","America/Port_of_Spain":"southamerica","America/Montevideo":"southamerica",
"America/Caracas":"southamerica"},E={US:"S",Chatham:"S",NZ:"S",NT_YK:"S",Edm:"S",
Salv:"S",Canada:"S",StJohns:"S",TC:"S",Guat:"S",Mexico:"S",Haiti:"S",Barb:"S",Belize:"S",
CR:"S",Moncton:"S",Swift:"S",Hond:"S",Thule:"S",NZAQ:"S",Zion:"S",ROK:"S",PRC:"S",
Taiwan:"S",Ghana:"GMT",SL:"WAT",Chicago:"S",Detroit:"S",Vanc:"S",Denver:"S",Halifax:"S",
Cuba:"S",Indianapolis:"S",Starke:"S",Marengo:"S",Pike:"S",Perry:"S",Vincennes:"S",
Pulaski:"S",Louisville:"S",CA:"S",Nic:"S",Menominee:"S",Mont:"S",Bahamas:"S",NYC:"S",
Regina:"S",Resolute:"ES",DR:"S",Toronto:"S",Winn:"S"};a.setObject("dojox.date.timezone",{
getTzInfo:function(a,e){if("lazyLoad"==I){var r=o(e);if(!r)throw new Error("Not a valid timezone ID.");
T[r]||t(r)}var i=d(a,e),n=i.zone[0],s=A(a,i);n+=s?s[6]:m(C[i.zone[1]]&&i.idx>0?b[e][i.idx-1][1]:i.zone[1]);
var u=S(e,i,s);return{tzOffset:n,tzAbbr:u}},loadZoneData:function(a){i(a)},getAllZones:function(){
var a=[];for(var e in b)a.push(e);return a.sort(),a}}),"string"==typeof _&&_&&(_=[_]),
a.isArray(_)&&a.forEach(_,t);var j=r.format,M=r._getZone;r.format=function(a,e){if(e=e||{},
e.timezone&&!e._tzInfo&&(e._tzInfo=dojox.date.timezone.getTzInfo(a,e.timezone)),e._tzInfo){
var r=a.getTimezoneOffset()-e._tzInfo.tzOffset;a=new Date(a.getTime()+60*r*1e3)}return j.call(this,a,e);
},r._getZone=function(a,e,r){return r._tzInfo?e?r._tzInfo.tzAbbr:r._tzInfo.tzOffset:M.call(this,a,e,r);
}});