(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{2449:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/success",function(){return r(7329)}])},1134:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var a=r(5893),n=r(1163),s=r(8947),c=r(5697),l=r.n(c),i=r(7294);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function b(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function h(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var x=["style"];function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),n=h(t.slice(0,a)),s=t.slice(a+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=s:e[n]=s,e}),{})}var j=!1;try{j=!0}catch(C){}function v(e){return e&&"object"===u(e)&&e.prefix&&e.iconName&&e.icon?e:s.Qc.icon?s.Qc.icon(e):null===e?null:e&&"object"===u(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var g=["forwardedRef"];function _(e){var t=e.forwardedRef,r=p(e,g),a=r.icon,n=r.mask,c=r.symbol,l=r.className,i=r.title,o=r.titleId,u=r.maskId,m=v(a),h=O("classes",[].concat(b(function(e){var t,r=e.beat,a=e.fade,n=e.beatFade,s=e.bounce,c=e.shake,l=e.flash,i=e.spin,o=e.spinPulse,d=e.spinReverse,u=e.pulse,p=e.fixedWidth,b=e.inverse,m=e.border,h=e.listItem,x=e.flip,y=e.size,j=e.rotation,v=e.pull,O=(f(t={"fa-beat":r,"fa-fade":a,"fa-beat-fade":n,"fa-bounce":s,"fa-shake":c,"fa-flash":l,"fa-spin":i,"fa-spin-reverse":d,"fa-spin-pulse":o,"fa-pulse":u,"fa-fw":p,"fa-inverse":b,"fa-border":m,"fa-li":h,"fa-flip-horizontal":"horizontal"===x||"both"===x,"fa-flip-vertical":"vertical"===x||"both"===x},"fa-".concat(y),"undefined"!==typeof y&&null!==y),f(t,"fa-rotate-".concat(j),"undefined"!==typeof j&&null!==j&&0!==j),f(t,"fa-pull-".concat(v),"undefined"!==typeof v&&null!==v),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(O).map((function(e){return O[e]?e:null})).filter((function(e){return e}))}(r)),b(l.split(" ")))),x=O("transform","string"===typeof r.transform?s.Qc.transform(r.transform):r.transform),y=O("mask",v(n)),A=(0,s.qv)(m,d(d(d(d({},h),x),y),{},{symbol:c,title:i,titleId:o,maskId:u}));if(!A)return function(){var e;!j&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var k=A.abstract,w={ref:t};return Object.keys(r).forEach((function(e){_.defaultProps.hasOwnProperty(e)||(w[e]=r[e])})),N(k[0],w)}_.displayName="FontAwesomeIcon",_.propTypes={beat:l().bool,border:l().bool,bounce:l().bool,className:l().string,fade:l().bool,flash:l().bool,mask:l().oneOfType([l().object,l().array,l().string]),maskId:l().string,fixedWidth:l().bool,inverse:l().bool,flip:l().oneOf(["horizontal","vertical","both"]),icon:l().oneOfType([l().object,l().array,l().string]),listItem:l().bool,pull:l().oneOf(["right","left"]),pulse:l().bool,rotation:l().oneOf([0,90,180,270]),shake:l().bool,size:l().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l().bool,spinPulse:l().bool,spinReverse:l().bool,symbol:l().oneOfType([l().bool,l().string]),title:l().string,titleId:l().string,transform:l().oneOfType([l().string,l().object]),swapOpacity:l().bool},_.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var N=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),s=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=y(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[h(t)]=a}return e}),{attrs:{}}),c=a.style,l=void 0===c?{}:c,i=p(a,x);return s.attrs.style=d(d({},s.attrs.style),l),t.apply(void 0,[r.tag,d(d({},s.attrs),i)].concat(b(n)))}.bind(null,i.createElement),A=r(3695),k=r.n(A),w=r(9398),S=function(){var e=(0,n.useRouter)();return(0,a.jsx)("header",{children:(0,a.jsx)("button",{onClick:function(){return e.push("/")},className:k().btnBack,children:(0,a.jsx)(_,{icon:w.acZ,style:{fontSize:44,color:"black"}})})})}},7329:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=r(5893),n=r(9547),s=r.n(n),c=r(3710),l=r.n(c),i={src:"/ssi-checker-poc/_next/static/media/success-check.f6b5dff4.png",height:103,width:103,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwElEQVR42i1PSQ7CMBDrd/pcHsADkOAGCChCyhEegMS+laUti7p3khYz0xIpmsh2bI8lJyZjZ7pUpvzqkq+8o0LbDVkYO9flm0FsPhFW7xApGQhWizIySkjHvdPsEWD08NE9uRQ3ImWJ7ZZ/Tm4elnGCmf9E+3jGPHhB4mrB+hNicPfQuVwx5Ol4AcY8tQikkGT2zi71GZz6AVq7A+2TFKQrZUkRKSSiBds63OGQZEgZy8k0m4hInCRTIslUKvuTPy/Q2RAAzxVzAAAAAElFTkSuQmCC"},o=r(5675),d=r.n(o),u=r(1134),f=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.Z,{}),(0,a.jsxs)("div",{className:"jsx-bd380a367055a6cc "+(l().container||""),children:[(0,a.jsx)(s(),{id:"bd380a367055a6cc",children:"html,body,body>div:first-child,div#__next,div#__next>div{height:100%}"}),(0,a.jsxs)("div",{className:"jsx-bd380a367055a6cc "+(l().top||""),children:[(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().title||""),children:"Identit\xe0 valida!"}),(0,a.jsx)(d(),{src:i,width:"128",height:"128",alt:"qrcode icon"})]}),(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().bottom||""),children:(0,a.jsxs)("div",{className:"jsx-bd380a367055a6cc "+(l().table||""),children:[(0,a.jsxs)("div",{className:"jsx-bd380a367055a6cc "+(l().row||""),children:[(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellLeft||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellHeader||""),children:"Nome"})}),(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellRight||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellHeader||""),children:"Cognome"})})]}),(0,a.jsxs)("div",{className:"jsx-bd380a367055a6cc "+(l().row||""),children:[(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellLeft||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellContent||""),children:"Mario"})}),(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellRight||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellContent||""),children:"Rossi"})})]}),(0,a.jsxs)("div",{className:"jsx-bd380a367055a6cc "+(l().row||""),children:[(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellLeft||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellHeader||""),children:"Data di nascita"})}),(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellRight||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellHeader||""),children:"Numero seriale"})})]}),(0,a.jsxs)("div",{className:"jsx-bd380a367055a6cc "+(l().row||""),children:[(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellLeft||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellContent||""),children:"02/06/2000"})}),(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellRight||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellContent||""),children:"12345678"})})]}),(0,a.jsxs)("div",{className:"jsx-bd380a367055a6cc "+(l().row||""),children:[(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellLeft||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellHeader||""),children:"Diritto accompagnatore"})}),(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellRight||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellHeader||""),children:"Rilasciata da"})})]}),(0,a.jsxs)("div",{className:"jsx-bd380a367055a6cc "+(l().row||""),children:[(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellLeft||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellContent||""),children:"1"})}),(0,a.jsx)("div",{className:"jsx-bd380a367055a6cc "+(l().cellRight||""),children:(0,a.jsx)("p",{className:"jsx-bd380a367055a6cc "+(l().cellContent||""),children:"Ministero per le disabilit\xe0"})})]})]})})]})]})}},3695:function(e){e.exports={btnBack:"Header_btnBack__ht43l"}},3710:function(e){e.exports={container:"Success_container__i1kIE",top:"Success_top__G1EE0",title:"Success_title__OrdHL",bottom:"Success_bottom__VH7wd",details:"Success_details__tZor2",row:"Success_row__kDq0O",cellLeft:"Success_cellLeft__s9CYY",cellRight:"Success_cellRight__HFRFw",cellHeader:"Success_cellHeader__SKSsv",cellContent:"Success_cellContent__PiObb",table:"Success_table__kGMo0"}},2703:function(e,t,r){"use strict";var a=r(414);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,s,c){if(c!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[523,873,547,774,888,179],(function(){return t=2449,e(e.s=t);var t}));var t=e.O();_N_E=t}]);