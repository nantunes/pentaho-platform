define(["dojo/_base/declare","./common","dojo/dom-style"],function(t,e,i){return t(null,{
buildRendering:function(){this.inherited(arguments),this.isLeftToRight()||(this.navButton&&(i.set(this.btnContainerNode,"float","left"),
this.disconnect(this._prevHandle),this.disconnect(this._nextHandle),this._prevHandle=this.connect(this.prevBtnNode,"onclick","onNextBtnClick"),
this._nextHandle=this.connect(this.nextBtnNode,"onclick","onPrevBtnClick")),this.pageIndicator&&i.set(this.piw,"float","left"));
},_setTitleAttr:function(t){this.titleNode.innerHTML=this._cv?this._cv(t):t,this._set("title",t),
this.textDir&&(this.titleNode.innerHTML=e.enforceTextDirWithUcc(this.titleNode.innerHTML,this.textDir),
this.titleNode.style.textAlign="rtl"===this.dir.toLowerCase()?"right":"left")},_setTextDirAttr:function(t){
t&&this.textDir!==t&&(this.textDir=t,this.titleNode.innerHTML=e.removeUCCFromText(this.titleNode.innerHTML),
this.titleNode.innerHTML=e.enforceTextDirWithUcc(this.titleNode.innerHTML,this.textDir),
this.items.length>0&&this.onComplete(this.items))}})});