dojo.provide("dojox.widget.FeedPortlet"),dojo.require("dojox.widget.Portlet"),dojo.require("dijit.Tooltip"),
dojo.require("dijit.form.TextBox"),dojo.require("dijit.form.Button"),dojo.require("dojox.data.GoogleFeedStore"),
dojo.declare("dojox.widget.FeedPortlet",dojox.widget.Portlet,{local:!1,maxResults:5,
url:"",openNew:!0,showFeedTitle:!0,postCreate:function(){if(this.inherited(arguments),
this.local&&!dojox.data.AtomReadStore)throw Error(this.declaredClass+": To use local feeds, you must include dojox.data.AtomReadStore on the page.");
},onFeedError:function(){this.containerNode.innerHTML="Error accessing the feed.";
},addChild:function(t){this.inherited(arguments);var e=t.attr("feedPortletUrl");e&&this.set("url",e);
},_getTitle:function(t){var e=this.store.getValue(t,"title");return this.local?e.text:e;
},_getLink:function(t){var e=this.store.getValue(t,"link");return this.local?e.href:e;
},_getContent:function(t){var e=this.store.getValue(t,"summary");return e?(this.local&&(e=e.text),
e=e.split("<script").join("<!--").split("</script>").join("-->"),e=e.split("<iframe").join("<!--").split("</iframe>").join("-->")):null;
},_setUrlAttr:function(t){this.url=t,this._started&&this.load()},startup:function(){
if(!this.started&&!this._started){if(this.inherited(arguments),!this.url||""==this.url)throw new Error(this.id+": A URL must be specified for the feed portlet");
this.url&&""!=this.url&&this.load()}},load:function(){this._resultList&&dojo.destroy(this._resultList);
var t,e;this.local?(t=new dojox.data.AtomReadStore({url:this.url}),e={}):(t=new dojox.data.GoogleFeedStore,
e={url:this.url});var o={query:e,count:this.maxResults,onComplete:dojo.hitch(this,function(e){
if(this.showFeedTitle&&t.getFeedValue){var o=this.store.getFeedValue("title");o&&this.set("title",o.text?o.text:o);
}this.generateResults(e)}),onError:dojo.hitch(this,"onFeedError")};this.store=t,t.fetch(o);
},generateResults:function(t){var e,o=(this.store,this._resultList=dojo.create("ul",{
"class":"dojoxFeedPortletList"},this.containerNode));dojo.forEach(t,dojo.hitch(this,function(t){
var i=dojo.create("li",{innerHTML:'<a href="'+this._getLink(t)+'"'+(this.openNew?' target="_blank"':"")+">"+this._getTitle(t)+"</a>"
},o);dojo.connect(i,"onmouseover",dojo.hitch(this,function(s){e&&clearTimeout(e),
e=setTimeout(dojo.hitch(this,function(){e=null;var r=this._getContent(t);if(r){var d='<div class="dojoxFeedPortletPreview">'+r+"</div>";
dojo.query("li",o).forEach(function(t){t!=s.target&&dijit.hideTooltip(t)}),dijit.showTooltip(d,i.firstChild,!this.isLeftToRight());
}}),500)})),dojo.connect(i,"onmouseout",function(){e&&(clearTimeout(e),e=null),dijit.hideTooltip(i.firstChild);
})})),this.resize()}}),dojo.declare("dojox.widget.ExpandableFeedPortlet",dojox.widget.FeedPortlet,{
onlyOpenOne:!1,generateResults:function(t){var e=(this.store,"dojoxPortletToggleIcon"),o="dojoxPortletItemCollapsed",i="dojoxPortletItemOpen",s=this._resultList=dojo.create("ul",{
"class":"dojoxFeedPortletExpandableList"},this.containerNode);dojo.forEach(t,dojo.hitch(this,dojo.hitch(this,function(t){
var i=dojo.create("li",{"class":o},s),r=dojo.create("div",{style:"width: 100%;"},i);
dojo.create("div",{"class":"dojoxPortletItemSummary",innerHTML:this._getContent(t)
},i);dojo.create("span",{"class":e,innerHTML:"<img src='"+dojo.config.baseUrl+"/resources/blank.gif'>"
},r);var d=dojo.create("a",{href:this._getLink(t),innerHTML:this._getTitle(t)},r);
this.openNew&&dojo.attr(d,"target","_blank")}))),dojo.connect(s,"onclick",dojo.hitch(this,function(t){
if(dojo.hasClass(t.target,e)||dojo.hasClass(t.target.parentNode,e)){dojo.stopEvent(t);
for(var r=t.target.parentNode;"LI"!=r.tagName;)r=r.parentNode;this.onlyOpenOne&&dojo.query("li",s).filter(function(t){
return t!=r}).removeClass(i).addClass(o);var d=dojo.hasClass(r,i);dojo.toggleClass(r,i,!d),
dojo.toggleClass(r,o,d)}}))}}),dojo.declare("dojox.widget.PortletFeedSettings",dojox.widget.PortletSettings,{
"class":"dojoxPortletFeedSettings",urls:null,selectedIndex:0,buildRendering:function(){
var t;if(this.urls&&this.urls.length>0&&(console.log(this.id+" -> creating select with urls ",this.urls),
t=dojo.create("select"),this.srcNodeRef&&(dojo.place(t,this.srcNodeRef,"before"),
dojo.destroy(this.srcNodeRef)),this.srcNodeRef=t,dojo.forEach(this.urls,function(e){
dojo.create("option",{value:e.url||e,innerHTML:e.label||e},t)})),"SELECT"==this.srcNodeRef.tagName){
this.text=this.srcNodeRef;var e=dojo.create("div",{},this.srcNodeRef,"before");e.appendChild(this.text),
this.srcNodeRef=e,dojo.query("option",this.text).filter("return !item.value;").forEach("item.value = item.innerHTML"),
this.text.value||(this.content&&0==this.text.options.length&&this.text.appendChild(this.content),
dojo.attr(t||this.text,"value",this.text.options[this.selectedIndex].value))}this.inherited(arguments);
},_setContentAttr:function(){},postCreate:function(){if(console.log(this.id+" -> postCreate"),
!this.text){var t=this.text=new dijit.form.TextBox({});dojo.create("span",{innerHTML:"Choose Url: "
},this.domNode),this.addChild(t)}this.addChild(new dijit.form.Button({label:"Load",
onClick:dojo.hitch(this,function(){this.portlet.attr("url","SELECT"==this.text.tagName?this.text.value:this.text.attr("value")),
"SELECT"==this.text.tagName&&dojo.some(this.text.options,dojo.hitch(this,function(t,e){
return t.selected?(this.set("selectedIndex",e),!0):!1})),this.toggle()})})),this.addChild(new dijit.form.Button({
label:"Cancel",onClick:dojo.hitch(this,"toggle")})),this.inherited(arguments)},startup:function(){
if(!this._started){if(console.log(this.id+" -> startup"),this.inherited(arguments),
!this.portlet)throw Error(this.declaredClass+": A PortletFeedSettings widget cannot exist without a Portlet.");
"SELECT"==this.text.tagName&&dojo.forEach(this.text.options,dojo.hitch(this,function(t,e){
dojo.attr(t,"selected",e==this.selectedIndex)}));var t=this.portlet.attr("url");t?"SELECT"==this.text.tagName?!this.urls&&dojo.query("option[value='"+t+"']",this.text).length<1&&dojo.place(dojo.create("option",{
value:t,innerHTML:t,selected:"true"}),this.text,"first"):this.text.attr("value",t):this.portlet.attr("url",this.get("feedPortletUrl"));
}},_getFeedPortletUrlAttr:function(){return this.text.value}});