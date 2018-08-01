dojo.provide("dojox.mobile.app.ListSelector"),dojo.experimental("dojox.mobile.app.ListSelector"),
dojo.require("dojox.mobile.app._Widget"),dojo.require("dojo.fx"),dojo.declare("dojox.mobile.app.ListSelector",dojox.mobile.app._Widget,{
data:null,controller:null,onChoose:null,destroyOnHide:!1,_setDataAttr:function(o){
this.data=o,this.data&&this.render()},postCreate:function(){dojo.addClass(this.domNode,"listSelector");
var o=this;this.connect(this.domNode,"onclick",function(t){dojo.hasClass(t.target,"listSelectorRow")&&(o.onChoose&&o.onChoose(o.data[t.target._idx].value),
o.hide())}),this.connect(this.domNode,"onmousedown",function(o){dojo.hasClass(o.target,"listSelectorRow")&&dojo.addClass(o.target,"listSelectorRow-selected");
}),this.connect(this.domNode,"onmouseup",function(o){dojo.hasClass(o.target,"listSelectorRow")&&dojo.removeClass(o.target,"listSelectorRow-selected");
}),this.connect(this.domNode,"onmouseout",function(o){dojo.hasClass(o.target,"listSelectorRow")&&dojo.removeClass(o.target,"listSelectorRow-selected");
});this.controller.getWindowSize();this.mask=dojo.create("div",{"class":"dialogUnderlayWrapper",
innerHTML:'<div class="dialogUnderlay"></div>'},this.controller.assistant.domNode),
this.connect(this.mask,"onclick",function(){o.onChoose&&o.onChoose(),o.hide()})},
show:function(o){var t,e,d=this.controller.getWindowSize();o?(e=dojo._abs(o),t=e):(t.x=d.w/2,
t.y=200),console.log("startPos = ",t),dojo.style(this.domNode,{opacity:0,display:"",
width:Math.floor(.8*d.w)+"px"});var s=0;dojo.query(">",this.domNode).forEach(function(o){
dojo.style(o,{"float":"left"}),s=Math.max(s,dojo.marginBox(o).w),dojo.style(o,{"float":"none"
})}),s=Math.min(s,Math.round(.8*d.w))+dojo.style(this.domNode,"paddingLeft")+dojo.style(this.domNode,"paddingRight")+1,
dojo.style(this.domNode,"width",s+"px");var i=dojo.marginBox(this.domNode).h,a=this,n=e?Math.max(30,e.y-i-10):this.getScroll().y+30;
console.log("fromNodePos = ",e," targetHeight = ",i," targetY = "+n," startPos ",t);
var r=dojo.animateProperty({node:this.domNode,duration:400,properties:{width:{start:1,
end:s},height:{start:1,end:i},top:{start:t.y,end:n},left:{start:t.x,end:d.w/2-s/2
},opacity:{start:0,end:1},fontSize:{start:1}},onEnd:function(){dojo.style(a.domNode,"width","inherit");
}}),l=dojo.fadeIn({node:this.mask,duration:400});dojo.fx.combine([r,l]).play()},hide:function(){
var o=this,t=dojo.animateProperty({node:this.domNode,duration:500,properties:{width:{
end:1},height:{end:1},opacity:{end:0},fontSize:{end:1}},onEnd:function(){o.get("destroyOnHide")&&o.destroy();
}}),e=dojo.fadeOut({node:this.mask,duration:400});dojo.fx.combine([t,e]).play()},
render:function(){dojo.empty(this.domNode),dojo.style(this.domNode,"opacity",0);for(var o,t=0;t<this.data.length;t++)o=dojo.create("div",{
"class":"listSelectorRow "+(this.data[t].className||""),innerHTML:this.data[t].label
},this.domNode),o._idx=t,0==t&&dojo.addClass(o,"first"),t==this.data.length-1&&dojo.addClass(o,"last");
},destroy:function(){this.inherited(arguments),dojo.destroy(this.mask)}});