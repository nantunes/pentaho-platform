var RelatedContentComponent=BaseComponent.extend({update:function(){if("undefined"!=typeof this.relatedContent){
var e=$("#"+this.htmlObject);e.empty();var t='<div id="relatedContentMainDiv"><p>Related content</p><ul>';
for(key in this.relatedContent)this.relatedContent.hasOwnProperty(key)&&null!=key&&void 0!=key&&(t=t+"<li><a href='"+this.relatedContent[key][1]+"'\">"+this.relatedContent[key][0]+"</a></li>");
t+="</ul></div>",e.append(t)}}});