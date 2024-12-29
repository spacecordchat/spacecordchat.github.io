import{q as v,R as o,j as e,X as w}from"./DIBLJojdTQB51I2zM4gm.js";import{c as R,a as b}from"./CYGJwVTcWytzt3Os_9VN.js";const l=v.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 300px;
	min-width: 300px;
	background-color: var(--background-secondary);
	border-radius: 10px;
`;function S({attachment:s}){const u=o.useRef(null),[i,h]=o.useState(!0),[r,p]=o.useState({width:0,height:0}),[t,x]=o.useState(!1),g=s.proxy_url&&s.proxy_url.length>0?s.proxy_url:s.url,m=y=>{const n=y.target,d=n.videoWidth,a=n.videoHeight,j=b(d,a,300,300),c=R(d,a,j,300,300);p({width:c.scaledWidth,height:c.scaledHeight}),h(!1)},f=()=>{x(!0)};return e.jsxs(e.Fragment,{children:[i&&!t&&e.jsx(l,{children:e.jsx(w,{size:"42px",color:"var(--primary)"})}),t&&e.jsx(l,{children:e.jsx("p",{children:"Failed to load video"})}),!t&&e.jsx("video",{style:i?{display:"none"}:{borderRadius:"5px"},controls:!0,preload:"metadata",width:r.width,height:r.height,ref:u,onLoadedMetadata:m,onError:f,children:e.jsx("source",{src:g,type:s.content_type})})]})}export{S as V};
//# sourceMappingURL=CgvyS6HcivkGoMh-zLL6.js.map
