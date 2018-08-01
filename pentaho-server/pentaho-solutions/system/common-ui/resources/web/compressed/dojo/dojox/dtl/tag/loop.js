define(["dojo/_base/lang","dojo/_base/array","dojo/_base/json","../_base","dojox/string/tokenize"],function(e,n,t,r,s){
var o=e.getObject("tag.loop",!0,r);return o.CycleNode=e.extend(function(e,n,t,r){
this.cyclevars=e,this.name=n,this.contents=t,this.shared=r||{counter:-1,map:{}}},{
render:function(e,n){e.forloop&&!e.forloop.counter0&&(this.shared.counter=-1),++this.shared.counter;
var t=this.cyclevars[this.shared.counter%this.cyclevars.length],s=this.shared.map;
return s[t]||(s[t]=new r._Filter(t)),t=s[t].resolve(e,n),this.name&&(e[this.name]=t),
this.contents.set(t),this.contents.render(e,n)},unrender:function(e,n){return this.contents.unrender(e,n);
},clone:function(e){return new this.constructor(this.cyclevars,this.name,this.contents.clone(e),this.shared);
}}),o.IfChangedNode=e.extend(function(e,t,r){this.nodes=e,this._vars=t,this.shared=r||{
last:null,counter:0},this.vars=n.map(t,function(e){return new dojox.dtl._Filter(e);
})},{render:function(e,r){e.forloop&&(e.forloop.counter<=this.shared.counter&&(this.shared.last=null),
this.shared.counter=e.forloop.counter);var s;if(s=this.vars.length?t.toJson(n.map(this.vars,function(n){
return n.resolve(e)})):this.nodes.dummyRender(e,r),s!=this.shared.last){var o=null===this.shared.last;
this.shared.last=s,e=e.push(),e.ifchanged={firstloop:o},r=this.nodes.render(e,r),
e=e.pop()}else r=this.nodes.unrender(e,r);return r},unrender:function(e,n){return this.nodes.unrender(e,n);
},clone:function(e){return new this.constructor(this.nodes.clone(e),this._vars,this.shared);
}}),o.RegroupNode=e.extend(function(e,n,t){this._expression=e,this.expression=new r._Filter(e),
this.key=n,this.alias=t},{_push:function(e,n,t){t.length&&e.push({grouper:n,list:t
})},render:function(e,n){e[this.alias]=[];var t=this.expression.resolve(e);if(t){
for(var r=null,s=[],o=0;o<t.length;o++){var i=t[o][this.key];r!==i?(this._push(e[this.alias],r,s),
r=i,s=[t[o]]):s.push(t[o])}this._push(e[this.alias],r,s)}return n},unrender:function(e,n){
return n},clone:function(e,n){return this}}),e.mixin(o,{cycle:function(e,n){var t=n.split_contents();
if(t.length<2)throw new Error("'cycle' tag requires at least two arguments");if(-1!=t[1].indexOf(",")){
var r=t[1].split(",");t=[t[0]];for(var s=0;s<r.length;s++)t.push('"'+r[s]+'"')}if(2==t.length){
var i=t[t.length-1];if(!e._namedCycleNodes)throw new Error("No named cycles in template: '"+i+"' is not defined");
if(!e._namedCycleNodes[i])throw new Error("Named cycle '"+i+"' does not exist");return e._namedCycleNodes[i];
}if(t.length>4&&"as"==t[t.length-2]){var i=t[t.length-1],h=new o.CycleNode(t.slice(1,t.length-2),i,e.create_text_node());
e._namedCycleNodes||(e._namedCycleNodes={}),e._namedCycleNodes[i]=h}else h=new o.CycleNode(t.slice(1),null,e.create_text_node());
return h},ifchanged:function(e,n){var t=n.contents.split(),r=e.parse(["endifchanged"]);
return e.delete_first_token(),new o.IfChangedNode(r,t.slice(1))},regroup:function(e,n){
var t=s(n.contents,/(\s+)/g,function(e){return e});if(t.length<11||"as"!=t[t.length-3]||"by"!=t[t.length-7])throw new Error("Expected the format: regroup list by key as newList");
var r=t.slice(2,-8).join(""),i=t[t.length-5],h=t[t.length-1];return new o.RegroupNode(r,i,h);
}}),o});