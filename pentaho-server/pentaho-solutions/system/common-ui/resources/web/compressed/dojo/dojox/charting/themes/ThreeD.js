define(["dojo/_base/lang","dojo/_base/array","../Theme","./gradientGenerator","./PrimaryColors","dojo/colors","./common"],function(e,o,r,i,t,n){
var a=["#f00","#0f0","#00f","#ff0","#0ff","#f0f","./common"],s={type:"linear",space:"shape",
x1:0,y1:0,x2:100,y2:0},l=[{o:0,i:174},{o:.08,i:231},{o:.18,i:237},{o:.3,i:231},{o:.39,
i:221},{o:.49,i:206},{o:.58,i:187},{o:.68,i:165},{o:.8,i:128},{o:.9,i:102},{o:1,i:174
}],f=2,h=100,c=o.map(a,function(o){var r=e.delegate(s),t=r.colors=i.generateGradientByIntensity(o,l),n=t[f].color;
return n.r+=h,n.g+=h,n.b+=h,n.sanitize(),r});return n.ThreeD=t.clone(),n.ThreeD.series.shadow={
dx:1,dy:1,width:3,color:[0,0,0,.15]},n.ThreeD.next=function(e,o,i){if("bar"==e||"column"==e){
var t=this._current%this.seriesThemes.length,n=this.seriesThemes[t],a=n.fill;n.fill=c[t];
var s=r.prototype.next.apply(this,arguments);return n.fill=a,s}return r.prototype.next.apply(this,arguments);
},n.ThreeD});