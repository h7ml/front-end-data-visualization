import{p as t,b as e,C as o,d as n,A as r,f as a,g as i,F as s,o as c}from"./vendor.8623c498.js";import{T as p}from"./TileImage.6719d572.js";import{B as l}from"./BingMaps.f431ad9d.js";import{P as u,c8 as d,Z as h,ag as m,c9 as f,bX as _,ca as M,M as v,V as j,bY as g,cb as P}from"./ol.bbcea228.js";import"./net.5778e213.js";var y,T=(y=function(t,e){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}y(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),O=function(t){function e(e){var o=this,n=e||{},r=document.createElement("div");r.className=void 0!==n.className?n.className:"ol-mouse-position",(o=t.call(this,{element:r,render:n.render,target:n.target})||this).on,o.once,o.un,o.addChangeListener("projection",o.handleProjectionChanged_),n.coordinateFormat&&o.setCoordinateFormat(n.coordinateFormat),n.projection&&o.setProjection(n.projection);var a=!0,i="&#160;";return"undefinedHTML"in n?(void 0!==n.undefinedHTML&&(i=n.undefinedHTML),a=!!i):"placeholder"in n&&(!1===n.placeholder?a=!1:i=String(n.placeholder)),o.placeholder_=i,o.renderOnMouseOut_=a,o.renderedHTML_=r.innerHTML,o.mapProjection_=null,o.transform_=null,o}return T(e,t),e.prototype.handleProjectionChanged_=function(){this.transform_=null},e.prototype.getCoordinateFormat=function(){return this.get("coordinateFormat")},e.prototype.getProjection=function(){return this.get("projection")},e.prototype.handleMouseMove=function(t){var e=this.getMap();this.updateHTML_(e.getEventPixel(t))},e.prototype.handleMouseOut=function(t){this.updateHTML_(null)},e.prototype.setMap=function(e){if(t.prototype.setMap.call(this,e),e){var o=e.getViewport();this.listenerKeys.push(u(o,d.POINTERMOVE,this.handleMouseMove,this)),this.renderOnMouseOut_&&this.listenerKeys.push(u(o,d.POINTEROUT,this.handleMouseOut,this)),this.updateHTML_(null)}},e.prototype.setCoordinateFormat=function(t){this.set("coordinateFormat",t)},e.prototype.setProjection=function(t){this.set("projection",h(t))},e.prototype.updateHTML_=function(t){var e=this.placeholder_;if(t&&this.mapProjection_){if(!this.transform_){var o=this.getProjection();this.transform_=o?m(this.mapProjection_,o):f}var n=this.getMap().getCoordinateFromPixelInternal(t);if(n){var r=M();r&&(this.transform_=m(this.mapProjection_,r)),this.transform_(n,n);var a=this.getCoordinateFormat();e=a?a(n):n.toString()}}this.renderedHTML_&&e===this.renderedHTML_||(this.element.innerHTML=e,this.renderedHTML_=e)},e.prototype.render=function(t){var e=t.frameState;e?this.mapProjection_!=e.viewState.projection&&(this.mapProjection_=e.viewState.projection,this.transform_=null):this.mapProjection_=null},e}(_);t("data-v-a7b1494a");const L=i("div",{id:"map",class:"map__x"},null,-1);e();const w={setup(t){const e=o(),u=n(null),d=n(null);return r((()=>{e.commit("setComponentPath","src/views/OpenLayers/Basic/pages/MousePosition/MousePosition.vue"),d.value=new v({target:"map",layers:[new p({source:new l({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})})],view:new j({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:6}),controls:g().extend([new O({coordinateFormat:P(4),projection:"EPSG:4326",target:u.value})])})})),(t,e)=>(c(),a(s,null,[L,i("div",{ref:(t,e)=>{e.mousePositionTxt=t,u.value=t},class:"mouse__position__txt"},null,512)],64))},__scopeId:"data-v-a7b1494a"};export{w as default};