define(["../../_base/declare"],function(e){return e("dojo.data.api.Read",null,{getValue:function(e,t,a){
throw new Error("Unimplemented API: dojo.data.api.Read.getValue")},getValues:function(e,t){
throw new Error("Unimplemented API: dojo.data.api.Read.getValues")},getAttributes:function(e){
throw new Error("Unimplemented API: dojo.data.api.Read.getAttributes")},hasAttribute:function(e,t){
throw new Error("Unimplemented API: dojo.data.api.Read.hasAttribute")},containsValue:function(e,t,a){
throw new Error("Unimplemented API: dojo.data.api.Read.containsValue")},isItem:function(e){
throw new Error("Unimplemented API: dojo.data.api.Read.isItem")},isItemLoaded:function(e){
throw new Error("Unimplemented API: dojo.data.api.Read.isItemLoaded")},loadItem:function(e){
if(!this.isItemLoaded(e.item))throw new Error("Unimplemented API: dojo.data.api.Read.loadItem");
},fetch:function(e){throw new Error("Unimplemented API: dojo.data.api.Read.fetch");
},getFeatures:function(){return{"dojo.data.api.Read":!0}},close:function(e){throw new Error("Unimplemented API: dojo.data.api.Read.close");
},getLabel:function(e){throw new Error("Unimplemented API: dojo.data.api.Read.getLabel");
},getLabelAttributes:function(e){throw new Error("Unimplemented API: dojo.data.api.Read.getLabelAttributes");
}})});