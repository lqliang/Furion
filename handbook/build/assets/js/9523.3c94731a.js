(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9523],{2503:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(3117),a=n(102),o=n(7294),i=n(6010),l=n(5999),c=n(6668),s=n(9960),u="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5",d=["as","id"];function p(e){var t=e.as,n=e.id,p=(0,a.Z)(e,d),f=(0,c.L)().navbar.hideOnScroll;if("h1"===t||!n)return o.createElement(t,(0,r.Z)({},p,{id:void 0}));var h=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof p.children?p.children:n});return o.createElement(t,(0,r.Z)({},p,{className:(0,i.Z)("anchor",f?m:u,p.className),id:n}),p.children,o.createElement(s.Z,{className:"hash-link",to:"#"+n,"aria-label":h,title:h},"\u200b"))}},9523:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ne}});var r=n(3117),a=n(7294),o=n(102),i=n(5742),l=["mdxType","originalType"];var c=n(2389),s=n(6010),u=n(2949),m=n(6668);function d(){var e=(0,m.L)().prism,t=(0,u.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var p=n(5281),f=n(7802),h=n(7594),v=n.n(h),g=(0,f.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),y=(0,f.Z)(/\{([\d,-]+)\}/,{range:1}),b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function k(e,t){var n=e.map((function(e){var n=b[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function E(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,o=t.metastring;if(o&&y.test(o)){var i=o.match(y).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+o+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var l=a[0].className,c=v()(i).filter((function(e){return e>0})).map((function(e){return[e-1,[l]]}));return{lineClassNames:Object.fromEntries(c),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);default:return k(Object.keys(b),t)}}(r,a),u=n.split("\n"),m=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),h=0;h<u.length;){var g=u[h].match(s);if(g){var E=g.slice(1).find((function(e){return void 0!==e}));d[E]?m[d[E]].range+=h+",":p[E]?m[p[E]].start=h:f[E]&&(m[f[E]].range+=m[f[E]].start+"-"+(h-1)+","),u.splice(h,1)}else h+=1}n=u.join("\n");var N={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;v()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}var N="codeBlockContainer_Ckt0",C=["as"];function B(e){var t=e.as,n=(0,o.Z)(e,C),i=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(d());return a.createElement(t,(0,r.Z)({},n,{style:i,className:(0,s.Z)(n.className,N,p.k.common.codeBlock)}))}var Z={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function T(e){var t=e.children,n=e.className;return a.createElement(B,{as:"pre",tabIndex:0,className:(0,s.Z)(Z.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:Z.codeBlockLines},t))}var w=n(4700),L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function j(e,t){var n=(0,a.useState)(),r=n[0],o=n[1],i=(0,a.useCallback)((function(){var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((function(){i()}),[i]),function(e,t,n){void 0===n&&(n=L);var r=(0,w.zX)(t),o=(0,w.Ql)(n);(0,a.useEffect)((function(){var t=new MutationObserver(r);return e&&t.observe(e,o),function(){return t.disconnect()}}),[e,r,o])}(r,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var x={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},_={Prism:n(7410).Z,theme:x};function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}var A=/\r\n|\r|\n/,I=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},O=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},M=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=z({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=z({},n,{backgroundColor:null}),a};function H(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var P=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),S(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?M(e.theme,e.language):void 0;return t.themeDict=n})),S(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=z({},H(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?z({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),S(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),S(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=z({},H(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?z({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),S(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,l=[],c=[l];i>-1;){for(;(o=r[i]++)<a[i];){var s=void 0,u=t[i],m=n[i][o];if("string"==typeof m?(u=i>0?u:["plain"],s=m):(u=O(u,m.type),m.alias&&(u=O(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(A),p=d.length;l.push({types:u,content:d[0]});for(var f=1;f<p;f++)I(l),c.push(l=[]),l.push({types:u,content:d[f]})}else i++,t.push(u),n.push(s),r.push(0),a.push(s.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return I(l),c}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),V=P,D="codeLine_lJS_",R="codeLineNumber_Tfdd",W="codeLineContent_feaV";function q(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,i=e.getLineProps,l=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var c=i({line:t,className:(0,s.Z)(n,o&&D)}),u=t.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},l({token:e,key:t})))}));return a.createElement("span",c,o?a.createElement(a.Fragment,null,a.createElement("span",{className:R}),a.createElement("span",{className:W},u)):u,a.createElement("br",null))}var F=n(5999),G={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function U(e){var t=e.code,n=e.className,r=(0,a.useState)(!1),o=r[0],i=r[1],l=(0,a.useRef)(void 0),c=(0,a.useCallback)((function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(t),i(!0),l.current=window.setTimeout((function(){i(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),a.createElement("button",{type:"button","aria-label":o?(0,F.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,F.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,F.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,G.copyButton,o&&G.copyButtonCopied),onClick:c},a.createElement("span",{className:G.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:G.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:G.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var $="wordWrapButtonIcon_Bwma",Y="wordWrapButtonEnabled_EoeP";function Q(e){var t=e.className,n=e.onClick,r=e.isEnabled,o=(0,F.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,r&&Y),"aria-label":o,title:o},a.createElement("svg",{className:$,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function J(e){var t,n,o,i,l,c,u,p,f,h,v,y=e.children,b=e.className,k=void 0===b?"":b,N=e.metastring,C=e.title,T=e.showLineNumbers,w=e.language,L=(0,m.L)().prism,x=L.defaultLanguage,S=L.magicComments,z=null!=(t=null!=w?w:null==(n=k.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:x,A=d(),I=(o=(0,a.useState)(!1),i=o[0],l=o[1],c=(0,a.useState)(!1),u=c[0],p=c[1],f=(0,a.useRef)(null),h=(0,a.useCallback)((function(){var e=f.current.querySelector("code");i?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),l((function(e){return!e}))}),[f,i]),v=(0,a.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");p(t)}),[f]),j(f,v),(0,a.useEffect)((function(){v()}),[i,v]),(0,a.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:f,isEnabled:i,isCodeScrollable:u,toggle:h}),O=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(g))?void 0:n.groups.title)?t:""}(N)||C,M=E(y,{metastring:N,language:z,magicComments:S}),H=M.lineClassNames,P=M.code,D=null!=T?T:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(N);return a.createElement(B,{as:"div",className:(0,s.Z)(k,z&&!k.includes("language-"+z)&&"language-"+z)},O&&a.createElement("div",{className:Z.codeBlockTitle},O),a.createElement("div",{className:Z.codeBlockContent},a.createElement(V,(0,r.Z)({},_,{theme:A,code:P,language:null!=z?z:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:I.codeBlockRef,className:(0,s.Z)(t,Z.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,s.Z)(Z.codeBlockLines,D&&Z.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(q,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:H[t],showLineNumbers:D})}))))})),a.createElement("div",{className:Z.buttonGroup},(I.isEnabled||I.isCodeScrollable)&&a.createElement(Q,{className:Z.codeButton,onClick:function(){return I.toggle()},isEnabled:I.isEnabled}),a.createElement(U,{className:Z.codeButton,code:P}))))}var K=["children"];function X(e){var t=e.children,n=(0,o.Z)(e,K),i=(0,c.Z)(),l=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof l?J:T;return a.createElement(s,(0,r.Z)({key:String(i)},n),l)}var ee=n(9960);var te=n(6043),ne="details_lb9f",re="isBrowser_bmU9",ae="collapsibleContent_i85q",oe=["summary","children"];function ie(e){return!!e&&("SUMMARY"===e.tagName||ie(e.parentElement))}function le(e,t){return!!e&&(e===t||le(e.parentElement,t))}function ce(e){var t=e.summary,n=e.children,i=(0,o.Z)(e,oe),l=(0,c.Z)(),u=(0,a.useRef)(null),m=(0,te.u)({initialState:!i.open}),d=m.collapsed,p=m.setCollapsed,f=(0,a.useState)(i.open),h=f[0],v=f[1];return a.createElement("details",(0,r.Z)({},i,{ref:u,open:h,"data-collapsed":d,className:(0,s.Z)(ne,l&&re,i.className),onMouseDown:function(e){ie(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;ie(t)&&le(t,u.current)&&(e.preventDefault(),d?(p(!1),v(!0)):p(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(te.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){p(e),v(!e)}},a.createElement("div",{className:ae},n)))}var se="details_b_Ee";function ue(e){var t=Object.assign({},e);return a.createElement(ce,(0,r.Z)({},t,{className:(0,s.Z)("alert alert--info",se,t.className)}))}var me=n(2503);function de(e){return a.createElement(me.Z,e)}var pe="containsTaskList_mC6p";var fe="img_ev3q";var he="admonition_LlT9",ve="admonitionHeading_tbUL",ge="admonitionIcon_kALy",ye="admonitionContent_S0QG";var be={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(F.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(F.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(F.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(F.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(F.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},ke={secondary:"note",important:"info",success:"tip",warning:"danger"};function Ee(e){var t,n=function(e){var t=a.Children.toArray(e),n=t.find((function(e){var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:r}}(e.children),r=n.mdxAdmonitionTitle,o=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:r,children:o})}var Ne={head:function(e){var t=a.Children.map(e.children,(function(e){return a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,r=(n.mdxType,n.originalType,(0,o.Z)(n,l));return a.createElement(e.props.originalType,r)}return e}(e):e}));return a.createElement(i.Z,e,t)},code:function(e){var t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((function(e){var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(X,e)},a:function(e){return a.createElement(ee.Z,e)},pre:function(e){var t;return a.createElement(X,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(ue,(0,r.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,s.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&pe))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,fe))}));var t},h1:function(e){return a.createElement(de,(0,r.Z)({as:"h1"},e))},h2:function(e){return a.createElement(de,(0,r.Z)({as:"h2"},e))},h3:function(e){return a.createElement(de,(0,r.Z)({as:"h3"},e))},h4:function(e){return a.createElement(de,(0,r.Z)({as:"h4"},e))},h5:function(e){return a.createElement(de,(0,r.Z)({as:"h5"},e))},h6:function(e){return a.createElement(de,(0,r.Z)({as:"h6"},e))},admonition:function(e){var t=Ee(e),n=t.children,r=t.type,o=t.title,i=t.icon,l=function(e){var t,n=null!=(t=ke[e])?t:e;return be[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),be.info)}(r),c=null!=o?o:l.label,u=l.iconComponent,m=null!=i?i:a.createElement(u,null);return a.createElement("div",{className:(0,s.Z)(p.k.common.admonition,p.k.common.admonitionType(e.type),"alert","alert--"+l.infimaClassName,he)},a.createElement("div",{className:ve},a.createElement("span",{className:ge},m),c),a.createElement("div",{className:ye},n))},mermaid:function(){return null}}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);