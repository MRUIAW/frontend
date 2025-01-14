"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{39824:function(e,t,s){s.d(t,{Or:function(){return r},Yw:function(){return a},oB:function(){return o},on:function(){return l},wX:function(){return i}});var n=s(42306);async function a(e){let t=await fetch("http://".concat(n.ip,":37520/backend/plugins/").concat(e,"/settings"));return await t.json()}async function r(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;try{let a=await fetch("http://".concat(n.ip,":37520/backend/plugins/").concat(e,"/settings/").concat(t));if(!a.ok)return console.error("Failed to fetch: HTTP status ".concat(a.status)),s;try{let e=await a.json();if(null===e)return s;return e}catch(e){return console.error("Failed to parse JSON response:",e),s}}catch(e){return console.error("An error occurred while getting the setting by key:",e),s}}async function i(e,t,s){try{let a=await fetch("http://".concat(n.ip,":37520/backend/plugins/").concat(e,"/settings/").concat(t,"/set"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:s})});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}catch(e){console.error("An error occurred while setting the setting by key:",e)}}async function o(e){try{let t=await fetch("http://".concat(n.ip,":37520/api/controls/").concat(e,"/change"),{method:"POST",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}catch(e){console.error("An error occurred while triggering the keybind change:",e)}}async function l(e){try{let t=await fetch("http://".concat(n.ip,":37520/api/controls/").concat(e,"/unbind"),{method:"POST",headers:{"Content-Type":"application/json"}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}catch(e){console.error("An error occurred while unbinding the keybind:",e)}}},35182:function(e,t,s){s.d(t,{j:function(){return S}});var n=s(57437),a=s(93022),r=s(63861),i=s(42306),o=s(6512),l=s(95186),d=s(39824),c=s(53647),u=s(81103),f=s(63611),p=s(1828),m=s(62869),h=s(93772),x=s(2265),g=s(85897),b=s(3991),y=s(30401),j=s(32489),w=s(12339),v=s(32759),N=s(2296),k=s(59512),I=s(12658);class _ extends x.Component{render(){let{data:e,translate:t,pluginSettings:s}=this.props,{curSliderValue:a,tempSliderValue:r}=this.state,i=s[e.key]?parseFloat(s[e.key]):a,o=e.options.step||1,l=e.options.suffix||"";return(0,n.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,n.jsxs)("h4",{children:[t(e.name),"  —  ",i,l,null!==r&&r!=i?" → ".concat(r).concat(l):""]}),(0,n.jsx)(g.i,{min:e.options.min,max:e.options.max,defaultValue:[i],step:o,onValueChange:this.handleValueChange,onValueCommit:this.handleValueCommit}),(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:t(e.description)})]})}constructor(e){super(e),this.handleValueChange=e=>{this.setState({tempSliderValue:e[0]})},this.handleValueCommit=e=>{let{plugin:t,data:s,setNeedsRestart:n,mutate:a,translate:r}=this.props;(0,d.wX)(t,s.key,e[0]).then(()=>{s.requires_restart&&n(!0),a(t+"settings"),h.Am.success(r("frontend.settings.number.updated"),{duration:500}),this.setState({curSliderValue:e[0],tempSliderValue:null})})};let t=e.pluginSettings[e.data.key]?parseFloat(e.pluginSettings[e.data.key]):e.default;this.state={curSliderValue:t,tempSliderValue:null}}}function S(e){let{data:t,plugin:s,enabled:g,className:S}=e,{data:C,error:z,isLoading:V}=(0,r.ZP)(s+"settings",()=>(0,d.Yw)(s)),[R,A]=(0,x.useState)(!1);if((0,x.useEffect)(()=>{A(!1),(0,r.JG)(s+"settings")},[s]),(0,x.useEffect)(()=>{try{let e=null;if(g){let s=t[0];void 0==s.refresh_rate&&(s.refresh_rate=2),e=setInterval(()=>{(0,r.JG)("plugin_ui_plugins")},1e3*s.refresh_rate)}else e=setInterval(()=>{(0,r.JG)("plugin_ui_plugins")},2e3);return()=>clearInterval(e)}catch(e){}},[t,s,g]),void 0==g&&(g=!0),V)return(0,n.jsx)(a.O,{});if(z)return(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,b.Iu)("frontend.settings.error",z)});if(!t||!C)return(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,b.Iu)("frontend.settings.backend_no_data")});let T={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl"},P={thin:"font-thin",light:"font-light",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},Z=e=>(0,n.jsx)("p",{className:P[e.options.weight]+" "+T[e.options.size]+" "+e.classname,style:{whiteSpace:"pre-wrap"},children:(0,b.Iu)(e.text)}),J=e=>(0,n.jsx)("p",{className:P[e.options.weight]+" text-muted-foreground "+T[e.options.size]+" "+e.classname,style:{whiteSpace:"pre-wrap"},children:(0,b.Iu)(e.text)}),E=e=>(0,n.jsx)("p",{className:P[e.options.weight]+" "+T[e.options.size]+" "+e.classname,style:{whiteSpace:"pre-wrap"},children:(0,b.Iu)(e.text)}),G=e=>(0,n.jsx)("a",{href:e.url,className:P[e.options.weight]+" text-accent-foreground "+T[e.options.size]+" "+e.classname,style:{whiteSpace:"pre-wrap"},target:"_blank",children:(0,b.Iu)(e.text)});function O(e,t){return(0,n.jsx)(N.U,{components:{code(e){let{node:s,inline:a,className:r,children:i,...o}=e,l=String(i).includes("\n"),d=/language-(\w+)/.exec(r||""),c=d?d[1]:"json";return l?(0,n.jsx)(k.Z,{language:c,style:I.Z,customStyle:{margin:t?"0 0":"1rem 0",padding:"1rem",borderRadius:"0.5rem",fontSize:"0.75rem",fontFamily:"var(--font-geist-mono)"},children:String(i).replace(/\n$/,"")}):(0,n.jsx)("code",{className:"rounded-md bg-zinc-800 p-1 font-geist-mono text-xs",...o,children:i})},img(e){let{node:t,...s}=e;return(0,n.jsx)("img",{...s,className:"rounded-md"})}},className:e.classname,children:e})}let q=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{})}),X=e=>e?(0,n.jsx)("div",{style:{height:e+"px"}}):(0,n.jsx)("div",{className:"h-4"}),Y=e=>{if(void 0==C[e.key]&&(void 0!=e.options.default?(console.log("Setting default value for",e.key),C[e.key]=e.options.default):C[e.key]=e.options.type),"string"==e.options.type||"password"==e.options.type){let t="password"==e.options.type?"password":"text",a="";return a="password"==t?"•".repeat(C[e.key].length):C[e.key],(0,n.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,n.jsx)("h4",{children:(0,b.Iu)(e.name)}),(0,n.jsx)(l.I,{type:t,placeholder:a,onChange:t=>{(0,d.wX)(s,e.key,t.target.value).then(()=>{e.requires_restart&&A(!0),(0,r.JG)(s+"settings"),h.Am.success((0,b.Iu)("frontend.settings.string.updated"),{duration:500})})}}),(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,b.Iu)(e.description)})]})}if("number"==e.options.type)return(0,n.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,n.jsx)("h4",{children:(0,b.Iu)(e.name)}),(0,n.jsx)(l.I,{type:"number",placeholder:C[e.key],className:"font-customMono",onChange:t=>{(0,d.wX)(s,e.key,parseFloat(t.target.value)).then(()=>{e.requires_restart&&A(!0),(0,r.JG)(s+"settings"),h.Am.success((0,b.Iu)("frontend.settings.number.updated"),{duration:500})})}}),(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,b.Iu)(e.description)})]})},F=e=>(0,n.jsx)(_,{pluginSettings:C,data:e,plugin:s,setNeedsRestart:A,mutate:r.JG,toast:h.Am,translate:b.Iu,default:e.options.default}),U=e=>{let t=C[e.key];return(null==t||"boolean"!=typeof t)&&(void 0!=e.options.default?(console.log("Setting default value for",e.key),C[e.key]=e.options.default):C[e.key]=!1),(0,n.jsxs)("div",{className:"flex justify-between p-0 items-center"+L(e.options.border),children:[(0,n.jsxs)("div",{className:"flex flex-col gap-1 pr-12",children:[(0,n.jsx)("h4",{className:"font-semibold",children:(0,b.Iu)(e.name)}),(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,b.Iu)(e.description)})]}),(0,n.jsx)(p.r,{checked:t,onCheckedChange:t=>{(0,d.wX)(s,e.key,t).then(()=>{e.requires_restart&&A(!0),(0,r.JG)(s+"settings"),h.Am.success((0,b.Iu)("frontend.settings.boolean.updated"),{duration:500})})}})]})},Q=e=>(void 0==C[e.key]&&(void 0!=e.options.default?(console.log("Setting default value for",e.key),C[e.key]=e.options.default):C[e.key]=e.options.options[0]),(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("h4",{children:(0,b.Iu)(e.name)}),(0,n.jsxs)(c.Ph,{defaultValue:C[e.key],onValueChange:t=>{(0,d.wX)(s,e.key,t).then(()=>{e.requires_restart&&A(!0),(0,r.JG)(s+"settings"),h.Am.success((0,b.Iu)("frontend.settings.enum.updated"),{duration:500})})},children:[(0,n.jsx)(c.i4,{children:(0,n.jsx)(c.ki,{placeholder:C[e.key],children:C[e.key]})}),(0,n.jsx)(c.Bw,{className:"bg-background font-geist",children:e.options.options.map(e=>(0,n.jsx)(c.Ql,{value:e,children:e},e))})]}),(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,b.Iu)(e.description)})]})),B=e=>(0,n.jsxs)("div",{className:"flex gap-4 w-full items-center",children:[(0,n.jsx)(f.Z,{pressed:C[e.key]&&C[e.key]||!1,onPressedChange:t=>{(0,d.wX)(s,e.key,t).then(()=>{e.requires_restart&&A(!0),(0,r.JG)(s+"settings"),h.Am.success((0,b.Iu)("frontend.settings.boolean.updated"),{duration:500})})},className:"w-8 h-8 p-[7px] data-[state=on]:bg-background data-[state=on]:hover:bg-white/10 ",variant:"outline",children:C[e.key]&&C[e.key]?(0,n.jsx)(y.Z,{}):(0,n.jsx)(j.Z,{className:"text-muted-foreground/40"})}),e.options.separator&&(0,n.jsx)(o.Z,{orientation:"vertical"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:(0,b.Iu)(e.name)}),(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,b.Iu)(e.description)})]})]}),H=e=>""==e.title?(0,n.jsx)("div",{className:"flex justify-between items-center w-full"+L(e.options.border),children:(0,n.jsx)(m.z,{variant:"outline",onClick:()=>{(0,i.iq)(s,e.options.target,[],{}).then(()=>{h.Am.success((0,b.Iu)("Success"),{duration:500})})},className:"min-w-32 w-full "+e.classname,children:(0,b.Iu)(e.text)})}):(0,n.jsxs)("div",{className:"flex justify-between p-4 items-center"+L(e.options.border)+" "+e.classname,children:[(0,n.jsxs)("div",{className:"flex flex-col gap-1 pr-12",children:[(0,n.jsx)("h4",{className:"font-semibold",children:(0,b.Iu)(e.title)}),(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,b.Iu)(e.description)})]}),(0,n.jsx)(m.z,{variant:"outline",onClick:()=>{(0,i.iq)(s,e.options.target,[],{}).then(()=>{h.Am.success((0,b.Iu)("Success"),{duration:500})})},className:"min-w-32",children:(0,b.Iu)(e.text)})]}),$=e=>{let t=e.value,s=e.min,a=e.max;return(0,n.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,n.jsx)(v.E,{value:(t-s)/(a-s)*100}),(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:(0,b.Iu)(e.description)})]})},D=()=>(0,n.jsxs)("div",{className:"flex justify-between p-4 items-center border rounded-md backdrop-blur-md gap-10",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:"Please enable the plugin."}),(0,n.jsx)("p",{className:"text-xs text-muted-foreground",children:"This plugin is disabled. Enable it to access the rest of this plugin's settings."})]}),(0,n.jsxs)(m.z,{variant:"outline",onClick:()=>{(0,i.TN)(s).then(()=>{h.Am.success("Plugin enabled",{duration:500})})},className:"min-w-32",children:["Enable ",s]})]}),L=e=>e?" p-4 border rounded-md":" p-4",M=e=>{Array.isArray(e)||(e=[e]);let t=[];for(let s of e){let e=Object.keys(s)[0],a=s[e];"enabled_lock"==e&&(g?t.push(M(a.components)):t.push((0,n.jsxs)("div",{className:"w-full relative",children:[(0,n.jsx)("div",{className:"absolute inset-0 flex items-center justify-center z-10 w-full",children:(0,n.jsx)(D,{})}),(0,n.jsx)("div",{className:"p-3 opacity-50 blur-sm",children:M(a.components)})]}))),"title"==e&&t.push(Z(a)),"description"==e&&t.push(J(a)),"label"==e&&t.push(E(a)),"link"==e&&t.push(G(a)),"markdown"==e&&t.push(O(a.text)),"separator"==e&&t.push(q()),"space"==e&&t.push(X(a.height)),"group"==e&&("horizontal"==a.direction?t.push((0,n.jsx)("div",{className:"flex w-full overflow-x-auto rounded-md items-center text-center"+L(a.border)+" "+a.classname,style:{gap:a.gap+"px",padding:a.padding+"px"},children:M(a.components)})):t.push((0,n.jsx)("div",{className:"flex flex-col overflow-x-auto w-full rounded-md"+L(a.border)+" "+a.classname,style:{gap:a.gap+"px",padding:a.padding+"px"},children:M(a.components)}))),"tabview"==e&&t.push((0,n.jsxs)(w.mQ,{className:"w-full",defaultValue:a.components[0].tab.name,children:[(0,n.jsx)(w.dr,{className:"w-full bg-transparent border",children:a.components.map((e,t)=>(0,n.jsx)(w.SP,{value:e.tab.name,children:(0,b.Iu)(e.tab.name)},t))}),a.components.map((e,t)=>(0,n.jsx)(w.nU,{value:e.tab.name,className:"w-full rounded-md p-2 flex gap-6 flex-col data-[state=inactive]:hidden",children:M(e)},t))]})),"tab"==e&&t.push(M(a.components)),"padding"==e&&t.push((0,n.jsx)("div",{style:{padding:a.padding},children:M(a.components)})),"tooltip"==e&&t.push((0,n.jsxs)(u.u,{children:[(0,n.jsx)(u.aJ,{children:M(a.components)}),(0,n.jsx)(u._v,{className:a.classname,style:{whiteSpace:"pre-wrap"},children:O(a.text,!0)})]})),"geist"==e&&t.push((0,n.jsx)("div",{className:"flex flex-col gap-4 font-geist",children:M(a.components)})),"progress_bar"==e&&t.push($(a)),"button"==e&&t.push(H(a)),"input"==e&&t.push(Y(a)),"slider"==e&&t.push(F(a)),"switch"==e&&t.push(U(a)),"toggle"==e&&t.push(B(a)),"selector"==e&&t.push(Q(a))}return t};return(0,n.jsx)(u.pn,{delayDuration:0,children:(0,n.jsxs)("div",{className:"text-left flex flex-col w-full max-w-[calc(60vw-64px)] gap-6 relative "+S,children:[M(t),(0,n.jsx)("div",{className:"h-12"})]})})}},54224:function(e,t,s){s.d(t,{Z:function(){return l}});var n=s(57437),a=s(35182),r=s(42306),i=s(63861),o=s(44363);function l(e){let{url:t,className:s}=e,{data:l}=(0,i.ZP)("pages",()=>(0,r.E9)(),{refreshInterval:1e3});return l&&l[t]?(0,n.jsx)(o.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6},children:(0,n.jsx)(a.j,{plugin:l[t][0].settings,data:l[t],enabled:!0,className:s})}):(0,n.jsx)("div",{})}},95186:function(e,t,s){s.d(t,{I:function(){return i}});var n=s(57437),a=s(2265),r=s(94508);let i=a.forwardRef((e,t)=>{let{className:s,type:a,...i}=e;return(0,n.jsx)("input",{type:a,className:(0,r.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...i})});i.displayName="Input"},32759:function(e,t,s){s.d(t,{E:function(){return o}});var n=s(57437),a=s(2265),r=s(88753),i=s(94508);let o=a.forwardRef((e,t)=>{let{className:s,value:a,...o}=e;return(0,n.jsx)(r.fC,{ref:t,className:(0,i.cn)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",s),...o,children:(0,n.jsx)(r.z$,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:"translateX(-".concat(100-(a||0),"%)")}})})});o.displayName=r.fC.displayName},53647:function(e,t,s){s.d(t,{Bw:function(){return p},Ph:function(){return l},Ql:function(){return m},i4:function(){return c},ki:function(){return d}});var n=s(57437),a=s(2265),r=s(20653),i=s(56873),o=s(94508);let l=i.fC;i.ZA;let d=i.B4,c=a.forwardRef((e,t)=>{let{className:s,children:a,...l}=e;return(0,n.jsxs)(i.xz,{ref:t,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",s),...l,children:[a,(0,n.jsx)(i.JO,{asChild:!0,children:(0,n.jsx)(r.jnn,{className:"h-4 w-4 opacity-50"})})]})});c.displayName=i.xz.displayName;let u=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(i.u_,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",s),...a,children:(0,n.jsx)(r.g8U,{})})});u.displayName=i.u_.displayName;let f=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(i.$G,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",s),...a,children:(0,n.jsx)(r.v4q,{})})});f.displayName=i.$G.displayName;let p=a.forwardRef((e,t)=>{let{className:s,children:a,position:r="popper",...l}=e;return(0,n.jsx)(i.h_,{children:(0,n.jsxs)(i.VY,{ref:t,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",s),position:r,...l,children:[(0,n.jsx)(u,{}),(0,n.jsx)(i.l_,{className:(0,o.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,n.jsx)(f,{})]})})});p.displayName=i.VY.displayName,a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(i.__,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",s),...a})}).displayName=i.__.displayName;let m=a.forwardRef((e,t)=>{let{className:s,children:a,...l}=e;return(0,n.jsxs)(i.ck,{ref:t,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),...l,children:[(0,n.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(i.wU,{children:(0,n.jsx)(r.nQG,{className:"h-4 w-4"})})}),(0,n.jsx)(i.eT,{children:a})]})});m.displayName=i.ck.displayName,a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(i.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",s),...a})}).displayName=i.Z0.displayName},6512:function(e,t,s){s.d(t,{Z:function(){return o}});var n=s(57437),a=s(2265),r=s(55156),i=s(94508);let o=a.forwardRef((e,t)=>{let{className:s,orientation:a="horizontal",decorative:o=!0,...l}=e;return(0,n.jsx)(r.f,{ref:t,decorative:o,orientation:a,className:(0,i.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",s),...l})});o.displayName=r.f.displayName},93022:function(e,t,s){s.d(t,{O:function(){return r}});var n=s(57437),a=s(94508);function r(e){let{className:t,...s}=e;return(0,n.jsx)("div",{className:(0,a.cn)("animate-pulse rounded-md bg-primary/10",t),...s})}},85897:function(e,t,s){s.d(t,{i:function(){return o}});var n=s(57437),a=s(2265),r=s(38846),i=s(94508);let o=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsxs)(r.fC,{ref:t,className:(0,i.cn)("relative flex w-full touch-none select-none items-center",s),...a,children:[(0,n.jsx)(r.fQ,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",children:(0,n.jsx)(r.e6,{className:"absolute h-full bg-primary"})}),(0,n.jsx)(r.bU,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:h-5 hover:w-5 active:h-3.5 active:w-3.5"})]})});o.displayName=r.fC.displayName},1828:function(e,t,s){s.d(t,{r:function(){return o}});var n=s(57437),a=s(2265),r=s(50721),i=s(94508);let o=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(r.fC,{className:(0,i.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",s),...a,ref:t,children:(0,n.jsx)(r.bU,{className:(0,i.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});o.displayName=r.fC.displayName},12339:function(e,t,s){s.d(t,{SP:function(){return d},dr:function(){return l},mQ:function(){return o},nU:function(){return c}});var n=s(57437),a=s(2265),r=s(20271),i=s(94508);let o=r.fC,l=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(r.aV,{ref:t,className:(0,i.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",s),...a})});l.displayName=r.aV.displayName;let d=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(r.xz,{ref:t,className:(0,i.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",s),...a})});d.displayName=r.xz.displayName;let c=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,n.jsx)(r.VY,{ref:t,className:(0,i.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",s),...a})});c.displayName=r.VY.displayName},63611:function(e,t,s){s.d(t,{Z:function(){return d}});var n=s(57437),a=s(2265),r=s(9987),i=s(77712),o=s(94508);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-3",sm:"h-8 px-2",lg:"h-10 px-3"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:s,variant:a,size:i,...d}=e;return(0,n.jsx)(r.f,{ref:t,className:(0,o.cn)(l({variant:a,size:i,className:s})),...d})});d.displayName=r.f.displayName},81103:function(e,t,s){s.d(t,{_v:function(){return c},aJ:function(){return d},pn:function(){return o},u:function(){return l}});var n=s(57437),a=s(2265),r=s(61312),i=s(94508);let o=r.zt,l=r.fC,d=r.xz,c=a.forwardRef((e,t)=>{let{className:s,sideOffset:a=4,...o}=e;return(0,n.jsx)(r.h_,{children:(0,n.jsx)(r.VY,{ref:t,sideOffset:a,className:(0,i.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...o})})});c.displayName=r.VY.displayName}}]);