import{i as e}from"./index.5fa80180.js";import{A as t,k as a,B as s,b as o,o as n}from"./vendor.ce0b2847.js";const i={setup(i){const r=t(),c=a(null),d={dataset:{source:[["一季度",100,79,"分类1",50],["二季度",112,81,"分类2",60],["三季度",96,88,"分类3",55],["四季度",123,72,"分类4",70]]},title:{text:"主标题",subtext:"副标题"},xAxis:{data:["一季度","二季度","三季度","四季度"]},yAxis:{},legend:{data:[{name:"饼图",icon:"circle",textStyle:{color:"hotpink"}},"折线图","柱状图"],left:100},toolbox:{feature:{restore:{},dataZoom:{yAxisIndex:!1},saveAsImage:{}}},dataZoom:[{show:!0,start:0,end:100}],series:[{name:"饼图",type:"pie",center:["65%",60],radius:35,encode:{itemName:3,value:4}},{name:"折线图",type:"line",encode:{x:0,y:1}},{name:"柱状图",type:"bar",encode:{x:0,y:2}}]};return s((()=>{r.commit("setComponentPath","src/views/ECharts/Basic/pages/Plugins/Plugins.vue"),e(c.value).setOption(d)})),(e,t)=>(n(),o("div",{id:"chart",class:"chart",ref:c},null,512))},__scopeId:"data-v-45bc82c0"};export{i as default};