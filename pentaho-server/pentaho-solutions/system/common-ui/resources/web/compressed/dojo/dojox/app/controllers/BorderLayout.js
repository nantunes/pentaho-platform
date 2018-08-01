define(["dojo/_base/declare","dojo/dom-attr","dojo/dom-style","./LayoutBase","dijit/layout/BorderContainer","dijit/layout/StackContainer","dijit/layout/ContentPane","dijit/registry"],function(e,i,d,t,o,a,r,n){
return e("dojox.app.controllers.BorderLayout",t,{initLayout:function(e){this.app.log("in app/controllers/BorderLayout.initLayout event.view.name=[",e.view.name,"] event.view.parent.name=[",e.view.parent.name,"]");
var d;this.borderLayoutCreated?d=n.byId(this.app.id+"-BC"):(this.borderLayoutCreated=!0,
d=new o({id:this.app.id+"-BC",style:"height:100%;width:100%;border:1px solid black"
}),e.view.parent.domNode.appendChild(d.domNode),d.startup()),this.app.log("in app/controllers/BorderLayout.initLayout event.view.constraint=",e.view.constraint);
var t=e.view.constraint;if(e.view.parent.id==this.app.id){var p=n.byId(e.view.parent.id+"-"+t);
if(p){var s=new r({id:e.view.id+"-cp-"+t});s.addChild(e.view),p.addChild(s),d.addChild(p);
}else{var l=this.app.borderLayoutNoSplitter||!1,v=new a({doLayout:!0,splitter:!l,
region:t,id:e.view.parent.id+"-"+t}),s=new r({id:e.view.id+"-cp-"+t});s.addChild(e.view),
v.addChild(s),d.addChild(v)}}else e.view.parent.domNode.appendChild(e.view.domNode),
i.set(e.view.domNode,"data-app-constraint",e.view.constraint);this.inherited(arguments);
},hideView:function(e){var i=n.byId(this.app.id+"-BC"),d=n.byId(e.parent.id+"-"+e.constraint);
i&&d&&(d.removedFromBc=!0,i.removeChild(d))},showView:function(e){var i=n.byId(e.parent.id+"-"+e.constraint),t=n.byId(e.id+"-cp-"+e.constraint);
i&&t&&(i.removedFromBc&&(i.removedFromBc=!1,n.byId(this.app.id+"-BC").addChild(i),
d.set(e.domNode,"display","")),d.set(t.domNode,"display",""),i.selectChild(t),i.resize());
}})});