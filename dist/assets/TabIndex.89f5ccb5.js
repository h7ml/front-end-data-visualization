import{p as a,b as e,A as s,d as n,C as o,f as t,o as l,F as p,g as r}from"./vendor.ec101613.js";import{T as i}from"./TileImage.6719d572.js";import{O as c}from"./OSM.b07225a9.js";import{M as m,V as d}from"./ol.bbcea228.js";import"./XYZ.4ee3e030.js";a("data-v-a9585912");const u=r("div",{tabindex:"2",id:"map",class:"map__x"},null,-1),v=r("div",{class:"explain"},[r("p",null,'通过给地图容器设置 tabindex="2" 来控制默认不会选中地图。'),r("p",null,"只有当鼠标点击地图时，才能进行缩放等操作。"),r("p",null,"如果没选中地图，即使在地图上滑动滚轮，也不会操作到地图。")],-1),b=r("div",{class:"occupied"},null,-1);e();const x={setup(a){const e=s(),r=n(null);return o((()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/TabIndex/TabIndex.vue"),r.value=new m({target:"map",layers:[new i({source:new c})],view:new d({projection:"EPSG:4326",center:[113.120444,23.034742],zoom:12})})})),(a,e)=>(l(),t(p,null,[u,v,b],64))},__scopeId:"data-v-a9585912"};export{x as default};