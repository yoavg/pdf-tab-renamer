/*! For license information please see background.js.LICENSE.txt */
(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(r){h=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new D(n||[]);return c(i,"_invoke",{value:T(t,r,a)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=s;var d="suspendedStart",m="suspendedYield",g="executing",y="completed",v={};function w(){}function x(){}function b(){}var L={};h(L,u,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(k([])));S&&S!==o&&i.call(S,u)&&(L=S);var P=b.prototype=w.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function F(e,r){function n(o,c,a,u){var l=p(e[o],e,c);if("throw"!==l.type){var f=l.arg,h=f.value;return h&&"object"==t(h)&&i.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(l.arg)}var o;c(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function T(t,e,n){var o=d;return function(i,c){if(o===g)throw Error("Generator is already running");if(o===y){if("throw"===i)throw c;return{value:r,done:!0}}for(n.method=i,n.arg=c;;){var a=n.delegate;if(a){var u=_(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var l=p(t,e,n);if("normal"===l.type){if(o=n.done?y:m,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function _(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var c=i.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function k(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return c.next=c}}throw new TypeError(t(e)+" is not iterable")}return x.prototype=b,c(P,"constructor",{value:b,configurable:!0}),c(b,"constructor",{value:x,configurable:!0}),x.displayName=h(b,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,h(t,f,"GeneratorFunction")),t.prototype=Object.create(P),t},n.awrap=function(t){return{__await:t}},j(F.prototype),h(F.prototype,l,(function(){return this})),n.AsyncIterator=F,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var c=new F(s(t,e,r,o),i);return n.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(P),h(P,f,"Generator"),h(P,u,(function(){return this})),h(P,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=k,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var u=i.call(c,"catchLoc"),l=i.call(c,"finallyLoc");if(u&&l){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function n(){var t;return t=e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"scholar.google.com"===(n=new URL(r.url).hostname)&&r.title.includes("View article")&&chrome.scripting.executeScript({target:{tabId:r.id},func:function(){document.title="[Scholar] ".concat(document.querySelector('meta[property="og:title"]').getAttribute("content"))}}),"arxiv.org"===n&&r.url.includes("/pdf/")&&chrome.scripting.executeScript({target:{tabId:r.id},func:function(t){""===document.title&&fetch(t.url.replace("/pdf/","/abs/")).then((function(t){return t.text().then((function(t){setTimeout((function(){document.title="[PDF] ".concat(t.match(/<title>(.*)<\/title>/)[1])}),1e3)}))}))},args:[r]}),"aclanthology.org"===n&&r.url.endsWith(".pdf")&&chrome.scripting.executeScript({target:{tabId:r.id},func:function(t){""===document.title&&fetch(t.url.replace(".pdf","/")).then((function(t){return t.text().then((function(t){setTimeout((function(){document.title="[PDF] ".concat(t.match(/<title>(.*)<\/title>/)[1])}),1e3)}))}))},args:[r]}),"proceedings.mlr.press"===n&&r.url.endsWith(".pdf")&&chrome.scripting.executeScript({target:{tabId:r.id},func:function(t){if(""===document.title){var e=t.url.split("/").slice(0,-1).join("/")+".html";fetch(e).then((function(t){return t.text().then((function(t){setTimeout((function(){document.title="[PDF] ".concat(t.match(/<title>(.*)<\/title>/)[1])}),1e3)}))}))}},args:[r]}),"www.jmlr.org"===n&&r.url.endsWith(".pdf")&&chrome.scripting.executeScript({target:{tabId:r.id},func:function(t){if(""===document.title){var e=t.url.split("/").slice(0,-1).join("/").replace("/volume","/v")+".html";fetch(e).then((function(t){return t.text().then((function(t){setTimeout((function(){document.title="[PDF] ".concat(t.match(/<title>(.*)<\/title>/)[1])}),1e3)}))}))}},args:[r]}),"proceedings.neurips.cc"!==n&&"proceedings.nips.cc"!==n||!r.url.endsWith(".pdf")||chrome.scripting.executeScript({target:{tabId:r.id},func:function(t){if(""===document.title){var e=t.url.replace("/file/","/hash/").replace("-Paper","-Abstract").replace(".pdf",".html");fetch(e).then((function(t){return t.text().then((function(t){setTimeout((function(){document.title="[PDF] ".concat(t.match(/<title>(.*)<\/title>/)[1])}),1e3)}))}))}},args:[r]}),"openreview.net"===n&&r.url.includes("/pdf?")&&chrome.scripting.executeScript({target:{tabId:r.id},func:function(t){if(""===document.title){var e=t.url.replace("/pdf?","/forum?");fetch(e).then((function(t){return t.text().then((function(t){setTimeout((function(){document.title="[PDF] ".concat(t.match(/<title>(.*)<\/title>/)[1])}),1e3)}))}))}},args:[r]}),"openaccess.thecvf.com"===n&&r.url.endsWith(".pdf")&&chrome.scripting.executeScript({target:{tabId:r.id},func:function(t){if(""===document.title){var e=t.url.replace("/papers/","/html/").replace(".pdf",".html");fetch(e).then((function(t){return t.text().then((function(t){setTimeout((function(){document.title="[PDF] ".concat(t.match(/<meta name="citation_title" content="(.*)">/)[1])}),1e3)}))}))}},args:[r]}),"ieeexplore.ieee.org"===n&&r.url.includes("/stamp/stamp.jsp")&&chrome.scripting.executeScript({target:{tabId:r.id},func:function(t){if("IEEE Xplore Full-Text PDF:"===document.title){var e=t.url.match(/arnumber=([^&]+)/)[1],r="https://ieeexplore.ieee.org/document/".concat(e);fetch(r).then((function(t){return t.text().then((function(t){setTimeout((function(){document.title="[PDF] ".concat(t.match(/<title>(.*)<\/title>/)[1])}),1e3)}))}))}},args:[r]}),"www.biorxiv.org"===n&&r.url.endsWith(".pdf")&&chrome.scripting.executeScript({target:{tabId:r.id},func:function(t){if(console.log(document.title),""===document.title){var e=t.url.replace(".full.pdf","").replace(".pdf","");fetch(e).then((function(t){return t.text().then((function(t){setTimeout((function(){document.title="[PDF] ".concat(t.match(/<title>(.*)<\/title>/)[1])}),1e3)}))}))}},args:[r]});case 12:case"end":return t.stop()}}),t)})),n=function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}a(void 0)}))},n.apply(this,arguments)}chrome.tabs.onUpdated.addListener((function(t,e,r){"complete"===e.status&&r.url&&function(t){n.apply(this,arguments)}(r)}))})();