define(["dojo/_base/lang","dojo/_base/array","./_base"],function(t,o,r){function a(t,a,s){
var n=new r.Palette;return n.colors=[],o.forEach(t.colors,function(t){var o="dr"==a?t.r+s:t.r,e="dg"==a?t.g+s:t.g,h="db"==a?t.b+s:t.b,v="da"==a?t.a+s:t.a;
n.colors.push(new r.Color({r:Math.min(255,Math.max(0,o)),g:Math.min(255,Math.max(0,e)),
b:Math.min(255,Math.max(0,h)),a:Math.min(1,Math.max(0,v))}))}),n}function s(t,a,s){
var n=new r.Palette;return n.colors=[],o.forEach(t.colors,function(t){var o=t.toCmy(),e="dc"==a?o.c+s:o.c,h="dm"==a?o.m+s:o.m,v="dy"==a?o.y+s:o.y;
n.colors.push(r.fromCmy(Math.min(100,Math.max(0,e)),Math.min(100,Math.max(0,h)),Math.min(100,Math.max(0,v))));
}),n}function n(t,a,s){var n=new r.Palette;return n.colors=[],o.forEach(t.colors,function(t){
var o=t.toCmyk(),e="dc"==a?o.c+s:o.c,h="dm"==a?o.m+s:o.m,v="dy"==a?o.y+s:o.y,i="dk"==a?o.b+s:o.b;
n.colors.push(r.fromCmyk(Math.min(100,Math.max(0,e)),Math.min(100,Math.max(0,h)),Math.min(100,Math.max(0,v)),Math.min(100,Math.max(0,i))));
}),n}function e(t,a,s){var n=new r.Palette;return n.colors=[],o.forEach(t.colors,function(t){
var o=t.toHsl(),e="dh"==a?o.h+s:o.h,h="ds"==a?o.s+s:o.s,v="dl"==a?o.l+s:o.l;n.colors.push(r.fromHsl(e%360,Math.min(100,Math.max(0,h)),Math.min(100,Math.max(0,v))));
}),n}function h(t,a,s){var n=new r.Palette;return n.colors=[],o.forEach(t.colors,function(t){
var o=t.toHsv(),e="dh"==a?o.h+s:o.h,h="ds"==a?o.s+s:o.s,v="dv"==a?o.v+s:o.v;n.colors.push(r.fromHsv(e%360,Math.min(100,Math.max(0,h)),Math.min(100,Math.max(0,v))));
}),n}function v(t,o,r){return r-(r-t)*((r-o)/r)}return r.Palette=function(a){this.colors=[],
a instanceof r.Palette?this.colors=a.colors.slice(0):a instanceof r.Color?this.colors=[null,null,a,null,null]:t.isArray(a)?this.colors=o.map(a.slice(0),function(o){
return t.isString(o)?new r.Color(o):o}):t.isString(a)&&(this.colors=[null,null,new r.Color(a),null,null]);
},t.extend(r.Palette,{transform:function(t){var o=a;if(t.use){var r=t.use.toLowerCase();
0==r.indexOf("hs")?o="l"==r.charAt(2)?e:h:0==r.indexOf("cmy")&&(o="k"==r.charAt(3)?n:s);
}else"dc"in t||"dm"in t||"dy"in t?o="dk"in t?n:s:("dh"in t||"ds"in t)&&(o="dv"in t?h:e);
var v=this;for(var i in t)"use"!=i&&(v=o(v,i,t[i]));return v},clone:function(){return new r.Palette(this);
}}),t.mixin(r.Palette,{generators:{analogous:function(a){var s=a.high||60,n=a.low||18,e=t.isString(a.base)?new r.Color(a.base):a.base,h=e.toHsv(),v=[(h.h+n+360)%360,(h.h+Math.round(n/2)+360)%360,h.h,(h.h-Math.round(s/2)+360)%360,(h.h-s+360)%360],i=Math.max(10,h.s<=95?h.s+5:100-(h.s-95)),m=h.s>1?h.s-1:21-h.s,l=h.v>=92?h.v-9:Math.max(h.v+9,20),c=h.v<=90?Math.max(h.v+5,20):95+Math.ceil((h.v-90)/2),f=[i,m,h.s,i,i],u=[l,c,h.v,l,c];
return new r.Palette(o.map(v,function(t,o){return r.fromHsv(t,f[o],u[o])}))},monochromatic:function(o){
var a=t.isString(o.base)?new r.Color(o.base):o.base,s=a.toHsv(),n=s.s-30>9?s.s-30:s.s+30,e=s.s,h=v(s.v,20,100),i=s.v-20>20?s.v-20:s.v+60,m=s.v-50>20?s.v-50:s.v+30;
return new r.Palette([r.fromHsv(s.h,n,h),r.fromHsv(s.h,e,m),a,r.fromHsv(s.h,n,m),r.fromHsv(s.h,e,i)]);
},triadic:function(o){var a=t.isString(o.base)?new r.Color(o.base):o.base,s=a.toHsv(),n=(s.h+57+360)%360,e=(s.h-157+360)%360,h=s.s>20?s.s-10:s.s+10,v=s.s>90?s.s-10:s.s+10,i=s.s>95?s.s-5:s.s+5,m=s.v-20>20?s.v-20:s.v+20,l=s.v-30>20?s.v-30:s.v+30,c=s.v-30>70?s.v-30:s.v+30;
return new r.Palette([r.fromHsv(n,h,s.v),r.fromHsv(s.h,v,l),a,r.fromHsv(e,v,m),r.fromHsv(e,i,c)]);
},complementary:function(o){var a=t.isString(o.base)?new r.Color(o.base):o.base,s=a.toHsv(),n=2*s.h+137<360?2*s.h+137:Math.floor(s.h/2)-137,e=Math.max(s.s-10,0),h=v(s.s,10,100),i=Math.min(100,s.s+20),m=Math.min(100,s.v+30),l=s.v>20?s.v-30:s.v+30;
return new r.Palette([r.fromHsv(s.h,e,m),r.fromHsv(s.h,h,l),a,r.fromHsv(n,i,l),r.fromHsv(n,s.s,s.v)]);
},splitComplementary:function(o){var a=t.isString(o.base)?new r.Color(o.base):o.base,s=o.da||30,n=a.toHsv(),e=2*n.h+137<360?2*n.h+137:Math.floor(n.h/2)-137,h=(e-s+360)%360,i=(e+s)%360,m=Math.max(n.s-10,0),l=v(n.s,10,100),c=Math.min(100,n.s+20),f=Math.min(100,n.v+30),u=n.v>20?n.v-30:n.v+30;
return new r.Palette([r.fromHsv(h,m,f),r.fromHsv(h,l,u),a,r.fromHsv(i,c,u),r.fromHsv(i,n.s,n.v)]);
},compound:function(o){var a=t.isString(o.base)?new r.Color(o.base):o.base,s=a.toHsv(),n=2*s.h+18<360?2*s.h+18:Math.floor(s.h/2)-18,e=2*s.h+120<360?2*s.h+120:Math.floor(s.h/2)-120,h=2*s.h+99<360?2*s.h+99:Math.floor(s.h/2)-99,v=s.s-40>10?s.s-40:s.s+40,i=s.s-10>80?s.s-10:s.s+10,m=s.s-25>10?s.s-25:s.s+25,l=s.v-40>10?s.v-40:s.v+40,c=s.v-20>80?s.v-20:s.v+20,f=Math.max(s.v,20);
return new r.Palette([r.fromHsv(n,v,l),r.fromHsv(n,i,c),a,r.fromHsv(e,m,f),r.fromHsv(h,i,c)]);
},shades:function(o){var a=t.isString(o.base)?new r.Color(o.base):o.base,s=a.toHsv(),n=100==s.s&&0==s.v?0:s.s,e=s.v-50>20?s.v-50:s.v+30,h=s.v-25>=20?s.v-25:s.v+55,v=s.v-75>=20?s.v-75:s.v+5,i=Math.max(s.v-10,20);
return new r.Palette([new r.fromHsv(s.h,n,e),new r.fromHsv(s.h,n,h),a,new r.fromHsv(s.h,n,v),new r.fromHsv(s.h,n,i)]);
}},generate:function(o,a){if(t.isFunction(a))return a({base:o});if(r.Palette.generators[a])return r.Palette.generators[a]({
base:o});throw new Error("dojox.color.Palette.generate: the specified generator ('"+a+"') does not exist.");
}}),r.Palette});