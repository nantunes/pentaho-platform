define(["./_base","dojo/_base/lang","dojox/math/matrix"],function(t,o,r){return t.Colorspace=new function(){
var o=this,n={2:{E:{x:1/3,y:1/3,t:5400},D50:{x:.34567,y:.3585,t:5e3},D55:{x:.33242,
y:.34743,t:5500},D65:{x:.31271,y:.32902,t:6500},D75:{x:.29902,y:.31485,t:7500},A:{
x:.44757,y:.40745,t:2856},B:{x:.34842,y:.35161,t:4874},C:{x:.31006,y:.31616,t:6774
},9300:{x:.2848,y:.2932,t:9300},F2:{x:.37207,y:.37512,t:4200},F7:{x:.31285,y:.32918,
t:6500},F11:{x:.38054,y:.37691,t:4e3}},10:{E:{x:1/3,y:1/3,t:5400},D50:{x:.34773,y:.35952,
t:5e3},D55:{x:.33411,y:.34877,t:5500},D65:{x:.31382,y:.331,t:6500},D75:{x:.29968,
y:.3174,t:7500},A:{x:.45117,y:.40594,t:2856},B:{x:.3498,y:.3527,t:4874},C:{x:.31039,
y:.31905,t:6774},F2:{x:.37928,y:.36723,t:4200},F7:{x:.31565,y:.32951,t:6500},F11:{
x:.38543,y:.3711,t:4e3}}},u={"Adobe RGB 98":[2.2,"D65",.64,.33,.297361,.21,.71,.627355,.15,.06,.075285],
"Apple RGB":[1.8,"D65",.625,.34,.244634,.28,.595,.672034,.155,.07,.083332],"Best RGB":[2.2,"D50",.7347,.2653,.228457,.215,.775,.737352,.13,.035,.034191],
"Beta RGB":[2.2,"D50",.6888,.3112,.303273,.1986,.7551,.663786,.1265,.0352,.032941],
"Bruce RGB":[2.2,"D65",.64,.33,.240995,.28,.65,.683554,.15,.06,.075452],"CIE RGB":[2.2,"E",.735,.265,.176204,.274,.717,.812985,.167,.009,.010811],
"ColorMatch RGB":[1.8,"D50",.63,.34,.274884,.295,.605,.658132,.15,.075,.066985],"DON RGB 4":[2.2,"D50",.696,.3,.27835,.215,.765,.68797,.13,.035,.03368],
"ECI RGB":[1.8,"D50",.67,.33,.32025,.21,.71,.602071,.14,.08,.077679],"EktaSpace PS5":[2.2,"D50",.695,.305,.260629,.26,.7,.734946,.11,.005,.004425],
"NTSC RGB":[2.2,"C",.67,.33,.298839,.21,.71,.586811,.14,.08,.11435],"PAL/SECAM RGB":[2.2,"D65",.64,.33,.222021,.29,.6,.706645,.15,.06,.071334],
"Pro Photo RGB":[1.8,"D50",.7347,.2653,.28804,.1596,.8404,.711874,.0366,1e-4,86e-6],
"SMPTE/C RGB":[2.2,"D65",.63,.34,.212395,.31,.595,.701049,.155,.07,.086556],sRGB:[2.2,"D65",.64,.33,.212656,.3,.6,.715158,.15,.06,.072186],
"Wide Gamut RGB":[2.2,"D50",.735,.265,.258187,.115,.826,.724938,.157,.018,.016875]
},i={"XYZ scaling":{ma:[[1,0,0],[0,1,0],[0,0,1]],mai:[[1,0,0],[0,1,0],[0,0,1]]},Bradford:{
ma:[[.8951,-.7502,.0389],[.2664,1.7135,-.0685],[-.1614,.0367,1.0296]],mai:[[.986993,.432305,-.008529],[-.147054,.51836,.040043],[.159963,.049291,.968487]]
},"Von Kries":{ma:[[.40024,-.2263,0],[.7076,1.16532,0],[-.08081,.0457,.91822]],mai:[[1.859936,.361191,0],[-1.129382,.638812,0],[.219897,-6e-6,1.089064]]
}},e={XYZ:{xyY:function(t,r){r=dojo.mixin({whitepoint:"D65",observer:"10",useApproximation:!0
},r||{});var n=o.whitepoint(r.whitepoint,r.observer),u=t.X+t.Y+t.Z;if(0==u)var i=n.x,e=n.y;else var i=t.X/u,e=t.Y/u;
return{x:i,y:e,Y:t.Y}},Lab:function(t,r){r=dojo.mixin({whitepoint:"D65",observer:"10",
useApproximation:!0},r||{});var n=o.kappa(r.useApproximation),u=o.epsilon(r.useApproximation),i=o.whitepoint(r.whitepoint,r.observer),e=t.X/i.x,a=t.Y/i.y,Y=t.z/i.z,f=e>u?Math.pow(e,1/3):(n*e+16)/116,L=a>u?Math.pow(a,1/3):(n*a+16)/116,c=Y>u?Math.pow(Y,1/3):(n*Y+16)/116,v=116*L-16,X=500*(f-L),Z=200*(L-c);
return{L:v,a:X,b:Z}},Luv:function(t,r){r=dojo.mixin({whitepoint:"D65",observer:"10",
useApproximation:!0},r||{});var n=o.kappa(r.useApproximation),u=o.epsilon(r.useApproximation),i=o.whitepoint(r.whitepoint,r.observer),e=4*t.X/(t.X+15*t.Y+3*t.Z),a=9*t.Y/(t.X+15*t.Y+3*t.Z),Y=4*i.x/(i.x+15*i.y+3*i.z),f=9*i.y/(i.x+15*i.y+3*i.z),L=t.Y/i.y,c=L>u?116*Math.pow(L,1/3)-16:n*L,v=13*c*(e-Y),X=13*c*(a-f);
return{L:c,u:v,v:X}}},xyY:{XYZ:function(t){if(0==t.y)var o=0,r=0,n=0;else var o=t.x*t.Y/t.y,r=t.Y,n=(1-t.x-t.y)*t.Y/t.y;
return{X:o,Y:r,Z:n}}},Lab:{XYZ:function(t,r){r=dojo.mixin({whitepoint:"D65",observer:"10",
useApproximation:!0},r||{});var n=r.useApproximation,u=o.kappa(n),i=o.epsilon(n),e=o.whitepoint(r.whitepoint,r.observer),a=t.L>u*i?Math.pow((t.L+16)/116,3):t.L/u,Y=a>i?(t.L+16)/116:(u*a+16)/116,f=t.a/500+Y,L=Y-t.b/200,c=Math.pow(f,3),v=Math.pow(L,3),X=c>i?c:(116*f-16)/u,Z=v>i?v:(116*L-16)/u;
return{X:X*e.x,Y:a*e.y,Z:Z*e.z}},LCHab:function(t){var o=t.L,r=Math.pow(t.a*t.a+t.b*t.b,.5),n=Math.atan(t.b,t.a)*(180/Math.PI);
return 0>n&&(n+=360),360>n&&(n-=360),{L:o,C:r,H:n}}},LCHab:{Lab:function(t){var o=t.H*(Math.PI/180),r=t.L,n=t.C/Math.pow(Math.pow(Math.tan(o),2)+1,.5);
90<lchH&&t.H<270&&(n=-n);var u=Math.pow(Math.pow(t.C,2)-Math.pow(n,2),.5);return t.H>180&&(u=-u),
{L:r,a:n,b:u}}},Luv:{XYZ:function(t,r){r=dojo.mixin({whitepoint:"D65",observer:"10",
useApproximation:!0},r||{});var n=r.useApproximation,u=o.kappa(n),i=o.epsilon(n),e=o.whitepoint(r.whitepoint,r.observer),a=4*e.x/(e.x+15*e.y+3*e.z),Y=9*e.y/(e.x+15*e.y+3*e.z),f=t.L>u*i?Math.pow((t.L+16)/116,3):t.L/u,L=1/3*(52*t.L/(t.u+13*t.L*a)-1),n=-5*f,c=-(1/3),v=f*(39*t.L/(t.v+13*t.L*Y)-5),X=(v-n)/(L-c),Z=X*L+n;
return{X:X,Y:f,Z:Z}},LCHuv:function(t){var o=t.L,r=Math.pow(t.u*t.u+t.v*t*v,.5),n=Math.atan(t.v,t.u)*(180/Math.PI);
return 0>n&&(n+=360),n>360&&(n-=360),{L:o,C:r,H:n}}},LCHuv:{Luv:function(t){var o=t.H*(Math.PI/180),r=t.L,n=t.C/Math.pow(Math.pow(Math.tan(o),2)+1,.5),u=Math.pow(t.C*t.C-n*n,.5);
return 90<t.H&&t.H>270&&(n*=-1),t.H>180&&(u*=-1),{L:r,u:n,v:u}}}},a={CMY:{CMYK:function(o,r){
return t.fromCmy(o).toCmyk()},HSL:function(o,r){return t.fromCmy(o).toHsl()},HSV:function(o,r){
return t.fromCmy(o).toHsv()},Lab:function(o,r){return e.XYZ.Lab(t.fromCmy(o).toXYZ(r));
},LCHab:function(t,o){return e.Lab.LCHab(a.CMY.Lab(t))},LCHuv:function(o,r){return e.LCHuv.Luv(e.Luv.XYZ(t.fromCmy(o).toXYZ(r)));
},Luv:function(o,r){return e.Luv.XYZ(t.fromCmy(o).toXYZ(r))},RGB:function(o,r){return t.fromCmy(o);
},XYZ:function(o,r){return t.fromCmy(o).toXYZ(r)},xyY:function(o,r){return e.XYZ.xyY(t.fromCmy(o).toXYZ(r));
}},CMYK:{CMY:function(o,r){return t.fromCmyk(o).toCmy()},HSL:function(o,r){return t.fromCmyk(o).toHsl();
},HSV:function(o,r){return t.fromCmyk(o).toHsv()},Lab:function(o,r){return e.XYZ.Lab(t.fromCmyk(o).toXYZ(r));
},LCHab:function(t,o){return e.Lab.LCHab(a.CMYK.Lab(t))},LCHuv:function(o,r){return e.LCHuv.Luv(e.Luv.XYZ(t.fromCmyk(o).toXYZ(r)));
},Luv:function(o,r){return e.Luv.XYZ(t.fromCmyk(o).toXYZ(r))},RGB:function(o,r){return t.fromCmyk(o);
},XYZ:function(o,r){return t.fromCmyk(o).toXYZ(r)},xyY:function(o,r){return e.XYZ.xyY(t.fromCmyk(o).toXYZ(r));
}},HSL:{CMY:function(o,r){return t.fromHsl(o).toCmy()},CMYK:function(o,r){return t.fromHsl(o).toCmyk();
},HSV:function(o,r){return t.fromHsl(o).toHsv()},Lab:function(o,r){return e.XYZ.Lab(t.fromHsl(o).toXYZ(r));
},LCHab:function(t,o){return e.Lab.LCHab(a.CMYK.Lab(t))},LCHuv:function(o,r){return e.LCHuv.Luv(e.Luv.XYZ(t.fromHsl(o).toXYZ(r)));
},Luv:function(o,r){return e.Luv.XYZ(t.fromHsl(o).toXYZ(r))},RGB:function(o,r){return t.fromHsl(o);
},XYZ:function(o,r){return t.fromHsl(o).toXYZ(r)},xyY:function(o,r){return e.XYZ.xyY(t.fromHsl(o).toXYZ(r));
}},HSV:{CMY:function(o,r){return t.fromHsv(o).toCmy()},CMYK:function(o,r){return t.fromHsv(o).toCmyk();
},HSL:function(o,r){return t.fromHsv(o).toHsl()},Lab:function(o,r){return e.XYZ.Lab(t.fromHsv(o).toXYZ(r));
},LCHab:function(t,o){return e.Lab.LCHab(a.CMYK.Lab(t))},LCHuv:function(o,r){return e.LCHuv.Luv(e.Luv.XYZ(t.fromHsv(o).toXYZ(r)));
},Luv:function(o,r){return e.Luv.XYZ(t.fromHsv(o).toXYZ(r))},RGB:function(o,r){return t.fromHsv(o);
},XYZ:function(o,r){return t.fromHsv(o).toXYZ(r)},xyY:function(o,r){return e.XYZ.xyY(t.fromHsv(o).toXYZ(r));
}},Lab:{CMY:function(o,r){return t.fromXYZ(e.Lab.XYZ(o,r)).toCmy()},CMYK:function(o,r){
return t.fromXYZ(e.Lab.XYZ(o,r)).toCmyk()},HSL:function(o,r){return t.fromXYZ(e.Lab.XYZ(o,r)).toHsl();
},HSV:function(o,r){return t.fromXYZ(e.Lab.XYZ(o,r)).toHsv()},LCHab:function(t,o){
return e.Lab.LCHab(t,o)},LCHuv:function(t,o){return e.Luv.LCHuv(e.Lab.XYZ(t,o),o);
},Luv:function(t,o){return e.XYZ.Luv(e.Lab.XYZ(t,o),o)},RGB:function(o,r){return t.fromXYZ(e.Lab.XYZ(o,r));
},XYZ:function(t,o){return e.Lab.XYZ(t,o)},xyY:function(t,o){return e.XYZ.xyY(e.Lab.XYZ(t,o),o);
}},LCHab:{CMY:function(o,r){return t.fromXYZ(e.Lab.XYZ(e.LCHab.Lab(o),r),r).toCmy();
},CMYK:function(o,r){return t.fromXYZ(e.Lab.XYZ(e.LCHab.Lab(o),r),r).toCmyk()},HSL:function(o,r){
return t.fromXYZ(e.Lab.XYZ(e.LCHab.Lab(o),r),r).toHsl()},HSV:function(o,r){return t.fromXYZ(e.Lab.XYZ(e.LCHab.Lab(o),r),r).toHsv();
},Lab:function(t,o){return e.Lab.LCHab(t,o)},LCHuv:function(t,o){return e.Luv.LCHuv(e.XYZ.Luv(e.Lab.XYZ(e.LCHab.Lab(t),o),o),o);
},Luv:function(t,o){return e.XYZ.Luv(e.Lab.XYZ(e.LCHab.Lab(t),o),o)},RGB:function(o,r){
return t.fromXYZ(e.Lab.XYZ(e.LCHab.Lab(o),r),r)},XYZ:function(t,o){return e.Lab.XYZ(e.LCHab.Lab(t,o),o);
},xyY:function(t,o){return e.XYZ.xyY(e.Lab.XYZ(e.LCHab.Lab(t),o),o)}},LCHuv:{CMY:function(o,r){
return t.fromXYZ(e.Luv.XYZ(e.LCHuv.Luv(o),r),r).toCmy()},CMYK:function(o,r){return t.fromXYZ(e.Luv.XYZ(e.LCHuv.Luv(o),r),r).toCmyk();
},HSL:function(o,r){return t.fromXYZ(e.Luv.XYZ(e.LCHuv.Luv(o),r),r).toHsl()},HSV:function(o,r){
return t.fromXYZ(e.Luv.XYZ(e.LCHuv.Luv(o),r),r).toHsv()},Lab:function(t,o){return e.XYZ.Lab(e.Luv.XYZ(e.LCHuv.Luv(t),o),o);
},LCHab:function(t,o){return e.Lab.LCHab(e.XYZ.Lab(e.Luv.XYZ(e.LCHuv.Luv(t),o),o),o);
},Luv:function(t,o){return e.LCHuv.Luv(t,o)},RGB:function(o,r){return t.fromXYZ(e.Luv.XYZ(e.LCHuv.Luv(o),r),r);
},XYZ:function(t,o){return e.Luv.XYZ(e.LCHuv.Luv(t),o)},xyY:function(t,o){return e.XYZ.xyY(e.Luv.XYZ(e.LCHuv.Luv(t),o),o);
}},Luv:{CMY:function(o,r){return t.fromXYZ(e.Luv.XYZ(o,r),r).toCmy()},CMYK:function(o,r){
return t.fromXYZ(e.Luv.XYZ(o,r),r).toCmyk()},HSL:function(o,r){return t.fromXYZ(e.Luv.XYZ(o,r),r).toHsl();
},HSV:function(o,r){return t.fromXYZ(e.Luv.XYZ(o,r),r).toHsv()},Lab:function(t,o){
return e.XYZ.Lab(e.Luv.XYZ(t,o),o)},LCHab:function(t,o){return e.Lab.LCHab(e.XYZ.Lab(e.Luv.XYZ(t,o),o),o);
},LCHuv:function(t,o){return e.Luv.LCHuv(t,o)},RGB:function(o,r){return t.fromXYZ(e.Luv.XYZ(o,r),r);
},XYZ:function(t,o){return e.Luv.XYZ(t,o)},xyY:function(t,o){return e.XYZ.xyY(e.Luv.XYZ(t,o),o);
}},RGB:{CMY:function(t,o){return t.toCmy()},CMYK:function(t,o){return t.toCmyk()},
HSL:function(t,o){return t.toHsl()},HSV:function(t,o){return t.toHsv()},Lab:function(t,o){
return e.XYZ.Lab(t.toXYZ(o),o)},LCHab:function(t,o){return e.LCHab.Lab(e.XYZ.Lab(t.toXYZ(o),o),o);
},LCHuv:function(t,o){return e.LCHuv.Luv(e.XYZ.Luv(t.toXYZ(o),o),o)},Luv:function(t,o){
return e.XYZ.Luv(t.toXYZ(o),o)},XYZ:function(t,o){return t.toXYZ(o)},xyY:function(t,o){
return e.XYZ.xyY(t.toXYZ(o),o)}},XYZ:{CMY:function(o,r){return t.fromXYZ(o,r).toCmy();
},CMYK:function(o,r){return t.fromXYZ(o,r).toCmyk()},HSL:function(o,r){return t.fromXYZ(o,r).toHsl();
},HSV:function(o,r){return t.fromXYZ(o,r).toHsv()},Lab:function(t,o){return e.XYZ.Lab(t,o);
},LCHab:function(t,o){return e.Lab.LCHab(e.XYZ.Lab(t,o),o)},LCHuv:function(t,o){return e.Luv.LCHuv(e.XYZ.Luv(t,o),o);
},Luv:function(t,o){return e.XYZ.Luv(t,o)},RGB:function(o,r){return t.fromXYZ(o,r);
},xyY:function(o,r){return e.XYZ.xyY(t.fromXYZ(o,r),r)}},xyY:{CMY:function(o,r){return t.fromXYZ(e.xyY.XYZ(o,r),r).toCmy();
},CMYK:function(o,r){return t.fromXYZ(e.xyY.XYZ(o,r),r).toCmyk()},HSL:function(o,r){
return t.fromXYZ(e.xyY.XYZ(o,r),r).toHsl()},HSV:function(o,r){return t.fromXYZ(e.xyY.XYZ(o,r),r).toHsv();
},Lab:function(t,o){return e.Lab.XYZ(e.xyY.XYZ(t,o),o)},LCHab:function(t,o){return e.LCHab.Lab(e.Lab.XYZ(e.xyY.XYZ(t,o),o),o);
},LCHuv:function(t,o){return e.LCHuv.Luv(e.Luv.XYZ(e.xyY.XYZ(t,o),o),o)},Luv:function(t,o){
return e.Luv.XYZ(e.xyY.XYZ(t,o),o)},RGB:function(o,r){return t.fromXYZ(e.xyY.XYZ(o,r),r);
},XYZ:function(t,o){return e.xyY.XYZ(t,o)}}};this.whitepoint=function(t,o){o=o||"10";
var r=0,u=0,i=0;n[o]&&n[o][t]?(r=n[o][t].x,u=n[o][t].y,i=n[o][t].t):console.warn("dojox.color.Colorspace::whitepoint: either the observer or the whitepoint name was not found. ",o,t);
var e={x:r,y:u,z:1-r-u,t:i,Y:1};return this.convert(e,"xyY","XYZ")},this.tempToWhitepoint=function(t){
if(4e3>t)return console.warn("dojox.color.Colorspace::tempToWhitepoint: can't find a white point for temperatures less than 4000K. (Passed ",t,")."),
{x:0,y:0};if(t>25e3)return console.warn("dojox.color.Colorspace::tempToWhitepoint: can't find a white point for temperatures greater than 25000K. (Passed ",t,")."),
{x:0,y:0};var o=t*t,r=o*t,n=Math.pow(10,9),u=Math.pow(10,6),i=Math.pow(10,3);if(7e3>=t)var e=-4.607*n/r+2.9678*u/o+.09911*i/t+.2444063;else var e=-2.0064*n/r+1.9018*u/o+.24748*i/t+.23704;
var a=-3*e*e+2.87*e-.275;return{x:e,y:a}},this.primaries=function(t){t=dojo.mixin({
profile:"sRGB",whitepoint:"D65",observer:"10",adaptor:"Bradford"},t||{});var o=[];
u[t.profile]?o=u[t.profile].slice(0):console.warn("dojox.color.Colorspace::primaries: the passed profile was not found.  ","Available profiles include: ",u,".  The profile passed was ",t.profile);
var r={name:t.profile,gamma:o[0],whitepoint:o[1],xr:o[2],yr:o[3],Yr:o[4],xg:o[5],
yg:o[6],Yg:o[7],xb:o[8],yb:o[9],Yb:o[10]};if(t.whitepoint!=r.whitepoint){var n=this.convert(this.adapt({
color:this.convert({x:xr,y:yr,Y:Yr},"xyY","XYZ"),adaptor:t.adaptor,source:r.whitepoint,
destination:t.whitepoint}),"XYZ","xyY"),i=this.convert(this.adapt({color:this.convert({
x:xg,y:yg,Y:Yg},"xyY","XYZ"),adaptor:t.adaptor,source:r.whitepoint,destination:t.whitepoint
}),"XYZ","xyY"),e=this.convert(this.adapt({color:this.convert({x:xb,y:yb,Y:Yb},"xyY","XYZ"),
adaptor:t.adaptor,source:r.whitepoint,destination:t.whitepoint}),"XYZ","xyY");r=dojo.mixin(r,{
xr:n.x,yr:n.y,Yr:n.Y,xg:i.x,yg:i.y,Yg:i.Y,xb:e.x,yb:e.y,Yb:e.Y,whitepoint:t.whitepoint
})}return dojo.mixin(r,{zr:1-r.xr-r.yr,zg:1-r.xg-r.yg,zb:1-r.xb-r.yb})},this.adapt=function(t){
t.color&&t.source||console.error("dojox.color.Colorspace::adapt: color and source arguments are required. ",t),
t=dojo.mixin({adaptor:"Bradford",destination:"D65"},t);var o=this.whitepoint(t.source),n=this.whitepoint(t.destination);
if(i[t.adaptor])var u=i[t.adaptor].ma,e=i[t.adaptor].mai;else console.warn("dojox.color.Colorspace::adapt: the passed adaptor '",t.adaptor,"' was not found.");
var a=r.multiply([[o.x,o.y,o.z]],u),Y=r.multiply([[n.x,n.y,n.z]],u),f=[[Y[0][0]/a[0][0],0,0],[0,Y[0][1]/a[0][1],0],[0,0,Y[0][2]/a[0][2]]],L=r.multiply(r.multiply(u,f),e),c=r.multiply([[t.color.X,t.color.Y,t.color.Z]],L)[0];
return{X:c[0],Y:c[1],Z:c[2]}},this.matrix=function(t,o){var n=o,u=this.whitepoint(n.whitepoint),i=n.xr/n.yr,e=1,a=(1-n.xr-n.yr)/n.yr,Y=n.xg/n.yg,f=1,L=(1-n.xg-n.yg)/n.yg,c=n.xb/n.yb,v=1,X=(1-n.xb-n.yb)/n.yb,Z=[[i,e,a],[Y,f,L],[c,v,X]],m=[[u.X,u.Y,u.Z]],p=r.multiply(m,r.inverse(Z)),s=p[0][0],C=p[0][1],y=p[0][2],b=[[s*i,s*e,s*a],[C*Y,C*f,C*L],[y*c,y*v,y*X]];
return"RGB"==t?r.inverse(b):b},this.epsilon=function(t){return t||"undefined"==typeof t?.008856:216/24289;
},this.kappa=function(t){return t||"undefined"==typeof t?903.3:24389/27},this.convert=function(t,o,r,n){
return a[o]&&a[o][r]?a[o][r](t,n):void console.warn("dojox.color.Colorspace::convert: Can't convert ",t," from ",o," to ",r,".");
}},dojo.mixin(t,{fromXYZ:function(o,r){r=r||{};var n=t.Colorspace.primaries(r),u=t.Colorspace.matrix("RGB",n),i=dojox.math.matrix.multiply([[o.X,o.Y,o.Z]],u),e=i[0][0],a=i[0][1],Y=i[0][2];
if("sRGB"==n.profile)var f=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,L=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:12.92*a,c=Y>.0031308?1.055*Math.pow(Y,1/2.4)-.055:12.92*Y;else var f=Math.pow(e,1/n.gamma),L=Math.pow(a,1/n.gamma),c=Math.pow(Y,1/n.gamma);
return new t.Color({r:Math.floor(255*f),g:Math.floor(255*L),b:Math.floor(255*c)});
}}),dojo.extend(t.Color,{toXYZ:function(o){o=o||{};var n=t.Colorspace.primaries(o),u=t.Colorspace.matrix("XYZ",n),i=this.r/255,e=this.g/255,a=this.b/255;
if("sRGB"==n.profile)var Y=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92,f=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,L=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92;else var Y=Math.pow(i,n.gamma),f=Math.pow(e,n.gamma),L=Math.pow(a,n.gamma);
var c=r([[Y,f,L]],u);return{X:c[0][0],Y:c[0][1],Z:c[0][2]}}}),t.Colorspace});