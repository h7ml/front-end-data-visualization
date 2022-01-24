import{p as e,b as i,A as l,I as a,d as s,C as n,f as o,g as t,J as p,M as b,u as c,K as u,F as r,l as m,o as v}from"./vendor.ab550d3c.js";import{cd as d,M as y,V as f}from"./ol.bbcea228.js";import{T as g}from"./TileImage.6719d572.js";import{O as h}from"./OSM.b07225a9.js";import{T as O}from"./TileJSON.ad28b714.js";import"./XYZ.4ee3e030.js";import"./net.5778e213.js";e("data-v-9beefbc4");const x=t("div",{id:"map",class:"map__x"},null,-1),j=t("span",null,"OSM 层",-1),k={id:"layer0"},w={class:"checkbox",for:"visible0"},C=m("可见 "),V=t("label",null,"透明度",-1),J=t("span",null,"图层组",-1),_={id:"layer1"},z={class:"checkbox",for:"visible1"},I=m("可见 "),L=t("label",null,"透明度",-1),M=t("span",null,"食物危机主题图层",-1),N={id:"layer10"},Y={class:"checkbox",for:"visible10"},U=m("可见 "),G=t("label",null,"透明度",-1),F=t("span",null,"世界陆地边界图",-1),Q={id:"layer11"},R={class:"checkbox",for:"visible11"},S=m("可见 "),T=t("label",null,"透明度",-1);i();const E={setup(e){const i=l(),m=a({visible0:!0,visible0Opacity:100,visible1:!0,visible1Opacity:100,visible10:!0,visible10Opacity:100,visible11:!0,visible11Opacity:100});function E(e,i){Z(D.value,i).setVisible(m[e])}function X(e,i){Z(D.value,i).setOpacity(parseFloat(m[e]))}function Z(e,i){let l=e.getLayers();for(let a=0;a<l.getLength();a++){if(l.item(a).get("name")===i)return l.item(a);if(l.item(a)instanceof d)return Z(l.item(a),i)}}const D=s(null);return n((()=>{i.commit("setComponentPath","src/views/OpenLayers/Basic/pages/LayerGroup/LayerGroup.vue"),D.value=new y({target:"map",layers:[new g({name:"baseMap",source:new h}),new d({name:"group",layers:[new g({name:"food",source:new O({url:"https://api.tiles.mapbox.com/v4/mapbox.20110804-hoa-foodinsecurity-3month.json?securee&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",crossOrigin:"anonymous"})}),new g({name:"land",source:new O({url:"https://api.tiles.mapbox.com/v4/mapbox.world-borders-light.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",crossOrigin:"anonymous"})})]})],view:new f({projection:"EPSG:4326",center:[37.4057,8.81566],zoom:5})})})),(e,i)=>(v(),o(r,null,[x,t("ul",null,[t("li",null,[j,t("fieldset",k,[t("label",w,[p(t("input",{id:"visible0",class:"visible",type:"checkbox","onUpdate:modelValue":i[0]||(i[0]=e=>c(m).visible0=e),onChange:i[1]||(i[1]=e=>E("visible0","baseMap"))},null,544),[[b,c(m).visible0]]),C]),V,p(t("input",{class:"opacity",type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":i[2]||(i[2]=e=>c(m).visible0Opacity=e),onChange:i[3]||(i[3]=e=>X("visible0Opacity","baseMap"))},null,544),[[u,c(m).visible0Opacity]])])]),t("li",null,[J,t("fieldset",_,[t("label",z,[p(t("input",{id:"visible1",class:"visible",type:"checkbox","onUpdate:modelValue":i[4]||(i[4]=e=>c(m).visible1=e),onChange:i[5]||(i[5]=e=>E("visible1","group"))},null,544),[[b,c(m).visible1]]),I]),L,p(t("input",{class:"opacity",type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":i[6]||(i[6]=e=>c(m).visible1Opacity=e),onChange:i[7]||(i[7]=e=>X("visible1Opacity","group"))},null,544),[[u,c(m).visible1Opacity]])]),t("ul",null,[t("li",null,[M,t("fieldset",N,[t("label",Y,[p(t("input",{id:"visible10",class:"visible",type:"checkbox","onUpdate:modelValue":i[8]||(i[8]=e=>c(m).visible10=e),onChange:i[9]||(i[9]=e=>E("visible10","food"))},null,544),[[b,c(m).visible10]]),U]),G,p(t("input",{class:"opacity",type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":i[10]||(i[10]=e=>c(m).visible10Opacity=e),onChange:i[11]||(i[11]=e=>X("visible10Opacity","food"))},null,544),[[u,c(m).visible10Opacity]])])]),t("li",null,[F,t("fieldset",Q,[t("label",R,[p(t("input",{id:"visible11",class:"visible",type:"checkbox","onUpdate:modelValue":i[12]||(i[12]=e=>c(m).visible11=e),onChange:i[13]||(i[13]=e=>E("visible11","land"))},null,544),[[b,c(m).visible11]]),S]),T,p(t("input",{class:"opacity",type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":i[14]||(i[14]=e=>c(m).visible11Opacity=e),onChange:i[15]||(i[15]=e=>X("visible11Opacity","land"))},null,544),[[u,c(m).visible11Opacity]])])])])])])],64))},__scopeId:"data-v-9beefbc4"};export{E as default};
