import{q as a,s as e,B as s,k as l,H as t,C as o,b as r,J as n,L as u,i as c,F as i,g as v,p as m,o as p,t as d}from"./vendor.1e7a51da.js";import{T as b}from"./TileImage.6719d572.js";import{O as w}from"./OSM.b07225a9.js";import{S as g,L as f}from"./Vector.d80cd09d.js";import{D as h,c as j,a as M}from"./Draw.12b5e8b7.js";import{M as y,V as C,ba as S}from"./ol.bbcea228.js";import"./XYZ.4ee3e030.js";import"./LineString.9ae0adb3.js";import"./MultiPolygon.1b740cf8.js";a("data-v-0ba3cc5a");const x=c("div",{id:"map",class:"map__x"},null,-1),I=["value"];e();const q={setup(a){const e=s(),q=l("Hexagram"),D=t([{value:"Circle",label:"圆"},{value:"Square",label:"方形"},{value:"Rectangle",label:"矩形"},{value:"Hexagram",label:"六芒星"},{value:"None",label:"无"}]),H=l(null),L=new b({source:new w}),P=new g({wrapX:!1}),_=new f({source:P});const G=l(null);function O(){if(null!==G.value&&H.value.removeInteraction(G.value),"None"!==q.value){let a,e="Circle";"Square"===q.value?a=j(4):"Rectangle"===q.value?a=M():"Hexagram"===q.value&&(a=function(a,e){for(var s=a[0],l=a[1],t=s[0]-l[0],o=s[1]-l[1],r=Math.sqrt(t*t+o*o),n=Math.atan2(o,t),u=[],c=0;c<12;++c){var i=n+2*c*Math.PI/12,v=c%2==0?1:.58,m=r*v*Math.cos(i),p=r*v*Math.sin(i);u.push([s[0]+m,s[1]+p])}return u.push(u[0].slice()),e?e.setCoordinates([u]):e=new S([u]),e}),G.value=new h({source:P,type:e,geometryFunction:a}),H.value.addInteraction(G.value)}}return o((()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/DrawGraph/DrawGraph.vue"),H.value=new y({target:"map",layers:[L,_],view:new C({projection:"EPSG:4326",center:[113.1206,23.034996],zoom:10})}),O()})),(a,e)=>(p(),r(i,null,[x,n(c("select",{id:"type","onUpdate:modelValue":e[0]||(e[0]=a=>q.value=a),onChange:O},[(p(!0),r(i,null,v(m(D),(a=>(p(),r("option",{key:a.value,value:a.value},d(a.label),9,I)))),128))],544),[[u,q.value]])],64))},__scopeId:"data-v-0ba3cc5a"};export{q as default};
