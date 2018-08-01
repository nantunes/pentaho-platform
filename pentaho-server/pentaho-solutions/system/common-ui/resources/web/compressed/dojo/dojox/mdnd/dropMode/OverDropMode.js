define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/array","dojo/dom-geometry","dojox/mdnd/AreaManager"],function(o,r,e,n,t){
var a=r("dojox.mdnd.dropMode.OverDropMode",null,{_oldXPoint:null,_oldYPoint:null,
_oldBehaviour:"up",constructor:function(){this._dragHandler=[e.connect(dojox.mdnd.areaManager(),"onDragEnter",function(o,r){
var e=dojox.mdnd.areaManager();-1==e._oldIndexArea&&(e._oldIndexArea=e._lastValidIndexArea);
})]},addArea:function(o,r){var e=o.length,n=t.position(r.node,!0);if(r.coords={x:n.x,
y:n.y},0==e)o.push(r);else{for(var a=r.coords.x,d=0;e>d;d++)if(a<o[d].coords.x){for(var i=e-1;i>=d;i--)o[i+1]=o[i];
o[d]=r;break}d==e&&o.push(r)}return o},updateAreas:function(o){for(var r=o.length,e=0;r>e;e++)this._updateArea(o[e]);
},_updateArea:function(o){var r=t.position(o.node,!0);o.coords.x=r.x,o.coords.x2=r.x+r.w,
o.coords.y=r.y},initItems:function(o){n.forEach(o.items,function(o){var r=o.item.node,e=t.position(r,!0),n=e.y+e.h/2;
o.y=n}),o.initItems=!0},refreshItems:function(o,r,e,n){if(-1!=r&&o&&e&&e.h){var t=e.h;
o.margin&&(t+=o.margin.t);for(var a=o.items.length,d=r;a>d;d++){var i=o.items[d];n?i.y+=t:i.y-=t;
}}},getDragPoint:function(o,r,e){return{x:e.x,y:e.y}},getTargetArea:function(o,r,e){
var n=0,t=r.x,a=r.y,d=o.length,i=0,s="right",c=!1;if(-1==e||arguments.length<3?c=!0:this._checkInterval(o,e,t,a)?n=e:(this._oldXPoint<t?i=e+1:(i=e-1,
d=0,s="left"),c=!0),c)if("right"===s){for(var f=i;d>f;f++)if(this._checkInterval(o,f,t,a)){
n=f;break}f==d&&(n=-1)}else{for(var f=i;f>=d;f--)if(this._checkInterval(o,f,t,a)){
n=f;break}f==d-1&&(n=-1)}return this._oldXPoint=t,n},_checkInterval:function(o,r,e,n){
var t=o[r],a=t.node,d=t.coords,i=d.x,s=d.x2,c=d.y,f=c+a.offsetHeight;return e>=i&&s>=e&&n>=c&&f>=n?!0:!1;
},getDropIndex:function(o,r){var e=o.items.length,n=(o.coords,r.y);if(e>0)for(var t=0;e>t;t++){
if(n<o.items[t].y)return t;if(t==e-1)return-1}return-1},destroy:function(){n.forEach(this._dragHandler,e.disconnect);
}});return dojox.mdnd.areaManager()._dropMode=new dojox.mdnd.dropMode.OverDropMode,
a});