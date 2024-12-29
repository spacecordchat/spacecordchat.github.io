var c=Object.defineProperty;var h=(s,t,e)=>t in s?c(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>h(s,typeof t!="symbol"?t+"":t,e);import{q as r,G as x,ag as m,j as n,ah as d,ai as p,aj as o,ak as a}from"./DIBLJojdTQB51I2zM4gm.js";import{I as k}from"./C3Wq-hSmuOaA_B0QoYT3.js";import{O as u}from"./BRRpKudeGf4JGj6MO1i4.js";const g=r(x.div)`
	display: flex;
	justify-content: center;
	align-items: center;
`;r(k)`
	position: absolute;
	right: 1%;
`;function f(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,s=>{const t=Math.random()*16|0;return(s==="x"?t:t&3|8).toString(16)})}class y{constructor(t){i(this,"stack",[]);i(this,"components");this.components=t,m(this,{stack:p,push:o,pop:o,remove:o,rendered:a,isVisible:a}),this.close=this.close.bind(this),this.closeAll=this.closeAll.bind(this)}push(t,e){if(e&&this.stack.find(l=>l.key===e)){console.warn(`Banner with key '${e}' already exists on the stack!`);return}this.stack=[...this.stack,{...t,key:e??f()}]}pop(){this.stack=this.stack.map((t,e)=>(e===this.stack.length-1,t))}close(){this.pop()}closeAll(){this.stack=[]}remove(t){this.stack=this.stack.filter(e=>e.key!==t)}get rendered(){return n.jsx(n.Fragment,{children:this.stack.map(t=>{const e=this.components[t.type];return e?n.jsx(d,{children:n.jsx(g,{variants:{show:{y:0,transition:{delayChildren:.3,staggerChildren:.2}},hide:{y:"-100%",transition:{delayChildren:.3,staggerChildren:.2}}},initial:"hide",animate:"show",exit:"hide",onAnimationComplete:()=>{console.debug("animation complete")},children:n.jsx(e,{...t,onClose:()=>this.remove(t.key)})})}):null})})}get isVisible(){return this.stack.length>0}}const w=new y({offline:u});export{w as b};
//# sourceMappingURL=DU491TAIyusOX_9PGj17.js.map
