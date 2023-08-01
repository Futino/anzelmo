import{s as re,n as J,e as oe,i as Z,h as ee}from"../chunks/scheduler.7dcbbb9c.js";import{S as ne,i as ce,g,h as b,C as R,k as p,a as V,y as ie,f as _,r as ue,s as I,u as fe,c as z,j as D,v as he,x as h,d as S,b as de,t as O,w as me,z as pe,m as B,n as P,o as L,p as _e}from"../chunks/index.bfca9504.js";import{e as te}from"../chunks/each.433e5a29.js";import{c as q,H as ve}from"../chunks/Header.02a02395.js";import{p as ge}from"../chunks/photoDatum.c8038fe4.js";function be(f){let e,o='<h1 class="body-large p-2 text-secondary-on-dark">Remove</h1>',t,r;return{c(){e=g("button"),e.innerHTML=o,this.h()},l(s){e=b(s,"BUTTON",{class:!0,["data-svelte-h"]:!0}),R(e)!=="svelte-tnc6cz"&&(e.innerHTML=o),this.h()},h(){p(e,"class","rounded-md bg-secondary-dark")},m(s,l){V(s,e,l),t||(r=ie(e,"click",f[2]),t=!0)},p:J,i:J,o:J,d(s){s&&_(e),t=!1,r()}}}function xe(f,e,o){let t;oe(f,q,u=>o(3,t=u));let{photoData:r}=e;const s=()=>{let u;t.photos.forEach(d=>{d.label==r.label&&(u=d.id)}),Z(q,t.photos=t.photos.filter(d=>d.id!==u),t),Z(q,t.total-=r.price,t)},l=()=>s();return f.$$set=u=>{"photoData"in u&&o(1,r=u.photoData)},[s,r,l]}class ke extends ne{constructor(e){super(),ce(this,e,xe,be,re,{photoData:1})}}function ae(f,e,o){const t=f.slice();return t[6]=e[o].photoData,t[7]=e[o].count,t}function le(f){let e,o="Your Cart is Empty.",t,r,s="You can click on me to go to the shop.";return{c(){e=g("h1"),e.textContent=o,t=I(),r=g("a"),r.textContent=s,this.h()},l(l){e=b(l,"H1",{class:!0,["data-svelte-h"]:!0}),R(e)!=="svelte-1yzzmgf"&&(e.textContent=o),t=z(l),r=b(l,"A",{href:!0,class:!0,["data-svelte-h"]:!0}),R(r)!=="svelte-39vjsn"&&(r.textContent=s),this.h()},h(){p(e,"class","title-medium"),p(r,"href","/shop"),p(r,"class","title-medium underline-animation")},m(l,u){V(l,e,u),V(l,t,u),V(l,r,u)},d(l){l&&(_(e),_(t),_(r))}}}function se(f){let e,o,t,r,s,l,u,d,x=f[6].label+"",C,N,w,m=f[6].album+"",$,n,H,a,c=f[6].price+"",i,E,j,A=f[7]+"",U,Y,M,T;return M=new ke({props:{photoData:f[6]}}),{c(){e=g("div"),o=g("img"),r=I(),s=g("div"),l=g("div"),u=g("h1"),d=g("span"),C=B(x),N=I(),w=g("h1"),$=B(m),n=I(),H=g("h1"),a=B("$"),i=B(c),E=I(),j=g("h1"),U=B(A),Y=I(),ue(M.$$.fragment),this.h()},l(v){e=b(v,"DIV",{class:!0});var k=D(e);o=b(k,"IMG",{src:!0,alt:!0,class:!0}),r=z(k),s=b(k,"DIV",{class:!0});var y=D(s);l=b(y,"DIV",{class:!0});var F=D(l);u=b(F,"H1",{class:!0});var K=D(u);d=b(K,"SPAN",{class:!0});var Q=D(d);C=P(Q,x),Q.forEach(_),K.forEach(_),N=z(F),w=b(F,"H1",{class:!0});var W=D(w);$=P(W,m),W.forEach(_),F.forEach(_),n=z(y),H=b(y,"H1",{class:!0});var G=D(H);a=P(G,"$"),i=P(G,c),G.forEach(_),E=z(y),j=b(y,"H1",{class:!0});var X=D(j);U=P(X,A),X.forEach(_),Y=z(y),fe(M.$$.fragment,y),y.forEach(_),k.forEach(_),this.h()},h(){ee(o.src,t=f[6].path)||p(o,"src",t),p(o,"alt",""),p(o,"class","w-[20%] aspect-square rounded-l-md"),p(d,"class","block"),p(u,"class","title-medium"),p(w,"class","body-medium font-light"),p(l,"class","flex flex-col text-left"),p(H,"class","title-large font-light"),p(j,"class","title-large font-light"),p(s,"class","text-center text-surface-variant-on-dark flex flex-row justify-between px-2 md:px-4 gap-x-3 pr-3 items-center w-full"),p(e,"class","flex flex-row items-center gap-3 bg-surface-variant-dark rounded-md max-w-3xl")},m(v,k){V(v,e,k),h(e,o),h(e,r),h(e,s),h(s,l),h(l,u),h(u,d),h(d,C),h(l,N),h(l,w),h(w,$),h(s,n),h(s,H),h(H,a),h(H,i),h(s,E),h(s,j),h(j,U),h(s,Y),he(M,s,null),T=!0},p(v,k){(!T||k&1&&!ee(o.src,t=v[6].path))&&p(o,"src",t),(!T||k&1)&&x!==(x=v[6].label+"")&&L(C,x),(!T||k&1)&&m!==(m=v[6].album+"")&&L($,m),(!T||k&1)&&c!==(c=v[6].price+"")&&L(i,c),(!T||k&1)&&A!==(A=v[7]+"")&&L(U,A);const y={};k&1&&(y.photoData=v[6]),M.$set(y)},i(v){T||(S(M.$$.fragment,v),T=!0)},o(v){O(M.$$.fragment,v),T=!1},d(v){v&&_(e),me(M)}}}function Ce(f){let e,o,t,r,s,l,u,d="Proceed To Checkout",x,C,N,w;e=new ve({});let m=f[0].length==0&&le(),$=te(f[0]),n=[];for(let a=0;a<$.length;a+=1)n[a]=se(ae(f,$,a));const H=a=>O(n[a],1,1,()=>{n[a]=null});return{c(){ue(e.$$.fragment),o=I(),t=g("main"),m&&m.c(),r=I();for(let a=0;a<n.length;a+=1)n[a].c();s=I(),l=g("button"),u=g("h1"),u.textContent=d,this.h()},l(a){fe(e.$$.fragment,a),o=z(a),t=b(a,"MAIN",{class:!0});var c=D(t);m&&m.l(c),r=z(c);for(let E=0;E<n.length;E+=1)n[E].l(c);s=z(c),l=b(c,"BUTTON",{class:!0});var i=D(l);u=b(i,"H1",{class:!0,["data-svelte-h"]:!0}),R(u)!=="svelte-1pfgx6c"&&(u.textContent=d),i.forEach(_),c.forEach(_),this.h()},h(){p(u,"class","headline-medium py-3 px-12 text-secondary-container-on-dark"),p(l,"class",x="fixed bottom-0 mb-8 md:mb-14 m-6 rounded-md mx-auto "+(f[0].length==0?"bg-surface-variant-dark/30 text-red-700 hover:cursor-not-allowed":"bg-secondary-container-dark")),p(t,"class","my-32 mx-3 flex flex-col gap-8 items-center mb-44")},m(a,c){he(e,a,c),V(a,o,c),V(a,t,c),m&&m.m(t,null),h(t,r);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(t,null);h(t,s),h(t,l),h(l,u),C=!0,N||(w=ie(l,"click",f[2]),N=!0)},p(a,[c]){if(a[0].length==0?m||(m=le(),m.c(),m.m(t,r)):m&&(m.d(1),m=null),c&1){$=te(a[0]);let i;for(i=0;i<$.length;i+=1){const E=ae(a,$,i);n[i]?(n[i].p(E,c),S(n[i],1)):(n[i]=se(E),n[i].c(),S(n[i],1),n[i].m(t,s))}for(_e(),i=$.length;i<n.length;i+=1)H(i);de()}(!C||c&1&&x!==(x="fixed bottom-0 mb-8 md:mb-14 m-6 rounded-md mx-auto "+(a[0].length==0?"bg-surface-variant-dark/30 text-red-700 hover:cursor-not-allowed":"bg-secondary-container-dark")))&&p(l,"class",x)},i(a){if(!C){S(e.$$.fragment,a);for(let c=0;c<$.length;c+=1)S(n[c]);C=!0}},o(a){O(e.$$.fragment,a),n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)O(n[c]);C=!1},d(a){a&&(_(o),_(t)),me(e,a),m&&m.d(),pe(n,a),N=!1,w()}}}function $e(f,e,o){let t;oe(f,q,d=>o(3,t=d));let r=[];const s=()=>{o(0,r=[]),ge.forEach(d=>{let x=0;t.photos.forEach(C=>{C.label==d.label&&x++}),x>0&&r.push({photoData:d,count:x})})};q.subscribe(d=>{console.log("Updating Display Cart"),s()});function l(){q.reset()}return[r,l,()=>l()]}class Te extends ne{constructor(e){super(),ce(this,e,$e,Ce,re,{})}}export{Te as component};
