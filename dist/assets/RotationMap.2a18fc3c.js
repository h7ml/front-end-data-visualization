import{q as t,s as a,B as e,k as o,C as s,b as n,i,F as c,o as l}from"./vendor.b2164b67.js";import{T as r}from"./TileImage.8da02cff.js";import{O as m}from"./OSM.f0966ad5.js";import{M as p,V as u}from"./ol.a93c908b.js";import"./XYZ.627274cf.js";t("data-v-6f85d7c3");const f=i("div",{id:"map",class:"map__x"},null,-1);a();const v={setup(t){const a=e(),v=o(null);function d(){let t=v.value.getView().getRotation();v.value.getView().setRotation(t+1)}function w(){let t=v.value.getView().getRotation();v.value.getView().setRotation(t-1)}return s((()=>{a.commit("setComponentPath","src/views/OpenLayers/Basic/pages/RotationMap/RotationMap.vue"),v.value=new p({target:"map",layers:[new r({source:new m})],view:new u({projection:"EPSG:4326",center:[114.064839,22.548857],minZoom:10,zoom:12})})})),(t,a)=>(l(),n(c,null,[f,i("div",{class:"btn__x"},[i("button",{onClick:d},"↻"),i("button",{onClick:w},"↺")])],64))},__scopeId:"data-v-6f85d7c3"};export{v as default};
