dojo.provide("dojox.wire.demos.TableContainer"),dojo.require("dojo.parser"),dojo.require("dijit._Widget"),
dojo.require("dijit._Templated"),dojo.declare("dojox.wire.demos.TableContainer",[dijit._Widget,dijit._Templated,dijit._Container],{
templateString:"<table class='tablecontainer'><tbody dojoAttachPoint='tableContainer'></tbody></table>",
rowCount:0,headers:"",addRow:function(e){try{var t=document.createElement("tr");this.rowCount%2===0&&dojo.addClass(t,"alternate"),
this.rowCount++;for(var o in e){var i=document.createElement("td"),a=document.createTextNode(e[o]);
i.appendChild(a),t.appendChild(i)}this.tableContainer.appendChild(t)}catch(d){console.debug(d);
}},clearTable:function(){for(;this.tableContainer.firstChild.nextSibling;)this.tableContainer.removeChild(this.tableContainer.firstChild.nextSibling);
this.rowCount=0},postCreate:function(){var e=this.headers.split(","),t=document.createElement("tr");
for(i in e){var o=e[i],a=document.createElement("th"),d=document.createTextNode(o);
a.appendChild(d),t.appendChild(a)}this.tableContainer.appendChild(t)}});