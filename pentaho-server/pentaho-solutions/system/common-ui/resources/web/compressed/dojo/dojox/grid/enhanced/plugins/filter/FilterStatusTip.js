define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/query","dojo/string","dojo/date/locale","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/TooltipDialog","dijit/form/Button","dijit/_base/popup","dojo/text!../../templates/FilterStatusPane.html","dojo/i18n!../../nls/Filter"],function(t,i,s,e,a,l,o,n,r,d,u,h,c){
var p="",g="",_="",f="",T="dojoxGridFStatusTipOddRow",m="dojoxGridFStatusTipHandle",j="dojoxGridFStatusTipCondition",v="dojoxGridFStatusTipDelRuleBtnIcon",D="</tbody></table>",C=t("dojox.grid.enhanced.plugins.filter.FilterStatusPane",[o,n],{
templateString:c});return t("dojox.grid.enhanced.plugins.filter.FilterStatusTip",null,{
constructor:function(t){var i=this.plugin=t.plugin;this._statusHeader=["<table border='0' cellspacing='0' class='",p,"'><thead><tr class='",g,"'><th class='",_,"'><div>",i.nls.statusTipHeaderColumn,"</div></th><th class='",_," lastColumn'><div>",i.nls.statusTipHeaderCondition,"</div></th></tr></thead><tbody>"].join(""),
this._removedCriterias=[],this._rules=[],this.statusPane=new C,this._dlg=new d({"class":"dijitTooltipBelow dojoxGridFStatusTipDialog",
content:this.statusPane,autofocus:!1}),this._dlg.connect(this._dlg.domNode,"onmouseleave",s.hitch(this,this.closeDialog)),
this._dlg.connect(this._dlg.domNode,"click",s.hitch(this,this._modifyFilter))},destroy:function(){
this._dlg.destroyRecursive()},showDialog:function(t,i,s){this._pos={x:t,y:i},h.close(this._dlg),
this._removedCriterias=[],this._rules=[],this._updateStatus(s),h.open({popup:this._dlg,
parent:this.plugin.filterBar,onCancel:function(){},x:t-12,y:i-3})},closeDialog:function(){
h.close(this._dlg),this._removedCriterias.length&&(this.plugin.filterDefDialog.removeCriteriaBoxes(this._removedCriterias),
this._removedCriterias=[],this.plugin.filterDefDialog.onFilter())},_updateStatus:function(t){
var i,s=this.plugin,e=s.nls,l=this.statusPane,o=s.filterDefDialog;if(0===o.getCriteria()){
l.statusTitle.innerHTML=e.statusTipTitleNoFilter,l.statusRel.innerHTML="";var n=s.grid.layout.cells[t],r=n?"'"+(n.name||n.field)+"'":e.anycolumn;
i=a.substitute(e.statusTipMsg,[r])}else{l.statusTitle.innerHTML=e.statusTipTitleHasFilter,
l.statusRel.innerHTML="logicall"==o._relOpCls?e.statusTipRelAll:e.statusTipRelAny,
this._rules=[];for(var d=0,u=o.getCriteria(d++);u;)u.index=d-1,this._rules.push(u),
u=o.getCriteria(d++);i=this._createStatusDetail()}l.statusDetailNode.innerHTML=i,
this._addButtonForRules()},_createStatusDetail:function(){return this._statusHeader+i.map(this._rules,function(t,i){
return this._getCriteriaStr(t,i)},this).join("")+D},_addButtonForRules:function(){
this._rules.length>1&&e("."+m,this.statusPane.statusDetailNode).forEach(s.hitch(this,function(t,i){
new u({label:this.plugin.nls.removeRuleButton,showLabel:!1,iconClass:v,onClick:s.hitch(this,function(t){
t.stopPropagation(),this._removedCriterias.push(this._rules[i].index),this._rules.splice(i,1),
this.statusPane.statusDetailNode.innerHTML=this._createStatusDetail(),this._addButtonForRules();
})}).placeAt(t,"last")}))},_getCriteriaStr:function(t,i){var s=["<tr class='",f," ",i%2?T:"","'><td class='",_,"'>",t.colTxt,"</td><td class='",_,"'><div class='",m,"'><span class='",j,"'>",t.condTxt,"&nbsp;</span>",t.formattedVal,"</div></td></tr>"];
return s.join("")},_modifyFilter:function(){this.closeDialog();var t=this.plugin;t.filterDefDialog.showDialog(t.filterBar.getColumnIdx(this._pos.x));
}})});