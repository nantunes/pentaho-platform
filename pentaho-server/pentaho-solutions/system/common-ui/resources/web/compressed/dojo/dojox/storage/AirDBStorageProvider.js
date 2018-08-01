dojo.provide("dojox.storage.AirDBStorageProvider"),dojo.require("dojox.storage.manager"),
dojo.require("dojox.storage.Provider"),dojo.isAIR&&!function(){if(!e)var e={};e.File=window.runtime.flash.filesystem.File,
e.SQLConnection=window.runtime.flash.data.SQLConnection,e.SQLStatement=window.runtime.flash.data.SQLStatement,
dojo.declare("dojox.storage.AirDBStorageProvider",[dojox.storage.Provider],{DATABASE_FILE:"dojo.db",
TABLE_NAME:"__DOJO_STORAGE",initialized:!1,_db:null,initialize:function(){this.initialized=!1;
try{this._db=new e.SQLConnection,this._db.open(e.File.applicationStorageDirectory.resolvePath(this.DATABASE_FILE)),
this._sql("CREATE TABLE IF NOT EXISTS "+this.TABLE_NAME+"(namespace TEXT, key TEXT, value TEXT)"),
this._sql("CREATE UNIQUE INDEX IF NOT EXISTS namespace_key_index ON "+this.TABLE_NAME+" (namespace, key)"),
this.initialized=!0}catch(t){console.debug("dojox.storage.AirDBStorageProvider.initialize:",t);
}dojox.storage.manager.loaded()},_sql:function(t,a){var i=new e.SQLStatement;if(i.sqlConnection=this._db,
i.text=t,a)for(var n in a)i.parameters[n]=a[n];return i.execute(),i.getResult()},
_beginTransaction:function(){this._db.begin()},_commitTransaction:function(){this._db.commit();
},isAvailable:function(){return!0},put:function(e,t,a,i){if(0==this.isValidKey(e))throw new Error("Invalid key given: "+e);
if(i=i||this.DEFAULT_NAMESPACE,0==this.isValidKey(i))throw new Error("Invalid namespace given: "+i);
try{this._sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = :namespace AND key = :key",{
":namespace":i,":key":e}),this._sql("INSERT INTO "+this.TABLE_NAME+" VALUES (:namespace, :key, :value)",{
":namespace":i,":key":e,":value":t})}catch(n){return console.debug("dojox.storage.AirDBStorageProvider.put:",n),
void a(this.FAILED,e,n.toString())}a&&a(this.SUCCESS,e,null,i)},get:function(e,t){
if(0==this.isValidKey(e))throw new Error("Invalid key given: "+e);t=t||this.DEFAULT_NAMESPACE;
var a=this._sql("SELECT * FROM "+this.TABLE_NAME+" WHERE namespace = :namespace AND key = :key",{
":namespace":t,":key":e});return a.data&&a.data.length?a.data[0].value:null},getNamespaces:function(){
var e=[this.DEFAULT_NAMESPACE],t=this._sql("SELECT namespace FROM "+this.TABLE_NAME+" DESC GROUP BY namespace");
if(t.data)for(var a=0;a<t.data.length;a++)t.data[a].namespace!=this.DEFAULT_NAMESPACE&&e.push(t.data[a].namespace);
return e},getKeys:function(e){if(e=e||this.DEFAULT_NAMESPACE,0==this.isValidKey(e))throw new Error("Invalid namespace given: "+e);
var t=[],a=this._sql("SELECT key FROM "+this.TABLE_NAME+" WHERE namespace = :namespace",{
":namespace":e});if(a.data)for(var i=0;i<a.data.length;i++)t.push(a.data[i].key);return t;
},clear:function(e){if(0==this.isValidKey(e))throw new Error("Invalid namespace given: "+e);
this._sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = :namespace",{":namespace":e
})},remove:function(e,t){t=t||this.DEFAULT_NAMESPACE,this._sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = :namespace AND key = :key",{
":namespace":t,":key":e})},putMultiple:function(e,t,a,i){if(this.isValidKeyArray(e)===!1||!t instanceof Array||e.length!=t.length)throw new Error("Invalid arguments: keys = ["+e+"], values = ["+t+"]");
if((null==i||"undefined"==typeof i)&&(i=this.DEFAULT_NAMESPACE),0==this.isValidKey(i))throw new Error("Invalid namespace given: "+i);
this._statusHandler=a;try{this._beginTransaction();for(var n=0;n<e.length;n++)this._sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = :namespace AND key = :key",{
":namespace":i,":key":e[n]}),this._sql("INSERT INTO "+this.TABLE_NAME+" VALUES (:namespace, :key, :value)",{
":namespace":i,":key":e[n],":value":t[n]});this._commitTransaction()}catch(s){return console.debug("dojox.storage.AirDBStorageProvider.putMultiple:",s),
void(a&&a(this.FAILED,e,s.toString(),i))}a&&a(this.SUCCESS,e,null)},getMultiple:function(e,t){
if(this.isValidKeyArray(e)===!1)throw new Error("Invalid key array given: "+e);if((null==t||"undefined"==typeof t)&&(t=this.DEFAULT_NAMESPACE),
0==this.isValidKey(t))throw new Error("Invalid namespace given: "+t);for(var a=[],i=0;i<e.length;i++){
var n=this._sql("SELECT * FROM "+this.TABLE_NAME+" WHERE namespace = :namespace AND key = :key",{
":namespace":t,":key":e[i]});a[i]=n.data&&n.data.length?n.data[0].value:null}return a;
},removeMultiple:function(e,t){t=t||this.DEFAULT_NAMESPACE,this._beginTransaction();
for(var a=0;a<e.length;a++)this._sql("DELETE FROM "+this.TABLE_NAME+" WHERE namespace = namespace = :namespace AND key = :key",{
":namespace":t,":key":e[a]});this._commitTransaction()},isPermanent:function(){return!0;
},getMaximumSize:function(){return this.SIZE_NO_LIMIT},hasSettingsUI:function(){return!1;
},showSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface");
},hideSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface");
}}),dojox.storage.manager.register("dojox.storage.AirDBStorageProvider",new dojox.storage.AirDBStorageProvider),
dojox.storage.manager.initialize()}();