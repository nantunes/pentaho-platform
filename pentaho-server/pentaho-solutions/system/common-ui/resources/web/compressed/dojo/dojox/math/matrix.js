define(["dojo","dojox"],function(r,n){return r.getObject("math.matrix",!0,n),r.mixin(n.math.matrix,{
iDF:0,ALMOST_ZERO:1e-10,multiply:function(r,n){var t=r.length,e=r[0].length,a=n.length,i=n[0].length;
if(e!=a)return console.warn("Can't multiply matricies of sizes "+e+","+t+" and "+i+","+a),
[[0]];for(var o=[],f=0;t>f;f++){o[f]=[];for(var u=0;i>u;u++){o[f][u]=0;for(var s=0;e>s;s++)o[f][u]+=r[f][s]*n[s][u];
}}return o},product:function(){if(0==arguments.length)return console.warn("can't multiply 0 matrices!"),
1;for(var r=arguments[0],n=1;n<arguments.length;n++)r=this.multiply(r,arguments[n]);
return r},sum:function(){if(0==arguments.length)return console.warn("can't sum 0 matrices!"),
0;var r=this.copy(arguments[0]),n=r.length;if(0==n)return console.warn("can't deal with matrices of 0 rows!"),
0;var t=r[0].length;if(0==t)return console.warn("can't deal with matrices of 0 cols!"),
0;for(var e=1;e<arguments.length;++e){var a=arguments[e];if(a.length!=n||a[0].length!=t)return console.warn("can't add matrices of different dimensions: first dimensions were "+n+"x"+t+", current dimensions are "+a.length+"x"+a[0].length),
0;for(var i=0;n>i;i++)for(var o=0;t>o;o++)r[i][o]+=a[i][o]}return r},inverse:function(r){
if(1==r.length&&1==r[0].length)return[[1/r[0][0]]];var n=r.length,t=this.create(n,n),e=this.adjoint(r),a=this.determinant(r),i=0;
if(0==a)return console.warn("Determinant Equals 0, Not Invertible."),[[0]];i=1/a;for(var o=0;n>o;o++)for(var f=0;n>f;f++)t[o][f]=i*e[o][f];
return t},determinant:function(r){if(r.length!=r[0].length)return console.warn("Can't calculate the determinant of a non-squre matrix!"),
0;for(var n=r.length,t=1,e=this.upperTriangle(r),a=0;n>a;a++){var i=e[a][a];if(Math.abs(i)<this.ALMOST_ZERO)return 0;
t*=i}return t*=this.iDF},upperTriangle:function(r){r=this.copy(r);var n=0,t=0,e=r.length,a=1;
this.iDF=1;for(var i=0;e-1>i;i++){"number"!=typeof r[i][i]&&console.warn("non-numeric entry found in a numeric matrix: m["+i+"]["+i+"]="+r[i][i]),
a=1;for(var o=0;0==r[i][i]&&!o;)if(i+a>=e)this.iDF=0,o=1;else{for(var f=0;e>f;f++)t=r[i][f],
r[i][f]=r[i+a][f],r[i+a][f]=t;a++,this.iDF*=-1}for(var u=i+1;e>u;u++)if("number"!=typeof r[u][i]&&console.warn("non-numeric entry found in a numeric matrix: m["+u+"]["+i+"]="+r[u][i]),
"number"!=typeof r[i][u]&&console.warn("non-numeric entry found in a numeric matrix: m["+i+"]["+u+"]="+r[i][u]),
0!=r[i][i])for(var n=-1*r[u][i]/r[i][i],s=i;e>s;s++)r[u][s]=n*r[i][s]+r[u][s]}return r;
},create:function(r,n,t){t=t||0;for(var e=[],a=0;n>a;a++){e[a]=[];for(var i=0;r>i;i++)e[a][i]=t;
}return e},ones:function(r,n){return this.create(r,n,1)},zeros:function(r,n){return this.create(r,n);
},identity:function(r,n){n=n||1;for(var t=[],e=0;r>e;e++){t[e]=[];for(var a=0;r>a;a++)t[e][a]=e==a?n:0;
}return t},adjoint:function(r){var n=r.length;if(1>=n)return console.warn("Can't find the adjoint of a matrix with a dimension less than 2"),
[[0]];if(r.length!=r[0].length)return console.warn("Can't find the adjoint of a non-square matrix"),
[[0]];for(var t=this.create(n,n),e=this.create(n-1,n-1),a=0,i=0,o=0,f=0,u=0,s=0;n>s;s++)for(var h=0;n>h;h++){
for(o=0,a=0;n>a;a++)if(a!=s){for(f=0,i=0;n>i;i++)i!=h&&(e[o][f]=r[a][i],f++);o++}
u=this.determinant(e),t[s][h]=Math.pow(-1,s+h)*u}return this.transpose(t)},transpose:function(r){
for(var n=this.create(r.length,r[0].length),t=0;t<r.length;t++)for(var e=0;e<r[t].length;e++)n[e][t]=r[t][e];
return n},format:function(r,n){function t(r,n){var t=Math.pow(10,n),e=Math.round(r*t)/t,a=e.toString();
for("-"!=a.charAt(0)&&(a=" "+a),a.indexOf(".")>-1&&(a+=".");a.length<n+3;)a+="0";return a;
}n=n||5;for(var e=r.length,a=e>0?r[0].length:0,i="",o=0;e>o;o++){i+="| ";for(var f=0;a>f;f++)i+=t(r[o][f],n)+" ";
i+="|\n"}return i},copy:function(r){for(var n=r.length,t=r[0].length,e=this.create(t,n),a=0;n>a;a++)for(var i=0;t>i;i++)e[a][i]=r[a][i];
return e},scale:function(r,n){r=this.copy(r);for(var t=r.length,e=r[0].length,a=0;t>a;a++)for(var i=0;e>i;i++)r[a][i]*=n;
return r}}),n.math.matrix});