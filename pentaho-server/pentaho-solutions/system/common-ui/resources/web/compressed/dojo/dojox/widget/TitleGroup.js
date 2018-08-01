define(["dojo","dijit/registry","dijit/_Widget","dijit/TitlePane"],function(e,t,i,o){
var n=o.prototype,d=function(){var e=this._dxfindParent&&this._dxfindParent();e&&e.selectChild(this);
};return n._dxfindParent=function(){var e=this.domNode.parentNode;return e?(e=t.getEnclosingWidget(e),
e&&e instanceof dojox.widget.TitleGroup&&e):e},e.connect(n,"_onTitleClick",d),e.connect(n,"_onTitleKey",function(t){
t&&t.type&&"keypress"==t.type&&t.charOrCode==e.keys.TAB||d.apply(this,arguments)}),
e.declare("dojox.widget.TitleGroup",dijit._Widget,{"class":"dojoxTitleGroup",addChild:function(e,t){
return e.placeAt(this.domNode,t)},removeChild:function(e){return this.domNode.removeChild(e.domNode),
e},selectChild:function(i){return i&&e.query("> .dijitTitlePane",this.domNode).forEach(function(e){
var o=t.byNode(e);o&&o!==i&&o.open&&o.toggle()}),i}})});