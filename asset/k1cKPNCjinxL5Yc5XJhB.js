import{q as i,o as c,j as e,f as l,R as d}from"./DIBLJojdTQB51I2zM4gm.js";import{g as p,a as x,b as m}from"./moqeV2oR9_3sSpkx8aR1.js";import{H as h}from"./CHC-6lQNrhE48vMQfRqn.js";import{I as s}from"./CcdbQYUb7rYq7CeL5xNF.js";import{I as g}from"./C3Wq-hSmuOaA_B0QoYT3.js";const f=i.ul`
	display: flex;
	gap: 8px;
	padding: 10px;
	overflow-x: auto;
	list-style: none;
	margin: 0;
`,u=i.li`
	flex-direction: column;
	position: relative;
	display: inline-flex;
	background-color: var(--background-secondary);
	border-radius: 4px;
	margin: 0;
	padding: 8px;
	min-width: 200px;
	max-width: 200px;
	min-height: 200px;
	max-height: 200px;
`,j=i.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	position: relative;
`,v=i.div`
	margin-top: auto;
	min-height: 0;
	display: flex;
	justify-content: center;
`,w=i.img`
	border-radius: 3px;
	max-width: 100%;
	object-fit: contain;
`,b=i.video`
	border-radius: 3px;
	max-width: 100%;
	object-fit: contain;
	height: 100%;
`,y=i.div`
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(25%, -25%);
	z-index: 1;
`,z=i.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--background-secondary);
`,F=i.div`
	margin-top: auto;
`,I=i.div`
	margin-top: 8px;
	overflow: hidden;
	white-space: nowrap;
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	text-overflow: ellipsis;
`,C=i.div`
	margin-top: 8px;
	overflow: hidden;
	white-space: nowrap;
	font-size: 14px;
	font-weight: var(--font-weight-regular);
`;function k({file:t,remove:r}){const o=d.useCallback(()=>{const n=URL.createObjectURL(t),a=p(t);if(a.isEmbeddable){if(a.isVideo)return e.jsx(b,{preload:"metadata","aria-hidden":"true",src:n});if(a.isImage)return e.jsx(w,{src:n})}return e.jsx(s,{size:5,icon:x(t)})},[t]);return e.jsx(u,{children:e.jsxs(j,{children:[e.jsx(v,{children:o()}),e.jsx(y,{children:e.jsx(z,{children:e.jsx(g,{onClick:r,children:e.jsx(s,{size:"24px",icon:"mdiTrashCan",color:"var(--danger)"})})})}),e.jsxs(F,{children:[e.jsx(I,{children:t.name}),e.jsx(C,{children:m(t.size)})]})]})})}function A({attachments:t,remove:r}){return t.length===0?null:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(f,{children:t.map((o,n)=>e.jsx(l.Fragment,{children:e.jsx(k,{file:o,remove:()=>r(n)})},n))}),e.jsx(h,{})]})}const q=c(A);export{q as A};
//# sourceMappingURL=k1cKPNCjinxL5Yc5XJhB.js.map
