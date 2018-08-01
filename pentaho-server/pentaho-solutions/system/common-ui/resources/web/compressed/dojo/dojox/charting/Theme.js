define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","./SimpleTheme","dojox/color/_base","dojox/color/Palette","dojox/gfx/gradutils"],function(e,o,r,a,t,n){
var l=o("dojox.charting.Theme",a,{});return e.mixin(l,{defineColors:function(e){e=e||{};
var o,r=[],a=e.num||5;if(e.colors){o=e.colors.length;for(var l=0;a>l;l++)r.push(e.colors[l%o]);
return r}if(e.hue){var s=e.saturation||100,f=e.low||30,u=e.high||90;return o=(u+f)/2,
n.generate(t.fromHsv(e.hue,s,o),"monochromatic").colors}return e.generator?t.Palette.generate(e.base,e.generator).colors:r;
},generateGradient:function(o,r,a){var t=e.delegate(o);return t.colors=[{offset:0,
color:r},{offset:1,color:a}],t},generateHslColor:function(e,o){e=new r(e);var a=e.toHsl(),n=t.fromHsl(a.h,a.s,o);
return n.a=e.a,n},generateHslGradient:function(e,o,a,n){e=new r(e);var s=e.toHsl(),f=t.fromHsl(s.h,s.s,a),u=t.fromHsl(s.h,s.s,n);
return f.a=u.a=e.a,l.generateGradient(o,f,u)}}),l.defaultMarkers=a.defaultMarkers,
l.defaultColors=a.defaultColors,l.defaultTheme=a.defaultTheme,l});