var xw=Object.defineProperty;var $w=(n,e,t)=>e in n?xw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var me=(n,e,t)=>($w(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function De(){}function wo(n,e){for(const t in e)n[t]=e[t];return n}function cg(n){return n()}function Jd(){return Object.create(null)}function Fn(n){n.forEach(cg)}function Ch(n){return typeof n=="function"}function Yt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function qw(n){return Object.keys(n).length===0}function Cc(n,...e){if(n==null){for(const i of e)i(void 0);return De}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ja(n,e,t){n.$$.on_destroy.push(Cc(e,t))}function or(n,e,t,i){if(n){const s=ug(n,e,t,i);return n[0](s)}}function ug(n,e,t,i){return n[1]&&i?wo(t.ctx.slice(),n[1](i(e))):t.ctx}function ar(n,e,t,i){if(n[2]&&i){const s=n[2](i(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let l=0;l<o;l+=1)r[l]=e.dirty[l]|s[l];return r}return e.dirty|s}return e.dirty}function lr(n,e,t,i,s,r){if(s){const o=ug(e,t,i,r);n.p(o,s)}}function cr(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function Zd(n){return n??""}function zl(n,e,t){return n.set(t),e}function _(n,e){n.appendChild(e)}function $(n,e,t){n.insertBefore(e,t||null)}function x(n){n.parentNode&&n.parentNode.removeChild(n)}function bt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function S(n){return document.createElement(n)}function G(n){return document.createTextNode(n)}function O(){return G(" ")}function Un(){return G("")}function he(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function B(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function gt(n){return n===""?null:+n}function Bw(n){return Array.from(n.childNodes)}function Z(n,e){e=""+e,n.data!==e&&(n.data=e)}function de(n,e){n.value=e??""}function vs(n,e,t){for(let i=0;i<n.options.length;i+=1){const s=n.options[i];if(s.__value===e){s.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function yi(n,e){for(let t=0;t<n.options.length;t+=1){const i=n.options[t];i.selected=~e.indexOf(i.__value)}}function Kl(n){const e=n.querySelector(":checked");return e&&e.__value}function Ko(n){return[].map.call(n.querySelectorAll(":checked"),e=>e.__value)}function Ww(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}let Ca;function _a(n){Ca=n}function Ph(){if(!Ca)throw new Error("Function called outside component initialization");return Ca}function hg(){const n=Ph();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=Ww(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}function jw(n,e){return Ph().$$.context.set(n,e),e}function Gw(n){return Ph().$$.context.get(n)}const Ur=[],ef=[];let eo=[];const tf=[],Hw=Promise.resolve();let Cu=!1;function zw(){Cu||(Cu=!0,Hw.then(dg))}function Mn(n){eo.push(n)}const iu=new Set;let Lr=0;function dg(){if(Lr!==0)return;const n=Ca;do{try{for(;Lr<Ur.length;){const e=Ur[Lr];Lr++,_a(e),Kw(e.$$)}}catch(e){throw Ur.length=0,Lr=0,e}for(_a(null),Ur.length=0,Lr=0;ef.length;)ef.pop()();for(let e=0;e<eo.length;e+=1){const t=eo[e];iu.has(t)||(iu.add(t),t())}eo.length=0}while(Ur.length);for(;tf.length;)tf.pop()();Cu=!1,iu.clear(),_a(n)}function Kw(n){if(n.fragment!==null){n.update(),Fn(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Mn)}}function Qw(n){const e=[],t=[];eo.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),eo=e}const Al=new Set;let Bs;function ln(){Bs={r:0,c:[],p:Bs}}function cn(){Bs.r||Fn(Bs.c),Bs=Bs.p}function j(n,e){n&&n.i&&(Al.delete(n),n.i(e))}function K(n,e,t,i){if(n&&n.o){if(Al.has(n))return;Al.add(n),Bs.c.push(()=>{Al.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}function Ce(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function we(n){n&&n.c()}function ge(n,e,t){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),Mn(()=>{const r=n.$$.on_mount.map(cg).filter(Ch);n.$$.on_destroy?n.$$.on_destroy.push(...r):Fn(r),n.$$.on_mount=[]}),s.forEach(Mn)}function _e(n,e){const t=n.$$;t.fragment!==null&&(Qw(t.after_update),Fn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Xw(n,e){n.$$.dirty[0]===-1&&(Ur.push(n),zw(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function pn(n,e,t,i,s,r,o=null,l=[-1]){const c=Ca;_a(n);const u=n.$$={fragment:null,ctx:[],props:r,update:De,not_equal:s,bound:Jd(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Jd(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let d=!1;if(u.ctx=t?t(n,e.props||{},(f,g,...T)=>{const R=T.length?T[0]:g;return u.ctx&&s(u.ctx[f],u.ctx[f]=R)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](R),d&&Xw(n,f)),g}):[],u.update(),d=!0,Fn(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){const f=Bw(e.target);u.fragment&&u.fragment.l(f),f.forEach(x)}else u.fragment&&u.fragment.c();e.intro&&j(n.$$.fragment),ge(n,e.target,e.anchor),dg()}_a(c)}class mn{constructor(){me(this,"$$");me(this,"$$set")}$destroy(){_e(this,1),this.$destroy=De}$on(e,t){if(!Ch(t))return De;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!qw(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Yw="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Yw);const Vr=[];function ya(n,e=De){let t;const i=new Set;function s(l){if(Yt(n,l)&&(n=l,t)){const c=!Vr.length;for(const u of i)u[1](),Vr.push(u,n);if(c){for(let u=0;u<Vr.length;u+=2)Vr[u][0](Vr[u+1]);Vr.length=0}}}function r(l){s(l(n))}function o(l,c=De){const u=[l,c];return i.add(u),i.size===1&&(t=e(s,r)||De),l(n),()=>{i.delete(u),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}var nf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(n,e){if(!n)throw To(e)},To=function(n){return new Error("Firebase Database ("+fg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Jw=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Dh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=r>>2,f=(r&3)<<4|l>>4;let g=(l&15)<<2|u>>6,T=u&63;c||(T=64,o||(g=64)),i.push(t[d],t[f],t[g],t[T])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pg(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Jw(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||u==null||f==null)throw new Zw;const g=r<<2|l>>4;if(i.push(g),u!==64){const T=l<<4&240|u>>2;if(i.push(T),f!==64){const R=u<<6&192|f;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mg=function(n){const e=pg(n);return Dh.encodeByteArray(e,!0)},Ql=function(n){return mg(n).replace(/\./g,"")},Xl=function(n){try{return Dh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(n){return gg(void 0,n)}function gg(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!tT(t)||(n[t]=gg(n[t],e[t]));return n}function tT(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=()=>nT().__FIREBASE_DEFAULTS__,sT=()=>{if(typeof process>"u"||typeof nf>"u")return;const n=nf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xl(n[1]);return e&&JSON.parse(e)},Pc=()=>{try{return iT()||sT()||rT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_g=n=>{var e,t;return(t=(e=Pc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},oT=n=>{const e=_g(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},yg=()=>{var n;return(n=Pc())===null||n===void 0?void 0:n.config},vg=n=>{var e;return(e=Pc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ql(JSON.stringify(t)),Ql(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function lT(){var n;const e=(n=Pc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Tg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cT(){const n=Rt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Eg(){return fg.NODE_ADMIN===!0}function uT(){return!lT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ig(){try{return typeof indexedDB=="object"}catch{return!1}}function bg(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function hT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="FirebaseError";class xn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=dT,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ur.prototype.create)}}class ur{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?fT(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new xn(s,l,i)}}function fT(n,e){return n.replace(pT,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const pT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n){return JSON.parse(n)}function kt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Pa(Xl(r[0])||""),t=Pa(Xl(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},mT=function(n){const e=kg(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},gT=function(n){const e=kg(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ao(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Pu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yl(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Da(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(sf(r)&&sf(o)){if(!Da(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function sf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)i[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const g=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=l^r&(o^l),d=1518500249):(u=r^o^l,d=1859775393):f<60?(u=r&o|l&(r|o),d=2400959708):(u=r^o^l,d=3395469782);const g=(s<<5|s>>>27)+u+c+d+i[f]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function yT(n,e){const t=new vT(n,e);return t.subscribe.bind(t)}class vT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");wT(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=su),s.error===void 0&&(s.error=su),s.complete===void 0&&(s.complete=su);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function su(){}function TT(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,H(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dc=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=1e3,bT=2,kT=4*60*60*1e3,ST=.5;function rf(n,e=IT,t=bT){const i=e*Math.pow(t,n),s=Math.round(ST*i*(Math.random()-.5)*2);return Math.min(kT,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n){return n&&n._delegate?n._delegate:n}class fn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Nh;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CT(e))try{this.getOrInitializeService({instanceIdentifier:Ls})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ls){return this.instances.has(e)}getOptions(e=Ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:RT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ls){return this.component?this.component.multipleInstances?e:Ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RT(n){return n===Ls?void 0:n}function CT(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new AT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(fe||(fe={}));const DT={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},NT=fe.INFO,OT={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},MT=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=OT[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ga{constructor(e){this.name=e,this._logLevel=NT,this._logHandler=MT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const LT=(n,e)=>e.some(t=>n instanceof t);let of,af;function VT(){return of||(of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FT(){return af||(af=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sg=new WeakMap,Du=new WeakMap,Ag=new WeakMap,ru=new WeakMap,Mh=new WeakMap;function UT(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(fs(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Sg.set(t,n)}).catch(()=>{}),Mh.set(e,n),e}function xT(n){if(Du.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Du.set(n,e)}let Nu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Du.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ag.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $T(n){Nu=n(Nu)}function qT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ou(this),e,...t);return Ag.set(i,e.sort?e.sort():[e]),fs(i)}:FT().includes(n)?function(...e){return n.apply(ou(this),e),fs(Sg.get(this))}:function(...e){return fs(n.apply(ou(this),e))}}function BT(n){return typeof n=="function"?qT(n):(n instanceof IDBTransaction&&xT(n),LT(n,VT())?new Proxy(n,Nu):n)}function fs(n){if(n instanceof IDBRequest)return UT(n);if(ru.has(n))return ru.get(n);const e=BT(n);return e!==n&&(ru.set(n,e),Mh.set(e,n)),e}const ou=n=>Mh.get(n);function Rg(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),l=fs(o);return i&&o.addEventListener("upgradeneeded",c=>{i(fs(o.result),c.oldVersion,c.newVersion,fs(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const WT=["get","getKey","getAll","getAllKeys","count"],jT=["put","add","delete","clear"],au=new Map;function lf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(au.get(e))return au.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=jT.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||WT.includes(t)))return;const r=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return au.set(e,r),r}$T(n=>({...n,get:(e,t,i)=>lf(e,t)||n.get(e,t,i),has:(e,t)=>!!lf(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(HT(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function HT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ou="@firebase/app",cf="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Ga("@firebase/app"),zT="@firebase/app-compat",KT="@firebase/analytics-compat",QT="@firebase/analytics",XT="@firebase/app-check-compat",YT="@firebase/app-check",JT="@firebase/auth",ZT="@firebase/auth-compat",eE="@firebase/database",tE="@firebase/database-compat",nE="@firebase/functions",iE="@firebase/functions-compat",sE="@firebase/installations",rE="@firebase/installations-compat",oE="@firebase/messaging",aE="@firebase/messaging-compat",lE="@firebase/performance",cE="@firebase/performance-compat",uE="@firebase/remote-config",hE="@firebase/remote-config-compat",dE="@firebase/storage",fE="@firebase/storage-compat",pE="@firebase/firestore",mE="@firebase/vertexai-preview",gE="@firebase/firestore-compat",_E="firebase",yE="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="[DEFAULT]",vE={[Ou]:"fire-core",[zT]:"fire-core-compat",[QT]:"fire-analytics",[KT]:"fire-analytics-compat",[YT]:"fire-app-check",[XT]:"fire-app-check-compat",[JT]:"fire-auth",[ZT]:"fire-auth-compat",[eE]:"fire-rtdb",[tE]:"fire-rtdb-compat",[nE]:"fire-fn",[iE]:"fire-fn-compat",[sE]:"fire-iid",[rE]:"fire-iid-compat",[oE]:"fire-fcm",[aE]:"fire-fcm-compat",[lE]:"fire-perf",[cE]:"fire-perf-compat",[uE]:"fire-rc",[hE]:"fire-rc-compat",[dE]:"fire-gcs",[fE]:"fire-gcs-compat",[pE]:"fire-fst",[gE]:"fire-fst-compat",[mE]:"fire-vertex","fire-js":"fire-js",[_E]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Map,wE=new Map,Lu=new Map;function uf(n,e){try{n.container.addComponent(e)}catch(t){Qs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ln(n){const e=n.name;if(Lu.has(e))return Qs.debug(`There were multiple attempts to register component ${e}.`),!1;Lu.set(e,n);for(const t of Jl.values())uf(t,n);for(const t of wE.values())uf(t,n);return!0}function hr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Li(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ps=new ur("app","Firebase",TE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ps.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=yE;function Cg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Mu,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ps.create("bad-app-name",{appName:String(s)});if(t||(t=yg()),!t)throw ps.create("no-options");const r=Jl.get(s);if(r){if(Da(t,r.options)&&Da(i,r.config))return r;throw ps.create("duplicate-app",{appName:s})}const o=new PT(s);for(const c of Lu.values())o.addComponent(c);const l=new EE(t,i,o);return Jl.set(s,l),l}function Lh(n=Mu){const e=Jl.get(n);if(!e&&n===Mu&&yg())return Cg();if(!e)throw ps.create("no-app",{appName:n});return e}function Bt(n,e,t){var i;let s=(i=vE[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qs.warn(l.join(" "));return}Ln(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="firebase-heartbeat-database",bE=1,Na="firebase-heartbeat-store";let lu=null;function Pg(){return lu||(lu=Rg(IE,bE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Na)}catch(t){console.warn(t)}}}}).catch(n=>{throw ps.create("idb-open",{originalErrorMessage:n.message})})),lu}async function kE(n){try{const t=(await Pg()).transaction(Na),i=await t.objectStore(Na).get(Dg(n));return await t.done,i}catch(e){if(e instanceof xn)Qs.warn(e.message);else{const t=ps.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qs.warn(t.message)}}}async function hf(n,e){try{const i=(await Pg()).transaction(Na,"readwrite");await i.objectStore(Na).put(e,Dg(n)),await i.done}catch(t){if(t instanceof xn)Qs.warn(t.message);else{const i=ps.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qs.warn(i.message)}}}function Dg(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=1024,AE=30*24*60*60*1e3;class RE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new PE(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=df();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=AE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=df(),{heartbeatsToSend:i,unsentEntries:s}=CE(this._heartbeatsCache.heartbeats),r=Ql(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function df(){return new Date().toISOString().substring(0,10)}function CE(n,e=SE){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ff(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ff(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class PE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ig()?bg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return hf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return hf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ff(n){return Ql(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n){Ln(new fn("platform-logger",e=>new GT(e),"PRIVATE")),Ln(new fn("heartbeat",e=>new RE(e),"PRIVATE")),Bt(Ou,cf,n),Bt(Ou,cf,"esm2017"),Bt("fire-js","")}DE("");function Vh(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Ng(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NE=Ng,Og=new ur("auth","Firebase",Ng());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Ga("@firebase/auth");function OE(n,...e){Zl.logLevel<=fe.WARN&&Zl.warn(`Auth (${bs}): ${n}`,...e)}function Rl(n,...e){Zl.logLevel<=fe.ERROR&&Zl.error(`Auth (${bs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,...e){throw Uh(n,...e)}function ti(n,...e){return Uh(n,...e)}function Fh(n,e,t){const i=Object.assign(Object.assign({},NE()),{[e]:t});return new ur("auth","Firebase",i).create(e,{appName:n.name})}function zs(n){return Fh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ME(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&vi(n,"argument-error"),Fh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uh(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Og.create(n,...e)}function te(n,e,...t){if(!n)throw Uh(e,...t)}function Vi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rl(e),new Error(e)}function Bi(n,e){n||Vi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function LE(){return pf()==="http:"||pf()==="https:"}function pf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LE()||wg()||"connection"in navigator)?navigator.onLine:!0}function FE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bi(t>e,"Short delay should be less than long delay!"),this.isMobile=Oh()||Tg()}get(){return VE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n,e){Bi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=new Ha(3e4,6e4);function $h(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Io(n,e,t,i,s={}){return Lg(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=Eo(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Mg.fetch()(Vg(n,n.config.apiHost,t,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Lg(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},UE),e);try{const s=new qE(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw vl(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vl(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vl(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw vl(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Fh(n,d,u);vi(n,d)}}catch(s){if(s instanceof xn)throw s;vi(n,"network-request-failed",{message:String(s)})}}async function $E(n,e,t,i,s={}){const r=await Io(n,e,t,i,s);return"mfaPendingCredential"in r&&vi(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Vg(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?xh(n.config,s):`${n.config.apiScheme}://${s}`}class qE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ti(this.auth,"network-request-failed")),xE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vl(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ti(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(n,e){return Io(n,"POST","/v1/accounts:delete",e)}async function Fg(n,e){return Io(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WE(n,e=!1){const t=Wt(n),i=await t.getIdToken(e),s=qh(i);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:va(cu(s.auth_time)),issuedAtTime:va(cu(s.iat)),expirationTime:va(cu(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function cu(n){return Number(n)*1e3}function qh(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Rl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xl(t);return s?JSON.parse(s):(Rl("Failed to decode base64 JWT payload"),null)}catch(s){return Rl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mf(n){const e=qh(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof xn&&jE(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function jE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=va(this.lastLoginAt),this.creationTime=va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Oa(n,Fg(t,{idToken:i}));te(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ug(r.providerUserInfo):[],l=zE(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Fu(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function HE(n){const e=Wt(n);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zE(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ug(n){return n.map(e=>{var{providerId:t}=e,i=Vh(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KE(n,e){const t=await Lg(n,{},async()=>{const i=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Vg(n,s,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Mg.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function QE(n,e){return Io(n,"POST","/v2/accounts:revokeToken",$h(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=mf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await KE(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new to;return i&&(te(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(te(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return Vi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Fi{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Fu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Oa(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return WE(this,e)}reload(){return HE(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ec(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Li(this.auth.app))return Promise.reject(zs(this.auth));const e=await this.getIdToken();return await Oa(this,BE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,l,c,u,d;const f=(i=t.displayName)!==null&&i!==void 0?i:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,T=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,M=(l=t.tenantId)!==null&&l!==void 0?l:void 0,D=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,L=(u=t.createdAt)!==null&&u!==void 0?u:void 0,U=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:F,emailVerified:z,isAnonymous:ee,providerData:X,stsTokenManager:k}=t;te(F&&k,e,"internal-error");const v=to.fromJSON(this.name,k);te(typeof F=="string",e,"internal-error"),os(f,e.name),os(g,e.name),te(typeof z=="boolean",e,"internal-error"),te(typeof ee=="boolean",e,"internal-error"),os(T,e.name),os(R,e.name),os(M,e.name),os(D,e.name),os(L,e.name),os(U,e.name);const E=new Fi({uid:F,auth:e,email:g,emailVerified:z,displayName:f,isAnonymous:ee,photoURL:R,phoneNumber:T,tenantId:M,stsTokenManager:v,createdAt:L,lastLoginAt:U});return X&&Array.isArray(X)&&(E.providerData=X.map(I=>Object.assign({},I))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,t,i=!1){const s=new to;s.updateFromServerResponse(t);const r=new Fi({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ec(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];te(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Ug(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new to;l.updateFromIdToken(i);const c=new Fi({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Fu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;function Ui(n){Bi(n instanceof Function,"Expected a class definition");let e=gf.get(n);return e?(Bi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gf.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xg.type="NONE";const _f=xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n,e,t){return`firebase:${n}:${e}:${t}`}class no{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Cl(this.userKey,s.apiKey,r),this.fullPersistenceKey=Cl("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new no(Ui(_f),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||Ui(_f);const o=Cl(i,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){const f=Fi._fromJSON(e,d);u!==r&&(l=f),r=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new no(r,e,i):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new no(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($g(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jg(e))return"Blackberry";if(Gg(e))return"Webos";if(Bh(e))return"Safari";if((e.includes("chrome/")||qg(e))&&!e.includes("edge/"))return"Chrome";if(Wg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function $g(n=Rt()){return/firefox\//i.test(n)}function Bh(n=Rt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qg(n=Rt()){return/crios\//i.test(n)}function Bg(n=Rt()){return/iemobile/i.test(n)}function Wg(n=Rt()){return/android/i.test(n)}function jg(n=Rt()){return/blackberry/i.test(n)}function Gg(n=Rt()){return/webos/i.test(n)}function Nc(n=Rt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function XE(n=Rt()){var e;return Nc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YE(){return cT()&&document.documentMode===10}function Hg(n=Rt()){return Nc(n)||Wg(n)||Gg(n)||jg(n)||/windows phone/i.test(n)||Bg(n)}function JE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(n,e=[]){let t;switch(n){case"Browser":t=yf(Rt());break;case"Worker":t=`${yf(Rt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(n,e={}){return Io(n,"GET","/v2/passwordPolicy",$h(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=6;class nI{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:tI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vf(this),this.idTokenSubscription=new vf(this),this.beforeStateQueue=new ZE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ui(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Fg(this,{idToken:e}),i=await Fi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Li(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Li(this.app))return Promise.reject(zs(this));const t=e?Wt(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Li(this.app)?Promise.reject(zs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Li(this.app)?Promise.reject(zs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ui(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eI(this),t=new nI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ur("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await QE(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ui(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[Ui(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&OE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Oc(n){return Wt(n)}class vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=yT(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sI(n){Wh=n}function rI(n){return Wh.loadJS(n)}function oI(){return Wh.gapiScript}function aI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(n,e){const t=hr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Da(r,e??{}))return s;vi(s,"already-initialized")}return t.initialize({options:e})}function cI(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ui);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function uI(n,e,t){const i=Oc(n);te(i._canInitEmulator,i,"emulator-config-failed"),te(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Kg(e),{host:o,port:l}=hI(e),c=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),dI()}function Kg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hI(n){const e=Kg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:wf(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:wf(o)}}}function wf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function dI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vi("not implemented")}_getIdTokenResponse(e){return Vi("not implemented")}_linkToIdToken(e,t){return Vi("not implemented")}_getReauthenticationResolver(e){return Vi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(n,e){return $E(n,"POST","/v1/accounts:signInWithIdp",$h(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="http://localhost";class Xs extends Qg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Vh(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Xs(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return io(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,io(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,io(e,t)}buildRequest(){const e={requestUri:fI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Eo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends jh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends za{constructor(){super("facebook.com")}static credential(e){return Xs._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";ls.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xs._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Mi.credential(t,i)}catch{return null}}}Mi.GOOGLE_SIGN_IN_METHOD="google.com";Mi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends za{constructor(){super("github.com")}static credential(e){return Xs._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cs.credential(e.oauthAccessToken)}catch{return null}}}cs.GITHUB_SIGN_IN_METHOD="github.com";cs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends za{constructor(){super("twitter.com")}static credential(e,t){return Xs._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return us.credential(t,i)}catch{return null}}}us.TWITTER_SIGN_IN_METHOD="twitter.com";us.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Fi._fromIdTokenResponse(e,i,s),o=Tf(i);return new lo({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Tf(i);return new lo({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Tf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends xn{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new tc(e,t,i,s)}}function Xg(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(n,r,e,i):r})}async function pI(n,e,t=!1){const i=await Oa(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return lo._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(n,e,t=!1){const{auth:i}=n;if(Li(i.app))return Promise.reject(zs(i));const s="reauthenticate";try{const r=await Oa(n,Xg(i,s,e,n),t);te(r.idToken,i,"internal-error");const o=qh(r.idToken);te(o,i,"internal-error");const{sub:l}=o;return te(n.uid===l,i,"user-mismatch"),lo._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&vi(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(n,e,t=!1){if(Li(n.app))return Promise.reject(zs(n));const i="signIn",s=await Xg(n,i,e),r=await lo._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function _I(n,e,t,i){return Wt(n).onIdTokenChanged(e,t,i)}function yI(n,e,t){return Wt(n).beforeAuthStateChanged(e,t)}function vI(n,e,t,i){return Wt(n).onAuthStateChanged(e,t,i)}function wI(n){return Wt(n).signOut()}const nc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(){const n=Rt();return Bh(n)||Nc(n)}const EI=1e3,II=10;class Jg extends Yg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TI()&&JE(),this.fallbackToPolling=Hg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);YE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,II):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},EI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jg.type="LOCAL";const bI=Jg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends Yg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zg.type="SESSION";const e_=Zg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Mc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async u=>u(t.origin,r)),c=await kI(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const u=Gh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(g.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(){return window}function AI(n){mi().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){return typeof mi().WorkerGlobalScope<"u"&&typeof mi().importScripts=="function"}async function RI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function PI(){return t_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="firebaseLocalStorageDb",DI=1,ic="firebaseLocalStorage",i_="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lc(n,e){return n.transaction([ic],e?"readwrite":"readonly").objectStore(ic)}function NI(){const n=indexedDB.deleteDatabase(n_);return new Ka(n).toPromise()}function Uu(){const n=indexedDB.open(n_,DI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ic,{keyPath:i_})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ic)?e(i):(i.close(),await NI(),e(await Uu()))})})}async function Ef(n,e,t){const i=Lc(n,!0).put({[i_]:e,value:t});return new Ka(i).toPromise()}async function OI(n,e){const t=Lc(n,!1).get(e),i=await new Ka(t).toPromise();return i===void 0?null:i.value}function If(n,e){const t=Lc(n,!0).delete(e);return new Ka(t).toPromise()}const MI=800,LI=3;class s_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>LI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(PI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await RI(),!this.activeServiceWorker)return;this.sender=new SI(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uu();return await Ef(e,nc,"1"),await If(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ef(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>OI(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>If(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Lc(s,!1).getAll();return new Ka(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s_.type="LOCAL";const VI=s_;new Ha(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(n,e){return e?Ui(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends Qg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function FI(n){return gI(n.auth,new Hh(n),n.bypassAuthState)}function UI(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),mI(t,new Hh(n),n.bypassAuthState)}async function xI(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),pI(t,new Hh(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FI;case"linkViaPopup":case"linkViaRedirect":return xI;case"reauthViaPopup":case"reauthViaRedirect":return UI;default:vi(this.auth,"internal-error")}}resolve(e){Bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=new Ha(2e3,1e4);async function qI(n,e,t){if(Li(n.app))return Promise.reject(ti(n,"operation-not-supported-in-this-environment"));const i=Oc(n);ME(n,e,jh);const s=r_(i,t);return new Ws(i,"signInViaPopup",e,s).executeNotNull()}class Ws extends o_{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Bi(this.filter.length===1,"Popup operations only handle one event");const e=Gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ti(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ti(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ti(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$I.get())};e()}}Ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="pendingRedirect",Pl=new Map;class WI extends o_{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Pl.get(this.auth._key());if(!e){try{const i=await jI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Pl.set(this.auth._key(),e)}return this.bypassAuthState||Pl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jI(n,e){const t=zI(e),i=HI(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function GI(n,e){Pl.set(n._key(),e)}function HI(n){return Ui(n._redirectPersistence)}function zI(n){return Cl(BI,n.config.apiKey,n.name)}async function KI(n,e,t=!1){if(Li(n.app))return Promise.reject(zs(n));const i=Oc(n),s=r_(i,e),o=await new WI(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=10*60*1e3;class XI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!a_(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ti(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QI&&this.cachedEventUids.clear(),this.cachedEventUids.has(bf(e))}saveEventToCache(e){this.cachedEventUids.add(bf(e)),this.lastProcessedEventTime=Date.now()}}function bf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function a_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(n,e={}){return Io(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,e0=/^https?/;async function t0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await JI(n);for(const t of e)try{if(n0(t))return}catch{}vi(n,"unauthorized-domain")}function n0(n){const e=Vu(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!e0.test(t))return!1;if(ZI.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=new Ha(3e4,6e4);function kf(){const n=mi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function s0(n){return new Promise((e,t)=>{var i,s,r;function o(){kf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kf(),t(ti(n,"network-request-failed"))},timeout:i0.get()})}if(!((s=(i=mi().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=mi().gapi)===null||r===void 0)&&r.load)o();else{const l=aI("iframefcb");return mi()[l]=()=>{gapi.load?o():t(ti(n,"network-request-failed"))},rI(`${oI()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Dl=null,e})}let Dl=null;function r0(n){return Dl=Dl||s0(n),Dl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=new Ha(5e3,15e3),a0="__/auth/iframe",l0="emulator/auth/iframe",c0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h0(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xh(e,l0):`https://${n.config.authDomain}/${a0}`,i={apiKey:e.apiKey,appName:n.name,v:bs},s=u0.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Eo(i).slice(1)}`}async function d0(n){const e=await r0(n),t=mi().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:h0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c0,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ti(n,"network-request-failed"),l=mi().setTimeout(()=>{r(o)},o0.get());function c(){mi().clearTimeout(l),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p0=500,m0=600,g0="_blank",_0="http://localhost";class Sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y0(n,e,t,i=p0,s=m0){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},f0),{width:i.toString(),height:s.toString(),top:r,left:o}),u=Rt().toLowerCase();t&&(l=qg(u)?g0:t),$g(u)&&(e=e||_0,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[T,R])=>`${g}${T}=${R},`,"");if(XE(u)&&l!=="_self")return v0(e||"",l),new Sf(null);const f=window.open(e||"",l,d);te(f,n,"popup-blocked");try{f.focus()}catch{}return new Sf(f)}function v0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="__/auth/handler",T0="emulator/auth/handler",E0=encodeURIComponent("fac");async function Af(n,e,t,i,s,r){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:bs,eventId:s};if(e instanceof jh){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Pu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof za){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),u=c?`#${E0}=${encodeURIComponent(c)}`:"";return`${I0(n)}?${Eo(l).slice(1)}${u}`}function I0({config:n}){return n.emulator?xh(n,T0):`https://${n.authDomain}/${w0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="webStorageSupport";class b0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e_,this._completeRedirectFn=KI,this._overrideRedirectResult=GI}async _openPopup(e,t,i,s){var r;Bi((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Af(e,t,i,Vu(),s);return y0(e,o,Gh())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Af(e,t,i,Vu(),s);return AI(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Bi(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await d0(e),i=new XI(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(uu,{type:uu},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[uu];o!==void 0&&t(!!o),vi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=t0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hg()||Bh()||Nc()}}const k0=b0;var Rf="@firebase/auth",Cf="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R0(n){Ln(new fn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zg(n)},u=new iI(i,s,r,c);return cI(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ln(new fn("auth-internal",e=>{const t=Oc(e.getProvider("auth").getImmediate());return(i=>new S0(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(Rf,Cf,A0(n)),Bt(Rf,Cf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=5*60,P0=vg("authIdTokenMaxAge")||C0;let Pf=null;const D0=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>P0)return;const s=t==null?void 0:t.token;Pf!==s&&(Pf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function N0(n=Lh()){const e=hr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=lI(n,{popupRedirectResolver:k0,persistence:[VI,bI,e_]}),i=vg("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=D0(r.toString());yI(t,o,()=>o(t.currentUser)),_I(t,l=>o(l))}}const s=_g("auth");return s&&uI(t,`http://${s}`),t}function O0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}sI({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ti("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",O0().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R0("Browser");function zh(n,e=null){let t;if(!globalThis.window){const{subscribe:s}=ya(e);return{subscribe:s}}if(!n){console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:s}=ya(null);return{subscribe:s}}const{subscribe:i}=ya((n==null?void 0:n.currentUser)??null,s=>(t=vI(n,r=>{s(r)}),()=>t()));return{subscribe:i}}var Df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ks,l_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,v){function E(){}E.prototype=v.prototype,k.D=v.prototype,k.prototype=new E,k.prototype.constructor=k,k.C=function(I,w,b){for(var y=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)y[Ie-2]=arguments[Ie];return v.prototype[w].apply(I,y)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(k,v,E){E||(E=0);var I=Array(16);if(typeof v=="string")for(var w=0;16>w;++w)I[w]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(w=0;16>w;++w)I[w]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=k.g[0],E=k.g[1],w=k.g[2];var b=k.g[3],y=v+(b^E&(w^b))+I[0]+3614090360&4294967295;v=E+(y<<7&4294967295|y>>>25),y=b+(w^v&(E^w))+I[1]+3905402710&4294967295,b=v+(y<<12&4294967295|y>>>20),y=w+(E^b&(v^E))+I[2]+606105819&4294967295,w=b+(y<<17&4294967295|y>>>15),y=E+(v^w&(b^v))+I[3]+3250441966&4294967295,E=w+(y<<22&4294967295|y>>>10),y=v+(b^E&(w^b))+I[4]+4118548399&4294967295,v=E+(y<<7&4294967295|y>>>25),y=b+(w^v&(E^w))+I[5]+1200080426&4294967295,b=v+(y<<12&4294967295|y>>>20),y=w+(E^b&(v^E))+I[6]+2821735955&4294967295,w=b+(y<<17&4294967295|y>>>15),y=E+(v^w&(b^v))+I[7]+4249261313&4294967295,E=w+(y<<22&4294967295|y>>>10),y=v+(b^E&(w^b))+I[8]+1770035416&4294967295,v=E+(y<<7&4294967295|y>>>25),y=b+(w^v&(E^w))+I[9]+2336552879&4294967295,b=v+(y<<12&4294967295|y>>>20),y=w+(E^b&(v^E))+I[10]+4294925233&4294967295,w=b+(y<<17&4294967295|y>>>15),y=E+(v^w&(b^v))+I[11]+2304563134&4294967295,E=w+(y<<22&4294967295|y>>>10),y=v+(b^E&(w^b))+I[12]+1804603682&4294967295,v=E+(y<<7&4294967295|y>>>25),y=b+(w^v&(E^w))+I[13]+4254626195&4294967295,b=v+(y<<12&4294967295|y>>>20),y=w+(E^b&(v^E))+I[14]+2792965006&4294967295,w=b+(y<<17&4294967295|y>>>15),y=E+(v^w&(b^v))+I[15]+1236535329&4294967295,E=w+(y<<22&4294967295|y>>>10),y=v+(w^b&(E^w))+I[1]+4129170786&4294967295,v=E+(y<<5&4294967295|y>>>27),y=b+(E^w&(v^E))+I[6]+3225465664&4294967295,b=v+(y<<9&4294967295|y>>>23),y=w+(v^E&(b^v))+I[11]+643717713&4294967295,w=b+(y<<14&4294967295|y>>>18),y=E+(b^v&(w^b))+I[0]+3921069994&4294967295,E=w+(y<<20&4294967295|y>>>12),y=v+(w^b&(E^w))+I[5]+3593408605&4294967295,v=E+(y<<5&4294967295|y>>>27),y=b+(E^w&(v^E))+I[10]+38016083&4294967295,b=v+(y<<9&4294967295|y>>>23),y=w+(v^E&(b^v))+I[15]+3634488961&4294967295,w=b+(y<<14&4294967295|y>>>18),y=E+(b^v&(w^b))+I[4]+3889429448&4294967295,E=w+(y<<20&4294967295|y>>>12),y=v+(w^b&(E^w))+I[9]+568446438&4294967295,v=E+(y<<5&4294967295|y>>>27),y=b+(E^w&(v^E))+I[14]+3275163606&4294967295,b=v+(y<<9&4294967295|y>>>23),y=w+(v^E&(b^v))+I[3]+4107603335&4294967295,w=b+(y<<14&4294967295|y>>>18),y=E+(b^v&(w^b))+I[8]+1163531501&4294967295,E=w+(y<<20&4294967295|y>>>12),y=v+(w^b&(E^w))+I[13]+2850285829&4294967295,v=E+(y<<5&4294967295|y>>>27),y=b+(E^w&(v^E))+I[2]+4243563512&4294967295,b=v+(y<<9&4294967295|y>>>23),y=w+(v^E&(b^v))+I[7]+1735328473&4294967295,w=b+(y<<14&4294967295|y>>>18),y=E+(b^v&(w^b))+I[12]+2368359562&4294967295,E=w+(y<<20&4294967295|y>>>12),y=v+(E^w^b)+I[5]+4294588738&4294967295,v=E+(y<<4&4294967295|y>>>28),y=b+(v^E^w)+I[8]+2272392833&4294967295,b=v+(y<<11&4294967295|y>>>21),y=w+(b^v^E)+I[11]+1839030562&4294967295,w=b+(y<<16&4294967295|y>>>16),y=E+(w^b^v)+I[14]+4259657740&4294967295,E=w+(y<<23&4294967295|y>>>9),y=v+(E^w^b)+I[1]+2763975236&4294967295,v=E+(y<<4&4294967295|y>>>28),y=b+(v^E^w)+I[4]+1272893353&4294967295,b=v+(y<<11&4294967295|y>>>21),y=w+(b^v^E)+I[7]+4139469664&4294967295,w=b+(y<<16&4294967295|y>>>16),y=E+(w^b^v)+I[10]+3200236656&4294967295,E=w+(y<<23&4294967295|y>>>9),y=v+(E^w^b)+I[13]+681279174&4294967295,v=E+(y<<4&4294967295|y>>>28),y=b+(v^E^w)+I[0]+3936430074&4294967295,b=v+(y<<11&4294967295|y>>>21),y=w+(b^v^E)+I[3]+3572445317&4294967295,w=b+(y<<16&4294967295|y>>>16),y=E+(w^b^v)+I[6]+76029189&4294967295,E=w+(y<<23&4294967295|y>>>9),y=v+(E^w^b)+I[9]+3654602809&4294967295,v=E+(y<<4&4294967295|y>>>28),y=b+(v^E^w)+I[12]+3873151461&4294967295,b=v+(y<<11&4294967295|y>>>21),y=w+(b^v^E)+I[15]+530742520&4294967295,w=b+(y<<16&4294967295|y>>>16),y=E+(w^b^v)+I[2]+3299628645&4294967295,E=w+(y<<23&4294967295|y>>>9),y=v+(w^(E|~b))+I[0]+4096336452&4294967295,v=E+(y<<6&4294967295|y>>>26),y=b+(E^(v|~w))+I[7]+1126891415&4294967295,b=v+(y<<10&4294967295|y>>>22),y=w+(v^(b|~E))+I[14]+2878612391&4294967295,w=b+(y<<15&4294967295|y>>>17),y=E+(b^(w|~v))+I[5]+4237533241&4294967295,E=w+(y<<21&4294967295|y>>>11),y=v+(w^(E|~b))+I[12]+1700485571&4294967295,v=E+(y<<6&4294967295|y>>>26),y=b+(E^(v|~w))+I[3]+2399980690&4294967295,b=v+(y<<10&4294967295|y>>>22),y=w+(v^(b|~E))+I[10]+4293915773&4294967295,w=b+(y<<15&4294967295|y>>>17),y=E+(b^(w|~v))+I[1]+2240044497&4294967295,E=w+(y<<21&4294967295|y>>>11),y=v+(w^(E|~b))+I[8]+1873313359&4294967295,v=E+(y<<6&4294967295|y>>>26),y=b+(E^(v|~w))+I[15]+4264355552&4294967295,b=v+(y<<10&4294967295|y>>>22),y=w+(v^(b|~E))+I[6]+2734768916&4294967295,w=b+(y<<15&4294967295|y>>>17),y=E+(b^(w|~v))+I[13]+1309151649&4294967295,E=w+(y<<21&4294967295|y>>>11),y=v+(w^(E|~b))+I[4]+4149444226&4294967295,v=E+(y<<6&4294967295|y>>>26),y=b+(E^(v|~w))+I[11]+3174756917&4294967295,b=v+(y<<10&4294967295|y>>>22),y=w+(v^(b|~E))+I[2]+718787259&4294967295,w=b+(y<<15&4294967295|y>>>17),y=E+(b^(w|~v))+I[9]+3951481745&4294967295,k.g[0]=k.g[0]+v&4294967295,k.g[1]=k.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,k.g[2]=k.g[2]+w&4294967295,k.g[3]=k.g[3]+b&4294967295}i.prototype.u=function(k,v){v===void 0&&(v=k.length);for(var E=v-this.blockSize,I=this.B,w=this.h,b=0;b<v;){if(w==0)for(;b<=E;)s(this,k,b),b+=this.blockSize;if(typeof k=="string"){for(;b<v;)if(I[w++]=k.charCodeAt(b++),w==this.blockSize){s(this,I),w=0;break}}else for(;b<v;)if(I[w++]=k[b++],w==this.blockSize){s(this,I),w=0;break}}this.h=w,this.o+=v},i.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var v=1;v<k.length-8;++v)k[v]=0;var E=8*this.o;for(v=k.length-8;v<k.length;++v)k[v]=E&255,E/=256;for(this.u(k),k=Array(16),v=E=0;4>v;++v)for(var I=0;32>I;I+=8)k[E++]=this.g[v]>>>I&255;return k};function r(k,v){var E=l;return Object.prototype.hasOwnProperty.call(E,k)?E[k]:E[k]=v(k)}function o(k,v){this.h=v;for(var E=[],I=!0,w=k.length-1;0<=w;w--){var b=k[w]|0;I&&b==v||(E[w]=b,I=!1)}this.g=E}var l={};function c(k){return-128<=k&&128>k?r(k,function(v){return new o([v|0],0>v?-1:0)}):new o([k|0],0>k?-1:0)}function u(k){if(isNaN(k)||!isFinite(k))return f;if(0>k)return D(u(-k));for(var v=[],E=1,I=0;k>=E;I++)v[I]=k/E|0,E*=4294967296;return new o(v,0)}function d(k,v){if(k.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k.charAt(0)=="-")return D(d(k.substring(1),v));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(v,8)),I=f,w=0;w<k.length;w+=8){var b=Math.min(8,k.length-w),y=parseInt(k.substring(w,w+b),v);8>b?(b=u(Math.pow(v,b)),I=I.j(b).add(u(y))):(I=I.j(E),I=I.add(u(y)))}return I}var f=c(0),g=c(1),T=c(16777216);n=o.prototype,n.m=function(){if(M(this))return-D(this).m();for(var k=0,v=1,E=0;E<this.g.length;E++){var I=this.i(E);k+=(0<=I?I:4294967296+I)*v,v*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(R(this))return"0";if(M(this))return"-"+D(this).toString(k);for(var v=u(Math.pow(k,6)),E=this,I="";;){var w=z(E,v).g;E=L(E,w.j(v));var b=((0<E.g.length?E.g[0]:E.h)>>>0).toString(k);if(E=w,R(E))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function R(k){if(k.h!=0)return!1;for(var v=0;v<k.g.length;v++)if(k.g[v]!=0)return!1;return!0}function M(k){return k.h==-1}n.l=function(k){return k=L(this,k),M(k)?-1:R(k)?0:1};function D(k){for(var v=k.g.length,E=[],I=0;I<v;I++)E[I]=~k.g[I];return new o(E,~k.h).add(g)}n.abs=function(){return M(this)?D(this):this},n.add=function(k){for(var v=Math.max(this.g.length,k.g.length),E=[],I=0,w=0;w<=v;w++){var b=I+(this.i(w)&65535)+(k.i(w)&65535),y=(b>>>16)+(this.i(w)>>>16)+(k.i(w)>>>16);I=y>>>16,b&=65535,y&=65535,E[w]=y<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function L(k,v){return k.add(D(v))}n.j=function(k){if(R(this)||R(k))return f;if(M(this))return M(k)?D(this).j(D(k)):D(D(this).j(k));if(M(k))return D(this.j(D(k)));if(0>this.l(T)&&0>k.l(T))return u(this.m()*k.m());for(var v=this.g.length+k.g.length,E=[],I=0;I<2*v;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var w=0;w<k.g.length;w++){var b=this.i(I)>>>16,y=this.i(I)&65535,Ie=k.i(w)>>>16,Le=k.i(w)&65535;E[2*I+2*w]+=y*Le,U(E,2*I+2*w),E[2*I+2*w+1]+=b*Le,U(E,2*I+2*w+1),E[2*I+2*w+1]+=y*Ie,U(E,2*I+2*w+1),E[2*I+2*w+2]+=b*Ie,U(E,2*I+2*w+2)}for(I=0;I<v;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=v;I<2*v;I++)E[I]=0;return new o(E,0)};function U(k,v){for(;(k[v]&65535)!=k[v];)k[v+1]+=k[v]>>>16,k[v]&=65535,v++}function F(k,v){this.g=k,this.h=v}function z(k,v){if(R(v))throw Error("division by zero");if(R(k))return new F(f,f);if(M(k))return v=z(D(k),v),new F(D(v.g),D(v.h));if(M(v))return v=z(k,D(v)),new F(D(v.g),v.h);if(30<k.g.length){if(M(k)||M(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,I=v;0>=I.l(k);)E=ee(E),I=ee(I);var w=X(E,1),b=X(I,1);for(I=X(I,2),E=X(E,2);!R(I);){var y=b.add(I);0>=y.l(k)&&(w=w.add(E),b=y),I=X(I,1),E=X(E,1)}return v=L(k,w.j(v)),new F(w,v)}for(w=f;0<=k.l(v);){for(E=Math.max(1,Math.floor(k.m()/v.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=u(E),y=b.j(v);M(y)||0<y.l(k);)E-=I,b=u(E),y=b.j(v);R(b)&&(b=g),w=w.add(b),k=L(k,y)}return new F(w,k)}n.A=function(k){return z(this,k).h},n.and=function(k){for(var v=Math.max(this.g.length,k.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)&k.i(I);return new o(E,this.h&k.h)},n.or=function(k){for(var v=Math.max(this.g.length,k.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)|k.i(I);return new o(E,this.h|k.h)},n.xor=function(k){for(var v=Math.max(this.g.length,k.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)^k.i(I);return new o(E,this.h^k.h)};function ee(k){for(var v=k.g.length+1,E=[],I=0;I<v;I++)E[I]=k.i(I)<<1|k.i(I-1)>>>31;return new o(E,k.h)}function X(k,v){var E=v>>5;v%=32;for(var I=k.g.length-E,w=[],b=0;b<I;b++)w[b]=0<v?k.i(b+E)>>>v|k.i(b+E+1)<<32-v:k.i(b+E);return new o(w,k.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l_=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Ks=o}).apply(typeof Df<"u"?Df:typeof self<"u"?self:typeof window<"u"?window:{});var wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var c_,u_,ea,h_,Nl,xu,d_,f_,p_;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof wl=="object"&&wl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var i=t(this);function s(a,h){if(h)e:{var p=i;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in p))break e;p=p[C]}a=a[a.length-1],m=p[a],h=h(m),h!=m&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function r(a,h){a instanceof String&&(a+="");var p=0,m=!1,C={next:function(){if(!m&&p<a.length){var N=p++;return{value:h(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return r(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function T(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(m,C,N){for(var P=Array(arguments.length-2),le=2;le<arguments.length;le++)P[le-2]=arguments[le];return h.prototype[C].apply(m,P)}}function M(a){const h=a.length;if(0<h){const p=Array(h);for(let m=0;m<h;m++)p[m]=a[m];return p}return[]}function D(a,h){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(c(m)){const C=a.length||0,N=m.length||0;a.length=C+N;for(let P=0;P<N;P++)a[C+P]=m[P]}else a.push(m)}}class L{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var ee=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function X(a,h,p){for(const m in a)h.call(p,a[m],m,a)}function k(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(p in m)a[p]=m[p];for(let N=0;N<E.length;N++)p=E[N],Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}}function w(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function y(){var a=xe;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ie{constructor(){this.h=this.g=null}add(h,p){const m=Le.get();m.set(h,p),this.h?this.h.next=m:this.g=m,this.h=m}}var Le=new L(()=>new ce,a=>a.reset());class ce{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,yt=!1,xe=new Ie,ke=()=>{const a=l.Promise.resolve(void 0);Ue=()=>{a.then(gn)}};var gn=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(p){b(p)}var h=Le;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}yt=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var oe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Se(a,h){if(re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ee){e:{try{z(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ut[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Se.aa.h.call(this)}}R(Se,re);var ut={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var zt="closure_listenable_"+(1e6*Math.random()|0),bi=0;function Hi(a,h,p,m,C){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!m,this.ha=C,this.key=++bi,this.da=this.fa=!1}function _n(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ht(a){this.src=a,this.g={},this.h=0}ht.prototype.add=function(a,h,p,m,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var P=Je(a,h,m,C);return-1<P?(h=a[P],p||(h.fa=!1)):(h=new Hi(h,this.src,N,!!m,C),h.fa=p,a.push(h)),h};function qe(a,h){var p=h.type;if(p in a.g){var m=a.g[p],C=Array.prototype.indexOf.call(m,h,void 0),N;(N=0<=C)&&Array.prototype.splice.call(m,C,1),N&&(_n(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Je(a,h,p,m){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==h&&N.capture==!!p&&N.ha==m)return C}return-1}var yn="closure_lm_"+(1e6*Math.random()|0),Jt={};function Ze(a,h,p,m,C){if(Array.isArray(h)){for(var N=0;N<h.length;N++)Ze(a,h[N],p,m,C);return null}return p=gr(p),a&&a[zt]?a.K(h,p,u(m)?!!m.capture:!!m,C):ie(a,h,p,!1,m,C)}function ie(a,h,p,m,C,N){if(!h)throw Error("Invalid event type");var P=u(C)?!!C.capture:!!C,le=ks(a);if(le||(a[yn]=le=new ht(a)),p=le.add(h,p,m,P,N),p.proxy)return p;if(m=Xe(),p.proxy=m,m.src=a,m.listener=p,a.addEventListener)oe||(C=P),C===void 0&&(C=!1),a.addEventListener(h.toString(),m,C);else if(a.attachEvent)a.attachEvent(Ki(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Xe(){function a(p){return h.call(a.src,a.listener,p)}const h=al;return a}function zi(a,h,p,m,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)zi(a,h[N],p,m,C);else m=u(m)?!!m.capture:!!m,p=gr(p),a&&a[zt]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],p=Je(N,p,m,C),-1<p&&(_n(N[p]),Array.prototype.splice.call(N,p,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=ks(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Je(h,p,m,C)),(p=-1<a?h[a]:null)&&Zt(p))}function Zt(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[zt])qe(h.i,a);else{var p=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(p,m,a.capture):h.detachEvent?h.detachEvent(Ki(p),m):h.addListener&&h.removeListener&&h.removeListener(m),(p=ks(h))?(qe(p,a),p.h==0&&(p.src=null,h[yn]=null)):_n(a)}}}function Ki(a){return a in Jt?Jt[a]:Jt[a]="on"+a}function al(a,h){if(a.da)a=!0;else{h=new Se(h,this);var p=a.listener,m=a.ha||a.src;a.fa&&Zt(a),a=p.call(m,h)}return a}function ks(a){return a=a[yn],a instanceof ht?a:null}var ki="__closure_events_fn_"+(1e9*Math.random()>>>0);function gr(a){return typeof a=="function"?a:(a[ki]||(a[ki]=function(h){return a.handleEvent(h)}),a[ki])}function ot(){$e.call(this),this.i=new ht(this),this.M=this,this.F=null}R(ot,$e),ot.prototype[zt]=!0,ot.prototype.removeEventListener=function(a,h,p,m){zi(this,a,h,p,m)};function Ke(a,h){var p,m=a.F;if(m)for(p=[];m;m=m.F)p.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new re(h,a);else if(h instanceof re)h.target=h.target||a;else{var C=h;h=new re(m,a),I(h,C)}if(C=!0,p)for(var N=p.length-1;0<=N;N--){var P=h.g=p[N];C=Ss(P,m,!0,h)&&C}if(P=h.g=a,C=Ss(P,m,!0,h)&&C,C=Ss(P,m,!1,h)&&C,p)for(N=0;N<p.length;N++)P=h.g=p[N],C=Ss(P,m,!1,h)&&C}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],m=0;m<p.length;m++)_n(p[m]);delete a.g[h],a.h--}}this.F=null},ot.prototype.K=function(a,h,p,m){return this.i.add(String(a),h,!1,p,m)},ot.prototype.L=function(a,h,p,m){return this.i.add(String(a),h,!0,p,m)};function Ss(a,h,p,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,N=0;N<h.length;++N){var P=h[N];if(P&&!P.da&&P.capture==p){var le=P.listener,It=P.ha||P.src;P.fa&&qe(a.i,P),C=le.call(It,m)!==!1&&C}}return C&&!m.defaultPrevented}function Si(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Qi(a){a.g=Si(()=>{a.g=null,a.i&&(a.i=!1,Qi(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Do extends $e{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Qi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(a){$e.call(this),this.h=a,this.g={}}R(Xi,$e);var vn=[];function Yi(a){X(a.g,function(h,p){this.g.hasOwnProperty(p)&&Zt(h)},a),a.g={}}Xi.prototype.N=function(){Xi.aa.N.call(this),Yi(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _r=l.JSON.stringify,As=l.JSON.parse,No=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function yr(){}yr.prototype.h=null;function wn(a){return a.h||(a.h=a.i())}function Ji(){}var Zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kt(){re.call(this,"d")}R(Kt,re);function Rs(){re.call(this,"c")}R(Rs,re);var en={},vr=null;function Cs(){return vr=vr||new ot}en.La="serverreachability";function ii(a){re.call(this,en.La,a)}R(ii,re);function es(a){const h=Cs();Ke(h,new ii(h))}en.STAT_EVENT="statevent";function wr(a,h){re.call(this,en.STAT_EVENT,a),this.stat=h}R(wr,re);function et(a){const h=Cs();Ke(h,new wr(h,a))}en.Ma="timingevent";function Tr(a,h){re.call(this,en.Ma,a),this.size=h}R(Tr,re);function ts(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function tn(){this.g=!0}tn.prototype.xa=function(){this.g=!1};function ll(a,h,p,m,C,N){a.info(function(){if(a.g)if(N)for(var P="",le=N.split("&"),It=0;It<le.length;It++){var be=le[It].split("=");if(1<be.length){var Mt=be[0];be=be[1];var Lt=Mt.split("_");P=2<=Lt.length&&Lt[1]=="type"?P+(Mt+"="+be+"&"):P+(Mt+"=redacted&")}}else P=null;else P=N;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+p+`
`+P})}function Oo(a,h,p,m,C,N,P){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+p+`
`+N+" "+P})}function Tn(a,h,p,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+cl(a,p)+(m?" "+m:"")})}function Mo(a,h){a.info(function(){return"TIMEOUT: "+h})}tn.prototype.info=function(){};function cl(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var m=p[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var P=1;P<C.length;P++)C[P]=""}}}}return _r(p)}catch{return h}}var En={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Lo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ps;function si(){}R(si,yr),si.prototype.g=function(){return new XMLHttpRequest},si.prototype.i=function(){return{}},Ps=new si;function In(a,h,p,m){this.j=a,this.i=h,this.l=p,this.R=m||1,this.U=new Xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vo}function Vo(){this.i=null,this.g="",this.h=!1}var ri={},Er={};function oi(a,h,p){a.L=1,a.v=Gt(Sn(h)),a.m=p,a.P=!0,Ai(a,null)}function Ai(a,h){a.F=Date.now(),nn(a),a.A=Sn(a.v);var p=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Sr(p.i,"t",m),a.C=0,p=a.j.J,a.h=new Vo,a.g=Pr(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Do(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(vn[0]=C.toString()),C=vn);for(var N=0;N<C.length;N++){var P=Ze(p,C[N],m||h.handleEvent,!1,h.h||h);if(!P)break;h.g[P.key]=P}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),es(),ll(a.i,a.u,a.A,a.l,a.R,a.m)}In.prototype.ca=function(a){a=a.target;const h=this.M;h&&Qe(a)==3?h.j():this.Y(a)},In.prototype.Y=function(a){try{if(a==this.g)e:{const Lt=Qe(this.g);var h=this.g.Ba();const Mr=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||wt(this.g)))){this.J||Lt!=4||h==7||(h==8||0>=Mr?es(3):es(2)),ns(this);var p=this.g.Z();this.X=p;t:if($n(this)){var m=wt(this.g);a="";var C=m.length,N=Qe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),bn(this);var P="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(N&&h==C-1)});m.length=0,this.h.g+=a,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=p==200,Oo(this.i,this.u,this.A,this.l,this.R,Lt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var le,It=this.g;if((le=It.g?It.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(le)){var be=le;break t}}be=null}if(p=be)Tn(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ir(this,p);else{this.o=!1,this.s=3,et(12),qn(this),bn(this);break e}}if(this.P){p=!0;let Qn;for(;!this.J&&this.C<P.length;)if(Qn=ul(this,P),Qn==Er){Lt==4&&(this.s=4,et(14),p=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(Qn==ri){this.s=4,et(15),Tn(this.i,this.l,P,"[Invalid Chunk]"),p=!1;break}else Tn(this.i,this.l,Qn,null),Ir(this,Qn);if($n(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||P.length!=0||this.h.h||(this.s=1,et(16),p=!1),this.o=this.o&&p,!p)Tn(this.i,this.l,P,"[Invalid Chunked Response]"),qn(this),bn(this);else if(0<P.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),dt(Mt),Mt.M=!0,et(11))}}else Tn(this.i,this.l,P,null),Ir(this,P);Lt==4&&qn(this),this.o&&!this.J&&(Lt==4?Ae(this.j,this):(this.o=!1,nn(this)))}else Pi(this.g),p==400&&0<P.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),qn(this),bn(this)}}}catch{}finally{}};function $n(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ul(a,h){var p=a.C,m=h.indexOf(`
`,p);return m==-1?Er:(p=Number(h.substring(p,m)),isNaN(p)?ri:(m+=1,m+p>h.length?Er:(h=h.slice(m,m+p),a.C=m+p,h)))}In.prototype.cancel=function(){this.J=!0,qn(this)};function nn(a){a.S=Date.now()+a.I,Fo(a,a.I)}function Fo(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ts(g(a.ba,a),h)}function ns(a){a.B&&(l.clearTimeout(a.B),a.B=null)}In.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Mo(this.i,this.A),this.L!=2&&(es(),et(17)),qn(this),this.s=2,bn(this)):Fo(this,this.S-a)};function bn(a){a.j.G==0||a.J||Ae(a.j,a)}function qn(a){ns(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Yi(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ir(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||br(p.h,a))){if(!a.K&&br(p.h,a)&&p.G==3){try{var m=p.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)V(p),at(p);else break e;zo(p),et(18)}}else p.za=C[1],0<p.za-p.T&&37500>C[2]&&p.F&&p.v==0&&!p.C&&(p.C=ts(g(p.Za,p),6e3));if(1>=Wn(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else hi(p,11)}else if((a.K||p.g==a)&&V(p),!U(h))for(C=p.Da.g.parse(h),h=0;h<C.length;h++){let be=C[h];if(p.T=be[0],be=be[1],p.G==2)if(be[0]=="c"){p.K=be[1],p.ia=be[2];const Mt=be[3];Mt!=null&&(p.la=Mt,p.j.info("VER="+p.la));const Lt=be[4];Lt!=null&&(p.Aa=Lt,p.j.info("SVER="+p.Aa));const Mr=be[5];Mr!=null&&typeof Mr=="number"&&0<Mr&&(m=1.5*Mr,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const Qn=a.g;if(Qn){const yl=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yl){var N=m.h;N.g||yl.indexOf("spdy")==-1&&yl.indexOf("quic")==-1&&yl.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(kn(N,N.h),N.h=null))}if(m.D){const nu=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;nu&&(m.ya=nu,Ne(m.I,m.D,nu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var P=a;if(m.qa=Cr(m,m.J?m.ia:null,m.W),P.K){xo(m.h,P);var le=P,It=m.L;It&&(le.I=It),le.B&&(ns(le),nn(le)),m.g=P}else je(m);0<p.i.length&&Fe(p)}else be[0]!="stop"&&be[0]!="close"||hi(p,7);else p.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?hi(p,7):Tt(p):be[0]!="noop"&&p.l&&p.l.ta(be),p.v=0)}}es(4)}catch{}}var tt=class{constructor(a,h){this.g=a,this.map=h}};function Bn(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uo(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wn(a){return a.h?1:a.g?a.g.size:0}function br(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function kn(a,h){a.g?a.g.add(h):a.h=h}function xo(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Bn.prototype.cancel=function(){if(this.i=jn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function jn(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return M(a.i)}function hl(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,m=0;m<p;m++)h.push(a[m]);return h}h=[],p=0;for(m in a)h[p++]=a[m];return h}function ai(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const m in a)h[p++]=m;return h}}}function $o(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=ai(a),m=hl(a),C=m.length,N=0;N<C;N++)h.call(void 0,m[N],p&&p[N],a)}var Gn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dl(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var m=a[p].indexOf("="),C=null;if(0<=m){var N=a[p].substring(0,m);C=a[p].substring(m+1)}else N=a[p];h(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Ct(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ct){this.h=a.h,sn(this,a.j),this.o=a.o,this.g=a.g,Ds(this,a.s),this.l=a.l;var h=a.i,p=new zn;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Hn(this,p),this.m=a.m}else a&&(h=String(a).match(Gn))?(this.h=!1,sn(this,h[1]||"",!0),this.o=Pt(h[2]||""),this.g=Pt(h[3]||"",!0),Ds(this,h[4]),this.l=Pt(h[5]||"",!0),Hn(this,h[6]||"",!0),this.m=Pt(h[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}Ct.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ri(h,is,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ri(h,is,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ri(p,p.charAt(0)=="/"?An:fl,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ri(p,Wo)),a.join("")};function Sn(a){return new Ct(a)}function sn(a,h,p){a.j=p?Pt(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ds(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Hn(a,h,p){h instanceof zn?(a.i=h,pl(a.i,a.h)):(p||(h=Ri(h,Bo)),a.i=new zn(h,a.h))}function Ne(a,h,p){a.i.set(h,p)}function Gt(a){return Ne(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Pt(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ri(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,qo),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qo(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var is=/[#\/\?@]/g,fl=/[#\?:]/g,An=/[#\?]/g,Bo=/[#\?@]/g,Wo=/#/g;function zn(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Kn(a){a.g||(a.g=new Map,a.h=0,a.i&&dl(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=zn.prototype,n.add=function(a,h){Kn(this),this.i=null,a=Rn(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function rn(a,h){Kn(a),h=Rn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function kr(a,h){return Kn(a),h=Rn(a,h),a.g.has(h)}n.forEach=function(a,h){Kn(this),this.g.forEach(function(p,m){p.forEach(function(C){a.call(h,C,m,this)},this)},this)},n.na=function(){Kn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let m=0;m<h.length;m++){const C=a[m];for(let N=0;N<C.length;N++)p.push(h[m])}return p},n.V=function(a){Kn(this);let h=[];if(typeof a=="string")kr(this,a)&&(h=h.concat(this.g.get(Rn(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},n.set=function(a,h){return Kn(this),this.i=null,a=Rn(this,a),kr(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Sr(a,h,p){rn(a,h),0<p.length&&(a.i=null,a.g.set(Rn(a,h),M(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var m=h[p];const N=encodeURIComponent(String(m)),P=this.V(m);for(m=0;m<P.length;m++){var C=N;P[m]!==""&&(C+="="+encodeURIComponent(String(P[m]))),a.push(C)}}return this.i=a.join("&")};function Rn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function pl(a,h){h&&!a.j&&(Kn(a),a.i=null,a.g.forEach(function(p,m){var C=m.toLowerCase();m!=C&&(rn(this,m),Sr(this,C,p))},a)),a.j=h}function Cn(a,h){const p=new tn;if(l.Image){const m=new Image;m.onload=T(Pn,p,"TestLoadImage: loaded",!0,h,m),m.onerror=T(Pn,p,"TestLoadImage: error",!1,h,m),m.onabort=T(Pn,p,"TestLoadImage: abort",!1,h,m),m.ontimeout=T(Pn,p,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function jo(a,h){const p=new tn,m=new AbortController,C=setTimeout(()=>{m.abort(),Pn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(C),N.ok?Pn(p,"TestPingServer: ok",!0,h):Pn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Pn(p,"TestPingServer: error",!1,h)})}function Pn(a,h,p,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(p)}catch{}}function Ns(){this.g=new No}function ml(a,h,p){const m=p||"";try{$o(a,function(C,N){let P=C;u(C)&&(P=_r(C)),h.push(m+N+"="+encodeURIComponent(P))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function Ht(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Ht,yr),Ht.prototype.g=function(){return new ss(this.l,this.j)},Ht.prototype.i=function(a){return function(){return a}}({});function ss(a,h){ot.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ss,ot),n=ss.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Dn(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Go(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Go(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ci(this):Dn(this),this.readyState==3&&Go(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Ci(this))},n.Qa=function(a){this.g&&(this.response=a,Ci(this))},n.ga=function(){this.g&&Ci(this)};function Ci(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Dn(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Dn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Dt(a){let h="";return X(a,function(p,m){h+=m,h+=":",h+=p,h+=`\r
`}),h}function Os(a,h,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=Dt(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ne(a,h,p))}function We(a){ot.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(We,ot);var Ho=/^https?$/i,on=["POST","PUT"];n=We.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ps.g(),this.v=this.o?wn(this.o):wn(Ps),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Nt(this,N);return}if(a=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)p.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())p.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(on,h,void 0))||m||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,P]of p)this.g.setRequestHeader(N,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gl(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Nt(this,N)}};function Nt(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,vt(a),Ve(a)}function vt(a){a.A||(a.A=!0,Ke(a,"complete"),Ke(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ke(this,"complete"),Ke(this,"abort"),Ve(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ve(this,!0)),We.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?li(this):this.bb())},n.bb=function(){li(this)};function li(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Qe(a)!=4||a.Z()!=2)){if(a.u&&Qe(a)==4)Si(a.Ea,0,a);else if(Ke(a,"readystatechange"),Qe(a)==4){a.h=!1;try{const P=a.Z();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var m;if(m=P===0){var C=String(a.D).match(Gn)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!Ho.test(C?C.toLowerCase():"")}p=m}if(p)Ke(a,"complete"),Ke(a,"success");else{a.m=6;try{var N=2<Qe(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",vt(a)}}finally{Ve(a)}}}}function Ve(a,h){if(a.g){gl(a);const p=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ke(a,"ready");try{p.onreadystatechange=m}catch{}}}function gl(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Qe(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Qe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),As(h)}};function wt(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Pi(a){const h={};a=(a.g&&2<=Qe(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(U(a[m]))continue;var p=w(a[m]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=h[C]||[];h[C]=N,N.push(p)}k(h,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oe(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function _l(a){this.Aa=0,this.i=[],this.j=new tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oe("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oe("baseRetryDelayMs",5e3,a),this.cb=Oe("retryDelaySeedMs",1e4,a),this.Wa=Oe("forwardChannelMaxRetries",2,a),this.wa=Oe("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bn(a&&a.concurrentRequestLimit),this.Da=new Ns,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_l.prototype,n.la=8,n.G=1,n.connect=function(a,h,p,m){et(0),this.W=a,this.H=h||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=Cr(this,null,this.W),Fe(this)};function Tt(a){if(ci(a),a.G==3){var h=a.U++,p=Sn(a.I);if(Ne(p,"SID",a.K),Ne(p,"RID",h),Ne(p,"TYPE","terminate"),nt(a,p),h=new In(a,a.j,h),h.L=2,h.v=Gt(Sn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Pr(h.j,null),h.g.ea(h.v)),h.F=Date.now(),nn(h)}Rr(a)}function at(a){a.g&&(dt(a),a.g.cancel(),a.g=null)}function ci(a){at(a),a.u&&(l.clearTimeout(a.u),a.u=null),V(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Fe(a){if(!Uo(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ue||ke(),yt||(Ue(),yt=!0),xe.add(h,a),a.B=0}}function tu(a,h){return Wn(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ts(g(a.Ga,a,h),Ar(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new In(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=ui(this,C,h),p=Sn(this.I),Ne(p,"RID",a),Ne(p,"CVER",22),this.D&&Ne(p,"X-HTTP-Session-Id",this.D),nt(this,p),N&&(this.O?h="headers="+encodeURIComponent(String(Dt(N)))+"&"+h:this.m&&Os(p,this.m,N)),kn(this.h,C),this.Ua&&Ne(p,"TYPE","init"),this.P?(Ne(p,"$req",h),Ne(p,"SID","null"),C.T=!0,oi(C,p,null)):oi(C,p,h),this.G=2}}else this.G==3&&(a?Ot(this,a):this.i.length==0||Uo(this.h)||Ot(this))};function Ot(a,h){var p;h?p=h.l:p=a.U++;const m=Sn(a.I);Ne(m,"SID",a.K),Ne(m,"RID",p),Ne(m,"AID",a.T),nt(a,m),a.m&&a.o&&Os(m,a.m,a.o),p=new In(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=ui(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),kn(a.h,p),oi(p,m,h)}function nt(a,h){a.H&&X(a.H,function(p,m){Ne(h,m,p)}),a.l&&$o({},function(p,m){Ne(h,m,p)})}function ui(a,h,p){p=Math.min(a.i.length,p);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const P=["count="+p];N==-1?0<p?(N=C[0].g,P.push("ofs="+N)):N=0:P.push("ofs="+N);let le=!0;for(let It=0;It<p;It++){let be=C[It].g;const Mt=C[It].map;if(be-=N,0>be)N=Math.max(0,C[It].g-100),le=!1;else try{ml(Mt,P,"req"+be+"_")}catch{m&&m(Mt)}}if(le){m=P.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,m}function je(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ue||ke(),yt||(Ue(),yt=!0),xe.add(h,a),a.v=0}}function zo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ts(g(a.Fa,a),Ar(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,A(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ts(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),at(this),A(this))};function dt(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function A(a){a.g=new In(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Sn(a.qa);Ne(h,"RID","rpc"),Ne(h,"SID",a.K),Ne(h,"AID",a.T),Ne(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ne(h,"TO",a.ja),Ne(h,"TYPE","xmlhttp"),nt(a,h),a.m&&a.o&&Os(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Gt(Sn(h)),p.m=null,p.P=!0,Ai(p,a)}n.Za=function(){this.C!=null&&(this.C=null,at(this),zo(this),et(19))};function V(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ae(a,h){var p=null;if(a.g==h){V(a),dt(a),a.g=null;var m=2}else if(br(a.h,h))p=h.D,xo(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;m=Cs(),Ke(m,new Tr(m,p)),Fe(a)}else je(a);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&tu(a,h)||m==2&&zo(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),C){case 1:hi(a,5);break;case 4:hi(a,10);break;case 3:hi(a,6);break;default:hi(a,2)}}}function Ar(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function hi(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),m=a.Xa;const C=!m;m=new Ct(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||sn(m,"https"),Gt(m),C?Cn(m.toString(),p):jo(m.toString(),p)}else et(2);a.G=0,a.l&&a.l.sa(h),Rr(a),ci(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Rr(a){if(a.G=0,a.ka=[],a.l){const h=jn(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,M(a.i),a.i.length=0),a.l.ra()}}function Cr(a,h,p){var m=p instanceof Ct?Sn(p):new Ct(p);if(m.g!="")h&&(m.g=h+"."+m.g),Ds(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var N=new Ct(null);m&&sn(N,m),h&&(N.g=h),C&&Ds(N,C),p&&(N.l=p),m=N}return p=a.D,h=a.ya,p&&h&&Ne(m,p,h),Ne(m,"VER",a.la),nt(a,m),m}function Pr(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new We(new Ht({eb:p})):new We(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dr(){}n=Dr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function rs(){}rs.prototype.g=function(a,h){return new Et(a,h)};function Et(a,h){ot.call(this),this.g=new _l(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!U(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new di(this)}R(Et,ot),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Tt(this.g)},Et.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=_r(a),a=p);h.i.push(new tt(h.Ya++,a)),h.G==3&&Fe(h)},Et.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,Et.aa.N.call(this)};function Nr(a){Kt.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Nr,Kt);function Or(){Rs.call(this),this.status=1}R(Or,Rs);function di(a){this.g=a}R(di,Dr),di.prototype.ua=function(){Ke(this.g,"a")},di.prototype.ta=function(a){Ke(this.g,new Nr(a))},di.prototype.sa=function(a){Ke(this.g,new Or)},di.prototype.ra=function(){Ke(this.g,"b")},rs.prototype.createWebChannel=rs.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,p_=function(){return new rs},f_=function(){return Cs()},d_=en,xu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},En.NO_ERROR=0,En.TIMEOUT=8,En.HTTP_ERROR=6,Nl=En,Lo.COMPLETE="complete",h_=Lo,Ji.EventType=Zi,Zi.OPEN="a",Zi.CLOSE="b",Zi.ERROR="c",Zi.MESSAGE="d",ot.prototype.listen=ot.prototype.K,ea=Ji,u_=Ht,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,c_=We}).apply(typeof wl<"u"?wl:typeof self<"u"?self:typeof window<"u"?window:{});const Nf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Ga("@firebase/firestore");function Qo(){return Ys.logLevel}function Q(n,...e){if(Ys.logLevel<=fe.DEBUG){const t=e.map(Kh);Ys.debug(`Firestore (${bo}): ${n}`,...t)}}function Wi(n,...e){if(Ys.logLevel<=fe.ERROR){const t=e.map(Kh);Ys.error(`Firestore (${bo}): ${n}`,...t)}}function co(n,...e){if(Ys.logLevel<=fe.WARN){const t=e.map(Kh);Ys.warn(`Firestore (${bo}): ${n}`,...t)}}function Kh(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n="Unexpected state"){const e=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: `+n;throw Wi(e),new Error(e)}function Be(n,e){n||ne()}function ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends xn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class L0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class V0{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let r=new ms;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ms,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ms)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string"),new m_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new Ft(e)}}class F0{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class U0{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new F0(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=r=>{r.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string"),this.R=t.token,new x0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=q0(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function Re(n,e){return n<e?-1:n>e?1:0}function uo(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Y(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new ct(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new ct(0,0))}static max(){return new se(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,i){t===void 0?t=0:t>e.length&&ne(),i===void 0?i=e.length-t:i>e.length-t&&ne(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Ma.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ma?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ye extends Ma{construct(e,t,i){return new Ye(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new Y(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const B0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends Ma{construct(e,t,i){return new St(e,t,i)}static isValidIdentifier(e){return B0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new St(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new Y(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(i+=l,s++):(r(),s++)}if(r(),o)throw new Y(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(t)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ye.fromString(e))}static fromName(e){return new J(Ye.fromString(e).popFirst(5))}static empty(){return new J(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ye(e.slice()))}}function W0(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(i===1e9?new ct(t+1,0):new ct(t,i));return new ws(s,J.empty(),e)}function j0(n){return new ws(n.readTime,n.key,-1)}class ws{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ws(se.min(),J.empty(),-1)}static max(){return new ws(se.max(),J.empty(),-1)}}function G0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=J.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class z0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==H0)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,i)=>{t(e)})}static reject(e){return new q((t,i)=>{i(e)})}static waitFor(e){return new q((t,i)=>{let s=0,r=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++r,o&&r===s&&t()},c=>i(c))}),o=!0,r===s&&t()})}static or(e){let t=q.resolve(!1);for(const i of e)t=t.next(s=>s?q.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new q((i,s)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++l,l===r&&i(o)},d=>s(d))}})}static doWhile(e,t){return new q((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function K0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xa(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Qh.oe=-1;function Vc(n){return n==null}function sc(n){return n===0&&1/n==-1/0}function Q0(n){return typeof n=="number"&&Number.isInteger(n)&&!sc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ko(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function __(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt=class $u{constructor(e,t){this.comparator=e,this.root=t||gs.EMPTY}insert(e,t){return new $u(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gs.BLACK,null,null))}remove(e){return new $u(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tl(this.root,e,this.comparator,!0)}},Tl=class{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},gs=class Ni{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Ni.RED,this.left=s??Ni.EMPTY,this.right=r??Ni.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Ni(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ni.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ni.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ni.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ni.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}};gs.EMPTY=null,gs.RED=!0,gs.BLACK=!1;gs.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,t,i,s,r){return this}insert(e,t,i){return new gs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mf(this.data.getIterator())}getIteratorFrom(e){return new Mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new At(this.comparator);return t.data=e,t}}class Mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new Jn([])}unionWith(e){let t=new At(St.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new y_("Invalid base64 string: "+r):r}}(e);return new jt(t)}static fromUint8Array(e){const t=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const X0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ts(n){if(Be(!!n),typeof n=="string"){let e=0;const t=X0.exec(n);if(Be(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Js(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Yh(n){const e=n.mapValue.fields.__previous_value__;return Xh(e)?Yh(e):e}function La(n){const e=Ts(n.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,t,i,s,r,o,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Va{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Va("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Va&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xh(n)?4:J0(n)?9007199254740991:10:ne()}function wi(n,e){if(n===e)return!0;const t=Zs(n);if(t!==Zs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return La(n).isEqual(La(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Ts(s.timestampValue),l=Ts(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return Js(s.bytesValue).isEqual(Js(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return st(s.geoPointValue.latitude)===st(r.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return st(s.integerValue)===st(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=st(s.doubleValue),l=st(r.doubleValue);return o===l?sc(o)===sc(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return uo(n.arrayValue.values||[],e.arrayValue.values||[],wi);case 10:return function(s,r){const o=s.mapValue.fields||{},l=r.mapValue.fields||{};if(Of(o)!==Of(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!wi(o[c],l[c])))return!1;return!0}(n,e);default:return ne()}}function Fa(n,e){return(n.values||[]).find(t=>wi(t,e))!==void 0}function ho(n,e){if(n===e)return 0;const t=Zs(n),i=Zs(e);if(t!==i)return Re(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return function(r,o){const l=st(r.integerValue||r.doubleValue),c=st(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Lf(n.timestampValue,e.timestampValue);case 4:return Lf(La(n),La(e));case 5:return Re(n.stringValue,e.stringValue);case 6:return function(r,o){const l=Js(r),c=Js(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Re(l[u],c[u]);if(d!==0)return d}return Re(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const l=Re(st(r.latitude),st(o.latitude));return l!==0?l:Re(st(r.longitude),st(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,o){const l=r.values||[],c=o.values||[];for(let u=0;u<l.length&&u<c.length;++u){const d=ho(l[u],c[u]);if(d)return d}return Re(l.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===El.mapValue&&o===El.mapValue)return 0;if(r===El.mapValue)return 1;if(o===El.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const g=Re(c[f],d[f]);if(g!==0)return g;const T=ho(l[c[f]],u[d[f]]);if(T!==0)return T}return Re(c.length,d.length)}(n.mapValue,e.mapValue);default:throw ne()}}function Lf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=Ts(n),i=Ts(e),s=Re(t.seconds,i.seconds);return s!==0?s:Re(t.nanos,i.nanos)}function fo(n){return qu(n)}function qu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ts(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Js(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return J.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=qu(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${qu(t.fields[o])}`;return s+"}"}(n.mapValue):ne()}function Bu(n){return!!n&&"integerValue"in n}function Jh(n){return!!n&&"arrayValue"in n}function Vf(n){return!!n&&"nullValue"in n}function Ff(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ol(n){return!!n&&"mapValue"in n}function wa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ko(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=wa(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function J0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.value=e}static empty(){return new Nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ol(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wa(t)}setAll(e){let t=St.emptyPath(),i={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,i,s),i={},s=[],t=l.popLast()}o?i[l.lastSegment()]=wa(o):s.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Ol(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Ol(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){ko(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Nn(wa(this.value))}}function v_(n){const e=[];return ko(n.fields,(t,i)=>{const s=new St([t]);if(Ol(i)){const r=v_(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,i,s,r,o,l){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ut(e,0,se.min(),se.min(),se.min(),Nn.empty(),0)}static newFoundDocument(e,t,i,s){return new Ut(e,1,t,se.min(),i,s,0)}static newNoDocument(e,t){return new Ut(e,2,t,se.min(),se.min(),Nn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,se.min(),se.min(),Nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t){this.position=e,this.inclusive=t}}function Uf(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=J.comparator(J.fromName(o.referenceValue),t.key):i=ho(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function xf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Z0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{}class lt extends w_{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new tb(e,t,i):t==="array-contains"?new sb(e,i):t==="in"?new rb(e,i):t==="not-in"?new ob(e,i):t==="array-contains-any"?new ab(e,i):new lt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new nb(e,i):new ib(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ho(t,this.value)):t!==null&&Zs(this.value)===Zs(t)&&this.matchesComparison(ho(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ti extends w_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ti(e,t)}matches(e){return T_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function T_(n){return n.op==="and"}function E_(n){return eb(n)&&T_(n)}function eb(n){for(const e of n.filters)if(e instanceof Ti)return!1;return!0}function Wu(n){if(n instanceof lt)return n.field.canonicalString()+n.op.toString()+fo(n.value);if(E_(n))return n.filters.map(e=>Wu(e)).join(",");{const e=n.filters.map(t=>Wu(t)).join(",");return`${n.op}(${e})`}}function I_(n,e){return n instanceof lt?function(i,s){return s instanceof lt&&i.op===s.op&&i.field.isEqual(s.field)&&wi(i.value,s.value)}(n,e):n instanceof Ti?function(i,s){return s instanceof Ti&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,l)=>r&&I_(o,s.filters[l]),!0):!1}(n,e):void ne()}function b_(n){return n instanceof lt?function(t){return`${t.field.canonicalString()} ${t.op} ${fo(t.value)}`}(n):n instanceof Ti?function(t){return t.op.toString()+" {"+t.getFilters().map(b_).join(" ,")+"}"}(n):"Filter"}class tb extends lt{constructor(e,t,i){super(e,t,i),this.key=J.fromName(i.referenceValue)}matches(e){const t=J.comparator(e.key,this.key);return this.matchesComparison(t)}}class nb extends lt{constructor(e,t){super(e,"in",t),this.keys=k_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ib extends lt{constructor(e,t){super(e,"not-in",t),this.keys=k_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function k_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>J.fromName(i.referenceValue))}class sb extends lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jh(t)&&Fa(t.arrayValue,this.value)}}class rb extends lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fa(this.value.arrayValue,t)}}class ob extends lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Fa(this.value.arrayValue,t)}}class ab extends lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Fa(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,t=null,i=[],s=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=l,this.ue=null}}function $f(n,e=null,t=[],i=[],s=null,r=null,o=null){return new lb(n,e,t,i,s,r,o)}function Zh(n){const e=ae(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Wu(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Vc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>fo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>fo(i)).join(",")),e.ue=t}return e.ue}function ed(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Z0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!I_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!xf(n.startAt,e.startAt)&&xf(n.endAt,e.endAt)}function ju(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t=null,i=[],s=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cb(n,e,t,i,s,r,o,l){return new Fc(n,e,t,i,s,r,o,l)}function Uc(n){return new Fc(n)}function qf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ub(n){return n.collectionGroup!==null}function Ta(n){const e=ae(n);if(e.ce===null){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new At(St.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new oc(r,i))}),t.has(St.keyField().canonicalString())||e.ce.push(new oc(St.keyField(),i))}return e.ce}function gi(n){const e=ae(n);return e.le||(e.le=hb(e,Ta(n))),e.le}function hb(n,e){if(n.limitType==="F")return $f(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new oc(s.field,r)});const t=n.endAt?new rc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new rc(n.startAt.position,n.startAt.inclusive):null;return $f(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Gu(n,e,t){return new Fc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xc(n,e){return ed(gi(n),gi(e))&&n.limitType===e.limitType}function S_(n){return`${Zh(gi(n))}|lt:${n.limitType}`}function xr(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>b_(s)).join(", ")}]`),Vc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>fo(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>fo(s)).join(",")),`Target(${i})`}(gi(n))}; limitType=${n.limitType})`}function $c(n,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):J.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,e)&&function(i,s){for(const r of Ta(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(o,l,c){const u=Uf(o,l,c);return o.inclusive?u<=0:u<0}(i.startAt,Ta(i),s)||i.endAt&&!function(o,l,c){const u=Uf(o,l,c);return o.inclusive?u>=0:u>0}(i.endAt,Ta(i),s))}(n,e)}function db(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function A_(n){return(e,t)=>{let i=!1;for(const s of Ta(n)){const r=fb(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function fb(n,e,t){const i=n.field.isKeyField()?J.comparator(e.key,t.key):function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?ho(c,u):ne()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ko(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return __(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=new rt(J.comparator);function ji(){return pb}const R_=new rt(J.comparator);function ta(...n){let e=R_;for(const t of n)e=e.insert(t.key,t);return e}function C_(n){let e=R_;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function js(){return Ea()}function P_(){return Ea()}function Ea(){return new So(n=>n.toString(),(n,e)=>n.isEqual(e))}const mb=new rt(J.comparator),gb=new At(J.comparator);function pe(...n){let e=gb;for(const t of n)e=e.add(t);return e}const _b=new At(Re);function yb(){return _b}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sc(e)?"-0":e}}function N_(n){return{integerValue:""+n}}function vb(n,e){return Q0(e)?N_(e):D_(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this._=void 0}}function wb(n,e,t){return n instanceof ac?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Xh(r)&&(r=Yh(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof Ua?M_(n,e):n instanceof xa?L_(n,e):function(s,r){const o=O_(s,r),l=Bf(o)+Bf(s.Pe);return Bu(o)&&Bu(s.Pe)?N_(l):D_(s.serializer,l)}(n,e)}function Tb(n,e,t){return n instanceof Ua?M_(n,e):n instanceof xa?L_(n,e):t}function O_(n,e){return n instanceof lc?function(i){return Bu(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class ac extends qc{}class Ua extends qc{constructor(e){super(),this.elements=e}}function M_(n,e){const t=V_(e);for(const i of n.elements)t.some(s=>wi(s,i))||t.push(i);return{arrayValue:{values:t}}}class xa extends qc{constructor(e){super(),this.elements=e}}function L_(n,e){let t=V_(e);for(const i of n.elements)t=t.filter(s=>!wi(s,i));return{arrayValue:{values:t}}}class lc extends qc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Bf(n){return st(n.integerValue||n.doubleValue)}function V_(n){return Jh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Eb(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof Ua&&s instanceof Ua||i instanceof xa&&s instanceof xa?uo(i.elements,s.elements,wi):i instanceof lc&&s instanceof lc?wi(i.Pe,s.Pe):i instanceof ac&&s instanceof ac}(n.transform,e.transform)}class Ib{constructor(e,t){this.version=e,this.transformResults=t}}class $i{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $i}static exists(e){return new $i(void 0,e)}static updateTime(e){return new $i(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bc{}function F_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new x_(n.key,$i.none()):new Ya(n.key,n.data,$i.none());{const t=n.data,i=Nn.empty();let s=new At(St.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new dr(n.key,i,new Jn(s.toArray()),$i.none())}}function bb(n,e,t){n instanceof Ya?function(s,r,o){const l=s.value.clone(),c=jf(s.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof dr?function(s,r,o){if(!Ml(s.precondition,r))return void r.convertToUnknownDocument(o.version);const l=jf(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(U_(s)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ia(n,e,t,i){return n instanceof Ya?function(r,o,l,c){if(!Ml(r.precondition,o))return l;const u=r.value.clone(),d=Gf(r.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,i):n instanceof dr?function(r,o,l,c){if(!Ml(r.precondition,o))return l;const u=Gf(r.fieldTransforms,c,o),d=o.data;return d.setAll(U_(r)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(f=>f.field))}(n,e,t,i):function(r,o,l){return Ml(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function kb(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=O_(i.transform,s||null);r!=null&&(t===null&&(t=Nn.empty()),t.set(i.field,r))}return t||null}function Wf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&uo(i,s,(r,o)=>Eb(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ya extends Bc{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dr extends Bc{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function U_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function jf(n,e,t){const i=new Map;Be(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,l=e.data.field(r.field);i.set(r.field,Tb(o,l,t[s]))}return i}function Gf(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,wb(r,o,e))}return i}class x_ extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sb extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&bb(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ia(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ia(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=P_();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=t.has(s.key)?null:l;const c=F_(o,l);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),pe())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,(t,i)=>Wf(t,i))&&uo(this.baseMutations,e.baseMutations,(t,i)=>Wf(t,i))}}class td{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){Be(e.mutations.length===i.length);let s=function(){return mb}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new td(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,ve;function Pb(n){switch(n){default:return ne();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function $_(n){if(n===void 0)return Wi("GRPC error has no .code"),W.UNKNOWN;switch(n){case it.OK:return W.OK;case it.CANCELLED:return W.CANCELLED;case it.UNKNOWN:return W.UNKNOWN;case it.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case it.INTERNAL:return W.INTERNAL;case it.UNAVAILABLE:return W.UNAVAILABLE;case it.UNAUTHENTICATED:return W.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case it.NOT_FOUND:return W.NOT_FOUND;case it.ALREADY_EXISTS:return W.ALREADY_EXISTS;case it.PERMISSION_DENIED:return W.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case it.ABORTED:return W.ABORTED;case it.OUT_OF_RANGE:return W.OUT_OF_RANGE;case it.UNIMPLEMENTED:return W.UNIMPLEMENTED;case it.DATA_LOSS:return W.DATA_LOSS;default:return ne()}}(ve=it||(it={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=new Ks([4294967295,4294967295],0);function Hf(n){const e=Db().encode(n),t=new l_;return t.update(e),new Uint8Array(t.digest())}function zf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Ks([t,i],0),new Ks([s,r],0)]}class nd{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new na(`Invalid padding: ${t}`);if(i<0)throw new na(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new na(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new na(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ks.fromNumber(this.Ie)}Ee(e,t,i){let s=e.add(t.multiply(Ks.fromNumber(i)));return s.compare(Nb)===1&&(s=new Ks([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Hf(e),[i,s]=zf(t);for(let r=0;r<this.hashCount;r++){const o=this.Ee(i,s,r);if(!this.de(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new nd(r,s,t);return i.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=Hf(e),[i,s]=zf(t);for(let r=0;r<this.hashCount;r++){const o=this.Ee(i,s,r);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Ja.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Wc(se.min(),s,new rt(Re),ji(),pe())}}class Ja{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ja(i,t,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,i,s){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=s}}class q_{constructor(e,t){this.targetId=e,this.me=t}}class B_{constructor(e,t,i=jt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Kf{constructor(){this.fe=0,this.ge=Xf(),this.pe=jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=pe(),t=pe(),i=pe();return this.ge.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:ne()}}),new Ja(this.pe,this.ye,e,t,i)}ve(){this.we=!1,this.ge=Xf()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ob{constructor(e){this.Le=e,this.Be=new Map,this.ke=ji(),this.qe=Qf(),this.Qe=new rt(Re)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.ve(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,i=e.me.count,s=this.Je(t);if(s){const r=s.target;if(ju(r))if(i===0){const o=new J(r.path);this.Ue(t,o,Ut.newNoDocument(o,se.min()))}else Be(i===1);else{const o=this.Ye(t);if(o!==i){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,l;try{o=Js(i).toUint8Array()}catch(c){if(c instanceof y_)return co("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new nd(o,s,r)}catch(c){return co(c instanceof na?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let s=0;return i.forEach(r=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,r,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((r,o)=>{const l=this.Je(o);if(l){if(r.current&&ju(l.target)){const c=new J(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Ut.newNoDocument(c,e))}r.be&&(t.set(o,r.Ce()),r.ve())}});let i=pe();this.qe.forEach((r,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const s=new Wc(e,t,this.Qe,this.ke,i);return this.ke=ji(),this.qe=Qf(),this.Qe=new rt(Re),s}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Kf,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new At(Re),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Kf),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Qf(){return new rt(J.comparator)}function Xf(){return new rt(J.comparator)}const Mb={asc:"ASCENDING",desc:"DESCENDING"},Lb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vb={and:"AND",or:"OR"};class Fb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hu(n,e){return n.useProto3Json||Vc(e)?e:{value:e}}function cc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function W_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ub(n,e){return cc(n,e.toTimestamp())}function _i(n){return Be(!!n),se.fromTimestamp(function(t){const i=Ts(t);return new ct(i.seconds,i.nanos)}(n))}function id(n,e){return zu(n,e).canonicalString()}function zu(n,e){const t=function(s){return new Ye(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function j_(n){const e=Ye.fromString(n);return Be(Q_(e)),e}function Ku(n,e){return id(n.databaseId,e.path)}function hu(n,e){const t=j_(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new J(H_(t))}function G_(n,e){return id(n.databaseId,e)}function xb(n){const e=j_(n);return e.length===4?Ye.emptyPath():H_(e)}function Qu(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function H_(n){return Be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Yf(n,e,t){return{name:Ku(n,e),fields:t.value.mapValue.fields}}function $b(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(u,d){return u.useProto3Json?(Be(d===void 0||typeof d=="string"),jt.fromBase64String(d||"")):(Be(d===void 0||d instanceof Buffer||d instanceof Uint8Array),jt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?W.UNKNOWN:$_(u.code);return new Y(d,u.message||"")}(o);t=new B_(i,s,r,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=hu(n,i.document.name),r=_i(i.document.updateTime),o=i.document.createTime?_i(i.document.createTime):se.min(),l=new Nn({mapValue:{fields:i.document.fields}}),c=Ut.newFoundDocument(s,r,o,l),u=i.targetIds||[],d=i.removedTargetIds||[];t=new Ll(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=hu(n,i.document),r=i.readTime?_i(i.readTime):se.min(),o=Ut.newNoDocument(s,r),l=i.removedTargetIds||[];t=new Ll([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=hu(n,i.document),r=i.removedTargetIds||[];t=new Ll([],r,s,null)}else{if(!("filter"in e))return ne();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new Cb(s,r),l=i.targetId;t=new q_(l,o)}}return t}function qb(n,e){let t;if(e instanceof Ya)t={update:Yf(n,e.key,e.value)};else if(e instanceof x_)t={delete:Ku(n,e.key)};else if(e instanceof dr)t={update:Yf(n,e.key,e.data),updateMask:Xb(e.fieldMask)};else{if(!(e instanceof Sb))return ne();t={verify:Ku(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const l=o.transform;if(l instanceof ac)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ua)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof lc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ne()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Ub(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ne()}(n,e.precondition)),t}function Bb(n,e){return n&&n.length>0?(Be(e!==void 0),n.map(t=>function(s,r){let o=s.updateTime?_i(s.updateTime):_i(r);return o.isEqual(se.min())&&(o=_i(r)),new Ib(o,s.transformResults||[])}(t,e))):[]}function Wb(n,e){return{documents:[G_(n,e.path)]}}function jb(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=G_(n,s);const r=function(u){if(u.length!==0)return K_(Ti.create(u,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:$r(g.field),direction:zb(g.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Hu(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:s}}function Gb(n){let e=xb(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){Be(i===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let r=[];t.where&&(r=function(f){const g=z_(f);return g instanceof Ti&&E_(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(R){return new oc(qr(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(f){let g;return g=typeof f=="object"?f.value:f,Vc(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(f){const g=!!f.before,T=f.values||[];return new rc(T,g)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const g=!f.before,T=f.values||[];return new rc(T,g)}(t.endAt)),cb(e,s,o,r,l,"F",c,u)}function Hb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function z_(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=qr(t.unaryFilter.field);return lt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=qr(t.unaryFilter.field);return lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qr(t.unaryFilter.field);return lt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qr(t.unaryFilter.field);return lt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(n):n.fieldFilter!==void 0?function(t){return lt.create(qr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ti.create(t.compositeFilter.filters.map(i=>z_(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(t.compositeFilter.op))}(n):ne()}function zb(n){return Mb[n]}function Kb(n){return Lb[n]}function Qb(n){return Vb[n]}function $r(n){return{fieldPath:n.canonicalString()}}function qr(n){return St.fromServerFormat(n.fieldPath)}function K_(n){return n instanceof lt?function(t){if(t.op==="=="){if(Ff(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NAN"}};if(Vf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ff(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NAN"}};if(Vf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(t.field),op:Kb(t.op),value:t.value}}}(n):n instanceof Ti?function(t){const i=t.getFilters().map(s=>K_(s));return i.length===1?i[0]:{compositeFilter:{op:Qb(t.op),filters:i}}}(n):ne()}function Xb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Q_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,i,s,r=se.min(),o=se.min(),l=jt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new hs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.ct=e}}function Jb(n){const e=Gb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this._n=new ek}addToCollectionParentIndex(e,t){return this._n.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(ws.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(ws.min())}updateCollectionGroup(e,t,i){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class ek{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new At(Ye.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new At(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new po(0)}static Ln(){return new po(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.changes=new So(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Ia(i.mutation,s,Jn.empty(),ct.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=pe()){const s=js();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=ta();return r.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=js();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,pe()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,i,s){let r=ji();const o=Ea(),l=function(){return Ea()}();return t.forEach((c,u)=>{const d=i.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof dr)?r=r.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Ia(d.mutation,u,d.mutation.getFieldMask(),ct.now())):o.set(u.key,Jn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var f;return l.set(u,new nk(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,t){const i=Ea();let s=new rt((o,l)=>o-l),r=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=i.get(c)||Jn.empty();d=l.applyToLocalView(u,d),i.set(c,d);const f=(s.get(l.batchId)||pe()).add(c);s=s.insert(l.batchId,f)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,f=P_();d.forEach(g=>{if(!r.has(g)){const T=F_(t.get(g),i.get(g));T!==null&&f.set(g,T),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return q.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ub(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):q.resolve(js());let l=-1,c=r;return o.next(u=>q.forEach(u,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),r.get(d)?q.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,pe())).next(d=>({batchId:l,changes:C_(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new J(t)).next(i=>{let s=ta();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=ta();return this.indexManager.getCollectionParents(e,r).next(l=>q.forEach(l,c=>{const u=function(f,g){return new Fc(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,i,s).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s))).next(o=>{r.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Ut.newInvalidDocument(d)))});let l=ta();return o.forEach((c,u)=>{const d=r.get(c);d!==void 0&&Ia(d.mutation,u,Jn.empty(),ct.now()),$c(t,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return q.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:_i(s.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:Jb(s.bundledQuery),readTime:_i(s.readTime)}}(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.overlays=new rt(J.comparator),this.hr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=js();return q.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.ht(e,t,r)}),q.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(i)),q.resolve()}getOverlaysForCollection(e,t,i){const s=js(),r=t.length+1,o=new J(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return q.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new rt((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>i){let d=r.get(u.largestBatchId);d===null&&(d=js(),r=r.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=js(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return q.resolve(l)}ht(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Rb(t,i));let r=this.hr.get(t);r===void 0&&(r=pe(),this.hr.set(t,r)),this.hr.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.Pr=new At(pt.Ir),this.Tr=new At(pt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const i=new pt(e,t);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Ar(new pt(e,t))}Rr(e,t){e.forEach(i=>this.removeReference(i,t))}Vr(e){const t=new J(new Ye([])),i=new pt(t,e),s=new pt(t,e+1),r=[];return this.Tr.forEachInRange([i,s],o=>{this.Ar(o),r.push(o.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new J(new Ye([])),i=new pt(t,e),s=new pt(t,e+1);let r=pe();return this.Tr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new pt(e,0),i=this.Pr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class pt{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return J.comparator(e.key,t.key)||Re(e.pr,t.pr)}static Er(e,t){return Re(e.pr,t.pr)||J.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new At(pt.Ir)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ab(r,t,i,s);this.mutationQueue.push(o);for(const l of s)this.wr=this.wr.add(new pt(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,t){return q.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.br(i),r=s<0?0:s;return q.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new pt(t,0),s=new pt(t,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([i,s],o=>{const l=this.Sr(o.pr);r.push(l)}),q.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new At(Re);return t.forEach(s=>{const r=new pt(s,0),o=new pt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,o],l=>{i=i.add(l.pr)})}),q.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;J.isDocumentKey(r)||(r=r.child(""));const o=new pt(new J(r),0);let l=new At(Re);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.pr)),!0)},o),q.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(i=>{const s=this.Sr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Be(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return q.forEach(t.mutations,s=>{const r=new pt(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=i})}Mn(e){}containsKey(e,t){const i=new pt(t,0),s=this.wr.firstAfterOrEqual(i);return q.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.vr=e,this.docs=function(){return new rt(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.vr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return q.resolve(i?i.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let i=ji();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ut.newInvalidDocument(s))}),q.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=ji();const o=t.path,l=new J(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||G0(j0(d),i)<=0||(s.has(d.key)||$c(t,d))&&(r=r.insert(d.key,d.mutableCopy()))}return q.resolve(r)}getAllFromCollectionGroup(e,t,i,s){ne()}Fr(e,t){return q.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new lk(this)}getSize(e){return q.resolve(this.size)}}class lk extends tk{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(i)}),q.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.persistence=e,this.Mr=new So(t=>Zh(t),ed),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Or=0,this.Nr=new sd,this.targetCount=0,this.Lr=po.Nn()}forEachTarget(e,t){return this.Mr.forEach((i,s)=>t(s)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Or&&(this.Or=t),q.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new po(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.qn(t),q.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=t&&i.get(l.targetId)===null&&(this.Mr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),q.waitFor(r).next(()=>s)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const i=this.Mr.get(t)||null;return q.resolve(i)}addMatchingKeys(e,t,i){return this.Nr.dr(t,i),q.resolve()}removeMatchingKeys(e,t,i){this.Nr.Rr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),q.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Nr.gr(t);return q.resolve(i)}containsKey(e,t){return q.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,t){this.Br={},this.overlays={},this.kr=new Qh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new ck(this),this.indexManager=new Zb,this.remoteDocumentCache=function(s){return new ak(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new Yb(t),this.$r=new sk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Br[e.toKey()];return i||(i=new ok(t,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,i){Q("MemoryPersistence","Starting transaction:",e);const s=new hk(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(r=>this.referenceDelegate.Wr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gr(e,t){return q.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,t)))}}class hk extends z0{constructor(e){super(),this.currentSequenceNumber=e}}class rd{constructor(e){this.persistence=e,this.zr=new sd,this.jr=null}static Hr(e){return new rd(e)}get Jr(){if(this.jr)return this.jr;throw ne()}addReference(e,t,i){return this.zr.addReference(i,t),this.Jr.delete(i.toString()),q.resolve()}removeReference(e,t,i){return this.zr.removeReference(i,t),this.Jr.add(i.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),q.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Jr.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Jr,i=>{const s=J.fromPath(i);return this.Yr(e,s).next(r=>{r||t.removeEntry(s,se.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(i=>{i?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return q.or([()=>q.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.qi=i,this.Qi=s}static Ki(e,t){let i=pe(),s=pe();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new od(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return uT()?8:K0(Rt())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.ji(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Hi(e,t,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new dk;return this.Ji(e,t,o).next(l=>{if(r.result=l,this.Ui)return this.Yi(e,t,o,l.size)})}).next(()=>r.result)}Yi(e,t,i,s){return i.documentReadCount<this.Wi?(Qo()<=fe.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",xr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),q.resolve()):(Qo()<=fe.DEBUG&&Q("QueryEngine","Query:",xr(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(Qo()<=fe.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",xr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gi(t))):q.resolve())}ji(e,t){if(qf(t))return q.resolve(null);let i=gi(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Gu(t,null,"F"),i=gi(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=pe(...r);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.Zi(t,l);return this.Xi(t,u,o,c.readTime)?this.ji(e,Gu(t,null,"F")):this.es(e,u,t,c)}))})))}Hi(e,t,i,s){return qf(t)||s.isEqual(se.min())?q.resolve(null):this.zi.getDocuments(e,i).next(r=>{const o=this.Zi(t,r);return this.Xi(t,o,i,s)?q.resolve(null):(Qo()<=fe.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xr(t)),this.es(e,o,t,W0(s,-1)).next(l=>l))})}Zi(e,t){let i=new At(A_(e));return t.forEach((s,r)=>{$c(e,r)&&(i=i.add(r))}),i}Xi(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ji(e,t,i){return Qo()<=fe.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",xr(t)),this.zi.getDocumentsMatchingQuery(e,t,ws.min(),i)}es(e,t,i,s){return this.zi.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,t,i,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new rt(Re),this.rs=new So(r=>Zh(r),ed),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(i)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ik(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function mk(n,e,t,i){return new pk(n,e,t,i)}async function X_(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t._s(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],l=[];let c=pe();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of r){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(i,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:l}))})})}function gk(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.os.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const f=u.batch,g=f.keys();let T=q.resolve();return g.forEach(R=>{T=T.next(()=>d.getEntry(c,R)).next(M=>{const D=u.docVersions.get(R);Be(D!==null),M.version.compareTo(D)<0&&(f.applyToRemoteDocument(M,u),M.isValidDocument()&&(M.setReadTime(u.commitVersion),d.addEntry(M)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let c=pe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function Y_(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function _k(n,e){const t=ae(n),i=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const l=[];e.targetChanges.forEach((d,f)=>{const g=s.get(f);if(!g)return;l.push(t.Qr.removeMatchingKeys(r,d.removedDocuments,f).next(()=>t.Qr.addMatchingKeys(r,d.addedDocuments,f)));let T=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(f)!==null?T=T.withResumeToken(jt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,i)),s=s.insert(f,T),function(M,D,L){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(g,T,d)&&l.push(t.Qr.updateTargetData(r,T))});let c=ji(),u=pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,d))}),l.push(yk(r,o,e.documentUpdates).next(d=>{c=d.cs,u=d.ls})),!i.isEqual(se.min())){const d=t.Qr.getLastRemoteSnapshotVersion(r).next(f=>t.Qr.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(d)}return q.waitFor(l).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(t.ns=s,r))}function yk(n,e,t){let i=pe(),s=pe();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=ji();return t.forEach((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:s}})}function vk(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function wk(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Qr.getTargetData(i,e).next(r=>r?(s=r,q.resolve(s)):t.Qr.allocateTargetId(i).next(o=>(s=new hs(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.ns.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(i.targetId,i),t.rs.set(e,i.targetId)),i})}async function Xu(n,e,t){const i=ae(n),s=i.ns.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xa(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.ns=i.ns.remove(e),i.rs.delete(s.target)}function Jf(n,e,t){const i=ae(n);let s=se.min(),r=pe();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=ae(c),g=f.rs.get(d);return g!==void 0?q.resolve(f.ns.get(g)):f.Qr.getTargetData(u,d)}(i,o,gi(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{r=c})}).next(()=>i.ts.getDocumentsMatchingQuery(o,e,t?s:se.min(),t?r:pe())).next(l=>(Tk(i,db(e),l),{documents:l,hs:r})))}function Tk(n,e,t){let i=n.ss.get(e)||se.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.ss.set(e,i)}class Zf{constructor(){this.activeTargetIds=yb()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ek{constructor(){this.no=new Zf,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,i){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Zf,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il=null;function du(){return Il===null?Il=function(){return 268435456+Math.round(2147483648*Math.random())}():Il++,"0x"+Il.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="WebChannelConnection";class Sk extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+t.host,this.So=`projects/${s}/databases/${r}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get Do(){return!1}Co(t,i,s,r,o){const l=du(),c=this.vo(t,i.toUriEncodedString());Q("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,r,o),this.Mo(t,c,u,s).then(d=>(Q("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw co("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}xo(t,i,s,r,o,l){return this.Co(t,i,s,r,o)}Fo(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>t[o]=r),s&&s.headers.forEach((r,o)=>t[o]=r)}vo(t,i){const s=bk[t];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,i,s){const r=du();return new Promise((o,l)=>{const c=new c_;c.setWithCredentials(!0),c.listenOnce(h_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Nl.NO_ERROR:const d=c.getResponseJson();Q(Vt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(d)),o(d);break;case Nl.TIMEOUT:Q(Vt,`RPC '${e}' ${r} timed out`),l(new Y(W.DEADLINE_EXCEEDED,"Request time out"));break;case Nl.HTTP_ERROR:const f=c.getStatus();if(Q(Vt,`RPC '${e}' ${r} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const R=function(D){const L=D.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(L)>=0?L:W.UNKNOWN}(T.status);l(new Y(R,T.message))}else l(new Y(W.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(W.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{Q(Vt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(s);Q(Vt,`RPC '${e}' ${r} sending request:`,s),c.send(t,"POST",u,i,15)})}Oo(e,t,i){const s=du(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=p_(),l=f_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new u_({})),this.Fo(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const d=r.join("");Q(Vt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const f=o.createWebChannel(d,c);let g=!1,T=!1;const R=new kk({lo:D=>{T?Q(Vt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(Q(Vt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),Q(Vt,`RPC '${e}' stream ${s} sending:`,D),f.send(D))},ho:()=>f.close()}),M=(D,L,U)=>{D.listen(L,F=>{try{U(F)}catch(z){setTimeout(()=>{throw z},0)}})};return M(f,ea.EventType.OPEN,()=>{T||(Q(Vt,`RPC '${e}' stream ${s} transport opened.`),R.mo())}),M(f,ea.EventType.CLOSE,()=>{T||(T=!0,Q(Vt,`RPC '${e}' stream ${s} transport closed`),R.po())}),M(f,ea.EventType.ERROR,D=>{T||(T=!0,co(Vt,`RPC '${e}' stream ${s} transport errored:`,D),R.po(new Y(W.UNAVAILABLE,"The operation could not be completed")))}),M(f,ea.EventType.MESSAGE,D=>{var L;if(!T){const U=D.data[0];Be(!!U);const F=U,z=F.error||((L=F[0])===null||L===void 0?void 0:L.error);if(z){Q(Vt,`RPC '${e}' stream ${s} received error:`,z);const ee=z.status;let X=function(E){const I=it[E];if(I!==void 0)return $_(I)}(ee),k=z.message;X===void 0&&(X=W.INTERNAL,k="Unknown error status: "+ee+" with message "+z.message),T=!0,R.po(new Y(X,k)),f.close()}else Q(Vt,`RPC '${e}' stream ${s} received:`,U),R.yo(U)}}),M(l,d_.STAT_EVENT,D=>{D.stat===xu.PROXY?Q(Vt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===xu.NOPROXY&&Q(Vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}function fu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n){return new Fb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t,i=1e3,s=1.5,r=6e4){this.oi=e,this.timerId=t,this.No=i,this.Lo=s,this.Bo=r,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,t-i);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t,i,s,r,o,l,c){this.oi=e,this.Go=i,this.zo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new J_(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Wi(t.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===t&&this.u_(i,s)},i=>{e(()=>{const s=new Y(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(e,t){const i=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ak extends Z_{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=$b(this.serializer,e),i=function(r){if(!("targetChange"in r))return se.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?_i(o.readTime):se.min()}(e);return this.listener.h_(t,i)}P_(e){const t={};t.database=Qu(this.serializer),t.addTarget=function(r,o){let l;const c=o.target;if(l=ju(c)?{documents:Wb(r,c)}:{query:jb(r,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=W_(r,o.resumeToken);const u=Hu(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=cc(r,o.snapshotVersion.toTimestamp());const u=Hu(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const i=Hb(this.serializer,e);i&&(t.labels=i),this.i_(t)}I_(e){const t={};t.database=Qu(this.serializer),t.removeTarget=e,this.i_(t)}}class Rk extends Z_{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Bb(e.writeResults,e.commitTime),i=_i(e.commitTime);return this.listener.A_(i,t)}return Be(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Qu(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>qb(this.serializer,i))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new Y(W.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,zu(t,i),s,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Y(W.UNKNOWN,r.toString())})}xo(e,t,i,s,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,zu(t,i),s,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(W.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Pk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Wi(t),this.y_=!1):Q("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=r,this.O_.io(o=>{i.enqueueAndForget(async()=>{fr(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ae(c);u.M_.add(4),await Za(u),u.N_.set("Unknown"),u.M_.delete(4),await Gc(u)}(this))})}),this.N_=new Pk(i,s)}}async function Gc(n){if(fr(n))for(const e of n.x_)await e(!0)}async function Za(n){for(const e of n.x_)await e(!1)}function ey(n,e){const t=ae(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),ud(t)?cd(t):Ao(t).Xo()&&ld(t,e))}function ad(n,e){const t=ae(n),i=Ao(t);t.F_.delete(e),i.Xo()&&ty(t,e),t.F_.size===0&&(i.Xo()?i.n_():fr(t)&&t.N_.set("Unknown"))}function ld(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ao(n).P_(e)}function ty(n,e){n.L_.xe(e),Ao(n).I_(e)}function cd(n){n.L_=new Ob({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ao(n).start(),n.N_.w_()}function ud(n){return fr(n)&&!Ao(n).Zo()&&n.F_.size>0}function fr(n){return ae(n).M_.size===0}function ny(n){n.L_=void 0}async function Nk(n){n.N_.set("Online")}async function Ok(n){n.F_.forEach((e,t)=>{ld(n,e)})}async function Mk(n,e){ny(n),ud(n)?(n.N_.D_(e),cd(n)):n.N_.set("Unknown")}async function Lk(n,e,t){if(n.N_.set("Online"),e instanceof B_&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const l of r.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.F_.delete(l),s.L_.removeTarget(l))}(n,e)}catch(i){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await uc(n,i)}else if(e instanceof Ll?n.L_.Ke(e):e instanceof q_?n.L_.He(e):n.L_.We(e),!t.isEqual(se.min()))try{const i=await Y_(n.localStore);t.compareTo(i)>=0&&await function(r,o){const l=r.L_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.F_.get(u);d&&r.F_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=r.F_.get(c);if(!d)return;r.F_.set(c,d.withResumeToken(jt.EMPTY_BYTE_STRING,d.snapshotVersion)),ty(r,c);const f=new hs(d.target,c,u,d.sequenceNumber);ld(r,f)}),r.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(i){Q("RemoteStore","Failed to raise snapshot:",i),await uc(n,i)}}async function uc(n,e,t){if(!Xa(e))throw e;n.M_.add(1),await Za(n),n.N_.set("Offline"),t||(t=()=>Y_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Gc(n)})}function iy(n,e){return e().catch(t=>uc(n,t,e))}async function Hc(n){const e=ae(n),t=Es(e);let i=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Vk(e);)try{const s=await vk(e.localStore,i);if(s===null){e.v_.length===0&&t.n_();break}i=s.batchId,Fk(e,s)}catch(s){await uc(e,s)}sy(e)&&ry(e)}function Vk(n){return fr(n)&&n.v_.length<10}function Fk(n,e){n.v_.push(e);const t=Es(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function sy(n){return fr(n)&&!Es(n).Zo()&&n.v_.length>0}function ry(n){Es(n).start()}async function Uk(n){Es(n).V_()}async function xk(n){const e=Es(n);for(const t of n.v_)e.d_(t.mutations)}async function $k(n,e,t){const i=n.v_.shift(),s=td.from(i,e,t);await iy(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Hc(n)}async function qk(n,e){e&&Es(n).E_&&await async function(i,s){if(function(o){return Pb(o)&&o!==W.ABORTED}(s.code)){const r=i.v_.shift();Es(i).t_(),await iy(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Hc(i)}}(n,e),sy(n)&&ry(n)}async function tp(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const i=fr(t);t.M_.add(3),await Za(t),i&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Gc(t)}async function Bk(n,e){const t=ae(n);e?(t.M_.delete(2),await Gc(t)):e||(t.M_.add(2),await Za(t),t.N_.set("Unknown"))}function Ao(n){return n.B_||(n.B_=function(t,i,s){const r=ae(t);return r.f_(),new Ak(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Po:Nk.bind(null,n),To:Ok.bind(null,n),Ao:Mk.bind(null,n),h_:Lk.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),ud(n)?cd(n):n.N_.set("Unknown")):(await n.B_.stop(),ny(n))})),n.B_}function Es(n){return n.k_||(n.k_=function(t,i,s){const r=ae(t);return r.f_(),new Rk(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Uk.bind(null,n),Ao:qk.bind(null,n),R_:xk.bind(null,n),A_:$k.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await Hc(n)):(await n.k_.stop(),n.v_.length>0&&(Q("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,l=new hd(e,t,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dd(n,e){if(Wi("AsyncQueue",`${e}: ${n}`),Xa(n))return new Y(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.comparator=e?(t,i)=>e(t,i)||J.comparator(t.key,i.key):(t,i)=>J.comparator(t.key,i.key),this.keyedMap=ta(),this.sortedSet=new rt(this.comparator)}static emptySet(e){return new so(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new so;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.q_=new rt(J.comparator)}track(e){const t=e.doc.key,i=this.q_.get(t);i?e.type!==0&&i.type===3?this.q_=this.q_.insert(t,e):e.type===3&&i.type!==1?this.q_=this.q_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.q_=this.q_.remove(t):e.type===1&&i.type===2?this.q_=this.q_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):ne():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,i)=>{e.push(i)}),e}}class mo{constructor(e,t,i,s,r,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new mo(e,t,so.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class jk{constructor(){this.queries=new So(e=>S_(e),xc),this.onlineState="Unknown",this.z_=new Set}}async function oy(n,e){const t=ae(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.W_()&&e.G_()&&(i=2):(r=new Wk,i=e.G_()?0:1);try{switch(i){case 0:r.K_=await t.onListen(s,!0);break;case 1:r.K_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=dd(o,`Initialization of query '${xr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,r),r.U_.push(e),e.j_(t.onlineState),r.K_&&e.H_(r.K_)&&fd(t)}async function ay(n,e){const t=ae(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.U_.indexOf(e);o>=0&&(r.U_.splice(o,1),r.U_.length===0?s=e.G_()?0:1:!r.W_()&&e.G_()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Gk(n,e){const t=ae(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const l of o.U_)l.H_(s)&&(i=!0);o.K_=s}}i&&fd(t)}function Hk(n,e,t){const i=ae(n),s=i.queries.get(e);if(s)for(const r of s.U_)r.onError(t);i.queries.delete(e)}function fd(n){n.z_.forEach(e=>{e.next()})}var Yu,ip;(ip=Yu||(Yu={})).J_="default",ip.Cache="cache";class ly{constructor(e,t,i){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=i||{}}H_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new mo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const i=t!=="Offline";return(!this.options.ra||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Yu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.key=e}}class uy{constructor(e){this.key=e}}class zk{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=pe(),this.mutatedKeys=pe(),this.Ia=A_(e),this.Ta=new so(this.Ia)}get Ea(){return this.la}da(e,t){const i=t?t.Aa:new np,s=t?t.Ta:this.Ta;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const g=s.get(d),T=$c(this.query,f)?f:null,R=!!g&&this.mutatedKeys.has(g.key),M=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let D=!1;g&&T?g.data.isEqual(T.data)?R!==M&&(i.track({type:3,doc:T}),D=!0):this.Ra(g,T)||(i.track({type:2,doc:T}),D=!0,(c&&this.Ia(T,c)>0||u&&this.Ia(T,u)<0)&&(l=!0)):!g&&T?(i.track({type:0,doc:T}),D=!0):g&&!T&&(i.track({type:1,doc:g}),D=!0,(c||u)&&(l=!0)),D&&(T?(o=o.add(T),r=M?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{Ta:o,Aa:i,Xi:l,mutatedKeys:r}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(T,R){const M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return M(T)-M(R)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(i),s=s!=null&&s;const l=t&&!s?this.ma():[],c=this.Pa.size===0&&this.current&&!s?1:0,u=c!==this.ha;return this.ha=c,o.length!==0||u?{snapshot:new mo(this.query,e.Ta,r,o,e.mutatedKeys,c===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new np,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=pe(),this.Ta.forEach(i=>{this.ga(i.key)&&(this.Pa=this.Pa.add(i.key))});const t=[];return e.forEach(i=>{this.Pa.has(i)||t.push(new uy(i))}),this.Pa.forEach(i=>{e.has(i)||t.push(new cy(i))}),t}pa(e){this.la=e.hs,this.Pa=pe();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return mo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Kk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Qk{constructor(e){this.key=e,this.wa=!1}}class Xk{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new So(l=>S_(l),xc),this.Da=new Map,this.Ca=new Set,this.va=new rt(J.comparator),this.Fa=new Map,this.Ma=new sd,this.xa={},this.Oa=new Map,this.Na=po.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Yk(n,e,t=!0){const i=gy(n);let s;const r=i.ba.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.ya()):s=await hy(i,e,t,!0),s}async function Jk(n,e){const t=gy(n);await hy(t,e,!0,!1)}async function hy(n,e,t,i){const s=await wk(n.localStore,gi(e)),r=s.targetId,o=t?n.sharedClientState.addLocalQueryTarget(r):"not-current";let l;return i&&(l=await Zk(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&ey(n.remoteStore,s),l}async function Zk(n,e,t,i,s){n.Ba=(f,g,T)=>async function(M,D,L,U){let F=D.view.da(L);F.Xi&&(F=await Jf(M.localStore,D.query,!1).then(({documents:k})=>D.view.da(k,F)));const z=U&&U.targetChanges.get(D.targetId),ee=U&&U.targetMismatches.get(D.targetId)!=null,X=D.view.applyChanges(F,M.isPrimaryClient,z,ee);return rp(M,D.targetId,X.fa),X.snapshot}(n,f,g,T);const r=await Jf(n.localStore,e,!0),o=new zk(e,r.hs),l=o.da(r.documents),c=Ja.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),u=o.applyChanges(l,n.isPrimaryClient,c);rp(n,t,u.fa);const d=new Kk(e,t,o);return n.ba.set(e,d),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),u.snapshot}async function eS(n,e,t){const i=ae(n),s=i.ba.get(e),r=i.Da.get(s.targetId);if(r.length>1)return i.Da.set(s.targetId,r.filter(o=>!xc(o,e))),void i.ba.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Xu(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&ad(i.remoteStore,s.targetId),Ju(i,s.targetId)}).catch(Qa)):(Ju(i,s.targetId),await Xu(i.localStore,s.targetId,!0))}async function tS(n,e){const t=ae(n),i=t.ba.get(e),s=t.Da.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),ad(t.remoteStore,i.targetId))}async function nS(n,e,t){const i=cS(n);try{const s=await function(o,l){const c=ae(o),u=ct.now(),d=l.reduce((T,R)=>T.add(R.key),pe());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=ji(),M=pe();return c.os.getEntries(T,d).next(D=>{R=D,R.forEach((L,U)=>{U.isValidDocument()||(M=M.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,R)).next(D=>{f=D;const L=[];for(const U of l){const F=kb(U,f.get(U.key).overlayedDocument);F!=null&&L.push(new dr(U.key,F,v_(F.value.mapValue),$i.exists(!0)))}return c.mutationQueue.addMutationBatch(T,u,L,l)}).next(D=>{g=D;const L=D.applyToLocalDocumentSet(f,M);return c.documentOverlayCache.saveOverlays(T,D.batchId,L)})}).then(()=>({batchId:g.batchId,changes:C_(f)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.xa[o.currentUser.toKey()];u||(u=new rt(Re)),u=u.insert(l,c),o.xa[o.currentUser.toKey()]=u}(i,s.batchId,t),await el(i,s.changes),await Hc(i.remoteStore)}catch(s){const r=dd(s,"Failed to persist write");t.reject(r)}}async function dy(n,e){const t=ae(n);try{const i=await _k(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.Fa.get(r);o&&(Be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?Be(o.wa):s.removedDocuments.size>0&&(Be(o.wa),o.wa=!1))}),await el(t,i,e)}catch(i){await Qa(i)}}function sp(n,e,t){const i=ae(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.ba.forEach((r,o)=>{const l=o.view.j_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ae(o);c.onlineState=l;let u=!1;c.queries.forEach((d,f)=>{for(const g of f.U_)g.j_(l)&&(u=!0)}),u&&fd(c)}(i.eventManager,e),s.length&&i.Sa.h_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function iS(n,e,t){const i=ae(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Fa.get(e),r=s&&s.key;if(r){let o=new rt(J.comparator);o=o.insert(r,Ut.newNoDocument(r,se.min()));const l=pe().add(r),c=new Wc(se.min(),new Map,new rt(Re),o,l);await dy(i,c),i.va=i.va.remove(r),i.Fa.delete(e),pd(i)}else await Xu(i.localStore,e,!1).then(()=>Ju(i,e,t)).catch(Qa)}async function sS(n,e){const t=ae(n),i=e.batch.batchId;try{const s=await gk(t.localStore,e);py(t,i,null),fy(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await el(t,s)}catch(s){await Qa(s)}}async function rS(n,e,t){const i=ae(n);try{const s=await function(o,l){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(Be(f!==null),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(i.localStore,e);py(i,e,t),fy(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await el(i,s)}catch(s){await Qa(s)}}function fy(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function py(n,e,t){const i=ae(n);let s=i.xa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.xa[i.currentUser.toKey()]=s}}function Ju(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Da.get(e))n.ba.delete(i),t&&n.Sa.ka(i,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(i=>{n.Ma.containsKey(i)||my(n,i)})}function my(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(ad(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),pd(n))}function rp(n,e,t){for(const i of t)i instanceof cy?(n.Ma.addReference(i.key,e),oS(n,i)):i instanceof uy?(Q("SyncEngine","Document no longer in limbo: "+i.key),n.Ma.removeReference(i.key,e),n.Ma.containsKey(i.key)||my(n,i.key)):ne()}function oS(n,e){const t=e.key,i=t.path.canonicalString();n.va.get(t)||n.Ca.has(i)||(Q("SyncEngine","New document in limbo: "+t),n.Ca.add(i),pd(n))}function pd(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new J(Ye.fromString(e)),i=n.Na.next();n.Fa.set(i,new Qk(t)),n.va=n.va.insert(t,i),ey(n.remoteStore,new hs(gi(Uc(t.path)),i,"TargetPurposeLimboResolution",Qh.oe))}}async function el(n,e,t){const i=ae(n),s=[],r=[],o=[];i.ba.isEmpty()||(i.ba.forEach((l,c)=>{o.push(i.Ba(c,e,t).then(u=>{if((u||t)&&i.isPrimaryClient){const d=u&&!u.fromCache;i.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=od.Ki(c.targetId,u);r.push(d)}}))}),await Promise.all(o),i.Sa.h_(s),await async function(c,u){const d=ae(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>q.forEach(u,g=>q.forEach(g.qi,T=>d.persistence.referenceDelegate.addReference(f,g.targetId,T)).next(()=>q.forEach(g.Qi,T=>d.persistence.referenceDelegate.removeReference(f,g.targetId,T)))))}catch(f){if(!Xa(f))throw f;Q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const T=d.ns.get(g),R=T.snapshotVersion,M=T.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(g,M)}}}(i.localStore,r))}async function aS(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const i=await X_(t.localStore,e);t.currentUser=e,function(r,o){r.Oa.forEach(l=>{l.forEach(c=>{c.reject(new Y(W.CANCELLED,o))})}),r.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await el(t,i.us)}}function lS(n,e){const t=ae(n),i=t.Fa.get(e);if(i&&i.wa)return pe().add(i.key);{let s=pe();const r=t.Da.get(e);if(!r)return s;for(const o of r){const l=t.ba.get(o);s=s.unionWith(l.view.Ea)}return s}}function gy(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iS.bind(null,e),e.Sa.h_=Gk.bind(null,e.eventManager),e.Sa.ka=Hk.bind(null,e.eventManager),e}function cS(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rS.bind(null,e),e}class op{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=jc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return mk(this.persistence,new fk,e.initialUser,this.serializer)}createPersistence(e){return new uk(rd.Hr,this.serializer)}createSharedClientState(e){return new Ek}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uS{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>sp(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=aS.bind(null,this.syncEngine),await Bk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jk}()}createDatastore(e){const t=jc(e.databaseInfo.databaseId),i=function(r){return new Sk(r)}(e.databaseInfo);return function(r,o,l,c){return new Ck(r,o,l,c)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,r,o,l){return new Dk(i,s,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>sp(this.syncEngine,t,0),function(){return ep.D()?new ep:new Ik}())}createSyncEngine(e,t){return function(s,r,o,l,c,u,d){const f=new Xk(s,r,o,l,c,u);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(i){const s=ae(i);Q("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Za(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Wi("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=Ft.UNAUTHENTICATED,this.clientId=g_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Q("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Q("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(W.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=dd(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function pu(n,e){n.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await X_(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ap(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fS(n);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>tp(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>tp(e.remoteStore,s)),n._onlineComponents=e}function dS(n){return n.name==="FirebaseError"?n.code===W.FAILED_PRECONDITION||n.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function fS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await pu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!dS(t))throw t;co("Error using user provided cache. Falling back to memory cache: "+t),await pu(n,new op)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await pu(n,new op);return n._offlineComponents}async function yy(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await ap(n,n._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await ap(n,new uS))),n._onlineComponents}function pS(n){return yy(n).then(e=>e.syncEngine)}async function Zu(n){const e=await yy(n),t=e.eventManager;return t.onListen=Yk.bind(null,e.syncEngine),t.onUnlisten=eS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tS.bind(null,e.syncEngine),t}function mS(n,e,t={}){const i=new ms;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const d=new _y({next:g=>{o.enqueueAndForget(()=>ay(r,f));const T=g.docs.has(l);!T&&g.fromCache?u.reject(new Y(W.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&c&&c.source==="server"?u.reject(new Y(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new ly(Uc(l.path),d,{includeMetadataChanges:!0,ra:!0});return oy(r,f)}(await Zu(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(n,e,t){if(!t)throw new Y(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function _S(n,e,t,i){if(e===!0&&i===!0)throw new Y(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cp(n){if(!J.isDocumentKey(n))throw new Y(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function md(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne()}function _s(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=md(n);throw new Y(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_S("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vy((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gd{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new up({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new up(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new M0;switch(i.type){case"firstParty":return new U0(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Y(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=lp.get(t);i&&(Q("ComponentProvider","Removing Datastore"),lp.delete(t),i.terminate())}(this),Promise.resolve()}}function yS(n,e,t,i={}){var s;const r=(n=_s(n,gd))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let l,c;if(typeof i.mockUserToken=="string")l=i.mockUserToken,c=Ft.MOCK_USER;else{l=aT(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Y(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ft(u)}n._authCredentials=new L0(new m_(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new zc(this.firestore,e,this._query)}}class un{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $a(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class $a extends zc{constructor(e,t,i){super(e,t,Uc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new J(e))}withConverter(e){return new $a(this.firestore,e,this._path)}}function eh(n,e,...t){if(n=Wt(n),arguments.length===1&&(e=g_.newId()),gS("doc","path",e),n instanceof gd){const i=Ye.fromString(e,...t);return cp(i),new un(n,null,new J(i))}{if(!(n instanceof un||n instanceof $a))throw new Y(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return cp(i),new un(n.firestore,n instanceof $a?n.converter:null,new J(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new J_(this,"async_queue_retry"),this.hu=()=>{const t=fu();t&&Q("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=fu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=fu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new ms;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Xa(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(i=>{this.au=i,this.uu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(i);throw Wi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=t,t}enqueueAfterDelay(e,t,i){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const s=hd.createAndSchedule(this,e,t,i,r=>this.Eu(r));return this._u.push(s),s}Pu(){this.au&&ne()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}function hp(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class qa extends gd{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=function(){return new vS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wy(this),this._firestoreClient.terminate()}}function wS(n,e){const t=typeof n=="object"?n:Lh(),i=typeof n=="string"?n:"(default)",s=hr(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=oT("firestore");r&&yS(s,...r)}return s}function _d(n){return n._firestoreClient||wy(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function wy(n){var e,t,i;const s=n._freezeSettings(),r=function(l,c,u,d){return new Y0(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,vy(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new hS(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(jt.fromBase64String(e))}catch(t){throw new Y(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new go(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=/^__.*__$/;class ES{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ya(e,this.data,t,this.fieldTransforms)}}function Ey(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class wd{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.mu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new wd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:i,yu:!1});return s.wu(e),s}Su(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:i,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return hc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Ey(this.fu)&&TS.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class IS{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||jc(e)}Fu(e,t,i,s=!1){return new wd({fu:e,methodName:t,vu:i,path:St.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bS(n){const e=n._freezeSettings(),t=jc(n._databaseId);return new IS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function kS(n,e,t,i,s,r={}){const o=n.Fu(r.merge||r.mergeFields?2:0,e,t,s);Sy("Data must be an object, but it was:",o,i);const l=by(i,o);let c,u;if(r.merge)c=new Jn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const f of r.mergeFields){const g=SS(e,f,t);if(!o.contains(g))throw new Y(W.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);RS(d,g)||d.push(g)}c=new Jn(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new ES(new Nn(l),c,u)}function Iy(n,e){if(ky(n=Wt(n)))return Sy("Unsupported field value:",e,n),by(n,e);if(n instanceof Ty)return function(i,s){if(!Ey(s.fu))throw s.Du(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const l of i){let c=Iy(l,s.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,e)}return function(i,s){if((i=Wt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return vb(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=ct.fromDate(i);return{timestampValue:cc(s.serializer,r)}}if(i instanceof ct){const r=new ct(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:cc(s.serializer,r)}}if(i instanceof vd)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof go)return{bytesValue:W_(s.serializer,i._byteString)};if(i instanceof un){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:id(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Du(`Unsupported field value: ${md(i)}`)}(n,e)}function by(n,e){const t={};return __(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ko(n,(i,s)=>{const r=Iy(s,e.pu(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function ky(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ct||n instanceof vd||n instanceof go||n instanceof un||n instanceof Ty)}function Sy(n,e,t){if(!ky(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=md(t);throw i==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+i)}}function SS(n,e,t){if((e=Wt(e))instanceof yd)return e._internalPath;if(typeof e=="string")return Ay(n,e);throw hc("Field path arguments must be of type string or ",n,!1,void 0,t)}const AS=new RegExp("[~\\*/\\[\\]]");function Ay(n,e,t){if(e.search(AS)>=0)throw hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new yd(...e.split("."))._internalPath}catch{throw hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function hc(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new Y(W.INVALID_ARGUMENT,l+n+c)}function RS(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cy("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class CS extends Ry{data(){return super.data()}}function Cy(n,e){return typeof e=="string"?Ay(n,e):e instanceof yd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class DS{convertValue(e,t="none"){switch(Zs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ne()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ko(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new vd(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Yh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(La(e));default:return null}}convertTimestamp(e){const t=Ts(e);return new ct(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ye.fromString(e);Be(Q_(i));const s=new Va(i.get(1),i.get(3)),r=new J(i.popFirst(5));return s.isEqual(t)||Wi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Py extends Ry{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Cy("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Vl extends Py{data(e={}){return super.data(e)}}class OS{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ia(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Vl(this._firestore,this._userDataWriter,i.key,i,new ia(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Vl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ia(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const c=new Vl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ia(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:MS(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function MS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(n){n=_s(n,un);const e=_s(n.firestore,qa);return mS(_d(e),n._key).then(t=>Oy(e,n,t))}class Dy extends DS{constructor(e){super(),this.firestore=e}convertBytes(e){return new go(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new un(this.firestore,null,t)}}function Ny(n,e,t){n=_s(n,un);const i=_s(n.firestore,qa),s=NS(n.converter,e);return FS(i,[kS(bS(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,$i.none())])}function VS(n,...e){var t,i,s;n=Wt(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||hp(e[o])||(r=e[o],o++);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(hp(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(i=f.error)===null||i===void 0?void 0:i.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let c,u,d;if(n instanceof un)u=_s(n.firestore,qa),d=Uc(n._key.path),c={next:f=>{e[o]&&e[o](Oy(u,n,f))},error:e[o+1],complete:e[o+2]};else{const f=_s(n,zc);u=_s(f.firestore,qa),d=f._query;const g=new Dy(u);c={next:T=>{e[o]&&e[o](new OS(u,g,f,T))},error:e[o+1],complete:e[o+2]},PS(n._query)}return function(g,T,R,M){const D=new _y(M),L=new ly(T,D,R);return g.asyncQueue.enqueueAndForget(async()=>oy(await Zu(g),L)),()=>{D.$a(),g.asyncQueue.enqueueAndForget(async()=>ay(await Zu(g),L))}}(_d(u),d,l,c)}function FS(n,e){return function(i,s){const r=new ms;return i.asyncQueue.enqueueAndForget(async()=>nS(await pS(i),s,r)),r.promise}(_d(n),e)}function Oy(n,e,t){const i=t.docs.get(e._key),s=new Dy(n);return new Py(n,s,e._key,i,new ia(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){bo=s})(bs),Ln(new fn("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new qa(new V0(i.getProvider("auth-internal")),new $0(i.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Va(u.options.projectId,d)}(o,s),o);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),Bt(Nf,"4.6.3",e),Bt(Nf,"4.6.3","esm2017")})();const My="firebase";function US(n){jw(My,n)}function Ly(){return Gw(My)}function xS(n){let e;const t=n[6].default,i=or(t,n,n[5],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&32)&&lr(i,t,s,s[5],e?ar(t,s[5],r,null):cr(s[5]),null)},i(s){e||(j(i,s),e=!0)},o(s){K(i,s),e=!1},d(s){i&&i.d(s)}}}function $S(n,e,t){let{$$slots:i={},$$scope:s}=e,{firestore:r=void 0}=e,{rtdb:o=void 0}=e,{auth:l=void 0}=e,{storage:c=void 0}=e,{analytics:u=void 0}=e;return US({firestore:r,rtdb:o,auth:l,storage:c,analytics:u}),n.$$set=d=>{"firestore"in d&&t(0,r=d.firestore),"rtdb"in d&&t(1,o=d.rtdb),"auth"in d&&t(2,l=d.auth),"storage"in d&&t(3,c=d.storage),"analytics"in d&&t(4,u=d.analytics),"$$scope"in d&&t(5,s=d.$$scope)},[r,o,l,c,u,s,i]}class qS extends mn{constructor(e){super(),pn(this,e,$S,xS,Yt,{firestore:0,rtdb:1,auth:2,storage:3,analytics:4})}}const BS=n=>({user:n&1}),dp=n=>({user:n[0],auth:n[1],signOut:n[5]});function fp(n){let e;const t=n[4].default,i=or(t,n,n[3],dp);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&9)&&lr(i,t,s,s[3],e?ar(t,s[3],r,BS):cr(s[3]),dp)},i(s){e||(j(i,s),e=!0)},o(s){K(i,s),e=!1},d(s){i&&i.d(s)}}}function WS(n){let e,t,i=n[0]&&fp(n);return{c(){i&&i.c(),e=Un()},m(s,r){i&&i.m(s,r),$(s,e,r),t=!0},p(s,[r]){s[0]?i?(i.p(s,r),r&1&&j(i,1)):(i=fp(s),i.c(),j(i,1),i.m(e.parentNode,e)):i&&(ln(),K(i,1,1,()=>{i=null}),cn())},i(s){t||(j(i),t=!0)},o(s){K(i),t=!1},d(s){s&&x(e),i&&i.d(s)}}}function jS(n,e,t){let i,{$$slots:s={},$$scope:r}=e;const o=Ly().auth,l=zh(o);ja(n,l,u=>t(0,i=u));const c=()=>wI(o);return n.$$set=u=>{"$$scope"in u&&t(3,r=u.$$scope)},[i,o,l,r,s,c]}class Vy extends mn{constructor(e){super(),pn(this,e,jS,WS,Yt,{})}}const GS=n=>({}),pp=n=>({auth:n[1]});function mp(n){let e;const t=n[4].default,i=or(t,n,n[3],pp);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&8)&&lr(i,t,s,s[3],e?ar(t,s[3],r,GS):cr(s[3]),pp)},i(s){e||(j(i,s),e=!0)},o(s){K(i,s),e=!1},d(s){i&&i.d(s)}}}function HS(n){let e,t,i=!n[0]&&mp(n);return{c(){i&&i.c(),e=Un()},m(s,r){i&&i.m(s,r),$(s,e,r),t=!0},p(s,[r]){s[0]?i&&(ln(),K(i,1,1,()=>{i=null}),cn()):i?(i.p(s,r),r&1&&j(i,1)):(i=mp(s),i.c(),j(i,1),i.m(e.parentNode,e))},i(s){t||(j(i),t=!0)},o(s){K(i),t=!1},d(s){s&&x(e),i&&i.d(s)}}}function zS(n,e,t){let i,{$$slots:s={},$$scope:r}=e;const o=Ly().auth,l=zh(o);return ja(n,l,c=>t(0,i=c)),n.$$set=c=>{"$$scope"in c&&t(3,r=c.$$scope)},[i,o,l,r,s]}class KS extends mn{constructor(e){super(),pn(this,e,zS,HS,Yt,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="firebasestorage.googleapis.com",QS="storageBucket",XS=2*60*1e3,YS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends xn{constructor(e,t,i=0){super(mu(e),`Firebase Storage: ${t} (${mu(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ii.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ei;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ei||(Ei={}));function mu(n){return"storage/"+n}function JS(){const n="An unknown error occurred, please check the error payload for server response.";return new Ii(Ei.UNKNOWN,n)}function ZS(){return new Ii(Ei.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eA(){return new Ii(Ei.CANCELED,"User canceled the upload/download.")}function tA(n){return new Ii(Ei.INVALID_URL,"Invalid URL '"+n+"'.")}function nA(n){return new Ii(Ei.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function gp(n){return new Ii(Ei.INVALID_ARGUMENT,n)}function Uy(){return new Ii(Ei.APP_DELETED,"The Firebase app was deleted.")}function iA(n){return new Ii(Ei.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Zn.makeFromUrl(e,t)}catch{return new Zn(e,"")}if(i.path==="")return i;throw nA(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(z){z.path_=decodeURIComponent(z.path)}const d="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",T=new RegExp(`^https?://${f}/${d}/b/${s}/o${g}`,"i"),R={bucket:1,path:3},M=t===Fy?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",L=new RegExp(`^https?://${M}/${s}/${D}`,"i"),F=[{regex:l,indices:c,postModify:r},{regex:T,indices:R,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let z=0;z<F.length;z++){const ee=F[z],X=ee.regex.exec(e);if(X){const k=X[ee.indices.bucket];let v=X[ee.indices.path];v||(v=""),i=new Zn(k,v),ee.postModify(i);break}}if(i==null)throw tA(e);return i}}class sA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(n,e,t){let i=1,s=null,r=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...D){u||(u=!0,e.apply(null,D))}function f(D){s=setTimeout(()=>{s=null,n(T,c())},D)}function g(){r&&clearTimeout(r)}function T(D,...L){if(u){g();return}if(D){g(),d.call(null,D,...L);return}if(c()||o){g(),d.call(null,D,...L);return}i<64&&(i*=2);let F;l===1?(l=2,F=0):F=(i+Math.random())*1e3,f(F)}let R=!1;function M(D){R||(R=!0,g(),!u&&(s!==null?(D||(l=2),clearTimeout(s),f(0)):D||(l=1)))}return f(0),r=setTimeout(()=>{o=!0,M(!0)},t),M}function oA(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(n){return n!==void 0}function _p(n,e,t,i){if(i<e)throw gp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw gp(`Invalid value for '${n}'. Expected ${t} or less.`)}function lA(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(dc||(dc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,t,i,s,r,o,l,c,u,d,f,g=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,R)=>{this.resolve_=T,this.reject_=R,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new bl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===dc.NO_ERROR,c=r.getStatus();if(!l||cA(c,this.additionalRetryCodes_)&&this.retry){const d=r.getErrorCode()===dc.ABORT;i(!1,new bl(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;i(!0,new bl(u,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());aA(c)?r(c):r()}catch(c){o(c)}else if(l!==null){const c=JS();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Uy():eA();o(c)}else{const c=ZS();o(c)}};this.canceled_?t(!1,new bl(!1,null,!0)):this.backoffId_=rA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bl{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function hA(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function dA(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fA(n,e){e&&(n["X-Firebase-GMPID"]=e)}function pA(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function mA(n,e,t,i,s,r,o=!0){const l=lA(n.urlParams),c=n.url+l,u=Object.assign({},n.headers);return fA(u,e),hA(u,t),dA(u,r),pA(u,i),new uA(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function _A(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t){this._service=e,t instanceof Zn?this._location=t:this._location=Zn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new fc(e,t)}get root(){const e=new Zn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _A(this._location.path)}get storage(){return this._service}get parent(){const e=gA(this._location.path);if(e===null)return null;const t=new Zn(this._location.bucket,e);return new fc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw iA(e)}}function yp(n,e){const t=e==null?void 0:e[QS];return t==null?null:Zn.makeFromBucketSpec(t,n)}class yA{constructor(e,t,i,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Fy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=XS,this._maxUploadRetryTime=YS,this._requests=new Set,s!=null?this._bucket=Zn.makeFromBucketSpec(s,this._host):this._bucket=yp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Zn.makeFromBucketSpec(this._url,e):this._bucket=yp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_p("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_p("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fc(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new sA(Uy());{const o=mA(e,this._appId,i,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const vp="@firebase/storage",wp="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="storage";function wA(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new yA(t,i,s,e,bs)}function TA(){Ln(new fn(vA,wA,"PUBLIC").setMultipleInstances(!0)),Bt(vp,wp,""),Bt(vp,wp,"esm2017")}TA();const xy="@firebase/installations",Td="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=1e4,qy=`w:${Td}`,By="FIS_v2",EA="https://firebaseinstallations.googleapis.com/v1",IA=60*60*1e3,bA="installations",kA="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},er=new ur(bA,kA,SA);function Wy(n){return n instanceof xn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy({projectId:n}){return`${EA}/projects/${n}/installations`}function Gy(n){return{token:n.token,requestStatus:2,expiresIn:RA(n.expiresIn),creationTime:Date.now()}}async function Hy(n,e){const i=(await e.json()).error;return er.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function zy({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function AA(n,{refreshToken:e}){const t=zy(n);return t.append("Authorization",CA(e)),t}async function Ky(n){const e=await n();return e.status>=500&&e.status<600?n():e}function RA(n){return Number(n.replace("s","000"))}function CA(n){return`${By} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=jy(n),s=zy(n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:By,appId:n.appId,sdkVersion:qy},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await Ky(()=>fetch(i,l));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Gy(u.authToken)}}else throw await Hy("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=/^[cdef][\w-]{21}$/,th="";function OA(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=MA(n);return NA.test(t)?t:th}catch{return th}}function MA(n){return DA(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=new Map;function Yy(n,e){const t=Kc(n);Jy(t,e),LA(t,e)}function Jy(n,e){const t=Xy.get(n);if(t)for(const i of t)i(e)}function LA(n,e){const t=VA();t&&t.postMessage({key:n,fid:e}),FA()}let Gs=null;function VA(){return!Gs&&"BroadcastChannel"in self&&(Gs=new BroadcastChannel("[Firebase] FID Change"),Gs.onmessage=n=>{Jy(n.data.key,n.data.fid)}),Gs}function FA(){Xy.size===0&&Gs&&(Gs.close(),Gs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="firebase-installations-database",xA=1,tr="firebase-installations-store";let gu=null;function Ed(){return gu||(gu=Rg(UA,xA,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(tr)}}})),gu}async function pc(n,e){const t=Kc(n),s=(await Ed()).transaction(tr,"readwrite"),r=s.objectStore(tr),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Yy(n,e.fid),e}async function Zy(n){const e=Kc(n),i=(await Ed()).transaction(tr,"readwrite");await i.objectStore(tr).delete(e),await i.done}async function Qc(n,e){const t=Kc(n),s=(await Ed()).transaction(tr,"readwrite"),r=s.objectStore(tr),o=await r.get(t),l=e(o);return l===void 0?await r.delete(t):await r.put(l,t),await s.done,l&&(!o||o.fid!==l.fid)&&Yy(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(n){let e;const t=await Qc(n.appConfig,i=>{const s=$A(i),r=qA(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===th?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function $A(n){const e=n||{fid:OA(),registrationStatus:0};return ev(e)}function qA(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(er.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=BA(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:WA(n)}:{installationEntry:e}}async function BA(n,e){try{const t=await PA(n,e);return pc(n.appConfig,t)}catch(t){throw Wy(t)&&t.customData.serverCode===409?await Zy(n.appConfig):await pc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function WA(n){let e=await Tp(n.appConfig);for(;e.registrationStatus===1;)await Qy(100),e=await Tp(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Id(n);return i||t}return e}function Tp(n){return Qc(n,e=>{if(!e)throw er.create("installation-not-found");return ev(e)})}function ev(n){return jA(n)?{fid:n.fid,registrationStatus:0}:n}function jA(n){return n.registrationStatus===1&&n.registrationTime+$y<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA({appConfig:n,heartbeatServiceProvider:e},t){const i=HA(n,t),s=AA(n,t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:qy,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await Ky(()=>fetch(i,l));if(c.ok){const u=await c.json();return Gy(u)}else throw await Hy("Generate Auth Token",c)}function HA(n,{fid:e}){return`${jy(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bd(n,e=!1){let t;const i=await Qc(n.appConfig,r=>{if(!tv(r))throw er.create("not-registered");const o=r.authToken;if(!e&&QA(o))return r;if(o.requestStatus===1)return t=zA(n,e),r;{if(!navigator.onLine)throw er.create("app-offline");const l=YA(r);return t=KA(n,l),l}});return t?await t:i.authToken}async function zA(n,e){let t=await Ep(n.appConfig);for(;t.authToken.requestStatus===1;)await Qy(100),t=await Ep(n.appConfig);const i=t.authToken;return i.requestStatus===0?bd(n,e):i}function Ep(n){return Qc(n,e=>{if(!tv(e))throw er.create("not-registered");const t=e.authToken;return JA(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function KA(n,e){try{const t=await GA(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await pc(n.appConfig,i),t}catch(t){if(Wy(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Zy(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pc(n.appConfig,i)}throw t}}function tv(n){return n!==void 0&&n.registrationStatus===2}function QA(n){return n.requestStatus===2&&!XA(n)}function XA(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+IA}function YA(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function JA(n){return n.requestStatus===1&&n.requestTime+$y<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(n){const e=n,{installationEntry:t,registrationPromise:i}=await Id(e);return i?i.catch(console.error):bd(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(n,e=!1){const t=n;return await t1(t),(await bd(t,e)).token}async function t1(n){const{registrationPromise:e}=await Id(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(n){if(!n||!n.options)throw _u("App Configuration");if(!n.name)throw _u("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw _u(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function _u(n){return er.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="installations",i1="installations-internal",s1=n=>{const e=n.getProvider("app").getImmediate(),t=n1(e),i=hr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},r1=n=>{const e=n.getProvider("app").getImmediate(),t=hr(e,nv).getImmediate();return{getId:()=>ZA(t),getToken:s=>e1(t,s)}};function o1(){Ln(new fn(nv,s1,"PUBLIC")),Ln(new fn(i1,r1,"PRIVATE"))}o1();Bt(xy,Td);Bt(xy,Td,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="analytics",a1="firebase_id",l1="origin",c1=60*1e3,u1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Ga("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},hn=new ur("analytics","Analytics",h1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(n){if(!n.startsWith(kd)){const e=hn.create("invalid-gtag-resource",{gtagURL:n});return Xt.warn(e.message),""}return n}function iv(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function f1(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function p1(n,e){const t=f1("firebase-js-sdk-policy",{createScriptURL:d1}),i=document.createElement("script"),s=`${kd}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function m1(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function g1(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await iv(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){Xt.error(l)}n("config",s,r)}async function _1(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await iv(t);for(const c of o){const u=l.find(f=>f.measurementId===c),d=u&&e[u.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){Xt.error(r)}}function y1(n,e,t,i){async function s(r,...o){try{if(r==="event"){const[l,c]=o;await _1(n,e,t,l,c)}else if(r==="config"){const[l,c]=o;await g1(n,e,t,i,l,c)}else if(r==="consent"){const[l,c]=o;n("consent",l,c)}else if(r==="get"){const[l,c,u]=o;n("get",l,c,u)}else if(r==="set"){const[l]=o;n("set",l)}else n(r,...o)}catch(l){Xt.error(l)}}return s}function v1(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=y1(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function w1(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(kd)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=30,E1=1e3;class I1{constructor(e={},t=E1){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sv=new I1;function b1(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function k1(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:b1(i)},r=u1.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw hn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function S1(n,e=sv,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw hn.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw hn.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new C1;return setTimeout(async()=>{l.abort()},c1),rv({appId:i,apiKey:s,measurementId:r},o,l,e)}async function rv(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=sv){var r;const{appId:o,measurementId:l}=n;try{await A1(i,e)}catch(c){if(l)return Xt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await k1(n);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!R1(u)){if(s.deleteThrottleMetadata(o),l)return Xt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw c}const d=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?rf(t,s.intervalMillis,T1):rf(t,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(o,f),Xt.debug(`Calling attemptFetch again in ${d} millis`),rv(n,f,i,s)}}function A1(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(hn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function R1(n){if(!(n instanceof xn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class C1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function P1(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(){if(Ig())try{await bg()}catch(n){return Xt.warn(hn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Xt.warn(hn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function N1(n,e,t,i,s,r,o){var l;const c=S1(n);c.then(T=>{t[T.measurementId]=T.appId,n.options.measurementId&&T.measurementId!==n.options.measurementId&&Xt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>Xt.error(T)),e.push(c);const u=D1().then(T=>{if(T)return i.getId()}),[d,f]=await Promise.all([c,u]);w1(r)||p1(r,d.measurementId),s("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[l1]="firebase",g.update=!0,f!=null&&(g[a1]=f),s("config",d.measurementId,g),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.app=e}_delete(){return delete ba[this.app.options.appId],Promise.resolve()}}let ba={},Ip=[];const bp={};let yu="dataLayer",M1="gtag",kp,ov,Sp=!1;function L1(){const n=[];if(wg()&&n.push("This is a browser extension environment."),hT()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=hn.create("invalid-analytics-context",{errorInfo:e});Xt.warn(t.message)}}function V1(n,e,t){L1();const i=n.options.appId;if(!i)throw hn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Xt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw hn.create("no-api-key");if(ba[i]!=null)throw hn.create("already-exists",{id:i});if(!Sp){m1(yu);const{wrappedGtag:r,gtagCore:o}=v1(ba,Ip,bp,yu,M1);ov=r,kp=o,Sp=!0}return ba[i]=N1(n,Ip,bp,e,kp,yu,t),new O1(n)}function F1(n=Lh()){n=Wt(n);const e=hr(n,mc);return e.isInitialized()?e.getImmediate():U1(n)}function U1(n,e={}){const t=hr(n,mc);if(t.isInitialized()){const s=t.getImmediate();if(Da(e,t.getOptions()))return s;throw hn.create("already-initialized")}return t.initialize({options:e})}function x1(n,e,t,i){n=Wt(n),P1(ov,ba[n.app.options.appId],e,t,i).catch(s=>Xt.error(s))}const Ap="@firebase/analytics",Rp="0.10.4";function $1(){Ln(new fn(mc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return V1(i,s,t)},"PUBLIC")),Ln(new fn("analytics-internal",n,"PRIVATE")),Bt(Ap,Rp),Bt(Ap,Rp,"esm2017");function n(e){try{const t=e.getProvider(mc).getImmediate();return{logEvent:(i,s,r)=>x1(t,i,s,r)}}catch(t){throw hn.create("interop-component-reg-failed",{reason:t})}}}$1();var Cp={};const Pp="@firebase/database",Dp="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let av="";function q1(n){av=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),kt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Pa(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Gi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new B1(e)}}catch{}return new W1},Hs=lv("localStorage"),j1=lv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new Ga("@firebase/database"),G1=function(){let n=1;return function(){return n++}}(),cv=function(n){const e=ET(n),t=new _T;t.update(e);const i=t.digest();return Dh.encodeByteArray(i)},tl=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=tl.apply(null,i):typeof i=="object"?e+=kt(i):e+=i,e+=" "}return e};let ka=null,Np=!0;const H1=function(n,e){H(!e,"Can't turn on custom loggers persistently."),ro.logLevel=fe.VERBOSE,ka=ro.log.bind(ro)},xt=function(...n){if(Np===!0&&(Np=!1,ka===null&&j1.get("logging_enabled")===!0&&H1()),ka){const e=tl.apply(null,n);ka(e)}},nl=function(n){return function(...e){xt(n,...e)}},nh=function(...n){const e="FIREBASE INTERNAL ERROR: "+tl(...n);ro.error(e)},nr=function(...n){const e=`FIREBASE FATAL ERROR: ${tl(...n)}`;throw ro.error(e),new Error(e)},dn=function(...n){const e="FIREBASE WARNING: "+tl(...n);ro.warn(e)},z1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uv=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},K1=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},_o="[MIN_NAME]",ir="[MAX_NAME]",Ro=function(n,e){if(n===e)return 0;if(n===_o||e===ir)return-1;if(e===_o||n===ir)return 1;{const t=Op(n),i=Op(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Q1=function(n,e){return n===e?0:n<e?-1:1},Xo=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+kt(e))},Sd=function(n){if(typeof n!="object"||n===null)return kt(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=kt(e[i]),t+=":",t+=Sd(n[e[i]]);return t+="}",t},hv=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Vn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const dv=function(n){H(!uv(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const d=u.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(d.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},X1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Y1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},J1=new RegExp("^-?(0*)\\d{1,10}$"),Z1=-2147483648,eR=2147483647,Op=function(n){if(J1.test(n)){const e=Number(n);if(e>=Z1&&e<=eR)return e}return null},il=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw dn("Exception was thrown by user callback.",t),e},Math.floor(0))}},tR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Sa=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="5",fv="v",pv="s",mv="r",gv="f",_v=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yv="ls",vv="p",ih="ac",wv="websocket",Tv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t,i,s,r=!1,o="",l=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function rR(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ev(n,e,t){H(typeof e=="string","typeof type must == string"),H(typeof t=="object","typeof params must == object");let i;if(e===wv)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Tv)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rR(n)&&(t.ns=n.namespace);const s=[];return Vn(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.counters_={}}incrementCounter(e,t=1){Gi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return eT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu={},wu={};function Rd(n){const e=n.toString();return vu[e]||(vu[e]=new oR),vu[e]}function aR(n,e){const t=n.toString();return wu[t]||(wu[t]=e()),wu[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&il(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="start",cR="close",uR="pLPCommand",hR="pRTLPCB",Iv="id",bv="pw",kv="ser",dR="cb",fR="seg",pR="ts",mR="d",gR="dframe",Sv=1870,Av=30,_R=Sv-Av,yR=25e3,vR=3e4;class Jr{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=nl(e),this.stats_=Rd(t),this.urlFn=c=>(this.appCheckToken&&(c[ih]=this.appCheckToken),Ev(t,Tv,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new lR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vR)),K1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cd((...r)=>{const[o,l,c,u,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mp)this.id=l,this.password=c;else if(o===cR)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Mp]="t",i[kv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[dR]=this.scriptTagHolder.uniqueCallbackIdentifier),i[fv]=Ad,this.transportSessionId&&(i[pv]=this.transportSessionId),this.lastSessionId&&(i[yv]=this.lastSessionId),this.applicationId&&(i[vv]=this.applicationId),this.appCheckToken&&(i[ih]=this.appCheckToken),typeof location<"u"&&location.hostname&&_v.test(location.hostname)&&(i[mv]=gv);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jr.forceAllow_=!0}static forceDisallow(){Jr.forceDisallow_=!0}static isAvailable(){return Jr.forceAllow_?!0:!Jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!X1()&&!Y1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=kt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=mg(t),s=hv(i,_R);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[gR]="t",i[Iv]=e,i[bv]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=kt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Cd{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=G1(),window[uR+this.uniqueCallbackIdentifier]=e,window[hR+this.uniqueCallbackIdentifier]=t,this.myIFrame=Cd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){xt("frame writing exception"),l.stack&&xt(l.stack),xt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Iv]=this.myID,e[bv]=this.myPW,e[kv]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Av+i.length<=Sv;){const o=this.pendingSegs.shift();i=i+"&"+fR+s+"="+o.seg+"&"+pR+s+"="+o.ts+"&"+mR+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(yR)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{xt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=16384,TR=45e3;let gc=null;typeof MozWebSocket<"u"?gc=MozWebSocket:typeof WebSocket<"u"&&(gc=WebSocket);class Yn{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=nl(this.connId),this.stats_=Rd(t),this.connURL=Yn.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[fv]=Ad,typeof location<"u"&&location.hostname&&_v.test(location.hostname)&&(o[mv]=gv),t&&(o[pv]=t),i&&(o[yv]=i),s&&(o[ih]=s),r&&(o[vv]=r),Ev(e,wv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hs.set("previous_websocket_failure",!0);try{let i;Eg(),this.mySock=new gc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Yn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&gc!==null&&!Yn.forceDisallow_}static previouslyFailed(){return Hs.isInMemoryStorage||Hs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Pa(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=kt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=hv(t,wR);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(TR))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Yn.responsesRequiredToBeHealthy=2;Yn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jr,Yn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Yn&&Yn.isAvailable();let i=t&&!Yn.previouslyFailed();if(e.webSocketOnly&&(t||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Yn];else{const s=this.transports_=[];for(const r of Ba.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Ba.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ba.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=6e4,IR=5e3,bR=10*1024,kR=100*1024,Tu="t",Lp="d",SR="s",Vp="r",AR="e",Fp="o",Up="a",xp="n",$p="p",RR="h";class CR{constructor(e,t,i,s,r,o,l,c,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=nl("c:"+this.id+":"),this.transportManager_=new Ba(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Sa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tu in e){const t=e[Tu];t===Up?this.upgradeIfSecondaryHealthy_():t===Vp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Fp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Xo("t",e),i=Xo("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$p,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Up,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Xo("t",e),i=Xo("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Xo(Tu,e);if(Lp in e){const i=e[Lp];if(t===RR){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===xp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===SR?this.onConnectionShutdown_(i):t===Vp?this.onReset_(i):t===AR?nh("Server Error: "+i):t===Fp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nh("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ad!==i&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Sa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ER))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Sa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(IR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$p,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){H(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends Cv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Oh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _c}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=32,Bp=768;class ze{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Me(){return new ze("")}function Te(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Is(n){return n.pieces_.length-n.pieceNum_}function He(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ze(n.pieces_,e)}function Pv(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function PR(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Dv(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Nv(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ze(e,0)}function _t(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ze)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new ze(t,0)}function ye(n){return n.pieceNum_>=n.pieces_.length}function On(n,e){const t=Te(n),i=Te(e);if(t===null)return e;if(t===i)return On(He(n),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ov(n,e){if(Is(n)!==Is(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ei(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Is(n)>Is(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class DR{constructor(e,t){this.errorPrefix_=t,this.parts_=Dv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Dc(this.parts_[i]);Mv(this)}}function NR(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Dc(e),Mv(n)}function OR(n){const e=n.parts_.pop();n.byteLength_-=Dc(e),n.parts_.length>0&&(n.byteLength_-=1)}function Mv(n){if(n.byteLength_>Bp)throw new Error(n.errorPrefix_+"has a key path longer than "+Bp+" bytes ("+n.byteLength_+").");if(n.parts_.length>qp)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qp+") or object contains a cycle "+Vs(n))}function Vs(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends Cv{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Pd}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=1e3,MR=60*5*1e3,Wp=30*1e3,LR=1.3,VR=3e4,FR="server_kill",jp=3;class qi extends Rv{constructor(e,t,i,s,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=qi.nextPersistentConnectionId_++,this.log_=nl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yo,this.maxReconnectDelay_=MR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Eg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_c.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(kt(r)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Nh,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,u=l.s;qi.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Gi(e,"w")){const i=ao(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=mT(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+kt(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):nh("Unrecognized action received from server: "+kt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>VR&&(this.reconnectDelay_=Yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*LR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+qi.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,i())},u=function(f){H(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?xt("getToken() completed but was canceled"):(xt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,l=new CR(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,T=>{dn(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(FR)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&dn(f),c())}}}interrupt(e){xt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pu(this.interruptReasons_)&&(this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Sd(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new ze(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){xt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jp&&(this.reconnectDelay_=Wp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){xt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+av.replace(/\./g,"-")]=1,Oh()?e["framework.cordova"]=1:Tg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_c.getInstance().currentlyOnline();return Pu(this.interruptReasons_)&&e}}qi.nextPersistentConnectionId_=0;qi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ee(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Ee(_o,e),s=new Ee(_o,t);return this.compare(i,s)!==0}minPost(){return Ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;class Lv extends Xc{static get __EMPTY_NODE(){return kl}static set __EMPTY_NODE(e){kl=e}compare(e,t){return Ro(e.name,t.name)}isDefinedOn(e){throw To("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ee.MIN}maxPost(){return new Ee(ir,kl)}makePost(e,t){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new Ee(e,kl)}toString(){return".key"}}const oo=new Lv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class mt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??mt.RED,this.left=s??Qt.EMPTY_NODE,this.right=r??Qt.EMPTY_NODE}copy(e,t,i,s,r){return new mt(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Qt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}mt.RED=!0;mt.BLACK=!1;class UR{copy(e,t,i,s,r){return this}insert(e,t,i){return new mt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qt{constructor(e,t=Qt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Qt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,mt.BLACK,null,null))}remove(e){return new Qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,mt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Sl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Sl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Sl(this.root_,null,this.comparator_,!0,e)}}Qt.EMPTY_NODE=new UR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(n,e){return Ro(n.name,e.name)}function Dd(n,e){return Ro(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh;function $R(n){sh=n}const Vv=function(n){return typeof n=="number"?"number:"+dv(n):"string:"+n},Fv=function(n){if(n.isLeafNode()){const e=n.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gi(e,".sv"),"Priority must be a string or number.")}else H(n===sh||n.isEmpty(),"priority of unexpected type.");H(n===sh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gp;class ft{constructor(e,t=ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fv(this.priorityNode_)}static set __childrenNodeConstructor(e){Gp=e}static get __childrenNodeConstructor(){return Gp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:Te(e)===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Te(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(H(i!==".priority"||Is(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=dv(this.value_):e+=this.value_,this.lazyHash_=cv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ft.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ft.VALUE_TYPE_ORDER.indexOf(t),r=ft.VALUE_TYPE_ORDER.indexOf(i);return H(s>=0,"Unknown leaf type: "+t),H(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uv,xv;function qR(n){Uv=n}function BR(n){xv=n}class WR extends Xc{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Ro(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ee.MIN}maxPost(){return new Ee(ir,new ft("[PRIORITY-POST]",xv))}makePost(e,t){const i=Uv(e);return new Ee(t,new ft("[PRIORITY-POST]",i))}toString(){return".priority"}}const qt=new WR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=Math.log(2);class GR{constructor(e){const t=r=>parseInt(Math.log(r)/jR,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yc=function(n,e,t,i){n.sort(e);const s=function(c,u){const d=u-c;let f,g;if(d===0)return null;if(d===1)return f=n[c],g=t?t(f):f,new mt(g,f.node,mt.BLACK,null,null);{const T=parseInt(d/2,10)+c,R=s(c,T),M=s(T+1,u);return f=n[T],g=t?t(f):f,new mt(g,f.node,mt.BLACK,R,M)}},r=function(c){let u=null,d=null,f=n.length;const g=function(R,M){const D=f-R,L=f;f-=R;const U=s(D+1,L),F=n[D],z=t?t(F):F;T(new mt(z,F.node,M,null,U))},T=function(R){u?(u.left=R,u=R):(d=R,u=R)};for(let R=0;R<c.count;++R){const M=c.nextBitIsOne(),D=Math.pow(2,c.count-(R+1));M?g(D,mt.BLACK):(g(D,mt.BLACK),g(D,mt.RED))}return d},o=new GR(n.length),l=r(o);return new Qt(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu;const Fr={};class xi{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return H(Fr&&qt,"ChildrenNode.ts has not been loaded"),Eu=Eu||new xi({".priority":Fr},{".priority":qt}),Eu}get(e){const t=ao(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Qt?t:null}hasIndex(e){return Gi(this.indexSet_,e.toString())}addIndex(e,t){H(e!==oo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(Ee.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=yc(i,e.getCompare()):l=Fr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const d=Object.assign({},this.indexes_);return d[c]=l,new xi(d,u)}addToIndexes(e,t){const i=Yl(this.indexes_,(s,r)=>{const o=ao(this.indexSet_,r);if(H(o,"Missing index implementation for "+r),s===Fr)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(Ee.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),yc(l,o.getCompare())}else return Fr;else{const l=t.get(e.name);let c=s;return l&&(c=c.remove(new Ee(e.name,l))),c.insert(e,e.node)}});return new xi(i,this.indexSet_)}removeFromIndexes(e,t){const i=Yl(this.indexes_,s=>{if(s===Fr)return s;{const r=t.get(e.name);return r?s.remove(new Ee(e.name,r)):s}});return new xi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo;class Pe{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Fv(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jo||(Jo=new Pe(new Qt(Dd),null,xi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jo}updatePriority(e){return this.children_.isEmpty()?this:new Pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Jo:t}}getChild(e){const t=Te(e);return t===null?this:this.getImmediateChild(t).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(H(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Ee(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Jo:this.priorityNode_;return new Pe(s,o,r)}}updateChild(e,t){const i=Te(e);if(i===null)return t;{H(Te(e)!==".priority"||Is(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(He(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(qt,(o,l)=>{t[o]=l.val(e),i++,r&&Pe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vv(this.getPriority().val())+":"),this.forEachChild(qt,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":cv(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Ee(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ee(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ee(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ee.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ee.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===sl?-1:0}withIndex(e){if(e===oo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Pe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===oo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(qt),s=t.getIterator(qt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===oo?null:this.indexMap_.get(e.toString())}}Pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class HR extends Pe{constructor(){super(new Qt(Dd),Pe.EMPTY_NODE,xi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Pe.EMPTY_NODE}isEmpty(){return!1}}const sl=new HR;Object.defineProperties(Ee,{MIN:{value:new Ee(_o,Pe.EMPTY_NODE)},MAX:{value:new Ee(ir,sl)}});Lv.__EMPTY_NODE=Pe.EMPTY_NODE;ft.__childrenNodeConstructor=Pe;$R(sl);BR(sl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=!0;function $t(n,e=null){if(n===null)return Pe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ft(t,$t(e))}if(!(n instanceof Array)&&zR){const t=[];let i=!1;if(Vn(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=$t(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new Ee(o,c)))}}),t.length===0)return Pe.EMPTY_NODE;const r=yc(t,xR,o=>o.name,Dd);if(i){const o=yc(t,qt.getCompare());return new Pe(r,$t(e),new xi({".priority":o},{".priority":qt}))}else return new Pe(r,$t(e),xi.Default)}else{let t=Pe.EMPTY_NODE;return Vn(n,(i,s)=>{if(Gi(n,i)&&i.substring(0,1)!=="."){const r=$t(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority($t(e))}}qR($t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR extends Xc{constructor(e){super(),this.indexPath_=e,H(!ye(e)&&Te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Ro(e.name,t.name):r}makePost(e,t){const i=$t(e),s=Pe.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ee(t,s)}maxPost(){const e=Pe.EMPTY_NODE.updateChild(this.indexPath_,sl);return new Ee(ir,e)}toString(){return Dv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR extends Xc{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Ro(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ee.MIN}maxPost(){return Ee.MAX}makePost(e,t){const i=$t(e);return new Ee(t,i)}toString(){return".value"}}const XR=new QR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(n){return{type:"value",snapshotNode:n}}function JR(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ZR(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Hp(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function eC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_o}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qt}copy(){const e=new Nd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zp(n){const e={};if(n.isDefault())return e;let t;if(n.index_===qt?t="$priority":n.index_===XR?t="$value":n.index_===oo?t="$key":(H(n.index_ instanceof KR,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=kt(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=kt(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+kt(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=kt(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+kt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Kp(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==qt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Rv{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=nl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vc.getListenId_(e,i),l={};this.listens_[o]=l;const c=zp(e._queryParams);this.restRequest_(r+".json",c,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(r,f,!1,i),ao(this.listens_,o)===l){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",s(g,null)}})}unlisten(e,t){const i=vc.getListenId_(e,t);delete this.listens_[i]}get(e){const t=zp(e._queryParams),i=e._path.toString(),s=new Nh;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Eo(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Pa(l.responseText)}catch{dn("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&dn("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.rootNode_=Pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){return{value:null,children:new Map}}function $v(n,e,t){if(ye(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=Te(e);n.children.has(i)||n.children.set(i,wc());const s=n.children.get(i);e=He(e),$v(s,e,t)}}function rh(n,e,t){n.value!==null?t(e,n.value):nC(n,(i,s)=>{const r=new ze(e.toString()+"/"+i);rh(s,r,t)})}function nC(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Vn(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=10*1e3,sC=30*1e3,rC=5*60*1e3;class oC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new iC(e);const i=Qp+(sC-Qp)*Math.random();Sa(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Vn(e,(s,r)=>{r>0&&Gi(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Sa(this.reportStats_.bind(this),Math.floor(Math.random()*2*rC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pi||(pi={}));function qv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=pi.ACK_USER_WRITE,this.source=qv()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ze(e));return new Tc(Me(),t,this.revert)}}else return H(Te(this.path)===e,"operationForChild called for unrelated child."),new Tc(He(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=pi.OVERWRITE}operationForChild(e){return ye(this.path)?new sr(this.source,Me(),this.snap.getImmediateChild(e)):new sr(this.source,He(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=pi.MERGE}operationForChild(e){if(ye(this.path)){const t=this.children.subtree(new ze(e));return t.isEmpty()?null:t.value?new sr(this.source,Me(),t.value):new Wa(this.source,Me(),t)}else return H(Te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wa(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const t=Te(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function aC(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(eC(o.childName,o.snapshotNode))}),Zo(n,s,"child_removed",e,i,t),Zo(n,s,"child_added",e,i,t),Zo(n,s,"child_moved",r,i,t),Zo(n,s,"child_changed",e,i,t),Zo(n,s,"value",e,i,t),s}function Zo(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,c)=>cC(n,l,c)),o.forEach(l=>{const c=lC(n,l,r);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,n.query_))})})}function lC(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function cC(n,e,t){if(e.childName==null||t.childName==null)throw To("Should only compare child_ events.");const i=new Ee(e.childName,e.snapshotNode),s=new Ee(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(n,e){return{eventCache:n,serverCache:e}}function Aa(n,e,t,i){return jv(new Od(e,t,i),n.serverCache)}function Gv(n,e,t,i){return jv(n.eventCache,new Od(e,t,i))}function oh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function rr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu;const uC=()=>(Iu||(Iu=new Qt(Q1)),Iu);class Ge{constructor(e,t=uC()){this.value=e,this.children=t}static fromObject(e){let t=new Ge(null);return Vn(e,(i,s)=>{t=t.set(new ze(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Me(),value:this.value};if(ye(e))return null;{const i=Te(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(He(e),t);return r!=null?{path:_t(new ze(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const t=Te(e),i=this.children.get(t);return i!==null?i.subtree(He(e)):new Ge(null)}}set(e,t){if(ye(e))return new Ge(t,this.children);{const i=Te(e),r=(this.children.get(i)||new Ge(null)).set(He(e),t),o=this.children.insert(i,r);return new Ge(this.value,o)}}remove(e){if(ye(e))return this.children.isEmpty()?new Ge(null):new Ge(null,this.children);{const t=Te(e),i=this.children.get(t);if(i){const s=i.remove(He(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Ge(null):new Ge(this.value,r)}else return this}}get(e){if(ye(e))return this.value;{const t=Te(e),i=this.children.get(t);return i?i.get(He(e)):null}}setTree(e,t){if(ye(e))return t;{const i=Te(e),r=(this.children.get(i)||new Ge(null)).setTree(He(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Ge(this.value,o)}}fold(e){return this.fold_(Me(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(_t(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Me(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(ye(e))return null;{const r=Te(e),o=this.children.get(r);return o?o.findOnPath_(He(e),_t(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Me(),t)}foreachOnPath_(e,t,i){if(ye(e))return this;{this.value&&i(t,this.value);const s=Te(e),r=this.children.get(s);return r?r.foreachOnPath_(He(e),_t(t,s),i):new Ge(null)}}foreach(e){this.foreach_(Me(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(_t(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.writeTree_=e}static empty(){return new ni(new Ge(null))}}function Ra(n,e,t){if(ye(e))return new ni(new Ge(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=On(s,e);return r=r.updateChild(o,t),new ni(n.writeTree_.set(s,r))}else{const s=new Ge(t),r=n.writeTree_.setTree(e,s);return new ni(r)}}}function Xp(n,e,t){let i=n;return Vn(t,(s,r)=>{i=Ra(i,_t(e,s),r)}),i}function Yp(n,e){if(ye(e))return ni.empty();{const t=n.writeTree_.setTree(e,new Ge(null));return new ni(t)}}function ah(n,e){return pr(n,e)!=null}function pr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(On(t.path,e)):null}function Jp(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(qt,(i,s)=>{e.push(new Ee(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Ee(i,s.value))}),e}function ys(n,e){if(ye(e))return n;{const t=pr(n,e);return t!=null?new ni(new Ge(t)):new ni(n.writeTree_.subtree(e))}}function lh(n){return n.writeTree_.isEmpty()}function yo(n,e){return Hv(Me(),n.writeTree_,e)}function Hv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(H(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Hv(_t(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(_t(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n,e){return Jv(e,n)}function hC(n,e,t,i,s){H(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ra(n.visibleWrites,e,t)),n.lastWriteId=i}function dC(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function fC(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);H(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&pC(l,i.path)?s=!1:ei(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return mC(n),!0;if(i.snap)n.visibleWrites=Yp(n.visibleWrites,i.path);else{const l=i.children;Vn(l,c=>{n.visibleWrites=Yp(n.visibleWrites,_t(i.path,c))})}return!0}else return!1}function pC(n,e){if(n.snap)return ei(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ei(_t(n.path,t),e))return!0;return!1}function mC(n){n.visibleWrites=Kv(n.allWrites,gC,Me()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function gC(n){return n.visible}function Kv(n,e,t){let i=ni.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)ei(t,o)?(l=On(t,o),i=Ra(i,l,r.snap)):ei(o,t)&&(l=On(o,t),i=Ra(i,Me(),r.snap.getChild(l)));else if(r.children){if(ei(t,o))l=On(t,o),i=Xp(i,l,r.children);else if(ei(o,t))if(l=On(o,t),ye(l))i=Xp(i,Me(),r.children);else{const c=ao(r.children,Te(l));if(c){const u=c.getChild(He(l));i=Ra(i,Me(),u)}}}else throw To("WriteRecord should have .snap or .children")}}return i}function Qv(n,e,t,i,s){if(!i&&!s){const r=pr(n.visibleWrites,e);if(r!=null)return r;{const o=ys(n.visibleWrites,e);if(lh(o))return t;if(t==null&&!ah(o,Me()))return null;{const l=t||Pe.EMPTY_NODE;return yo(o,l)}}}else{const r=ys(n.visibleWrites,e);if(!s&&lh(r))return t;if(!s&&t==null&&!ah(r,Me()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(ei(u.path,e)||ei(e,u.path))},l=Kv(n.allWrites,o,e),c=t||Pe.EMPTY_NODE;return yo(l,c)}}}function _C(n,e,t){let i=Pe.EMPTY_NODE;const s=pr(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(qt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=ys(n.visibleWrites,e);return t.forEachChild(qt,(o,l)=>{const c=yo(ys(r,new ze(o)),l);i=i.updateImmediateChild(o,c)}),Jp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ys(n.visibleWrites,e);return Jp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function yC(n,e,t,i,s){H(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=_t(e,t);if(ah(n.visibleWrites,r))return null;{const o=ys(n.visibleWrites,r);return lh(o)?s.getChild(t):yo(o,s.getChild(t))}}function vC(n,e,t,i){const s=_t(e,t),r=pr(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=ys(n.visibleWrites,s);return yo(o,i.getNode().getImmediateChild(t))}else return null}function wC(n,e){return pr(n.visibleWrites,e)}function TC(n,e,t,i,s,r,o){let l;const c=ys(n.visibleWrites,e),u=pr(c,Me());if(u!=null)l=u;else if(t!=null)l=yo(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],f=o.getCompare(),g=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let T=g.getNext();for(;T&&d.length<s;)f(T,i)!==0&&d.push(T),T=g.getNext();return d}else return[]}function EC(){return{visibleWrites:ni.empty(),allWrites:[],lastWriteId:-1}}function ch(n,e,t,i){return Qv(n.writeTree,n.treePath,e,t,i)}function Xv(n,e){return _C(n.writeTree,n.treePath,e)}function Zp(n,e,t,i){return yC(n.writeTree,n.treePath,e,t,i)}function Ec(n,e){return wC(n.writeTree,_t(n.treePath,e))}function IC(n,e,t,i,s,r){return TC(n.writeTree,n.treePath,e,t,i,s,r)}function Md(n,e,t){return vC(n.writeTree,n.treePath,e,t)}function Yv(n,e){return Jv(_t(n.treePath,e),n.writeTree)}function Jv(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;H(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),H(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Hp(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,ZR(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,JR(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Hp(i,e.snapshotNode,s.oldSnap));else throw To("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Zv=new kC;class Ld{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Od(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Md(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rr(this.viewCache_),r=IC(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}function SC(n,e){H(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function AC(n,e,t,i,s){const r=new bC;let o,l;if(t.type===pi.OVERWRITE){const u=t;u.source.fromUser?o=uh(n,e,u.path,u.snap,i,s,r):(H(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!ye(u.path),o=Ic(n,e,u.path,u.snap,i,s,l,r))}else if(t.type===pi.MERGE){const u=t;u.source.fromUser?o=CC(n,e,u.path,u.children,i,s,r):(H(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=hh(n,e,u.path,u.children,i,s,l,r))}else if(t.type===pi.ACK_USER_WRITE){const u=t;u.revert?o=NC(n,e,u.path,i,s,r):o=PC(n,e,u.path,u.affectedTree,i,s,r)}else if(t.type===pi.LISTEN_COMPLETE)o=DC(n,e,t.path,i,r);else throw To("Unknown operation type: "+t.type);const c=r.getChanges();return RC(e,o,c),{viewCache:o,changes:c}}function RC(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=oh(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(YR(oh(e)))}}function ew(n,e,t,i,s,r){const o=e.eventCache;if(Ec(i,t)!=null)return e;{let l,c;if(ye(t))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=rr(e),d=u instanceof Pe?u:Pe.EMPTY_NODE,f=Xv(i,d);l=n.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const u=ch(i,rr(e));l=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=Te(t);if(u===".priority"){H(Is(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const f=Zp(i,t,d,c);f!=null?l=n.filter.updatePriority(d,f):l=o.getNode()}else{const d=He(t);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=Zp(i,t,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(u).updateChild(d,g):f=o.getNode().getImmediateChild(u)}else f=Md(i,u,e.serverCache);f!=null?l=n.filter.updateChild(o.getNode(),u,f,d,s,r):l=o.getNode()}}return Aa(e,l,o.isFullyInitialized()||ye(t),n.filter.filtersNodes())}}function Ic(n,e,t,i,s,r,o,l){const c=e.serverCache;let u;const d=o?n.filter:n.filter.getIndexedFilter();if(ye(t))u=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){const T=c.getNode().updateChild(t,i);u=d.updateFullNode(c.getNode(),T,null)}else{const T=Te(t);if(!c.isCompleteForPath(t)&&Is(t)>1)return e;const R=He(t),D=c.getNode().getImmediateChild(T).updateChild(R,i);T===".priority"?u=d.updatePriority(c.getNode(),D):u=d.updateChild(c.getNode(),T,D,R,Zv,null)}const f=Gv(e,u,c.isFullyInitialized()||ye(t),d.filtersNodes()),g=new Ld(s,f,r);return ew(n,f,t,s,g,l)}function uh(n,e,t,i,s,r,o){const l=e.eventCache;let c,u;const d=new Ld(s,e,r);if(ye(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Aa(e,u,!0,n.filter.filtersNodes());else{const f=Te(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),c=Aa(e,u,l.isFullyInitialized(),l.isFiltered());else{const g=He(t),T=l.getNode().getImmediateChild(f);let R;if(ye(g))R=i;else{const M=d.getCompleteChild(f);M!=null?Pv(g)===".priority"&&M.getChild(Nv(g)).isEmpty()?R=M:R=M.updateChild(g,i):R=Pe.EMPTY_NODE}if(T.equals(R))c=e;else{const M=n.filter.updateChild(l.getNode(),f,R,g,d,o);c=Aa(e,M,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function em(n,e){return n.eventCache.isCompleteForChild(e)}function CC(n,e,t,i,s,r,o){let l=e;return i.foreach((c,u)=>{const d=_t(t,c);em(e,Te(d))&&(l=uh(n,l,d,u,s,r,o))}),i.foreach((c,u)=>{const d=_t(t,c);em(e,Te(d))||(l=uh(n,l,d,u,s,r,o))}),l}function tm(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function hh(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;ye(t)?u=i:u=new Ge(null).setTree(t,i);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,g)=>{if(d.hasChild(f)){const T=e.serverCache.getNode().getImmediateChild(f),R=tm(n,T,g);c=Ic(n,c,new ze(f),R,s,r,o,l)}}),u.children.inorderTraversal((f,g)=>{const T=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!d.hasChild(f)&&!T){const R=e.serverCache.getNode().getImmediateChild(f),M=tm(n,R,g);c=Ic(n,c,new ze(f),M,s,r,o,l)}}),c}function PC(n,e,t,i,s,r,o){if(Ec(s,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(ye(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ic(n,e,t,c.getNode().getChild(t),s,r,l,o);if(ye(t)){let u=new Ge(null);return c.getNode().forEachChild(oo,(d,f)=>{u=u.set(new ze(d),f)}),hh(n,e,t,u,s,r,l,o)}else return e}else{let u=new Ge(null);return i.foreach((d,f)=>{const g=_t(t,d);c.isCompleteForPath(g)&&(u=u.set(d,c.getNode().getChild(g)))}),hh(n,e,t,u,s,r,l,o)}}function DC(n,e,t,i,s){const r=e.serverCache,o=Gv(e,r.getNode(),r.isFullyInitialized()||ye(t),r.isFiltered());return ew(n,o,t,i,Zv,s)}function NC(n,e,t,i,s,r){let o;if(Ec(i,t)!=null)return e;{const l=new Ld(i,e,s),c=e.eventCache.getNode();let u;if(ye(t)||Te(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ch(i,rr(e));else{const f=e.serverCache.getNode();H(f instanceof Pe,"serverChildren would be complete if leaf node"),d=Xv(i,f)}d=d,u=n.filter.updateFullNode(c,d,r)}else{const d=Te(t);let f=Md(i,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),f!=null?u=n.filter.updateChild(c,d,f,He(t),l,r):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(c,d,Pe.EMPTY_NODE,He(t),l,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ch(i,rr(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Ec(i,Me())!=null,Aa(e,u,o,n.filter.filtersNodes())}}function OC(n,e){const t=rr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ye(e)&&!t.getImmediateChild(Te(e)).isEmpty())?t.getChild(e):null}function nm(n,e,t,i){e.type===pi.MERGE&&e.source.queryId!==null&&(H(rr(n.viewCache_),"We should always have a full cache before handling merges"),H(oh(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=AC(n.processor_,s,e,t,i);return SC(n.processor_,r.viewCache),H(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,MC(n,r.changes,r.viewCache.eventCache.getNode())}function MC(n,e,t,i){const s=n.eventRegistrations_;return aC(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im;function LC(n){H(!im,"__referenceConstructor has already been defined"),im=n}function Vd(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return H(r!=null,"SyncTree gave us an op for an invalid query."),nm(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(nm(o,e,t,i));return r}}function Fd(n,e){let t=null;for(const i of n.views.values())t=t||OC(i,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sm;function VC(n){H(!sm,"__referenceConstructor has already been defined"),sm=n}class rm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ge(null),this.pendingWriteTree_=EC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function FC(n,e,t,i,s){return hC(n.pendingWriteTree_,e,t,i,s),s?Jc(n,new sr(qv(),e,t)):[]}function Zr(n,e,t=!1){const i=dC(n.pendingWriteTree_,e);if(fC(n.pendingWriteTree_,e)){let r=new Ge(null);return i.snap!=null?r=r.set(Me(),!0):Vn(i.children,o=>{r=r.set(new ze(o),!0)}),Jc(n,new Tc(i.path,r,t))}else return[]}function Yc(n,e,t){return Jc(n,new sr(Bv(),e,t))}function UC(n,e,t){const i=Ge.fromObject(t);return Jc(n,new Wa(Bv(),e,i))}function xC(n,e,t,i){const s=sw(n,i);if(s!=null){const r=rw(s),o=r.path,l=r.queryId,c=On(o,e),u=new sr(Wv(l),c,t);return ow(n,o,u)}else return[]}function $C(n,e,t,i){const s=sw(n,i);if(s){const r=rw(s),o=r.path,l=r.queryId,c=On(o,e),u=Ge.fromObject(t),d=new Wa(Wv(l),c,u);return ow(n,o,d)}else return[]}function tw(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=On(o,e),u=Fd(l,c);if(u)return u});return Qv(s,e,r,t,!0)}function Jc(n,e){return nw(e,n.syncPointTree_,null,zv(n.pendingWriteTree_,Me()))}function nw(n,e,t,i){if(ye(n.path))return iw(n,e,t,i);{const s=e.get(Me());t==null&&s!=null&&(t=Fd(s,Me()));let r=[];const o=Te(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const u=t?t.getImmediateChild(o):null,d=Yv(i,o);r=r.concat(nw(l,c,u,d))}return s&&(r=r.concat(Vd(s,n,i,t))),r}}function iw(n,e,t,i){const s=e.get(Me());t==null&&s!=null&&(t=Fd(s,Me()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,u=Yv(i,o),d=n.operationForChild(o);d&&(r=r.concat(iw(d,l,c,u)))}),s&&(r=r.concat(Vd(s,n,i,t))),r}function sw(n,e){return n.tagToQueryMap.get(e)}function rw(n){const e=n.indexOf("$");return H(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ze(n.substr(0,e))}}function ow(n,e,t){const i=n.syncPointTree_.get(e);H(i,"Missing sync point for query tag that we're tracking");const s=zv(n.pendingWriteTree_,e);return Vd(i,t,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ud(t)}node(){return this.node_}}class xd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new xd(this.syncTree_,t)}node(){return tw(this.syncTree_,this.path_)}}const qC=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},om=function(n,e,t){if(!n||typeof n!="object")return n;if(H(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return BC(n[".sv"],e,t);if(typeof n[".sv"]=="object")return WC(n[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},BC=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:H(!1,"Unexpected server value: "+n)}},WC=function(n,e,t){n.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&H(!1,"Unexpected increment value: "+i);const s=e.node();if(H(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},jC=function(n,e,t,i){return $d(e,new xd(t,n),i)},GC=function(n,e,t){return $d(n,new Ud(e),t)};function $d(n,e,t){const i=n.getPriority().val(),s=om(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=om(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new ft(l,$t(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ft(s))),o.forEachChild(qt,(l,c)=>{const u=$d(c,e.getImmediateChild(l),t);u!==c&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Bd(n,e){let t=e instanceof ze?e:new ze(e),i=n,s=Te(t);for(;s!==null;){const r=ao(i.node.children,s)||{children:{},childCount:0};i=new qd(s,i,r),t=He(t),s=Te(t)}return i}function Co(n){return n.node.value}function aw(n,e){n.node.value=e,dh(n)}function lw(n){return n.node.childCount>0}function HC(n){return Co(n)===void 0&&!lw(n)}function Zc(n,e){Vn(n.node.children,(t,i)=>{e(new qd(t,n,i))})}function cw(n,e,t,i){t&&!i&&e(n),Zc(n,s=>{cw(s,e,!0,i)}),t&&i&&e(n)}function zC(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function rl(n){return new ze(n.parent===null?n.name:rl(n.parent)+"/"+n.name)}function dh(n){n.parent!==null&&KC(n.parent,n.name,n)}function KC(n,e,t){const i=HC(t),s=Gi(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,dh(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,dh(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=/[\[\].#$\/\u0000-\u001F\u007F]/,XC=/[\[\].#$\u0000-\u001F\u007F]/,bu=10*1024*1024,uw=function(n){return typeof n=="string"&&n.length!==0&&!QC.test(n)},YC=function(n){return typeof n=="string"&&n.length!==0&&!XC.test(n)},JC=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),YC(n)},hw=function(n,e,t){const i=t instanceof ze?new DR(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Vs(i));if(typeof e=="function")throw new Error(n+"contains a function "+Vs(i)+" with contents = "+e.toString());if(uv(e))throw new Error(n+"contains "+e.toString()+" "+Vs(i));if(typeof e=="string"&&e.length>bu/3&&Dc(e)>bu)throw new Error(n+"contains a string greater than "+bu+" utf8 bytes "+Vs(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Vn(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!uw(o)))throw new Error(n+" contains an invalid key ("+o+") "+Vs(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);NR(i,o),hw(n,l,i),OR(i)}),s&&r)throw new Error(n+' contains ".value" child '+Vs(i)+" in addition to actual children.")}},ZC=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!JC(t))throw new Error(TT(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tP(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Ov(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function mr(n,e,t){tP(n,t),nP(n,i=>ei(i,e)||ei(e,i))}function nP(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(iP(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function iP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();ka&&xt("event: "+t.toString()),il(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="repo_interrupt",rP=25;class oP{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wc(),this.transactionQueueTree_=new qd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aP(n,e,t){if(n.stats_=Rd(n.repoInfo_),n.forceRestClient_||tR())n.server_=new vc(n.repoInfo_,(i,s,r,o)=>{am(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>lm(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{kt(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new qi(n.repoInfo_,e,(i,s,r,o)=>{am(n,i,s,r,o)},i=>{lm(n,i)},i=>{cP(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=aR(n.repoInfo_,()=>new oC(n.stats_,n.server_)),n.infoData_=new tC,n.infoSyncTree_=new rm({startListening:(i,s,r,o)=>{let l=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(l=Yc(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Wd(n,"connected",!1),n.serverSyncTree_=new rm({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,c)=>{const u=o(l,c);mr(n.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function lP(n){const t=n.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function dw(n){return qC({timestamp:lP(n)})}function am(n,e,t,i,s){n.dataUpdateCount++;const r=new ze(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=Yl(t,u=>$t(u));o=$C(n.serverSyncTree_,r,c,s)}else{const c=$t(t);o=xC(n.serverSyncTree_,r,c,s)}else if(i){const c=Yl(t,u=>$t(u));o=UC(n.serverSyncTree_,r,c)}else{const c=$t(t);o=Yc(n.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Gd(n,r)),mr(n.eventQueue_,l,o)}function lm(n,e){Wd(n,"connected",e),e===!1&&hP(n)}function cP(n,e){Vn(e,(t,i)=>{Wd(n,t,i)})}function Wd(n,e,t){const i=new ze("/.info/"+e),s=$t(t);n.infoData_.updateSnapshot(i,s);const r=Yc(n.infoSyncTree_,i,s);mr(n.eventQueue_,i,r)}function uP(n){return n.nextWriteId_++}function hP(n){fw(n,"onDisconnectEvents");const e=dw(n),t=wc();rh(n.onDisconnect_,Me(),(s,r)=>{const o=jC(s,r,n.serverSyncTree_,e);$v(t,s,o)});let i=[];rh(t,Me(),(s,r)=>{i=i.concat(Yc(n.serverSyncTree_,s,r));const o=mP(n,s);Gd(n,o)}),n.onDisconnect_=wc(),mr(n.eventQueue_,Me(),i)}function dP(n){n.persistentConnection_&&n.persistentConnection_.interrupt(sP)}function fw(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),xt(t,...e)}function pw(n,e,t){return tw(n.serverSyncTree_,e,t)||Pe.EMPTY_NODE}function jd(n,e=n.transactionQueueTree_){if(e||eu(n,e),Co(e)){const t=gw(n,e);H(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&fP(n,rl(e),t)}else lw(e)&&Zc(e,t=>{jd(n,t)})}function fP(n,e,t){const i=t.map(u=>u.currentWriteId),s=pw(n,e,i);let r=s;const o=s.hash();for(let u=0;u<t.length;u++){const d=t[u];H(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=On(e,d.path);r=r.updateChild(f,d.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;n.server_.put(c.toString(),l,u=>{fw(n,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let g=0;g<t.length;g++)t[g].status=2,d=d.concat(Zr(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&f.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();eu(n,Bd(n.transactionQueueTree_,e)),jd(n,n.transactionQueueTree_),mr(n.eventQueue_,e,d);for(let g=0;g<f.length;g++)il(f[g])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{dn("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}Gd(n,e)}},o)}function Gd(n,e){const t=mw(n,e),i=rl(t),s=gw(n,t);return pP(n,s,i),i}function pP(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=On(t,c.path);let d=!1,f;if(H(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,f=c.abortReason,s=s.concat(Zr(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=rP)d=!0,f="maxretry",s=s.concat(Zr(n.serverSyncTree_,c.currentWriteId,!0));else{const g=pw(n,c.path,o);c.currentInputSnapshot=g;const T=e[l].update(g.val());if(T!==void 0){hw("transaction failed: Data returned ",T,c.path);let R=$t(T);typeof T=="object"&&T!=null&&Gi(T,".priority")||(R=R.updatePriority(g.getPriority()));const D=c.currentWriteId,L=dw(n),U=GC(R,g,L);c.currentOutputSnapshotRaw=R,c.currentOutputSnapshotResolved=U,c.currentWriteId=uP(n),o.splice(o.indexOf(D),1),s=s.concat(FC(n.serverSyncTree_,c.path,U,c.currentWriteId,c.applyLocally)),s=s.concat(Zr(n.serverSyncTree_,D,!0))}else d=!0,f="nodata",s=s.concat(Zr(n.serverSyncTree_,c.currentWriteId,!0))}mr(n.eventQueue_,t,s),s=[],d&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(f),!1,null))))}eu(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)il(i[l]);jd(n,n.transactionQueueTree_)}function mw(n,e){let t,i=n.transactionQueueTree_;for(t=Te(e);t!==null&&Co(i)===void 0;)i=Bd(i,t),e=He(e),t=Te(e);return i}function gw(n,e){const t=[];return _w(n,e,t),t.sort((i,s)=>i.order-s.order),t}function _w(n,e,t){const i=Co(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Zc(e,s=>{_w(n,s,t)})}function eu(n,e){const t=Co(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,aw(e,t.length>0?t:void 0)}Zc(e,i=>{eu(n,i)})}function mP(n,e){const t=rl(mw(n,e)),i=Bd(n.transactionQueueTree_,e);return zC(i,s=>{ku(n,s)}),ku(n,i),cw(i,s=>{ku(n,s)}),t}function ku(n,e){const t=Co(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(H(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(H(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Zr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?aw(e,void 0):t.length=r+1,mr(n.eventQueue_,rl(e),s);for(let o=0;o<i.length;o++)il(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function _P(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dn(`Invalid query segment '${t}' in query '${n}'`)}return e}const cm=function(n,e){const t=yP(n),i=t.namespace;t.domain==="firebase.com"&&nr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||z1();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new sR(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new ze(t.pathString)}},yP=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(l=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(d,f)),d<f&&(s=gP(n.substring(d,f)));const g=_P(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const T=e.slice(0,u);if(T.toLowerCase()==="localhost")t="localhost";else if(T.split(".").length<=2)t=T;else{const R=e.indexOf(".");i=e.substring(0,R).toLowerCase(),t=e.substring(R+1),r=i}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return ye(this._path)?null:Pv(this._path)}get ref(){return new Po(this._repo,this._path)}get _queryIdentifier(){const e=Kp(this._queryParams),t=Sd(e);return t==="{}"?"default":t}get _queryObject(){return Kp(this._queryParams)}isEqual(e){if(e=Wt(e),!(e instanceof Hd))return!1;const t=this._repo===e._repo,i=Ov(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+PR(this._path)}}class Po extends Hd{constructor(e,t){super(e,t,new Nd,!1)}get parent(){const e=Nv(this._path);return e===null?null:new Po(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}LC(Po);VC(Po);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="FIREBASE_DATABASE_EMULATOR_HOST",fh={};let wP=!1;function TP(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=cm(r,s),l=o.repoInfo,c;typeof process<"u"&&Cp&&(c=Cp[vP]),c?(r=`http://${c}?ns=${l.namespace}`,o=cm(r,s),l=o.repoInfo):o.repoInfo.secure;const u=new iR(n.name,n.options,e);ZC("Invalid Firebase Database URL",o),ye(o.path)||nr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=IP(l,n,u,new nR(n.name,t));return new bP(d,n)}function EP(n,e){const t=fh[e];(!t||t[n.key]!==n)&&nr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),dP(n),delete t[n.key]}function IP(n,e,t,i){let s=fh[e.name];s||(s={},fh[e.name]=s);let r=s[n.toURLString()];return r&&nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new oP(n,wP,t,i),s[n.toURLString()]=r,r}class bP{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Po(this._repo,Me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nr("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(n){q1(bs),Ln(new fn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return TP(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Bt(Pp,Dp,n),Bt(Pp,Dp,"esm2017")}qi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};qi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};kP();var SP="firebase",AP="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(SP,AP,"app");const RP=["Kind","Cruel","Focused","Unfocused","Selfless","Selfish","Honorable","Deceitful","Brave","Cowardly"];class Su{constructor(){me(this,"id","");me(this,"Alchemy",{name:"Alchemy",baseAbility:"LOG",level:0,relation:0,linkedSkill:VP});me(this,"Detective",{name:"Detective",baseAbility:"LOG",level:0,relation:0,linkedSkill:FP});me(this,"Diviner",{name:"Diviner",baseAbility:"LOG",level:0,relation:0,linkedSkill:LP});me(this,"Leader",{name:"Leader",baseAbility:"WIL",level:0,relation:0,linkedSkill:OP});me(this,"Mystic",{name:"Mystic",baseAbility:"WIL",level:0,relation:0,linkedSkill:MP});me(this,"Scholar",{name:"Scholar",baseAbility:"LOG",level:0,relation:0,linkedSkill:DP});me(this,"Scout",{name:"Scout",baseAbility:"LOG",level:0,relation:0,linkedSkill:NP});me(this,"Sorcerer",{name:"Sorcerer",baseAbility:"WIL",level:0,relation:0,linkedSkill:CP});me(this,"Thief",{name:"Thief",baseAbility:"DEX",level:0,relation:0,linkedSkill:PP});me(this,"Warrior1",{name:"Warrior1",style:"",level:0,relation:0,linkedSkill:um});me(this,"Warrior2",{name:"Warrior2",style:"",level:0,relation:0,linkedSkill:um});me(this,"Name","");me(this,"Description","");me(this,"CP",10);me(this,"Qi",0);me(this,"STR",1);me(this,"DEX",1);me(this,"LOG",1);me(this,"WIL",1);me(this,"BP",this.BaseBP);me(this,"MoralCodes",{Totally:-1,Somewhat:-1,Very:-1});me(this,"learnedTechniques",[]);me(this,"spells",[]);me(this,"equipment",[]);me(this,"armour",[]);me(this,"weapons",[]);me(this,"canUseWeapon",e=>{if(e.attributes.length==0)return!0;for(const s of e.attributes){var[t,i]=s.split(" ");if(this[t]<i)return!1}return!0});me(this,"trainedWithWeapon",e=>{for(const{style:t}of[this.Warrior1,this.Warrior2])if(!(!t||t=="")){for(const i of Sh)if(i.name==t&&i.weapons.includes(e))return!0}return!1});me(this,"equippedArmour");me(this,"equipArmour",e=>{if(console.log("equip",e),!e){this.equippedArmour=void 0;return}this.equippedArmour=e});me(this,"skipNextWebWrite",!1)}get BaseBP(){return Math.round(this.STR/2)+Math.max(0,10*(this.Rank-1))}get Rank(){let e=0,t=[this.Alchemy.level,this.Detective.level,this.Diviner.level,this.Leader.level,this.Mystic.level,this.Scholar.level,this.Scout.level,this.Sorcerer.level,this.Thief.level,this.Warrior1.level,this.Warrior2.level].sort().reverse();return t[0]>2&&(e+=1),t[0]>4&&(e+=1),t[0]==6&&(e+=1),t[1]>3&&(e+=1),t[1]==6&&(e+=1),Math.max(this.STR,this.DEX,this.LOG,this.WIL)>=50&&(e+=1),Math.max(this.STR,this.DEX,this.LOG,this.WIL)>=100&&(e+=1),e}get MOV(){let e=8;return this.STR>=65&&(e+=1),this.DEX>=65&&(e+=1),e}get INIT(){let e=1;return this.LOG>=65&&(e+=1),this.DEX>=65&&(e+=1),e}get DR(){return"0"}getSkillScore(e,t){let{requiredForAttempt:i}=e.linkedSkill;return!i&&e.level==0?Math.ceil(t/2):e.level==0?0:Math.ceil(t/2+e.level*10+e.relation*10)}get AlchemyScore(){return this.getSkillScore(this.Alchemy,this.LOG)}get DetectiveScore(){return this.getSkillScore(this.Detective,this.LOG)}get DivinerScore(){return this.getSkillScore(this.Diviner,this.LOG)}get LeaderScore(){return this.getSkillScore(this.Leader,this.WIL)}get MysticScore(){return this.getSkillScore(this.Mystic,this.WIL)}get ScholarScore(){return this.getSkillScore(this.Scholar,this.LOG)}get ScoutScore(){return this.getSkillScore(this.Scout,this.LOG)}get SorcererScore(){return this.getSkillScore(this.Sorcerer,this.WIL)}get ThiefScore(){return this.getSkillScore(this.Thief,this.DEX)}get Warrior1RangedScore(){return this.getSkillScore(this.Warrior1,this.DEX)}get Warrior1MeleeScore(){return this.getSkillScore(this.Warrior1,this.STR)}get Warrior2RangedScore(){return this.getSkillScore(this.Warrior2,this.DEX)}get Warrior2MeleeScore(){return this.getSkillScore(this.Warrior2,this.STR)}get allowedTechniques(){var i,s,r,o;let e=[],t=[(i=this.Warrior1)==null?void 0:i.style,(s=this.Warrior2)==null?void 0:s.style];if(t.every(l=>!l))return[];for(const l of Sh)console.log(l.name,t),t.includes(l.name)&&(e=[...e,...l.techniques]);return console.log("allowedTechniques",e.length,(r=this.Warrior1)==null?void 0:r.style,(o=this.Warrior2)==null?void 0:o.style),e}get MeleeDamageModifier(){let e=0;return this.STR<55?e:(this.learnedTechniques.includes("Vivacity")?e+=(this.DEX-55)/5:e+=(this.STR-55)/5,Math.ceil(e))}get RangedDamageModifier(){let e=0;return e+=(this.DEX-55)/5,Math.max(e,0)}get MeleeUnarmedModifier(){return Math.max(0,0)}get kungFuDamage(){let e=Rw.damage,t=["1D","1D+2","1D+4","2D","2D+2","2D+4"],i=Math.max(this.Warrior1.level,this.Warrior2.level);return i>0&&(e=t[i-1]),e}redefine(e){const{id:t,Name:i,Description:s,CP:r,Qi:o,STR:l,DEX:c,LOG:u,WIL:d,MoralCodes:f,learnedTechniques:g,spells:T,equipment:R,armour:M,weapons:D}=e;return this.id=t,this.Name=i,this.Description=s,this.CP=r,this.Qi=o,this.STR=l,this.DEX=c,this.LOG=u,this.WIL=d,this.MoralCodes=f,this.learnedTechniques=g,this.spells=T,this}get webExport(){const{id:e,Name:t,Description:i,CP:s,Qi:r,STR:o,DEX:l,LOG:c,WIL:u,MoralCodes:d,learnedTechniques:f,spells:g,equipment:T,armour:R,weapons:M}=this;return{id:e,Name:t,Description:i,CP:s,Qi:r,STR:o,DEX:l,LOG:c,WIL:u,MoralCodes:d,learnedTechniques:f,spells:g,equipment:T,armour:R,weapons:M}}}const um={name:"Warrior",desc:`This skill covers various martial arts styles. It represents expertise gained from training in kung fu, military service, or as a mercenary or xia. 
	This skill can be used as an untrained fighting score; you just won’t have any kung fu techniques or other benefits of training.
	When designating the Warrior skill as a primary or secondary skill, apply the bonus to all Warrior skills you take in the future.`,score:"Note this skill has two scores as follows; melee equals half STR +10 per Warrior level (includes unarmed combat), and ranged equals half DEX +10 per Warrior level (includes thrown weapons).",titles:["Novice","Pupil","Expert","Shifu (teacher)","Champion","Master"],abilities:[{name:"Marksman",desc:"Utilizes ranged weaponry such as bows, dart projectiles, hurled daggers, and needle-like objects."},{name:"Melee",desc:"Utilizes a range of handheld tools including blades, blunt instruments, and empty-handed techniques to engage opponents in close quarters combat."},{name:"Kung Fu",desc:"Selecting a kung fu style when leveling up in Warrior grants you a unique moniker, combining your role with the chosen style (e.g., Warrior of Dragon's Claw). Your proficiency in various techniques equals your current Warrior level."},{name:"Kung Fu Damage",desc:"Your kung fu style and unarmed attacks deal increased damage as your Warrior skill rises. Refer to Kung Fu for details on specific weapon effects."}]},CP={name:"Sorcerer",desc:"This skill reflects the ability to wield magical powers and create powerful objects through strength of will.",score:"half WIL +10 per sorcerer level.",requiredForAttempt:!0,titles:["Acolyte","Adept","Mage","Warlock","Sorcerer","Grand Sorcerer"],abilities:[{name:"High Sorcery",desc:"Knows a multitude of spells matching your Sorcerer level."},{name:"Low Sorcery",desc:`You may perform any one of the following once per round, no check required:
				- Illuminate a 5-space area with soft light
				- Create a convincing auditory illusion within 5 spaces
				- Display minor magic in a visual effect that's easy to see
				- Enlist small objects to assist you - like mops or dishes
				- Amplify the volume and authority of your voice or another's for up to 5 spaces
				- Repair minor damage to everyday items
				- Complete other simple magical tasks approved by the GM`},{name:"Raw Talent",desc:"Detect and interpret magical phenomena including written spells and incantations after declaring intent to do so. Move small objects using focused mental energy without requiring a skill check."},{name:"Enchantment",desc:"Craft bespoke magical objects using spells or abilities, a process that unfolds over days or weeks, as detailed in Magic Item Creation on page 68."}]},PP={name:"Thief",desc:"This skill represents the expertise acquired by rogues or thieves through talent and opportunity.",score:"half DEX +10 per Thief level.",titles:["Footpad","Cutpurse","Burglar","Robber","Thief","Master Thief"],abilities:[{name:"Deception",desc:"Master deception techniques, fabricate convincing documents, convincingly assume identities, and maintain realistic disguises for others."},{name:"Security Systems",desc:"Recognize and disable hidden dangers, craft clever lockpicks, and execute minor mechanical fixes, all while relying on the precision of thieves' tools."},{name:"Sleight of Hand",desc:"You possess cunning skills of pilfering small items, palming valuables and concealing them with ease."},{name:"Stealth",desc:"Unseen strike: You become nearly invisible, gaining +5 to attack and deal increased damage per Thief level when striking from concealment."}]},DP={name:"Scholar",desc:"This skill represents knowledge gained from education and access to books, legends, and lore.",score:"half LOG +10 per Scholar level.",requiredForAttempt:!0,titles:["Student","Cultivated Talent","Researcher","Scholar","Promoted Scholar","Master Scholar"],abilities:[{name:"Diplomat",desc:"Gain +5 per level to ability checks for understanding cultural norms, influencing others through diplomacy, building rapport, negotiating fairly, interacting with nobility, persuading others, and similar social exchanges. Learn an extra language at the same rate."},{name:"High Scholar",desc:"Gain a unique expertise at every even level, boosting relevant skill checks by +10 for 3 hours. Choose from roles like administrator, calligrapher, trader, librarian, poet, or select others with your GM's approval."},{name:"Historian",desc:"Uncover esoteric knowledge and obscure connections between legendary figures, notable locations, and cultural artifacts, revealing hidden patterns and relationships that shape history."},{name:"Signs & Portents",desc:"As needed, pose a query to the Game Master about the narrative context and receive a straightforward truth-based reply."}]},NP={name:"Scout",desc:"This skill represents training or experience in wilderness survival, outdoor life, training of animals, and ranger duties.",score:"half LOG +10 per Scout level.",titles:["Runner","Tracker","Warden","Scout","Pathfinder","Ranger"],abilities:[{name:"Animal Handling",desc:"Engage with, soothe, provoke, or mentor indigenous wildlife species."},{name:"Navigation",desc:"Familiar with cardinal directions and able to pinpoint position on a given map, decode various types of maps, generate new maps, and navigate spatial information effectively."},{name:"Stalking",desc:"Track natural landscapes, gather intel from environmental clues, disregard terrain-based drawbacks, and stalk prey undetected in the wild."},{name:"Survival",desc:"Craft objects from organic resources, construct shelters, ignite flames, forage for sustenance, locate potable water sources, detect and neutralize natural obstacles and threats."}]},OP={name:"Leader",desc:"This skill represents experience and training in personal and strategic combat on the battlefield.",score:"half WIL +10 per Leader level.",requiredForAttempt:!0,titles:["Protector","Defender","Guardian","Knight","Warlord","Highlord"],abilities:[{name:"Battle Commander",desc:`Initiative rolled, you may make a skill check. Success grants one of the following benefits until the turn ends, does not count as an action:
				+ Tactics: Team gets +1 initiative.
				+ Assault: Uncover enemy vulnerabilities such as exposed flesh or unshielded areas.
				+ Inspire: Grant adjacent allies +5 to hit and damage per Leader level.`},{name:"Guardian",desc:"When an adjacent ally takes damage, you can redirect the attack and absorb the hit, ignoring your Defense Rating. No roll needed."},{name:"Leader",desc:"Attract followers proportionate to leader level: 1/2D at Level 3, 1D at Level 4, 2D at Level 5, and entire armies at Level 6."},{name:"Warlord",desc:`On your turn choose one effect. Lasts until the turn ends. Counts as an action. No skill check required.
				- Unite: You and allies gain +10 to hit and damage for the rest of the turn.
				- Fortify: Allies resisting dark powers, magic, fear, etc. gain +20 on LOG or WIL checks.
				- Overwhelm: If outnumbering a foe 2:1 in melee, you or ally makes two attacks, choosing which roll to keep. Foe takes damage and is knocked prone. Counts as a single action.`}]},MP={name:"Mystic",desc:"This skill reflects years of devotion to an ascetic lifestyle and cultivation of senses to interact with natural energy.",score:"half WIL +10 per Mystic level.",requiredForAttempt:!0,titles:["Novitiate","Brother/Sister","Priest","Chant Leader","Chief Monk","Abbot"],abilities:[{name:"Qi Focus",desc:"Gain an extra qi point at levels 1, 3, and 6. Moreover, you can utilize qi healing and transfer abilities without Warrior level requirements."},{name:"Harmony Sense",desc:"Detect spirits and demons within 15 meters per level, identify powerful energy signatures, or perceive moral resonance of entities and locations. Separate checks required for each distinct application; active declaration of intent necessary."},{name:"Spirit Sword",desc:"Spending one qi enables temporary empowerment of the spirit sword in hand. Spirit swords are ornate wooden jian adorned with mystical symbols. At Mystic level 1, you can forge spirit swords at no cost. With a charged spirit sword, any ally may vanquish demons and ghosts as if wielding a magical weapon, effect lasting for one day."},{name:"Wards",desc:"Erect protective barriers around areas, rooms, buildings, or entire towns with torii gates. Demons and ghosts of lower rank than you are blocked from entering the warded space. Establishing a local ward takes 10 minutes, while a town-wide ward requires one hour per gate, with at least one torii gate present. Both types of wards persist for a month."}]},LP={name:"Diviner",desc:"This skill represents the ability to interpret signs, predict fortunes, and make decisions based on cosmic forces.",score:"half LOG +10 per Diviner level.",requiredForAttempt:!0,titles:["Fortune Teller","Augur","Soothsayer","Astrologer","Seer","Master Diviner"],abilities:[{name:"Hunch",desc:"Once per encounter, disrupt the dice by shouting a warning or making a sudden move that causes anyone to re-roll their result, including the GM. You must be able to convey your message to fellow players. Out-of-turn usage incurs multi-action penalties."},{name:"Foresight",desc:"Place an object in the world once per session with a value up to 100 taels per level, considering location and potential requirements for successful placement."},{name:"Reading",desc:`Divine Insight: You may ask the GM up to your Diviner level questions each session. They will provide accurate answers. To perform a reading, you'll need a diviners kit and a few minutes of focus. Some examples of questions you might ask include:
				- Is this individual morally inclined towards kindness or cruelty?
				- When did someone pass away?
				- Where did they meet their end?
				- How did that person depart from this world?
				- Where can I find...?
				- Are there magical energies at play on this being/object/place?
				- Is something hidden here or nearby?
				- What's being said? (Eavesdrop up to 100 feet away.)
				- What's unfolding visually? (Witness an event up to 100 feet away.)
				- What will the weather be like for the next two days?
				- Is this a genuine occurrence, or is illusion at play?
				- Are there traps in place?
				- Is this substance toxic?
				- Is what someone is saying the truth?`},{name:"Identify Convergence Point",desc:`You sense the confluence of paths. Using this insight helps you choose a course. Identifying a nexus requires a diviner's kit, 2 qi. Success leaves you "drained" (see Drained Condition). The used qi may not be recovered until the nexus is resolved. A nexus can be abandoned at any time. Abandonment allows normal qi recovery and returns strength in one week. Only one nexus can be identified at once. A second nexus cannot be identified until the previous one's duration has passed, even if it was abandoned early.`}]},VP={name:"Alchemist",desc:"This skill represents expertise in understanding substances and their effects on the body.",score:"half LOG +10 per Alchemist level.",requiredForAttempt:!0,titles:["Herbalist","Apothecary","Doctor","Physician","Alchemist","Master Alchemist"],abilities:[{name:"Alchemy",desc:"Choose a specific area of alchemical expertise for each level: antidote formulas, catalyst compounds, debilitating extracts, deadly concoctions, explosive mixtures, or medicinal elixirs. Operating an alchemist's lab demands possession of an alchemist's kit."},{name:"Diagnose",desc:"Diagnose medical conditions including poisoning identifying root causes through observation of symptoms pulse body odor and questioning patients' families. Hard penalty -20 applies without alchemy kit or clinic/hospital facilities."},{name:"Wound Mending",desc:"Instantly restore 1D BP plus 2BP per alchemist level to a wounded character, potentially reviving them from harm's way. Characters can only benefit once per encounter, regardless of the number of alchemists on hand, assuming their injury occurred during the encounter itself. This skill demands either an alchemist kit or a fully-equipped clinic/hospital for successful execution."},{name:"Surgery",desc:"A successful skill check in a properly equipped medical facility allows the alchemist to restore 3D lost body points plus one additional point per level to a wounded character. This takes half-day and the patient remains incapacitated for a minimum of 24 hours, with potential for longer recovery at the GM's discretion."}]},FP={name:"Detective",desc:"This skill represents training in finding the truth, spotting clues, interrogating, and making arrests.",score:"half LOG +10 per Detective level.",titles:["Officer","Examiner","Investigator","Inspector","Detective","Master Detective"],abilities:[{name:"Detect Clues",desc:"Adept at deciphering subtle hints, consolidating data, and solving intricate enigmas through astute analysis of existing information."},{name:"Interrogation",desc:"Expertly elicits reliable information from captured individuals via nuanced questioning tactics. Successful interrogation demands a contested roll against the captive's WIL."},{name:"Shadowing and Trailing",desc:"Mastered the ability to discreetly observe or track individuals without drawing attention, achieved through subtle blending and situational awareness, allowing for unobtrusive surveillance of suspects."},{name:"Connections",desc:"Establish network connections. A skilled investigator is only as effective as their access points, having up to Detective level contacts. Collaborate with the player and GM to develop these connections. They might be sources, insiders, associates, or others who can provide support, intel, or influence. These contacts may operate in prominent or obscure roles, offering assistance or information when needed. The detective can sever a connection to replace it with another, pending story and GM approval."}]},yw={itemType:"Weapon",image_name:"battle-axe",name:"Battleaxe",subType:"Melee",hands:1,range:0,attributes:["STR 50"],damage:"2D+2",cost:"10tl",desc:"A mighty two-handed axe, often wielded by the bravest warriors in our realm."},sa={itemType:"Weapon",image_name:"chained-arrow-heads",name:"Bian (Hard Whip)",subType:"Melee",hands:1,range:0,attributes:["STR 55"],damage:"2D",cost:"20tl",desc:"A rigid whip with a sharpened edge, favored by skilled horsemen and guards."},zd={itemType:"Weapon",image_name:"crossed-sabres",name:"Butterfly Sword",subType:"Melee",hands:1,range:0,attributes:[],damage:"1D+2",cost:"15tl",desc:"Twin short swords, cherished by martial artists and guardians of ancient secrets."},ph={itemType:"Weapon",image_name:"grapple",name:"Chain Whip/Flying Claw",subType:"Melee",hands:1,range:3,attributes:["DEX 60"],damage:"1D+1",cost:"12tl",desc:"A whip interwoven with chains, mastered by the elite defenders of our empire."},vw={itemType:"Weapon",image_name:"spiked-mace",name:"Club",subType:"Melee",hands:1,range:0,attributes:[],damage:"1D+1",cost:"1tl",desc:"A sturdy wooden bludgeon, common among foot soldiers and village guardians."},Kd={itemType:"Weapon",image_name:"flanged-mace",name:"Chui",subType:"Melee",hands:1,range:0,attributes:["STR 65"],damage:"2D+4",cost:"12tl",desc:"A weighty mace with a solid head, feared by foes for its devastating blows."},ww={itemType:"Weapon",image_name:"crescent-blade",name:"Crescent Moon Knife",subType:"Melee",hands:1,range:0,attributes:["DEX 60"],damage:"1D+3",cost:"5tl",desc:"A curved blade resembling the moon's crescent, prized by our elite swordsmen."},Tw={itemType:"Weapon",image_name:"crossbow",name:"Crossbow",subType:"Ranged",hands:2,range:80,attributes:[],damage:"2D+2",cost:"15tl",desc:"A handheld weapon of remarkable precision, revolutionizing our battlefield tactics."},fi={itemType:"Weapon",image_name:"plain-dagger",name:"Dagger/Dark Judge's Brush",subType:"Melee",hands:1,range:10,attributes:[],damage:"1D",cost:"2tl",desc:"A short blade, essential for every warrior's arsenal, even among the secretive judges of the night."},Fl={itemType:"Weapon",image_name:"machete",name:"Dao (Heavy Sabre)",subType:"Melee",hands:1,range:0,attributes:["STR 55"],damage:"2D+2",cost:"12tl",desc:"A curved saber renowned for its deadly slashes, cherished by our finest generals."},an={itemType:"Weapon",image_name:"shuriken",name:"Dart/Star",subType:"Ranged",hands:1,range:15,attributes:[],damage:"1D",cost:"2tl",desc:"Small throwing projectiles, favored by our scouts and marksmen for swift strikes."},Ew={itemType:"Weapon",image_name:"battered-axe",name:"Greataxe",subType:"Melee",hands:2,range:0,attributes:["STR 70"],damage:"3D",cost:"40tl",desc:"An imposing two-handed axe, symbolizing the strength and ferocity of our warriors."},Iw={itemType:"Weapon",image_name:"wood-club",name:"Great club",subType:"Melee",hands:2,range:0,attributes:["STR 55"],damage:"2D",cost:"15tl",desc:"A massive wooden club, wielded by guardians of our sacred temples and fortress gates."},UP={itemType:"Weapon",image_name:"spiked-mace",name:"Hammer/Mace",subType:"Melee",hands:1,range:0,attributes:["STR 45"],damage:"1D+3",cost:"8tl",desc:"A blunt instrument of war, prized for its ability to crush armor and bones alike."},Qd={itemType:"Weapon",image_name:"fire-axe",name:"Handaxe",subType:"Melee",hands:1,range:15,attributes:[],damage:"1D+2",cost:"2tl",desc:"A versatile one-handed axe, indispensable for woodcutters and guardians alike."},bc={itemType:"Weapon",image_name:"hook-swords",name:"Hook sword",subType:"Melee",hands:1,range:0,attributes:["DEX 60"],damage:"2D",cost:"20tl",desc:"A unique weapon with a hooked blade, passed down through generations of skilled warriors."},xP={itemType:"Weapon",image_name:"beer-stein",name:"Improvised, Small+",subType:"Melee",hands:1,range:10,attributes:[],damage:"1D",cost:"--",desc:"- Lasts only 3 turns then breaks, also breaks on a critical success or failure."},$P={itemType:"Weapon",image_name:"bar-stool",name:"Improvised, Medium",subType:"Melee",hands:1,range:5,attributes:[],damage:"1D+3",cost:"--",desc:"- Lasts only 3 turns then breaks, also breaks on a critical success or failure."},qP={itemType:"Weapon",image_name:"table",name:"Improvised, Large",subType:"Melee",hands:2,range:3,attributes:["STR 65"],damage:"2D",cost:"--",desc:"- Lasts only 3 turns then breaks, also breaks on a critical success or failure."},ra={itemType:"Weapon",image_name:"ring",name:"Iron Wrist Rings",subType:"Melee",hands:1,range:0,attributes:["STR 70"],damage:"+3 unarmed",cost:"5tl",desc:"Metal bands worn as protection, favored by our honorable fighters in the arenas."},Ul={itemType:"Weapon",image_name:"thrown-spear",name:"Javelin",subType:"Ranged",hands:1,range:30,attributes:["STR 45"],damage:"1D+2",cost:"2tl",desc:"A thrown spear, favored by our horsemen for swift and deadly strikes."},Xn={itemType:"Weapon",image_name:"broadsword",name:"Jian (Longsword)",subType:"Melee",hands:1,range:0,attributes:["STR 50","DEX 50"],damage:"2D+1",cost:"15tl",desc:"A graceful longsword, embodying the elegance and precision of our ancient traditions."},mh={itemType:"Weapon",image_name:"halberd",name:"Kwandao",subType:"Melee",hands:2,range:0,attributes:["STR 55"],damage:"2D+3",cost:"12tl",desc:"A long-handled saber, revered by our noble defenders and champions of the realm."},xl={itemType:"Weapon",image_name:"crescent-staff",name:"Lajatang",subType:"Melee",hands:2,range:0,attributes:["STR 50","DEX 50"],damage:"2D",cost:"12tl",desc:"A polearm with multiple blades, wielded by our most skilled defenders against invaders."},bw={itemType:"Weapon",image_name:"bow-string",name:"Longbow*",subType:"Ranged",hands:2,range:100,attributes:["STR 60"],damage:"2D+3",cost:"35tl",desc:"- 20 ammo cost 1tl. \bA powerful bow, masterfully crafted by our finest bowyers for long-range warfare."},kw={itemType:"Weapon",image_name:"flail",name:"Maul, Great Flail, Warhammer",subType:"Melee",hands:2,range:0,attributes:["STR 50"],damage:"2D+3",cost:"10tl",desc:"Large and fearsome weapons, wielded by our mightiest warriors on the fields of battle."},Sw={itemType:"Weapon",image_name:"hammer-drop",name:"Meteor Hammer",subType:"Ranged",hands:2,range:3,attributes:["DEX 70"],damage:"2D+2",cost:"5tl",desc:"A weapon of legend, its chains and weights wielded with deadly skill by our most elite fighters."},$l={itemType:"Weapon",image_name:"dart",name:"Needle*",subType:"Ranged",hands:1,range:10,attributes:[],damage:"1",cost:"1tl",desc:"- 20 ammo cost 1tl. \bA slender weapon, favored by our assassins and spies for silent and swift strikes."},ql={itemType:"Weapon",image_name:"nunchaku",name:"Nunchaku",subType:"Melee",hands:1,range:0,attributes:["DEX 55"],damage:"1D+3",cost:"5tl",desc:"A martial arts weapon, passed down through generations of our disciplined monks."},Bl={itemType:"Weapon",image_name:"bow-arrow",name:"Shortbow*",subType:"Ranged",hands:2,range:60,attributes:["STR 50"],damage:"2D+1",cost:"12tl",desc:"- 20 ammo cost 1tl. \bA compact bow, beloved by our hunters and scouts for its portability and accuracy."},oa={itemType:"Weapon",image_name:"broadsword",name:"Shortsword",subType:"Melee",hands:1,range:0,attributes:[],damage:"1D+3",cost:"8tl",desc:"A short-bladed weapon, common among our foot soldiers and palace guards."},Fs={itemType:"Weapon",image_name:"trident",name:"Spear/Trident",subType:"Melee",hands:1,range:20,attributes:["STR 50"],damage:"2D",cost:"10tl",desc:"A polearm, our primary weapon of war, used by soldiers and generals alike."},Us={itemType:"Weapon",image_name:"wizard-staff",name:"Staff",subType:"Melee",hands:2,range:0,attributes:[],damage:"1D+3",cost:"4tl",desc:"A staff, the symbol of our martial arts mastery and the discipline of our warriors."},gh={itemType:"Weapon",image_name:"bo",name:"Three-section Staff",subType:"Melee",hands:2,range:0,attributes:["DEX 55"],damage:"1D+2",cost:"8tl",desc:"A martial arts weapon of incredible skill and dexterity, passed down by our master teachers."},Aw={itemType:"Weapon",image_name:"two-handed-sword",name:"Two-handed Sword",subType:"Melee",hands:2,range:0,attributes:["STR 65"],damage:"2D+4",cost:"40tl",desc:"A massive sword, wielded by our mightiest champions in the name of honor and duty."},Rw={itemType:"Weapon",image_name:"fist",name:"Unarmed (no kung fu)",subType:"Melee",hands:1,range:0,attributes:[],damage:"1/2D",cost:"--",desc:"Combat without weapons, the essence of our martial arts philosophy and discipline."},_h={itemType:"Weapon",image_name:"whip",name:"Whip",subType:"Melee",hands:1,range:3,attributes:["DEX 65"],damage:"1D+2",cost:"3tl",desc:"A flexible weapon, sometimes used by our horsemen and temple guardians in times of need."},yh=ww;yh.name+=" (pair)";const vh=zd;vh.name+=" (pair)";const Cw=bc;Cw.name+=" (pair)";const Pw=Kd;Pw.name+=" (pair)";const Dw=Qd;Dw.name+=" (pair)";const kc=[yw,sa,zd,ph,vw,Kd,ww,Tw,fi,Fl,an,Ew,Iw,UP,Qd,bc,xP,$P,qP,ra,Ul,Xn,mh,xl,bw,kw,Sw,$l,ql,Bl,oa,Fs,Us,gh,Aw,Rw,_h],aa={name:"Accupoint Strike",desc:"Attack paralyzes limb or renders mute/unmute."},Br={name:"Arrow Cutting",desc:"No Hard penalty for resisting ranged attacks."},Nw={name:"Battle Magic",desc:"Cast 1 spell, ignore multi- action penalty but advance it normally."},la={name:"Blind Fighting",desc:"No penalty fighting unarmed/melee in the dark, in fog, against unseen foes, etc."},xs={name:"Counter Attack",desc:"If resist (or are missed by) unarmed/melee attack, may attack attacker, multi-action applies."},Wr={name:"Danger Sense",desc:"No hard penalty resisting hidden attacks. Re-roll failed LOG checks for surprise & when attacked from stealth."},$s={name:"Deadly Attack",desc:"+2 to dmg to unarmed or with style’s weapon. Take multiple times for even more dmg!"},ca={name:"Defender",desc:"Make physical resistance checks for anyone adjacent, even if they fail their resistance roll."},qs={name:"Disarm",desc:"Attack knocks item foe holds 1⁄2D spaces random direction. Critical success, you get what they had. Two handed weapons & iron wrist rings hard to disarm."},ua={name:"Distant Strike",desc:"Melee attacks have a range of 10 spaces. Take multiple times to strike very far away!"},ha={name:"Explosive Attack",desc:"Attack does 1⁄2D dmg & knocks adjacent foes back 1 space per Warrior level. Resistance checks against this are hard. If rank of foe is half your Warrior level or less, they are knocked prone as well."},jr={name:"Feint",desc:"Declare one successful attack a feint. If foe fails resistance check you cause half normal dmg & if your next attack (this turn or next) against same foe hits, treat as critical success."},da={name:"Hidden Weapons",desc:"Attacks from your small hidden weapons are hard to defend against or find when you’re searched. Danger sense cancels resistance check penalty."},wh={name:"Hold",desc:"Inflicts unarmed attack dmg to held enemy each turn the hold is maintained. Foes may break free of hold by winning a contested Warrior skill check."},Wl={name:"Improved Landing",desc:"Warrior skill check, take no dmg from being thrown/ hurled or from falling 10 spaces per Warrior level."},fa={name:"Instant Stand",desc:"At any time get up from prone position, no check required & multi-action penalty unaffected."},jl={name:"Iron Skin",desc:"Warrior level 1: very light armor. Level 3: light. Level 5: medium. If wearing armor, treat DR one level higher than the best of iron skin or armor worn (max DR 1D+2)."},Th={name:"Keep at Bay",desc:"Using long weapon, may attack out of turn if foe moves into adjacent space. If cause dmg, move foe one space away."},Gl={name:"Meditation",desc:"Recover one bonus qi. Each hour of trance equals two hours sleep. Aware of surroundings."},Eh={name:"Mighty Blows",desc:"+1D to dmg caused with two-handed weapons. Or normal dmg to two adjacent foes with one attack (defended against separately)."},pa={name:"Move-By",desc:"If attack roll succeeds, MOV x2 & attack one target along path without stopping. If fail, MOV+2 & miss target. If move past multiple targets, may make attack against each with normal multi-action rules. Foes may not press the attack against someone using move-by."},Oi={name:"Multiple Attacks",desc:"One extra melee or ranged weapon attack per turn. Ignore multi-action penalty but advance it normally."},as={name:"Multiple Defenses",desc:"One extra physical resistance check per turn. Ignore multi- action penalty but advance it normally."},Gr={name:"One Against All",desc:"No hard penalty when fighting outnumbered."},Hr={name:"Power Attack",desc:"For each -10 to attack you accept, dmg +2."},zr={name:"Power Defense",desc:"No hard penalty when fighting armed foes when without a weapon."},ma={name:"Qi Resistance",desc:"+10 per Warrior level to resist spells."},Ih={name:"Reverse Hold",desc:"Successful attack roll while held reverse the hold."},ga={name:"Roll with the Impact",desc:"Gain DR equal to Warrior level x2 when you move 1⁄2D spaces away from enemy. Enemy chooses direction. DR stacks with any other DR."},Ow={name:"Suspension",desc:"Enter trance to appear dead for duration you choose. Successful Alchemist or Detective skill check detects suspension."},Hl={name:"Swiftness",desc:"Always add Warrior level to MOV score. Use Warrior score for DEX when sprinting if it is higher."},bh={name:"Take Down",desc:"One attack causes normal dmg & knocks foe prone."},kh={name:"Throw",desc:"One attack hurls foe 1D spaces any direction you choose, causes normal dmg & renders foe prone."},Kr={name:"Two-Weapon Fighting",desc:"+10 to melee score, +10 to physical resistance checks when fighting with two one-handed weapons."},Qr={name:"Unblockable Attack",desc:"One attack may be declared unblockable per foe per encounter. Critical success needed to resist."},Xr={name:"Vivacity",desc:"Use DEX (instead of STR) to calculate melee Warrior skill."},Yr={name:"Whirlwind Attack",desc:"Make one attack roll per turn to hit all adjacent foes. One dmg roll is used for all foes."},Sc=[aa,Br,Nw,la,xs,Wr,$s,ca,qs,ua,ha,jr,da,wh,Wl,fa,jl,Th,Gl,Eh,pa,Oi,as,Gr,Hr,zr,ma,Ih,ga,Ow,Hl,bh,kh,Kr,Qr,Xr,Yr],Sh=[{name:"Ascending Dragon Fist",desc:"Favored by tough pugilists, this style teaches few weapons. Rather it teaches how to take hard blows from blunt weapons, how to dodge sharp-edged weapons, and how to hit like a hammer.",type:"External",weapons:[ra],techniques:[$s,ha,jl,Oi,Hr,zr]},{name:"Bandit Beating Staff",desc:"This style is taught by the Beggar Sect. The staff is used to strike at the head and feet while elbows and knees are used to strike the body. Staggering and spinning out of reach helps in their defense. This style teaches many methods of getting out of danger.",type:"Internal",weapons:[vw,fi,Us,gh],techniques:[la,Wr,jr,Th,as,ga]},{name:"Bowing Dragon",desc:"This style is taught exclusively to Bowing Dragon Monks. They practice humility and study the harmonies of qi. Many of Bowing Dragon monks have levels in the Mystic skill. Their renowned Bowing Dragon style combines kicks, back fists, knee strikes, use of the staff, and a few exotic weapons.",type:"Internal",weapons:[Us,ra,Fs,gh,Sw],techniques:[Br,ma,xs,qs,Gl,zr]},{name:"Fiery Dragon",desc:"This energetic style uses close-in strikes, accupoint strikes, and short quick kicks. It is taught in all areas of Longzhi.",type:"External",weapons:[ph,yh,ra,xl,ql],techniques:[aa,Wr,pa,as,Gr,Kr]},{name:"Flying Daggers",desc:"This style is taught by the White Lotus Assassins. Standard blocks, punches, and kicks round out this style's exceptional melee and thrown knife techniques.",type:"Internal",weapons:[fi,Xn,Bl,an],techniques:[aa,la,Wr,$s,jr,da]},{name:"Flying Serpent",desc:"This kung fu style is marked by fluid snake-like movements to confuse and coil around a foe.",type:"Internal",weapons:[sa,fi,Fs,_h],techniques:[wh,pa,Ih,ga,kh,Xr]},{name:"Golden Fist",desc:"Golden Fist is taught to imperial troops. It is a solid fighting style, if a bit unimaginative. The style is now common as many retired soldiers have opened kung fu schools.",type:"External",weapons:[sa,Tw,yw,Fl,mh,Fs],techniques:[aa,ca,qs,Eh,bh,Yr]},{name:"Honorable Way of Thunder",desc:"This style uses the 'Big Sweeper' flail (greatflail). The striking end of the flail is quite heavy (often studded) and the handle is at least 2-4 times as long. The unarmed skills of this style emphasize powerful stomps and elbow strikes. It is taught throughout the empire. Practitioners tend to be large and strong.",type:"External",weapons:[Kd,Ew,Iw,Aw,kw],techniques:[ca,ha,Eh,Hr,Qr,Yr]},{name:"Judgment of the Dark Count",desc:"The Dark Judges are a very secret organization. Only whispers of them are ever heard. What is known is that they work for someone powerful and kill without mercy. They operate in the dead of night, wearing all black clothing and veiled hats to hide their features.",type:"Internal",weapons:[sa,fi,Xn,xl,_h],techniques:[la,xs,qs,jr,Ow,Hl]},{name:"Law of a Thousand Strikes",desc:"A style emphasizing strong short strikes with the staff and flying kicks and staff sweeps. Law of a Thousand Strikes is taught throughout the lands.",type:"External",weapons:[Us,an,ql,Ul],techniques:[xs,ua,ha,Oi,Gr,Yr]},{name:"Path of One Hundred Flying Eagles",desc:"This style combines maneuverability with rapid arrow shots that can knock other arrows out of the air.",type:"Internal",weapons:[Ul,Xn,bw,Bl],techniques:[Br,$s,Oi,Hr,Hl,Xr]},{name:"Peach Blossoms",desc:"Favored by dancers, minstrels, and temptresses, this style relies on subtle movements and hidden weapons. Long sleeves and loose-fitting clothing are used to hide weapons and misdirect opponents. The Jianmei or 'Sword Sister' sect teaches this style of kung fu to its members.",type:"Internal",weapons:[fi,an,Xn,$l,oa],techniques:[aa,Br,da,Wl,Oi,Xr]},{name:"Pouncing Panther",desc:"This style is less common than the others in this list. Its teachers are secretive. It emphasizes a sudden and lethal attack to end the fight quickly. It is said that some of these techniques were stolen from the White Lotus Assassins who do not share their secret techniques. All students of the Pouncing Panther style take the Deadly Attack technique at least twice. This is why this style only teaches five techniques.",type:"External",weapons:[vh,xl,Bl],techniques:[$s,Hr,Hl,Kr,Qr]},{name:"Red Crane Wodan",desc:"A branch of the Wodan Monks practices this unique kung fu style, mixing sword and sorcery to deadly effect. All Wodan monks are known to right wrongs in the world, but the Red Cranes are active hunters of evil. They tend to work alone but sometimes join like-minded groups.",type:"Internal",weapons:[fi,Xn,Us,an],techniques:[Nw,ma,Wr,ua,Gr,Yr]},{name:"Reveling Scholar",desc:"This style feigns the appearance of a swaying and staggering drunkard. The practitioner is not drunk but is using very deceptive techniques to draw his opponents in and lower their defenses.",type:"External",weapons:[sa,an,Xn,oa,Fs],techniques:[xs,qs,jr,fa,as,zr]},{name:"Shower of Flowers",desc:"This style combines agile kicks and knife-hand strikes with small hidden, thrown weapons.",type:"External",weapons:[fi,an,$l,an],techniques:[$s,da,Oi,Gr,Qr,Xr]},{name:"Soaring Dragon in the Sky",desc:"This common saber style is favored by mercenaries, bandits, and many escort services. It is easy to learn though not very elegant.",type:"External",weapons:[Us,Fl,Fs,Qd],techniques:[Wr,$s,fa,Th,as,Hr]},{name:"Spiraling Wind Storms",desc:"This style teaches one to use the energy of others and then add more external energy to devastate them.",type:"External",weapons:[zd,fi,ql],techniques:[wh,fa,Gl,zr,Ih,kh]},{name:"Ten Styles of Life Taking Swift Sword",desc:"The Lustrous Phoenix Society made this style famous. It is favored by those that use agility over strength; the melee weapons are often used in pairs.",type:"Internal",weapons:[an,Xn,oa,$l],techniques:[xs,qs,Oi,Kr,Qr,Xr]},{name:"Tiger Strike",desc:"This style is fast and furious. It has short quick kicks and lightning-fast punches with arm and foot blocks. Tiger Strike is synonymous with the Red Tiger Clan kung fu sect. Their students are taught to seek out fights (not necessarily lethal) to better their skill.",type:"External",weapons:[yh,Cw,mh,Fs],techniques:[la,ha,Wl,jl,Oi,Kr]},{name:"Tawn Blade",desc:"Named after one of the five great heroes, this style uses close-in sword blocks and resting the flat of the blade along the body or limbs to block attacks followed by swift thrusts, kicks, and sweeps. This style is very good at taking advantage of an opponent's mistakes. The Red Pelican Sect is known for using this kung fu style and their roots may originate with the famous hero Tsun.",type:"Internal",weapons:[ph,an,Xn,bc],techniques:[xs,Wl,fa,pa,Oi,as]},{name:"Unrelenting River",desc:"This style teaches its students to weather all attacks to survive and finish off the opponent.",type:"External",weapons:[vh,Pw,Dw,ra],techniques:[ma,jl,as,zr,ga,Kr]},{name:"Unyielding Wall",desc:"This style favors the use of a shield and dao. The shield is just large enough to cover the whole body when crouching. The wearer can roll with the shield between their body and the opponent to maximize defense while getting in close melee range. The shield is used to block attacks as well as hide attacks.",type:"Internal",weapons:[Fl,an,bc,Ul],techniques:[Br,ca,jr,pa,as,Qr]},{name:"Willow Blade Song",desc:"A style marked by darting movements and whipping of the sword blade, followed by close-in backhand punches and strikes with elbows and knees. With these fast movements come a weaving and circling motion much like that of the branches of a weeping willow tree.",type:"Internal",weapons:[an,Xn,oa],techniques:[Br,ua,da,Gl,ga,bh]},{name:"Wodon",desc:"The Wodan Monks meditate in hidden mountaintop monasteries in Mount Wodan. There they practice qi cultivation and their Wodan style of martial arts. Many Wodan monks have levels in sorcerer. This style is marked by rapid kicks and punches and single or twin swords.",type:"Internal",weapons:[fi,Xn,Us,an],techniques:[ma,ca,qs,ua,Gr,Yr]}],Ac=[{name:"Very Light Armour",desc:"Heavy Furs, Leather Cuirass",DR:"1-2",requirement:"45",cost:"50tl",itemType:"Armour"},{name:"Light Armour",desc:"Leather, Lamellar Cuirass",DR:"1/2D",requirement:"55",cost:"200tl",itemType:"Armour"},{name:"Medium Armour",desc:"Ceremonial, Full Lamellar",DR:"1D",requirement:"65",cost:"550tl",itemType:"Armour"},{name:"Heavy Armour",desc:"Mirror Armor, Mountain Pattern",DR:"1D+2",requirement:"75",cost:"1250tl",itemType:"Armour"},{name:"Very Heavy Armour",desc:"Dragonplate, Demonplate",DR:"1D+4",requirement:"95",cost:"5000tl",itemType:"Armour"},{name:"Shield**",desc:"Grants +20 to physical resistance checks, cannot be used with 2-handed weapons",DR:"--",requirement:"--",cost:"10tl",itemType:"Armour"}],Mw=[{name:"Alchemist, Magical advisor, etc.",cost:"20tl (per day)",itemType:"Companion"},{name:"Archer (Rank:1-3)*",desc:"Minor NPC with a score equal to 40+10xRank.",cost:"2tl X Rank (per day)",itemType:"Companion"},{name:"Artist (novice/pro/expert)",cost:"3/15/50tl (per day)",itemType:"Companion"},{name:"Craftsman (novice/pro/expert)",cost:"2/10/25tl (per day)",itemType:"Companion"},{name:"Sailor/Captain (Rank:1/5)*",desc:"Minor NPC with a score equal to 40+10xRank.",cost:"2tl/50tl (per day)",itemType:"Companion"},{name:"Servant (unskilled/skilled)",cost:"1tl/5tl (per day)",itemType:"Companion"},{name:"Footman (Rank:1-3)*",desc:"Minor NPC with a score equal to 40+10xRank.",cost:"1tl X Rank (per day)",itemType:"Companion"},{name:"Horseman (Rank:1-3)*",desc:"Minor NPC with a score equal to 40+10xRank.",cost:"4tl X Rank (per day)",itemType:"Companion"},{name:"Sellsword (Rank:3-5)*",desc:"Minor NPC with a score equal to 40+10xRank.",cost:"5tl X Rank (per day)",itemType:"Companion"}],Lw=[{name:"Bird, pigeon or song bird/hawk",cost:"1tl/30tl",itemType:"Companion"},{name:"Dog, domestic/guard",cost:"4tl/25tl",itemType:"Companion"},{name:"Monkey",cost:"15tl",itemType:"Companion"}],Vw=[{name:"Donkey",desc:"150 lbs.",cost:"8tl",itemType:"Mount"},{name:"Mule",desc:"650 lbs.",cost:"25tl",itemType:"Mount"},{name:"Riding Horse",desc:"450 lbs.",cost:"75tl",itemType:"Mount"},{name:"War Horse",desc:"600 lbs.",cost:"250tl",itemType:"Mount"}],Fw=[{name:"Cures for Minor Ailments (fever, headache, rash)",cost:"20tl",itemType:"Medicine"},{name:"Mild Poison Antidote (Mild poisons 60%)*",cost:"100tl",itemType:"Medicine"},{name:"Moderate Poison Antidote (Moderate poisons 60%)*",cost:"200tl",itemType:"Medicine"},{name:"Strong Poison Antidote (Strong poisons 60%)*",cost:"400tl",itemType:"Medicine"},{name:"Pill of the Ox (STR)*",cost:"100tl/+10 bonus",itemType:"Medicine"},{name:"Pill of Unmatched Grace (DEX) **",cost:"100tl/+10 bonus",itemType:"Medicine"},{name:"Pill of the Focused Scholar (LOG) **",cost:"100tl/+10 bonus",itemType:"Medicine"},{name:"Pill of Unwavering Determination (WIL) **",cost:"100tl/+10 bonus",itemType:"Medicine"},{name:"Heavenly Pill (1D Healing)***",cost:"100tl/1D Healing",itemType:"Medicine"}],Uw=[{name:"Alchemist Kit (50tl materials)",cost:"85tl",itemType:"General"},{name:"Backpack/Rucksack (empty)",cost:"2tl",itemType:"General"},{name:"Barrel, wooden",cost:"1tl",itemType:"General"},{name:"Book (50 pages, blank)",cost:"1tl",itemType:"General"},{name:"Blanket or bedroll",cost:"1tl",itemType:"General"},{name:"Block and tackle",cost:"5tl",itemType:"General"},{name:"Boat (river/sail)",cost:"1,000tl/4,000tl",itemType:"General"},{name:"Boots (simple/fine)",cost:"5tl/10tl+",itemType:"General"},{name:"Box, small/large",cost:"10tl/30tl",itemType:"General"},{name:"Bowl (small/large)",cost:"1tl/3tl",itemType:"General"},{name:"Building (small/large)",cost:"250tl/2,000tl",itemType:"General"},{name:"Candles (10)",cost:"1tl",itemType:"General"},{name:"Cart/Wagon",cost:"55tl/200tl",itemType:"General"},{name:"Case, map or scroll",cost:"1tl",itemType:"General"},{name:"Castle (small/large)",cost:"20,000tl/200,000th",itemType:"General"},{name:"Chest, small/large",cost:"2tl/4tl",itemType:"General"},{name:"Clothes (simple/fine)",cost:"1tl/25tl+",itemType:"General"},{name:"Crowbar",cost:"2tl",itemType:"General"},{name:"Diviner kit",cost:"50tl",itemType:"General"},{name:"Fan (simple/fine)",cost:"1tl/12tl",itemType:"General"},{name:"Firecrackers (long strip)***",cost:"2tl",itemType:"General"},{name:"Flask or Vial",cost:"1tl",itemType:"General"},{name:"Flint and steel",cost:"2tl",itemType:"General"},{name:"Grappling hook",cost:"1tl",itemType:"General"},{name:"Hammer",cost:"5tl",itemType:"General"},{name:"Incense (9 sticks)",cost:"1tl",itemType:"General"},{name:"Incense (ceremonial burner)",cost:"5tl",itemType:"General"},{name:"Ink stick",cost:"2tl",itemType:"General"},{name:"Iron manacles w/key",cost:"5tl",itemType:"General"},{name:"Iron pot",cost:"1tl",itemType:"General"},{name:"Junk (ship small/large)",cost:"12,000tl/32,000tl",itemType:"General"},{name:"Ladder, 10-foot",cost:"1tl",itemType:"General"},{name:"Lantern",cost:"9tl",itemType:"General"},{name:"Lock",cost:"20tl",itemType:"General"},{name:"Meal (simple/great feast)",cost:"1tl/5tl+",itemType:"General"}];[...kc,...Ac,...Mw,...Lw,...Vw,...Fw,...Uw];const vo=[...Mw,...Lw,...Vw,...Fw,...Uw],Ah=[{name:"Aid",range:"Touch",usage:"1/turn",duration:"Encounter",resist:"None",effect:"+10 per level to one ability of target. Level 3 Range: 10 spaces. Level 4: Effect 4 targets or all 4 abilities on one target."},{name:"Animate",range:"5 spaces per level",usage:"Varies",duration:"1 day per level",resist:"None",effect:"Animated creature of rank 5 own rank. Can create total number of creatures per day equal to sorcerer level. Become drained to make animation permanent."},{name:"Blessing/Curse",range:"5 spaces per level",usage:"1/day per level",duration:"Encounter",resist:"WIL",effect:"Priest choose which: blessed targets receive +10 ability of choice; cursed targets receive -10 penalty."},{name:"Charm",range:"5 spaces per level",usage:"1/turn",duration:"10 turns per level",resist:"WIL+10/rank",effect:"Target becomes friendly, flees, surrenders, etc. (lower rank vs caster’s sorcerer’s level) becomes friendly, flees, surrenders, etc. Level 6 permanent if target is drained."},{name:"Commune",range:"5 spaces per level",usage:"1/hour",duration:"Concentrate",resist:"None",effect:"Talk with target (dead, alive, inanimate). Level 4 talk with dead and insect life (yes/no answers). Level 6 cast permanent at expense of being drained. If target is a sorcerer: telepath even if levels range (trap sorcerer in iron cage to break this)."},{name:"Conjure",range:"1 space",usage:"2/day per level",duration:"10 turns per level",resist:"None",effect:"Conjures nonspecific (unless owned by caster) mundane items from unknowable place. Penalties for item’s value (+10 value, weight (-10 per 100 pounds), or scarcity). Outside of combat Duration: 20 hours. Level 6 item stays permanently at the cost of being drained."},{name:"Dispel",range:"Sight",usage:"Unlimited",duration:"Instant",resist:"Special",effect:"Cancel a spell effect. -10 times the skill level sorcerer who cast it. Encounter it and cancel a spell being cast if you have initiative and hold your action at cost of being drained. End a spell. A permanent effect can be dispelled at the cost of being drained."},{name:"Divination",range:"Special",usage:"1/hour",duration:"Concentrate",resist:"None",effect:"Send a sense (two at level 3, three at level 6) elsewhere at speed of 10 spaces per turn through all materials but lead."},{name:"Domination",range:"5 spaces per level",usage:"1/day per level",duration:"10 turns per level",resist:"WIL+10/rank",effect:"Seize control of victim, who perceives but cannot act. Experience one of victim’s memories per turn (no skill check), alter/delete one (skill check), or command victim to perform actions (may require skill check). Metal helmets give +10 to resist. Protection spell announces."},{name:"Entangle",range:"10 spaces per level",usage:"Unlimited",duration:"10 turns per level",resist:"DEX",effect:"Affects area (select 1 space per 2x level). Anyone in or entering area has half MOV if pass check. Outside of combat duration is 2D hours. Damage if cast in combat or becomes permanent at cost of being drained."},{name:"Hinder",range:"5 spaces per level",usage:"1/turn",duration:"Encounter",resist:"WIL",effect:"-10 per level to one ability of target. Level 3 affect 2 targets. Level 6 affect 10 targets or paralyze one until dispelled."},{name:"Illusion",range:"Sight",usage:"1/turn",duration:"10 turns per level",resist:"WIL",effect:"Fool one sense (two at level 3 and three at level 6). Viewers are affected as if illusion were real unless make resistance check. Outside of combat Duration: 2D hours. Level 6 become drained to make duration permanent."},{name:"Offensive Strike",range:"10 spaces per level",usage:"Unlimited",duration:"Instant",resist:"DEX",effect:"Cause 1D damage (2D at level 3, 3D at level 5) to all in area (target space, burst 3), or to single target (+10 damage). Only enchanted armor DR applies. Or charge weapon to cause the magical damage (plus weapon’s damage) on next successful hit."},{name:"Protection",range:"10 spaces per level",usage:"1/turn",duration:"Encounter",resist:"None",effect:"Target gets +1 die per caster level to resistance checks against spells or physical attacks (caster’s choice). Level 3 add DR5 to an armor (level 5 add DR10). Level 6 become drained to make one effect permanent."},{name:"Purify",range:"0",usage:"1/day per level",duration:"Special",resist:"WIL+10/rank",effect:"Reveal & force corporeal spirits/demons in area (burst 5x level), +optional damage 2D per level. Level 3 prevent spirits/demons entering area 1D turns (outside combat 1D hours) per level. Level 6, be drained to purify building/region ejecting evil magic & spirits with rank < caster."},{name:"Spirit Link",range:"2 spaces per level",usage:"1/day",duration:"1 week per level",resist:"WIL",effect:"Links spirit to another. If one is suffering, the other knows it and the spirit link will guide them to each other. Level 3 linked pair shares (5) resistance check if unwilling. Level 4 share BP (resistance check if unwilling). Level 6 link may be permanent at the cost of being drained."},{name:"Telekinesis",range:"2 spaces per level",usage:"Unlimited",duration:"Concentrate",resist:"STR",effect:"Invisible arm & hand (2 spaces per level). Skill check to defend against attacks in place of resistance checks. Arm STR determined by level. Can also erect invisible walls of resistance."},{name:"Transform",range:"5 spaces per level",usage:"2/day per level",duration:"Varies",resist:"STR",effect:"Target becomes another creature of reasonable size and rank 5 target’s rank. Level 3 duration is 1 day. Or, reshape 50 lbs material for 20 hours (20 days at level 3), change actual material level 5). Level 6 permanent at cost of being drained."},{name:"Transport",range:"5 spaces per level",usage:"1/turn",duration:"Varies",resist:"DEX",effect:"Levitate 1 space/turn. Level 3 levitate full MOV for 10 hours. Level 4 fly 2x MOV for 20 hours. Level 5 blink anywhere in sight. Level 6 teleport anywhere caster is familiar. Level 6 make a permanent gateway linking two locations at cost of being drained."}],BP={apiKey:"AIzaSyC8QtWdGc5j0Hzi6Ded4e_kLzJs3rb-tc0",authDomain:"art-of-wuxia-rpg.firebaseapp.com",projectId:"art-of-wuxia-rpg",storageBucket:"art-of-wuxia-rpg.appspot.com",messagingSenderId:"972531018213",appId:"1:972531018213:web:679bb27f12a36941a4a70c",measurementId:"G-XJCKDC69NF"};console.log("Starting firebase...");const Xd=Cg(BP);F1(Xd);const Rc=wS(Xd),Yd=N0(Xd),WP=zh(Yd);let ue=ya(),Au=null,Ru=null,ds=ya();WP.subscribe(async n=>{if(!n){ue.set(null);return}const e=eh(Rc,"users",n==null?void 0:n.uid),t=await LS(e);let i=new Su;t.exists()?(console.log("existing user found",t.data().email),i.redefine(t.data().character),ue.set(i),ds.set("Loaded existing character")):(ds.set("Creating new user"),await Ny(e,{email:n.email,character:new Su().webExport}),ue.set(i),ds.set("User created")),Ru=eh(Rc,"users",n.uid),Au&&Au(),Au=VS(Ru,s=>{if(ds.set("Received downstream"),s.exists()){let r=new Su;r.redefine(s.data().character),r.skipNextWebWrite=!0,ue.set(r),console.log("updated cloudCharacter",s.data().character)}}),console.log({cloudCharacterRef:Ru})});const jP=GP(async n=>{console.group("writeDataToFirebase"),ds.set("Sending...");let{currentUser:{uid:e,email:t}}=Yd;if(!e)return;let i="users/"+e+"/character";console.log("writing",i,n);const s=eh(Rc,"users",e);await Ny(s,{email:t,character:n}),ds.set(null),console.groupEnd()},500);function GP(n,e){let t;return function(...i){ds.set("Sending..."),clearTimeout(t),t=setTimeout(()=>{n.apply(this,i)},e)}}ue.subscribe(n=>{if(console.log(n),n!=null&&n.skipNextWebWrite){n.skipNextWebWrite=!1;return}(n==null?void 0:n.webExport)&&jP(n.webExport)});function HP(n){let e,t,i,s,r,o=(n[0]||"Saved")+"",l;return{c(){e=S("small"),t=S("div"),s=O(),r=S("div"),l=G(o),B(t,"class",i=Zd(n[0]?"spinner":"")+" svelte-ofqr8v")},m(c,u){$(c,e,u),_(e,t),_(e,s),_(e,r),_(r,l)},p(c,u){u&1&&i!==(i=Zd(c[0]?"spinner":"")+" svelte-ofqr8v")&&B(t,"class",i),u&1&&o!==(o=(c[0]||"Saved")+"")&&Z(l,o)},d(c){c&&x(e)}}}function zP(n){let e,t;return e=new Vy({props:{$$slots:{default:[HP]},$$scope:{ctx:n}}}),{c(){we(e.$$.fragment)},m(i,s){ge(e,i,s),t=!0},p(i,[s]){const r={};s&3&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){K(e.$$.fragment,i),t=!1},d(i){_e(e,i)}}}function KP(n,e,t){let i;return ja(n,ds,s=>t(0,i=s)),[i]}class QP extends mn{constructor(e){super(),pn(this,e,KP,zP,Yt,{})}}function XP(n){let e,t,i=n[5].displayName+"",s,r,o;return{c(){e=S("button"),t=G("👤 "),s=G(i)},m(l,c){$(l,e,c),_(e,t),_(e,s),r||(o=he(e,"click",function(){Ch(n[6])&&n[6].apply(this,arguments)}),r=!0)},p(l,c){n=l,c&32&&i!==(i=n[5].displayName+"")&&Z(s,i)},d(l){l&&x(e),r=!1,o()}}}function YP(n){let e,t,i,s,r;function o(){return n[2](n[4])}return{c(){e=S("button"),e.textContent="Sign In",t=O(),i=S("h3"),i.textContent="Sign in to continue"},m(l,c){$(l,e,c),$(l,t,c),$(l,i,c),s||(r=he(e,"click",o),s=!0)},p(l,c){n=l},d(l){l&&(x(e),x(t),x(i)),s=!1,r()}}}function JP(n){let e,t,i,s,r;e=new Vy({props:{$$slots:{default:[XP,({user:c,signOut:u})=>({5:c,6:u}),({user:c,signOut:u})=>(c?32:0)|(u?64:0)]},$$scope:{ctx:n}}}),i=new KS({props:{$$slots:{default:[YP,({auth:c})=>({4:c}),({auth:c})=>c?16:0]},$$scope:{ctx:n}}});const o=n[1].default,l=or(o,n,n[3],null);return{c(){we(e.$$.fragment),t=O(),we(i.$$.fragment),s=O(),l&&l.c()},m(c,u){ge(e,c,u),$(c,t,u),ge(i,c,u),$(c,s,u),l&&l.m(c,u),r=!0},p(c,u){const d={};u&104&&(d.$$scope={dirty:u,ctx:c}),e.$set(d);const f={};u&24&&(f.$$scope={dirty:u,ctx:c}),i.$set(f),l&&l.p&&(!r||u&8)&&lr(l,o,c,c[3],r?ar(o,c[3],u,null):cr(c[3]),null)},i(c){r||(j(e.$$.fragment,c),j(i.$$.fragment,c),j(l,c),r=!0)},o(c){K(e.$$.fragment,c),K(i.$$.fragment,c),K(l,c),r=!1},d(c){c&&(x(t),x(s)),_e(e,c),_e(i,c),l&&l.d(c)}}}function ZP(n){let e,t;return e=new qS({props:{auth:Yd,firestore:Rc,$$slots:{default:[JP]},$$scope:{ctx:n}}}),{c(){we(e.$$.fragment)},m(i,s){ge(e,i,s),t=!0},p(i,[s]){const r={};s&8&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){K(e.$$.fragment,i),t=!1},d(i){_e(e,i)}}}function eD(n,e,t){let{$$slots:i={},$$scope:s}=e;async function r(l){const c=new Mi;c.addScope("profile"),c.addScope("email"),await qI(l,c)}const o=l=>r(l);return n.$$set=l=>{"$$scope"in l&&t(3,s=l.$$scope)},[r,i,o,s]}class tD extends mn{constructor(e){super(),pn(this,e,eD,ZP,Yt,{})}}function nD(n){let e,t,i,s,r,o,l,c;const u=n[3].default,d=or(u,n,n[2],null);return{c(){e=S("a"),e.textContent="?",t=O(),i=S("dialog"),d&&d.c(),s=O(),r=S("form"),r.innerHTML='<button class="close svelte-19ea5mv">X</button>',B(r,"method","dialog"),i.open=n[0],B(i,"class","svelte-19ea5mv")},m(f,g){$(f,e,g),$(f,t,g),$(f,i,g),d&&d.m(i,null),_(i,s),_(i,r),o=!0,l||(c=he(e,"click",n[1]),l=!0)},p(f,[g]){d&&d.p&&(!o||g&4)&&lr(d,u,f,f[2],o?ar(u,f[2],g,null):cr(f[2]),null),(!o||g&1)&&(i.open=f[0])},i(f){o||(j(d,f),o=!0)},o(f){K(d,f),o=!1},d(f){f&&(x(e),x(t),x(i)),d&&d.d(f),l=!1,c()}}}function iD(n,e,t){let{$$slots:i={},$$scope:s}=e,{open:r=!1}=e;function o(){t(0,r=!r)}return n.$$set=l=>{"open"in l&&t(0,r=l.open),"$$scope"in l&&t(2,s=l.$$scope)},[r,o,s,i]}class Rh extends mn{constructor(e){super(),pn(this,e,iD,nD,Yt,{open:0})}}function hm(n,e,t){const i=n.slice();return i[12]=e[t],i[14]=t,i}function sD(n){let e;return{c(){e=G("You may attempt this skill, even if you do not have a level in it.")},m(t,i){$(t,e,i)},d(t){t&&x(e)}}}function rD(n){let e;return{c(){e=G("You must have at least one level to attempt this skills.")},m(t,i){$(t,e,i)},d(t){t&&x(e)}}}function oD(n){let e,t=n[0].name+"",i,s,r,o=n[0].linkedSkill.desc+"",l,c,u,d,f,g,T=n[0].linkedSkill.titles.join(", ")+"",R;function M(U,F){return U[0].linkedSkill.requiredForAttempt?rD:sD}let D=M(n),L=D(n);return{c(){e=S("h3"),i=G(t),s=O(),r=S("p"),l=G(o),c=O(),L.c(),u=O(),d=S("h4"),d.textContent="Ranks",f=O(),g=S("p"),R=G(T)},m(U,F){$(U,e,F),_(e,i),$(U,s,F),$(U,r,F),_(r,l),$(U,c,F),L.m(U,F),$(U,u,F),$(U,d,F),$(U,f,F),$(U,g,F),_(g,R)},p(U,F){F&1&&t!==(t=U[0].name+"")&&Z(i,t),F&1&&o!==(o=U[0].linkedSkill.desc+"")&&Z(l,o),D!==(D=M(U))&&(L.d(1),L=D(U),L&&(L.c(),L.m(u.parentNode,u))),F&1&&T!==(T=U[0].linkedSkill.titles.join(", ")+"")&&Z(R,T)},d(U){U&&(x(e),x(s),x(r),x(c),x(u),x(d),x(f),x(g)),L.d(U)}}}function dm(n){let e,t,i;return{c(){e=S("button"),e.textContent="🔼"},m(s,r){$(s,e,r),t||(i=he(e,"click",n[5]),t=!0)},p:De,d(s){s&&x(e),t=!1,i()}}}function fm(n){let e,t,i;return{c(){e=S("button"),e.textContent="🔽"},m(s,r){$(s,e,r),t||(i=he(e,"click",n[6]),t=!0)},p:De,d(s){s&&x(e),t=!1,i()}}}function aD(n){let e;return{c(){e=G("S (+10)")},m(t,i){$(t,e,i)},p:De,d(t){t&&x(e)}}}function lD(n){let e;return{c(){e=G("P (+20)")},m(t,i){$(t,e,i)},p:De,d(t){t&&x(e)}}}function cD(n){let e,t,i,s,r,o,l;return{c(){e=S("select"),t=S("option"),t.textContent="Primary (+20)",i=S("option"),i.textContent="Secondary (+10)",s=S("option"),s.textContent="None",t.__value=2,de(t,t.__value),i.__value=1,de(i,i.__value),s.__value=0,de(s,s.__value),B(e,"class","thin"),e.disabled=r=n[0].level<=0,n[0].relation===void 0&&Mn(()=>n[9].call(e))},m(c,u){$(c,e,u),_(e,t),_(e,i),_(e,s),vs(e,n[0].relation,!0),o||(l=[he(e,"change",n[9]),he(e,"change",n[10])],o=!0)},p(c,u){u&1&&r!==(r=c[0].level<=0)&&(e.disabled=r),u&1&&vs(e,c[0].relation)},d(c){c&&x(e),o=!1,Fn(l)}}}function pm(n){let e,t,i=n[12].name+"",s,r,o,l=n[12].desc+"",c,u;return{c(){e=S("div"),t=S("h4"),s=G(i),r=O(),o=S("p"),c=G(l),u=O()},m(d,f){$(d,e,f),_(e,t),_(t,s),_(e,r),_(e,o),_(o,c),_(e,u)},p(d,f){f&1&&i!==(i=d[12].name+"")&&Z(s,i),f&1&&l!==(l=d[12].desc+"")&&Z(c,l)},d(d){d&&x(e)}}}function uD(n){let e,t=n[0].name+"",i,s,r,o,l=Ce(n[0].linkedSkill.abilities),c=[];for(let u=0;u<l.length;u+=1)c[u]=pm(hm(n,l,u));return{c(){e=S("h3"),i=G(t),s=G(" Abilities"),r=O();for(let u=0;u<c.length;u+=1)c[u].c();o=Un()},m(u,d){$(u,e,d),_(e,i),_(e,s),$(u,r,d);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(u,d);$(u,o,d)},p(u,d){if(d&1&&t!==(t=u[0].name+"")&&Z(i,t),d&1){l=Ce(u[0].linkedSkill.abilities);let f;for(f=0;f<l.length;f+=1){const g=hm(u,l,f);c[f]?c[f].p(g,d):(c[f]=pm(g),c[f].c(),c[f].m(o.parentNode,o))}for(;f<c.length;f+=1)c[f].d(1);c.length=l.length}},d(u){u&&(x(e),x(r),x(o)),bt(c,u)}}}function hD(n){let e,t,i=n[0].name+"",s,r,o,l,c,u=n[0].baseAbility+"",d,f,g=n[3][n[0].baseAbility]+"",T,R,M,D,L,U,F,z,ee,X,k,v=n[0].linkedSkill.abilities.map(mm).join(", ")+"",E,I,w,b,y,Ie=n[3][n[0].name+"Score"]+"",Le,ce,Ue,yt;o=new Rh({props:{$$slots:{default:[oD]},$$scope:{ctx:n}}});let xe=!n[2]&&dm(n),ke=!n[2]&&fm(n);function gn(oe,Se){if(!oe[2])return cD;if(oe[0].relation==2)return lD;if(oe[0].relation==1)return aD}let $e=gn(n),re=$e&&$e(n);return w=new Rh({props:{$$slots:{default:[uD]},$$scope:{ctx:n}}}),{c(){e=S("tr"),t=S("td"),s=G(i),r=O(),we(o.$$.fragment),l=O(),c=S("td"),d=G(u),f=G("/2 ("),T=G(g),R=G(")"),M=O(),D=S("td"),xe&&xe.c(),L=O(),U=S("input"),F=O(),ke&&ke.c(),z=O(),ee=S("td"),re&&re.c(),X=O(),k=S("td"),E=G(v),I=O(),we(w.$$.fragment),b=O(),y=S("td"),Le=G(Ie),B(t,"class","svelte-hfm9pg"),B(c,"class","svelte-hfm9pg"),B(U,"type","number"),B(U,"min","0"),B(U,"max","6"),U.disabled=n[2],B(D,"class","svelte-hfm9pg"),B(ee,"class","svelte-hfm9pg"),B(k,"class","left svelte-hfm9pg"),B(y,"class","score svelte-hfm9pg")},m(oe,Se){$(oe,e,Se),_(e,t),_(t,s),_(t,r),ge(o,t,null),_(e,l),_(e,c),_(c,d),_(c,f),_(c,T),_(c,R),_(e,M),_(e,D),xe&&xe.m(D,null),_(D,L),_(D,U),de(U,n[0].level),_(D,F),ke&&ke.m(D,null),_(e,z),_(e,ee),re&&re.m(ee,null),_(e,X),_(e,k),_(k,E),_(k,I),ge(w,k,null),_(e,b),_(e,y),_(y,Le),ce=!0,Ue||(yt=[he(U,"input",n[7]),he(U,"change",n[8])],Ue=!0)},p(oe,[Se]){(!ce||Se&1)&&i!==(i=oe[0].name+"")&&Z(s,i);const ut={};Se&32769&&(ut.$$scope={dirty:Se,ctx:oe}),o.$set(ut),(!ce||Se&1)&&u!==(u=oe[0].baseAbility+"")&&Z(d,u),(!ce||Se&9)&&g!==(g=oe[3][oe[0].baseAbility]+"")&&Z(T,g),oe[2]?xe&&(xe.d(1),xe=null):xe?xe.p(oe,Se):(xe=dm(oe),xe.c(),xe.m(D,L)),(!ce||Se&4)&&(U.disabled=oe[2]),Se&1&&gt(U.value)!==oe[0].level&&de(U,oe[0].level),oe[2]?ke&&(ke.d(1),ke=null):ke?ke.p(oe,Se):(ke=fm(oe),ke.c(),ke.m(D,null)),$e===($e=gn(oe))&&re?re.p(oe,Se):(re&&re.d(1),re=$e&&$e(oe),re&&(re.c(),re.m(ee,null))),(!ce||Se&1)&&v!==(v=oe[0].linkedSkill.abilities.map(mm).join(", ")+"")&&Z(E,v);const zt={};Se&32769&&(zt.$$scope={dirty:Se,ctx:oe}),w.$set(zt),(!ce||Se&9)&&Ie!==(Ie=oe[3][oe[0].name+"Score"]+"")&&Z(Le,Ie)},i(oe){ce||(j(o.$$.fragment,oe),j(w.$$.fragment,oe),ce=!0)},o(oe){K(o.$$.fragment,oe),K(w.$$.fragment,oe),ce=!1},d(oe){oe&&x(e),_e(o),xe&&xe.d(),ke&&ke.d(),re&&re.d(),_e(w),Ue=!1,Fn(yt)}}}const mm=n=>n.name;function dD(n,e,t){let i,s=De,r=()=>(s(),s=Cc(c,L=>t(3,i=L)),c);n.$$.on_destroy.push(()=>s());const o=hg();let{skill:l}=e,{character:c}=e;r();let{lockSheet:u}=e;const d=(L,U)=>o("update",{skill:l,value:{...l,[L]:U}}),f=()=>{l.level>=6||d("level",t(0,l.level+=1,l))},g=()=>{l.level<=0||d("level",t(0,l.level-=1,l))};function T(){l.level=gt(this.value),t(0,l)}const R=L=>{var U;return d("level",Number(((U=L==null?void 0:L.target)==null?void 0:U.value)||0))};function M(){l.relation=Kl(this),t(0,l)}const D=L=>{var U;return d("relation",Number(((U=L==null?void 0:L.target)==null?void 0:U.value)||0))};return n.$$set=L=>{"skill"in L&&t(0,l=L.skill),"character"in L&&r(t(1,c=L.character)),"lockSheet"in L&&t(2,u=L.lockSheet)},[l,c,u,i,d,f,g,T,R,M,D]}class Di extends mn{constructor(e){super(),pn(this,e,dD,hD,Yt,{skill:0,character:1,lockSheet:2})}}function gm(n){let e;return{c(){e=G(n[1])},m(t,i){$(t,e,i)},p(t,i){i&2&&Z(e,t[1])},d(t){t&&x(e)}}}function _m(n){let e;return{c(){e=G(n[4])},m(t,i){$(t,e,i)},p(t,i){i&16&&Z(e,t[4])},d(t){t&&x(e)}}}function ym(n){let e;return{c(){e=G(n[3])},m(t,i){$(t,e,i)},p(t,i){i&8&&Z(e,t[3])},d(t){t&&x(e)}}}function vm(n){let e,t;return{c(){e=S("p"),t=G(n[9])},m(i,s){$(i,e,s),_(e,t)},p(i,s){s&512&&Z(t,i[9])},d(i){i&&x(e)}}}function fD(n){let e,t,i,s,r,o,l,c,u,d=n[1]&&gm(n),f=n[2]=="Weapon"&&_m(n),g=n[2]=="Armour"&&ym(n),T=n[9]&&vm(n);return{c(){e=S("div"),t=S("h4"),i=G(n[0]),s=O(),d&&d.c(),r=O(),f&&f.c(),o=O(),g&&g.c(),l=O(),c=S("div"),u=O(),T&&T.c(),B(e,"class","card svelte-1b0js32")},m(R,M){$(R,e,M),_(e,t),_(t,i),_(e,s),d&&d.m(e,null),_(e,r),f&&f.m(e,null),_(e,o),g&&g.m(e,null),_(e,l),_(e,c),_(c,u),T&&T.m(c,null)},p(R,[M]){M&1&&Z(i,R[0]),R[1]?d?d.p(R,M):(d=gm(R),d.c(),d.m(e,r)):d&&(d.d(1),d=null),R[2]=="Weapon"?f?f.p(R,M):(f=_m(R),f.c(),f.m(e,o)):f&&(f.d(1),f=null),R[2]=="Armour"?g?g.p(R,M):(g=ym(R),g.c(),g.m(e,l)):g&&(g.d(1),g=null),R[9]?T?T.p(R,M):(T=vm(R),T.c(),T.m(c,null)):T&&(T.d(1),T=null)},i:De,o:De,d(R){R&&x(e),d&&d.d(),f&&f.d(),g&&g.d(),T&&T.d()}}}function pD(n,e,t){let{name:i}=e,{desc:s}=e,{itemType:r}=e,{DR:o}=e,{hands:l}=e,{range:c}=e,{usage:u}=e,{duration:d}=e,{resist:f}=e,{effect:g}=e;return n.$$set=T=>{"name"in T&&t(0,i=T.name),"desc"in T&&t(1,s=T.desc),"itemType"in T&&t(2,r=T.itemType),"DR"in T&&t(3,o=T.DR),"hands"in T&&t(4,l=T.hands),"range"in T&&t(5,c=T.range),"usage"in T&&t(6,u=T.usage),"duration"in T&&t(7,d=T.duration),"resist"in T&&t(8,f=T.resist),"effect"in T&&t(9,g=T.effect)},[i,s,r,o,l,c,u,d,f,g]}class ol extends mn{constructor(e){super(),pn(this,e,pD,fD,Yt,{name:0,desc:1,itemType:2,DR:3,hands:4,range:5,usage:6,duration:7,resist:8,effect:9})}}function wm(n,e,t){const i=n.slice();return i[14]=e[t],i[16]=t,i}function mD(n,e,t){const i=n.slice();return i[17]=e[t],i[16]=t,i}function gD(n){let e,t,i,s,r=Ce(Sh),o=[];for(let l=0;l<r.length;l+=1)o[l]=yD(mD(n,r,l));return{c(){e=S("select"),t=S("option"),t.textContent="Untrained";for(let l=0;l<o.length;l+=1)o[l].c();t.__value="",de(t,t.__value),e.disabled=n[2],n[0].style===void 0&&Mn(()=>n[7].call(e))},m(l,c){$(l,e,c),_(e,t);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(e,null);vs(e,n[0].style,!0),i||(s=[he(e,"change",n[7]),he(e,"change",n[8])],i=!0)},p(l,c){c&4&&(e.disabled=l[2]),c&1&&vs(e,l[0].style)},d(l){l&&x(e),bt(o,l),i=!1,Fn(s)}}}function _D(n){let e=(n[0].style||"Untrained")+"",t;return{c(){t=G(e)},m(i,s){$(i,t,s)},p(i,s){s&1&&e!==(e=(i[0].style||"Untrained")+"")&&Z(t,e)},d(i){i&&x(t)}}}function yD(n){let e;return{c(){e=S("option"),e.textContent=`${n[17].name}`,e.__value=n[17].name,de(e,e.__value)},m(t,i){$(t,e,i)},p:De,d(t){t&&x(e)}}}function vD(n){let e;return{c(){e=G("You may attempt this skill, even if you do not have a level in it.")},m(t,i){$(t,e,i)},d(t){t&&x(e)}}}function wD(n){let e;return{c(){e=G("You must have at least one level to attempt this skills.")},m(t,i){$(t,e,i)},d(t){t&&x(e)}}}function Tm(n){let e,t,i=n[14].name+"",s,r,o,l=n[14].desc+"",c,u;return{c(){e=S("div"),t=S("h4"),s=G(i),r=O(),o=S("p"),c=G(l),u=O()},m(d,f){$(d,e,f),_(e,t),_(t,s),_(e,r),_(e,o),_(o,c),_(e,u)},p(d,f){f&1&&i!==(i=d[14].name+"")&&Z(s,i),f&1&&l!==(l=d[14].desc+"")&&Z(c,l)},d(d){d&&x(e)}}}function TD(n){let e,t=n[0].name+"",i,s,r,o=n[0].linkedSkill.desc+"",l,c,u,d,f,g,T=n[0].linkedSkill.titles.join(", ")+"",R,M,D,L=n[0].name+"",U,F,z,ee;function X(w,b){return w[0].linkedSkill.requiredForAttempt?wD:vD}let k=X(n),v=k(n),E=Ce(n[0].linkedSkill.abilities),I=[];for(let w=0;w<E.length;w+=1)I[w]=Tm(wm(n,E,w));return{c(){e=S("h3"),i=G(t),s=O(),r=S("p"),l=G(o),c=O(),v.c(),u=O(),d=S("h4"),d.textContent="Ranks",f=O(),g=S("p"),R=G(T),M=O(),D=S("h3"),U=G(L),F=G(" Abilities"),z=O();for(let w=0;w<I.length;w+=1)I[w].c();ee=Un()},m(w,b){$(w,e,b),_(e,i),$(w,s,b),$(w,r,b),_(r,l),$(w,c,b),v.m(w,b),$(w,u,b),$(w,d,b),$(w,f,b),$(w,g,b),_(g,R),$(w,M,b),$(w,D,b),_(D,U),_(D,F),$(w,z,b);for(let y=0;y<I.length;y+=1)I[y]&&I[y].m(w,b);$(w,ee,b)},p(w,b){if(b&1&&t!==(t=w[0].name+"")&&Z(i,t),b&1&&o!==(o=w[0].linkedSkill.desc+"")&&Z(l,o),k!==(k=X(w))&&(v.d(1),v=k(w),v&&(v.c(),v.m(u.parentNode,u))),b&1&&T!==(T=w[0].linkedSkill.titles.join(", ")+"")&&Z(R,T),b&1&&L!==(L=w[0].name+"")&&Z(U,L),b&1){E=Ce(w[0].linkedSkill.abilities);let y;for(y=0;y<E.length;y+=1){const Ie=wm(w,E,y);I[y]?I[y].p(Ie,b):(I[y]=Tm(Ie),I[y].c(),I[y].m(ee.parentNode,ee))}for(;y<I.length;y+=1)I[y].d(1);I.length=E.length}},d(w){w&&(x(e),x(s),x(r),x(c),x(u),x(d),x(f),x(g),x(M),x(D),x(z),x(ee)),v.d(w),bt(I,w)}}}function Em(n){let e,t,i;return{c(){e=S("button"),e.textContent="🔼"},m(s,r){$(s,e,r),t||(i=he(e,"click",n[5]),t=!0)},p:De,d(s){s&&x(e),t=!1,i()}}}function Im(n){let e,t,i;return{c(){e=S("button"),e.textContent="🔽"},m(s,r){$(s,e,r),t||(i=he(e,"click",n[6]),t=!0)},p:De,d(s){s&&x(e),t=!1,i()}}}function ED(n){let e;return{c(){e=G("S (+10)")},m(t,i){$(t,e,i)},p:De,d(t){t&&x(e)}}}function ID(n){let e;return{c(){e=G("P (+20)")},m(t,i){$(t,e,i)},p:De,d(t){t&&x(e)}}}function bD(n){let e,t,i,s,r,o,l;return{c(){e=S("select"),t=S("option"),t.textContent="Primary (+20)",i=S("option"),i.textContent="Seconary (+10)",s=S("option"),s.textContent="None",t.__value=2,de(t,t.__value),i.__value=1,de(i,i.__value),s.__value=0,de(s,s.__value),B(e,"class","thin"),e.disabled=r=n[0].level<=0,n[0].relation===void 0&&Mn(()=>n[11].call(e))},m(c,u){$(c,e,u),_(e,t),_(e,i),_(e,s),vs(e,n[0].relation,!0),o||(l=[he(e,"change",n[11]),he(e,"change",n[12])],o=!0)},p(c,u){u&1&&r!==(r=c[0].level<=0)&&(e.disabled=r),u&1&&vs(e,c[0].relation)},d(c){c&&x(e),o=!1,Fn(l)}}}function kD(n){let e,t,i,s,r,o,l,c,u,d,f,g,T=n[3].STR+"",R,M,D,L,U,F,z,ee,X,k,v,E=n[3][n[0].name+"MeleeScore"]+"",I,w,b,y,Ie,Le=n[3].DEX+"",ce,Ue,yt,xe,ke=n[3][n[0].name+"RangedScore"]+"",gn,$e,re,oe,Se,ut,zt,bi;function Hi(ie,Xe){return ie[2]?_D:gD}let _n=Hi(n),ht=_n(n);u=new Rh({props:{$$slots:{default:[TD]},$$scope:{ctx:n}}});let qe=!n[2]&&Em(n),Je=!n[2]&&Im(n);function yn(ie,Xe){if(!ie[2])return bD;if(ie[0].relation==2)return ID;if(ie[0].relation==1)return ED}let Jt=yn(n),Ze=Jt&&Jt(n);return{c(){e=S("div"),t=S("table"),i=S("thead"),i.innerHTML='<tr><th class="svelte-1fl61js">Name</th> <th class="svelte-1fl61js">Ability</th> <th class="svelte-1fl61js">Level</th> <th class="svelte-1fl61js">Relation</th> <th class="score svelte-1fl61js">%</th></tr>',s=O(),r=S("tbody"),o=S("tr"),l=S("td"),ht.c(),c=O(),we(u.$$.fragment),d=O(),f=S("td"),g=G("Melee (STR "),R=G(T),M=G(")"),D=O(),L=S("td"),qe&&qe.c(),U=O(),F=S("input"),z=O(),Je&&Je.c(),ee=O(),X=S("td"),Ze&&Ze.c(),k=O(),v=S("td"),I=G(E),w=O(),b=S("tr"),y=S("td"),Ie=G("Ranged (DEX "),ce=G(Le),Ue=G(")"),yt=O(),xe=S("td"),gn=G(ke),$e=O(),re=S("tr"),re.innerHTML="",oe=O(),Se=S("tr"),B(l,"rowspan","2"),B(l,"class","svelte-1fl61js"),B(f,"class","svelte-1fl61js"),B(F,"type","number"),B(F,"min","0"),B(F,"max","6"),F.disabled=n[2],B(L,"rowspan","2"),B(L,"class","svelte-1fl61js"),B(X,"rowspan","2"),B(X,"class","svelte-1fl61js"),B(v,"class","score svelte-1fl61js"),B(y,"class","svelte-1fl61js"),B(xe,"class","score svelte-1fl61js"),B(t,"class","format svelte-1fl61js"),B(e,"class","container svelte-1fl61js")},m(ie,Xe){$(ie,e,Xe),_(e,t),_(t,i),_(t,s),_(t,r),_(r,o),_(o,l),ht.m(l,null),_(l,c),ge(u,l,null),_(o,d),_(o,f),_(f,g),_(f,R),_(f,M),_(o,D),_(o,L),qe&&qe.m(L,null),_(L,U),_(L,F),de(F,n[0].level),_(L,z),Je&&Je.m(L,null),_(o,ee),_(o,X),Ze&&Ze.m(X,null),_(o,k),_(o,v),_(v,I),_(r,w),_(r,b),_(b,y),_(y,Ie),_(y,ce),_(y,Ue),_(b,yt),_(b,xe),_(xe,gn),_(r,$e),_(r,re),_(r,oe),_(r,Se),ut=!0,zt||(bi=[he(F,"input",n[9]),he(F,"change",n[10])],zt=!0)},p(ie,[Xe]){_n===(_n=Hi(ie))&&ht?ht.p(ie,Xe):(ht.d(1),ht=_n(ie),ht&&(ht.c(),ht.m(l,c)));const zi={};Xe&524289&&(zi.$$scope={dirty:Xe,ctx:ie}),u.$set(zi),(!ut||Xe&8)&&T!==(T=ie[3].STR+"")&&Z(R,T),ie[2]?qe&&(qe.d(1),qe=null):qe?qe.p(ie,Xe):(qe=Em(ie),qe.c(),qe.m(L,U)),(!ut||Xe&4)&&(F.disabled=ie[2]),Xe&1&&gt(F.value)!==ie[0].level&&de(F,ie[0].level),ie[2]?Je&&(Je.d(1),Je=null):Je?Je.p(ie,Xe):(Je=Im(ie),Je.c(),Je.m(L,null)),Jt===(Jt=yn(ie))&&Ze?Ze.p(ie,Xe):(Ze&&Ze.d(1),Ze=Jt&&Jt(ie),Ze&&(Ze.c(),Ze.m(X,null))),(!ut||Xe&9)&&E!==(E=ie[3][ie[0].name+"MeleeScore"]+"")&&Z(I,E),(!ut||Xe&8)&&Le!==(Le=ie[3].DEX+"")&&Z(ce,Le),(!ut||Xe&9)&&ke!==(ke=ie[3][ie[0].name+"RangedScore"]+"")&&Z(gn,ke)},i(ie){ut||(j(u.$$.fragment,ie),ut=!0)},o(ie){K(u.$$.fragment,ie),ut=!1},d(ie){ie&&x(e),ht.d(),_e(u),qe&&qe.d(),Je&&Je.d(),Ze&&Ze.d(),zt=!1,Fn(bi)}}}function SD(n,e,t){let i,s=De,r=()=>(s(),s=Cc(c,F=>t(3,i=F)),c);n.$$.on_destroy.push(()=>s());const o=hg();let{skill:l}=e,{character:c}=e;r();let{lockSheet:u}=e;const d=(F,z)=>o("update",{skill:l,value:{...l,[F]:z}}),f=()=>{l.level>=6||d("level",t(0,l.level+=1,l))},g=()=>{l.level<=0||d("level",t(0,l.level-=1,l))};function T(){l.style=Kl(this),t(0,l)}const R=F=>{var z;return d("style",((z=F==null?void 0:F.target)==null?void 0:z.value)||"")};function M(){l.level=gt(this.value),t(0,l)}const D=F=>{var z;return d("level",Number(((z=F==null?void 0:F.target)==null?void 0:z.value)||0))};function L(){l.relation=Kl(this),t(0,l)}const U=F=>{var z;return d("relation",Number(((z=F==null?void 0:F.target)==null?void 0:z.value)||0))};return n.$$set=F=>{"skill"in F&&t(0,l=F.skill),"character"in F&&r(t(1,c=F.character)),"lockSheet"in F&&t(2,u=F.lockSheet)},[l,c,u,i,d,f,g,T,R,M,D,L,U]}class bm extends mn{constructor(e){super(),pn(this,e,SD,kD,Yt,{skill:0,character:1,lockSheet:2})}}function km(n,e,t){const i=n.slice();return i[6]=e[t],i[8]=t,i}function Sm(n){let e,t,i=n[6].name+"",s,r,o=n[6].trained?"(T)":"",l,c,u,d=n[6].hands+"",f,g,T,R=(n[6].range||0)+"",M,D,L,U=n[6].attributes+"",F,z,ee=n[6].meetRequirements?"":"❌",X,k,v,E=(n[6].meetRequirements?n[6].damage+n[3](n[6].bonus):"0")+"",I,w,b,y=(n[6].meetRequirements?n[4](n[6]):0)+"",Ie,Le;return{c(){e=S("tr"),t=S("td"),s=G(i),r=O(),l=G(o),c=O(),u=S("td"),f=G(d),g=O(),T=S("td"),M=G(R),D=O(),L=S("td"),F=G(U),z=O(),X=G(ee),k=O(),v=S("td"),I=G(E),w=O(),b=S("td"),Ie=G(y),Le=O()},m(ce,Ue){$(ce,e,Ue),_(e,t),_(t,s),_(t,r),_(t,l),_(e,c),_(e,u),_(u,f),_(e,g),_(e,T),_(T,M),_(e,D),_(e,L),_(L,F),_(L,z),_(L,X),_(e,k),_(e,v),_(v,I),_(e,w),_(e,b),_(b,Ie),_(e,Le)},p(ce,Ue){Ue&4&&i!==(i=ce[6].name+"")&&Z(s,i),Ue&4&&o!==(o=ce[6].trained?"(T)":"")&&Z(l,o),Ue&4&&d!==(d=ce[6].hands+"")&&Z(f,d),Ue&4&&R!==(R=(ce[6].range||0)+"")&&Z(M,R),Ue&4&&U!==(U=ce[6].attributes+"")&&Z(F,U),Ue&4&&ee!==(ee=ce[6].meetRequirements?"":"❌")&&Z(X,ee),Ue&4&&E!==(E=(ce[6].meetRequirements?ce[6].damage+ce[3](ce[6].bonus):"0")+"")&&Z(I,E),Ue&4&&y!==(y=(ce[6].meetRequirements?ce[4](ce[6]):0)+"")&&Z(Ie,y)},d(ce){ce&&x(e)}}}function AD(n){let e,t,i,s,r,o,l,c,u,d,f,g,T,R,M,D=n[1].kungFuDamage+"",L,U=n[3](n[1].MeleeUnarmedModifier)+"",F,z,ee,X=n[4]({subType:"Melee",c:n[1]})+"",k,v,E=Ce(n[2]),I=[];for(let w=0;w<E.length;w+=1)I[w]=Sm(km(n,E,w));return{c(){e=S("div"),t=S("table"),i=S("thead"),i.innerHTML="<tr><th>Name</th> <th>Hands</th> <th>Range</th> <th>Requires</th> <th>Dam</th> <th>Roll</th></tr>",s=O(),r=S("tbody"),o=S("tr"),l=S("td"),l.textContent="Unarmed",c=O(),u=S("td"),u.textContent="1",d=O(),f=S("td"),f.textContent="0",g=O(),T=S("td"),T.textContent="Hand",R=O(),M=S("td"),L=G(D),F=G(U),z=O(),ee=S("td"),k=G(X),v=O();for(let w=0;w<I.length;w+=1)I[w].c();B(t,"class","svelte-1ab86j0")},m(w,b){$(w,e,b),_(e,t),_(t,i),_(t,s),_(t,r),_(r,o),_(o,l),_(o,c),_(o,u),_(o,d),_(o,f),_(o,g),_(o,T),_(o,R),_(o,M),_(M,L),_(M,F),_(o,z),_(o,ee),_(ee,k),_(r,v);for(let y=0;y<I.length;y+=1)I[y]&&I[y].m(r,null)},p(w,[b]){if(b&2&&D!==(D=w[1].kungFuDamage+"")&&Z(L,D),b&2&&U!==(U=w[3](w[1].MeleeUnarmedModifier)+"")&&Z(F,U),b&2&&X!==(X=w[4]({subType:"Melee",c:w[1]})+"")&&Z(k,X),b&28){E=Ce(w[2]);let y;for(y=0;y<E.length;y+=1){const Ie=km(w,E,y);I[y]?I[y].p(Ie,b):(I[y]=Sm(Ie),I[y].c(),I[y].m(r,null))}for(;y<I.length;y+=1)I[y].d(1);I.length=E.length}},i:De,o:De,d(w){w&&x(e),bt(I,w)}}}function RD(n,e,t){let i,s=De,r=()=>(s(),s=Cc(o,d=>t(1,i=d)),o);n.$$.on_destroy.push(()=>s());let{character:o}=e;r();let l=d=>d==0?"":"+"+d,c=({subType:d})=>{let f=0;return d=="Ranged"?f=Math.max(i.Warrior1RangedScore,i.Warrior2RangedScore):f=Math.max(i.Warrior1MeleeScore,i.Warrior2MeleeScore),f},u=[];return n.$$set=d=>{"character"in d&&r(t(0,o=d.character))},n.$$.update=()=>{n.$$.dirty&3&&t(2,u=kc.filter(d=>i.weapons.includes(d.name)).map(d=>({...d,meetRequirements:i.canUseWeapon(d),trained:i.trainedWithWeapon(d),bonus:d.subType=="Melee"?i.MeleeDamageModifier:i.RangedDamageModifier})))},[o,i,u,l,c]}class CD extends mn{constructor(e){super(),pn(this,e,RD,AD,Yt,{character:0})}}function PD(n){let e,t,i,s,r,o,l,c;const u=n[7].default,d=or(u,n,n[6],null);return{c(){e=S("div"),t=S("button"),t.textContent="🔼",i=O(),d&&d.c(),s=O(),r=S("button"),r.textContent="🔽",B(t,"class","svelte-189i2m5"),B(r,"class","svelte-189i2m5"),B(e,"class","svelte-189i2m5")},m(f,g){$(f,e,g),_(e,t),_(e,i),d&&d.m(e,null),_(e,s),_(e,r),o=!0,l||(c=[he(t,"click",n[3]),he(r,"click",n[4])],l=!0)},p(f,g){d&&d.p&&(!o||g&64)&&lr(d,u,f,f[6],o?ar(u,f[6],g,null):cr(f[6]),null)},i(f){o||(j(d,f),o=!0)},o(f){K(d,f),o=!1},d(f){f&&x(e),d&&d.d(f),l=!1,Fn(c)}}}function DD(n){let e;const t=n[7].default,i=or(t,n,n[6],null);return{c(){i&&i.c()},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&64)&&lr(i,t,s,s[6],e?ar(t,s[6],r,null):cr(s[6]),null)},i(s){e||(j(i,s),e=!0)},o(s){K(i,s),e=!1},d(s){i&&i.d(s)}}}function ND(n){let e;return{c(){e=G("ERROR")},m(t,i){$(t,e,i)},p:De,i:De,o:De,d(t){t&&x(e)}}}function OD(n){let e,t,i,s;const r=[ND,DD,PD],o=[];function l(c,u){return c[2][c[0]]==null&&typeof!c[2][c[0]]!="number"?0:c[1]?1:2}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),i=Un()},m(c,u){o[e].m(c,u),$(c,i,u),s=!0},p(c,[u]){let d=e;e=l(c),e===d?o[e].p(c,u):(ln(),K(o[d],1,1,()=>{o[d]=null}),cn(),t=o[e],t?t.p(c,u):(t=o[e]=r[e](c),t.c()),j(t,1),t.m(i.parentNode,i))},i(c){s||(j(t),s=!0)},o(c){K(t),s=!1},d(c){c&&x(i),o[e].d(c)}}}function MD(n,e,t){let i;ja(n,ue,f=>t(2,i=f));let{$$slots:s={},$$scope:r}=e,{v:o}=e,{lockSheet:l}=e,{max:c=-1}=e;const u=()=>{console.log(c,i[o]),!(c>0&&i[o]>=c)&&zl(ue,i[o]+=1,i)},d=()=>{i[o]<=0||zl(ue,i[o]-=1,i)};return n.$$set=f=>{"v"in f&&t(0,o=f.v),"lockSheet"in f&&t(1,l=f.lockSheet),"max"in f&&t(5,c=f.max),"$$scope"in f&&t(6,r=f.$$scope)},[o,l,i,u,d,c,r,s]}class Ms extends mn{constructor(e){super(),pn(this,e,MD,OD,Yt,{v:0,lockSheet:1,max:5})}}function Am(n,e,t){const i=n.slice();return i[25]=e[t],i[27]=t,i}function Rm(n,e,t){const i=n.slice();return i[28]=e[t],i[30]=t,i}function Cm(n,e,t){const i=n.slice();return i[31]=e[t],i[27]=t,i}function LD(n,e,t){const i=n.slice();return i[28]=e[t],i[30]=t,i}function Pm(n,e,t){const i=n.slice();return i[31]=e[t],i[27]=t,i}function Dm(n,e,t){const i=n.slice();return i[35]=e[t],i[27]=t,i}function Nm(n,e,t){const i=n.slice();return i[28]=e[t],i[30]=t,i}function Om(n,e,t){const i=n.slice();return i[38]=e[t],i[30]=t,i}function VD(n,e,t){const i=n.slice();return i[38]=e[t],i[30]=t,i}function Mm(n,e,t){const i=n.slice();return i[41]=e[t],i[30]=t,i}function Lm(n,e,t){const i=n.slice();return i[41]=e[t],i[30]=t,i}function Vm(n,e,t){const i=n.slice();return i[44]=e[t],i[45]=e,i[46]=t,i}function FD(n,e,t){const i=n.slice();return i[47]=e[t],i[30]=t,i}function Fm(n){let e,t,i,s,r=n[0]?"🔒":"🔓",o,l,c,u,d,f,g,T,R,M,D,L,U,F,z,ee,X,k,v,E,I,w,b,y,Ie,Le,ce,Ue,yt,xe,ke,gn,$e,re,oe,Se=n[1].BP+"",ut,zt,bi=n[1].BaseBP+"",Hi,_n,ht,qe,Je,yn,Jt,Ze,ie,Xe,zi,Zt,Ki,al,ks,ki,gr,ot,Ke,Ss,Si,Qi,Do,Xi,vn,Yi,_r,As,No,yr,wn,Ji,Zi,Kt,Rs,en,vr,Cs,ii,es,wr,et,Tr,ts,tn,ll,Oo,Tn,Mo,cl,En,Lo,Ps,si,In,Vo,ri,Er,oi,Ai,$n,ul,nn,Fo,ns,bn,qn,Ir,tt,Bn,Uo,Wn,br,kn,xo,jn,hl,ai,$o,Gn,dl,Ct,Sn,sn,Ds,Hn,Ne,Gt,Pt,Ri,qo,is,fl,An,Bo,Wo,zn,Kn,rn,kr,Sr,Rn,pl,Cn,jo,Pn,Ns,ml,Ht,ss,Go,Ci,Dn,Dt,Os,We;t=new QP({}),I=new Ms({props:{lockSheet:n[0],v:"CP",$$slots:{default:[UD]},$$scope:{ctx:n}}});let Ho=Ce(["Totally","Very","Somewhat"]),on=[];for(let A=0;A<3;A+=1)on[A]=Um(Vm(n,Ho,A));qe=new Ms({props:{lockSheet:!1,v:"BP",max:n[1].BaseBP,$$slots:{default:[$D]},$$scope:{ctx:n}}}),Ke=new Ms({props:{lockSheet:!1,v:"Qi",$$slots:{default:[qD]},$$scope:{ctx:n}}}),ii=new Ms({props:{lockSheet:n[0],v:"STR",$$slots:{default:[BD]},$$scope:{ctx:n}}}),tn=new Ms({props:{lockSheet:n[0],v:"DEX",$$slots:{default:[WD]},$$scope:{ctx:n}}}),En=new Ms({props:{lockSheet:n[0],v:"LOG",$$slots:{default:[jD]},$$scope:{ctx:n}}}),ri=new Ms({props:{lockSheet:n[0],v:"WIL",$$slots:{default:[GD]},$$scope:{ctx:n}}}),$n=new bm({props:{lockSheet:n[0],character:ue,skill:n[1].Warrior1}}),$n.$on("update",n[2]),nn=new bm({props:{lockSheet:n[0],character:ue,skill:n[1].Warrior2}}),nn.$on("update",n[2]),Bn=new Di({props:{lockSheet:n[0],character:ue,skill:n[1].Alchemy}}),Bn.$on("update",n[2]),Wn=new Di({props:{lockSheet:n[0],character:ue,skill:n[1].Detective}}),Wn.$on("update",n[2]),kn=new Di({props:{lockSheet:n[0],character:ue,skill:n[1].Diviner}}),kn.$on("update",n[2]),jn=new Di({props:{lockSheet:n[0],character:ue,skill:n[1].Leader}}),jn.$on("update",n[2]),ai=new Di({props:{lockSheet:n[0],character:ue,skill:n[1].Mystic}}),ai.$on("update",n[2]),Gn=new Di({props:{lockSheet:n[0],character:ue,skill:n[1].Scholar}}),Gn.$on("update",n[2]),Ct=new Di({props:{lockSheet:n[0],character:ue,skill:n[1].Scout}}),Ct.$on("update",n[2]),sn=new Di({props:{lockSheet:n[0],character:ue,skill:n[1].Sorcerer}}),sn.$on("update",n[2]),Hn=new Di({props:{lockSheet:n[0],character:ue,skill:n[1].Thief}}),Hn.$on("update",n[2]);let Nt=(n[1].learnedTechniques.length>0||!n[0])&&xm(),vt=!n[0]&&$m(n),li=Ce(Sc),Ve=[];for(let A=0;A<li.length;A+=1)Ve[A]=jm(Mm(n,li,A));const gl=A=>K(Ve[A],1,1,()=>{Ve[A]=null});let Qe=(n[1].spells.length>0||!n[0])&&Gm(),wt=!n[0]&&Hm(n),Pi=Ce(Ah),Oe=[];for(let A=0;A<Pi.length;A+=1)Oe[A]=Km(Om(n,Pi,A));const _l=A=>K(Oe[A],1,1,()=>{Oe[A]=null});let Tt=(n[1].equipment.length>0||!n[0])&&Qm(),at=!n[0]&&Xm(n),ci=Ce(vo),Fe=[];for(let A=0;A<ci.length;A+=1)Fe[A]=eg(Pm(n,ci,A));const tu=A=>K(Fe[A],1,1,()=>{Fe[A]=null});let Ot=(n[1].armour.length>0||!n[0])&&tg(),nt=!n[0]&&ng(n),ui=Ce(Ac),je=[];for(let A=0;A<ui.length;A+=1)je[A]=sg(Cm(n,ui,A));const zo=A=>K(je[A],1,1,()=>{je[A]=null});let dt=!n[0]&&rg(n);return Dn=new CD({props:{character:ue}}),{c(){e=S("div"),we(t.$$.fragment),i=O(),s=S("button"),o=G(r),l=O(),c=S("div"),u=S("div"),d=S("div"),f=S("label"),g=S("span"),g.textContent="Name",T=O(),R=S("input"),M=O(),D=S("div"),L=S("label"),U=S("span"),U.textContent="Description",F=O(),z=S("textarea"),ee=O(),X=S("div"),k=S("label"),v=S("span"),v.textContent="CP",E=O(),we(I.$$.fragment),w=O(),b=S("label"),y=S("span"),y.textContent="Rank",Ie=O(),Le=S("input"),Ue=O(),yt=S("div");for(let A=0;A<3;A+=1)on[A].c();xe=O(),ke=S("div"),gn=S("div"),$e=S("label"),re=S("span"),oe=G("BP ("),ut=G(Se),zt=G("/"),Hi=G(bi),_n=G(")"),ht=O(),we(qe.$$.fragment),Je=O(),yn=S("a"),yn.textContent="↩️",Jt=O(),Ze=S("div"),ie=S("label"),Xe=S("span"),Xe.textContent="DR",zi=O(),Zt=S("input"),al=O(),ks=S("div"),ki=S("label"),gr=S("span"),gr.textContent="Qi",ot=O(),we(Ke.$$.fragment),Ss=O(),Si=S("div"),Qi=S("label"),Do=S("span"),Do.textContent="INIT",Xi=O(),vn=S("input"),_r=O(),As=S("label"),No=S("span"),No.textContent="MOV",yr=O(),wn=S("input"),Zi=O(),Kt=S("div"),Rs=S("div"),en=S("label"),vr=S("span"),vr.textContent="STR",Cs=O(),we(ii.$$.fragment),es=O(),wr=S("div"),et=S("label"),Tr=S("span"),Tr.textContent="DEX",ts=O(),we(tn.$$.fragment),ll=O(),Oo=S("div"),Tn=S("label"),Mo=S("span"),Mo.textContent="LOG",cl=O(),we(En.$$.fragment),Lo=O(),Ps=S("div"),si=S("label"),In=S("span"),In.textContent="WIL",Vo=O(),we(ri.$$.fragment),Er=O(),oi=S("div"),Ai=S("section"),we($n.$$.fragment),ul=O(),we(nn.$$.fragment),Fo=O(),ns=S("section"),bn=S("table"),qn=S("thead"),qn.innerHTML='<tr class="svelte-1be26r3"><th>Name</th> <th>Base Ability</th> <th>Level</th> <th>P/S</th> <th>Notes</th> <th>%</th></tr>',Ir=O(),tt=S("tbody"),we(Bn.$$.fragment),Uo=O(),we(Wn.$$.fragment),br=O(),we(kn.$$.fragment),xo=O(),we(jn.$$.fragment),hl=O(),we(ai.$$.fragment),$o=O(),we(Gn.$$.fragment),dl=O(),we(Ct.$$.fragment),Sn=O(),we(sn.$$.fragment),Ds=O(),we(Hn.$$.fragment),Ne=O(),Gt=S("section"),Pt=S("div"),Nt&&Nt.c(),Ri=O(),vt&&vt.c(),qo=O(),is=S("div");for(let A=0;A<Ve.length;A+=1)Ve[A].c();fl=O(),An=S("div"),Qe&&Qe.c(),Bo=O(),wt&&wt.c(),Wo=O(),zn=S("div");for(let A=0;A<Oe.length;A+=1)Oe[A].c();Kn=O(),rn=S("div"),Tt&&Tt.c(),kr=O(),at&&at.c(),Sr=O(),Rn=S("div");for(let A=0;A<Fe.length;A+=1)Fe[A].c();pl=O(),Cn=S("div"),Ot&&Ot.c(),jo=O(),nt&&nt.c(),Pn=O(),Ns=S("div");for(let A=0;A<je.length;A+=1)je[A].c();ml=O(),Ht=S("div"),ss=S("h3"),ss.textContent="weapons",Go=O(),dt&&dt.c(),Ci=O(),we(Dn.$$.fragment),B(s,"class","svelte-1be26r3"),B(e,"class","fixed svelte-1be26r3"),R.disabled=n[0],B(R,"type","text"),z.disabled=n[0],B(u,"class","name-desc"),B(Le,"type","number"),B(Le,"min","0"),B(Le,"max","10"),Le.disabled=!0,Le.value=ce=n[1].Rank,B(X,"class","cp-rank"),B(yt,"class","morals"),B(yn,"class","flip"),Zt.disabled=!0,B(Zt,"type","number"),B(Zt,"min","0"),B(Zt,"max","10"),Zt.value=Ki=n[1].DR,B(ke,"class","dr-bq-qi v-align svelte-1be26r3"),vn.disabled=!0,B(vn,"type","number"),B(vn,"min","0"),B(vn,"max","10"),vn.value=Yi=n[1].INIT,wn.disabled=!0,B(wn,"type","number"),B(wn,"min","0"),B(wn,"max","10"),wn.value=Ji=n[1].MOV,B(Si,"class","init-mov"),B(Kt,"class","base-stats"),B(Ai,"class","warrior skills"),B(bn,"class","theme svelte-1be26r3"),B(ns,"class","specialist skills"),B(oi,"class","skill-scores"),B(is,"class","card-deck svelte-1be26r3"),B(Pt,"class","techniques"),B(zn,"class","card-deck svelte-1be26r3"),B(An,"class","spells"),B(Rn,"class","card-deck svelte-1be26r3"),B(rn,"class","gear"),B(Ns,"class","card-deck svelte-1be26r3"),B(Cn,"class","armour"),B(Gt,"class","abilities"),B(Ht,"class","weapons"),B(c,"class","character-form")},m(A,V){$(A,e,V),ge(t,e,null),_(e,i),_(e,s),_(s,o),$(A,l,V),$(A,c,V),_(c,u),_(u,d),_(d,f),_(f,g),_(f,T),_(f,R),de(R,n[1].Name),_(u,M),_(u,D),_(D,L),_(L,U),_(L,F),_(L,z),de(z,n[1].Description),_(c,ee),_(c,X),_(X,k),_(k,v),_(k,E),ge(I,k,null),_(X,w),_(X,b),_(b,y),_(b,Ie),_(b,Le),_(c,Ue),_(c,yt);for(let Ae=0;Ae<3;Ae+=1)on[Ae]&&on[Ae].m(yt,null);_(c,xe),_(c,ke),_(ke,gn),_(gn,$e),_($e,re),_(re,oe),_(re,ut),_(re,zt),_(re,Hi),_(re,_n),_($e,ht),ge(qe,$e,null),_($e,Je),_($e,yn),_(ke,Jt),_(ke,Ze),_(Ze,ie),_(ie,Xe),_(ie,zi),_(ie,Zt),_(ke,al),_(ke,ks),_(ks,ki),_(ki,gr),_(ki,ot),ge(Ke,ki,null),_(c,Ss),_(c,Si),_(Si,Qi),_(Qi,Do),_(Qi,Xi),_(Qi,vn),_(Si,_r),_(Si,As),_(As,No),_(As,yr),_(As,wn),_(c,Zi),_(c,Kt),_(Kt,Rs),_(Rs,en),_(en,vr),_(en,Cs),ge(ii,en,null),_(Kt,es),_(Kt,wr),_(wr,et),_(et,Tr),_(et,ts),ge(tn,et,null),_(Kt,ll),_(Kt,Oo),_(Oo,Tn),_(Tn,Mo),_(Tn,cl),ge(En,Tn,null),_(Kt,Lo),_(Kt,Ps),_(Ps,si),_(si,In),_(si,Vo),ge(ri,si,null),_(c,Er),_(c,oi),_(oi,Ai),ge($n,Ai,null),_(Ai,ul),ge(nn,Ai,null),_(oi,Fo),_(oi,ns),_(ns,bn),_(bn,qn),_(bn,Ir),_(bn,tt),ge(Bn,tt,null),_(tt,Uo),ge(Wn,tt,null),_(tt,br),ge(kn,tt,null),_(tt,xo),ge(jn,tt,null),_(tt,hl),ge(ai,tt,null),_(tt,$o),ge(Gn,tt,null),_(tt,dl),ge(Ct,tt,null),_(tt,Sn),ge(sn,tt,null),_(tt,Ds),ge(Hn,tt,null),_(c,Ne),_(c,Gt),_(Gt,Pt),Nt&&Nt.m(Pt,null),_(Pt,Ri),vt&&vt.m(Pt,null),_(Pt,qo),_(Pt,is);for(let Ae=0;Ae<Ve.length;Ae+=1)Ve[Ae]&&Ve[Ae].m(is,null);_(Gt,fl),_(Gt,An),Qe&&Qe.m(An,null),_(An,Bo),wt&&wt.m(An,null),_(An,Wo),_(An,zn);for(let Ae=0;Ae<Oe.length;Ae+=1)Oe[Ae]&&Oe[Ae].m(zn,null);_(Gt,Kn),_(Gt,rn),Tt&&Tt.m(rn,null),_(rn,kr),at&&at.m(rn,null),_(rn,Sr),_(rn,Rn);for(let Ae=0;Ae<Fe.length;Ae+=1)Fe[Ae]&&Fe[Ae].m(Rn,null);_(Gt,pl),_(Gt,Cn),Ot&&Ot.m(Cn,null),_(Cn,jo),nt&&nt.m(Cn,null),_(Cn,Pn),_(Cn,Ns);for(let Ae=0;Ae<je.length;Ae+=1)je[Ae]&&je[Ae].m(Ns,null);_(c,ml),_(c,Ht),_(Ht,ss),_(Ht,Go),dt&&dt.m(Ht,null),_(Ht,Ci),ge(Dn,Ht,null),Dt=!0,Os||(We=[he(s,"click",n[3]),he(R,"input",n[5]),he(z,"input",n[6]),he(yn,"click",n[10])],Os=!0)},p(A,V){(!Dt||V[0]&1)&&r!==(r=A[0]?"🔒":"🔓")&&Z(o,r),(!Dt||V[0]&1)&&(R.disabled=A[0]),V[0]&2&&R.value!==A[1].Name&&de(R,A[1].Name),(!Dt||V[0]&1)&&(z.disabled=A[0]),V[0]&2&&de(z,A[1].Description);const Ae={};if(V[0]&1&&(Ae.lockSheet=A[0]),V[0]&2|V[1]&262144&&(Ae.$$scope={dirty:V,ctx:A}),I.$set(Ae),(!Dt||V[0]&2&&ce!==(ce=A[1].Rank)&&Le.value!==ce)&&(Le.value=ce),V[0]&3){Ho=Ce(["Totally","Very","Somewhat"]);let P;for(P=0;P<3;P+=1){const le=Vm(A,Ho,P);on[P]?on[P].p(le,V):(on[P]=Um(le),on[P].c(),on[P].m(yt,null))}for(;P<3;P+=1)on[P].d(1)}(!Dt||V[0]&2)&&Se!==(Se=A[1].BP+"")&&Z(ut,Se),(!Dt||V[0]&2)&&bi!==(bi=A[1].BaseBP+"")&&Z(Hi,bi);const Ar={};V[0]&2&&(Ar.max=A[1].BaseBP),V[0]&3|V[1]&262144&&(Ar.$$scope={dirty:V,ctx:A}),qe.$set(Ar),(!Dt||V[0]&2&&Ki!==(Ki=A[1].DR)&&Zt.value!==Ki)&&(Zt.value=Ki);const hi={};V[0]&3|V[1]&262144&&(hi.$$scope={dirty:V,ctx:A}),Ke.$set(hi),(!Dt||V[0]&2&&Yi!==(Yi=A[1].INIT)&&vn.value!==Yi)&&(vn.value=Yi),(!Dt||V[0]&2&&Ji!==(Ji=A[1].MOV)&&wn.value!==Ji)&&(wn.value=Ji);const Rr={};V[0]&1&&(Rr.lockSheet=A[0]),V[0]&3|V[1]&262144&&(Rr.$$scope={dirty:V,ctx:A}),ii.$set(Rr);const Cr={};V[0]&1&&(Cr.lockSheet=A[0]),V[0]&3|V[1]&262144&&(Cr.$$scope={dirty:V,ctx:A}),tn.$set(Cr);const Pr={};V[0]&1&&(Pr.lockSheet=A[0]),V[0]&3|V[1]&262144&&(Pr.$$scope={dirty:V,ctx:A}),En.$set(Pr);const Dr={};V[0]&1&&(Dr.lockSheet=A[0]),V[0]&3|V[1]&262144&&(Dr.$$scope={dirty:V,ctx:A}),ri.$set(Dr);const rs={};V[0]&1&&(rs.lockSheet=A[0]),V[0]&2&&(rs.skill=A[1].Warrior1),$n.$set(rs);const Et={};V[0]&1&&(Et.lockSheet=A[0]),V[0]&2&&(Et.skill=A[1].Warrior2),nn.$set(Et);const Nr={};V[0]&1&&(Nr.lockSheet=A[0]),V[0]&2&&(Nr.skill=A[1].Alchemy),Bn.$set(Nr);const Or={};V[0]&1&&(Or.lockSheet=A[0]),V[0]&2&&(Or.skill=A[1].Detective),Wn.$set(Or);const di={};V[0]&1&&(di.lockSheet=A[0]),V[0]&2&&(di.skill=A[1].Diviner),kn.$set(di);const a={};V[0]&1&&(a.lockSheet=A[0]),V[0]&2&&(a.skill=A[1].Leader),jn.$set(a);const h={};V[0]&1&&(h.lockSheet=A[0]),V[0]&2&&(h.skill=A[1].Mystic),ai.$set(h);const p={};V[0]&1&&(p.lockSheet=A[0]),V[0]&2&&(p.skill=A[1].Scholar),Gn.$set(p);const m={};V[0]&1&&(m.lockSheet=A[0]),V[0]&2&&(m.skill=A[1].Scout),Ct.$set(m);const C={};V[0]&1&&(C.lockSheet=A[0]),V[0]&2&&(C.skill=A[1].Sorcerer),sn.$set(C);const N={};if(V[0]&1&&(N.lockSheet=A[0]),V[0]&2&&(N.skill=A[1].Thief),Hn.$set(N),A[1].learnedTechniques.length>0||!A[0]?Nt||(Nt=xm(),Nt.c(),Nt.m(Pt,Ri)):Nt&&(Nt.d(1),Nt=null),A[0]?vt&&(vt.d(1),vt=null):vt?vt.p(A,V):(vt=$m(A),vt.c(),vt.m(Pt,qo)),V[0]&2){li=Ce(Sc);let P;for(P=0;P<li.length;P+=1){const le=Mm(A,li,P);Ve[P]?(Ve[P].p(le,V),j(Ve[P],1)):(Ve[P]=jm(le),Ve[P].c(),j(Ve[P],1),Ve[P].m(is,null))}for(ln(),P=li.length;P<Ve.length;P+=1)gl(P);cn()}if(A[1].spells.length>0||!A[0]?Qe||(Qe=Gm(),Qe.c(),Qe.m(An,Bo)):Qe&&(Qe.d(1),Qe=null),A[0]?wt&&(wt.d(1),wt=null):wt?wt.p(A,V):(wt=Hm(A),wt.c(),wt.m(An,Wo)),V[0]&2){Pi=Ce(Ah);let P;for(P=0;P<Pi.length;P+=1){const le=Om(A,Pi,P);Oe[P]?(Oe[P].p(le,V),j(Oe[P],1)):(Oe[P]=Km(le),Oe[P].c(),j(Oe[P],1),Oe[P].m(zn,null))}for(ln(),P=Pi.length;P<Oe.length;P+=1)_l(P);cn()}if(A[1].equipment.length>0||!A[0]?Tt||(Tt=Qm(),Tt.c(),Tt.m(rn,kr)):Tt&&(Tt.d(1),Tt=null),A[0]?at&&(at.d(1),at=null):at?at.p(A,V):(at=Xm(A),at.c(),at.m(rn,Sr)),V[0]&2){ci=Ce(vo);let P;for(P=0;P<ci.length;P+=1){const le=Pm(A,ci,P);Fe[P]?(Fe[P].p(le,V),j(Fe[P],1)):(Fe[P]=eg(le),Fe[P].c(),j(Fe[P],1),Fe[P].m(Rn,null))}for(ln(),P=ci.length;P<Fe.length;P+=1)tu(P);cn()}if(A[1].armour.length>0||!A[0]?Ot||(Ot=tg(),Ot.c(),Ot.m(Cn,jo)):Ot&&(Ot.d(1),Ot=null),A[0]?nt&&(nt.d(1),nt=null):nt?nt.p(A,V):(nt=ng(A),nt.c(),nt.m(Cn,Pn)),V[0]&18){ui=Ce(Ac);let P;for(P=0;P<ui.length;P+=1){const le=Cm(A,ui,P);je[P]?(je[P].p(le,V),j(je[P],1)):(je[P]=sg(le),je[P].c(),j(je[P],1),je[P].m(Ns,null))}for(ln(),P=ui.length;P<je.length;P+=1)zo(P);cn()}A[0]?dt&&(dt.d(1),dt=null):dt?dt.p(A,V):(dt=rg(A),dt.c(),dt.m(Ht,Ci))},i(A){if(!Dt){j(t.$$.fragment,A),j(I.$$.fragment,A),j(qe.$$.fragment,A),j(Ke.$$.fragment,A),j(ii.$$.fragment,A),j(tn.$$.fragment,A),j(En.$$.fragment,A),j(ri.$$.fragment,A),j($n.$$.fragment,A),j(nn.$$.fragment,A),j(Bn.$$.fragment,A),j(Wn.$$.fragment,A),j(kn.$$.fragment,A),j(jn.$$.fragment,A),j(ai.$$.fragment,A),j(Gn.$$.fragment,A),j(Ct.$$.fragment,A),j(sn.$$.fragment,A),j(Hn.$$.fragment,A);for(let V=0;V<li.length;V+=1)j(Ve[V]);for(let V=0;V<Pi.length;V+=1)j(Oe[V]);for(let V=0;V<ci.length;V+=1)j(Fe[V]);for(let V=0;V<ui.length;V+=1)j(je[V]);j(Dn.$$.fragment,A),Dt=!0}},o(A){K(t.$$.fragment,A),K(I.$$.fragment,A),K(qe.$$.fragment,A),K(Ke.$$.fragment,A),K(ii.$$.fragment,A),K(tn.$$.fragment,A),K(En.$$.fragment,A),K(ri.$$.fragment,A),K($n.$$.fragment,A),K(nn.$$.fragment,A),K(Bn.$$.fragment,A),K(Wn.$$.fragment,A),K(kn.$$.fragment,A),K(jn.$$.fragment,A),K(ai.$$.fragment,A),K(Gn.$$.fragment,A),K(Ct.$$.fragment,A),K(sn.$$.fragment,A),K(Hn.$$.fragment,A),Ve=Ve.filter(Boolean);for(let V=0;V<Ve.length;V+=1)K(Ve[V]);Oe=Oe.filter(Boolean);for(let V=0;V<Oe.length;V+=1)K(Oe[V]);Fe=Fe.filter(Boolean);for(let V=0;V<Fe.length;V+=1)K(Fe[V]);je=je.filter(Boolean);for(let V=0;V<je.length;V+=1)K(je[V]);K(Dn.$$.fragment,A),Dt=!1},d(A){A&&(x(e),x(l),x(c)),_e(t),_e(I),bt(on,A),_e(qe),_e(Ke),_e(ii),_e(tn),_e(En),_e(ri),_e($n),_e(nn),_e(Bn),_e(Wn),_e(kn),_e(jn),_e(ai),_e(Gn),_e(Ct),_e(sn),_e(Hn),Nt&&Nt.d(),vt&&vt.d(),bt(Ve,A),Qe&&Qe.d(),wt&&wt.d(),bt(Oe,A),Tt&&Tt.d(),at&&at.d(),bt(Fe,A),Ot&&Ot.d(),nt&&nt.d(),bt(je,A),dt&&dt.d(),_e(Dn),Os=!1,Fn(We)}}}function UD(n){let e,t,i;return{c(){e=S("input"),B(e,"type","number"),B(e,"min","0"),B(e,"max","999")},m(s,r){$(s,e,r),de(e,n[1].CP),t||(i=he(e,"input",n[7]),t=!0)},p(s,r){r[0]&2&&gt(e.value)!==s[1].CP&&de(e,s[1].CP)},d(s){s&&x(e),t=!1,i()}}}function xD(n){let e;return{c(){e=S("option"),e.textContent=`${n[47]}`,e.__value=n[30],de(e,e.__value)},m(t,i){$(t,e,i)},p:De,d(t){t&&x(e)}}}function Um(n){let e,t,i,s,r,o,l,c,u,d=Ce(RP),f=[];for(let T=0;T<d.length;T+=1)f[T]=xD(FD(n,d,T));function g(){n[8].call(r,n[44])}return{c(){e=S("div"),t=S("label"),i=S("span"),i.textContent=`${n[44]}`,s=O(),r=S("select"),o=S("option"),o.textContent="-";for(let T=0;T<f.length;T+=1)f[T].c();l=O(),o.__value=-1,de(o,o.__value),r.disabled=n[0],n[1].MoralCodes[n[44]]===void 0&&Mn(g)},m(T,R){$(T,e,R),_(e,t),_(t,i),_(t,s),_(t,r),_(r,o);for(let M=0;M<f.length;M+=1)f[M]&&f[M].m(r,null);vs(r,n[1].MoralCodes[n[44]],!0),_(e,l),c||(u=he(r,"change",g),c=!0)},p(T,R){n=T,R[0]&1&&(r.disabled=n[0]),R[0]&2&&vs(r,n[1].MoralCodes[n[44]])},d(T){T&&x(e),bt(f,T),c=!1,u()}}}function $D(n){let e,t,i;return{c(){e=S("input"),e.disabled=n[0],B(e,"type","number"),B(e,"min","0"),B(e,"max","999")},m(s,r){$(s,e,r),de(e,n[1].BP),t||(i=he(e,"input",n[9]),t=!0)},p(s,r){r[0]&1&&(e.disabled=s[0]),r[0]&2&&gt(e.value)!==s[1].BP&&de(e,s[1].BP)},d(s){s&&x(e),t=!1,i()}}}function qD(n){let e,t,i;return{c(){e=S("input"),e.disabled=n[0],B(e,"type","number"),B(e,"min","0"),B(e,"max","999")},m(s,r){$(s,e,r),de(e,n[1].Qi),t||(i=he(e,"input",n[11]),t=!0)},p(s,r){r[0]&1&&(e.disabled=s[0]),r[0]&2&&gt(e.value)!==s[1].Qi&&de(e,s[1].Qi)},d(s){s&&x(e),t=!1,i()}}}function BD(n){let e,t,i;return{c(){e=S("input"),e.disabled=n[0],B(e,"type","number"),B(e,"min","0"),B(e,"max","999")},m(s,r){$(s,e,r),de(e,n[1].STR),t||(i=he(e,"input",n[12]),t=!0)},p(s,r){r[0]&1&&(e.disabled=s[0]),r[0]&2&&gt(e.value)!==s[1].STR&&de(e,s[1].STR)},d(s){s&&x(e),t=!1,i()}}}function WD(n){let e,t,i;return{c(){e=S("input"),e.disabled=n[0],B(e,"type","number"),B(e,"min","0"),B(e,"max","999")},m(s,r){$(s,e,r),de(e,n[1].DEX),t||(i=he(e,"input",n[13]),t=!0)},p(s,r){r[0]&1&&(e.disabled=s[0]),r[0]&2&&gt(e.value)!==s[1].DEX&&de(e,s[1].DEX)},d(s){s&&x(e),t=!1,i()}}}function jD(n){let e,t,i;return{c(){e=S("input"),e.disabled=n[0],B(e,"type","number"),B(e,"min","0"),B(e,"max","999")},m(s,r){$(s,e,r),de(e,n[1].LOG),t||(i=he(e,"input",n[14]),t=!0)},p(s,r){r[0]&1&&(e.disabled=s[0]),r[0]&2&&gt(e.value)!==s[1].LOG&&de(e,s[1].LOG)},d(s){s&&x(e),t=!1,i()}}}function GD(n){let e,t,i;return{c(){e=S("input"),e.disabled=n[0],B(e,"type","number"),B(e,"min","0"),B(e,"max","999")},m(s,r){$(s,e,r),de(e,n[1].WIL),t||(i=he(e,"input",n[15]),t=!0)},p(s,r){r[0]&1&&(e.disabled=s[0]),r[0]&2&&gt(e.value)!==s[1].WIL&&de(e,s[1].WIL)},d(s){s&&x(e),t=!1,i()}}}function xm(n){let e;return{c(){e=S("h3"),e.textContent="Techniques"},m(t,i){$(t,e,i)},d(t){t&&x(e)}}}function $m(n){let e,t,i,s=Ce(Sc),r=[];for(let o=0;o<s.length;o+=1)r[o]=Bm(Lm(n,s,o));return{c(){e=S("select");for(let o=0;o<r.length;o+=1)r[o].c();e.multiple=!0,n[1].learnedTechniques===void 0&&Mn(()=>n[16].call(e))},m(o,l){$(o,e,l);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);yi(e,n[1].learnedTechniques),t||(i=he(e,"change",n[16]),t=!0)},p(o,l){if(l[0]&2){s=Ce(Sc);let c;for(c=0;c<s.length;c+=1){const u=Lm(o,s,c);r[c]?r[c].p(u,l):(r[c]=Bm(u),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=s.length}l[0]&2&&yi(e,o[1].learnedTechniques)},d(o){o&&x(e),bt(r,o),t=!1,i()}}}function qm(n){let e;return{c(){e=S("option"),e.textContent=`${n[41].name} `,e.__value=n[41].name,de(e,e.__value)},m(t,i){$(t,e,i)},d(t){t&&x(e)}}}function Bm(n){let e=n[1].allowedTechniques.includes(n[41]),t,i=e&&qm(n);return{c(){i&&i.c(),t=Un()},m(s,r){i&&i.m(s,r),$(s,t,r)},p(s,r){r[0]&2&&(e=s[1].allowedTechniques.includes(s[41])),e?i||(i=qm(s),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},d(s){s&&x(t),i&&i.d(s)}}}function Wm(n){let e,t;const i=[n[41]];let s={};for(let r=0;r<i.length;r+=1)s=wo(s,i[r]);return e=new ol({props:s}),{c(){we(e.$$.fragment)},m(r,o){ge(e,r,o),t=!0},i(r){t||(j(e.$$.fragment,r),t=!0)},o(r){K(e.$$.fragment,r),t=!1},d(r){_e(e,r)}}}function jm(n){let e=n[1].learnedTechniques.includes(n[41].name),t,i,s=e&&Wm(n);return{c(){s&&s.c(),t=Un()},m(r,o){s&&s.m(r,o),$(r,t,o),i=!0},p(r,o){o[0]&2&&(e=r[1].learnedTechniques.includes(r[41].name)),e?s?o[0]&2&&j(s,1):(s=Wm(r),s.c(),j(s,1),s.m(t.parentNode,t)):s&&(ln(),K(s,1,1,()=>{s=null}),cn())},i(r){i||(j(s),i=!0)},o(r){K(s),i=!1},d(r){r&&x(t),s&&s.d(r)}}}function Gm(n){let e;return{c(){e=S("h3"),e.textContent="Spells"},m(t,i){$(t,e,i)},d(t){t&&x(e)}}}function Hm(n){let e,t,i,s=Ce(Ah),r=[];for(let o=0;o<s.length;o+=1)r[o]=HD(VD(n,s,o));return{c(){e=S("select");for(let o=0;o<r.length;o+=1)r[o].c();e.multiple=!0,n[1].spells===void 0&&Mn(()=>n[17].call(e))},m(o,l){$(o,e,l);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);yi(e,n[1].spells),t||(i=he(e,"change",n[17]),t=!0)},p(o,l){l[0]&2&&yi(e,o[1].spells)},d(o){o&&x(e),bt(r,o),t=!1,i()}}}function HD(n){let e;return{c(){e=S("option"),e.textContent=`${n[38].name}`,e.__value=n[38].name,de(e,e.__value)},m(t,i){$(t,e,i)},p:De,d(t){t&&x(e)}}}function zm(n){let e,t;const i=[n[38]];let s={};for(let r=0;r<i.length;r+=1)s=wo(s,i[r]);return e=new ol({props:s}),{c(){we(e.$$.fragment)},m(r,o){ge(e,r,o),t=!0},i(r){t||(j(e.$$.fragment,r),t=!0)},o(r){K(e.$$.fragment,r),t=!1},d(r){_e(e,r)}}}function Km(n){let e=n[1].spells.includes(n[38].name),t,i,s=e&&zm(n);return{c(){s&&s.c(),t=Un()},m(r,o){s&&s.m(r,o),$(r,t,o),i=!0},p(r,o){o[0]&2&&(e=r[1].spells.includes(r[38].name)),e?s?o[0]&2&&j(s,1):(s=zm(r),s.c(),j(s,1),s.m(t.parentNode,t)):s&&(ln(),K(s,1,1,()=>{s=null}),cn())},i(r){i||(j(s),i=!0)},o(r){K(s),i=!1},d(r){r&&x(t),s&&s.d(r)}}}function Qm(n){let e;return{c(){e=S("h3"),e.textContent="equipment"},m(t,i){$(t,e,i)},d(t){t&&x(e)}}}function Xm(n){let e,t,i,s=Ce([...new Set(vo.reduce(lg,[]))]),r=[];for(let o=0;o<s.length;o+=1)r[o]=Jm(Dm(n,s,o));return{c(){e=S("select");for(let o=0;o<r.length;o+=1)r[o].c();B(e,"class","thin"),e.multiple=!0,n[1].equipment===void 0&&Mn(()=>n[19].call(e))},m(o,l){$(o,e,l);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);yi(e,n[1].equipment),t||(i=he(e,"change",n[19]),t=!0)},p(o,l){if(l&0){s=Ce([...new Set(vo.reduce(lg,[]))]);let c;for(c=0;c<s.length;c+=1){const u=Dm(o,s,c);r[c]?r[c].p(u,l):(r[c]=Jm(u),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=s.length}l[0]&2&&yi(e,o[1].equipment)},d(o){o&&x(e),bt(r,o),t=!1,i()}}}function Ym(n){let e,t,i=n[28].cost+"",s,r,o=n[28].name+"",l;return{c(){e=S("option"),t=G("["),s=G(i),r=G("]"),l=G(o),e.__value=n[28].name,de(e,e.__value)},m(c,u){$(c,e,u),_(e,t),_(e,s),_(e,r),_(e,l)},p:De,d(c){c&&x(e)}}}function Jm(n){let e;function t(...r){return n[18](n[35],...r)}let i=Ce(vo.filter(t)),s=[];for(let r=0;r<i.length;r+=1)s[r]=Ym(Nm(n,i,r));return{c(){e=S("optgroup");for(let r=0;r<s.length;r+=1)s[r].c();B(e,"label",n[35])},m(r,o){$(r,e,o);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null)},p(r,o){if(n=r,o&0){i=Ce(vo.filter(t));let l;for(l=0;l<i.length;l+=1){const c=Nm(n,i,l);s[l]?s[l].p(c,o):(s[l]=Ym(c),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=i.length}},d(r){r&&x(e),bt(s,r)}}}function Zm(n){let e,t;const i=[n[31]];let s={};for(let r=0;r<i.length;r+=1)s=wo(s,i[r]);return e=new ol({props:s}),{c(){we(e.$$.fragment)},m(r,o){ge(e,r,o),t=!0},i(r){t||(j(e.$$.fragment,r),t=!0)},o(r){K(e.$$.fragment,r),t=!1},d(r){_e(e,r)}}}function eg(n){let e=n[1].equipment.includes(n[31].name),t,i,s=e&&Zm(n);return{c(){s&&s.c(),t=Un()},m(r,o){s&&s.m(r,o),$(r,t,o),i=!0},p(r,o){o[0]&2&&(e=r[1].equipment.includes(r[31].name)),e?s?o[0]&2&&j(s,1):(s=Zm(r),s.c(),j(s,1),s.m(t.parentNode,t)):s&&(ln(),K(s,1,1,()=>{s=null}),cn())},i(r){i||(j(s),i=!0)},o(r){K(s),i=!1},d(r){r&&x(t),s&&s.d(r)}}}function tg(n){let e;return{c(){e=S("h3"),e.textContent="armour"},m(t,i){$(t,e,i)},d(t){t&&x(e)}}}function ng(n){let e,t,i,s=Ce(Ac),r=[];for(let o=0;o<s.length;o+=1)r[o]=zD(LD(n,s,o));return{c(){e=S("select");for(let o=0;o<r.length;o+=1)r[o].c();e.multiple=!0,n[1].armour===void 0&&Mn(()=>n[20].call(e))},m(o,l){$(o,e,l);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);yi(e,n[1].armour),t||(i=he(e,"change",n[20]),t=!0)},p(o,l){l[0]&2&&yi(e,o[1].armour)},d(o){o&&x(e),bt(r,o),t=!1,i()}}}function zD(n){let e;return{c(){e=S("option"),e.textContent=`[${n[28].cost}] ${n[28].name}`,e.__value=n[28].name,de(e,e.__value)},m(t,i){$(t,e,i)},p:De,d(t){t&&x(e)}}}function ig(n){let e,t,i,s;const r=[QD,KD],o=[];function l(c,u){var d;return((d=c[1].equippedArmour)==null?void 0:d.name)==c[31].name?0:1}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),i=Un()},m(c,u){o[e].m(c,u),$(c,i,u),s=!0},p(c,u){let d=e;e=l(c),e===d?o[e].p(c,u):(ln(),K(o[d],1,1,()=>{o[d]=null}),cn(),t=o[e],t?t.p(c,u):(t=o[e]=r[e](c),t.c()),j(t,1),t.m(i.parentNode,i))},i(c){s||(j(t),s=!0)},o(c){K(t),s=!1},d(c){c&&x(i),o[e].d(c)}}}function KD(n){let e,t,i,s,r,o,l,c;function u(){return n[22](n[31])}const d=[n[31]];let f={};for(let g=0;g<d.length;g+=1)f=wo(f,d[g]);return s=new ol({props:f}),{c(){e=S("div"),t=S("button"),t.textContent="Equip",i=O(),we(s.$$.fragment),r=O()},m(g,T){$(g,e,T),_(e,t),_(e,i),ge(s,e,null),_(e,r),o=!0,l||(c=he(t,"click",u),l=!0)},p(g,T){n=g;const R={};s.$set(R)},i(g){o||(j(s.$$.fragment,g),o=!0)},o(g){K(s.$$.fragment,g),o=!1},d(g){g&&x(e),_e(s),l=!1,c()}}}function QD(n){let e,t,i,s,r,o,l,c;const u=[n[31]];let d={};for(let f=0;f<u.length;f+=1)d=wo(d,u[f]);return s=new ol({props:d}),{c(){e=S("div"),t=S("button"),t.textContent="Unequip",i=O(),we(s.$$.fragment),r=O()},m(f,g){$(f,e,g),_(e,t),_(e,i),ge(s,e,null),_(e,r),o=!0,l||(c=he(t,"click",n[21]),l=!0)},p(f,g){const T={};s.$set(T)},i(f){o||(j(s.$$.fragment,f),o=!0)},o(f){K(s.$$.fragment,f),o=!1},d(f){f&&x(e),_e(s),l=!1,c()}}}function sg(n){let e=n[1].armour.includes(n[31].name),t,i,s=e&&ig(n);return{c(){s&&s.c(),t=Un()},m(r,o){s&&s.m(r,o),$(r,t,o),i=!0},p(r,o){o[0]&2&&(e=r[1].armour.includes(r[31].name)),e?s?(s.p(r,o),o[0]&2&&j(s,1)):(s=ig(r),s.c(),j(s,1),s.m(t.parentNode,t)):s&&(ln(),K(s,1,1,()=>{s=null}),cn())},i(r){i||(j(s),i=!0)},o(r){K(s),i=!1},d(r){r&&x(t),s&&s.d(r)}}}function rg(n){let e,t,i,s=Ce([!0,!1]),r=[];for(let o=0;o<2;o+=1)r[o]=ag(Am(n,s,o));return{c(){e=S("select");for(let o=0;o<2;o+=1)r[o].c();e.multiple=!0,n[1].weapons===void 0&&Mn(()=>n[24].call(e))},m(o,l){$(o,e,l);for(let c=0;c<2;c+=1)r[c]&&r[c].m(e,null);yi(e,n[1].weapons),t||(i=he(e,"change",n[24]),t=!0)},p(o,l){if(l[0]&2){s=Ce([!0,!1]);let c;for(c=0;c<2;c+=1){const u=Am(o,s,c);r[c]?r[c].p(u,l):(r[c]=ag(u),r[c].c(),r[c].m(e,null))}for(;c<2;c+=1)r[c].d(1)}l[0]&2&&yi(e,o[1].weapons)},d(o){o&&x(e),bt(r,o),t=!1,i()}}}function og(n){let e,t,i=n[28].cost+"",s,r,o=n[28].name+"",l,c,u=n[1].trainedWithWeapon(n[28])?"(T)":"",d,f,g=n[25]?"":"	["+n[28].attributes.join(", ")+"]",T,R,M;return{c(){e=S("option"),t=G("["),s=G(i),r=G("] "),l=G(o),c=O(),d=G(u),f=O(),T=G(g),R=O(),e.__value=M=n[28].name,de(e,e.__value)},m(D,L){$(D,e,L),_(e,t),_(e,s),_(e,r),_(e,l),_(e,c),_(e,d),_(e,f),_(e,T),_(e,R)},p(D,L){L[0]&2&&i!==(i=D[28].cost+"")&&Z(s,i),L[0]&2&&o!==(o=D[28].name+"")&&Z(l,o),L[0]&2&&u!==(u=D[1].trainedWithWeapon(D[28])?"(T)":"")&&Z(d,u),L[0]&2&&g!==(g=D[25]?"":"	["+D[28].attributes.join(", ")+"]")&&Z(T,g),L[0]&2&&M!==(M=D[28].name)&&(e.__value=M,de(e,e.__value))},d(D){D&&x(e)}}}function ag(n){let e;function t(...r){return n[23](n[25],...r)}let i=Ce(kc.filter(t)),s=[];for(let r=0;r<i.length;r+=1)s[r]=og(Rm(n,i,r));return{c(){e=S("optgroup");for(let r=0;r<s.length;r+=1)s[r].c();B(e,"label",n[25]?"usable":"unusable")},m(r,o){$(r,e,o);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null)},p(r,o){if(n=r,o[0]&2){i=Ce(kc.filter(t));let l;for(l=0;l<i.length;l+=1){const c=Rm(n,i,l);s[l]?s[l].p(c,o):(s[l]=og(c),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=i.length}},d(r){r&&x(e),bt(s,r)}}}function XD(n){let e,t,i=n[1]&&Fm(n);return{c(){i&&i.c(),e=Un()},m(s,r){i&&i.m(s,r),$(s,e,r),t=!0},p(s,r){s[1]?i?(i.p(s,r),r[0]&2&&j(i,1)):(i=Fm(s),i.c(),j(i,1),i.m(e.parentNode,e)):i&&(ln(),K(i,1,1,()=>{i=null}),cn())},i(s){t||(j(i),t=!0)},o(s){K(i),t=!1},d(s){s&&x(e),i&&i.d(s)}}}const lg=(n,e)=>[...n,e.itemType];function YD(n,e,t){let i;ja(n,ue,b=>t(1,i=b));function s(b){const{skill:y,value:Ie}=b.detail;console.log(b.detail),zl(ue,i[y.name]=Ie,i)}let r=!1;const o=()=>t(0,r=!r);let l=b=>{i.equipArmour(b),ue.set(i)};function c(){i.Name=this.value,ue.set(i)}function u(){i.Description=this.value,ue.set(i)}function d(){i.CP=gt(this.value),ue.set(i)}function f(b){i.MoralCodes[b]=Kl(this),ue.set(i)}function g(){i.BP=gt(this.value),ue.set(i)}const T=()=>{zl(ue,i.BP=i.BaseBP,i)};function R(){i.Qi=gt(this.value),ue.set(i)}function M(){i.STR=gt(this.value),ue.set(i)}function D(){i.DEX=gt(this.value),ue.set(i)}function L(){i.LOG=gt(this.value),ue.set(i)}function U(){i.WIL=gt(this.value),ue.set(i)}function F(){i.learnedTechniques=Ko(this),ue.set(i)}function z(){i.spells=Ko(this),ue.set(i)}const ee=(b,y)=>y.itemType==b;function X(){i.equipment=Ko(this),ue.set(i)}function k(){i.armour=Ko(this),ue.set(i)}const v=()=>l(),E=b=>l(b),I=(b,y)=>i.canUseWeapon(y)==b;function w(){i.weapons=Ko(this),ue.set(i)}return[r,i,s,o,l,c,u,d,f,g,T,R,M,D,L,U,F,z,ee,X,k,v,E,I,w]}class JD extends mn{constructor(e){super(),pn(this,e,YD,XD,Yt,{},null,[-1,-1])}}function ZD(n){let e,t;return e=new JD({}),{c(){we(e.$$.fragment)},m(i,s){ge(e,i,s),t=!0},i(i){t||(j(e.$$.fragment,i),t=!0)},o(i){K(e.$$.fragment,i),t=!1},d(i){_e(e,i)}}}function eN(n){let e,t,i;return t=new tD({props:{$$slots:{default:[ZD]},$$scope:{ctx:n}}}),{c(){e=S("main"),we(t.$$.fragment)},m(s,r){$(s,e,r),ge(t,e,null),i=!0},p(s,[r]){const o={};r&1&&(o.$$scope={dirty:r,ctx:s}),t.$set(o)},i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){K(t.$$.fragment,s),i=!1},d(s){s&&x(e),_e(t)}}}class tN extends mn{constructor(e){super(),pn(this,e,null,eN,Yt,{})}}new tN({target:document.getElementById("app")});
