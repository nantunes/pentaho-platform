define(["dojo/_base/lang","dojo/query","dojo/_base/NodeList","dojo/NodeList-traverse"],function(e,t){
var o=t.NodeList;return e.extend(o,{delegate:function(e,o,n){return this.connect(o,function(o){
var d=t(o.target).closest(e,this);d.length&&n.call(d[0],o)})}}),o});