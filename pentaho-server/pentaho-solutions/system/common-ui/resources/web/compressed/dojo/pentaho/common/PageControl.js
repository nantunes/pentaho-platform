/*!
* Copyright 2010 - 2018 Hitachi Vantara.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/NumberTextBox","dojo/dom-class","dojo/keys"],function(e,t,a,i,n,o,s){
return e("pentaho.common.PageControl",[t,a,i],{templateString:"<div class='pc_pageControlContainer' data-dojo-attach-point='containerNode'><div class='pc_pagePrev' data-dojo-attach-point='prevPageControl'></div><div class='pc_pageNext' data-dojo-attach-point='nextPageControl'></div><div data-dojo-attach-point='pageNumberInput' data-dojo-type='dijit.form.NumberTextBox' class='pc_pageNumberInput' constraints='{min:1}'></div><div class='pc_pageTotal contrast-color' data-dojo-attach-point='pageTotalSpan'>/ ##</div></div>",
getLocaleString:null,changePageNumberCallback:null,pageNumber:1,pageTotal:1,postCreate:function(){
this.inherited(arguments),this._resetPageNumber(),this.setPageCount(this.pageTotal),
this.connect(this.pageNumberInput,"onChange",this._changePageNumber),this.connect(this.pageNumberInput,"onKeyUp",this._pageNumberKeyUp),
this.connect(this.prevPageControl,"onclick",this._prevPage),this.connect(this.nextPageControl,"onclick",this._nextPage),
this.connect(this.pageTotalSpan,"mousedown",this._pageTotalMouseDown)},registerLocalizationLookup:function(e){
this.getLocaleString=e,this._localize()},registerPageNumberChangeCallback:function(e){
this.changePageNumberCallback=e},setPageNumber:function(e){if(1>e||e>this.pageTotal)return void this._resetPageNumber();
if(this.pageNumber!==e)try{this._updateInternalPageNumber(e)}catch(t){console.error("Unable to update page number: "+t),
this._resetPageNumber()}},getPageNumber:function(){return this.pageNumberInput.get("value");
},getPageTotal:function(){return this.pageTotal},setPageCount:function(e){"number"==typeof e?this.pageTotal=e:this.pageTotal=1,
this.pageTotalSpan.innerHTML="/ "+e,this._updatePageButtonState()},reset:function(){
this._updateInternalPageNumber(1)},_localize:function(){this.prevPageControl.setAttribute("title",this.getLocaleString("PageControlPreviousPage_title")),
this.nextPageControl.setAttribute("title",this.getLocaleString("PageControlNextPage_title"));
},_updatePageButtonState:function(){this.pagePrevDisabled=1==this.pageNumber,this.pageNextDisabled=this.pageTotal==this.pageNumber,
this.pagePrevDisabled?o.add(this.prevPageControl,"pc_pagePrevDisabled"):o.remove(this.prevPageControl,"pc_pagePrevDisabled"),
this.pageNextDisabled?o.add(this.nextPageControl,"pc_pageNextDisabled"):o.remove(this.nextPageControl,"pc_pageNextDisabled");
},_changePageNumber:function(){return!this.pageNumberInput.isValid()||isNaN(this.pageNumberInput.get("value"))?void this._resetPageNumber():void this.setPageNumber(this.pageNumberInput.get("value"));
},_pageTotalMouseDown:function(e){e.preventDefault()},_updateInternalPageNumber:function(e){
this.changePageNumberCallback&&this.changePageNumberCallback(e),this.pageNumber=e,
this.pageNumberInput.set("value",this.pageNumber,!1),this._updatePageButtonState();
},_pageNumberKeyUp:function(e){switch(e.keyCode){case s.ENTER:this._changePageNumber();
break;case s.ESCAPE:this._resetPageNumber()}},_resetPageNumber:function(){this.pageNumberInput.set("value",this.pageNumber),
this._updatePageButtonState()},_prevPage:function(){this.pagePrevDisabled||this.setPageNumber(this.pageNumber-1);
},_nextPage:function(){this.pageNextDisabled||this.setPageNumber(this.pageNumber+1);
}})});