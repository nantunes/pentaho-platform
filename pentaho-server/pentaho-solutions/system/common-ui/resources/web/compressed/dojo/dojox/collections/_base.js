define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array"],function(t,n,e){
var i=n.getObject("dojox.collections",!0);return i.DictionaryEntry=function(t,n){
this.key=t,this.value=n,this.valueOf=function(){return this.value},this.toString=function(){
return String(this.value)}},i.Iterator=function(t){var n=0;this.element=t[n]||null,
this.atEnd=function(){return n>=t.length},this.get=function(){return this.atEnd()?null:(this.element=t[n++],
this.element)},this.map=function(n,i){return e.map(t,n,i)},this.reset=function(){
n=0,this.element=t[n]}},i.DictionaryIterator=function(t){var n=[],i={};for(var r in t)i[r]||n.push(t[r]);
var u=0;this.element=n[u]||null,this.atEnd=function(){return u>=n.length},this.get=function(){
return this.atEnd()?null:(this.element=n[u++],this.element)},this.map=function(t,i){
return e.map(n,t,i)},this.reset=function(){u=0,this.element=n[u]}},i});