import{A as _,b as o,C as f,o as P,e as y,f as t,t as C,F as g}from"./vendor.72e7bd49.js";import{T as w}from"./TileImage.0ebee0ae.js";import{X as j}from"./XYZ.0d304f3a.js";import{O as x}from"./Overlay.1f873668.js";import{M as b,V as h}from"./ol.bb58850a.js";import{_ as S}from"./index.cc1e433d.js";const k={class:"content"},B={setup(M){const u=_(),l=o(null),p=o(null),i=o(null),n=o(""),a=o(null);function m(){a.value=new x({element:p.value,autoPan:!0,autoPanAnimation:{duration:250}}),i.value=new b({target:l.value,layers:[new w({name:"defaultLayer",source:new j({url:"http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}"})})],view:new h({projection:"EPSG:4326",center:[113.1206,23.034996],zoom:12}),overlays:[a.value]}),v()}function v(){i.value.on("singleclick",c=>{const s=c.coordinate;n.value=s,a.value.setPosition(s)})}function d(){a.value.setPosition(void 0),n.value=""}return f(()=>{u.commit("setComponentPath","src/views/OpenLayers/Basic/pages/Popup/Popup.vue"),m()}),(c,s)=>(P(),y(g,null,[t("div",{id:"map",class:"map__x",ref:(e,r)=>{r.mapCom=e,l.value=e}},null,512),t("div",{ref:(e,r)=>{r.popupCom=e,p.value=e},class:"popup"},[t("span",{class:"icon-close",onClick:d},"\u2716"),t("div",k,C(n.value),1)],512)],64))}};var z=S(B,[["__scopeId","data-v-be9304da"]]);export{z as default};
