define(["dojo/_base/declare","./HorizontalRuleLabels"],function(i,e){return i("dijit.form.VerticalRuleLabels",e,{
templateString:'<div class="dijitRuleContainer dijitRuleContainerV dijitRuleLabelsContainer dijitRuleLabelsContainerV"></div>',
_positionPrefix:'<div class="dijitRuleLabelContainer dijitRuleLabelContainerV" style="top:',
_labelPrefix:'"><span class="dijitRuleLabel dijitRuleLabelV">',_calcPosition:function(i){
return 100-i},_isHorizontal:!1})});