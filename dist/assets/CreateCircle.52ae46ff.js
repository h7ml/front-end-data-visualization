import{A as e,d as a,C as t,r as l,f as s,a as o,w as r,u as n,S as i,g as c,o as u}from"./vendor.da7f5a2b.js";import{f as d}from"./fabric.630692b0.js";const f=c("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1),b={setup(c){const b=e();let m=null,p=null,v=null,C=null,g=a("default");function y(e){switch(e){case"default":m.selection=!0,m.selectionColor="rgba(100, 100, 255, 0.3)",m.selectionBorderColor="rgba(255, 255, 255, 0.3)",m.skipTargetFind=!1;break;case"circle":m.selectionColor="transparent",m.selectionBorderColor="transparent",m.skipTargetFind=!0}}function h(e){p=e.absolutePointer,"circle"===g.value&&(C=new d.fabric.Circle({top:p.y,left:p.x,radius:0,fill:"transparent",stroke:"rgba(0, 0, 0, 0.2)"}),m.add(C))}function x(e){if("circle"===g.value&&C){const a=e.absolutePointer;let t=Math.min(Math.abs(p.x-a.x),Math.abs(p.y-a.y))/2,l=a.y>p.y?p.y:p.y-2*t,s=a.x>p.x?p.x:p.x-2*t;C.set("radius",t),C.set("top",l),C.set("left",s),m.requestRenderAll()}}function w(e){v=e.absolutePointer,"circle"===g.value&&(JSON.stringify(p)===JSON.stringify(v)?m.remove(C):C&&C.set("stroke","#000"),C=null)}return t((()=>{b.commit("setComponentPath","src/views/FabricJS/Demo/pages/CreateCircle/CreateCircle.vue"),m=new d.fabric.Canvas("canvas"),m.on("mouse:down",h),m.on("mouse:move",x),m.on("mouse:up",w)})),(e,a)=>{const t=l("el-option"),c=l("el-select");return u(),s("div",null,[o(c,{modelValue:n(g),"onUpdate:modelValue":a[0]||(a[0]=e=>i(g)?g.value=e:g=e),onChange:y},{default:r((()=>[o(t,{label:"默认(框选)",value:"default"}),o(t,{label:"圆形",value:"circle"})])),_:1},8,["modelValue"]),f])}}};export{b as default};
