import{n as l,w as m,r as q,s as k,x as v}from"./scheduler.de284fb6.js";const c=[];function z(e,i){return{subscribe:A(e,i).subscribe}}function A(e,i=l){let r;const n=new Set;function a(t){if(k(e,t)&&(e=t,r)){const o=!c.length;for(const s of n)s[1](),c.push(s,e);if(o){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function f(t){a(t(e))}function b(t,o=l){const s=[t,o];return n.add(s),n.size===1&&(r=i(a,f)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:f,subscribe:b}}function E(e,i,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const f=i.length<2;return z(r,(b,t)=>{let o=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const u=i(n?s[0]:s,b,t);f?b(u):p=v(u)?u:l},w=a.map((u,_)=>m(u,x=>{s[_]=x,d&=~(1<<_),o&&g()},()=>{d|=1<<_}));return o=!0,g(),function(){q(w),p(),o=!1}})}var h;const T=((h=globalThis.__sveltekit_9fx06t)==null?void 0:h.base)??"";var y;const S=((y=globalThis.__sveltekit_9fx06t)==null?void 0:y.assets)??T;export{S as a,T as b,E as d,A as w};
