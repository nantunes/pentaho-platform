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

define(["require","module","pentaho/config/service","pentaho/module/util","pentaho/shim/es6-promise"],function(e,n,t,i){
"use strict";function o(e){var n=[];return null!==e&&(e.main&&n.push(e.main),e.extensions&&e.extensions.forEach(function(e){
n.push(e)})),n}function r(n){var t=o(n);return 0===t.length?Promise.resolve():new Promise(function(n,i){
e(t,n,i)})}var u="$_$_",s=/^\$_\$_/,c=0;return{load:function(e,n,o,u){if(u.isBuild)o();else{
var c=s.test(e)?i.getId(n):e;t.selectAsync("pentaho/theme!"+c).then(r).then(function(){
o()},o.error)}},normalize:function(e,n){return e&&"_"!==e?n(e):u+ ++c}}});