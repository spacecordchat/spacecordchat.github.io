import{q as n,o as j,u as w,f as x,R as o,j as t}from"./DIBLJojdTQB51I2zM4gm.js";import{C as M}from"./CZvihCBGM_UUNj_koxMl.js";import{m as $}from"./BjsUGUt7urnTyqNcsXw0.js";import"./cCp-HAoOPHGa1LpyJzlu.js";import{u as b}from"./BV-6LX_Gn8Wz_usUCJsP.js";import{P as I}from"./BsHAe7mWCTqodyXnQ_D1.js";import{I as s}from"./CcdbQYUb7rYq7CeL5xNF.js";import{S as P}from"./DsJWrS7qgrCfvvggRKKo.js";import{F as S}from"./CdHvhxM72tLASLuG_yo4.js";import{F as k}from"./CyZnPRBWArEMDvvPykKU.js";const E=n.div`
	padding: ${e=>e.isCategory?"16px 8px 0 0":"1px 8px 0 0"};
	cursor: pointer;
`,H=n.div`
	margin-left: ${e=>e.isCategory?"0":"8px"};
	height: ${e=>e.isCategory?"28px":"33px"};
	border-radius: 4px;
	align-items: center;
	display: flex;
	padding: ${e=>e.isCategory?"0 8px 0 8px":"0 16px"};
	background-color: ${e=>e.active?"var(--background-primary-alt)":"transparent"};
	justify-content: space-between;

	&:hover {
		background-color: ${e=>e.isCategory?"transparent":"var(--background-primary-alt)"};
	}
`,R=n.span`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	white-space: nowrap;
	color: ${e=>e.isCategory&&e.hovered?"var(--text)":"var(--text-secondary)"};
	user-select: none;
`;function D({channel:e,isCategory:r,active:d}){const m=b(),f=w(),a=x.useContext(M),[i,p]=o.useState(!1),[g,c]=o.useState(!1),[v,l]=o.useState(!1),[C,h]=o.useState(!1);return x.useEffect(()=>{if(!r)return;const y=I.getPermission(m.account.id,e.guild,e).has("MANAGE_CHANNELS");h(y)},[e]),t.jsx(E,{isCategory:r,onClick:()=>{e.isTextChannel&&f(`./../${e.id}`)},ref:a.setReferenceElement,onContextMenu:u=>a.onContextMenu(u,{type:"channel",channel:e}),children:t.jsxs(H,{isCategory:r,active:d,onMouseOver:()=>p(!0),onMouseOut:()=>p(!1),children:[t.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[t.jsx(P,{type:e.unread?"unread":"none"}),e.channelIcon&&!r&&t.jsx(s,{icon:e.channelIcon,size:"16px",style:{marginRight:"8px"},color:"var(--text-secondary)"}),r&&t.jsx(s,{icon:"mdiChevronDown",size:"12px",color:i?"var(--text)":"var(--text-secondary)",style:{marginRight:"8px"}}),t.jsx(R,{isCategory:r,hovered:i,children:e.name})]}),r&&C&&t.jsx(S,{placement:"top",type:"tooltip",offset:10,props:{content:t.jsx("span",{children:"Create Channel"})},children:t.jsx(k,{children:t.jsx("span",{onMouseOver:()=>c(!0),onMouseOut:()=>c(!1),onMouseDown:()=>l(!0),onMouseUp:()=>l(!1),onClick:()=>{if(!e.guild){console.warn("No guild found for channel",e);return}$.push({type:"create_channel",guild:e.guild,category:e})},children:t.jsx(s,{icon:"mdiPlus",size:"18px",style:{marginLeft:"auto"},color:v?"var(--text-header)":g?"var(--text)":"var(--text-secondary)"})})})})]})},e.id)}const G=j(D);export{G as C};
//# sourceMappingURL=C1BmW8T90gDizrJguKAO.js.map
