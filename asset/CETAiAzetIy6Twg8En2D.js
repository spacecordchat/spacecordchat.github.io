var u=Object.defineProperty;var v=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var d=(r,e,t)=>v(r,typeof e!="symbol"?e+"":e,t);import{aG as n,ag as f,ai as m,aj as l,ak as b}from"./DIBLJojdTQB51I2zM4gm.js";import{R as c}from"./C7gPkBfNw5Gjup_W5Ivi.js";var y=Object.defineProperty,g=Object.getOwnPropertyDescriptor,a=(r,e,t,p)=>{for(var s=p>1?void 0:p?g(e,t):e,i=r.length-1,h;i>=0;i--)(h=r[i])&&(s=(p?h(e,t,s):h(s))||s);return p&&s&&y(e,t,s),s};class o{constructor(e){d(this,"app");d(this,"roles",new n);this.app=e,f(this)}add(e){this.roles.set(e.id,new c(this.app,e))}addAll(e){e==null||e.forEach(t=>this.add(t))}get all(){return Array.from(this.roles.values())}remove(e){this.roles.delete(e)}update(e){var t;(t=this.roles.get(e.id))==null||t.update(e)}get(e){return this.roles.get(e)}has(e){return this.roles.has(e)}asList(){return Array.from(this.roles.values())}get size(){return this.roles.size}}a([m],o.prototype,"roles",2);a([l],o.prototype,"add",1);a([l],o.prototype,"addAll",1);a([b],o.prototype,"all",1);a([l],o.prototype,"remove",1);a([l],o.prototype,"update",1);export{o as R};
//# sourceMappingURL=CETAiAzetIy6Twg8En2D.js.map