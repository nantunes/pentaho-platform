define(["../has","require"],function(e,t){var n=document.createElement("div");e.add("dom-qsa2.1",!!n.querySelectorAll),
e.add("dom-qsa3",function(){try{return n.innerHTML="<p class='TEST'></p>",1==n.querySelectorAll(".TEST:empty").length;
}catch(e){}});var r,a="./acme",c="./lite";return{load:function(n,s,l,i){var o=t;if(n="default"==n?e("config-selectorEngine")||"css3":n,
n="css2"==n||"lite"==n?c:"css2.1"==n?e("dom-qsa2.1")?c:a:"css3"==n?e("dom-qsa3")?c:a:"acme"==n?a:(o=s)&&n,
"?"==n.charAt(n.length-1)){n=n.substring(0,n.length-1);var d=!0}return d&&(e("dom-compliant-qsa")||r)?l(r):void o([n],function(e){
"./lite"!=n&&(r=e),l(e)})}}});