import{q as h,o as d,j as e,h as p,L as m,C as a}from"./DIBLJojdTQB51I2zM4gm.js";import{u as x}from"./BV-6LX_Gn8Wz_usUCJsP.js";import{C as v}from"./C1BmW8T90gDizrJguKAO.js";const c=h.div`
	display: flex;
	flex: 1;
`;function f(){const t=x();if(!t.activeGuild||!t.activeChannel)return e.jsx(c,{});const{channels:s}=t.activeGuild,l=({index:r,key:i,style:o})=>{const n=s[r],u=t.activeChannelId===n.id,C=n.type===a.GuildCategory;return e.jsx("div",{style:o,children:e.jsx(v,{isCategory:C,active:u,channel:n},i)})};return e.jsx(c,{children:e.jsx(p,{children:({width:r,height:i})=>e.jsx(m,{height:i,overscanRowCount:2,rowCount:s.length,rowHeight:({index:o})=>s[o].type===a.GuildCategory?44:33,rowRenderer:l,width:r})})})}const L=d(f);export{L as C};
//# sourceMappingURL=CUy_ZZ-KppgKorAQpxQU.js.map
