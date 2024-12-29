import{q as e,o as i,j as r}from"./DIBLJojdTQB51I2zM4gm.js";import{u as d}from"./BV-6LX_Gn8Wz_usUCJsP.js";import{b as c}from"./moqeV2oR9_3sSpkx8aR1.js";import{I as l}from"./CcdbQYUb7rYq7CeL5xNF.js";import{I as p}from"./C3Wq-hSmuOaA_B0QoYT3.js";const x=e.div`
	width: 520px;
	min-width: auto;
	border: 1px solid transparent;
	padding: 10px;
	border-radius: 4px;
	background-color: var(--background-secondary);
	border-color: var(--background-secondary-alt);
	flex-direction: row;
	align-items: center;
	display: flex;
`,h=e.div`
	flex: 1;
	white-space: nowrap;
	overflow: hidden;

	.muted {
		color: var(--text-secondary);
	}
`,m=e.progress`
	height: 6px;
	width: 100%;
`,u=e(l)`
	color: var(--text-secondary);

	&:hover {
		color: var(--text);
	}
`;function f({message:o}){const s=d(),t=o.files.reduce((n,a)=>n+a.size,0);return r.jsxs(x,{children:[r.jsxs(h,{children:[r.jsxs("div",{style:{gap:"5px",display:"flex"},children:[r.jsx("span",{children:"Uploading"}),r.jsx("span",{children:o.files.length===1?o.files[0].name:`${o.files.length} files`}),r.jsx("span",{className:"muted",children:"-"}),r.jsx("span",{className:"muted",children:c(t)})]}),r.jsx(m,{value:o.progress,max:100})]}),r.jsx(p,{variant:"blank",onClick:()=>{o.abort(),s.queue.remove(o.id)},children:r.jsx(u,{icon:"mdiClose",size:"24px"})})]})}const w=i(f);export{w as A};
//# sourceMappingURL=D4oQ0NBYrxnlnQvVI0Yv.js.map
