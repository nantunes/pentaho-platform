dojo.provide("dojox.data.demos.widgets.FlickrViewList"),dojo.require("dojox.dtl._Templated"),
dojo.require("dijit._Widget"),dojo.declare("dojox.data.demos.widgets.FlickrViewList",[dijit._Widget,dojox.dtl._Templated],{
store:null,items:null,templateString:dojo.cache("dojox","data/demos/widgets/templates/FlickrViewList.html"),
fetch:function(e){return e.onComplete=dojo.hitch(this,"onComplete"),e.onError=dojo.hitch(this,"onError"),
this.store.fetch(e)},onError:function(){console.trace(),this.items=[],this.render();
},onComplete:function(e,o){this.items=e||[],this.render()}});