define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/html","dojo/_base/fx","dijit/_Templated","dijit/layout/ContentPane","dojo/dom-class","dojo/text!./resources/ScrollPane.html"],function(i,t,e,s,h,o,l,n){
i.experimental("dojox.layout.ScrollPane");var r=t("dojox.layout.ScrollPane",[o,h],{
_line:null,_lo:null,_offset:15,orientation:"vertical",autoHide:!0,templateString:n,
resize:function(i){i&&(i.h&&e.style(this.domNode,"height",i.h+"px"),i.w&&e.style(this.domNode,"width",i.w+"px"));
var t=this._dir,h=this._vertical,o=this.containerNode[h?"scrollHeight":"scrollWidth"];
if(e.style(this.wrapper,this._dir,this.domNode.style[this._dir]),this._lo=e.coords(this.wrapper,!0),
this._size=Math.max(0,o-this._lo[h?"h":"w"]),!this._size)return this.helper.style.display="none",
void(this.wrapper[this._scroll]=0);this.helper.style.display="",this._line=new s._Line(0-this._offset,this._size+2*this._offset);
var l=this._lo[h?"h":"w"],n=Math.min(1,l/o),r=l*n,a=Math.floor(l-l*n);this._helpLine=new s._Line(0,a),
e.style(this.helper,t,Math.floor(r)+"px")},postCreate:function(){this.inherited(arguments),
this.autoHide&&(this._showAnim=s._fade({node:this.helper,end:.5,duration:350}),this._hideAnim=s.fadeOut({
node:this.helper,duration:750})),this._vertical="vertical"==this.orientation,this._vertical?(this._dir="height",
this._edge="top",this._scroll="scrollTop"):(l.add(this.containerNode,"dijitInline"),
this._dir="width",this._edge="left",this._scroll="scrollLeft"),this._hideAnim&&this._hideAnim.play(),
e.style(this.wrapper,"overflow","hidden")},_set:function(i){this._size&&"focused"!==i&&(this.wrapper[this._scroll]=Math.floor(this._line.getValue(i)),
e.style(this.helper,this._edge,Math.floor(this._helpLine.getValue(i))+"px"))},_calc:function(i){
this._lo||this.resize(),this._set(this._vertical?(i.pageY-this._lo.y)/this._lo.h:(i.pageX-this._lo.x)/this._lo.w);
},_enter:function(i){this._hideAnim&&("playing"==this._hideAnim.status()&&this._hideAnim.stop(),
this._showAnim.play())},_leave:function(i){this._hideAnim&&this._hideAnim.play()}
});return r});