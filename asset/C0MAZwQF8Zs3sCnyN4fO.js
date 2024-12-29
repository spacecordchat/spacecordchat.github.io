import{q as a,o as u,R as t,f,j as e}from"./DIBLJojdTQB51I2zM4gm.js";import{u as h}from"./BV-6LX_Gn8Wz_usUCJsP.js";import{I as m}from"./CcdbQYUb7rYq7CeL5xNF.js";import{S as x}from"./DWxrAP2UJIB8NY2FdR95.js";import{F as g}from"./CdHvhxM72tLASLuG_yo4.js";import{F as v}from"./CyZnPRBWArEMDvvPykKU.js";const s=a(x)`
	background-color: var(--background-secondary);
	cursor: pointer;

	&:hover {
		background-color: var(--background-secondary-highlight);
	}
`,i=a.header`
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	user-select: none;
`;function j(){const r=h(),[o,c]=t.useState(!1),[l,n]=t.useState("mdiChevronDown"),d=p=>{c(p)};return f.useEffect(()=>{n(o?"mdiClose":"mdiChevronDown")},[o]),r.activeGuildId==="@me"?e.jsx(s,{style:{cursor:"default",pointerEvents:"none",display:"flex",justifyContent:"center"},children:e.jsx(i,{children:"Direct Messages"})}):r.activeGuild?e.jsx(g,{type:"guild",open:o,onOpenChange:d,props:{guild:r.activeGuild},children:e.jsx(v,{children:e.jsxs(s,{children:[e.jsx(i,{children:r.activeGuild.name}),e.jsx(m,{icon:l,size:"20px",color:"var(--text)"})]})})}):null}const E=u(j);export{E as C};
//# sourceMappingURL=C0MAZwQF8Zs3sCnyN4fO.js.map
