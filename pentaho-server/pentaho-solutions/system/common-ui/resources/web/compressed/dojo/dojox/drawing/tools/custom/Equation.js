define(["dojo/_base/lang","../../util/oo","../../manager/_registry","../TextBlock"],function(o,t,e,n){
var i=t.declare(n,function(o){},{customType:"equation"});return o.setObject("dojox.drawing.tools.custom.Equation",i),
i.setup={name:"dojox.drawing.tools.custom.Equation",tooltip:"Equation Tool",iconClass:"iconEq"
},e.register(i.setup,"tool"),i});