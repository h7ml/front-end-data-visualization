import{A as e,C as o,f as r,o as a,g as t}from"./vendor.ab550d3c.js";import{f as s}from"./fabric.7a42a7e0.js";const c=[t("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1)],f={setup(t){const f=e();return o((()=>{f.commit("setComponentPath","src/views/FabricJS/Basic/pages/Gradient/Gradient.vue"),function(){let e=new s.fabric.Canvas("canvas"),o=new s.fabric.Circle({left:100,top:100,radius:50}),r=new s.fabric.Gradient({type:"linear",gradientUnits:"pixels",coords:{x1:0,y1:0,x2:o.width,y2:0},colorStops:[{offset:0,color:"red"},{offset:.2,color:"orange"},{offset:.4,color:"yellow"},{offset:.6,color:"green"},{offset:.8,color:"blue"},{offset:1,color:"purple"}]});o.set("fill",r),e.add(o);let a=new s.fabric.Circle({left:300,top:100,radius:50}),t=new s.fabric.Gradient({type:"radial",coords:{r1:50,r2:0,x1:50,y1:50,x2:50,y2:50},colorStops:[{offset:0,color:"#fee140"},{offset:1,color:"#fa709a"}]});a.set("fill",t),e.add(a)}()})),(e,o)=>(a(),r("div",null,c))}};export{f as default};
