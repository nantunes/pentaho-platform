define(["dojo/_base/lang","./_base","./regexp"],function(r,e,t){var n=r.getObject("us",!0,e);
return n.isState=function(r,e){var n=new RegExp("^"+t.us.state(e)+"$","i");return n.test(r);
},n.isPhoneNumber=function(r){var t={format:["###-###-####","(###) ###-####","(###) ### ####","###.###.####","###/###-####","### ### ####","###-###-#### x#???","(###) ###-#### x#???","(###) ### #### x#???","###.###.#### x#???","###/###-#### x#???","### ### #### x#???","##########"]
};return e.isNumberFormat(r,t)},n.isSocialSecurityNumber=function(r){var t={format:["###-##-####","### ## ####","#########"]
};return e.isNumberFormat(r,t)},n.isZipCode=function(r){var t={format:["#####-####","##### ####","#########","#####"]
};return e.isNumberFormat(r,t)},n});