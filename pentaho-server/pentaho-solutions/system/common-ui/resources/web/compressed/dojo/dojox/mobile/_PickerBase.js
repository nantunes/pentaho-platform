define(["dojo/_base/array","dojo/_base/declare","dijit/_Contained","dijit/_Container","dijit/_WidgetBase"],function(t,s,e,i,o){
return s("dojox.mobile._PickerBase",[o,i,e],{slotClasses:[],slotProps:[],slotOrder:[],
buildRendering:function(){this.inherited(arguments),this.slots=[];for(var t=0;t<this.slotClasses.length;t++){
var s=this.slotOrder.length?this.slotOrder[t]:t,e=new this.slotClasses[s](this.slotProps[s]);
this.addChild(e),this.slots[s]=e}},startup:function(){this._started||(this._duringStartup=!0,
this.inherited(arguments),this.reset(),delete this._duringStartup)},getSlots:function(){
return this.slots.length?this.slots:t.filter(this.getChildren(),function(t){return-1!==t.declaredClass.indexOf("Slot");
})},_getValuesAttr:function(){return t.map(this.getSlots(),function(t){return t.get("value");
})},_setValuesAttr:function(s){t.forEach(this.getSlots(),function(t,e){t.set("value",s[e]);
})},_setColorsAttr:function(s){t.forEach(this.getSlots(),function(t,e){t.setColor&&t.setColor(s[e]);
})},reset:function(){t.forEach(this.getSlots(),function(t){t.setInitialValue()})}
})});