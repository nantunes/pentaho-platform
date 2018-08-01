define(["dojo/_base/lang","dojo/_base/sniff"],function(e,n){var t=e.getObject("dojox.string",!0).tokenize;
return t=function(e,t,l,o){for(var s,i,a=[],r=0;s=t.exec(e);){if(i=e.slice(r,t.lastIndex-s[0].length),
i.length&&a.push(i),l){if(n("opera")){for(var f=s.slice(0);f.length<s.length;)f.push(null);
s=f}var c=l.apply(o,s.slice(1).concat(a.length));"undefined"!=typeof c&&a.push(c);
}r=t.lastIndex}return i=e.slice(r),i.length&&a.push(i),a}});