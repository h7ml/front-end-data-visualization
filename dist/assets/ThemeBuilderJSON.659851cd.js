import{A as o,d as e,C as a,f as i,o as r}from"./vendor.ab550d3c.js";import{i as l}from"./index.5fa80180.js";var t={seriesCnt:"3",backgroundColor:"#5b5c6e",titleColor:"#ffffff",subtitleColor:"#cccccc",textColorShow:!1,textColor:"#333",markTextColor:"#eeeeee",color:["#9b8bba","#e098c7","#8fd3e8","#71669e","#cc70af","#7cb4cc"],borderColor:"#ccc",borderWidth:0,visualMapColor:["#8a7ca8","#e098c7","#cceffa"],legendTextColor:"#cccccc",kColor:"#e098c7",kColor0:"transparent",kBorderColor:"#e098c7",kBorderColor0:"#8fd3e8",kBorderWidth:"2",lineWidth:"3",symbolSize:"7",symbol:"circle",symbolBorderWidth:"2",lineSmooth:!0,graphLineWidth:1,graphLineColor:"#aaaaaa",mapLabelColor:"#000",mapLabelColorE:"#ffffff",mapBorderColor:"#444",mapBorderColorE:"#444",mapBorderWidth:.5,mapBorderWidthE:1,mapAreaColor:"#eee",mapAreaColorE:"#e098c7",axes:[{type:"all",name:"通用坐标轴",axisLineShow:!0,axisLineColor:"#cccccc",axisTickShow:!1,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#cccccc",splitLineShow:!1,splitLineColor:["#eeeeee","#333333"],splitAreaShow:!0,splitAreaColor:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]},{type:"category",name:"类目坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!1,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"value",name:"数值坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"log",name:"对数坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"time",name:"时间坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}],axisSeperateSetting:!1,toolboxColor:"#999999",toolboxEmphasisColor:"#666666",tooltipAxisColor:"#cccccc",tooltipAxisWidth:1,timelineLineColor:"#8fd3e8",timelineLineWidth:1,timelineItemColor:"#8fd3e8",timelineItemColorE:"#8fd3e8",timelineCheckColor:"#8fd3e8",timelineCheckBorderColor:"#8a7ca8",timelineItemBorderWidth:1,timelineControlColor:"#8fd3e8",timelineControlBorderColor:"#8fd3e8",timelineControlBorderWidth:.5,timelineLabelColor:"#8fd3e8",datazoomBackgroundColor:"rgba(0,0,0,0)",datazoomDataColor:"rgba(255,255,255,0.3)",datazoomFillColor:"rgba(167,183,204,0.4)",datazoomHandleColor:"#a7b7cc",datazoomHandleWidth:"100",datazoomLabelColor:"#333"};const c={setup(c){const s=o(),C=e(null),n={title:{text:"自定义主题 JSON版",textStyle:{color:"#fff"}},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:{name:"销量",type:"bar",data:[5,20,36,10,10,20]}};return a((()=>{s.commit("setComponentPath","src/views/ECharts/Basic/pages/ThemeBuilder/ThemeBuilderJSON.vue"),l(C.value,t).setOption(n)})),(o,e)=>(r(),i("div",{id:"chart",class:"chart",ref:(o,e)=>{e.chartDom=o,C.value=o}},null,512))},__scopeId:"data-v-d3b346f6"};export{c as default};
