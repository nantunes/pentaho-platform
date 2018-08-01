define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","../xml/DomParser"],function(e){
e.getObject("sketch",!0,dojox);var t=dojox.sketch;return t.CommandTypes={Create:"Create",
Move:"Move",Modify:"Modify",Delete:"Delete",Convert:"Convert"},e.declare("dojox.sketch.UndoStack",null,{
constructor:function(e){this.figure=e,this._steps=[],this._undoedSteps=[]},apply:function(e,t,o){
if(!t&&!o&&e.fullText)return void this.figure.setValue(e.fullText);var s=t.shapeText,r=o.shapeText;
if(0!=s.length||0!=r.length){if(0==s.length){var a=dojox.xml.DomParser.parse(r).documentElement,n=this.figure._loadAnnotation(a);
return void(n&&this.figure._add(n))}if(0==r.length){var d=this.figure.getAnnotator(t.shapeId);
return void this.figure._delete([d],!0)}var i=this.figure.getAnnotator(o.shapeId),h=dojox.xml.DomParser.parse(r).documentElement;
i.draw(h),this.figure.select(i)}},add:function(e,o,s){var r=o?o.id:"",a=o?o.serialize():"";
e==t.CommandTypes.Delete&&(a="");var n={cmdname:e,before:{shapeId:r,shapeText:s||""
},after:{shapeId:r,shapeText:a}};this._steps.push(n),this._undoedSteps=[]},destroy:function(){},
undo:function(){var e=this._steps.pop();e&&(this._undoedSteps.push(e),this.apply(e,e.after,e.before));
},redo:function(){var e=this._undoedSteps.pop();e&&(this._steps.push(e),this.apply(e,e.before,e.after));
}}),dojox.sketch.UndoStack});