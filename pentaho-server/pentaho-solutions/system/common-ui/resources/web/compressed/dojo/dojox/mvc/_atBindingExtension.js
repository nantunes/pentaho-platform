define(["dojo/_base/config","dojo/has","dijit/_WidgetBase","./atBindingExtension"],function(e,i,n,t){
i.add("mvc-extension-per-widget",(e.mvc||{}).extensionPerWidget),i("mvc-extension-per-widget")||t(n.prototype);
});