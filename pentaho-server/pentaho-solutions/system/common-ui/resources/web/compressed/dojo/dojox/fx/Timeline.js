define(["dojo/_base/lang","dojo/fx/easing","dojo/_base/fx","dojo/dom","./_base","dojo/_base/connect","dojo/_base/html","dojo/_base/array","dojo/_base/Color"],function(e,s,t,n,r,o,i,a,u){
r.animateTimeline=function(e,r){var a=new l(e.keys),u=t.animateProperty({node:n.byId(r||e.node),
duration:e.duration||1e3,properties:a._properties,easing:s.linear,onAnimate:function(e){}
});return o.connect(u,"onEnd",function(e){var s=u.curve.getValue(u.reversed?0:1);i.style(e,s);
}),o.connect(u,"beforeBegin",function(){u.curve&&delete u.curve,u.curve=a,a.ani=u;
}),u};var l=function(s){this.keys=e.isArray(s)?this.flatten(s):s};return l.prototype.flatten=function(e){
var t=function(s,t){return"from"==s?0:"to"==s?1:void 0===s?0==t?0:t/(e.length-1):.01*parseInt(s,10);
},n={},r={};return a.forEach(e,function(e,o){var i=t(e.step,o),a=s[e.ease]||s.linear;
for(var l in e)"step"!=l&&"ease"!=l&&"from"!=l&&"to"!=l&&(r[l]||(r[l]={steps:[],values:[],
eases:[],ease:a},n[l]={},/#/.test(e[l])?n[l].units=r[l].units="isColor":n[l].units=r[l].units=/\D{1,}/.exec(e[l]).join("")),
r[l].eases.push(s[e.ease||"linear"]),r[l].steps.push(i),"isColor"==n[l].units?r[l].values.push(new u(e[l])):r[l].values.push(parseInt(/\d{1,}/.exec(e[l]).join(""))),
void 0===n[l].start?n[l].start=r[l].values[r[l].values.length-1]:n[l].end=r[l].values[r[l].values.length-1]);
}),this._properties=n,r},l.prototype.getValue=function(e){e=this.ani._reversed?1-e:e;
var s={},t=this,n=function(e,s){return"isColor"!=t._properties[e].units?t.keys[e].values[s]+t._properties[e].units:t.keys[e].values[s].toCss();
};for(var r in this.keys)for(var o=this.keys[r],i=0;i<o.steps.length;i++){var a=o.steps[i],l=o.steps[i+1],v=i<o.steps.length?!0:!1,p=o.eases[i]||function(e){
return e};if(e==a){if(s[r]=n(r,i),!v||v&&this.ani._reversed)break}else if(e>a){if(v&&e<o.steps[i+1]){
var f=o.values[i+1],d=o.values[i],c=1/(l-a)*(e-a);if(c=p(c),d instanceof u)s[r]=u.blendColors(d,f,c).toCss(!1);else{
var h=f-d;s[r]=d+c*h+this._properties[r].units}break}s[r]=n(r,i)}else(v&&!this.ani._reversed||!v&&this.ani._reversed)&&(s[r]=n(r,i));
}return s},r._Timeline=l,r});