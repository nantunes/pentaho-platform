define(["../Theme","./gradientGenerator","./common"],function(e,r,n){var f=["#f00","#0f0","#00f","#ff0","#0ff","#f0f","./common"],o={
type:"linear",space:"plot",x1:0,y1:0,x2:0,y2:100};return n.PrimaryColors=new e({seriesThemes:r.generateMiniTheme(f,o,90,40,25)
}),n.PrimaryColors});