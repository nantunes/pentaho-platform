dojo.provide("dojox.data.demos.widgets.FileView"),dojo.require("dijit._Templated"),
dojo.require("dijit._Widget"),dojo.declare("dojox.data.demos.widgets.FileView",[dijit._Widget,dijit._Templated],{
templateString:dojo.cache("dojox","data/demos/widgets/templates/FileView.html"),titleNode:null,
descriptionNode:null,imageNode:null,authorNode:null,name:"",path:"",size:0,directory:!1,
parentDir:"",children:[],postCreate:function(){if(this.nameNode.appendChild(document.createTextNode(this.name)),
this.pathNode.appendChild(document.createTextNode(this.path)),this.sizeNode.appendChild(document.createTextNode(this.size)),
this.directoryNode.appendChild(document.createTextNode(this.directory)),this.parentDirNode.appendChild(document.createTextNode(this.parentDir)),
this.children&&this.children.length>0){var e;for(e=0;e<this.children.length;e++){
var d=document.createTextNode(this.children[e]);this.childrenNode.appendChild(d),
e<this.children.length-1&&this.childrenNode.appendChild(document.createElement("br"));
}}}});