define(["dojo/_base/kernel","dojo/_base/connect","dojo/_base/declare","dojo/_base/fx","dojo/_base/array","dojo/dom-style","dojo/dom-construct","dijit/_Widget","dijit/_Templated","dijit/_Container","dijit/layout/ContentPane","../io/Connection","dojo/text!./templates/FeedEntryViewer.html","dojo/text!./templates/EntryHeader.html","dojo/i18n!./nls/FeedEntryViewer"],function(t,e,i,n,s,o,r,d,a,h,l,y,u,c,p){
t.experimental("dojox.atom.widget.FeedEntryViewer");var m=i("dojox.atom.widget.FeedEntryViewer",[d,a,h],{
entrySelectionTopic:"",_validEntryFields:{},displayEntrySections:"",_displayEntrySections:null,
enableMenu:!1,enableMenuFade:!1,_optionButtonDisplayed:!0,templateString:u,_entry:null,
_feed:null,_editMode:!1,postCreate:function(){""!==this.entrySelectionTopic&&(this._subscriptions=[t.subscribe(this.entrySelectionTopic,this,"_handleEvent")]);
var e=p;this.displayOptions.innerHTML=e.displayOptions,this.feedEntryCheckBoxLabelTitle.innerHTML=e.title,
this.feedEntryCheckBoxLabelAuthors.innerHTML=e.authors,this.feedEntryCheckBoxLabelContributors.innerHTML=e.contributors,
this.feedEntryCheckBoxLabelId.innerHTML=e.id,this.close.innerHTML=e.close,this.feedEntryCheckBoxLabelUpdated.innerHTML=e.updated,
this.feedEntryCheckBoxLabelSummary.innerHTML=e.summary,this.feedEntryCheckBoxLabelContent.innerHTML=e.content;
},startup:function(){""===this.displayEntrySections?this._displayEntrySections=["title","authors","contributors","summary","content","id","updated"]:this._displayEntrySections=this.displayEntrySections.split(","),
this._setDisplaySectionsCheckboxes(),this.enableMenu&&(o.set(this.feedEntryViewerMenu,"display",""),
this.entryCheckBoxRow&&this.entryCheckBoxRow2&&this.enableMenuFade&&(n.fadeOut({node:this.entryCheckBoxRow,
duration:250}).play(),n.fadeOut({node:this.entryCheckBoxRow2,duration:250}).play()));
},clear:function(){this.destroyDescendants(),this._entry=null,this._feed=null,this.clearNodes();
},clearNodes:function(){s.forEach(["entryTitleRow","entryAuthorRow","entryContributorRow","entrySummaryRow","entryContentRow","entryIdRow","entryUpdatedRow"],function(t){
o.set(this[t],"display","none")},this),s.forEach(["entryTitleNode","entryTitleHeader","entryAuthorHeader","entryContributorHeader","entryContributorNode","entrySummaryHeader","entrySummaryNode","entryContentHeader","entryContentNode","entryIdNode","entryIdHeader","entryUpdatedHeader","entryUpdatedNode"],function(t){
for(;this[t].firstChild;)r.destroy(this[t].firstChild)},this)},setEntry:function(t,e,i){
this.clear(),this._validEntryFields={},this._entry=t,this._feed=e,null!==t&&(this.entryTitleHeader&&this.setTitleHeader(this.entryTitleHeader,t),
this.entryTitleNode&&this.setTitle(this.entryTitleNode,this._editMode,t),this.entryAuthorHeader&&this.setAuthorsHeader(this.entryAuthorHeader,t),
this.entryAuthorNode&&this.setAuthors(this.entryAuthorNode,this._editMode,t),this.entryContributorHeader&&this.setContributorsHeader(this.entryContributorHeader,t),
this.entryContributorNode&&this.setContributors(this.entryContributorNode,this._editMode,t),
this.entryIdHeader&&this.setIdHeader(this.entryIdHeader,t),this.entryIdNode&&this.setId(this.entryIdNode,this._editMode,t),
this.entryUpdatedHeader&&this.setUpdatedHeader(this.entryUpdatedHeader,t),this.entryUpdatedNode&&this.setUpdated(this.entryUpdatedNode,this._editMode,t),
this.entrySummaryHeader&&this.setSummaryHeader(this.entrySummaryHeader,t),this.entrySummaryNode&&this.setSummary(this.entrySummaryNode,this._editMode,t),
this.entryContentHeader&&this.setContentHeader(this.entryContentHeader,t),this.entryContentNode&&this.setContent(this.entryContentNode,this._editMode,t)),
this._displaySections()},setTitleHeader:function(t,e){if(e.title&&e.title.value&&null!==e.title.value){
var i=p,n=new f({title:i.title});t.appendChild(n.domNode)}},setTitle:function(t,e,i){
if(i.title&&i.title.value&&null!==i.title.value){if("text"==i.title.type){var n=document.createTextNode(i.title.value);
t.appendChild(n)}else{var s=document.createElement("span"),o=new l({refreshOnShow:!0,
executeScripts:!1},s);o.attr("content",i.title.value),t.appendChild(o.domNode)}this.setFieldValidity("title",!0);
}},setAuthorsHeader:function(t,e){if(e.authors&&e.authors.length>0){var i=p,n=new f({
title:i.authors});t.appendChild(n.domNode)}},setAuthors:function(t,e,i){if(t.innerHTML="",
i.authors&&i.authors.length>0)for(var n in i.authors)if(i.authors[n].name){var s=t;
if(i.authors[n].uri){var o=document.createElement("a");s.appendChild(o),o.href=i.authors[n].uri,
s=o}var r=i.authors[n].name;i.authors[n].email&&(r=r+" ("+i.authors[n].email+")");
var d=document.createTextNode(r);s.appendChild(d);var a=document.createElement("br");
t.appendChild(a),this.setFieldValidity("authors",!0)}},setContributorsHeader:function(t,e){
if(e.contributors&&e.contributors.length>0){var i=p,n=new f({title:i.contributors
});t.appendChild(n.domNode)}},setContributors:function(t,e,i){if(i.contributors&&i.contributors.length>0)for(var n in i.contributors){
var s=document.createTextNode(i.contributors[n].name);t.appendChild(s);var o=document.createElement("br");
t.appendChild(o),this.setFieldValidity("contributors",!0)}},setIdHeader:function(t,e){
if(e.id&&null!==e.id){var i=p,n=new f({title:i.id});t.appendChild(n.domNode)}},setId:function(t,e,i){
if(i.id&&null!==i.id){var n=document.createTextNode(i.id);t.appendChild(n),this.setFieldValidity("id",!0);
}},setUpdatedHeader:function(t,e){if(e.updated&&null!==e.updated){var i=p,n=new f({
title:i.updated});t.appendChild(n.domNode)}},setUpdated:function(t,e,i){if(i.updated&&null!==i.updated){
var n=document.createTextNode(i.updated);t.appendChild(n),this.setFieldValidity("updated",!0);
}},setSummaryHeader:function(t,e){if(e.summary&&e.summary.value&&null!==e.summary.value){
var i=p,n=new f({title:i.summary});t.appendChild(n.domNode)}},setSummary:function(t,e,i){
if(i.summary&&i.summary.value&&null!==i.summary.value){var n=document.createElement("span"),s=new l({
refreshOnShow:!0,executeScripts:!1},n);s.attr("content",i.summary.value),t.appendChild(s.domNode),
this.setFieldValidity("summary",!0)}},setContentHeader:function(t,e){if(e.content&&e.content.value&&null!==e.content.value){
var i=p,n=new f({title:i.content});t.appendChild(n.domNode)}},setContent:function(t,e,i){
if(i.content&&i.content.value&&null!==i.content.value){var n=document.createElement("span"),s=new l({
refreshOnShow:!0,executeScripts:!1},n);s.attr("content",i.content.value),t.appendChild(s.domNode),
this.setFieldValidity("content",!0)}},_displaySections:function(){o.set(this.entryTitleRow,"display","none"),
o.set(this.entryAuthorRow,"display","none"),o.set(this.entryContributorRow,"display","none"),
o.set(this.entrySummaryRow,"display","none"),o.set(this.entryContentRow,"display","none"),
o.set(this.entryIdRow,"display","none"),o.set(this.entryUpdatedRow,"display","none");
for(var t in this._displayEntrySections){var e=this._displayEntrySections[t].toLowerCase();
"title"===e&&this.isFieldValid("title")&&o.set(this.entryTitleRow,"display",""),"authors"===e&&this.isFieldValid("authors")&&o.set(this.entryAuthorRow,"display",""),
"contributors"===e&&this.isFieldValid("contributors")&&o.set(this.entryContributorRow,"display",""),
"summary"===e&&this.isFieldValid("summary")&&o.set(this.entrySummaryRow,"display",""),
"content"===e&&this.isFieldValid("content")&&o.set(this.entryContentRow,"display",""),
"id"===e&&this.isFieldValid("id")&&o.set(this.entryIdRow,"display",""),"updated"===e&&this.isFieldValid("updated")&&o.set(this.entryUpdatedRow,"display","");
}},setDisplaySections:function(t){null!==t?(this._displayEntrySections=t,this._displaySections()):this._displayEntrySections=["title","authors","contributors","summary","content","id","updated"];
},_setDisplaySectionsCheckboxes:function(){var t=["title","authors","contributors","summary","content","id","updated"];
for(var e in t)-1==s.indexOf(this._displayEntrySections,t[e])?o.set(this["feedEntryCell"+t[e]],"display","none"):this["feedEntryCheckBox"+t[e].substring(0,1).toUpperCase()+t[e].substring(1)].checked=!0;
},_readDisplaySections:function(){var t=[];this.feedEntryCheckBoxTitle.checked&&t.push("title"),
this.feedEntryCheckBoxAuthors.checked&&t.push("authors"),this.feedEntryCheckBoxContributors.checked&&t.push("contributors"),
this.feedEntryCheckBoxSummary.checked&&t.push("summary"),this.feedEntryCheckBoxContent.checked&&t.push("content"),
this.feedEntryCheckBoxId.checked&&t.push("id"),this.feedEntryCheckBoxUpdated.checked&&t.push("updated"),
this._displayEntrySections=t},_toggleCheckbox:function(t){t.checked?t.checked=!1:t.checked=!0,
this._readDisplaySections(),this._displaySections()},_toggleOptions:function(t){if(this.enableMenu){
var i,s;this._optionButtonDisplayed?(this.enableMenuFade?(i=n.fadeOut({node:this.entryCheckBoxDisplayOptions,
duration:250}),e.connect(i,"onEnd",this,function(){o.set(this.entryCheckBoxDisplayOptions,"display","none"),
o.set(this.entryCheckBoxRow,"display",""),o.set(this.entryCheckBoxRow2,"display",""),
n.fadeIn({node:this.entryCheckBoxRow,duration:250}).play(),n.fadeIn({node:this.entryCheckBoxRow2,
duration:250}).play()}),i.play()):(o.set(this.entryCheckBoxDisplayOptions,"display","none"),
o.set(this.entryCheckBoxRow,"display",""),o.set(this.entryCheckBoxRow2,"display","")),
this._optionButtonDisplayed=!1):(this.enableMenuFade?(i=n.fadeOut({node:this.entryCheckBoxRow,
duration:250}),s=n.fadeOut({node:this.entryCheckBoxRow2,duration:250}),e.connect(i,"onEnd",this,function(){
o.set(this.entryCheckBoxRow,"display","none"),o.set(this.entryCheckBoxRow2,"display","none"),
o.set(this.entryCheckBoxDisplayOptions,"display",""),n.fadeIn({node:this.entryCheckBoxDisplayOptions,
duration:250}).play()}),i.play(),s.play()):(o.set(this.entryCheckBoxRow,"display","none"),
o.set(this.entryCheckBoxRow2,"display","none"),o.set(this.entryCheckBoxDisplayOptions,"display","")),
this._optionButtonDisplayed=!0)}},_handleEvent:function(t){t.source!=this&&("set"==t.action&&t.entry?this.setEntry(t.entry,t.feed):"delete"==t.action&&t.entry&&t.entry==this._entry&&this.clear());
},setFieldValidity:function(t,e){if(t){t.toLowerCase();this._validEntryFields[t]=e;
}},isFieldValid:function(t){return this._validEntryFields[t.toLowerCase()]},getEntry:function(){
return this._entry},getFeed:function(){return this._feed},destroy:function(){this.clear(),
s.forEach(this._subscriptions,t.unsubscribe)}}),f=m.EntryHeader=i("dojox.atom.widget.EntryHeader",[d,a,h],{
title:"",templateString:c,postCreate:function(){this.setListHeader()},setListHeader:function(t){
this.clear(),t&&(this.title=t);var e=document.createTextNode(this.title);this.entryHeaderNode.appendChild(e);
},clear:function(){if(this.destroyDescendants(),this.entryHeaderNode)for(var t=0;t<this.entryHeaderNode.childNodes.length;t++)this.entryHeaderNode.removeChild(this.entryHeaderNode.childNodes[t]);
},destroy:function(){this.clear()}});return m});