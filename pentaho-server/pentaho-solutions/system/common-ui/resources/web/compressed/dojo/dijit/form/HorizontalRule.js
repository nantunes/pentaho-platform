define(["dojo/_base/declare","../_Widget","../_TemplatedMixin"],function(i,t,e){return i("dijit.form.HorizontalRule",[t,e],{
templateString:'<div class="dijitRuleContainer dijitRuleContainerH"></div>',count:3,
container:"containerNode",ruleStyle:"",_positionPrefix:'<div class="dijitRuleMark dijitRuleMarkH" style="left:',
_positionSuffix:"%;",_suffix:'"></div>',_genHTML:function(i){return this._positionPrefix+i+this._positionSuffix+this.ruleStyle+this._suffix;
},_isHorizontal:!0,buildRendering:function(){this.inherited(arguments);var i;if(1==this.count)i=this._genHTML(50,0);else{
var t,e=100/(this.count-1);if(!this._isHorizontal||this.isLeftToRight()){for(i=this._genHTML(0,0),
t=1;t<this.count-1;t++)i+=this._genHTML(e*t,t);i+=this._genHTML(100,this.count-1);
}else{for(i=this._genHTML(100,0),t=1;t<this.count-1;t++)i+=this._genHTML(100-e*t,t);
i+=this._genHTML(0,this.count-1)}}this.domNode.innerHTML=i}})});