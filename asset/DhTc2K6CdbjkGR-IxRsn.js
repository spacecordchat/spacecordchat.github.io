import{q as c,R as n,j as r}from"./DIBLJojdTQB51I2zM4gm.js";import{C as l}from"./DvQbhaRC-sDaFAhUZAJP.js";import{G as s}from"./3qf85k74BbrQNZqMZMSc.js";import{I as m}from"./CcdbQYUb7rYq7CeL5xNF.js";import{S as d}from"./DsJWrS7qgrCfvvggRKKo.js";import{F as u}from"./CdHvhxM72tLASLuG_yo4.js";import{F as f}from"./CyZnPRBWArEMDvvPykKU.js";const g=c(l)`
	${e=>e.margin!==!1?"margin-top: 9px;":""}};
	padding: 0;
	width: 48px;
	height: 48px;
	border-radius: ${e=>e.active?"30%":"50%"};
	background-color: ${e=>e.active?"var(--primary)":"var(--background-secondary)"};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: border-radius 0.2s ease, background-color 0.2s ease;

	&:hover {
		border-radius: 30%;
		background-color: ${e=>e.useGreenColorScheme?"var(--success)":"var(--primary)"};

	}
`;function C(e){if(e.image&&e.icon&&e.label)throw new Error("SidebarAction can only have one of image, icon, or label");const[t,i]=n.useState("none"),[a,o]=n.useState(!1);return n.useEffect(()=>{if(!e.disablePill)return e.active?i("active"):i(a?"hover":"none")},[e.active,a]),r.jsxs(s,{children:[r.jsx(d,{type:t}),r.jsx(u,{placement:"right",type:"tooltip",offset:20,props:{content:r.jsx("span",{children:e.tooltip})},children:r.jsx(f,{children:r.jsxs(g,{onClick:e.action,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),margin:e.margin,active:e.active,useGreenColorScheme:e.useGreenColorScheme,children:[e.image&&r.jsx("img",{...e.image,loading:"lazy"}),e.icon&&r.jsx(m,{...e.icon,color:a&&e.useGreenColorScheme?"var(--text)":e.icon.color}),e.label&&r.jsx("span",{children:e.label})]})})})]})}export{C as S};
//# sourceMappingURL=DhTc2K6CdbjkGR-IxRsn.js.map
