define(["dojo/_base/declare","dojo/dom","dojo/_base/lang","dojo/query","dojo/store/Memory","../registry"],function(t,e,o,i,d,n){
function r(t){return{id:t.value,value:t.value,name:o.trim(t.innerText||t.textContent||"")
}}return t("dijit.form.DataList",d,{constructor:function(t,d){this.domNode=e.byId(d),
o.mixin(this,t),this.id&&n.add(this),this.domNode.style.display="none",this.inherited(arguments,[{
data:i("option",this.domNode).map(r)}])},destroy:function(){n.remove(this.id)},fetchSelectedItem:function(){
var t=i("> option[selected]",this.domNode)[0]||i("> option",this.domNode)[0];return t&&r(t);
}})});