import{q as e,s as a,B as s,k as o,C as t,b as r,o as n}from"./vendor.1e7a51da.js";import{l as c,s as i}from"./Vector.4c604db4.js";import{G as m}from"./GeoJSON.b827736e.js";import{C as p}from"./MapOfChina.61651cea.js";import{M as d,V as f}from"./ol.fd4c2e5b.js";import"./LineString.fc0294b2.js";e("data-v-6269a544");const u={id:"map",class:"map__x"};a();const j={setup(e){const a=s(),j=o(null);return t((()=>{a.commit("setComponentPath","src/views/OpenLayers/Basic/pages/VectorJSON/VectorJSON.vue"),j.value=new d({target:"map",layers:[new c({source:new i({features:(new m).readFeatures(p,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"})})})],view:new f({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:3})})})),(e,a)=>(n(),r("div",u))},__scopeId:"data-v-6269a544"};export{j as default};