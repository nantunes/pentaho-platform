define(["dojo/_base/lang"],function(t){var e=t.getObject("string",!0,dojox).Builder=function(t){
var e="";this.length=0,this.append=function(t){if(arguments.length>1){var n="",s=arguments.length;
switch(s){case 9:n=""+arguments[8]+n;case 8:n=""+arguments[7]+n;case 7:n=""+arguments[6]+n;
case 6:n=""+arguments[5]+n;case 5:n=""+arguments[4]+n;case 4:n=""+arguments[3]+n;case 3:
n=""+arguments[2]+n;case 2:e+=""+arguments[0]+arguments[1]+n;break;default:for(var r=0;r<arguments.length;)n+=arguments[r++];
e+=n}}else e+=t;return this.length=e.length,this},this.concat=function(t){return this.append.apply(this,arguments);
},this.appendArray=function(t){return this.append.apply(this,t)},this.clear=function(){
return e="",this.length=0,this},this.replace=function(t,n){return e=e.replace(t,n),
this.length=e.length,this},this.remove=function(t,n){return void 0===n&&(n=e.length),
0==n?this:(e=e.substr(0,t)+e.substr(t+n),this.length=e.length,this)},this.insert=function(t,n){
return e=0==t?n+e:e.slice(0,t)+n+e.slice(t),this.length=e.length,this},this.toString=function(){
return e},t&&this.append(t)};return e});