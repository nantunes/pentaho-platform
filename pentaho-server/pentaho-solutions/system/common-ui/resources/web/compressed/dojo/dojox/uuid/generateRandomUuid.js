define(["./_base"],function(){return dojox.uuid.generateRandomUuid=function(){function n(){
for(var n=Math.floor(Math.random()%1*Math.pow(2,32)),t=n.toString(r);t.length<8;)t="0"+t;
return t}var r=16,t="-",o="4",u="8",e=n(),a=n();a=a.substring(0,4)+t+o+a.substring(5,8);
var i=n();i=u+i.substring(1,4)+t+i.substring(4,8);var d=n(),s=e+t+a+t+i+d;return s=s.toLowerCase();
},dojox.uuid.generateRandomUuid});