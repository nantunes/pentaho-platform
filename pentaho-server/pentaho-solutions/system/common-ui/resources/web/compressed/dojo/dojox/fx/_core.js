define(["dojo/_base/lang","dojo/_base/array","./_base"],function(t,n,i){var r=function(i,r){
this.start=i,this.end=r;var a=t.isArray(i),s=a?[]:r-i;a?(n.forEach(this.start,function(t,n){
s[n]=this.end[n]-t},this),this.getValue=function(t){var i=[];return n.forEach(this.start,function(n,r){
i[r]=s[r]*t+n},this),i}):this.getValue=function(t){return s*t+this.start}};return i._Line=r,
r});