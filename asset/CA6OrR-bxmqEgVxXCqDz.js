var h=Object.defineProperty;var f=(i,e,t)=>e in i?h(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var a=(i,e,t)=>f(i,typeof e!="symbol"?e+"":e,t);import{aG as v,ai as g,aj as d,ak as n}from"./DIBLJojdTQB51I2zM4gm.js";import{L as G}from"./85yZmE5PqfcNKC64qTgv.js";import{G as c}from"./Cqhv08zIq1q-AsGypEZ5.js";var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,o=(i,e,t,l)=>{for(var s=l>1?void 0:l?y(e,t):e,p=i.length-1,u;p>=0;p--)(u=i[p])&&(s=(l?u(e,t,s):u(s))||s);return l&&s&&m(e,t,s),s};class r{constructor(e){a(this,"logger",new G("GuildStore"));a(this,"app");a(this,"initialGuildsLoaded",!1);a(this,"guilds",new v);this.app=e}setInitialGuildsLoaded(){this.initialGuildsLoaded=!0,this.logger.debug("Initial guilds loaded")}add(e){this.guilds.set(e.id,new c(this.app,e))}addAll(e){e.forEach(t=>this.add(t))}get(e){return this.guilds.get(e)}get all(){return Array.from(this.guilds.values())}remove(e){this.guilds.delete(e)}get count(){return this.guilds.size}}o([g],r.prototype,"initialGuildsLoaded",2);o([g],r.prototype,"guilds",2);o([d],r.prototype,"setInitialGuildsLoaded",1);o([d],r.prototype,"add",1);o([d],r.prototype,"addAll",1);o([n],r.prototype,"all",1);o([d],r.prototype,"remove",1);o([n],r.prototype,"count",1);export{r as G};
//# sourceMappingURL=CA6OrR-bxmqEgVxXCqDz.js.map