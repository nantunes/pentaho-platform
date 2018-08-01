define(["dojo/_base/array"],function(e){var t={group:function(r,i,n){var h={children:[]
},o=function(e,t){return e.__treeValue||(e.__treeValue=0),e.__treeValue+=n(t),e};return e.forEach(r,function(r){
var n=h;e.forEach(i,function(e,h){var u=e(r),a=t.find(n.children,function(e){return e.__treeName==u;
});a||n.children.push(a={__treeName:u,__treeID:u+Math.random(),children:[]}),a=o(a,r),
h!=i.length-1?n=a:a.children.push(r)}),n=o(n,r)}),h},find:function(e,t){for(var r=e.length,i=0;r>i;++i)if(t.call(null,e[i]))return e[i];
return null},solve:function(r,i,n,h,o){var u=t.initElements(r,h),a=u.total,f=u.elements,m=a;
if(0==a){if(0==f.length)return{items:r,rects:[],total:0};e.forEach(f,function(e){
e.size=e.sizeTmp=100}),a=100*f.length}f.sort(function(e,t){return t.size-e.size}),
t._compute(i,n,f,a),f.sort(function(e,t){return e.index-t.index});var l={};return l.elements=f,
l.size=m,rects=e.map(f,function(e){return{x:o?i-e.x-e.width:e.x,y:e.y,w:e.width,h:e.height
}}),l.rectangles=rects,l},initElements:function(t,r){var i=0,n=e.map(t,function(e,t){
var n=null!=r?r(e):0;if(0>n)throw new Error("item size dimension must be positive");
return i+=n,{index:t,size:n,sizeTmp:n}});return{elements:n,total:i}},_compute:function(r,i,n,h){
var o=r*i/h/100;e.forEach(n,function(e){e.sizeTmp*=o});for(var u,a=0,f=0,m=-1>>>1,l=0,c=0,s=r,d=i,p=s>d;f!=n.length;)if(u=t._trySolution(n,a,f,p,s,d),
u>m||1>u){for(var v=0,g=0,T=a;f>T;T++)n[T].x=l+v,n[T].y=c+g,p?g+=n[T].height:v+=n[T].width;
p?l+=n[a].width:c+=n[a].height,s=r-l,d=i-c,p=s>d,a=f,f=a,m=-1>>>1}else{for(var T=a;f>=T;T++)n[T].width=n[T].widthTmp,
n[T].height=n[T].heightTmp;m=u,f++}for(var _=0,w=0,T=a;f>T;T++)n[T].x=l+_,n[T].y=c+w,
p?w+=n[T].height:_+=n[T].width},_trySolution:function(e,t,r,i,n,h){for(var o=0,u=0,a=0,f=0,m=t;r>=m;m++)o+=e[m].sizeTmp;
i?0==h?a=f=0:(a=o/h*100,f=h):0==n?a=f=0:(f=o/n*100,a=n);for(var m=t;r>=m;m++)i?(e[m].widthTmp=a,
0==o?e[m].heightTmp=0:e[m].heightTmp=f*e[m].sizeTmp/o):(0==o?e[m].widthTmp=0:e[m].widthTmp=a*e[m].sizeTmp/o,
e[m].heightTmp=f);return u=Math.max(e[r].heightTmp/e[r].widthTmp,e[r].widthTmp/e[r].heightTmp),
void 0==u?1:u}};return t});