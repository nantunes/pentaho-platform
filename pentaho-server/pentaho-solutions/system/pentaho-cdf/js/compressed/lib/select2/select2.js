!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery);
}(function(e){var t=function(){if(e&&e.fn&&e.fn.select2&&e.fn.select2.amd)var t=e.fn.select2.amd;
var t;return function(){if(!t||!t.requirejs){t?n=t:t={};var e,n,r;!function(t){function i(e,t){
return $.call(e,t)}function o(e,t){var n,r,i,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};
if(e&&"."===e.charAt(0))if(t){for(e=e.split("/"),s=e.length-1,y.nodeIdCompat&&b.test(e[s])&&(e[s]=e[s].replace(b,"")),
e=h.slice(0,h.length-1).concat(e),u=0;u<e.length;u+=1)if(p=e[u],"."===p)e.splice(u,1),
u-=1;else if(".."===p){if(1===u&&(".."===e[2]||".."===e[0]))break;u>0&&(e.splice(u-1,2),
u-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((h||g)&&f){for(n=e.split("/"),
u=n.length;u>0;u-=1){if(r=n.slice(0,u).join("/"),h)for(d=h.length;d>0;d-=1)if(i=f[h.slice(0,d).join("/")],
i&&(i=i[r])){o=i,a=u;break}if(o)break;!l&&g&&g[r]&&(l=g[r],c=u)}!o&&l&&(o=l,a=c),
o&&(n.splice(0,a,o),e=n.join("/"))}return e}function s(e,n){return function(){var r=w.call(arguments,0);
return"string"!=typeof r[0]&&1===r.length&&r.push(null),h.apply(t,r.concat([e,n]));
}}function a(e){return function(t){return o(t,e)}}function l(e){return function(t){
m[e]=t}}function c(e){if(i(v,e)){var n=v[e];delete v[e],_[e]=!0,p.apply(t,n)}if(!i(m,e)&&!i(_,e))throw new Error("No "+e);
return m[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),
e=e.substring(n+1,e.length)),[t,e]}function d(e){return function(){return y&&y.config&&y.config[e]||{};
}}var p,h,f,g,m={},v={},y={},_={},$=Object.prototype.hasOwnProperty,w=[].slice,b=/\.js$/;
f=function(e,t){var n,r=u(e),i=r[0];return e=r[1],i&&(i=o(i,t),n=c(i)),i?e=n&&n.normalize?n.normalize(e,a(t)):o(e,t):(e=o(e,t),
r=u(e),i=r[0],e=r[1],i&&(n=c(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},g={require:function(e){
return s(e)},exports:function(e){var t=m[e];return"undefined"!=typeof t?t:m[e]={};
},module:function(e){return{id:e,uri:"",exports:m[e],config:d(e)}}},p=function(e,n,r,o){
var a,u,d,p,h,y,$=[],w=typeof r;if(o=o||e,"undefined"===w||"function"===w){for(n=!n.length&&r.length?["require","exports","module"]:n,
h=0;h<n.length;h+=1)if(p=f(n[h],o),u=p.f,"require"===u)$[h]=g.require(e);else if("exports"===u)$[h]=g.exports(e),
y=!0;else if("module"===u)a=$[h]=g.module(e);else if(i(m,u)||i(v,u)||i(_,u))$[h]=c(u);else{
if(!p.p)throw new Error(e+" missing "+u);p.p.load(p.n,s(o,!0),l(u),{}),$[h]=m[u]}
d=r?r.apply(m[e],$):void 0,e&&(a&&a.exports!==t&&a.exports!==m[e]?m[e]=a.exports:d===t&&y||(m[e]=d));
}else e&&(m[e]=r)},e=n=h=function(e,n,r,i,o){if("string"==typeof e)return g[e]?g[e](n):c(f(e,n).f);
if(!e.splice){if(y=e,y.deps&&h(y.deps,y.callback),!n)return;n.splice?(e=n,n=r,r=null):e=t;
}return n=n||function(){},"function"==typeof r&&(r=i,i=o),i?p(t,e,n,r):setTimeout(function(){
p(t,e,n,r)},4),h},h.config=function(e){return h(e)},e._defined=m,r=function(e,t,n){
if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");
t.splice||(n=t,t=[]),i(m,e)||i(v,e)||(v[e]=[e,t,n])},r.amd={jQuery:!0}}(),t.requirejs=e,
t.require=n,t.define=r}}(),t.define("almond",function(){}),t.define("jquery",[],function(){
var t=e||$;return null==t&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
t}),t.define("select2/utils",["jquery"],function(e){function t(e){var t=e.prototype,n=[];
for(var r in t){var i=t[r];"function"==typeof i&&"constructor"!==r&&n.push(r)}return n;
}var n={};n.Extend=function(e,t){function n(){this.constructor=e}var r={}.hasOwnProperty;
for(var i in t)r.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,
e.__super__=t.prototype,e},n.Decorate=function(e,n){function r(){var t=Array.prototype.unshift,r=n.prototype.constructor.length,i=e.prototype.constructor;
r>0&&(t.call(arguments,e.prototype.constructor),i=n.prototype.constructor),i.apply(this,arguments);
}function i(){this.constructor=r}var o=t(n),s=t(e);n.displayName=e.displayName,r.prototype=new i;
for(var a=0;a<s.length;a++){var l=s[a];r.prototype[l]=e.prototype[l]}for(var c=(function(e){
var t=function(){};e in r.prototype&&(t=r.prototype[e]);var i=n.prototype[e];return function(){
var e=Array.prototype.unshift;return e.call(arguments,t),i.apply(this,arguments)};
}),u=0;u<o.length;u++){var d=o[u];r.prototype[d]=c(d)}return r};var r=function(){
this.listeners={}};return r.prototype.on=function(e,t){this.listeners=this.listeners||{},
e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},r.prototype.trigger=function(e){
var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},
null==n&&(n=[]),0===n.length&&n.push({}),n[0]._type=e,e in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),
"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},r.prototype.invoke=function(e,t){
for(var n=0,r=e.length;r>n;n++)e[n].apply(this,t)},n.Observable=r,n.generateChars=function(e){
for(var t="",n=0;e>n;n++){var r=Math.floor(36*Math.random());t+=r.toString(36)}return t;
},n.bind=function(e,t){return function(){e.apply(t,arguments)}},n._convertData=function(e){
for(var t in e){var n=t.split("-"),r=e;if(1!==n.length){for(var i=0;i<n.length;i++){
var o=n[i];o=o.substring(0,1).toLowerCase()+o.substring(1),o in r||(r[o]={}),i==n.length-1&&(r[o]=e[t]),
r=r[o]}delete e[t]}}return e},n.hasScroll=function(t,n){var r=e(n),i=n.style.overflowX,o=n.style.overflowY;
return i!==o||"hidden"!==o&&"visible"!==o?"scroll"===i||"scroll"===o?!0:r.innerHeight()<n.scrollHeight||r.innerWidth()<n.scrollWidth:!1;
},n.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",
'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){
return t[e]})},n.appendMany=function(t,n){if("1.7"===e.fn.jquery.substr(0,3)){var r=e();
e.map(n,function(e){r=r.add(e)}),n=r}t.append(n)},n}),t.define("select2/results",["jquery","./utils"],function(e,t){
function n(e,t,r){this.$element=e,this.data=r,this.options=t,n.__super__.constructor.call(this);
}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<ul class="select2-results__options" role="tree"></ul>');
return this.options.get("multiple")&&t.attr("aria-multiselectable","true"),this.$results=t,
t},n.prototype.clear=function(){this.$results.empty()},n.prototype.displayMessage=function(t){
var n=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var r=e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),i=this.options.get("translations").get(t.message);
r.append(n(i(t.args))),r[0].className+=" select2-results__message",this.$results.append(r);
},n.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove();
},n.prototype.append=function(e){this.hideLoading();var t=[];if(null==e.results||0===e.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{
message:"noResults"}));e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){
var r=e.results[n],i=this.option(r);t.push(i)}this.$results.append(t)},n.prototype.position=function(e,t){
var n=t.find(".select2-results");n.append(e)},n.prototype.sort=function(e){var t=this.options.get("sorter");
return t(e)},n.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");
t.length>0?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible();
},n.prototype.setClasses=function(){var t=this;this.data.current(function(n){var r=e.map(n,function(e){
return e.id.toString()}),i=t.$results.find(".select2-results__option[aria-selected]");
i.each(function(){var t=e(this),n=e.data(this,"data"),i=""+n.id;null!=n.element&&n.element.selected||null==n.element&&e.inArray(i,r)>-1?t.attr("aria-selected","true"):t.attr("aria-selected","false");
})})},n.prototype.showLoading=function(e){this.hideLoading();var t=this.options.get("translations").get("searching"),n={
disabled:!0,loading:!0,text:t(e)},r=this.option(n);r.className+=" loading-results",
this.$results.prepend(r)},n.prototype.hideLoading=function(){this.$results.find(".loading-results").remove();
},n.prototype.option=function(t){var n=document.createElement("li");n.className="select2-results__option";
var r={role:"treeitem","aria-selected":"false"};t.disabled&&(delete r["aria-selected"],
r["aria-disabled"]="true"),null==t.id&&delete r["aria-selected"],null!=t._resultId&&(n.id=t._resultId),
t.title&&(n.title=t.title),t.children&&(r.role="group",r["aria-label"]=t.text,delete r["aria-selected"]);
for(var i in r){var o=r[i];n.setAttribute(i,o)}if(t.children){var s=e(n),a=document.createElement("strong");
a.className="select2-results__group";e(a);this.template(t,a);for(var l=[],c=0;c<t.children.length;c++){
var u=t.children[c],d=this.option(u);l.push(d)}var p=e("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"
});p.append(l),s.append(a),s.append(p)}else this.template(t,n);return e.data(n,"data",t),
n},n.prototype.bind=function(t,n){var r=this,i=t.id+"-results";this.$results.attr("id",i),
t.on("results:all",function(e){r.clear(),r.append(e.data),t.isOpen()&&(r.setClasses(),
r.highlightFirstItem())}),t.on("results:append",function(e){r.append(e.data),t.isOpen()&&r.setClasses();
}),t.on("query",function(e){r.hideMessages(),r.showLoading(e)}),t.on("select",function(){
t.isOpen()&&(r.setClasses(),r.highlightFirstItem())}),t.on("unselect",function(){
t.isOpen()&&(r.setClasses(),r.highlightFirstItem())}),t.on("open",function(){r.$results.attr("aria-expanded","true"),
r.$results.attr("aria-hidden","false"),r.setClasses(),r.ensureHighlightVisible()}),
t.on("close",function(){r.$results.attr("aria-expanded","false"),r.$results.attr("aria-hidden","true"),
r.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){
var e=r.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){
var e=r.getHighlightedResults();if(0!==e.length){var t=e.data("data");"true"==e.attr("aria-selected")?r.trigger("close",{}):r.trigger("select",{
data:t})}}),t.on("results:previous",function(){var e=r.getHighlightedResults(),t=r.$results.find("[aria-selected]"),n=t.index(e);
if(0!==n){var i=n-1;0===e.length&&(i=0);var o=t.eq(i);o.trigger("mouseenter");var s=r.$results.offset().top,a=o.offset().top,l=r.$results.scrollTop()+(a-s);
0===i?r.$results.scrollTop(0):0>a-s&&r.$results.scrollTop(l)}}),t.on("results:next",function(){
var e=r.getHighlightedResults(),t=r.$results.find("[aria-selected]"),n=t.index(e),i=n+1;
if(!(i>=t.length)){var o=t.eq(i);o.trigger("mouseenter");var s=r.$results.offset().top+r.$results.outerHeight(!1),a=o.offset().top+o.outerHeight(!1),l=r.$results.scrollTop()+a-s;
0===i?r.$results.scrollTop(0):a>s&&r.$results.scrollTop(l)}}),t.on("results:focus",function(e){
e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){
r.displayMessage(e)}),e.fn.mousewheel&&this.$results.on("mousewheel",function(e){
var t=r.$results.scrollTop(),n=r.$results.get(0).scrollHeight-t+e.deltaY,i=e.deltaY>0&&t-e.deltaY<=0,o=e.deltaY<0&&n<=r.$results.height();
i?(r.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):o&&(r.$results.scrollTop(r.$results.get(0).scrollHeight-r.$results.height()),
e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(t){
var n=e(this),i=n.data("data");return"true"===n.attr("aria-selected")?void(r.options.get("multiple")?r.trigger("unselect",{
originalEvent:t,data:i}):r.trigger("close",{})):void r.trigger("select",{originalEvent:t,
data:i})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(t){
var n=e(this).data("data");r.getHighlightedResults().removeClass("select2-results__option--highlighted"),
r.trigger("results:focus",{data:n,element:e(this)})})},n.prototype.getHighlightedResults=function(){
var e=this.$results.find(".select2-results__option--highlighted");return e},n.prototype.destroy=function(){
this.$results.remove()},n.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();
if(0!==e.length){var t=this.$results.find("[aria-selected]"),n=t.index(e),r=this.$results.offset().top,i=e.offset().top,o=this.$results.scrollTop()+(i-r),s=i-r;
o-=2*e.outerHeight(!1),2>=n?this.$results.scrollTop(0):(s>this.$results.outerHeight()||0>s)&&this.$results.scrollTop(o);
}},n.prototype.template=function(t,n){var r=this.options.get("templateResult"),i=this.options.get("escapeMarkup"),o=r(t,n);
null==o?n.style.display="none":"string"==typeof o?n.innerHTML=i(o):e(n).append(o);
},n}),t.define("select2/keys",[],function(){var e={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,
CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,
RIGHT:39,DOWN:40,DELETE:46};return e}),t.define("select2/selection/base",["jquery","../utils","../keys"],function(e,t,n){
function r(e,t){this.$element=e,this.options=t,r.__super__.constructor.call(this);
}return t.Extend(r,t.Observable),r.prototype.render=function(){var t=e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),
t.attr("title",this.$element.attr("title")),t.attr("tabindex",this._tabindex),this.$selection=t,
t},r.prototype.bind=function(e,t){var r=this,i=(e.id+"-container",e.id+"-results");
this.container=e,this.$selection.on("focus",function(e){r.trigger("focus",e)}),this.$selection.on("blur",function(e){
r._handleBlur(e)}),this.$selection.on("keydown",function(e){r.trigger("keypress",e),
e.which===n.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){r.$selection.attr("aria-activedescendant",e.data._resultId);
}),e.on("selection:update",function(e){r.update(e.data)}),e.on("open",function(){
r.$selection.attr("aria-expanded","true"),r.$selection.attr("aria-owns",i),r._attachCloseHandler(e);
}),e.on("close",function(){r.$selection.attr("aria-expanded","false"),r.$selection.removeAttr("aria-activedescendant"),
r.$selection.removeAttr("aria-owns"),r.$selection.focus(),r._detachCloseHandler(e);
}),e.on("enable",function(){r.$selection.attr("tabindex",r._tabindex)}),e.on("disable",function(){
r.$selection.attr("tabindex","-1")})},r.prototype._handleBlur=function(t){var n=this;
window.setTimeout(function(){document.activeElement==n.$selection[0]||e.contains(n.$selection[0],document.activeElement)||n.trigger("blur",t);
},1)},r.prototype._attachCloseHandler=function(t){e(document.body).on("mousedown.select2."+t.id,function(t){
var n=e(t.target),r=n.closest(".select2"),i=e(".select2.select2-container--open");
i.each(function(){var t=e(this);if(this!=r[0]){var n=t.data("element");n.select2("close");
}})})},r.prototype._detachCloseHandler=function(t){e(document.body).off("mousedown.select2."+t.id);
},r.prototype.position=function(e,t){var n=t.find(".selection");n.append(e)},r.prototype.destroy=function(){
this._detachCloseHandler(this.container)},r.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.");
},r}),t.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,r){
function i(){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){
var e=i.__super__.render.call(this);return e.addClass("select2-selection--single"),
e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
e},i.prototype.bind=function(e,t){var n=this;i.__super__.bind.apply(this,arguments);
var r=e.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",r),
this.$selection.attr("aria-labelledby",r),this.$selection.on("mousedown",function(e){
1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),
this.$selection.on("blur",function(e){}),e.on("focus",function(t){e.isOpen()||n.$selection.focus();
}),e.on("selection:update",function(e){n.update(e.data)})},i.prototype.clear=function(){
this.$selection.find(".select2-selection__rendered").empty()},i.prototype.display=function(e,t){
var n=this.options.get("templateSelection"),r=this.options.get("escapeMarkup");return r(n(e,t));
},i.prototype.selectionContainer=function(){return e("<span></span>")},i.prototype.update=function(e){
if(0===e.length)return void this.clear();var t=e[0],n=this.$selection.find(".select2-selection__rendered"),r=this.display(t,n);
n.empty().append(r),n.prop("title",t.title||t.text)},i}),t.define("select2/selection/multiple",["jquery","./base","../utils"],function(e,t,n){
function r(e,t){r.__super__.constructor.apply(this,arguments)}return n.Extend(r,t),
r.prototype.render=function(){var e=r.__super__.render.call(this);return e.addClass("select2-selection--multiple"),
e.html('<ul class="select2-selection__rendered"></ul>'),e},r.prototype.bind=function(t,n){
var i=this;r.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){
i.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(t){
if(!i.options.get("disabled")){var n=e(this),r=n.parent(),o=r.data("data");i.trigger("unselect",{
originalEvent:t,data:o})}})},r.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty();
},r.prototype.display=function(e,t){var n=this.options.get("templateSelection"),r=this.options.get("escapeMarkup");
return r(n(e,t))},r.prototype.selectionContainer=function(){var t=e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
return t},r.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],r=0;r<e.length;r++){
var i=e[r],o=this.selectionContainer(),s=this.display(i,o);o.append(s),o.prop("title",i.title||i.text),
o.data("data",i),t.push(o)}var a=this.$selection.find(".select2-selection__rendered");
n.appendMany(a,t)}},r}),t.define("select2/selection/placeholder",["../utils"],function(e){
function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),
e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={
id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();
return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),
n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id,r=t.length>1;
if(r||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);
this.$selection.find(".select2-selection__rendered").append(i)},t}),t.define("select2/selection/allowClear",["jquery","../keys"],function(e,t){
function n(){}return n.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),
null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
this.$selection.on("mousedown",".select2-selection__clear",function(e){r._handleClear(e);
}),t.on("keypress",function(e){r._handleKeyboardClear(e,t)})},n.prototype._handleClear=function(e,t){
if(!this.options.get("disabled")){var n=this.$selection.find(".select2-selection__clear");
if(0!==n.length){t.stopPropagation();for(var r=n.data("data"),i=0;i<r.length;i++){
var o={data:r[i]};if(this.trigger("unselect",o),o.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),
this.trigger("toggle",{})}}},n.prototype._handleKeyboardClear=function(e,n,r){r.isOpen()||(n.which==t.DELETE||n.which==t.BACKSPACE)&&this._handleClear(n);
},n.prototype.update=function(t,n){if(t.call(this,n),!(this.$selection.find(".select2-selection__placeholder").length>0||0===n.length)){
var r=e('<span class="select2-selection__clear">&times;</span>');r.data("data",n),
this.$selection.find(".select2-selection__rendered").prepend(r)}},n}),t.define("select2/selection/search",["jquery","../utils","../keys"],function(e,t,n){
function r(e,t,n){e.call(this,t,n)}return r.prototype.render=function(t){var n=e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
this.$searchContainer=n,this.$search=n.find("input");var r=t.call(this);return this._transferTabIndex(),
r},r.prototype.bind=function(e,t,r){var i=this;e.call(this,t,r),t.on("open",function(){
i.$search.trigger("focus")}),t.on("close",function(){i.$search.val(""),i.$search.removeAttr("aria-activedescendant"),
i.$search.trigger("focus")}),t.on("enable",function(){i.$search.prop("disabled",!1),
i._transferTabIndex()}),t.on("disable",function(){i.$search.prop("disabled",!0)}),
t.on("focus",function(e){i.$search.trigger("focus")}),t.on("results:focus",function(e){
i.$search.attr("aria-activedescendant",e.id)}),this.$selection.on("focusin",".select2-search--inline",function(e){
i.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){
i._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){
e.stopPropagation(),i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented();
var t=e.which;if(t===n.BACKSPACE&&""===i.$search.val()){var r=i.$searchContainer.prev(".select2-selection__choice");
if(r.length>0){var o=r.data("data");i.searchRemoveChoice(o),e.preventDefault()}}});
var o=document.documentMode,s=o&&11>=o;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){
return s?void i.$selection.off("input.search input.searchcheck"):void i.$selection.off("keyup.search");
}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){
if(s&&"input"===e.type)return void i.$selection.off("input.search input.searchcheck");
var t=e.which;t!=n.SHIFT&&t!=n.CTRL&&t!=n.ALT&&t!=n.TAB&&i.handleSearch(e)})},r.prototype._transferTabIndex=function(e){
this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1");
},r.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text);
},r.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),
e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
this.resizeSearch(),n&&this.$search.focus()},r.prototype.handleSearch=function(){
if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{
term:e})}this._keyUpPrevented=!1},r.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{
data:t}),this.$search.val(t.text),this.handleSearch()},r.prototype.resizeSearch=function(){
this.$search.css("width","25px");var e="";if(""!==this.$search.attr("placeholder"))e=this.$selection.find(".select2-selection__rendered").innerWidth();else{
var t=this.$search.val().length+1;e=.75*t+"em"}this.$search.css("width",e)},r}),t.define("select2/selection/eventRelay",["jquery"],function(e){
function t(){}return t.prototype.bind=function(t,n,r){var i=this,o=["open","opening","close","closing","select","selecting","unselect","unselecting"],s=["opening","closing","selecting","unselecting"];
t.call(this,n,r),n.on("*",function(t,n){if(-1!==e.inArray(t,o)){n=n||{};var r=e.Event("select2:"+t,{
params:n});i.$element.trigger(r),-1!==e.inArray(t,s)&&(n.prevented=r.isDefaultPrevented());
}})},t}),t.define("select2/translation",["jquery","require"],function(e,t){function n(e){
this.dict=e||{}}return n.prototype.all=function(){return this.dict},n.prototype.get=function(e){
return this.dict[e]},n.prototype.extend=function(t){this.dict=e.extend({},t.all(),this.dict);
},n._cache={},n.loadPath=function(e){if(!(e in n._cache)){var r=t(e);n._cache[e]=r;
}return new n(n._cache[e])},n}),t.define("select2/diacritics",[],function(){var e={
"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A",
"Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A",
"Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A",
"Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY",
"Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C",
"Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D",
"Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ",
"Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E",
"Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E",
"Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E",
"Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G",
"Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H",
"Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I",
"Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I",
"Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J",
"Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K",
"Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L",
"Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj",
"Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N",
"Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N",
"Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O",
"Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O",
"Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O",
"Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O",
"Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P",
"Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R",
"Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R",
"Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S",
"Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T",
"Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ",
"Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U",
"Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U",
"Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U",
"Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W",
"Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X",
"Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y",
"Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z",
"Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a",
"ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a",
"ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a",
"ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae",
"ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b",
"ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c",
"ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d",
"ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e",
"è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e",
"ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e",
"ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f",
"ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g",
"ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h",
"ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i",
"í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i",
"ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k",
"ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k",
"ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l",
"ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m",
"ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n",
"ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n",
"ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o",
"õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o",
"ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o",
"ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o",
"ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p",
"ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r",
"ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r",
"ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s",
"ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t",
"ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t",
"ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u",
"ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u",
"ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u",
"ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy",
"ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x",
"ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y",
"ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z",
"ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε",
"Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι",
"ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return e}),t.define("select2/data/base",["../utils"],function(e){
function t(e,n){t.__super__.constructor.call(this)}return e.Extend(t,e.Observable),
t.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.");
},t.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.");
},t.prototype.bind=function(e,t){},t.prototype.destroy=function(){},t.prototype.generateResultId=function(t,n){
var r=t.id+"-result-";return r+=e.generateChars(4),r+=null!=n.id?"-"+n.id.toString():"-"+e.generateChars(4);
},t}),t.define("select2/data/select",["./base","../utils","jquery"],function(e,t,n){
function r(e,t){this.$element=e,this.options=t,r.__super__.constructor.call(this);
}return t.Extend(r,e),r.prototype.current=function(e){var t=[],r=this;this.$element.find(":selected").each(function(){
var e=n(this),i=r.item(e);t.push(i)}),e(t)},r.prototype.select=function(e){var t=this;
if(e.selected=!0,n(e.element).is("option"))return e.element.selected=!0,void this.$element.trigger("change");
if(this.$element.prop("multiple"))this.current(function(r){var i=[];e=[e],e.push.apply(e,r);
for(var o=0;o<e.length;o++){var s=e[o].id;-1===n.inArray(s,i)&&i.push(s)}t.$element.val(i),
t.$element.trigger("change")});else{var r=e.id;this.$element.val(r),this.$element.trigger("change");
}},r.prototype.unselect=function(e){var t=this;if(this.$element.prop("multiple"))return e.selected=!1,
n(e.element).is("option")?(e.element.selected=!1,void this.$element.trigger("change")):void this.current(function(r){
for(var i=[],o=0;o<r.length;o++){var s=r[o].id;s!==e.id&&-1===n.inArray(s,i)&&i.push(s);
}t.$element.val(i),t.$element.trigger("change")})},r.prototype.bind=function(e,t){
var n=this;this.container=e,e.on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){
n.unselect(e.data)})},r.prototype.destroy=function(){this.$element.find("*").each(function(){
n.removeData(this,"data")})},r.prototype.query=function(e,t){var r=[],i=this,o=this.$element.children();
o.each(function(){var t=n(this);if(t.is("option")||t.is("optgroup")){var o=i.item(t),s=i.matches(e,o);
null!==s&&r.push(s)}}),t({results:r})},r.prototype.addOptions=function(e){t.appendMany(this.$element,e);
},r.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup"),
t.label=e.text):(t=document.createElement("option"),void 0!==t.textContent?t.textContent=e.text:t.innerText=e.text),
e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);
var r=n(t),i=this._normalizeItem(e);return i.element=t,n.data(t,"data",i),r},r.prototype.item=function(e){
var t={};if(t=n.data(e[0],"data"),null!=t)return t;if(e.is("option"))t={id:e.val(),
text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")
};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")
};for(var r=e.children("option"),i=[],o=0;o<r.length;o++){var s=n(r[o]),a=this.item(s);
i.push(a)}t.children=i}return t=this._normalizeItem(t),t.element=e[0],n.data(e[0],"data",t),
t},r.prototype._normalizeItem=function(e){n.isPlainObject(e)||(e={id:e,text:e}),e=n.extend({},{
text:""},e);var t={selected:!1,disabled:!1};return null!=e.id&&(e.id=e.id.toString()),
null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),
n.extend({},t,e)},r.prototype.matches=function(e,t){var n=this.options.get("matcher");
return n(e,t)},r}),t.define("select2/data/array",["./select","../utils","jquery"],function(e,t,n){
function r(e,t){var n=t.get("data")||[];r.__super__.constructor.call(this,e,t),this.addOptions(this.convertToOptions(n));
}return t.Extend(r,e),r.prototype.select=function(e){var t=this.$element.find("option").filter(function(t,n){
return n.value==e.id.toString()});0===t.length&&(t=this.option(e),this.addOptions(t)),
r.__super__.select.call(this,e)},r.prototype.convertToOptions=function(e){function r(e){
return function(){return n(this).val()==e.id}}for(var i=this,o=this.$element.find("option"),s=o.map(function(){
return i.item(n(this)).id}).get(),a=[],l=0;l<e.length;l++){var c=this._normalizeItem(e[l]);
if(n.inArray(c.id,s)>=0){var u=o.filter(r(c)),d=this.item(u),p=n.extend(!0,{},c,d),h=this.option(p);
u.replaceWith(h)}else{var f=this.option(c);if(c.children){var g=this.convertToOptions(c.children);
t.appendMany(f,g)}a.push(f)}}return a},r}),t.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,n){
function r(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),
r.__super__.constructor.call(this,e,t)}return t.Extend(r,e),r.prototype._applyDefaults=function(e){
var t={data:function(e){return n.extend({},e,{q:e.term})},transport:function(e,t,r){
var i=n.ajax(e);return i.then(t),i.fail(r),i}};return n.extend({},t,e,!0)},r.prototype.processResults=function(e){
return e},r.prototype.query=function(e,t){function r(){var r=o.transport(o,function(r){
var o=i.processResults(r,e);i.options.get("debug")&&window.console&&console.error&&(o&&o.results&&n.isArray(o.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
t(o)},function(){r.status&&"0"===r.status||i.trigger("results:message",{message:"errorLoading"
})});i._request=r}var i=this;null!=this._request&&(n.isFunction(this._request.abort)&&this._request.abort(),
this._request=null);var o=n.extend({type:"GET"},this.ajaxOptions);"function"==typeof o.url&&(o.url=o.url.call(this.$element,e)),
"function"==typeof o.data&&(o.data=o.data.call(this.$element,e)),this.ajaxOptions.delay&&null!=e.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),
this._queryTimeout=window.setTimeout(r,this.ajaxOptions.delay)):r()},r}),t.define("select2/data/tags",["jquery"],function(e){
function t(t,n,r){var i=r.get("tags"),o=r.get("createTag");void 0!==o&&(this.createTag=o);
var s=r.get("insertTag");if(void 0!==s&&(this.insertTag=s),t.call(this,n,r),e.isArray(i))for(var a=0;a<i.length;a++){
var l=i[a],c=this._normalizeItem(l),u=this.option(c);this.$element.append(u)}}return t.prototype.query=function(e,t,n){
function r(e,o){for(var s=e.results,a=0;a<s.length;a++){var l=s[a],c=null!=l.children&&!r({
results:l.children},!0),u=l.text===t.term;if(u||c)return o?!1:(e.data=s,void n(e));
}if(o)return!0;var d=i.createTag(t);if(null!=d){var p=i.option(d);p.attr("data-select2-tag",!0),
i.addOptions([p]),i.insertTag(s,d)}e.results=s,n(e)}var i=this;return this._removeOldTags(),
null==t.term||null!=t.page?void e.call(this,t,n):void e.call(this,t,r)},t.prototype.createTag=function(t,n){
var r=e.trim(n.term);return""===r?null:{id:r,text:r}},t.prototype.insertTag=function(e,t,n){
t.unshift(n)},t.prototype._removeOldTags=function(t){var n=(this._lastTag,this.$element.find("option[data-select2-tag]"));
n.each(function(){this.selected||e(this).remove()})},t}),t.define("select2/data/tokenizer",["jquery"],function(e){
function t(e,t,n){var r=n.get("tokenizer");void 0!==r&&(this.tokenizer=r),e.call(this,t,n);
}return t.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field");
},t.prototype.query=function(t,n,r){function i(t){var n=s._normalizeItem(t),r=s.$element.find("option").filter(function(){
return e(this).val()===n.id});if(!r.length){var i=s.option(n);i.attr("data-select2-tag",!0),
s._removeOldTags(),s.addOptions([i])}o(n)}function o(e){s.trigger("select",{data:e
})}var s=this;n.term=n.term||"";var a=this.tokenizer(n,this.options,i);a.term!==n.term&&(this.$search.length&&(this.$search.val(a.term),
this.$search.focus()),n.term=a.term),t.call(this,n,r)},t.prototype.tokenizer=function(t,n,r,i){
for(var o=r.get("tokenSeparators")||[],s=n.term,a=0,l=this.createTag||function(e){
return{id:e.term,text:e.term}};a<s.length;){var c=s[a];if(-1!==e.inArray(c,o)){var u=s.substr(0,a),d=e.extend({},n,{
term:u}),p=l(d);null!=p?(i(p),s=s.substr(a+1)||"",a=0):a++}else a++}return{term:s
}},t}),t.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){
this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){
return t.term=t.term||"",t.term.length<this.minimumInputLength?void this.trigger("results:message",{
message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t
}}):void e.call(this,t,n)},e}),t.define("select2/data/maximumInputLength",[],function(){
function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n);
}return e.prototype.query=function(e,t,n){return t.term=t.term||"",this.maximumInputLength>0&&t.term.length>this.maximumInputLength?void this.trigger("results:message",{
message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t
}}):void e.call(this,t,n)},e}),t.define("select2/data/maximumSelectionLength",[],function(){
function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n);
}return e.prototype.query=function(e,t,n){var r=this;this.current(function(i){var o=null!=i?i.length:0;
return r.maximumSelectionLength>0&&o>=r.maximumSelectionLength?void r.trigger("results:message",{
message:"maximumSelected",args:{maximum:r.maximumSelectionLength}}):void e.call(r,t,n);
})},e}),t.define("select2/dropdown",["jquery","./utils"],function(e,t){function n(e,t){
this.$element=e,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),
n.prototype.render=function(){var t=e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
return t.attr("dir",this.options.get("dir")),this.$dropdown=t,t},n.prototype.bind=function(){},
n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove();
},n}),t.define("select2/dropdown/search",["jquery","../utils"],function(e,t){function n(){}
return n.prototype.render=function(t){var n=t.call(this),r=e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
return this.$searchContainer=r,this.$search=r.find("input"),n.prepend(r),n},n.prototype.bind=function(t,n,r){
var i=this;t.call(this,n,r),this.$search.on("keydown",function(e){i.trigger("keypress",e),
i._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(t){e(this).off("keyup");
}),this.$search.on("keyup input",function(e){i.handleSearch(e)}),n.on("open",function(){
i.$search.attr("tabindex",0),i.$search.focus(),window.setTimeout(function(){i.$search.focus();
},0)}),n.on("close",function(){i.$search.attr("tabindex",-1),i.$search.val("")}),
n.on("focus",function(){n.isOpen()&&i.$search.focus()}),n.on("results:all",function(e){
if(null==e.query.term||""===e.query.term){var t=i.showSearch(e);t?i.$searchContainer.removeClass("select2-search--hide"):i.$searchContainer.addClass("select2-search--hide");
}})},n.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();
this.trigger("query",{term:t})}this._keyUpPrevented=!1},n.prototype.showSearch=function(e,t){
return!0},n}),t.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,r){
this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,r);
}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),
e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={
id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),r=t.length-1;r>=0;r--){
var i=t[r];this.placeholder.id===i.id&&n.splice(r,1)}return n},e}),t.define("select2/dropdown/infiniteScroll",["jquery"],function(e){
function t(e,t,n,r){this.lastParams={},e.call(this,t,n,r),this.$loadingMore=this.createLoadingMore(),
this.loading=!1}return t.prototype.append=function(e,t){this.$loadingMore.remove(),
this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&this.$results.append(this.$loadingMore);
},t.prototype.bind=function(t,n,r){var i=this;t.call(this,n,r),n.on("query",function(e){
i.lastParams=e,i.loading=!0}),n.on("query:append",function(e){i.lastParams=e,i.loading=!0;
}),this.$results.on("scroll",function(){var t=e.contains(document.documentElement,i.$loadingMore[0]);
if(!i.loading&&t){var n=i.$results.offset().top+i.$results.outerHeight(!1),r=i.$loadingMore.offset().top+i.$loadingMore.outerHeight(!1);
n+50>=r&&i.loadMore()}})},t.prototype.loadMore=function(){this.loading=!0;var t=e.extend({},{
page:1},this.lastParams);t.page++,this.trigger("query:append",t)},t.prototype.showLoadingMore=function(e,t){
return t.pagination&&t.pagination.more},t.prototype.createLoadingMore=function(){
var t=e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),n=this.options.get("translations").get("loadingMore");
return t.html(n(this.lastParams)),t},t}),t.define("select2/dropdown/attachBody",["jquery","../utils"],function(e,t){
function n(t,n,r){this.$dropdownParent=r.get("dropdownParent")||e(document.body),
t.call(this,n,r)}return n.prototype.bind=function(e,t,n){var r=this,i=!1;e.call(this,t,n),
t.on("open",function(){r._showDropdown(),r._attachPositioningHandler(t),i||(i=!0,
t.on("results:all",function(){r._positionDropdown(),r._resizeDropdown()}),t.on("results:append",function(){
r._positionDropdown(),r._resizeDropdown()}))}),t.on("close",function(){r._hideDropdown(),
r._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){
e.stopPropagation()})},n.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove();
},n.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),
t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n;
},n.prototype.render=function(t){var n=e("<span></span>"),r=t.call(this);return n.append(r),
this.$dropdownContainer=n,n},n.prototype._hideDropdown=function(e){this.$dropdownContainer.detach();
},n.prototype._attachPositioningHandler=function(n,r){var i=this,o="scroll.select2."+r.id,s="resize.select2."+r.id,a="orientationchange.select2."+r.id,l=this.$container.parents().filter(t.hasScroll);
l.each(function(){e(this).data("select2-scroll-position",{x:e(this).scrollLeft(),
y:e(this).scrollTop()})}),l.on(o,function(t){var n=e(this).data("select2-scroll-position");
e(this).scrollTop(n.y)}),e(window).on(o+" "+s+" "+a,function(e){i._positionDropdown(),
i._resizeDropdown()})},n.prototype._detachPositioningHandler=function(n,r){var i="scroll.select2."+r.id,o="resize.select2."+r.id,s="orientationchange.select2."+r.id,a=this.$container.parents().filter(t.hasScroll);
a.off(i),e(window).off(i+" "+o+" "+s)},n.prototype._positionDropdown=function(){var t=e(window),n=this.$dropdown.hasClass("select2-dropdown--above"),r=this.$dropdown.hasClass("select2-dropdown--below"),i=null,o=this.$container.offset();
o.bottom=o.top+this.$container.outerHeight(!1);var s={height:this.$container.outerHeight(!1)
};s.top=o.top,s.bottom=o.top+s.height;var a={height:this.$dropdown.outerHeight(!1)
},l={top:t.scrollTop(),bottom:t.scrollTop()+t.height()},c=l.top<o.top-a.height,u=l.bottom>o.bottom+a.height,d={
left:o.left,top:s.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());
var h=p.offset();d.top-=h.top,d.left-=h.left,n||r||(i="below"),u||!c||n?!c&&u&&n&&(i="below"):i="above",
("above"==i||n&&"below"!==i)&&(d.top=s.top-h.top-a.height),null!=i&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+i),
this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+i)),
this.$dropdownContainer.css(d)},n.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"
};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",
e.width="auto"),this.$dropdown.css(e)},n.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),
this._positionDropdown(),this._resizeDropdown()},n}),t.define("select2/dropdown/minimumResultsForSearch",[],function(){
function e(t){for(var n=0,r=0;r<t.length;r++){var i=t[r];i.children?n+=e(i.children):n++;
}return n}function t(e,t,n,r){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),
this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,r);
}return t.prototype.showSearch=function(t,n){return e(n.data.results)<this.minimumResultsForSearch?!1:t.call(this,n);
},t}),t.define("select2/dropdown/selectOnClose",[],function(){function e(){}return e.prototype.bind=function(e,t,n){
var r=this;e.call(this,t,n),t.on("close",function(e){r._handleSelectOnClose(e)})},
e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){
var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var r=this.getHighlightedResults();
if(!(r.length<1)){var i=r.data("data");null!=i.element&&i.element.selected||null==i.element&&i.selected||this.trigger("select",{
data:i})}},e}),t.define("select2/dropdown/closeOnSelect",[],function(){function e(){}
return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("select",function(e){
r._selectTriggered(e)}),t.on("unselect",function(e){r._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){
var n=t.originalEvent;n&&n.ctrlKey||this.trigger("close",{originalEvent:n,originalSelect2Event:t
})},e}),t.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded.";
},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";
return 1!=t&&(n+="s"),n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Please enter "+t+" or more characters";
return n},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){
var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){
return"No results found"},searching:function(){return"Searching…"}}}),t.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(e,t,n,r,i,o,s,a,l,c,u,d,p,h,f,g,m,v,y,_,$,w,b,A,x,E,C,O,S){
function T(){this.reset()}T.prototype.apply=function(d){if(d=e.extend(!0,{},this.defaults,d),
null==d.dataAdapter){if(null!=d.ajax?d.dataAdapter=f:null!=d.data?d.dataAdapter=h:d.dataAdapter=p,
d.minimumInputLength>0&&(d.dataAdapter=c.Decorate(d.dataAdapter,v)),d.maximumInputLength>0&&(d.dataAdapter=c.Decorate(d.dataAdapter,y)),
d.maximumSelectionLength>0&&(d.dataAdapter=c.Decorate(d.dataAdapter,_)),d.tags&&(d.dataAdapter=c.Decorate(d.dataAdapter,g)),
(null!=d.tokenSeparators||null!=d.tokenizer)&&(d.dataAdapter=c.Decorate(d.dataAdapter,m)),
null!=d.query){var S=t(d.amdBase+"compat/query");d.dataAdapter=c.Decorate(d.dataAdapter,S);
}if(null!=d.initSelection){var T=t(d.amdBase+"compat/initSelection");d.dataAdapter=c.Decorate(d.dataAdapter,T);
}}if(null==d.resultsAdapter&&(d.resultsAdapter=n,null!=d.ajax&&(d.resultsAdapter=c.Decorate(d.resultsAdapter,A)),
null!=d.placeholder&&(d.resultsAdapter=c.Decorate(d.resultsAdapter,b)),d.selectOnClose&&(d.resultsAdapter=c.Decorate(d.resultsAdapter,C))),
null==d.dropdownAdapter){if(d.multiple)d.dropdownAdapter=$;else{var D=c.Decorate($,w);
d.dropdownAdapter=D}if(0!==d.minimumResultsForSearch&&(d.dropdownAdapter=c.Decorate(d.dropdownAdapter,E)),
d.closeOnSelect&&(d.dropdownAdapter=c.Decorate(d.dropdownAdapter,O)),null!=d.dropdownCssClass||null!=d.dropdownCss||null!=d.adaptDropdownCssClass){
var q=t(d.amdBase+"compat/dropdownCss");d.dropdownAdapter=c.Decorate(d.dropdownAdapter,q);
}d.dropdownAdapter=c.Decorate(d.dropdownAdapter,x)}if(null==d.selectionAdapter){if(d.multiple?d.selectionAdapter=i:d.selectionAdapter=r,
null!=d.placeholder&&(d.selectionAdapter=c.Decorate(d.selectionAdapter,o)),d.allowClear&&(d.selectionAdapter=c.Decorate(d.selectionAdapter,s)),
d.multiple&&(d.selectionAdapter=c.Decorate(d.selectionAdapter,a)),null!=d.containerCssClass||null!=d.containerCss||null!=d.adaptContainerCssClass){
var L=t(d.amdBase+"compat/containerCss");d.selectionAdapter=c.Decorate(d.selectionAdapter,L);
}d.selectionAdapter=c.Decorate(d.selectionAdapter,l)}if("string"==typeof d.language)if(d.language.indexOf("-")>0){
var j=d.language.split("-"),P=j[0];d.language=[d.language,P]}else d.language=[d.language];
if(e.isArray(d.language)){var k=new u;d.language.push("en");for(var I=d.language,R=0;R<I.length;R++){
var M=I[R],U={};try{U=u.loadPath(M)}catch(H){try{M=this.defaults.amdLanguageBase+M,
U=u.loadPath(M)}catch(z){d.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');
continue}}k.extend(U)}d.translations=k}else{var N=u.loadPath(this.defaults.amdLanguageBase+"en"),B=new u(d.language);
B.extend(N),d.translations=B}return d},T.prototype.reset=function(){function t(e){
function t(e){return d[e]||e}return e.replace(/[^\u0000-\u007E]/g,t)}function n(r,i){
if(""===e.trim(r.term))return i;if(i.children&&i.children.length>0){for(var o=e.extend(!0,{},i),s=i.children.length-1;s>=0;s--){
var a=i.children[s],l=n(r,a);null==l&&o.children.splice(s,1)}return o.children.length>0?o:n(r,o);
}var c=t(i.text).toUpperCase(),u=t(r.term).toUpperCase();return c.indexOf(u)>-1?i:null;
}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,
dropdownAutoWidth:!1,escapeMarkup:c.escapeMarkup,language:S,matcher:n,minimumInputLength:0,
maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,
sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){
return e.text},theme:"default",width:"resolve"}},T.prototype.set=function(t,n){var r=e.camelCase(t),i={};
i[r]=n;var o=c._convertData(i);e.extend(this.defaults,o)};var D=new T;return D}),
t.define("select2/options",["require","jquery","./defaults","./utils"],function(e,t,n,r){
function i(t,i){if(this.options=t,null!=i&&this.fromElement(i),this.options=n.apply(this.options),
i&&i.is("input")){var o=e(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=r.Decorate(this.options.dataAdapter,o);
}}return i.prototype.fromElement=function(e){var n=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),
null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.language&&(e.prop("lang")?this.options.language=e.prop("lang").toLowerCase():e.closest("[lang]").prop("lang")&&(this.options.language=e.closest("[lang]").prop("lang"))),
null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),
e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),
e.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
e.data("data",e.data("select2Tags")),e.data("tags",!0)),e.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
e.attr("ajax--url",e.data("ajaxUrl")),e.data("ajax--url",e.data("ajaxUrl")));var i={};
i=t.fn.jquery&&"1."==t.fn.jquery.substr(0,2)&&e[0].dataset?t.extend(!0,{},e[0].dataset,e.data()):e.data();
var o=t.extend(!0,{},i);o=r._convertData(o);for(var s in o)t.inArray(s,n)>-1||(t.isPlainObject(this.options[s])?t.extend(this.options[s],o[s]):this.options[s]=o[s]);
return this},i.prototype.get=function(e){return this.options[e]},i.prototype.set=function(e,t){
this.options[e]=t},i}),t.define("select2/core",["jquery","./options","./utils","./keys"],function(e,t,n,r){
var i=function(e,n){null!=e.data("select2")&&e.data("select2").destroy(),this.$element=e,
this.id=this._generateId(e),n=n||{},this.options=new t(n,e),i.__super__.constructor.call(this);
var r=e.attr("tabindex")||0;e.data("old-tabindex",r),e.attr("tabindex","-1");var o=this.options.get("dataAdapter");
this.dataAdapter=new o(e,this.options);var s=this.render();this._placeContainer(s);
var a=this.options.get("selectionAdapter");this.selection=new a(e,this.options),this.$selection=this.selection.render(),
this.selection.position(this.$selection,s);var l=this.options.get("dropdownAdapter");
this.dropdown=new l(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,s);
var c=this.options.get("resultsAdapter");this.results=new c(e,this.options,this.dataAdapter),
this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);
var u=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),
this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),
this._registerEvents(),this.dataAdapter.current(function(e){u.trigger("selection:update",{
data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),
e.data("select2",this)};return n.Extend(i,n.Observable),i.prototype._generateId=function(e){
var t="";return t=null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+n.generateChars(2):n.generateChars(4),
t=t.replace(/(:|\.|\[|\]|,)/g,""),t="select2-"+t},i.prototype._placeContainer=function(e){
e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));
null!=t&&e.css("width",t)},i.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
if("resolve"==t){var r=this._resolveWidth(e,"style");return null!=r?r:this._resolveWidth(e,"element");
}if("element"==t){var i=e.outerWidth(!1);return 0>=i?"auto":i+"px"}if("style"==t){
var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;l>a;a+=1){
var c=s[a].replace(/\s/g,""),u=c.match(n);if(null!==u&&u.length>=1)return u[1]}return null;
}return t},i.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),
this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),
this.results.bind(this,this.$container)},i.prototype._registerDomEvents=function(){
var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){
t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){
t.trigger("focus",e)}),this._syncA=n.bind(this._syncAttributes,this),this._syncS=n.bind(this._syncSubtree,this),
this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);
var r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;
null!=r?(this._observer=new r(function(n){e.each(n,t._syncA),e.each(n,t._syncS)}),
this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),
this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1));
},i.prototype._registerDataEvents=function(){var e=this;this.dataAdapter.on("*",function(t,n){
e.trigger(t,n)})},i.prototype._registerSelectionEvents=function(){var t=this,n=["toggle","focus"];
this.selection.on("toggle",function(){t.toggleDropdown()}),this.selection.on("focus",function(e){
t.focus(e)}),this.selection.on("*",function(r,i){-1===e.inArray(r,n)&&t.trigger(r,i);
})},i.prototype._registerDropdownEvents=function(){var e=this;this.dropdown.on("*",function(t,n){
e.trigger(t,n)})},i.prototype._registerResultsEvents=function(){var e=this;this.results.on("*",function(t,n){
e.trigger(t,n)})},i.prototype._registerEvents=function(){var e=this;this.on("open",function(){
e.$container.addClass("select2-container--open")}),this.on("close",function(){e.$container.removeClass("select2-container--open");
}),this.on("enable",function(){e.$container.removeClass("select2-container--disabled");
}),this.on("disable",function(){e.$container.addClass("select2-container--disabled");
}),this.on("blur",function(){e.$container.removeClass("select2-container--focus");
}),this.on("query",function(t){e.isOpen()||e.trigger("open",{}),this.dataAdapter.query(t,function(n){
e.trigger("results:all",{data:n,query:t})})}),this.on("query:append",function(t){
this.dataAdapter.query(t,function(n){e.trigger("results:append",{data:n,query:t});
})}),this.on("keypress",function(t){var n=t.which;e.isOpen()?n===r.ESC||n===r.TAB||n===r.UP&&t.altKey?(e.close(),
t.preventDefault()):n===r.ENTER?(e.trigger("results:select",{}),t.preventDefault()):n===r.SPACE&&t.ctrlKey?(e.trigger("results:toggle",{}),
t.preventDefault()):n===r.UP?(e.trigger("results:previous",{}),t.preventDefault()):n===r.DOWN&&(e.trigger("results:next",{}),
t.preventDefault()):(n===r.ENTER||n===r.SPACE||n===r.DOWN&&t.altKey)&&(e.open(),t.preventDefault());
})},i.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),
this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{});
},i.prototype._syncSubtree=function(e,t){var n=!1,r=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){
if(t)if(t.addedNodes&&t.addedNodes.length>0)for(var i=0;i<t.addedNodes.length;i++){
var o=t.addedNodes[i];o.selected&&(n=!0)}else t.removedNodes&&t.removedNodes.length>0&&(n=!0);else n=!0;
n&&this.dataAdapter.current(function(e){r.trigger("selection:update",{data:e})})}
},i.prototype.trigger=function(e,t){var n=i.__super__.trigger,r={open:"opening",close:"closing",
select:"selecting",unselect:"unselecting"};if(void 0===t&&(t={}),e in r){var o=r[e],s={
prevented:!1,name:e,args:t};if(n.call(this,o,s),s.prevented)return void(t.prevented=!0);
}n.call(this,e,t)},i.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open());
},i.prototype.open=function(){this.isOpen()||this.trigger("query",{})},i.prototype.close=function(){
this.isOpen()&&this.trigger("close",{})},i.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open");
},i.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus");
},i.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),
this.trigger("focus",{}))},i.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
(null==e||0===e.length)&&(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},i.prototype.data=function(){
this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
var e=[];return this.dataAdapter.current(function(t){e=t}),e},i.prototype.val=function(t){
if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
null==t||0===t.length)return this.$element.val();var n=t[0];e.isArray(n)&&(n=e.map(n,function(e){
return e.toString()})),this.$element.val(n).trigger("change")},i.prototype.destroy=function(){
this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),
null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),
this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),
this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),
this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),
this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),
this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,
this.dropdown=null,this.results=null},i.prototype.render=function(){var t=e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
return t.attr("dir",this.options.get("dir")),this.$container=t,this.$container.addClass("select2-container--"+this.options.get("theme")),
t.data("element",this.$element),t},i}),t.define("jquery-mousewheel",["jquery"],function(e){
return e}),t.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(e,t,n,r){
if(null==e.fn.select2){var i=["open","close","destroy"];e.fn.select2=function(t){
if(t=t||{},"object"==typeof t)return this.each(function(){var r=e.extend(!0,{},t);
new n(e(this),r)}),this;if("string"==typeof t){var r,o=Array.prototype.slice.call(arguments,1);
return this.each(function(){var n=e(this).data("select2");null==n&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),
r=n[t].apply(n,o)}),e.inArray(t,i)>-1?this:r}throw new Error("Invalid arguments for Select2: "+t);
}}return null==e.fn.select2.defaults&&(e.fn.select2.defaults=r),n}),{define:t.define,
require:t.require}}(),n=t.require("jquery.select2");return e.fn.select2.amd=t,n});