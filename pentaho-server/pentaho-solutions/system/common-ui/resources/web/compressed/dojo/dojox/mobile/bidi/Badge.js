define(["dojo/_base/declare","./common"],function(t,e){return t(null,{textDir:"",
setValue:function(t){this.domNode.firstChild.innerHTML=e.enforceTextDirWithUcc(t,this.textDir);
},setTextDir:function(t){this.textDir!==t&&(this.textDir=t,this.domNode.firstChild.innerHTML=e.enforceTextDirWithUcc(e.removeUCCFromText(this.domNode.firstChild.innerHTML),this.textDir));
}})});