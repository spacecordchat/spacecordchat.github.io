import{q as i,a0 as r,o as l,j as e,a5 as n,U as d}from"./DIBLJojdTQB51I2zM4gm.js";import{I as x}from"./CcdbQYUb7rYq7CeL5xNF.js";import{M as p,a as h,b as f}from"./CmtHS_iLm1jLtk9rwU9I.js";const u=i.div`
	display: flex;
	padding: 2px 0;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: row;
	font-size: 16px;
	color: var(--text-secondary);
`,j=i.span`
	color: var(--text);
	cursor: pointer;
	font-weight: var(--font-weight-medium);

	&:hover {
		text-decoration: underline;
	}
`,m={[r.UserJoin]:{icon:"mdiArrowRight",color:"var(--success)"}};function g({message:o,highlight:y}){const s=m[o.type]??{icon:"mdiInformation"};let t;switch(o.type){case r.UserJoin:{const a=o.getJoinMessage();t=e.jsx("div",{children:d(a,"{author}",(M,c)=>e.jsx(j,{children:o.author.username},c))});break}case r.Default:t=e.jsx(n,{children:o.content});break;default:t=e.jsx(n,{children:o.content});break}return e.jsxs(p,{header:!0,children:[e.jsx(h,{children:e.jsx(x,{icon:s.icon,size:"16px",color:s.color??"var(--text-secondary)"})}),e.jsx(u,{children:t}),e.jsx(f,{message:o,position:"top"})]})}const b=l(g);export{b as S};
//# sourceMappingURL=1r47VQmfH9hkSI7OxWfw.js.map
