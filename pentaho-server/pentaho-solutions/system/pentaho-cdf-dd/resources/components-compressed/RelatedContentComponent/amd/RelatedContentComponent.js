define("cde/components/RelatedContentComponent/RelatedContentComponent",["cdf/components/BaseComponent","cdf/lib/jquery"],function(e,n){
return e.extend({update:function(){var e=this.relatedContent;if("undefined"!=typeof e){
var t=n("#"+this.htmlObject);t.empty();var o='<div id="relatedContentMainDiv"><p>Related content</p><ul>';
for(var d in e){var a=e[d];e.hasOwnProperty(d)&&null!=d&&void 0!=d&&(o+="<li><a href='"+a[1]+"'\">"+a[0]+"</a></li>");
}o+="</ul></div>",t.append(o)}}})}),define("cde/components/RelatedContentComponent",["cde/components/RelatedContentComponent/RelatedContentComponent"],function(e){
return e});