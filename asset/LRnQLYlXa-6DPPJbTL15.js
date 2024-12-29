import{q as i,o as l,j as e,f as d,R as p,Y as f}from"./DIBLJojdTQB51I2zM4gm.js";import{u as c}from"./BV-6LX_Gn8Wz_usUCJsP.js";import{M as m}from"./D_QBsCYJSr_kazL3Wem5.js";import{C as x}from"./B6LBLfqUZUPmGzvaBkX6.js";import{M as u}from"./XE3i2DAhVgCbWfDWbO6w.js";import{M as h}from"./CczqZ7h8UAHznLzR3Z96.js";import{T as j}from"./A5drbDKqx4MztVCeezPp.js";const v=i.div`
	display: flex;
	flex-direction: row;
	flex: 1 1 auto;
	overflow: hidden;
`,a=i.div`
	display: flex;
	flex-direction: column;
	background-color: var(--background-primary-alt);
	flex: 1 1 auto;
	overflow: hidden;
`,C=i.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	position: relative;
	overflow: hidden;
`;function g({channel:r,guild:t}){const o=c().readStateStore.get(r.id);return d.useEffect(()=>{r.markAsRead()},[r,t]),e.jsxs(C,{children:[e.jsx(h,{guild:t,channel:r,before:o==null?void 0:o.lastMessageId}),e.jsx(u,{channel:r,guild:t}),e.jsx(j,{channel:r})]})}const y=l(r=>{const{memberListVisible:t}=c();return e.jsxs(v,{children:[e.jsx(g,{...r}),t&&e.jsx(m,{})]})});function b(){const r=c(),{activeChannel:t,activeGuild:n,activeChannelId:o,activeGuildId:s}=r;return p.useEffect(()=>{!t||!n||o==="@me"||f(()=>{r.gateway.onChannelOpen(s,o)})},[t,n]),s&&s==="@me"?e.jsx(a,{children:e.jsx("span",{style:{padding:"1rem",userSelect:"none"},children:"Home Section Placeholder"})}):!n||!t?e.jsx(a,{children:e.jsx("span",{style:{color:"var(--text-secondary)",fontSize:"1.5rem",margin:"auto"},children:"Unknown Guild or Channel"})}):e.jsxs(a,{children:[e.jsx(x,{channel:t}),e.jsx(y,{channel:t,guild:n})]})}const A=l(b);export{A as C};
//# sourceMappingURL=LRnQLYlXa-6DPPJbTL15.js.map
