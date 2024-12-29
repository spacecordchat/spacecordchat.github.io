import{q as c,o as v,R as p,a0 as k,j as a,C as _}from"./DIBLJojdTQB51I2zM4gm.js";import{m as w}from"./BjsUGUt7urnTyqNcsXw0.js";import"./cCp-HAoOPHGa1LpyJzlu.js";import{u as D}from"./BV-6LX_Gn8Wz_usUCJsP.js";import{S as I}from"./b9QDabEUvKe6AI27JKho.js";import{M as y}from"./DGKQDzYxD1Yh073TVjtD.js";import{d as q}from"./fynzmAtJ_PmpHXIxRwqH.js";import{M as U}from"./CgMn-SEyTsUNGgyqlMHR.js";import{A as W}from"./DJOXkuJd9H1_hyTh7X0u.js";import{A as $}from"./k1cKPNCjinxL5Yc5XJhB.js";const F=c.div`
	padding: 0 16px;
	margin-bottom: 25px;
`,K=c.div`
	background-color: var(--background-primary);
	padding: 0 16px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
`,N=c.div`
	display: flex;
	flex-direction: row;
`,R=c.div`
	flex: 0 0 auto;
	position: sticky;
`,H=c.div`
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
`;function L({channel:t}){var T;const d=D(),[n,x]=p.useState(""),[s,o]=p.useState([]),h=p.useCallback(q(()=>t.stopTyping(),1e4),[t]),S=p.useCallback(()=>!(!s.length&&(!n||!n.trim()||!n.replace(/\r?\n|\r/g,""))),[s,n]),M=p.useCallback(async()=>{t.stopTyping();const e=d.experiments.isTreatmentEnabled("message_queue",2),l=!d.experiments.isTreatmentEnabled("message_queue",1);if(!S()&&!e)return;const u=n,m=s;x(""),o([]),h(!0);const f=I.generate(),g=d.queue.add({id:f,content:u,files:m,author:d.account.raw,channel_id:t.id,guild_id:t.guildId,timestamp:new Date().toISOString(),type:k.Default});if(l)try{let r;if(m.length>0){const i=new FormData;i.append("payload_json",JSON.stringify({content:n,nonce:f})),m.forEach((E,j)=>{i.append(`files[${j}]`,E)}),r=i}else r={content:n,nonce:f};await t.sendMessage(r,g)}catch(r){const i=r instanceof Error?r.message:typeof r=="string"?r:"Unknown error";g.fail(i)}else e&&g.fail("Message queue experiment")},[n,s,t,S]),A=e=>{if(e.ctrlKey&&e.key==="Enter"||!e.shiftKey&&e.key==="Enter")return e.preventDefault(),M();e.key==="Escape"&&s.length>0&&o([]),h(!0)},b=e=>{x(e.target.value),t.startTyping()},C=e=>{if(e.length!==0){if(e.length>y||s.length+e.length>y){w.push({type:"error",title:"Too many attachments",error:`You can only attach ${y} files at once.`});return}o(l=>[...l,...e])}};return a.jsx(F,{children:a.jsxs(K,{children:[a.jsx($,{attachments:s,remove:e=>{s.length!==0&&(s.length===1?o([]):o(s.filter((l,u)=>u!==e)))}}),a.jsxs(N,{children:[a.jsx(R,{children:t.hasPermission("ATTACH_FILES")&&t.hasPermission("SEND_MESSAGES")&&a.jsx(W,{append:C})}),a.jsx(U,{id:"messageinput",value:n,placeholder:`Message ${t.type===_.DM?(T=t.recipients)==null?void 0:T[0].username:"#"+t.name}`,onChange:b,onKeyDown:A}),a.jsx(H,{})]})]})})}const Z=v(L);export{Z as M};
//# sourceMappingURL=XE3i2DAhVgCbWfDWbO6w.js.map
