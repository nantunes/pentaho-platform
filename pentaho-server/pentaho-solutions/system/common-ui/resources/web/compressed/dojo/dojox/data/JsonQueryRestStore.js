define(["dojo/_base/declare","dojox/data/JsonRestStore","dojox/data/util/JsonQuery","dojox/data/ClientFilter","dojox/json/query"],function(e,o,t){
return e("dojox.data.JsonQueryRestStore",[o,t],{matchesQuery:function(e,o){return e.__id&&-1==e.__id.indexOf("#")&&this.inherited(arguments);
}})});