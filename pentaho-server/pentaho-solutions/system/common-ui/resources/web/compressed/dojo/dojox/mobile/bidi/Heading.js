define(["dojo/_base/declare","./common"],function(t,e){return t(null,{_setLabelAttr:function(t){
this.inherited(arguments),"rtl"===this.getTextDir(t)&&(this.domNode.style.direction="rtl"),
this.labelDivNode.innerHTML=e.enforceTextDirWithUcc(this.labelDivNode.innerHTML,this.textDir);
},_setBackAttr:function(t){this.inherited(arguments),this.backButton.labelNode.innerHTML=e.enforceTextDirWithUcc(this.backButton.labelNode.innerHTML,this.textDir),
this.labelNode.innerHTML=this.labelDivNode.innerHTML},_setTextDirAttr:function(t){
this._created&&this.textDir==t||(this._set("textDir",t),"rtl"===this.getTextDir(this.labelDivNode.innerHTML)&&(this.domNode.style.direction="rtl"),
this.labelDivNode.innerHTML=e.enforceTextDirWithUcc(e.removeUCCFromText(this.labelDivNode.innerHTML),this.textDir),
e.setTextDirForButtons(this))}})});