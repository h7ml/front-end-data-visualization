import{p as e,b as a,A as t,C as o,f as s,o as n,g as i}from"./vendor.ab550d3c.js";import{f as l}from"./fabric.7a42a7e0.js";e("data-v-9e50900c");const r={class:"box"},c=[i("div",{class:"canvas_x"},[i("div",null,"鼠标滚轮缩放画布，alt + 单击动作进行拖动画布"),i("canvas",{width:"400",height:"400",id:"canvas1"})],-1),i("div",{class:"canvas_x"},[i("div",null,"以鼠标指针为缩放中心"),i("canvas",{width:"400",height:"400",id:"canvas2"})],-1)];a();const f={setup(e){const a=t();return o((()=>{a.commit("setComponentPath","src/views/FabricJS/Basic/pages/ZoomAndPanning/ZoomAndPanning.vue"),function(){let e=new l.fabric.Canvas("canvas1"),a=new l.fabric.Rect({left:10,top:10,fill:"orange",width:40,height:40}),t=new l.fabric.Circle({radius:50,fill:"green",left:30,top:30});e.add(a,t),e.on("mouse:wheel",(a=>{let t=a.e.deltaY,o=e.getZoom();o*=.999**t,o>20&&(o=20),o<.01&&(o=.01),e.setZoom(o),a.e.preventDefault(),a.e.stopPropagation()})),e.on("mouse:down",(a=>{let t=a.e;!0===t.altKey&&(e.isDragging=!0,e.lastPosX=t.clientX,e.lastPosY=t.clientY)})),e.on("mouse:move",(a=>{if(e.isDragging){let t=a.e,o=e.viewportTransform;o[4]+=t.clientX-e.lastPosX,o[5]+=t.clientY-e.lastPosY,e.requestRenderAll(),e.lastPosX=t.clientX,e.lastPosY=t.clientY}})),e.on("mouse:up",(a=>{e.setViewportTransform(e.viewportTransform),e.isDragging=!1}))}(),function(){let e=new l.fabric.Canvas("canvas2"),a=new l.fabric.Rect({left:210,top:210,fill:"orange",width:40,height:40}),t=new l.fabric.Circle({radius:50,fill:"green",left:120,top:130});e.add(a,t),e.on("mouse:wheel",(a=>{let t=a.e.deltaY,o=e.getZoom();o*=.999**t,o>20&&(o=20),o<.01&&(o=.01),e.zoomToPoint({x:a.e.offsetX,y:a.e.offsetY},o),a.e.preventDefault(),a.e.stopPropagation()}))}()})),(e,a)=>(n(),s("div",r,c))},__scopeId:"data-v-9e50900c"};export{f as default};