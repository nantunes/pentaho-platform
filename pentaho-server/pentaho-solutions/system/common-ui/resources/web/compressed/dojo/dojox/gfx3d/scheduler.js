define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","./_base","./vector"],function(t,r,e,n,i){
n.scheduler={zOrder:function(t,r){return r=r?r:n.scheduler.order,t.sort(function(t,e){
return r(e)-r(t)}),t},bsp:function(t,e){e=e?e:n.scheduler.outline;var i=new n.scheduler.BinarySearchTree(t[0],e);
return r.forEach(t.slice(1),function(t){i.add(t,e)}),i.iterate(e)},order:function(t){
return t.getZOrder()},outline:function(t){return t.getOutline()}};var o=e("dojox.gfx3d.scheduler.BinarySearchTree",null,{
constructor:function(t,r){this.plus=null,this.minus=null,this.object=t;var e=r(t);
this.orient=e[0],this.normal=i.normalize(e)},add:function(t,e){var o=.5,s=e(t),u=i,a=this.normal,c=this.orient,h=n.scheduler.BinarySearchTree;
if(r.every(s,function(t){return Math.floor(o+u.dotProduct(a,u.substract(t,c)))<=0;
}))this.minus?this.minus.add(t,e):this.minus=new h(t,e);else{if(!r.every(s,function(t){
return Math.floor(o+u.dotProduct(a,u.substract(t,c)))>=0}))throw"The case: polygon cross siblings' plate is not implemented yet";
this.plus?this.plus.add(t,e):this.plus=new h(t,e)}},iterate:function(t){var r=.5,e=i,n=[],o=null,s={
x:0,y:0,z:-1e4};return o=Math.floor(r+e.dotProduct(this.normal,e.substract(s,this.orient)))<=0?[this.plus,this.minus]:[this.minus,this.plus],
o[0]&&(n=n.concat(o[0].iterate())),n.push(this.object),o[1]&&(n=n.concat(o[1].iterate())),
n}});n.drawer={conservative:function(t,e,n){r.forEach(this.objects,function(t){t.destroy();
}),r.forEach(e,function(t){t.draw(n.lighting)})},chart:function(t,e,n){r.forEach(this.todos,function(t){
t.draw(n.lighting)})}};var s={scheduler:n.scheduler,drawer:n.drawer,BinarySearchTree:o
};return s});