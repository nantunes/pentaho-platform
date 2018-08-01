define(["dojo/text!./templates/TabContainer.html","./StackContainer","./utils","../_TemplatedMixin","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-style"],function(t,i,e,s,o,a,n,d){
return o("dijit.layout._TabContainerBase",[i,s],{tabPosition:"top",baseClass:"dijitTabContainer",
tabStrip:!1,nested:!1,templateString:t,postMixInProperties:function(){this.baseClass+=this.tabPosition.charAt(0).toUpperCase()+this.tabPosition.substr(1).replace(/-.*/,""),
this.srcNodeRef&&d.set(this.srcNodeRef,"visibility","hidden"),this.inherited(arguments);
},buildRendering:function(){this.inherited(arguments),this.tablist=this._makeController(this.tablistNode),
this.doLayout||a.add(this.domNode,"dijitTabContainerNoLayout"),this.nested?(a.add(this.domNode,"dijitTabContainerNested"),
a.add(this.tablist.containerNode,"dijitTabContainerTabListNested"),a.add(this.tablistSpacer,"dijitTabContainerSpacerNested"),
a.add(this.containerNode,"dijitTabPaneWrapperNested")):a.add(this.domNode,"tabStrip-"+(this.tabStrip?"enabled":"disabled"));
},_setupChild:function(t){a.add(t.domNode,"dijitTabPane"),this.inherited(arguments);
},startup:function(){this._started||(this.tablist.startup(),this.inherited(arguments));
},layout:function(){if(this._contentBox&&"undefined"!=typeof this._contentBox.l){
var t=this.selectedChildWidget;if(this.doLayout){var i=this.tabPosition.replace(/-h/,"");
this.tablist.region=i;var s=[this.tablist,{domNode:this.tablistSpacer,region:i},{
domNode:this.containerNode,region:"center"}];e.layoutChildren(this.domNode,this._contentBox,s),
this._containerContentBox=e.marginBox2contentBox(this.containerNode,s[2]),t&&t.resize&&t.resize(this._containerContentBox);
}else{if(this.tablist.resize){var o=this.tablist.domNode.style;o.width="0";var a=n.getContentBox(this.domNode).w;
o.width="",this.tablist.resize({w:a})}t&&t.resize&&t.resize()}}},destroy:function(t){
this.tablist&&this.tablist.destroy(t),this.inherited(arguments)}})});