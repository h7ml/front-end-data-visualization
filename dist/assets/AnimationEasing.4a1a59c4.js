import{C as e,d as a,A as t,r as n,f as s,g as l,a as u,w as i,l as o,o as c,F as r,h as d,c as f}from"./vendor.02edd428.js";import{f as v}from"./fabric.566d3038.js";const b=o("动吧"),m=l("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1),I=l("div",null,[o("代码出处 "),l("a",{href:"http://fabricjs.com/animation-easing",target:"view_window"},"http://fabricjs.com/animation-easing")],-1),O={setup(o){const O=e(),p=a(!1),h=a([]),C=a("easeInOutQuad");["easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"].forEach((e=>{h.value.push({value:e,label:e})}));let g=null;function w(){p.value=!0;let e=g.item(0);e.animate("left",100===e.left?400:100,{duration:1e3,onChange:g.renderAll.bind(g),onComplete:function(){p.value=!1},easing:v.fabric.util.ease[C.value]})}return t((()=>{O.commit("setComponentPath","src/views/FabricJS/Demo/pages/AnimationEasing/AnimationEasing.vue"),function(){g=new v.fabric.Canvas("canvas");const e=new v.fabric.Rect({width:50,height:50,left:100,top:100,stroke:"#aaf",strokeWidth:5,fill:"#faa",selectable:!1});g.add(e)}()})),(e,a)=>{const t=n("el-option"),o=n("el-select"),v=n("el-button");return c(),s("div",null,[l("div",null,[u(o,{modelValue:C.value,"onUpdate:modelValue":a[0]||(a[0]=e=>C.value=e),placeholder:"Select"},{default:i((()=>[(c(!0),s(r,null,d(h.value,(e=>(c(),f(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),u(v,{onClick:w,disabled:p.value},{default:i((()=>[b])),_:1},8,["disabled"])]),m,I])}}};export{O as default};