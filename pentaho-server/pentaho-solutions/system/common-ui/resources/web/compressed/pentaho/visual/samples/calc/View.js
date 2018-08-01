/*!
 * Copyright 2010 - 2018 Hitachi Vantara. All rights reserved.
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
 */

define(["pentaho/module!_","./Model","pentaho/visual/base/View","pentaho/i18n!view"],function(e,t,i,n){
"use strict";return i.extend({$type:{id:e.id,props:{model:{valueType:t}}},_initDomContainer:function(){
var e=document.createElement("span");e.style.fontSize="42px",e.style.position="relative",
this.domContainer.appendChild(e)},_updateAll:function(){var e=this.__calculate();this.domContainer.firstChild.innerHTML=n.get("result",[e.toFixed(2)]),
this._updateSize()},_updateSize:function(){var e=this.domContainer.firstChild,t=this.width,i=this.height;
e.style.left=(t-e.offsetWidth)/2+"px",e.style.top=(i-e.offsetHeight)/2+"px"},__calculate:function(){
var e,t,i=this.model.data,n=i.getNumberOfRows(),a=this.model.measure.fieldIndexes[0],l=function(e){
var t=i.getValue(e,a);return isNaN(t)||null==t?null:t},o=null;switch(this.model.operation){
case"max":for(e=0;n>e;e++)null!=(t=l(e))&&(o=null==o?t:Math.max(o,t));break;case"min":
for(e=0;n>e;e++)null!=(t=l(e))&&(o=null==o?t:Math.min(o,t));break;case"avg":var s=o=0;
if(n){for(e=0;n>e;e++)null!=(t=l(e))&&(s+=t);o=s/n}}return o}}).configure({$type:e.config
})});