dojo.provide("dojox.sql._base"),dojo.require("dojox.sql._crypto"),dojo.mixin(dojox.sql,{
dbName:null,debug:dojo.exists("dojox.sql.debug")?dojox.sql.debug:!1,open:function(t){
if(!this._dbOpen||t&&t!=this.dbName){this.dbName||(this.dbName="dot_store_"+window.location.href.replace(/[^0-9A-Za-z_]/g,"_"),
this.dbName.length>63&&(this.dbName=this.dbName.substring(0,63))),t||(t=this.dbName);
try{this._initDb(),this.db.open(t),this._dbOpen=!0}catch(e){throw e.message||e}}},
close:function(t){if(!dojo.isIE&&(this._dbOpen||t&&t!=this.dbName)){t||(t=this.dbName);
try{this.db.close(t),this._dbOpen=!1}catch(e){throw e.message||e}}},_exec:function(t){
try{this._initDb(),this._dbOpen||(this.open(),this._autoClose=!0);var e=null,o=null,i=null,s=dojo._toArray(t);
e=s.splice(0,1)[0],(this._needsEncrypt(e)||this._needsDecrypt(e))&&(o=s.splice(s.length-1,1)[0],
i=s.splice(s.length-1,1)[0]),this.debug&&this._printDebugSQL(e,s);var n;if(this._needsEncrypt(e))return n=new dojox.sql._SQLCrypto("encrypt",e,i,s,o),
null;if(this._needsDecrypt(e))return n=new dojox.sql._SQLCrypto("decrypt",e,i,s,o),
null;var r=this.db.execute(e,s);return r=this._normalizeResults(r),this._autoClose&&this.close(),
r}catch(l){if(l=l.message||l,console.debug("SQL Exception: "+l),this._autoClose)try{
this.close()}catch(c){console.debug("Error closing database: "+c.message||c)}throw l;
}return null},_initDb:function(){if(!this.db)try{this.db=google.gears.factory.create("beta.database","1.0");
}catch(t){throw dojo.setObject("google.gears.denied",!0),dojox.off&&dojox.off.onFrameworkEvent("coreOperationFailed"),
"Google Gears must be allowed to run"}},_printDebugSQL:function(t,e){for(var o='dojox.sql("'+t+'"',i=0;i<e.length;i++)o+="string"==typeof e[i]?', "'+e[i]+'"':", "+e[i];
o+=")",console.debug(o)},_normalizeResults:function(t){var e=[];if(!t)return[];for(;t.isValidRow();){
for(var o={},i=0;i<t.fieldCount();i++){var s=t.fieldName(i),n=t.field(i);o[s]=n}e.push(o),
t.next()}return t.close(),e},_needsEncrypt:function(t){return/encrypt\([^\)]*\)/i.test(t);
},_needsDecrypt:function(t){return/decrypt\([^\)]*\)/i.test(t)}}),dojo.declare("dojox.sql._SQLCrypto",null,{
constructor:function(t,e,o,i,s){"encrypt"==t?this._execEncryptSQL(e,o,i,s):this._execDecryptSQL(e,o,i,s);
},_execEncryptSQL:function(t,e,o,i){var s=this._stripCryptoSQL(t),n=this._flagEncryptedArgs(t,o),r=this;
this._encrypt(s,e,o,n,function(o){var n=!1,l=[],c=null;try{l=dojox.sql.db.execute(s,o);
}catch(a){n=!0,c=a.message||a}if(null!=c){if(dojox.sql._autoClose)try{dojox.sql.close();
}catch(d){}return void i(null,!0,c.toString())}if(l=dojox.sql._normalizeResults(l),
dojox.sql._autoClose&&dojox.sql.close(),dojox.sql._needsDecrypt(t)){var h=r._determineDecryptedColumns(t);
r._decrypt(l,h,e,function(t){i(t,!1,null)})}else i(l,!1,null)})},_execDecryptSQL:function(t,e,o,i){
var s=this._stripCryptoSQL(t),n=this._determineDecryptedColumns(t),r=!1,l=[],c=null;
try{l=dojox.sql.db.execute(s,o)}catch(a){r=!0,c=a.message||a}if(null!=c){if(dojox.sql._autoClose)try{
dojox.sql.close()}catch(d){}return void i(l,!0,c.toString())}l=dojox.sql._normalizeResults(l),
dojox.sql._autoClose&&dojox.sql.close(),this._decrypt(l,n,e,function(t){i(t,!1,null);
})},_encrypt:function(t,e,o,i,s){this._totalCrypto=0,this._finishedCrypto=0,this._finishedSpawningCrypto=!1,
this._finalArgs=o;for(var n=0;n<o.length;n++)if(i[n]){var r=o[n],l=n;this._totalCrypto++,
dojox.sql._crypto.encrypt(r,e,dojo.hitch(this,function(t){this._finalArgs[l]=t,this._finishedCrypto++,
this._finishedCrypto>=this._totalCrypto&&this._finishedSpawningCrypto&&s(this._finalArgs);
}))}this._finishedSpawningCrypto=!0},_decrypt:function(t,e,o,i){this._totalCrypto=0,
this._finishedCrypto=0,this._finishedSpawningCrypto=!1,this._finalResultSet=t;for(var s=0;s<t.length;s++){
var n=t[s];for(var r in n)if("*"==e||e[r]){this._totalCrypto++;var l=n[r];this._decryptSingleColumn(r,l,o,s,function(t){
i(t)})}}this._finishedSpawningCrypto=!0},_stripCryptoSQL:function(t){t=t.replace(/DECRYPT\(\*\)/gi,"*");
var e=t.match(/ENCRYPT\([^\)]*\)/gi);if(null!=e)for(var o=0;o<e.length;o++){var i=e[o],s=i.match(/ENCRYPT\(([^\)]*)\)/i)[1];
t=t.replace(i,s)}if(e=t.match(/DECRYPT\([^\)]*\)/gi),null!=e)for(o=0;o<e.length;o++){
var n=e[o],r=n.match(/DECRYPT\(([^\)]*)\)/i)[1];t=t.replace(n,r)}return t},_flagEncryptedArgs:function(t,e){
for(var o,i=new RegExp(/([\"][^\"]*\?[^\"]*[\"])|([\'][^\']*\?[^\']*[\'])|(\?)/gi),s=0,n=[];null!=(o=i.exec(t));){
var r=RegExp.lastMatch+"";if(!/^[\"\']/.test(r)){var l=!1;/ENCRYPT\([^\)]*$/i.test(RegExp.leftContext)&&(l=!0),
n[s]=l,s++}}return n},_determineDecryptedColumns:function(t){var e={};if(/DECRYPT\(\*\)/i.test(t))e="*";else for(var o=/DECRYPT\((?:\s*\w*\s*\,?)*\)/gi,i=o.exec(t);i;){
var s=new String(RegExp.lastMatch),n=s.replace(/DECRYPT\(/i,"");n=n.replace(/\)/,""),
n=n.split(/\s*,\s*/),dojo.forEach(n,function(t){/\s*\w* AS (\w*)/i.test(t)&&(t=t.match(/\s*\w* AS (\w*)/i)[1]),
e[t]=!0}),i=o.exec(t)}return e},_decryptSingleColumn:function(t,e,o,i,s){dojox.sql._crypto.decrypt(e,o,dojo.hitch(this,function(e){
this._finalResultSet[i][t]=e,this._finishedCrypto++,this._finishedCrypto>=this._totalCrypto&&this._finishedSpawningCrypto&&s(this._finalResultSet);
}))}}),function(){var t=dojox.sql;dojox.sql=new Function("return dojox.sql._exec(arguments);"),
dojo.mixin(dojox.sql,t)}();