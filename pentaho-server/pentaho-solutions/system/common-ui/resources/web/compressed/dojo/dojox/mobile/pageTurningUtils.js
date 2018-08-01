define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/connect","dojo/_base/event","dojo/dom-class","dojo/dom-construct","dojo/dom-style","./_css3"],function(t,e,a,r,n,i,s,o){
return t.experimental("dojox.mobile.pageTurningUtils"),function(){this.w=0,this.h=0,
this.turnfrom="top",this.page=1,this.dogear=1,this.duration=2,this.alwaysDogeared=!1,
this._styleParams={},this._catalogNode=null,this._currentPageNode=null,this._transitionEndHandle=null,
this.init=function(t,e,a,r,n,i,s){this.w=t,this.h=e,this.turnfrom=a?a:this.turnfrom,
this.page=r?r:this.page,this.dogear="undefined"!=typeof n?n:this.dogear,this.duration="undefined"!=typeof i?i:this.duration,
this.alwaysDogeared="undefined"!=typeof s?s:this.alwaysDogeared,"bottom"===this.turnfrom&&(this.alwaysDogeared=!0),
this._calcStyleParams()},this._calcStyleParams=function(){var t,e,a,r,n,i=Math.tan(58*Math.PI/180),s=Math.cos(32*Math.PI/180),d=Math.sin(32*Math.PI/180),h=Math.tan(32*Math.PI/180),g=this.w,p=this.h,f=this.page,l=this.turnfrom,u=this._styleParams,x=fold=g*i,c=x*d+x*s*i,P=fold+g+g/i,m=.11*g*this.dogear,w=g-m,_=w*s;
switch(this.turnfrom){case"top":t=c-_,e=_*i,a=c-m,r=e+w/i-7,n=e/s,u.init={page:o.add({
top:-n+"px",left:-c+(2===f?g:0)+"px",width:c+"px",height:P+"px"},{transformOrigin:"100% 0%"
}),front:o.add({width:g+"px",height:p+"px"},{boxShadow:"0 0"}),back:o.add({width:g+"px",
height:p+"px"},{boxShadow:"0 0"}),shadow:{display:"",left:c+"px",height:1.5*p+"px"
}},u.turnForward={page:o.add({},{transform:"rotate(0deg)"}),front:o.add({},{transform:"translate("+c+"px,"+n+"px) rotate(0deg)",
transformOrigin:"-110px -18px"}),back:o.add({},{transform:"translate("+(c-g)+"px,"+n+"px) rotate(0deg)",
transformOrigin:"0px 0px"})},u.turnBackward={page:o.add({},{transform:"rotate(-32deg)"
}),front:o.add({},{transform:"translate("+t+"px,"+e+"px) rotate(32deg)",transformOrigin:"0px 0px"
}),back:o.add({},{transform:"translate("+a+"px,"+r+"px) rotate(-32deg)",transformOrigin:"0px 0px"
})};break;case"bottom":t=c-(p*d+g*s)-2,e=P-(p+g/h)*s,a=c,r=P-g/d-p,n=P-g/h-p,u.init={
page:o.add({top:-n+50+"px",left:-c+(2===f?g:0)+"px",width:c+"px",height:P+"px"},{
transformOrigin:"100% 100%"}),front:o.add({width:g+"px",height:p+"px"},{boxShadow:"0 0"
}),back:o.add({width:g+"px",height:p+"px"},{boxShadow:"0 0"}),shadow:{display:"none"
}},u.turnForward={page:o.add({},{transform:"rotate(0deg)"}),front:o.add({},{transform:"translate("+c+"px,"+n+"px) rotate(0deg)",
transformOrigin:"-220px 35px"}),back:o.add({},{transform:"translate("+2*g+"px,"+n+"px) rotate(0deg)",
transformOrigin:"0px 0px"})},u.turnBackward={page:o.add({},{transform:"rotate(32deg)"
}),front:o.add({},{transform:"translate("+t+"px,"+e+"px) rotate(-32deg)",transformOrigin:"0px 0px"
}),back:o.add({},{transform:"translate("+a+"px,"+r+"px) rotate(0deg)",transformOrigin:"0px 0px"
})};break;case"left":t=-g,e=w/h-2,a=-w,r=n=w/d+m*d,u.init={page:o.add({top:-e+"px",
left:g+"px",width:c+"px",height:P+"px"},{transformOrigin:"0% 0%"}),front:o.add({width:g+"px",
height:p+"px"},{boxShadow:"0 0"}),back:o.add({width:g+"px",height:p+"px"},{boxShadow:"0 0"
}),shadow:{display:"",left:"-4px",height:(2===f?1.5*p:p)+50+"px"}},u.turnForward={
page:o.add({},{transform:"rotate(0deg)"}),front:o.add({},{transform:"translate("+t+"px,"+e+"px) rotate(0deg)",
transformOrigin:"160px 68px"}),back:o.add({},{transform:"translate(0px,"+e+"px) rotate(0deg)",
transformOrigin:"0px 0px"})},u.turnBackward={page:o.add({},{transform:"rotate(32deg)"
}),front:o.add({},{transform:"translate("+-m+"px,"+r+"px) rotate(-32deg)",transformOrigin:"0px 0px"
}),back:o.add({},{transform:"translate("+a+"px,"+r+"px) rotate(32deg)",transformOrigin:"top right"
})}}u.init.catalog={width:(2===f?2*g:g)+"px",height:(2===f?1.5*p:p)+("top"==l?0:50)+"px"
}},this.getChildren=function(t){return e.filter(t.childNodes,function(t){return 1===t.nodeType;
})},this.getPages=function(){return this._catalogNode?this.getChildren(this._catalogNode):null;
},this.getCurrentPage=function(){return this._currentPageNode},this.getIndexOfPage=function(t,e){
e||(e=this.getPages());for(var a=0;a<e.length;a++)if(t===e[a])return a;return-1},
this.getNextPage=function(t){for(var e=t.nextSibling;e;e=e.nextSibling)if(1===e.nodeType)return e;
return null},this.getPreviousPage=function(t){for(var e=t.previousSibling;e;e=e.previousSibling)if(1===e.nodeType)return e;
return null},this.isPageTurned=function(t){return"rotate(0deg)"==t.style[o.name("transform")];
},this._onPageTurned=function(t){r.stop(t),n.contains(t.target,"mblPageTurningPage")&&this.onPageTurned(t.target);
},this.onPageTurned=function(){},this.initCatalog=function(t){this._catalogNode!=t&&(this._transitionEndHandle&&a.disconnect(this._transitionEndHandle),
this._transitionEndHandle=a.connect(t,o.name("transitionEnd"),this,"_onPageTurned"),
this._catalogNode=t),n.add(t,"mblPageTurningCatalog"),s.set(t,this._styleParams.init.catalog);
var r=this.getPages();e.forEach(r,function(t){this.initPage(t)},this),this.resetCatalog();
},this._getBaseZIndex=function(){return this._catalogNode.style.zIndex||0},this.resetCatalog=function(){
for(var t=this.getPages(),e=t.length,a=this._getBaseZIndex(),r=e-1;r>=0;r--){var n=t[r];
this.showDogear(n),this.isPageTurned(n)?n.style.zIndex=a+e+1:(n.style.zIndex=a+e-r,
!this.alwaysDogeared&&this.hideDogear(n),this._currentPageNode=n)}this.alwaysDogeared||this._currentPageNode==t[e-1]||this.showDogear(this._currentPageNode);
},this.initPage=function(t,e){for(var a=this.getChildren(t);a.length<3;)t.appendChild(i.create("div",null)),
a=this.getChildren(t);var r=!n.contains(t,"mblPageTurningPage");n.add(t,"mblPageTurningPage"),
n.add(a[0],"mblPageTurningFront"),n.add(a[1],"mblPageTurningBack"),n.add(a[2],"mblPageTurningShadow");
var o=this._styleParams.init;if(s.set(t,o.page),s.set(a[0],o.front),s.set(a[1],o.back),
o.shadow&&s.set(a[2],o.shadow),!e)if(r&&this._currentPageNode){this.getPages();e=this.getIndexOfPage(t)<this.getIndexOfPage(this._currentPageNode)?1:-1;
}else e=this.isPageTurned(t)?1:-1;this._turnPage(t,e,0)},this.turnToNext=function(t){
var e=this.getNextPage(this._currentPageNode);e&&(this._turnPage(this._currentPageNode,1,t),
this._currentPageNode=e)},this.turnToPrev=function(t){var e=this.getPreviousPage(this._currentPageNode);
e&&(this._turnPage(e,-1,t),this._currentPageNode=e)},this.goTo=function(t){var e=this.getPages();
if(!(this._currentPageNode===e[t]||e.length<=t))for(var a=t<this.getIndexOfPage(this._currentPageNode,e);this._currentPageNode!==e[t];)a?this.turnToPrev(0):this.turnToNext(0);
},this._turnPage=function(t,e,a){var r=this.getChildren(t),n=("undefined"!=typeof a?a:this.duration)+"s",i=1===e?this._styleParams.turnForward:this._styleParams.turnBackward;
i.page[o.name("transitionDuration")]=n,s.set(t,i.page),i.front[o.name("transitionDuration")]=n,
s.set(r[0],i.front),i.back[o.name("transitionDuration")]=n,s.set(r[1],i.back);var d=this.getPages(),h=this.getNextPage(t),g=d.length,p=this._getBaseZIndex();
1===e?(t.style.zIndex=p+g+1,!this.alwaysDogeared&&h&&this.getNextPage(h)&&this.showDogear(h)):h&&(h.style.zIndex=p+g-this.getIndexOfPage(h,d),
!this.alwaysDogeared&&this.hideDogear(h))},this.showDogear=function(t){var e=this.getChildren(t);
s.set(t,"overflow",""),e[1]&&s.set(e[1],"display",""),e[2]&&s.set(e[2],"display","bottom"===this.turnfrom?"none":"");
},this.hideDogear=function(t){if("bottom"!==this.turnfrom){var e=this.getChildren(t);
s.set(t,"overflow","visible"),e[1]&&s.set(e[1],"display","none"),e[2]&&s.set(e[2],"display","none");
}}}});