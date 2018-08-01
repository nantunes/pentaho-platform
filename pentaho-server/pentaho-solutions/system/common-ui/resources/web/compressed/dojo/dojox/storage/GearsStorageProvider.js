dojo.provide("dojox.storage.GearsStorageProvider"),dojo.require("dojo.gears"),dojo.require("dojox.storage.Provider"),
dojo.require("dojox.storage.manager"),dojo.require("dojox.sql"),dojo.gears.available&&!function(){
dojo.declare("dojox.storage.GearsStorageProvider",dojox.storage.Provider,{constructor:function(){},
TABLE_NAME:"__DOJO_STORAGE",initialized:!1,_available:null,_storageReady:!1,initialize:function(){
1!=dojo.config.disableGearsStorage&&(this.TABLE_NAME="__DOJO_STORAGE",this.initialized=!0,
dojox.storage.manager.loaded())},isAvailable:function(){return this._available=dojo.gears.available;
},put:function(e,o,t,r){if(this._initStorage(),!this.isValidKey(e))throw new Error("Invalid key given: "+e);
if(r=r||this.DEFAULT_NAMESPACE,!this.isValidKey(r))throw new Error("Invalid namespace given: "+e);
o=dojo.isString(o)?"string:"+o:dojo.toJson(o);try{dojox.sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = ? AND key = ?",r,e),
dojox.sql("INSERT INTO "+this.TABLE_NAME+" VALUES (?, ?, ?)",r,e,o)}catch(i){return console.debug("dojox.storage.GearsStorageProvider.put:",i),
void t(this.FAILED,e,i.toString(),r)}t&&t(dojox.storage.SUCCESS,e,null,r)},get:function(e,o){
if(this._initStorage(),!this.isValidKey(e))throw new Error("Invalid key given: "+e);
if(o=o||this.DEFAULT_NAMESPACE,!this.isValidKey(o))throw new Error("Invalid namespace given: "+e);
var t=dojox.sql("SELECT * FROM "+this.TABLE_NAME+" WHERE namespace = ? AND  key = ?",o,e);
return t.length?(t=t[0].value,t=dojo.isString(t)&&/^string:/.test(t)?t.substring("string:".length):dojo.fromJson(t)):null;
},getNamespaces:function(){this._initStorage();for(var e=[dojox.storage.DEFAULT_NAMESPACE],o=dojox.sql("SELECT namespace FROM "+this.TABLE_NAME+" DESC GROUP BY namespace"),t=0;t<o.length;t++)o[t].namespace!=dojox.storage.DEFAULT_NAMESPACE&&e.push(o[t].namespace);
return e},getKeys:function(e){if(this._initStorage(),e=e||this.DEFAULT_NAMESPACE,
!this.isValidKey(e))throw new Error("Invalid namespace given: "+e);for(var o=dojox.sql("SELECT key FROM "+this.TABLE_NAME+" WHERE namespace = ?",e),t=[],r=0;r<o.length;r++)t.push(o[r].key);
return t},clear:function(e){if(this._initStorage(),e=e||this.DEFAULT_NAMESPACE,!this.isValidKey(e))throw new Error("Invalid namespace given: "+e);
dojox.sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = ?",e)},remove:function(e,o){
if(this._initStorage(),!this.isValidKey(e))throw new Error("Invalid key given: "+e);
if(o=o||this.DEFAULT_NAMESPACE,!this.isValidKey(o))throw new Error("Invalid namespace given: "+e);
dojox.sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = ? AND key = ?",o,e)},
putMultiple:function(e,o,t,r){if(this._initStorage(),!this.isValidKeyArray(e)||!o instanceof Array||e.length!=o.length)throw new Error("Invalid arguments: keys = ["+e+"], values = ["+o+"]");
if((null==r||"undefined"==typeof r)&&(r=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(r))throw new Error("Invalid namespace given: "+r);
this._statusHandler=t;try{dojox.sql.open(),dojox.sql.db.execute("BEGIN TRANSACTION");
for(var i="REPLACE INTO "+this.TABLE_NAME+" VALUES (?, ?, ?)",s=0;s<e.length;s++){
var a=o[s];a=dojo.isString(a)?"string:"+a:dojo.toJson(a),dojox.sql.db.execute(i,[r,e[s],a]);
}dojox.sql.db.execute("COMMIT TRANSACTION"),dojox.sql.close()}catch(n){return console.debug("dojox.storage.GearsStorageProvider.putMultiple:",n),
void(t&&t(this.FAILED,e,n.toString(),r))}t&&t(dojox.storage.SUCCESS,e,null,r)},getMultiple:function(e,o){
if(this._initStorage(),!this.isValidKeyArray(e))throw new("Invalid key array given: "+e);
if((null==o||"undefined"==typeof o)&&(o=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(o))throw new Error("Invalid namespace given: "+o);
for(var t="SELECT * FROM "+this.TABLE_NAME+" WHERE namespace = ? AND  key = ?",r=[],i=0;i<e.length;i++){
var s=dojox.sql(t,o,e[i]);s.length?(s=s[0].value,dojo.isString(s)&&/^string:/.test(s)?r[i]=s.substring("string:".length):r[i]=dojo.fromJson(s)):r[i]=null;
}return r},removeMultiple:function(e,o){if(this._initStorage(),!this.isValidKeyArray(e))throw new Error("Invalid arguments: keys = ["+e+"]");
if((null==o||"undefined"==typeof o)&&(o=dojox.storage.DEFAULT_NAMESPACE),!this.isValidKey(o))throw new Error("Invalid namespace given: "+o);
dojox.sql.open(),dojox.sql.db.execute("BEGIN TRANSACTION");for(var t="DELETE FROM "+this.TABLE_NAME+" WHERE namespace = ? AND key = ?",r=0;r<e.length;r++)dojox.sql.db.execute(t,[o,e[r]]);
dojox.sql.db.execute("COMMIT TRANSACTION"),dojox.sql.close()},isPermanent:function(){
return!0},getMaximumSize:function(){return this.SIZE_NO_LIMIT},hasSettingsUI:function(){
return!1},showSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface");
},hideSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface");
},_initStorage:function(){if(!this._storageReady){if(!google.gears.factory.hasPermission){
var e=null,o=null,t="This site would like to use Google Gears to enable enhanced functionality.",r=google.gears.factory.getPermission(e,o,t);
if(!r)throw new Error("You must give permission to use Gears in order to store data");
}try{dojox.sql("CREATE TABLE IF NOT EXISTS "+this.TABLE_NAME+"(  namespace TEXT,  key TEXT,  value TEXT )"),
dojox.sql("CREATE UNIQUE INDEX IF NOT EXISTS namespace_key_index ON "+this.TABLE_NAME+" (namespace, key)");
}catch(i){throw console.debug("dojox.storage.GearsStorageProvider._createTables:",i),
new Error("Unable to create storage tables for Gears in Dojo Storage")}this._storageReady=!0;
}}}),dojox.storage.manager.register("dojox.storage.GearsStorageProvider",new dojox.storage.GearsStorageProvider);
}();