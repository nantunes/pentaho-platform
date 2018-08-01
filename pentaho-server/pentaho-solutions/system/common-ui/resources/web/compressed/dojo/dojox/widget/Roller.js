define(["dojo","dijit","dijit/_Widget"],function(t,i){var e=t.declare("dojox.widget.Roller",i._Widget,{
delay:2e3,autoStart:!0,itemSelector:"> li",durationIn:400,durationOut:275,_idx:-1,
postCreate:function(){this.items||(this.items=[]),t.addClass(this.domNode,"dojoxRoller"),
t.query(this.itemSelector,this.domNode).forEach(function(i,e){this.items.push(i.innerHTML),
0==e?(this._roller=i,this._idx=0):t.destroy(i)},this),this._roller||(this._roller=t.create("li",null,this.domNode)),
this.makeAnims(),this.autoStart&&this.start()},makeAnims:function(){var i=this.domNode;
t.mixin(this,{_anim:{"in":t.fadeIn({node:i,duration:this.durationIn}),out:t.fadeOut({
node:i,duration:this.durationOut})}}),this._setupConnects()},_setupConnects:function(){
var i=this._anim;this.connect(i.out,"onEnd",function(){this._setIndex(this._idx+1),
i["in"].play(15)}),this.connect(i["in"],"onEnd",function(){this._timeout=setTimeout(t.hitch(this,"_run"),this.delay);
})},start:function(){this.rolling||(this.rolling=!0,this._run())},_run:function(){
this._anim.out.gotoPercent(0,!0)},stop:function(){this.rolling=!1;var t=this._anim,i=this._timeout;
i&&clearTimeout(i),t["in"].stop(),t.out.stop()},_setIndex:function(t){var i=this.items.length-1;
0>t&&(t=i),t>i&&(t=0),this._roller.innerHTML=this.items[t]||"error!",this._idx=t}
});return e.RollerSlide=t.declare("dojox.widget.RollerSlide",dojox.widget.Roller,{
durationOut:175,makeAnims:function(){var i=this.domNode,e="position",o={top:{end:0,
start:25},opacity:1};t.style(i,e,"relative"),t.style(this._roller,e,"absolute"),t.mixin(this,{
_anim:{"in":t.animateProperty({node:i,duration:this.durationIn,properties:o}),out:t.fadeOut({
node:i,duration:this.durationOut})}}),this._setupConnects()}}),e._Hover=t.declare("dojox.widget._RollerHover",null,{
postCreate:function(){this.inherited(arguments),this.connect(this.domNode,"onmouseenter","stop"),
this.connect(this.domNode,"onmouseleave","start")}}),e});