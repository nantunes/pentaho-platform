define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/connect","dojo/dom-style","dojo/dom-construct","../_base","../dom"],function(e,t,n,o,s,i,r){
var d=t.getObject("contrib.dom",!0,i),h={render:function(){return this.contents}};
return d.StyleNode=t.extend(function(e){this.contents={},this._current={},this._styles=e;
for(var n in e){if(-1!=e[n].indexOf("{{"))var o=new i.Template(e[n]);else{var o=t.delegate(h);
o.contents=e[n]}this.contents[n]=o}},{render:function(e,t){for(var n in this.contents){
var s=this.contents[n].render(e);this._current[n]!=s&&o.set(t.getParent(),n,this._current[n]=s);
}return t},unrender:function(e,t){return this._current={},t},clone:function(e){return new this.constructor(this._styles);
}}),d.BufferNode=t.extend(function(e,t){this.nodelist=e,this.options=t},{_swap:function(e,t){
if(!this.swapped&&this.parent.parentNode){if("node"==e){if(3==t.nodeType&&!this.options.text||1==t.nodeType&&!this.options.node)return;
}else if("class"==e&&"class"!=e)return;this.onAddNode&&n.disconnect(this.onAddNode),
this.onRemoveNode&&n.disconnect(this.onRemoveNode),this.onChangeAttribute&&n.disconnect(this.onChangeAttribute),
this.onChangeData&&n.disconnect(this.onChangeData),this.swapped=this.parent.cloneNode(!0),
this.parent.parentNode.replaceChild(this.swapped,this.parent)}},render:function(e,o){
return this.parent=o.getParent(),this.options.node&&(this.onAddNode=n.connect(o,"onAddNode",t.hitch(this,"_swap","node")),
this.onRemoveNode=n.connect(o,"onRemoveNode",t.hitch(this,"_swap","node"))),this.options.text&&(this.onChangeData=n.connect(o,"onChangeData",t.hitch(this,"_swap","node"))),
this.options["class"]&&(this.onChangeAttribute=n.connect(o,"onChangeAttribute",t.hitch(this,"_swap","class"))),
o=this.nodelist.render(e,o),this.swapped?(this.swapped.parentNode.replaceChild(this.parent,this.swapped),
s.destroy(this.swapped)):(this.onAddNode&&n.disconnect(this.onAddNode),this.onRemoveNode&&n.disconnect(this.onRemoveNode),
this.onChangeAttribute&&n.disconnect(this.onChangeAttribute),this.onChangeData&&n.disconnect(this.onChangeData)),
delete this.parent,delete this.swapped,o},unrender:function(e,t){return this.nodelist.unrender(e,t);
},clone:function(e){return new this.constructor(this.nodelist.clone(e),this.options);
}}),t.mixin(d,{buffer:function(e,t){for(var n=t.contents.split().slice(1),o={},s=!1,i=n.length;i--;)s=!0,
o[n[i]]=!0;s||(o.node=!0);var r=e.parse(["endbuffer"]);return e.next_token(),new d.BufferNode(r,o);
},html:function(t,n){return e.deprecated("{% html someVariable %}","Use {{ someVariable|safe }} instead"),
t.create_variable_node(n.contents.slice(5)+"|safe")},style_:function(e,n){var o={};
n=n.contents.replace(/^style\s+/,"");for(var s,i=n.split(/\s*;\s*/g),r=0;s=i[r];r++){
var h=s.split(/\s*:\s*/g),a=h[0],c=t.trim(h[1]);c&&(o[a]=c)}return new d.StyleNode(o);
}}),i.register.tags("dojox.dtl.contrib",{dom:["html","attr:style","buffer"]}),d});