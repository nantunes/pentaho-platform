define(["dojo/_base/lang","dojo/_base/declare","./Element"],function(t,e,i){return e("dojox.charting.Series",i,{
constructor:function(e,i,s){t.mixin(this,s),"string"!=typeof this.plot&&(this.plot="default"),
this.update(i)},clear:function(){this.dyn={}},update:function(e){t.isArray(e)?this.data=e:(this.source=e,
this.data=this.source.data,this.source.setSeriesObject&&this.source.setSeriesObject(this)),
this.dirty=!0,this.clear()}})});