define(["dojo/_base/declare","./common"],function(t,e){return t(null,{_setTextDirAttr:function(t){
this._created&&this.textDir===t||(this._set("textDir",t),e.setTextDirForButtons(this));
}})});