define(["../lib/jquery","./BaseComponent","../Logger"],function(e,a,t){return a.extend({
update:function(){var a=this;a._addHtmlToPlaceholder();var t=e("#"+a.name);t.val(a.dashboard.getParameterValue(a.parameter)),
t.change(function(){a.dashboard.getParameterValue(a.parameter)!==t.val()&&a.dashboard.processChange(a.name);
}).keyup(function(e){13==e.keyCode&&a.dashboard.getParameterValue(a.parameter)!==t.val()&&a.dashboard.processChange(a.name);
}),a._doAutoFocus()},getValue:function(){return e("#"+this.name).val()},_addHtmlToPlaceholder:function(){
function e(e){var a=[];for(prop in e)e.hasOwnProperty(prop)&&null!=e[prop]&&a.push(prop+'="'+e[prop]+'"');
return a.join(" ")}var a={type:"text",id:this.name,name:this.name,size:this.size||this.charWidth||void 0,
maxlength:this.maxLength||this.maxChars||void 0},r="<input "+e(a)+">";this.size&&t.warn("Attribute 'size' is deprecated"),
this.maxLength&&t.warn("Attribute 'maxLength' is deprecated"),this.placeholder().html(r);
}})});