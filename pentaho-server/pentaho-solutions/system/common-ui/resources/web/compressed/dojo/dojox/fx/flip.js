define(["dojo/_base/kernel","dojo/_base/html","dojo/dom","dojo/dom-construct","dojo/dom-geometry","dojo/_base/connect","dojo/_base/Color","dojo/_base/sniff","dojo/_base/lang","dojo/_base/window","dojo/_base/fx","dojo/fx","./_base"],function(o,t,e,i,r,n,d,a,s,l,h,p,f){
o.experimental("dojox.fx.flip");var c="border",u="Width",x="Height",C="Top",b="Right",w="Left",y="Bottom";
return f.flip=function(o){var r=i.create("div"),f=o.node=e.byId(o.node),g=f.style,m=null,v=null,L=null,M=o.lightColor||"#dddddd",j=o.darkColor||"#555555",k=t.style(f,"backgroundColor"),A=o.endColor||k,_={},z=[],I=o.duration?o.duration/2:250,N=o.dir||"left",P=.9,B="transparent",E=o.whichAnim,H=o.axis||"center",G=o.depth,R=function(o){
return"#000000"===new d(o).toHex()?"#000001":o};a("ie")<7&&(A=R(A),M=R(M),j=R(j),
k=R(k),B="black",r.style.filter="chroma(color='#000000')");var S=function(o){return function(){
var e=t.coords(o,!0);m={top:e.y,left:e.x,width:e.w,height:e.h}}}(f);S(),v={position:"absolute",
top:m.top+"px",left:m.left+"px",height:"0",width:"0",zIndex:o.zIndex||g.zIndex||0,
border:"0 solid "+B,fontSize:"0",visibility:"hidden"};var T=[{},{top:m.top,left:m.left
}],W={left:[w,b,C,y,u,x,"end"+x+"Min",w,"end"+x+"Max"],right:[b,w,C,y,u,x,"end"+x+"Min",w,"end"+x+"Max"],
top:[C,y,w,b,x,u,"end"+u+"Min",C,"end"+u+"Max"],bottom:[y,C,w,b,x,u,"end"+u+"Min",C,"end"+u+"Max"]
};L=W[N],"undefined"!=typeof G?(G=Math.max(0,Math.min(1,G))/2,P=.4+(.5-G)):P=Math.min(.9,Math.max(.4,m[L[5].toLowerCase()]/m[L[4].toLowerCase()]));
for(var q=T[0],D=4;6>D;D++)"center"==H||"cube"==H?(m["end"+L[D]+"Min"]=m[L[D].toLowerCase()]*P,
m["end"+L[D]+"Max"]=m[L[D].toLowerCase()]/P):"shortside"==H?(m["end"+L[D]+"Min"]=m[L[D].toLowerCase()],
m["end"+L[D]+"Max"]=m[L[D].toLowerCase()]/P):"longside"==H&&(m["end"+L[D]+"Min"]=m[L[D].toLowerCase()]*P,
m["end"+L[D]+"Max"]=m[L[D].toLowerCase()]);"center"==H?q[L[2].toLowerCase()]=m[L[2].toLowerCase()]-(m[L[8]]-m[L[6]])/4:"shortside"==H&&(q[L[2].toLowerCase()]=m[L[2].toLowerCase()]-(m[L[8]]-m[L[6]])/2),
_[L[5].toLowerCase()]=m[L[5].toLowerCase()]+"px",_[L[4].toLowerCase()]="0",_[c+L[1]+u]=m[L[4].toLowerCase()]+"px",
_[c+L[1]+"Color"]=k,q[c+L[1]+u]=0,q[c+L[1]+"Color"]=j,q[c+L[2]+u]=q[c+L[3]+u]="cube"!=H?(m["end"+L[5]+"Max"]-m["end"+L[5]+"Min"])/2:m[L[6]]/2,
q[L[7].toLowerCase()]=m[L[7].toLowerCase()]+m[L[4].toLowerCase()]/2+(o.shift||0),
q[L[5].toLowerCase()]=m[L[6]];var F=T[1];F[c+L[0]+"Color"]={start:M,end:A},F[c+L[0]+u]=m[L[4].toLowerCase()],
F[c+L[2]+u]=0,F[c+L[3]+u]=0,F[L[5].toLowerCase()]={start:m[L[6]],end:m[L[5].toLowerCase()]
},s.mixin(v,_),t.style(r,v),l.body().appendChild(r);var J=function(){i.destroy(r),
g.backgroundColor=A,g.visibility="visible"};if("last"==E){for(D in q)q[D]={start:q[D]
};q[c+L[1]+"Color"]={start:j,end:A},F=q}return E&&"first"!=E||z.push(h.animateProperty({
node:r,duration:I,properties:q})),E&&"last"!=E||z.push(h.animateProperty({node:r,
duration:I,properties:F,onEnd:J})),n.connect(z[0],"play",function(){r.style.visibility="visible",
g.visibility="hidden"}),p.chain(z)},f.flipCube=function(o){var t=[],e=r.getMarginBox(o.node),i=e.w/2,n=e.h/2,d={
top:{pName:"height",args:[{whichAnim:"first",dir:"top",shift:-n},{whichAnim:"last",
dir:"bottom",shift:n}]},right:{pName:"width",args:[{whichAnim:"first",dir:"right",
shift:i},{whichAnim:"last",dir:"left",shift:-i}]},bottom:{pName:"height",args:[{whichAnim:"first",
dir:"bottom",shift:n},{whichAnim:"last",dir:"top",shift:-n}]},left:{pName:"width",
args:[{whichAnim:"first",dir:"left",shift:-i},{whichAnim:"last",dir:"right",shift:i
}]}},a=d[o.dir||"left"],l=a.args;o.duration=o.duration?2*o.duration:500,o.depth=.8,
o.axis="cube";for(var h=l.length-1;h>=0;h--)s.mixin(o,l[h]),t.push(f.flip(o));return p.combine(t);
},f.flipPage=function(o){var e=o.node,r=t.coords(e,!0),d=r.x,a=r.y,h=r.w,f=r.h,c=t.style(e,"backgroundColor"),u=o.lightColor||"#dddddd",x=o.darkColor,C=i.create("div"),b=[],w=[],y=o.dir||"right",g={
left:["left","right","x","w"],top:["top","bottom","y","h"],right:["left","left","x","w"],
bottom:["top","top","y","h"]},m={right:[1,-1],left:[-1,1],top:[-1,1],bottom:[1,-1]
};t.style(C,{position:"absolute",width:h+"px",height:f+"px",top:a+"px",left:d+"px",
visibility:"hidden"});for(var v=[],L=0;2>L;L++){var M=L%2,j=M?g[y][1]:y,k=M?"last":"first",A=M?c:u,_=M?A:o.startColor||e.style.backgroundColor;
w[L]=s.clone(C);var z=function(o){return function(){i.destroy(w[o])}}(L);l.body().appendChild(w[L]),
v[L]={backgroundColor:M?_:c},v[L][g[y][0]]=r[g[y][2]]+m[y][0]*L*r[g[y][3]]+"px",t.style(w[L],v[L]),
b.push(dojox.fx.flip({node:w[L],dir:j,axis:"shortside",depth:o.depth,duration:o.duration/2,
shift:m[y][L]*r[g[y][3]]/2,darkColor:x,lightColor:u,whichAnim:k,endColor:A})),n.connect(b[L],"onEnd",z);
}return p.chain(b)},f.flipGrid=function(o){var e=o.rows||4,r=o.cols||4,d=[],a=i.create("div"),h=o.node,f=t.coords(h,!0),c=f.x,u=f.y,x=f.w,C=f.h,b=f.w/r,w=f.h/e,y=[];
t.style(a,{position:"absolute",width:b+"px",height:w+"px",backgroundColor:t.style(h,"backgroundColor")
});for(var g=0;e>g;g++){var m=g%2,v=m?"right":"left",L=m?1:-1,M=s.clone(h);t.style(M,{
position:"absolute",width:x+"px",height:C+"px",top:u+"px",left:c+"px",clip:"rect("+g*w+"px,"+x+"px,"+C+"px,0)"
}),l.body().appendChild(M),d[g]=[];for(var j=0;r>j;j++){var k=s.clone(a),A=m?j:r-(j+1),_=function(o,e,i){
return function(){e%2?t.style(o,{clip:"rect("+e*w+"px,"+x+"px,"+(e+1)*w+"px,"+(i+1)*b+"px)"
}):t.style(o,{clip:"rect("+e*w+"px,"+(x-(i+1)*b)+"px,"+(e+1)*w+"px,0px)"})}}(M,g,j);
l.body().appendChild(k),t.style(k,{left:c+A*b+"px",top:u+g*w+"px",visibility:"hidden"
});var z=dojox.fx.flipPage({node:k,dir:v,duration:o.duration||900,shift:L*b/2,depth:.2,
darkColor:o.darkColor,lightColor:o.lightColor,startColor:o.startColor||o.node.style.backgroundColor
}),I=function(o){return function(){i.destroy(o)}}(k);n.connect(z,"play",this,_),n.connect(z,"play",this,I),
d[g].push(z)}y.push(p.chain(d[g]))}return n.connect(y[0],"play",function(){t.style(h,{
visibility:"hidden"})}),p.combine(y)},f});