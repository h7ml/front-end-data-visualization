import{_ as u,ag as a,d as p,ah as S,ai as T,B as _}from"./ol.bb58850a.js";import{e as v,c as O,f as g,a as E}from"./TileImage.0ebee0ae.js";import{j}from"./net.a0d7cd86.js";var y=globalThis&&globalThis.__extends||function(){var o=function(n,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])},o(n,e)};return function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");o(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}}(),x=function(o){y(n,o);function n(e){var t=o.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,imageSmoothing:e.imageSmoothing,projection:u("EPSG:3857"),reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:a.LOADING,tileLoadFunction:e.tileLoadFunction,wrapX:e.wrapX!==void 0?e.wrapX:!0,transition:e.transition,zDirection:e.zDirection})||this;if(t.tileJSON_=null,t.tileSize_=e.tileSize,e.url)if(e.jsonp)j(e.url,t.handleTileJSONResponse.bind(t),t.handleTileJSONError.bind(t));else{var r=new XMLHttpRequest;r.addEventListener("load",t.onXHRLoad_.bind(t)),r.addEventListener("error",t.onXHRError_.bind(t)),r.open("GET",e.url),r.send()}else e.tileJSON?t.handleTileJSONResponse(e.tileJSON):p(!1,51);return t}return n.prototype.onXHRLoad_=function(e){var t=e.target;if(!t.status||t.status>=200&&t.status<300){var r=void 0;try{r=JSON.parse(t.responseText)}catch{this.handleTileJSONError();return}this.handleTileJSONResponse(r)}else this.handleTileJSONError()},n.prototype.onXHRError_=function(e){this.handleTileJSONError()},n.prototype.getTileJSON=function(){return this.tileJSON_},n.prototype.handleTileJSONResponse=function(e){var t=u("EPSG:4326"),r=this.getProjection(),i;if(e.bounds!==void 0){var c=S(t,r);i=T(e.bounds,c)}var s=v(r),d=e.minzoom||0,h=e.maxzoom||22,l=O({extent:s,maxZoom:h,minZoom:d,tileSize:this.tileSize_});if(this.tileGrid=l,this.tileUrlFunction=g(e.tiles,l),e.attribution!==void 0&&!this.getAttributions()){var f=i!==void 0?i:s;this.setAttributions(function(m){return _(f,m.extent)?[e.attribution]:null})}this.tileJSON_=e,this.setState(a.READY)},n.prototype.handleTileJSONError=function(){this.setState(a.ERROR)},n}(E),J=x;export{J as T};
