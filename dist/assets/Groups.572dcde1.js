import{A as w,C as _,o as v,e as x,f as C}from"./vendor.72e7bd49.js";import{f as e}from"./fabric.63a424fe.js";import{l as o}from"./logo.652bbcc2.js";const R=C("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1),G=[R],j={setup(U){const n=w();let i=null;function a(){i=new e.fabric.Canvas("canvas");const c=new e.fabric.Ellipse({top:20,left:20,rx:100,ry:50,fill:"#ddd",originX:"center",originY:"center"}),l=new e.fabric.Text("Hello World",{top:40,left:20,fontSize:20,originX:"center",originY:"center"}),r=new e.fabric.Group([c,l],{top:50,left:100,angle:-10});r.item(0).set("fill","#ea5455"),r.item(1).set({text:"\u96F7\u7334\uFF0C\u4E16\u754C",fill:"#fff"}),i.add(r);const f=new e.fabric.Circle({radius:50,fill:"red",left:0}),s=new e.fabric.Circle({radius:50,fill:"green",left:100}),d=new e.fabric.Circle({radius:50,fill:"blue",left:200}),t=new e.fabric.Group([f,s,d],{left:50,top:200});i.add(t),t.add(new e.fabric.Rect({width:50,height:50,fill:"orange",left:0,top:0,originX:"center",originY:"center"})),t.addWithUpdate(new e.fabric.Rect({width:80,height:80,fill:"#dcedc1",originX:"center",originY:"center",left:400,top:t.get("top")})),t.addWithUpdate(new e.fabric.Rect({width:40,height:40,fill:"#07689f",originX:"center",originY:"center",left:t.get("left")+100,top:t.get("top")+100})),e.fabric.Image.fromURL(o,p=>{let g=p.scale(.3).set({left:0,top:0});e.fabric.Image.fromURL(o,b=>{let m=b.scale(.3).set({left:80,top:0});e.fabric.Image.fromURL(o,u=>{let h=u.scale(.3).set({left:160,top:0});i.add(new e.fabric.Group([g,m,h],{left:10,top:400}))})})})}return _(()=>{n.commit("setComponentPath","src/views/FabricJS/Basic/pages/Groups/Groups.vue"),a()}),(c,l)=>(v(),x("div",null,G))}};export{j as default};
