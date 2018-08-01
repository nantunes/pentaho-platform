define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/event","dojo/query","dojo/dom-attr","dojo/text!./resources/TriStateCheckBox.html","dijit/form/Button","dijit/form/_ToggleButtonMixin","dojo/NodeList-dom"],function(t,e,s,i,a,n,h,r,o,u){
return e("dojox.form.TriStateCheckBox",[o,u],{templateString:r,baseClass:"dojoxTriStateCheckBox",
type:"checkbox",states:"",_stateLabels:null,stateValue:null,_currentState:0,_stateType:"False",
readOnly:!1,checked:"",_aria_attr:"aria-checked",constructor:function(){this.states=[!1,"mixed",!0],
this.checked=!1,this._stateLabels={False:"&#9633;",True:"&#8730;",Mixed:"&#9632;"
},this.stateValues={False:!1,True:"on",Mixed:"mixed"}},_fillContent:function(t){},
postCreate:function(){h.set(this.stateLabelNode,"innerHTML",this._stateLabels[this._stateType]),
this.inherited(arguments)},startup:function(){this.set("checked",this.params.checked||this.states[this._currentState]),
h.set(this.stateLabelNode,"innerHTML",this._stateLabels[this._stateType]),this.inherited(arguments);
},_setIconClassAttr:null,_setCheckedAttr:function(t,e){var i=s.indexOf(this.states,t);
i>=0?(this._currentState=i,this._stateType=this._getStateType(t),h.set(this.focusNode,"value",this.stateValues[this._stateType]),
h.set(this.stateLabelNode,"innerHTML",this._stateLabels[this._stateType]),this.inherited(arguments)):console.warn("Invalid state!");
},setChecked:function(e){t.deprecated("setChecked("+e+") is deprecated. Use set('checked',"+e+") instead.","","2.0"),
this.set("checked",e)},_setStatesAttr:function(t){if(i.isArray(t))this._set("states",t);else if(i.isString(t)){
var e={"true":!0,"false":!1,mixed:"mixed"};t=t.split(/\s*,\s*/);for(var s=0;s<t.length;s++)t[s]=void 0!==e[t[s]]?e[t[s]]:!1;
this._set("states",t)}},_setReadOnlyAttr:function(t){this._set("readOnly",t),h.set(this.focusNode,"readOnly",t);
},_setValueAttr:function(t,e){"string"==typeof t&&s.indexOf(this.states,t)<0&&(""==t&&(t="on"),
this.stateValues.True=t,t=!0),this._created&&(this._currentState=s.indexOf(this.states,t),
this.set("checked",t,e),h.set(this.focusNode,"value",this.stateValues[this._stateType]));
},_setValuesAttr:function(t){this.stateValues.True=t[0]?t[0]:this.stateValues.True,
this.stateValues.Mixed=t[1]?t[1]:this.stateValues.Mixed},_getValueAttr:function(){
return this.stateValues[this._stateType]},reset:function(){this._hasBeenBlurred=!1,
this.set("states",this.params.states||[!1,"mixed",!0]),this.stateValues=this.params.stateValues||{
False:!1,True:"on",Mixed:"mixed"},this.set("values",this.params.values||[]),this.set("checked",this.params.checked||this.states[0]);
},_onFocus:function(){this.id&&n("label[for='"+this.id+"']").addClass("dijitFocusedLabel"),
this.inherited(arguments)},_onBlur:function(){this.id&&n("label[for='"+this.id+"']").removeClass("dijitFocusedLabel"),
this.mouseFocus=!1,this.inherited(arguments)},_onClick:function(t){return this.readOnly||this.disabled?(a.stop(t),
!1):(this.click(),this.onClick(t))},click:function(){this._currentState>=this.states.length-1?this._currentState=0:-1==this._currentState?this.fixState():this._currentState++;
var t=this._currentState;this.set("checked",this.states[this._currentState]),this._currentState=t,
h.set(this.stateLabelNode,"innerHTML",this._stateLabels[this._stateType])},fixState:function(){
this._currentState=this.states.length-1},_getStateType:function(t){return t?"mixed"==t?"Mixed":"True":"False";
},_onMouseDown:function(){this.mouseFocus=!0}})});