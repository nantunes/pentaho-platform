define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/_base/event","dojo/dom-style","dojo/ready","dojo/keys","dijit/registry","dijit/typematic","dijit/_WidgetBase","dijit/_WidgetsInTemplateMixin","dijit/_TemplatedMixin","dijit/form/_TextBoxMixin","dojox/math/_base","dijit/TooltipDialog","dojo/text!./templates/Standard.html","dojox/calc/_Executor","dijit/Menu","dijit/MenuItem","dijit/form/ComboButton","dijit/form/Button","dijit/form/TextBox"],function(t,e,i,o,s,n,a,h,d,c,x,r,l,u,m,g,b,f){
return t("dojox.calc.Standard",[x,l,r],{templateString:b,readStore:null,writeStore:null,
functions:[],executorLoaded:function(){a(e.hitch(this,function(){this.loadStore(this.readStore,!0),
this.loadStore(this.writeStore)}))},saveFunction:function(t,e,i){this.functions[t]=this.executor.normalizedFunction(t,e,i),
this.functions[t].args=e,this.functions[t].body=i},loadStore:function(t,i){t&&t.query({}).forEach(e.hitch(this,function(t){
e.hitch(this,i?this.executor.normalizedFunction:this.saveFunction)(t.name,t.args,t.body);
}))},parseTextbox:function(){var t=this.textboxWidget.textbox.value;if(""==t&&this.commandList.length>0&&(this.setTextboxValue(this.textboxWidget,this.commandList[this.commandList.length-1]),
t=this.textboxWidget.textbox.value),""!=t){var e=this.executor.eval(t);"number"==typeof e&&isNaN(e)?((0==this.commandList.length||this.commandList[this.commandList.length-1]!=t)&&this.commandList.push(t),
this.print(t,!1),this.print("Not a Number",!0)):("object"==typeof e&&"length"in e||"object"!=typeof e)&&"function"!=typeof e&&null!=e&&(this.executor.eval("Ans="+e),
(0==this.commandList.length||this.commandList[this.commandList.length-1]!=t)&&this.commandList.push(t),
this.print(t,!1),this.print(e,!0)),this.commandIndex=this.commandList.length-1,this.hasDisplay&&(this.displayBox.scrollTop=this.displayBox.scrollHeight),
u.selectInputText(this.textboxWidget.textbox)}else this.textboxWidget.focus()},cycleCommands:function(t,e,i){
if(-1!=t&&0!=this.commandList.length){var o=i.charOrCode;o==h.UP_ARROW?this.cycleCommandUp():o==h.DOWN_ARROW&&this.cycleCommandDown();
}},cycleCommandUp:function(){this.commandIndex-1<0?this.commandIndex=0:this.commandIndex--,
this.setTextboxValue(this.textboxWidget,this.commandList[this.commandIndex])},cycleCommandDown:function(){
this.commandIndex+1>=this.commandList.length?(this.commandIndex=this.commandList.length,
this.setTextboxValue(this.textboxWidget,"")):(this.commandIndex++,this.setTextboxValue(this.textboxWidget,this.commandList[this.commandIndex]));
},onBlur:function(){if(i("ie")){var t=o.doc.selection.createRange().duplicate(),e=t.text||"",s=this.textboxWidget.textbox.createTextRange();
t.move("character",0),s.move("character",0);try{s.setEndPoint("EndToEnd",t),this.textboxWidget.textbox.selectionEnd=(this.textboxWidget.textbox.selectionStart=String(s.text).replace(/\r/g,"").length)+e.length;
}catch(n){}}},onKeyPress:function(t){if(t.charOrCode==h.ENTER)this.parseTextbox(),
s.stop(t);else if("!"==t.charOrCode||"^"==t.charOrCode||"*"==t.charOrCode||"/"==t.charOrCode||"-"==t.charOrCode||"+"==t.charOrCode){
if(i("ie")){var e=o.doc.selection.createRange().duplicate(),n=e.text||"",a=this.textboxWidget.textbox.createTextRange();
e.move("character",0),a.move("character",0);try{a.setEndPoint("EndToEnd",e),this.textboxWidget.textbox.selectionEnd=(this.textboxWidget.textbox.selectionStart=String(a.text).replace(/\r/g,"").length)+n.length;
}catch(t){}}""==this.textboxWidget.get("value")?this.setTextboxValue(this.textboxWidget,"Ans"):this.putInAnsIfTextboxIsHighlighted(this.textboxWidget.textbox,s.charOrCode)&&(this.setTextboxValue(this.textboxWidget,"Ans"),
u.selectInputText(this.textboxWidget.textbox,this.textboxWidget.textbox.value.length,this.textboxWidget.textbox.value.length));
}},insertMinus:function(){this.insertText("-")},print:function(t,e){var i="<span style='display:block;";
i+=e?"text-align:right;'>":"text-align:left;'>",i+=t+"<br></span>",this.hasDisplay?this.displayBox.innerHTML+=i:this.setTextboxValue(this.textboxWidget,t);
},setTextboxValue:function(t,e){t.set("value",e)},putInAnsIfTextboxIsHighlighted:function(t){
if("number"==typeof t.selectionStart){if(0==t.selectionStart&&t.selectionEnd==t.value.length)return!0;
}else if(document.selection){var e=document.selection.createRange();if(t.value==e.text)return!0;
}return!1},clearText:function(){this.hasDisplay&&""==this.textboxWidget.get("value")?this.displayBox.innerHTML="":this.setTextboxValue(this.textboxWidget,""),
this.textboxWidget.focus()},insertOperator:function(t){"object"==typeof t&&(t=t=d.getEnclosingWidget(t.target).value),
(""==this.textboxWidget.get("value")||this.putInAnsIfTextboxIsHighlighted(this.textboxWidget.textbox))&&(t="Ans"+t),
this.insertText(t)},insertText:function(t){setTimeout(e.hitch(this,function(){var e=this.textboxWidget.textbox;
""==e.value&&(e.selectionStart=0,e.selectionEnd=0),"object"==typeof t&&(t=t=d.getEnclosingWidget(t.target).value);
var o=e.value.replace(/\r/g,"");if("number"==typeof e.selectionStart){var s=e.selectionStart,n=0;
i("opera")&&(n=(e.value.substring(0,s).match(/\r/g)||[]).length),e.value=o.substring(0,e.selectionStart-n)+t+o.substring(e.selectionEnd-n),
e.focus(),s+=t.length,u.selectInputText(this.textboxWidget.textbox,s,s)}else document.selection&&(this.handle&&(clearTimeout(this.handle),
this.handle=null),e.focus(),this.handle=setTimeout(function(){var e=document.selection.createRange();
e.text=t,e.select(),this.handle=null},0))}),0)},hasDisplay:!1,postCreate:function(){
this.handle=null,this.commandList=[],this.commandIndex=0,this.displayBox&&(this.hasDisplay=!0),
this.toFracButton&&!f.toFrac&&n.set(this.toFracButton.domNode,{visibility:"hidden"
}),this.functionMakerButton&&!f.FuncGen&&n.set(this.functionMakerButton.domNode,{
visibility:"hidden"}),this.grapherMakerButton&&!f.Grapher&&n.set(this.grapherMakerButton.domNode,{
visibility:"hidden"}),this._connects.push(c.addKeyListener(this.textboxWidget.textbox,{
charOrCode:h.UP_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1},this,this.cycleCommands,200,200)),
this._connects.push(c.addKeyListener(this.textboxWidget.textbox,{charOrCode:h.DOWN_ARROW,
shiftKey:!1,metaKey:!1,ctrlKey:!1},this,this.cycleCommands,200,200)),this.startup();
}})});