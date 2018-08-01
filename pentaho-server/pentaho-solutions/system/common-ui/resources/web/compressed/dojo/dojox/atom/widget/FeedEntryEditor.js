define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/connect","dojo/_base/declare","dojo/_base/fx","dojo/_base/sniff","dojo/dom","dojo/dom-style","dojo/dom-construct","dijit/_Widget","dijit/_Templated","dijit/_Container","dijit/Editor","dijit/form/TextBox","dijit/form/SimpleTextarea","./FeedEntryViewer","../io/model","dojo/text!./templates/FeedEntryEditor.html","dojo/text!./templates/PeopleEditor.html","dojo/i18n!./nls/FeedEntryViewer","dojo/i18n!./nls/FeedEntryEditor","dojo/i18n!./nls/PeopleEditor"],function(t,e,i,n,r,s,d,o,a,l,h,u,c,m,y,p,_,v,E,f,C,w){
t.experimental("dojox.atom.widget.FeedEntryEditor");var b=n("dojox.atom.widget.FeedEntryEditor",p,{
_contentEditor:null,_oldContent:null,_setObject:null,enableEdit:!1,_contentEditorCreator:null,
_editors:{},entryNewButton:null,_editable:!1,templateString:v,postCreate:function(){
""!==this.entrySelectionTopic&&(this._subscriptions=[t.subscribe(this.entrySelectionTopic,this,"_handleEvent")]);
var e=f;this.displayOptions.innerHTML=e.displayOptions,this.feedEntryCheckBoxLabelTitle.innerHTML=e.title,
this.feedEntryCheckBoxLabelAuthors.innerHTML=e.authors,this.feedEntryCheckBoxLabelContributors.innerHTML=e.contributors,
this.feedEntryCheckBoxLabelId.innerHTML=e.id,this.close.innerHTML=e.close,this.feedEntryCheckBoxLabelUpdated.innerHTML=e.updated,
this.feedEntryCheckBoxLabelSummary.innerHTML=e.summary,this.feedEntryCheckBoxLabelContent.innerHTML=e.content,
e=C,this.doNew.innerHTML=e.doNew,this.edit.innerHTML=e.edit,this.save.innerHTML=e.save,
this.cancel.innerHTML=e.cancel},setEntry:function(t,e,i){this._entry!==t?(this._editMode=!1,
i=!1):i=!0,b.superclass.setEntry.call(this,t,e),this._editable=this._isEditable(t),
i||this._editable||(o.set(this.entryEditButton,"display","none"),o.set(this.entrySaveCancelButtons,"display","none")),
this._editable&&this.enableEdit&&(i||(o.set(this.entryEditButton,"display",""),this.enableMenuFade&&this.entrySaveCancelButton&&r.fadeOut({
node:this.entrySaveCancelButton,duration:250}).play()))},_toggleEdit:function(){this._editable&&this.enableEdit&&(o.set(this.entryEditButton,"display","none"),
o.set(this.entrySaveCancelButtons,"display",""),this._editMode=!0,this.setEntry(this._entry,this._feed,!0));
},_handleEvent:function(t){t.source!=this&&"delete"==t.action&&t.entry&&t.entry==this._entry&&o.set(this.entryEditButton,"display","none"),
b.superclass._handleEvent.call(this,t)},_isEditable:function(t){var e=!1;if(t&&null!==t&&t.links&&null!==t.links)for(var i in t.links)if(t.links[i].rel&&"edit"==t.links[i].rel){
e=!0;break}return e},setTitle:function(t,e,i){if(e){if(i.title&&i.title.value&&null!==i.title.value){
this._toLoad||(this._toLoad=[]),this.entryTitleSelect.value=i.title.type;var n=this._createEditor(t,i.title,!0,"html"===i.title.type||"xhtml"===i.title.type);
n.name="title",this._toLoad.push(n),this.setFieldValidity("titleedit",!0),this.setFieldValidity("title",!0);
}}else b.superclass.setTitle.call(this,t,e,i),i.title&&i.title.value&&null!==i.title.value&&this.setFieldValidity("title",!0);
},setAuthors:function(t,e,i){e?i.authors&&i.authors.length>0&&(this._editors.authors=this._createPeopleEditor(this.entryAuthorNode,{
data:i.authors,name:"Author"}),this.setFieldValidity("authors",!0)):(b.superclass.setAuthors.call(this,t,e,i),
i.authors&&i.authors.length>0&&this.setFieldValidity("authors",!0))},setContributors:function(t,e,i){
e?i.contributors&&i.contributors.length>0&&(this._editors.contributors=this._createPeopleEditor(this.entryContributorNode,{
data:i.contributors,name:"Contributor"}),this.setFieldValidity("contributors",!0)):(b.superclass.setContributors.call(this,t,e,i),
i.contributors&&i.contributors.length>0&&this.setFieldValidity("contributors",!0));
},setId:function(t,e,i){e?i.id&&null!==i.id&&(this._editors.id=this._createEditor(t,i.id),
this.setFieldValidity("id",!0)):(b.superclass.setId.call(this,t,e,i),i.id&&null!==i.id&&this.setFieldValidity("id",!0));
},setUpdated:function(t,e,i){e?i.updated&&null!==i.updated&&(this._editors.updated=this._createEditor(t,i.updated),
this.setFieldValidity("updated",!0)):(b.superclass.setUpdated.call(this,t,e,i),i.updated&&null!==i.updated&&this.setFieldValidity("updated",!0));
},setSummary:function(t,e,i){if(e){if(i.summary&&i.summary.value&&null!==i.summary.value){
this._toLoad||(this._toLoad=[]),this.entrySummarySelect.value=i.summary.type;var n=this._createEditor(t,i.summary,!0,"html"===i.summary.type||"xhtml"===i.summary.type);
n.name="summary",this._toLoad.push(n),this.setFieldValidity("summaryedit",!0),this.setFieldValidity("summary",!0);
}}else b.superclass.setSummary.call(this,t,e,i),i.summary&&i.summary.value&&null!==i.summary.value&&this.setFieldValidity("summary",!0);
},setContent:function(t,e,i){if(e){if(i.content&&i.content.value&&null!==i.content.value){
this._toLoad||(this._toLoad=[]),this.entryContentSelect.value=i.content.type;var n=this._createEditor(t,i.content,!0,"html"===i.content.type||"xhtml"===i.content.type);
n.name="content",this._toLoad.push(n),this.setFieldValidity("contentedit",!0),this.setFieldValidity("content",!0);
}}else b.superclass.setContent.call(this,t,e,i),i.content&&i.content.value&&null!==i.content.value&&this.setFieldValidity("content",!0);
},_createEditor:function(t,e,i,n){var r,s;if(!e)return n?{anchorNode:t,entryValue:"",
editor:null,generateEditor:function(){var t=document.createElement("div");t.innerHTML=this.entryValue,
this.anchorNode.appendChild(t);var e=new c({},t);return this.editor=e,e}}:(i?(r=document.createElement("textarea"),
t.appendChild(r),o.set(r,"width","90%"),s=new y({},r)):(r=document.createElement("input"),
t.appendChild(r),o.set(r,"width","95%"),s=new m({},r)),s.attr("value",""),s);var d;
return d=void 0!==e.value?e.value:e.attr?e.attr("value"):e,n?(-1!=d.indexOf("<")&&(d=d.replace(/</g,"&lt;")),
{anchorNode:t,entryValue:d,editor:null,generateEditor:function(){var t=document.createElement("div");
t.innerHTML=this.entryValue,this.anchorNode.appendChild(t);var e=new c({},t);return this.editor=e,
e}}):(i?(r=document.createElement("textarea"),t.appendChild(r),o.set(r,"width","90%"),
s=new y({},r)):(r=document.createElement("input"),t.appendChild(r),o.set(r,"width","95%"),
s=new m({},r)),s.attr("value",d),s)},_switchEditor:function(t){var i=null,n=null,r=null;
n=s("ie")?t.srcElement:t.target,n===this.entryTitleSelect?(r=this.entryTitleNode,
i="title"):n===this.entrySummarySelect?(r=this.entrySummaryNode,i="summary"):(r=this.entryContentNode,
i="content");var d,o,l=this._editors[i];if("text"===n.value){if(l.isInstanceOf(c)){
for(o=l.attr("value",!1),l.close(!1,!0),l.destroy();r.firstChild;)a.destroy(r.firstChild);
d=this._createEditor(r,{value:o},!0,!1),this._editors[i]=d}}else if(!l.isInstanceOf(c)){
for(o=l.attr("value"),l.destroy();r.firstChild;)a.destroy(r.firstChild);d=this._createEditor(r,{
value:o},!0,!0),d=e.hitch(d,d.generateEditor)(),this._editors[i]=d}},_createPeopleEditor:function(t,e){
var i=document.createElement("div");return t.appendChild(i),new x(e,i)},saveEdits:function(){
o.set(this.entrySaveCancelButtons,"display","none"),o.set(this.entryEditButton,"display",""),
o.set(this.entryNewButton,"display","");var e,i,n,r,s,d,a=!1;if(this._new){this._new=!1,
r=new _.Entry,e=this._editors.title.attr("value"),"xhtml"===this.entryTitleSelect.value&&(e=this._enforceXhtml(e),
e='<div xmlns="http://www.w3.org/1999/xhtml">'+e+"</div>"),r.setTitle(e,this.entryTitleSelect.value),
r.id=this._editors.id.attr("value"),s=this._editors.authors.getValues();for(i in s)(s[i].name||s[i].email||s[i].uri)&&r.addAuthor(s[i].name,s[i].email,s[i].uri);
d=this._editors.contributors.getValues();for(i in d)(d[i].name||d[i].email||d[i].uri)&&r.addContributor(d[i].name,d[i].email,d[i].uri);
e=this._editors.summary.attr("value"),"xhtml"===this.entrySummarySelect.value&&(e=this._enforceXhtml(e),
e='<div xmlns="http://www.w3.org/1999/xhtml">'+e+"</div>"),r.summary=new _.Content("summary",e,null,this.entrySummarySelect.value),
e=this._editors.content.attr("value"),"xhtml"===this.entryContentSelect.value&&(e=this._enforceXhtml(e),
e='<div xmlns="http://www.w3.org/1999/xhtml">'+e+"</div>"),r.content=new _.Content("content",e,null,this.entryContentSelect.value),
o.set(this.entryNewButton,"display",""),t.publish(this.entrySelectionTopic,[{action:"post",
source:this,entry:r}])}else{if(r=this.getEntry(),!this._editors.title||this._editors.title.attr("value")==r.title.value&&this.entryTitleSelect.value==r.title.type||(e=this._editors.title.attr("value"),
"xhtml"===this.entryTitleSelect.value&&(e=this._enforceXhtml(e),0!==e.indexOf('<div xmlns="http://www.w3.org/1999/xhtml">')&&(e='<div xmlns="http://www.w3.org/1999/xhtml">'+e+"</div>")),
r.title=new _.Content("title",e,null,this.entryTitleSelect.value),a=!0),this._editors.id.attr("value")!=r.id&&(r.id=this._editors.id.attr("value"),
a=!0),!this._editors.summary||this._editors.summary.attr("value")==r.summary.value&&this.entrySummarySelect.value==r.summary.type||(e=this._editors.summary.attr("value"),
"xhtml"===this.entrySummarySelect.value&&(e=this._enforceXhtml(e),0!==e.indexOf('<div xmlns="http://www.w3.org/1999/xhtml">')&&(e='<div xmlns="http://www.w3.org/1999/xhtml">'+e+"</div>")),
r.summary=new _.Content("summary",e,null,this.entrySummarySelect.value),a=!0),!this._editors.content||this._editors.content.attr("value")==r.content.value&&this.entryContentSelect.value==r.content.type||(e=this._editors.content.attr("value"),
"xhtml"===this.entryContentSelect.value&&(e=this._enforceXhtml(e),0!==e.indexOf('<div xmlns="http://www.w3.org/1999/xhtml">')&&(e='<div xmlns="http://www.w3.org/1999/xhtml">'+e+"</div>")),
r.content=new _.Content("content",e,null,this.entryContentSelect.value),a=!0),this._editors.authors)if(a){
r.authors=[],s=this._editors.authors.getValues();for(i in s)(s[i].name||s[i].email||s[i].uri)&&r.addAuthor(s[i].name,s[i].email,s[i].uri);
}else{var l=r.authors,h=function(t,e,n){for(i in l)if(l[i].name===t&&l[i].email===e&&l[i].uri===n)return!0;
return!1};s=this._editors.authors.getValues(),n=!1;for(i in s)if(!h(s[i].name,s[i].email,s[i].uri)){
n=!0;break}if(n){r.authors=[];for(i in s)(s[i].name||s[i].email||s[i].uri)&&r.addAuthor(s[i].name,s[i].email,s[i].uri);
a=!0}}if(this._editors.contributors)if(a){r.contributors=[],d=this._editors.contributors.getValues();
for(i in d)(d[i].name||d[i].email||d[i].uri)&&r.addAuthor(d[i].name,d[i].email,d[i].uri);
}else{var u=r.contributors,c=function(t,e,n){for(i in u)if(u[i].name===t&&u[i].email===e&&u[i].uri===n)return!0;
return!1};d=this._editors.contributors.getValues(),n=!1;for(i in d)if(c(d[i].name,d[i].email,d[i].uri)){
n=!0;break}if(n){r.contributors=[];for(i in d)(d[i].name||d[i].email||d[i].uri)&&r.addContributor(d[i].name,d[i].email,d[i].uri);
a=!0}}a&&t.publish(this.entrySelectionTopic,[{action:"update",source:this,entry:r,
callback:this._handleSave}])}this._editMode=!1,this.setEntry(r,this._feed,!0)},_handleSave:function(t,e){
this._editMode=!1,this.clear(),this.setEntry(t,this.getFeed(),!0)},cancelEdits:function(){
this._new=!1,o.set(this.entrySaveCancelButtons,"display","none"),this._editable&&o.set(this.entryEditButton,"display",""),
o.set(this.entryNewButton,"display",""),this._editMode=!1,this.clearEditors(),this.setEntry(this.getEntry(),this.getFeed(),!0);
},clear:function(){this._editable=!1,this.clearEditors(),b.superclass.clear.apply(this),
this._contentEditor&&(this._contentEditor=this._setObject=this._oldContent=this._contentEditorCreator=null,
this._editors={})},clearEditors:function(){for(var t in this._editors)this._editors[t].isInstanceOf(c)&&this._editors[t].close(!1,!0),
this._editors[t].destroy();this._editors={}},_enforceXhtml:function(t){var e=null;
if(t){var i=/<br>/g;e=t.replace(i,"<br/>"),e=this._closeTag(e,"hr"),e=this._closeTag(e,"img");
}return e},_closeTag:function(t,e){var i="<"+e,n=t.indexOf(i);if(-1!==n)for(;-1!==n;){
for(var r="",s=!1,d=0;d<t.length;d++){var o=t.charAt(d);n>=d||s?r+=o:(">"===o&&(r+="/",
s=!0),r+=o)}t=r,n=t.indexOf(i,n+1)}return t},_toggleNew:function(){o.set(this.entryNewButton,"display","none"),
o.set(this.entryEditButton,"display","none"),o.set(this.entrySaveCancelButtons,"display",""),
this.entrySummarySelect.value="text",this.entryContentSelect.value="text",this.entryTitleSelect.value="text",
this.clearNodes(),this._new=!0;var t=f,e=new p.EntryHeader({title:t.title});this.entryTitleHeader.appendChild(e.domNode),
this._editors.title=this._createEditor(this.entryTitleNode,null),this.setFieldValidity("title",!0);
var i=new p.EntryHeader({title:t.authors});this.entryAuthorHeader.appendChild(i.domNode),
this._editors.authors=this._createPeopleEditor(this.entryAuthorNode,{name:"Author"
}),this.setFieldValidity("authors",!0);var n=new p.EntryHeader({title:t.contributors
});this.entryContributorHeader.appendChild(n.domNode),this._editors.contributors=this._createPeopleEditor(this.entryContributorNode,{
name:"Contributor"}),this.setFieldValidity("contributors",!0);var r=new p.EntryHeader({
title:t.id});this.entryIdHeader.appendChild(r.domNode),this._editors.id=this._createEditor(this.entryIdNode,null),
this.setFieldValidity("id",!0);var s=new p.EntryHeader({title:t.updated});this.entryUpdatedHeader.appendChild(s.domNode),
this._editors.updated=this._createEditor(this.entryUpdatedNode,null),this.setFieldValidity("updated",!0);
var d=new p.EntryHeader({title:t.summary});this.entrySummaryHeader.appendChild(d.domNode),
this._editors.summary=this._createEditor(this.entrySummaryNode,null,!0),this.setFieldValidity("summaryedit",!0),
this.setFieldValidity("summary",!0);var a=new p.EntryHeader({title:t.content});this.entryContentHeader.appendChild(a.domNode),
this._editors.content=this._createEditor(this.entryContentNode,null,!0),this.setFieldValidity("contentedit",!0),
this.setFieldValidity("content",!0),this._displaySections()},_displaySections:function(){
if(o.set(this.entrySummarySelect,"display","none"),o.set(this.entryContentSelect,"display","none"),
o.set(this.entryTitleSelect,"display","none"),this.isFieldValid("contentedit")&&o.set(this.entryContentSelect,"display",""),
this.isFieldValid("summaryedit")&&o.set(this.entrySummarySelect,"display",""),this.isFieldValid("titleedit")&&o.set(this.entryTitleSelect,"display",""),
b.superclass._displaySections.apply(this),this._toLoad){for(var t in this._toLoad){
var i;i=this._toLoad[t].generateEditor?e.hitch(this._toLoad[t],this._toLoad[t].generateEditor)():this._toLoad[t],
this._editors[this._toLoad[t].name]=i,this._toLoad[t]=null}this._toLoad=null}}}),x=n("dojox.atom.widget.PeopleEditor",[l,h,u],{
templateString:E,_rows:[],_editors:[],_index:0,_numRows:0,postCreate:function(){var t=w;
if(this.name?"Author"==this.name?this.peopleEditorButton.appendChild(document.createTextNode("["+t.addAuthor+"]")):"Contributor"==this.name&&this.peopleEditorButton.appendChild(document.createTextNode("["+t.addContributor+"]")):this.peopleEditorButton.appendChild(document.createTextNode("["+t.add+"]")),
this._editors=[],this.data&&0!==this.data.length)for(var e in this.data)this._createEditors(this.data[e].name,this.data[e].email,this.data[e].uri,e),
this._index++,this._numRows++;else this._createEditors(null,null,null,0,this.name),
this._index=1},destroy:function(){for(var t in this._editors)for(var e in this._editors[t])this._editors[t][e].destroy();
this._editors=[]},_createEditors:function(t,e,n,r,s){var d=document.createElement("tr");
this.peopleEditorEditors.appendChild(d),d.id="removeRow"+r;var a=document.createElement("td");
if(a.setAttribute("align","right"),d.appendChild(a),a.colSpan=2,this._numRows>0){
var l=document.createElement("hr");a.appendChild(l),l.id="hr"+r}d=document.createElement("span"),
a.appendChild(d),d.className="peopleEditorButton",o.set(d,"font-size","x-small"),
i.connect(d,"onclick",this,"_removeEditor"),d.id="remove"+r,a=document.createTextNode("[X]"),
d.appendChild(a),d=document.createElement("tr"),this.peopleEditorEditors.appendChild(d),
d.id="editorsRow"+r;var h=document.createElement("td");d.appendChild(h),o.set(h,"width","20%"),
a=document.createElement("td"),d.appendChild(a),d=document.createElement("table"),
h.appendChild(d),o.set(d,"width","100%"),h=document.createElement("tbody"),d.appendChild(h),
d=document.createElement("table"),a.appendChild(d),o.set(d,"width","100%"),a=document.createElement("tbody"),
d.appendChild(a),this._editors[r]=[],this._editors[r].push(this._createEditor(t,s+"name"+r,"Name:",h,a)),
this._editors[r].push(this._createEditor(e,s+"email"+r,"Email:",h,a)),this._editors[r].push(this._createEditor(n,s+"uri"+r,"URI:",h,a));
},_createEditor:function(t,e,i,n,r){var s=document.createElement("tr");n.appendChild(s);
var d=document.createElement("label");d.setAttribute("for",e),d.appendChild(document.createTextNode(i)),
n=document.createElement("td"),n.appendChild(d),s.appendChild(n),s=document.createElement("tr"),
r.appendChild(s),r=document.createElement("td"),s.appendChild(r);var a=document.createElement("input");
a.setAttribute("id",e),r.appendChild(a),o.set(a,"width","95%");var l=new m({},a);return l.attr("value",t),
l},_removeEditor:function(t){var e=null;e=s("ie")?t.srcElement:t.target;var i=e.id;
i=i.substring(6);for(var n in this._editors[i])this._editors[i][n].destroy();var r=d.byId("editorsRow"+i),o=r.parentNode;
o.removeChild(r),r=d.byId("removeRow"+i),o=r.parentNode,o.removeChild(r),this._numRows--,
1===this._numRows&&"hr"===o.firstChild.firstChild.firstChild.tagName.toLowerCase()&&(r=o.firstChild.firstChild,
r.removeChild(r.firstChild)),this._editors[i]=null},_add:function(){this._createEditors(null,null,null,this._index),
this._index++,this._numRows++},getValues:function(){var t=[];for(var e in this._editors)this._editors[e]&&t.push({
name:this._editors[e][0].attr("value"),email:this._editors[e][1].attr("value"),uri:this._editors[e][2].attr("value")
});return t}});return b});