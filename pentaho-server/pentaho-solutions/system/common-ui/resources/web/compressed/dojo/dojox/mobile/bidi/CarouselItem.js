define(["dojo/_base/declare","./common"],function(t,e){return t(null,{_setHeaderTextAttr:function(t){
this._set("headerText",t),this.headerTextNode.innerHTML=this._cv?this._cv(t):t;var i=this.getParent()?this.getParent().getParent():null;
this.textDir=this.textDir?this.textDir:i?i.get("textDir"):"",this.textDir&&(this.headerTextNode.innerHTML=e.enforceTextDirWithUcc(this.headerTextNode.innerHTML,this.textDir));
},_setFooterTextAttr:function(t){this._set("footerText",t),this.footerTextNode.innerHTML=this._cv?this._cv(t):t;
var e=this.getParent()?this.getParent().getParent():null;this.textDir=this.textDir?this.textDir:e?e.get("textDir"):"",
this.textDir&&(this.footerTextNode.innerHTML=_BidiSupport.enforceTextDirWithUcc(this.footerTextNode.innerHTML,this.textDir));
}})});