define(["dojo/_base/array","dojo/_base/lang","dojo/window","../place","../main"],function(e,n,r,a,o){
var c={};return c.getViewport=function(){return r.getBox()},c.placeOnScreen=a.at,
c.placeOnScreenAroundElement=function(e,r,o,c){var t;if(n.isArray(o))t=o;else{t=[];
for(var u in o)t.push({aroundCorner:u,corner:o[u]})}return a.around(e,r,t,!0,c)},
c.placeOnScreenAroundNode=c.placeOnScreenAroundElement,c.placeOnScreenAroundRectangle=c.placeOnScreenAroundElement,
c.getPopupAroundAlignment=function(n,r){var a={};return e.forEach(n,function(e){var n=r;
switch(e){case"after":a[r?"BR":"BL"]=r?"BL":"BR";break;case"before":a[r?"BL":"BR"]=r?"BR":"BL";
break;case"below-alt":n=!n;case"below":a[n?"BL":"BR"]=n?"TL":"TR",a[n?"BR":"BL"]=n?"TR":"TL";
break;case"above-alt":n=!n;case"above":default:a[n?"TL":"TR"]=n?"BL":"BR",a[n?"TR":"TL"]=n?"BR":"BL";
}}),a},n.mixin(o,c),o});