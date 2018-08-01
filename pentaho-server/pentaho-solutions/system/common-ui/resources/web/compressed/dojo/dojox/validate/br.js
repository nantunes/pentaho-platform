define(["dojo/_base/lang","./_base"],function(r,e){var t=r.getObject("br",!0,e);return t.isValidCnpj=function(t){
if(!r.isString(t)){if(!t)return!1;for(t+="";t.length<14;)t="0"+t}var i={format:["##.###.###/####-##","########/####-##","############-##","##############"]
};if(e.isNumberFormat(t,i)){t=t.replace("/","").replace(/\./g,"").replace("-","");
var n,f,a,o=[],u=[];for(n=0;10>n;n++){for(a="",f=0;f<t.length;f++)a+=""+n;if(t===a)return!1;
}for(n=0;12>n;n++)o.push(parseInt(t.charAt(n),10));for(n=12;14>n;n++)u.push(parseInt(t.charAt(n),10));
var s=[9,8,7,6,5,4,3,2,9,8,7,6].reverse(),h=0;for(n=0;n<o.length;n++)h+=o[n]*s[n];
var p=h%11;if(p==u[0]){for(h=0,s=[9,8,7,6,5,4,3,2,9,8,7,6,5].reverse(),o.push(p),
n=0;n<o.length;n++)h+=o[n]*s[n];var v=h%11;if(v===u[1])return!0}}return!1},t.computeCnpjDv=function(t){
if(!r.isString(t)){if(!t)return"";for(t+="";t.length<12;)t="0"+t}var i={format:["##.###.###/####","########/####","############"]
};if(e.isNumberFormat(t,i)){t=t.replace("/","").replace(/\./g,"");var n,f,a,o=[];for(n=0;10>n;n++){
for(a="",f=0;f<t.length;f++)a+=""+n;if(t===a)return""}for(n=0;n<t.length;n++)o.push(parseInt(t.charAt(n),10));
var u=[9,8,7,6,5,4,3,2,9,8,7,6].reverse(),s=0;for(n=0;n<o.length;n++)s+=o[n]*u[n];
var h=s%11;for(s=0,u=[9,8,7,6,5,4,3,2,9,8,7,6,5].reverse(),o.push(h),n=0;n<o.length;n++)s+=o[n]*u[n];
var p=s%11;return""+h+p}return""},t.isValidCpf=function(t){if(!r.isString(t)){if(!t)return!1;
for(t+="";t.length<11;)t="0"+t}var i={format:["###.###.###-##","#########-##","###########"]
};if(e.isNumberFormat(t,i)){t=t.replace("-","").replace(/\./g,"");var n,f,a,o=[],u=[];
for(n=0;10>n;n++){for(a="",f=0;f<t.length;f++)a+=""+n;if(t===a)return!1}for(n=0;9>n;n++)o.push(parseInt(t.charAt(n),10));
for(n=9;12>n;n++)u.push(parseInt(t.charAt(n),10));var s=[9,8,7,6,5,4,3,2,1].reverse(),h=0;
for(n=0;n<o.length;n++)h+=o[n]*s[n];var p=h%11;if(p==u[0]){for(h=0,s=[9,8,7,6,5,4,3,2,1,0].reverse(),
o.push(p),n=0;n<o.length;n++)h+=o[n]*s[n];var v=h%11;if(v===u[1])return!0}}return!1;
},t.computeCpfDv=function(t){if(!r.isString(t)){if(!t)return"";for(t+="";t.length<9;)t="0"+t;
}var n={format:["###.###.###","#########"]};if(e.isNumberFormat(t,n)){t=t.replace(/\./g,"");
var f=[];for(i=0;i<10;i++){for(tmp="",j=0;j<t.length;j++)tmp+=""+i;if(t===tmp)return"";
}for(i=0;i<t.length;i++)f.push(parseInt(t.charAt(i),10));var a=[9,8,7,6,5,4,3,2,1].reverse(),o=0;
for(i=0;i<f.length;i++)o+=f[i]*a[i];var u=o%11;for(o=0,a=[9,8,7,6,5,4,3,2,1,0].reverse(),
f.push(u),i=0;i<f.length;i++)o+=f[i]*a[i];var s=o%11;return""+u+s}return""},t});