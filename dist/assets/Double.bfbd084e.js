import{i as e}from"./index.1df546ee.js";import{A as s,k as t,B as a,b as i,o}from"./vendor.ce0b2847.js";const r={setup(r){const c=s(),n=t(null),p={title:{text:"双坐标系"},xAxis:{type:"category"},yAxis:[{min:0,max:100},{splitLine:{show:!1}}],dataset:{source:[["product","2012","2013","2014","2015"],["Matcha Latte",41.1,30.4,65.1,53.3],["Milk Tea",86.5,92.1,85.7,83.1]]},series:[{type:"bar",seriesLayoutBy:"row",yAxisIndex:0},{type:"line",seriesLayoutBy:"row",yAxisIndex:1}]};return a((()=>{c.commit("setComponentPath","src/views/ECharts/Basic/pages/Axis/Double.vue"),e(n.value).setOption(p)})),(e,s)=>(o(),i("div",{id:"chart",class:"chart",ref:n},null,512))},__scopeId:"data-v-7c4c7780"};export{r as default};
