import{p as e,b as a,C as o,d as s,A as t,f as r,o as n}from"./vendor.02edd428.js";import{L as c,S as i}from"./Vector.d80cd09d.js";import{G as m}from"./GeoJSON.4eb8f900.js";import{C as p}from"./MapOfChina.61651cea.js";import{M as d,V as f}from"./ol.bbcea228.js";import"./LineString.9ae0adb3.js";import"./MultiPolygon.1b740cf8.js";e("data-v-6269a544");const u={id:"map",class:"map__x"};a();const j={setup(e){const a=o(),j=s(null);return t((()=>{a.commit("setComponentPath","src/views/OpenLayers/Basic/pages/VectorJSON/VectorJSON.vue"),j.value=new d({target:"map",layers:[new c({source:new i({features:(new m).readFeatures(p,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"})})})],view:new f({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:3})})})),(e,a)=>(n(),r("div",u))},__scopeId:"data-v-6269a544"};export{j as default};