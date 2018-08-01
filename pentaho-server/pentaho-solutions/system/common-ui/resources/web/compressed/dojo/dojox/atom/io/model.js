define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/date/stamp","dojox/xml/parser"],function(t,i,e,s,n){
var r={};return t.setObject("dojox.atom.io.model",r),r._Constants={ATOM_URI:"http://www.w3.org/2005/Atom",
ATOM_NS:"http://www.w3.org/2005/Atom",PURL_NS:"http://purl.org/atom/app#",APP_NS:"http://www.w3.org/2007/app"
},r._actions={link:function(t,i){null===t.links&&(t.links=[]);var e=new r.Link;e.buildFromDom(i),
t.links.push(e)},author:function(t,i){null===t.authors&&(t.authors=[]);var e=new r.Person("author");
e.buildFromDom(i),t.authors.push(e)},contributor:function(t,i){null===t.contributors&&(t.contributors=[]);
var e=new r.Person("contributor");e.buildFromDom(i),t.contributors.push(e)},category:function(t,i){
null===t.categories&&(t.categories=[]);var e=new r.Category;e.buildFromDom(i),t.categories.push(e);
},icon:function(t,i){t.icon=n.textContent(i)},id:function(t,i){t.id=n.textContent(i);
},rights:function(t,i){t.rights=n.textContent(i)},subtitle:function(t,i){var e=new r.Content("subtitle");
e.buildFromDom(i),t.subtitle=e},title:function(t,i){var e=new r.Content("title");e.buildFromDom(i),
t.title=e},updated:function(t,i){t.updated=r.util.createDate(i)},issued:function(t,i){
t.issued=r.util.createDate(i)},modified:function(t,i){t.modified=r.util.createDate(i);
},published:function(t,i){t.published=r.util.createDate(i)},entry:function(t,i){null===t.entries&&(t.entries=[]);
var e=t.createEntry?t.createEntry():new r.Entry;e.buildFromDom(i),t.entries.push(e);
},content:function(t,i){var e=new r.Content("content");e.buildFromDom(i),t.content=e;
},summary:function(t,i){var e=new r.Content("summary");e.buildFromDom(i),t.summary=e;
},name:function(t,i){t.name=n.textContent(i)},email:function(t,i){t.email=n.textContent(i);
},uri:function(t,i){t.uri=n.textContent(i)},generator:function(t,i){t.generator=new r.Generator,
t.generator.buildFromDom(i)}},r.util={createDate:function(t){var i=n.textContent(t);
return i?s.fromISOString(e.trim(i)):null},escapeHtml:function(t){return t.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;");
},unEscapeHtml:function(t){return t.replace(/&lt;/gm,"<").replace(/&gt;/gm,">").replace(/&quot;/gm,'"').replace(/&#39;/gm,"'").replace(/&amp;/gm,"&");
},getNodename:function(t){var i=null;if(null!==t&&(i=t.localName?t.localName:t.nodeName,
null!==i)){var e=i.indexOf(":");-1!==e&&(i=i.substring(e+1,i.length))}return i}},
r.Node=i(null,{constructor:function(t,i,e,s,n){this.name_space=t,this.name=i,this.attributes=[],
e&&(this.attributes=e),this.content=[],this.rawNodes=[],this.textContent=null,s&&this.content.push(s),
this.shortNs=n,this._objName="Node",this.nodeType="Node"},buildFromDom:function(t){
this._saveAttributes(t),this.name_space=t.namespaceURI,this.shortNs=t.prefix,this.name=r.util.getNodename(t);
for(var i=0;i<t.childNodes.length;i++){var e=t.childNodes[i];if("#text"!=r.util.getNodename(e)){
this.rawNodes.push(e);var s=new r.Node;s.buildFromDom(e,!0),this.content.push(s)}else this.content.push(e.nodeValue);
}this.textContent=n.textContent(t)},_saveAttributes:function(t){this.attributes||(this.attributes=[]);
var i=function(t){var i=t.attributes;return null===i?!1:0!==i.length};if(i(t)&&this._getAttributeNames){
var e=this._getAttributeNames(t);if(e&&e.length>0)for(var s in e){var n=t.getAttribute(e[s]);
n&&(this.attributes[e[s]]=n)}}},addAttribute:function(t,i){this.attributes[t]=i},
getAttribute:function(t){return this.attributes[t]},_getAttributeNames:function(t){
for(var i=[],e=0;e<t.attributes.length;e++)i.push(t.attributes[e].nodeName);return i;
},toString:function(){var t,i=[],e=(this.shortNs?this.shortNs+":":"")+this.name,s="#cdata-section"==this.name;
if(s)i.push("<![CDATA["),i.push(this.textContent),i.push("]]>");else{if(i.push("<"),
i.push(e),this.name_space&&i.push(" xmlns='"+this.name_space+"'"),this.attributes)for(t in this.attributes)i.push(" "+t+"='"+this.attributes[t]+"'");
if(this.content){i.push(">");for(t in this.content)i.push(this.content[t]);i.push("</"+e+">\n");
}else i.push("/>\n")}return i.join("")},addContent:function(t){this.content.push(t);
}}),r.AtomItem=i(r.Node,{constructor:function(t){this.ATOM_URI=r._Constants.ATOM_URI,
this.links=null,this.authors=null,this.categories=null,this.contributors=null,this.icon=this.id=this.logo=this.xmlBase=this.rights=null,
this.subtitle=this.title=null,this.updated=this.published=null,this.issued=this.modified=null,
this.content=null,this.extensions=null,this.entries=null,this.name_spaces={},this._objName="AtomItem",
this.nodeType="AtomItem"},_getAttributeNames:function(){return null},_accepts:{},
accept:function(t){return Boolean(this._accepts[t])},_postBuild:function(){},buildFromDom:function(t){
var i,e,s;for(i=0;i<t.attributes.length;i++)e=t.attributes.item(i),s=r.util.getNodename(e),
"xmlns"==e.prefix&&e.prefix!=s&&this.addNamespace(e.nodeValue,s);for(e=t.childNodes,
i=0;i<e.length;i++)if(1==e[i].nodeType){var n=r.util.getNodename(e[i]);if(!n)continue;
if(e[i].namespaceURI!=r._Constants.ATOM_NS&&"#text"!=n){this.extensions||(this.extensions=[]);
var h=new r.Node;h.buildFromDom(e[i]),this.extensions.push(h)}if(!this.accept(n.toLowerCase()))continue;
var o=r._actions[n];o&&o(this,e[i])}this._saveAttributes(t),this._postBuild&&this._postBuild();
},addNamespace:function(t,i){t&&i&&(this.name_spaces[i]=t)},addAuthor:function(t,i,e){
this.authors||(this.authors=[]),this.authors.push(new r.Person("author",t,i,e))},
addContributor:function(t,i,e){this.contributors||(this.contributors=[]),this.contributors.push(new r.Person("contributor",t,i,e));
},addLink:function(t,i,e,s,n){this.links||(this.links=[]),this.links.push(new r.Link(t,i,e,s,n));
},removeLink:function(t,i){if(this.links&&e.isArray(this.links)){for(var s=0,n=0;n<this.links.length;n++)t&&this.links[n].href!==t||i&&this.links[n].rel!==i||(this.links.splice(n,1),
s++);return s}},removeBasicLinks:function(){if(this.links){for(var t=0,i=0;i<this.links.length;i++)this.links[i].rel||(this.links.splice(i,1),
t++,i--);return t}},addCategory:function(t,i,e){this.categories||(this.categories=[]),
this.categories.push(new r.Category(t,i,e))},getCategories:function(t){if(!t)return this.categories;
var i=[];for(var e in this.categories)this.categories[e].scheme===t&&i.push(this.categories[e]);
return i},removeCategories:function(t,i){if(this.categories){for(var e=0,s=0;s<this.categories.length;s++)t&&this.categories[s].scheme!==t||i&&this.categories[s].term!==i||(this.categories.splice(s,1),
e++,s--);return e}},setTitle:function(t,i){t&&(this.title=new r.Content("title"),
this.title.value=t,i&&(this.title.type=i))},addExtension:function(t,i,e,s,n){this.extensions||(this.extensions=[]),
this.extensions.push(new r.Node(t,i,e,s,n||"ns"+this.extensions.length))},getExtensions:function(t,i){
var e=[];if(!this.extensions)return e;for(var s in this.extensions)this.extensions[s].name_space!==t&&this.extensions[s].shortNs!==t||i&&this.extensions[s].name!==i||e.push(this.extensions[s]);
return e},removeExtensions:function(t,i){if(this.extensions)for(var e=0;e<this.extensions.length;e++)this.extensions[e].name_space!=t&&this.extensions[e].shortNs!==t||this.extensions[e].name!==i||(this.extensions.splice(e,1),
e--)},destroy:function(){this.links=null,this.authors=null,this.categories=null,this.contributors=null,
this.icon=this.id=this.logo=this.xmlBase=this.rights=null,this.subtitle=this.title=null,
this.updated=this.published=null,this.issued=this.modified=null,this.content=null,
this.extensions=null,this.entries=null}}),r.Category=i(r.Node,{constructor:function(t,i,e){
this.scheme=t,this.term=i,this.label=e,this._objName="Category",this.nodeType="Category";
},_postBuild:function(){},_getAttributeNames:function(){return["label","scheme","term"];
},toString:function(){var t=[];return t.push("<category "),this.label&&t.push(' label="'+this.label+'" '),
this.scheme&&t.push(' scheme="'+this.scheme+'" '),this.term&&t.push(' term="'+this.term+'" '),
t.push("/>\n"),t.join("")},buildFromDom:function(t){this._saveAttributes(t),this.label=this.attributes.label,
this.scheme=this.attributes.scheme,this.term=this.attributes.term,this._postBuild&&this._postBuild();
}}),r.Content=i(r.Node,{constructor:function(t,i,e,s,n){this.tagName=t,this.value=i,
this.src=e,this.type=s,this.xmlLang=n,this.HTML="html",this.TEXT="text",this.XHTML="xhtml",
this.XML="xml",this._useTextContent="true",this.nodeType="Content"},_getAttributeNames:function(){
return["type","src"]},_postBuild:function(){},buildFromDom:function(t){var i=t.getAttribute("type");
if(i?(i=i.toLowerCase(),i=this.XML):i="text",i===this.XML){if(t.firstChild){var e;
for(this.value="",e=0;e<t.childNodes.length;e++){var s=t.childNodes[e];s&&(this.value+=n.innerXML(s));
}}}else t.innerHTML?this.value=t.innerHTML:this.value=n.textContent(t);this._saveAttributes(t),
this.attributes&&(this.type=this.attributes.type,this.scheme=this.attributes.scheme,
this.term=this.attributes.term),this.type||(this.type="text");var h=this.type.toLowerCase();
("html"===h||"text/html"===h||"xhtml"===h||"text/xhtml"===h)&&(this.value=this.value?r.util.unEscapeHtml(this.value):""),
this._postBuild&&this._postBuild()},toString:function(){var t=[];t.push("<"+this.tagName+" "),
this.type||(this.type="text"),this.type&&t.push(' type="'+this.type+'" '),this.xmlLang&&t.push(' xml:lang="'+this.xmlLang+'" '),
this.xmlBase&&t.push(' xml:base="'+this.xmlBase+'" '),this.type.toLowerCase()==this.HTML?t.push(">"+r.util.escapeHtml(this.value)+"</"+this.tagName+">\n"):t.push(">"+this.value+"</"+this.tagName+">\n");
var i=t.join("");return i}}),r.Link=i(r.Node,{constructor:function(t,i,e,s,n){this.href=t,
this.hrefLang=e,this.rel=i,this.title=s,this.type=n,this.nodeType="Link"},_getAttributeNames:function(){
return["href","jrefLang","rel","title","type"]},_postBuild:function(){},buildFromDom:function(t){
this._saveAttributes(t),this.href=this.attributes.href,this.hrefLang=this.attributes.hreflang,
this.rel=this.attributes.rel,this.title=this.attributes.title,this.type=this.attributes.type,
this._postBuild&&this._postBuild()},toString:function(){var t=[];return t.push("<link "),
this.href&&t.push(' href="'+this.href+'" '),this.hrefLang&&t.push(' hrefLang="'+this.hrefLang+'" '),
this.rel&&t.push(' rel="'+this.rel+'" '),this.title&&t.push(' title="'+this.title+'" '),
this.type&&t.push(' type = "'+this.type+'" '),t.push("/>\n"),t.join("")}}),r.Person=i(r.Node,{
constructor:function(t,i,e,s){this.author="author",this.contributor="contributor",
t||(t=this.author),this.personType=t,this.name=i||"",this.email=e||"",this.uri=s||"",
this._objName="Person",this.nodeType="Person"},_getAttributeNames:function(){return null;
},_postBuild:function(){},accept:function(t){return Boolean(this._accepts[t])},buildFromDom:function(t){
for(var i=t.childNodes,e=0;e<i.length;e++){var s=r.util.getNodename(i[e]);if(s){if(i[e].namespaceURI!=r._Constants.ATOM_NS&&"#text"!=s){
this.extensions||(this.extensions=[]);var n=new r.Node;n.buildFromDom(i[e]),this.extensions.push(n);
}if(this.accept(s.toLowerCase())){var h=r._actions[s];h&&h(this,i[e])}}}this._saveAttributes(t),
this._postBuild&&this._postBuild()},_accepts:{name:!0,uri:!0,email:!0},toString:function(){
var t=[];return t.push("<"+this.personType+">\n"),this.name&&t.push("	<name>"+this.name+"</name>\n"),
this.email&&t.push("	<email>"+this.email+"</email>\n"),this.uri&&t.push("	<uri>"+this.uri+"</uri>\n"),
t.push("</"+this.personType+">\n"),t.join("")}}),r.Generator=i(r.Node,{constructor:function(t,i,e){
this.uri=t,this.version=i,this.value=e},_postBuild:function(){},buildFromDom:function(t){
this.value=n.textContent(t),this._saveAttributes(t),this.uri=this.attributes.uri,
this.version=this.attributes.version,this._postBuild&&this._postBuild()},toString:function(){
var t=[];t.push("<generator "),this.uri&&t.push(' uri="'+this.uri+'" '),this.version&&t.push(' version="'+this.version+'" '),
t.push(">"+this.value+"</generator>\n");var i=t.join("");return i}}),r.Entry=i(r.AtomItem,{
constructor:function(t){this.id=t,this._objName="Entry",this.feedUrl=null},_getAttributeNames:function(){
return null},_accepts:{author:!0,content:!0,category:!0,contributor:!0,created:!0,
id:!0,link:!0,published:!0,rights:!0,summary:!0,title:!0,updated:!0,xmlbase:!0,issued:!0,
modified:!0},toString:function(t){var i,e=[];t?(e.push("<?xml version='1.0' encoding='UTF-8'?>"),
e.push("<entry xmlns='"+r._Constants.ATOM_URI+"'")):e.push("<entry"),this.xmlBase&&e.push(' xml:base="'+this.xmlBase+'" ');
for(i in this.name_spaces)e.push(" xmlns:"+i+'="'+this.name_spaces[i]+'"');e.push(">\n"),
e.push("<id>"+(this.id?this.id:"")+"</id>\n"),this.issued&&!this.published&&(this.published=this.issued),
this.published&&e.push("<published>"+s.toISOString(this.published)+"</published>\n"),
this.created&&e.push("<created>"+s.toISOString(this.created)+"</created>\n"),this.issued&&e.push("<issued>"+s.toISOString(this.issued)+"</issued>\n"),
this.modified&&e.push("<modified>"+s.toISOString(this.modified)+"</modified>\n"),
this.modified&&!this.updated&&(this.updated=this.modified),this.updated&&e.push("<updated>"+s.toISOString(this.updated)+"</updated>\n"),
this.rights&&e.push("<rights>"+this.rights+"</rights>\n"),this.title&&e.push(this.title.toString()),
this.summary&&e.push(this.summary.toString());var n=[this.authors,this.categories,this.links,this.contributors,this.extensions];
for(var h in n)if(n[h])for(var o in n[h])e.push(n[h][o]);return this.content&&e.push(this.content.toString()),
e.push("</entry>\n"),e.join("")},getEditHref:function(){if(null===this.links||0===this.links.length)return null;
for(var t in this.links)if(this.links[t].rel&&"edit"==this.links[t].rel)return this.links[t].href;
return null},setEditHref:function(t){null===this.links&&(this.links=[]);for(var i in this.links)if(this.links[i].rel&&"edit"==this.links[i].rel)return void(this.links[i].href=t);
this.addLink(t,"edit")}}),r.Feed=i(r.AtomItem,{_accepts:{author:!0,content:!0,category:!0,
contributor:!0,created:!0,id:!0,link:!0,published:!0,rights:!0,summary:!0,title:!0,
updated:!0,xmlbase:!0,entry:!0,logo:!0,issued:!0,modified:!0,icon:!0,subtitle:!0},
addEntry:function(t){if(!t.id)throw new Error("The entry object must be assigned an ID attribute.");
this.entries||(this.entries=[]),t.feedUrl=this.getSelfHref(),this.entries.push(t);
},getFirstEntry:function(){return this.entries&&0!==this.entries.length?this.entries[0]:null;
},getEntry:function(t){if(!this.entries)return null;for(var i in this.entries)if(this.entries[i].id==t)return this.entries[i];
return null},removeEntry:function(t){if(this.entries){for(var i=0,e=0;e<this.entries.length;e++)this.entries[e]===t&&(this.entries.splice(e,1),
i++);return i}},setEntries:function(t){for(var i in t)this.addEntry(t[i])},toString:function(){
var t,i=[];i.push('<?xml version="1.0" encoding="utf-8"?>\n'),i.push('<feed xmlns="'+r._Constants.ATOM_URI+'"'),
this.xmlBase&&i.push(' xml:base="'+this.xmlBase+'"');for(t in this.name_spaces)i.push(" xmlns:"+t+'="'+this.name_spaces[t]+'"');
i.push(">\n"),i.push("<id>"+(this.id?this.id:"")+"</id>\n"),this.title&&i.push(this.title),
this.copyright&&!this.rights&&(this.rights=this.copyright),this.rights&&i.push("<rights>"+this.rights+"</rights>\n"),
this.issued&&i.push("<issued>"+s.toISOString(this.issued)+"</issued>\n"),this.modified&&i.push("<modified>"+s.toISOString(this.modified)+"</modified>\n"),
this.modified&&!this.updated&&(this.updated=this.modified),this.updated&&i.push("<updated>"+s.toISOString(this.updated)+"</updated>\n"),
this.published&&i.push("<published>"+s.toISOString(this.published)+"</published>\n"),
this.icon&&i.push("<icon>"+this.icon+"</icon>\n"),this.language&&i.push("<language>"+this.language+"</language>\n"),
this.logo&&i.push("<logo>"+this.logo+"</logo>\n"),this.subtitle&&i.push(this.subtitle.toString()),
this.tagline&&i.push(this.tagline.toString());var e=[this.alternateLinks,this.authors,this.categories,this.contributors,this.otherLinks,this.extensions,this.entries];
for(t in e)if(e[t])for(var n in e[t])i.push(e[t][n]);return i.push("</feed>"),i.join("");
},createEntry:function(){var t=new r.Entry;return t.feedUrl=this.getSelfHref(),t},
getSelfHref:function(){if(null===this.links||0===this.links.length)return null;for(var t in this.links)if(this.links[t].rel&&"self"==this.links[t].rel)return this.links[t].href;
return null}}),r.Service=i(r.AtomItem,{constructor:function(t){this.href=t},buildFromDom:function(t){
var i;if(this.workspaces=[],"service"==t.tagName&&(t.namespaceURI==r._Constants.PURL_NS||t.namespaceURI==r._Constants.APP_NS)){
var e=t.namespaceURI;this.name_space=t.namespaceURI;var s;if("undefined"!=typeof t.getElementsByTagNameNS)s=t.getElementsByTagNameNS(e,"workspace");else{
s=[];var n=t.getElementsByTagName("workspace");for(i=0;i<n.length;i++)n[i].namespaceURI==e&&s.push(n[i]);
}if(s&&s.length>0){var h,o=0;for(i=0;i<s.length;i++){h="undefined"==typeof s.item?s[i]:s.item(i);
var u=new r.Workspace;u.buildFromDom(h),this.workspaces[o++]=u}}}},getCollection:function(t){
for(var i=0;i<this.workspaces.length;i++)for(var e=this.workspaces[i].collections,s=0;s<e.length;s++)if(e[s].href==t)return e;
return null}}),r.Workspace=i(r.AtomItem,{constructor:function(t){this.title=t,this.collections=[];
},buildFromDom:function(t){var i=r.util.getNodename(t);if("workspace"==i)for(var e=t.childNodes,s=0,h=0;h<e.length;h++){
var o=e[h];if(1===o.nodeType)if(i=r.util.getNodename(o),o.namespaceURI==r._Constants.PURL_NS||o.namespaceURI==r._Constants.APP_NS){
if("collection"===i){var u=new r.Collection;u.buildFromDom(o),this.collections[s++]=u;
}}else o.namespaceURI===r._Constants.ATOM_NS&&"title"===i&&(this.title=n.textContent(o));
}}}),r.Collection=i(r.AtomItem,{constructor:function(t,i){this.href=t,this.title=i,
this.attributes=[],this.features=[],this.children=[],this.memberType=null,this.id=null;
},buildFromDom:function(t){this.href=t.getAttribute("href");for(var i=t.childNodes,e=0;e<i.length;e++){
var s=i[e];if(1===s.nodeType){var h=r.util.getNodename(s);if(s.namespaceURI==r._Constants.PURL_NS||s.namespaceURI==r._Constants.APP_NS)if("member-type"===h)this.memberType=n.textContent(s);else if("feature"==h)s.getAttribute("id")&&this.features.push(s.getAttribute("id"));else{
var o=new r.Node;o.buildFromDom(s),this.children.push(o)}else s.namespaceURI===r._Constants.ATOM_NS&&("id"===h?this.id=n.textContent(s):"title"===h&&(this.title=n.textContent(s)));
}}}}),r});