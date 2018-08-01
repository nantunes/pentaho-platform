/*
 * This program is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License, version 2.1 as published by the Free Software
 * Foundation.
 *
 * You should have received a copy of the GNU Lesser General Public License along with this
 * program; if not, you can obtain a copy at http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
 * or from the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 *
 * Copyright 2014 - 2017 Hitachi Vantara. All rights reserved.
 */

define("common-ui/util/URLEncoder",["dojo/_base/lang","dojo/_base/array","dojo/io-query"],function(e,r,n){
var t=e.getObject("pho.Encoder",!0);return t.encode=function(t,o,c){"use strict";if("undefined"==typeof o)return t;
"string"==typeof o&&(o=[o]);var i=t.split("?")[0],a=(i.match(/\{[\d]+\}/g)||[]).length;
o=r.map(o,function(e,r){var n=encodeURIComponent(String(e));return a>r&&(n=n.replace(/%5C/g,"%255C").replace(/%2F/g,"%252F")),
n});var u=e.replace(t,o);return c&&(u+=u.indexOf("?")>-1?"&":"?",u+=n.objectToQuery(c)),
u},t.encodeRepositoryPath=function(e){"use strict";var r=String(e).replace(new RegExp(":","g"),"	").replace(new RegExp("[\\\\/]","g"),":");
return r},t.decodeRepositoryPath=function(e){return String(e).replace(new RegExp(":","g"),"/").replace(new RegExp("\\t","g"),":");
},t}),require(["common-ui/util/URLEncoder"]);