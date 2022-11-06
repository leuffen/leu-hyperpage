(()=>{"use strict";var __webpack_modules__={49:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{s(i.next(e))}catch(e){l(e)}}function a(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.KaCustomElement=void 0;const o=n(614),l=n(571),r=n(327),a=n(615);class s extends HTMLElement{constructor(e){super(e),this.__tpl=null,this.__isConnected=!1}get $tpl(){return this.__tpl}isConnected(){return this.isConnected}connected(e,t){return i(this,void 0,void 0,(function*(){console.warn("connected() method not overridden in",this)}))}connectedCallback(){return i(this,void 0,void 0,(function*(){let e=this.constructor.__callback;if(null===e||e.bind(this),null!==this.constructor.__tpl){let e=this.constructor.__tpl;e instanceof a.RemoteTemplate&&(e=yield e.load());let t=(0,o.ka_templatify)(e);!0===this.constructor.__options.shadowDom?this.attachShadow(this.constructor.__options.shadowDomOptions).appendChild(t):this.appendChild(t),this.__tpl=new l.KaTemplate(t)}if(null!==this.constructor.__options.waitEvent){let t=this.constructor.__options.waitEvent.split("@"),n=t[0],o=document;return 2===t.length&&(o=(0,r.ka_query_selector)(t[1])),void o.addEventListener(n,(t=>i(this,void 0,void 0,(function*(){e(this.$tpl,this),this.__isConnected=!0}))))}if(null===e)return yield this.connected(this.$tpl,this),void(this.__isConnected=!0);e(this.$tpl,this),this.__isConnected=!0}))}}t.KaCustomElement=s},333:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ka_html=void 0,t.ka_html=function(e){let t=document.createElement("template");return t.innerHTML=e,t}},615:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{s(i.next(e))}catch(e){l(e)}}function a(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.RemoteTemplate=void 0;const o=n(29);t.RemoteTemplate=class{constructor(e){this.url=e,this.tpl=null}load(){return i(this,void 0,void 0,(function*(){return null===this.tpl&&(this.tpl=yield(0,o.ka_load_html)(this.url)),this.tpl}))}}},29:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{s(i.next(e))}catch(e){l(e)}}function a(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ka_load_html=void 0,t.ka_load_html=function(e){return n(this,void 0,void 0,(function*(){let t=document.createElement("template"),n=yield fetch(e);if(!n.ok)throw console.error(`[loadHtml] failed to load '${e}'`),`[loadHtml] failed to load '${e}'`;let i=yield n.text();return t.innerHTML=i,t}))}},881:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{s(i.next(e))}catch(e){l(e)}}function a(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ka_apply=void 0;const o=n(316),l=n(945);t.ka_apply=function e(t,n,r=!1){"string"==typeof t&&(t=KaToolsV1.querySelector(t));let a={textcontent:"textContent",htmlcontent:"innerHTML",innerhtml:"innerHTML"};for(let e of t.getAttributeNames()){if(!e.startsWith("ka."))continue;let r=t.getAttribute(e),s=e.split(".")[1],c=e.split(".")[2];void 0===c&&(c=null);let u=function(e,t,n,l){void 0===e._ka_on&&(e._ka_on={}),void 0===e._ka_on[t]&&e.addEventListener(t,(n=>e._ka_on[t](n))),e._ka_on[t]=t=>i(this,void 0,void 0,(function*(){return l.$event=t,"function"==typeof n?n(t,e,l):(0,o.ka_eval)(n,l,e)}))};if("on"===s){let e=Object.assign({$scope:n},n);if(null!==c)u(t,c,r,e);else{let n=KaToolsV1.eval(r,e,t);for(let i in n)u(t,i,n[i],e)}continue}let d=null;switch(void 0!==r&&null!==typeof r&&""!==r&&(d=(0,o.ka_eval)(r,n,t)),s){case"ref":void 0===n.$ref&&(n.$ref={}),null!==d&&(n.$ref[d]=t),n.$ref.$last=t;break;case"classlist":if(null!==c){!0===d?t.classList.add(c):t.classList.remove(c);break}for(let e in d)!0===d[e]?t.classList.add(e):t.classList.remove(e);break;case"style":if(null!==c){let e=d;"number"==typeof e&&-1!==["left","top","height","width","bottom","right","line-height","font-size"].indexOf(c)&&(e+="px"),t.style[(0,l.ka_str_to_camel_case)(c)]=e;break}for(let e in d){let n=d[e];"number"==typeof n&&-1!==["left","top","height","width","bottom","right","line-height","font-size"].indexOf(e)&&(n+="px"),t.style[(0,l.ka_str_to_camel_case)(e)]=n}break;case"bindarray":if("default"===c)continue;if(void 0===d&&t.hasAttribute("ka.bind.default")&&(n=Object.assign({$scope:n},n),n=Object.assign(Object.assign({$scope:n},n),{__curVal:(0,o.ka_eval)(t.getAttribute("ka.bind.default"),n,t)}),(0,o.ka_eval)(`${r} = __curVal`,n,t),d=n.__curVal),!Array.isArray(d))return void console.error("kap:bindarr: Not an array!",d,t);-1===d.indexOf(t.value)?t.checked=!1:t.checked=!0,void 0===t._kap_bind&&(t.addEventListener("change",(e=>{let i=(0,o.ka_eval)(r,n,t);-1===i.indexOf(t.value)&&t.checked&&i.push(t.value),-1===i.indexOf(t.value)||t.checked||(i=i.filter((e=>e!==t.value))),n=Object.assign(Object.assign({$scope:n},n),{__curVal:i}),(0,o.ka_eval)(`${r} = __curVal`,n,t),n.$on&&n.$on.change&&n.$on.change(e)})),t._kap_bind=!0);break;case"bind":if("default"===c)continue;void 0===d&&t.hasAttribute("ka.bind.default")&&(n=Object.assign({$scope:n},n),n=Object.assign(Object.assign({$scope:n},n),{__curVal:(0,o.ka_eval)(t.getAttribute("ka.bind.default"),n,t)}),(0,o.ka_eval)(`${r} = __curVal`,n,t),d=n.__curVal),"checkbox"===t.type||"radio"===t.type?t.hasAttribute("value")?d===t.getAttribute("value")?t.checked=!0:t.checked=!1:t.checked=!0===d:t.value=void 0!==d?d:"",void 0===t._kap_bind&&(t.addEventListener("change",(e=>{let i=null;if("checkbox"===t.type||"radio"===t.type)if(t.hasAttribute("value")){if(!1===t.checked)return;i=t.getAttribute("value")}else i=t.checked;else i=t.value;n=Object.assign(Object.assign({$scope:n},n),{__curVal:i}),(0,o.ka_eval)(`${r} = __curVal`,n,t),n.$on&&n.$on.change&&n.$on.change(e)})),t.addEventListener("keyup",(e=>{n=Object.assign(Object.assign({$scope:n},n),{__curVal:t.value}),(0,o.ka_eval)(`${r} = __curVal`,n,t),n.$on&&n.$on.change&&n.$on.change(e)})),t._kap_bind=!0);break;case"options":let e=t.value;t.innerHTML="";for(let e in d)isNaN(e)?t.appendChild(new Option(d[e],e)):void 0!==d[e].text?t.appendChild(new Option(d[e].text,d[e].value)):t.appendChild(new Option(d[e],d[e]));null!==e&&(t.value=e);break;case"attr":if(null!==c){null===d||!1===d?t.removeAttribute(c):t.setAttribute(c,d);break}for(let e in d)null===d[e]||!1===d[e]?t.removeAttribute(e):t.setAttribute(e,d[e]);break;case"prop":if(null!==c){t[(0,l.ka_str_to_camel_case)(c)]=d;break}for(let e in d)t[(0,l.ka_str_to_camel_case)(e)]=d[e];break;default:void 0!==a[s]&&(s=a[s]),void 0===t[s]&&console.warn("apply(): trying to set undefined property ",s,"on element",t),t[s]=d}}if(r)for(let i of t.children)e(i,n,r)}},204:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ka_create_element=void 0,t.ka_create_element=function(e,t=null,n=null,i=null){let o=document.createElement(e);null===t&&(t={});for(let e in t)o.setAttribute(e,t[e]);if(Array.isArray(n))for(let e of n)o.appendChild(e);return null!==i&&i.appendChild(o),o}},986:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{s(i.next(e))}catch(e){l(e)}}function a(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ka_dom_ready=void 0,t.ka_dom_ready=function(){return n(this,void 0,void 0,(function*(){return new Promise((e=>{if("complete"===document.readyState||"interactive"===document.readyState)return e("loaded");document.addEventListener("DOMContentLoaded",(()=>e("DOMContentLoaded")))}))}))}},339:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ka_elwalk=void 0,t.ka_elwalk=function e(t,n,i=!1,o=!1){if(Array.isArray(t)&&(t.children=t),void 0!==t.children){if(o&&t instanceof HTMLElement&&!1===n(t))return!1;for(let o of t.children)!1!==n(o)&&i&&void 0!==o.children&&e(o,n,i)}}},316:(__unused_webpack_module,exports)=>{function ka_eval(stmt,__scope,e,__refs){stmt.endsWith(";")&&(stmt=stmt.slice(0,-1));const reserved=["var","null","let","const","function","class","in","of","for","true","false","await","$this"];let r="var $this = e;";for(let e in __scope)if(-1===reserved.indexOf(e)){if(-1!==e.indexOf("-"))throw console.error(`Invalid scope key '${e}': Cannot contain - in scope:`,__scope),`eval() failed: Invalid scope key: '${e}': Cannot contain minus char '-'`;r+=`var ${e} = __scope['${e}'];`}void 0===__scope.$scope&&(r+="var $scope = __scope;");try{return eval(r+"("+stmt+")")}catch(t){throw console.error("cannot eval() stmt: '"+stmt+"': "+t," on element ",e,t,"(context:",__scope,")"),"eval('"+stmt+"') failed: "+t}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ka_eval=void 0,exports.ka_eval=ka_eval},327:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ka_query_selector=void 0,t.ka_query_selector=function(e,t,n){void 0===n&&(n=`querySelector '${e}' not found`),null==t&&(t=document);let i=t.querySelectorAll(e);if(0===i.length)throw console.warn(n,"on parent: ",t),n;return i[0]}},547:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{s(i.next(e))}catch(e){l(e)}}function a(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ka_sleep=void 0,t.ka_sleep=function(e){return n(this,void 0,void 0,(function*(){return new Promise((t=>{window.setTimeout((()=>t()),e)}))}))}},945:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ka_str_to_camel_case=void 0,t.ka_str_to_camel_case=function(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,((e,t)=>0===t?e.toLowerCase():e.toUpperCase())).replace(/[^a-zA-Z0-9]+/g,"")}},387:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.customElement=void 0,t.customElement=function(e){return function(t){return console.debug("registering custom element",t,e),customElements.define(e,t),t}}},48:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{s(i.next(e))}catch(e){l(e)}}function a(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.KaHtmlElement=void 0;const o=n(571),l=n(614),r=n(333);class a extends HTMLElement{constructor(e=null){super(),this.shadowRootInit=e,this.addEventListener("load",(e=>console.log(e)))}connectedCallback(){return i(this,void 0,void 0,(function*(){let e;if("function"==typeof this.html){let t=this.html;e=yield t(this)}"string"==typeof e&&(e=(0,r.ka_html)(e));let t=this;if(null!==this.shadowRootInit&&(t=this.attachShadow(this.shadowRootInit)),null!==this.html){let n=(0,l.ka_templatify)(e);this.$tpl=new o.KaTemplate(n),t.appendChild(n)}this.connected()}))}disconnectedCallback(){return i(this,void 0,void 0,(function*(){this.disconnected()}))}}t.KaHtmlElement=a},583:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.ka_dom_ready=void 0,o(n(547),t),o(n(204),t);var l=n(986);Object.defineProperty(t,"ka_dom_ready",{enumerable:!0,get:function(){return l.ka_dom_ready}}),o(n(387),t),o(n(48),t),o(n(333),t)},571:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.KaTemplate=void 0;const i=n(316),o=n(339),l=n(881),r=n(49);t.KaTemplate=class{constructor(e){this.template=e,void 0===this.template.__kachilds&&(this.template.__kachilds=[]),void 0===this.template.__kasibling&&(this.template.__kasibling=this.template.nextElementSibling),this.__renderCount=0,this.$scope={}}_error(e){throw console.error(`[ka-template] ${e} on element`,this.template),`[ka-template] ${e} on element`+this.template}_appendTemplate(){let e=this.template.content,t=[];for(let n of e.children)n=n.cloneNode(!0),n._ka_maintained_by=this.template.getAttribute("_kaidx"),t.push(n),this.template.parentNode.insertBefore(n,this.template.__kasibling);this.template.__kachilds.push(t)}_removeLastChild(){if(0===this.template.__kachilds.length)return;let e=this.template.__kachilds[this.template.__kachilds.length-1];for(let t of e)this.template.parentElement.removeChild(t);this.template.__kachilds.length=this.template.__kachilds.length-1}_renderFor(e,t){let n=t.match(/^(let)?\s*(?<target>.+)\s+(?<type>of|in|repeat)\s+(?<select>.+)$/);null===n&&this._error(`Can't parse ka.for='${t}'`);let o=(0,i.ka_eval)(n.groups.select,e,this.template);"repeat"===n.groups.type&&("number"!=typeof o&&this._error(`Error ka.for='${t}': Selected val must be number in repeat loop`),o=new Array(o).fill(null));let l=0;for(let t in o){let i=Object.assign({$scope:e},e);i[n.groups.target]=t,"of"===n.groups.type&&(i[n.groups.target]=o[t]),this.template.__kachilds.length<l+1&&this._appendTemplate(),this._maintain(i,this.template.__kachilds[l],l),l++}for(let e=l;e<this.template.__kachilds.length;)this._removeLastChild()}_maintain(e,t,n=0){for(let i of t)i._ka_for_index=n,(0,o.ka_elwalk)(i,(t=>t instanceof HTMLTemplateElement?(new this.constructor(t).render(e),!1):(void 0===t._ka_maintained_by||t._ka_maintained_by===this.template.getAttribute("_kaidx"))&&((0,l.ka_apply)(t,e),!(t instanceof HTMLElement&&(t.hasAttribute("ka.stop")||t instanceof r.KaCustomElement))&&void 0)),!0,!0)}_renderIf(e,t){!0===(0,i.ka_eval)(t,e,this.template)?(0===this.template.__kachilds.length&&this._appendTemplate(),this._maintain(e,this.template.__kachilds[0])):this._removeLastChild()}dispose(){for(;this.template.__kachilds.length>0;)this._removeLastChild()}render(e=null){null===e&&(e=this.$scope),this.$scope=e,this.__renderCount++,this.template.hasAttribute("ka.for")?this._renderFor(e,this.template.getAttribute("ka.for")):this.template.hasAttribute("ka.if")?this._renderIf(e,this.template.getAttribute("ka.if")):(void 0===this.template._ka_active&&(this._appendTemplate(),this.template._ka_active=!0),this._maintain(e,this.template.__kachilds))}isFirstRender(){return 1===this.__renderCount}}},614:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ka_templatify=void 0;const i=n(327),o=n(339);window._ka_el_idx=0,t.ka_templatify=function e(t,n=!0){if("string"==typeof t&&(t=(0,i.ka_query_selector)(t)),!(t instanceof Node))throw console.error("[ka-templatify] Parameter 1 is not a html element: ",t),`[ka-templify] Parameter 1 is not a html element: ${t}`;if(n){let n=document.createElement("template");return n.setAttribute("_kaidx",(window._ka_el_idx++).toString()),n.innerHTML=t.innerHTML.replace(/\[\[(.*?)\]\]/g,((e,t)=>`<span ka.textContent="${t}"></span>`)),e(n.content,!1),n}t instanceof HTMLTemplateElement&&(t=t.content);let l=(e,t,n)=>{let i=document.createElement("template");i.setAttribute("_kaidx",(window._ka_el_idx++).toString());let o=e.cloneNode(!0);return o.removeAttribute(t),i.content.append(o),i.setAttribute(t,n),e.replaceWith(i),i};(0,o.ka_elwalk)(t,(t=>{if(!(t instanceof HTMLElement))return;let n=null;for(let i of t.getAttributeNames()){if("ka.for"===i){n=l(t,"ka.for",t.getAttribute("ka.for")),e(n,!1);break}if("ka.if"===i){n=l(t,"ka.if",t.getAttribute("ka.if")),e(n,!1);break}}}),!0,!1)}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.exports}var __webpack_exports__={};(()=>{var e=__webpack_require__(583),t=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{s(i.next(e))}catch(e){l(e)}}function a(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}s((i=i.apply(e,t||[])).next())}))};let n=class extends e.KaHtmlElement{constructor(){super(...arguments),this.html=()=>t(this,void 0,void 0,(function*(){let e=this.innerHTML;return this.innerHTML="",e}))}connected(){return t(this,void 0,void 0,(function*(){yield(0,e.ka_dom_ready)(),this.style.display="contents";let n={elements:[]};document.querySelectorAll("[data-leu-nav]").forEach((e=>{n.elements.push({el:e,title:e.getAttribute("data-leu-nav"),id:e.id,active:!1})})),window.addEventListener("scroll",(()=>t(this,void 0,void 0,(function*(){yield(0,e.ka_sleep)(100);let t=!1;for(let e of n.elements)e.active=!1,e.el.getBoundingClientRect().top+window.scrollY+10>window.scrollY&&!t&&(t=!0,e.active=!0);this.$tpl.render()}))),{passive:!0}),this.removeAttribute("hidden"),this.$tpl.render(n)}))}disconnected(){return t(this,void 0,void 0,(function*(){}))}};n=function(e,t,n,i){var o,l=arguments.length,r=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(l<3?o(r):l>3?o(t,n,r):o(t,n))||r);return l>3&&r&&Object.defineProperty(t,n,r),r}([(0,e.customElement)("leu-data-nav")],n);var i=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{s(i.next(e))}catch(e){l(e)}}function a(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}s((i=i.apply(e,t||[])).next())}))};void 0===window.LeuFormatConfig&&(window.LeuFormatConfig={h1:["fs-2","text-center","content-space-2"],h2:["fs-3","mt-5"],hr:["clearboth"],img:["float-start","w-lg-50","w-100","pt-2","pb-2","pe-4"]});let o=class extends e.KaHtmlElement{constructor(){super(...arguments),this.html=null}connected(){return i(this,void 0,void 0,(function*(){yield(0,e.ka_dom_ready)(),yield(0,e.ka_sleep)(1);let t=LeuFormatConfig;for(let e of this.getAttributeNames())t[e]=this.getAttribute(e).split(" ");for(let e in t)for(let n of Array.from(this.querySelectorAll(e))){let i=t[e];for(let e of i)n.classList.add(e)}let n=null,i=0;for(;!(this.children.length<i+1);){let e=this.children[i],t=e.querySelector("[container]");null===t?null!==n?n.append(e):i++:(n=t,i++)}}))}disconnected(){return i(this,void 0,void 0,(function*(){}))}};function l(e){let t={$:{},"@":{}},n=new RegExp("([@$])[^@^$]+","gi");return e.replace(n,((e,n)=>{if(-1===(e=e.substring(1)).indexOf("=")&&"@"===n)void 0===t[n].class&&(t[n].class=""),t[n].class+=" "+e,t[n].class=t[n].class.trim();else{let i=e.split("=",2);t[n][i[0]]=i[1].trim()}return""})),t}function r(e){return function(e,t="@"){let n={},i=new RegExp(`\\${t}[^${t}]+`,"gi");return e.replace(i,(e=>{if(-1===(e=e.substring(1)).indexOf("="))void 0===n.class&&(n.class=""),n.class+=" "+e,n.class=n.class.trim();else{let t=e.split("=",2);n[t[0]]=t[1]}return""})),n}(e,"@")}function a(t){let n=t.trim(),i="div";n=n.replace(/^[a-z0-9_\:\-]+/gi,(e=>(i=e,"")));let o=r(n);return(0,e.ka_create_element)(i,o)}function s(e){return null!=e}o=function(e,t,n,i){var o,l=arguments.length,r=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(l<3?o(r):l>3?o(t,n,r):o(t,n))||r);return l>3&&r&&Object.defineProperty(t,n,r),r}([(0,e.customElement)("leu-format")],o);var c,u,d,h,f,p,_,m=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{s(i.next(e))}catch(e){l(e)}}function a(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}s((i=i.apply(e,t||[])).next())}))},v=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)},b=function(e,t,n,i,o){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?o.call(e,n):o?o.value=n:t.set(e,n),n};let y={},k=class extends HTMLElement{constructor(){super(...arguments),c.set(this,null),u.set(this,null),d.set(this,null),h.set(this,null),f.set(this,null),p.set(this,new Map),_.set(this,Object.assign({},y))}createElementTree(e){let t=null,n=null;for(let i of e.split(">")){let e=null;if(i=i.replace(/§([a-z0-9_\-]+)/,((t,n)=>(e=n,""))),i.trim().startsWith("|")){let e=document.createTextNode(i.trim().substring(1));n.appendChild(e);break}let o=a(i);null!==e&&(v(this,p,"f")[e]=o),null===t?t=n=o:(n.appendChild(o),n=o)}return{start:t,leaf:n}}parseComment(t){v(this,u,"f").append(t.cloneNode(!0));let n=t.textContent.split("\n");for(let i of n){if(i=i.trim(),""===i)continue;let n=i.substring(1).trim();switch(i.substring(0,1)){case"/":let o=this.createElementTree(n);v(this,f,"f").appendChild(o.start),b(this,d,o.start,"f"),b(this,c,b(this,u,o.leaf,"f"),"f"),b(this,_,Object.assign({},y),"f");break;case"!":let a=n.trim().split(" ",1).join(),m=l(n),k=document.querySelector(`template[id='${a}']`);if(null===k){console.error("<template id='",a,"'> not found. Selected in ",t);break}let w=document.createElement("div");if(console.log(m),0===Object.keys(m["@"]).length)w.style.display="contents";else for(let e in m["@"])w.setAttribute(e,m["@"][e]);let g=k.content.firstElementChild.outerHTML.replace(/\$\{(.*?)(\?(.*?))?\}/gi,((e,t,n,i)=>void 0!==m.$[t]?m.$[t]:i));g=g.replace(/([a-z\-]+)--=/gi,((e,t)=>t+"=")),w.innerHTML=g,v(this,u,"f").append(w);for(let t of w.querySelectorAll("script")){let n={};t.hasAttribute("src")&&(n={src:t.getAttribute("src")});let i=(0,e.ka_create_element)("script",n);i.append(document.createTextNode(t.textContent)),t.parentElement.replaceChild(i,t)}let E=w.querySelectorAll("[attach]");for(let e of E)""===e.getAttribute("attach")?(b(this,u,e,"f"),b(this,c,e,"f")):v(this,p,"f")[e.getAttribute("attach")]=e;0===E.length&&console.warn("Template has no attach point",k,w);break;case">":let x=this.createElementTree(n);v(this,c,"f").appendChild(x.start),b(this,u,x.leaf,"f");break;case"~":let[C,...O]=n.split("=>"),j=r(O.join(":"));v(this,_,"f")[C]={attrs:j,line:i};break;case"?":let $=null,L=!1;if(-1!==n.indexOf("***")&&(L=!0,n=n.replace("***","")),n.startsWith("/"))$=v(this,h,"f");else if("§§"===n.trim())$=v(this,u,"f");else if(n.startsWith("§")){if($=v(this,p,"f")[n.substring(1)],!s($)){console.error("Cannot select reference: '"+i+"': Not found in block",t);break}}else if($=v(this,d,"f").querySelector(n),null===$){console.error(`Query Element '${n}': not found in `,t,"in",v(this,h,"f"));break}b(this,c,b(this,u,$,"f"),"f"),L&&b(this,f,$,"f");break;case"#":case"*":break;default:throw console.error("Cannot parse sequence: "+i+" of block",t),"Cannot parse sequence: "+i}}}applyAttMap(e){let t=document.createElement("div");t.append(e);for(let e in v(this,_,"f"))try{let n=t.querySelectorAll(e);for(let t of Array.from(n))for(let n in v(this,_,"f")[e].attrs)t.setAttribute(n,v(this,_,"f")[e].attrs[n])}catch(t){console.error("Cannot evaluate: '"+v(this,_,"f")[e].line+"' - ",t);continue}}connectedCallback(){return m(this,void 0,void 0,(function*(){yield(0,e.ka_sleep)(1),this.hasAttribute("default")||(yield(0,e.ka_sleep)(1)),b(this,_,Object.assign({},y),"f"),b(this,h,b(this,f,b(this,d,b(this,u,b(this,c,(0,e.ka_create_element)("div",{class:this.getAttribute("class")+" loading"},[]),"f"),"f"),"f"),"f"),"f"),this.parentElement.insertBefore(v(this,h,"f"),this.nextElementSibling);for(let e of Array.from(this.childNodes)){if(e instanceof Comment){this.parseComment(e);continue}let t=e.cloneNode(!0);e.remove(),this.applyAttMap(t),v(this,u,"f").append(t)}this.hasAttribute("default")&&(y=v(this,_,"f"),console.debug("Register default attribute map: ",y,"from",this)),yield(0,e.ka_sleep)(10),v(this,h,"f").classList.remove("loading"),this.classList.remove("loading"),this.style.display="none"}))}disconnectedCallback(){return m(this,void 0,void 0,(function*(){}))}};c=new WeakMap,u=new WeakMap,d=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,_=new WeakMap,k=function(e,t,n,i){var o,l=arguments.length,r=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(l<3?o(r):l>3?o(t,n,r):o(t,n))||r);return l>3&&r&&Object.defineProperty(t,n,r),r}([(0,e.customElement)("leu-content")],k);var w=__webpack_require__(327),g=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function r(e){try{s(i.next(e))}catch(e){l(e)}}function a(e){try{s(i.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}s((i=i.apply(e,t||[])).next())}))};let E=class extends HTMLElement{constructor(){super(),this._oldHash=null,this.progressBarE=null,this.content=null,this.titleE=null,this.nextE=null,this.backE=null,this.curDivE=null}_selectElement(e){let t=this.content.children[e];this.curDivE=t,this.progressBarE.ariaValueMin=0,this.progressBarE.ariaValueMax=this.content.childElementCount,this.progressBarE.ariaValueNow=e+1,this.progressBarE.style.width=(e+1)/this.content.childElementCount*100+"%",this.titleE.textContent=t.getAttribute("data-title"),t.classList.remove(T.config.switcher.hiddenClass),this.nextE.hidden=!1,e+1===this.content.childElementCount&&(this.nextE.hidden=!0),this.backE.hidden=!1,0===e&&(this.backE.hidden=!0)}_routeChange(){return g(this,void 0,void 0,(function*(){let e=window.location.hash.substring(1),t=!1;for(let n=0;n<this.content.children.length;n++){let i=this.content.children[n];console.log("scan",i),i.classList.add(T.config.switcher.hiddenClass),(i.id===e||this.hasAttribute("show-all"))&&(this._selectElement(n),t=!0)}!1===t&&this._selectElement(0)}))}next(t=null){return g(this,void 0,void 0,(function*(){if(yield(0,e.ka_sleep)(500),null!==this.curDivE.nextElementSibling)return history.pushState(null,null,"#"+this.curDivE.nextElementSibling.id),null!==t&&t.preventDefault(),console.log("next"),!1}))}backClickCb(e){return history.pushState(null,null,"#"+this.curDivE.previousElementSibling.id),e.preventDefault(),!1}_locationListener(){return g(this,void 0,void 0,(function*(){window.location.hash!==this._oldHash&&(this._oldHash=window.location.hash,yield this._routeChange(),this.hidden=!1)}))}connectedCallback(){return g(this,void 0,void 0,(function*(){yield(0,e.ka_dom_ready)(),this.progressBarE=(0,w.ka_query_selector)("[data-leu-role='progress-bar']",this,"data-leu-role='progress-bar'"),this.content=(0,w.ka_query_selector)("[data-leu-role='content']",this,"data-leu-role='progress-bar'"),this.titleE=(0,w.ka_query_selector)("[data-leu-role='title']",this,"data-leu-role='title'"),this.nextE=(0,w.ka_query_selector)("[data-leu-role='next-btn']",this,"data-leu-role='next-btn'"),this.backE=(0,w.ka_query_selector)("[data-leu-role='back-btn']",this,"data-leu-role='back-btn'"),this.backE.addEventListener("click",(e=>this.backClickCb(e))),this.nextE.addEventListener("click",(e=>this.next(e))),window.setInterval((()=>this._locationListener()),200),window.setInterval((()=>{this.style.height=this.curDivE.offsetHeight+"px"}),500),window.addEventListener("pushstate",(()=>{console.log("State pushed")}))}))}};E=function(e,t,n,i){var o,l=arguments.length,r=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(l<3?o(r):l>3?o(t,n,r):o(t,n))||r);return l>3&&r&&Object.defineProperty(t,n,r),r}([(0,e.customElement)("leu-switcher"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],E);var x,C=__webpack_require__(316),O=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)};let j=class extends HTMLElement{constructor(){super(...arguments),x.set(this,null)}evalIf(e=null){(0,C.ka_eval)(this.dataset.if,this,e,{}),this.classList.remove(Leu.config.switcher.hiddenClass)}connectedCallback(){this.style.display="contents",function(e,t,n,i,o){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===i?o.call(e,n):o?o.value=n:t.set(e,n)}(this,x,(e=>this.evalIf(e)),"f"),document.addEventListener("click",O(this,x,"f")),this.evalIf()}disconnectedCallback(){document.removeEventListener("click",O(this,x,"f"))}};x=new WeakMap,j=function(e,t,n,i){var o,l=arguments.length,r=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(l<3?o(r):l>3?o(t,n,r):o(t,n))||r);return l>3&&r&&Object.defineProperty(t,n,r),r}([(0,e.customElement)("leu-show")],j);let $={},L=class extends HTMLElement{connectedCallback(){return t=this,n=void 0,o=function*(){this.style.display="none",yield(0,e.ka_dom_ready)(),s(this.dataset.value)&&($[this.dataset.name]=this.dataset.value),s(this.dataset.increment)&&(s($[this.dataset.name])||($[this.dataset.name]=0),$[this.dataset.name]++);let t=new Comment(this.outerHTML);this.replaceWith(t)},new((i=void 0)||(i=Promise))((function(e,l){function r(e){try{s(o.next(e))}catch(e){l(e)}}function a(e){try{s(o.throw(e))}catch(e){l(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,a)}s((o=o.apply(t,n||[])).next())}));var t,n,i,o}};L=function(e,t,n,i){var o,l=arguments.length,r=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(l<3?o(r):l>3?o(t,n,r):o(t,n))||r);return l>3&&r&&Object.defineProperty(t,n,r),r}([(0,e.customElement)("leu-var")],L);let A=class extends HTMLElement{connectedCallback(){return t=this,n=void 0,o=function*(){this.style.display="contents",yield(0,e.ka_dom_ready)(),yield(0,e.ka_sleep)(1);let t=this.dataset.tplId,n=(0,w.ka_query_selector)("template[id='"+t+"']",null,"leu-use: template with id '"+t+"' not found"),i=Object.assign(Object.assign({},$),this.dataset);console.log(i);let o=n.content.firstElementChild.outerHTML.replace(/\$\{(.*?)(\?(.*?))?}/gi,((e,n,o,l)=>void 0!==i[n]?i[n]:(void 0===l&&console.error(`[<leu-use>] Data-Attribute missing: 'data-${n}' on <template id="${t}>" called by <leu-use></leu-use>`,this),l)));o=o.replace(/([a-z\-]+)--=(["'])/gi,((e,t,n)=>t+"="+n));let l=this.innerHTML,r=document.createElement("div");r.innerHTML=o;let a=r.querySelector("*[attach]");null!==a&&(a.innerHTML=l),r.childNodes.forEach((e=>this.parentElement.insertBefore(e,this.nextElementSibling)));let s=new Comment(this.outerHTML);this.replaceWith(s)},new((i=void 0)||(i=Promise))((function(e,l){function r(e){try{s(o.next(e))}catch(e){l(e)}}function a(e){try{s(o.throw(e))}catch(e){l(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,a)}s((o=o.apply(t,n||[])).next())}));var t,n,i,o}};A=function(e,t,n,i){var o,l=arguments.length,r=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(l<3?o(r):l>3?o(t,n,r):o(t,n))||r);return l>3&&r&&Object.defineProperty(t,n,r),r}([(0,e.customElement)("leu-use")],A);const T={config:{switcher:{hiddenClass:"visually-hidden"}},findParent:function e(t,n){return n instanceof t?n:null===n.parentElement?null:e(t,n.parentElement)},Switcher:E,SmoothScroll:class{constructor(t=86){window.addEventListener("hashchange",(n=>{return i=this,o=void 0,r=function*(){console.log(n),n.preventDefault(),yield(0,e.ka_sleep)(1);let i=document.getElementById(window.location.hash.slice(1));if(null===i)return;let o=i.getBoundingClientRect().top+window.scrollY-t;console.log("scrollto",i,window.location.hash,i.getBoundingClientRect().top,o),window.scrollTo({top:o,behavior:"smooth"})},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{s(r.next(e))}catch(e){t(e)}}function a(e){try{s(r.throw(e))}catch(e){t(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(n,a)}s((r=r.apply(i,o||[])).next())}));var i,o,l,r}))}}};void 0!==globalThis.Leu&&console.error("globalThis.Leu is already defined. Possibly double loaded library?"),globalThis.Leu=T})()})();
//# sourceMappingURL=index.js.map