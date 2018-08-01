var CurrentVersionComponent=BaseComponent.extend({ph:null,update:function(){var e=this;
this.ph=$("#"+this.htmlObject).empty(),$.get(this.versionUrl,function(t){var n=$("<div/>").html(t);
e.ph.append(n)})}}),VersionCheckComponent=BaseComponent.extend({ph:null,versionInfo:null,
getMsgUpdate:function(e){return'You are currently running an outdated version. Please update to the new version <a href="'+e+'">here</a>.';
},getMsgLatest:function(){return"Your version is up to date."},getMsgInconclusive:function(e,t){
return"Only ctools branches support version checking "+(e?"("+e+") .":".")+' You can install lastest version <a href="'+t+'">here</a>';
},getMsgError:function(e){return"There was an error checking for newer versions: "+e;
},update:function(){var e=this;this.ph=$("#"+this.htmlObject).empty(),$.get(this.versionCheckUrl,function(t){
if(t){try{t=JSON.parse(t),Dashboards.log("[VERSION CHECK COMPONENT] ### json parsed with no errors ###");
}catch(n){alert(n.message)}e.versionInfo=t;var r="";switch(t.result){case"update":
r=e.getMsgUpdate(t.downloadUrl);break;case"latest":r=e.getMsgLatest();break;case"error":
r=e.getMsgError(t.msg);break;case"inconclusive":r=e.getMsgInconclusive(t.msg,t.downloadUrl);
}var s=$("<div/>").html(r);e.ph.append(s)}})}});