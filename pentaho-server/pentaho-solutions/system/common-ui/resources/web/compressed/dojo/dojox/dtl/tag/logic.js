define(["dojo/_base/lang","../_base"],function(e,t){var s=e.getObject("tag.logic",!0,t);
t.text;return s.IfNode=e.extend(function(e,t,s,r){this.bools=e,this.trues=t,this.falses=s,
this.type=r},{render:function(e,t){var s,r,n,i,o;if("or"==this.type){for(s=0;r=this.bools[s];s++)if(n=r[0],
i=r[1],o=i.resolve(e),o&&!n||n&&!o)return this.falses&&(t=this.falses.unrender(e,t)),
this.trues?this.trues.render(e,t,this):t;return this.trues&&(t=this.trues.unrender(e,t)),
this.falses?this.falses.render(e,t,this):t}for(s=0;r=this.bools[s];s++)if(n=r[0],
i=r[1],o=i.resolve(e),o==n)return this.trues&&(t=this.trues.unrender(e,t)),this.falses?this.falses.render(e,t,this):t;
return this.falses&&(t=this.falses.unrender(e,t)),this.trues?this.trues.render(e,t,this):t;
},unrender:function(e,t){return t=this.trues?this.trues.unrender(e,t):t,t=this.falses?this.falses.unrender(e,t):t;
},clone:function(e){var t=this.trues?this.trues.clone(e):null,s=this.falses?this.falses.clone(e):null;
return new this.constructor(this.bools,t,s,this.type)}}),s.IfEqualNode=e.extend(function(e,s,r,n,i){
this.var1=new t._Filter(e),this.var2=new t._Filter(s),this.trues=r,this.falses=n,
this.negate=i},{render:function(e,t){var s=this.var1.resolve(e),r=this.var2.resolve(e);
return s="undefined"!=typeof s?s:"",r="undefined"!=typeof s?r:"",this.negate&&s!=r||!this.negate&&s==r?(this.falses&&(t=this.falses.unrender(e,t,this)),
this.trues?this.trues.render(e,t,this):t):(this.trues&&(t=this.trues.unrender(e,t,this)),
this.falses?this.falses.render(e,t,this):t)},unrender:function(e,t){return s.IfNode.prototype.unrender.call(this,e,t);
},clone:function(e){var t=this.trues?this.trues.clone(e):null,s=this.falses?this.falses.clone(e):null;
return new this.constructor(this.var1.getExpression(),this.var2.getExpression(),t,s,this.negate);
}}),s.ForNode=e.extend(function(e,s,r,n){this.assign=e,this.loop=new t._Filter(s),
this.reversed=r,this.nodelist=n,this.pool=[]},{render:function(t,s){var r,n,i,o=!1,h=this.assign;
for(i=0;i<h.length;i++)if("undefined"!=typeof t[h[i]]){o=!0,t=t.push();break}!o&&t.forloop&&(o=!0,
t=t.push());var l=this.loop.resolve(t)||[],u=e.isObject(l)&&!e.isArrayLike(l),f=[];
if(u)for(var a in l)f.push(l[a]);else f=l;for(r=f.length;r<this.pool.length;r++)this.pool[r].unrender(t,s,this);
this.reversed&&(f=f.slice(0).reverse());var d=t.forloop={parentloop:t.get("forloop",{})
},n=0;for(r=0;r<f.length;r++){var c=f[r];if(d.counter0=n,d.counter=n+1,d.revcounter0=f.length-n-1,
d.revcounter=f.length-n,d.first=!n,d.last=n==f.length-1,h.length>1&&e.isArrayLike(c)){
o||(o=!0,t=t.push());var p={};for(i=0;i<c.length&&i<h.length;i++)p[h[i]]=c[i];e.mixin(t,p);
}else t[h[0]]=c;n+1>this.pool.length&&this.pool.push(this.nodelist.clone(s)),s=this.pool[n++].render(t,s,this);
}if(delete t.forloop,o)t=t.pop();else for(i=0;i<h.length;i++)delete t[h[i]];return s;
},unrender:function(e,t){for(var s,r=0;s=this.pool[r];r++)t=s.unrender(e,t);return t;
},clone:function(e){return new this.constructor(this.assign,this.loop.getExpression(),this.reversed,this.nodelist.clone(e));
}}),e.mixin(s,{if_:function(e,r){var n,i,o,h=[],l=r.contents.split();if(l.shift(),
r=l.join(" "),l=r.split(" and "),1==l.length)o="or",l=r.split(" or ");else for(o="and",
n=0;n<l.length;n++)if(-1!=l[n].indexOf(" or "))throw new Error("'if' tags can't mix 'and' and 'or'");
for(n=0;i=l[n];n++){var u=!1;0==i.indexOf("not ")&&(i=i.slice(4),u=!0),h.push([u,new t._Filter(i)]);
}var f=e.parse(["else","endif"]),a=!1,r=e.next_token();return"else"==r.contents&&(a=e.parse(["endif"]),
e.next_token()),new s.IfNode(h,f,a,o)},_ifequal:function(e,t,r){var n=t.split_contents();
if(3!=n.length)throw new Error(n[0]+" takes two arguments");var i="end"+n[0],o=e.parse(["else",i]),h=!1,t=e.next_token();
return"else"==t.contents&&(h=e.parse([i]),e.next_token()),new s.IfEqualNode(n[1],n[2],o,h,r);
},ifequal:function(e,t){return s._ifequal(e,t)},ifnotequal:function(e,t){return s._ifequal(e,t,!0);
},for_:function(e,t){var r=t.contents.split();if(r.length<4)throw new Error("'for' statements should have at least four words: "+t.contents);
var n="reversed"==r[r.length-1],i=n?-3:-2;if("in"!=r[r.length+i])throw new Error("'for' tag received an invalid argument: "+t.contents);
for(var o=r.slice(1,i).join(" ").split(/ *, */),h=0;h<o.length;h++)if(!o[h]||-1!=o[h].indexOf(" "))throw new Error("'for' tag received an invalid argument: "+t.contents);
var l=e.parse(["endfor"]);return e.next_token(),new s.ForNode(o,r[r.length+i+1],n,l);
}}),s});