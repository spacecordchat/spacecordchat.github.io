import{q as x,o as v,f as C,R as o,j as i}from"./DIBLJojdTQB51I2zM4gm.js";import{C as g}from"./CZvihCBGM_UUNj_koxMl.js";import{u as b}from"./BV-6LX_Gn8Wz_usUCJsP.js";import{F as E}from"./CdHvhxM72tLASLuG_yo4.js";import{F as j}from"./CyZnPRBWArEMDvvPykKU.js";const y=x.div`
	font-size: 16px;
	font-weight: var(--font-weight-medium);

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;function F({message:t,guild:p}){const c=b(),e=C.useContext(g),[f,m]=o.useState(void 0),[s,l]=o.useState(),[a,h]=o.useState(void 0),{members:n}=p||{};o.useEffect(()=>{s&&(e==null||e.onContextMenu(s,{type:"user",user:t.author,member:a}))},[s,a]);const d=async r=>{var u;r.preventDefault(),r.stopPropagation(),l(r),(u=c.guilds.get(t.guild_id))==null||u.members.resolve(t.author.id).then(h)};return o.useEffect(()=>{if(!n)return;const r=n.get(t.author.id);r&&m(r.roleColor)},[t,n]),i.jsx(E,{placement:"right-start",type:"userPopout",props:{user:t.author},children:i.jsx(j,{children:i.jsx(y,{style:{color:f},ref:e==null?void 0:e.setReferenceElement,onContextMenu:d,children:t.author.username})})})}const q=v(F);export{q as M};
//# sourceMappingURL=DD7Ygw6RIuwzMWUkuA2P.js.map
