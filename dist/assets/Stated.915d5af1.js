import{C as o,b as s,A as r,o as n,e as c}from"./vendor.ab263734.js";import{T as p}from"./TileImage.2b84d652.js";import{O as i}from"./OSM.bd1bc34c.js";import{M as m,V as _}from"./ol.088d4eef.js";import{_ as d}from"./index.5de4ac7a.js";import"./XYZ.d2af7eca.js";const l={id:"map",class:"map__x"},u={setup(f){const e=o(),a=s(null);function t(){a.value=new m({target:"map",layers:[new p({source:new i})],view:new _({projection:"EPSG:4326",center:[114.064839,22.548857],minZoom:10,zoom:12})})}return r(()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/Stated/Stated.vue"),t()}),(v,S)=>(n(),c("div",l))}};var y=d(u,[["__scopeId","data-v-049ac4fc"]]);export{y as default};