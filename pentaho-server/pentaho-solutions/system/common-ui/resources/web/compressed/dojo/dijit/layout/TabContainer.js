define(["dojo/_base/lang","dojo/_base/declare","./_TabContainerBase","./TabController","./ScrollingTabController"],function(t,i,e,o,s){
return i("dijit.layout.TabContainer",e,{useMenu:!0,useSlider:!0,controllerWidget:"",
_makeController:function(i){var e=this.baseClass+"-tabs"+(this.doLayout?"":" dijitTabNoLayout"),o="string"==typeof this.controllerWidget?t.getObject(this.controllerWidget):this.controllerWidget;
return new o({id:this.id+"_tablist",ownerDocument:this.ownerDocument,dir:this.dir,
lang:this.lang,textDir:this.textDir,tabPosition:this.tabPosition,doLayout:this.doLayout,
containerId:this.id,"class":e,nested:this.nested,useMenu:this.useMenu,useSlider:this.useSlider,
tabStripClass:this.tabStrip?this.baseClass+(this.tabStrip?"":"No")+"Strip":null},i);
},postMixInProperties:function(){this.inherited(arguments),this.controllerWidget||(this.controllerWidget="top"!=this.tabPosition&&"bottom"!=this.tabPosition||this.nested?o:s);
}})});