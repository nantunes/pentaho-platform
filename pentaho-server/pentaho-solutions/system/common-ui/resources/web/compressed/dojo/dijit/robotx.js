define(["dojo/_base/kernel","dojo/robotx"],function(o,i){o.experimental("dijit.robotx");
var t=i._updateDocument;i._updateDocument=function(){t();var i=o.global;i.dijit&&(window.dijit=i.dijit);
}});