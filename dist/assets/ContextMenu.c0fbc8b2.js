import{p as e,b as t,A as n,d as a,C as l,f as i,J as s,O as o,g as c,P as u,Q as f,R as r,o as d}from"./vendor.ab550d3c.js";import{f as v}from"./fabric.7a42a7e0.js";e("data-v-3fc9fc09");const p={class:"context__x"},h=c("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1),g=c("div",null,"什么都不做",-1),m=c("div",null,"什么都不做",-1),w=c("div",null,"什么都不做",-1),x=c("div",null,"什么都不做",-1);t();const b={setup(e){const t=n(),b=a(null);let C=null;const y=a(!1),R=a("");let _=null;async function k(e){if(3===e.button&&e.target){_=e.target,y.value=!0,await r();const t=b.value.offsetWidth,n=b.value.offsetHeight;let a=e.pointer.x,l=e.pointer.y;C.width-a<=t&&(a-=t),C.height-l<=n&&(l-=n),R.value=`\n      left: ${a}px;\n      top: ${l}px;\n    `}else M()}function M(){y.value=!1,_=null}function j(){C.remove(_),C.requestRenderAll(),M()}return l((()=>{t.commit("setComponentPath","src/views/FabricJS/Demo/pages/ContextMenu/ContextMenu.vue"),function(){C=new v.fabric.Canvas("canvas",{fireRightClick:!0,stopContextMenu:!0});const e=new v.fabric.Rect({left:10,top:510,fill:"orange",width:40,height:40}),t=new v.fabric.Rect({left:510,top:10,fill:"pink",width:40,height:40,rx:10,ry:10}),n=new v.fabric.Circle({radius:30,fill:"green",left:20,top:20});let a=new v.fabric.Triangle({width:80,height:100,fill:"blue",left:500,top:480});C.add(e,t,n,a),C.on("mouse:down",k)}()})),(e,t)=>(d(),i("div",p,[h,s(c("div",{id:"menu",class:"menu-x",style:u(R.value),onContextmenu:t[0]||(t[0]=f((()=>{}),["prevent"])),ref:(e,t)=>{t.menu=e,b.value=e}},[g,m,w,x,c("div",{onClick:j},"删除")],36),[[o,y.value]])]))},__scopeId:"data-v-3fc9fc09"};export{b as default};