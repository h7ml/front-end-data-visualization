import{A as e,d as a,C as t,r as o,f as n,a as s,w as l,u as r,S as i,g as c,o as u}from"./vendor.da7f5a2b.js";import{f as d}from"./fabric.630692b0.js";const f=c("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1),b={setup(c){const b=e();let m=null,p=a("default");function h(e){switch(e){case"default":m.selection=!0,m.selectionColor="rgba(100, 100, 255, 0.3)",m.selectionBorderColor="rgba(255, 255, 255, 0.3)",m.skipTargetFind=!1;break;case"rect":m.selectionColor="transparent",m.selectionBorderColor="rgba(0, 0, 0, 0.2)",m.skipTargetFind=!0}}let g=null;function v(e){g=e.absolutePointer}function C(e){"rect"===p.value&&function(e){if(JSON.stringify(g)===JSON.stringify(e))return;let a=Math.min(g.y,e.y),t=Math.min(g.x,e.x),o=Math.abs(g.x-e.x),n=Math.abs(g.y-e.y);const s=new d.fabric.Rect({top:a,left:t,width:o,height:n,fill:"transparent",stroke:"#000"});m.add(s),g=null}(e.absolutePointer)}return t((()=>{b.commit("setComponentPath","src/views/FabricJS/Demo/pages/CreateRect/CreateRect.vue"),m=new d.fabric.Canvas("canvas"),m.on("mouse:down",v),m.on("mouse:up",C)})),(e,a)=>{const t=o("el-option"),c=o("el-select");return u(),n("div",null,[s(c,{modelValue:r(p),"onUpdate:modelValue":a[0]||(a[0]=e=>i(p)?p.value=e:p=e),onChange:h},{default:l((()=>[s(t,{label:"默认(框选)",value:"default"}),s(t,{label:"绘制矩形",value:"rect"})])),_:1},8,["modelValue"]),f])}}};export{b as default};
