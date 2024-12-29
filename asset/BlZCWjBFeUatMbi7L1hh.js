import{C as o,q as a,a7 as D,ac as E,a8 as N,ad as A,u as G,R as u,a9 as O,aa as P,j as e,ab as H}from"./DIBLJojdTQB51I2zM4gm.js";import{m as g}from"./BjsUGUt7urnTyqNcsXw0.js";import"./cCp-HAoOPHGa1LpyJzlu.js";import{u as M}from"./BV-6LX_Gn8Wz_usUCJsP.js";import{m as _}from"./BDzl6LkRQpjGU2VD4La_.js";import{a as f,I as B}from"./CZVscq1LCMTLxcs1s_Ud.js";import{T as v}from"./CHC-6lQNrhE48vMQfRqn.js";import{I as y}from"./CcdbQYUb7rYq7CeL5xNF.js";import{M as W}from"./DmxfqvkvHbXivuP6yLMs.js";const d=[{label:"Text",description:"Send messages, images, and GIFs",icon:"mdiPound",type:o.GuildText},{label:"Voice",description:"Hang out and talk with friends",icon:"mdiVolumeHigh",type:o.GuildVoice},{label:"Announcement",description:"Important updates for people in and out of the server",icon:"mdiBullhorn",type:o.GuildAnnouncement,note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",canBePrivate:!1}],J=a.h1`
	font-size: 20px;
	font-weight: var(--font-weight-medium);
`,K=a.p`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	color: var(--text-header-secondary);
`,Q=a.form`
	width: 100%;
	margin-top: 10px;
`,U=a.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	gap: 10px;
	display: flex;
	flex-direction: column;
`,X=a.li`
	padding: 10px;
	border-radius: 10px;
	background-color: ${r=>r.active?"var(--background-secondary-highlight)":"var(--background-secondary)"};
	filter: brightness(${r=>r.active?1.3:1.1});
	display: flex;
	flex-direction: column;
	gap: 3px;

	&:hover {
		cursor: pointer;
		background-color: var(--background-secondary-highlight);
		filter: ${r=>r.active?"brightness(1.3)":"brightness(1.1)"};
	}

	& span {
		color: var(--text-header-secondary);
		font-size: 16px;
		font-weight: var(--font-weight-medium);
	}

	& span:nth-child(2) {
		font-size: 14px;
		font-weight: var(--font-weight-regular);
	}
`,b=a.label`
	font-weight: var(--font-weight-medium);
	font-size: 14px;
	color: var(--text-header-secondary);
`,j=a.div`
	margin: 10px 0;
	display: flex;
	flex-direction: ${r=>r.row?"row":"column"};
	align-items: ${r=>r.row?"center":"stretch"};
	justify-content: space-between;
	gap: 10px;
`,C=a.div`
	& label,
	span {
		color: ${r=>r.error?"var(--error)":"var(--text-header-secondary)"};
	}
`,Y=D({type:E().oneOf(Object.values(o).filter(r=>typeof r=="number")).required(),name:N().required(),private:A()}).required();function ce({guild:r,category:i,...w}){const p=M(),I=G(),[k,m]=u.useState(!1),[h,$]=u.useState(0),{formState:{disabled:S,isSubmitting:T,isValid:L,errors:t},register:z,handleSubmit:F,setValue:R,setError:l,watch:Z}=O({resolver:H(Y),defaultValues:{type:d[0].type,private:!1}}),q=S||k||T||!L,V=F(n=>{m(!0),p.rest.post(P.guildChannels(r.id),{name:n.name,type:n.type,parent_id:i==null?void 0:i.id}).then(s=>{p.channels.add(s),r.channels_.add(s.id),I(`/channels/${r.id}/${s.id}`),g.pop("close")}).catch(s=>{if(console.error(s),s.errors){const c=_(s.errors);c?l(c.field,{type:"manual",message:c.error}):l("type",{type:"manual",message:s.message})}else l("type",{type:"manual",message:s.message});m(!1)})}),x=z("name",{required:!0});return e.jsx(W,{...w,title:e.jsx(J,{children:"Create Channel"}),description:e.jsxs(K,{children:["in ",i?i.name:r.name]}),actions:[{onClick:V,children:e.jsx("span",{children:"Create Channel"}),palette:"primary",size:"small",disabled:q},{onClick:()=>{g.pop("close")},children:e.jsx("span",{children:"Cancel"}),palette:"link",size:"small",confirmation:!0}],children:e.jsx(Q,{children:e.jsxs(U,{children:[e.jsxs(j,{children:[e.jsxs(C,{error:!!t.type,children:[e.jsx(b,{children:"Channel Type"}),t.type&&e.jsxs(e.Fragment,{children:[e.jsx(v,{children:"-"}),e.jsx(f,{children:t.type.message})]})]}),d.map((n,s)=>e.jsxs(X,{active:s===h,onClick:()=>{R("type",n.type),$(s)},style:{display:"flex",alignItems:"center",flexDirection:"row"},children:[n.icon&&e.jsx(y,{icon:n.icon,color:"var(--text-disabled)",size:"24px"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3px",marginLeft:10},children:[e.jsx("span",{children:n.label}),e.jsx("span",{children:n.description})]})]},s))]}),e.jsxs(j,{children:[e.jsxs(C,{error:!!t.name,children:[e.jsx(b,{children:"Channel Name"}),t.name&&e.jsxs(e.Fragment,{children:[e.jsx(v,{children:"-"}),e.jsx(f,{children:t.name.message})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"var(--background-secondary)",borderRadius:8,padding:"0 10px"},children:[e.jsx(y,{icon:d[h].icon,size:"16px",color:"var(--text)"}),e.jsx(B,{...x,onChange:n=>{n.target.value=n.target.value.replace(" ","-").toLowerCase(),x.onChange(n)},disableFocusRing:!0,style:{borderRadius:8},placeholder:"new-channel",error:!!t.name})]})]})]})})})}export{ce as C};
//# sourceMappingURL=BlZCWjBFeUatMbi7L1hh.js.map
