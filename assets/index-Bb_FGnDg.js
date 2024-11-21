function Yf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fd={exports:{}},Ii={},hd={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),Kf=Symbol.for("react.portal"),Gf=Symbol.for("react.fragment"),Xf=Symbol.for("react.strict_mode"),Zf=Symbol.for("react.profiler"),eh=Symbol.for("react.provider"),nh=Symbol.for("react.context"),th=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),oh=Symbol.for("react.memo"),ih=Symbol.for("react.lazy"),tu=Symbol.iterator;function ah(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vd=Object.assign,yd={};function sr(e,n,t){this.props=e,this.context=n,this.refs=yd,this.updater=t||gd}sr.prototype.isReactComponent={};sr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xd(){}xd.prototype=sr.prototype;function Ul(e,n,t){this.props=e,this.context=n,this.refs=yd,this.updater=t||gd}var Vl=Ul.prototype=new xd;Vl.constructor=Ul;vd(Vl,sr.prototype);Vl.isPureReactComponent=!0;var ru=Array.isArray,wd=Object.prototype.hasOwnProperty,Hl={current:null},kd={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)wd.call(n,r)&&!kd.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:so,type:e,key:i,ref:a,props:o,_owner:Hl.current}}function lh(e,n){return{$$typeof:so,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Wl(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function sh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ou=/\/+/g;function Xi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?sh(""+e.key):n.toString(36)}function Do(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case so:case Kf:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Xi(a,0):r,ru(o)?(t="",e!=null&&(t=e.replace(ou,"$&/")+"/"),Do(o,n,t,"",function(u){return u})):o!=null&&(Wl(o)&&(o=lh(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ou,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",ru(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Xi(i,l);a+=Do(i,n,t,s,o)}else if(s=ah(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Xi(i,l++),a+=Do(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function yo(e,n,t){if(e==null)return e;var r=[],o=0;return Do(e,r,"","",function(i){return n.call(t,i,o++)}),r}function uh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},Fo={transition:null},ch={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:Hl};function Cd(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:yo,forEach:function(e,n,t){yo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return yo(e,function(){n++}),n},toArray:function(e){return yo(e,function(n){return n})||[]},only:function(e){if(!Wl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=sr;V.Fragment=Gf;V.Profiler=Zf;V.PureComponent=Ul;V.StrictMode=Xf;V.Suspense=rh;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ch;V.act=Cd;V.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vd({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Hl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)wd.call(n,s)&&!kd.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:so,type:e.type,key:o,ref:i,props:r,_owner:a}};V.createContext=function(e){return e={$$typeof:nh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eh,_context:e},e.Consumer=e};V.createElement=Sd;V.createFactory=function(e){var n=Sd.bind(null,e);return n.type=e,n};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:th,render:e}};V.isValidElement=Wl;V.lazy=function(e){return{$$typeof:ih,_payload:{_status:-1,_result:e},_init:uh}};V.memo=function(e,n){return{$$typeof:oh,type:e,compare:n===void 0?null:n}};V.startTransition=function(e){var n=Fo.transition;Fo.transition={};try{e()}finally{Fo.transition=n}};V.unstable_act=Cd;V.useCallback=function(e,n){return be.current.useCallback(e,n)};V.useContext=function(e){return be.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return be.current.useDeferredValue(e)};V.useEffect=function(e,n){return be.current.useEffect(e,n)};V.useId=function(){return be.current.useId()};V.useImperativeHandle=function(e,n,t){return be.current.useImperativeHandle(e,n,t)};V.useInsertionEffect=function(e,n){return be.current.useInsertionEffect(e,n)};V.useLayoutEffect=function(e,n){return be.current.useLayoutEffect(e,n)};V.useMemo=function(e,n){return be.current.useMemo(e,n)};V.useReducer=function(e,n,t){return be.current.useReducer(e,n,t)};V.useRef=function(e){return be.current.useRef(e)};V.useState=function(e){return be.current.useState(e)};V.useSyncExternalStore=function(e,n,t){return be.current.useSyncExternalStore(e,n,t)};V.useTransition=function(){return be.current.useTransition()};V.version="18.3.1";hd.exports=V;var T=hd.exports;const dh=md(T),ph=Yf({__proto__:null,default:dh},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh=T,fh=Symbol.for("react.element"),hh=Symbol.for("react.fragment"),gh=Object.prototype.hasOwnProperty,vh=mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yh={key:!0,ref:!0,__self:!0,__source:!0};function Ed(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)gh.call(n,r)&&!yh.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:fh,type:e,key:i,ref:a,props:o,_owner:vh.current}}Ii.Fragment=hh;Ii.jsx=Ed;Ii.jsxs=Ed;fd.exports=Ii;var b=fd.exports,Pd={exports:{}},Qe={},_d={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(j,D){var v=j.length;j.push(D);e:for(;0<v;){var $=v-1>>>1,G=j[$];if(0<o(G,D))j[$]=D,j[v]=G,v=$;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var D=j[0],v=j.pop();if(v!==D){j[0]=v;e:for(var $=0,G=j.length,y=G>>>1;$<y;){var ve=2*($+1)-1,on=j[ve],te=ve+1,fn=j[te];if(0>o(on,v))te<G&&0>o(fn,on)?(j[$]=fn,j[te]=v,$=te):(j[$]=on,j[ve]=v,$=ve);else if(te<G&&0>o(fn,v))j[$]=fn,j[te]=v,$=te;else break e}}return D}function o(j,D){var v=j.sortIndex-D.sortIndex;return v!==0?v:j.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,m=3,p=!1,x=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(j){for(var D=t(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=j)r(u),D.sortIndex=D.expirationTime,n(s,D);else break;D=t(u)}}function S(j){if(w=!1,g(j),!x)if(t(s)!==null)x=!0,fe(P);else{var D=t(u);D!==null&&pe(S,D.startTime-j)}}function P(j,D){x=!1,w&&(w=!1,h(A),A=-1),p=!0;var v=m;try{for(g(D),d=t(s);d!==null&&(!(d.expirationTime>D)||j&&!q());){var $=d.callback;if(typeof $=="function"){d.callback=null,m=d.priorityLevel;var G=$(d.expirationTime<=D);D=e.unstable_now(),typeof G=="function"?d.callback=G:d===t(s)&&r(s),g(D)}else r(s);d=t(s)}if(d!==null)var y=!0;else{var ve=t(u);ve!==null&&pe(S,ve.startTime-D),y=!1}return y}finally{d=null,m=v,p=!1}}var k=!1,N=null,A=-1,M=5,L=-1;function q(){return!(e.unstable_now()-L<M)}function R(){if(N!==null){var j=e.unstable_now();L=j;var D=!0;try{D=N(!0,j)}finally{D?Y():(k=!1,N=null)}}else k=!1}var Y;if(typeof f=="function")Y=function(){f(R)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,H=ae.port2;ae.port1.onmessage=R,Y=function(){H.postMessage(null)}}else Y=function(){C(R,0)};function fe(j){N=j,k||(k=!0,Y())}function pe(j,D){A=C(function(){j(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||p||(x=!0,fe(P))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var v=m;m=D;try{return j()}finally{m=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,D){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var v=m;m=j;try{return D()}finally{m=v}},e.unstable_scheduleCallback=function(j,D,v){var $=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?$+v:$):v=$,j){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=v+G,j={id:c++,callback:D,priorityLevel:j,startTime:v,expirationTime:G,sortIndex:-1},v>$?(j.sortIndex=v,n(u,j),t(s)===null&&j===t(u)&&(w?(h(A),A=-1):w=!0,pe(S,v-$))):(j.sortIndex=G,n(s,j),x||p||(x=!0,fe(P))),j},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(j){var D=m;return function(){var v=m;m=D;try{return j.apply(this,arguments)}finally{m=v}}}})(Nd);_d.exports=Nd;var xh=_d.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh=T,Je=xh;function _(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zd=new Set,Ur={};function Pt(e,n){er(e,n),er(e+"Capture",n)}function er(e,n){for(Ur[e]=n,e=0;e<n.length;e++)zd.add(n[e])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ra=Object.prototype.hasOwnProperty,kh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iu={},au={};function Sh(e){return Ra.call(au,e)?!0:Ra.call(iu,e)?!1:kh.test(e)?au[e]=!0:(iu[e]=!0,!1)}function Ch(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Eh(e,n,t,r){if(n===null||typeof n>"u"||Ch(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function je(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ee[n]=new je(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var $l=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($l,Jl);Ee[n]=new je(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($l,Jl);Ee[n]=new je(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($l,Jl);Ee[n]=new je(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ql(e,n,t,r){var o=Ee.hasOwnProperty(n)?Ee[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Eh(n,t,o,r)&&(t=null),r||o===null?Sh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var On=wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Kl=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Gl=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),Ad=Symbol.for("react.offscreen"),lu=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Zi;function Nr(e){if(Zi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Zi=n&&n[1]||""}return`
`+Zi+e}var ea=!1;function na(e,n){if(!e||ea)return"";ea=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ea=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Nr(e):""}function Ph(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=na(e.type,!1),e;case 11:return e=na(e.type.render,!1),e;case 1:return e=na(e.type,!0),e;default:return""}}function Ba(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lt:return"Fragment";case Ot:return"Portal";case Ma:return"Profiler";case Yl:return"StrictMode";case Da:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Id:return(e.displayName||"Context")+".Consumer";case Td:return(e._context.displayName||"Context")+".Provider";case Kl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gl:return n=e.displayName||null,n!==null?n:Ba(e.type)||"Memo";case Dn:n=e._payload,e=e._init;try{return Ba(e(n))}catch{}}return null}function _h(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ba(n);case 8:return n===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Nh(e){var n=bd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function wo(e){e._valueTracker||(e._valueTracker=Nh(e))}function jd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=bd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ua(e,n){var t=n.checked;return ue({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function su(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=nt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Od(e,n){n=n.checked,n!=null&&Ql(e,"checked",n,!1)}function Va(e,n){Od(e,n);var t=nt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ha(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ha(e,n.type,nt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function uu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ha(e,n,t){(n!=="number"||Zo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var zr=Array.isArray;function $t(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+nt(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Wa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(_(91));return ue({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(_(92));if(zr(t)){if(1<t.length)throw Error(_(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:nt(t)}}function Ld(e,n){var t=nt(n.value),r=nt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function du(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function qd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $a(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?qd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ko,Rd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Vr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zh=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){zh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ar[n]=Ar[e]})});function Md(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+n).trim():n+"px"}function Dd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Md(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Th=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ja(e,n){if(n){if(Th[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(_(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(_(61))}if(n.style!=null&&typeof n.style!="object")throw Error(_(62))}}function Qa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ya=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Jt=null,Qt=null;function pu(e){if(e=po(e)){if(typeof Ka!="function")throw Error(_(280));var n=e.stateNode;n&&(n=Li(n),Ka(e.stateNode,e.type,n))}}function Fd(e){Jt?Qt?Qt.push(e):Qt=[e]:Jt=e}function Bd(){if(Jt){var e=Jt,n=Qt;if(Qt=Jt=null,pu(e),n)for(e=0;e<n.length;e++)pu(n[e])}}function Ud(e,n){return e(n)}function Vd(){}var ta=!1;function Hd(e,n,t){if(ta)return e(n,t);ta=!0;try{return Ud(e,n,t)}finally{ta=!1,(Jt!==null||Qt!==null)&&(Vd(),Bd())}}function Hr(e,n){var t=e.stateNode;if(t===null)return null;var r=Li(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(_(231,n,typeof t));return t}var Ga=!1;if(In)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{Ga=!1}function Ih(e,n,t,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var br=!1,ei=null,ni=!1,Xa=null,Ah={onError:function(e){br=!0,ei=e}};function bh(e,n,t,r,o,i,a,l,s){br=!1,ei=null,Ih.apply(Ah,arguments)}function jh(e,n,t,r,o,i,a,l,s){if(bh.apply(this,arguments),br){if(br){var u=ei;br=!1,ei=null}else throw Error(_(198));ni||(ni=!0,Xa=u)}}function _t(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Wd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function mu(e){if(_t(e)!==e)throw Error(_(188))}function Oh(e){var n=e.alternate;if(!n){if(n=_t(e),n===null)throw Error(_(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return mu(o),e;if(i===r)return mu(o),n;i=i.sibling}throw Error(_(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(_(189))}}if(t.alternate!==r)throw Error(_(190))}if(t.tag!==3)throw Error(_(188));return t.stateNode.current===t?e:n}function $d(e){return e=Oh(e),e!==null?Jd(e):null}function Jd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Jd(e);if(n!==null)return n;e=e.sibling}return null}var Qd=Je.unstable_scheduleCallback,fu=Je.unstable_cancelCallback,Lh=Je.unstable_shouldYield,qh=Je.unstable_requestPaint,me=Je.unstable_now,Rh=Je.unstable_getCurrentPriorityLevel,Zl=Je.unstable_ImmediatePriority,Yd=Je.unstable_UserBlockingPriority,ti=Je.unstable_NormalPriority,Mh=Je.unstable_LowPriority,Kd=Je.unstable_IdlePriority,Ai=null,wn=null;function Dh(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:Uh,Fh=Math.log,Bh=Math.LN2;function Uh(e){return e>>>=0,e===0?32:31-(Fh(e)/Bh|0)|0}var So=64,Co=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=Tr(l):(i&=a,i!==0&&(r=Tr(i)))}else a=t&~o,a!==0?r=Tr(a):i!==0&&(r=Tr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-dn(n),o=1<<t,r|=e[t],n&=~o;return r}function Vh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-dn(i),l=1<<a,s=o[a];s===-1?(!(l&t)||l&r)&&(o[a]=Vh(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function Za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gd(){var e=So;return So<<=1,!(So&4194240)&&(So=64),e}function ra(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function uo(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-dn(n),e[n]=t}function Wh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-dn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function es(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-dn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var K=0;function Xd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zd,ns,ep,np,tp,el=!1,Eo=[],$n=null,Jn=null,Qn=null,Wr=new Map,$r=new Map,Bn=[],$h="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,n){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Wr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(n.pointerId)}}function xr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=po(n),n!==null&&ns(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Jh(e,n,t,r,o){switch(n){case"focusin":return $n=xr($n,e,n,t,r,o),!0;case"dragenter":return Jn=xr(Jn,e,n,t,r,o),!0;case"mouseover":return Qn=xr(Qn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Wr.set(i,xr(Wr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,$r.set(i,xr($r.get(i)||null,e,n,t,r,o)),!0}return!1}function rp(e){var n=ht(e.target);if(n!==null){var t=_t(n);if(t!==null){if(n=t.tag,n===13){if(n=Wd(t),n!==null){e.blockedOn=n,tp(e.priority,function(){ep(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=nl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ya=r,t.target.dispatchEvent(r),Ya=null}else return n=po(t),n!==null&&ns(n),e.blockedOn=t,!1;n.shift()}return!0}function gu(e,n,t){Bo(e)&&t.delete(n)}function Qh(){el=!1,$n!==null&&Bo($n)&&($n=null),Jn!==null&&Bo(Jn)&&(Jn=null),Qn!==null&&Bo(Qn)&&(Qn=null),Wr.forEach(gu),$r.forEach(gu)}function wr(e,n){e.blockedOn===n&&(e.blockedOn=null,el||(el=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,Qh)))}function Jr(e){function n(o){return wr(o,e)}if(0<Eo.length){wr(Eo[0],e);for(var t=1;t<Eo.length;t++){var r=Eo[t];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&wr($n,e),Jn!==null&&wr(Jn,e),Qn!==null&&wr(Qn,e),Wr.forEach(n),$r.forEach(n),t=0;t<Bn.length;t++)r=Bn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bn.length&&(t=Bn[0],t.blockedOn===null);)rp(t),t.blockedOn===null&&Bn.shift()}var Yt=On.ReactCurrentBatchConfig,oi=!0;function Yh(e,n,t,r){var o=K,i=Yt.transition;Yt.transition=null;try{K=1,ts(e,n,t,r)}finally{K=o,Yt.transition=i}}function Kh(e,n,t,r){var o=K,i=Yt.transition;Yt.transition=null;try{K=4,ts(e,n,t,r)}finally{K=o,Yt.transition=i}}function ts(e,n,t,r){if(oi){var o=nl(e,n,t,r);if(o===null)ma(e,n,r,ii,t),hu(e,r);else if(Jh(o,e,n,t,r))r.stopPropagation();else if(hu(e,r),n&4&&-1<$h.indexOf(e)){for(;o!==null;){var i=po(o);if(i!==null&&Zd(i),i=nl(e,n,t,r),i===null&&ma(e,n,r,ii,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else ma(e,n,r,null,t)}}var ii=null;function nl(e,n,t,r){if(ii=null,e=Xl(r),e=ht(e),e!==null)if(n=_t(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Wd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ii=e,null}function op(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rh()){case Zl:return 1;case Yd:return 4;case ti:case Mh:return 16;case Kd:return 536870912;default:return 16}default:return 16}}var Vn=null,rs=null,Uo=null;function ip(){if(Uo)return Uo;var e,n=rs,t=n.length,r,o="value"in Vn?Vn.value:Vn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return Uo=o.slice(e,1<r?1-r:void 0)}function Vo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function vu(){return!1}function Ye(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Po:vu,this.isPropagationStopped=vu,this}return ue(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),n}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=Ye(ur),co=ue({},ur,{view:0,detail:0}),Gh=Ye(co),oa,ia,kr,bi=ue({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(oa=e.screenX-kr.screenX,ia=e.screenY-kr.screenY):ia=oa=0,kr=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:ia}}),yu=Ye(bi),Xh=ue({},bi,{dataTransfer:0}),Zh=Ye(Xh),eg=ue({},co,{relatedTarget:0}),aa=Ye(eg),ng=ue({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=Ye(ng),rg=ue({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),og=Ye(rg),ig=ue({},ur,{data:0}),xu=Ye(ig),ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=sg[e])?!!n[e]:!1}function is(){return ug}var cg=ue({},co,{key:function(e){if(e.key){var n=ag[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dg=Ye(cg),pg=ue({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wu=Ye(pg),mg=ue({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),fg=Ye(mg),hg=ue({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),gg=Ye(hg),vg=ue({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=Ye(vg),xg=[9,13,27,32],as=In&&"CompositionEvent"in window,jr=null;In&&"documentMode"in document&&(jr=document.documentMode);var wg=In&&"TextEvent"in window&&!jr,ap=In&&(!as||jr&&8<jr&&11>=jr),ku=" ",Su=!1;function lp(e,n){switch(e){case"keyup":return xg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function kg(e,n){switch(e){case"compositionend":return sp(n);case"keypress":return n.which!==32?null:(Su=!0,ku);case"textInput":return e=n.data,e===ku&&Su?null:e;default:return null}}function Sg(e,n){if(qt)return e==="compositionend"||!as&&lp(e,n)?(e=ip(),Uo=rs=Vn=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cg[e.type]:n==="textarea"}function up(e,n,t,r){Fd(r),n=ai(n,"onChange"),0<n.length&&(t=new os("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Or=null,Qr=null;function Eg(e){wp(e,0)}function ji(e){var n=Dt(e);if(jd(n))return e}function Pg(e,n){if(e==="change")return n}var cp=!1;if(In){var la;if(In){var sa="oninput"in document;if(!sa){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),sa=typeof Eu.oninput=="function"}la=sa}else la=!1;cp=la&&(!document.documentMode||9<document.documentMode)}function Pu(){Or&&(Or.detachEvent("onpropertychange",dp),Qr=Or=null)}function dp(e){if(e.propertyName==="value"&&ji(Qr)){var n=[];up(n,Qr,e,Xl(e)),Hd(Eg,n)}}function _g(e,n,t){e==="focusin"?(Pu(),Or=n,Qr=t,Or.attachEvent("onpropertychange",dp)):e==="focusout"&&Pu()}function Ng(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(Qr)}function zg(e,n){if(e==="click")return ji(n)}function Tg(e,n){if(e==="input"||e==="change")return ji(n)}function Ig(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var mn=typeof Object.is=="function"?Object.is:Ig;function Yr(e,n){if(mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Ra.call(n,o)||!mn(e[o],n[o]))return!1}return!0}function _u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,n){var t=_u(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_u(t)}}function pp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mp(){for(var e=window,n=Zo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Zo(e.document)}return n}function ls(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ag(e){var n=mp(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&pp(t.ownerDocument.documentElement,t)){if(r!==null&&ls(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Nu(t,i);var a=Nu(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bg=In&&"documentMode"in document&&11>=document.documentMode,Rt=null,tl=null,Lr=null,rl=!1;function zu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;rl||Rt==null||Rt!==Zo(r)||(r=Rt,"selectionStart"in r&&ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Yr(Lr,r)||(Lr=r,r=ai(tl,"onSelect"),0<r.length&&(n=new os("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Rt)))}function _o(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Mt={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},ua={},fp={};In&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Mt.animationend.animation,delete Mt.animationiteration.animation,delete Mt.animationstart.animation),"TransitionEvent"in window||delete Mt.transitionend.transition);function Oi(e){if(ua[e])return ua[e];if(!Mt[e])return e;var n=Mt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in fp)return ua[e]=n[t];return e}var hp=Oi("animationend"),gp=Oi("animationiteration"),vp=Oi("animationstart"),yp=Oi("transitionend"),xp=new Map,Tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,n){xp.set(e,n),Pt(n,[e])}for(var ca=0;ca<Tu.length;ca++){var da=Tu[ca],jg=da.toLowerCase(),Og=da[0].toUpperCase()+da.slice(1);rt(jg,"on"+Og)}rt(hp,"onAnimationEnd");rt(gp,"onAnimationIteration");rt(vp,"onAnimationStart");rt("dblclick","onDoubleClick");rt("focusin","onFocus");rt("focusout","onBlur");rt(yp,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Iu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,jh(r,n,void 0,e),e.currentTarget=null}function wp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Iu(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Iu(o,l,u),i=s}}}if(ni)throw e=Xa,ni=!1,Xa=null,e}function re(e,n){var t=n[sl];t===void 0&&(t=n[sl]=new Set);var r=e+"__bubble";t.has(r)||(kp(n,e,2,!1),t.add(r))}function pa(e,n,t){var r=0;n&&(r|=4),kp(t,e,r,n)}var No="_reactListening"+Math.random().toString(36).slice(2);function Kr(e){if(!e[No]){e[No]=!0,zd.forEach(function(t){t!=="selectionchange"&&(Lg.has(t)||pa(t,!1,e),pa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[No]||(n[No]=!0,pa("selectionchange",!1,n))}}function kp(e,n,t,r){switch(op(n)){case 1:var o=Yh;break;case 4:o=Kh;break;default:o=ts}t=o.bind(null,n,t,e),o=void 0,!Ga||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function ma(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=ht(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Hd(function(){var u=i,c=Xl(t),d=[];e:{var m=xp.get(e);if(m!==void 0){var p=os,x=e;switch(e){case"keypress":if(Vo(t)===0)break e;case"keydown":case"keyup":p=dg;break;case"focusin":x="focus",p=aa;break;case"focusout":x="blur",p=aa;break;case"beforeblur":case"afterblur":p=aa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fg;break;case hp:case gp:case vp:p=tg;break;case yp:p=gg;break;case"scroll":p=Gh;break;case"wheel":p=yg;break;case"copy":case"cut":case"paste":p=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wu}var w=(n&4)!==0,C=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var f=u,g;f!==null;){g=f;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=Hr(f,h),S!=null&&w.push(Gr(f,S,g)))),C)break;f=f.return}0<w.length&&(m=new p(m,x,null,t,c),d.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",m&&t!==Ya&&(x=t.relatedTarget||t.fromElement)&&(ht(x)||x[An]))break e;if((p||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?ht(x):null,x!==null&&(C=_t(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(w=yu,S="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=wu,S="onPointerLeave",h="onPointerEnter",f="pointer"),C=p==null?m:Dt(p),g=x==null?m:Dt(x),m=new w(S,f+"leave",p,t,c),m.target=C,m.relatedTarget=g,S=null,ht(c)===u&&(w=new w(h,f+"enter",x,t,c),w.target=g,w.relatedTarget=C,S=w),C=S,p&&x)n:{for(w=p,h=x,f=0,g=w;g;g=At(g))f++;for(g=0,S=h;S;S=At(S))g++;for(;0<f-g;)w=At(w),f--;for(;0<g-f;)h=At(h),g--;for(;f--;){if(w===h||h!==null&&w===h.alternate)break n;w=At(w),h=At(h)}w=null}else w=null;p!==null&&Au(d,m,p,w,!1),x!==null&&C!==null&&Au(d,C,x,w,!0)}}e:{if(m=u?Dt(u):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var P=Pg;else if(Cu(m))if(cp)P=Tg;else{P=Ng;var k=_g}else(p=m.nodeName)&&p.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=zg);if(P&&(P=P(e,u))){up(d,P,t,c);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&Ha(m,"number",m.value)}switch(k=u?Dt(u):window,e){case"focusin":(Cu(k)||k.contentEditable==="true")&&(Rt=k,tl=u,Lr=null);break;case"focusout":Lr=tl=Rt=null;break;case"mousedown":rl=!0;break;case"contextmenu":case"mouseup":case"dragend":rl=!1,zu(d,t,c);break;case"selectionchange":if(bg)break;case"keydown":case"keyup":zu(d,t,c)}var N;if(as)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else qt?lp(e,t)&&(A="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(ap&&t.locale!=="ko"&&(qt||A!=="onCompositionStart"?A==="onCompositionEnd"&&qt&&(N=ip()):(Vn=c,rs="value"in Vn?Vn.value:Vn.textContent,qt=!0)),k=ai(u,A),0<k.length&&(A=new xu(A,e,null,t,c),d.push({event:A,listeners:k}),N?A.data=N:(N=sp(t),N!==null&&(A.data=N)))),(N=wg?kg(e,t):Sg(e,t))&&(u=ai(u,"onBeforeInput"),0<u.length&&(c=new xu("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=N))}wp(d,n)})}function Gr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ai(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Hr(e,t),i!=null&&r.unshift(Gr(e,i,o)),i=Hr(e,n),i!=null&&r.push(Gr(e,i,o))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Au(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Hr(t,i),s!=null&&a.unshift(Gr(t,s,l))):o||(s=Hr(t,i),s!=null&&a.push(Gr(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var qg=/\r\n?/g,Rg=/\u0000|\uFFFD/g;function bu(e){return(typeof e=="string"?e:""+e).replace(qg,`
`).replace(Rg,"")}function zo(e,n,t){if(n=bu(n),bu(e)!==n&&t)throw Error(_(425))}function li(){}var ol=null,il=null;function al(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ll=typeof setTimeout=="function"?setTimeout:void 0,Mg=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,Dg=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(Fg)}:ll;function Fg(e){setTimeout(function(){throw e})}function fa(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Jr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Jr(n)}function Yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ou(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),yn="__reactFiber$"+cr,Xr="__reactProps$"+cr,An="__reactContainer$"+cr,sl="__reactEvents$"+cr,Bg="__reactListeners$"+cr,Ug="__reactHandles$"+cr;function ht(e){var n=e[yn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[An]||t[yn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ou(e);e!==null;){if(t=e[yn])return t;e=Ou(e)}return n}e=t,t=e.parentNode}return null}function po(e){return e=e[yn]||e[An],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Li(e){return e[Xr]||null}var ul=[],Ft=-1;function ot(e){return{current:e}}function oe(e){0>Ft||(e.current=ul[Ft],ul[Ft]=null,Ft--)}function ee(e,n){Ft++,ul[Ft]=e.current,e.current=n}var tt={},ze=ot(tt),Re=ot(!1),wt=tt;function nr(e,n){var t=e.type.contextTypes;if(!t)return tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function si(){oe(Re),oe(ze)}function Lu(e,n,t){if(ze.current!==tt)throw Error(_(168));ee(ze,n),ee(Re,t)}function Sp(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(_(108,_h(e)||"Unknown",o));return ue({},t,r)}function ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tt,wt=ze.current,ee(ze,e),ee(Re,Re.current),!0}function qu(e,n,t){var r=e.stateNode;if(!r)throw Error(_(169));t?(e=Sp(e,n,wt),r.__reactInternalMemoizedMergedChildContext=e,oe(Re),oe(ze),ee(ze,e)):oe(Re),ee(Re,t)}var _n=null,qi=!1,ha=!1;function Cp(e){_n===null?_n=[e]:_n.push(e)}function Vg(e){qi=!0,Cp(e)}function it(){if(!ha&&_n!==null){ha=!0;var e=0,n=K;try{var t=_n;for(K=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}_n=null,qi=!1}catch(o){throw _n!==null&&(_n=_n.slice(e+1)),Qd(Zl,it),o}finally{K=n,ha=!1}}return null}var Bt=[],Ut=0,ci=null,di=0,Ke=[],Ge=0,kt=null,Nn=1,zn="";function pt(e,n){Bt[Ut++]=di,Bt[Ut++]=ci,ci=e,di=n}function Ep(e,n,t){Ke[Ge++]=Nn,Ke[Ge++]=zn,Ke[Ge++]=kt,kt=e;var r=Nn;e=zn;var o=32-dn(r)-1;r&=~(1<<o),t+=1;var i=32-dn(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Nn=1<<32-dn(n)+o|t<<o|r,zn=i+e}else Nn=1<<i|t<<o|r,zn=e}function ss(e){e.return!==null&&(pt(e,1),Ep(e,1,0))}function us(e){for(;e===ci;)ci=Bt[--Ut],Bt[Ut]=null,di=Bt[--Ut],Bt[Ut]=null;for(;e===kt;)kt=Ke[--Ge],Ke[Ge]=null,zn=Ke[--Ge],Ke[Ge]=null,Nn=Ke[--Ge],Ke[Ge]=null}var $e=null,He=null,ie=!1,cn=null;function Pp(e,n){var t=Ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ru(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,$e=e,He=Yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,$e=e,He=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=kt!==null?{id:Nn,overflow:zn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,$e=e,He=null,!0):!1;default:return!1}}function cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dl(e){if(ie){var n=He;if(n){var t=n;if(!Ru(e,n)){if(cl(e))throw Error(_(418));n=Yn(t.nextSibling);var r=$e;n&&Ru(e,n)?Pp(r,t):(e.flags=e.flags&-4097|2,ie=!1,$e=e)}}else{if(cl(e))throw Error(_(418));e.flags=e.flags&-4097|2,ie=!1,$e=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function To(e){if(e!==$e)return!1;if(!ie)return Mu(e),ie=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!al(e.type,e.memoizedProps)),n&&(n=He)){if(cl(e))throw _p(),Error(_(418));for(;n;)Pp(e,n),n=Yn(n.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){He=Yn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}He=null}}else He=$e?Yn(e.stateNode.nextSibling):null;return!0}function _p(){for(var e=He;e;)e=Yn(e.nextSibling)}function tr(){He=$e=null,ie=!1}function cs(e){cn===null?cn=[e]:cn.push(e)}var Hg=On.ReactCurrentBatchConfig;function Sr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(_(309));var r=t.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(_(284));if(!t._owner)throw Error(_(290,e))}return e}function Io(e,n){throw e=Object.prototype.toString.call(n),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Du(e){var n=e._init;return n(e._payload)}function Np(e){function n(h,f){if(e){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function t(h,f){if(!e)return null;for(;f!==null;)n(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=Zn(h,f),h.index=0,h.sibling=null,h}function i(h,f,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=2,f):g):(h.flags|=2,f)):(h.flags|=1048576,f)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,f,g,S){return f===null||f.tag!==6?(f=Sa(g,h.mode,S),f.return=h,f):(f=o(f,g),f.return=h,f)}function s(h,f,g,S){var P=g.type;return P===Lt?c(h,f,g.props.children,S,g.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Dn&&Du(P)===f.type)?(S=o(f,g.props),S.ref=Sr(h,f,g),S.return=h,S):(S=Ko(g.type,g.key,g.props,null,h.mode,S),S.ref=Sr(h,f,g),S.return=h,S)}function u(h,f,g,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ca(g,h.mode,S),f.return=h,f):(f=o(f,g.children||[]),f.return=h,f)}function c(h,f,g,S,P){return f===null||f.tag!==7?(f=xt(g,h.mode,S,P),f.return=h,f):(f=o(f,g),f.return=h,f)}function d(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Sa(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xo:return g=Ko(f.type,f.key,f.props,null,h.mode,g),g.ref=Sr(h,null,f),g.return=h,g;case Ot:return f=Ca(f,h.mode,g),f.return=h,f;case Dn:var S=f._init;return d(h,S(f._payload),g)}if(zr(f)||vr(f))return f=xt(f,h.mode,g,null),f.return=h,f;Io(h,f)}return null}function m(h,f,g,S){var P=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:l(h,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xo:return g.key===P?s(h,f,g,S):null;case Ot:return g.key===P?u(h,f,g,S):null;case Dn:return P=g._init,m(h,f,P(g._payload),S)}if(zr(g)||vr(g))return P!==null?null:c(h,f,g,S,null);Io(h,g)}return null}function p(h,f,g,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,l(f,h,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xo:return h=h.get(S.key===null?g:S.key)||null,s(f,h,S,P);case Ot:return h=h.get(S.key===null?g:S.key)||null,u(f,h,S,P);case Dn:var k=S._init;return p(h,f,g,k(S._payload),P)}if(zr(S)||vr(S))return h=h.get(g)||null,c(f,h,S,P,null);Io(f,S)}return null}function x(h,f,g,S){for(var P=null,k=null,N=f,A=f=0,M=null;N!==null&&A<g.length;A++){N.index>A?(M=N,N=null):M=N.sibling;var L=m(h,N,g[A],S);if(L===null){N===null&&(N=M);break}e&&N&&L.alternate===null&&n(h,N),f=i(L,f,A),k===null?P=L:k.sibling=L,k=L,N=M}if(A===g.length)return t(h,N),ie&&pt(h,A),P;if(N===null){for(;A<g.length;A++)N=d(h,g[A],S),N!==null&&(f=i(N,f,A),k===null?P=N:k.sibling=N,k=N);return ie&&pt(h,A),P}for(N=r(h,N);A<g.length;A++)M=p(N,h,A,g[A],S),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?A:M.key),f=i(M,f,A),k===null?P=M:k.sibling=M,k=M);return e&&N.forEach(function(q){return n(h,q)}),ie&&pt(h,A),P}function w(h,f,g,S){var P=vr(g);if(typeof P!="function")throw Error(_(150));if(g=P.call(g),g==null)throw Error(_(151));for(var k=P=null,N=f,A=f=0,M=null,L=g.next();N!==null&&!L.done;A++,L=g.next()){N.index>A?(M=N,N=null):M=N.sibling;var q=m(h,N,L.value,S);if(q===null){N===null&&(N=M);break}e&&N&&q.alternate===null&&n(h,N),f=i(q,f,A),k===null?P=q:k.sibling=q,k=q,N=M}if(L.done)return t(h,N),ie&&pt(h,A),P;if(N===null){for(;!L.done;A++,L=g.next())L=d(h,L.value,S),L!==null&&(f=i(L,f,A),k===null?P=L:k.sibling=L,k=L);return ie&&pt(h,A),P}for(N=r(h,N);!L.done;A++,L=g.next())L=p(N,h,A,L.value,S),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?A:L.key),f=i(L,f,A),k===null?P=L:k.sibling=L,k=L);return e&&N.forEach(function(R){return n(h,R)}),ie&&pt(h,A),P}function C(h,f,g,S){if(typeof g=="object"&&g!==null&&g.type===Lt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case xo:e:{for(var P=g.key,k=f;k!==null;){if(k.key===P){if(P=g.type,P===Lt){if(k.tag===7){t(h,k.sibling),f=o(k,g.props.children),f.return=h,h=f;break e}}else if(k.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Dn&&Du(P)===k.type){t(h,k.sibling),f=o(k,g.props),f.ref=Sr(h,k,g),f.return=h,h=f;break e}t(h,k);break}else n(h,k);k=k.sibling}g.type===Lt?(f=xt(g.props.children,h.mode,S,g.key),f.return=h,h=f):(S=Ko(g.type,g.key,g.props,null,h.mode,S),S.ref=Sr(h,f,g),S.return=h,h=S)}return a(h);case Ot:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(h,f.sibling),f=o(f,g.children||[]),f.return=h,h=f;break e}else{t(h,f);break}else n(h,f);f=f.sibling}f=Ca(g,h.mode,S),f.return=h,h=f}return a(h);case Dn:return k=g._init,C(h,f,k(g._payload),S)}if(zr(g))return x(h,f,g,S);if(vr(g))return w(h,f,g,S);Io(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(h,f.sibling),f=o(f,g),f.return=h,h=f):(t(h,f),f=Sa(g,h.mode,S),f.return=h,h=f),a(h)):t(h,f)}return C}var rr=Np(!0),zp=Np(!1),pi=ot(null),mi=null,Vt=null,ds=null;function ps(){ds=Vt=mi=null}function ms(e){var n=pi.current;oe(pi),e._currentValue=n}function pl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Kt(e,n){mi=e,ds=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(qe=!0),e.firstContext=null)}function nn(e){var n=e._currentValue;if(ds!==e)if(e={context:e,memoizedValue:n,next:null},Vt===null){if(mi===null)throw Error(_(308));Vt=e,mi.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return n}var gt=null;function fs(e){gt===null?gt=[e]:gt.push(e)}function Tp(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,fs(n)):(t.next=o.next,o.next=t),n.interleaved=t,bn(e,r)}function bn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Fn=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ip(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,bn(e,t)}return o=r.interleaved,o===null?(n.next=n,fs(r)):(n.next=o.next,o.next=n),r.interleaved=n,bn(e,t)}function Ho(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,es(e,t)}}function Fu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function fi(e,n,t,r){var o=e.updateQueue;Fn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;a=0,c=u=s=null,l=i;do{var m=l.lane,p=l.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(m=n,p=t,w.tag){case 1:if(x=w.payload,typeof x=="function"){d=x.call(p,d,m);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(p,d,m):x,m==null)break e;d=ue({},d,m);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else p={eventTime:p,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,s=d):c=c.next=p,a|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(c===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Ct|=a,e.lanes=a,e.memoizedState=d}}function Bu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var mo={},kn=ot(mo),Zr=ot(mo),eo=ot(mo);function vt(e){if(e===mo)throw Error(_(174));return e}function gs(e,n){switch(ee(eo,n),ee(Zr,e),ee(kn,mo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:$a(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=$a(n,e)}oe(kn),ee(kn,n)}function or(){oe(kn),oe(Zr),oe(eo)}function Ap(e){vt(eo.current);var n=vt(kn.current),t=$a(n,e.type);n!==t&&(ee(Zr,e),ee(kn,t))}function vs(e){Zr.current===e&&(oe(kn),oe(Zr))}var le=ot(0);function hi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ga=[];function ys(){for(var e=0;e<ga.length;e++)ga[e]._workInProgressVersionPrimary=null;ga.length=0}var Wo=On.ReactCurrentDispatcher,va=On.ReactCurrentBatchConfig,St=0,se=null,ye=null,we=null,gi=!1,qr=!1,no=0,Wg=0;function Pe(){throw Error(_(321))}function xs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!mn(e[t],n[t]))return!1;return!0}function ws(e,n,t,r,o,i){if(St=i,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Wo.current=e===null||e.memoizedState===null?Yg:Kg,e=t(r,o),qr){i=0;do{if(qr=!1,no=0,25<=i)throw Error(_(301));i+=1,we=ye=null,n.updateQueue=null,Wo.current=Gg,e=t(r,o)}while(qr)}if(Wo.current=vi,n=ye!==null&&ye.next!==null,St=0,we=ye=se=null,gi=!1,n)throw Error(_(300));return e}function ks(){var e=no!==0;return no=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?se.memoizedState=we=e:we=we.next=e,we}function tn(){if(ye===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var n=we===null?se.memoizedState:we.next;if(n!==null)we=n,ye=e;else{if(e===null)throw Error(_(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},we===null?se.memoizedState=we=e:we=we.next=e}return we}function to(e,n){return typeof n=="function"?n(e):n}function ya(e){var n=tn(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=ye,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((St&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,se.lanes|=c,Ct|=c}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,mn(r,n.memoizedState)||(qe=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,se.lanes|=i,Ct|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function xa(e){var n=tn(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);mn(i,n.memoizedState)||(qe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function bp(){}function jp(e,n){var t=se,r=tn(),o=n(),i=!mn(r.memoizedState,o);if(i&&(r.memoizedState=o,qe=!0),r=r.queue,Ss(qp.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||we!==null&&we.memoizedState.tag&1){if(t.flags|=2048,ro(9,Lp.bind(null,t,r,o,n),void 0,null),ke===null)throw Error(_(349));St&30||Op(t,n,o)}return o}function Op(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=se.updateQueue,n===null?(n={lastEffect:null,stores:null},se.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Lp(e,n,t,r){n.value=t,n.getSnapshot=r,Rp(n)&&Mp(e)}function qp(e,n,t){return t(function(){Rp(n)&&Mp(e)})}function Rp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!mn(e,t)}catch{return!0}}function Mp(e){var n=bn(e,1);n!==null&&pn(n,e,1,-1)}function Uu(e){var n=gn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},n.queue=e,e=e.dispatch=Qg.bind(null,se,e),[n.memoizedState,e]}function ro(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=se.updateQueue,n===null?(n={lastEffect:null,stores:null},se.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Dp(){return tn().memoizedState}function $o(e,n,t,r){var o=gn();se.flags|=e,o.memoizedState=ro(1|n,t,void 0,r===void 0?null:r)}function Ri(e,n,t,r){var o=tn();r=r===void 0?null:r;var i=void 0;if(ye!==null){var a=ye.memoizedState;if(i=a.destroy,r!==null&&xs(r,a.deps)){o.memoizedState=ro(n,t,i,r);return}}se.flags|=e,o.memoizedState=ro(1|n,t,i,r)}function Vu(e,n){return $o(8390656,8,e,n)}function Ss(e,n){return Ri(2048,8,e,n)}function Fp(e,n){return Ri(4,2,e,n)}function Bp(e,n){return Ri(4,4,e,n)}function Up(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vp(e,n,t){return t=t!=null?t.concat([e]):null,Ri(4,4,Up.bind(null,n,e),t)}function Cs(){}function Hp(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&xs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Wp(e,n){var t=tn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&xs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function $p(e,n,t){return St&21?(mn(t,n)||(t=Gd(),se.lanes|=t,Ct|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=t)}function $g(e,n){var t=K;K=t!==0&&4>t?t:4,e(!0);var r=va.transition;va.transition={};try{e(!1),n()}finally{K=t,va.transition=r}}function Jp(){return tn().memoizedState}function Jg(e,n,t){var r=Xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Qp(e))Yp(n,t);else if(t=Tp(e,n,t,r),t!==null){var o=Ae();pn(t,e,r,o),Kp(t,n,r)}}function Qg(e,n,t){var r=Xn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qp(e))Yp(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,mn(l,a)){var s=n.interleaved;s===null?(o.next=o,fs(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=Tp(e,n,o,r),t!==null&&(o=Ae(),pn(t,e,r,o),Kp(t,n,r))}}function Qp(e){var n=e.alternate;return e===se||n!==null&&n===se}function Yp(e,n){qr=gi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Kp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,es(e,t)}}var vi={readContext:nn,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Yg={readContext:nn,useCallback:function(e,n){return gn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:Vu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,$o(4194308,4,Up.bind(null,n,e),t)},useLayoutEffect:function(e,n){return $o(4194308,4,e,n)},useInsertionEffect:function(e,n){return $o(4,2,e,n)},useMemo:function(e,n){var t=gn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=gn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Jg.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var n=gn();return e={current:e},n.memoizedState=e},useState:Uu,useDebugValue:Cs,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Uu(!1),n=e[0];return e=$g.bind(null,e[1]),gn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=se,o=gn();if(ie){if(t===void 0)throw Error(_(407));t=t()}else{if(t=n(),ke===null)throw Error(_(349));St&30||Op(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Vu(qp.bind(null,r,i,e),[e]),r.flags|=2048,ro(9,Lp.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=gn(),n=ke.identifierPrefix;if(ie){var t=zn,r=Nn;t=(r&~(1<<32-dn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=no++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Wg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Kg={readContext:nn,useCallback:Hp,useContext:nn,useEffect:Ss,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Bp,useMemo:Wp,useReducer:ya,useRef:Dp,useState:function(){return ya(to)},useDebugValue:Cs,useDeferredValue:function(e){var n=tn();return $p(n,ye.memoizedState,e)},useTransition:function(){var e=ya(to)[0],n=tn().memoizedState;return[e,n]},useMutableSource:bp,useSyncExternalStore:jp,useId:Jp,unstable_isNewReconciler:!1},Gg={readContext:nn,useCallback:Hp,useContext:nn,useEffect:Ss,useImperativeHandle:Vp,useInsertionEffect:Fp,useLayoutEffect:Bp,useMemo:Wp,useReducer:xa,useRef:Dp,useState:function(){return xa(to)},useDebugValue:Cs,useDeferredValue:function(e){var n=tn();return ye===null?n.memoizedState=e:$p(n,ye.memoizedState,e)},useTransition:function(){var e=xa(to)[0],n=tn().memoizedState;return[e,n]},useMutableSource:bp,useSyncExternalStore:jp,useId:Jp,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=ue({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ml(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ue({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Mi={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ae(),o=Xn(e),i=Tn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Kn(e,i,o),n!==null&&(pn(n,e,o,r),Ho(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ae(),o=Xn(e),i=Tn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Kn(e,i,o),n!==null&&(pn(n,e,o,r),Ho(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ae(),r=Xn(e),o=Tn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Kn(e,o,r),n!==null&&(pn(n,e,r,t),Ho(n,e,r))}};function Hu(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!Yr(t,r)||!Yr(o,i):!0}function Gp(e,n,t){var r=!1,o=tt,i=n.contextType;return typeof i=="object"&&i!==null?i=nn(i):(o=Me(n)?wt:ze.current,r=n.contextTypes,i=(r=r!=null)?nr(e,o):tt),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Mi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Wu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Mi.enqueueReplaceState(n,n.state,null)}function fl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},hs(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=nn(i):(i=Me(n)?wt:ze.current,o.context=nr(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(ml(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Mi.enqueueReplaceState(o,o.state,null),fi(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,n){try{var t="",r=n;do t+=Ph(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function wa(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function hl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Xg=typeof WeakMap=="function"?WeakMap:Map;function Xp(e,n,t){t=Tn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){xi||(xi=!0,Pl=r),hl(e,n)},t}function Zp(e,n,t){t=Tn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){hl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){hl(e,n),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function $u(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Xg;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=pv.bind(null,e,n,t),n.then(e,e))}function Ju(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qu(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Tn(-1,1),n.tag=2,Kn(t,n,1))),t.lanes|=1),e)}var Zg=On.ReactCurrentOwner,qe=!1;function Ie(e,n,t,r){n.child=e===null?zp(n,null,t,r):rr(n,e.child,t,r)}function Yu(e,n,t,r,o){t=t.render;var i=n.ref;return Kt(n,o),r=ws(e,n,t,r,i,o),t=ks(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,jn(e,n,o)):(ie&&t&&ss(n),n.flags|=1,Ie(e,n,r,o),n.child)}function Ku(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!As(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,em(e,n,i,r,o)):(e=Ko(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Yr,t(a,r)&&e.ref===n.ref)return jn(e,n,o)}return n.flags|=1,e=Zn(i,r),e.ref=n.ref,e.return=n,n.child=e}function em(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Yr(i,r)&&e.ref===n.ref)if(qe=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(qe=!0);else return n.lanes=e.lanes,jn(e,n,o)}return gl(e,n,t,r,o)}function nm(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Wt,Ve),Ve|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ee(Wt,Ve),Ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,ee(Wt,Ve),Ve|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,ee(Wt,Ve),Ve|=r;return Ie(e,n,o,t),n.child}function tm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function gl(e,n,t,r,o){var i=Me(t)?wt:ze.current;return i=nr(n,i),Kt(n,o),t=ws(e,n,t,r,i,o),r=ks(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,jn(e,n,o)):(ie&&r&&ss(n),n.flags|=1,Ie(e,n,t,o),n.child)}function Gu(e,n,t,r,o){if(Me(t)){var i=!0;ui(n)}else i=!1;if(Kt(n,o),n.stateNode===null)Jo(e,n),Gp(n,t,r),fl(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=Me(t)?wt:ze.current,u=nr(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Wu(n,a,r,u),Fn=!1;var m=n.memoizedState;a.state=m,fi(n,r,a,o),s=n.memoizedState,l!==r||m!==s||Re.current||Fn?(typeof c=="function"&&(ml(n,t,c,r),s=n.memoizedState),(l=Fn||Hu(n,t,l,r,m,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Ip(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:sn(n.type,l),a.props=u,d=n.pendingProps,m=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=nn(s):(s=Me(t)?wt:ze.current,s=nr(n,s));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||m!==s)&&Wu(n,a,r,s),Fn=!1,m=n.memoizedState,a.state=m,fi(n,r,a,o);var x=n.memoizedState;l!==d||m!==x||Re.current||Fn?(typeof p=="function"&&(ml(n,t,p,r),x=n.memoizedState),(u=Fn||Hu(n,t,u,r,m,x,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),a.props=r,a.state=x,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return vl(e,n,t,r,i,o)}function vl(e,n,t,r,o,i){tm(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&qu(n,t,!1),jn(e,n,i);r=n.stateNode,Zg.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=rr(n,e.child,null,i),n.child=rr(n,null,l,i)):Ie(e,n,l,i),n.memoizedState=r.state,o&&qu(n,t,!0),n.child}function rm(e){var n=e.stateNode;n.pendingContext?Lu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Lu(e,n.context,!1),gs(e,n.containerInfo)}function Xu(e,n,t,r,o){return tr(),cs(o),n.flags|=256,Ie(e,n,t,r),n.child}var yl={dehydrated:null,treeContext:null,retryLane:0};function xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function om(e,n,t){var r=n.pendingProps,o=le.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ee(le,o&1),e===null)return dl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Bi(a,r,0,null),e=xt(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=xl(t),n.memoizedState=yl,e):Es(n,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return ev(e,n,a,r,l,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Zn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Zn(l,i):(i=xt(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?xl(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=yl,r}return i=e.child,e=i.sibling,r=Zn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Es(e,n){return n=Bi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ao(e,n,t,r){return r!==null&&cs(r),rr(n,e.child,null,t),e=Es(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ev(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=wa(Error(_(422))),Ao(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Bi({mode:"visible",children:r.children},o,0,null),i=xt(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&rr(n,e.child,null,a),n.child.memoizedState=xl(a),n.memoizedState=yl,i);if(!(n.mode&1))return Ao(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(_(419)),r=wa(i,r,void 0),Ao(e,n,a,r)}if(l=(a&e.childLanes)!==0,qe||l){if(r=ke,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,bn(e,o),pn(r,e,o,-1))}return Is(),r=wa(Error(_(421))),Ao(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=mv.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,He=Yn(o.nextSibling),$e=n,ie=!0,cn=null,e!==null&&(Ke[Ge++]=Nn,Ke[Ge++]=zn,Ke[Ge++]=kt,Nn=e.id,zn=e.overflow,kt=n),n=Es(n,r.children),n.flags|=4096,n)}function Zu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),pl(e.return,n,t)}function ka(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function im(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(Ie(e,n,r.children,t),r=le.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,t,n);else if(e.tag===19)Zu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(le,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&hi(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ka(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&hi(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ka(n,!0,t,null,i);break;case"together":ka(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Jo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function jn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ct|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(_(153));if(n.child!==null){for(e=n.child,t=Zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function nv(e,n,t){switch(n.tag){case 3:rm(n),tr();break;case 5:Ap(n);break;case 1:Me(n.type)&&ui(n);break;case 4:gs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;ee(pi,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ee(le,le.current&1),n.flags|=128,null):t&n.child.childLanes?om(e,n,t):(ee(le,le.current&1),e=jn(e,n,t),e!==null?e.sibling:null);ee(le,le.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return im(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ee(le,le.current),r)break;return null;case 22:case 23:return n.lanes=0,nm(e,n,t)}return jn(e,n,t)}var am,wl,lm,sm;am=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};wl=function(){};lm=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,vt(kn.current);var i=null;switch(t){case"input":o=Ua(e,o),r=Ua(e,r),i=[];break;case"select":o=ue({},o,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":o=Wa(e,o),r=Wa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=li)}Ja(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ur.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&re("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};sm=function(e,n,t,r){t!==r&&(n.flags|=4)};function Cr(e,n){if(!ie)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function tv(e,n,t){var r=n.pendingProps;switch(us(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(n),null;case 1:return Me(n.type)&&si(),_e(n),null;case 3:return r=n.stateNode,or(),oe(Re),oe(ze),ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(To(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,cn!==null&&(zl(cn),cn=null))),wl(e,n),_e(n),null;case 5:vs(n);var o=vt(eo.current);if(t=n.type,e!==null&&n.stateNode!=null)lm(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(_(166));return _e(n),null}if(e=vt(kn.current),To(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[yn]=n,r[Xr]=i,e=(n.mode&1)!==0,t){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Ir.length;o++)re(Ir[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":su(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":cu(r,i),re("invalid",r)}Ja(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,l,e),o=["children",""+l]):Ur.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&re("scroll",r)}switch(t){case"input":wo(r),uu(r,i,!0);break;case"textarea":wo(r),du(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=li)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[yn]=n,e[Xr]=r,am(e,n,!1,!1),n.stateNode=e;e:{switch(a=Qa(t,r),t){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ir.length;o++)re(Ir[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":su(e,r),o=Ua(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ue({},r,{value:void 0}),re("invalid",e);break;case"textarea":cu(e,r),o=Wa(e,r),re("invalid",e);break;default:o=r}Ja(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Dd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Rd(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Vr(e,s):typeof s=="number"&&Vr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ur.hasOwnProperty(i)?s!=null&&i==="onScroll"&&re("scroll",e):s!=null&&Ql(e,i,s,a))}switch(t){case"input":wo(e),uu(e,r,!1);break;case"textarea":wo(e),du(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$t(e,!!r.multiple,i,!1):r.defaultValue!=null&&$t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=li)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return _e(n),null;case 6:if(e&&n.stateNode!=null)sm(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(_(166));if(t=vt(eo.current),vt(kn.current),To(n)){if(r=n.stateNode,t=n.memoizedProps,r[yn]=n,(i=r.nodeValue!==t)&&(e=$e,e!==null))switch(e.tag){case 3:zo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[yn]=n,n.stateNode=r}return _e(n),null;case 13:if(oe(le),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&He!==null&&n.mode&1&&!(n.flags&128))_p(),tr(),n.flags|=98560,i=!1;else if(i=To(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[yn]=n}else tr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;_e(n),i=!1}else cn!==null&&(zl(cn),cn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||le.current&1?xe===0&&(xe=3):Is())),n.updateQueue!==null&&(n.flags|=4),_e(n),null);case 4:return or(),wl(e,n),e===null&&Kr(n.stateNode.containerInfo),_e(n),null;case 10:return ms(n.type._context),_e(n),null;case 17:return Me(n.type)&&si(),_e(n),null;case 19:if(oe(le),i=n.memoizedState,i===null)return _e(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Cr(i,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=hi(e),a!==null){for(n.flags|=128,Cr(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ee(le,le.current&1|2),n.child}e=e.sibling}i.tail!==null&&me()>ar&&(n.flags|=128,r=!0,Cr(i,!1),n.lanes=4194304)}else{if(!r)if(e=hi(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ie)return _e(n),null}else 2*me()-i.renderingStartTime>ar&&t!==1073741824&&(n.flags|=128,r=!0,Cr(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=me(),n.sibling=null,t=le.current,ee(le,r?t&1|2:t&1),n):(_e(n),null);case 22:case 23:return Ts(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ve&1073741824&&(_e(n),n.subtreeFlags&6&&(n.flags|=8192)):_e(n),null;case 24:return null;case 25:return null}throw Error(_(156,n.tag))}function rv(e,n){switch(us(n),n.tag){case 1:return Me(n.type)&&si(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return or(),oe(Re),oe(ze),ys(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return vs(n),null;case 13:if(oe(le),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(_(340));tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return oe(le),null;case 4:return or(),null;case 10:return ms(n.type._context),null;case 22:case 23:return Ts(),null;case 24:return null;default:return null}}var bo=!1,Ne=!1,ov=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ht(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ce(e,n,r)}else t.current=null}function kl(e,n,t){try{t()}catch(r){ce(e,n,r)}}var ec=!1;function iv(e,n){if(ol=oi,e=mp(),ls(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,m=null;n:for(;;){for(var p;d!==t||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)m=d,d=p;for(;;){if(d===e)break n;if(m===t&&++u===o&&(l=a),m===i&&++c===r&&(s=a),(p=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=p}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(il={focusedElem:e,selectionRange:t},oi=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,C=x.memoizedState,h=n.stateNode,f=h.getSnapshotBeforeUpdate(n.elementType===n.type?w:sn(n.type,w),C);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(S){ce(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return x=ec,ec=!1,x}function Rr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&kl(n,t,i)}o=o.next}while(o!==r)}}function Di(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Sl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function um(e){var n=e.alternate;n!==null&&(e.alternate=null,um(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[yn],delete n[Xr],delete n[sl],delete n[Bg],delete n[Ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cm(e){return e.tag===5||e.tag===3||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=li));else if(r!==4&&(e=e.child,e!==null))for(Cl(e,n,t),e=e.sibling;e!==null;)Cl(e,n,t),e=e.sibling}function El(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(El(e,n,t),e=e.sibling;e!==null;)El(e,n,t),e=e.sibling}var Se=null,un=!1;function Rn(e,n,t){for(t=t.child;t!==null;)dm(e,n,t),t=t.sibling}function dm(e,n,t){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Ai,t)}catch{}switch(t.tag){case 5:Ne||Ht(t,n);case 6:var r=Se,o=un;Se=null,Rn(e,n,t),Se=r,un=o,Se!==null&&(un?(e=Se,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Se.removeChild(t.stateNode));break;case 18:Se!==null&&(un?(e=Se,t=t.stateNode,e.nodeType===8?fa(e.parentNode,t):e.nodeType===1&&fa(e,t),Jr(e)):fa(Se,t.stateNode));break;case 4:r=Se,o=un,Se=t.stateNode.containerInfo,un=!0,Rn(e,n,t),Se=r,un=o;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&kl(t,n,a),o=o.next}while(o!==r)}Rn(e,n,t);break;case 1:if(!Ne&&(Ht(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){ce(t,n,l)}Rn(e,n,t);break;case 21:Rn(e,n,t);break;case 22:t.mode&1?(Ne=(r=Ne)||t.memoizedState!==null,Rn(e,n,t),Ne=r):Rn(e,n,t);break;default:Rn(e,n,t)}}function tc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ov),n.forEach(function(r){var o=fv.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function ln(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,un=!1;break e;case 3:Se=l.stateNode.containerInfo,un=!0;break e;case 4:Se=l.stateNode.containerInfo,un=!0;break e}l=l.return}if(Se===null)throw Error(_(160));dm(i,a,o),Se=null,un=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ce(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)pm(n,e),n=n.sibling}function pm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(n,e),hn(e),r&4){try{Rr(3,e,e.return),Di(3,e)}catch(w){ce(e,e.return,w)}try{Rr(5,e,e.return)}catch(w){ce(e,e.return,w)}}break;case 1:ln(n,e),hn(e),r&512&&t!==null&&Ht(t,t.return);break;case 5:if(ln(n,e),hn(e),r&512&&t!==null&&Ht(t,t.return),e.flags&32){var o=e.stateNode;try{Vr(o,"")}catch(w){ce(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Od(o,i),Qa(l,a);var u=Qa(l,i);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?Dd(o,d):c==="dangerouslySetInnerHTML"?Rd(o,d):c==="children"?Vr(o,d):Ql(o,c,d,u)}switch(l){case"input":Va(o,i);break;case"textarea":Ld(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?$t(o,!!i.multiple,p,!1):m!==!!i.multiple&&(i.defaultValue!=null?$t(o,!!i.multiple,i.defaultValue,!0):$t(o,!!i.multiple,i.multiple?[]:"",!1))}o[Xr]=i}catch(w){ce(e,e.return,w)}}break;case 6:if(ln(n,e),hn(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ce(e,e.return,w)}}break;case 3:if(ln(n,e),hn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Jr(n.containerInfo)}catch(w){ce(e,e.return,w)}break;case 4:ln(n,e),hn(e);break;case 13:ln(n,e),hn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ns=me())),r&4&&tc(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||c,ln(n,e),Ne=u):ln(n,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(O=e,c=e.child;c!==null;){for(d=O=c;O!==null;){switch(m=O,p=m.child,m.tag){case 0:case 11:case 14:case 15:Rr(4,m,m.return);break;case 1:Ht(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(w){ce(r,t,w)}}break;case 5:Ht(m,m.return);break;case 22:if(m.memoizedState!==null){oc(d);continue}}p!==null?(p.return=m,O=p):oc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Md("display",a))}catch(w){ce(e,e.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ce(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ln(n,e),hn(e),r&4&&tc(e);break;case 21:break;default:ln(n,e),hn(e)}}function hn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(cm(t)){var r=t;break e}t=t.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Vr(o,""),r.flags&=-33);var i=nc(e);El(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=nc(e);Cl(e,l,a);break;default:throw Error(_(161))}}catch(s){ce(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function av(e,n,t){O=e,mm(e)}function mm(e,n,t){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||bo;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Ne;l=bo;var u=Ne;if(bo=a,(Ne=s)&&!u)for(O=o;O!==null;)a=O,s=a.child,a.tag===22&&a.memoizedState!==null?ic(o):s!==null?(s.return=a,O=s):ic(o);for(;i!==null;)O=i,mm(i),i=i.sibling;O=o,bo=l,Ne=u}rc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):rc(e)}}function rc(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ne||Di(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ne)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Bu(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Bu(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Jr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ne||n.flags&512&&Sl(n)}catch(m){ce(n,n.return,m)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function oc(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function ic(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Di(4,n)}catch(s){ce(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){ce(n,o,s)}}var i=n.return;try{Sl(n)}catch(s){ce(n,i,s)}break;case 5:var a=n.return;try{Sl(n)}catch(s){ce(n,a,s)}}}catch(s){ce(n,n.return,s)}if(n===e){O=null;break}var l=n.sibling;if(l!==null){l.return=n.return,O=l;break}O=n.return}}var lv=Math.ceil,yi=On.ReactCurrentDispatcher,Ps=On.ReactCurrentOwner,en=On.ReactCurrentBatchConfig,J=0,ke=null,ge=null,Ce=0,Ve=0,Wt=ot(0),xe=0,oo=null,Ct=0,Fi=0,_s=0,Mr=null,Le=null,Ns=0,ar=1/0,Pn=null,xi=!1,Pl=null,Gn=null,jo=!1,Hn=null,wi=0,Dr=0,_l=null,Qo=-1,Yo=0;function Ae(){return J&6?me():Qo!==-1?Qo:Qo=me()}function Xn(e){return e.mode&1?J&2&&Ce!==0?Ce&-Ce:Hg.transition!==null?(Yo===0&&(Yo=Gd()),Yo):(e=K,e!==0||(e=window.event,e=e===void 0?16:op(e.type)),e):1}function pn(e,n,t,r){if(50<Dr)throw Dr=0,_l=null,Error(_(185));uo(e,t,r),(!(J&2)||e!==ke)&&(e===ke&&(!(J&2)&&(Fi|=t),xe===4&&Un(e,Ce)),De(e,r),t===1&&J===0&&!(n.mode&1)&&(ar=me()+500,qi&&it()))}function De(e,n){var t=e.callbackNode;Hh(e,n);var r=ri(e,e===ke?Ce:0);if(r===0)t!==null&&fu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&fu(t),n===1)e.tag===0?Vg(ac.bind(null,e)):Cp(ac.bind(null,e)),Dg(function(){!(J&6)&&it()}),t=null;else{switch(Xd(r)){case 1:t=Zl;break;case 4:t=Yd;break;case 16:t=ti;break;case 536870912:t=Kd;break;default:t=ti}t=km(t,fm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function fm(e,n){if(Qo=-1,Yo=0,J&6)throw Error(_(327));var t=e.callbackNode;if(Gt()&&e.callbackNode!==t)return null;var r=ri(e,e===ke?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ki(e,r);else{n=r;var o=J;J|=2;var i=gm();(ke!==e||Ce!==n)&&(Pn=null,ar=me()+500,yt(e,n));do try{cv();break}catch(l){hm(e,l)}while(!0);ps(),yi.current=i,J=o,ge!==null?n=0:(ke=null,Ce=0,n=xe)}if(n!==0){if(n===2&&(o=Za(e),o!==0&&(r=o,n=Nl(e,o))),n===1)throw t=oo,yt(e,0),Un(e,r),De(e,me()),t;if(n===6)Un(e,r);else{if(o=e.current.alternate,!(r&30)&&!sv(o)&&(n=ki(e,r),n===2&&(i=Za(e),i!==0&&(r=i,n=Nl(e,i))),n===1))throw t=oo,yt(e,0),Un(e,r),De(e,me()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(_(345));case 2:mt(e,Le,Pn);break;case 3:if(Un(e,r),(r&130023424)===r&&(n=Ns+500-me(),10<n)){if(ri(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ll(mt.bind(null,e,Le,Pn),n);break}mt(e,Le,Pn);break;case 4:if(Un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-dn(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lv(r/1960))-r,10<r){e.timeoutHandle=ll(mt.bind(null,e,Le,Pn),r);break}mt(e,Le,Pn);break;case 5:mt(e,Le,Pn);break;default:throw Error(_(329))}}}return De(e,me()),e.callbackNode===t?fm.bind(null,e):null}function Nl(e,n){var t=Mr;return e.current.memoizedState.isDehydrated&&(yt(e,n).flags|=256),e=ki(e,n),e!==2&&(n=Le,Le=t,n!==null&&zl(n)),e}function zl(e){Le===null?Le=e:Le.push.apply(Le,e)}function sv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!mn(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Un(e,n){for(n&=~_s,n&=~Fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-dn(n),r=1<<t;e[t]=-1,n&=~r}}function ac(e){if(J&6)throw Error(_(327));Gt();var n=ri(e,0);if(!(n&1))return De(e,me()),null;var t=ki(e,n);if(e.tag!==0&&t===2){var r=Za(e);r!==0&&(n=r,t=Nl(e,r))}if(t===1)throw t=oo,yt(e,0),Un(e,n),De(e,me()),t;if(t===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,mt(e,Le,Pn),De(e,me()),null}function zs(e,n){var t=J;J|=1;try{return e(n)}finally{J=t,J===0&&(ar=me()+500,qi&&it())}}function Et(e){Hn!==null&&Hn.tag===0&&!(J&6)&&Gt();var n=J;J|=1;var t=en.transition,r=K;try{if(en.transition=null,K=1,e)return e()}finally{K=r,en.transition=t,J=n,!(J&6)&&it()}}function Ts(){Ve=Wt.current,oe(Wt)}function yt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Mg(t)),ge!==null)for(t=ge.return;t!==null;){var r=t;switch(us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&si();break;case 3:or(),oe(Re),oe(ze),ys();break;case 5:vs(r);break;case 4:or();break;case 13:oe(le);break;case 19:oe(le);break;case 10:ms(r.type._context);break;case 22:case 23:Ts()}t=t.return}if(ke=e,ge=e=Zn(e.current,null),Ce=Ve=n,xe=0,oo=null,_s=Fi=Ct=0,Le=Mr=null,gt!==null){for(n=0;n<gt.length;n++)if(t=gt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}gt=null}return e}function hm(e,n){do{var t=ge;try{if(ps(),Wo.current=vi,gi){for(var r=se.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}gi=!1}if(St=0,we=ye=se=null,qr=!1,no=0,Ps.current=null,t===null||t.return===null){xe=1,oo=n,ge=null;break}e:{var i=e,a=t.return,l=t,s=n;if(n=Ce,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Ju(a);if(p!==null){p.flags&=-257,Qu(p,a,l,i,n),p.mode&1&&$u(i,u,n),n=p,s=u;var x=n.updateQueue;if(x===null){var w=new Set;w.add(s),n.updateQueue=w}else x.add(s);break e}else{if(!(n&1)){$u(i,u,n),Is();break e}s=Error(_(426))}}else if(ie&&l.mode&1){var C=Ju(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Qu(C,a,l,i,n),cs(ir(s,l));break e}}i=s=ir(s,l),xe!==4&&(xe=2),Mr===null?Mr=[i]:Mr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var h=Xp(i,s,n);Fu(i,h);break e;case 1:l=s;var f=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Gn===null||!Gn.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=Zp(i,l,n);Fu(i,S);break e}}i=i.return}while(i!==null)}ym(t)}catch(P){n=P,ge===t&&t!==null&&(ge=t=t.return);continue}break}while(!0)}function gm(){var e=yi.current;return yi.current=vi,e===null?vi:e}function Is(){(xe===0||xe===3||xe===2)&&(xe=4),ke===null||!(Ct&268435455)&&!(Fi&268435455)||Un(ke,Ce)}function ki(e,n){var t=J;J|=2;var r=gm();(ke!==e||Ce!==n)&&(Pn=null,yt(e,n));do try{uv();break}catch(o){hm(e,o)}while(!0);if(ps(),J=t,yi.current=r,ge!==null)throw Error(_(261));return ke=null,Ce=0,xe}function uv(){for(;ge!==null;)vm(ge)}function cv(){for(;ge!==null&&!Lh();)vm(ge)}function vm(e){var n=wm(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,n===null?ym(e):ge=n,Ps.current=null}function ym(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=rv(t,n),t!==null){t.flags&=32767,ge=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ge=null;return}}else if(t=tv(t,n,Ve),t!==null){ge=t;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);xe===0&&(xe=5)}function mt(e,n,t){var r=K,o=en.transition;try{en.transition=null,K=1,dv(e,n,t,r)}finally{en.transition=o,K=r}return null}function dv(e,n,t,r){do Gt();while(Hn!==null);if(J&6)throw Error(_(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Wh(e,i),e===ke&&(ge=ke=null,Ce=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||jo||(jo=!0,km(ti,function(){return Gt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=en.transition,en.transition=null;var a=K;K=1;var l=J;J|=4,Ps.current=null,iv(e,t),pm(t,e),Ag(il),oi=!!ol,il=ol=null,e.current=t,av(t),qh(),J=l,K=a,en.transition=i}else e.current=t;if(jo&&(jo=!1,Hn=e,wi=o),i=e.pendingLanes,i===0&&(Gn=null),Dh(t.stateNode),De(e,me()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(xi)throw xi=!1,e=Pl,Pl=null,e;return wi&1&&e.tag!==0&&Gt(),i=e.pendingLanes,i&1?e===_l?Dr++:(Dr=0,_l=e):Dr=0,it(),null}function Gt(){if(Hn!==null){var e=Xd(wi),n=en.transition,t=K;try{if(en.transition=null,K=16>e?16:e,Hn===null)var r=!1;else{if(e=Hn,Hn=null,wi=0,J&6)throw Error(_(331));var o=J;for(J|=4,O=e.current;O!==null;){var i=O,a=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Rr(8,c,i)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var m=c.sibling,p=c.return;if(um(c),c===u){O=null;break}if(m!==null){m.return=p,O=m;break}O=p}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}O=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,O=a;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Rr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,O=h;break e}O=i.return}}var f=e.current;for(O=f;O!==null;){a=O;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,O=g;else e:for(a=f;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Di(9,l)}}catch(P){ce(l,l.return,P)}if(l===a){O=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,O=S;break e}O=l.return}}if(J=o,it(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Ai,e)}catch{}r=!0}return r}finally{K=t,en.transition=n}}return!1}function lc(e,n,t){n=ir(t,n),n=Xp(e,n,1),e=Kn(e,n,1),n=Ae(),e!==null&&(uo(e,1,n),De(e,n))}function ce(e,n,t){if(e.tag===3)lc(e,e,t);else for(;n!==null;){if(n.tag===3){lc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){e=ir(t,e),e=Zp(n,e,1),n=Kn(n,e,1),e=Ae(),n!==null&&(uo(n,1,e),De(n,e));break}}n=n.return}}function pv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ae(),e.pingedLanes|=e.suspendedLanes&t,ke===e&&(Ce&t)===t&&(xe===4||xe===3&&(Ce&130023424)===Ce&&500>me()-Ns?yt(e,0):_s|=t),De(e,n)}function xm(e,n){n===0&&(e.mode&1?(n=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):n=1);var t=Ae();e=bn(e,n),e!==null&&(uo(e,n,t),De(e,t))}function mv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),xm(e,t)}function fv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(n),xm(e,t)}var wm;wm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Re.current)qe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return qe=!1,nv(e,n,t);qe=!!(e.flags&131072)}else qe=!1,ie&&n.flags&1048576&&Ep(n,di,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Jo(e,n),e=n.pendingProps;var o=nr(n,ze.current);Kt(n,t),o=ws(null,n,r,e,o,t);var i=ks();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Me(r)?(i=!0,ui(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hs(n),o.updater=Mi,n.stateNode=o,o._reactInternals=n,fl(n,r,e,t),n=vl(null,n,r,!0,i,t)):(n.tag=0,ie&&i&&ss(n),Ie(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Jo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=gv(r),e=sn(r,e),o){case 0:n=gl(null,n,r,e,t);break e;case 1:n=Gu(null,n,r,e,t);break e;case 11:n=Yu(null,n,r,e,t);break e;case 14:n=Ku(null,n,r,sn(r.type,e),t);break e}throw Error(_(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),gl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),Gu(e,n,r,o,t);case 3:e:{if(rm(n),e===null)throw Error(_(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Ip(e,n),fi(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=ir(Error(_(423)),n),n=Xu(e,n,r,t,o);break e}else if(r!==o){o=ir(Error(_(424)),n),n=Xu(e,n,r,t,o);break e}else for(He=Yn(n.stateNode.containerInfo.firstChild),$e=n,ie=!0,cn=null,t=zp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(tr(),r===o){n=jn(e,n,t);break e}Ie(e,n,r,t)}n=n.child}return n;case 5:return Ap(n),e===null&&dl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,al(r,o)?a=null:i!==null&&al(r,i)&&(n.flags|=32),tm(e,n),Ie(e,n,a,t),n.child;case 6:return e===null&&dl(n),null;case 13:return om(e,n,t);case 4:return gs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=rr(n,null,r,t):Ie(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),Yu(e,n,r,o,t);case 7:return Ie(e,n,n.pendingProps,t),n.child;case 8:return Ie(e,n,n.pendingProps.children,t),n.child;case 12:return Ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,ee(pi,r._currentValue),r._currentValue=a,i!==null)if(mn(i.value,a)){if(i.children===o.children&&!Re.current){n=jn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Tn(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),pl(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(_(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),pl(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ie(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Kt(n,t),o=nn(o),r=r(o),n.flags|=1,Ie(e,n,r,t),n.child;case 14:return r=n.type,o=sn(r,n.pendingProps),o=sn(r.type,o),Ku(e,n,r,o,t);case 15:return em(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),Jo(e,n),n.tag=1,Me(r)?(e=!0,ui(n)):e=!1,Kt(n,t),Gp(n,r,o),fl(n,r,o,t),vl(null,n,r,!0,e,t);case 19:return im(e,n,t);case 22:return nm(e,n,t)}throw Error(_(156,n.tag))};function km(e,n){return Qd(e,n)}function hv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,n,t,r){return new hv(e,n,t,r)}function As(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gv(e){if(typeof e=="function")return As(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kl)return 11;if(e===Gl)return 14}return 2}function Zn(e,n){var t=e.alternate;return t===null?(t=Ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ko(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")As(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Lt:return xt(t.children,o,i,n);case Yl:a=8,o|=8;break;case Ma:return e=Ze(12,t,n,o|2),e.elementType=Ma,e.lanes=i,e;case Da:return e=Ze(13,t,n,o),e.elementType=Da,e.lanes=i,e;case Fa:return e=Ze(19,t,n,o),e.elementType=Fa,e.lanes=i,e;case Ad:return Bi(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Td:a=10;break e;case Id:a=9;break e;case Kl:a=11;break e;case Gl:a=14;break e;case Dn:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return n=Ze(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function xt(e,n,t,r){return e=Ze(7,e,r,n),e.lanes=t,e}function Bi(e,n,t,r){return e=Ze(22,e,r,n),e.elementType=Ad,e.lanes=t,e.stateNode={isHidden:!1},e}function Sa(e,n,t){return e=Ze(6,e,null,n),e.lanes=t,e}function Ca(e,n,t){return n=Ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function vv(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function bs(e,n,t,r,o,i,a,l,s){return e=new vv(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ze(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hs(i),e}function yv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Sm(e){if(!e)return tt;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(_(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(_(171))}if(e.tag===1){var t=e.type;if(Me(t))return Sp(e,t,n)}return n}function Cm(e,n,t,r,o,i,a,l,s){return e=bs(t,r,!0,e,o,i,a,l,s),e.context=Sm(null),t=e.current,r=Ae(),o=Xn(t),i=Tn(r,o),i.callback=n??null,Kn(t,i,o),e.current.lanes=o,uo(e,o,r),De(e,r),e}function Ui(e,n,t,r){var o=n.current,i=Ae(),a=Xn(o);return t=Sm(t),n.context===null?n.context=t:n.pendingContext=t,n=Tn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Kn(o,n,a),e!==null&&(pn(e,o,a,i),Ho(e,o,a)),a}function Si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function js(e,n){sc(e,n),(e=e.alternate)&&sc(e,n)}function xv(){return null}var Em=typeof reportError=="function"?reportError:function(e){console.error(e)};function Os(e){this._internalRoot=e}Vi.prototype.render=Os.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(_(409));Ui(e,n,null,null)};Vi.prototype.unmount=Os.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Et(function(){Ui(null,e,null,null)}),n[An]=null}};function Vi(e){this._internalRoot=e}Vi.prototype.unstable_scheduleHydration=function(e){if(e){var n=np();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Bn.length&&n!==0&&n<Bn[t].priority;t++);Bn.splice(t,0,e),t===0&&rp(e)}};function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function wv(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Si(a);i.call(u)}}var a=Cm(n,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=a,e[An]=a.current,Kr(e.nodeType===8?e.parentNode:e),Et(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Si(s);l.call(u)}}var s=bs(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=s,e[An]=s.current,Kr(e.nodeType===8?e.parentNode:e),Et(function(){Ui(n,s,t,r)}),s}function Wi(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Si(a);l.call(s)}}Ui(n,a,e,o)}else a=wv(t,n,e,o,r);return Si(a)}Zd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Tr(n.pendingLanes);t!==0&&(es(n,t|1),De(n,me()),!(J&6)&&(ar=me()+500,it()))}break;case 13:Et(function(){var r=bn(e,1);if(r!==null){var o=Ae();pn(r,e,1,o)}}),js(e,1)}};ns=function(e){if(e.tag===13){var n=bn(e,134217728);if(n!==null){var t=Ae();pn(n,e,134217728,t)}js(e,134217728)}};ep=function(e){if(e.tag===13){var n=Xn(e),t=bn(e,n);if(t!==null){var r=Ae();pn(t,e,n,r)}js(e,n)}};np=function(){return K};tp=function(e,n){var t=K;try{return K=e,n()}finally{K=t}};Ka=function(e,n,t){switch(n){case"input":if(Va(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Li(r);if(!o)throw Error(_(90));jd(r),Va(r,o)}}}break;case"textarea":Ld(e,t);break;case"select":n=t.value,n!=null&&$t(e,!!t.multiple,n,!1)}};Ud=zs;Vd=Et;var kv={usingClientEntryPoint:!1,Events:[po,Dt,Li,Fd,Bd,zs]},Er={findFiberByHostInstance:ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sv={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$d(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||xv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Ai=Oo.inject(Sv),wn=Oo}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kv;Qe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(n))throw Error(_(200));return yv(e,n,null,t)};Qe.createRoot=function(e,n){if(!Ls(e))throw Error(_(299));var t=!1,r="",o=Em;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=bs(e,1,!1,null,null,t,!1,r,o),e[An]=n.current,Kr(e.nodeType===8?e.parentNode:e),new Os(n)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=$d(n),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Et(e)};Qe.hydrate=function(e,n,t){if(!Hi(n))throw Error(_(200));return Wi(null,e,n,!0,t)};Qe.hydrateRoot=function(e,n,t){if(!Ls(e))throw Error(_(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=Em;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Cm(n,null,e,1,t??null,o,!1,i,a),e[An]=n.current,Kr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Vi(n)};Qe.render=function(e,n,t){if(!Hi(n))throw Error(_(200));return Wi(null,e,n,!1,t)};Qe.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(_(40));return e._reactRootContainer?(Et(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[An]=null})}),!0):!1};Qe.unstable_batchedUpdates=zs;Qe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Hi(t))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Wi(e,n,t,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Pm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pm)}catch(e){console.error(e)}}Pm(),Pd.exports=Qe;var Cv=Pd.exports,_m,cc=Cv;_m=cc.createRoot,cc.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},io.apply(this,arguments)}var Wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wn||(Wn={}));const dc="popstate";function Ev(e){e===void 0&&(e={});function n(r,o){let{pathname:i,search:a,hash:l}=r.location;return Tl("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:Ci(o)}return _v(n,t,null,e)}function de(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Nm(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Pv(){return Math.random().toString(36).substr(2,8)}function pc(e,n){return{usr:e.state,key:e.key,idx:n}}function Tl(e,n,t,r){return t===void 0&&(t=null),io({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?dr(n):n,{state:t,key:n&&n.key||r||Pv()})}function Ci(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function dr(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function _v(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Wn.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(io({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=Wn.Pop;let C=c(),h=C==null?null:C-u;u=C,s&&s({action:l,location:w.location,delta:h})}function m(C,h){l=Wn.Push;let f=Tl(w.location,C,h);u=c()+1;let g=pc(f,u),S=w.createHref(f);try{a.pushState(g,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(S)}i&&s&&s({action:l,location:w.location,delta:1})}function p(C,h){l=Wn.Replace;let f=Tl(w.location,C,h);u=c();let g=pc(f,u),S=w.createHref(f);a.replaceState(g,"",S),i&&s&&s({action:l,location:w.location,delta:0})}function x(C){let h=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof C=="string"?C:Ci(C);return f=f.replace(/ $/,"%20"),de(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let w={get action(){return l},get location(){return e(o,a)},listen(C){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(dc,d),s=C,()=>{o.removeEventListener(dc,d),s=null}},createHref(C){return n(o,C)},createURL:x,encodeLocation(C){let h=x(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:p,go(C){return a.go(C)}};return w}var mc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mc||(mc={}));function Nv(e,n,t){return t===void 0&&(t="/"),zv(e,n,t,!1)}function zv(e,n,t,r){let o=typeof n=="string"?dr(n):n,i=lr(o.pathname||"/",t);if(i==null)return null;let a=zm(e);Tv(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=Fv(i);l=Mv(a[s],u,r)}return l}function zm(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(de(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=et([r,s.relativePath]),c=t.concat(s);i.children&&i.children.length>0&&(de(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zm(i.children,n,c,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:qv(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of Tm(i.path))o(i,a,s)}),n}function Tm(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Tm(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Tv(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Rv(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Iv=/^:[\w-]+$/,Av=3,bv=2,jv=1,Ov=10,Lv=-2,fc=e=>e==="*";function qv(e,n){let t=e.split("/"),r=t.length;return t.some(fc)&&(r+=Lv),n&&(r+=bv),t.filter(o=>!fc(o)).reduce((o,i)=>o+(Iv.test(i)?Av:i===""?jv:Ov),r)}function Rv(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function Mv(e,n,t){let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,c=i==="/"?n:n.slice(i.length)||"/",d=Ei({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c),m=s.route;if(!d&&u&&t&&!r[r.length-1].route.index&&(d=Ei({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:et([i,d.pathname]),pathnameBase:Hv(et([i,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(i=et([i,d.pathnameBase]))}return a}function Ei(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Dv(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:m,isOptional:p}=c;if(m==="*"){let w=l[d]||"";a=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=l[d];return p&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Dv(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Nm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function Fv(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Nm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function lr(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Bv(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?dr(e):e;return{pathname:t?t.startsWith("/")?t:Uv(t,n):n,search:Wv(r),hash:$v(o)}}function Uv(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ea(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vv(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Im(e,n){let t=Vv(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Am(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=dr(e):(o=io({},e),de(!o.pathname||!o.pathname.includes("?"),Ea("?","pathname","search",o)),de(!o.pathname||!o.pathname.includes("#"),Ea("#","pathname","hash",o)),de(!o.search||!o.search.includes("#"),Ea("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=t;else{let d=n.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),d-=1;o.pathname=m.join("/")}l=d>=0?n[d]:"/"}let s=Bv(o,l),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const et=e=>e.join("/").replace(/\/\/+/g,"/"),Hv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$v=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bm=["post","put","patch","delete"];new Set(bm);const Qv=["get",...bm];new Set(Qv);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ao.apply(this,arguments)}const $i=T.createContext(null),jm=T.createContext(null),at=T.createContext(null),Ji=T.createContext(null),Ln=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Om=T.createContext(null);function Yv(e,n){let{relative:t}=n===void 0?{}:n;fo()||de(!1);let{basename:r,navigator:o}=T.useContext(at),{hash:i,pathname:a,search:l}=Qi(e,{relative:t}),s=a;return r!=="/"&&(s=a==="/"?r:et([r,a])),o.createHref({pathname:s,search:l,hash:i})}function fo(){return T.useContext(Ji)!=null}function pr(){return fo()||de(!1),T.useContext(Ji).location}function Lm(e){T.useContext(at).static||T.useLayoutEffect(e)}function qm(){let{isDataRoute:e}=T.useContext(Ln);return e?dy():Kv()}function Kv(){fo()||de(!1);let e=T.useContext($i),{basename:n,future:t,navigator:r}=T.useContext(at),{matches:o}=T.useContext(Ln),{pathname:i}=pr(),a=JSON.stringify(Im(o,t.v7_relativeSplatPath)),l=T.useRef(!1);return Lm(()=>{l.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=Am(u,JSON.parse(a),i,c.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:et([n,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[n,r,a,i,e])}const Gv=T.createContext(null);function Xv(e){let n=T.useContext(Ln).outlet;return n&&T.createElement(Gv.Provider,{value:e},n)}function Zv(){let{matches:e}=T.useContext(Ln),n=e[e.length-1];return n?n.params:{}}function Qi(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=T.useContext(at),{matches:o}=T.useContext(Ln),{pathname:i}=pr(),a=JSON.stringify(Im(o,r.v7_relativeSplatPath));return T.useMemo(()=>Am(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function ey(e,n){return ny(e,n)}function ny(e,n,t,r){fo()||de(!1);let{navigator:o}=T.useContext(at),{matches:i}=T.useContext(Ln),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=pr(),c;if(n){var d;let C=typeof n=="string"?dr(n):n;s==="/"||(d=C.pathname)!=null&&d.startsWith(s)||de(!1),c=C}else c=u;let m=c.pathname||"/",p=m;if(s!=="/"){let C=s.replace(/^\//,"").split("/");p="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let x=Nv(e,{pathname:p}),w=ay(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:et([s,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:et([s,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,t,r);return n&&w?T.createElement(Ji.Provider,{value:{location:ao({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Wn.Pop}},w):w}function ty(){let e=cy(),n=Jv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},n),t?T.createElement("pre",{style:o},t):null,null)}const ry=T.createElement(ty,null);class oy extends T.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?T.createElement(Ln.Provider,{value:this.props.routeContext},T.createElement(Om.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iy(e){let{routeContext:n,match:t,children:r}=e,o=T.useContext($i);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),T.createElement(Ln.Provider,{value:n},r)}function ay(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,l=(o=t)==null?void 0:o.errors;if(l!=null){let c=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||de(!1),a=a.slice(0,Math.min(a.length,c+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:m,errors:p}=t,x=d.route.loader&&m[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||x){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,d,m)=>{let p,x=!1,w=null,C=null;t&&(p=l&&d.route.id?l[d.route.id]:void 0,w=d.route.errorElement||ry,s&&(u<0&&m===0?(x=!0,C=null):u===m&&(x=!0,C=d.route.hydrateFallbackElement||null)));let h=n.concat(a.slice(0,m+1)),f=()=>{let g;return p?g=w:x?g=C:d.route.Component?g=T.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,T.createElement(iy,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:t!=null},children:g})};return t&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?T.createElement(oy,{location:t.location,revalidation:t.revalidation,component:w,error:p,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Rm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Rm||{}),Pi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Pi||{});function ly(e){let n=T.useContext($i);return n||de(!1),n}function sy(e){let n=T.useContext(jm);return n||de(!1),n}function uy(e){let n=T.useContext(Ln);return n||de(!1),n}function Mm(e){let n=uy(),t=n.matches[n.matches.length-1];return t.route.id||de(!1),t.route.id}function cy(){var e;let n=T.useContext(Om),t=sy(Pi.UseRouteError),r=Mm(Pi.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function dy(){let{router:e}=ly(Rm.UseNavigateStable),n=Mm(Pi.UseNavigateStable),t=T.useRef(!1);return Lm(()=>{t.current=!0}),T.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ao({fromRouteId:n},i)))},[e,n])}const hc={};function py(e,n){hc[n]||(hc[n]=!0,console.warn(n))}const gc=(e,n,t)=>py(e,"⚠️ React Router Future Flag Warning: "+n+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+t+"."));function my(e,n){e!=null&&e.v7_startTransition||gc("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&!n&&gc("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function fy(e){return Xv(e.context)}function jt(e){de(!1)}function hy(e){let{basename:n="/",children:t=null,location:r,navigationType:o=Wn.Pop,navigator:i,static:a=!1,future:l}=e;fo()&&de(!1);let s=n.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:s,navigator:i,static:a,future:ao({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=dr(r));let{pathname:c="/",search:d="",hash:m="",state:p=null,key:x="default"}=r,w=T.useMemo(()=>{let C=lr(c,s);return C==null?null:{location:{pathname:C,search:d,hash:m,state:p,key:x},navigationType:o}},[s,c,d,m,p,x,o]);return w==null?null:T.createElement(at.Provider,{value:u},T.createElement(Ji.Provider,{children:t,value:w}))}function gy(e){let{children:n,location:t}=e;return ey(Il(n),t)}new Promise(()=>{});function Il(e,n){n===void 0&&(n=[]);let t=[];return T.Children.forEach(e,(r,o)=>{if(!T.isValidElement(r))return;let i=[...n,o];if(r.type===T.Fragment){t.push.apply(t,Il(r.props.children,i));return}r.type!==jt&&de(!1),!r.props.index||!r.props.children||de(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Il(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_i.apply(this,arguments)}function Dm(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function vy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function yy(e,n){return e.button===0&&(!n||n==="_self")&&!vy(e)}const xy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wy=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],ky="6";try{window.__reactRouterVersion=ky}catch{}const Sy=T.createContext({isTransitioning:!1}),Cy="startTransition",vc=ph[Cy];function Ey(e){let{basename:n,children:t,future:r,window:o}=e,i=T.useRef();i.current==null&&(i.current=Ev({window:o,v5Compat:!0}));let a=i.current,[l,s]=T.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&vc?vc(()=>s(d)):s(d)},[s,u]);return T.useLayoutEffect(()=>a.listen(c),[a,c]),T.useEffect(()=>my(r),[r]),T.createElement(hy,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:a,future:r})}const Py=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_y=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fm=T.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:c,viewTransition:d}=n,m=Dm(n,xy),{basename:p}=T.useContext(at),x,w=!1;if(typeof u=="string"&&_y.test(u)&&(x=u,Py))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=lr(S.pathname,p);S.origin===g.origin&&P!=null?u=P+S.search+S.hash:w=!0}catch{}let C=Yv(u,{relative:o}),h=Ty(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:o,viewTransition:d});function f(g){r&&r(g),g.defaultPrevented||h(g)}return T.createElement("a",_i({},m,{href:x||C,onClick:w||i?r:f,ref:t,target:s}))}),Ny=T.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,viewTransition:u,children:c}=n,d=Dm(n,wy),m=Qi(s,{relative:d.relative}),p=pr(),x=T.useContext(jm),{navigator:w,basename:C}=T.useContext(at),h=x!=null&&Iy(m)&&u===!0,f=w.encodeLocation?w.encodeLocation(m).pathname:m.pathname,g=p.pathname,S=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;o||(g=g.toLowerCase(),S=S?S.toLowerCase():null,f=f.toLowerCase()),S&&C&&(S=lr(S,C)||S);const P=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let k=g===f||!a&&g.startsWith(f)&&g.charAt(P)==="/",N=S!=null&&(S===f||!a&&S.startsWith(f)&&S.charAt(f.length)==="/"),A={isActive:k,isPending:N,isTransitioning:h},M=k?r:void 0,L;typeof i=="function"?L=i(A):L=[i,k?"active":null,N?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let q=typeof l=="function"?l(A):l;return T.createElement(Fm,_i({},d,{"aria-current":M,className:L,ref:t,style:q,to:s,viewTransition:u}),typeof c=="function"?c(A):c)});var Al;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Al||(Al={}));var yc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yc||(yc={}));function zy(e){let n=T.useContext($i);return n||de(!1),n}function Ty(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:l}=n===void 0?{}:n,s=qm(),u=pr(),c=Qi(e,{relative:a});return T.useCallback(d=>{if(yy(d,t)){d.preventDefault();let m=r!==void 0?r:Ci(u)===Ci(c);s(e,{replace:m,state:o,preventScrollReset:i,relative:a,viewTransition:l})}},[u,s,c,r,o,t,e,i,a,l])}function Iy(e,n){n===void 0&&(n={});let t=T.useContext(Sy);t==null&&de(!1);let{basename:r}=zy(Al.useViewTransitionState),o=Qi(e,{relative:n.relative});if(!t.isTransitioning)return!1;let i=lr(t.currentLocation.pathname,r)||t.currentLocation.pathname,a=lr(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Ei(o.pathname,a)!=null||Ei(o.pathname,i)!=null}const Ay="_posts_14fwo_1",by={posts:Ay},bl=[{id:1,titulo:"Python: Origem do nome",texto:`> Fonte: <https://www.alura.com.br/artigos/python-origem-do-nome> 

 Por que uma das linguagens de programação mais amada no mundo tem esse nome e qual a origem dele? Tem relação com algum tipo de cobra? Descubra isso e muito mais neste artigo! 

 ### Um pouco de história 

 [Guido Van Rossum](https://pt.wikipedia.org/wiki/Guido_van_Rossum) criou o [Python](https://www.alura.com.br/cursos-online-programacao/python) em 1989. Ele trabalhava no [Centrum Voor Wiskunde en Informatica](https://www.cwi.nl/) no início dos anos 1980, e seu trabalho era implementar a linguagem de programação conhecida como [ABC](https://pt.wikipedia.org/wiki/ABC_(linguagem_de_programa%C3%A7%C3%A3o)).  

 Durante o final dos anos 1980, enquanto ainda estava no CWI, ele começou a procurar por uma linguagem de script que tivesse sintaxe semelhante ao ABC, mas que tivesse acesso às chamadas de sistema do [Amoeba](https://pt.wikipedia.org/wiki/Amoeba_sistema_operacional). Após procurar e não encontrar nenhuma linguagem que atendesse às suas necessidades, Rossum decidiu projetar uma linguagem de script simples que pudesse superar as inadequações do ABC.  

 No final da década de 1980, Rossum começou a desenvolver o novo script, e em 1991, lançou a versão de abertura da linguagem de programação. Esta primeira versão tinha um sistema de módulo [Modula-3](https://pt.wikipedia.org/wiki/Modula-3), linguagem que foi posteriormente denominada “Python”. 

 ### Certo, mas de onde vem esse nome? 

 Muitas pessoas costumam pensar que o nome Python tem origem em um tipo de cobra, já que o logotipo do Python mostra a imagem de uma cobra azul e amarela. 

 ![gif do logo da linguagem de programação python](/src/assets/posts/1/gif-1.gif)  

 No entanto, a verdadeira história por trás da nomenclatura é um pouco diferente.  

 Na década de 1970, a BBC tinha um programa de TV popular do qual van Rossum era um grande fã chamado [Fly Circus de Monty Python](https://pt.wikipedia.org/wiki/Monty_Python%27s_Flying_Circus), ou apenas Monty Python para os íntimos.  

 Assim, quando desenvolveu a linguagem, ele pensou que precisava de um nome que fosse curto, único e um pouco misterioso, e por algum motivo que só ele conhecia, decidiu chamar o projeto de ‘Python’. 

 ![homem saindo de uma loja](/src/assets/posts/1/gif-2.gif) 

 E se você fosse criar sua própria linguagem de programação, qual nome daria? Faria uma homenagem a sua série, jogo ou filme favorito? 

 No nosso [curso de python](https://www.alura.com.br/cursos-online-programacao/python), que é uma formação completa, entramos também em outras curiosidades da linguagem e sua história, pois a comunidade é muito forte e toma decisões importantes. 

 ### Conclusão 

 Atualmente, [o Python é uma tendência mundial no mundo das pessoas que desenvolvem](https://blog.revelo.com.br/desenvolvedores-python-estao-em-alta-no-mercado/), já que pode ser aplicado em diferentes cenários, como: Data Science, aplicações web, desenvolvimento Back-End, criação de jogos e scripts. 

 Quer aprender mais sobre Python? Veja: 

 - [Python do zero - Formação na linguagem mais querida do momento](https://www.alura.com.br/formacao-Python-linguagem) 

 - [Python para Web - Formação Django](https://www.alura.com.br/formacao-django) 

 - [API com Python - Curso Django Rest Framework](https://www.alura.com.br/curso-online-api-django-3-rest-framework) 

 - [TDD com Python - Desenvolvimento guiado por testes](https://cursos.alura.com.br/course/tdd-django-3-testes) 

 - [Pacman com Python - Criando um jogo com Pygame](https://www.alura.com.br/curso-online-python-pygame-pacman-colisao-pontuacao) 

 `},{id:2,titulo:"O que é Node?",texto:`> Fonte: <https://www.alura.com.br/artigos/node-js-definicao-caracteristicas-vantagens-usos> 

  ### Introdução 

 Node.JS é uma ferramenta amplamente utilizada no universo de desenvolvimento e todos que atuam na área de tecnologia já ouviram falar, nem que seja nos milhares de anúncios de cursos ou mesmo de vagas. Mas você se pergunta: afinal, o que é Node.js? Para que serve? Como ele atua 

 

 Calma que, antes de olhar para o ambiente Node.JS, precisamos entender um pouco sobre o que é o JavaScript e como ele funciona. Vamos lá! 

 

 ### Node.JS e JavaScript 

 

 JavaScript é uma linguagem de programação que originalmente foi desenvolvida para trazer maior interatividade aos **websites** através da manipulação do *DOM* (Document Object Model). Vamos conferir a definição do livro que é uma referência na temática, o **Eloquent JavaScript** 

 

 > O JavaScript foi introduzido em 1995 como uma forma de adicionar dinamicidade à páginas da web no navegador Netscape Navigator. Desde então, a linguagem foi adotada por todos os outros principais navegadores gráficos da web. Ela tornou possíveis o desenvolvimento das aplicações modernas  da web - aplicações com os quais você pode interagir diretamente sem recarregar a página a cada ação. JavaScript também é usado em sites mais tradicionais para fornecer várias formas de interatividade de forma mais inteligente 

  

 >Fonte: [Tradução livre do livro Eloquent JavaScript](https://eloquentjavascript.net/00_intro.html) 

 

 Portanto, de forma resumida, podemos entender que o **JavaScript** foi pensado para ser rápido, dinâmico e acessível. A *linguagem interpretada* possibilita subir ou trabalhar em suas aplicações sem precisar  configurar todo um ambiente complexo. 

 

 Essas características motivaram o engenheiro de software Ryan Dahl a desenvolver um ambiente, como um programa que você instala no seu computador, que trabalha com a linguagem JavaScript fora do navegador e pelo lado do servidor, via terminal, de uma maneira menos restritiva 

 

 ### Tudo bem, mas e o Node.JS? 

  

 O JavaScript nasceu para atender demandas voltadas ao Front e como as necessidades aumentam de acordo com o crescimento tecnológico, surgiu a ideia de utilizar uma mesma linguagem no lado do cliente e do servidor para otimizar processos e serviços. Dessa forma, o Node.JS  aparece como uma alternativa viável para programação Back-End por se tratar de um ambiente para desenvolvimento utilizando a linguagem JavaScript 

 

 De acordo com sua definição oficial, o Node é um **runtime**, que nada mais é do que um conjunto de códigos, API’s, ou seja, são bibliotecas responsáveis pelo tempo de execução (é o que faz o seu programa rodar) que funciona como um interpretador de JavaScript fora do ambiente do **navegador web**. 

 

 É importante frisar que o Node.JS é um ambiente de execução assíncrono, isto é, ele trabalha de modo a não bloquear no momento da execução da aplicação, delegando os processos demorados a um segundo plano. 

 

 Ele dá muito certo  com os servidores de arquitetura **“single threaded”**, isto significa que todos os pedidos para o servidor são executados no mesmo tópico - em vez de serem gerados em processos separados. Um dos grandes diferenciais da parceria Node.JS e Javascript é o bom desempenho no uso de APIs, já que o Javascript faz bastante uso de APIs assíncronas 

 

 Você deve estar se perguntando: “Beleza, já entendi o que é o Node.JS e seu diferencial quando o assunto é o seu uso com o Javascript, mas o que isso significa?” Vamos entender um pouco mais... vem comigo, que te explico.. 

 

 #### Como o Node.JS funciona 

 

 O **Node é capaz de interpretar um código JavaScript**, igual ao que o navegador faz. Sendo assim, quando o navegador recebe um comando em JavaScript, ele o interpreta e depois executa as instruções fornecidas. 

 

 O Node é fantástico (totalmente “sem parcialidade”, aqui pessoal, juro!)  porque torna possível o envio de instruções (os nossos códigos) sem precisar de um navegador ativo, basta ter o Node.JS instalado e utilizar o terminal para executar um programa construído em JavaScript.  

 

 Além disso, você pode utilizar apenas uma linguagem de programação para tratar requisições entre cliente e servidor. Sensacional, não é? 

 

 Para que todo esse processo seja possível de ocorrer fora do navegador, o Node utiliza uma outra ferramenta chamada de **Chrome's V8 JavaScript Engine.** É esse motor V8 do Chrome que compila e executa o código JavaScript no lugar de apenas interpretá-lo. 

 

 *Ainda parece muito confuso? Vem comigo que te explico melhor… 

 

 O motor V8 da Google é o centro, o coração que processa todo o código JavaScript do navegador para que sua máquina compreenda e disponibilize os recursos e interações. Só é possível visualizar páginas em JavaScript ou trabalhar com um código pelo Node.JS devido ao processamento do motor V8 do Chrome. 

 

 Graças ao núcleo baseado em JavaScript e no motor V8 da Google, o Node.JS possui algumas características que, dependendo do cenário, podem ser consideradas como *benefícios* da plataforma, vamos conferir algumas 

 

 ### Características do Node.Js 

 

 Node.JS pode ser utilizado nas famosas APIS Rest, web scrapping, chatbots, IoT, web servers, aplicações Desktop, tudo devido a sua característica altamente versátil. Dentre as principais, podemos citar 

 

 - **Multiplataforma:** permite criar desde aplicativos desktop, aplicativos móveis e até sites SaaS 

 - **Multi-paradigma:** é possível programar em diferentes paradigmas, como: Orientado a Objetos, funcional, imperativo e dirigido à eventos 

 - **Open Source:** é uma plataforma de código aberto, isso significa que você pode ter acesso ao código fonte do Node.JS e realizar suas próprias customizações ou mesmo contribuir para a comunidade de forma direta 

 - **Escalável:** Node.JS  foi criado para construir aplicações web escaláveis, como podemos ver na sua [documentação oficial]( https://nodejs.org/en/about/) 

 

 O Node.JS ainda apresenta uma curva de aprendizado relativamente menor comparado à outras linguagens voltadas ao Back-End e possui uma comunidade gigante disposta a ajudar. E sem dúvida a união dessas forças é o **super poder do Node.JS** 

 

 ### Empresas que usam Node.Js 

 

 Tudo bem, falamos das inúmeras qualidades do Node.JS mas, na prática… onde eu posso trabalhar com a ferramenta 

 

 Por conta dos *super-poderes* do Node.JS, uma gama de gigantes no mercado atua diretamente com a plataforma em suas regras de negócio, confere só a listinha de algumas 

 

 - **NetFlix:** substituiu o renderizador baseado em Java pelo de JavaScript com Node.JS para diminuir o tempo de espera nas requisições dos usuários e conseguiu uma redução de cerca de 1 minuto 

 - **IBM:** criou o The Canary in the Gold Mine (CITGM), um utilitário de testes amplamente utilizado pela companhia 

 - **LinkedIn:** o aplicativo **mobile** da maior rede profissional é construído em Node e HTML5, você pode conferir a matéria na íntegra [aqui](https://venturebeat.com/2011/08/16/linkedin-node/) 

 - **Uber:** sistema de relacionamento entre usuários e condutores foi construído em Node.JS por conta de sua rápida resposta 

 

 E... pasmem! Node.js foi inclusive utilizado pela **NASA** para criar uma API que integra três bases de dados em um só, justamente para otimizar o acesso aos dados. [Node.JS ajuda NASA a manter Astronautas seguros e arquivos acessíveis - **em inglês**](https://openjsf.org/wp-content/uploads/sites/84/2020/02/Case_Study-Node.js-NASA.pdf) 

 

 Node.JS está mesmo voando!! 

 

 ### Meu primeiro código em Node.Js 

 

 Para rodar a plataforma na sua máquina é necessário instalar o Node.JS. Caso você ainda não tenha, siga o tutorial [**Instalando o Node.JS no Windows e linux**](https://www.alura.com.br/artigos/instalando-nodejs-no-windows-e-linux#:~:text=Ap%C3%B3s%20baixar%20o%20instalador%2C%20basta,gostaria%20de%20instalar%20outras%20ferramentas.) 

 

 E depois colocar a mão no código 

 

 Aquele “Hello World!” para dar sorte:

 

 \`\`\`

 console.log(‘Hello, World!’)

 \`\`\`

 

 E agora você pode subir seu primeiro servidor:

 

 \`\`\`

 const http = require('http');

 const server = http.createServer(function (req, res) {

 res.writeHead(200, {'Content-type': 'text/html'});

 res.end('Hello Node!');

 });

 server.listen(3000);

 console.log('Servidor funcionando. Acesse: localhost:3000');

 \`\`\`

 

 Ah, é importante lembrar que aqui o código está de acordo com a última versão estável, a versão LTS (Long-term support ou suporte de longo prazo, em português). Mas o Node trouxe uma novidade muito bacana em sua nova versão, olha só no artigo [**Revolução no Node.js: adeus ao Axios e Node-fetch na versão 17.5.0**](https://www.alura.com.br/artigos/revolucao-node-js-adeus-axios-fetch-api-versao-17-5-0).

 

 Agora é só comemorar e aprofundar seus estudos em Node.JS!`},{id:3,titulo:"O que é JWT?",texto:`> Fonte: <https://www.alura.com.br/artigos/o-que-e-json-web-tokens> 

  Você já foi em algum evento que precisou apresentar um **documento de identificação** para comprovar que você era realmente a pessoa que comprou o ingresso? O ato de solicitar o documento de identificação é uma forma de **autenticação** para que você receba a **autorização** para entrar. Na web, esse processo funciona de forma parecida. Para fazer requisições de alguns serviços ou acessar páginas específicas, você precisa se identificar de alguma forma, e essa identificação precisa ser segura e única.  

 Neste artigo você vai compreender o que é o padrão JWT (sigla para “JSON Web Tokens”) para autenticação, muito usado na web. Também veremos: 

  

 - O que é um token; 

 - Para que serve e quando usar um JWT; 

 - Como criar e verificar seu JWT token. 

  

 ### O que é um token? 

  

 Atualmente, ouvimos muito a palavra token relacionada a NFTs (sigla para “Tokens não fundíveis” em português), metaverso, criptomoedas, etc. Porém, fora desse meio, um token é uma **assinatura digital**, **uma chave**.  

  

 Quando você abre uma conta em um banco, você precisa definir uma senha e seus dados pessoais. Esses dados são convertidos em uma assinatura digital que vai identificar você de **forma única** para aquele banco e, toda vez que você acessar seu banco e entrar com sua senha e um dado pessoal, o banco entenderá e **confirmará** que você é aquele usuário logado, semelhante a entrarmos no evento quando apresentamos nosso documento de identidade. 

  

 Existem vários algoritmos e padrões que transformam suas informações em um token, isto é, uma chave de autenticação única, que faz sentido para o serviço ou aplicação que esteja tentando acessar no momento. Um desses padrões é o JWT, que é seguro por permitir uma autenticação entre duas partes através de um **token assinado**. 

  

 ### O que é JWT? 

  

 Um JWT é um padrão para autenticação e troca de informações definido pela [RFC7519](https://datatracker.ietf.org/doc/html/rfc7519). Nele é possível armazenar de forma segura e compacta [objetos JSON](https://www.alura.com.br/artigos/o-que-e-json). Este token é um código Base64 e pode ser assinado usando um segredo ou par de chaves privadas/públicas. 

  

 Tokens assinados podem verificar a integridade das informações contidas neles, diferente de tokens criptografados que ocultam essas informações. Se um JWT é assinado por um par de chaves pública/privada, a **assinatura** certifica que a parte que possui a chave privada é quem de fato assinou.  

  

 #### Quando e onde eu posso usar um JWT? 

  

 Você pode usar, por exemplo, em um cenário de **autorização.** Depois que o usuário estiver conectado, é possível observar cada solicitação e verificar se esta inclui o JWT, permitindo que o usuário acesse rotas, serviços e outros recursos. 

  

 Outro cenário de utilização de JWTs são as **trocas de informações** pois, como eles são assinados, é possível ter certeza de que os remetentes são quem dizem ser quem são. Além disso, podemos identificar se o conteúdo da assinatura foi alterado ou não devido à composição de um JWT. 

  

 #### Como surgiu o JWT? 

  

 Ele faz parte de uma família de especificações: a família JOSE. 

  

 JOSE significa JSON *Object Signing and Encryption*, em português **Assinatura e criptografia de objetos JSON**. O JWT faz parte dessa família de especificações e representa o token. Abaixo, você confere outras especificações desta família: 

  

 - JWT (JSON Web Tokens): representa o token propriamente dito; 

 - JWS (JSON Web Signature): representa a assinatura do token; 

 - JWE (JSON Web Encryption): representa a assinatura para criptografia do token; 

 - JWK (JSON Web Keys): representa as chaves para a assinatura; 

 - JWA (JSON Web Algorithms): representa os algoritmos para assinatura do token. 

  

 Agora que você já sabe o que é, para que serve e quando usar um JWT, vamos entender mais a fundo como funciona e quais os componentes de um JWT. Vem comigo! 

  

 ### Componentes básicos de um JSON Web Token 

  

 Um JWT possui uma estrutura básica composta pelo _header_, _payload_ e a _signature_. Essas três partes são separadas por pontos ( \`.\` ). Dessa forma, seria algo do tipo: \`header.payload.signature\`. Vamos entender melhor cada uma dessas partes! 

  

 #### Header 

  

 Headers é o cabeçalho do token onde passamos basicamente duas informações: o \`alg\` que informa qual algoritmo é usado para criar a assinatura e o \`typ\` que indica qual o tipo de token. 

   

  

 \`\`\`jsx 

 { 

 "alg": "HS256", 

 "typ": "JWT" 

 } 

 \`\`\` 

  

 #### Payload 

  

 O payload é o componente onde podemos encontrar os dados referentes à autenticação como senha e email, por exemplo. 

  

 \`\`\`jsx 

 { 

 "email": "nome@alura.com.br", 

 "password": "HuEKW489!j445*" 

 } 

 \`\`\` 

  

 #### Signature 

  

 A assinatura do token (_signature_) é composta pela codificação do header e do payload somada a uma chave secreta e é gerada pelo algoritmo especificado no cabeçalho. 

  

 \`\`\`jsx 

 HS256SHA256( 

 base64UrlEncode(header) + "." + base64UrlEncode(payload), secret_key) 

 \`\`\` 

  

 O resultado são três strings separadas por pontos que podem ser facilmente utilizadas em ambientes HTML e protocolos HTTP. 

  

 \`\`\`jsx 

 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. 

 eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ. 

 SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c 

 \`\`\` 

  

 Agora que entendemos como é “por dentro” um JWT vamos criar nosso próprio JSON Web Token! 

  

 ### Criando um jwt token 

  

 Para começar, vamos criar uma pasta chamada \`jwt\` no diretório que você desejar. Crie um arquivo javascript com o nome que escolher, eu estou utilizando \`index.js\`. Faça a instalação da \`lib jwt\` que escolher. Existem diversas libs que ajudam na geração de JWTs. Irei utilizar a [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) que é uma das mais populares, mas você pode ficar à vontade para explorar outras opções. 

  

 O primeiro passo é importar a lib no nosso arquivo: 

  

 \`\`\`jsx 

 const jwt = require('jsonwebtoken'); 

 \`\`\` 

  

  Agora criamos a nossa chave secreta. A ideia é que só você saiba a sua chave secreta e que ela seja difícil a fim de dificultar a ação de ataques maliciosos. A minha ficou desse jeito: 

  

 \`\`\`jsx 

 const secretKey = 'skljaksdj9983498327453lsldkjf'; 

 \`\`\` 

  

 Feito isso, vamos criar nosso token utilizando o método \`sign\`. Este método aceita como parâmetros o payload, a chave secreta e o header, nesta ordem. 

  

 \`\`\`jsx 

 const nossoToken = jwt.sign( 

   { 

 email: 'nome@alura.com.br', 

 password: 'HuEKW489!j445*', 

   }, 

   secretKey, 

   { 

 expiresIn: '1y', 

 subject: '1', 

   } 

 ); 

 \`\`\` 

  

 Para este JWT, eu estou informando um email e senha no payload; minha chave secreta; e no header estou informando um **subject,** que na biblioteca deste exemplo funciona como um id. Além disso, estou dizendo que nosso token **expira** em 1 ano. Por padrão, o algoritmo de codificação é o HS256. 

  

 Para visualizar a saída em nosso terminal, utilizei a biblioteca **Nodemon** que você pode instalar e ver como funciona acessando [este link](https://www.npmjs.com/package/nodemon). O nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em Node.js, reiniciando automaticamente o aplicativo quando são detectadas alterações de arquivo no diretório. 

  

 Podemos ver nosso token gerado passando a variável \`nossoToken\` em um \`console.log\`: 

  

 \`\`\`jsx 

 console.log(nossoToken); 

 \`\`\` 

  

 A saída deve ser: 

  

 \`\`\`jsx 

 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vbWVAYWx1cmEuY29tLmJyIiwicGFzc3dvcmQiOiJIdUVLVzQ4OSFqNDQ1KiIsImlhdCI6MTY1MTY4MzUxNywiZXhwIjoxNjgzMjQxMTE3LCJzdWIiOiIxIn0.t0UuIAxJ1NPXANtlBOKfHfLsePF4LRPu4RA2WMkJl6A 

 \`\`\` 

  

 ### Verificando nosso JWT 

  

 Para verificar nosso token podemos utilizar um método da própria biblioteca [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) chamado \`decode\` passando o token gerado. 

  

 \`\`\`jsx 

 const tokenGerado = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vbWVAYWx1cmEuY29tLmJyIiwicGFzc3dvcmQiOiJIdUVLVzQ4OSFqNDQ1KiIsImlhdCI6MTY1MTY4MzUxNywiZXhwIjoxNjgzMjQxMTE3LCJzdWIiOiIxIn0.t0UuIAxJ1NPXANtlBOKfHfLsePF4LRPu4RA2WMkJl6A'; 

  

 console.log(jwt.decode(tokenGerado)); 

 \`\`\` 

  

 A saída deste código é: 

  

 \`\`\`jsx 

 { 

   email: 'nome@alura.com.br', 

   password: 'HuEKW489!j445*', 

   iat: 1651683517, 

   exp: 1683241117, 

   sub: '1' 

 } 

 \`\`\` 

  

 Onde os parâmetros \`iat\`, \`exp\` e \`sub\` são respectivamente, as datas de criação e expiração, no formato UTC, em que o token foi criado e em que expirará, e o \`subject\` que passamos no nosso código com valor 1. Outra alternativa para verificar nosso token é acessando o link: [https://jwt.io/](https://jwt.io/). Neste caso, só precisamos passar o token gerado e iremos visualizar as informações decodificadas. 

  

 Agora, você deve estar se perguntando: “Agora que eu sei o que é e como funciona um JSON Web Token, como usá-lo em minhas aplicações front-end?” 

  

 Vamos descobrir! 

  

 ### Autenticação com tokens 

  

 Imagine que você é uma pessoa desenvolvedora e está criando o front-end de uma aplicação para um banco. Na página de login você pega os dados dos usuários e envia esses dados para uma API utilizando o fetch ou axios, por exemplo. 

  

 \`\`\` 

 fetch(\`\${baseUrl}/auth/login\`, { 

 method: ‘POST’ 

 headers: { 

  ‘Content Type’: ‘Application/json’, 

 }, 

 body: usuário, 

 }) 

 .then((resposta) => { 

 ...alguma coisa 

 }) 

 .catch((erro) => { 

 ...alguma coisa 

 }); 

  

 \`\`\` 

  

 O servidor irá pegar esses dados e, por meio de uma lógica, irá retornar um token que vai identificar aquele usuário. Agora, toda vez que este usuário logar na plataforma, ele passará por uma **autenticação** e, se estiver tudo certo com os dados, será **autorizado** a acessar determinadas áreas da aplicação, como ver o saldo. Geralmente essa **codificação** e **geração** de tokens é realizada pelo back-end, mas você precisará garantir que este usuário logado possa continuar acessando outras áreas da aplicação. 

  

 Você também pode salvar o token na *session storage* ou *local storage* do seu navegador, para garantir que, enquanto o token não expirar, o usuário permaneça logado na aplicação. Além disso, é importante que, ao efetuar o login, o usuário seja redirecionado para uma página Home, onde ele poderá ver outras funcionalidades da aplicação.  

  

 Quando este usuário tentar acessar a página que mostra o seu saldo, por exemplo, você pode fazer uma requisição, usando axios ou fetch passando no headers um campo “Authorization” com o token gerado. Isso irá fazer com que o servidor verifique se o usuário tem permissão ou não de acessar aquela página específica. 

  

 \`\`\` 

 fetch(\`\${baseUrl}/saldo\`, { 

 headers: { 

  ‘Authorization’: Token, 

 }, 

 }) 

 .then((resposta) => { 

 ...alguma coisa 

 }) 

 .catch((erro) => { 

 ...alguma coisa 

 }); 

 \`\`\` 

  

 Quando o usuário fizer *logout* na nossa aplicação, você pode redirecioná-lo para outra página, e quando o token expirar, você redireciona o usuário para a página de login novamente.  

  

 ### Conclusão 

  

 Quanta coisa legal não é mesmo?  

  

 Neste artigo, você entendeu o que são JSON Web Tokens, para que servem, quais seus componentes e como utilizá-los em suas aplicações. Você também viu como utilizar tokens em uma aplicação front-end para autenticação de usuários. 

  

 Na Alura, temos a [formação de Next.js](https://cursos.alura.com.br/formacao-next-js) que está espetacular! Você pode aplicar todo esse conhecimento de JWT em uma aplicação real no curso de **[Next.js: autenticação e gerenciamento de Tokens](https://cursos.alura.com.br/course/nextjs-autenticacao-gerenciamento-tokens)**.  

 `},{id:4,titulo:"O que é um Sprite 2D?",texto:`> Fonte: <https://www.alura.com.br/artigos/sprite-como-funciona-em-jogos-2d> 

  ## O que é um sprite? 

 É bem comum em jogos vermos vários personagens, movimento de objetos, mapas desenhados ao fundo e muita coisa acontecendo. Todos estes elementos também são conhecidos como **sprite**. Neste artigo, vamos focar nos sprites 2D e como são feitas as animações. 

 Um sprite é uma imagem ou um objeto gráfico de duas dimensões em um jogo, que pode ser tanto personagem quanto objetos adicionados em um plano de fundo. Veja a abaixo a imagem de uma cena com uma sprite de um dos maiores jogos 2D de todos os tempos: 

 Para os personagens, imagine que você queira criar os movimentos deles em seu jogo, como subida de mãos, corrida, pulo, entre outros. Nesse caso, tratamos que o sprite é o personagem e, para todos estes movimentos, devemos montar as variações de sprite. Em resumo, a ideia é desenhar cada movimento como no exemplo mostrado abaixo. O caso é parecido quando queremos construir uma animação em vídeo utilizando uma sequência de desenhos à mão. 

  O nome \`sprite\` ganhou notoriedade no mundo dos games nas décadas de 1970 e 1980, principalmente nos consoles como Atari VCS (1977), ColecoVision (1982), Nintendo Entertainment System (1983) e Sega Genesis (1988).  

 #### Sprites nos dias atuais  

 À medida que a performance dos computadores foi melhorando com a evolução de hardware e software,  os videogames evoluíram para o 3D, porém o uso de elementos 2D ainda continua sendo muito utilizado e aclamado no mundo dos games.  

 Podemos encontrar excelentes jogos 2D nos consoles atuais, com gráficos lindos que possuem vários elementos de design com grande espectro de cores. 

 Veja alguns deles: 

 * **Cuphead** é um jogo eletrônico de tiro 2D que lembra muito os jogos de plataforma dos anos 90 porém com seus gráficos extremamente detalhistas e uma ótima jogabilidade. Outra referência a jogos vintage está no sistema de navegação entre fases através de um mapa ao estilo *Super Mario World*. 

 * **Ori and the Blind Forest** é outro jogo 2D de plataforma com um visual impressionante, com seu personagem destinado a feitos heróicos. 

 * **Limbo** é mais um ótimo jogo eletrônico de plataforma, embora não se trate de um colorido, como os exemplos anteriores, é um jogo que possui paisagens deslumbrantes, personagens bizarros e sons perturbadores. O jogo acontece em um cenário totalmente escuro e cinzento, pois se trata de um lugar sombrio e cheio de perigos. 

 ### Conclusão 

 Um sprite é um personagem ou um objeto dentro dos jogos 2D. Para criar o efeito de movimento, são necessários vários sprites diferentes com pequenas variações do mesmo personagem. Ele teve maior notoriedade nas décadas de 70 e 80 com a chegada dos videogames 2D. Posteriormente, embora o 3D tenha chegado com a evolução dos hardwares e softwares, o sprite 2D continua sendo muito utilizado nos jogos atuais. 

 Agora que você já sabe um pouco mais sobre o sprite e como ele funciona, que tal recriar 2 jogos clássicos com Javascript? Temos esses dois cursos de programação que vão lhe mostrar como recriar esses jogos do zero: 

 - [Jogos clássicos parte 1: iniciando no Javascript com jogo do Pong](https://www.alura.com.br/curso-online-pong-javascript) 

 - [Jogos clássicos parte 2: Aprenda a criar o clássico jogo Freeway](https://www.alura.com.br/curso-online-javascript-listas-lacos) 

 E você pode participar também da imersão GAME DEV da Alura através do link: 

 - [Imersão GAME DEV](https://cursos.alura.com.br/imersoes/aulas/aula-1-animacoes-basicas-e-trilha-sonora-c28) 

 E deixo aqui o meu agradecimento para você que leu até aqui e pôde aprender um pouco mais desse maravilhoso mundo que é a tecnologia. Valeu!`},{id:5,titulo:"Variáveis no CSS",texto:`> Fonte: <https://www.alura.com.br/artigos/construa-css-magico-variaveis-nativas> 

  Provavelmente, ao construir um website, você já deve ter reparado que muitos dos valores nos arquivos CSS são dados que se repetem constantemente, não é mesmo? Por exemplo, a paleta de cores que mantém o padrão visual da página é reutilizada em inúmeros pontos do código. Sendo assim, fazer a manutenção do projeto e alterar esses valores manualmente pode se tornar uma tarefa trabalhosa e passiva de erros, ainda mais em aplicações de grande escala.  

 Mas então, como podemos melhorar essa situação? 

 Uma boa alternativa é utilizar as **Variáveis no CSS** como aliadas!  

 Se você ficou interessado e deseja descobrir como fazer isso, vem comigo que nesse artigo eu te ensinarei mais sobre esse assunto detalhadamente. 

 ## Mas primeiro, o que são Variáveis de CSS? 

 As variáveis de CSS, que também são chamadas de propriedades customizadas, trazem grandes benefícios e vão funcionar de forma bem semelhante às variáveis de linguagens de programação, ou seja, sua maior função é armazenar valores que serão utilizados posteriormente no código.  

 Elas permitem criar valores para todas as propriedades de CSS, sendo bastante utilizadas para gerenciar cores, fontes, valores de animações etc. 

 ## Como utilizar as Variáveis de CSS? 

 As variáveis de CSS tem acesso ao DOM, o que permite que sejam declaradas globalmente ou localmente. Além disso, possuem uma sintaxe característica que já tivemos um pequeno spoiler na imagem acima. Vamos entender melhor como funciona? 

 ### Sintaxe 

 A declaração ou criação de uma variável no arquivo CSS é composta por 4 partes, veja a seguir: 

 - **1º:** Dois hífens (--) 

 - **2º:** Nomeação da variável 

 - **3º:** Dois pontos (:) 

 - **4º:** Valor da variável 

 É importante destacar que alguns caracteres não são permitidos na nomeação, como por exemplo: ; # } ] ) etc. 

 A aplicação das variáveis dentro de um elemento HTML em uma determinada propriedade CSS, é feita por meio da associação entre a função \`var()\` e o nome da variável, que é passada como parâmetro dentro dos parênteses. Dessa forma: 

 \`\`\` 

 body { 

 background: var(--global-primary-color); 

 } 

 \`\`\` 

 ### Declaração global 

 Fazemos isso declarando a variável dentro da pseudo classe \`:root\`. Esse seletor corresponde a raiz, é o mesmo que \`<html>\` em si, só que possui uma especificidade maior. Por meio do root, estamos disponibilizando elas globalmente, podendo ser utilizadas em qualquer lugar do documento.  

 ### Declaração local 

 Para isso, declaramos a variável dentro do seletor que irá utilizá-la. Assim, ficarão restritas ao escopo da onde elas foram declaradas, sendo herdadas apenas pelos elementos filhos. 

 ## De onde surgiu? 

 As variáveis são um recurso que durante muitos anos foi bastante solicitado. Isso porque, anteriormente, essa solução só era possível por meio de pré-processadores, como Sass, Stylus ou através de CSS in JS. Esses artifícios atuam como grandes parceiros, mas ainda sim havia algumas lacunas que faltavam ser preenchidas e que somente foram contempladas com as variáveis no CSS. 

 O principal ponto a se destacar é que as variáveis de pré processadores são estáticas e necessitam da etapa de compilação, ou seja, todas as funções, mixins e interpolações que ocorrem no Sass retornam CSS puro, para serem interpretadas pelo navegador.  

 Já as variáveis de CSS funcionam em tempo de execução, são dinâmicas e funcionam de forma independente das tecnologias usadas, atuando em qualquer contexto, sem precisar de etapas adicionais. 

 Além disso, ocorrem outras limitações com as variáveis de pré-processamento, como por exemplo a impossibilidade de uso de variáveis por meio do @extend nos medias query, a falta de aplicação da herança e efeito cascata nos elementos e como não há acesso ao DOM, não é possível serem controladas via JavaScript. 

 ## E quais são as principais vantagens no uso? 

 ### Código claro  

 Afinal, ler \`--cor-principal-bordas\` é muito mais semântico do que ler #B4E197, onde rapidamente conseguimos entender do que se trata.  

 ### Favorece a manutenção  

 É possível alterarmos a folha de estilo em muitos lugares, apenas alterando o valor da variável em um único lugar, o que otimiza o tempo de trabalho e evita que possíveis erros de escrita aconteçam. 

 ### Criação de temas  

 Com as variáveis, você pode criar e editar facilmente seus guias de estilos ou construir de maneira mais facilitada temáticas, um exemplo clássico disso é na construção de light/dark mode e como as variáveis de CSS são dinâmicas e tem acesso ao DOM, é possível ter um controle maior por meio da manipulação via Java Script, veja um exemplo prático nesse [Alura+ de Dark Mode](https://cursos.alura.com.br/extra/alura-mais/dark-mode-um-projeto-em-html-css-c1369).  

 ## Conteúdo extra 

 ### Cascata CSS 

 São beneficiadas pela cascata do CSS, onde podemos atribuir um novo valor a uma variável, de modo que os elementos filhos irão herdar as características do seu elemento pai mais próximo. 

 ### Relação com o @media query 

 Atualmente, ainda não podemos utilizar variáveis como medidas de resolução de tela no @media query, dessa forma: 

 \`\`\` 

 :root { 

 --sm: 640px; 

 } 

 @media (max-width: var(--sm)) {   

 ... 

 } 

 \`\`\` 

 Ainda é necessário utilizar medidas fixas, mas dentro dos media queries é possível aplicar as variáveis, sem que haja problema algum. 

 \`\`\` 

 :root { 

 --color-text-desktop: red; 

 --color-text-mobile: blue 

 } 

 h1 { 

 color: var(--color-text-desktop) 

 } 

 @media (max-width: 640px) { 

 h1 { 

 color: var(--color-text-mobile) 

 } 

 } 

 \`\`\` 

 ### Suporte ao navegador 

 Segundo o site [Can I use](https://caniuse.com/?search=variables), em relação ao suporte aos navegadores, as variáveis são compatíveis em praticamente todos os navegadores modernos de maneira satisfatória.  

 ## Agora é com você!  

 Neste artigo, nós aprendemos sobre o poder do uso das variáveis no CSS em um projeto, entendemos melhor sobre os seus conceitos, vantagens e aplicação.  

 Para aprofundar o seu mergulho ainda mais no [desenvolvimento front-end](https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end), enriquecer seu portfólio e aplicar as variáveis de CSS em diversos projetos incríveis, não deixe de realizar os cursos da [formação front-end](https://www.alura.com.br/formacao-front-end). 

 Agora me conta, você já utilizava as variáveis em sua rotina de desenvolvimento? Se sim, te convido a contar para nós aqui no fórum ou no discord da Alura as suas impressões da prática com elas. E se você nunca tinha ouvido falar ou se este conteúdo te ajudou de alguma forma, não deixe de dar o seu feedback, sua opinião é muito valiosa para nós e nos ajudar a evoluir e te proporcionar cada vez mais uma melhor experiência de aprendizado.  

 Até a próxima e bons estudos!  

 `},{id:6,titulo:"Principais comunidades de Front-end",texto:`> Fonte: <https://www.alura.com.br/artigos/principais-comunidades-front-end> 

  Quando entramos na área da tecnologia é como se estivéssemos descobrindo um mundo completamente novo. E, nessa caminhada, você pode se sentir só e sem rumo. Então, para lhe mostrar que não tem apenas você nessa jornada, vou trazer nesse artigo algumas comunidades de [front-end](https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end) para que possa conhecer e fazer parte. 

 ## O que é uma comunidade?

 Comunidade é um grupo de pessoas que se reúnem para trocar ideias, dividir experiências e criar eventos (como palestras e workshops, que podem ser presenciais ou on-line). Nesses grupos, diversos temas são debatidos, principalmente sobre as principais demandas do mercado e as tendências da atualidade. 

 Esses espaços são conhecidos por oferecerem bastante suporte, o que é incrível para quem está começando agora na carreira de dev. Neles, você encontrará desde as pessoas iniciantes até as mais experientes e todas estão dispostas a ajudar com qualquer dúvida. O fato é que uma pessoa antes de você já pode ter tido perguntas semelhantes às suas e, nesses grupos, você pode encontrar a solução rapidamente.

 Além disso, você pode se manter informado sobre as boas práticas, novidades, receber feedbacks, conhecer pessoas novas e se conectar com elas. Aliás, fazer networking é importante em qualquer área, pois, ao se conectar com diferentes tipos de pessoas, você não cresce apenas profissionalmente, mas como indivíduo também. 

 Há muitas comunidades para pessoas desenvolvedoras por aí. Por isso,nesse artigo, irei trazer as principais comunidades voltadas para o Front-end.  

 Vamos lá?

 ## Comunidades do Front-end para fazer parte   

### Stack Overflow

 O [Stack Overflow](https://pt.stackoverflow.com/) é um site de perguntas e respostas dedicado a pessoas que já programam ou que querem aprender a programar. A comunidade responde e faz perguntas constantemente, e as pessoas usuárias votam nas melhores para que elas subam no feed e sejam encontradas com mais facilidade. Existem muitas perguntas em inglês, mas, se você quiser, pode ir até a parte que está tudo em português. Legal, né? 

 Você também ganha reputação quando vota nas suas perguntas e respostas. Em níveis mais altos, você ganha privilégios como a permissão de moderação e passa a ajudar a manter a qualidade do site e da comunidade. 

 ### GitHub

  O GitHub é uma plataforma onde você compartilha seu código e arquivos com controle de versão usando o Git. Ele é como uma rede social para pessoas que programam. Assim, você pode seguir pessoas, trocar mensagens e contribuir em projetos privados ou [Open Source](https://www.alura.com.br/artigos/open-source-uma-breve-introducao).

  Apesar do GitHub ter muitas trocas em inglês, vou trazer aqui uma opção maravilhosa em português.  

 Na plataforma existe um fórum incrível chamado [Front-end Brasil](https://github.com/frontendbr). Ele foi criado com o objetivo de reunir dúvidas vindas de outras redes sociais, como Facebook, mas que acabavam perdidas depois de um tempo. Ou seja, as pessoas criadoras deste espaço queriam unificar todas as discussões em um só local e escolheram, justamente, o GitHub por ser mais fácil de encontrar dúvidas antigas. 

 Na página principal tem o link que te leva para o fórum, outro para divulgação de vagas na área de Front-end e o terceiro link vai para a parte de eventos. O mais legal é que qualquer pessoa pode adicionar uma vaga, criar um evento ou dar sugestões, desde que esteja dentro das diretrizes do site, claro.  

 ### MDN Web Docs 

 O [MDN Web Docs](https://developer.mozilla.org/pt-BR/) é um projeto colaborativo open source que documenta tecnologias de plataforma da Web, como HTML, CSS, JavaScript e APIs da Web. Eles também fornecem uma grande coleção de recursos aprendizagem para devs e estudantes iniciantes, como uma [trilha de estudos](https://developer.mozilla.org/pt-BR/docs/Learn/Front-end_web_developer) para desenvolvimento front-end, que você pode acessar em inglês ou português. Top, né? 

 Nessa área, o MDN se propõe a levar você de iniciante a confortável, para que, a partir desse conhecimento básico, você trilhe seu caminho no mundo da programação. E caso você tenha dúvidas ou fique preso em um problema, eles também disponibilizam um fórum para que você poste sua pergunta e outras pessoas possam te ajudar.  

 ### Coderwall 

 O [Coderwall](https://coderwall.com/t/web/popular)  é uma comunidade de devs  para aprender e compartilhar dicas de programação. Há uma seção de dicas específicas para ajudar a resolver problemas ou aprender coisas novas, separadas por tags. Você pode pesquisar “front-end”, por exemplo, e irá encontrar tudo relacionado ao assunto. 

 Além de existir muitos recursos para iniciantes e devs mais experientes, também há áreas exclusivas para dicas de JavaScript, CSS, HTML, Python, Ruby, iOS e vários outros assuntos, em que você tem total liberdade para perguntar ou postar dicas.  

 Um ponto importante é que a maior parte do conteúdo é em inglês, mas isso não precisa ser um empecilho, pois você pode usar o recurso de tradução caso queira, como o [Google Tradutor](https://translate.google.com.br/?hl=pt-BR) ou o [DeepL](https://www.deepl.com/translator). 

  ### WoMakersCode 

 A [WoMakersCode](https://www.linkedin.com/company/womakerscode/) tem a missão de inspirar e impulsionar meninas e mulheres que desejam ingressar ou se especializar em carreiras ligadas à tecnologia e inovação. Dessa forma, é uma organização que cria várias iniciativas de capacitação, mentoria, empregabilidade e conteúdos digitais. Ou seja, você mulher que se sente sozinha nessa área, onde os homens ainda são maioria, tem a possibilidade de se conectar com outras mulheres e aprender muito com elas. 

 A organização também disponibiliza várias palestras, workshops e feira de vagas que você pode se inscrever através [desse link](https://linktr.ee/womakerscode) de forma online e gratuita. E olha só que demais: se quiser, você pode se inscrever para ser palestrante voluntária. 

 ### She's Tech 

 A She’s Tech tem três pilares: inspirar, engajar e capacitar. Ela atua pela conscientização do mercado sobre a diversidade, inclusão e estimula a auto-aceleração através da liderança e protagonismo. 

 Além disso, por meio dela, diversos eventos online e gratuitos são promovidos, onde outras mulheres que já estão atuando na área da tecnologia repassam o que aprenderam durante a vida. Essa comunidade também possui um [grupo no telegram](https://t.me/shestech) para postar e compartilhar oportunidades de trabalho, eventos e cursos para mulheres. 

 ### Minas Programam 

 O [Minas Programam](http://minasprogramam.com/) foi criado para desafiar  a influência dos estereótipos de gênero e de raça na relação de mulheres com as áreas de ciências, tecnologia e computação, de acordo com as criadoras. 

 É um projeto que dá oportunidades de aprendizado sobre programação para meninas e mulheres (cis ou trans) e pessoas não-binárias, especialmente aquelas que são negras ou indígenas, por meio de cursos gratuitos, dicas de livros, oficinas e apoio para as futuras devs que não têm um computador para começar a programar. 

 ### Comunidades Tech 

 O [Comunidades Tech](https://comunidades.tech/) é um projeto open source, onde você pode pesquisar por vários grupos de tecnologia e filtrar por: categoria, tipo, cidade, país, nome da comunidade, entre outros. Após escolher qual você quer participar, é só clicar para encontrar os links de entrada do grupo, que podem ser no discord, facebook, slack, meetup, telegram, whatsapp e até em podcast. 

 Você também pode criar seu próprio grupo e cadastrar lá para que outras pessoas encontrem e sua comunidade cresça. 

 ## Conclusão 

 Muito legal né? E você, já participa de comunidades?  

 Sempre há novidades no mundo da programação e mergulhar em comunidades é muito importante para o seu desenvolvimento como dev. Se você já participa, usufrua de tudo o que ela tem para oferecer, ajude as pessoas, participe de conversas, vá aos encontros e palestras. 

 Lembrando que se você é estudante da Alura temos a nossa própria comunidade no discord, onde você pode pedir ajuda e ajudar várias pessoas. Todas as pessoas estão sempre dispostas a dar aquela dica incrível ou achar o motivo daquele erro que você não consegue encontrar por nada.  

 Afinal, ninguém consegue fazer tudo só! Se você ainda não faz parte, venha e se encante.  

 Vou deixar [aqui o link](https://cursos.alura.com.br/extra/alura-mais/comunidade-no-discord-c1400)  para o Alura+ do João Manoel sobre a comunidade da Alura no discord, onde ele mostra como você faz para entrar e explica tudo sobre como utilizar esse aplicativo. Caso você não tenha muita familiaridade, indico muito que assista.  

 Ah! E se tiver mais dicas de comunidade indique pra gente lá no nosso canal do discord, tenho certeza que todo mundo vai gostar.  

 Agora é com você! Pesquise sobre as comunidades e participe das que gostar mais.  

 `},{id:7,titulo:"Formulários reativos com Angular",texto:`> Fonte: <https://www.alura.com.br/artigos/como-aplicar-validacao-formularios-reativos-angular> 

  Você já deve ter preenchido um formulário que não indicava claramente o porquê de algum campo não estar válido e teve que ficar adivinhando quantos caracteres sua senha precisava ter ou que tipo de caracteres deveria receber. Ou, em um formulário longo, já ocorreu de preencher apenas os campos que achava serem requeridos e só no final, ao tentar submeter os dados, se deparou com inúmeras mensagens de erro mostrando que diversos outros campos eram obrigatórios? Chato, né? Vem aprender como melhorar essa experiência com o uso das validações customizadas do Angular!

Neste artigo, você vai aprender como:



- Criar um formulário reativo;

- Aplicar validações padrão e criar validações customizadas;

- Mostrar os erros de validação apenas quando o campo for acessado;

- Habilitar o botão de submeter os dados apenas quando o formulário estiver válido.



Vamos lá?



Criar formulários é algo muito comum na rotina de devs front-end. Tanto em formulários mais simples e, principalmente à medida que a quantidade de campos do formulário cresce, é necessário implementar validações. 



As validações são importantes para prevenir erros de cadastro e garantir que as informações preenchidas estejam no formato esperado, mas é preciso deixar claro todas as particularidades dos campos a serem preenchidos, a fim de promover uma interação mais dinâmica e amigável das pessoas com nossa aplicação. 



## O que são formulários reativos?



No Angular, existem dois tipos diferentes de formulários: *template drive* e *data driven*. Os do tipo *template driven* são criados e configurados no \`component.html\`; as validações também são incluídas no template e os valores do formulário são submetidos através da diretiva *ngSubmit*.



Já os formulários *data driven* (orientados a dados) são criados e configurados no \`component.ts\` e a maior parte do código fica nesse arquivo e não no html. Dessa forma, temos um template mais limpo, apenas com a estrutura básica do formulário, já que todas as validações são feitas no componente. No html é feita a associação do template ao componente e não precisamos obrigatoriamente do *ngSubmit*.



Fáceis de criar e de dar manutenção, os formulários reativos, como também são conhecidos, são bastante utilizados devido ao seu poder e capacidade de conseguir reagir a mudanças que acontecem no formulário, utilizando [observables](https://www.alura.com.br/curso-online-angular-rxjs-introducao-programacao-reativa). 



Agora nós vamos entender como podemos criar um formulário reativo e aplicar validações nele. 



## O que precisamos configurar?



Com a aplicação criada, precisamos importar o \`reactiveformsModule\` no arquivo \`app.module.ts\` e colocar no array de *imports* do \`ngModule\`, assim:



\`\`\`

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({

  declarations: [

AppComponent

  ],

  imports: [

BrowserModule,

AppRoutingModule,

ReactiveFormsModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})



export class AppModule { }

\`\`\`



Se você tem dúvidas nesse passo, [veja aqui como começar com o Angular](https://www.alura.com.br/artigos/como-comecar-com-angular) e [como criar sua primeira aplicação](https://www.alura.com.br/artigos/criando-aplicacoes-angular-com-angular-cli).



Agora, vamos criar no “app.component.ts” uma variável chamada formulario do tipo **FormGroup** (deve ser importado também), que é uma classe do Angular que vai nos ajudar na implementação e validação dos forms. Outra classe importante que veremos mais à frente é o **FormControl**.



\`\`\`

import { FormGroup } from '@angular/forms';



formulario: FormGroup;

\`\`\`



A abordagem que vamos utilizar para criar nosso formulário é através da injeção de dependência do *service* **FormBuilder**. Esse serviço fornece métodos para gerar controles de formulários e evita a criação manual de instâncias de controle. Para isso vamos ter que:  



- Importar a classe FormBuilder;

- Injetar o service FormBuilder;

- Gerar o conteúdo do formulário.



Vamos criar um formulário com 4 campos:



- nome

- username

- email

- senha



Nosso \`app.component.ts\` ficará assim:



\`\`\`

import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';



@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {



  formulario: FormGroup;



  constructor(private formBuilder: FormBuilder) { }



  ngOnInit(): void {

this.formulario = this.formBuilder.group({

nome: [''],

username: [''],

email: [''],

senha: ['']

});

  }

}

\`\`\`



Também precisamos criar a estrutura do formulário no template com os quatro campos. Agora, antes de implementar as validações, vamos fazer a sincronização do formulário criado no componente com o template para vermos se está tudo certo.



Para isso podemos usar uma diretiva do \`ReactiveFormsModule\` chamada **formGroup**. E na tag *form* do html vamos atribuir a diretiva à nossa variável *formulario* e fazer um *property binding*, porque sempre que o campo for modificado, queremos atualizar e atribuir o valor ao formulário.



\`\`\`

<form [formGroup]="formulario"></form>

\`\`\`



Para associar cada input utilizamos outra diretiva chamada **formControlName**, fazendo um link entre o campo no html e o componente e passando exatamente o nome das variáveis que criamos através do FormBuilder.



\`\`\`

<input id="nome" type="text" formControlName="nome" >

<input id="username" type="text" formControlName="username" >

<input id="email" type="email" formControlName="email" >

<input id="senha" type="password" formControlName="senha" >

\`\`\`



Nosso formulário está assim (estilizado com o [Angular Material](https://material.angular.io/)). 



 ## Aplicando as validações



Agora, vamos incluir as seguintes validações na aplicação:



- Todos os campos serão de preenchimento obrigatório;

- O campo username aceitará apenas letras minúsculas;

- Verificação do preenchimento correto do formato de e-mail;

- Quantidade mínima de caracteres para a senha será 6.



Para começar, vamos importar a classe **Validators**:



\`\`\`

import { Validators } from '@angular/forms';

\`\`\`



Essa classe já traz vários métodos de validação prontos e fáceis de usar como por exemplo:



- required() - campo de preenchimento obrigatório;

- maxLength() - quantidade máxima de caracteres permitido;

- minLength() - quantidade mínima de caracteres permitido;

- email() - valida o formato de e-mail;



[Veja aqui a lista completa de métodos da classe Validators](https://angular.io/api/forms/Validators).



Agora vamos implementar as validações no formulário, passando os métodos de validação como segundo parâmetro do array criado no \`component.ts\`. 



\`\`\`

ngOnInit(): void {

this.formulario = this.formBuilder.group({

nome: ['', [Validators.required]],

username: ['',  [Validators.required]],

email: ['', [Validators.required, Validators.email]],

senha: ['', [Validators.required, Validators.minLength(6)]]

});

  }

\`\`\`



## Exibindo mensagens de erro



Para exibir mensagens referentes às validações, vamos incluir no html, abaixo do input, uma div com a diretiva *ngIf, passando o formulário e pegando os erros do campo passado como parâmetro, e incluindo a mensagem que queremos apresentar:



\`\`\`

<div *ngIf="formulario.get('nome')?.errors>

Nome obrigatório

</div>

\`\`\`



Vamos replicar isso em cada campo e ver o resultado:



Ok, agora as mensagens estão aparecendo, mas já no carregamento inicial da aplicação. Será que existe uma forma mais amigável de apresentá-las? Apenas quando o campo for acessado? Sim!! Podemos fazer isso através de uma propriedade do FormControl chamada **touched**. Seu valor inicial é *false* e sempre que o input dispara o evento *onBlur*, ou seja, quando o campo é acessado e perde o foco, a propriedade recebe o valor *true*.



No exemplo do campo *nome* ficará assim: 



\`\`\`

<div *ngIf="formulario.get('nome')?.errors?.['required'] && formulario.get('nome')?.touched>

Nome obrigatório

</div>

\`\`\`



Replicando para os outros campos, agora as mensagens de erro aparecem apenas quando necessário.



 ## Criando validações customizadas



A validação que queremos incluir para que o campo username receba apenas letras minúsculas não está presente na classe \`\`Validators\`\`. Mas não tem problema, pois é possível criar inúmeras validações customizadas que atendam às suas necessidades.

No nosso exemplo, criamos um arquivo chamado \`minusculoValidator.ts\`, importamos a classe **Abstract Control** e criamos a lógica da validação. 



\`minusculoValidator.ts\`:

\`\`\`

import { AbstractControl } from "@angular/forms";



export function minusculoValidator(control: AbstractControl) {

const username = control.value as string;

if(username !== username?.toLowerCase()) {

return { minusculo: true };

} else

return null;

}

\`\`\`



Depois disso, importamos a validação no componente e incluímos no array junto com as outras validações.



\`app.component.ts\`:

\`\`\`

username: ['',  [Validators.required, minusculoValidator]],

\`\`\`



\`app.component.html\`:

\`\`\`

<div *ngIf="formulario.get('username')?.errors?.['minusculo’] && formulario.get('username')?.touched">

Esse campo aceita apenas letras minúsculas"

</div>

\`\`\`



Assim, através da propriedade *errors*, podemos criar mensagens customizadas dependendo do erro que seja disparado.



## Desabilitar/Habilitar o botão



Outro ponto importante é que o botão para envio dos dados está habilitado desde o início, mesmo que os campos não tenham sido preenchidos. Vamos resolver isso?



O formulário possui a propriedade *valid* e podemos fazer um property binding atribuindo-a à propriedade disabled do botão e assim criar uma lógica para que o botão fique habilitado apenas quando o formulário estiver válido, ou seja, quando todos os campos forem preenchidos corretamente.



\`app.component.html\`:

\`\`\`

<button [disabled]="!formulario.valid">

Cadastre-se

</button>

\`\`\`



`},{id:8,titulo:"Svelte ou React?",texto:`> Fonte: <https://www.alura.com.br/artigos/svelte-versus-react-quais-diferencas> 

  Inegavelmente, o [React é a ferramenta que **atualmente domina o mercado front-end**](https://www.alura.com.br/formacao-react-ts), sendo a mais utilizada de acordo com a [pesquisa de 2020 do State of JS](https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/), seguida de seus concorrentes Angular e Vue.js. Essa demanda também é notável quando pesquisamos por vagas em plataformas de empregos. 

Porém, uma nova ferramenta vem ganhando força nos últimos anos e superou todas as outras nessa mesma pesquisa no quesito **satisfação**: o Svelte. 

 

## Mas o que é o Svelte? 

 

O [Svelte](https://svelte.dev/) é um **compilador** utilizado para construir interfaces web, assim como React, Angular e Vue.js. Ele foi criado em 2016 por Rich Harris, e vem com a proposta de ser mais performático, fácil de aprender e utilizar, possuindo uma alta curva de aprendizagem, além da sintaxe simples e intuitiva. 

 

O Svelte em si é muito leve: [4.4kB, ou 1.6 kB comprimido](https://bundlephobia.com/package/svelte@3.43.2), custando muito menos para os navegadores baixarem os arquivos. Para comparação, os pacotes [react](https://bundlephobia.com/package/react@17.0.2) e [react-dom](https://bundlephobia.com/package/react@17.0.2), juntos, somam 126kB, ou 42.2kB comprimidos. 

 

## Como funciona um compilador no front-end? 

 

O compilador do Svelte lê o código que escrevemos e o **compila** para JavaScript puro, [sem utilizar Virtual DOM](https://svelte.dev/blog/virtual-dom-is-pure-overhead). O código gerado é [extremamente performático](https://krausest.github.io/js-framework-benchmark/2022/table_chrome_99.0.4844.51.html) em relação aos seus concorrentes. 

 

Você também pode ver o processo de compilação na prática, utilizando o [REPL](https://svelte.dev/repl/hello-world), uma ferramenta criada pelo Svelte, onde podemos testar nossos códigos online e ver os arquivos JS gerados. 

 

> Dica: utilize o REPL para testar os exemplos deste artigo! 

 

Agora que você entende como funciona o Svelte e o quão performático ele é, vamos compará-lo com o React, com alguns exemplos de código! 

 

## Comparação de código Svelte vs React 

 

### Estrutura de um componente 

 

Vamos considerar o seguinte código React: 

 

\`\`\` 

import './App.css'; 

import { useState } from 'react'; 

 

function App() { 

  const [nome, setNome] = useState('World'); 

 

  return ( 

<div className="App"> 

<h1>Hello {nome}!</h1> 

</div> 

  ); 

} 

 

export default App; 

\`\`\` 

 

Com o Svelte, o mesmo código acima ficaria assim: 

 

\`\`\` 

<script> 

let nome = 'World'; 

<\/script> 

 

<main> 

<h1>Hello {nome}!</h1> 

</main> 

 

<style> 

main { 

/* estilos de main */ 

} 

 

h1 { 

/* estilos de h1 */ 

} 

</style> 

\`\`\` 

 

O Svelte utiliza a estrutura **Single File Component** (Componente de Arquivo Único), onde deixamos HTML, CSS e JS em um mesmo arquivo com extensão \`.svelte\`. Vemos no exemplo acima que o JS fica dentro da tag \`<script>\`, o CSS dentro da \`<style>\` e o HTML não precisa ser delimitado por alguma tag. Além disso, essas partes podem vir em qualquer ordem, então o código abaixo também é válido: 

 

\`\`\` 

<style> 

h1 { 

/* estilos de h1 */ 

} 

</style> 

 

<h1>Hello {nome}!</h1> 

<p> 

Minha primeira aplicação Svelte! 

</p> 

 

<script> 

let nome = 'World'; 

<\/script> 

\`\`\` 

 

Note também que o HTML do componente não precisa ser envolto por uma tag, como no exemplo acima, que utilizamos as tags \`<h1>\` e \`<p>\`. 

 

### Estado 

 

Em React, para criarmos um estado, precisamos explicitá-lo no código utilizando \`useState\`. Já no Svelte, qualquer variável que criamos com a palavra-chave \`let\` se torna um estado por padrão. 

 

Ainda, em React, se quisermos alterar o estado \`nome\` para um novo valor no clique de um botão, podemos escrever o seguinte: 

 

\`\`\` 

<button onClick={() => setNome('Antônio')} disabled={nome === 'Antônio'}> 

Alterar nome 

</button> 

\`\`\` 

 

O código acima ficaria assim em Svelte: 

 

\`\`\` 

<button on:click={() => nome = 'Antônio'} disabled={nome === 'Antônio'}> 

Alterar nome 

</button> 

\`\`\` 

 

Repare que utilizamos a diretiva [on:](https://svelte.dev/tutorial/dom-events) para escutar o evento de \`click\` do botão. Note também que precisamos apenas fazer uma atribuição direta ao estado \`nome\`, e a interface do componente será re-renderizada de acordo com a mudança. Trata-se de uma sintaxe intuitiva e prática, especialmente, quando trabalhamos com objetos e arrays. 

 

> Diretivas são como “atributos especiais” que colocamos em tags do HTML. Elas já são conhecidas em Angular e Vue.js, e são um recurso poderoso, que podem nos ajudar de diversas formas no nosso desenvolvimento. 

 

### Two-way data binding 

 

Vamos criar um input que altera o estado \`nome\` que criamos no código React, utilizando a função \`setNome\`: 

 

\`\`\` 

<input 

type="text" 

value={nome} 

onChange={(e) => setNome(e.target.value)}   

/> 

\`\`\` 

 

Note que precisamos declarar o atributo \`value={nome}\` para que o estado defina o valor inicial do campo, e também declarar o atributo \`onChange={(e) => setNome(e.target.value)}\` para que as alterações no campo alterem o estado também. 

 

No Svelte, podemos simplificar essas operações utilizando a seguinte sintaxe: 

 

\`\`\` 

<input type="text" bind:value={nome} /> 

\`\`\` 

 

Usamos a diretiva [bind:](https://svelte.dev/tutorial/text-inputs) para fazer um **Two-way data binding** (Ligação de dados bidirecional) que, nesse caso, serve para **ligar** (ou **vincular**) um atributo do HTML a um estado. Dessa forma, o atributo \`value\` e o estado \`nome\` sempre possuirão o mesmo valor. 

 

### Estilos escopados 

 

No React, por padrão, os estilos não são escopados, ou seja, se arquivos CSS declararem estilos para um mesmo seletor, esses estilos irão interferir entre si. Soluções possíveis são utilizar módulos CSS ou Styled Components. 

 

Já no Svelte, os estilos são [**escopados por padrão**](https://svelte.dev/docs#component-format-style), pois esse é o comportamento que geralmente queremos. Se, por acaso, precisarmos que algum estilo seja global para todos os componentes, podemos escrever a seguinte sintaxe: 

 

\`\`\` 

:global(h1) { 

/* estilos de h1 */ 

} 

\`\`\` 

 

Utilizamos o modificador \`:global()\` e, dentro dos parênteses, colocamos o seletor CSS que queremos globalizar. 

 

### Estrutura de condição 

 

No React, combinamos o JS com JSX para renderizar HTML de forma condicional, como nesse código: 

 

\`\`\` 

{ 

nome === 'Antônio' 

? <p>É meu nome!</p> 

: <p>Não é meu nome...</p> 

} 

\`\`\` 

 

Diferentemente, no Svelte, temos uma estrutura dedicada para essas situações, e o código ficaria assim: 

 

\`\`\` 

{#if nome === 'Antônio'} 

<p>É meu nome!</p> 

{:else} 

<p>Não é meu nome...</p> 

{/if} 

\`\`\` 

 

Esse é o bloco [#if](https://svelte.dev/tutorial/if-blocks) do Svelte, e pode ser utilizado, opcionalmente, com cláusulas \`:else if\` e \`:else\`. 

 

### Estrutura de repetição 

 

Em React, podemos combinar o JS com JSX para iterar sobre alguma lista e renderizar HTML de acordo com ela. Considere que temos um estado chamado \`numeros\`, que é um array do JavaScript. Para imprimir um parágrafo para cada item do array, faríamos algo assim: 

 

\`\`\` 

{numeros.map((numero) => ( 

<p>Número: {numero}</p> 

))} 

\`\`\` 

 

Já no Svelte, temos um estrutura dedicada para esses casos, e nosso código ficaria assim:  

 

\`\`\` 

{#each numeros as numero} 

<p>Número: {numero}</p> 

{/each} 

\`\`\` 

 

Esse é o bloco [#each](https://svelte.dev/tutorial/else-blocks) do Svelte e ele pode até ser utilizado junto com uma cláusula \`:else\`, que mostra um HTML caso a lista esteja vazia. 

 

> Note que esses blocos especiais sempre começam com \`#\`, “continuam” com \`:\` (quando há cláusulas) e terminam em \`/\`. 

 

### Código reativo 

 

Às vezes, no nosso código, é útil guardar valores que dependem de algum estado do componente. Em React, logo após a declaração do estado \`nome\`, poderíamos adicionar o seguinte código: 

 

\`\`\` 

const meuNome = nome === 'Antônio'; 

\`\`\` 

 

Assim, podemos utilizar \`meuNome\` no botão e no condicional: 

 

\`\`\` 

<button onClick={() => setNome('Antônio')} disabled={meuNome}> 

Alterar nome 

</button> 

 

{ 

meuNome 

? <p>É meu nome!</p> 

: <p>Não é meu nome...</p> 

} 

\`\`\` 

 

Dessa forma, evitamos repetição de código, além de aumentarmos a legibilidade e a facilidade de manutenção. Entretanto, o código \`const meuNome = nome === 'Antônio';\` é executado sempre que o componente é re-renderizado, mesmo que essa renderização tenha sido causada por um estado que não fosse \`nome\`. 

 

Por outro lado, no Svelte, todo o código dentro da tag \`<script>\` é executado uma única vez, quando o componente é renderizado pela primeira vez na tela. Então, como faríamos para replicar a situação acima? 

 

Na tag \`<script>\`, podemos adicionar o seguinte código: 

 

\`\`\` 

$: meuNome = nome === 'Antônio'; 

\`\`\` 

 

Assim, no HTML, podemos utilizar \`meuNome\`: 

 

\`\`\` 

<button on:click={() => nome = 'Antônio'} disabled={meuNome}> 

Alterar nome 

</button> 

 

{#if meuNome} 

<p>É meu nome!</p> 

{:else} 

<p>Não é meu nome...</p> 

{/if} 

\`\`\` 

 

A sintaxe [$:](https://svelte.dev/tutorial/reactive-statements) indica que um código deve ser reativo! O Svelte identifica quais estados estão sendo utilizados nessa sintaxe e executa o código quando algum desses estados é alterado. Assim, \`meuNome = nome === 'Antônio'\` é executado somente quando o estado \`nome\` for alterado. 

 

> Se você já trabalhou com Vue.js, talvez tenha lembrado das *computed properties* (propriedades computadas). De fato, a “sintaxe de dólar” funciona praticamente da mesma forma. 

 

### E não para por aí… 

 

Fizemos a comparação entre conceitos fundamentais do Svelte e do React, mas ainda levaríamos vários artigos para cobrirmos mais diferenças importantes! Algumas delas: 

 

- **Comunicação entre componentes**: no React, a comunicação básica entre componentes se dá de forma unidirecional e sempre do pai para o filho, através de props. Já o Svelte fornece várias opções pra gente, como props, [dispatch](https://svelte.dev/tutorial/component-events) (filho para o pai) e [bind](https://svelte.dev/tutorial/component-bindings) (comunicação bidirecional). 

 

- **Composição de componentes**: no React, para passarmos conteúdos mais complexos para um componente filho, podemos utilizar \`children\`. No Svelte, utilizamos o [\`slot\`](https://svelte.dev/tutorial/slots), que nos dá uma grande variedade de recursos, como definir um conteúdo padrão (*fallback*), configurar o recebimento de mais de um conteúdo (*named slots*), entre outros. 

 

- **Métodos de ciclo de vida**: na abordagem funcional do React, o controle dos ciclos de vida de um componente é unificado no hook \`useEffect()\`. O Svelte prefere separar essas responsabilidades em [diferentes métodos](https://svelte.dev/tutorial/onmount): \`onMount()\`, \`beforeUpdate()\`, \`afterUpdate()\` e \`onDestroy()\`. Mas também temos a opção de retornar uma função para o método \`onMount()\`, e ela será executada quando o componente for destruído, ou seja, como se ela estivesse no método \`onDestroy()\`. 

 

- **Gerenciamento de estado**: no React, podemos optar pela solução nativa, a Context API, ou alguma biblioteca externa, como Redux. No Svelte, temos duas soluções nativas: as [Stores](https://svelte.dev/tutorial/writable-stores), para gerenciamento de estado global, e uma [Context API](https://svelte.dev/tutorial/context-api) também, para casos mais específicos. 

 

## Resumindo, Svelte é melhor que React? 

 

Apesar de todos os benefícios citados, o Svelte ainda é uma **tecnologia em ascensão**, e não possui tantas oportunidades de emprego quanto seus concorrentes. 

 

Por outro lado, ele já é utilizado por empresas como Spotify, The New York Times, Avast, Philips, e outras, como podemos ver na [página principal do Svelte](https://svelte.dev/) e [nessa página da extensão Wappalyzer](https://www.wappalyzer.com/technologies/javascript-frameworks/svelte), que analisa quais sites utilizam determinada tecnologia. 

 O React ainda lidera o mercado e as vagas de emprego. Mas nós, pessoas desenvolvedoras front-end, devemos sempre nos manter atualizadas de novas tecnologias, principalmente, quando possuem um grande potencial de crescimento, como o Svelte. Além disso, estudar diferentes ferramentas front-end é uma excelente forma de reforçar conceitos e de apurar nosso senso crítico, fazendo-nos questionar as decisões que foram tomadas na construção de uma determinada tecnologia. 

 

Para conferir todos os recursos do Svelte citados neste artigo, você pode visitar o [tutorial](https://svelte.dev/tutorial/basics) ou a [documentação](https://svelte.dev/docs).  

 

Confira também esse Hipster Ponto Tube: [Como trabalhar com Framework SVELTE? Com Mario Souto](https://www.youtube.com/watch?v=1F7r0G0hFcE). 

`}],jy="_post_gisbj_1",Oy="_capa_gisbj_27",Ly="_titulo_gisbj_35",qy="_botaoLer_gisbj_65",Pa={post:jy,capa:Oy,titulo:Ly,botaoLer:qy},Ry="/assets/capa-DySS-mFf.png",Bm=Object.freeze(Object.defineProperty({__proto__:null,default:Ry},Symbol.toStringTag,{value:"Module"})),My="/assets/capa-DmskH3SX.png",Um=Object.freeze(Object.defineProperty({__proto__:null,default:My},Symbol.toStringTag,{value:"Module"})),Dy="/assets/capa-BUq2uN4w.png",Vm=Object.freeze(Object.defineProperty({__proto__:null,default:Dy},Symbol.toStringTag,{value:"Module"})),Fy="/assets/capa-LyQ_nofu.png",Hm=Object.freeze(Object.defineProperty({__proto__:null,default:Fy},Symbol.toStringTag,{value:"Module"})),By="/assets/capa-CR1C_m2X.png",Wm=Object.freeze(Object.defineProperty({__proto__:null,default:By},Symbol.toStringTag,{value:"Module"})),Uy="/assets/capa-D4uoFKxe.png",$m=Object.freeze(Object.defineProperty({__proto__:null,default:Uy},Symbol.toStringTag,{value:"Module"})),Vy="/assets/capa-YXYOXLaI.png",Jm=Object.freeze(Object.defineProperty({__proto__:null,default:Vy},Symbol.toStringTag,{value:"Module"})),Hy="/assets/capa-XWZnfqiV.png",Qm=Object.freeze(Object.defineProperty({__proto__:null,default:Hy},Symbol.toStringTag,{value:"Module"})),Wy=Object.assign({"/src/assets/posts/1/capa.png":Bm,"/src/assets/posts/2/capa.png":Um,"/src/assets/posts/3/capa.png":Vm,"/src/assets/posts/4/capa.png":Hm,"/src/assets/posts/5/capa.png":Wm,"/src/assets/posts/6/capa.png":$m,"/src/assets/posts/7/capa.png":Jm,"/src/assets/posts/8/capa.png":Qm}),$y="_botaoPrincipal_14wow_3",Jy="_lg_14wow_29",Qy="_botaoLer_14wow_41",xc={botaoPrincipal:$y,lg:Jy,botaoLer:Qy};function Ym({children:e,tamanho:n}){return b.jsx("button",{className:`${xc.botaoPrincipal} ${xc[n]}`,children:e})}function Km({post:e}){var t;const n=(t=Wy[`/src/assets/posts/${e.id}/capa.png`])==null?void 0:t.default;return b.jsx(Fm,{to:`/post/${e.id}`,children:b.jsxs("div",{className:Pa.post,children:[n&&b.jsx("img",{className:Pa.post,src:n,alt:`Capa do post ${e.titulo}`}),b.jsx("h2",{className:Pa.titulo,children:e.titulo}),b.jsx(Ym,{children:"Ler"})]})})}function Yy(){return b.jsx("main",{children:b.jsx("ul",{className:by.posts,children:bl.map(e=>b.jsx("li",{children:b.jsx(Km,{post:e})},e.id))})})}const Ky="_postModeloContainer_4kx57_1",Gy="_fotoCapa_4kx57_11",Xy="_titulo_4kx57_13",Zy="_postConteudoContainer_4kx57_57",Lo={postModeloContainer:Ky,fotoCapa:Gy,titulo:Xy,postConteudoContainer:Zy};function Gm({children:e,fotoCapa:n,titulo:t}){return b.jsxs("article",{className:Lo.postModeloContainer,children:[b.jsx("div",{className:Lo.fotoCapa,style:{backgroundImage:`url(${n})`}}),b.jsx("h2",{className:Lo.titulo,children:t}),b.jsx("div",{className:Lo.postConteudoContainer,children:e})]})}const e1="/assets/capa-DmskH3SX.png",Xm="/assets/paulo-C3OA-ETV.jpeg",n1="_fotoSobreMim_153ew_1",t1="_subtitulo_153ew_15",r1="_paragrafo_153ew_25",ut={fotoSobreMim:n1,subtitulo:t1,paragrafo:r1};function o1(){return b.jsx(Gm,{fotoCapa:e1,titulo:"Sobre Mim",children:b.jsxs("h3",{className:ut.subtitulo,children:["Olá eu sou o Paulo Prediger",b.jsx("img",{src:Xm,alt:"Foto minha",className:ut.fotoSobreMim}),b.jsx("p",{className:ut.paragrafo,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio a beatae optio vitae et blanditiis iure voluptatum animi, rerum voluptatem deleniti ad, iste fugiat voluptas, molestiae possimus quod? Id."}),b.jsx("p",{className:ut.paragrafo,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsam delectus nemo, quasi quos iure aliquid voluptatum impedit aspernatur molestiae, provident, fugiat maxime deserunt repellendus ex! Eius esse molestias maiores!"}),b.jsx("p",{className:ut.paragrafo,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis blanditiis enim numquam harum porro modi. Architecto maxime maiores incidunt soluta ipsa magnam. In, nesciunt a quasi temporibus sint architecto?"}),b.jsx("p",{className:ut.paragrafo,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate temporibus dolores aliquid incidunt debitis id mollitia optio praesentium tenetur ad sint porro quos, placeat, corrupti obcaecati? Nostrum in illo dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolor aliquid provident enim. Quaerat eum cum fugiat nemo a libero excepturi dignissimos totam, quas sunt officia labore eaque nesciunt aliquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident repellat quasi mollitia ut nesciunt ullam, rerum perferendis tempore quisquam voluptatum! Dolore dignissimos id sit, modi rem unde mollitia at reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint vero ratione excepturi ducimus, quidem reiciendis corrupti accusamus, vel dolorum ea. Laborum numquam obcaecati totam animi sit eos nulla fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque laborum, voluptatem, maxime doloribus doloremque aperiam modi velit dignissimos enim aliquid quo? Sed, soluta. Reiciendis id incidunt culpa reprehenderit doloribus."}),b.jsx("p",{className:ut.paragrafo,children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa praesentium dolor aut, sed doloribus cumque optio. Corporis, eligendi rerum quasi possimus recusandae libero fugiat quod earum itaque fugit atque alias."})]})})}const i1="_navegacao_1e79d_1",a1={navegacao:i1},l1="_link_1pd69_1",s1="_linkDestacado_1pd69_13",wc={link:l1,linkDestacado:s1};function kc({children:e,to:n}){return b.jsx(Ny,{className:({isActive:t})=>`
    ${wc.link}
    ${t?wc.linkDestacado:""}
`,to:n,end:!0,children:e})}function u1(){return b.jsx("header",{children:b.jsxs("nav",{className:a1.navegacao,children:[b.jsx(kc,{to:"/",children:"Início"}),b.jsx(kc,{to:"/aboutMe",children:"Sobre Mim"})]})})}const c1="_rodape_zwarc_1",d1={rodape:c1},p1=e=>T.createElement("svg",{width:21,height:21,viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},T.createElement("rect",{width:21,height:21,fill:"url(#pattern0)"}),T.createElement("defs",null,T.createElement("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:1,height:1},T.createElement("use",{xlinkHref:"#image0_41_336",transform:"scale(0.0125)"})),T.createElement("image",{id:"image0_41_336",width:80,height:80,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABLRJREFUeNrsXItt2zAQlYUOoA3qTBB2AqsTVJ2gzgRxJ2gyQdIJ5Exgb2BnAikT2J1A3kAl0TMQpObxd4xOCg8gBPhDHR/vjvchmWWJEiUaMc24MNL3vZCPQrbz8xKdZGvVczabtR8WQAmWAqiSbQGACc+uWmjPsm0lqKfJiroCTbalbE0fjxp4RzEl4Oay1f37k3rnfOzA7frhaTcqIEFV654f1TFUe0YMnloYamQVtaHzSnuJBEHfN3Kx2U5F6jr430q20uF9Jfynhj5YSKO3/+a4sp5BE8Q8uILZUPIQwrgt04fYLsYrV+ngMJliKPCWluCp36wG4G/lwN9yCPBsaDOkrQGJ3FjyuuSkth2syFzsdGXJs+AAXsPRcQXHvhkMRFCHxgI8tnHooGOw8PPqEUVLZGOZ2doQ+dggP9lL7/6rj1rJx1ndTY70OQ+4JwKxMaTRvpNELCD2XajIgw16gOD+EBjXNtBXGVGdOxJVNoh7Z7tgQPgVgw6+LghMahfNLMELMKoc+ooFYFBoBi4ORvMQALF83saxr9gAejvEBmd757WIAPIHJC105VKDAHt1iZmjbE+adNbrReZzZl8/USmrtYs9hLHqbJ4a65HS9q08Zrn0mWHPhEHnqnoQO9PYQmBSa7Q9zQEJgG/6vKNcAAyTUrh0tKQOumMAaCE5hWNfNONG/CNv3ygWgAbJqTw0T+fWNJf+k2sMqs5Qcy1e/9Z87uTWwNh00Ye4JDz5hR9WHowOTZTbPJ6Q7yobABc614XLfpSYBLG2TssWNgBq1ZfxuKnTT1tbk+AC4AtjABfEqv3iBaAhlmSpvmDYdS6Gb+qrRd4nMAksDLaBI+l2Qqx9PQbDWAsMQIHEvtwkbw4+pM5ruA98xclGjW0lsOWirpB+qiH4L5FkwjHwda2NBH5igIuwjEZsNxY9umRiQokDgEVmrofYqty777zKJ+L/Kom7GmLb2lQA/DNUjD4VAH8NVZfOfZZuYlI1ZZSUeir7lv1L/+tI5fIeKBc3Z5cOK/wQuCBUKf07qkqh4T06Kn0kMAspYhNnS+5AGnX0EFoQN4z1pAXQkK4SXAwe+HmPmq/nsq0iqe9/GOUOHvg1p1VDDuQnYhNvA7u/to1OXACsMn6kU+Ui0BZWIQA+I0wJZlK4Ryb8h6f9q5CQ8dkGQMybv2Uohbo6je+i9w35bms7C6Mpaxo2AZQefYWVNQ2zWnCzhYZSpKsUYur7m2pWD5wkEPpeEjnpzls7cmRW1zo/a4iDM6ZwMFQCYUxzXbbHOVlh2FzZeew7iSaBBukRgbYP3WSZI7bliMysAq8eiRTauF7YEd09Vh4wpbOwmLPidBop09dyry38vsoTAxxAQH6NzRyjU0mtqwQC75gmrYOLU4THHGLbQJ3n0CG/Dz7mYCwqqdVHdqTEeIPMsALhi6ErNZP3ms9J/EHJp0steGewjzekZYJ01ItGRdJhw0AG0nHXdwIxHbj2jD3TkX9HEKdy6UQ11AxzvPZkNYprT96A6HPxTkls48Z38c6bmf+QVz+ly8eYOqsf5vq72I5ruoCRCMh0BSiRak/uEtp0DfIYAdT5k9kIL+JOlCjRqOmvAAMAZ9HEXWfagyYAAAAASUVORK5CYII="})));function m1(){return b.jsxs("footer",{className:d1.rodape,children:[b.jsx(p1,{}),"Desenvolvido por Paulo Prediger"]})}const f1="/assets/circulo_colorido-CCrRM_rF.png",h1="_banner_yv9ub_1",g1="_titulo_yv9ub_17",v1="_paragrafo_yv9ub_31",y1="_imagens_yv9ub_45",x1="_minhaFoto_yv9ub_55",w1="_circuloColorido_yv9ub_71",ct={banner:h1,titulo:g1,paragrafo:v1,imagens:y1,minhaFoto:x1,circuloColorido:w1};function k1(){return b.jsxs("div",{className:ct.banner,children:[b.jsxs("div",{className:ct.apresentacao,children:[b.jsx("h1",{className:ct.titulo,children:"Olá, mundo!"}),b.jsx("p",{className:ct.paragrafo,children:"Boas vindas ao meu blog! Eu sou Paulo Prediger, estudante de Análise e desenvolvimento de Sistemas e estou em busca de um estágio na área de desenvolvimento Web!"})]}),b.jsxs("div",{className:ct.imagens,children:[b.jsx("img",{className:ct.circuloColorido,src:f1,alt:"Imagem de um círculo colorido","aria-hidden":!0}),b.jsx("img",{className:ct.minhaFoto,src:Xm,alt:"Foto do Paulo Prediger"})]})]})}function Zm({children:e}){return b.jsxs("main",{children:[b.jsx(k1,{}),b.jsx(fy,{}),e]})}function S1(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const C1=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,E1=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,P1={};function Sc(e,n){return(P1.jsx?E1:C1).test(e)}const _1=/[ \t\n\f\r]/g;function N1(e){return typeof e=="object"?e.type==="text"?Cc(e.value):!1:Cc(e)}function Cc(e){return e.replace(_1,"")===""}class ho{constructor(n,t,r){this.property=n,this.normal=t,r&&(this.space=r)}}ho.prototype.property={};ho.prototype.normal={};ho.prototype.space=null;function ef(e,n){const t={},r={};let o=-1;for(;++o<e.length;)Object.assign(t,e[o].property),Object.assign(r,e[o].normal);return new ho(t,r,n)}function jl(e){return e.toLowerCase()}class rn{constructor(n,t){this.property=n,this.attribute=t}}rn.prototype.space=null;rn.prototype.boolean=!1;rn.prototype.booleanish=!1;rn.prototype.overloadedBoolean=!1;rn.prototype.number=!1;rn.prototype.commaSeparated=!1;rn.prototype.spaceSeparated=!1;rn.prototype.commaOrSpaceSeparated=!1;rn.prototype.mustUseProperty=!1;rn.prototype.defined=!1;let z1=0;const U=Nt(),he=Nt(),nf=Nt(),z=Nt(),Z=Nt(),Xt=Nt(),Ue=Nt();function Nt(){return 2**++z1}const Ol=Object.freeze(Object.defineProperty({__proto__:null,boolean:U,booleanish:he,commaOrSpaceSeparated:Ue,commaSeparated:Xt,number:z,overloadedBoolean:nf,spaceSeparated:Z},Symbol.toStringTag,{value:"Module"})),_a=Object.keys(Ol);class qs extends rn{constructor(n,t,r,o){let i=-1;if(super(n,t),Ec(this,"space",o),typeof r=="number")for(;++i<_a.length;){const a=_a[i];Ec(this,_a[i],(r&Ol[a])===Ol[a])}}}qs.prototype.defined=!0;function Ec(e,n,t){t&&(e[n]=t)}const T1={}.hasOwnProperty;function mr(e){const n={},t={};let r;for(r in e.properties)if(T1.call(e.properties,r)){const o=e.properties[r],i=new qs(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),n[r]=i,t[jl(r)]=r,t[jl(i.attribute)]=r}return new ho(n,t,e.space)}const tf=mr({space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),rf=mr({space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function of(e,n){return n in e?e[n]:n}function af(e,n){return of(e,n.toLowerCase())}const lf=mr({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:af,properties:{xmlns:null,xmlnsXLink:null}}),sf=mr({transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:he,ariaAutoComplete:null,ariaBusy:he,ariaChecked:he,ariaColCount:z,ariaColIndex:z,ariaColSpan:z,ariaControls:Z,ariaCurrent:null,ariaDescribedBy:Z,ariaDetails:null,ariaDisabled:he,ariaDropEffect:Z,ariaErrorMessage:null,ariaExpanded:he,ariaFlowTo:Z,ariaGrabbed:he,ariaHasPopup:null,ariaHidden:he,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Z,ariaLevel:z,ariaLive:null,ariaModal:he,ariaMultiLine:he,ariaMultiSelectable:he,ariaOrientation:null,ariaOwns:Z,ariaPlaceholder:null,ariaPosInSet:z,ariaPressed:he,ariaReadOnly:he,ariaRelevant:null,ariaRequired:he,ariaRoleDescription:Z,ariaRowCount:z,ariaRowIndex:z,ariaRowSpan:z,ariaSelected:he,ariaSetSize:z,ariaSort:null,ariaValueMax:z,ariaValueMin:z,ariaValueNow:z,ariaValueText:null,role:null}}),I1=mr({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:af,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Xt,acceptCharset:Z,accessKey:Z,action:null,allow:null,allowFullScreen:U,allowPaymentRequest:U,allowUserMedia:U,alt:null,as:null,async:U,autoCapitalize:null,autoComplete:Z,autoFocus:U,autoPlay:U,blocking:Z,capture:null,charSet:null,checked:U,cite:null,className:Z,cols:z,colSpan:null,content:null,contentEditable:he,controls:U,controlsList:Z,coords:z|Xt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:U,defer:U,dir:null,dirName:null,disabled:U,download:nf,draggable:he,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:U,formTarget:null,headers:Z,height:z,hidden:U,high:z,href:null,hrefLang:null,htmlFor:Z,httpEquiv:Z,id:null,imageSizes:null,imageSrcSet:null,inert:U,inputMode:null,integrity:null,is:null,isMap:U,itemId:null,itemProp:Z,itemRef:Z,itemScope:U,itemType:Z,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:U,low:z,manifest:null,max:null,maxLength:z,media:null,method:null,min:null,minLength:z,multiple:U,muted:U,name:null,nonce:null,noModule:U,noValidate:U,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:U,optimum:z,pattern:null,ping:Z,placeholder:null,playsInline:U,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:U,referrerPolicy:null,rel:Z,required:U,reversed:U,rows:z,rowSpan:z,sandbox:Z,scope:null,scoped:U,seamless:U,selected:U,shadowRootClonable:U,shadowRootDelegatesFocus:U,shadowRootMode:null,shape:null,size:z,sizes:null,slot:null,span:z,spellCheck:he,src:null,srcDoc:null,srcLang:null,srcSet:null,start:z,step:null,style:null,tabIndex:z,target:null,title:null,translate:null,type:null,typeMustMatch:U,useMap:null,value:he,width:z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Z,axis:null,background:null,bgColor:null,border:z,borderColor:null,bottomMargin:z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:U,declare:U,event:null,face:null,frame:null,frameBorder:null,hSpace:z,leftMargin:z,link:null,longDesc:null,lowSrc:null,marginHeight:z,marginWidth:z,noResize:U,noHref:U,noShade:U,noWrap:U,object:null,profile:null,prompt:null,rev:null,rightMargin:z,rules:null,scheme:null,scrolling:he,standby:null,summary:null,text:null,topMargin:z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:U,disableRemotePlayback:U,prefix:null,property:null,results:z,security:null,unselectable:null}}),A1=mr({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:of,properties:{about:Ue,accentHeight:z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:z,amplitude:z,arabicForm:null,ascent:z,attributeName:null,attributeType:null,azimuth:z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:z,by:null,calcMode:null,capHeight:z,className:Z,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:z,diffuseConstant:z,direction:null,display:null,dur:null,divisor:z,dominantBaseline:null,download:U,dx:null,dy:null,edgeMode:null,editable:null,elevation:z,enableBackground:null,end:null,event:null,exponent:z,externalResourcesRequired:null,fill:null,fillOpacity:z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Xt,g2:Xt,glyphName:Xt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:z,horizOriginX:z,horizOriginY:z,id:null,ideographic:z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:z,k:z,k1:z,k2:z,k3:z,k4:z,kernelMatrix:Ue,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:z,overlineThickness:z,paintOrder:null,panose1:null,path:null,pathLength:z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Z,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:z,pointsAtY:z,pointsAtZ:z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ue,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ue,rev:Ue,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ue,requiredFeatures:Ue,requiredFonts:Ue,requiredFormats:Ue,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:z,specularExponent:z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:z,strikethroughThickness:z,string:null,stroke:null,strokeDashArray:Ue,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:z,strokeOpacity:z,strokeWidth:null,style:null,surfaceScale:z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ue,tabIndex:z,tableValues:null,target:null,targetX:z,targetY:z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ue,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:z,underlineThickness:z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:z,values:null,vAlphabetic:z,vMathematical:z,vectorEffect:null,vHanging:z,vIdeographic:z,version:null,vertAdvY:z,vertOriginX:z,vertOriginY:z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),b1=/^data[-\w.:]+$/i,Pc=/-[a-z]/g,j1=/[A-Z]/g;function O1(e,n){const t=jl(n);let r=n,o=rn;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&b1.test(n)){if(n.charAt(4)==="-"){const i=n.slice(5).replace(Pc,q1);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=n.slice(4);if(!Pc.test(i)){let a=i.replace(j1,L1);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}o=qs}return new o(r,n)}function L1(e){return"-"+e.toLowerCase()}function q1(e){return e.charAt(1).toUpperCase()}const R1={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},M1=ef([rf,tf,lf,sf,I1],"html"),Rs=ef([rf,tf,lf,sf,A1],"svg");function D1(e){return e.join(" ").trim()}var uf={},_c=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,F1=/\n/g,B1=/^\s*/,U1=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,V1=/^:\s*/,H1=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,W1=/^[;\s]*/,$1=/^\s+|\s+$/g,J1=`
`,Nc="/",zc="*",ft="",Q1="comment",Y1="declaration",K1=function(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function o(x){var w=x.match(F1);w&&(t+=w.length);var C=x.lastIndexOf(J1);r=~C?x.length-C:r+x.length}function i(){var x={line:t,column:r};return function(w){return w.position=new a(x),u(),w}}function a(x){this.start=x,this.end={line:t,column:r},this.source=n.source}a.prototype.content=e;function l(x){var w=new Error(n.source+":"+t+":"+r+": "+x);if(w.reason=x,w.filename=n.source,w.line=t,w.column=r,w.source=e,!n.silent)throw w}function s(x){var w=x.exec(e);if(w){var C=w[0];return o(C),e=e.slice(C.length),w}}function u(){s(B1)}function c(x){var w;for(x=x||[];w=d();)w!==!1&&x.push(w);return x}function d(){var x=i();if(!(Nc!=e.charAt(0)||zc!=e.charAt(1))){for(var w=2;ft!=e.charAt(w)&&(zc!=e.charAt(w)||Nc!=e.charAt(w+1));)++w;if(w+=2,ft===e.charAt(w-1))return l("End of comment missing");var C=e.slice(2,w-2);return r+=2,o(C),e=e.slice(w),r+=2,x({type:Q1,comment:C})}}function m(){var x=i(),w=s(U1);if(w){if(d(),!s(V1))return l("property missing ':'");var C=s(H1),h=x({type:Y1,property:Tc(w[0].replace(_c,ft)),value:C?Tc(C[0].replace(_c,ft)):ft});return s(W1),h}}function p(){var x=[];c(x);for(var w;w=m();)w!==!1&&(x.push(w),c(x));return x}return u(),p()};function Tc(e){return e?e.replace($1,ft):ft}var G1=nu&&nu.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(uf,"__esModule",{value:!0});var Ic=uf.default=Z1,X1=G1(K1);function Z1(e,n){var t=null;if(!e||typeof e!="string")return t;var r=(0,X1.default)(e),o=typeof n=="function";return r.forEach(function(i){if(i.type==="declaration"){var a=i.property,l=i.value;o?n(a,l,i):l&&(t=t||{},t[a]=l)}}),t}const e0=Ic.default||Ic,cf=df("end"),Ms=df("start");function df(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function n0(e){const n=Ms(e),t=cf(e);if(n&&t)return{start:n,end:t}}function Fr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ac(e.position):"start"in e||"end"in e?Ac(e):"line"in e||"column"in e?Ll(e):""}function Ll(e){return bc(e&&e.line)+":"+bc(e&&e.column)}function Ac(e){return Ll(e&&e.start)+"-"+Ll(e&&e.end)}function bc(e){return e&&typeof e=="number"?e:1}class Te extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let o="",i={},a=!1;if(t&&("line"in t&&"column"in t?i={place:t}:"start"in t&&"end"in t?i={place:t}:"type"in t?i={ancestors:[t],place:t.position}:i={...t}),typeof n=="string"?o=n:!i.cause&&n&&(a=!0,o=n.message,i.cause=n),!i.ruleId&&!i.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?i.ruleId=r:(i.source=r.slice(0,s),i.ruleId=r.slice(s+1))}if(!i.place&&i.ancestors&&i.ancestors){const s=i.ancestors[i.ancestors.length-1];s&&(i.place=s.position)}const l=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=l?l.line:void 0,this.name=Fr(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack=="string"?i.cause.stack:"",this.actual,this.expected,this.note,this.url}}Te.prototype.file="";Te.prototype.name="";Te.prototype.reason="";Te.prototype.message="";Te.prototype.stack="";Te.prototype.column=void 0;Te.prototype.line=void 0;Te.prototype.ancestors=void 0;Te.prototype.cause=void 0;Te.prototype.fatal=void 0;Te.prototype.place=void 0;Te.prototype.ruleId=void 0;Te.prototype.source=void 0;const Ds={}.hasOwnProperty,t0=new Map,r0=/[A-Z]/g,o0=/-([a-z])/g,i0=new Set(["table","tbody","thead","tfoot","tr"]),a0=new Set(["td","th"]),pf="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function l0(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=h0(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=f0(t,n.jsx,n.jsxs)}const o={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Rs:M1,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},i=mf(o,e,void 0);return i&&typeof i!="string"?i:o.create(e,o.Fragment,{children:i||void 0},void 0)}function mf(e,n,t){if(n.type==="element")return s0(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return u0(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return d0(e,n,t);if(n.type==="mdxjsEsm")return c0(e,n);if(n.type==="root")return p0(e,n,t);if(n.type==="text")return m0(e,n)}function s0(e,n,t){const r=e.schema;let o=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(o=Rs,e.schema=o),e.ancestors.push(n);const i=hf(e,n.tagName,!1),a=g0(e,n);let l=Bs(e,n);return i0.has(n.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!N1(s):!0})),ff(e,a,i,n),Fs(a,l),e.ancestors.pop(),e.schema=r,e.create(n,i,a,t)}function u0(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}lo(e,n.position)}function c0(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);lo(e,n.position)}function d0(e,n,t){const r=e.schema;let o=r;n.name==="svg"&&r.space==="html"&&(o=Rs,e.schema=o),e.ancestors.push(n);const i=n.name===null?e.Fragment:hf(e,n.name,!0),a=v0(e,n),l=Bs(e,n);return ff(e,a,i,n),Fs(a,l),e.ancestors.pop(),e.schema=r,e.create(n,i,a,t)}function p0(e,n,t){const r={};return Fs(r,Bs(e,n)),e.create(n,e.Fragment,r,t)}function m0(e,n){return n.value}function ff(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function Fs(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function f0(e,n,t){return r;function r(o,i,a,l){const u=Array.isArray(a.children)?t:n;return l?u(i,a,l):u(i,a)}}function h0(e,n){return t;function t(r,o,i,a){const l=Array.isArray(i.children),s=Ms(r);return n(o,i,a,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function g0(e,n){const t={};let r,o;for(o in n.properties)if(o!=="children"&&Ds.call(n.properties,o)){const i=y0(e,o,n.properties[o]);if(i){const[a,l]=i;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&a0.has(n.tagName)?r=l:t[a]=l}}if(r){const i=t.style||(t.style={});i[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function v0(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const i=r.data.estree.body[0];i.type;const a=i.expression;a.type;const l=a.properties[0];l.type,Object.assign(t,e.evaluater.evaluateExpression(l.argument))}else lo(e,n.position);else{const o=r.name;let i;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,i=e.evaluater.evaluateExpression(l.expression)}else lo(e,n.position);else i=r.value===null?!0:r.value;t[o]=i}return t}function Bs(e,n){const t=[];let r=-1;const o=e.passKeys?new Map:t0;for(;++r<n.children.length;){const i=n.children[r];let a;if(e.passKeys){const s=i.type==="element"?i.tagName:i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement"?i.name:void 0;if(s){const u=o.get(s)||0;a=s+"-"+u,o.set(s,u+1)}}const l=mf(e,i,a);l!==void 0&&t.push(l)}return t}function y0(e,n,t){const r=O1(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?S1(t):D1(t)),r.property==="style"){let o=typeof t=="object"?t:x0(e,String(t));return e.stylePropertyNameCase==="css"&&(o=w0(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&r.space?R1[r.property]||r.property:r.attribute,t]}}function x0(e,n){const t={};try{e0(n,r)}catch(o){if(!e.ignoreInvalidStyle){const i=o,a=new Te("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw a.file=e.filePath||void 0,a.url=pf+"#cannot-parse-style-attribute",a}}return t;function r(o,i){let a=o;a.slice(0,2)!=="--"&&(a.slice(0,4)==="-ms-"&&(a="ms-"+a.slice(4)),a=a.replace(o0,S0)),t[a]=i}}function hf(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const o=n.split(".");let i=-1,a;for(;++i<o.length;){const l=Sc(o[i])?{type:"Identifier",name:o[i]}:{type:"Literal",value:o[i]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(i&&l.type==="Literal"),optional:!1}:l}r=a}else r=Sc(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const o=r.value;return Ds.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(r);lo(e)}function lo(e,n){const t=new Te("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=pf+"#cannot-handle-mdx-estrees-without-createevaluater",t}function w0(e){const n={};let t;for(t in e)Ds.call(e,t)&&(n[k0(t)]=e[t]);return n}function k0(e){let n=e.replace(r0,C0);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function S0(e,n){return n.toUpperCase()}function C0(e){return"-"+e.toLowerCase()}const Na={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},E0={};function P0(e,n){const t=E0,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,o=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return gf(e,r,o)}function gf(e,n,t){if(_0(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return jc(e.children,n,t)}return Array.isArray(e)?jc(e,n,t):""}function jc(e,n,t){const r=[];let o=-1;for(;++o<e.length;)r[o]=gf(e[o],n,t);return r.join("")}function _0(e){return!!(e&&typeof e=="object")}const Oc=document.createElement("i");function Us(e){const n="&"+e+";";Oc.innerHTML=n;const t=Oc.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function Sn(e,n,t,r){const o=e.length;let i=0,a;if(n<0?n=-n>o?0:o+n:n=n>o?o:n,t=t>0?t:0,r.length<1e4)a=Array.from(r),a.unshift(n,t),e.splice(...a);else for(t&&e.splice(n,t);i<r.length;)a=r.slice(i,i+1e4),a.unshift(n,0),e.splice(...a),i+=1e4,n+=1e4}function Xe(e,n){return e.length>0?(Sn(e,e.length,0,n),e):n}const Lc={}.hasOwnProperty;function N0(e){const n={};let t=-1;for(;++t<e.length;)z0(n,e[t]);return n}function z0(e,n){let t;for(t in n){const o=(Lc.call(e,t)?e[t]:void 0)||(e[t]={}),i=n[t];let a;if(i)for(a in i){Lc.call(o,a)||(o[a]=[]);const l=i[a];T0(o[a],Array.isArray(l)?l:l?[l]:[])}}}function T0(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);Sn(e,0,0,r)}function vf(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function Zt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const xn=lt(/[A-Za-z]/),We=lt(/[\dA-Za-z]/),I0=lt(/[#-'*+\--9=?A-Z^-~]/);function ql(e){return e!==null&&(e<32||e===127)}const Rl=lt(/\d/),A0=lt(/[\dA-Fa-f]/),b0=lt(/[!-/:-@[-`{-~]/);function F(e){return e!==null&&e<-2}function Fe(e){return e!==null&&(e<0||e===32)}function Q(e){return e===-2||e===-1||e===32}const j0=lt(new RegExp("\\p{P}|\\p{S}","u")),O0=lt(/\s/);function lt(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function fr(e){const n=[];let t=-1,r=0,o=0;for(;++t<e.length;){const i=e.charCodeAt(t);let a="";if(i===37&&We(e.charCodeAt(t+1))&&We(e.charCodeAt(t+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(a=String.fromCharCode(i));else if(i>55295&&i<57344){const l=e.charCodeAt(t+1);i<56320&&l>56319&&l<57344?(a=String.fromCharCode(i,l),o=1):a="�"}else a=String.fromCharCode(i);a&&(n.push(e.slice(r,t),encodeURIComponent(a)),r=t+o+1,a=""),o&&(t+=o,o=0)}return n.join("")+e.slice(r)}function ne(e,n,t,r){const o=r?r-1:Number.POSITIVE_INFINITY;let i=0;return a;function a(s){return Q(s)?(e.enter(t),l(s)):n(s)}function l(s){return Q(s)&&i++<o?(e.consume(s),l):(e.exit(t),n(s))}}const L0={tokenize:q0};function q0(e){const n=e.attempt(this.parser.constructs.contentInitial,r,o);let t;return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),ne(e,n,"linePrefix")}function o(l){return e.enter("paragraph"),i(l)}function i(l){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return F(l)?(e.consume(l),e.exit("chunkText"),i):(e.consume(l),a)}}const R0={tokenize:M0},qc={tokenize:D0};function M0(e){const n=this,t=[];let r=0,o,i,a;return l;function l(g){if(r<t.length){const S=t[r];return n.containerState=S[1],e.attempt(S[0].continuation,s,u)(g)}return u(g)}function s(g){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,o&&f();const S=n.events.length;let P=S,k;for(;P--;)if(n.events[P][0]==="exit"&&n.events[P][1].type==="chunkFlow"){k=n.events[P][1].end;break}h(r);let N=S;for(;N<n.events.length;)n.events[N][1].end={...k},N++;return Sn(n.events,P+1,0,n.events.slice(S)),n.events.length=N,u(g)}return l(g)}function u(g){if(r===t.length){if(!o)return m(g);if(o.currentConstruct&&o.currentConstruct.concrete)return x(g);n.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(qc,c,d)(g)}function c(g){return o&&f(),h(r),m(g)}function d(g){return n.parser.lazy[n.now().line]=r!==t.length,a=n.now().offset,x(g)}function m(g){return n.containerState={},e.attempt(qc,p,x)(g)}function p(g){return r++,t.push([n.currentConstruct,n.containerState]),m(g)}function x(g){if(g===null){o&&f(),h(0),e.consume(g);return}return o=o||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:i}),w(g)}function w(g){if(g===null){C(e.exit("chunkFlow"),!0),h(0),e.consume(g);return}return F(g)?(e.consume(g),C(e.exit("chunkFlow")),r=0,n.interrupt=void 0,l):(e.consume(g),w)}function C(g,S){const P=n.sliceStream(g);if(S&&P.push(null),g.previous=i,i&&(i.next=g),i=g,o.defineSkip(g.start),o.write(P),n.parser.lazy[g.start.line]){let k=o.events.length;for(;k--;)if(o.events[k][1].start.offset<a&&(!o.events[k][1].end||o.events[k][1].end.offset>a))return;const N=n.events.length;let A=N,M,L;for(;A--;)if(n.events[A][0]==="exit"&&n.events[A][1].type==="chunkFlow"){if(M){L=n.events[A][1].end;break}M=!0}for(h(r),k=N;k<n.events.length;)n.events[k][1].end={...L},k++;Sn(n.events,A+1,0,n.events.slice(N)),n.events.length=k}}function h(g){let S=t.length;for(;S-- >g;){const P=t[S];n.containerState=P[1],P[0].exit.call(n,e)}t.length=g}function f(){o.write([null]),i=void 0,o=void 0,n.containerState._closeFlow=void 0}}function D0(e,n,t){return ne(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Rc(e){if(e===null||Fe(e)||O0(e))return 1;if(j0(e))return 2}function Vs(e,n,t){const r=[];let o=-1;for(;++o<e.length;){const i=e[o].resolveAll;i&&!r.includes(i)&&(n=i(n,t),r.push(i))}return n}const Ml={name:"attention",resolveAll:F0,tokenize:B0};function F0(e,n){let t=-1,r,o,i,a,l,s,u,c;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const d={...e[r][1].end},m={...e[t][1].start};Mc(d,-s),Mc(m,s),a={type:s>1?"strongSequence":"emphasisSequence",start:d,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:m},i={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},o={type:s>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[t][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Xe(u,[["enter",e[r][1],n],["exit",e[r][1],n]])),u=Xe(u,[["enter",o,n],["enter",a,n],["exit",a,n],["enter",i,n]]),u=Xe(u,Vs(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),u=Xe(u,[["exit",i,n],["enter",l,n],["exit",l,n],["exit",o,n]]),e[t][1].end.offset-e[t][1].start.offset?(c=2,u=Xe(u,[["enter",e[t][1],n],["exit",e[t][1],n]])):c=0,Sn(e,r-1,t-r+3,u),t=r+u.length-c-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function B0(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,o=Rc(r);let i;return a;function a(s){return i=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===i)return e.consume(s),l;const u=e.exit("attentionSequence"),c=Rc(s),d=!c||c===2&&o||t.includes(s),m=!o||o===2&&c||t.includes(r);return u._open=!!(i===42?d:d&&(o||!m)),u._close=!!(i===42?m:m&&(c||!d)),n(s)}}function Mc(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const U0={name:"autolink",tokenize:V0};function V0(e,n,t){let r=0;return o;function o(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(p){return xn(p)?(e.consume(p),a):p===64?t(p):u(p)}function a(p){return p===43||p===45||p===46||We(p)?(r=1,l(p)):u(p)}function l(p){return p===58?(e.consume(p),r=0,s):(p===43||p===45||p===46||We(p))&&r++<32?(e.consume(p),l):(r=0,u(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||ql(p)?t(p):(e.consume(p),s)}function u(p){return p===64?(e.consume(p),c):I0(p)?(e.consume(p),u):t(p)}function c(p){return We(p)?d(p):t(p)}function d(p){return p===46?(e.consume(p),r=0,c):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):m(p)}function m(p){if((p===45||We(p))&&r++<63){const x=p===45?m:d;return e.consume(p),x}return t(p)}}const Yi={partial:!0,tokenize:H0};function H0(e,n,t){return r;function r(i){return Q(i)?ne(e,o,"linePrefix")(i):o(i)}function o(i){return i===null||F(i)?n(i):t(i)}}const yf={continuation:{tokenize:$0},exit:J0,name:"blockQuote",tokenize:W0};function W0(e,n,t){const r=this;return o;function o(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),i}return t(a)}function i(a){return Q(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function $0(e,n,t){const r=this;return o;function o(a){return Q(a)?ne(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):i(a)}function i(a){return e.attempt(yf,n,t)(a)}}function J0(e){e.exit("blockQuote")}const xf={name:"characterEscape",tokenize:Q0};function Q0(e,n,t){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),o}function o(i){return b0(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(i)}}const wf={name:"characterReference",tokenize:Y0};function Y0(e,n,t){const r=this;let o=0,i,a;return l;function l(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),s}function s(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),i=31,a=We,c(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,a=A0,c):(e.enter("characterReferenceValue"),i=7,a=Rl,c(d))}function c(d){if(d===59&&o){const m=e.exit("characterReferenceValue");return a===We&&!Us(r.sliceSerialize(m))?t(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return a(d)&&o++<i?(e.consume(d),c):t(d)}}const Dc={partial:!0,tokenize:G0},Fc={concrete:!0,name:"codeFenced",tokenize:K0};function K0(e,n,t){const r=this,o={partial:!0,tokenize:P};let i=0,a=0,l;return s;function s(k){return u(k)}function u(k){const N=r.events[r.events.length-1];return i=N&&N[1].type==="linePrefix"?N[2].sliceSerialize(N[1],!0).length:0,l=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(k)}function c(k){return k===l?(a++,e.consume(k),c):a<3?t(k):(e.exit("codeFencedFenceSequence"),Q(k)?ne(e,d,"whitespace")(k):d(k))}function d(k){return k===null||F(k)?(e.exit("codeFencedFence"),r.interrupt?n(k):e.check(Dc,w,S)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(k))}function m(k){return k===null||F(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(k)):Q(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ne(e,p,"whitespace")(k)):k===96&&k===l?t(k):(e.consume(k),m)}function p(k){return k===null||F(k)?d(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(k))}function x(k){return k===null||F(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(k)):k===96&&k===l?t(k):(e.consume(k),x)}function w(k){return e.attempt(o,S,C)(k)}function C(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),h}function h(k){return i>0&&Q(k)?ne(e,f,"linePrefix",i+1)(k):f(k)}function f(k){return k===null||F(k)?e.check(Dc,w,S)(k):(e.enter("codeFlowValue"),g(k))}function g(k){return k===null||F(k)?(e.exit("codeFlowValue"),f(k)):(e.consume(k),g)}function S(k){return e.exit("codeFenced"),n(k)}function P(k,N,A){let M=0;return L;function L(H){return k.enter("lineEnding"),k.consume(H),k.exit("lineEnding"),q}function q(H){return k.enter("codeFencedFence"),Q(H)?ne(k,R,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):R(H)}function R(H){return H===l?(k.enter("codeFencedFenceSequence"),Y(H)):A(H)}function Y(H){return H===l?(M++,k.consume(H),Y):M>=a?(k.exit("codeFencedFenceSequence"),Q(H)?ne(k,ae,"whitespace")(H):ae(H)):A(H)}function ae(H){return H===null||F(H)?(k.exit("codeFencedFence"),N(H)):A(H)}}}function G0(e,n,t){const r=this;return o;function o(a){return a===null?t(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i)}function i(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}const za={name:"codeIndented",tokenize:Z0},X0={partial:!0,tokenize:ex};function Z0(e,n,t){const r=this;return o;function o(u){return e.enter("codeIndented"),ne(e,i,"linePrefix",5)(u)}function i(u){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?a(u):t(u)}function a(u){return u===null?s(u):F(u)?e.attempt(X0,a,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||F(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),n(u)}}function ex(e,n,t){const r=this;return o;function o(a){return r.parser.lazy[r.now().line]?t(a):F(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):ne(e,i,"linePrefix",5)(a)}function i(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(a):F(a)?o(a):t(a)}}const nx={name:"codeText",previous:rx,resolve:tx,tokenize:ox};function tx(e){let n=e.length-4,t=3,r,o;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)o===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(o=r):(r===n||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),n-=r-o-2,r=o+2),o=void 0);return e}function rx(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ox(e,n,t){let r=0,o,i;return a;function a(d){return e.enter("codeText"),e.enter("codeTextSequence"),l(d)}function l(d){return d===96?(e.consume(d),r++,l):(e.exit("codeTextSequence"),s(d))}function s(d){return d===null?t(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),s):d===96?(i=e.enter("codeTextSequence"),o=0,c(d)):F(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||F(d)?(e.exit("codeTextData"),s(d)):(e.consume(d),u)}function c(d){return d===96?(e.consume(d),o++,c):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(d)):(i.type="codeTextData",u(d))}}class ix{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const o=t||0;this.setCursor(Math.trunc(n));const i=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return r&&Pr(this.left,r),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Pr(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Pr(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Pr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Pr(this.left,t.reverse())}}}function Pr(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function kf(e){const n={};let t=-1,r,o,i,a,l,s,u;const c=new ix(e);for(;++t<c.length;){for(;t in n;)t=n[t];if(r=c.get(t),t&&r[1].type==="chunkFlow"&&c.get(t-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,i=0,i<s.length&&s[i][1].type==="lineEndingBlank"&&(i+=2),i<s.length&&s[i][1].type==="content"))for(;++i<s.length&&s[i][1].type!=="content";)s[i][1].type==="chunkText"&&(s[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,ax(c,t)),t=n[t],u=!0);else if(r[1]._container){for(i=t,o=void 0;i--&&(a=c.get(i),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank");)a[0]==="enter"&&(o&&(c.get(o)[1].type="lineEndingBlank"),a[1].type="lineEnding",o=i);o&&(r[1].end={...c.get(o)[1].start},l=c.slice(o,t),l.unshift(r),c.splice(o,t-o+1,l))}}return Sn(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function ax(e,n){const t=e.get(n)[1],r=e.get(n)[2];let o=n-1;const i=[],a=t._tokenizer||r.parser[t.contentType](t.start),l=a.events,s=[],u={};let c,d,m=-1,p=t,x=0,w=0;const C=[w];for(;p;){for(;e.get(++o)[1]!==p;);i.push(o),p._tokenizer||(c=r.sliceStream(p),p.next||c.push(null),d&&a.defineSkip(p.start),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(c),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=t;++m<l.length;)l[m][0]==="exit"&&l[m-1][0]==="enter"&&l[m][1].type===l[m-1][1].type&&l[m][1].start.line!==l[m][1].end.line&&(w=m+1,C.push(w),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(a.events=[],p?(p._tokenizer=void 0,p.previous=void 0):C.pop(),m=C.length;m--;){const h=l.slice(C[m],C[m+1]),f=i.pop();s.push([f,f+h.length-1]),e.splice(f,2,h)}for(s.reverse(),m=-1;++m<s.length;)u[x+s[m][0]]=x+s[m][1],x+=s[m][1]-s[m][0]-1;return u}const lx={resolve:ux,tokenize:cx},sx={partial:!0,tokenize:dx};function ux(e){return kf(e),e}function cx(e,n){let t;return r;function r(l){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),o(l)}function o(l){return l===null?i(l):F(l)?e.check(sx,a,i)(l):(e.consume(l),o)}function i(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function a(l){return e.consume(l),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,o}}function dx(e,n,t){const r=this;return o;function o(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ne(e,i,"linePrefix")}function i(a){if(a===null||F(a))return t(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(a):e.interrupt(r.parser.constructs.flow,t,n)(a)}}function Sf(e,n,t,r,o,i,a,l,s){const u=s||Number.POSITIVE_INFINITY;let c=0;return d;function d(h){return h===60?(e.enter(r),e.enter(o),e.enter(i),e.consume(h),e.exit(i),m):h===null||h===32||h===41||ql(h)?t(h):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),w(h))}function m(h){return h===62?(e.enter(i),e.consume(h),e.exit(i),e.exit(o),e.exit(r),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===62?(e.exit("chunkString"),e.exit(l),m(h)):h===null||h===60||F(h)?t(h):(e.consume(h),h===92?x:p)}function x(h){return h===60||h===62||h===92?(e.consume(h),p):p(h)}function w(h){return!c&&(h===null||h===41||Fe(h))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),n(h)):c<u&&h===40?(e.consume(h),c++,w):h===41?(e.consume(h),c--,w):h===null||h===32||h===40||ql(h)?t(h):(e.consume(h),h===92?C:w)}function C(h){return h===40||h===41||h===92?(e.consume(h),w):w(h)}}function Cf(e,n,t,r,o,i){const a=this;let l=0,s;return u;function u(p){return e.enter(r),e.enter(o),e.consume(p),e.exit(o),e.enter(i),c}function c(p){return l>999||p===null||p===91||p===93&&!s||p===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?t(p):p===93?(e.exit(i),e.enter(o),e.consume(p),e.exit(o),e.exit(r),n):F(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||F(p)||l++>999?(e.exit("chunkString"),c(p)):(e.consume(p),s||(s=!Q(p)),p===92?m:d)}function m(p){return p===91||p===92||p===93?(e.consume(p),l++,d):d(p)}}function Ef(e,n,t,r,o,i){let a;return l;function l(m){return m===34||m===39||m===40?(e.enter(r),e.enter(o),e.consume(m),e.exit(o),a=m===40?41:m,s):t(m)}function s(m){return m===a?(e.enter(o),e.consume(m),e.exit(o),e.exit(r),n):(e.enter(i),u(m))}function u(m){return m===a?(e.exit(i),s(a)):m===null?t(m):F(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),ne(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(m))}function c(m){return m===a||m===null||F(m)?(e.exit("chunkString"),u(m)):(e.consume(m),m===92?d:c)}function d(m){return m===a||m===92?(e.consume(m),c):c(m)}}function Br(e,n){let t;return r;function r(o){return F(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t=!0,r):Q(o)?ne(e,r,t?"linePrefix":"lineSuffix")(o):n(o)}}const px={name:"definition",tokenize:fx},mx={partial:!0,tokenize:hx};function fx(e,n,t){const r=this;let o;return i;function i(p){return e.enter("definition"),a(p)}function a(p){return Cf.call(r,e,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return o=Zt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):t(p)}function s(p){return Fe(p)?Br(e,u)(p):u(p)}function u(p){return Sf(e,c,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function c(p){return e.attempt(mx,d,d)(p)}function d(p){return Q(p)?ne(e,m,"whitespace")(p):m(p)}function m(p){return p===null||F(p)?(e.exit("definition"),r.parser.defined.push(o),n(p)):t(p)}}function hx(e,n,t){return r;function r(l){return Fe(l)?Br(e,o)(l):t(l)}function o(l){return Ef(e,i,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function i(l){return Q(l)?ne(e,a,"whitespace")(l):a(l)}function a(l){return l===null||F(l)?n(l):t(l)}}const gx={name:"hardBreakEscape",tokenize:vx};function vx(e,n,t){return r;function r(i){return e.enter("hardBreakEscape"),e.consume(i),o}function o(i){return F(i)?(e.exit("hardBreakEscape"),n(i)):t(i)}}const yx={name:"headingAtx",resolve:xx,tokenize:wx};function xx(e,n){let t=e.length-2,r=3,o,i;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},i={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},Sn(e,r,t-r+1,[["enter",o,n],["enter",i,n],["exit",i,n],["exit",o,n]])),e}function wx(e,n,t){let r=0;return o;function o(c){return e.enter("atxHeading"),i(c)}function i(c){return e.enter("atxHeadingSequence"),a(c)}function a(c){return c===35&&r++<6?(e.consume(c),a):c===null||Fe(c)?(e.exit("atxHeadingSequence"),l(c)):t(c)}function l(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||F(c)?(e.exit("atxHeading"),n(c)):Q(c)?ne(e,l,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),l(c))}function u(c){return c===null||c===35||Fe(c)?(e.exit("atxHeadingText"),l(c)):(e.consume(c),u)}}const kx=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Bc=["pre","script","style","textarea"],Sx={concrete:!0,name:"htmlFlow",resolveTo:Px,tokenize:_x},Cx={partial:!0,tokenize:zx},Ex={partial:!0,tokenize:Nx};function Px(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function _x(e,n,t){const r=this;let o,i,a,l,s;return u;function u(y){return c(y)}function c(y){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(y),d}function d(y){return y===33?(e.consume(y),m):y===47?(e.consume(y),i=!0,w):y===63?(e.consume(y),o=3,r.interrupt?n:v):xn(y)?(e.consume(y),a=String.fromCharCode(y),C):t(y)}function m(y){return y===45?(e.consume(y),o=2,p):y===91?(e.consume(y),o=5,l=0,x):xn(y)?(e.consume(y),o=4,r.interrupt?n:v):t(y)}function p(y){return y===45?(e.consume(y),r.interrupt?n:v):t(y)}function x(y){const ve="CDATA[";return y===ve.charCodeAt(l++)?(e.consume(y),l===ve.length?r.interrupt?n:R:x):t(y)}function w(y){return xn(y)?(e.consume(y),a=String.fromCharCode(y),C):t(y)}function C(y){if(y===null||y===47||y===62||Fe(y)){const ve=y===47,on=a.toLowerCase();return!ve&&!i&&Bc.includes(on)?(o=1,r.interrupt?n(y):R(y)):kx.includes(a.toLowerCase())?(o=6,ve?(e.consume(y),h):r.interrupt?n(y):R(y)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(y):i?f(y):g(y))}return y===45||We(y)?(e.consume(y),a+=String.fromCharCode(y),C):t(y)}function h(y){return y===62?(e.consume(y),r.interrupt?n:R):t(y)}function f(y){return Q(y)?(e.consume(y),f):L(y)}function g(y){return y===47?(e.consume(y),L):y===58||y===95||xn(y)?(e.consume(y),S):Q(y)?(e.consume(y),g):L(y)}function S(y){return y===45||y===46||y===58||y===95||We(y)?(e.consume(y),S):P(y)}function P(y){return y===61?(e.consume(y),k):Q(y)?(e.consume(y),P):g(y)}function k(y){return y===null||y===60||y===61||y===62||y===96?t(y):y===34||y===39?(e.consume(y),s=y,N):Q(y)?(e.consume(y),k):A(y)}function N(y){return y===s?(e.consume(y),s=null,M):y===null||F(y)?t(y):(e.consume(y),N)}function A(y){return y===null||y===34||y===39||y===47||y===60||y===61||y===62||y===96||Fe(y)?P(y):(e.consume(y),A)}function M(y){return y===47||y===62||Q(y)?g(y):t(y)}function L(y){return y===62?(e.consume(y),q):t(y)}function q(y){return y===null||F(y)?R(y):Q(y)?(e.consume(y),q):t(y)}function R(y){return y===45&&o===2?(e.consume(y),fe):y===60&&o===1?(e.consume(y),pe):y===62&&o===4?(e.consume(y),$):y===63&&o===3?(e.consume(y),v):y===93&&o===5?(e.consume(y),D):F(y)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(Cx,G,Y)(y)):y===null||F(y)?(e.exit("htmlFlowData"),Y(y)):(e.consume(y),R)}function Y(y){return e.check(Ex,ae,G)(y)}function ae(y){return e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),H}function H(y){return y===null||F(y)?Y(y):(e.enter("htmlFlowData"),R(y))}function fe(y){return y===45?(e.consume(y),v):R(y)}function pe(y){return y===47?(e.consume(y),a="",j):R(y)}function j(y){if(y===62){const ve=a.toLowerCase();return Bc.includes(ve)?(e.consume(y),$):R(y)}return xn(y)&&a.length<8?(e.consume(y),a+=String.fromCharCode(y),j):R(y)}function D(y){return y===93?(e.consume(y),v):R(y)}function v(y){return y===62?(e.consume(y),$):y===45&&o===2?(e.consume(y),v):R(y)}function $(y){return y===null||F(y)?(e.exit("htmlFlowData"),G(y)):(e.consume(y),$)}function G(y){return e.exit("htmlFlow"),n(y)}}function Nx(e,n,t){const r=this;return o;function o(a){return F(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):t(a)}function i(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}function zx(e,n,t){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(Yi,n,t)}}const Tx={name:"htmlText",tokenize:Ix};function Ix(e,n,t){const r=this;let o,i,a;return l;function l(v){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(v),s}function s(v){return v===33?(e.consume(v),u):v===47?(e.consume(v),P):v===63?(e.consume(v),g):xn(v)?(e.consume(v),A):t(v)}function u(v){return v===45?(e.consume(v),c):v===91?(e.consume(v),i=0,x):xn(v)?(e.consume(v),f):t(v)}function c(v){return v===45?(e.consume(v),p):t(v)}function d(v){return v===null?t(v):v===45?(e.consume(v),m):F(v)?(a=d,pe(v)):(e.consume(v),d)}function m(v){return v===45?(e.consume(v),p):d(v)}function p(v){return v===62?fe(v):v===45?m(v):d(v)}function x(v){const $="CDATA[";return v===$.charCodeAt(i++)?(e.consume(v),i===$.length?w:x):t(v)}function w(v){return v===null?t(v):v===93?(e.consume(v),C):F(v)?(a=w,pe(v)):(e.consume(v),w)}function C(v){return v===93?(e.consume(v),h):w(v)}function h(v){return v===62?fe(v):v===93?(e.consume(v),h):w(v)}function f(v){return v===null||v===62?fe(v):F(v)?(a=f,pe(v)):(e.consume(v),f)}function g(v){return v===null?t(v):v===63?(e.consume(v),S):F(v)?(a=g,pe(v)):(e.consume(v),g)}function S(v){return v===62?fe(v):g(v)}function P(v){return xn(v)?(e.consume(v),k):t(v)}function k(v){return v===45||We(v)?(e.consume(v),k):N(v)}function N(v){return F(v)?(a=N,pe(v)):Q(v)?(e.consume(v),N):fe(v)}function A(v){return v===45||We(v)?(e.consume(v),A):v===47||v===62||Fe(v)?M(v):t(v)}function M(v){return v===47?(e.consume(v),fe):v===58||v===95||xn(v)?(e.consume(v),L):F(v)?(a=M,pe(v)):Q(v)?(e.consume(v),M):fe(v)}function L(v){return v===45||v===46||v===58||v===95||We(v)?(e.consume(v),L):q(v)}function q(v){return v===61?(e.consume(v),R):F(v)?(a=q,pe(v)):Q(v)?(e.consume(v),q):M(v)}function R(v){return v===null||v===60||v===61||v===62||v===96?t(v):v===34||v===39?(e.consume(v),o=v,Y):F(v)?(a=R,pe(v)):Q(v)?(e.consume(v),R):(e.consume(v),ae)}function Y(v){return v===o?(e.consume(v),o=void 0,H):v===null?t(v):F(v)?(a=Y,pe(v)):(e.consume(v),Y)}function ae(v){return v===null||v===34||v===39||v===60||v===61||v===96?t(v):v===47||v===62||Fe(v)?M(v):(e.consume(v),ae)}function H(v){return v===47||v===62||Fe(v)?M(v):t(v)}function fe(v){return v===62?(e.consume(v),e.exit("htmlTextData"),e.exit("htmlText"),n):t(v)}function pe(v){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),j}function j(v){return Q(v)?ne(e,D,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):D(v)}function D(v){return e.enter("htmlTextData"),a(v)}}const Hs={name:"labelEnd",resolveAll:Ox,resolveTo:Lx,tokenize:qx},Ax={tokenize:Rx},bx={tokenize:Mx},jx={tokenize:Dx};function Ox(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const o=r.type==="labelImage"?4:2;r.type="data",n+=o}}return e.length!==t.length&&Sn(e,0,e.length,t),e}function Lx(e,n){let t=e.length,r=0,o,i,a,l;for(;t--;)if(o=e[t][1],i){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[t][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(a){if(e[t][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(i=t,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(a=t);const s={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[i][1].start},end:{...e[a][1].end}},c={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",s,n],["enter",u,n]],l=Xe(l,e.slice(i+1,i+r+3)),l=Xe(l,[["enter",c,n]]),l=Xe(l,Vs(n.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),n)),l=Xe(l,[["exit",c,n],e[a-2],e[a-1],["exit",u,n]]),l=Xe(l,e.slice(a+1)),l=Xe(l,[["exit",s,n]]),Sn(e,i,e.length,l),e}function qx(e,n,t){const r=this;let o=r.events.length,i,a;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){i=r.events[o][1];break}return l;function l(m){return i?i._inactive?d(m):(a=r.parser.defined.includes(Zt(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),s):t(m)}function s(m){return m===40?e.attempt(Ax,c,a?c:d)(m):m===91?e.attempt(bx,c,a?u:d)(m):a?c(m):d(m)}function u(m){return e.attempt(jx,c,d)(m)}function c(m){return n(m)}function d(m){return i._balanced=!0,t(m)}}function Rx(e,n,t){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),o}function o(d){return Fe(d)?Br(e,i)(d):i(d)}function i(d){return d===41?c(d):Sf(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function a(d){return Fe(d)?Br(e,s)(d):c(d)}function l(d){return t(d)}function s(d){return d===34||d===39||d===40?Ef(e,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):c(d)}function u(d){return Fe(d)?Br(e,c)(d):c(d)}function c(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),n):t(d)}}function Mx(e,n,t){const r=this;return o;function o(l){return Cf.call(r,e,i,a,"reference","referenceMarker","referenceString")(l)}function i(l){return r.parser.defined.includes(Zt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(l):t(l)}function a(l){return t(l)}}function Dx(e,n,t){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),o}function o(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),n):t(i)}}const Fx={name:"labelStartImage",resolveAll:Hs.resolveAll,tokenize:Bx};function Bx(e,n,t){const r=this;return o;function o(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),i}function i(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):t(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):n(l)}}const Ux={name:"labelStartLink",resolveAll:Hs.resolveAll,tokenize:Vx};function Vx(e,n,t){const r=this;return o;function o(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),i}function i(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const Ta={name:"lineEnding",tokenize:Hx};function Hx(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ne(e,n,"linePrefix")}}const Go={name:"thematicBreak",tokenize:Wx};function Wx(e,n,t){let r=0,o;return i;function i(u){return e.enter("thematicBreak"),a(u)}function a(u){return o=u,l(u)}function l(u){return u===o?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||F(u))?(e.exit("thematicBreak"),n(u)):t(u)}function s(u){return u===o?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),Q(u)?ne(e,l,"whitespace")(u):l(u))}}const Oe={continuation:{tokenize:Yx},exit:Gx,name:"list",tokenize:Qx},$x={partial:!0,tokenize:Xx},Jx={partial:!0,tokenize:Kx};function Qx(e,n,t){const r=this,o=r.events[r.events.length-1];let i=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,a=0;return l;function l(p){const x=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Rl(p)){if(r.containerState.type||(r.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Go,t,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return t(p)}function s(p){return Rl(p)&&++a<10?(e.consume(p),s):(!r.interrupt||a<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):t(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Yi,r.interrupt?t:c,e.attempt($x,m,d))}function c(p){return r.containerState.initialBlankLine=!0,i++,m(p)}function d(p){return Q(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),m):t(p)}function m(p){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function Yx(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Yi,o,i);function o(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ne(e,n,"listItemIndent",r.containerState.size+1)(l)}function i(l){return r.containerState.furtherBlankLines||!Q(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Jx,n,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,ne(e,e.attempt(Oe,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Kx(e,n,t){const r=this;return ne(e,o,"listItemIndent",r.containerState.size+1);function o(i){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?n(i):t(i)}}function Gx(e){e.exit(this.containerState.type)}function Xx(e,n,t){const r=this;return ne(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(i){const a=r.events[r.events.length-1];return!Q(i)&&a&&a[1].type==="listItemPrefixWhitespace"?n(i):t(i)}}const Uc={name:"setextUnderline",resolveTo:Zx,tokenize:ew};function Zx(e,n){let t=e.length,r,o,i;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(o=t)}else e[t][1].type==="content"&&e.splice(t,1),!i&&e[t][1].type==="definition"&&(i=t);const a={type:"setextHeading",start:{...e[o][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",i?(e.splice(o,0,["enter",a,n]),e.splice(i+1,0,["exit",e[r][1],n]),e[r][1].end={...e[i][1].end}):e[r][1]=a,e.push(["exit",a,n]),e}function ew(e,n,t){const r=this;let o;return i;function i(u){let c=r.events.length,d;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){d=r.events[c][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),o=u,a(u)):t(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===o?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Q(u)?ne(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||F(u)?(e.exit("setextHeadingLine"),n(u)):t(u)}}const nw={tokenize:tw};function tw(e){const n=this,t=e.attempt(Yi,r,e.attempt(this.parser.constructs.flowInitial,o,ne(e,e.attempt(this.parser.constructs.flow,o,e.attempt(lx,o)),"linePrefix")));return t;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function o(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const rw={resolveAll:_f()},ow=Pf("string"),iw=Pf("text");function Pf(e){return{resolveAll:_f(e==="text"?aw:void 0),tokenize:n};function n(t){const r=this,o=this.parser.constructs[e],i=t.attempt(o,a,l);return a;function a(c){return u(c)?i(c):l(c)}function l(c){if(c===null){t.consume(c);return}return t.enter("data"),t.consume(c),s}function s(c){return u(c)?(t.exit("data"),i(c)):(t.consume(c),s)}function u(c){if(c===null)return!0;const d=o[c];let m=-1;if(d)for(;++m<d.length;){const p=d[m];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function _f(e){return n;function n(t,r){let o=-1,i;for(;++o<=t.length;)i===void 0?t[o]&&t[o][1].type==="data"&&(i=o,o++):(!t[o]||t[o][1].type!=="data")&&(o!==i+2&&(t[i][1].end=t[o-1][1].end,t.splice(i+2,o-i-2),o=i+2),i=void 0);return e?e(t,r):t}}function aw(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],o=n.sliceStream(r);let i=o.length,a=-1,l=0,s;for(;i--;){const u=o[i];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)s=!0,l++;else if(u!==-1){i++;break}}if(l){const u={type:t===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:i?a:r.start._bufferIndex+a,_index:r.start._index+i,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(t,0,["enter",u,n],["exit",u,n]),t+=2)}t++}return e}const lw={42:Oe,43:Oe,45:Oe,48:Oe,49:Oe,50:Oe,51:Oe,52:Oe,53:Oe,54:Oe,55:Oe,56:Oe,57:Oe,62:yf},sw={91:px},uw={[-2]:za,[-1]:za,32:za},cw={35:yx,42:Go,45:[Uc,Go],60:Sx,61:Uc,95:Go,96:Fc,126:Fc},dw={38:wf,92:xf},pw={[-5]:Ta,[-4]:Ta,[-3]:Ta,33:Fx,38:wf,42:Ml,60:[U0,Tx],91:Ux,92:[gx,xf],93:Hs,95:Ml,96:nx},mw={null:[Ml,rw]},fw={null:[42,95]},hw={null:[]},gw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:fw,contentInitial:sw,disable:hw,document:lw,flow:cw,flowInitial:uw,insideSpan:mw,string:dw,text:pw},Symbol.toStringTag,{value:"Module"}));function vw(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const o={},i=[];let a=[],l=[];const s={attempt:N(P),check:N(k),consume:f,enter:g,exit:S,interrupt:N(k,{interrupt:!0})},u={code:null,containerState:{},defineSkip:w,events:[],now:x,parser:e,previous:null,sliceSerialize:m,sliceStream:p,write:d};let c=n.tokenize.call(u,s);return n.resolveAll&&i.push(n),u;function d(q){return a=Xe(a,q),C(),a[a.length-1]!==null?[]:(A(n,0),u.events=Vs(i,u.events,u),u.events)}function m(q,R){return xw(p(q),R)}function p(q){return yw(a,q)}function x(){const{_bufferIndex:q,_index:R,line:Y,column:ae,offset:H}=r;return{_bufferIndex:q,_index:R,line:Y,column:ae,offset:H}}function w(q){o[q.line]=q.column,L()}function C(){let q;for(;r._index<a.length;){const R=a[r._index];if(typeof R=="string")for(q=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===q&&r._bufferIndex<R.length;)h(R.charCodeAt(r._bufferIndex));else h(R)}}function h(q){c=c(q)}function f(q){F(q)?(r.line++,r.column=1,r.offset+=q===-3?2:1,L()):q!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=q}function g(q,R){const Y=R||{};return Y.type=q,Y.start=x(),u.events.push(["enter",Y,u]),l.push(Y),Y}function S(q){const R=l.pop();return R.end=x(),u.events.push(["exit",R,u]),R}function P(q,R){A(q,R.from)}function k(q,R){R.restore()}function N(q,R){return Y;function Y(ae,H,fe){let pe,j,D,v;return Array.isArray(ae)?G(ae):"tokenize"in ae?G([ae]):$(ae);function $(te){return fn;function fn(qn){const zt=qn!==null&&te[qn],Tt=qn!==null&&te.null,vo=[...Array.isArray(zt)?zt:zt?[zt]:[],...Array.isArray(Tt)?Tt:Tt?[Tt]:[]];return G(vo)(qn)}}function G(te){return pe=te,j=0,te.length===0?fe:y(te[j])}function y(te){return fn;function fn(qn){return v=M(),D=te,te.partial||(u.currentConstruct=te),te.name&&u.parser.constructs.disable.null.includes(te.name)?on():te.tokenize.call(R?Object.assign(Object.create(u),R):u,s,ve,on)(qn)}}function ve(te){return q(D,v),H}function on(te){return v.restore(),++j<pe.length?y(pe[j]):fe}}}function A(q,R){q.resolveAll&&!i.includes(q)&&i.push(q),q.resolve&&Sn(u.events,R,u.events.length-R,q.resolve(u.events.slice(R),u)),q.resolveTo&&(u.events=q.resolveTo(u.events,u))}function M(){const q=x(),R=u.previous,Y=u.currentConstruct,ae=u.events.length,H=Array.from(l);return{from:ae,restore:fe};function fe(){r=q,u.previous=R,u.currentConstruct=Y,u.events.length=ae,l=H,L()}}function L(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function yw(e,n){const t=n.start._index,r=n.start._bufferIndex,o=n.end._index,i=n.end._bufferIndex;let a;if(t===o)a=[e[t].slice(r,i)];else{if(a=e.slice(t,o),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}i>0&&a.push(e[o].slice(0,i))}return a}function xw(e,n){let t=-1;const r=[];let o;for(;++t<e.length;){const i=e[t];let a;if(typeof i=="string")a=i;else switch(i){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&o)continue;a=" ";break}default:a=String.fromCharCode(i)}o=i===-2,r.push(a)}return r.join("")}function ww(e){const r={constructs:N0([gw,...(e||{}).extensions||[]]),content:o(L0),defined:[],document:o(R0),flow:o(nw),lazy:{},string:o(ow),text:o(iw)};return r;function o(i){return a;function a(l){return vw(r,i,l)}}}function kw(e){for(;!kf(e););return e}const Vc=/[\0\t\n\r]/g;function Sw(){let e=1,n="",t=!0,r;return o;function o(i,a,l){const s=[];let u,c,d,m,p;for(i=n+(typeof i=="string"?i.toString():new TextDecoder(a||void 0).decode(i)),d=0,n="",t&&(i.charCodeAt(0)===65279&&d++,t=void 0);d<i.length;){if(Vc.lastIndex=d,u=Vc.exec(i),m=u&&u.index!==void 0?u.index:i.length,p=i.charCodeAt(m),!u){n=i.slice(d);break}if(p===10&&d===m&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),d<m&&(s.push(i.slice(d,m)),e+=m-d),p){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}d=m+1}return l&&(r&&s.push(-5),n&&s.push(n),s.push(null)),s}}const Cw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ew(e){return e.replace(Cw,Pw)}function Pw(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const o=t.charCodeAt(1),i=o===120||o===88;return vf(t.slice(i?2:1),i?16:10)}return Us(t)||e}const Nf={}.hasOwnProperty;function _w(e,n,t){return typeof n!="string"&&(t=n,n=void 0),Nw(t)(kw(ww(t).document().write(Sw()(e,n,!0))))}function Nw(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(Zs),autolinkProtocol:M,autolinkEmail:M,atxHeading:i(Ks),blockQuote:i(Tt),characterEscape:M,characterReference:M,codeFenced:i(vo),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:i(vo,a),codeText:i(Ff,a),codeTextData:M,data:M,codeFlowValue:M,definition:i(Bf),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:i(Uf),hardBreakEscape:i(Gs),hardBreakTrailing:i(Gs),htmlFlow:i(Xs,a),htmlFlowData:M,htmlText:i(Xs,a),htmlTextData:M,image:i(Vf),label:a,link:i(Zs),listItem:i(Hf),listItemValue:m,listOrdered:i(eu,d),listUnordered:i(eu),paragraph:i(Wf),reference:y,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:i(Ks),strong:i($f),thematicBreak:i(Qf)},exit:{atxHeading:s(),atxHeadingSequence:P,autolink:s(),autolinkEmail:zt,autolinkProtocol:qn,blockQuote:s(),characterEscapeValue:L,characterReferenceMarkerHexadecimal:on,characterReferenceMarkerNumeric:on,characterReferenceValue:te,characterReference:fn,codeFenced:s(C),codeFencedFence:w,codeFencedFenceInfo:p,codeFencedFenceMeta:x,codeFlowValue:L,codeIndented:s(h),codeText:s(H),codeTextData:L,data:L,definition:s(),definitionDestinationString:S,definitionLabelString:f,definitionTitleString:g,emphasis:s(),hardBreakEscape:s(R),hardBreakTrailing:s(R),htmlFlow:s(Y),htmlFlowData:L,htmlText:s(ae),htmlTextData:L,image:s(pe),label:D,labelText:j,lineEnding:q,link:s(fe),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:ve,resourceDestinationString:v,resourceTitleString:$,resource:G,setextHeading:s(A),setextHeadingLineSequence:N,setextHeadingText:k,strong:s(),thematicBreak:s()}};zf(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(E){let I={type:"root",children:[]};const B={stack:[I],tokenStack:[],config:n,enter:l,exit:u,buffer:a,resume:c,data:t},W=[];let X=-1;for(;++X<E.length;)if(E[X][1].type==="listOrdered"||E[X][1].type==="listUnordered")if(E[X][0]==="enter")W.push(X);else{const an=W.pop();X=o(E,an,X)}for(X=-1;++X<E.length;){const an=n[E[X][0]];Nf.call(an,E[X][1].type)&&an[E[X][1].type].call(Object.assign({sliceSerialize:E[X][2].sliceSerialize},B),E[X][1])}if(B.tokenStack.length>0){const an=B.tokenStack[B.tokenStack.length-1];(an[1]||Hc).call(B,void 0,an[0])}for(I.position={start:Mn(E.length>0?E[0][1].start:{line:1,column:1,offset:0}),end:Mn(E.length>0?E[E.length-2][1].end:{line:1,column:1,offset:0})},X=-1;++X<n.transforms.length;)I=n.transforms[X](I)||I;return I}function o(E,I,B){let W=I-1,X=-1,an=!1,st,Cn,hr,gr;for(;++W<=B;){const Be=E[W];switch(Be[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Be[0]==="enter"?X++:X--,gr=void 0;break}case"lineEndingBlank":{Be[0]==="enter"&&(st&&!gr&&!X&&!hr&&(hr=W),gr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:gr=void 0}if(!X&&Be[0]==="enter"&&Be[1].type==="listItemPrefix"||X===-1&&Be[0]==="exit"&&(Be[1].type==="listUnordered"||Be[1].type==="listOrdered")){if(st){let It=W;for(Cn=void 0;It--;){const En=E[It];if(En[1].type==="lineEnding"||En[1].type==="lineEndingBlank"){if(En[0]==="exit")continue;Cn&&(E[Cn][1].type="lineEndingBlank",an=!0),En[1].type="lineEnding",Cn=It}else if(!(En[1].type==="linePrefix"||En[1].type==="blockQuotePrefix"||En[1].type==="blockQuotePrefixWhitespace"||En[1].type==="blockQuoteMarker"||En[1].type==="listItemIndent"))break}hr&&(!Cn||hr<Cn)&&(st._spread=!0),st.end=Object.assign({},Cn?E[Cn][1].start:Be[1].end),E.splice(Cn||W,0,["exit",st,Be[2]]),W++,B++}if(Be[1].type==="listItemPrefix"){const It={type:"listItem",_spread:!1,start:Object.assign({},Be[1].start),end:void 0};st=It,E.splice(W,0,["enter",It,Be[2]]),W++,B++,hr=void 0,gr=!0}}}return E[I][1]._spread=an,B}function i(E,I){return B;function B(W){l.call(this,E(W),W),I&&I.call(this,W)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(E,I,B){this.stack[this.stack.length-1].children.push(E),this.stack.push(E),this.tokenStack.push([I,B||void 0]),E.position={start:Mn(I.start),end:void 0}}function s(E){return I;function I(B){E&&E.call(this,B),u.call(this,B)}}function u(E,I){const B=this.stack.pop(),W=this.tokenStack.pop();if(W)W[0].type!==E.type&&(I?I.call(this,E,W[0]):(W[1]||Hc).call(this,E,W[0]));else throw new Error("Cannot close `"+E.type+"` ("+Fr({start:E.start,end:E.end})+"): it’s not open");B.position.end=Mn(E.end)}function c(){return P0(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function m(E){if(this.data.expectingFirstListItemValue){const I=this.stack[this.stack.length-2];I.start=Number.parseInt(this.sliceSerialize(E),10),this.data.expectingFirstListItemValue=void 0}}function p(){const E=this.resume(),I=this.stack[this.stack.length-1];I.lang=E}function x(){const E=this.resume(),I=this.stack[this.stack.length-1];I.meta=E}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const E=this.resume(),I=this.stack[this.stack.length-1];I.value=E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const E=this.resume(),I=this.stack[this.stack.length-1];I.value=E.replace(/(\r?\n|\r)$/g,"")}function f(E){const I=this.resume(),B=this.stack[this.stack.length-1];B.label=I,B.identifier=Zt(this.sliceSerialize(E)).toLowerCase()}function g(){const E=this.resume(),I=this.stack[this.stack.length-1];I.title=E}function S(){const E=this.resume(),I=this.stack[this.stack.length-1];I.url=E}function P(E){const I=this.stack[this.stack.length-1];if(!I.depth){const B=this.sliceSerialize(E).length;I.depth=B}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function N(E){const I=this.stack[this.stack.length-1];I.depth=this.sliceSerialize(E).codePointAt(0)===61?1:2}function A(){this.data.setextHeadingSlurpLineEnding=void 0}function M(E){const B=this.stack[this.stack.length-1].children;let W=B[B.length-1];(!W||W.type!=="text")&&(W=Jf(),W.position={start:Mn(E.start),end:void 0},B.push(W)),this.stack.push(W)}function L(E){const I=this.stack.pop();I.value+=this.sliceSerialize(E),I.position.end=Mn(E.end)}function q(E){const I=this.stack[this.stack.length-1];if(this.data.atHardBreak){const B=I.children[I.children.length-1];B.position.end=Mn(E.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(I.type)&&(M.call(this,E),L.call(this,E))}function R(){this.data.atHardBreak=!0}function Y(){const E=this.resume(),I=this.stack[this.stack.length-1];I.value=E}function ae(){const E=this.resume(),I=this.stack[this.stack.length-1];I.value=E}function H(){const E=this.resume(),I=this.stack[this.stack.length-1];I.value=E}function fe(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=I,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function pe(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=I,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function j(E){const I=this.sliceSerialize(E),B=this.stack[this.stack.length-2];B.label=Ew(I),B.identifier=Zt(I).toLowerCase()}function D(){const E=this.stack[this.stack.length-1],I=this.resume(),B=this.stack[this.stack.length-1];if(this.data.inReference=!0,B.type==="link"){const W=E.children;B.children=W}else B.alt=I}function v(){const E=this.resume(),I=this.stack[this.stack.length-1];I.url=E}function $(){const E=this.resume(),I=this.stack[this.stack.length-1];I.title=E}function G(){this.data.inReference=void 0}function y(){this.data.referenceType="collapsed"}function ve(E){const I=this.resume(),B=this.stack[this.stack.length-1];B.label=I,B.identifier=Zt(this.sliceSerialize(E)).toLowerCase(),this.data.referenceType="full"}function on(E){this.data.characterReferenceType=E.type}function te(E){const I=this.sliceSerialize(E),B=this.data.characterReferenceType;let W;B?(W=vf(I,B==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):W=Us(I);const X=this.stack[this.stack.length-1];X.value+=W}function fn(E){const I=this.stack.pop();I.position.end=Mn(E.end)}function qn(E){L.call(this,E);const I=this.stack[this.stack.length-1];I.url=this.sliceSerialize(E)}function zt(E){L.call(this,E);const I=this.stack[this.stack.length-1];I.url="mailto:"+this.sliceSerialize(E)}function Tt(){return{type:"blockquote",children:[]}}function vo(){return{type:"code",lang:null,meta:null,value:""}}function Ff(){return{type:"inlineCode",value:""}}function Bf(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Uf(){return{type:"emphasis",children:[]}}function Ks(){return{type:"heading",depth:0,children:[]}}function Gs(){return{type:"break"}}function Xs(){return{type:"html",value:""}}function Vf(){return{type:"image",title:null,url:"",alt:null}}function Zs(){return{type:"link",title:null,url:"",children:[]}}function eu(E){return{type:"list",ordered:E.type==="listOrdered",start:null,spread:E._spread,children:[]}}function Hf(E){return{type:"listItem",spread:E._spread,checked:null,children:[]}}function Wf(){return{type:"paragraph",children:[]}}function $f(){return{type:"strong",children:[]}}function Jf(){return{type:"text",value:""}}function Qf(){return{type:"thematicBreak"}}}function Mn(e){return{line:e.line,column:e.column,offset:e.offset}}function zf(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?zf(e,r):zw(e,r)}}function zw(e,n){let t;for(t in n)if(Nf.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function Hc(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Fr({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Fr({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Fr({start:n.start,end:n.end})+") is still open")}function Tw(e){const n=this;n.parser=t;function t(r){return _w(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function Iw(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function Aw(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function bw(e,n){const t=n.value?n.value+`
`:"",r={};n.lang&&(r.className=["language-"+n.lang]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function jw(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Ow(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Lw(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),o=fr(r.toLowerCase()),i=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=i+1,l+=1,e.footnoteCounts.set(r,l);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+o,id:t+"fnref-"+o+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(n,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(n,u),e.applyData(n,u)}function qw(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Rw(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Tf(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const o=e.all(n),i=o[0];i&&i.type==="text"?i.value="["+i.value:o.unshift({type:"text",value:"["});const a=o[o.length-1];return a&&a.type==="text"?a.value+=r:o.push({type:"text",value:r}),o}function Mw(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Tf(e,n);const o={src:fr(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"img",properties:o,children:[]};return e.patch(n,i),e.applyData(n,i)}function Dw(e,n){const t={src:fr(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function Fw(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function Bw(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Tf(e,n);const o={href:fr(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);const i={type:"element",tagName:"a",properties:o,children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function Uw(e,n){const t={href:fr(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Vw(e,n,t){const r=e.all(n),o=t?Hw(t):If(n),i={},a=[];if(typeof n.checked=="boolean"){const c=r[0];let d;c&&c.type==="element"&&c.tagName==="p"?d=c:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const c=r[l];(o||l!==0||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!o?a.push(...c.children):a.push(c)}const s=r[r.length-1];s&&(o||s.type!=="element"||s.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:i,children:a};return e.patch(n,u),e.applyData(n,u)}function Hw(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=If(t[r])}return n}function If(e){const n=e.spread;return n??e.children.length>1}function Ww(e,n){const t={},r=e.all(n);let o=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++o<r.length;){const a=r[o];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const i={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,i),e.applyData(n,i)}function $w(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Jw(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Qw(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Yw(e,n){const t=e.all(n),r=t.shift(),o=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],a),o.push(a)}if(t.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},l=Ms(n.children[1]),s=cf(n.children[n.children.length-1]);l&&s&&(a.position={start:l,end:s}),o.push(a)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(n,i),e.applyData(n,i)}function Kw(e,n,t){const r=t?t.children:void 0,i=(r?r.indexOf(n):1)===0?"th":"td",a=t&&t.type==="table"?t.align:void 0,l=a?a.length:n.children.length;let s=-1;const u=[];for(;++s<l;){const d=n.children[s],m={},p=a?a[s]:void 0;p&&(m.align=p);let x={type:"element",tagName:i,properties:m,children:[]};d&&(x.children=e.all(d),e.patch(d,x),x=e.applyData(d,x)),u.push(x)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(n,c),e.applyData(n,c)}function Gw(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Wc=9,$c=32;function Xw(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),o=0;const i=[];for(;r;)i.push(Jc(n.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=t.exec(n);return i.push(Jc(n.slice(o),o>0,!1)),i.join("")}function Jc(e,n,t){let r=0,o=e.length;if(n){let i=e.codePointAt(r);for(;i===Wc||i===$c;)r++,i=e.codePointAt(r)}if(t){let i=e.codePointAt(o-1);for(;i===Wc||i===$c;)o--,i=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function Zw(e,n){const t={type:"text",value:Xw(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function ek(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const nk={blockquote:Iw,break:Aw,code:bw,delete:jw,emphasis:Ow,footnoteReference:Lw,heading:qw,html:Rw,imageReference:Mw,image:Dw,inlineCode:Fw,linkReference:Bw,link:Uw,listItem:Vw,list:Ww,paragraph:$w,root:Jw,strong:Qw,table:Yw,tableCell:Gw,tableRow:Kw,text:Zw,thematicBreak:ek,toml:qo,yaml:qo,definition:qo,footnoteDefinition:qo};function qo(){}const Af=-1,Ki=0,Ni=1,zi=2,Ws=3,$s=4,Js=5,Qs=6,bf=7,jf=8,Qc=typeof self=="object"?self:globalThis,tk=(e,n)=>{const t=(o,i)=>(e.set(i,o),o),r=o=>{if(e.has(o))return e.get(o);const[i,a]=n[o];switch(i){case Ki:case Af:return t(a,o);case Ni:{const l=t([],o);for(const s of a)l.push(r(s));return l}case zi:{const l=t({},o);for(const[s,u]of a)l[r(s)]=r(u);return l}case Ws:return t(new Date(a),o);case $s:{const{source:l,flags:s}=a;return t(new RegExp(l,s),o)}case Js:{const l=t(new Map,o);for(const[s,u]of a)l.set(r(s),r(u));return l}case Qs:{const l=t(new Set,o);for(const s of a)l.add(r(s));return l}case bf:{const{name:l,message:s}=a;return t(new Qc[l](s),o)}case jf:return t(BigInt(a),o);case"BigInt":return t(Object(BigInt(a)),o)}return t(new Qc[i](a),o)};return r},Yc=e=>tk(new Map,e)(0),bt="",{toString:rk}={},{keys:ok}=Object,_r=e=>{const n=typeof e;if(n!=="object"||!e)return[Ki,n];const t=rk.call(e).slice(8,-1);switch(t){case"Array":return[Ni,bt];case"Object":return[zi,bt];case"Date":return[Ws,bt];case"RegExp":return[$s,bt];case"Map":return[Js,bt];case"Set":return[Qs,bt]}return t.includes("Array")?[Ni,t]:t.includes("Error")?[bf,t]:[zi,t]},Ro=([e,n])=>e===Ki&&(n==="function"||n==="symbol"),ik=(e,n,t,r)=>{const o=(a,l)=>{const s=r.push(a)-1;return t.set(l,s),s},i=a=>{if(t.has(a))return t.get(a);let[l,s]=_r(a);switch(l){case Ki:{let c=a;switch(s){case"bigint":l=jf,c=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case"undefined":return o([Af],a)}return o([l,c],a)}case Ni:{if(s)return o([s,[...a]],a);const c=[],d=o([l,c],a);for(const m of a)c.push(i(m));return d}case zi:{if(s)switch(s){case"BigInt":return o([s,a.toString()],a);case"Boolean":case"Number":case"String":return o([s,a.valueOf()],a)}if(n&&"toJSON"in a)return i(a.toJSON());const c=[],d=o([l,c],a);for(const m of ok(a))(e||!Ro(_r(a[m])))&&c.push([i(m),i(a[m])]);return d}case Ws:return o([l,a.toISOString()],a);case $s:{const{source:c,flags:d}=a;return o([l,{source:c,flags:d}],a)}case Js:{const c=[],d=o([l,c],a);for(const[m,p]of a)(e||!(Ro(_r(m))||Ro(_r(p))))&&c.push([i(m),i(p)]);return d}case Qs:{const c=[],d=o([l,c],a);for(const m of a)(e||!Ro(_r(m)))&&c.push(i(m));return d}}const{message:u}=a;return o([l,{name:s,message:u}],a)};return i},Kc=(e,{json:n,lossy:t}={})=>{const r=[];return ik(!(n||t),!!n,new Map,r)(e),r},Ti=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Yc(Kc(e,n)):structuredClone(e):(e,n)=>Yc(Kc(e,n));function ak(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function lk(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function sk(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||ak,r=e.options.footnoteBackLabel||lk,o=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const c=e.all(u),d=String(u.identifier).toUpperCase(),m=fr(d.toLowerCase());let p=0;const x=[],w=e.footnoteCounts.get(d);for(;w!==void 0&&++p<=w;){x.length>0&&x.push({type:"text",value:" "});let f=typeof t=="string"?t:t(s,p);typeof f=="string"&&(f={type:"text",value:f}),x.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+m+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,p),className:["data-footnote-backref"]},children:Array.isArray(f)?f:[f]})}const C=c[c.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const f=C.children[C.children.length-1];f&&f.type==="text"?f.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...x)}else c.push(...x);const h={type:"element",tagName:"li",properties:{id:n+"fn-"+m},children:e.wrap(c,!0)};e.patch(u,h),l.push(h)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...Ti(a),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Of=function(e){if(e==null)return pk;if(typeof e=="function")return Gi(e);if(typeof e=="object")return Array.isArray(e)?uk(e):ck(e);if(typeof e=="string")return dk(e);throw new Error("Expected function, string, or object as test")};function uk(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Of(e[t]);return Gi(r);function r(...o){let i=-1;for(;++i<n.length;)if(n[i].apply(this,o))return!0;return!1}}function ck(e){const n=e;return Gi(t);function t(r){const o=r;let i;for(i in e)if(o[i]!==n[i])return!1;return!0}}function dk(e){return Gi(n);function n(t){return t&&t.type===e}}function Gi(e){return n;function n(t,r,o){return!!(mk(t)&&e.call(this,t,typeof r=="number"?r:void 0,o||void 0))}}function pk(){return!0}function mk(e){return e!==null&&typeof e=="object"&&"type"in e}const Lf=[],fk=!0,Gc=!1,hk="skip";function gk(e,n,t,r){let o;typeof n=="function"&&typeof t!="function"?(r=t,t=n):o=n;const i=Of(o),a=r?-1:1;l(e,void 0,[])();function l(s,u,c){const d=s&&typeof s=="object"?s:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return m;function m(){let p=Lf,x,w,C;if((!n||i(s,u,c[c.length-1]||void 0))&&(p=vk(t(s,c)),p[0]===Gc))return p;if("children"in s&&s.children){const h=s;if(h.children&&p[0]!==hk)for(w=(r?h.children.length:-1)+a,C=c.concat(h);w>-1&&w<h.children.length;){const f=h.children[w];if(x=l(f,w,C)(),x[0]===Gc)return x;w=typeof x[1]=="number"?x[1]:w+a}}return p}}}function vk(e){return Array.isArray(e)?e:typeof e=="number"?[fk,e]:e==null?Lf:[e]}function qf(e,n,t,r){let o,i,a;typeof n=="function"&&typeof t!="function"?(i=void 0,a=n,o=t):(i=n,a=t,o=r),gk(e,i,l,o);function l(s,u){const c=u[u.length-1],d=c?c.children.indexOf(s):void 0;return a(s,d,c)}}const Dl={}.hasOwnProperty,yk={};function xk(e,n){const t=n||yk,r=new Map,o=new Map,i=new Map,a={...nk,...t.handlers},l={all:u,applyData:kk,definitionById:r,footnoteById:o,footnoteCounts:i,footnoteOrder:[],handlers:a,one:s,options:t,patch:wk,wrap:Ck};return qf(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const d=c.type==="definition"?r:o,m=String(c.identifier).toUpperCase();d.has(m)||d.set(m,c)}}),l;function s(c,d){const m=c.type,p=l.handlers[m];if(Dl.call(l.handlers,m)&&p)return p(l,c,d);if(l.options.passThrough&&l.options.passThrough.includes(m)){if("children"in c){const{children:w,...C}=c,h=Ti(C);return h.children=l.all(c),h}return Ti(c)}return(l.options.unknownHandler||Sk)(l,c,d)}function u(c){const d=[];if("children"in c){const m=c.children;let p=-1;for(;++p<m.length;){const x=l.one(m[p],c);if(x){if(p&&m[p-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=Xc(x.value)),!Array.isArray(x)&&x.type==="element")){const w=x.children[0];w&&w.type==="text"&&(w.value=Xc(w.value))}Array.isArray(x)?d.push(...x):d.push(x)}}}return d}}function wk(e,n){e.position&&(n.position=n0(e))}function kk(e,n){let t=n;if(e&&e.data){const r=e.data.hName,o=e.data.hChildren,i=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const a="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:a}}t.type==="element"&&i&&Object.assign(t.properties,Ti(i)),"children"in t&&t.children&&o!==null&&o!==void 0&&(t.children=o)}return t}function Sk(e,n){const t=n.data||{},r="value"in n&&!(Dl.call(t,"hProperties")||Dl.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Ck(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function Xc(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Zc(e,n){const t=xk(e,n),r=t.one(e,void 0),o=sk(t),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&i.children.push({type:"text",value:`
`},o),i}function Ek(e,n){return e&&"run"in e?async function(t,r){const o=Zc(t,{file:r,...n});await e.run(o,r)}:function(t,r){return Zc(t,{file:r,...e||n})}}function ed(e){if(e)throw e}var Xo=Object.prototype.hasOwnProperty,Rf=Object.prototype.toString,nd=Object.defineProperty,td=Object.getOwnPropertyDescriptor,rd=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Rf.call(n)==="[object Array]"},od=function(n){if(!n||Rf.call(n)!=="[object Object]")return!1;var t=Xo.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Xo.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var o;for(o in n);return typeof o>"u"||Xo.call(n,o)},id=function(n,t){nd&&t.name==="__proto__"?nd(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},ad=function(n,t){if(t==="__proto__")if(Xo.call(n,t)){if(td)return td(n,t).value}else return;return n[t]},Pk=function e(){var n,t,r,o,i,a,l=arguments[0],s=1,u=arguments.length,c=!1;for(typeof l=="boolean"&&(c=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(n=arguments[s],n!=null)for(t in n)r=ad(l,t),o=ad(n,t),l!==o&&(c&&o&&(od(o)||(i=rd(o)))?(i?(i=!1,a=r&&rd(r)?r:[]):a=r&&od(r)?r:{},id(l,{name:t,newValue:e(c,a,o)})):typeof o<"u"&&id(l,{name:t,newValue:o}));return l};const Ia=md(Pk);function Fl(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function _k(){const e=[],n={run:t,use:r};return n;function t(...o){let i=-1;const a=o.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...o);function l(s,...u){const c=e[++i];let d=-1;if(s){a(s);return}for(;++d<o.length;)(u[d]===null||u[d]===void 0)&&(u[d]=o[d]);o=u,c?Nk(c,l)(...u):a(null,...u)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),n}}function Nk(e,n){let t;return r;function r(...a){const l=e.length>a.length;let s;l&&a.push(o);try{s=e.apply(this,a)}catch(u){const c=u;if(l&&t)throw c;return o(c)}l||(s&&s.then&&typeof s.then=="function"?s.then(i,o):s instanceof Error?o(s):i(s))}function o(a,...l){t||(t=!0,n(a,...l))}function i(a){o(null,a)}}const vn={basename:zk,dirname:Tk,extname:Ik,join:Ak,sep:"/"};function zk(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');go(e);let t=0,r=-1,o=e.length,i;if(n===void 0||n.length===0||n.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(i){t=o+1;break}}else r<0&&(i=!0,r=o+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let a=-1,l=n.length-1;for(;o--;)if(e.codePointAt(o)===47){if(i){t=o+1;break}}else a<0&&(i=!0,a=o+1),l>-1&&(e.codePointAt(o)===n.codePointAt(l--)?l<0&&(r=o):(l=-1,r=a));return t===r?r=a:r<0&&(r=e.length),e.slice(t,r)}function Tk(e){if(go(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function Ik(e){go(e);let n=e.length,t=-1,r=0,o=-1,i=0,a;for(;n--;){const l=e.codePointAt(n);if(l===47){if(a){r=n+1;break}continue}t<0&&(a=!0,t=n+1),l===46?o<0?o=n:i!==1&&(i=1):o>-1&&(i=-1)}return o<0||t<0||i===0||i===1&&o===t-1&&o===r+1?"":e.slice(o,t)}function Ak(...e){let n=-1,t;for(;++n<e.length;)go(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":bk(t)}function bk(e){go(e);const n=e.codePointAt(0)===47;let t=jk(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function jk(e,n){let t="",r=0,o=-1,i=0,a=-1,l,s;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(o===a-1||i===1))if(o!==a-1&&i===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",r=0):(t=t.slice(0,s),r=t.length-1-t.lastIndexOf("/")),o=a,i=0;continue}}else if(t.length>0){t="",r=0,o=a,i=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(o+1,a):t=e.slice(o+1,a),r=a-o-1;o=a,i=0}else l===46&&i>-1?i++:i=-1}return t}function go(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Ok={cwd:Lk};function Lk(){return"/"}function Bl(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function qk(e){if(typeof e=="string")e=new URL(e);else if(!Bl(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Rk(e)}function Rk(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(n)}const Aa=["history","path","basename","stem","extname","dirname"];class Mf{constructor(n){let t;n?Bl(n)?t={path:n}:typeof n=="string"||Mk(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":Ok.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Aa.length;){const i=Aa[r];i in t&&t[i]!==void 0&&t[i]!==null&&(this[i]=i==="history"?[...t[i]]:t[i])}let o;for(o in t)Aa.includes(o)||(this[o]=t[o])}get basename(){return typeof this.path=="string"?vn.basename(this.path):void 0}set basename(n){ja(n,"basename"),ba(n,"basename"),this.path=vn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?vn.dirname(this.path):void 0}set dirname(n){ld(this.basename,"dirname"),this.path=vn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?vn.extname(this.path):void 0}set extname(n){if(ba(n,"extname"),ld(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=vn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Bl(n)&&(n=qk(n)),ja(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?vn.basename(this.path,this.extname):void 0}set stem(n){ja(n,"stem"),ba(n,"stem"),this.path=vn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const o=this.message(n,t,r);throw o.fatal=!0,o}info(n,t,r){const o=this.message(n,t,r);return o.fatal=void 0,o}message(n,t,r){const o=new Te(n,t,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function ba(e,n){if(e&&e.includes(vn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+vn.sep+"`")}function ja(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function ld(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function Mk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Dk=function(e){const r=this.constructor.prototype,o=r[e],i=function(){return o.apply(i,arguments)};return Object.setPrototypeOf(i,r),i},Fk={}.hasOwnProperty;class Ys extends Dk{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=_k()}copy(){const n=new Ys;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(Ia(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(qa("data",this.frozen),this.namespace[n]=t,this):Fk.call(this.namespace,n)&&this.namespace[n]||void 0:n?(qa("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const o=t.call(n,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Mo(n),r=this.parser||this.Parser;return Oa("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Oa("process",this.parser||this.Parser),La("process",this.compiler||this.Compiler),t?o(void 0,t):new Promise(o);function o(i,a){const l=Mo(n),s=r.parse(l);r.run(s,l,function(c,d,m){if(c||!d||!m)return u(c);const p=d,x=r.stringify(p,m);Vk(x)?m.value=x:m.result=x,u(c,m)});function u(c,d){c||!d?a(c):i?i(d):t(void 0,d)}}}processSync(n){let t=!1,r;return this.freeze(),Oa("processSync",this.parser||this.Parser),La("processSync",this.compiler||this.Compiler),this.process(n,o),ud("processSync","process",t),r;function o(i,a){t=!0,ed(i),r=a}}run(n,t,r){sd(n),this.freeze();const o=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?i(void 0,r):new Promise(i);function i(a,l){const s=Mo(t);o.run(n,s,u);function u(c,d,m){const p=d||n;c?l(c):a?a(p):r(void 0,p,m)}}}runSync(n,t){let r=!1,o;return this.run(n,t,i),ud("runSync","run",r),o;function i(a,l){ed(a),o=l,r=!0}}stringify(n,t){this.freeze();const r=Mo(t),o=this.compiler||this.Compiler;return La("stringify",o),sd(n),o(n,r)}use(n,...t){const r=this.attachers,o=this.namespace;if(qa("use",this.frozen),n!=null)if(typeof n=="function")s(n,t);else if(typeof n=="object")Array.isArray(n)?l(n):a(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function i(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...d]=u;s(c,d)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(o.settings=Ia(!0,o.settings,u.settings))}function l(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const d=u[c];i(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let d=-1,m=-1;for(;++d<r.length;)if(r[d][0]===u){m=d;break}if(m===-1)r.push([u,...c]);else if(c.length>0){let[p,...x]=c;const w=r[m][1];Fl(w)&&Fl(p)&&(p=Ia(!0,w,p)),r[m]=[u,p,...x]}}}}const Bk=new Ys().freeze();function Oa(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function La(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function qa(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function sd(e){if(!Fl(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ud(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Mo(e){return Uk(e)?e:new Mf(e)}function Uk(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Vk(e){return typeof e=="string"||Hk(e)}function Hk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Wk="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",cd=[],dd={allowDangerousHtml:!0},$k=/^(https?|ircs?|mailto|xmpp)$/i,Jk=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Qk(e){const n=e.allowedElements,t=e.allowElement,r=e.children||"",o=e.className,i=e.components,a=e.disallowedElements,l=e.rehypePlugins||cd,s=e.remarkPlugins||cd,u=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...dd}:dd,c=e.skipHtml,d=e.unwrapDisallowed,m=e.urlTransform||Yk,p=Bk().use(Tw).use(s).use(Ek,u).use(l),x=new Mf;typeof r=="string"&&(x.value=r);for(const f of Jk)Object.hasOwn(e,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+Wk+f.id,void 0);const w=p.parse(x);let C=p.runSync(w,x);return o&&(C={type:"element",tagName:"div",properties:{className:o},children:C.type==="root"?C.children:[C]}),qf(C,h),l0(C,{Fragment:b.Fragment,components:i,ignoreInvalidStyle:!0,jsx:b.jsx,jsxs:b.jsxs,passKeys:!0,passNode:!0});function h(f,g,S){if(f.type==="raw"&&S&&typeof g=="number")return c?S.children.splice(g,1):S.children[g]={type:"text",value:f.value},g;if(f.type==="element"){let P;for(P in Na)if(Object.hasOwn(Na,P)&&Object.hasOwn(f.properties,P)){const k=f.properties[P],N=Na[P];(N===null||N.includes(f.tagName))&&(f.properties[P]=m(String(k||""),P,f))}}if(f.type==="element"){let P=n?!n.includes(f.tagName):a?a.includes(f.tagName):!1;if(!P&&t&&typeof g=="number"&&(P=!t(f,g,S)),P&&S&&typeof g=="number")return d&&f.children?S.children.splice(g,1,...f.children):S.children.splice(g,1),g}}}function Yk(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),o=e.indexOf("/");return n<0||o>-1&&n>o||t>-1&&n>t||r>-1&&n>r||$k.test(e.slice(0,n))?e:""}const Kk="_conteudoContainer_1rap9_1",Gk="_texto404_1rap9_17",Xk="_titulo_1rap9_35",Zk="_paragrafo_1rap9_47",eS="_botaoContainer_1rap9_57",nS="_imagemCachorro_1rap9_69",tS="_espacoEmBranco_1rap9_81",dt={conteudoContainer:Kk,texto404:Gk,titulo:Xk,paragrafo:Zk,botaoContainer:eS,imagemCachorro:nS,espacoEmBranco:tS},rS="/assets/erro_404-DiHjm8Gg.png";function Df(){const e=qm();return b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:dt.conteudoContainer,children:[b.jsx("span",{className:dt.texto404,children:"404"}),b.jsx("h1",{className:dt.titulo,children:"Ops! Página não encontrada."}),b.jsx("p",{className:dt.paragrafo,children:"Tem certeza de que era isso que você estava procurando? Aguarde uns instabtes e recarregue a página, ou volte para a página inicial."}),b.jsx("div",{className:dt.botaoContainer,onClick:()=>e(-1),children:b.jsx(Ym,{tamanho:"lg",children:" Voltar "})}),b.jsx("img",{className:dt.imagemCachorro,src:rS,alt:"Cachorro de óculos e vestido como humano"})]}),b.jsx("div",{className:dt.espacoEmBranco})]})}const oS="_tituloOutrosPosts_nozzv_1",iS="_postsRecomendados_nozzv_17",pd={tituloOutrosPosts:oS,postsRecomendados:iS},aS=Object.assign({"/src/assets/posts/1/capa.png":Bm,"/src/assets/posts/2/capa.png":Um,"/src/assets/posts/3/capa.png":Vm,"/src/assets/posts/4/capa.png":Hm,"/src/assets/posts/5/capa.png":Wm,"/src/assets/posts/6/capa.png":$m,"/src/assets/posts/7/capa.png":Jm,"/src/assets/posts/8/capa.png":Qm});function lS(){var o;const e=Zv(),n=bl.find(i=>i.id===Number(e.id)),t=(o=aS[`/src/assets/posts/${n.id}/capa.png`])==null?void 0:o.default;if(!n||!t)return b.jsx(Df,{});const r=bl.filter(i=>i.id!==Number(e.id)).sort((i,a)=>a.id-i.id).slice(0,4);return b.jsx(Zm,{children:b.jsxs(Gm,{fotoCapa:`/assets/posts/${n.id}/capa.png`,titulo:n.titulo,children:[b.jsx("div",{className:"post-markdown-container",children:b.jsx(Qk,{children:n.texto})}),b.jsx("h2",{className:pd.tituloOutrosPosts,children:"Outros posts que você pode gostar:"}),b.jsx("ul",{className:pd.postsRecomendados,children:r.map(i=>b.jsx("li",{children:b.jsx(Km,{post:i})},i.id))})]})})}function sS(){const{pathname:e}=pr();return T.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function uS(){return b.jsxs(Ey,{children:[b.jsx(sS,{}),b.jsx(u1,{}),b.jsxs(gy,{children:[b.jsxs(jt,{path:"/",element:b.jsx(Zm,{}),children:[b.jsx(jt,{index:!0,element:b.jsx(Yy,{})}),b.jsx(jt,{path:"aboutMe",element:b.jsx(o1,{})})]}),b.jsx(jt,{path:"post/:id/*",element:b.jsx(lS,{})}),b.jsx(jt,{path:"*",element:b.jsx(Df,{})})]}),b.jsx(m1,{})]})}_m(document.getElementById("root")).render(b.jsx(T.StrictMode,{children:b.jsx(uS,{})}));
