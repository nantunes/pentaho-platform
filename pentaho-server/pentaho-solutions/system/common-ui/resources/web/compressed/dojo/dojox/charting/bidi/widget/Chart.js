define(["dojo/_base/declare"],function(t){function i(t){return/^(ltr|rtl|auto)$/.test(t)?t:null;
}return t(null,{postMixInProperties:function(){this.textDir=this.params.textDir?this.params.textDir:this.params.dir;
},_setTextDirAttr:function(t){null!=i(t)&&(this._set("textDir",t),this.chart.setTextDir(t));
},_setDirAttr:function(t){this._set("dir",t),this.chart.setDir(t)}})});