define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","./lambda"],function(e,n,t,l){
var r={};return n.mixin(l,{filter:function(t,f,a){"string"==typeof t&&(t=t.split("")),
a=a||e.global,f=l.lambda(f);var i,o,s,u=[];if(n.isArray(t))for(o=0,s=t.length;s>o;++o)i=t[o],
f.call(a,i,o,t)&&u.push(i);else if("function"==typeof t.hasNext&&"function"==typeof t.next)for(o=0;t.hasNext();)i=t.next(),
f.call(a,i,o++,t)&&u.push(i);else for(o in t)o in r||(i=t[o],f.call(a,i,o,t)&&u.push(i));
return u},forEach:function(t,f,a){"string"==typeof t&&(t=t.split("")),a=a||e.global,
f=l.lambda(f);var i,o;if(n.isArray(t))for(i=0,o=t.length;o>i;f.call(a,t[i],i,t),++i);else if("function"==typeof t.hasNext&&"function"==typeof t.next)for(i=0;t.hasNext();f.call(a,t.next(),i++,t));else for(i in t)i in r||f.call(a,t[i],i,t);
return a},map:function(t,f,a){"string"==typeof t&&(t=t.split("")),a=a||e.global,f=l.lambda(f);
var i,o,s;if(n.isArray(t))for(i=new Array(o=t.length),s=0;o>s;i[s]=f.call(a,t[s],s,t),
++s);else if("function"==typeof t.hasNext&&"function"==typeof t.next)for(i=[],s=0;t.hasNext();i.push(f.call(a,t.next(),s++,t)));else{
i=[];for(s in t)s in r||i.push(f.call(a,t[s],s,t))}return i},every:function(t,f,a){
"string"==typeof t&&(t=t.split("")),a=a||e.global,f=l.lambda(f);var i,o;if(n.isArray(t)){
for(i=0,o=t.length;o>i;++i)if(!f.call(a,t[i],i,t))return!1}else if("function"==typeof t.hasNext&&"function"==typeof t.next){
for(i=0;t.hasNext();)if(!f.call(a,t.next(),i++,t))return!1}else for(i in t)if(!(i in r||f.call(a,t[i],i,t)))return!1;
return!0},some:function(t,f,a){"string"==typeof t&&(t=t.split("")),a=a||e.global,
f=l.lambda(f);var i,o;if(n.isArray(t)){for(i=0,o=t.length;o>i;++i)if(f.call(a,t[i],i,t))return!0;
}else if("function"==typeof t.hasNext&&"function"==typeof t.next){for(i=0;t.hasNext();)if(f.call(a,t.next(),i++,t))return!0;
}else for(i in t)if(!(i in r)&&f.call(a,t[i],i,t))return!0;return!1}}),l});