define(["dojo","../../util/oo","../_Plugin"],function(o,r,i){var t=r.declare(i,function(r){
r.gap&&(this.major=r.gap),this.majorColor=r.majorColor||this.majorColor,this.minorColor=r.minorColor||this.minorColor,
this.setGrid(),o.connect(this.canvas,"setZoom",this,"setZoom")},{type:"dojox.drawing.plugins.drawing.Grid",
gap:100,major:100,minor:0,majorColor:"#00ffff",minorColor:"#d7ffff",zoom:1,setZoom:function(o){
this.zoom=o,this.setGrid()},setGrid:function(o){var r=Math.floor(this.major*this.zoom),i=this.minor?Math.floor(this.minor*this.zoom):r;
this.grid&&this.grid.removeShape();var t,n,s,a,e,h,m,d=this.canvas.underlay.createGroup(),l=2e3,f=1e3,c=1,u=this.majorColor,g=this.minorColor,j=function(o,r,i,t,n){
d.createLine({x1:o,y1:r,x2:i,y2:t}).setStroke({style:"Solid",width:c,cap:"round",
color:n})};for(e=1,m=f/i;m>e;e++)t=0,n=l,s=i*e,a=s,h=s%r?g:u,j(t,s,n,a,h);for(e=1,
m=l/i;m>e;e++)s=0,a=f,t=i*e,n=t,h=t%r?g:u,j(t,s,n,a,h);return d.moveToBack(),this.grid=d,
this.util.attr(d,"id","grid"),d}});return o.setObject("dojox.drawing.plugins.drawing.Grid",t),
t});