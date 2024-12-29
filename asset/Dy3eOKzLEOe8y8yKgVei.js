import{q as r,o as x,j as e,f as m}from"./DIBLJojdTQB51I2zM4gm.js";import{u as g}from"./BV-6LX_Gn8Wz_usUCJsP.js";import{E as u}from"./C-JpZvkyNlQLTjNMNlGf.js";import{S as f}from"./Dj2oSFeGCUj5ugJOefSk.js";const v=r.div`
	display: flex;
	flex-direction: column;
`,h=r.ul`
	display: grid;
	list-style: none;
	padding: 0;
	margin: 0;
	gap: 10px;
`,E=r.li`
	display: flex;
	flex-direction: column;
`,j=r.span`
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	color: var(--text);
`,b=r.div`
	color: var(--text-disabled);
	font-size: 14px;
	font-weight: var(--font-weight-regular);
`,y=r.div`
	color: var(--text.muted);
	margin-bottom: 10px;
	font-size: 12px;
	font-weight: var(--font-weight-bold);
`,w=r.select`
	appearance: none;
	/* safari */
	-webkit-appearance: none;
	background-color: var(--background-tertiary);
	border-color: var(--background-tertiary);
	color: var(--text);
	font-weight: var(--font-weight-medium);
	border: 1px solid transparent;
	padding: 8px 8px 8px 12px;
	cursor: pointer;
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	border-radius: 4px;
`;function S({experiment:i}){const n=g(),s=n.experiments.isExperimentEnabled(i.id),o=n.experiments.getTreatment(i.id),[d,a]=m.useState(s),c=()=>a(!d),l=t=>{const p=Number.parseInt(t.target.value);n.experiments.setTreatment(i.id,p)};return e.jsxs(E,{children:[e.jsxs("div",{style:{marginBottom:"10px",cursor:"pointer"},onClick:c,children:[e.jsx(j,{children:i.name}),e.jsx(b,{children:i.description})]}),d&&e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Treatment Override"}),e.jsx(w,{onChange:l,children:i.treatments.map(t=>e.jsx("option",{value:t.id,selected:!s&&t.id===0||(o==null?void 0:o.id)===t.id,children:`${t.name}${t.description?": "+t.description:""}`},t.id))})]})]},i.id)}function T(){return e.jsxs("div",{children:[e.jsx(f,{children:"Experiments"}),e.jsx(v,{children:e.jsx(h,{children:u.map(i=>e.jsx(S,{experiment:i}))})})]})}const P=x(T);export{P as E};
//# sourceMappingURL=Dy3eOKzLEOe8y8yKgVei.js.map
