dojo.provide("dojox.wire.TableAdapter"),dojo.require("dojox.wire.CompositeWire"),
dojo.declare("dojox.wire.TableAdapter",dojox.wire.CompositeWire,{_wireClass:"dojox.wire.TableAdapter",
constructor:function(o){this._initializeChildren(this.columns)},_getValue:function(o){
if(!o||!this.columns)return o;var r=o;dojo.isArray(r)||(r=[r]);var e=[];for(var i in r){
var t=this._getRow(r[i]);e.push(t)}return e},_setValue:function(o,r){throw new Error("Unsupported API: "+this._wireClass+"._setValue");
},_getRow:function(o){var r=dojo.isArray(this.columns)?[]:{};for(var e in this.columns)r[e]=this.columns[e].getValue(o);
return r}});