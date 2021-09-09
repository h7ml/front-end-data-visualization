import{q as e,s as t,B as s,k as n,C as l,b as a,o}from"./vendor.63933c18.js";import{T as r}from"./TileImage.b588114f.js";import{B as c}from"./BingMaps.0892d414.js";import{E as i,bW as u,bZ as m,b_ as p,b$ as d,P as b,bX as _,M as v,V as h,bY as f}from"./ol.65b25873.js";import"./net.d027271a.js";var y,N=(y=function(e,t){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function s(){this.constructor=e}y(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}),C=["fullscreenchange","webkitfullscreenchange","MSFullscreenChange"],F="enterfullscreen",g="leavefullscreen";function w(){var e=document.body;return!!(e.webkitRequestFullscreen||e.msRequestFullscreen&&document.msFullscreenEnabled||e.requestFullscreen&&document.fullscreenEnabled)}function E(){return!!(document.webkitIsFullScreen||document.msFullscreenElement||document.fullscreenElement)}function k(e){e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}var x=function(e){function t(t){var s=this,n=t||{};(s=e.call(this,{element:document.createElement("div"),target:n.target})||this).on,s.once,s.un,s.cssClassName_=void 0!==n.className?n.className:"ol-full-screen",s.activeClassName_=void 0!==n.activeClassName?n.activeClassName.split(" "):[s.cssClassName_+"-true"],s.inactiveClassName_=void 0!==n.inactiveClassName?n.inactiveClassName.split(" "):[s.cssClassName_+"-false"];var l=void 0!==n.label?n.label:"⤢";s.labelNode_="string"==typeof l?document.createTextNode(l):l;var a=void 0!==n.labelActive?n.labelActive:"×";s.labelActiveNode_="string"==typeof a?document.createTextNode(a):a,s.button_=document.createElement("button");var o=n.tipLabel?n.tipLabel:"Toggle full-screen";s.setClassName_(s.button_,E()),s.button_.setAttribute("type","button"),s.button_.title=o,s.button_.appendChild(s.labelNode_),s.button_.addEventListener(i.CLICK,s.handleClick_.bind(s),!1);var r=s.cssClassName_+" "+u+" "+m+" "+(w()?"":p),c=s.element;return c.className=r,c.appendChild(s.button_),s.keys_=void 0!==n.keys&&n.keys,s.source_=n.source,s}return N(t,e),t.prototype.handleClick_=function(e){e.preventDefault(),this.handleFullScreen_()},t.prototype.handleFullScreen_=function(){if(w()){var e=this.getMap();if(e)if(E())document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen();else{var t=void 0;t=this.source_?"string"==typeof this.source_?document.getElementById(this.source_):this.source_:e.getTargetElement(),this.keys_?function(e){e.webkitRequestFullscreen?e.webkitRequestFullscreen():k(e)}(t):k(t)}}},t.prototype.handleFullScreenChange_=function(){var e=this.getMap();E()?(this.setClassName_(this.button_,!0),d(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(F)):(this.setClassName_(this.button_,!1),d(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(g)),e&&e.updateSize()},t.prototype.setClassName_=function(e,t){var s,n,l,a=this.activeClassName_,o=this.inactiveClassName_,r=t?a:o;(s=e.classList).remove.apply(s,a),(n=e.classList).remove.apply(n,o),(l=e.classList).add.apply(l,r)},t.prototype.setMap=function(t){if(e.prototype.setMap.call(this,t),t)for(var s=0,n=C.length;s<n;++s)this.listenerKeys.push(b(document,C[s],this.handleFullScreenChange_,this))},t}(_);e("data-v-1b4c2b80");const S={id:"map",class:"map__x"};t();const q={setup(e){const t=s(),i=n(null);return l((()=>{t.commit("setComponentPath","src/views/OpenLayers/Basic/pages/FullScreen/FullScreen.vue"),i.value=new v({target:"map",layers:[new r({source:new c({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})})],view:new h({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:12}),controls:f().extend([new x])})})),(e,t)=>(o(),a("div",S))},__scopeId:"data-v-1b4c2b80"};export{q as default};
