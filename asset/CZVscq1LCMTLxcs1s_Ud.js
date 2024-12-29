import{q as t}from"./DIBLJojdTQB51I2zM4gm.js";import{B as r}from"./DMjHHMbjzP3KBhDJ8jsH.js";import{C as e}from"./DvQbhaRC-sDaFAhUZAJP.js";const d=t(e)`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--background-tertiary);
	flex: 1;
`,s=t(e)`
	background-color: var(--background-primary-alt);
	padding: 32px;
	font-size: 18px;
	color: var(--text-muted);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	@media (max-width: 480px) {
		width: 100%;
		height: 100%;
		justify-content: center;
	}

	@media (min-width: 480px) {
		width: 480px;
		border-radius: 18px;
	}
`,p=t.div`
	width: 100%;
`,l=t.h1`
	margin-bottom: 3px;
	color: var(--text);
	font-weight: var(--font-weight-bold);
	font-size: 24px;
`,c=t.h2`
	margin-top: 3px;
	color: var(--text-muted);
	font-weight: var(--font-weight-regular);
	font-size: ${o=>o.noBranding?"20px":"16px"};
`,x=t.form`
	width: 100%;
	margin-top: 40px;
`,g=t.h1`
	margin-bottom: ${o=>o.marginBottom?"20px":"0"};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`,u=t.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 8px;
	color: ${o=>o.error?"var(--error)":"var(--text-header-secondary)"};
`,b=t.label`
	font-size: 14px;
	font-weight: var(--font-weight-regular);
	font-style: italic;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,m=t.label`
	font-size: 14px;
	font-weight: var(--font-weight-bold);
`,f=t.div`
	width: 100%;
	display: flex;
`,h=t.input`
	outline: none;
	background: var(--background-secondary);
	padding: 10px;
	font-size: 16px;
	flex: 1;
	border-radius: 12px;
	color: var(--text);
	margin: 0;
	border: none;
	aria-invalid: ${o=>o.error?"true":"false"};
	border: ${o=>o.error?"1px solid var(--error)":"1px solid var(--background-secondary)"};

	${o=>!o.disableFocusRing&&`
		&:focus {
			border: 1px solid var(--primary);
		}
	`}

	// disabled styling
	&:disabled {
		// TODO: this might need to be adjusted
		background: var(--background-primary-alt);
		color: var(--text-disabled);
		border: 1px solid var(--background-secondary-alt);
		cursor: not-allowed;
	}

	-moz-appearance: textfield;
	appearance: textfield;

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
`,v=t.button`
	margin-bottom: 20px;
	margin-top: 4px;
	padding: 2px 0;
	font-size: 14px;
	display: flex;
	color: var(--text-link);
	background: none;
	border: none;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`,w=t(r)`
	margin-bottom: 8px;
	width: 100%;
	min-width: 130px;
	min-height: 44px;
	font-size: 14px;
`,k=t.div`
	margin-top: 4px;
	text-align: initial;
`,y=t.label`
	font-size: 14px;
`,z=t.button`
	font-size: 14px;
	background: none;
	border: none;
	color: var(--text-link);

	@media (max-width: 480px) {
		display: inline-block;
	}

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;export{s as A,x as F,p as H,h as I,u as L,c as S,d as W,b as a,m as b,f as c,g as d,w as e,k as f,y as g,z as h,l as i,v as j};
//# sourceMappingURL=CZVscq1LCMTLxcs1s_Ud.js.map
