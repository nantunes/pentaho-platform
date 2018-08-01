define(["dojo","../util/oo","./_Base","../manager/_registry","../util/typeset"],function(t,e,i,s,n){
var h=e.declare(i,function(t){},{type:"dojox.drawing.stencil.Text",anchorType:"none",
baseRender:!0,align:"start",valign:"top",_lineHeight:1,typesetter:function(t){return this._rawText=t,
n.convertLaTeX(t)},setText:function(t){this.enabled&&(t=this.typesetter(t)),this._text=t,
this._textArray=[],this.created&&this.render(t)},getText:function(){return this._rawText||this._text;
},dataToPoints:function(t){t=t||this.data;var e="auto"==t.width?1:t.width,i=t.height||this._lineHeight;
return this.points=[{x:t.x,y:t.y},{x:t.x+e,y:t.y},{x:t.x+e,y:t.y+i},{x:t.x,y:t.y+i
}],this.points},pointsToData:function(t){t=t||this.points;var e=t[0],i=t[2];return this.data={
x:e.x,y:e.y,width:i.x-e.x,height:i.y-e.y},this.data},render:function(e){this.remove(this.shape,this.hit),
!this.annotation&&this.renderHit&&this._renderOutline(),void 0!=e&&(this._text=e,
this._textArray=this._text.split("\n"));var i=this.pointsToData(),s=this._lineHeight,n=i.x+2*this.style.text.pad,h=i.y+this._lineHeight-.4*this.textSize;
"middle"==this.valign&&(h-=s/2),this.shape=this.container.createGroup(),t.forEach(this._textArray,function(t,e){
var i=this.shape.createText({x:n,y:h+s*e,text:unescape(t),align:this.align}).setFont(this.style.currentText).setFill(this.style.currentText.color);
this._setNodeAtts(i)},this),this._setNodeAtts(this.shape)},_renderOutline:function(){
if(!this.annotation){var t=this.pointsToData();"middle"==this.align?t.x-=t.width/2-2*this.style.text.pad:"start"==this.align?t.x+=this.style.text.pad:"end"==this.align&&(t.x-=t.width-3*this.style.text.pad),
"middle"==this.valign&&(t.y-=this._lineHeight/2-this.style.text.pad),this.hit=this.container.createRect(t).setStroke(this.style.currentHit).setFill(this.style.currentHit.fill),
this._setNodeAtts(this.hit),this.hit.moveToBack()}},makeFit:function(e,i){var s=t.create("span",{
innerHTML:e,id:"foo"},document.body),n=1;t.style(s,"fontSize",n+"px");for(var h=30;t.marginBox(s).w<i&&(n++,
t.style(s,"fontSize",n+"px"),!(h--<=0)););n--;var r=t.marginBox(s);return t.destroy(s),
{size:n,box:r}}});return t.setObject("dojox.drawing.stencil.Text",h),s.register({
name:"dojox.drawing.stencil.Text"},"stencil"),h});