define(["./sniff","./_base/window"],function(e,t){if(e("ie")<=7)try{document.execCommand("BackgroundImageCache",!1,!0);
}catch(n){}var r={};e("ie")?r.byId=function(e,n){if("string"!=typeof e)return e;var r=n||t.doc,i=e&&r.getElementById(e);
if(i&&(i.attributes.id.value==e||i.id==e))return i;var u=r.all[e];(!u||u.nodeName)&&(u=[u]);
for(var a=0;i=u[a++];)if(i.attributes&&i.attributes.id&&i.attributes.id.value==e||i.id==e)return i;
}:r.byId=function(e,n){return("string"==typeof e?(n||t.doc).getElementById(e):e)||null;
},r.isDescendant=function(e,t){try{for(e=r.byId(e),t=r.byId(t);e;){if(e==t)return!0;
e=e.parentNode}}catch(n){}return!1},e.add("css-user-select",function(e,t,n){if(!n)return!1;
var r=n.style,i=["Khtml","O","ms","Moz","Webkit"],u=i.length,a="userSelect";do if("undefined"!=typeof r[a])return a;while(u--&&(a=i[u]+"UserSelect"));
return!1});var i=e("css-user-select");return r.setSelectable=i?function(e,t){r.byId(e).style[i]=t?"":"none";
}:function(e,t){e=r.byId(e);var n=e.getElementsByTagName("*"),i=n.length;if(t)for(e.removeAttribute("unselectable");i--;)n[i].removeAttribute("unselectable");else for(e.setAttribute("unselectable","on");i--;)n[i].setAttribute("unselectable","on");
},r});