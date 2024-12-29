import{q as g,j as r}from"./DIBLJojdTQB51I2zM4gm.js";import{m as f}from"./BjsUGUt7urnTyqNcsXw0.js";import"./cCp-HAoOPHGa1LpyJzlu.js";import{g as m,z as a}from"./moqeV2oR9_3sSpkx8aR1.js";import{A as x}from"./gcuWJc247LsVIU0W_CQ-.js";import{F as h}from"./BOQdMESN0ETwdvhQwF6O.js";import{V as j}from"./CgvyS6HcivkGoMh-zLL6.js";const n=350;function y(i,d){const s=i/d;let e=i*s,o=d*s;if(o>n){const t=n/o;e*=t,o=n}return{adjustedWidth:Math.floor(e),adjustedHeight:Math.floor(o)}}const A=g.div`
	cursor: ${i=>i.withPointer?"pointer":"default"};
	padding: 2px 0;
`,_=g.img`
	border-radius: 4px;
	width: 100%;
	height: auto;
`;function F({attachment:i}){var o;const d=i.proxy_url&&i.proxy_url.length>0?i.proxy_url:i.url,s=m(i);let e=r.jsx(r.Fragment,{});if(s.isImage&&s.isEmbeddable){const t=i.width,u=i.height,{adjustedWidth:l,adjustedHeight:p}=y(t,u);e=r.jsx(_,{src:d,alt:i.filename,loading:"lazy",style:{maxWidth:l,maxHeight:p}})}else s.isVideo&&s.isEmbeddable?e=r.jsx(j,{attachment:i}):s.isAudio&&s.isEmbeddable?e=r.jsx(x,{attachment:i}):e=r.jsx(h,{attachment:i});return r.jsx(A,{withPointer:(o=i.content_type)==null?void 0:o.startsWith("image"),onClick:()=>{var l;if(!((l=i.content_type)!=null&&l.startsWith("image")))return;const{width:t,height:u}=a(i.width,i.height);f.push({type:"image_viewer",attachment:i,width:t,height:u})},children:e},i.id)}export{F as M};
//# sourceMappingURL=B1wKGbCXAWMo9qEz2RIA.js.map
