import{n as l,w as q,r as x,s as k,x as v}from"./scheduler.7dcbbb9c.js";const u=[];function z(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let r;const n=new Set;function c(t){if(k(e,t)&&(e=t,r)){const i=!u.length;for(const s of n)s[1](),u.push(s,e);if(i){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function f(t){c(t(e))}function b(t,i=l){const s=[t,i];return n.add(s),n.size===1&&(r=o(c,f)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:c,update:f,subscribe:b}}function E(e,o,r){const n=!Array.isArray(e),c=n?[e]:e;if(!c.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const f=o.length<2;return z(r,(b,t)=>{let i=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const a=o(n?s[0]:s,b,t);f?b(a):p=v(a)?a:l},w=c.map((a,_)=>q(a,m=>{s[_]=m,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){x(w),p(),i=!1}})}var h;const T=((h=globalThis.__sveltekit_1s9yicf)==null?void 0:h.base)??"";var y;const S=((y=globalThis.__sveltekit_1s9yicf)==null?void 0:y.assets)??T;export{S as a,T as b,E as d,A as w};
