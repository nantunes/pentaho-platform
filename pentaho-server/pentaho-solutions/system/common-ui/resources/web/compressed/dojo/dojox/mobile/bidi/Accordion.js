define(["dojo/_base/declare","./common"],function(e,t){return e(null,{_setupChild:function(e){
this.textDir&&(e.label=t.enforceTextDirWithUcc(e.label,this.textDir)),this.inherited(arguments);
}})});