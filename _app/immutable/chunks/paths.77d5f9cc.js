import{n as l,w as q,r as x,s as j,x as k}from"./scheduler.7dcbbb9c.js";const c=[];function v(e,o){return{subscribe:z(e,o).subscribe}}function z(e,o=l){let r;const n=new Set;function a(t){if(j(e,t)&&(e=t,r)){const i=!c.length;for(const s of n)s[1](),c.push(s,e);if(i){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function b(t){a(t(e))}function f(t,i=l){const s=[t,i];return n.add(s),n.size===1&&(r=o(a,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:b,subscribe:f}}function B(e,o,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return v(r,(f,t)=>{let i=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const u=o(n?s[0]:s,f,t);b?f(u):p=k(u)?u:l},m=a.map((u,_)=>q(u,w=>{s[_]=w,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){x(m),p(),i=!1}})}var h;const A=((h=globalThis.__sveltekit_1mijge7)==null?void 0:h.base)??"";var y;const E=((y=globalThis.__sveltekit_1mijge7)==null?void 0:y.assets)??A;export{E as a,A as b,B as d,z as w};
