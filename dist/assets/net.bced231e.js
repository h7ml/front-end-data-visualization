import{j as f}from"./ol.088d4eef.js";var c=function(){var o=function(n,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])},o(n,t)};return function(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");o(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}();function p(o,n,t,e){var r=document.createElement("script"),i="olc_"+f(n);function s(){delete window[i],r.parentNode.removeChild(r)}r.async=!0,r.src=o+(o.indexOf("?")==-1?"?":"&")+(e||"callback")+"="+i;var a=setTimeout(function(){s(),t&&t()},1e4);window[i]=function(u){clearTimeout(a),s(),n(u)},document.getElementsByTagName("head")[0].appendChild(r)}(function(o){c(n,o);function n(t){var e=this,r="Unexpected response status: "+t.status;return e=o.call(this,r)||this,e.name="ResponseError",e.response=t,e}return n})(Error);(function(o){c(n,o);function n(t){var e=o.call(this,"Failed to issue request")||this;return e.name="ClientError",e.client=t,e}return n})(Error);export{p as j};