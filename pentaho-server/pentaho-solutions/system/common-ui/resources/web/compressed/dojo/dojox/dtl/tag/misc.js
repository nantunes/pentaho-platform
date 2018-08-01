define(["dojo/_base/lang","dojo/_base/array","dojo/_base/connect","../_base"],function(e,t,n,r){
var o=e.getObject("tag.misc",!0,r);return o.DebugNode=e.extend(function(e){this.text=e;
},{render:function(e,t){for(var n,r=e.getKeys(),o=[],i={},s=0;n=r[s];s++)i[n]=e[n],
o+="["+n+": "+typeof e[n]+"]\n";return console.debug(i),this.text.set(o).render(e,t,this);
},unrender:function(e,t){return t},clone:function(e){return new this.constructor(this.text.clone(e));
},toString:function(){return"ddtm.DebugNode"}}),o.FilterNode=e.extend(function(e,t){
this._varnode=e,this._nodelist=t},{render:function(e,t){var n=this._nodelist.render(e,new dojox.string.Builder);
e=e.update({"var":n.toString()});this._varnode.render(e,t);return e=e.pop(),t},unrender:function(e,t){
return t},clone:function(e){return new this.constructor(this._expression,this._nodelist.clone(e));
}}),o.FirstOfNode=e.extend(function(e,n){this._vars=e,this.vars=t.map(e,function(e){
return new dojox.dtl._Filter(e)}),this.contents=n},{render:function(e,t){for(var n,r=0;n=this.vars[r];r++){
var o=n.resolve(e);if("undefined"!=typeof o)return null===o&&(o="null"),this.contents.set(o),
this.contents.render(e,t)}return this.contents.unrender(e,t)},unrender:function(e,t){
return this.contents.unrender(e,t)},clone:function(e){return new this.constructor(this._vars,this.contents.clone(e));
}}),o.SpacelessNode=e.extend(function(e,t){this.nodelist=e,this.contents=t},{render:function(e,t){
if(t.getParent){var r=[n.connect(t,"onAddNodeComplete",this,"_watch"),n.connect(t,"onSetParent",this,"_watchParent")];
t=this.nodelist.render(e,t),n.disconnect(r[0]),n.disconnect(r[1])}else{var o=this.nodelist.dummyRender(e);
this.contents.set(o.replace(/>\s+</g,"><")),t=this.contents.render(e,t)}return t},
unrender:function(e,t){return this.nodelist.unrender(e,t)},clone:function(e){return new this.constructor(this.nodelist.clone(e),this.contents.clone(e));
},_isEmpty:function(e){return 3==e.nodeType&&!e.data.match(/[^\s\n]/)},_watch:function(e){
if(this._isEmpty(e)){e.parentNode.firstChild==e&&e.parentNode.removeChild(e)}else{
var t=e.parentNode.childNodes;if(1==e.nodeType&&t.length>2)for(var n,r=2;n=t[r];r++)if(1==t[r-2].nodeType&&this._isEmpty(t[r-1]))return void e.parentNode.removeChild(t[r-1]);
}},_watchParent:function(e){var t=e.childNodes;if(t.length)for(;e.childNodes.length;){
var n=e.childNodes[e.childNodes.length-1];if(!this._isEmpty(n))return;e.removeChild(n);
}}}),o.TemplateTagNode=e.extend(function(e,t){this.tag=e,this.contents=t},{mapping:{
openblock:"{%",closeblock:"%}",openvariable:"{{",closevariable:"}}",openbrace:"{",
closebrace:"}",opencomment:"{#",closecomment:"#}"},render:function(e,t){return this.contents.set(this.mapping[this.tag]),
this.contents.render(e,t)},unrender:function(e,t){return this.contents.unrender(e,t);
},clone:function(e){return new this.constructor(this.tag,this.contents.clone(e))}
}),o.WidthRatioNode=e.extend(function(e,t,n,o){this.current=new r._Filter(e),this.max=new r._Filter(t),
this.width=n,this.contents=o},{render:function(e,t){var n=+this.current.resolve(e),r=+this.max.resolve(e);
return"number"==typeof n&&"number"==typeof r&&r?this.contents.set(""+Math.round(n/r*this.width)):this.contents.set(""),
this.contents.render(e,t)},unrender:function(e,t){return this.contents.unrender(e,t);
},clone:function(e){return new this.constructor(this.current.getExpression(),this.max.getExpression(),this.width,this.contents.clone(e));
}}),o.WithNode=e.extend(function(e,t,n){this.target=new r._Filter(e),this.alias=t,
this.nodelist=n},{render:function(e,t){var n=this.target.resolve(e);return e=e.push(),
e[this.alias]=n,t=this.nodelist.render(e,t),e=e.pop(),t},unrender:function(e,t){return t;
},clone:function(e){return new this.constructor(this.target.getExpression(),this.alias,this.nodelist.clone(e));
}}),e.mixin(o,{comment:function(e,t){return e.skip_past("endcomment"),r._noOpNode;
},debug:function(e,t){return new o.DebugNode(e.create_text_node())},filter:function(e,t){
var n=t.contents.split(null,1)[1],r=e.create_variable_node("var|"+n),i=e.parse(["endfilter"]);
return e.next_token(),new o.FilterNode(r,i)},firstof:function(e,t){var n=t.split_contents().slice(1);
if(!n.length)throw new Error("'firstof' statement requires at least one argument");
return new o.FirstOfNode(n,e.create_text_node())},spaceless:function(e,t){var n=e.parse(["endspaceless"]);
return e.delete_first_token(),new o.SpacelessNode(n,e.create_text_node())},templatetag:function(e,t){
var n=t.contents.split();if(2!=n.length)throw new Error("'templatetag' statement takes one argument");
var r=n[1],i=o.TemplateTagNode.prototype.mapping;if(!i[r]){var s=[];for(var c in i)s.push(c);
throw new Error("Invalid templatetag argument: '"+r+"'. Must be one of: "+s.join(", "));
}return new o.TemplateTagNode(r,e.create_text_node())},widthratio:function(e,t){var n=t.contents.split();
if(4!=n.length)throw new Error("widthratio takes three arguments");var r=+n[3];if("number"!=typeof r)throw new Error("widthratio final argument must be an integer");
return new o.WidthRatioNode(n[1],n[2],r,e.create_text_node())},with_:function(e,t){
var n=t.split_contents();if(4!=n.length||"as"!=n[2])throw new Error("do_width expected format as 'with value as name'");
var r=e.parse(["endwith"]);return e.next_token(),new o.WithNode(n[1],n[3],r)}}),o;
});