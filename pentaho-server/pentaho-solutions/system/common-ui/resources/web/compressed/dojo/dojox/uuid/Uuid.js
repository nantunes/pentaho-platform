define(["dojo/_base/lang","./_base"],function(t,i){return dojox.uuid.Uuid=function(i){
if(this._uuidString=dojox.uuid.NIL_UUID,i)dojox.uuid.assert(t.isString(i)),this._uuidString=i.toLowerCase(),
dojox.uuid.assert(this.isValid());else{var u=dojox.uuid.Uuid.getGenerator();u&&(this._uuidString=u(),
dojox.uuid.assert(this.isValid()))}},dojox.uuid.Uuid.compare=function(t,i){var u=t.toString(),o=i.toString();
return u>o?1:o>u?-1:0},dojox.uuid.Uuid.setGenerator=function(i){dojox.uuid.assert(!i||t.isFunction(i)),
dojox.uuid.Uuid._ourGenerator=i},dojox.uuid.Uuid.getGenerator=function(){return dojox.uuid.Uuid._ourGenerator;
},dojox.uuid.Uuid.prototype.toString=function(){return this._uuidString},dojox.uuid.Uuid.prototype.compare=function(t){
return dojox.uuid.Uuid.compare(this,t)},dojox.uuid.Uuid.prototype.isEqual=function(t){
return 0==this.compare(t)},dojox.uuid.Uuid.prototype.isValid=function(){return dojox.uuid.isValid(this);
},dojox.uuid.Uuid.prototype.getVariant=function(){return dojox.uuid.getVariant(this);
},dojox.uuid.Uuid.prototype.getVersion=function(){return this._versionNumber||(this._versionNumber=dojox.uuid.getVersion(this)),
this._versionNumber},dojox.uuid.Uuid.prototype.getNode=function(){return this._nodeString||(this._nodeString=dojox.uuid.getNode(this)),
this._nodeString},dojox.uuid.Uuid.prototype.getTimestamp=function(t){switch(t||(t=null),
t){case"string":case String:return this.getTimestamp(Date).toUTCString();case"hex":
return this._timestampAsHexString||(this._timestampAsHexString=dojox.uuid.getTimestamp(this,"hex")),
this._timestampAsHexString;case null:case"date":case Date:return this._timestampAsDate||(this._timestampAsDate=dojox.uuid.getTimestamp(this,Date)),
this._timestampAsDate;default:dojox.uuid.assert(!1,"The getTimestamp() method dojox.uuid.Uuid was passed a bogus returnType: "+t);
}},dojox.uuid.Uuid});