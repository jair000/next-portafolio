(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[275],{9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,i=r(2648).Z,o=r(1598).Z,a=r(7273).Z,l=o(r(7294)),s=i(r(3121)),c=r(2675),u=r(139),d=r(8730);r(7238);var f=i(r(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/nextjs-pages/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,r,i,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{l=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:i,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:g,placeholder:m,loading:p,srcString:v,config:w,unoptimized:y,loader:b,onLoadRef:E,onLoadingCompleteRef:C,setBlurComplete:S,setShowAltText:j,onLoad:x,onError:O}=e,_=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},_,r,{width:o,height:i,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:p,style:n({},u,d),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&h(e,v,m,E,C,S,y))},[v,m,E,C,S,O,y,t]),onLoad:e=>{let t=e.currentTarget;h(t,v,m,E,C,S,y)},onError:e=>{j(!0),"blur"===m&&S(!0),O&&O(e)}})))}),w=l.forwardRef((e,t)=>{let r,i;var o,{src:h,sizes:w,unoptimized:y=!1,priority:b=!1,loading:E,className:C,quality:S,width:j,height:x,fill:O,style:_,onLoad:z,onLoadingComplete:k,placeholder:P="empty",blurDataURL:N,layout:R,objectFit:I,objectPosition:A,lazyBoundary:L,lazyRoot:M}=e,B=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(d.ImageConfigContext),W=l.useMemo(()=>{let e=g||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[D]),F=B,T=F.loader||f.default;delete F.loader;let q="__next_img_default"in T;if(q){if("custom"===W.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let G=T;T=e=>{let{config:t}=e,r=a(e,["config"]);return G(r)}}if(R){"fill"===R&&(O=!0);let Z={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];Z&&(_=n({},_,Z));let U={responsive:"100vw",fill:"100vw"}[R];U&&!w&&(w=U)}let V="",J=p(j),H=p(x);if("object"==typeof(o=h)&&(m(o)||void 0!==o.src)){let $=m(h)?h.default:h;if(!$.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($)));if(!$.height||!$.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($)));if(r=$.blurWidth,i=$.blurHeight,N=N||$.blurDataURL,V=$.src,!O){if(J||H){if(J&&!H){let K=J/$.width;H=Math.round($.height*K)}else if(!J&&H){let Q=H/$.height;J=Math.round($.width*Q)}}else J=$.width,H=$.height}}let X=!b&&("lazy"===E||void 0===E);((h="string"==typeof h?h:V).startsWith("data:")||h.startsWith("blob:"))&&(y=!0,X=!1),W.unoptimized&&(y=!0),q&&h.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(y=!0);let[Y,ee]=l.useState(!1),[et,er]=l.useState(!1),en=p(S),ei=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:A}:{},et?{}:{color:"transparent"},_),eo="blur"===P&&N&&!Y?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:J,heightInt:H,blurWidth:r,blurHeight:i,blurDataURL:N}),'")')}:{},ea=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=o.exec(r);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:i.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:o,width:s[u]})}}({config:W,src:h,unoptimized:y,width:J,quality:en,sizes:w,loader:T}),el=h,es={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:F.crossOrigin},ec=l.useRef(z);l.useEffect(()=>{ec.current=z},[z]);let eu=l.useRef(k);l.useEffect(()=>{eu.current=k},[k]);let ed=n({isLazy:X,imgAttributes:ea,heightInt:H,widthInt:J,qualityInt:en,className:C,imgStyle:ei,blurStyle:eo,loading:E,config:W,fill:O,unoptimized:y,placeholder:P,loader:T,srcString:el,onLoadRef:ec,onLoadingCompleteRef:eu,setBlurComplete:ee,setShowAltText:er},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ed,{ref:t})),b?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},es))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o}=e,a=n||t,l=i||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function s(e){return function(t){return n.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,i=e.attr,o=e.size,s=e.title,c=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(i)}}}]);