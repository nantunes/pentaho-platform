define([],function(){var t={LRM:"‎",LRE:"‪",PDF:"‬",RLM:"‏",RLE:"‫"};return{textDir:"",
getTextDir:function(t){return"auto"==this.textDir?this._checkContextual(t):this.textDir;
},_checkContextual:function(t){var i=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);
return i?i[0]<="z"?"ltr":"rtl":this.dir?this.dir:this.isLeftToRight()?"ltr":"rtl";
},applyTextDir:function(t,i){if(this.textDir){var e=this.textDir;if("auto"==e){if("undefined"==typeof i){
var r=t.tagName.toLowerCase();i="input"==r||"textarea"==r?t.value:t.innerText||t.textContent||"";
}e=this._checkContextual(i)}t.dir!=e&&(t.dir=e)}},enforceTextDirWithUcc:function(i,e){
if(this.textDir){i&&(i.originalText=e);var r="auto"==this.textDir?this._checkContextual(e):this.textDir;
return("ltr"==r?t.LRE:t.RLE)+e+t.PDF}return e},restoreOriginalText:function(t){return t.originalText&&(t.text=t.originalText,
delete t.originalText),t},_setTextDirAttr:function(t){if(!this._created||this.textDir!=t){
this._set("textDir",t);var i=null;this.displayNode?(i=this.displayNode,this.displayNode.align="rtl"==this.dir?"right":"left"):i=this.textDirNode||this.focusNode||this.textbox,
i&&this.applyTextDir(i)}}}});