var K=Object.defineProperty,W=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var O=(t,e,a)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,_=(t,e)=>{for(var a in e||(e={}))Y.call(e,a)&&O(t,a,e[a]);if(L)for(var a of L(e))Z.call(e,a)&&O(t,a,e[a]);return t},w=(t,e)=>W(t,X(e));import{D as f,S as x,i as B,s as Q,e as T,c as U,a as G,d as S,b as p,a4 as g,g as $,G as tt,W as j,K as et,v as at,ah as ot,ai as F,Z as R,R as I,T as E,U as st,aj as rt,V as b}from"./vendor-5dd41a27.js";import{c as v,d as D,e as C,i as it,f as nt,h as ct,a as lt,j as ut}from"./state-b8864def.js";const dt=f(void 0);function ft(t){let e,a;return{c(){e=T("div"),a=T("div"),this.h()},l(s){e=U(s,"DIV",{id:!0,class:!0});var o=G(e);a=U(o,"DIV",{id:!0,class:!0}),G(a).forEach(S),o.forEach(S),this.h()},h(){p(a,"id","container"),p(a,"class","flex-1 overflow-auto"),p(e,"id","view"),p(e,"class","p-2 svelte-5ndy2s"),g(e,"error",t[2]),g(e,"outOfSync",t[3])},m(s,o){$(s,e,o),tt(e,a),t[4](a),t[5](e)},p(s,[o]){o&4&&g(e,"error",s[2]),o&8&&g(e,"outOfSync",s[3])},i:j,o:j,d(s){s&&S(e),t[4](null),t[5](null)}}}function pt(t,e,a){let s;et(t,v,i=>a(9,s=i));let o="",u="",r,c,n=!1,l=!1,d=!0;at(()=>{v.subscribe(i=>{try{if(r&&i&&(i.updateDiagram||i.autoSync)){if(i.autoSync||ot(v,s.updateDiagram=!1,s),a(3,l=!1),d=!0,o===i.code&&u===i.mermaid)return;o=i.code,u=i.mermaid;const y=c.parentElement.scrollTop;delete r.dataset.processed,F.initialize(Object.assign({},JSON.parse(i.mermaid))),F.render("graph-div",o,z=>{a(0,r.innerHTML=z,r)}),a(1,c.parentElement.scrollTop=y,c),a(2,n=!1)}else d?d=!1:a(3,l=!0)}catch(y){console.log("view fail",y),a(2,n=!0)}}),dt.subscribe(i=>{typeof i=="undefined"?a(2,n=!1):(a(2,n=!0),console.log("Error: ",i))})});function J(i){R[i?"unshift":"push"](()=>{r=i,a(0,r)})}function q(i){R[i?"unshift":"push"](()=>{c=i,a(1,c)})}return[r,c,n,l,J,q]}class It extends x{constructor(e){super();B(this,e,pt,ft,Q,{})}}const gt=30,H=I(f("manual"),E(),"autoHistoryMode"),m=I(f([]),E(),"autoHistoryStore"),h=I(f([]),E(),"manualHistoryStore"),M=f([]),Et=st([H,m,h,M],([t,e,a,s],o)=>{o(t==="auto"?e:t==="manual"?a:t==="loader"?s:e)}),mt=t=>{if(t.type==="loader"){M.update(e=>[t,...e]);return}if(t.name=rt(2),t.type!=="auto"){h.update(e=>[t,...e]);return}m.update(e=>(e.length===gt&&e.pop(),[t,...e]))},Lt=t=>{(b(H)==="auto"?m:h).update(e=>(b(H)!=="loader"&&(e=e.filter(a=>t&&a.time!=t)),e))},Ot=t=>{const e=b(t?m:h);return e.length>0?JSON.stringify(e[0].state):""},P="code.mmd",V="config.json",ht=t=>P in t,N=async t=>t.truncated?await(await fetch(t.raw_url)).text():t.content,yt=async t=>{const[e,a,s,o]=t.split("github.com").pop().split("/"),{html_url:u,files:r,history:c}=await(await fetch(`https://api.github.com/gists/${s}${o?"/"+o:""}`)).json();if(ht(r)){const n=await N(r[P]);let l;V in r&&(l=await N(r[V]));const d=c[0];return{url:`${u}/${d.version}`,code:n,config:l,author:d.user.login,time:new Date(d.committed_at).getTime(),version:d.version.slice(-7)}}else throw"Invalid gist provided"},k=(t,e=t.url)=>{const a=w(_({},D),{code:t.code,loader:{type:"gist",config:{url:e}}});return t.config&&(a.mermaid=t.config),a},_t=async t=>{try{const[e,a,s,o]=t.split("github.com").pop().split("/"),{history:u}=await(await fetch(`https://api.github.com/gists/${s}${o?"/"+o:""}`)).json(),r=[];for(const n of u){const l=await yt(n.url).catch(()=>{});l&&r.push(l)}if(r.length===0)throw"Invalid gist provided";r.reverse();const c=k(r.slice(-1).pop(),t);for(const n of r)mt({state:k(n),time:n.time,type:"loader",url:n.url,name:`${n.author} v${n.version}`});return c}catch(e){console.error(e)}},A={gist:_t},wt=async()=>{const t=new URLSearchParams(window.location.search);let e=D,a,s,o=!1;const u=t.get("code"),r=t.get("config");if(u&&(a=await(await fetch(u)).text(),o=!0),r?s=await(await fetch(r)).text():s=D.mermaid,a)e={code:a,mermaid:s,loader:{type:"files",config:{codeURL:u,configURL:r}}};else for(const[c,n]of t.entries())if(c in A)try{e=await A[c](n),o=!0;break}catch(l){console.error(l)}o&&C(w(_({},e),{autoSync:!0,updateDiagram:!0,updateEditor:!0}))},St=()=>{ut(window.location.hash.slice(1))},vt=()=>{C({updateDiagram:!0})},Tt=async()=>{var t;St(),await it("Loading Gist...",wt().catch(console.error)),vt(),nt(),await ct(),(t=lt)==null||t.page()};export{It as V,Et as a,mt as b,Lt as c,dt as e,Ot as g,H as h,Tt as i,M as l,vt as s};
