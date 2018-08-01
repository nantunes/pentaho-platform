/*!
 * Copyright 2018 Hitachi Vantara. All rights reserved.
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

define(["module","./Adapter","pentaho/type/String"],function(t,e,n){"use strict";function r(t,e){
var n=t.getNumberOfColumns();return function(r){for(var u,i=-1;++i<n;){var o=t.getValueKey(r,i);
0===i?u=o:u+=e+o}return u}}function u(t,e){var n=t.getNumberOfColumns();return function(r){
for(var u=null,i=-1;++i<n;){var o=t.getFormattedValue(r,i);null!=o&&o.length>0&&(null===u?u=o:u+=e+o);
}return u}}var i=e.extend({constructor:function(t,e,i,o,a,l){this.base(t,e,i,o),this.__index=Object.create(null),
this.__dataType=n.type,this.__valueCombiner=r(i,a),this.__formattedCombiner=u(i,l);
},get dataType(){return this.__dataType},getValue:function(t){var e=this.__valueCombiner(t);
return this.__index[e]=t,e},getFormatted:function(t){return this.__formattedCombiner(t);
},invertValue:function(t){return this.__index[t]}});return i});