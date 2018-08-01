define(["dojo/_base/declare","dojo/dom-class","dojo/sniff","./TextBox"],function(t,e,i,s){
return t("dijit.form.SimpleTextarea",s,{baseClass:"dijitTextBox dijitTextArea",rows:"3",
cols:"20",templateString:"<textarea ${!nameAttrSetting} data-dojo-attach-point='focusNode,containerNode,textbox' autocomplete='off'></textarea>",
postMixInProperties:function(){!this.value&&this.srcNodeRef&&(this.value=this.srcNodeRef.value),
this.inherited(arguments)},buildRendering:function(){this.inherited(arguments),i("ie")&&this.cols&&e.add(this.textbox,"dijitTextAreaCols");
},filter:function(t){return t&&(t=t.replace(/\r/g,"")),this.inherited(arguments)},
_onInput:function(t){if(this.maxLength){var e=parseInt(this.maxLength),s=this.textbox.value.replace(/\r/g,""),n=s.length-e;
if(n>0){var o=this.textbox;if(o.selectionStart){var a=o.selectionStart,r=0;i("opera")&&(r=(this.textbox.value.substring(0,a).match(/\r/g)||[]).length),
this.textbox.value=s.substring(0,a-n-r)+s.substring(a-r),o.setSelectionRange(a-n,a-n);
}else if(this.ownerDocument.selection){o.focus();var c=this.ownerDocument.selection.createRange();
c.moveStart("character",-n),c.text="",c.select()}}}this.inherited(arguments)}})});