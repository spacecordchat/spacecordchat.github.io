import{q as r,j as t}from"./DIBLJojdTQB51I2zM4gm.js";const n=r.a`
	// remove the default underline
	text-decoration: none;
	// set the color to the primary color
	color: ${e=>e.color||"var(--primary-light)"};
	cursor: pointer;

	// remove the color when already visited because ew
	&:visited {
		color: ${e=>e.color||"var(--primary-light)"};
	}

	// when hovered, add underline
	&:hover {
		text-decoration: underline;
	}
`;function a(e){return t.jsx(n,{onContextMenu:o=>{o.stopPropagation()},...e})}export{a as L};
//# sourceMappingURL=CEHjqLkW_TAat5BrRB7A.js.map
