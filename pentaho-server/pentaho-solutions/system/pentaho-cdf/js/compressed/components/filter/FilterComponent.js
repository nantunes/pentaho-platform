define("cdf/components/filter/models/SelectionTree",["amd!../../../lib/underscore","../../../lib/BaseSelectionTree"],function(e,t){
return t.extend({defaults:{id:void 0,label:"",isSelected:!1,isVisible:!0,isCollapsed:!0,
numberOfSelectedItems:0,numberOfItems:0,page:0},setBusy:function(e){return this.root().set("isBusy",e),
this},isBusy:function(){return this.root().get("isBusy")}},{SelectionStates:t.SelectionStates
})}),define("cdf/components/filter/baseevents/baseeventsView",["../../../lib/jquery","amd!../../../lib/backbone","../../../lib/mustache","../../../lib/BaseEvents"],function(e,t,i,n){
return n.convertClass(t.View,{initialize:function(t){this.setModel(t.model),this.setElement(e(t.target));
},getModel:function(){return this.model},setModel:function(e){this.stopListening(),
this.model=e,this.bindToModel()},bindToModel:function(){this.listenTo(this.getModel(),"change",this.render);
},render:function(){return this.$el.html(i.render(this.template,this.model.toJSON()));
}})}),define("cdf/components/filter/views/scrollbar/AbstractScrollBarHandler",["../../../../lib/Base"],function(e){
return e.extend({scrollToPosition:function(e){}})}),define("cdf/components/filter/views/scrollbar/OptiScrollBarEngine",["./AbstractScrollBarHandler","../../../../lib/jquery"],function(e,t){
return e.extend({scrollbar:null,constructor:function(e){this.scrollbar=e.$(e.config.view.slots.children).addClass("optiscroll-content").parent().addClass("optiscroll").optiscroll().off("scrollreachbottom").on("scrollreachbottom",function(t){
return e.trigger("scroll:reached:bottom",e.model,t)}).off("scrollreachtop").on("scrollreachtop",function(t){
return e.trigger("scroll:reached:top",e.model,t)}).data("optiscroll")},scrollToPosition:function(e){
this.scrollbar.scrollIntoView(e)}})}),define("cdf/components/filter/views/scrollbar/MCustomScrollBarEngine",["./AbstractScrollBarHandler","../../../../lib/jquery","amd!../../../../lib/jquery.mCustomScrollbar"],function(e,t){
return e.extend({scrollbar:null,constructor:function(e){var i=t.extend(!0,{},e.config.view.scrollbar.options,{
callbacks:{onTotalScroll:function(){return e.trigger("scroll:reached:bottom",e.model);
},onTotalScrollBack:function(){return e.trigger("scroll:reached:top",e.model)}}});
this.scrollbar=e.$(e.config.view.slots.children).parent().mCustomScrollbar(i)},scrollToPosition:function(e){
this.scrollbar.mCustomScrollbar("scrollTo",e,{callbacks:!1})}})}),define("cdf/components/filter/views/scrollbar/ScrollBarFactory",["./OptiScrollBarEngine","./MCustomScrollBarEngine"],function(e,t){
return{createScrollBar:function(i,n){switch(i){case"optiscroll":return new e(n);case"mCustomScrollbar":
return new t(n)}}}}),define("cdf/components/filter/HtmlUtils",["cdf/lib/sanitizer"],function(e){
return{sanitizeHtml:function(t){return t=t.replace(/<iframe\b[^>]*>/gi,"<script>").replace(/<\/iframe>/gi,"</script>"),
t=e.sanitize(t)}}}),define("cdf/components/filter/views/Abstract",["amd!../../../lib/underscore","../../../lib/mustache","../baseevents/baseeventsView","../../../Logger","../models/SelectionTree","../../../lib/jquery","./scrollbar/ScrollBarFactory","../HtmlUtils"],function(e,t,i,n,o,l,s,r){
return i.extend(n).extend({initialize:function(e){return this.configuration=e.configuration,
this.loglevel=this.configuration.loglevel,this.config=this.configuration[this.type],
null!=this.config.view.templates&&l.extend(!0,this.template,this.config.view.templates),
this.model&&this.bindToModel(this.model),this.setElement(e.target),this.render(),
this},bindToModel:function(e){return this.onChange(e,"isVisible",this.updateVisibility),
this},onChange:function(t,i,n){var o=i.split(" "),l=e.map(o,function(e){return"change:"+e;
}).join(" ");return this.config.view.throttleTimeMilliseconds>=0?this.listenTo(t,l,e.throttle(n,this.config.view.throttleTime,{
leading:!1})):this.listenTo(t,l,n),this},updateSlot:function(t){return e.bind(function(){
var e=this.getViewModel(),t=this.renderSlot("slot");return t.call(this,e)},this)},
renderSlot:function(i){return e.bind(function(e){if(this.template[i]){var n=t.render(this.template[i],e);
n=r.sanitizeHtml(n),this.$(this.config.view.slots[i]).replaceWith(n)}return this.injectContent(i),
this},this)},getViewModel:function(){var t;return t=e.result(this.config,"options"),
l.extend(!0,this.model.toJSON(),t,{strings:e.result(this.config,"strings"),selectionStrategy:e.omit(this.configuration.selectionStrategy,"strategy"),
isPartiallySelected:this.model.getSelection()===o.SelectionStates.SOME,numberOfChildren:this.model.children()?this.model.children().length:0
})},injectContent:function(t){var i,n,o,l;return o=null!=(i=this.config)&&null!=(n=i.renderers)?n[t]:void 0,
null!=o?(e.isArray(o)||(o=[o]),l=this,e.each(o,function(t){return e.isFunction(t)?t.call(l,l.$el,l.model,l.configuration):void 0;
}),this):void 0},render:function(){var e=this.getViewModel();return this.renderSkeleton(e),
this.renderSelection(e),this.updateVisibility(e),this},renderSkeleton:function(e){
var i=t.render(this.template.skeleton,e);return i=r.sanitizeHtml(i),this.$el.html(i),
this},updateSelection:function(e,t){if(e===this.model){var i=this.getViewModel();this.renderSelection(i);
}return this},renderSelection:function(e){var i=t.render(this.template.selection,e);
return i=r.sanitizeHtml(i),this.$(this.config.view.slots.selection).replaceWith(i),
this.injectContent("selection"),this},updateVisibility:function(){return this.model.getVisibility()?this.$el.show():this.$el.hide();
},getChildrenContainer:function(){return this.$(this.config.view.slots.children)},
createChildNode:function(){var e=l("<div/>").addClass(this.config.view.childConfig.className),t=this.$(this.config.view.slots.children);
return e.appendTo(t),e},appendChildNode:function(e){var t=this.$(this.config.view.slots.children);
return e.appendTo(t),e},updateScrollBar:function(){var t=this.config.options.scrollThreshold,i=e.isFinite(this.configuration.pagination.pageSize)&&this.configuration.pagination.pageSize>0;
return i=i||"Item"!==this.type&&this.model.flatten().size().value()>t,i?(this.debug("There are more than "+t+" items, adding scroll bar"),
this.addScrollBar()):void 0},addScrollBar:function(){if(null!=this._scrollBar)return this;
if(this.debug("Adding a scrollbar to "+this.model.get("label")),this._scrollBar=s.createScrollBar(this.config.view.scrollbar.engine,this),
this.config.options.isResizable){var t=this.$(this.config.view.slots.children).parent();
e.isFunction(t.resizable)&&t.resizable({handles:"s"})}return this},setScrollBarAt:function(e){
return null!=this._scrollBar&&this._scrollBar.scrollToPosition(e),this},onMouseOver:function(e){
var t;return t=this.$(this.config.view.slots.selection),t=this.$("div:eq(0)"),this.trigger("mouseover",this.model),
this},onMouseOut:function(e){var t;return t=this.$(this.config.view.slots.selection),
t=this.$("div:eq(0)"),this.trigger("mouseout",this.model),this},onSelection:function(){
return this.trigger("selected",this.model),this},onApply:function(e){return this.trigger("control:apply",this.model),
this},onCancel:function(e){return this.debug("triggered Cancel"),this.trigger("control:cancel",this.model),
this},onFilterChange:function(e){var t=l(e.target).val();return this.trigger("filter",t,this.model),
this},onFilterClear:function(e){var t="";return this.$(".filter-filter-input:eq(0)").val(t),
this.trigger("filter",t,this.model),this},onToggleCollapse:function(e){return this.debug("triggered collapse"),
this.trigger("toggleCollapse",this.model,e),this},close:function(){return this.remove(),
this.unbind()}})}),define("text!cdf/components/filter/templates/Group-skeleton.html",[],function(){
return'<div class="filter-group-container {{className}}">\n  <div class="filter-group-header"/>\n  <div class="filter-group-body">\n    <div class="filter-group-items-container">\n      <div class="filter-group-items"></div>\n    </div>\n  </div>\n  <div class="filter-group-footer">\n    {{#showPagination}}\n      <button class="filter-btn-more-data">More...</button>\n    {{/showPagination}}\n    {{{footer}}}\n  </div>\n</div>';
}),define("text!cdf/components/filter/templates/Group-template.html",[],function(){
return'<div class="filter-group-header\n            {{#isPartiallySelected}} some-selected{{/isPartiallySelected}}\n            {{^isPartiallySelected}}\n              {{#isSelected}} all-selected{{/isSelected}}\n              {{^isSelected}} none-selected{{/isSelected}}\n            {{/isPartiallySelected}}">\n  {{#showButtonCollapse}}\n    <div class="filter-collapse-icon\n                {{#isCollapsed}} expanded{{/isCollapsed}}\n                {{^isCollapsed}} collapsed{{/isCollapsed}}" />\n  {{/showButtonCollapse}}\n  <div class="filter-group-title">{{{label}}}</div>\n  <div class="filter-controls">\n    {{#showFilter}}\n      <div class="filter-filter">\n        <input type="text" class="filter-filter-input" value="{{searchPattern}}">\n        <div class="filter-filter-icon" />\n        <div class="filter-filter-clear" />\n      </div>\n    {{/showFilter}}\n    {{#showCommitButtons}}\n      <div class="filter-control-buttons clearfix">\n        <div class="filter-control-button">\n          <button class="filter-btn-cancel">{{strings.btnCancel}}</button>\n        </div>\n        <div class="filter-control-button">\n          <button class="filter-btn-apply">{{strings.btnApply}}</button>\n        </div>\n      </div>\n    {{/showCommitButtons}}\n  </div>\n  {{#showGroupSelection}}\n    <div class="filter-group-selection">\n      <div class="filter-group-selection-icon\n                  {{#isPartiallySelected}} some-selected{{/isPartiallySelected}}\n                  {{^isPartiallySelected}}\n                    {{#isSelected}} all-selected{{/isSelected}}\n                    {{^isSelected}} none-selected{{/isSelected}}\n                  {{/isPartiallySelected}}" />\n      <div class="filter-group-label">{{strings.groupSelection}}</div>\n    </div>\n  {{/showGroupSelection}}\n  {{#showValue}}\n  <div class="filter-group-selection-value">{{{value}}}</div>\n  {{/showValue}}\n</div>';
}),define("text!cdf/components/filter/templates/Item-template.html",[],function(){
return'<div class="filter-item-container\n            {{#isPartiallySelected}} some-selected{{/isPartiallySelected}}\n            {{^isPartiallySelected}}\n              {{#isSelected}} all-selected{{/isSelected}}\n              {{^isSelected}} none-selected{{/isSelected}}\n            {{/isPartiallySelected}}">\n  {{#header}}\n    <div class="filter-item-header"> {{{header}}} </div>\n  {{/header}}\n  <div class="filter-item-body">\n    {{{item}}}\n    <div class="filter-item-selection-icon">\n      <div />\n    </div>\n    {{#showButtonOnlyThis}}\n      <span class="filter-item-only-this">{{strings.btnOnlyThis}}</span>\n    {{/showButtonOnlyThis}}\n    <div class="filter-item-label" title="{{{label}}}">{{{label}}}</div>\n    {{#showValue}}\n      <div class="filter-item-value">{{{value}}}</div>\n    {{/showValue}}\n  </div>\n  {{#footer}}\n    <div class="filter-item-footer">{{{footer}}}</div>\n  {{/footer}}\n</div>';
}),define("text!cdf/components/filter/templates/Root-footer.html",[],function(){return'<div class="filter-root-footer">\n  {{#isBusy}}\n    <div class="filter-busy clearfix">\n      <div class="floatingBarsG">\n        <div class="blockG rotateG_01"></div>\n        <div class="blockG rotateG_02"></div>\n        <div class="blockG rotateG_03"></div>\n        <div class="blockG rotateG_04"></div>\n        <div class="blockG rotateG_05"></div>\n        <div class="blockG rotateG_06"></div>\n        <div class="blockG rotateG_07"></div>\n        <div class="blockG rotateG_08"></div>\n      </div>\n      <div class="filter-busy-info">Fetching data...</div>\n    </div>\n  {{/isBusy}}\n  {{#reachedSelectionLimit}}\n    <div class="filter-root-notification">The selection limit (<span class="filter-notification-highlight">{{selectionStrategy.limit}}</span>) for specific items has been reached.</div>\n  {{/reachedSelectionLimit}}\n</div>';
}),define("text!cdf/components/filter/templates/Root-header.html",[],function(){return'<div class="filter-root-header\n            {{#isPartiallySelected}} some-selected{{/isPartiallySelected}}\n            {{^isPartiallySelected}}\n              {{#isSelected}} all-selected{{/isSelected}}\n              {{^isSelected}} none-selected{{/isSelected}}\n            {{/isPartiallySelected}}">\n  <div class="filter-root-header-label"\n       {{#showTooltip}}\n         title="{{#header}}{{{header}}}{{/header}}{{^header}}{{#selectedItems}}{{{.}}}{{/selectedItems}}{{/header}}"\n       {{/showTooltip}}>\n    {{#isDisabled}}\n      {{strings.isDisabled}}\n    {{/isDisabled}}\n    {{^isDisabled}}\n      {{#showSelectedItems}}\n        <span class="filter-root-info-selected-items">\n          {{#allItemsSelected}}\n            <span class="filter-root-info-selected-item">{{strings.allItems}}</span>\n          {{/allItemsSelected}}\n          {{^allItemsSelected}}\n            {{^noItemsSelected}}\n              <span class="filter-root-info-selected-item"\n                  title="{{#selectedItems}}{{{.}}} {{/selectedItems}}">\n                {{#selectedItems}}\n                  {{{.}}}\n                {{/selectedItems}}\n              </span>\n            {{/noItemsSelected}}\n          {{/allItemsSelected}}\n          {{#noItemsSelected}}\n            <span class="filter-root-info-selected-item">{{strings.noItems}}</span>\n          {{/noItemsSelected}}\n        </span>\n      {{/showSelectedItems}}\n      {{#showNumberOfSelectedItems}}\n        {{#allItemsSelected}}\n          <span class="filter-root-info-selected-items">{{strings.allItems}}</span>\n        {{/allItemsSelected}}\n        {{#noItemsSelected}}\n          <span class="filter-root-info-selected-items">{{strings.noItems}}</span>\n        {{/noItemsSelected}}\n        {{^allItemsSelected}}\n          {{^noItemsSelected}}\n            <span class="filter-root-info-selected-items">\n              <span class="filter-root-info-number-selected-items">{{numberOfSelectedItems}}</span>\n              <span class="filter-root-info-number-items">&nbsp;/&nbsp;{{numberOfItems}}</span>\n            </span>\n          {{/noItemsSelected}}\n        {{/allItemsSelected}}\n      {{/showNumberOfSelectedItems}}\n    {{/isDisabled}}\n  </div>\n<div class="filter-collapse-icon\n            {{^isDisabled}}\n            {{^alwaysExpanded}}\n            {{#isCollapsed}} collapsed{{/isCollapsed}}\n            {{^isCollapsed}} expanded {{/isCollapsed}}\n            {{/alwaysExpanded}}\n            {{#alwaysExpanded}} always-expanded{{/alwaysExpanded}}\n            {{/isDisabled}}\n            {{#isDisabled}} disabled{{/isDisabled}}" />\n</div>';
}),define("text!cdf/components/filter/templates/Root-overlay.html",[],function(){
return'{{#useOverlay}}\n  <div class="filter-overlay\n              {{^alwaysExpanded}}\n                {{#isCollapsed}} collapsed{{/isCollapsed}}\n                {{^isCollapsed}} expanded {{/isCollapsed}}\n              {{/alwaysExpanded}}\n              {{#alwaysExpanded}} always-expanded{{/alwaysExpanded}}" />\n{{/useOverlay}}';
}),define("text!cdf/components/filter/templates/Root-skeleton.html",[],function(){
return'<div class="filter-title">{{strings.title}}</div>\n<div class="filter-root-container\n            {{#className}} {{className}}{{/className}}\n            {{#styles}} {{.}} {{/styles}}\n            {{#isDisabled}} disabled{{/isDisabled}}">\n  {{#useOverlay}}\n    <div class="filter-overlay\n                {{^alwaysExpanded}}\n                  {{#isCollapsed}} collapsed{{/isCollapsed}}\n                  {{^isCollapsed}} expanded {{/isCollapsed}}\n                {{/alwaysExpanded}}\n                {{#alwaysExpanded}} always-expanded{{/alwaysExpanded}}" />\n  {{/useOverlay}}\n  <div class="filter-root-header\n              {{#isPartiallySelected}} some-selected{{/isPartiallySelected}}\n              {{^isPartiallySelected}}\n                {{#isSelected}} all-selected{{/isSelected}}\n                {{^isSelected}} none-selected{{/isSelected}}\n              {{/isPartiallySelected}}\n              {{^alwaysExpanded}}\n                {{#isCollapsed}} collapsed{{/isCollapsed}}\n                {{^isCollapsed}} expanded {{/isCollapsed}}\n              {{/alwaysExpanded}}\n              {{#alwaysExpanded}} always-expanded{{/alwaysExpanded}}">\n    <div class="filter-root-header-label">{{{header}}}</div>\n    <div class="filter-root-collapse-icon" />\n  </div>\n  <div class="filter-root-body filter-expand-{{expandMode}}" >\n    <div class="filter-root-control" />\n    <div class="filter-root-items-container">\n      <div class="filter-root-items" />\n    </div>\n    <div class="filter-root-footer">{{{footer}}}</div>\n  </div>\n</div>';
}),define("text!cdf/components/filter/templates/Root-template.html",[],function(){
return'<div class="filter-root-control\n            {{#isPartiallySelected}} some-selected{{/isPartiallySelected}}\n            {{^isPartiallySelected}}\n              {{#isSelected}} all-selected{{/isSelected}}\n              {{^isSelected}} none-selected{{/isSelected}}\n            {{/isPartiallySelected}}\n            {{^alwaysExpanded}}\n              {{#isCollapsed}} collapsed{{/isCollapsed}}\n              {{^isCollapsed}} expanded {{/isCollapsed}}\n            {{/alwaysExpanded}}\n            {{#alwaysExpanded}} always-expanded{{/alwaysExpanded}}">\n  <div class="filter-controls">\n  {{#showCommitButtons}}\n    <div class="filter-control-buttons clearfix">\n      <div class="filter-control-button">\n        <button class="filter-btn-cancel\n                       {{#hasChanged}} dirty{{/hasChanged}}\n                       {{^hasChanged}} pristine{{/hasChanged}}">\n          {{strings.btnCancel}}\n        </button>\n      </div>\n      <div class="filter-control-button">\n        <button class="filter-btn-apply\n                       {{#hasChanged}} dirty{{/hasChanged}}\n                       {{^hasChanged}} pristine{{/hasChanged}}"\n                {{^hasChanged}} disabled="disabled"{{/hasChanged}}>\n        {{strings.btnApply}}\n        </button>\n      </div>\n    </div>\n  {{/showCommitButtons}}\n  {{#showFilter}}\n    <div class="filter-filter">\n      <input type="text" class="filter-filter-input" value="{{searchPattern}}">\n      <div class="filter-filter-icon" />\n      <div class="filter-filter-clear" />\n    </div>\n  {{/showFilter}}\n  </div>\n  <div class="filter-root-selection">\n    {{#showGroupSelection}}\n      <div class="filter-root-selection-icon\n                  {{#isPartiallySelected}} some-selected{{/isPartiallySelected}}\n                  {{^isPartiallySelected}}\n                  {{#isSelected}} all-selected{{/isSelected}}\n                  {{^isSelected}} none-selected{{/isSelected}}\n                  {{/isPartiallySelected}}" />\n      <div class="filter-root-selection-label">{{{label}}}</div>\n      {{#showValue}}\n        <div class="filter-root-selection-value">{{{value}}}</div>\n      {{/showValue}}\n    {{/showGroupSelection}}\n    {{#showSelectedItems0}}\n      <div class="filter-selected-items">\n        {{#selectedItems}}\n          <span class="filter-selected-item">{{.}}</span>\n        {{/selectedItems}}\n      </div>\n    {{/showSelectedItems0}}\n  </div>\n</div>';
}),define("cdf/components/filter/base/templates",["../../../lib/mustache","text!../templates/Group-skeleton.html","text!../templates/Group-template.html","text!../templates/Item-template.html","text!../templates/Root-footer.html","text!../templates/Root-header.html","text!../templates/Root-overlay.html","text!../templates/Root-skeleton.html","text!../templates/Root-template.html"],function(e,t,i,n,o,l,s,r,a){
function d(t,i){c[t]=i,e.parse(c[t])}var c={};return d("Group-skeleton",t),d("Group-template",i),
d("Item-template",n),d("Root-footer",o),d("Root-header",l),d("Root-overlay",s),d("Root-skeleton",r),
d("Root-template",a),d(void 0,"No template"),c}),define("cdf/components/filter/views/Root",["../../../lib/jquery","amd!../../../lib/underscore","../../../lib/mustache","./Abstract","../base/templates"],function(e,t,i,n,o){
return n.extend({type:"Root",ID:"BaseFilter.Views.Root",template:{skeleton:o["Root-skeleton"],
overlay:o["Root-overlay"],header:o["Root-header"],selection:o["Root-template"],footer:o["Root-footer"]
},events:{"click     .filter-root-header:eq(0)":"onToggleCollapse","click     .filter-root-selection:eq(0)":"onSelection",
"click     .filter-btn-apply:eq(0)":"onApply","click     .filter-btn-cancel:eq(0)":"onCancel",
"mouseover .filter-root-header":"onMouseOver","mouseout  .filter-root-header":"onMouseOut",
"keyup   .filter-filter:eq(0)":"onFilterChange","change  .filter-filter:eq(0)":"onFilterChange",
"click  .filter-filter-clear:eq(0)":"onFilterClear","click  .filter-overlay":"onOverlayClick"
},initialize:function(e){return this.renderOverlay=this.renderSlot("overlay"),this.renderHeader=this.renderSlot("header"),
this.renderFooter=this.renderSlot("footer"),this.base(e)},bindToModel:function(e){
return this.base(e),this.onChange(e,"isCollapsed",this.updateCollapse),this.onChange(e,"isSelected numberOfSelectedItems numberOfItems reachedSelectionLimit",this.updateHeader),
this.onChange(e,"isSelected numberOfSelectedItems numberOfItems selectedItems",this.updateSelection),
this.onChange(e,"reachedSelectionLimit isBusy",this.updateFooter),this.onChange(e,"isDisabled",t.bind(this.updateAvailability,this));
},getViewModel:function(){var i=this.base();return e.extend(i,{selectedItems:t.map(this.configuration.selectionStrategy.strategy.getSelectedItems(this.model,"label"),function(e){
return e+" "}),allItemsSelected:this.model.getSelection()===!0,noItemsSelected:this.model.getSelection()===!1,
hasChanged:this.model.hasChanged()}),i},render:function(){var e=this.getViewModel();
return this.renderSkeleton(e),this.renderOverlay(e),this.renderHeader(e),this.renderCollapse(e),
this.renderSelection(e),this.renderFooter(e),this.renderAvailability(e),this},updateHeader:function(){
var e=this.getViewModel();return this.renderHeader(e),this},updateFooter:function(){
var e=this.getViewModel();return this.renderFooter(e),this},updateCollapse:function(){
var e=this.getViewModel();return this.renderHeader(e),this.renderOverlay(e),this.renderCollapse(e),
this},renderCollapse:function(e){if(e.isDisabled===!0){var t=e.alwaysExpanded===!0;
this.$(".filter-root-container").toggleClass("expanded",t).toggleClass("collapsed",!t).toggleClass("always-expanded",t);
}else e.alwaysExpanded===!0?this.$(".filter-root-container").toggleClass("expanded",!1).toggleClass("collapsed",!1).toggleClass("always-expanded",!0):e.isCollapsed===!0?this.$(".filter-root-container").toggleClass("expanded",!1).toggleClass("collapsed",!0).toggleClass("always-expanded",!1):this.$(".filter-root-container").toggleClass("expanded",!0).toggleClass("collapsed",!1).toggleClass("always-expanded",!1);
return this},updateAvailability:function(){var e=this.getViewModel();return this.renderAvailability(e),
this},renderAvailability:function(e){return this.$(".filter-root-container").toggleClass("disabled",e.isDisabled===!0),
this},onOverlayClick:function(i){return this.trigger("click:outside",this.model),
this.config.view.overlaySimulateClick===!0&&(this.$(".filter-overlay").toggleClass("expanded",!1).toggleClass("collapsed",!0),
t.delay(function(){var n=e(document.elementFromPoint(i.clientX,i.clientY)),o=t.chain(n.parents()).filter(function(t){
return e(t).hasClass("filter-root-header")}).first().value();return null!=o?e(o).click():void 0;
},0)),this}})}),define("cdf/components/filter/views/Group",["./Abstract","../base/templates"],function(e,t){
return e.extend({type:"Group",ID:"BaseFilter.Views.Group",template:{skeleton:t["Group-skeleton"],
selection:t["Group-template"]},events:{"change    .filter-filter:eq(0)":"onFilterChange",
"keyup     .filter-filter:eq(0)":"onFilterChange","click     .filter-filter-clear:eq(0)":"onFilterClear",
"click     .filter-group-selection":"onSelection","click     .filter-collapse-icon:eq(0)":"onToggleCollapse",
"mouseover .filter-group-container":"onMouseOver","mouseout  .filter-group-container":"onMouseOut"
},bindToModel:function(e){return this.base(e),this.onChange(e,"isSelected numberOfSelectedItems numberOfItems",this.updateSelection),
this.onChange(e,"isCollapsed",this.updateCollapse)},updateCollapse:function(){var e=this.getViewModel();
return this.renderCollapse(e)},renderCollapse:function(e){this.renderSelection(e);
var t=[".filter-group-body",".filter-group-footer"].join(", ");return e.isCollapsed?this.$(t).show():this.$(t).hide();
}})}),define("cdf/components/filter/views/Item",["./Abstract","../base/templates"],function(e,t){
return e.extend({type:"Item",ID:"BaseFilter.Views.Root",template:{selection:t["Item-template"],
skeleton:t["Item-template"]},events:{"mouseover .filter-item-body":"onMouseOver",
"mouseout  .filter-item-body":"onMouseOut","click     .filter-item-body":"onSelection",
"click     .filter-item-only-this":"onClickOnlyThis"},bindToModel:function(e){return this.base(e),
this.onChange(e,"isSelected",this.updateSelection),this.onChange(e,"isVisible",this.updateVisibility);
},onClickOnlyThis:function(e){return e.stopPropagation(),this.trigger("control:only-this",this.model);
}})}),define("cdf/components/filter/views/Views",["./Root","./Group","./Item"],function(e,t,i){
return{Root:e,Group:t,Item:i}}),define("cdf/components/filter/controllers/RootCtrl",["../../../lib/jquery","amd!../../../lib/underscore","../../../lib/BaseEvents","../../../Logger","../models/SelectionTree"],function(e,t,i,n,o){
return i.extend(n).extend({constructor:function(i){return e.extend(this,t.pick(i,["model","view","configuration"])),
this.view&&this.bindToView(this.view),this.loglevel=this.configuration.loglevel,this;
},bindToView:function(e){var i,n;return i={selected:this.onSelection,toggleCollapse:this.onToggleCollapse,
"control:only-this":this.onOnlyThis,"control:apply":this.onApply,"control:cancel":this.onCancel,
"click:outside":this.onClickOutside},n=this,t.each(i,function(t,i){return n.listenTo(e,i,t);
}),this},onSelection:function(e){return this.configuration.selectionStrategy.strategy.changeSelection(e),
this},onApply:function(e){return this.configuration.selectionStrategy.strategy.applySelection(e),
this},onCancel:function(e){return e.restoreSelectedItems(),e.root().set("isCollapsed",!0),
this},onToggleCollapse:function(e){var i,n;this.debug("Setting isCollapsed"),e.get("isDisabled")===!0?i=!0:(n=e.get("isCollapsed"),
i=!n);var o=!!e.nodes()&&t.some(e.nodes().models,function(e){return e.get("isVisible");
});return!o&&n&&this.view.onFilterClear(),e.set("isCollapsed",i),this},onClickOutside:function(e){
return e.set("isCollapsed",!0),this},onOnlyThis:function(e){return this.debug("Setting Only This"),
this.model.root().setAndUpdateSelection(o.SelectionStates.NONE),this.configuration.selectionStrategy.strategy.setSelection(o.SelectionStates.ALL,e),
this}})}),define("cdf/components/filter/controllers/Manager",["amd!../../../lib/underscore","../../../lib/Tree","../../../Logger","../views/Views","./RootCtrl"],function(e,t,i,n,o){
return t.extend({ID:"BaseFilter.Controllers.Manager",defaults:{model:null,view:null,
controller:null,configuration:null},constructor:function(t){this.base.apply(this,arguments);
var i=this.get("configuration").loglevel;return e.isUndefined(i)||(this.loglevel=i),
this.updateChildren(),this},initialize:function(e){return null==this.get("view")&&this.addViewAndController(this.get("model")),
this.applyBindings(),this},close:function(){return this.empty(),this.get("view").close(),
this.get("controller").stopListening().off(),this.stopListening(),this.off(),this.clear(),
this},empty:function(){this.children()&&(this.children().each(function(e){e.close();
}),this.base())},applyBindings:function(){var t=this,i=function(i){var n=t.get("configuration").pagination.throttleTimeMilliseconds;
return e.throttle(i,n||0,{trailing:!1})},n=function(i){var n=t.get("view").config.view.throttleTimeMilliseconds;
return e.debounce(i,n)},o={model:{add:this.onNewData,"change:selectedItems":this.onApply,
selection:this.sortSiblings},view:{filter:n(this.onFilterChange),"scroll:reached:top":i(this.getPreviousPage),
"scroll:reached:bottom":i(this.getNextPage)}};return e.each(o,function(i,n){return e.each(i,function(i,o){
return t.listenTo(t.attributes[n],o,e.bind(i,t))})}),this.on("post:child:selection request:child:sort",n(this.renderSortedChildren)),
this.on("post:child:add",n(this.onUpdateChildren)),this},addViewAndController:function(e){
var t,i,l,s,r,a,d=!0;if(null!=this.parent()){var c=this.parent();l=c.get("configuration");
var u=l[c.get("view").type].view.childConfig;a=c.get("view").createChildNode(),i=e.children()?n[u.withChildrenPrototype]:n[u.withoutChildrenPrototype],
t=o,s=c.get("controller")}else l=this.get("configuration"),a=l.target,i=n.Root,t=o,
s=null;var h=new i({model:e,configuration:l,target:a});return this.set("view",h),
d===!0&&null!==s?(r=s,r.bindToView(h)):r=new t({model:e,view:h,configuration:l}),
this.set("controller",r),this.debug("addViewAndController is done for "+e.get("id")+" : "+e.get("label")),
this},onNewData:function(e,t,i){var n;return this.debug("New data ("+e.get("label")+") caught by "+this.get("model").get("label")),
n=this.where({model:e.parent()}),1===n.length?n[0].trigger("post:child:add"):void 0;
},onUpdateChildren:function(){return this.debug("New data added to "+this.get("model").get("label")+" : updating children"),
this.updateChildren(),this.restoreScroll(),this.trigger("post:update:children",this);
},restoreScroll:function(){return null!=this.get("view")._scrollBar&&(this.debug("This group has a scrollbar"),
null!=this.previousPosition)?(this.debug("Scrolling back"),this.get("view").setScrollBarAt(this.previousPosition),
this.previousPosition=null):void 0},getNextPage:function(t,i){var n=this._listChildren(this.children()),o=this.sortChildren(n),l=e.last(o,2)[0];
return this.previousPosition=null!=l?l.target:void 0,this.getPage("next",t,i)},getPreviousPage:function(t,i){
var n=this._listChildren(this.children()),o=this.sortChildren(n),l=e.first(o,2)[1];
return this.previousPosition=null!=l?l.target:void 0,this.getPage("previous",t,i);
},getPage:function(e,t,i){this.debug("Item "+t.get("label")+" requested page "+e);
var n="";return this.get("configuration").search.serverSide===!0&&(n=t.root().get("searchPattern")),
this.requestPage(e,n)},requestPage:function(t,i){var n=this.get("configuration").pagination.getPage;
if(!e.isFunction(n))return this;var o=this;return n(t,i).then(function(e){null!=e.resultset?o.debug("getPage: got "+e.resultset.length+" more items"):o.debug("getPage: no more items");
})},updateChildren:function(){var t=this.get("model").children();if(null!=t){var i=this;
t.each(function(t){var n=!1;return i.children()&&(n=e.any(i.children().map(function(e){
return e.get("model")===t}))),n?void 0:(i.debug("adding child model "+t.get("label")),
i.addChild(t))}),this.renderSortedChildren(),this.get("view").updateScrollBar()}return this;
},addChild:function(e){var t={model:e,configuration:this.get("configuration")};return this.add(t),
this},removeChild:function(e){throw new Error("NotImplemented")},sortSiblings:function(e){
return this.debug("sortSiblings: "+this.get("model").get("label")+" was triggered from "+e.get("label")+":"+e.getSelection()),
this.get("model")!==e?this:this.parent()?this.parent().trigger("request:child:sort"):void 0;
},getSorters:function(){var t=this.children().first().get("view").type,i=this.get("configuration")[t].sorter;
return e.isFunction(i)?[i]:e.isArray(i)?i:[]},sortChildren:function(t){var i=this.getSorters();
if(e.isEmpty(i))return t;for(var n=i.length,o=this.get("configuration"),l=e.chain(t);n--;)l=l.sortBy(function(e,t){
return i[n](null,e.item.get("model"),o)});return l.value()},renderSortedChildren:function(){
var e;return this.children()?(e=this.get("view").getChildrenContainer(),e.hide(),
this._appendChildren(this.sortChildren(this._detachChildren())),e.show(),this):this;
},_listChildren:function(){var e;return e=this.children()?this.children().map(function(e){
return{item:e,target:e.get("view").$el}}):null},_detachChildren:function(){var e=this._listChildren();
return e.forEach(function(e){e.target.detach()}),e},_appendChildren:function(t){return null!=t&&e.each(t,function(e){
return function(t){return e.get("view").appendChildNode(t.target)}}(this)),this},
onFilterChange:function(e){this.get("configuration").search.serverSide===!0&&this.requestPage(0,e),
this.get("model").filterBy(e)},onApply:function(e){return this.onFilterChange("");
}})}),define("cdf/components/filter/strategies/AbstractSelect",["../../../lib/jquery","amd!../../../lib/underscore","../../../lib/Base","../../../Logger","../models/SelectionTree"],function(e,t,i,n,o){
return i.extend(n).extend({ID:"BaseFilter.SelectionStrategies.AbstractSelect",constructor:function(e){
return this.isLogicGlobal=!0},getNewState:function(e){switch(e){case o.SelectionStates.NONE:
return o.SelectionStates.ALL;case o.SelectionStates.ALL:return o.SelectionStates.NONE;
case o.SelectionStates.SOME:return o.SelectionStates.NONE}},inferSelectionFromChildren:function(e){
var i=t.every(e,function(e){return e===SelectionStates.ALL}),n=t.every(e,function(e){
return e===SelectionStates.NONE});return i?SelectionStates.ALL:n?SelectionStates.NONE:SelectionStates.SOME;
},setSelection:function(e,t){throw new Error("NotImplemented")},changeSelection:function(i){
var n=e.now(),o=this.getNewState(i.getSelection());o=this.setSelection(o,i);var l=this;
return t.delay(function(){return l.debug("Switching "+i.get("label")+" to "+o+" took "+(e.now()-n)+" ms ");
},0),this},applySelection:function(e){return e.updateSelectedItems(),e.root().set("isCollapsed",!0),
this},getSelectedItems:function(e,t){return e.getSelectedItems(t)}})}),define("cdf/components/filter/strategies/MultiSelect",["amd!../../../lib/underscore","./AbstractSelect"],function(e,t){
return t.extend({ID:"BaseFilter.SelectionStrategies.MultiSelect",setSelection:function(e,t){
return t.setAndUpdateSelection(e),e}})}),define("cdf/components/filter/strategies/LimitedSelect",["amd!../../../lib/underscore","../models/SelectionTree","./MultiSelect"],function(e,t,i){
return i.extend({ID:"BaseFilter.SelectionStrategies.LimitedSelect",constructor:function(e){
return this.selectionLimit=e.limit||1/0},setSelection:function(i,n){var o,l,s=!0,r=n.getSelection();
return i=this.getNewState(r),i!==t.SelectionStates.NONE&&(l=n.root().get("numberOfSelectedItems"),
e.isFinite(l)||(n.update(),l=n.root().get("numberOfSelectedItems")),l>=this.selectionLimit?(this.warn('Cannot allow the selection of  "'+n.get("label")+'". Selection limit of '+this.selectionLimit+" has been reached."),
s=!1):n.children()&&i===t.SelectionStates.ALL&&(o=n.flatten().filter(function(e){
return null==e.children()}).filter(function(e){return e.getSelection()===t.SelectionStates.NONE;
}).value().length,l+o>=this.selectionLimit&&(this.warn('Cannot allow the selection of "'+n.get("label")+'". Selection limit of '+this.selectionLimit+" would be reached."),
s=!1))),s?(this.debug("setSelection"),n.setAndUpdateSelection(i),l=n.root().get("numberOfSelectedItems"),
n.root().set("reachedSelectionLimit",l>=this.selectionLimit)):i=r,i}})}),define("cdf/components/filter/strategies/SingleSelect",["amd!../../../lib/underscore","./AbstractSelect","../models/SelectionTree"],function(e,t,i){
return t.extend({ID:"BaseFilter.SelectionStrategies.SingleSelect",setSelection:function(e,t){
return t.children()?void 0:(this.isLogicGlobal===!0?t.root().setSelection(i.SelectionStates.NONE):t.getSelection()!==i.SelectionStates.ALL&&t.parent()&&t.parent().setSelection(i.SelectionStates.NONE),
t.setAndUpdateSelection(i.SelectionStates.ALL),e)},changeSelection:function(e){return this.base(e),
this.applySelection(e)},getSelectedItems:function(t,i){return t&&t.isRoot()&&t.children()&&1==t.countSelectedItems()&&1==t.children().length?e.flatten(t.children().map(function(e){
return e.getSelectedItems(i)||[]})):t.getSelectedItems(i)}})}),define("cdf/components/filter/baseevents/baseeventsModel",["amd!../../../lib/backbone","../../../lib/BaseEvents"],function(e,t){
return t.convertClass(e.Model)}),define("cdf/components/filter/data-handlers/InputDataHandler",["../../../lib/jquery","amd!../../../lib/underscore","../baseevents/baseeventsModel","../../../Logger","../HtmlUtils"],function(e,t,i,n,o){
var l=function(e){return t.isString(e)?o.sanitizeHtml(e):e},s=function(e,t){var i={};
return null!=(null!=e?e.pageStart:void 0)&&(i={page:Math.floor(parseInt(e.pageStart)/t)
}),i},r=function(i,n){t.isObject(n)||(n={});var o=function(o){return t.map(o,function(o){
var s={id:o[i.id],label:l(o[i.label])};return t.isFinite(i.value)&&i.value>=0&&(s.value=l(o[i.value])),
s=e.extend(!0,s,n)})};return o},a=function(e,t){var i=function(i,n){var o={id:null!=n?i[0][e.parentId]:void 0,
label:i[0][e.parentLabel],nodes:r(e,t)(i)};return o};return i};return i.extend(n).extend({
ID:"BaseFilter.DataHandlers.Input",getModel:function(){return this.get("model")},
updateModel:function(e){t.isArray(e)?this._updateModelFromBidimensionalArray(e):this.isCdaJson(e)?this._updateModelFromCdaJson(e):this._updateModelFromJson(e);
var i=this.get("model");i.set("isBusy",!1),i.set("isDisabled",null===this.get("model").children());
var n=this.get("options");return n.root&&n.root.id&&i.set("id",n.root.id),n.hooks&&n.hooks.postUpdate&&t.each(n.hooks.postUpdate,function(e){
return e.call(null,null,i,n)}),this.trigger("postUpdate",i),this},_updateModelFromCdaJson:function(i){
var n=e.extend(!0,{},this.get("options")),o=s(i.queryInfo,n.query.getOption("pageSize"));
this._addDataToModel(i.resultset,o);var l;i.queryInfo&&i.queryInfo.pageStart&&(l=parseInt(i.queryInfo.totalRows));
var r=n.query.getOption("searchPattern");return t.isEmpty(r)&&this.get("model").set("numberOfItemsAtServer",l),
this},_updateModelFromJson:function(e){return this},_updateModelFromBidimensionalArray:function(e){
return this._addDataToModel(e,void 0),this},_addDataToModel:function(i,n){if(0===i.length)return this;
var o,l=e.extend(!0,{},this.get("options")),s=t.chain(l.indexes).pick("parentId","parentLabel").filter(t.isFinite).max().value(),d=t.isFinite(s)&&s<i[0].length;
return o=d?t.chain(i).groupBy(function(e){return e[l.indexes.parentId]}).map(a(l.indexes,n)).value():r(l.indexes,n)(i),
this.get("model").add(o),this},isCdaJson:function(e){return t.isObject(e)&&t.isArray(e.resultset)&&t.isArray(e.metadata);
},setValue:function(e){return this.get("model").setSelectedItems(e),this.trigger("setValue",e),
this}})}),define("cdf/components/filter/data-handlers/OutputDataHandler",["amd!../../../lib/underscore","../baseevents/baseeventsModel","../../../Logger"],function(e,t,i){
return t.extend(i).extend({ID:"BaseFilter.DataHandlers.Output",initialize:function(){
return this.listenTo(this.get("model"),"change:selectedItems",this.onApply),this},
_processOutput:function(t,i){var n,o;if(o=void 0,e.isFunction(this.attributes.options.outputFormat))n=this.attributes.options.outputFormat.call(this,t,i),
o=e.isUndefined(n)?void 0:n;else if(e.isString(this.attributes.options.outputFormat))switch(this.attributes.options.outputFormat.toLowerCase()){
case"lowestid":o=this.getLowestId(i);break;case"highestid":o=this.getHighestId(i);
break;case"selected":o=i}return e.isUndefined(o)&&(o=this.getLowestId(i)),o},getHighestId:function(t){
var i;return i=e.chain(t.all).filter(function(t){return!e.isUndefined(t.get("id"));
}).filter(function(t,i,n){var o;return o=!e.contains(n,t.parent())}).map(function(e){
return e.get("id")}).value()},getLowestId:function(t){var i;return i=e.chain(t.all).filter(function(e,t,i){
return!e.children()}).map(function(e){return e.get("id")}).value()},onApply:function(e,t){
var i;return null==t?this:(i=this._processOutput(e,t),this.debug("confirmed selection:"+i),
this.trigger("changed",i),this)},onSelection:function(e){return this.debug("onSelection: "+e.get("label")),
this},getValue:function(){var e,t,i;return e=this.get("model"),t=e.root().get("selectedItems"),
i=this._processOutput(t,e)}})}),define("cdf/components/filter/extensions/sorters",[],function(){
return{selectedOnTop:function(e,t){var i;return i=e.getSelection()?"A":"Z",i+=t},
sameOrder:function(e,t){var i;return i=t},sortAlphabetically:function(e,t){var i;return i=e.get("label");
},sortByValue:function(e,t){var i;return i=-e.get("value")||0}}}),define("cdf/components/filter/extensions/renderers",["../../../lib/jquery","../../../lib/mustache"],function(e,t){
return{group:function(e,i,n){var o,l,s;return s=i.toJSON(),l=t.render("{{label}}",s),
o=t.render('<a href="http://www.google.com">More about {{label}}</a>',s),e.find(".filter-group-title").html(l),
e.find(".filter-group-footer").html(o),e.css({border:"1px solid rgb("+_.random(255)+","+_.random(255)+","+_.random(255)+")"
})},sumSelected:function(e,t,i){var n,o;return o=t.flatten().filter(function(e){return null==e.children();
}).filter(function(e){return e.getSelection()===!0}).reduce(function(e,t){return e+t.get("value");
},0).value(),n=t.isRoot()?".filter-root-selection-value":".filter-group-selection-value",
e.find(n+":eq(0)").html(0===o?"":o)},Item:function(e,t,i){var n;return n={item:"<span>"+viewModel.label+"</span> <span style='float:right;'>comem</>"
},e.find(".filter-item-body").html(n.item)},rootHeaderSingleSelect:function(e,t,i){
var n;return n=t.getSelectedItems()[0]||"None",e.find(".filter-root-header-label").html(n).attr("title",n);
},rootHeaderMultiSelect:function(e,i,n){var o,l;return l=i.toJSON(),o=t.render('<span class="filter-root-info-number-selected-items">\n  {{numberOfSelectedItems}}\n</span>\n<span class="filter-root-info-number-items">\n  of {{numberOfItems}}\n</span>',l),
"undefined"!=typeof console&&null!==console&&console.log("injecting content on header"),
e.find(".filter-root-header-label").html(o).attr("title",t.render("{{numberOfSelectedItems}}/{{numberOfItems}}",l)),
e.find(".filter-root-header-label").mouseover(function(e){return"undefined"!=typeof console&&null!==console?console.log("hovering "+l.label):void 0;
})},notificationSelectionLimit:function(i,n,o){var l,s;return s=e.extend(!0,n.toJSON(),o),
l=t.render('{{#reachedSelectionLimit}}\n<div class="filter-root-notification">\n  <div class="filter-root-notification-icon" />\n  <div class="filter-root-notification-text">\n    The selection limit\n    (<span class="filter-notification-highlight">{{Root.options.selectionStrategy.limit}}</span>)\n    for specific items has been reached.\n  </div>\n</div>\n{{/reachedSelectionLimit}}',s),
i.find(".filter-root-footer").html(l)}}}),define("cdf/components/filter/base/defaults",["../../../lib/jquery"],function(e){
var t={loglevel:"log",pagination:{throttleTimeMilliseconds:500},Root:{renderers:void 0,
sorter:void 0,view:{styles:[],throttleTimeMilliseconds:10,templates:{},slots:{selection:".filter-root-control",
header:".filter-root-header",footer:".filter-root-footer",children:".filter-root-items",
overlay:".filter-overlay"},childConfig:{withChildrenPrototype:"Group",withoutChildrenPrototype:"Item",
className:"filter-root-child",appendTo:".filter-root-items"},overlaySimulateClick:!0
}},Group:{renderers:void 0,sorter:void 0,view:{throttleTimeMilliseconds:10,templates:{},
slots:{selection:".filter-group-header:eq(0)",children:".filter-group-items"},childConfig:{
withChildrenPrototype:"Group",withoutChildrenPrototype:"Item",className:"filter-group-child"
}}},Item:{renderers:void 0,sorter:void 0,view:{styles:[],throttleTimeMilliseconds:10,
templates:{},slots:{selection:".filter-item-container"}}}};return e.extend(!0,{},t,{
pagination:{pageSize:1/0},search:{serverSide:!1,matcher:void 0},selectionStrategy:{
type:"LimitedSelect",limit:500},Root:{options:{className:"multi-select",styles:void 0,
showCommitButtons:!0,showFilter:!1,showGroupSelection:!0,showButtonOnlyThis:!1,showSelectedItems:!1,
showNumberOfSelectedItems:!0,showValue:!1,showIcons:!0,scrollThreshold:12,isResizable:!0,
useOverlay:!0,expandMode:"absolute"},strings:{isDisabled:"Unavailable",allItems:"All",
noItems:"None",groupSelection:"All",btnApply:"Apply",btnCancel:"Cancel"},view:{scrollbar:{
engine:"mCustomScrollbar",options:{theme:"dark",alwaysTriggerOffsets:!1,onTotalScrollOffset:100
}}}},Group:{options:{showFilter:!1,showCommitButtons:!1,showGroupSelection:!1,showButtonOnlyThis:!1,
showButtonCollapse:!1,showValue:!1,showIcons:!0,scrollThreshold:1/0,isResizable:!1
},strings:{allItems:"All",noItems:"None",groupSelection:"All",btnApply:"Apply",btnCancel:"Cancel"
}},Item:{options:{showButtonOnlyThis:!1,showValue:!1,showIcons:!0},strings:{btnOnlyThis:"Only"
}}})}),define("cdf/components/filter/BaseFilter",["../../Logger","./models/SelectionTree","./views/Views","./controllers/RootCtrl","./controllers/Manager","./strategies/AbstractSelect","./strategies/LimitedSelect","./strategies/MultiSelect","./strategies/SingleSelect","./data-handlers/InputDataHandler","./data-handlers/OutputDataHandler","./extensions/sorters","./extensions/renderers","./base/templates","./base/defaults"],function(e,t,i,n,o,l,s,r,a,d,c,u,h,f,p){
return{Logger:e,Models:{SelectionTree:t},Views:i,Controllers:{RootCtrl:n,Manager:o
},SelectionStrategies:{AbstractSelect:l,LimitedSelect:s,MultiSelect:r,SingleSelect:a
},DataHandlers:{Input:d,Output:c},Extensions:{Sorters:u,Renderers:h},defaults:p,templates:f,
Enum:{select:t.SelectionStates,selectionStrategy:{LimitedSelect:{Root:{options:{className:"multi-select",
showCommitButtons:!0,showSelectedItems:!1,showNumberOfSelectedItems:!0,showGroupSelection:!0,
label:"All"}},Item:{options:{showButtonOnlyThis:!0}},selectionStrategy:{type:"LimitedSelect",
limit:500},output:{trigger:"apply"}},MultiSelect:{Root:{options:{className:"multi-select",
showCommitButtons:!0,showSelectedItems:!1,showNumberOfSelectedItems:!0,showGroupSelection:!0,
label:"All"}},Item:{options:{showButtonOnlyThis:!0}},selectionStrategy:{type:"MultiSelect"
},output:{trigger:"apply"}},SingleSelect:{Root:{options:{className:"single-select",
showCommitButtons:!1,showSelectedItems:!0,showNumberOfSelectedItems:!1,showGroupSelection:!1
}},Item:{options:{showButtonOnlyThis:!1}},selectionStrategy:{type:"SingleSelect"},
output:{trigger:"apply"}}}}}}),define("cdf/components/filter/addIns/addIns",["../../../lib/jquery","amd!../../../lib/underscore","../../../lib/mustache","../../../Dashboard.Clean","../../../AddIn","../extensions/renderers","../extensions/sorters"],function(e,t,i,n,o,l,s){
!function(e,t,i){"use strict";var n=new t({name:"notificationSelectionLimit",label:"Notification that the selection limit has been reached",
help:"Acts on the footer of the Root view",defaults:{hook:"footer"},implementation:function(e,t,n){
return i.notificationSelectionLimit.call(this,e,t.model,t.configuration)}});e.registerGlobalAddIn("FilterComponent","renderRootSelection",n);
}(n,o,l),function(e,t,i){"use strict";var n=new t({name:"sumSelected",label:"Sum the values of the selected items",
implementation:function(e,t,n){return i.sumSelected.call(this,e,t.model,t.configuration);
}});e.registerGlobalAddIn("FilterComponent","renderRootSelection",n),e.registerGlobalAddIn("FilterComponent","renderGroupSelection",n);
}(n,o,l),function(e,i){"use strict";var n=new i({name:"randomColor",label:"Programmatically sets a random color",
defaults:{filter:".filter-item-body"},implementation:function(e,i,n){return e.find(n.filter).css({
color:"rgb("+t.random(255)+","+t.random(255)+","+t.random(255)+")"})}});e.registerGlobalAddIn("FilterComponent","renderItemSelection",n);
}(n,o),function(e,t,i){"use strict";var n=new t({name:"selectedOnTop",label:"Keep selected items on top ",
implementation:function(e,t,i){var n;return n=t.model.getSelection()?"A":"Z",n+=t.model.index();
}});e.registerGlobalAddIn("FilterComponent","sortItem",n),e.registerGlobalAddIn("FilterComponent","sortGroup",n);
}(n,o,s),function(e,t,i){"use strict";var n=new t({name:"insertionOrder",label:"Keep insertion order",
implementation:function(e,t,i){var n;return n=t.model.index()}});e.registerGlobalAddIn("FilterComponent","sortItem",n),
e.registerGlobalAddIn("FilterComponent","sortGroup",n)}(n,o,s),function(e,t){"use strict";
var i=new t({name:"sortByLabel",label:"Sort items by label, alphabetically",defaults:{
ascending:!0},implementation:function(e,t,i){return t.model.get("label")}});e.registerGlobalAddIn("FilterComponent","sortItem",i),
e.registerGlobalAddIn("FilterComponent","sortGroup",i)}(n,o),function(e,t){"use strict";
var i=new t({name:"sortByValue",label:"Sort items by value",defaults:{ascending:!1
},implementation:function(e,t,i){var n;return n=t.model.get("value"),i.ascending?n:-1*n;
}});e.registerGlobalAddIn("FilterComponent","sortItem",i),e.registerGlobalAddIn("FilterComponent","sortGroup",i);
}(n,o),function(e,i,n){"use strict";var o=new n({name:"sumValues",label:"Sums the values of the selected items",
defaults:{formatValue:function(e){return i.render("{{total}}",{total:e})}},implementation:function(e,i,n){
var o,l,s;return s=i.model.flatten().filter(function(e){return null==e.children();
}).filter(function(e){return e.getSelection()===!0}).reduce(function(e,t){return e+t.get("value");
},0).value(),l=i.model.isRoot()?".filter-root-selection-value":".filter-group-selection-value",
o=t.isFinite(s)?n.formatValue(s):"",e.find(l+":eq(0)").html(o)}});e.registerGlobalAddIn("FilterComponent","renderRootSelection",o),
e.registerGlobalAddIn("FilterComponent","renderGroupSelection",o)}(n,i,o),function(e,i,n){
"use strict";var o=new n({name:"template",label:"Mustache template",defaults:{template:"{{label}}",
filter:"",postRender:void 0},implementation:function(e,n,o){var l,s;return!t.isEmpty(o.template)&&(s=i.render(o.template,n.model.toJSON()),
l=e,t.isEmpty(o.filter)||(l=e.find(o.filter+":eq(0)")),l.html(s),t.isFunction(o.postRender))?o.postRender.call(this,e,n,o):void 0;
}});e.registerGlobalAddIn("FilterComponent","renderRootHeader",o),e.registerGlobalAddIn("FilterComponent","renderRootFooter",o),
e.registerGlobalAddIn("FilterComponent","renderRootSelection",o),e.registerGlobalAddIn("FilterComponent","renderGroupSelection",o),
e.registerGlobalAddIn("FilterComponent","renderItemSelection",o)}(n,i,o),function(e,t){
"use strict";var i=new t({name:"accordion",label:"Makes all filters behave as an accordion",
defaults:{group:"filters"},implementation:function(e,t,i){t.model.on("change:isCollapsed",function(e,n){
return n===!1?t.dashboard.trigger("filters:close",e,i):void 0}),t.model.listenTo(t.dashboard,"filters:close",function(e,n){
return n.group===i.group&&e!==t.model&&t.model.get("isDisabled")===!1?t.model.set("isCollapsed",!0):void 0;
})}});e.registerGlobalAddIn("FilterComponent","postUpdate",i)}(n,o)}),define("cdf/components/filter/FilterComponent",["../../lib/jquery","amd!../../lib/underscore","amd!../../lib/backbone","../UnmanagedComponent","../../Logger","./BaseFilter","./addIns/addIns","css!./styles/filter"],function(e,t,i,n,o,l){
var s={getValue:function(){return this._value},setValue:function(e){return this.inputDataHandler.setValue(e),
this},processChange:function(e){return this._value=e,this.dashboard.processChange(this.name),
this}},r={defaults:{component:{},input:{defaultModel:{isDisabled:!0,searchPattern:""
},indexes:{id:0,label:1,parentId:2,parentLabel:3,value:4}},output:{}},getConfiguration:function(){
var i=this.componentDefinition,n=i.multiselect?"LimitedSelect":"SingleSelect",o={
input:{},output:{},component:e.extend(!0,{},l.defaults,l.Enum.selectionStrategy[n],{
target:this.placeholder()})};e.extend(!0,o,t.result(this,"defaults"));var s=function(i,n){
var l=e.Deferred(),s=!!this.query&&this.query.getOption("pageSize")>0,r=o.component.search.serverSide;
if(!r&&!s)return l.resolve({}),l;var a=t.bind(function(e){return this.inputDataHandler.updateModel(e),
this.model.setBusy(!1),l.resolve(e),e},this),d=t.bind(function(){this.model.setBusy(!1),
l.reject()},this);this.model.setBusy(!0);try{var c=t.isEmpty(n)?"":n;switch(this.query.setSearchPattern(c),
i){case"previous":0!==this.query.getOption("page")&&this.query.previousPage(a);break;
case"next":this.query.nextPage(a);break;default:this.query.setOption("page",i),this.query.doQuery(a,d);
}}catch(u){l.reject({}),this.model.setBusy(!1)}return l},r=[];i.showIcons||r.push("no-icons");
var a=1/0;null!=this.queryDefinition.pageSize&&t.isFinite(this.queryDefinition.pageSize)&&this.queryDefinition.pageSize>0&&(a=this.queryDefinition.pageSize),
e.extend(!0,o.component,{pagination:{pageSize:a,getPage:t.bind(s,this)},selectionStrategy:{
limit:t.isNumber(i.selectionLimit)?i.selectionLimit:1/0},Root:{options:{styles:r,
alwaysExpanded:i.alwaysExpanded,showFilter:i.showFilter,useOverlay:i.useOverlay},
strings:{title:i.title}}});var d=this.dashboard.i18nSupport.map||{},c=this;t.each(["Root","Group","Item"],function(e){
return t.each(o.component[e].strings,function(i,n,o){var l;return l="filter_"+e+"_"+n,
t.has(d,l)?o[n]=c.dashboard.i18nSupport.prop(l):void 0})});var u=o.component.selectionStrategy,h=new l.SelectionStrategies[u.type](u);
return o.component.selectionStrategy.strategy=h,"SingleSelect"!==u.type&&(i.showButtonOnlyThis===!0||i.showButtonOnlyThis===!1)&&(o.component.Root.options.showButtonOnlyThis=i.showButtonOnlyThis,
o.component.Group.options.showButtonOnlyThis=i.showButtonOnlyThis,o.component.Item.options.showButtonOnlyThis=i.showButtonOnlyThis),
e.extend(!0,o.input,this.componentInput,{query:this.query}),e.extend(!0,o.output,this.componentOutput),
o=e.extend(!0,o,this._mapAddInsToConfiguration(),t.result(this,"options"))},_mapAddInsToConfiguration:function(){
var e=this,i=t.chain(this.addIns).map(function(i,n){var o=t.chain(i).map(function(t){
var i=t.trim(),o=e.getAddIn(n,i);if(null!=o){var l=e.getAddInOptions(n,i);return function(t,i,n){
var s;return s={model:i,configuration:n,dashboard:e.dashboard},o.call(t,s,l)}}return null;
}).compact().value();return[n,o]}).object().value(),n={postUpdate:"input.hooks.postUpdate",
renderRootHeader:"component.Root.renderers.header",renderRootSelection:"component.Root.renderers.selection",
renderRootFooter:"component.Root.renderers.footer",renderGroupSelection:"component.Group.renderers.selection",
renderItemSelection:"component.Item.renderers.selection",sortItem:"component.Item.sorter",
sortGroup:"component.Group.sorter",outputFormat:"output.outputFormat"},o={},l=function(e,t){
return null!=e[t]?e[t]:e[t]={}};return t.each(i,function(e,s){var r,a,d,c;return t.isEmpty(e)?void 0:(a=n[s].split("."),
c=t.initial(a),r=t.last(a),d=t.reduce(c,l,o),d[r]=i[s])}),o}};return n.extend(s).extend(r).extend({
model:void 0,manager:void 0,inputDataHandler:void 0,outputDataHandler:void 0,update:function(){
return this.getData().then(t.bind(function(e){return this.initialize(),e},this),t.bind(this.onDataFail,this)).then(t.bind(this.onDataReady,this)),
this},close:function(){return null!=this.manager&&this.manager.empty(),null!=this.model&&this.model.stopListening().off(),
this.stopListening()},initialize:function(){var e=this.getConfiguration();return this.close(),
this.model=new l.Models.SelectionTree(e.input.defaultModel),this.model.set("matcher",e.component.search.matcher),
this.manager=new l.Controllers.Manager({model:this.model,configuration:e.component
}),this.inputDataHandler=new l.DataHandlers.Input({model:this.model,options:e.input
}),this.outputDataHandler=new l.DataHandlers.Output({model:this.model,options:e.output
}),this.listenTo(this.outputDataHandler,"changed",this.processChange),e},getData:function(){
var i=new e.Deferred;if(t.isEmpty(this.dashboard.detectQueryType(this.queryDefinition)))if(this.componentInput.inputParameter&&!t.isEmpty(this.componentInput.inputParameter)){
var n=t.bind(function(){var e=this.dashboard.getParameterValue(this.componentInput.inputParameter);
i.resolve(e)},this);this.synchronous(n,null)}else{var l=t.bind(function(){i.resolve(this.componentInput.valuesArray);
},this);this.synchronous(l,null)}else{var s={ajax:{error:function(){return i.reject({}),
o.log("Query failed","debug")}}},r=t.bind(function(e){i.resolve(e)},this);this.triggerQuery(this.queryDefinition,r,s);
}return i.promise()},onDataReady:function(e){if(this.inputDataHandler.updateModel(e),
this.parameter){var t=this.dashboard.getParameterValue(this.parameter);this.setValue(t);
}return this.trigger("getData:success"),this},onDataFail:function(e){return o.log("Component failed to retrieve data: "+e,"debug"),
this.trigger("getData:failed"),this}},{help:function(){return"Filter component"}});
});