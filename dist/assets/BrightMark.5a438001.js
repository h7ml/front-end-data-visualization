import{p as A,b as e,A as s,d as o,C as a,f as r,o as t}from"./vendor.ec101613.js";import{bb as n,M as i,V as c}from"./ol.bbcea228.js";import{T as m}from"./TileImage.6719d572.js";import{T as g}from"./TileJSON.ad28b714.js";import{a as l,b as w,I as p,S as d,L as u}from"./Vector.d80cd09d.js";import"./net.5778e213.js";var b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAQlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARERH///+Pj48gICDv7+/f39+fn59gYGBAQEAQEBCvr68LwgumAAAADHRSTlMA758QML+Pf29AIPArTt/eAAAAgklEQVQY023RSw7FIAgF0IJ/K9Rf97/VR15r44A7Mich4vVYMTmb97gkRY/oY9rcBgeTeYIL9jME7tQadQa0y85BtUgqjfNRE2DcV/nnugcEI5gck9irxC4JRui1fKkdokz7SWULTW+OjNx2bIxZRXVcu0hdSV1ee6ZaiF6dXrL6HT8b2gxR7DJAHAAAAABJRU5ErkJggg==";A("data-v-30bda912");const f={id:"map",class:"map__x"};e();const y={setup(A){const e=s();let y=new l({geometry:new n([12.5,31.9])}),R=new l({geometry:new n([-.12755,41.507222])}),j=new l({geometry:new n([-3.683333,30.4])});y.setStyle(new w({image:new p({color:"#8959A8",crossOrigin:"anonymous",src:b})})),R.setStyle(new w({image:new p({color:"#4271AE",crossOrigin:"anonymous",src:b})})),j.setStyle(new w({image:new p({color:[113,140,0],crossOrigin:"anonymous",src:b})}));let v=new d({features:[y,R,j]}),E=new u({source:v});const I=o(null);let V=new m({source:new g({url:"https://api.tiles.mapbox.com/v4/mapbox.world-light.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",crossOrigin:"anonymous"})});return a((()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/BrightMark/BrightMark.vue"),I.value=new i({target:"map",layers:[V,E],view:new c({projection:"EPSG:4326",center:[0,0],zoom:3})})})),(A,e)=>(t(),r("div",f))},__scopeId:"data-v-30bda912"};export{y as default};