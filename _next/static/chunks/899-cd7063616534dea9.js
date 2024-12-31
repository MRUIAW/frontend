"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{1119:function(e,t,r){r.d(t,{Z:function(){return n}});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}},74610:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}},62484:function(e,t,r){r.d(t,{u:function(){return n}});function n(e,[t,r]){return Math.min(r,Math.max(t,e))}},56873:function(e,t,r){r.d(t,{$G:function(){return eK},B4:function(){return eI},JO:function(){return eD},VY:function(){return eV},Z0:function(){return eF},ZA:function(){return eL},__:function(){return eW},ck:function(){return eH},eT:function(){return eA},fC:function(){return eE},h_:function(){return eN},l_:function(){return e_},u_:function(){return eO},wU:function(){return eB},xz:function(){return eP}});var n=r(2265),l=r(54887),o=r(62484),a=r(6741),i=r(29863),u=r(98575),s=r(73966),d=r(29114),c=r(15278),p=r(86097),f=r(99103),v=r(99255),h=r(18423),m=r(83832),g=r(66840),w=r(37053),x=r(26606),y=r(80886),b=r(61188),S=r(6718),C=r(95098),j=r(5478),M=r(99157),T=r(57437),k=[" ","Enter","ArrowUp","ArrowDown"],R=[" ","Enter"],E="Select",[P,I,D]=(0,i.B)(E),[N,V]=(0,s.b)(E,[D,h.D7]),_=(0,h.D7)(),[L,W]=N(E),[H,A]=N(E),B=e=>{let{__scopeSelect:t,children:r,open:l,defaultOpen:o,onOpenChange:a,value:i,defaultValue:u,onValueChange:s,dir:c,name:p,autoComplete:f,disabled:m,required:g,form:w}=e,x=_(t),[b,S]=n.useState(null),[C,j]=n.useState(null),[M,k]=n.useState(!1),R=(0,d.gm)(c),[E=!1,I]=(0,y.T)({prop:l,defaultProp:o,onChange:a}),[D,N]=(0,y.T)({prop:i,defaultProp:u,onChange:s}),V=n.useRef(null),W=!b||w||!!b.closest("form"),[A,B]=n.useState(new Set),O=Array.from(A).map(e=>e.props.value).join(";");return(0,T.jsx)(h.fC,{...x,children:(0,T.jsxs)(L,{required:g,scope:t,trigger:b,onTriggerChange:S,valueNode:C,onValueNodeChange:j,valueNodeHasChildren:M,onValueNodeHasChildrenChange:k,contentId:(0,v.M)(),value:D,onValueChange:N,open:E,onOpenChange:I,dir:R,triggerPointerDownPosRef:V,disabled:m,children:[(0,T.jsx)(P.Provider,{scope:t,children:(0,T.jsx)(H,{scope:e.__scopeSelect,onNativeOptionAdd:n.useCallback(e=>{B(t=>new Set(t).add(e))},[]),onNativeOptionRemove:n.useCallback(e=>{B(t=>{let r=new Set(t);return r.delete(e),r})},[]),children:r})}),W?(0,T.jsxs)(eT,{"aria-hidden":!0,required:g,tabIndex:-1,name:p,autoComplete:f,value:D,onChange:e=>N(e.target.value),disabled:m,form:w,children:[void 0===D?(0,T.jsx)("option",{value:""}):null,Array.from(A)]},O):null]})})};B.displayName=E;var O="SelectTrigger",K=n.forwardRef((e,t)=>{let{__scopeSelect:r,disabled:l=!1,...o}=e,i=_(r),s=W(O,r),d=s.disabled||l,c=(0,u.e)(t,s.onTriggerChange),p=I(r),f=n.useRef("touch"),[v,m,w]=ek(e=>{let t=p().filter(e=>!e.disabled),r=t.find(e=>e.value===s.value),n=eR(t,e,r);void 0!==n&&s.onValueChange(n.value)}),x=e=>{d||(s.onOpenChange(!0),w()),e&&(s.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,T.jsx)(h.ee,{asChild:!0,...i,children:(0,T.jsx)(g.WV.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,"data-placeholder":eM(s.value)?"":void 0,...o,ref:c,onClick:(0,a.M)(o.onClick,e=>{e.currentTarget.focus(),"mouse"!==f.current&&x(e)}),onPointerDown:(0,a.M)(o.onPointerDown,e=>{f.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(x(e),e.preventDefault())}),onKeyDown:(0,a.M)(o.onKeyDown,e=>{let t=""!==v.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&k.includes(e.key)&&(x(),e.preventDefault())})})})});K.displayName=O;var F="SelectValue",U=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:n,style:l,children:o,placeholder:a="",...i}=e,s=W(F,r),{onValueNodeHasChildrenChange:d}=s,c=void 0!==o,p=(0,u.e)(t,s.onValueNodeChange);return(0,b.b)(()=>{d(c)},[d,c]),(0,T.jsx)(g.WV.span,{...i,ref:p,style:{pointerEvents:"none"},children:eM(s.value)?(0,T.jsx)(T.Fragment,{children:a}):o})});U.displayName=F;var z=n.forwardRef((e,t)=>{let{__scopeSelect:r,children:n,...l}=e;return(0,T.jsx)(g.WV.span,{"aria-hidden":!0,...l,ref:t,children:n||"▼"})});z.displayName="SelectIcon";var Z=e=>(0,T.jsx)(m.h,{asChild:!0,...e});Z.displayName="SelectPortal";var Y="SelectContent",q=n.forwardRef((e,t)=>{let r=W(Y,e.__scopeSelect),[o,a]=n.useState();return((0,b.b)(()=>{a(new DocumentFragment)},[]),r.open)?(0,T.jsx)(J,{...e,ref:t}):o?l.createPortal((0,T.jsx)(X,{scope:e.__scopeSelect,children:(0,T.jsx)(P.Slot,{scope:e.__scopeSelect,children:(0,T.jsx)("div",{children:e.children})})}),o):null});q.displayName=Y;var[X,G]=N(Y),J=n.forwardRef((e,t)=>{let{__scopeSelect:r,position:l="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:i,onPointerDownOutside:s,side:d,sideOffset:v,align:h,alignOffset:m,arrowPadding:g,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:S,avoidCollisions:C,...k}=e,R=W(Y,r),[E,P]=n.useState(null),[D,N]=n.useState(null),V=(0,u.e)(t,e=>P(e)),[_,L]=n.useState(null),[H,A]=n.useState(null),B=I(r),[O,K]=n.useState(!1),F=n.useRef(!1);n.useEffect(()=>{if(E)return(0,j.Ry)(E)},[E]),(0,p.EW)();let U=n.useCallback(e=>{let[t,...r]=B().map(e=>e.ref.current),[n]=r.slice(-1),l=document.activeElement;for(let r of e)if(r===l||(null==r||r.scrollIntoView({block:"nearest"}),r===t&&D&&(D.scrollTop=0),r===n&&D&&(D.scrollTop=D.scrollHeight),null==r||r.focus(),document.activeElement!==l))return},[B,D]),z=n.useCallback(()=>U([_,E]),[U,_,E]);n.useEffect(()=>{O&&z()},[O,z]);let{onOpenChange:Z,triggerPointerDownPosRef:q}=R;n.useEffect(()=>{if(E){let e={x:0,y:0},t=t=>{var r,n,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(l=null===(r=q.current)||void 0===r?void 0:r.x)&&void 0!==l?l:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(n=q.current)||void 0===n?void 0:n.y)&&void 0!==o?o:0))}},r=r=>{e.x<=10&&e.y<=10?r.preventDefault():E.contains(r.target)||Z(!1),document.removeEventListener("pointermove",t),q.current=null};return null!==q.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",r,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r,{capture:!0})}}},[E,Z,q]),n.useEffect(()=>{let e=()=>Z(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[Z]);let[G,J]=ek(e=>{let t=B().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),n=eR(t,e,r);n&&setTimeout(()=>n.ref.current.focus())}),ee=n.useCallback((e,t,r)=>{let n=!F.current&&!r;(void 0!==R.value&&R.value===t||n)&&(L(e),n&&(F.current=!0))},[R.value]),et=n.useCallback(()=>null==E?void 0:E.focus(),[E]),er=n.useCallback((e,t,r)=>{let n=!F.current&&!r;(void 0!==R.value&&R.value===t||n)&&A(e)},[R.value]),en="popper"===l?Q:$,el=en===Q?{side:d,sideOffset:v,align:h,alignOffset:m,arrowPadding:g,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:S,avoidCollisions:C}:{};return(0,T.jsx)(X,{scope:r,content:E,viewport:D,onViewportChange:N,itemRefCallback:ee,selectedItem:_,onItemLeave:et,itemTextRefCallback:er,focusSelectedItem:z,selectedItemText:H,position:l,isPositioned:O,searchRef:G,children:(0,T.jsx)(M.Z,{as:w.g7,allowPinchZoom:!0,children:(0,T.jsx)(f.M,{asChild:!0,trapped:R.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,a.M)(o,e=>{var t;null===(t=R.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()}),children:(0,T.jsx)(c.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>R.onOpenChange(!1),children:(0,T.jsx)(en,{role:"listbox",id:R.contentId,"data-state":R.open?"open":"closed",dir:R.dir,onContextMenu:e=>e.preventDefault(),...k,...el,onPlaced:()=>K(!0),ref:V,style:{display:"flex",flexDirection:"column",outline:"none",...k.style},onKeyDown:(0,a.M)(k.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||J(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=B().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let r=e.target,n=t.indexOf(r);t=t.slice(n+1)}setTimeout(()=>U(t)),e.preventDefault()}})})})})})})});J.displayName="SelectContentImpl";var $=n.forwardRef((e,t)=>{let{__scopeSelect:r,onPlaced:l,...a}=e,i=W(Y,r),s=G(Y,r),[d,c]=n.useState(null),[p,f]=n.useState(null),v=(0,u.e)(t,e=>f(e)),h=I(r),m=n.useRef(!1),w=n.useRef(!0),{viewport:x,selectedItem:y,selectedItemText:S,focusSelectedItem:C}=s,j=n.useCallback(()=>{if(i.trigger&&i.valueNode&&d&&p&&x&&y&&S){let e=i.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),r=i.valueNode.getBoundingClientRect(),n=S.getBoundingClientRect();if("rtl"!==i.dir){let l=n.left-t.left,a=r.left-l,i=e.left-a,u=e.width+i,s=Math.max(u,t.width),c=window.innerWidth-10,p=(0,o.u)(a,[10,Math.max(10,c-s)]);d.style.minWidth=u+"px",d.style.left=p+"px"}else{let l=t.right-n.right,a=window.innerWidth-r.right-l,i=window.innerWidth-e.right-a,u=e.width+i,s=Math.max(u,t.width),c=window.innerWidth-10,p=(0,o.u)(a,[10,Math.max(10,c-s)]);d.style.minWidth=u+"px",d.style.right=p+"px"}let a=h(),u=window.innerHeight-20,s=x.scrollHeight,c=window.getComputedStyle(p),f=parseInt(c.borderTopWidth,10),v=parseInt(c.paddingTop,10),g=parseInt(c.borderBottomWidth,10),w=f+v+s+parseInt(c.paddingBottom,10)+g,b=Math.min(5*y.offsetHeight,w),C=window.getComputedStyle(x),j=parseInt(C.paddingTop,10),M=parseInt(C.paddingBottom,10),T=e.top+e.height/2-10,k=y.offsetHeight/2,R=f+v+(y.offsetTop+k);if(R<=T){let e=a.length>0&&y===a[a.length-1].ref.current;d.style.bottom="0px";let t=p.clientHeight-x.offsetTop-x.offsetHeight;d.style.height=R+Math.max(u-T,k+(e?M:0)+t+g)+"px"}else{let e=a.length>0&&y===a[0].ref.current;d.style.top="0px";let t=Math.max(T,f+x.offsetTop+(e?j:0)+k);d.style.height=t+(w-R)+"px",x.scrollTop=R-T+x.offsetTop}d.style.margin="".concat(10,"px 0"),d.style.minHeight=b+"px",d.style.maxHeight=u+"px",null==l||l(),requestAnimationFrame(()=>m.current=!0)}},[h,i.trigger,i.valueNode,d,p,x,y,S,i.dir,l]);(0,b.b)(()=>j(),[j]);let[M,k]=n.useState();(0,b.b)(()=>{p&&k(window.getComputedStyle(p).zIndex)},[p]);let R=n.useCallback(e=>{e&&!0===w.current&&(j(),null==C||C(),w.current=!1)},[j,C]);return(0,T.jsx)(ee,{scope:r,contentWrapper:d,shouldExpandOnScrollRef:m,onScrollButtonChange:R,children:(0,T.jsx)("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:M},children:(0,T.jsx)(g.WV.div,{...a,ref:v,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});$.displayName="SelectItemAlignedPosition";var Q=n.forwardRef((e,t)=>{let{__scopeSelect:r,align:n="start",collisionPadding:l=10,...o}=e,a=_(r);return(0,T.jsx)(h.VY,{...a,...o,ref:t,align:n,collisionPadding:l,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Q.displayName="SelectPopperPosition";var[ee,et]=N(Y,{}),er="SelectViewport",en=n.forwardRef((e,t)=>{let{__scopeSelect:r,nonce:l,...o}=e,i=G(er,r),s=et(er,r),d=(0,u.e)(t,i.onViewportChange),c=n.useRef(0);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),(0,T.jsx)(P.Slot,{scope:r,children:(0,T.jsx)(g.WV.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:d,style:{position:"relative",flex:1,overflow:"hidden auto",...o.style},onScroll:(0,a.M)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:r,shouldExpandOnScrollRef:n}=s;if((null==n?void 0:n.current)&&r){let e=Math.abs(c.current-t.scrollTop);if(e>0){let n=window.innerHeight-20,l=Math.max(parseFloat(r.style.minHeight),parseFloat(r.style.height));if(l<n){let o=l+e,a=Math.min(n,o),i=o-a;r.style.height=a+"px","0px"===r.style.bottom&&(t.scrollTop=i>0?i:0,r.style.justifyContent="flex-end")}}}c.current=t.scrollTop})})})]})});en.displayName=er;var el="SelectGroup",[eo,ea]=N(el),ei=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=(0,v.M)();return(0,T.jsx)(eo,{scope:r,id:l,children:(0,T.jsx)(g.WV.div,{role:"group","aria-labelledby":l,...n,ref:t})})});ei.displayName=el;var eu="SelectLabel",es=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=ea(eu,r);return(0,T.jsx)(g.WV.div,{id:l.id,...n,ref:t})});es.displayName=eu;var ed="SelectItem",[ec,ep]=N(ed),ef=n.forwardRef((e,t)=>{let{__scopeSelect:r,value:l,disabled:o=!1,textValue:i,...s}=e,d=W(ed,r),c=G(ed,r),p=d.value===l,[f,h]=n.useState(null!=i?i:""),[m,w]=n.useState(!1),x=(0,u.e)(t,e=>{var t;return null===(t=c.itemRefCallback)||void 0===t?void 0:t.call(c,e,l,o)}),y=(0,v.M)(),b=n.useRef("touch"),S=()=>{o||(d.onValueChange(l),d.onOpenChange(!1))};if(""===l)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,T.jsx)(ec,{scope:r,value:l,disabled:o,textId:y,isSelected:p,onItemTextChange:n.useCallback(e=>{h(t=>{var r;return t||(null!==(r=null==e?void 0:e.textContent)&&void 0!==r?r:"").trim()})},[]),children:(0,T.jsx)(P.ItemSlot,{scope:r,value:l,disabled:o,textValue:f,children:(0,T.jsx)(g.WV.div,{role:"option","aria-labelledby":y,"data-highlighted":m?"":void 0,"aria-selected":p&&m,"data-state":p?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...s,ref:x,onFocus:(0,a.M)(s.onFocus,()=>w(!0)),onBlur:(0,a.M)(s.onBlur,()=>w(!1)),onClick:(0,a.M)(s.onClick,()=>{"mouse"!==b.current&&S()}),onPointerUp:(0,a.M)(s.onPointerUp,()=>{"mouse"===b.current&&S()}),onPointerDown:(0,a.M)(s.onPointerDown,e=>{b.current=e.pointerType}),onPointerMove:(0,a.M)(s.onPointerMove,e=>{if(b.current=e.pointerType,o){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}else"mouse"===b.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,a.M)(s.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}}),onKeyDown:(0,a.M)(s.onKeyDown,e=>{var t;(null===(t=c.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(R.includes(e.key)&&S()," "===e.key&&e.preventDefault())})})})})});ef.displayName=ed;var ev="SelectItemText",eh=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:o,style:a,...i}=e,s=W(ev,r),d=G(ev,r),c=ep(ev,r),p=A(ev,r),[f,v]=n.useState(null),h=(0,u.e)(t,e=>v(e),c.onItemTextChange,e=>{var t;return null===(t=d.itemTextRefCallback)||void 0===t?void 0:t.call(d,e,c.value,c.disabled)}),m=null==f?void 0:f.textContent,w=n.useMemo(()=>(0,T.jsx)("option",{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:y}=p;return(0,b.b)(()=>(x(w),()=>y(w)),[x,y,w]),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(g.WV.span,{id:c.textId,...i,ref:h}),c.isSelected&&s.valueNode&&!s.valueNodeHasChildren?l.createPortal(i.children,s.valueNode):null]})});eh.displayName=ev;var em="SelectItemIndicator",eg=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return ep(em,r).isSelected?(0,T.jsx)(g.WV.span,{"aria-hidden":!0,...n,ref:t}):null});eg.displayName=em;var ew="SelectScrollUpButton",ex=n.forwardRef((e,t)=>{let r=G(ew,e.__scopeSelect),l=et(ew,e.__scopeSelect),[o,a]=n.useState(!1),i=(0,u.e)(t,l.onScrollButtonChange);return(0,b.b)(()=>{if(r.viewport&&r.isPositioned){let e=function(){a(t.scrollTop>0)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,T.jsx)(eS,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null});ex.displayName=ew;var ey="SelectScrollDownButton",eb=n.forwardRef((e,t)=>{let r=G(ey,e.__scopeSelect),l=et(ey,e.__scopeSelect),[o,a]=n.useState(!1),i=(0,u.e)(t,l.onScrollButtonChange);return(0,b.b)(()=>{if(r.viewport&&r.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;a(Math.ceil(t.scrollTop)<e)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,T.jsx)(eS,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null});eb.displayName=ey;var eS=n.forwardRef((e,t)=>{let{__scopeSelect:r,onAutoScroll:l,...o}=e,i=G("SelectScrollButton",r),u=n.useRef(null),s=I(r),d=n.useCallback(()=>{null!==u.current&&(window.clearInterval(u.current),u.current=null)},[]);return n.useEffect(()=>()=>d(),[d]),(0,b.b)(()=>{var e;let t=s().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[s]),(0,T.jsx)(g.WV.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerDown:(0,a.M)(o.onPointerDown,()=>{null===u.current&&(u.current=window.setInterval(l,50))}),onPointerMove:(0,a.M)(o.onPointerMove,()=>{var e;null===(e=i.onItemLeave)||void 0===e||e.call(i),null===u.current&&(u.current=window.setInterval(l,50))}),onPointerLeave:(0,a.M)(o.onPointerLeave,()=>{d()})})}),eC=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return(0,T.jsx)(g.WV.div,{"aria-hidden":!0,...n,ref:t})});eC.displayName="SelectSeparator";var ej="SelectArrow";function eM(e){return""===e||void 0===e}n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=_(r),o=W(ej,r),a=G(ej,r);return o.open&&"popper"===a.position?(0,T.jsx)(h.Eh,{...l,...n,ref:t}):null}).displayName=ej;var eT=n.forwardRef((e,t)=>{let{value:r,...l}=e,o=n.useRef(null),a=(0,u.e)(t,o),i=(0,S.D)(r);return n.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(i!==r&&t){let n=new Event("change",{bubbles:!0});t.call(e,r),e.dispatchEvent(n)}},[i,r]),(0,T.jsx)(C.T,{asChild:!0,children:(0,T.jsx)("select",{...l,ref:a,defaultValue:r})})});function ek(e){let t=(0,x.W)(e),r=n.useRef(""),l=n.useRef(0),o=n.useCallback(e=>{let n=r.current+e;t(n),function e(t){r.current=t,window.clearTimeout(l.current),""!==t&&(l.current=window.setTimeout(()=>e(""),1e3))}(n)},[t]),a=n.useCallback(()=>{r.current="",window.clearTimeout(l.current)},[]);return n.useEffect(()=>()=>window.clearTimeout(l.current),[]),[r,o,a]}function eR(e,t,r){var n;let l=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(n=Math.max(r?e.indexOf(r):-1,0),e.map((t,r)=>e[(n+r)%e.length]));1===l.length&&(o=o.filter(e=>e!==r));let a=o.find(e=>e.textValue.toLowerCase().startsWith(l.toLowerCase()));return a!==r?a:void 0}eT.displayName="BubbleSelect";var eE=B,eP=K,eI=U,eD=z,eN=Z,eV=q,e_=en,eL=ei,eW=es,eH=ef,eA=eh,eB=eg,eO=ex,eK=eb,eF=eC}}]);