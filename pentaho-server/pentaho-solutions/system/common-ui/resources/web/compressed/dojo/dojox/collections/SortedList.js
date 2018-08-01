define(["dojo/_base/kernel","dojo/_base/array","./_base"],function(t,n,e){return e.SortedList=function(n){
var r=this,i={},o=[],u=function(t,n){return t.key>n.key?1:t.key<n.key?-1:0},s=function(){
o=[];for(var t=r.getIterator();!t.atEnd();)o.push(t.get());o.sort(u)},a={};if(this.count=o.length,
this.add=function(t,n){i[t]||(i[t]=new e.DictionaryEntry(t,n),this.count=o.push(i[t]),
o.sort(u))},this.clear=function(){i={},o=[],this.count=o.length},this.clone=function(){
return new e.SortedList(this)},this.contains=this.containsKey=function(t){return a[t]?!1:null!=i[t];
},this.containsValue=function(t){for(var n=this.getIterator();!n.atEnd();){var e=n.get();
if(e.value==t)return!0}return!1},this.copyTo=function(t,n){for(var e=this.getIterator(),r=n;!e.atEnd();)t.splice(r,0,e.get()),
r++},this.entry=function(t){return i[t]},this.forEach=function(n,e){t.forEach(o,n,e);
},this.getByIndex=function(t){return o[t].valueOf()},this.getIterator=function(){
return new e.DictionaryIterator(i)},this.getKey=function(t){return o[t].key},this.getKeyList=function(){
for(var t=[],n=this.getIterator();!n.atEnd();)t.push(n.get().key);return t},this.getValueList=function(){
for(var t=[],n=this.getIterator();!n.atEnd();)t.push(n.get().value);return t},this.indexOfKey=function(t){
for(var n=0;n<o.length;n++)if(o[n].key==t)return n;return-1},this.indexOfValue=function(t){
for(var n=0;n<o.length;n++)if(o[n].value==t)return n;return-1},this.item=function(t){
return t in i&&!a[t]?i[t].valueOf():void 0},this.remove=function(t){delete i[t],s(),
this.count=o.length},this.removeAt=function(t){delete i[o[t].key],s(),this.count=o.length;
},this.replace=function(t,n){return i[t]?(i[t]=new e.DictionaryEntry(t,n),s(),!0):(this.add(t,n),
!1)},this.setByIndex=function(t,n){i[o[t].key].value=n,s(),this.count=o.length},n){
for(var h=n.getIterator();!h.atEnd();){var c=h.get();o[o.length]=i[c.key]=new e.DictionaryEntry(c.key,c.value);
}o.sort(u)}},e.SortedList});