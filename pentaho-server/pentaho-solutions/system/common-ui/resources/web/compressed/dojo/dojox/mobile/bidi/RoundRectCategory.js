define(["dojo/_base/declare","./common"],function(t,e){return t(null,{_setLabelAttr:function(t){
this.textDir&&(t=e.enforceTextDirWithUcc(t,this.textDir)),this.inherited(arguments);
},_setTextDirAttr:function(t){t&&this.textDir!==t&&(this.textDir=t,this.label=e.removeUCCFromText(this.label),
this.set("label",this.label))}})});