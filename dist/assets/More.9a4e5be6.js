import{i as e}from"./index.5a83ccc2.js";import{k as t,y as s,b as i,o as a}from"./vendor.fc99c3d8.js";const r={setup(r){const x=t(null),d={title:{text:"多坐标系"},xAxis:[{type:"category",gridIndex:0},{type:"category",gridIndex:1}],yAxis:[{min:0,max:100,gridIndex:0},{splitLine:{show:!1},gridIndex:0},{min:0,max:150,gridIndex:1}],grid:[{bottom:"55%"},{top:"55%"}],dataset:{source:[["product","2012","2013","2014","2015"],["Matcha Latte",41.1,30.4,65.1,53.3],["Milk Tea",86.5,92.1,85.7,83.1]]},series:[{type:"bar",seriesLayoutBy:"row",xAxisIndex:0,yAxisIndex:0},{type:"line",seriesLayoutBy:"row",xAxisIndex:0,yAxisIndex:1},{type:"bar",seriesLayoutBy:"row",xAxisIndex:1,yAxisIndex:2}]};return s((()=>{e(x.value).setOption(d)})),(e,t)=>(a(),i("div",{id:"chart",class:"chart",ref:x},null,512))},__scopeId:"data-v-0ae1b0f5"};export{r as default};