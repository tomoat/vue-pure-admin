import{y as Te,L as v,W,t as a,C as e,aP as Ce,aN as Me,o as R,p as z,B as M,a0 as ne,ag as L,V as le,q as _,Q as Ee,U as ke}from"./index.1d53ca84.js";const xe=()=>{window.cancelAnimationFrame=(()=>window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(r){return window.clearTimeout(r)})(),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(r){return window.setTimeout(r,1e3/60)}}()},Oe=(r,m)=>{if(r===m)return!0;if(r.length!==m.length)return!1;for(let u=0;u<r.length;++u)if(r[u]!==m[u])return!1;return!0};function oe(){Array.isArray||(Array.isArray=function(g){return Object.prototype.toString.call(g)==="[object Array]"});let r,m,u,c,S,C,t=1,i=arguments[0]||{},f=!1,b=arguments.length;if(typeof i=="boolean"&&(f=i,i=arguments[1]||{},t++),typeof i!="object"&&typeof i!="function"&&(i={}),t===b)return i;for(;t<b;t++)if((m=arguments[t])!=null)for(r in m)u=i[r],c=m[r],S=Array.isArray(c),f&&c&&(typeof c=="object"||S)?(S?(S=!1,C=u&&Array.isArray(u)?u:[]):C=u&&typeof u=="object"?u:{},i[r]=oe(f,C,c)):c!==void 0&&(i[r]=c);return i}var Be=Object.freeze(Object.defineProperty({__proto__:null,animationFrame:xe,arrayEqual:Oe,copyObj:oe},Symbol.toStringTag,{value:"Module"}));const De=["innerHTML"],N=Te({props:{data:{type:Array},classOption:{type:Object}},emits:["scrollEnd"],setup(r,{expose:m,emit:u}){const c=r,{animationFrame:S,copyObj:C}=Be;S();let t=v(0),i=v(0),f=v(0),b=v(0),g=v(0),F=v(0),E=v(0),k=v(""),y=null,Y=null,x=null,U=null,I=null,O=!1,B="ease-in",{classOption:h}=c;h.key===void 0&&(h.key=0);const V=W(`wrap${h.key}`,null),X=W(`slotList${h.key}`,null),Q=W(`realBox${h.key}`,null);let G=a(()=>e(t)<0),J=a(()=>Math.abs(e(t))<e(F)-e(g)),ae=a(()=>({step:1,limitMoveNum:5,hoverStop:!0,direction:"top",openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1})),l=a(()=>C({},e(ae),h));const re=a(()=>e(G)?"":e(l).switchDisabledClass);let se=a(()=>e(J)?"":e(l).switchDisabledClass),ue=a(()=>({position:"absolute",margin:`${e(b)/2}px 0 0 -${e(l).switchOffset}px`,transform:"translate(-100%,-50%)"})),ce=a(()=>({position:"absolute",margin:`${e(b)/2}px 0 0 ${e(g)+e(l).switchOffset}px`,transform:"translateY(-50%)"})),D=a(()=>e(l).direction!=="bottom"&&e(l).direction!=="top"),K=a(()=>e(D)?{float:"left",overflow:"hidden"}:{overflow:"hidden"}),fe=a(()=>({transform:`translate(${e(t)}px,${e(i)}px)`,transition:`all ${B} ${e(f)}ms`,overflow:"hidden"})),$=a(()=>e(l).navigation),H=a(()=>e($)?!1:e(l).autoPlay),Z=a(()=>c.data.length>=e(l).limitMoveNum),ee=a(()=>e(l).hoverStop&&e(H)&&e(Z)),j=a(()=>e(l).openTouch),te=a(()=>e(l).isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1),q=a(()=>e(l).singleWidth*e(te)),P=a(()=>e(l).singleHeight*e(te)),p=a(()=>{let n,o=e(l).step;if(e(D)?n=e(q):n=e(P),n>0&&n%o>0)throw"\u5982\u679C\u8BBE\u7F6E\u4E86\u5355\u6B65\u6EDA\u52A8\uFF0Cstep\u9700\u662F\u5355\u6B65\u5927\u5C0F\u7684\u7EA6\u6570\uFF0C\u5426\u5219\u65E0\u6CD5\u4FDD\u8BC1\u5355\u6B65\u6EDA\u52A8\u7ED3\u675F\u7684\u4F4D\u7F6E\u662F\u5426\u51C6\u786E";return o});function me(){t.value=0,i.value=0,A(),ie()}function he(){if(!!e(G)){if(Math.abs(e(t))<e(l).switchSingleStep){t.value=0;return}t.value+=e(l).switchSingleStep}}function de(){if(!!e(J)){if(e(F)-e(g)+e(t)<e(l).switchSingleStep){t.value=e(g)-e(F);return}t.value-=e(l).switchSingleStep}}function A(){cancelAnimationFrame(Y||"")}function pe(n){if(!e(j))return;let o;const s=n.targetTouches[0],{waitTime:d,singleHeight:T,singleWidth:Ae}=e(l);x={x:s.pageX,y:s.pageY},U=e(i),I=e(t),!!T&&!!Ae?(o&&clearTimeout(o),o=setTimeout(()=>{A()},d+20)):A()}function we(n){if(!e(j)||n.targetTouches.length>1||n.scale&&n.scale!==1)return;const o=n.targetTouches[0],{direction:s}=e(l);let d={x:o.pageX-x.x,y:o.pageY-x.y};n.preventDefault();const T=Math.abs(d.x)<Math.abs(d.y)?1:0;T===1&&s==="bottom"||T===1&&s==="top"?i.value=U+d.y:(T===0&&s==="left"||T===0&&s==="right")&&(t.value=I+d.x)}function ve(){if(!e(j))return;let n;const o=e(l).direction;if(f.value=50,o==="top")e(i)>0&&(i.value=0);else if(o==="bottom"){let s=e(E)/2*-1;e(i)<s&&(i.value=s)}else if(o==="left")e(t)>0&&(t.value=0);else if(o==="right"){let s=e(F)*-1;e(t)<s&&(t.value=s)}n&&clearTimeout(n),n=setTimeout(()=>{f.value=0,w()},e(f))}function ge(){e(ee)&&be()}function ye(){e(ee)&&Se()}function w(){O||(Y=requestAnimationFrame(function(){const n=e(E)/2,o=e(F)/2;let{direction:s,waitTime:d}=e(l);s==="top"?(Math.abs(e(i))>=n&&(u("scrollEnd"),i.value=0),i.value-=p.value):s==="bottom"?(e(i)>=0&&(u("scrollEnd"),i.value=n*-1),i.value+=p.value):s==="left"?(Math.abs(e(t))>=o&&(u("scrollEnd"),t.value=0),t.value-=p.value):s==="right"&&(e(t)>=0&&(u("scrollEnd"),t.value=o*-1),t.value+=p.value),y&&clearTimeout(y),e(P)?Math.abs(e(i))%e(P)<e(p)?y=setTimeout(()=>{w()},d):w():e(q)&&Math.abs(e(t))%e(q)<e(p)?y=setTimeout(()=>{w()},d):w()}))}function ie(){Ee(()=>{const{switchDelay:n}=e(l);if(k.value="",e(D)){b.value=e(V).offsetHeight,g.value=e(V).offsetWidth;let o=e(X).offsetWidth;e(H)&&(o=o*2+1),e(Q).style.width=o+"px",F.value=o}if(e(H))B="ease-in",f.value=0;else{B="linear",f.value=n;return}e(Z)?(k.value=e(X).innerHTML,setTimeout(()=>{E.value=e(Q).offsetHeight,w()},0)):(A(),i.value=t.value=0)})}function Se(){O=!1,w()}function be(){O=!0,y&&clearTimeout(y),A()}function Fe(n){n.preventDefault(),!(e(l).direction==="left"||e(l).direction==="right")&&ke(()=>{n.deltaY>0?i.value-=p.value:i.value+=p.value},50)()}return Ce(()=>{ie()}),Me(()=>{A(),clearTimeout(y)}),m({reset:me}),(n,o)=>(R(),z("div",{ref:"wrap"+e(h).key},[e($)?(R(),z("div",{key:0,style:M(e(ue)),class:ne(e(re)),onClick:he},[L(n.$slots,"left-switch")],6)):le("",!0),e($)?(R(),z("div",{key:1,style:M(e(ce)),class:ne(e(se)),onClick:de},[L(n.$slots,"right-switch")],6)):le("",!0),_("div",{ref:"realBox"+e(h).key,style:M(e(fe)),onMouseenter:ge,onMouseleave:ye,onTouchstart:pe,onTouchmove:we,onTouchend:ve,onMousewheel:Fe},[_("div",{ref:"slotList"+e(h).key,style:M(e(K))},[L(n.$slots,"default")],4),_("div",{innerHTML:e(k),style:M(e(K))},null,12,De)],36)],512))}}),He=Object.assign(N,{install(r){r.component(N.name,N)}});export{He as R};
