define(["dojo/_base/declare","dojo/_base/array","dojo/dom-construct","./_PickerBase","./SpinWheelSlot"],function(e,t,i,s){
return e("dojox.mobile.SpinWheel",s,{baseClass:"mblSpinWheel",buildRendering:function(){
this.inherited(arguments),i.create("div",{className:"mblSpinWheelBar"},this.domNode);
},startup:function(){this._started||(this.centerPos=Math.round(this.domNode.offsetHeight/2),
this.inherited(arguments))},resize:function(){this.centerPos=Math.round(this.domNode.offsetHeight/2),
t.forEach(this.getChildren(),function(e){e.resize&&e.resize()})},addChild:function(e,t){
this.inherited(arguments),this._started&&e.setInitialValue()}})});