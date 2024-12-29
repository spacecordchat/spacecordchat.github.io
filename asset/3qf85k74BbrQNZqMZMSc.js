import{q as m,o as x,u,f as v,R as s,j as t,n as y,I as C,C as j}from"./DIBLJojdTQB51I2zM4gm.js";import{C as I}from"./CZvihCBGM_UUNj_koxMl.js";import{u as b}from"./BV-6LX_Gn8Wz_usUCJsP.js";import{P as G}from"./BsHAe7mWCTqodyXnQ_D1.js";import{R as S}from"./BcCiPGGS8PR90wZpvSQK.js";import{C as R}from"./DvQbhaRC-sDaFAhUZAJP.js";import{S as $}from"./DsJWrS7qgrCfvvggRKKo.js";import{F as k}from"./CdHvhxM72tLASLuG_yo4.js";import{F as E}from"./CyZnPRBWArEMDvvPykKU.js";const M=m.div`
	position: relative;
	display: flex;
	justify-content: center;
	cursor: pointer;
`,P=m(R)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	border-radius: ${e=>e.active?"30%":"50%"};
	background-color: ${e=>e.hasImage?"transparent":e.active?"var(--primary)":"var(--background-secondary)"};
	transition:
		border-radius 0.2s ease,
		background-color 0.2s ease;

	&:hover {
		border-radius: 30%;
		background-color: ${e=>e.hasImage?"transparent":"var(--primary)"};
	}
`;function F({guild:e,active:f}){const n=b(),l=u(),a=v.useContext(I),[d,o]=s.useState("none"),[i,c]=s.useState(!1);s.useEffect(()=>n.activeChannelId&&n.activeGuildId===e.id?o("active"):o(i?"hover":"none"),[n.activeGuildId,i]);const h=()=>{const r=e.channels.find(p=>(G.getPermission(n.account.id,e,p),p.type!==j.GuildCategory));l(`/channels/${e.id}${r?`/${r.id}`:""}`)};return t.jsxs(M,{ref:a.setReferenceElement,onContextMenu:r=>a.onContextMenu(r,{type:"guild",guild:e}),children:[t.jsx($,{type:d}),t.jsx(k,{placement:"right",type:"tooltip",offset:20,props:{content:t.jsx("span",{children:e.name})},children:t.jsx(E,{children:t.jsx(P,{onClick:h,active:f,hasImage:!!(e!=null&&e.icon),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:e.icon?t.jsx("img",{src:S.makeCDNUrl(y.guildIcon(e.id,e==null?void 0:e.icon,C.PNG)),width:48,height:48,loading:"lazy"}):t.jsx("span",{style:{fontSize:"18px",fontWeight:"bold",cursor:"pointer"},children:e==null?void 0:e.acronym})})})})]})}const W=x(F);export{M as G,W as a};
//# sourceMappingURL=3qf85k74BbrQNZqMZMSc.js.map
