import{p as a,b as e,C as s,d as r,A as c,r as o,f as t,g as n,c as i,w as l,m as d,a as f,o as u,l as v}from"./vendor.02edd428.js";import{f as w}from"./fabric.566d3038.js";a("data-v-51cf7dc2");const p={class:"box"},g=n("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1),h={class:"tools__x"},b=v("绘图模式"),m=v("框选模式"),y=v("清空画布");e();const D={setup(a){const e=s();let v=null;const D=r(!0);function _(){D.value=!D.value,v.isDrawingMode=D.value}function k(){v.clear()}return c((()=>{e.commit("setComponentPath","src/views/FabricJS/Basic/pages/FreeDrawing/FreeDrawing.vue"),v=new w.fabric.Canvas("canvas",{isDrawingMode:D.value}),v.freeDrawingBrush.color="#11999e",v.freeDrawingBrush.width=10,v.freeDrawingBrush.shadow=new w.fabric.Shadow({blur:10,offsetX:10,offsetY:10,affectStroke:!0,color:"#30e3ca"})})),(a,e)=>{const s=o("el-button");return u(),t("div",p,[g,n("div",h,[D.value?d("",!0):(u(),i(s,{key:0,type:"primary",onClick:_},{default:l((()=>[b])),_:1})),D.value?(u(),i(s,{key:1,type:"success",onClick:_},{default:l((()=>[m])),_:1})):d("",!0),f(s,{type:"danger",onClick:k},{default:l((()=>[y])),_:1})])])}},__scopeId:"data-v-51cf7dc2"};export{D as default};