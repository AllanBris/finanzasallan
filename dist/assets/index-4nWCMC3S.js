(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ha(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},jn=[],mt=()=>{},Cp=()=>!1,Er=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),da=t=>t.startsWith("onUpdate:"),we=Object.assign,fa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Tp=Object.prototype.hasOwnProperty,X=(t,e)=>Tp.call(t,e),V=Array.isArray,qn=t=>hi(t)==="[object Map]",Ir=t=>hi(t)==="[object Set]",Ol=t=>hi(t)==="[object Date]",$=t=>typeof t=="function",me=t=>typeof t=="string",Et=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Hu=t=>(he(t)||$(t))&&$(t.then)&&$(t.catch),Wu=Object.prototype.toString,hi=t=>Wu.call(t),Sp=t=>hi(t).slice(8,-1),Vu=t=>hi(t)==="[object Object]",pa=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=ha(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rp=/-(\w)/g,sn=wr(t=>t.replace(Rp,(e,n)=>n?n.toUpperCase():"")),Ap=/\B([A-Z])/g,Dn=wr(t=>t.replace(Ap,"-$1").toLowerCase()),Bu=wr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gr=wr(t=>t?`on${Bu(t)}`:""),Xt=(t,e)=>!Object.is(t,e),ki=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$u=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Bi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xl;const br=()=>xl||(xl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _a(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=me(s)?Op(s):_a(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(me(t)||he(t))return t}const Pp=/;(?![^(]*\))/g,Np=/:([^]+)/,kp=/\/\*[^]*?\*\//g;function Op(t){const e={};return t.replace(kp,"").split(Pp).forEach(n=>{if(n){const s=n.split(Np);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ga(t){let e="";if(me(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=ga(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dp=ha(xp);function ju(t){return!!t||t===""}function Mp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Cr(t[s],e[s]);return n}function Cr(t,e){if(t===e)return!0;let n=Ol(t),s=Ol(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Et(t),s=Et(e),n||s)return t===e;if(n=V(t),s=V(e),n||s)return n&&s?Mp(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Cr(t[o],e[o]))return!1}}return String(t)===String(e)}function Lp(t,e){return t.findIndex(n=>Cr(n,e))}const qu=t=>!!(t&&t.__v_isRef===!0),Oi=t=>me(t)?t:t==null?"":V(t)||he(t)&&(t.toString===Wu||!$(t.toString))?qu(t)?Oi(t.value):JSON.stringify(t,Gu,2):String(t),Gu=(t,e)=>qu(e)?Gu(t,e.value):qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Kr(s,r)+" =>"]=i,n),{})}:Ir(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Kr(n))}:Et(e)?Kr(e):he(e)&&!V(e)&&!Vu(e)?String(e):e,Kr=(t,e="")=>{var n;return Et(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class Fp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Up(){return je}let le;const zr=new WeakSet;class Ku{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zr.has(this)&&(zr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dl(this),Qu(this);const e=le,n=it;le=this,it=!0;try{return this.fn()}finally{Ju(this),le=e,it=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ya(e);this.deps=this.depsTail=void 0,Dl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Co(this)&&this.run()}get dirty(){return Co(this)}}let zu=0,xs,Ds;function Yu(t,e=!1){if(t.flags|=8,e){t.next=Ds,Ds=t;return}t.next=xs,xs=t}function ma(){zu++}function va(){if(--zu>0)return;if(Ds){let e=Ds;for(Ds=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;xs;){let e=xs;for(xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Qu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ju(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ya(s),Hp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Co(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ks))return;t.globalVersion=Ks;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Co(t)){t.flags&=-3;return}const n=le,s=it;le=t,it=!0;try{Qu(t);const i=t.fn(t._value);(e.version===0||Xt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{le=n,it=s,Ju(t),t.flags&=-3}}function ya(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ya(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let it=!0;const Zu=[];function an(){Zu.push(it),it=!1}function ln(){const t=Zu.pop();it=t===void 0?!0:t}function Dl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=le;le=void 0;try{e()}finally{le=n}}}let Ks=0;class Wp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ea{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!le||!it||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new Wp(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,eh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=s)}return n}trigger(e){this.version++,Ks++,this.notify(e)}notify(e){ma();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{va()}}}function eh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)eh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const To=new WeakMap,Cn=Symbol(""),So=Symbol(""),zs=Symbol("");function Se(t,e,n){if(it&&le){let s=To.get(t);s||To.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ea),i.map=s,i.key=n),i.track()}}function St(t,e,n,s,i,r){const o=To.get(t);if(!o){Ks++;return}const a=l=>{l&&l.trigger()};if(ma(),e==="clear")o.forEach(a);else{const l=V(t),c=l&&pa(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===zs||!Et(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(zs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Cn)),qn(t)&&a(o.get(So)));break;case"delete":l||(a(o.get(Cn)),qn(t)&&a(o.get(So)));break;case"set":qn(t)&&a(o.get(Cn));break}}va()}function Hn(t){const e=J(t);return e===t?e:(Se(e,"iterate",zs),rt(t)?e:e.map(ke))}function Ia(t){return Se(t=J(t),"iterate",zs),t}const Vp={__proto__:null,[Symbol.iterator](){return Yr(this,Symbol.iterator,ke)},concat(...t){return Hn(this).concat(...t.map(e=>V(e)?Hn(e):e))},entries(){return Yr(this,"entries",t=>(t[1]=ke(t[1]),t))},every(t,e){return bt(this,"every",t,e,void 0,arguments)},filter(t,e){return bt(this,"filter",t,e,n=>n.map(ke),arguments)},find(t,e){return bt(this,"find",t,e,ke,arguments)},findIndex(t,e){return bt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bt(this,"findLast",t,e,ke,arguments)},findLastIndex(t,e){return bt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qr(this,"includes",t)},indexOf(...t){return Qr(this,"indexOf",t)},join(t){return Hn(this).join(t)},lastIndexOf(...t){return Qr(this,"lastIndexOf",t)},map(t,e){return bt(this,"map",t,e,void 0,arguments)},pop(){return Es(this,"pop")},push(...t){return Es(this,"push",t)},reduce(t,...e){return Ml(this,"reduce",t,e)},reduceRight(t,...e){return Ml(this,"reduceRight",t,e)},shift(){return Es(this,"shift")},some(t,e){return bt(this,"some",t,e,void 0,arguments)},splice(...t){return Es(this,"splice",t)},toReversed(){return Hn(this).toReversed()},toSorted(t){return Hn(this).toSorted(t)},toSpliced(...t){return Hn(this).toSpliced(...t)},unshift(...t){return Es(this,"unshift",t)},values(){return Yr(this,"values",ke)}};function Yr(t,e,n){const s=Ia(t),i=s[e]();return s!==t&&!rt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Bp=Array.prototype;function bt(t,e,n,s,i,r){const o=Ia(t),a=o!==t&&!rt(t),l=o[e];if(l!==Bp[e]){const h=l.apply(t,r);return a?ke(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,ke(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Ml(t,e,n,s){const i=Ia(t);let r=n;return i!==t&&(rt(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,ke(a),l,t)}),i[e](r,...s)}function Qr(t,e,n){const s=J(t);Se(s,"iterate",zs);const i=s[e](...n);return(i===-1||i===!1)&&Ca(n[0])?(n[0]=J(n[0]),s[e](...n)):i}function Es(t,e,n=[]){an(),ma();const s=J(t)[e].apply(t,n);return va(),ln(),s}const $p=ha("__proto__,__v_isRef,__isVue"),th=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Et));function jp(t){Et(t)||(t=String(t));const e=J(this);return Se(e,"has",t),e.hasOwnProperty(t)}class nh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?e_:oh:r?rh:ih).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=V(e);if(!i){let l;if(o&&(l=Vp[n]))return l;if(n==="hasOwnProperty")return jp}const a=Reflect.get(e,n,Ae(e)?e:s);return(Et(n)?th.has(n):$p(n))||(i||Se(e,"get",n),r)?a:Ae(a)?o&&pa(n)?a:a.value:he(a)?i?lh(a):Tr(a):a}}class sh extends nh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Tn(r);if(!rt(s)&&!Tn(s)&&(r=J(r),s=J(s)),!V(e)&&Ae(r)&&!Ae(s))return l?!1:(r.value=s,!0)}const o=V(e)&&pa(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,s,Ae(e)?e:i);return e===J(i)&&(o?Xt(s,r)&&St(e,"set",n,s):St(e,"add",n,s)),a}deleteProperty(e,n){const s=X(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&St(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Et(n)||!th.has(n))&&Se(e,"has",n),s}ownKeys(e){return Se(e,"iterate",V(e)?"length":Cn),Reflect.ownKeys(e)}}class qp extends nh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gp=new sh,Kp=new qp,zp=new sh(!0);const Ro=t=>t,Ti=t=>Reflect.getPrototypeOf(t);function Yp(t,e,n){return function(...s){const i=this.__v_raw,r=J(i),o=qn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ro:e?Ao:ke;return!e&&Se(r,"iterate",l?So:Cn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Si(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qp(t,e){const n={get(i){const r=this.__v_raw,o=J(r),a=J(i);t||(Xt(i,a)&&Se(o,"get",i),Se(o,"get",a));const{has:l}=Ti(o),c=e?Ro:t?Ao:ke;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Se(J(i),"iterate",Cn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=J(r),a=J(i);return t||(Xt(i,a)&&Se(o,"has",i),Se(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=J(a),c=e?Ro:t?Ao:ke;return!t&&Se(l,"iterate",Cn),a.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return we(n,t?{add:Si("add"),set:Si("set"),delete:Si("delete"),clear:Si("clear")}:{add(i){!e&&!rt(i)&&!Tn(i)&&(i=J(i));const r=J(this);return Ti(r).has.call(r,i)||(r.add(i),St(r,"add",i,i)),this},set(i,r){!e&&!rt(r)&&!Tn(r)&&(r=J(r));const o=J(this),{has:a,get:l}=Ti(o);let c=a.call(o,i);c||(i=J(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Xt(r,u)&&St(o,"set",i,r):St(o,"add",i,r),this},delete(i){const r=J(this),{has:o,get:a}=Ti(r);let l=o.call(r,i);l||(i=J(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&St(r,"delete",i,void 0),c},clear(){const i=J(this),r=i.size!==0,o=i.clear();return r&&St(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Yp(i,t,e)}),n}function wa(t,e){const n=Qp(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const Jp={get:wa(!1,!1)},Xp={get:wa(!1,!0)},Zp={get:wa(!0,!1)};const ih=new WeakMap,rh=new WeakMap,oh=new WeakMap,e_=new WeakMap;function t_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function n_(t){return t.__v_skip||!Object.isExtensible(t)?0:t_(Sp(t))}function Tr(t){return Tn(t)?t:ba(t,!1,Gp,Jp,ih)}function ah(t){return ba(t,!1,zp,Xp,rh)}function lh(t){return ba(t,!0,Kp,Zp,oh)}function ba(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=n_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Ms(t){return Tn(t)?Ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function rt(t){return!!(t&&t.__v_isShallow)}function Ca(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function s_(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&$u(t,"__v_skip",!0),t}const ke=t=>he(t)?Tr(t):t,Ao=t=>he(t)?lh(t):t;function Ae(t){return t?t.__v_isRef===!0:!1}function En(t){return ch(t,!1)}function i_(t){return ch(t,!0)}function ch(t,e){return Ae(t)?t:new r_(t,e)}class r_{constructor(e,n){this.dep=new Ea,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:J(e),this._value=n?e:ke(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||rt(e)||Tn(e);e=s?e:J(e),Xt(e,n)&&(this._rawValue=e,this._value=s?e:ke(e),this.dep.trigger())}}function ot(t){return Ae(t)?t.value:t}const o_={get:(t,e,n)=>e==="__v_raw"?t:ot(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function uh(t){return Ms(t)?t:new Proxy(t,o_)}class a_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ea(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return Yu(this,!0),!0}get value(){const e=this.dep.track();return Xu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function l_(t,e,n=!1){let s,i;return $(t)?s=t:(s=t.get,i=t.set),new a_(s,i,n)}const Ri={},$i=new WeakMap;let gn;function c_(t,e=!1,n=gn){if(n){let s=$i.get(n);s||$i.set(n,s=[]),s.push(t)}}function u_(t,e,n=ie){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=O=>i?O:rt(O)||i===!1||i===0?Rt(O,1):Rt(O);let u,h,d,_,m=!1,w=!1;if(Ae(t)?(h=()=>t.value,m=rt(t)):Ms(t)?(h=()=>c(t),m=!0):V(t)?(w=!0,m=t.some(O=>Ms(O)||rt(O)),h=()=>t.map(O=>{if(Ae(O))return O.value;if(Ms(O))return c(O);if($(O))return l?l(O,2):O()})):$(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){an();try{d()}finally{ln()}}const O=gn;gn=u;try{return l?l(t,3,[_]):t(_)}finally{gn=O}}:h=mt,e&&i){const O=h,Y=i===!0?1/0:i;h=()=>Rt(O(),Y)}const x=Up(),D=()=>{u.stop(),x&&fa(x.effects,u)};if(r&&e){const O=e;e=(...Y)=>{O(...Y),D()}}let k=w?new Array(t.length).fill(Ri):Ri;const M=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const Y=u.run();if(i||m||(w?Y.some((pe,oe)=>Xt(pe,k[oe])):Xt(Y,k))){d&&d();const pe=gn;gn=u;try{const oe=[Y,k===Ri?void 0:w&&k[0]===Ri?[]:k,_];l?l(e,3,oe):e(...oe),k=Y}finally{gn=pe}}}else u.run()};return a&&a(M),u=new Ku(h),u.scheduler=o?()=>o(M,!1):M,_=O=>c_(O,!1,u),d=u.onStop=()=>{const O=$i.get(u);if(O){if(l)l(O,4);else for(const Y of O)Y();$i.delete(u)}},e?s?M(!0):k=u.run():o?o(M.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function Rt(t,e=1/0,n){if(e<=0||!he(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ae(t))Rt(t.value,e,n);else if(V(t))for(let s=0;s<t.length;s++)Rt(t[s],e,n);else if(Ir(t)||qn(t))t.forEach(s=>{Rt(s,e,n)});else if(Vu(t)){for(const s in t)Rt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Rt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function di(t,e,n,s){try{return s?t(...s):t()}catch(i){Sr(i,e,n)}}function It(t,e,n,s){if($(t)){const i=di(t,e,n,s);return i&&Hu(i)&&i.catch(r=>{Sr(r,e,n)}),i}if(V(t)){const i=[];for(let r=0;r<t.length;r++)i.push(It(t[r],e,n,s));return i}}function Sr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){an(),di(r,null,10,[t,l,c]),ln();return}}h_(t,n,i,s,o)}function h_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Oe=[];let pt=-1;const Gn=[];let Gt=null,Vn=0;const hh=Promise.resolve();let ji=null;function Ta(t){const e=ji||hh;return t?e.then(this?t.bind(this):t):e}function d_(t){let e=pt+1,n=Oe.length;for(;e<n;){const s=e+n>>>1,i=Oe[s],r=Ys(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Sa(t){if(!(t.flags&1)){const e=Ys(t),n=Oe[Oe.length-1];!n||!(t.flags&2)&&e>=Ys(n)?Oe.push(t):Oe.splice(d_(e),0,t),t.flags|=1,dh()}}function dh(){ji||(ji=hh.then(ph))}function f_(t){V(t)?Gn.push(...t):Gt&&t.id===-1?Gt.splice(Vn+1,0,t):t.flags&1||(Gn.push(t),t.flags|=1),dh()}function Ll(t,e,n=pt+1){for(;n<Oe.length;n++){const s=Oe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Oe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function fh(t){if(Gn.length){const e=[...new Set(Gn)].sort((n,s)=>Ys(n)-Ys(s));if(Gn.length=0,Gt){Gt.push(...e);return}for(Gt=e,Vn=0;Vn<Gt.length;Vn++){const n=Gt[Vn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gt=null,Vn=0}}const Ys=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ph(t){try{for(pt=0;pt<Oe.length;pt++){const e=Oe[pt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),di(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pt<Oe.length;pt++){const e=Oe[pt];e&&(e.flags&=-2)}pt=-1,Oe.length=0,fh(),ji=null,(Oe.length||Gn.length)&&ph()}}let Qe=null,_h=null;function qi(t){const e=Qe;return Qe=t,_h=t&&t.type.__scopeId||null,e}function Po(t,e=Qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&jl(-1);const r=qi(e);let o;try{o=t(...i)}finally{qi(r),s._d&&jl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Jr(t,e){if(Qe===null)return t;const n=Nr(Qe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=ie]=e[i];r&&($(r)&&(r={mounted:r,updated:r}),r.deep&&Rt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function pn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(an(),It(l,n,8,[t.el,a,t,e]),ln())}}const p_=Symbol("_vte"),__=t=>t.__isTeleport;function Ra(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ra(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function gh(t,e){return $(t)?we({name:t.name},e,{setup:t}):t}function mh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function No(t,e,n,s,i=!1){if(V(t)){t.forEach((m,w)=>No(m,e&&(V(e)?e[w]:e),n,s,i));return}if(Ls(s)&&!i)return;const r=s.shapeFlag&4?Nr(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,h=a.setupState,d=J(h),_=h===ie?()=>!1:m=>X(d,m);if(c!=null&&c!==l&&(me(c)?(u[c]=null,_(c)&&(h[c]=null)):Ae(c)&&(c.value=null)),$(l))di(l,a,12,[o,u]);else{const m=me(l),w=Ae(l);if(m||w){const x=()=>{if(t.f){const D=m?_(l)?h[l]:u[l]:l.value;i?V(D)&&fa(D,r):V(D)?D.includes(r)||D.push(r):m?(u[l]=[r],_(l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,_(l)&&(h[l]=o)):w&&(l.value=o,t.k&&(u[t.k]=o))};o?(x.id=-1,$e(x,n)):x()}}}br().requestIdleCallback;br().cancelIdleCallback;const Ls=t=>!!t.type.__asyncLoader,vh=t=>t.type.__isKeepAlive;function g_(t,e){yh(t,"a",e)}function m_(t,e){yh(t,"da",e)}function yh(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Rr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)vh(i.parent.vnode)&&v_(s,e,n,i),i=i.parent}}function v_(t,e,n,s){const i=Rr(e,t,s,!0);Ih(()=>{fa(s[e],i)},n)}function Rr(t,e,n=xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{an();const a=fi(n),l=It(e,n,t,o);return a(),ln(),l});return s?i.unshift(r):i.push(r),r}}const Ht=t=>(e,n=xe)=>{(!Xs||t==="sp")&&Rr(t,(...s)=>e(...s),n)},y_=Ht("bm"),Eh=Ht("m"),E_=Ht("bu"),I_=Ht("u"),w_=Ht("bum"),Ih=Ht("um"),b_=Ht("sp"),C_=Ht("rtg"),T_=Ht("rtc");function S_(t,e=xe){Rr("ec",t,e)}const R_=Symbol.for("v-ndc"),ko=t=>t?Bh(t)?Nr(t):ko(t.parent):null,Fs=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ko(t.parent),$root:t=>ko(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Aa(t),$forceUpdate:t=>t.f||(t.f=()=>{Sa(t.update)}),$nextTick:t=>t.n||(t.n=Ta.bind(t.proxy)),$watch:t=>z_.bind(t)}),Xr=(t,e)=>t!==ie&&!t.__isScriptSetup&&X(t,e),A_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Xr(s,e))return o[e]=1,s[e];if(i!==ie&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==ie&&X(n,e))return o[e]=4,n[e];Oo&&(o[e]=0)}}const u=Fs[e];let h,d;if(u)return e==="$attrs"&&Se(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ie&&X(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,X(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Xr(i,e)?(i[e]=n,!0):s!==ie&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ie&&X(t,o)||Xr(e,o)||(a=r[0])&&X(a,o)||X(s,o)||X(Fs,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fl(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Oo=!0;function P_(t){const e=Aa(t),n=t.proxy,s=t.ctx;Oo=!1,e.beforeCreate&&Ul(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:w,deactivated:x,beforeDestroy:D,beforeUnmount:k,destroyed:M,unmounted:O,render:Y,renderTracked:pe,renderTriggered:oe,errorCaptured:Ge,serverPrefetch:Ke,expose:ze,inheritAttrs:Bt,components:fn,directives:ut,filters:vs}=e;if(c&&N_(c,s,null),o)for(const ne in o){const Q=o[ne];$(Q)&&(s[ne]=Q.bind(n))}if(i){const ne=i.call(n,n);he(ne)&&(t.data=Tr(ne))}if(Oo=!0,r)for(const ne in r){const Q=r[ne],wt=$(Q)?Q.bind(n,n):$(Q.get)?Q.get.bind(n,n):mt,$t=!$(Q)&&$(Q.set)?Q.set.bind(n):mt,ht=Ze({get:wt,set:$t});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Me=>ht.value=Me})}if(a)for(const ne in a)wh(a[ne],s,n,ne);if(l){const ne=$(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(Q=>{xi(Q,ne[Q])})}u&&Ul(u,t,"c");function ve(ne,Q){V(Q)?Q.forEach(wt=>ne(wt.bind(n))):Q&&ne(Q.bind(n))}if(ve(y_,h),ve(Eh,d),ve(E_,_),ve(I_,m),ve(g_,w),ve(m_,x),ve(S_,Ge),ve(T_,pe),ve(C_,oe),ve(w_,k),ve(Ih,O),ve(b_,Ke),V(ze))if(ze.length){const ne=t.exposed||(t.exposed={});ze.forEach(Q=>{Object.defineProperty(ne,Q,{get:()=>n[Q],set:wt=>n[Q]=wt})})}else t.exposed||(t.exposed={});Y&&t.render===mt&&(t.render=Y),Bt!=null&&(t.inheritAttrs=Bt),fn&&(t.components=fn),ut&&(t.directives=ut),Ke&&mh(t)}function N_(t,e,n=mt){V(t)&&(t=xo(t));for(const s in t){const i=t[s];let r;he(i)?"default"in i?r=vt(i.from||s,i.default,!0):r=vt(i.from||s):r=vt(i),Ae(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Ul(t,e,n){It(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function wh(t,e,n,s){let i=s.includes(".")?Lh(n,s):()=>n[s];if(me(t)){const r=e[t];$(r)&&Di(i,r)}else if($(t))Di(i,t.bind(n));else if(he(t))if(V(t))t.forEach(r=>wh(r,e,n,s));else{const r=$(t.handler)?t.handler.bind(n):e[t.handler];$(r)&&Di(i,r,t)}}function Aa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Gi(l,c,o,!0)),Gi(l,e,o)),he(e)&&r.set(e,l),l}function Gi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Gi(t,r,n,!0),i&&i.forEach(o=>Gi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=k_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const k_={data:Hl,props:Wl,emits:Wl,methods:As,computed:As,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:As,directives:As,watch:x_,provide:Hl,inject:O_};function Hl(t,e){return e?t?function(){return we($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function O_(t,e){return As(xo(t),xo(e))}function xo(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function As(t,e){return t?we(Object.create(null),t,e):e}function Wl(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:we(Object.create(null),Fl(t),Fl(e??{})):e}function x_(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const s in e)n[s]=Ne(t[s],e[s]);return n}function bh(){return{app:null,config:{isNativeTag:Cp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let D_=0;function M_(t,e){return function(s,i=null){$(s)||(s=we({},s)),i!=null&&!he(i)&&(i=null);const r=bh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:D_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:_g,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&$(u.install)?(o.add(u),u.install(c,...h)):$(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const _=c._ceVNode||Ce(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(_,u):t(_,u,d),l=!0,c._container=u,u.__vue_app__=c,Nr(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(It(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Kn;Kn=c;try{return u()}finally{Kn=h}}};return c}}let Kn=null;function xi(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function vt(t,e,n=!1){const s=xe||Qe;if(s||Kn){const i=Kn?Kn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&$(e)?e.call(s&&s.proxy):e}}const Ch={},Th=()=>Object.create(Ch),Sh=t=>Object.getPrototypeOf(t)===Ch;function L_(t,e,n,s=!1){const i={},r=Th();t.propsDefaults=Object.create(null),Rh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ah(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function F_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=J(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ar(t.emitsOptions,d))continue;const _=e[d];if(l)if(X(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=sn(d);i[m]=Do(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Rh(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=Dn(h))===h||!X(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Do(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!X(e,h))&&(delete r[h],c=!0)}c&&St(t.attrs,"set","")}function Rh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Os(l))continue;const c=e[l];let u;i&&X(i,u=sn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ar(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=J(n),c=a||ie;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Do(i,l,h,c[h],t,!X(c,h))}}return o}function Do(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=fi(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Dn(n))&&(s=!0))}return s}const U_=new WeakMap;function Ah(t,e,n=!1){const s=n?U_:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!$(t)){const u=h=>{l=!0;const[d,_]=Ah(h,e,!0);we(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return he(t)&&s.set(t,jn),jn;if(V(r))for(let u=0;u<r.length;u++){const h=sn(r[u]);Vl(h)&&(o[h]=ie)}else if(r)for(const u in r){const h=sn(u);if(Vl(h)){const d=r[u],_=o[h]=V(d)||$(d)?{type:d}:we({},d),m=_.type;let w=!1,x=!0;if(V(m))for(let D=0;D<m.length;++D){const k=m[D],M=$(k)&&k.name;if(M==="Boolean"){w=!0;break}else M==="String"&&(x=!1)}else w=$(m)&&m.name==="Boolean";_[0]=w,_[1]=x,(w||X(_,"default"))&&a.push(h)}}const c=[o,a];return he(t)&&s.set(t,c),c}function Vl(t){return t[0]!=="$"&&!Os(t)}const Ph=t=>t[0]==="_"||t==="$stable",Pa=t=>V(t)?t.map(gt):[gt(t)],H_=(t,e,n)=>{if(e._n)return e;const s=Po((...i)=>Pa(e(...i)),n);return s._c=!1,s},Nh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ph(i))continue;const r=t[i];if($(r))e[i]=H_(i,r,s);else if(r!=null){const o=Pa(r);e[i]=()=>o}}},kh=(t,e)=>{const n=Pa(e);t.slots.default=()=>n},Oh=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},W_=(t,e,n)=>{const s=t.slots=Th();if(t.vnode.shapeFlag&32){const i=e._;i?(Oh(s,e,n),n&&$u(s,"_",i,!0)):Nh(e,s)}else e&&kh(t,e)},V_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Oh(i,e,n):(r=!e.$stable,Nh(e,i)),o=e}else e&&(kh(t,e),o={default:1});if(r)for(const a in i)!Ph(a)&&o[a]==null&&delete i[a]},$e=tg;function B_(t){return $_(t)}function $_(t,e){const n=br();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=mt,insertStaticContent:m}=t,w=(f,p,g,E=null,v=null,I=null,R=void 0,S=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Is(f,p)&&(E=y(f),Me(f,v,I,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:b,ref:U,shapeFlag:P}=p;switch(b){case Pr:x(f,p,g,E);break;case Sn:D(f,p,g,E);break;case to:f==null&&k(p,g,E,R);break;case _t:fn(f,p,g,E,v,I,R,S,T);break;default:P&1?Y(f,p,g,E,v,I,R,S,T):P&6?ut(f,p,g,E,v,I,R,S,T):(P&64||P&128)&&b.process(f,p,g,E,v,I,R,S,T,L)}U!=null&&v&&No(U,f&&f.ref,I,p||f,!p)},x=(f,p,g,E)=>{if(f==null)s(p.el=a(p.children),g,E);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},D=(f,p,g,E)=>{f==null?s(p.el=l(p.children||""),g,E):p.el=f.el},k=(f,p,g,E)=>{[f.el,f.anchor]=m(f.children,p,g,E,f.el,f.anchor)},M=({el:f,anchor:p},g,E)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,E),f=v;s(p,g,E)},O=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},Y=(f,p,g,E,v,I,R,S,T)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),f==null?pe(p,g,E,v,I,R,S,T):Ke(f,p,v,I,R,S,T)},pe=(f,p,g,E,v,I,R,S)=>{let T,b;const{props:U,shapeFlag:P,transition:F,dirs:B}=f;if(T=f.el=o(f.type,I,U&&U.is,U),P&8?u(T,f.children):P&16&&Ge(f.children,T,null,E,v,Zr(f,I),R,S),B&&pn(f,null,E,"created"),oe(T,f,f.scopeId,R,E),U){for(const ae in U)ae!=="value"&&!Os(ae)&&r(T,ae,null,U[ae],I,E);"value"in U&&r(T,"value",null,U.value,I),(b=U.onVnodeBeforeMount)&&ft(b,E,f)}B&&pn(f,null,E,"beforeMount");const K=j_(v,F);K&&F.beforeEnter(T),s(T,p,g),((b=U&&U.onVnodeMounted)||K||B)&&$e(()=>{b&&ft(b,E,f),K&&F.enter(T),B&&pn(f,null,E,"mounted")},v)},oe=(f,p,g,E,v)=>{if(g&&_(f,g),E)for(let I=0;I<E.length;I++)_(f,E[I]);if(v){let I=v.subTree;if(p===I||Uh(I.type)&&(I.ssContent===p||I.ssFallback===p)){const R=v.vnode;oe(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},Ge=(f,p,g,E,v,I,R,S,T=0)=>{for(let b=T;b<f.length;b++){const U=f[b]=S?Kt(f[b]):gt(f[b]);w(null,U,p,g,E,v,I,R,S)}},Ke=(f,p,g,E,v,I,R)=>{const S=p.el=f.el;let{patchFlag:T,dynamicChildren:b,dirs:U}=p;T|=f.patchFlag&16;const P=f.props||ie,F=p.props||ie;let B;if(g&&_n(g,!1),(B=F.onVnodeBeforeUpdate)&&ft(B,g,p,f),U&&pn(p,f,g,"beforeUpdate"),g&&_n(g,!0),(P.innerHTML&&F.innerHTML==null||P.textContent&&F.textContent==null)&&u(S,""),b?ze(f.dynamicChildren,b,S,g,E,Zr(p,v),I):R||Q(f,p,S,null,g,E,Zr(p,v),I,!1),T>0){if(T&16)Bt(S,P,F,g,v);else if(T&2&&P.class!==F.class&&r(S,"class",null,F.class,v),T&4&&r(S,"style",P.style,F.style,v),T&8){const K=p.dynamicProps;for(let ae=0;ae<K.length;ae++){const ee=K[ae],We=P[ee],Te=F[ee];(Te!==We||ee==="value")&&r(S,ee,We,Te,v,g)}}T&1&&f.children!==p.children&&u(S,p.children)}else!R&&b==null&&Bt(S,P,F,g,v);((B=F.onVnodeUpdated)||U)&&$e(()=>{B&&ft(B,g,p,f),U&&pn(p,f,g,"updated")},E)},ze=(f,p,g,E,v,I,R)=>{for(let S=0;S<p.length;S++){const T=f[S],b=p[S],U=T.el&&(T.type===_t||!Is(T,b)||T.shapeFlag&70)?h(T.el):g;w(T,b,U,null,E,v,I,R,!0)}},Bt=(f,p,g,E,v)=>{if(p!==g){if(p!==ie)for(const I in p)!Os(I)&&!(I in g)&&r(f,I,p[I],null,v,E);for(const I in g){if(Os(I))continue;const R=g[I],S=p[I];R!==S&&I!=="value"&&r(f,I,S,R,v,E)}"value"in g&&r(f,"value",p.value,g.value,v)}},fn=(f,p,g,E,v,I,R,S,T)=>{const b=p.el=f?f.el:a(""),U=p.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:F,slotScopeIds:B}=p;B&&(S=S?S.concat(B):B),f==null?(s(b,g,E),s(U,g,E),Ge(p.children||[],g,U,v,I,R,S,T)):P>0&&P&64&&F&&f.dynamicChildren?(ze(f.dynamicChildren,F,g,v,I,R,S),(p.key!=null||v&&p===v.subTree)&&xh(f,p,!0)):Q(f,p,g,U,v,I,R,S,T)},ut=(f,p,g,E,v,I,R,S,T)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?v.ctx.activate(p,g,E,R,T):vs(p,g,E,v,I,R,T):Ln(f,p,T)},vs=(f,p,g,E,v,I,R)=>{const S=f.component=cg(f,E,v);if(vh(f)&&(S.ctx.renderer=L),ug(S,!1,R),S.asyncDep){if(v&&v.registerDep(S,ve,R),!f.el){const T=S.subTree=Ce(Sn);D(null,T,p,g)}}else ve(S,f,p,g,v,I,R)},Ln=(f,p,g)=>{const E=p.component=f.component;if(Z_(f,p,g))if(E.asyncDep&&!E.asyncResolved){ne(E,p,g);return}else E.next=p,E.update();else p.el=f.el,E.vnode=p},ve=(f,p,g,E,v,I,R)=>{const S=()=>{if(f.isMounted){let{next:P,bu:F,u:B,parent:K,vnode:ae}=f;{const Ve=Dh(f);if(Ve){P&&(P.el=ae.el,ne(f,P,R)),Ve.asyncDep.then(()=>{f.isUnmounted||S()});return}}let ee=P,We;_n(f,!1),P?(P.el=ae.el,ne(f,P,R)):P=ae,F&&ki(F),(We=P.props&&P.props.onVnodeBeforeUpdate)&&ft(We,K,P,ae),_n(f,!0);const Te=eo(f),Xe=f.subTree;f.subTree=Te,w(Xe,Te,h(Xe.el),y(Xe),f,v,I),P.el=Te.el,ee===null&&eg(f,Te.el),B&&$e(B,v),(We=P.props&&P.props.onVnodeUpdated)&&$e(()=>ft(We,K,P,ae),v)}else{let P;const{el:F,props:B}=p,{bm:K,m:ae,parent:ee,root:We,type:Te}=f,Xe=Ls(p);if(_n(f,!1),K&&ki(K),!Xe&&(P=B&&B.onVnodeBeforeMount)&&ft(P,ee,p),_n(f,!0),F&&de){const Ve=()=>{f.subTree=eo(f),de(F,f.subTree,f,v,null)};Xe&&Te.__asyncHydrate?Te.__asyncHydrate(F,f,Ve):Ve()}else{We.ce&&We.ce._injectChildStyle(Te);const Ve=f.subTree=eo(f);w(null,Ve,g,E,f,v,I),p.el=Ve.el}if(ae&&$e(ae,v),!Xe&&(P=B&&B.onVnodeMounted)){const Ve=p;$e(()=>ft(P,ee,Ve),v)}(p.shapeFlag&256||ee&&Ls(ee.vnode)&&ee.vnode.shapeFlag&256)&&f.a&&$e(f.a,v),f.isMounted=!0,p=g=E=null}};f.scope.on();const T=f.effect=new Ku(S);f.scope.off();const b=f.update=T.run.bind(T),U=f.job=T.runIfDirty.bind(T);U.i=f,U.id=f.uid,T.scheduler=()=>Sa(U),_n(f,!0),b()},ne=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,F_(f,p.props,E,g),V_(f,p.children,g),an(),Ll(f),ln()},Q=(f,p,g,E,v,I,R,S,T=!1)=>{const b=f&&f.children,U=f?f.shapeFlag:0,P=p.children,{patchFlag:F,shapeFlag:B}=p;if(F>0){if(F&128){$t(b,P,g,E,v,I,R,S,T);return}else if(F&256){wt(b,P,g,E,v,I,R,S,T);return}}B&8?(U&16&&Ye(b,v,I),P!==b&&u(g,P)):U&16?B&16?$t(b,P,g,E,v,I,R,S,T):Ye(b,v,I,!0):(U&8&&u(g,""),B&16&&Ge(P,g,E,v,I,R,S,T))},wt=(f,p,g,E,v,I,R,S,T)=>{f=f||jn,p=p||jn;const b=f.length,U=p.length,P=Math.min(b,U);let F;for(F=0;F<P;F++){const B=p[F]=T?Kt(p[F]):gt(p[F]);w(f[F],B,g,null,v,I,R,S,T)}b>U?Ye(f,v,I,!0,!1,P):Ge(p,g,E,v,I,R,S,T,P)},$t=(f,p,g,E,v,I,R,S,T)=>{let b=0;const U=p.length;let P=f.length-1,F=U-1;for(;b<=P&&b<=F;){const B=f[b],K=p[b]=T?Kt(p[b]):gt(p[b]);if(Is(B,K))w(B,K,g,null,v,I,R,S,T);else break;b++}for(;b<=P&&b<=F;){const B=f[P],K=p[F]=T?Kt(p[F]):gt(p[F]);if(Is(B,K))w(B,K,g,null,v,I,R,S,T);else break;P--,F--}if(b>P){if(b<=F){const B=F+1,K=B<U?p[B].el:E;for(;b<=F;)w(null,p[b]=T?Kt(p[b]):gt(p[b]),g,K,v,I,R,S,T),b++}}else if(b>F)for(;b<=P;)Me(f[b],v,I,!0),b++;else{const B=b,K=b,ae=new Map;for(b=K;b<=F;b++){const Be=p[b]=T?Kt(p[b]):gt(p[b]);Be.key!=null&&ae.set(Be.key,b)}let ee,We=0;const Te=F-K+1;let Xe=!1,Ve=0;const ys=new Array(Te);for(b=0;b<Te;b++)ys[b]=0;for(b=B;b<=P;b++){const Be=f[b];if(We>=Te){Me(Be,v,I,!0);continue}let dt;if(Be.key!=null)dt=ae.get(Be.key);else for(ee=K;ee<=F;ee++)if(ys[ee-K]===0&&Is(Be,p[ee])){dt=ee;break}dt===void 0?Me(Be,v,I,!0):(ys[dt-K]=b+1,dt>=Ve?Ve=dt:Xe=!0,w(Be,p[dt],g,null,v,I,R,S,T),We++)}const Nl=Xe?q_(ys):jn;for(ee=Nl.length-1,b=Te-1;b>=0;b--){const Be=K+b,dt=p[Be],kl=Be+1<U?p[Be+1].el:E;ys[b]===0?w(null,dt,g,kl,v,I,R,S,T):Xe&&(ee<0||b!==Nl[ee]?ht(dt,g,kl,2):ee--)}}},ht=(f,p,g,E,v=null)=>{const{el:I,type:R,transition:S,children:T,shapeFlag:b}=f;if(b&6){ht(f.component.subTree,p,g,E);return}if(b&128){f.suspense.move(p,g,E);return}if(b&64){R.move(f,p,g,L);return}if(R===_t){s(I,p,g);for(let P=0;P<T.length;P++)ht(T[P],p,g,E);s(f.anchor,p,g);return}if(R===to){M(f,p,g);return}if(E!==2&&b&1&&S)if(E===0)S.beforeEnter(I),s(I,p,g),$e(()=>S.enter(I),v);else{const{leave:P,delayLeave:F,afterLeave:B}=S,K=()=>s(I,p,g),ae=()=>{P(I,()=>{K(),B&&B()})};F?F(I,K,ae):ae()}else s(I,p,g)},Me=(f,p,g,E=!1,v=!1)=>{const{type:I,props:R,ref:S,children:T,dynamicChildren:b,shapeFlag:U,patchFlag:P,dirs:F,cacheIndex:B}=f;if(P===-2&&(v=!1),S!=null&&No(S,null,g,f,!0),B!=null&&(p.renderCache[B]=void 0),U&256){p.ctx.deactivate(f);return}const K=U&1&&F,ae=!Ls(f);let ee;if(ae&&(ee=R&&R.onVnodeBeforeUnmount)&&ft(ee,p,f),U&6)Ci(f.component,g,E);else{if(U&128){f.suspense.unmount(g,E);return}K&&pn(f,null,p,"beforeUnmount"),U&64?f.type.remove(f,p,g,L,E):b&&!b.hasOnce&&(I!==_t||P>0&&P&64)?Ye(b,p,g,!1,!0):(I===_t&&P&384||!v&&U&16)&&Ye(T,p,g),E&&Fn(f)}(ae&&(ee=R&&R.onVnodeUnmounted)||K)&&$e(()=>{ee&&ft(ee,p,f),K&&pn(f,null,p,"unmounted")},g)},Fn=f=>{const{type:p,el:g,anchor:E,transition:v}=f;if(p===_t){Un(g,E);return}if(p===to){O(f);return}const I=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:S}=v,T=()=>R(g,I);S?S(f.el,I,T):T()}else I()},Un=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Ci=(f,p,g)=>{const{bum:E,scope:v,job:I,subTree:R,um:S,m:T,a:b}=f;Bl(T),Bl(b),E&&ki(E),v.stop(),I&&(I.flags|=8,Me(R,f,p,g)),S&&$e(S,p),$e(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ye=(f,p,g,E=!1,v=!1,I=0)=>{for(let R=I;R<f.length;R++)Me(f[R],p,g,E,v)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[p_];return g?d(g):p};let N=!1;const A=(f,p,g)=>{f==null?p._vnode&&Me(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,g),p._vnode=f,N||(N=!0,Ll(),fh(),N=!1)},L={p:w,um:Me,m:ht,r:Fn,mt:vs,mc:Ge,pc:Q,pbc:ze,n:y,o:t};let Z,de;return{render:A,hydrate:Z,createApp:M_(A,Z)}}function Zr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _n({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function j_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xh(t,e,n=!1){const s=t.children,i=e.children;if(V(s)&&V(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Kt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&xh(o,a)),a.type===Pr&&(a.el=o.el)}}function q_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Dh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dh(e)}function Bl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const G_=Symbol.for("v-scx"),K_=()=>vt(G_);function Di(t,e,n){return Mh(t,e,n)}function Mh(t,e,n=ie){const{immediate:s,deep:i,flush:r,once:o}=n,a=we({},n),l=e&&s||!e&&r!=="post";let c;if(Xs){if(r==="sync"){const _=K_();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=mt,_.resume=mt,_.pause=mt,_}}const u=xe;a.call=(_,m,w)=>It(_,u,m,w);let h=!1;r==="post"?a.scheduler=_=>{$e(_,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(_,m)=>{m?_():Sa(_)}),a.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=u_(t,e,a);return Xs&&(c?c.push(d):l&&d()),d}function z_(t,e,n){const s=this.proxy,i=me(t)?t.includes(".")?Lh(s,t):()=>s[t]:t.bind(s,s);let r;$(e)?r=e:(r=e.handler,n=e);const o=fi(this),a=Mh(i,r.bind(s),n);return o(),a}function Lh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Y_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${sn(e)}Modifiers`]||t[`${Dn(e)}Modifiers`];function Q_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let i=n;const r=e.startsWith("update:"),o=r&&Y_(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>me(u)?u.trim():u)),o.number&&(i=n.map(Bi)));let a,l=s[a=Gr(e)]||s[a=Gr(sn(e))];!l&&r&&(l=s[a=Gr(Dn(e))]),l&&It(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(c,t,6,i)}}function Fh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!$(t)){const l=c=>{const u=Fh(c,e,!0);u&&(a=!0,we(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(he(t)&&s.set(t,null),null):(V(r)?r.forEach(l=>o[l]=null):we(o,r),he(t)&&s.set(t,o),o)}function Ar(t,e){return!t||!Er(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,Dn(e))||X(t,e))}function eo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:m,inheritAttrs:w}=t,x=qi(t);let D,k;try{if(n.shapeFlag&4){const O=i||s,Y=O;D=gt(c.call(Y,O,u,h,_,d,m)),k=a}else{const O=e;D=gt(O.length>1?O(h,{attrs:a,slots:o,emit:l}):O(h,null)),k=e.props?a:J_(a)}}catch(O){Us.length=0,Sr(O,t,1),D=Ce(Sn)}let M=D;if(k&&w!==!1){const O=Object.keys(k),{shapeFlag:Y}=M;O.length&&Y&7&&(r&&O.some(da)&&(k=X_(k,r)),M=ns(M,k,!1,!0))}return n.dirs&&(M=ns(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Ra(M,n.transition),D=M,qi(x),D}const J_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Er(n))&&((e||(e={}))[n]=t[n]);return e},X_=(t,e)=>{const n={};for(const s in t)(!da(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Z_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?$l(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ar(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?$l(s,o,c):!0:!!o;return!1}function $l(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ar(n,r))return!0}return!1}function eg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Uh=t=>t.__isSuspense;function tg(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):f_(t)}const _t=Symbol.for("v-fgt"),Pr=Symbol.for("v-txt"),Sn=Symbol.for("v-cmt"),to=Symbol.for("v-stc"),Us=[];let qe=null;function ts(t=!1){Us.push(qe=t?null:[])}function ng(){Us.pop(),qe=Us[Us.length-1]||null}let Qs=1;function jl(t){Qs+=t,t<0&&qe&&(qe.hasOnce=!0)}function Hh(t){return t.dynamicChildren=Qs>0?qe||jn:null,ng(),Qs>0&&qe&&qe.push(t),t}function Js(t,e,n,s,i,r){return Hh(_e(t,e,n,s,i,r,!0))}function sg(t,e,n,s,i){return Hh(Ce(t,e,n,s,i,!0))}function Ki(t){return t?t.__v_isVNode===!0:!1}function Is(t,e){return t.type===e.type&&t.key===e.key}const Wh=({key:t})=>t??null,Mi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||Ae(t)||$(t)?{i:Qe,r:t,k:e,f:!!n}:t:null);function _e(t,e=null,n=null,s=0,i=null,r=t===_t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wh(e),ref:e&&Mi(e),scopeId:_h,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return a?(Na(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),Qs>0&&!o&&qe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qe.push(l),l}const Ce=ig;function ig(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===R_)&&(t=Sn),Ki(t)){const a=ns(t,e,!0);return n&&Na(a,n),Qs>0&&!r&&qe&&(a.shapeFlag&6?qe[qe.indexOf(t)]=a:qe.push(a)),a.patchFlag=-2,a}if(pg(t)&&(t=t.__vccOpts),e){e=rg(e);let{class:a,style:l}=e;a&&!me(a)&&(e.class=ga(a)),he(l)&&(Ca(l)&&!V(l)&&(l=we({},l)),e.style=_a(l))}const o=me(t)?1:Uh(t)?128:__(t)?64:he(t)?4:$(t)?2:0;return _e(t,e,n,s,i,o,r,!0)}function rg(t){return t?Ca(t)||Sh(t)?we({},t):t:null}function ns(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?og(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Wh(c),ref:e&&e.ref?n&&r?V(r)?r.concat(Mi(e)):[r,Mi(e)]:Mi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ns(t.ssContent),ssFallback:t.ssFallback&&ns(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ra(u,l.clone(u)),u}function Mo(t=" ",e=0){return Ce(Pr,null,t,e)}function Vh(t="",e=!1){return e?(ts(),sg(Sn,null,t)):Ce(Sn,null,t)}function gt(t){return t==null||typeof t=="boolean"?Ce(Sn):V(t)?Ce(_t,null,t.slice()):Ki(t)?Kt(t):Ce(Pr,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ns(t)}function Na(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Na(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Sh(e)?e._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),s&64?(n=16,e=[Mo(e)]):n=8);t.children=e,t.shapeFlag|=n}function og(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ga([e.class,s.class]));else if(i==="style")e.style=_a([e.style,s.style]);else if(Er(i)){const r=e[i],o=s[i];o&&r!==o&&!(V(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ft(t,e,n,s=null){It(t,e,7,[n,s])}const ag=bh();let lg=0;function cg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ag,r={uid:lg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ah(s,i),emitsOptions:Fh(s,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Q_.bind(null,r),t.ce&&t.ce(r),r}let xe=null,zi,Lo;{const t=br(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};zi=e("__VUE_INSTANCE_SETTERS__",n=>xe=n),Lo=e("__VUE_SSR_SETTERS__",n=>Xs=n)}const fi=t=>{const e=xe;return zi(t),t.scope.on(),()=>{t.scope.off(),zi(e)}},ql=()=>{xe&&xe.scope.off(),zi(null)};function Bh(t){return t.vnode.shapeFlag&4}let Xs=!1;function ug(t,e=!1,n=!1){e&&Lo(e);const{props:s,children:i}=t.vnode,r=Bh(t);L_(t,s,r,e),W_(t,i,n);const o=r?hg(t,e):void 0;return e&&Lo(!1),o}function hg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,A_);const{setup:s}=n;if(s){an();const i=t.setupContext=s.length>1?fg(t):null,r=fi(t),o=di(s,t,0,[t.props,i]),a=Hu(o);if(ln(),r(),(a||t.sp)&&!Ls(t)&&mh(t),a){if(o.then(ql,ql),e)return o.then(l=>{Gl(t,l,e)}).catch(l=>{Sr(l,t,0)});t.asyncDep=o}else Gl(t,o,e)}else $h(t,e)}function Gl(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=uh(e)),$h(t,n)}let Kl;function $h(t,e,n){const s=t.type;if(!t.render){if(!e&&Kl&&!s.render){const i=s.template||Aa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=we(we({isCustomElement:r,delimiters:a},o),l);s.render=Kl(i,c)}}t.render=s.render||mt}{const i=fi(t);an();try{P_(t)}finally{ln(),i()}}}const dg={get(t,e){return Se(t,"get",""),t[e]}};function fg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,dg),slots:t.slots,emit:t.emit,expose:e}}function Nr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(uh(s_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fs)return Fs[n](t)},has(e,n){return n in e||n in Fs}})):t.proxy}function pg(t){return $(t)&&"__vccOpts"in t}const Ze=(t,e)=>l_(t,e,Xs);function jh(t,e,n){const s=arguments.length;return s===2?he(e)&&!V(e)?Ki(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ki(n)&&(n=[n]),Ce(t,e,n))}const _g="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fo;const zl=typeof window<"u"&&window.trustedTypes;if(zl)try{Fo=zl.createPolicy("vue",{createHTML:t=>t})}catch{}const qh=Fo?t=>Fo.createHTML(t):t=>t,gg="http://www.w3.org/2000/svg",mg="http://www.w3.org/1998/Math/MathML",Tt=typeof document<"u"?document:null,Yl=Tt&&Tt.createElement("template"),vg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Tt.createElementNS(gg,t):e==="mathml"?Tt.createElementNS(mg,t):n?Tt.createElement(t,{is:n}):Tt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Tt.createTextNode(t),createComment:t=>Tt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Yl.innerHTML=qh(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Yl.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},yg=Symbol("_vtc");function Eg(t,e,n){const s=t[yg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ql=Symbol("_vod"),Ig=Symbol("_vsh"),wg=Symbol(""),bg=/(^|;)\s*display\s*:/;function Cg(t,e,n){const s=t.style,i=me(n);let r=!1;if(n&&!i){if(e)if(me(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Li(s,a,"")}else for(const o in e)n[o]==null&&Li(s,o,"");for(const o in n)o==="display"&&(r=!0),Li(s,o,n[o])}else if(i){if(e!==n){const o=s[wg];o&&(n+=";"+o),s.cssText=n,r=bg.test(n)}}else e&&t.removeAttribute("style");Ql in t&&(t[Ql]=r?s.display:"",t[Ig]&&(s.display="none"))}const Jl=/\s*!important$/;function Li(t,e,n){if(V(n))n.forEach(s=>Li(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Tg(t,e);Jl.test(n)?t.setProperty(Dn(s),n.replace(Jl,""),"important"):t[s]=n}}const Xl=["Webkit","Moz","ms"],no={};function Tg(t,e){const n=no[e];if(n)return n;let s=sn(e);if(s!=="filter"&&s in t)return no[e]=s;s=Bu(s);for(let i=0;i<Xl.length;i++){const r=Xl[i]+s;if(r in t)return no[e]=r}return e}const Zl="http://www.w3.org/1999/xlink";function ec(t,e,n,s,i,r=Dp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Zl,e.slice(6,e.length)):t.setAttributeNS(Zl,e,n):n==null||r&&!ju(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Et(n)?String(n):n)}function tc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?qh(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ju(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function yn(t,e,n,s){t.addEventListener(e,n,s)}function Sg(t,e,n,s){t.removeEventListener(e,n,s)}const nc=Symbol("_vei");function Rg(t,e,n,s,i=null){const r=t[nc]||(t[nc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Ag(e);if(s){const c=r[e]=kg(s,i);yn(t,a,c,l)}else o&&(Sg(t,a,o,l),r[e]=void 0)}}const sc=/(?:Once|Passive|Capture)$/;function Ag(t){let e;if(sc.test(t)){e={};let s;for(;s=t.match(sc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dn(t.slice(2)),e]}let so=0;const Pg=Promise.resolve(),Ng=()=>so||(Pg.then(()=>so=0),so=Date.now());function kg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;It(Og(s,n.value),e,5,[s])};return n.value=t,n.attached=Ng(),n}function Og(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ic=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xg=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Eg(t,s,o):e==="style"?Cg(t,n,s):Er(e)?da(e)||Rg(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dg(t,e,s,o))?(tc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ec(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!me(s))?tc(t,sn(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ec(t,e,s,o))};function Dg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ic(e)&&$(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ic(e)&&me(n)?!1:e in t}const Yi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>ki(e,n):e};function Mg(t){t.target.composing=!0}function rc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zn=Symbol("_assign"),io={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[zn]=Yi(i);const r=s||i.props&&i.props.type==="number";yn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Bi(a)),t[zn](a)}),n&&yn(t,"change",()=>{t.value=t.value.trim()}),e||(yn(t,"compositionstart",Mg),yn(t,"compositionend",rc),yn(t,"change",rc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[zn]=Yi(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Bi(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},aT={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Ir(e);yn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Bi(Qi(o)):Qi(o));t[zn](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Ta(()=>{t._assigning=!1})}),t[zn]=Yi(s)},mounted(t,{value:e}){oc(t,e)},beforeUpdate(t,e,n){t[zn]=Yi(n)},updated(t,{value:e}){t._assigning||oc(t,e)}};function oc(t,e){const n=t.multiple,s=V(e);if(!(n&&!s&&!Ir(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=Qi(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Lp(e,a)>-1}else o.selected=e.has(a);else if(Cr(Qi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Qi(t){return"_value"in t?t._value:t.value}const Lg=["ctrl","shift","alt","meta"],Fg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Lg.some(n=>t[`${n}Key`]&&!e.includes(n))},Ug=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Fg[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Hg=we({patchProp:xg},vg);let ac;function Wg(){return ac||(ac=B_(Hg))}const Vg=(...t)=>{const e=Wg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=$g(s);if(!i)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Bg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Bg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $g(t){return me(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Bn=typeof document<"u";function Gh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Gh(t.default)}const te=Object.assign;function ro(t,e){const n={};for(const s in e){const i=e[s];n[s]=ct(i)?i.map(t):t(i)}return n}const Hs=()=>{},ct=Array.isArray,Kh=/#/g,qg=/&/g,Gg=/\//g,Kg=/=/g,zg=/\?/g,zh=/\+/g,Yg=/%5B/g,Qg=/%5D/g,Yh=/%5E/g,Jg=/%60/g,Qh=/%7B/g,Xg=/%7C/g,Jh=/%7D/g,Zg=/%20/g;function ka(t){return encodeURI(""+t).replace(Xg,"|").replace(Yg,"[").replace(Qg,"]")}function em(t){return ka(t).replace(Qh,"{").replace(Jh,"}").replace(Yh,"^")}function Uo(t){return ka(t).replace(zh,"%2B").replace(Zg,"+").replace(Kh,"%23").replace(qg,"%26").replace(Jg,"`").replace(Qh,"{").replace(Jh,"}").replace(Yh,"^")}function tm(t){return Uo(t).replace(Kg,"%3D")}function nm(t){return ka(t).replace(Kh,"%23").replace(zg,"%3F")}function sm(t){return t==null?"":nm(t).replace(Gg,"%2F")}function Zs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const im=/\/$/,rm=t=>t.replace(im,"");function oo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=cm(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Zs(o)}}function om(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function am(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ss(e.matched[s],n.matched[i])&&Xh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lm(t[n],e[n]))return!1;return!0}function lm(t,e){return ct(t)?cc(t,e):ct(e)?cc(e,t):t===e}function cc(t,e){return ct(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function cm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ei;(function(t){t.pop="pop",t.push="push"})(ei||(ei={}));var Ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ws||(Ws={}));function um(t){if(!t)if(Bn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rm(t)}const hm=/^[^#]+#/;function dm(t,e){return t.replace(hm,"#")+e}function fm(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const kr=()=>({left:window.scrollX,top:window.scrollY});function pm(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=fm(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function uc(t,e){return(history.state?history.state.position-e:-1)+t}const Ho=new Map;function _m(t,e){Ho.set(t,e)}function gm(t){const e=Ho.get(t);return Ho.delete(t),e}let mm=()=>location.protocol+"//"+location.host;function Zh(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),lc(l,"")}return lc(n,t)+s+i}function vm(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=Zh(t,location),m=n.value,w=e.value;let x=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}x=w?d.position-w.position:0}else s(_);i.forEach(D=>{D(n.value,m,{delta:x,type:ei.pop,direction:x?x>0?Ws.forward:Ws.back:Ws.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(te({},d.state,{scroll:kr()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function hc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?kr():null}}function ym(t){const{history:e,location:n}=window,s={value:Zh(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:mm()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=te({},e.state,hc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=te({},i.value,e.state,{forward:l,scroll:kr()});r(u.current,u,!0);const h=te({},hc(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Em(t){t=um(t);const e=ym(t),n=vm(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:t,go:s,createHref:dm.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Im(t){return typeof t=="string"||t&&typeof t=="object"}function ed(t){return typeof t=="string"||typeof t=="symbol"}const td=Symbol("");var dc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dc||(dc={}));function is(t,e){return te(new Error,{type:t,[td]:!0},e)}function Ct(t,e){return t instanceof Error&&td in t&&(e==null||!!(t.type&e))}const fc="[^/]+?",wm={sensitive:!1,strict:!1,start:!0,end:!0},bm=/[.+*?^${}()[\]/\\]/g;function Cm(t,e){const n=te({},wm,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(bm,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:w,optional:x,regexp:D}=d;r.push({name:m,repeatable:w,optional:x});const k=D||fc;if(k!==fc){_+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${m}" (${k}): `+O.message)}}let M=w?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(M=x&&c.length<2?`(?:/${M})`:"/"+M),x&&(M+="?"),i+=M,_+=20,x&&(_+=-8),w&&(_+=-20),k===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:w,optional:x}=_,D=m in c?c[m]:"";if(ct(D)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const k=ct(D)?D.join("/"):D;if(!k)if(x)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=k}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Tm(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function nd(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Tm(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(pc(s))return 1;if(pc(i))return-1}return i.length-s.length}function pc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Sm={type:0,value:""},Rm=/[a-zA-Z0-9_]/;function Am(t){if(!t)return[[]];if(t==="/")return[[Sm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:Rm.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function Pm(t,e,n){const s=Cm(Am(t.path),n),i=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Nm(t,e){const n=[],s=new Map;e=vc({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,d,_){const m=!_,w=gc(h);w.aliasOf=_&&_.record;const x=vc(e,h),D=[w];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const Y of O)D.push(gc(te({},w,{components:_?_.record.components:w.components,path:Y,aliasOf:_?_.record:w})))}let k,M;for(const O of D){const{path:Y}=O;if(d&&Y[0]!=="/"){const pe=d.record.path,oe=pe[pe.length-1]==="/"?"":"/";O.path=d.record.path+(Y&&oe+Y)}if(k=Pm(O,d,x),_?_.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),m&&h.name&&!mc(k)&&o(h.name)),sd(k)&&l(k),w.children){const pe=w.children;for(let oe=0;oe<pe.length;oe++)r(pe[oe],k,_&&_.children[oe])}_=_||k}return M?()=>{o(M)}:Hs}function o(h){if(ed(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=xm(h,n);n.splice(d,0,h),h.record.name&&!mc(h)&&s.set(h.record.name,h)}function c(h,d){let _,m={},w,x;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw is(1,{location:h});x=_.record.name,m=te(_c(d.params,_.keys.filter(M=>!M.optional).concat(_.parent?_.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&_c(h.params,_.keys.map(M=>M.name))),w=_.stringify(m)}else if(h.path!=null)w=h.path,_=n.find(M=>M.re.test(w)),_&&(m=_.parse(w),x=_.record.name);else{if(_=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!_)throw is(1,{location:h,currentLocation:d});x=_.record.name,m=te({},d.params,h.params),w=_.stringify(m)}const D=[];let k=_;for(;k;)D.unshift(k.record),k=k.parent;return{name:x,path:w,params:m,matched:D,meta:Om(D)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function _c(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function gc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:km(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function km(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function mc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Om(t){return t.reduce((e,n)=>te(e,n.meta),{})}function vc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function xm(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;nd(t,e[r])<0?s=r:n=r+1}const i=Dm(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function Dm(t){let e=t;for(;e=e.parent;)if(sd(e)&&nd(t,e)===0)return e}function sd({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Mm(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(zh," "),o=r.indexOf("="),a=Zs(o<0?r:r.slice(0,o)),l=o<0?null:Zs(r.slice(o+1));if(a in e){let c=e[a];ct(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function yc(t){let e="";for(let n in t){const s=t[n];if(n=tm(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ct(s)?s.map(r=>r&&Uo(r)):[s&&Uo(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Lm(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ct(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Fm=Symbol(""),Ec=Symbol(""),Or=Symbol(""),id=Symbol(""),Wo=Symbol("");function ws(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(is(4,{from:n,to:e})):d instanceof Error?l(d):Im(d)?l(is(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function ao(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Gh(l)){const u=(l.__vccOpts||l)[e];u&&r.push(zt(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=jg(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&zt(_,n,s,o,a,i)()}))}}return r}function Ic(t){const e=vt(Or),n=vt(id),s=Ze(()=>{const l=ot(t.to);return e.resolve(l)}),i=Ze(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ss.bind(null,u));if(d>-1)return d;const _=wc(l[c-2]);return c>1&&wc(u)===_&&h[h.length-1].path!==_?h.findIndex(ss.bind(null,l[c-2])):d}),r=Ze(()=>i.value>-1&&Wm(n.params,s.value.params)),o=Ze(()=>i.value>-1&&i.value===n.matched.length-1&&Xh(n.params,s.value.params));function a(l={}){return Hm(l)?e[ot(t.replace)?"replace":"push"](ot(t.to)).catch(Hs):Promise.resolve()}return{route:s,href:Ze(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Um=gh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ic,setup(t,{slots:e}){const n=Tr(Ic(t)),{options:s}=vt(Or),i=Ze(()=>({[bc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:jh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Vo=Um;function Hm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Wm(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!ct(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function wc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bc=(t,e,n)=>t??e??n,Vm=gh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=vt(Wo),i=Ze(()=>t.route||s.value),r=vt(Ec,0),o=Ze(()=>{let c=ot(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ze(()=>i.value.matched[o.value]);xi(Ec,Ze(()=>o.value+1)),xi(Fm,a),xi(Wo,i);const l=En();return Di(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!ss(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Cc(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,x=jh(d,te({},m,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Cc(n.default,{Component:x,route:c})||x}}});function Cc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rd=Vm;function Bm(t){const e=Nm(t.routes,t),n=t.parseQuery||Mm,s=t.stringifyQuery||yc,i=t.history,r=ws(),o=ws(),a=ws(),l=i_(jt);let c=jt;Bn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ro.bind(null,y=>""+y),h=ro.bind(null,sm),d=ro.bind(null,Zs);function _(y,N){let A,L;return ed(y)?(A=e.getRecordMatcher(y),L=N):L=y,e.addRoute(L,A)}function m(y){const N=e.getRecordMatcher(y);N&&e.removeRoute(N)}function w(){return e.getRoutes().map(y=>y.record)}function x(y){return!!e.getRecordMatcher(y)}function D(y,N){if(N=te({},N||l.value),typeof y=="string"){const p=oo(n,y,N.path),g=e.resolve({path:p.path},N),E=i.createHref(p.fullPath);return te(p,g,{params:d(g.params),hash:Zs(p.hash),redirectedFrom:void 0,href:E})}let A;if(y.path!=null)A=te({},y,{path:oo(n,y.path,N.path).path});else{const p=te({},y.params);for(const g in p)p[g]==null&&delete p[g];A=te({},y,{params:h(p)}),N.params=h(N.params)}const L=e.resolve(A,N),Z=y.hash||"";L.params=u(d(L.params));const de=om(s,te({},y,{hash:em(Z),path:L.path})),f=i.createHref(de);return te({fullPath:de,hash:Z,query:s===yc?Lm(y.query):y.query||{}},L,{redirectedFrom:void 0,href:f})}function k(y){return typeof y=="string"?oo(n,y,l.value.path):te({},y)}function M(y,N){if(c!==y)return is(8,{from:N,to:y})}function O(y){return oe(y)}function Y(y){return O(te(k(y),{replace:!0}))}function pe(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:A}=N;let L=typeof A=="function"?A(y):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=k(L):{path:L},L.params={}),te({query:y.query,hash:y.hash,params:L.path!=null?{}:y.params},L)}}function oe(y,N){const A=c=D(y),L=l.value,Z=y.state,de=y.force,f=y.replace===!0,p=pe(A);if(p)return oe(te(k(p),{state:typeof p=="object"?te({},Z,p.state):Z,force:de,replace:f}),N||A);const g=A;g.redirectedFrom=N;let E;return!de&&am(s,L,A)&&(E=is(16,{to:g,from:L}),ht(L,L,!0,!1)),(E?Promise.resolve(E):ze(g,L)).catch(v=>Ct(v)?Ct(v,2)?v:$t(v):Q(v,g,L)).then(v=>{if(v){if(Ct(v,2))return oe(te({replace:f},k(v.to),{state:typeof v.to=="object"?te({},Z,v.to.state):Z,force:de}),N||g)}else v=fn(g,L,!0,f,Z);return Bt(g,L,v),v})}function Ge(y,N){const A=M(y,N);return A?Promise.reject(A):Promise.resolve()}function Ke(y){const N=Un.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function ze(y,N){let A;const[L,Z,de]=$m(y,N);A=ao(L.reverse(),"beforeRouteLeave",y,N);for(const p of L)p.leaveGuards.forEach(g=>{A.push(zt(g,y,N))});const f=Ge.bind(null,y,N);return A.push(f),Ye(A).then(()=>{A=[];for(const p of r.list())A.push(zt(p,y,N));return A.push(f),Ye(A)}).then(()=>{A=ao(Z,"beforeRouteUpdate",y,N);for(const p of Z)p.updateGuards.forEach(g=>{A.push(zt(g,y,N))});return A.push(f),Ye(A)}).then(()=>{A=[];for(const p of de)if(p.beforeEnter)if(ct(p.beforeEnter))for(const g of p.beforeEnter)A.push(zt(g,y,N));else A.push(zt(p.beforeEnter,y,N));return A.push(f),Ye(A)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),A=ao(de,"beforeRouteEnter",y,N,Ke),A.push(f),Ye(A))).then(()=>{A=[];for(const p of o.list())A.push(zt(p,y,N));return A.push(f),Ye(A)}).catch(p=>Ct(p,8)?p:Promise.reject(p))}function Bt(y,N,A){a.list().forEach(L=>Ke(()=>L(y,N,A)))}function fn(y,N,A,L,Z){const de=M(y,N);if(de)return de;const f=N===jt,p=Bn?history.state:{};A&&(L||f?i.replace(y.fullPath,te({scroll:f&&p&&p.scroll},Z)):i.push(y.fullPath,Z)),l.value=y,ht(y,N,A,f),$t()}let ut;function vs(){ut||(ut=i.listen((y,N,A)=>{if(!Ci.listening)return;const L=D(y),Z=pe(L);if(Z){oe(te(Z,{replace:!0}),L).catch(Hs);return}c=L;const de=l.value;Bn&&_m(uc(de.fullPath,A.delta),kr()),ze(L,de).catch(f=>Ct(f,12)?f:Ct(f,2)?(oe(f.to,L).then(p=>{Ct(p,20)&&!A.delta&&A.type===ei.pop&&i.go(-1,!1)}).catch(Hs),Promise.reject()):(A.delta&&i.go(-A.delta,!1),Q(f,L,de))).then(f=>{f=f||fn(L,de,!1),f&&(A.delta&&!Ct(f,8)?i.go(-A.delta,!1):A.type===ei.pop&&Ct(f,20)&&i.go(-1,!1)),Bt(L,de,f)}).catch(Hs)}))}let Ln=ws(),ve=ws(),ne;function Q(y,N,A){$t(y);const L=ve.list();return L.length?L.forEach(Z=>Z(y,N,A)):console.error(y),Promise.reject(y)}function wt(){return ne&&l.value!==jt?Promise.resolve():new Promise((y,N)=>{Ln.add([y,N])})}function $t(y){return ne||(ne=!y,vs(),Ln.list().forEach(([N,A])=>y?A(y):N()),Ln.reset()),y}function ht(y,N,A,L){const{scrollBehavior:Z}=t;if(!Bn||!Z)return Promise.resolve();const de=!A&&gm(uc(y.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return Ta().then(()=>Z(y,N,de)).then(f=>f&&pm(f)).catch(f=>Q(f,y,N))}const Me=y=>i.go(y);let Fn;const Un=new Set,Ci={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:w,resolve:D,options:t,push:O,replace:Y,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:wt,install(y){const N=this;y.component("RouterLink",Vo),y.component("RouterView",rd),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ot(l)}),Bn&&!Fn&&l.value===jt&&(Fn=!0,O(i.location).catch(Z=>{}));const A={};for(const Z in jt)Object.defineProperty(A,Z,{get:()=>l.value[Z],enumerable:!0});y.provide(Or,N),y.provide(id,ah(A)),y.provide(Wo,l);const L=y.unmount;Un.add(y),y.unmount=function(){Un.delete(y),Un.size<1&&(c=jt,ut&&ut(),ut=null,l.value=jt,Fn=!1,ne=!1),L()}}};function Ye(y){return y.reduce((N,A)=>N.then(()=>Ke(A)),Promise.resolve())}return Ci}function $m(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ss(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ss(c,l))||i.push(l))}return[n,s,i]}function od(){return vt(Or)}var Tc={};/**
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
 */const ad={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw hs(e)},hs=function(t){return new Error("Firebase Database ("+ad.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ld=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ld(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new qm;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cd=function(t){const e=ld(t);return Oa.encodeByteArray(e,!0)},Ji=function(t){return cd(t).replace(/\./g,"")},Xi=function(t){try{return Oa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gm(t){return ud(void 0,t)}function ud(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Km(n)||(t[n]=ud(t[n],e[n]));return t}function Km(t){return t!=="__proto__"}/**
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
 */function zm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ym=()=>zm().__FIREBASE_DEFAULTS__,Qm=()=>{if(typeof process>"u"||typeof Tc>"u")return;const t=Tc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xi(t[1]);return e&&JSON.parse(e)},xa=()=>{try{return Ym()||Qm()||Jm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hd=t=>{var e,n;return(n=(e=xa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xm=t=>{const e=hd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},dd=()=>{var t;return(t=xa())===null||t===void 0?void 0:t.config},fd=t=>{var e;return(e=xa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class xr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Zm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ji(JSON.stringify(n)),Ji(JSON.stringify(o)),""].join(".")}/**
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
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Da(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function ev(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nv(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _d(){return ad.NODE_ADMIN===!0}function sv(){try{return typeof indexedDB=="object"}catch{return!1}}function iv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const rv="FirebaseError";class cn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rv,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ov(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cn(i,a,s)}}function ov(t,e){return t.replace(av,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const av=/\{\$([^}]+)}/g;/**
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
 */function ti(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
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
 */const gd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ti(Xi(r[0])||""),n=ti(Xi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},lv=function(t){const e=gd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},cv=function(t){const e=gd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function rs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function er(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Sc(r)&&Sc(o)){if(!er(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Sc(t){return t!==null&&typeof t=="object"}/**
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
 */function ds(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ns(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class uv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function hv(t,e){const n=new dv(t,e);return n.subscribe.bind(n)}class dv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");fv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=lo),i.error===void 0&&(i.error=lo),i.complete===void 0&&(i.complete=lo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lo(){}function Ma(t,e){return`${t} failed: ${e} argument `}/**
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
 */const pv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Rn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mn="[DEFAULT]";/**
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
 */class _v{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mv(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gv(t){return t===mn?void 0:t}function mv(t){return t.instantiationMode==="EAGER"}/**
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
 */class vv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _v(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const yv={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Ev=se.INFO,Iv={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},wv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Iv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class La{constructor(e){this.name=e,this._logLevel=Ev,this._logHandler=wv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const bv=(t,e)=>e.some(n=>t instanceof n);let Rc,Ac;function Cv(){return Rc||(Rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tv(){return Ac||(Ac=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const md=new WeakMap,$o=new WeakMap,vd=new WeakMap,co=new WeakMap,Fa=new WeakMap;function Sv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Zt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&md.set(n,t)}).catch(()=>{}),Fa.set(e,t),e}function Rv(t){if($o.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});$o.set(t,e)}let jo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $o.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Av(t){jo=t(jo)}function Pv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(uo(this),e,...n);return vd.set(s,e.sort?e.sort():[e]),Zt(s)}:Tv().includes(t)?function(...e){return t.apply(uo(this),e),Zt(md.get(this))}:function(...e){return Zt(t.apply(uo(this),e))}}function Nv(t){return typeof t=="function"?Pv(t):(t instanceof IDBTransaction&&Rv(t),bv(t,Cv())?new Proxy(t,jo):t)}function Zt(t){if(t instanceof IDBRequest)return Sv(t);if(co.has(t))return co.get(t);const e=Nv(t);return e!==t&&(co.set(t,e),Fa.set(e,t)),e}const uo=t=>Fa.get(t);function kv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Zt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ov=["get","getKey","getAll","getAllKeys","count"],xv=["put","add","delete","clear"],ho=new Map;function Pc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ho.get(e))return ho.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=xv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ov.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ho.set(e,r),r}Av(t=>({...t,get:(e,n,s)=>Pc(e,n)||t.get(e,n,s),has:(e,n)=>!!Pc(e,n)||t.has(e,n)}));/**
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
 */class Dv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Mv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qo="@firebase/app",Nc="0.10.15";/**
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
 */const Mt=new La("@firebase/app"),Lv="@firebase/app-compat",Fv="@firebase/analytics-compat",Uv="@firebase/analytics",Hv="@firebase/app-check-compat",Wv="@firebase/app-check",Vv="@firebase/auth",Bv="@firebase/auth-compat",$v="@firebase/database",jv="@firebase/data-connect",qv="@firebase/database-compat",Gv="@firebase/functions",Kv="@firebase/functions-compat",zv="@firebase/installations",Yv="@firebase/installations-compat",Qv="@firebase/messaging",Jv="@firebase/messaging-compat",Xv="@firebase/performance",Zv="@firebase/performance-compat",ey="@firebase/remote-config",ty="@firebase/remote-config-compat",ny="@firebase/storage",sy="@firebase/storage-compat",iy="@firebase/firestore",ry="@firebase/vertexai",oy="@firebase/firestore-compat",ay="firebase",ly="11.0.1";/**
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
 */const Go="[DEFAULT]",cy={[qo]:"fire-core",[Lv]:"fire-core-compat",[Uv]:"fire-analytics",[Fv]:"fire-analytics-compat",[Wv]:"fire-app-check",[Hv]:"fire-app-check-compat",[Vv]:"fire-auth",[Bv]:"fire-auth-compat",[$v]:"fire-rtdb",[jv]:"fire-data-connect",[qv]:"fire-rtdb-compat",[Gv]:"fire-fn",[Kv]:"fire-fn-compat",[zv]:"fire-iid",[Yv]:"fire-iid-compat",[Qv]:"fire-fcm",[Jv]:"fire-fcm-compat",[Xv]:"fire-perf",[Zv]:"fire-perf-compat",[ey]:"fire-rc",[ty]:"fire-rc-compat",[ny]:"fire-gcs",[sy]:"fire-gcs-compat",[iy]:"fire-fst",[oy]:"fire-fst-compat",[ry]:"fire-vertex","fire-js":"fire-js",[ay]:"fire-js-all"};/**
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
 */const tr=new Map,uy=new Map,Ko=new Map;function kc(t,e){try{t.container.addComponent(e)}catch(n){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(Ko.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;Ko.set(e,t);for(const n of tr.values())kc(n,t);for(const n of uy.values())kc(n,t);return!0}function Ua(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tt(t){return t.settings!==void 0}/**
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
 */const hy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new pi("app","Firebase",hy);/**
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
 */class dy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=ly;function yd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Go,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw en.create("bad-app-name",{appName:String(i)});if(n||(n=dd()),!n)throw en.create("no-options");const r=tr.get(i);if(r){if(er(n,r.options)&&er(s,r.config))return r;throw en.create("duplicate-app",{appName:i})}const o=new vv(i);for(const l of Ko.values())o.addComponent(l);const a=new dy(n,s,o);return tr.set(i,a),a}function Ed(t=Go){const e=tr.get(t);if(!e&&t===Go&&dd())return yd();if(!e)throw en.create("no-app",{appName:t});return e}function tn(t,e,n){var s;let i=(s=cy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(a.join(" "));return}os(new Rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const fy="firebase-heartbeat-database",py=1,ni="firebase-heartbeat-store";let fo=null;function Id(){return fo||(fo=kv(fy,py,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),fo}async function _y(t){try{const n=(await Id()).transaction(ni),s=await n.objectStore(ni).get(wd(t));return await n.done,s}catch(e){if(e instanceof cn)Mt.warn(e.message);else{const n=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(n.message)}}}async function Oc(t,e){try{const s=(await Id()).transaction(ni,"readwrite");await s.objectStore(ni).put(e,wd(t)),await s.done}catch(n){if(n instanceof cn)Mt.warn(n.message);else{const s=en.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mt.warn(s.message)}}}function wd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gy=1024,my=30*24*60*60*1e3;class vy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ey(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=my}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Mt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xc(),{heartbeatsToSend:s,unsentEntries:i}=yy(this._heartbeatsCache.heartbeats),r=Ji(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Mt.warn(n),""}}}function xc(){return new Date().toISOString().substring(0,10)}function yy(t,e=gy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Dc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ey{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sv()?iv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _y(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dc(t){return Ji(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Iy(t){os(new Rn("platform-logger",e=>new Dv(e),"PRIVATE")),os(new Rn("heartbeat",e=>new vy(e),"PRIVATE")),tn(qo,Nc,t),tn(qo,Nc,"esm2017"),tn("fire-js","")}Iy("");var wy="firebase",by="11.0.1";/**
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
 */tn(wy,by,"app");function Ha(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function bd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cy=bd,Cd=new pi("auth","Firebase",bd());/**
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
 */const nr=new La("@firebase/auth");function Ty(t,...e){nr.logLevel<=se.WARN&&nr.warn(`Auth (${fs}): ${t}`,...e)}function Fi(t,...e){nr.logLevel<=se.ERROR&&nr.error(`Auth (${fs}): ${t}`,...e)}/**
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
 */function Je(t,...e){throw Va(t,...e)}function at(t,...e){return Va(t,...e)}function Wa(t,e,n){const s=Object.assign(Object.assign({},Cy()),{[e]:n});return new pi("auth","Firebase",s).create(e,{appName:t.name})}function xt(t){return Wa(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sy(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Je(t,"argument-error"),Wa(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Va(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Cd.create(t,...e)}function H(t,e,...n){if(!t)throw Va(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fi(e),new Error(e)}function Lt(t,e){t||Pt(e)}/**
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
 */function zo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ry(){return Mc()==="http:"||Mc()==="https:"}function Mc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ay(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ry()||tv()||"connection"in navigator)?navigator.onLine:!0}function Py(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lt(n>e,"Short delay should be less than long delay!"),this.isMobile=Da()||pd()}get(){return Ay()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ba(t,e){Lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Td{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ny={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ky=new _i(3e4,6e4);function un(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vt(t,e,n,s,i={}){return Sd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ds(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return ev()||(c.referrerPolicy="no-referrer"),Td.fetch()(Rd(t,t.config.apiHost,n,a),c)})}async function Sd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ny),e);try{const i=new xy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ai(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ai(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ai(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ai(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Wa(t,u,c);Je(t,u)}}catch(i){if(i instanceof cn)throw i;Je(t,"network-request-failed",{message:String(i)})}}async function gi(t,e,n,s,i={}){const r=await Vt(t,e,n,s,i);return"mfaPendingCredential"in r&&Je(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Rd(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ba(t.config,i):`${t.config.apiScheme}://${i}`}function Oy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(at(this.auth,"network-request-failed")),ky.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ai(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=at(t,e,s);return i.customData._tokenResponse=n,i}function Lc(t){return t!==void 0&&t.enterprise!==void 0}class Dy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Oy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function My(t,e){return Vt(t,"GET","/v2/recaptchaConfig",un(t,e))}/**
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
 */async function Ly(t,e){return Vt(t,"POST","/v1/accounts:delete",e)}async function Ad(t,e){return Vt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fy(t,e=!1){const n=Pe(t),s=await n.getIdToken(e),i=$a(s);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Vs(po(i.auth_time)),issuedAtTime:Vs(po(i.iat)),expirationTime:Vs(po(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function po(t){return Number(t)*1e3}function $a(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xi(n);return i?JSON.parse(i):(Fi("Failed to decode base64 JWT payload"),null)}catch(i){return Fi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fc(t){const e=$a(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function as(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof cn&&Uy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Uy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Hy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await as(t,Ad(n,{idToken:s}));H(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Pd(r.providerUserInfo):[],a=Vy(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Yo(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Wy(t){const e=Pe(t);await sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vy(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Pd(t){return t.map(e=>{var{providerId:n}=e,s=Ha(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function By(t,e){const n=await Sd(t,{},async()=>{const s=ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Rd(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Td.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $y(t,e){return Vt(t,"POST","/v2/accounts:revokeToken",un(t,e))}/**
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
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Fc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await By(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Yn;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function qt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ha(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await as(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fy(this,e)}reload(){return Wy(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await sr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(xt(this.auth));const e=await this.getIdToken();return await as(this,Ly(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,D=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:O,isAnonymous:Y,providerData:pe,stsTokenManager:oe}=n;H(M&&oe,e,"internal-error");const Ge=Yn.fromJSON(this.name,oe);H(typeof M=="string",e,"internal-error"),qt(h,e.name),qt(d,e.name),H(typeof O=="boolean",e,"internal-error"),H(typeof Y=="boolean",e,"internal-error"),qt(_,e.name),qt(m,e.name),qt(w,e.name),qt(x,e.name),qt(D,e.name),qt(k,e.name);const Ke=new Nt({uid:M,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:Y,photoURL:m,phoneNumber:_,tenantId:w,stsTokenManager:Ge,createdAt:D,lastLoginAt:k});return pe&&Array.isArray(pe)&&(Ke.providerData=pe.map(ze=>Object.assign({},ze))),x&&(Ke._redirectEventId=x),Ke}static async _fromIdTokenResponse(e,n,s=!1){const i=new Yn;i.updateFromServerResponse(n);const r=new Nt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await sr(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Pd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Yn;a.updateFromIdToken(s);const l=new Nt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Yo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Uc=new Map;function kt(t){Lt(t instanceof Function,"Expected a class definition");let e=Uc.get(t);return e?(Lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uc.set(t,e),e)}/**
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
 */class Nd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nd.type="NONE";const Hc=Nd;/**
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
 */function Ui(t,e,n){return`firebase:${t}:${e}:${n}`}class Qn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ui(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ui("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Qn(kt(Hc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||kt(Hc);const o=Ui(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Nt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Qn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Qn(r,e,s))}}/**
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
 */function Wc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ld(e))return"Blackberry";if(Fd(e))return"Webos";if(Od(e))return"Safari";if((e.includes("chrome/")||xd(e))&&!e.includes("edge/"))return"Chrome";if(Md(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function kd(t=De()){return/firefox\//i.test(t)}function Od(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xd(t=De()){return/crios\//i.test(t)}function Dd(t=De()){return/iemobile/i.test(t)}function Md(t=De()){return/android/i.test(t)}function Ld(t=De()){return/blackberry/i.test(t)}function Fd(t=De()){return/webos/i.test(t)}function ja(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jy(t=De()){var e;return ja(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qy(){return nv()&&document.documentMode===10}function Ud(t=De()){return ja(t)||Md(t)||Fd(t)||Ld(t)||/windows phone/i.test(t)||Dd(t)}/**
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
 */function Hd(t,e=[]){let n;switch(t){case"Browser":n=Wc(De());break;case"Worker":n=`${Wc(De())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${s}`}/**
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
 */class Gy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Ky(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",un(t,e))}/**
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
 */const zy=6;class Yy{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Qy{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vc(this),this.idTokenSubscription=new Vc(this),this.beforeStateQueue=new Gy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ad(this,{idToken:e}),s=await Nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Py()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(xt(this));const n=e?Pe(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ky(this),n=new Yy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await $y(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ty(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hn(t){return Pe(t)}class Vc{constructor(e){this.auth=e,this.observer=null,this.addObserver=hv(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jy(t){Mr=t}function Wd(t){return Mr.loadJS(t)}function Xy(){return Mr.recaptchaEnterpriseScript}function Zy(){return Mr.gapiScript}function eE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class tE{constructor(){this.enterprise=new nE}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class nE{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const sE="recaptcha-enterprise",Vd="NO_RECAPTCHA";class iE{constructor(e){this.type=sE,this.auth=hn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{My(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Dy(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Lc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Vd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tE().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Lc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Xy();l.length!==0&&(l+=a),Wd(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Bc(t,e,n,s=!1,i=!1){const r=new iE(t);let o;if(i)o=Vd;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Qo(t,e,n,s,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Bc(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Bc(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function rE(t,e){const n=Ua(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(er(r,e??{}))return i;Je(i,"already-initialized")}return n.initialize({options:e})}function oE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function aE(t,e,n){const s=hn(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Bd(e),{host:o,port:a}=lE(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),cE()}function Bd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lE(t){const e=Bd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:$c(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:$c(o)}}}function $c(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function uE(t,e){return Vt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function hE(t,e){return gi(t,"POST","/v1/accounts:signInWithPassword",un(t,e))}/**
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
 */async function dE(t,e){return gi(t,"POST","/v1/accounts:signInWithEmailLink",un(t,e))}async function fE(t,e){return gi(t,"POST","/v1/accounts:signInWithEmailLink",un(t,e))}/**
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
 */class si extends qa{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new si(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new si(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qo(e,n,"signInWithPassword",hE);case"emailLink":return dE(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qo(e,s,"signUpPassword",uE);case"emailLink":return fE(e,{idToken:n,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Jn(t,e){return gi(t,"POST","/v1/accounts:signInWithIdp",un(t,e))}/**
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
 */const pE="http://localhost";class An extends qa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new An(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ha(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new An(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Jn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}buildRequest(){const e={requestUri:pE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ds(n)}return e}}/**
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
 */function _E(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gE(t){const e=Ps(Ns(t)).link,n=e?Ps(Ns(e)).deep_link_id:null,s=Ps(Ns(t)).deep_link_id;return(s?Ps(Ns(s)).link:null)||s||n||e||t}class Ga{constructor(e){var n,s,i,r,o,a;const l=Ps(Ns(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=_E((i=l.mode)!==null&&i!==void 0?i:null);H(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gE(e);try{return new Ga(n)}catch{return null}}}/**
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
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ga.parseLink(n);return H(s,"argument-error"),si._fromEmailAndCode(e,s.code,s.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ka{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mi extends Ka{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yt extends mi{constructor(){super("facebook.com")}static credential(e){return An._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
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
 */class At extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return An._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return At.credential(n,s)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class Qt extends mi{constructor(){super("github.com")}static credential(e){return An._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
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
 */class Jt extends mi{constructor(){super("twitter.com")}static credential(e,n){return An._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Jt.credential(n,s)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
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
 */async function mE(t,e){return gi(t,"POST","/v1/accounts:signUp",un(t,e))}/**
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
 */class Pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Nt._fromIdTokenResponse(e,s,i),o=jc(s);return new Pn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=jc(s);return new Pn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function jc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ir extends cn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ir.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ir(e,n,s,i)}}function $d(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ir._fromErrorAndOperation(t,r,e,s):r})}async function vE(t,e,n=!1){const s=await as(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pn._forOperation(t,"link",s)}/**
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
 */async function yE(t,e,n=!1){const{auth:s}=t;if(tt(s.app))return Promise.reject(xt(s));const i="reauthenticate";try{const r=await as(t,$d(s,i,e,t),n);H(r.idToken,s,"internal-error");const o=$a(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),Pn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Je(s,"user-mismatch"),r}}/**
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
 */async function jd(t,e,n=!1){if(tt(t.app))return Promise.reject(xt(t));const s="signIn",i=await $d(t,s,e),r=await Pn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function EE(t,e){return jd(hn(t),e)}/**
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
 */async function qd(t){const e=hn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IE(t,e,n){if(tt(t.app))return Promise.reject(xt(t));const s=hn(t),o=await Qo(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mE).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&qd(t),l}),a=await Pn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function wE(t,e,n){return tt(t.app)?Promise.reject(xt(t)):EE(Pe(t),ps.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&qd(t),s})}/**
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
 */async function bE(t,e){return Vt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function CE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Pe(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await as(s,bE(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function TE(t,e,n,s){return Pe(t).onIdTokenChanged(e,n,s)}function SE(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function za(t,e,n,s){return Pe(t).onAuthStateChanged(e,n,s)}function Gd(t){return Pe(t).signOut()}const rr="__sak";/**
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
 */class Kd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rr,"1"),this.storage.removeItem(rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const RE=1e3,AE=10;class zd extends Kd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ud(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);qy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},RE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zd.type="LOCAL";const PE=zd;/**
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
 */class Yd extends Kd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yd.type="SESSION";const Qd=Yd;/**
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
 */function NE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Lr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await NE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lr.receivers=[];/**
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
 */function Ya(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ya("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yt(){return window}function OE(t){yt().location.href=t}/**
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
 */function Jd(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function xE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ME(){return Jd()?self:null}/**
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
 */const Xd="firebaseLocalStorageDb",LE=1,or="firebaseLocalStorage",Zd="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fr(t,e){return t.transaction([or],e?"readwrite":"readonly").objectStore(or)}function FE(){const t=indexedDB.deleteDatabase(Xd);return new vi(t).toPromise()}function Jo(){const t=indexedDB.open(Xd,LE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(or,{keyPath:Zd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(or)?e(s):(s.close(),await FE(),e(await Jo()))})})}async function qc(t,e,n){const s=Fr(t,!0).put({[Zd]:e,value:n});return new vi(s).toPromise()}async function UE(t,e){const n=Fr(t,!1).get(e),s=await new vi(n).toPromise();return s===void 0?null:s.value}function Gc(t,e){const n=Fr(t,!0).delete(e);return new vi(n).toPromise()}const HE=800,WE=3;class ef{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>WE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lr._getInstance(ME()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xE(),!this.activeServiceWorker)return;this.sender=new kE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jo();return await qc(e,rr,"1"),await Gc(e,rr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>qc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>UE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Fr(i,!1).getAll();return new vi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ef.type="LOCAL";const VE=ef;new _i(3e4,6e4);/**
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
 */function tf(t,e){return e?kt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qa extends qa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BE(t){return jd(t.auth,new Qa(t),t.bypassAuthState)}function $E(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),yE(n,new Qa(t),t.bypassAuthState)}async function jE(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),vE(n,new Qa(t),t.bypassAuthState)}/**
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
 */class nf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BE;case"linkViaPopup":case"linkViaRedirect":return jE;case"reauthViaPopup":case"reauthViaRedirect":return $E;default:Je(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qE=new _i(2e3,1e4);async function GE(t,e,n){if(tt(t.app))return Promise.reject(at(t,"operation-not-supported-in-this-environment"));const s=hn(t);Sy(t,e,Ka);const i=tf(s,n);return new In(s,"signInViaPopup",e,i).executeNotNull()}class In extends nf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=Ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qE.get())};e()}}In.currentPopupAction=null;/**
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
 */const KE="pendingRedirect",Hi=new Map;class zE extends nf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const s=await YE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YE(t,e){const n=XE(e),s=JE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function QE(t,e){Hi.set(t._key(),e)}function JE(t){return kt(t._redirectPersistence)}function XE(t){return Ui(KE,t.config.apiKey,t.name)}async function ZE(t,e,n=!1){if(tt(t.app))return Promise.reject(xt(t));const s=hn(t),i=tf(s,e),o=await new zE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const eI=10*60*1e3;class tI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!sf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(at(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kc(e))}saveEventToCache(e){this.cachedEventUids.add(Kc(e)),this.lastProcessedEventTime=Date.now()}}function Kc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sf(t);default:return!1}}/**
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
 */async function sI(t,e={}){return Vt(t,"GET","/v1/projects",e)}/**
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
 */const iI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rI=/^https?/;async function oI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sI(t);for(const n of e)try{if(aI(n))return}catch{}Je(t,"unauthorized-domain")}function aI(t){const e=zo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!rI.test(n))return!1;if(iI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const lI=new _i(3e4,6e4);function zc(){const t=yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cI(t){return new Promise((e,n)=>{var s,i,r;function o(){zc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zc(),n(at(t,"network-request-failed"))},timeout:lI.get()})}if(!((i=(s=yt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=yt().gapi)===null||r===void 0)&&r.load)o();else{const a=eE("iframefcb");return yt()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},Wd(`${Zy()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function uI(t){return Wi=Wi||cI(t),Wi}/**
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
 */const hI=new _i(5e3,15e3),dI="__/auth/iframe",fI="emulator/auth/iframe",pI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gI(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ba(e,fI):`https://${t.config.authDomain}/${dI}`,s={apiKey:e.apiKey,appName:t.name,v:fs},i=_I.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ds(s).slice(1)}`}async function mI(t){const e=await uI(t),n=yt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:gI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pI,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=yt().setTimeout(()=>{r(o)},hI.get());function l(){yt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const vI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yI=500,EI=600,II="_blank",wI="http://localhost";class Yc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bI(t,e,n,s=yI,i=EI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},vI),{width:s.toString(),height:i.toString(),top:r,left:o}),c=De().toLowerCase();n&&(a=xd(c)?II:n),kd(c)&&(e=e||wI,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(jy(c)&&a!=="_self")return CI(e||"",a),new Yc(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Yc(h)}function CI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const TI="__/auth/handler",SI="emulator/auth/handler",RI=encodeURIComponent("fac");async function Qc(t,e,n,s,i,r){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:fs,eventId:i};if(e instanceof Ka){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof mi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${RI}=${encodeURIComponent(l)}`:"";return`${AI(t)}?${ds(a).slice(1)}${c}`}function AI({config:t}){return t.emulator?Ba(t,SI):`https://${t.authDomain}/${TI}`}/**
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
 */const _o="webStorageSupport";class PI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qd,this._completeRedirectFn=ZE,this._overrideRedirectResult=QE}async _openPopup(e,n,s,i){var r;Lt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Qc(e,n,s,zo(),i);return bI(e,o,Ya())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Qc(e,n,s,zo(),i);return OE(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Lt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await mI(e),s=new tI(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_o,{type:_o},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[_o];o!==void 0&&n(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ud()||Od()||ja()}}const NI=PI;var Jc="@firebase/auth",Xc="1.8.0";/**
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
 */class kI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xI(t){os(new Rn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hd(t)},c=new Qy(s,i,r,l);return oE(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),os(new Rn("auth-internal",e=>{const n=hn(e.getProvider("auth").getImmediate());return(s=>new kI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Jc,Xc,OI(t)),tn(Jc,Xc,"esm2017")}/**
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
 */const DI=5*60,MI=fd("authIdTokenMaxAge")||DI;let Zc=null;const LI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>MI)return;const i=n==null?void 0:n.token;Zc!==i&&(Zc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rf(t=Ed()){const e=Ua(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rE(t,{popupRedirectResolver:NI,persistence:[VE,PE,Qd]}),s=fd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=LI(r.toString());SE(n,o,()=>o(n.currentUser)),TE(n,a=>o(a))}}const i=hd("auth");return i&&aE(n,`http://${i}`),n}function FI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Jy({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=at("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",FI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xI("Browser");const UI={apiKey:"AIzaSyBtUg2Ykyr3wm5QnNyAIxr2Z3ax4RxWeJo",authDomain:"finanzas-personales1.firebaseapp.com",projectId:"finanzas-personales1",storageBucket:"finanzas-personales1.firebasestorage.app",messagingSenderId:"408370866115",appId:"1:408370866115:web:1941c5c6f7f3e42a03ff76"},HI=yd(UI),Xo=rf(HI),of=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},WI={key:0},VI={__name:"App",setup(t){const e=En(!1),n=od();za(Xo,i=>{e.value=!!i});const s=async()=>{await Gd(Xo),e.value=!1,n.push("/auth")};return(i,r)=>(ts(),Js(_t,null,[_e("header",null,[e.value?(ts(),Js("nav",WI,[Ce(ot(Vo),{to:"/dashboard"},{default:Po(()=>r[0]||(r[0]=[Mo("Dashboard")])),_:1}),Ce(ot(Vo),{to:"/transactions"},{default:Po(()=>r[1]||(r[1]=[Mo("Transactions")])),_:1}),_e("button",{onClick:s},"Logout")])):Vh("",!0)]),_e("main",null,[Ce(ot(rd))])],64))}},BI=of(VI,[["__scopeId","data-v-2c13bb39"]]),$I="modulepreload",jI=function(t){return"/"+t},eu={},tu=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=jI(l),l in eu)return;eu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":$I,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,_)=>{h.addEventListener("load",d),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},go=En(null),bs=rf(),qI=new At;function GI(){return Eh(()=>{za(bs,i=>{go.value=i})}),{user:go,login:async(i,r)=>{try{await wE(bs,i,r)}catch{console.error("Error al iniciar sesión")}ks.push("/dashboard")},logout:async()=>{try{await Gd(bs),go.value=null,ks.push("/auth")}catch{console.error("Error al cerrar sesión")}},register:async(i,r,o)=>{try{const a=await IE(bs,i,r);console.log("Registro exitoso"),await CE(a.user,{displayName:o})}catch{console.error("Hubo un error al crear la cuenta")}ks.push("/dashboard")},signInWithGoogle:async()=>{try{await GE(bs,qI)&&ks.push("/dashboard")}catch{console.error("Error de autenticación de Google")}}}}const KI={class:"inputs"},zI={key:0},YI={type:"submit"},QI={__name:"Auth",setup(t){const e=En(!0),n=En(""),s=En(""),i=En(""),r=od(),{login:o,register:a,signInWithGoogle:l}=GI(),c=()=>{e.value=!e.value},u=async()=>{try{e.value?(await o(n.value,s.value),console.log("Inicio de sesión exitoso")):(await a(n.value,s.value,i.value),console.log("Registro exitoso")),console.log("Redirigiendo al dashboard"),r.push("/dashboard")}catch{}};return(h,d)=>(ts(),Js("div",null,[_e("h1",null,Oi(e.value?"Iniciar Sesión":"Registro"),1),_e("form",{onSubmit:Ug(u,["prevent"])},[_e("div",KI,[e.value?Vh("",!0):(ts(),Js("div",zI,[d[4]||(d[4]=_e("label",{for:"username"},"Username",-1)),Jr(_e("input",{id:"username","onUpdate:modelValue":d[0]||(d[0]=_=>i.value=_),type:"text",required:""},null,512),[[io,i.value]])])),_e("div",null,[d[5]||(d[5]=_e("label",{for:"email"},"Email",-1)),Jr(_e("input",{id:"email","onUpdate:modelValue":d[1]||(d[1]=_=>n.value=_),type:"email",required:""},null,512),[[io,n.value]])]),_e("div",null,[d[6]||(d[6]=_e("label",{for:"password"},"Password",-1)),Jr(_e("input",{id:"password","onUpdate:modelValue":d[2]||(d[2]=_=>s.value=_),type:"password",required:""},null,512),[[io,s.value]])]),_e("button",{onClick:d[3]||(d[3]=(..._)=>ot(l)&&ot(l)(..._))},"Iniciar Sesion con Google")]),_e("button",YI,Oi(e.value?"Iniciar Sesion":"Registrarme"),1)],32),_e("p",{onClick:c,style:{cursor:"pointer"}},Oi(e.value?"Aun no tienes una cuenta?":"Ya tenes una cuenta? Inicia sesión"),1)]))}},JI=of(QI,[["__scopeId","data-v-f3dd1720"]]),XI={__name:"AuthView",setup(t){return(e,n)=>(ts(),Js("div",null,[Ce(JI)]))}};var nu={};const su="@firebase/database",iu="1.0.9";/**
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
 */let af="";function ZI(t){af=t}/**
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
 */class ew{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ti(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const lf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ew(e)}}catch{}return new tw},wn=lf("localStorage"),nw=lf("sessionStorage");/**
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
 */const Xn=new La("@firebase/database"),sw=function(){let t=1;return function(){return t++}}(),cf=function(t){const e=pv(t),n=new uv;n.update(e);const s=n.digest();return Oa.encodeByteArray(s)},yi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=yi.apply(null,s):typeof s=="object"?e+=Ie(s):e+=s,e+=" "}return e};let Bs=null,ru=!0;const iw=function(t,e){C(!e,"Can't turn on custom loggers persistently."),Xn.logLevel=se.VERBOSE,Bs=Xn.log.bind(Xn)},Re=function(...t){if(ru===!0&&(ru=!1,Bs===null&&nw.get("logging_enabled")===!0&&iw()),Bs){const e=yi.apply(null,t);Bs(e)}},Ei=function(t){return function(...e){Re(t,...e)}},Zo=function(...t){const e="FIREBASE INTERNAL ERROR: "+yi(...t);Xn.error(e)},Ft=function(...t){const e=`FIREBASE FATAL ERROR: ${yi(...t)}`;throw Xn.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+yi(...t);Xn.warn(e)},rw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ow=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ls="[MIN_NAME]",Nn="[MAX_NAME]",_s=function(t,e){if(t===e)return 0;if(t===ls||e===Nn)return-1;if(e===ls||t===Nn)return 1;{const n=ou(t),s=ou(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},aw=function(t,e){return t===e?0:t<e?-1:1},Cs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},Ja=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ie(e[s]),n+=":",n+=Ja(t[e[s]]);return n+="}",n},hf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const df=function(t){C(!uf(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},lw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const hw=new RegExp("^-?(0*)\\d{1,10}$"),dw=-2147483648,fw=2147483647,ou=function(t){if(hw.test(t)){const e=Number(t);if(e>=dw&&e<=fw)return e}return null},gs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},pw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$s=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class _w{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class Vi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vi.OWNER="owner";/**
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
 */const Xa="5",ff="v",pf="s",_f="r",gf="f",mf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vf="ls",yf="p",ea="ac",Ef="websocket",If="long_polling";/**
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
 */class wf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bf(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===Ef)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===If)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mw(t)&&(n.ns=t.namespace);const i=[];return He(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class vw{constructor(){this.counters_={}}incrementCounter(e,n=1){Wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Gm(this.counters_)}}/**
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
 */const mo={},vo={};function Za(t){const e=t.toString();return mo[e]||(mo[e]=new vw),mo[e]}function yw(t,e){const n=t.toString();return vo[n]||(vo[n]=e()),vo[n]}/**
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
 */class Ew{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&gs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const au="start",Iw="close",ww="pLPCommand",bw="pRTLPCB",Cf="id",Tf="pw",Sf="ser",Cw="cb",Tw="seg",Sw="ts",Rw="d",Aw="dframe",Rf=1870,Af=30,Pw=Rf-Af,Nw=25e3,kw=3e4;class $n{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ei(e),this.stats_=Za(n),this.urlFn=l=>(this.appCheckToken&&(l[ea]=this.appCheckToken),bf(n,If,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ew(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kw)),ow(()=>{if(this.isClosed_)return;this.scriptTagHolder=new el((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===au)this.id=a,this.password=l;else if(o===Iw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[au]="t",s[Sf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Cw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ff]=Xa,this.transportSessionId&&(s[pf]=this.transportSessionId),this.lastSessionId&&(s[vf]=this.lastSessionId),this.applicationId&&(s[yf]=this.applicationId),this.appCheckToken&&(s[ea]=this.appCheckToken),typeof location<"u"&&location.hostname&&mf.test(location.hostname)&&(s[_f]=gf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$n.forceAllow_=!0}static forceDisallow(){$n.forceDisallow_=!0}static isAvailable(){return $n.forceAllow_?!0:!$n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lw()&&!cw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=cd(n),i=hf(s,Pw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Aw]="t",s[Cf]=e,s[Tf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class el{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sw(),window[ww+this.uniqueCallbackIdentifier]=e,window[bw+this.uniqueCallbackIdentifier]=n,this.myIFrame=el.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Re("frame writing exception"),a.stack&&Re(a.stack),Re(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cf]=this.myID,e[Tf]=this.myPW,e[Sf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Af+s.length<=Rf;){const o=this.pendingSegs.shift();s=s+"&"+Tw+i+"="+o.seg+"&"+Sw+i+"="+o.ts+"&"+Rw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Nw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Ow=16384,xw=45e3;let ar=null;typeof MozWebSocket<"u"?ar=MozWebSocket:typeof WebSocket<"u"&&(ar=WebSocket);class et{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ei(this.connId),this.stats_=Za(n),this.connURL=et.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ff]=Xa,typeof location<"u"&&location.hostname&&mf.test(location.hostname)&&(o[_f]=gf),n&&(o[pf]=n),s&&(o[vf]=s),i&&(o[ea]=i),r&&(o[yf]=r),bf(e,Ef,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wn.set("previous_websocket_failure",!0);try{let s;_d(),this.mySock=new ar(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ar!==null&&!et.forceDisallow_}static previouslyFailed(){return wn.isInMemoryStorage||wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ti(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=hf(n,Ow);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}et.responsesRequiredToBeHealthy=2;et.healthyTimeout=3e4;/**
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
 */class ii{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$n,et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=et&&et.isAvailable();let s=n&&!et.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[et];else{const i=this.transports_=[];for(const r of ii.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ii.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ii.globalTransportInitialized_=!1;/**
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
 */const Dw=6e4,Mw=5e3,Lw=10*1024,Fw=100*1024,yo="t",lu="d",Uw="s",cu="r",Hw="e",uu="o",hu="a",du="n",fu="p",Ww="h";class Vw{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ei("c:"+this.id+":"),this.transportManager_=new ii(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$s(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Fw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Lw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yo in e){const n=e[yo];n===hu?this.upgradeIfSecondaryHealthy_():n===cu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===uu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Cs("t",e),s=Cs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:du,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Cs("t",e),s=Cs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Cs(yo,e);if(lu in e){const s=e[lu];if(n===Ww){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===du){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Uw?this.onConnectionShutdown_(s):n===cu?this.onReset_(s):n===Hw?Zo("Server Error: "+s):n===uu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xa!==s&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),$s(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Dw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$s(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Mw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Pf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Nf{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class lr extends Nf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Da()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new lr}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const pu=32,_u=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new re("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function rn(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function kf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Bw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Of(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function xf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ge(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new re(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return Le(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function tl(t,e){if(rn(t)!==rn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function nt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(rn(t)>rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class $w{constructor(e,n){this.errorPrefix_=n,this.parts_=Of(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Dr(this.parts_[s]);Df(this)}}function jw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Dr(e),Df(t)}function qw(t){const e=t.parts_.pop();t.byteLength_-=Dr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Df(t){if(t.byteLength_>_u)throw new Error(t.errorPrefix_+"has a key path longer than "+_u+" bytes ("+t.byteLength_+").");if(t.parts_.length>pu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pu+") or object contains a cycle "+vn(t))}function vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class nl extends Nf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new nl}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ts=1e3,Gw=60*5*1e3,gu=30*1e3,Kw=1.3,zw=3e4,Yw="server_kill",mu=3;class Dt extends Pf{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Dt.nextPersistentConnectionId_++,this.log_=Ei("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ts,this.maxReconnectDelay_=Gw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!_d())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&lr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ie(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new xr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Dt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Wt(e,"w")){const s=rs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=lv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zo("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zw&&(this.reconnectDelay_=Ts),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Vw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ue(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Yw)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ue(h),l())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bo(this.interruptReasons_)&&(this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ja(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new re(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mu&&(this.reconnectDelay_=gu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+af.replace(/\./g,"-")]=1,Da()?e["framework.cordova"]=1:pd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=lr.getInstance().currentlyOnline();return Bo(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0;Dt.nextConnectionId_=0;/**
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
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
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
 */class Ur{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new q(ls,e),i=new q(ls,n);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
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
 */let Pi;class Mf extends Ur{static get __EMPTY_NODE(){return Pi}static set __EMPTY_NODE(e){Pi=e}compare(e,n){return _s(e.name,n.name)}isDefinedOn(e){throw hs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(Nn,Pi)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,Pi)}toString(){return".key"}}const Zn=new Mf;/**
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
 */class Ni{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ee.RED,this.left=i??Fe.EMPTY_NODE,this.right=r??Fe.EMPTY_NODE}copy(e,n,s,i,r){return new Ee(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Fe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class Qw{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ni(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ni(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ni(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ni(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new Qw;/**
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
 */function Jw(t,e){return _s(t.name,e.name)}function sl(t,e){return _s(t,e)}/**
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
 */let ta;function Xw(t){ta=t}const Lf=function(t){return typeof t=="number"?"number:"+df(t):"string:"+t},Ff=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Wt(e,".sv"),"Priority must be a string or number.")}else C(t===ta||t.isEmpty(),"priority of unexpected type.");C(t===ta||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let vu;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ff(this.priorityNode_)}static set __childrenNodeConstructor(e){vu=e}static get __childrenNodeConstructor(){return vu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:j(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=df(this.value_):e+=this.value_,this.lazyHash_=cf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Uf,Hf;function Zw(t){Uf=t}function eb(t){Hf=t}class tb extends Ur{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?_s(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(Nn,new ye("[PRIORITY-POST]",Hf))}makePost(e,n){const s=Uf(e);return new q(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new tb;/**
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
 */const nb=Math.log(2);class sb{constructor(e){const n=r=>parseInt(Math.log(r)/nb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),w=i(_+1,c);return h=t[_],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,m,w)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,w){const x=h-m,D=h;h-=m;const k=i(x+1,D),M=t[x],O=n?n(M):M;_(new Ee(O,M.node,w,null,k))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const w=l.nextBitIsOne(),x=Math.pow(2,l.count-(m+1));w?d(x,Ee.BLACK):(d(x,Ee.BLACK),d(x,Ee.RED))}return u},o=new sb(t.length),a=r(o);return new Fe(s||e,a)};/**
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
 */let Eo;const Wn={};class Ot{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Wn&&fe,"ChildrenNode.ts has not been loaded"),Eo=Eo||new Ot({".priority":Wn},{".priority":fe}),Eo}get(e){const n=rs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return Wt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Zn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=cr(s,e.getCompare()):a=Wn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ot(u,c)}addToIndexes(e,n){const s=Zi(this.indexes_,(i,r)=>{const o=rs(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===Wn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),cr(a,o.getCompare())}else return Wn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new Ot(s,this.indexSet_)}removeFromIndexes(e,n){const s=Zi(this.indexes_,i=>{if(i===Wn)return i;{const r=n.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new Ot(s,this.indexSet_)}}/**
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
 */let Ss;class W{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ff(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ss||(Ss=new W(new Fe(sl),null,Ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ss}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ss:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ss:this.priorityNode_;return new W(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{C(j(e)!==".priority"||rn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,a)=>{n[o]=a.val(e),s++,r&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lf(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ii?-1:0}withIndex(e){if(e===Zn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),i=n.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zn?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ib extends W{constructor(){super(new Fe(sl),W.EMPTY_NODE,Ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Ii=new ib;Object.defineProperties(q,{MIN:{value:new q(ls,W.EMPTY_NODE)},MAX:{value:new q(Nn,Ii)}});Mf.__EMPTY_NODE=W.EMPTY_NODE;ye.__childrenNodeConstructor=W;Xw(Ii);eb(Ii);/**
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
 */const rb=!0;function be(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,be(e))}if(!(t instanceof Array)&&rb){const n=[];let s=!1;if(He(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=be(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return W.EMPTY_NODE;const r=cr(n,Jw,o=>o.name,sl);if(s){const o=cr(n,fe.getCompare());return new W(r,be(e),new Ot({".priority":o},{".priority":fe}))}else return new W(r,be(e),Ot.Default)}else{let n=W.EMPTY_NODE;return He(t,(s,i)=>{if(Wt(t,s)&&s.substring(0,1)!=="."){const r=be(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(be(e))}}Zw(be);/**
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
 */class ob extends Ur{constructor(e){super(),this.indexPath_=e,C(!G(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?_s(e.name,n.name):r}makePost(e,n){const s=be(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Ii);return new q(Nn,e)}toString(){return Of(this.indexPath_,0).join("/")}}/**
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
 */class ab extends Ur{compare(e,n){const s=e.node.compareTo(n.node);return s===0?_s(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const s=be(e);return new q(n,s)}toString(){return".value"}}const lb=new ab;/**
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
 */function Wf(t){return{type:"value",snapshotNode:t}}function cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ri(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function oi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class il{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ri(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(cs(n,s)):o.trackChildChange(oi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(ri(i,r))}),n.isLeafNode()||n.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(oi(i,r,o))}else s.trackChildChange(cs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ai{constructor(e){this.indexedFilter_=new il(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ai.getStartPost_(e),this.endPost_=ai.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new q(n,s))||(s=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const r=this;return n.forEachChild(fe,(o,a)=>{r.matches(new q(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class ub{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ai(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new q(n,s))||(s=W.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new q(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(oi(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ri(n,h));const w=a.updateImmediateChild(n,W.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(cs(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ri(c.name,c.node)),r.trackChildChange(cs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,W.EMPTY_NODE)):e}}/**
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
 */class rl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ls}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new rl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hb(t){return t.loadsAllData()?new il(t.getIndex()):t.hasLimit()?new ub(t):new ai(t)}function yu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===lb?n="$value":t.index_===Zn?n="$key":(C(t.index_ instanceof ob,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ie(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ie(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ie(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Eu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class ur extends Pf{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ei("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ur.getListenId_(e,s),a={};this.listens_[o]=a;const l=yu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),rs(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=ur.getListenId_(e,n);delete this.listens_[s]}get(e){const n=yu(e._queryParams),s=e._path.toString(),i=new xr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ds(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ti(a.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class db{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function hr(){return{value:null,children:new Map}}function Vf(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,hr());const i=t.children.get(s);e=ce(e),Vf(i,e,n)}}function na(t,e,n){t.value!==null?n(e,t.value):fb(t,(s,i)=>{const r=new re(e.toString()+"/"+s);na(i,r,n)})}function fb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class pb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Iu=10*1e3,_b=30*1e3,gb=5*60*1e3;class mb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pb(e);const s=Iu+(_b-Iu)*Math.random();$s(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;He(e,(i,r)=>{r>0&&Wt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),$s(this.reportStats_.bind(this),Math.floor(Math.random()*2*gb))}}/**
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
 */var st;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function Bf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ol(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function al(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class dr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=st.ACK_USER_WRITE,this.source=Bf()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new dr(z(),n,this.revert)}}else return C(j(this.path)===e,"operationForChild called for unrelated child."),new dr(ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class li{constructor(e,n){this.source=e,this.path=n,this.type=st.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new li(this.source,z()):new li(this.source,ce(this.path))}}/**
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
 */class kn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=st.OVERWRITE}operationForChild(e){return G(this.path)?new kn(this.source,z(),this.snap.getImmediateChild(e)):new kn(this.source,ce(this.path),this.snap)}}/**
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
 */class ci{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=st.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new kn(this.source,z(),n.value):new ci(this.source,z(),n)}else return C(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ci(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class On{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class vb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yb(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(cb(o.childName,o.snapshotNode))}),Rs(t,i,"child_removed",e,s,n),Rs(t,i,"child_added",e,s,n),Rs(t,i,"child_moved",r,s,n),Rs(t,i,"child_changed",e,s,n),Rs(t,i,"value",e,s,n),i}function Rs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Ib(t,a,l)),o.forEach(a=>{const l=Eb(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Eb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ib(t,e,n){if(e.childName==null||n.childName==null)throw hs("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Hr(t,e){return{eventCache:t,serverCache:e}}function js(t,e,n,s){return Hr(new On(e,n,s),t.serverCache)}function $f(t,e,n,s){return Hr(t.eventCache,new On(e,n,s))}function sa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Io;const wb=()=>(Io||(Io=new Fe(aw)),Io);class ue{constructor(e,n=wb()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return He(e,(s,i)=>{n=n.set(new re(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(G(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:ge(new re(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new ue(null)}}set(e,n){if(G(e))return new ue(n,this.children);{const s=j(e),r=(this.children.get(s)||new ue(null)).set(ce(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(G(e))return n;{const s=j(e),r=(this.children.get(s)||new ue(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ge(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(G(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),ge(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,s){if(G(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),ge(n,i),s):new ue(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ge(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class lt{constructor(e){this.writeTree_=e}static empty(){return new lt(new ue(null))}}function qs(t,e,n){if(G(e))return new lt(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Le(i,e);return r=r.updateChild(o,n),new lt(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new lt(r)}}}function wu(t,e,n){let s=t;return He(n,(i,r)=>{s=qs(s,ge(e,i),r)}),s}function bu(t,e){if(G(e))return lt.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new lt(n)}}function ia(t,e){return Mn(t,e)!=null}function Mn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function Cu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,i)=>{e.push(new q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function nn(t,e){if(G(e))return t;{const n=Mn(t,e);return n!=null?new lt(new ue(n)):new lt(t.writeTree_.subtree(e))}}function ra(t){return t.writeTree_.isEmpty()}function us(t,e){return jf(z(),t.writeTree_,e)}function jf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=jf(ge(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ge(t,".priority"),s)),n}}/**
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
 */function ll(t,e){return zf(e,t)}function bb(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=qs(t.visibleWrites,e,n)),t.lastWriteId=s}function Cb(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Tb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Sb(a,s.path)?i=!1:nt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Rb(t),!0;if(s.snap)t.visibleWrites=bu(t.visibleWrites,s.path);else{const a=s.children;He(a,l=>{t.visibleWrites=bu(t.visibleWrites,ge(s.path,l))})}return!0}else return!1}function Sb(t,e){if(t.snap)return nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nt(ge(t.path,n),e))return!0;return!1}function Rb(t){t.visibleWrites=qf(t.allWrites,Ab,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ab(t){return t.visible}function qf(t,e,n){let s=lt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)nt(n,o)?(a=Le(n,o),s=qs(s,a,r.snap)):nt(o,n)&&(a=Le(o,n),s=qs(s,z(),r.snap.getChild(a)));else if(r.children){if(nt(n,o))a=Le(n,o),s=wu(s,a,r.children);else if(nt(o,n))if(a=Le(o,n),G(a))s=wu(s,z(),r.children);else{const l=rs(r.children,j(a));if(l){const c=l.getChild(ce(a));s=qs(s,z(),c)}}}else throw hs("WriteRecord should have .snap or .children")}}return s}function Gf(t,e,n,s,i){if(!s&&!i){const r=Mn(t.visibleWrites,e);if(r!=null)return r;{const o=nn(t.visibleWrites,e);if(ra(o))return n;if(n==null&&!ia(o,z()))return null;{const a=n||W.EMPTY_NODE;return us(o,a)}}}else{const r=nn(t.visibleWrites,e);if(!i&&ra(r))return n;if(!i&&n==null&&!ia(r,z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(nt(c.path,e)||nt(e,c.path))},a=qf(t.allWrites,o,e),l=n||W.EMPTY_NODE;return us(a,l)}}}function Pb(t,e,n){let s=W.EMPTY_NODE;const i=Mn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=nn(t.visibleWrites,e);return n.forEachChild(fe,(o,a)=>{const l=us(nn(r,new re(o)),a);s=s.updateImmediateChild(o,l)}),Cu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=nn(t.visibleWrites,e);return Cu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Nb(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ge(e,n);if(ia(t.visibleWrites,r))return null;{const o=nn(t.visibleWrites,r);return ra(o)?i.getChild(n):us(o,i.getChild(n))}}function kb(t,e,n,s){const i=ge(e,n),r=Mn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=nn(t.visibleWrites,i);return us(o,s.getNode().getImmediateChild(n))}else return null}function Ob(t,e){return Mn(t.visibleWrites,e)}function xb(t,e,n,s,i,r,o){let a;const l=nn(t.visibleWrites,e),c=Mn(l,z());if(c!=null)a=c;else if(n!=null)a=us(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Db(){return{visibleWrites:lt.empty(),allWrites:[],lastWriteId:-1}}function fr(t,e,n,s){return Gf(t.writeTree,t.treePath,e,n,s)}function cl(t,e){return Pb(t.writeTree,t.treePath,e)}function Tu(t,e,n,s){return Nb(t.writeTree,t.treePath,e,n,s)}function pr(t,e){return Ob(t.writeTree,ge(t.treePath,e))}function Mb(t,e,n,s,i,r){return xb(t.writeTree,t.treePath,e,n,s,i,r)}function ul(t,e,n){return kb(t.writeTree,t.treePath,e,n)}function Kf(t,e){return zf(ge(t.treePath,e),t.writeTree)}function zf(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Lb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,oi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ri(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,cs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,oi(s,e.snapshotNode,i.oldSnap));else throw hs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Fb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Yf=new Fb;class hl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new On(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ul(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xn(this.viewCache_),r=Mb(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Ub(t){return{filter:t}}function Hb(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Wb(t,e,n,s,i){const r=new Lb;let o,a;if(n.type===st.OVERWRITE){const c=n;c.source.fromUser?o=oa(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=_r(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===st.MERGE){const c=n;c.source.fromUser?o=Bb(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=aa(t,e,c.path,c.children,s,i,a,r))}else if(n.type===st.ACK_USER_WRITE){const c=n;c.revert?o=qb(t,e,c.path,s,i,r):o=$b(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===st.LISTEN_COMPLETE)o=jb(t,e,n.path,s,r);else throw hs("Unknown operation type: "+n.type);const l=r.getChanges();return Vb(e,o,l),{viewCache:o,changes:l}}function Vb(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=sa(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Wf(sa(e)))}}function Qf(t,e,n,s,i,r){const o=e.eventCache;if(pr(s,n)!=null)return e;{let a,l;if(G(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xn(e),u=c instanceof W?c:W.EMPTY_NODE,h=cl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=fr(s,xn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=j(n);if(c===".priority"){C(rn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Tu(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ce(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Tu(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ul(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return js(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function _r(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=j(n);if(!l.isCompleteForPath(n)&&rn(n)>1)return e;const m=ce(n),x=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),_,x,m,Yf,null)}const h=$f(e,c,l.isFullyInitialized()||G(n),u.filtersNodes()),d=new hl(i,h,r);return Qf(t,h,n,i,d,a)}function oa(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new hl(i,e,r);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=js(e,c,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=js(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ce(n),_=a.getNode().getImmediateChild(h);let m;if(G(d))m=s;else{const w=u.getCompleteChild(h);w!=null?kf(d)===".priority"&&w.getChild(xf(d)).isEmpty()?m=w:m=w.updateChild(d,s):m=W.EMPTY_NODE}if(_.equals(m))l=e;else{const w=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=js(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Su(t,e){return t.eventCache.isCompleteForChild(e)}function Bb(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ge(n,l);Su(e,j(u))&&(a=oa(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ge(n,l);Su(e,j(u))||(a=oa(t,a,u,c,i,r,o))}),a}function Ru(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function aa(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;G(n)?c=s:c=new ue(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Ru(t,_,d);l=_r(t,l,new re(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),w=Ru(t,m,d);l=_r(t,l,new re(h),w,i,r,o,a)}}),l}function $b(t,e,n,s,i,r,o){if(pr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return _r(t,e,n,l.getNode().getChild(n),i,r,a,o);if(G(n)){let c=new ue(null);return l.getNode().forEachChild(Zn,(u,h)=>{c=c.set(new re(u),h)}),aa(t,e,n,c,i,r,a,o)}else return e}else{let c=new ue(null);return s.foreach((u,h)=>{const d=ge(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),aa(t,e,n,c,i,r,a,o)}}function jb(t,e,n,s,i){const r=e.serverCache,o=$f(e,r.getNode(),r.isFullyInitialized()||G(n),r.isFiltered());return Qf(t,o,n,s,Yf,i)}function qb(t,e,n,s,i,r){let o;if(pr(s,n)!=null)return e;{const a=new hl(s,e,i),l=e.eventCache.getNode();let c;if(G(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=fr(s,xn(e));else{const h=e.serverCache.getNode();C(h instanceof W,"serverChildren would be complete if leaf node"),u=cl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=j(n);let h=ul(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,W.EMPTY_NODE,ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fr(s,xn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||pr(s,z())!=null,js(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Gb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new il(s.getIndex()),r=hb(s);this.processor_=Ub(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(W.EMPTY_NODE,a.getNode(),null),u=new On(l,o.isFullyInitialized(),i.filtersNodes()),h=new On(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Hr(h,u),this.eventGenerator_=new vb(this.query_)}get query(){return this.query_}}function Kb(t){return t.viewCache_.serverCache.getNode()}function zb(t,e){const n=xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Au(t){return t.eventRegistrations_.length===0}function Yb(t,e){t.eventRegistrations_.push(e)}function Pu(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Nu(t,e,n,s){e.type===st.MERGE&&e.source.queryId!==null&&(C(xn(t.viewCache_),"We should always have a full cache before handling merges"),C(sa(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Wb(t.processor_,i,e,n,s);return Hb(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Jf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Qb(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(r,o)=>{s.push(cs(r,o))}),n.isFullyInitialized()&&s.push(Wf(n.getNode())),Jf(t,s,n.getNode(),e)}function Jf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return yb(t.eventGenerator_,e,n,i)}/**
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
 */let gr;class Jb{constructor(){this.views=new Map}}function Xb(t){C(!gr,"__referenceConstructor has already been defined"),gr=t}function Zb(){return C(gr,"Reference.ts has not been loaded"),gr}function eC(t){return t.views.size===0}function dl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Nu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Nu(o,e,n,s));return r}}function tC(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=fr(n,i?s:null),l=!1;a?l=!0:s instanceof W?(a=cl(n,s),l=!1):(a=W.EMPTY_NODE,l=!1);const c=Hr(new On(a,l,!1),new On(s,i,!1));return new Gb(e,c)}return o}function nC(t,e,n,s,i,r){const o=tC(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Yb(o,n),Qb(o,n)}function sC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=on(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Pu(c,n,s)),Au(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Pu(l,n,s)),Au(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!on(t)&&r.push(new(Zb())(e._repo,e._path)),{removed:r,events:o}}function Xf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function es(t,e){let n=null;for(const s of t.views.values())n=n||zb(s,e);return n}function Zf(t,e){if(e._queryParams.loadsAllData())return Wr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ep(t,e){return Zf(t,e)!=null}function on(t){return Wr(t)!=null}function Wr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let mr;function iC(t){C(!mr,"__referenceConstructor has already been defined"),mr=t}function rC(){return C(mr,"Reference.ts has not been loaded"),mr}let oC=1;class ku{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=Db(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tp(t,e,n,s,i){return bb(t.pendingWriteTree_,e,n,s,i),i?wi(t,new kn(Bf(),e,n)):[]}function bn(t,e,n=!1){const s=Cb(t.pendingWriteTree_,e);if(Tb(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(z(),!0):He(s.children,o=>{r=r.set(new re(o),!0)}),wi(t,new dr(s.path,r,n))}else return[]}function Vr(t,e,n){return wi(t,new kn(ol(),e,n))}function aC(t,e,n){const s=ue.fromObject(n);return wi(t,new ci(ol(),e,s))}function lC(t,e){return wi(t,new li(ol(),e))}function cC(t,e,n){const s=pl(t,n);if(s){const i=_l(s),r=i.path,o=i.queryId,a=Le(r,e),l=new li(al(o),a);return gl(t,r,l)}else return[]}function la(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ep(o,e))){const l=sC(o,e,n,s);eC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>on(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=dC(d);for(let m=0;m<_.length;++m){const w=_[m],x=w.query,D=ip(t,w);t.listenProvider_.startListening(Gs(x),vr(t,x),D.hashFn,D.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Gs(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Br(d));t.listenProvider_.stopListening(Gs(d),_)}))}fC(t,c)}return a}function uC(t,e,n,s){const i=pl(t,s);if(i!=null){const r=_l(i),o=r.path,a=r.queryId,l=Le(o,e),c=new kn(al(a),l,n);return gl(t,o,c)}else return[]}function hC(t,e,n,s){const i=pl(t,s);if(i){const r=_l(i),o=r.path,a=r.queryId,l=Le(o,e),c=ue.fromObject(n),u=new ci(al(a),l,c);return gl(t,o,u)}else return[]}function Ou(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=Le(d,i);r=r||es(_,m),o=o||on(_)});let a=t.syncPointTree_.get(i);a?(o=o||on(a),r=r||es(a,z())):(a=new Jb,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const w=es(m,z());w&&(r=r.updateImmediateChild(_,w))}));const c=ep(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Br(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=pC();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=ll(t.pendingWriteTree_,i);let h=nC(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Zf(a,e);h=h.concat(_C(t,e,d))}return h}function fl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Le(o,e),c=es(a,l);if(c)return c});return Gf(i,e,r,n,!0)}function wi(t,e){return np(e,t.syncPointTree_,null,ll(t.pendingWriteTree_,z()))}function np(t,e,n,s){if(G(t.path))return sp(t,e,n,s);{const i=e.get(z());n==null&&i!=null&&(n=es(i,z()));let r=[];const o=j(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Kf(s,o);r=r.concat(np(a,l,c,u))}return i&&(r=r.concat(dl(i,t,s,n))),r}}function sp(t,e,n,s){const i=e.get(z());n==null&&i!=null&&(n=es(i,z()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Kf(s,o),u=t.operationForChild(o);u&&(r=r.concat(sp(u,a,l,c)))}),i&&(r=r.concat(dl(i,t,s,n))),r}function ip(t,e){const n=e.query,s=vr(t,n);return{hashFn:()=>(Kb(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?cC(t,n._path,s):lC(t,n._path);{const r=uw(i,n);return la(t,n,null,r)}}}}function vr(t,e){const n=Br(e);return t.queryToTagMap.get(n)}function Br(t){return t._path.toString()+"$"+t._queryIdentifier}function pl(t,e){return t.tagToQueryMap.get(e)}function _l(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function gl(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=ll(t.pendingWriteTree_,e);return dl(s,n,i,null)}function dC(t){return t.fold((e,n,s)=>{if(n&&on(n))return[Wr(n)];{let i=[];return n&&(i=Xf(n)),He(s,(r,o)=>{i=i.concat(o)}),i}})}function Gs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(rC())(t._repo,t._path):t}function fC(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Br(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function pC(){return oC++}function _C(t,e,n){const s=e._path,i=vr(t,e),r=ip(t,n),o=t.listenProvider_.startListening(Gs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!on(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!G(c)&&u&&on(u))return[Wr(u).query];{let d=[];return u&&(d=d.concat(Xf(u).map(_=>_.query))),He(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Gs(u),vr(t,u))}}return o}/**
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
 */class ml{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ml(n)}node(){return this.node_}}class vl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new vl(this.syncTree_,n)}node(){return fl(this.syncTree_,this.path_)}}const gC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xu=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vC(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},vC=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},yC=function(t,e,n,s){return yl(e,new vl(n,t),s)},rp=function(t,e,n){return yl(t,new ml(e),n)};function yl(t,e,n){const s=t.getPriority().val(),i=xu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=xu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,be(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(fe,(a,l)=>{const c=yl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class El{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Il(t,e){let n=e instanceof re?e:new re(e),s=t,i=j(n);for(;i!==null;){const r=rs(s.node.children,i)||{children:{},childCount:0};s=new El(i,s,r),n=ce(n),i=j(n)}return s}function ms(t){return t.node.value}function op(t,e){t.node.value=e,ca(t)}function ap(t){return t.node.childCount>0}function EC(t){return ms(t)===void 0&&!ap(t)}function $r(t,e){He(t.node.children,(n,s)=>{e(new El(n,t,s))})}function lp(t,e,n,s){n&&!s&&e(t),$r(t,i=>{lp(i,e,!0,s)}),n&&s&&e(t)}function IC(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bi(t){return new re(t.parent===null?t.name:bi(t.parent)+"/"+t.name)}function ca(t){t.parent!==null&&wC(t.parent,t.name,t)}function wC(t,e,n){const s=EC(n),i=Wt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ca(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ca(t))}/**
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
 */const bC=/[\[\].#$\/\u0000-\u001F\u007F]/,CC=/[\[\].#$\u0000-\u001F\u007F]/,wo=10*1024*1024,cp=function(t){return typeof t=="string"&&t.length!==0&&!bC.test(t)},up=function(t){return typeof t=="string"&&t.length!==0&&!CC.test(t)},TC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),up(t)},hp=function(t,e,n,s){s&&e===void 0||wl(Ma(t,"value"),e,n)},wl=function(t,e,n){const s=n instanceof re?new $w(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vn(s));if(typeof e=="function")throw new Error(t+"contains a function "+vn(s)+" with contents = "+e.toString());if(uf(e))throw new Error(t+"contains "+e.toString()+" "+vn(s));if(typeof e=="string"&&e.length>wo/3&&Dr(e)>wo)throw new Error(t+"contains a string greater than "+wo+" utf8 bytes "+vn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(He(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!cp(o)))throw new Error(t+" contains an invalid key ("+o+") "+vn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jw(s,o),wl(t,a,s),qw(s)}),i&&r)throw new Error(t+' contains ".value" child '+vn(s)+" in addition to actual children.")}},dp=function(t,e,n,s){if(!up(n))throw new Error(Ma(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SC=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dp(t,e,n)},fp=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},RC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!TC(n))throw new Error(Ma(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class AC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!tl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function pp(t,e,n){bl(t,n),_p(t,s=>tl(s,e))}function Ut(t,e,n){bl(t,n),_p(t,s=>nt(s,e)||nt(e,s))}function _p(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(PC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Bs&&Re("event: "+n.toString()),gs(s)}}}/**
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
 */const NC="repo_interrupt",kC=25;class OC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hr(),this.transactionQueueTree_=new El,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xC(t,e,n){if(t.stats_=Za(t.repoInfo_),t.forceRestClient_||pw())t.server_=new ur(t.repoInfo_,(s,i,r,o)=>{Du(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Dt(t.repoInfo_,e,(s,i,r,o)=>{Du(t,s,i,r,o)},s=>{Mu(t,s)},s=>{DC(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=yw(t.repoInfo_,()=>new mb(t.stats_,t.server_)),t.infoData_=new db,t.infoSyncTree_=new ku({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Vr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Tl(t,"connected",!1),t.serverSyncTree_=new ku({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ut(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function gp(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Cl(t){return gC({timestamp:gp(t)})}function Du(t,e,n,s,i){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Zi(n,c=>be(c));o=hC(t.serverSyncTree_,r,l,i)}else{const l=be(n);o=uC(t.serverSyncTree_,r,l,i)}else if(s){const l=Zi(n,c=>be(c));o=aC(t.serverSyncTree_,r,l)}else{const l=be(n);o=Vr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=jr(t,r)),Ut(t.eventQueue_,a,o)}function Mu(t,e){Tl(t,"connected",e),e===!1&&LC(t)}function DC(t,e){He(e,(n,s)=>{Tl(t,n,s)})}function Tl(t,e,n){const s=new re("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(s,i);const r=Vr(t.infoSyncTree_,s,i);Ut(t.eventQueue_,s,r)}function mp(t){return t.nextWriteId_++}function MC(t,e,n,s,i){Sl(t,"set",{path:e.toString(),value:n,priority:s});const r=Cl(t),o=be(n,s),a=fl(t.serverSyncTree_,e),l=rp(o,a,r),c=mp(t),u=tp(t.serverSyncTree_,e,l,c,!0);bl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||Ue("set at "+e+" failed: "+d);const w=bn(t.serverSyncTree_,c,!m);Ut(t.eventQueue_,e,w),WC(t,i,d,_)});const h=wp(t,e);jr(t,h),Ut(t.eventQueue_,h,[])}function LC(t){Sl(t,"onDisconnectEvents");const e=Cl(t),n=hr();na(t.onDisconnect_,z(),(i,r)=>{const o=yC(i,r,t.serverSyncTree_,e);Vf(n,i,o)});let s=[];na(n,z(),(i,r)=>{s=s.concat(Vr(t.serverSyncTree_,i,r));const o=wp(t,i);jr(t,o)}),t.onDisconnect_=hr(),Ut(t.eventQueue_,z(),s)}function FC(t,e,n){let s;j(e._path)===".info"?s=Ou(t.infoSyncTree_,e,n):s=Ou(t.serverSyncTree_,e,n),pp(t.eventQueue_,e._path,s)}function UC(t,e,n){let s;j(e._path)===".info"?s=la(t.infoSyncTree_,e,n):s=la(t.serverSyncTree_,e,n),pp(t.eventQueue_,e._path,s)}function HC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(NC)}function Sl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function WC(t,e,n,s){e&&gs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function vp(t,e,n){return fl(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function Rl(t,e=t.transactionQueueTree_){if(e||qr(t,e),ms(e)){const n=Ep(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&VC(t,bi(e),n)}else ap(e)&&$r(e,n=>{Rl(t,n)})}function VC(t,e,n){const s=n.map(c=>c.currentWriteId),i=vp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Le(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Sl(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(bn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();qr(t,Il(t.transactionQueueTree_,e)),Rl(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)gs(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ue("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}jr(t,e)}},o)}function jr(t,e){const n=yp(t,e),s=bi(n),i=Ep(t,n);return BC(t,i,s),s}function BC(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Le(n,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kC)u=!0,h="maxretry",i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=vp(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){wl("transaction failed: Data returned ",_,l.path);let m=be(_);typeof _=="object"&&_!=null&&Wt(_,".priority")||(m=m.updatePriority(d.getPriority()));const x=l.currentWriteId,D=Cl(t),k=rp(m,d,D);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=k,l.currentWriteId=mp(t),o.splice(o.indexOf(x),1),i=i.concat(tp(t.serverSyncTree_,l.path,k,l.currentWriteId,l.applyLocally)),i=i.concat(bn(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0))}Ut(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}qr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)gs(s[a]);Rl(t,t.transactionQueueTree_)}function yp(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&ms(s)===void 0;)s=Il(s,n),e=ce(e),n=j(e);return s}function Ep(t,e){const n=[];return Ip(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ip(t,e,n){const s=ms(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);$r(e,i=>{Ip(t,i,n)})}function qr(t,e){const n=ms(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,op(e,n.length>0?n:void 0)}$r(e,s=>{qr(t,s)})}function wp(t,e){const n=bi(yp(t,e)),s=Il(t.transactionQueueTree_,e);return IC(s,i=>{bo(t,i)}),bo(t,s),lp(s,i=>{bo(t,i)}),n}function bo(t,e){const n=ms(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?op(e,void 0):n.length=r+1,Ut(t.eventQueue_,bi(e),i);for(let o=0;o<s.length;o++)gs(s[o])}}/**
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
 */function $C(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lu=function(t,e){const n=qC(t),s=n.namespace;n.domain==="firebase.com"&&Ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new wf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new re(n.pathString)}},qC=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=$C(t.substring(u,h)));const d=jC(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Fu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",GC=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Fu.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Fu.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class KC{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class zC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class YC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Al{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:kf(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=Eu(this._queryParams),n=Ja(e);return n==="{}"?"default":n}get _queryObject(){return Eu(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof Al))return!1;const n=this._repo===e._repo,s=tl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Bw(this._path)}}class dn extends Al{constructor(e,n){super(e,n,new rl,!1)}get parent(){const e=xf(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),s=ui(this.ref,e);return new yr(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new yr(i,ui(this.ref,s),fe)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lT(t,e){return t=Pe(t),t._checkNotDeleted("ref"),e!==void 0?ui(t._root,e):t._root}function ui(t,e){return t=Pe(t),j(t._path)===null?SC("child","path",e):dp("child","path",e),new dn(t._repo,ge(t._path,e))}function cT(t,e){t=Pe(t),fp("push",t._path),hp("push",e,t._path,!0);const n=gp(t._repo),s=GC(n),i=ui(t,s),r=ui(t,s);let o;return e!=null?o=QC(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function QC(t,e){t=Pe(t),fp("set",t._path),hp("set",e,t._path,!1);const n=new xr;return MC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Pl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new KC("value",this,new yr(e.snapshotNode,new dn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zC(this,e,n):null}matches(e){return e instanceof Pl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function JC(t,e,n,s,i){const r=new YC(n,void 0),o=new Pl(r);return FC(t._repo,t,o),()=>UC(t._repo,t,o)}function uT(t,e,n,s){return JC(t,"value",e)}Xb(dn);iC(dn);/**
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
 */const XC="FIREBASE_DATABASE_EMULATOR_HOST",ua={};let ZC=!1;function eT(t,e,n,s){t.repoInfo_=new wf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function tT(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lu(r,i),a=o.repoInfo,l;typeof process<"u"&&nu&&(l=nu[XC]),l?(r=`http://${l}?ns=${a.namespace}`,o=Lu(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new gw(t.name,t.options,e);RC("Invalid Firebase Database URL",o),G(o.path)||Ft("Database URL must point to the root of a Firebase Database (not including a child path).");const u=sT(a,t,c,new _w(t.name,n));return new iT(u,t)}function nT(t,e){const n=ua[e];(!n||n[t.key]!==t)&&Ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),HC(t),delete n[t.key]}function sT(t,e,n,s){let i=ua[e.name];i||(i={},ua[e.name]=i);let r=i[t.toURLString()];return r&&Ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new OC(t,ZC,n,s),i[t.toURLString()]=r,r}class iT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(nT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ft("Cannot call "+e+" on a deleted database.")}}function hT(t=Ed(),e){const n=Ua(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Xm("database");s&&rT(n,...s)}return n}function rT(t,e,n,s={}){t=Pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ft("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Vi(Vi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Zm(s.mockUserToken,t.app.options.projectId);r=new Vi(o)}eT(i,e,n,r)}/**
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
 */function oT(t){ZI(fs),os(new Rn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return tT(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tn(su,iu,t),tn(su,iu,"esm2017")}Dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};oT();const Uu=(t,e,n)=>{const s=za(Xo,i=>{s(),i?n():n("/auth")})},ks=Bm({history:Em("/"),routes:[{path:"/auth",name:"Auth",component:XI},{path:"/dashboard",name:"Dashboard",component:()=>tu(()=>import("./DashboardView-F8CXdqX5.js"),[]),beforeEnter:Uu},{path:"/transactions",name:"Transactions",component:()=>tu(()=>import("./AddTransactionsView-DOF4MEwX.js"),[]),beforeEnter:Uu}]}),bp=Vg(BI);bp.use(ks);bp.mount("#app");export{io as A,Ug as B,cT as C,_t as F,Ih as a,ts as b,Js as c,gh as d,_e as e,Ce as f,Vh as g,jh as h,Ca as i,GI as j,hT as k,za as l,Xo as m,Ta as n,Eh as o,Oi as p,lT as q,En as r,i_ as s,J as t,ot as u,_g as v,Di as w,uT as x,Jr as y,aT as z};
