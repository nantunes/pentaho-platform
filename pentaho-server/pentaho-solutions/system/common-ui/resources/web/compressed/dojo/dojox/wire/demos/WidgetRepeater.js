dojo.provide("dojox.wire.demos.WidgetRepeater"),dojo.require("dojo.parser"),dojo.require("dijit._Widget"),
dojo.require("dijit._Templated"),dojo.require("dijit._Container"),dojo.declare("dojox.wire.demos.WidgetRepeater",[dijit._Widget,dijit._Templated,dijit._Container],{
templateString:"<div class='WidgetRepeater' dojoAttachPoint='repeaterNode'></div>",
widget:null,repeater:null,createNew:function(e){try{dojo.isString(this.widget)&&(this.widget=dojo.getObject(this.widget)),
this.addChild(new this.widget(e)),this.repeaterNode.appendChild(document.createElement("br"));
}catch(t){console.debug(t)}}});