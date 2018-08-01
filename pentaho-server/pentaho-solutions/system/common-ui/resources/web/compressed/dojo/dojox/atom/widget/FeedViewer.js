define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/dom-class","dijit/_Widget","dijit/_Templated","dijit/_Container","../io/Connection","dojo/text!./templates/FeedViewer.html","dojo/text!./templates/FeedViewerEntry.html","dojo/text!./templates/FeedViewerGrouping.html","dojo/i18n!./nls/FeedViewerEntry"],function(e,t,i,n,r,l,s,d,o,a,h,c,u,f){
e.experimental("dojox.atom.widget.FeedViewer");var y=r("dojox.atom.widget.FeedViewer",[s,d,o],{
feedViewerTableBody:null,feedViewerTable:null,entrySelectionTopic:"",url:"",xmethod:!1,
localSaveOnly:!1,templateString:h,_feed:null,_currentSelection:null,_includeFilters:null,
alertsEnabled:!1,postCreate:function(){this._includeFilters=[],""!==this.entrySelectionTopic&&(this._subscriptions=[e.subscribe(this.entrySelectionTopic,this,"_handleEvent")]),
this.atomIO=new a,this.childWidgets=[]},startup:function(){this.containerNode=this.feedViewerTableBody;
var e=this.getDescendants();for(var t in e){var i=e[t];i&&i.isFilter&&(this._includeFilters.push(new y.CategoryIncludeFilter(i.scheme,i.term,i.label)),
i.destroy())}""!==this.url&&this.setFeedFromUrl(this.url)},clear:function(){this.destroyDescendants();
},setFeedFromUrl:function(e){if(""!==e){if(this._isRelativeURL(e)){var i="";i="/"!==e.charAt(0)?this._calculateBaseURL(window.location.href,!0):this._calculateBaseURL(window.location.href,!1),
this.url=i+e}this.atomIO.getFeed(e,t.hitch(this,this.setFeed))}},setFeed:function(e){
this._feed=e,this.clear();var i=function(e,t){var i=this._displayDateForEntry(e),n=this._displayDateForEntry(t);
return i>n?-1:n>i?1:0},n=function(e){var t=e.split(",");return t.pop(),t.join(",");
},r=e.entries.sort(t.hitch(this,i));if(e)for(var l=null,s=0;s<r.length;s++){var d=r[s];
if(this._isFilterAccepted(d)){var o=this._displayDateForEntry(d),a="";null!==o&&(a=n(o.toLocaleString()),
""===a&&(a=""+(o.getMonth()+1)+"/"+o.getDate()+"/"+o.getFullYear())),(null===l||l!=a)&&(this.appendGrouping(a),
l=a),this.appendEntry(d)}}},_displayDateForEntry:function(e){return e.updated?e.updated:e.modified?e.modified:e.issued?e.issued:new Date;
},appendGrouping:function(e){var t=new _({});t.setText(e),this.addChild(t),this.childWidgets.push(t);
},appendEntry:function(e){var t=new m({xmethod:this.xmethod});t.setTitle(e.title.value),
t.setTime(this._displayDateForEntry(e).toLocaleTimeString()),t.entrySelectionTopic=this.entrySelectionTopic,
t.feed=this,this.addChild(t),this.childWidgets.push(t),this.connect(t,"onClick","_rowSelected"),
e.domNode=t.entryNode,e._entryWidget=t,t.entry=e},deleteEntry:function(i){this.localSaveOnly?this._removeEntry(i,!0):this.atomIO.deleteEntry(i.entry,t.hitch(this,this._removeEntry,i),null,this.xmethod),
e.publish(this.entrySelectionTopic,[{action:"delete",source:this,entry:i.entry}]);
},_removeEntry:function(e,t){if(t){var n=i.indexOf(this.childWidgets,e),r=this.childWidgets[n-1],l=this.childWidgets[n+1];
r.isInstanceOf(widget.FeedViewerGrouping)&&(void 0===l||l.isInstanceOf(widget.FeedViewerGrouping))&&r.destroy(),
e.destroy()}},_rowSelected:function(t){for(var i=t.target;i&&!l.contains(i,"feedViewerEntry");)i=i.parentNode;
for(var n=0;n<this._feed.entries.length;n++){var r=this._feed.entries[n];if(i===r.domNode&&this._currentSelection!==r){
l.add(r.domNode,"feedViewerEntrySelected"),l.remove(r._entryWidget.timeNode,"feedViewerEntryUpdated"),
l.add(r._entryWidget.timeNode,"feedViewerEntryUpdatedSelected"),this.onEntrySelected(r),
""!==this.entrySelectionTopic&&e.publish(this.entrySelectionTopic,[{action:"set",
source:this,feed:this._feed,entry:r}]),this._isEditable(r)&&r._entryWidget.enableDelete(),
this._deselectCurrentSelection(),this._currentSelection=r;break}if(i===r.domNode&&this._currentSelection===r){
e.publish(this.entrySelectionTopic,[{action:"delete",source:this,entry:r}]),this._deselectCurrentSelection();
break}}},_deselectCurrentSelection:function(){this._currentSelection&&(l.add(this._currentSelection._entryWidget.timeNode,"feedViewerEntryUpdated"),
l.remove(this._currentSelection.domNode,"feedViewerEntrySelected"),l.remove(this._currentSelection._entryWidget.timeNode,"feedViewerEntryUpdatedSelected"),
this._currentSelection._entryWidget.disableDelete(),this._currentSelection=null)},
_isEditable:function(e){var t=!1;if(e&&null!==e&&e.links&&null!==e.links)for(var i in e.links)if(e.links[i].rel&&"edit"==e.links[i].rel){
t=!0;break}return t},onEntrySelected:function(e){},_isRelativeURL:function(e){var t=function(e){
var t=!1;return 0===e.indexOf("file://")&&(t=!0),t},i=function(e){var t=!1;return 0===e.indexOf("http://")&&(t=!0),
t},n=!1;return null!==e&&(t(e)||i(e)||(n=!0)),n},_calculateBaseURL:function(e,t){
var i=null;if(null!==e){var n=e.indexOf("?");if(-1!=n&&(e=e.substring(0,n)),t)n=e.lastIndexOf("/"),
i=n>0&&n<e.length&&n!==e.length-1?e.substring(0,n+1):e;else if(n=e.indexOf("://"),
n>0){n+=3;var r=e.substring(0,n),l=e.substring(n,e.length);n=l.indexOf("/"),i=n<l.length&&n>0?r+l.substring(0,n):r+l;
}}return i},_isFilterAccepted:function(e){var t=!1;if(this._includeFilters&&this._includeFilters.length>0)for(var i=0;i<this._includeFilters.length;i++){
var n=this._includeFilters[i];if(n.match(e)){t=!0;break}}else t=!0;return t},addCategoryIncludeFilter:function(e){
if(e){var t=e.scheme,i=e.term,n=e.label,r=!0;if(t||(t=null),i||(t=null),n||(t=null),
this._includeFilters&&this._includeFilters.length>0)for(var l=0;l<this._includeFilters.length;l++){
var s=this._includeFilters[l];if(s.term===i&&s.scheme===t&&s.label===n){r=!1;break;
}}r&&this._includeFilters.push(widget.FeedViewer.CategoryIncludeFilter(t,i,n))}},
removeCategoryIncludeFilter:function(e){if(e){var t=e.scheme,i=e.term,n=e.label;t||(t=null),
i||(t=null),n||(t=null);var r=[];if(this._includeFilters&&this._includeFilters.length>0){
for(var l=0;l<this._includeFilters.length;l++){var s=this._includeFilters[l];(s.term!==i||s.scheme!==t||s.label!==n)&&r.push(s);
}this._includeFilters=r}}},_handleEvent:function(e){if(e.source!=this)if("update"==e.action&&e.entry){
var i=e;this.localSaveOnly||this.atomIO.updateEntry(i.entry,t.hitch(i.source,i.callback),null,!0),
this._currentSelection._entryWidget.setTime(this._displayDateForEntry(i.entry).toLocaleTimeString()),
this._currentSelection._entryWidget.setTitle(i.entry.title.value)}else"post"==e.action&&e.entry&&(this.localSaveOnly?this._addEntry(e.entry):this.atomIO.addEntry(e.entry,this.url,t.hitch(this,this._addEntry)));
},_addEntry:function(t){this._feed.addEntry(t),this.setFeed(this._feed),e.publish(this.entrySelectionTopic,[{
action:"set",source:this,feed:this._feed,entry:t}])},destroy:function(){this.clear(),
i.forEach(this._subscriptions,e.unsubscribe)}}),m=y.FeedViewerEntry=r("dojox.atom.widget.FeedViewerEntry",[s,d],{
templateString:c,entryNode:null,timeNode:null,deleteButton:null,entry:null,feed:null,
postCreate:function(){var e=f;this.deleteButton.innerHTML=e.deleteButton},setTitle:function(e){
this.titleNode.lastChild&&this.titleNode.removeChild(this.titleNode.lastChild);var t=document.createElement("div");
t.innerHTML=e,this.titleNode.appendChild(t)},setTime:function(e){this.timeNode.lastChild&&this.timeNode.removeChild(this.timeNode.lastChild);
var t=document.createTextNode(e);this.timeNode.appendChild(t)},enableDelete:function(){
null!==this.deleteButton&&(this.deleteButton.style.display="inline")},disableDelete:function(){
null!==this.deleteButton&&(this.deleteButton.style.display="none")},deleteEntry:function(e){
e.preventDefault(),e.stopPropagation(),this.feed.deleteEntry(this)},onClick:function(e){}
}),_=y.FeedViewerGrouping=r("dojox.atom.widget.FeedViewerGrouping",[s,d],{templateString:u,
groupingNode:null,titleNode:null,setText:function(e){this.titleNode.lastChild&&this.titleNode.removeChild(this.titleNode.lastChild);
var t=document.createTextNode(e);this.titleNode.appendChild(t)}});return y.AtomEntryCategoryFilter=r("dojox.atom.widget.AtomEntryCategoryFilter",null,{
scheme:"",term:"",label:"",isFilter:!0}),y.CategoryIncludeFilter=r("dojox.atom.widget.FeedViewer.CategoryIncludeFilter",null,{
constructor:function(e,t,i){this.scheme=e,this.term=t,this.label=i},match:function(e){
var t=!1;if(null!==e){var i=e.categories;if(null!==i)for(var n=0;n<i.length;n++){
var r=i[n];if(""!==this.scheme&&this.scheme!==r.scheme)break;if(""!==this.term&&this.term!==r.term)break;
if(""!==this.label&&this.label!==r.label)break;t=!0}}return t}}),y});