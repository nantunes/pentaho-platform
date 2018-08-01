define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","./Annotation","dijit/Toolbar","dijit/form/Button"],function(t){
return t.getObject("sketch",!0,dojox),t.declare("dojox.sketch.ButtonGroup",null,{
constructor:function(){this._childMaps={},this._children=[]},add:function(e){this._childMaps[e]=e.connect(e,"onActivate",t.hitch(this,"_resetGroup",e)),
this._children.push(e)},_resetGroup:function(e){var o=this._children;t.forEach(o,function(t){
e!=t&&t.attr&&t.attr("checked",!1)})}}),t.declare("dojox.sketch.Toolbar",dijit.Toolbar,{
figure:null,plugins:null,postCreate:function(){this.inherited(arguments),this.shapeGroup=new dojox.sketch.ButtonGroup,
this.plugins||(this.plugins=["Lead","SingleArrow","DoubleArrow","Underline","Preexisting","Slider"]),
this._plugins=[],t.forEach(this.plugins,function(e){var o=t.isString(e)?e:e.name,i=new dojox.sketch.tools[o](e.args||{});
this._plugins.push(i),i.setToolbar(this),!this._defaultTool&&i.button&&(this._defaultTool=i);
},this)},setFigure:function(e){this.figure=e,this.connect(e,"onLoad","reset"),t.forEach(this._plugins,function(t){
t.setFigure(e)})},destroy:function(){t.forEach(this._plugins,function(t){t.destroy();
}),this.inherited(arguments),delete this._defaultTool,delete this._plugins},addGroupItem:function(t,e){
return"toolsGroup"!=e?void console.error("not supported group "+e):void this.shapeGroup.add(t);
},reset:function(){this._defaultTool.activate()},_setShape:function(t){if(this.figure.surface&&this.figure.hasSelections())for(var e=0;e<this.figure.selected.length;e++){
var o=this.figure.selected[e].serialize();this.figure.convert(this.figure.selected[e],t),
this.figure.history.add(dojox.sketch.CommandTypes.Convert,this.figure.selected[e],o);
}}}),dojox.sketch.makeToolbar=function(t,e){var o=new dojox.sketch.Toolbar;return o.setFigure(e),
t.appendChild(o.domNode),o},dojox.sketch.Toolbar});