define(["../has","require"],function(o,a){var n={};if(o("dojo-config-api")){var i,e=a.rawConfig;
for(i in e)n[i]=e[i]}else{var r=function(a,n,e){for(i in a)"has"!=i&&o.add(n+i,a[i],0,e);
};n=o("dojo-loader")?a.rawConfig:this.dojoConfig||this.djConfig||{},r(n,"config",1),
r(n.has,"",1)}return n.locale||"undefined"==typeof navigator||(n.locale=(navigator.language||navigator.userLanguage).toLowerCase()),
n});