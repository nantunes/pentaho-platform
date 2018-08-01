/*!
 * Copyright 2010 - 2017 Hitachi Vantara. All rights reserved.
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

define(["../lang/Base","../util/arg","../util/object"],function(n,t,e){return n.extend("pentaho.lang._AnnotatableLinked",{
constructor:function(n){var e=t.optional(n,"p");this._annots=e&&this._createAnnots(e);
},_getAnnotsParent:function(){return Object.getPrototypeOf(this)},_createAnnots:function(n){
var t=this._getAnnotsParent(this);if(t&&t._getAnnots){var o=t._getAnnots(!0),r=Object.create(o);
return n?e.assignOwnDefined(r,n):r}return n||{}},_getAnnots:function(n){return e.getOwn(this,"_annots")||(n?this._createAnnots():void 0);
},property:function(n,t){var o=e.getOwn(this,"_annots");return arguments.length<2?o?o[n]:void 0:(o||(this._annots=o=this._createAnnots()),
o[n]=t,this)}},{configure:function(n,t){var e=t.p;e&&(n._annots=n._createAnnots(e));
},toSpec:function(n,t){t||(t={});var o,r=e.getOwn(n,"_annots");for(var s in r)o||(t.p=o={}),
o[s]=r[s];return t}})});