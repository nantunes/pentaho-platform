define(["dojo/_base/declare","./MenuItem","dojo/text!./templates/MenuBarItem.html"],function(e,t,n){
var i=e("dijit._MenuBarItemMixin",null,{templateString:n,_setIconClassAttr:null}),a=e("dijit.MenuBarItem",[t,i],{});
return a._MenuBarItemMixin=i,a});