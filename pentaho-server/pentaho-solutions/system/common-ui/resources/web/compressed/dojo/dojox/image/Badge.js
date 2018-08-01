define(["dojo","dijit","dojox/main","dijit/_Widget","dijit/_TemplatedMixin","dojo/fx/easing"],function(t,i,e,s,n){
return t.experimental("dojox.image.Badge"),t.getObject("image",!0,e),t.declare("dojox.image.Badge",[s,n],{
baseClass:"dojoxBadge",templateString:'<div class="dojoxBadge" dojoAttachPoint="containerNode"></div>',
children:"div.dojoxBadgeImage",rows:4,cols:5,cellSize:50,cellMargin:1,delay:2e3,threads:1,
easing:"dojo.fx.easing.backOut",startup:function(){this._started||(t.isString(this.easing)&&(this.easing=t.getObject(this.easing)),
this.inherited(arguments),this._init())},_init:function(){var i=0,e=this.cellSize;
t.style(this.domNode,{width:e*this.cols+"px",height:e*this.rows+"px"}),this._nl=t.query(this.children,this.containerNode).forEach(function(s,n){
var a=n%this.cols,h=i*e,o=a*e,l=2*this.cellMargin;t.style(s,{top:h+"px",left:o+"px",
width:e-l+"px",height:e-l+"px"}),a==this.cols-1&&i++,t.addClass(s,this.baseClass+"Image");
},this);for(var s=this._nl.length;this.threads--;){var n=Math.floor(Math.random()*s);
setTimeout(t.hitch(this,"_enbiggen",{target:this._nl[n]}),this.delay*this.threads);
}},_getCell:function(t){var i=this._nl.indexOf(t);if(i>=0){var e=i%this.cols,s=Math.floor(i/this.cols);
return{x:e,y:s,n:this._nl[i],io:i}}return void 0},_getImage:function(){return"url('')";
},_enbiggen:function(i){var e=this._getCell(i.target||i);if(e){var s=this.cellMargin,n=2*this.cellSize-2*s,a={
height:n,width:n},h=function(){return Math.round(Math.random())};(e.x==this.cols-1||e.x>0&&h())&&(a.left=this.cellSize*(e.x-s)),
(e.y==this.rows-1||e.y>0&&h())&&(a.top=this.cellSize*(e.y-s));var o=this.baseClass;
t.addClass(e.n,o+"Top"),t.addClass(e.n,o+"Seen"),t.animateProperty({node:e.n,properties:a,
onEnd:t.hitch(this,"_loadUnder",e,a),easing:this.easing}).play()}},_loadUnder:function(i,e){
var s=i.io,n=e.left>=0,a=e.top>=0,h=this.cols,o=s+(n?-1:1),l=s+(a?-h:h),r=a?n?o-h:l+1:n?l-1:o+h,d=this.baseClass;
t.forEach([o,l,r],function(i){var e=this._nl[i];e&&t.hasClass(e,d+"Seen")&&t.removeClass(e,d+"Seen");
},this),setTimeout(t.hitch(this,"_disenbiggen",i,e),1.25*this.delay)},_disenbiggen:function(i,e){
e.top>=0&&(e.top+=this.cellSize),e.left>=0&&(e.left+=this.cellSize);var s=this.cellSize-2*this.cellMargin;
t.animateProperty({node:i.n,properties:t.mixin(e,{width:s,height:s}),onEnd:t.hitch(this,"_cycle",i,e)
}).play(5)},_cycle:function(i,e){var s=this.baseClass;t.removeClass(i.n,s+"Top");var n=this._nl.filter(function(i){
return!t.hasClass(i,s+"Seen")}),a=n[Math.floor(Math.random()*n.length)];setTimeout(t.hitch(this,"_enbiggen",{
target:a}),this.delay/2)}})});