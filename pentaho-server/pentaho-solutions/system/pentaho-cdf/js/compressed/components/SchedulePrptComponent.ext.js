define(["pentaho/environment"],function(e){return{getEmailConfig:function(){return e.server.root+"api/emailconfig";
},getScheduledJob:function(){return e.server.root+"api/scheduler/job"}}});