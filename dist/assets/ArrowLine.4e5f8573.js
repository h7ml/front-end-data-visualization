import{q as e,s as A,B as a,k as s,C as t,b as o,o as r}from"./vendor.1e7a51da.js";import{T as w}from"./TileImage.6719d572.js";import{O as n}from"./OSM.b07225a9.js";import{S as i,L as c,b as m,c as p,I as z}from"./Vector.d80cd09d.js";import{D as b}from"./Draw.12b5e8b7.js";import{bb as d,M as g,V as u}from"./ol.bbcea228.js";import"./XYZ.4ee3e030.js";import"./LineString.9ae0adb3.js";import"./MultiPolygon.1b740cf8.js";e("data-v-7f6fb646");const f={id:"map",class:"map__x"};A();const l={setup(e){const A=a();const l=new w({source:new n}),L=new i({wrapX:!1}),j=new c({source:L,style:function(e){let A=e.getGeometry(),a=[new m({stroke:new p({color:"#ffcc33",width:2})})];return A.forEachSegment(((e,A)=>{let s=A[0]-e[0],t=A[1]-e[1],o=Math.atan2(t,s);a.push(new m({geometry:new d(A),image:new z({src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAMAAACTKxybAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAHJQTFRF//////8A//8A/6pV/79A/8wz/9Ur/9Eu/8Q7/8wz/9It/8k2/9Eu/8o1/9Av/8o1/84x/8wz/8wz/8wz/8wz/8wz/8s0/8wz/8s0/8wz/8wz/8wz/8wz/8s0/8wz/8wz/8wz/8wz/8wz/8wz/8wz/8wzo2lg3QAAACV0Uk5TAAECAwQFBgsNDxETFhgbHUNGm6Ckqa2usrW+w8fLztLV1tnc9jtYQ+sAAABdSURBVAjXZc9HDsAwCARAp/fee+X/X8wesIQVbiMELEqVU6B0VS8tocZARGvE8Edoi1leD+0Jy+2gI2U5LXRmLLuB7pxl1dBT6N4Fzf+OnJHb5B2ZwMhmpDb+kZ9+tBQLxwwvvoMAAAAASUVORK5CYII=",anchor:[.75,.5],rotateWithView:!0,rotation:-o})}))})),a}}),v=s(null);return t((()=>{A.commit("setComponentPath","src/views/OpenLayers/Basic/pages/ArrowLine/ArrowLine.vue"),v.value=new g({target:"map",layers:[l,j],view:new u({projection:"EPSG:4326",center:[115.543045,45.16871],zoom:10})}),v.value.addInteraction(new b({source:L,type:"LineString"}))})),(e,A)=>(r(),o("div",f))},__scopeId:"data-v-7f6fb646"};export{l as default};
