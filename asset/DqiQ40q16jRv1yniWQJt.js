import{q as i,a7 as g,a8 as f,a9 as j,aa as y,j as e,ab as v}from"./DIBLJojdTQB51I2zM4gm.js";import{m as t}from"./BjsUGUt7urnTyqNcsXw0.js";import"./cCp-HAoOPHGa1LpyJzlu.js";import{u as A}from"./BV-6LX_Gn8Wz_usUCJsP.js";import{M as k}from"./DmxfqvkvHbXivuP6yLMs.js";const w=i.p`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	color: var(--text-header-secondary);
	margin-top: 8px;
`,z=i.textarea`
	flex: 1;
	padding: 8px;
	border-radius: 4px;
	background-color: var(--background-secondary-alt);
	border: none;
	color: var(--text);
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	resize: none;
	outline: none;
`,B=g({reason:f().max(512,"Reason must be less than 512 characters")}).required();function q({target:o,type:R,...l}){var n,s;const d=A(),{register:c,handleSubmit:m,formState:{disabled:p,isLoading:u,isSubmitting:h}}=j({resolver:v(B)}),a=p||u||h,x=m(r=>{d.rest.put(y.guildBan(o.guild.id,o.user.id),void 0,void 0,r.reason?{"X-Audit-Log-Reason":r.reason}:void 0).then(()=>{t.pop("close")}).catch(b=>{console.error(b)})});return e.jsxs(k,{...l,title:`Ban '${(n=o.user)==null?void 0:n.username}'`,description:e.jsxs(w,{children:["Are you sure you want to ban ",e.jsxs("b",{children:["@",(s=o.user)==null?void 0:s.username]}),"? They won't be able to rejoin unless they are unbanned."]}),actions:[{onClick:x,children:e.jsx("span",{children:"Ban"}),palette:"danger",confirmation:!0,disabled:a,size:"small"},{onClick:()=>t.pop("close"),children:e.jsx("span",{children:"Cancel"}),palette:"link",disabled:a,size:"small"}],children:[e.jsx("img",{src:"https://media1.tenor.com/m/TG5OF7UkLasAAAAd/thanos-infinity.gif",loading:"lazy",alt:"Thanos Snap GIF",height:300,style:{marginBottom:20,borderRadius:8}}),e.jsx(z,{...c("reason"),id:"reason",name:"reason",placeholder:"Reason",maxLength:512})]})}export{q as B};
//# sourceMappingURL=DqiQ40q16jRv1yniWQJt.js.map
