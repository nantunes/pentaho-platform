define(["./_base","./regexp"],function(e,s){return e.isIpAddress=function(e,r){var t=new RegExp("^"+s.ipAddress(r)+"$","i");
return t.test(e)},e.isUrl=function(e,r){var t=new RegExp("^"+s.url(r)+"$","i");return t.test(e);
},e.isEmailAddress=function(e,r){var t=new RegExp("^"+s.emailAddress(r)+"$","i");return t.test(e);
},e.isEmailAddressList=function(e,r){var t=new RegExp("^"+s.emailAddressList(r)+"$","i");
return t.test(e)},e.getEmailAddressList=function(s,r){return r||(r={}),r.listSeparator||(r.listSeparator="\\s;,"),
e.isEmailAddressList(s,r)?s.split(new RegExp("\\s*["+r.listSeparator+"]\\s*")):[];
},e});