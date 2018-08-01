define(["dojo/_base/array","dojo/_base/lang","dojo/_base/declare","./_Container","./at","./Group","dijit/form/TextBox"],function(t,i,a,e,s){
return a("dojox.mvc.Generate",[e],{_counter:0,_defaultWidgetMapping:{String:"dijit/form/TextBox"
},_defaultClassMapping:{Label:"generate-label-cell",String:"generate-dijit-cell",
Heading:"generate-heading",Row:"row"},_defaultIdNameMapping:{String:"textbox_t"},
children:null,_relTargetProp:"children",startup:function(){this.inherited(arguments),
this._setChildrenAttr(this.children)},_setChildrenAttr:function(t){var i=this.children;
this._set("children",t),this.binding!=t&&this.set("ref",t),!this._started||this._builtOnce&&i==t||(this._builtOnce=!0,
this._buildContained(t))},_buildContained:function(t){t&&(this._destroyBody(),this._counter=0,
this.srcNodeRef.innerHTML=this._generateBody(t),this._createBody())},_generateBody:function(a,e){
function s(t,a){(r?t&&i.isFunction(t.toPlainObject):!i.isFunction(t))&&(i.isArray(t)?n.push(this._generateRepeat(t,a)):(r?!t.value:null!=t&&"[object Object]"=={}.toString.call(t)||(t||{}).set&&(t||{}).watch)?n.push(this._generateGroup(t,a,e)):n.push(this._generateTextBox(a,r)));
}if(void 0===a)return"";var n=[],r=i.isFunction(a.toPlainObject);if(i.isArray(a))t.forEach(a,s,this);else for(var d in a)a.hasOwnProperty(d)&&s.call(this,a[d],d);
return n.join("")},_generateRepeat:function(t,i){var a=this.classMapping&&this.classMapping.Heading?this.classMapping.Heading:this._defaultClassMapping.Heading;
return"<div data-dojo-type=\"dojox/mvc/Group\" data-dojo-props=\"target: at('rel:', '"+i+'\')" + id="'+this.id+"_r"+this._counter++ +'"><div class="'+a+'">'+i+"</div>"+this._generateBody(t,!0)+"</div>";
},_generateGroup:function(t,i,a){var e=["<div data-dojo-type=\"dojox/mvc/Group\" data-dojo-props=\"target: at('rel:', '"+i+'\')" + id="'+this.id+"_g"+this._counter++ +'">'];
if(!a){var s=this.classMapping&&this.classMapping.Heading?this.classMapping.Heading:this._defaultClassMapping.Heading;
e.push('<div class="'+s+'">'+i+"</div>")}return e.push(this._generateBody(t)+"</div>"),
e.join("")},_generateTextBox:function(t,i){var a=this.idNameMapping?this.idNameMapping.String:this._defaultIdNameMapping.String;
a+=this._counter++;var e=this.widgetMapping?this.widgetMapping.String:this._defaultWidgetMapping.String,s=this.classMapping&&this.classMapping.Label?this.classMapping.Label:this._defaultClassMapping.Label,n=this.classMapping&&this.classMapping.String?this.classMapping.String:this._defaultClassMapping.String,r=this.classMapping&&this.classMapping.Row?this.classMapping.Row:this._defaultClassMapping.Row,d="value: at('rel:"+(i&&t||"")+"', '"+(i?"value":t)+"')";
return'<div class="'+r+'"><label class="'+s+'">'+t+':</label><input class="'+n+'" data-dojo-type="'+e+'" data-dojo-props="name: \''+a+"', "+d+'" id="'+a+'"></input></div>';
}})});