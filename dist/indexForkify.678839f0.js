var t,e,i,n,o,r,s,a,h,u,l,c,d,_,p,f,m,g,v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function y(t){return t&&t.__esModule?t.default:t}var b={},w={},x=v.parcelRequire3a11;null==x&&((x=function(t){if(t in b)return b[t].exports;if(t in w){var e=w[t];delete w[t];var i={id:t,exports:{}};return b[t]=i,e.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){w[t]=e},v.parcelRequire3a11=x);var P={},T={},M=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
T=M("object"==typeof globalThis&&globalThis)||M("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
M("object"==typeof self&&self)||M("object"==typeof v&&v)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||T||Function("return this")();var k={},S={};// Detect IE8's incomplete defineProperty implementation
k=!(S=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var z={},E={};E=!S(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var C=Function.prototype.call;z=E?C.bind(C):function(){return C.apply(C,arguments)};var O={}.propertyIsEnumerable,Z=Object.getOwnPropertyDescriptor;r=Z&&!O.call({1:2},1)?function(t){var e=Z(this,t);return!!e&&e.enumerable}:O;var A={};A=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var I={},B={},j={},N=Function.prototype,R=N.call,D=E&&N.bind.bind(R,R),F={},H=(j=E?D:function(t){return function(){return R.apply(t,arguments)}})({}.toString),W=j("".slice);F=function(t){return W(H(t),8,-1)};var q=Object,U=j("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
B=S(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!q("z").propertyIsEnumerable(0)})?function(t){return"String"===F(t)?U(t,""):q(t)}:q;var V={},G={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
G=function(t){return null==t};var $=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
V=function(t){if(G(t))throw $("Can't call method on "+t);return t},I=function(t){return B(V(t))};var K={},Y={},J={},X={},Q={},tt="object"==typeof document&&document.all,te=(Q={all:tt,IS_HTMLDDA:void 0===tt&&void 0!==tt}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
X=Q.IS_HTMLDDA?function(t){return"function"==typeof t||t===te}:function(t){return"function"==typeof t};var ti=Q.all;J=Q.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:X(t)||t===ti}:function(t){return"object"==typeof t?null!==t:X(t)};var tn={},to={};to=function(t,e){var i;return arguments.length<2?(i=T[t],X(i)?i:void 0):T[t]&&T[t][e]};var tr={};tr=j({}.isPrototypeOf);var ts={},ta={},th={},tu={};tu="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tl=T.process,tc=T.Deno,t_=tl&&tl.versions||tc&&tc.version,tp=t_&&t_.v8;tp&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(a=(s=tp.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!a&&tu&&(!(s=tu.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=tu.match(/Chrome\/(\d+)/))&&(a=+s[1]),th=a;var tf=T.String;ts=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ta=!!Object.getOwnPropertySymbols&&!S(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tf(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&th&&th<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tm=Object;tn=ts?function(t){return"symbol"==typeof t}:function(t){var e=to("Symbol");return X(e)&&tr(e.prototype,tm(t))};var tg={},tv={},ty={},tb=String;ty=function(t){try{return tb(t)}catch(t){return"Object"}};var tw=TypeError;// `Assert: IsCallable(argument) is true`
tv=function(t){if(X(t))return t;throw tw(ty(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tg=function(t,e){var i=t[e];return G(i)?void 0:tv(i)};var tx={},tL=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tx=function(t,e){var i,n;if("string"===e&&X(i=t.toString)&&!J(n=z(i,t))||X(i=t.valueOf)&&!J(n=z(i,t))||"string"!==e&&X(i=t.toString)&&!J(n=z(i,t)))return n;throw tL("Can't convert object to primitive value")};var tP={},tT={};tT=!1;var tM={},tk={},tS=Object.defineProperty;tk=function(t,e){try{tS(T,t,{value:e,configurable:!0,writable:!0})}catch(i){T[t]=e}return e};var tz="__core-js_shared__";tM=T[tz]||tk(tz,{}),(tP=function(t,e){return tM[t]||(tM[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.2",mode:tT?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var tE={},tC={},tO=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tC=function(t){return tO(V(t))};var tZ=j({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tE=Object.hasOwn||function(t,e){return tZ(tC(t),e)};var tA={},tI=0,tB=Math.random(),tj=j(1..toString);tA=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tj(++tI+tB,36)};var tN=T.Symbol,tR=tP("wks"),tD=ts?tN.for||tN:tN&&tN.withoutSetter||tA,tF=TypeError,tH=(tE(tR,t="toPrimitive")||(tR[t]=ta&&tE(tN,t)?tN[t]:tD("Symbol."+t)),tR[t]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
Y=function(t,e){if(!J(t)||tn(t))return t;var i,n=tg(t,tH);if(n){if(void 0===e&&(e="default"),i=z(n,t,e),!J(i)||tn(i))return i;throw tF("Can't convert object to primitive value")}return void 0===e&&(e="number"),tx(t,e)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
K=function(t){var e=Y(t,"string");return tn(e)?e:e+""};var tW={},tq={},tU=T.document,tV=J(tU)&&J(tU.createElement);tq=function(t){return tV?tU.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
tW=!k&&!S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(tq("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tG=Object.getOwnPropertyDescriptor;o=k?tG:function(t,e){if(t=I(t),e=K(e),tW)try{return tG(t,e)}catch(t){}if(tE(t,e))return A(!z(r,t,e),t[e])};var t$={},tK={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
tK=k&&S(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tY={},tJ=String,tX=TypeError;// `Assert: Type(argument) is Object`
tY=function(t){if(J(t))return t;throw tX(tJ(t)+" is not an object")};var tQ=TypeError,t0=Object.defineProperty,t1=Object.getOwnPropertyDescriptor,t2="enumerable",t3="configurable",t5="writable";h=k?tK?function(t,e,i){if(tY(t),e=K(e),tY(i),"function"==typeof t&&"prototype"===e&&"value"in i&&t5 in i&&!i[t5]){var n=t1(t,e);n&&n[t5]&&(t[e]=i.value,i={configurable:t3 in i?i[t3]:n[t3],enumerable:t2 in i?i[t2]:n[t2],writable:!1})}return t0(t,e,i)}:t0:function(t,e,i){if(tY(t),e=K(e),tY(i),tW)try{return t0(t,e,i)}catch(t){}if("get"in i||"set"in i)throw tQ("Accessors not supported");return"value"in i&&(t[e]=i.value),t},t$=k?function(t,e,i){return h(t,e,A(1,i))}:function(t,e,i){return t[e]=i,t};var t8={},t4={},t9=Function.prototype,t7=k&&Object.getOwnPropertyDescriptor,t6=tE(t9,"name")&&(!k||k&&t7(t9,"name").configurable),et={},ee=j(Function.toString);X(tM.inspectSource)||(tM.inspectSource=function(t){return ee(t)}),et=tM.inspectSource;var ei={},en={},eo=T.WeakMap;en=X(eo)&&/native code/.test(String(eo));var er={},es=tP("keys");er=function(t){return es[t]||(es[t]=tA(t))};var ea={};ea={};var eh="Object already initialized",eu=T.TypeError,el=T.WeakMap;if(en||tM.state){var ec=tM.state||(tM.state=new el);/* eslint-disable no-self-assign -- prototype methods protection */ec.get=ec.get,ec.has=ec.has,ec.set=ec.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(t,e){if(ec.has(t))throw eu(eh);return e.facade=t,ec.set(t,e),e},l=function(t){return ec.get(t)||{}},c=function(t){return ec.has(t)}}else{var ed=er("state");ea[ed]=!0,u=function(t,e){if(tE(t,ed))throw eu(eh);return e.facade=t,t$(t,ed,e),e},l=function(t){return tE(t,ed)?t[ed]:{}},c=function(t){return tE(t,ed)}}var e_=(ei={set:u,get:l,has:c,enforce:function(t){return c(t)?l(t):u(t,{})},getterFor:function(t){return function(e){var i;if(!J(e)||(i=l(e)).type!==t)throw eu("Incompatible receiver, "+t+" required");return i}}}).enforce,ep=ei.get,ef=String,em=Object.defineProperty,eg=j("".slice),ev=j("".replace),ey=j([].join),eb=k&&!S(function(){return 8!==em(function(){},"length",{value:8}).length}),ew=String(String).split("String"),ex=t4=function(t,e,i){"Symbol("===eg(ef(e),0,7)&&(e="["+ev(ef(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),i&&i.getter&&(e="get "+e),i&&i.setter&&(e="set "+e),(!tE(t,"name")||t6&&t.name!==e)&&(k?em(t,"name",{value:e,configurable:!0}):t.name=e),eb&&i&&tE(i,"arity")&&t.length!==i.arity&&em(t,"length",{value:i.arity});try{i&&tE(i,"constructor")&&i.constructor?k&&em(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=e_(t);return tE(n,"source")||(n.source=ey(ew,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=ex(function(){return X(this)&&ep(this).source||et(this)},"toString"),t8=function(t,e,i,n){n||(n={});var o=n.enumerable,r=void 0!==n.name?n.name:e;if(X(i)&&t4(i,r,n),n.global)o?t[e]=i:tk(e,i);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=i:h(t,e,{value:i,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var eL={},eP={},eT={},eM={},ek={},eS={},ez=Math.ceil,eE=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
eS=Math.trunc||function(t){var e=+t;return(e>0?eE:ez)(e)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
ek=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:eS(e)};var eC=Math.max,eO=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
eM=function(t,e){var i=ek(t);return i<0?eC(i+e,0):eO(i,e)};var eZ={},eA={},eI=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
eA=function(t){return t>0?eI(ek(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
eZ=function(t){return eA(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var eB=function(t){return function(e,i,n){var o,r=I(e),s=eZ(r),a=eM(n,s);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&i!=i){for(;s>a;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=r[a++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;s>a;a++)if((t||a in r)&&r[a]===i)return t||a||0;return!t&&-1}},ej={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:eB(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:eB(!1)}.indexOf,eN=j([].push);eT=function(t,e){var i,n=I(t),o=0,r=[];for(i in n)!tE(ea,i)&&tE(n,i)&&eN(r,i);// Don't enum bug & hidden keys
for(;e.length>o;)tE(n,i=e[o++])&&(~ej(r,i)||eN(r,i));return r};var eR=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");d=Object.getOwnPropertyNames||function(t){return eT(t,eR)},_=Object.getOwnPropertySymbols;var eD=j([].concat);// all object keys, includes non-enumerable and symbols
eP=to("Reflect","ownKeys")||function(t){var e=d(tY(t));return _?eD(e,_(t)):e},eL=function(t,e,i){for(var n=eP(e),r=0;r<n.length;r++){var s=n[r];tE(t,s)||i&&tE(i,s)||h(t,s,o(e,s))}};var eF={},eH=/#|\.prototype\./,eW=function(t,e){var i=eU[eq(t)];return i===eG||i!==eV&&(X(e)?S(e):!!e)},eq=eW.normalize=function(t){return String(t).replace(eH,".").toLowerCase()},eU=eW.data={},eV=eW.NATIVE="N",eG=eW.POLYFILL="P";eF=eW,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/P=function(t,e){var i,n,r,s,a,h=t.target,u=t.global,l=t.stat;if(i=u?T:l?T[h]||tk(h,{}):(T[h]||{}).prototype)for(n in e){// contained in target
if(s=e[n],r=t.dontCallGetSet?(a=o(i,n))&&a.value:i[n],!eF(u?n:h+(l?".":"#")+n,t.forced)&&void 0!==r){if(typeof s==typeof r)continue;eL(s,r)}(t.sham||r&&r.sham)&&t$(s,"sham",!0),t8(i,n,s,t)}};var e$={},eK={},eY=Function.prototype,eJ=eY.apply,eX=eY.call;// eslint-disable-next-line es/no-reflect -- safe
eK="object"==typeof Reflect&&Reflect.apply||(E?eX.bind(eJ):function(){return eX.apply(eJ,arguments)});var eQ={},e0={},e1=(e0=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===F(t))return j(t)})(e0.bind);// optional / simple context binding
eQ=function(t,e){return tv(t),void 0===e?t:E?e1(t,e):function(){return t.apply(e,arguments)}};var e2={};e2=to("document","documentElement");var e3={};e3=j([].slice);var e5={},e8=TypeError;e5=function(t,e){if(t<e)throw e8("Not enough arguments");return t};var e4={};// eslint-disable-next-line redos/no-vulnerable -- safe
e4=/(?:ipad|iphone|ipod).*applewebkit/i.test(tu);var e9={};e9="process"===F(T.process);var e7=T.setImmediate,e6=T.clearImmediate,it=T.process,ie=T.Dispatch,ii=T.Function,io=T.MessageChannel,ir=T.String,is=0,ia={},ih="onreadystatechange";S(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
p=T.location});var iu=function(t){if(tE(ia,t)){var e=ia[t];delete ia[t],e()}},il=function(t){return function(){iu(t)}},ic=function(t){iu(t.data)},id=function(t){// old engines have not location.origin
T.postMessage(ir(t),p.protocol+"//"+p.host)};e7&&e6||(e7=function(t){e5(arguments.length,1);var e=X(t)?t:ii(t),i=e3(arguments,1);return ia[++is]=function(){eK(e,void 0,i)},f(is),is},e6=function(t){delete ia[t]},e9?f=function(t){it.nextTick(il(t))}:ie&&ie.now?f=function(t){ie.now(il(t))}:io&&!e4?(g=(m=new io).port2,m.port1.onmessage=ic,f=eQ(g.postMessage,g)):T.addEventListener&&X(T.postMessage)&&!T.importScripts&&p&&"file:"!==p.protocol&&!S(id)?(f=id,T.addEventListener("message",ic,!1)):f=ih in tq("script")?function(t){e2.appendChild(tq("script"))[ih]=function(){e2.removeChild(this),iu(t)}}:function(t){setTimeout(il(t),0)});var i_=(e$={set:e7,clear:e6}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
P({global:!0,bind:!0,enumerable:!0,forced:T.clearImmediate!==i_},{clearImmediate:i_});var ip=e$.set,im={},ig={};/* global Bun -- Deno case */ig="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var iv=T.Function,iy=/MSIE .\./.test(tu)||ig&&((e=T.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
im=function(t,e){var i=e?2:1;return iy?function(n,o/* , ...arguments */){var r=e5(arguments.length,1)>i,s=X(n)?n:iv(n),a=r?e3(arguments,i):[],h=r?function(){eK(s,this,a)}:s;return e?t(h,o):t(h)}:t};// https://github.com/oven-sh/bun/issues/1633
var ib=T.setImmediate?im(ip,!1):ip;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
P({global:!0,bind:!0,enumerable:!0,forced:T.setImmediate!==ib},{setImmediate:ib});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iw=function(t){var e,i=Object.prototype,n=i.hasOwnProperty,o=Object.defineProperty||function(t,e,i){t[e]=i.value},r="function"==typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",h=r.toStringTag||"@@toStringTag";function u(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(t){u=function(t,e,i){return t[e]=i}}function l(t,i,n,r){var s,a,h=Object.create((i&&i.prototype instanceof m?i:m).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(h,"_invoke",{value:(s=new S(r||[]),a=d,function(i,o){if(a===_)throw Error("Generator is already running");if(a===p){if("throw"===i)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:e,done:!0}}for(s.method=i,s.arg=o;;){var r=s.delegate;if(r){var h=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(i,n){var o=n.method,r=i.iterator[o];if(r===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&i.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=e,t(i,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),f);var s=c(r,i.iterator,n.arg);if("throw"===s.type)return n.method="throw",n.arg=s.arg,n.delegate=null,f;var a=s.arg;return a?a.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[i.resultName]=a.value,// Resume execution at the desired location (see delegateYield).
n.next=i.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,f):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,f)}(r,s);if(h){if(h===f)continue;return h}}if("next"===s.method)// function.sent implementation.
s.sent=s._sent=s.arg;else if("throw"===s.method){if(a===d)throw a=p,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);a=_;var u=c(t,n,s);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
a=s.done?p:"suspendedYield",u.arg===f)continue;return{value:u.arg,done:s.done}}"throw"===u.type&&(a=p,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
s.method="throw",s.arg=u.arg)}})}),h)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function c(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",_="executing",p="completed",f={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function m(){}function g(){}function v(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var y={};u(y,s,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(z([])));w&&w!==i&&n.call(w,s)&&// of the polyfill.
(y=w);var x=v.prototype=m.prototype=Object.create(y);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function P(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function T(t,e){var i;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,r){function s(){return new e(function(i,s){!function i(o,r,s,a){var h=c(t[o],t,r);if("throw"===h.type)a(h.arg);else{var u=h.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){i("next",t,s,a)},function(t){i("throw",t,s,a)}):e.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=t,s(u)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return i("throw",t,s,a)})}}(o,r,i,s)})}return i=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
i?i.then(s,// invocations of the iterator.
s):s()}})}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function z(t){if(t||""===t){var i=t[s];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function i(){for(;++o<t.length;)if(n.call(t,o))return i.value=t[o],i.done=!1,i;return i.value=e,i.done=!0,i};return r.next=r}}throw TypeError(typeof t+" is not iterable")}return g.prototype=v,o(x,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:g,configurable:!0}),g.displayName=u(v,h,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,h,"GeneratorFunction")),t.prototype=Object.create(x),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},P(T.prototype),u(T.prototype,a,function(){return this}),t.AsyncIterator=T,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,i,n,o,r){void 0===r&&(r=Promise);var s=new T(l(e,i,n,o),r);return t.isGeneratorFunction(i)?s// If outerFn is a generator, return the full iterator.
:s.next().then(function(t){return t.done?t.value:s.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
P(x),u(x,h,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(x,s,function(){return this}),u(x,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),i=[];for(var n in e)i.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return i.reverse(),function t(){for(;i.length;){var n=i.pop();if(n in e)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=z,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function o(n,o){return a.type="throw",a.arg=t,i.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
i.method="next",i.arg=e),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],a=s.completion;if("root"===s.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(s.tryLoc<=this.prev){var h=n.call(s,"catchLoc"),u=n.call(s,"finallyLoc");if(h&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(h){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else if(u){if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&// location outside the try/catch block.
(r=null);var s=r?r.completion:{};return(s.type=t,s.arg=e,r)?(this.method="next",this.next=r.finallyLoc,f):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),k(i),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var o=n.arg;k(i)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:z(t),resultName:i,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),f}},t}({});try{regeneratorRuntime=iw}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=iw:Function("r","regeneratorRuntime = r")(iw)}const ix=async function(t){try{let e=fetch(t),i=await Promise.race([e,new Promise(function(t,e){setTimeout(function(){e(Error("Request took too long! Timeout after 10 second"))},1e4)})]),n=await i.json();if(!i.ok)throw Error(`${n.message}, ${i.status}`);return n}catch(t){throw t}};var iL={};iL=new URL(x("27Lyk").resolve("kTFvR"),import.meta.url).toString();class iP{_data;render(t){if(this._data=t,!t||Array.isArray(t)&&0===t.length)return this.renderError();let e=this._generateMarkup();if(!render)return e;this._clear,this._parentElement.insertAdjacentHTML("afterbegin",e)}update(t){if(this._data=t,!t||Array.isArray(t)&&0===t.length)return this.renderError();let e=this._generateMarkup(),i=document.createRange().createContextualFragment(e),n=Array.from(i.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));// console.log(newElements);
// console.log(currElements);
n.forEach((t,e)=>{let i=o[e];// ? Updates changed attributes
if(console.log(i,t.isEqualNode(i)),t.isEqualNode(i)||""===t.firstChild.nodeValue.trim()||(console.log(t.firstChild.nodeValue.trim()),i.textContent=t.textContent),!t.isEqualNode(i))for(let e of t.attributes)console.log(Array.from(t.attributes)),console.log(t.attributes),Array.from(t.attributes).forEach(t=>i.setAttribute(t.name,t.value))})}_clear(){this._parentElement.innerHTML=""}renderError(t=this._errorMessage){let e=`<div class="error">
      <div>
      <svg>
      <use href="${/*@__PURE__*/y(iL)}#icon-alert-triangle"></use>
      </svg>
      </div>
      <p>${t}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterBegin",e)}renderMessag(t=this._message){let e=`<div class="error">
      <div>
      <svg>
      <use href="${/*@__PURE__*/y(iL)}#icon-smile"></use>
      </svg>
      </div>
      <p>${t}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterBegin",e)}renderSpinner(){let t=`<div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/y(iL)}#icon-loader"></use>
          </svg>
        </div> `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterBegin",t)}}var iT=new class extends iP{_parentElement="";_generateMarkup(){let t=window.location.hash.slice(1);return`<li class="preview">
          <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="${this._data.id}">
            <figure class="preview__fig">
              <img src="${this._data.image}" alt="${this._data.title}" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${this._data.title}</h4>
              <p class="preview__publisher">${this._data.publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="${/*@__PURE__*/y(iL)}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>`;// return this._data.map(this._generateMarkupPreview).join('');
}};class iM extends iP{_parentElement=document.querySelector(".results");_errorMessage="No data found for your query! Please try again";_message="";_generateMarkup(){return this._data.map(t=>iT.render(t,!1)).join("")}}var ik=new iM;const iS={recipes:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmark:[]},iz=Math.round(50*Math.random()),iE=async function(t){try{let e=await ix(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza/${t}`),{recipes:i}=e.data;iS.recipes={id:i[iz].id,title:i[iz].title,publisher:i[iz].publisher,//   sourceUrl: recipes[ranIndex].source_url,
image:i[iz].image_url},iS.bookmark.some(e=>e.id===t)?iS.recipes.bookmarked=!0:iS.recipes.bookmarked=!1}catch(t){throw alert(`${t} 🤦‍♂️🤷‍♂️❕`),t}},iC=async function(t){try{iS.search.query=t;let e=await ix(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${t}`);iS.search.results=e.data.recipes.map(t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url})),// ? Reset page number
iS.search.page=1}catch(t){throw console.error(`${t} 😁🤷‍♂️🤷‍♀️❕`),t}};iC("avocado");const iO=function(t=iS.search.page){iS.search.page=t;let e=(t-1)*iS.search.resultsPerPage,i=t*iS.search.resultsPerPage;return iS.search.results.slice(e,i)},iZ=function(t){localStorage.setItem("bookmarks",JSON.stringify(iS.bookmark))},iA=function(t){// Add bookmark
iS.bookmark.push(t),t.id===iS.recipes.id&&(iS.recipes.bookmark=!0),iZ()},iI=function(t){// ? Delete a boomark
let e=iS.bookmark.findIndex(e=>e.id===t);iS.bookmark.splice(e,1),t===iS.recipes.id&&(iS.recipes.bookmarked=!1),iZ()};!function(){let t=localStorage.getItem("bookmark");t&&(iS.bookmark=JSON.parse(t))}(),localStorage.clear("bookmark"),(Fraction=function(t,e){/* double argument invocation */if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e){if("number"==typeof(num=t))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var i,n,o=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(o[0]&&(i=o[0]),o[1]&&(n=o[1]),i%1==0&&n&&n.match("/"))return new Fraction(i).add(new Fraction(n));// could not parse
if(!i||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof i&&i.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var r=i.split("/");this.numerator=r[0],this.denominator=r[1];/* string floating point */}else{if("string"==typeof i&&i.match("."))return new Fraction(parseFloat(i));this.numerator=parseInt(i),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,i=this.denominator,n=[];return 0!=t&&n.push(t),0!=e&&n.push((0===t?e:Math.abs(e))+"/"+i),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));// fractions that are equal should have equal normalized forms
var e=this.clone().normalize(),t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(i=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},n=function(t,e){if(!e)return Math.round(t);var i=Math.pow(10,e);return Math.round(t*i)/i},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(i(this.denominator)){var t=n(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),//this.numerator *= scaleup;
this.numerator*=e}if(i(this.numerator)){var t=n(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*e),//this.numerator *= scaleup;
this.denominator*=e}var o=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=o,this.denominator/=o,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(t,e){var i=[],n=Fraction.primeFactors(t),o=Fraction.primeFactors(e);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(t){var e=o.indexOf(t);e>=0&&(i.push(t),o.splice(e,1))}),0===i.length)?1:function(){var t,e=i[0];for(t=1;t<i.length;t++)e*=i[t];return e}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(t){for(var e=Math.abs(t),i=[],n=2;n*n<=e;)e%n==0?(i.push(n),e/=n):n++;// and increment
return 1!=e&&i.push(e),i;// Return the prime factors
},console.log(Fraction);class iB extends iP{_parentElement=document.querySelector(".recipe");_errorMessage="Hey there might be can not help you";_message="";addHandlerRender(t){["hashchange","load"].forEach(e=>window.addEventListener(e,t))}addHandlerAddBookmark(t){this._parentElement.addEventListener("click",function(e){let i=e.target.closest(".btn--bookmark");i&&t()})}_generateMarkup(){return console.log(this._data),`<figure class="recipe__fig">
    <img src="${this._data.image}" alt="${this._data.title}" class="recipe_#img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe_#info">
      <svg class="recipe_#info-icon">
        <use href="${/*@__PURE__*/y(iL)}#icon-clock"></use>
      </svg>
      <span class="recipe_#info-data recipe_#info-data--minutes">45</span>
      <span class="recipe_#info-text">minutes</span>
    </div>
    <div class="recipe_#info">
      <svg class="recipe_#info-icon">
        <use href="${/*@__PURE__*/y(iL)}#icon-users"></use>
      </svg>
      <span class="recipe_#info-data recipe_#info-data--people">4</span>
      <span class="recipe_#info-text">servings</span>

      <div class="recipe_#info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${/*@__PURE__*/y(iL)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${/*@__PURE__*/y(iL)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${/*@__PURE__*/y(iL)}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${/*@__PURE__*/y(iL)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe_#ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe_#ingredient-list">
      <li class="recipe_#ingredient">
        <svg class="recipe_#icon">
          <use href="${/*@__PURE__*/y(iL)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">1000</div>
        <div class="recipe__description">
          <span class="recipe__unit">g</span>
          pasta
        </div>
      </li>

      <li class="recipe_#ingredient">
        <svg class="recipe_#icon">
          <use href="${/*@__PURE__*/y(iL)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">0.5</div>
        <div class="recipe__description">
          <span class="recipe__unit">cup</span>
          ricotta cheese
        </div>
      </li>
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.image}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search_#icon">
        <use href="${/*@__PURE__*/y(iL)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}}var ij=new iB;class iN{#t=document.querySelector(".search");getQuery(){let t=this.#t.querySelector(".search__fienld").value;return this.#e(),t}addHandlerSearch(t){this.#t.addEventListener("submit",function(e){e.preventDefault(),t()})}#e(){return this.#t.querySelector(".search__fienld").value=""}}var iR=new iN;class iD extends iP{_parentElement=document.querySelector(".pagination");addHandlerClick(t){this._parentElement.addEventListener("click",function(e){let i=e.target.closest(".btn--inline");if(!i)return;let n=+i.dataset.goto;t(n)})}_generateMarkup(){let t=this._data.page,e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// ? Page 1, and there are other pages
1===t&&e>1?`<button goto="${t+1}"class="btn--inline pagination__btn--next">
            <span>${t+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(iL)}#icon-arrow-right"></use>
            </svg>
          </button>`:t===e&&e>1||t<e?`<button goto="${t+1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(iL)}#icon-arrow-left"></use>
            </svg>
            <span>${t-1}</span>
          </button>`:void 0)}}var iF=new iD;!function(t){/*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
function e(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++)for(e in o=arguments[i])t[e]=o[e];return t}// @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
var i,n,o,r,s,a,h,u,l,c,d=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
function _(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}// @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)
var p=0;// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.
function f(t){return"_leaflet_id"in t||(t._leaflet_id=++p),t._leaflet_id}// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
function m(t,e,i){var n,o,r,s;return s=function(){// reset lock and call if queued
n=!1,o&&(r.apply(i,o),o=!1)},r=function(){n?o=arguments:(// call and lock until later
t.apply(i,arguments),setTimeout(s,e),n=!0)}}// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
function g(t,e,i){var n=e[1],o=e[0],r=n-o;return t===n&&i?t:((t-o)%r+r)%r+o}// @function falseFn(): Function
// Returns a function which always returns `false`.
function v(){return!1}// @function formatNum(num: Number, precision?: Number|false): Number
// Returns the number `num` rounded with specified `precision`.
// The default `precision` value is 6 decimal places.
// `false` can be passed to skip any processing (can be useful to avoid round-off errors).
function y(t,e){if(!1===e)return t;var i=Math.pow(10,void 0===e?6:e);return Math.round(t*i)/i}// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
function b(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
function w(t){return b(t).split(/\s+/)}// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
function x(t,e){for(var i in Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?d(t.options):{}),e)t.options[i]=e[i];return t.options}// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
function P(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")}var T=/\{ *([\w_ -]+) *\}/g;// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
function M(t,e){return t.replace(T,function(t,i){var n=e[i];if(void 0===n)throw Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(e)),n})}// @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
var k=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
function S(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return -1}// @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).
var z="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";// inspired by https://paulirish.com/2011/requestanimationframe-for-smart-animating/
function E(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var C=0;// fallback for IE 7-8
function O(t){var e=+new Date,i=Math.max(0,16-(e-C));return C=e+i,window.setTimeout(t,i)}var Z=window.requestAnimationFrame||E("RequestAnimationFrame")||O,A=window.cancelAnimationFrame||E("CancelAnimationFrame")||E("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
function I(t,e,i){if(!i||Z!==O)return Z.call(window,_(t,e));t.call(e)}// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
function B(t){t&&A.call(window,t)}// @class Class
// @aka L.Class
// @section
// @uninheritable
// Thanks to John Resig and Dean Edwards for inspiration!
function j(){}j.extend=function(t){// @function extend(props: Object): Function
// [Extends the current class](#class-inheritance) given the properties to be included.
// Returns a Javascript function that is a class constructor (to be called with `new`).
var i=function(){x(this),this.initialize&&this.initialize.apply(this,arguments),// call all constructor hooks
this.callInitHooks()},n=i.__super__=this.prototype,o=d(n);// inherit parent's statics
for(var r in o.constructor=i,i.prototype=o,this)Object.prototype.hasOwnProperty.call(this,r)&&"prototype"!==r&&"__super__"!==r&&(i[r]=this[r]);return t.statics&&e(i,t.statics),t.includes&&(function(t){/* global L: true */if("undefined"!=typeof L&&L&&L.Mixin){t=k(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",Error().stack)}}(t.includes),e.apply(null,[o].concat(t.includes))),// mix given properties into the prototype
e(o,t),delete o.statics,delete o.includes,o.options&&(o.options=n.options?d(n.options):{},e(o.options,t.options)),o._initHooks=[],// add method for calling all hooks
o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=o._initHooks.length;t<e;t++)o._initHooks[t].call(this)}},i},// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
j.include=function(t){var i=this.prototype.options;return e(this.prototype,t),t.options&&(this.prototype.options=i,this.mergeOptions(t.options)),this},// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
j.mergeOptions=function(t){return e(this.prototype.options,t),this},// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
j.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};/*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */var N={/* @method on(type: String, fn: Function, context?: Object): this
  	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
  	 *
  	 * @alternative
  	 * @method on(eventMap: Object): this
  	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  	 */on:function(t,e,i){// types can be a map of types/handlers
if("object"==typeof t)for(var n in t)// it's a hot path since Layer uses the on(obj) syntax
this._on(n,t[n],e);else{// types can be a string of space-separated words
t=w(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,i)}return this},/* @method off(type: String, fn?: Function, context?: Object): this
  	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
  	 *
  	 * @alternative
  	 * @method off(eventMap: Object): this
  	 * Removes a set of type/listener pairs.
  	 *
  	 * @alternative
  	 * @method off: this
  	 * Removes all listeners to all events on the object. This includes implicitly attached events.
  	 */off:function(t,e,i){if(arguments.length){if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else{t=w(t);for(var o=1==arguments.length,r=0,s=t.length;r<s;r++)o?this._off(t[r]):this._off(t[r],e,i)}}else delete this._events;return this},// attach listener (without syntactic sugar now)
_on:function(t,e,i,n){if("function"!=typeof e){console.warn("wrong listener type: "+typeof e);return}// check if fn already there
if(!1===this._listens(t,e,i)){i===this&&(i=void 0);var o={fn:e,ctx:i};n&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,e,i){if(this._events&&(n=this._events[t])){if(1==arguments.length){if(this._firingCount)// so they are not called if remove happens in fire
for(o=0,r=n.length;o<r;o++)n[o].fn=v;// clear all listeners for a type if function isn't specified
delete this._events[t];return}if("function"!=typeof e){console.warn("wrong listener type: "+typeof e);return}// find fn and remove it
var n,o,r,s=this._listens(t,e,i);if(!1!==s){var a=n[s];this._firingCount&&(// set the removed listener to noop so that's not called if remove happens in fire
a.fn=v,/* copy array in case events are being fired */this._events[t]=n=n.slice()),n.splice(s,1)}}},// @method fire(type: String, data?: Object, propagate?: Boolean): this
// Fires an event of the specified type. You can optionally provide a data
// object — the first argument of the listener function will contain its
// properties. The event can optionally be propagated to event parents.
fire:function(t,i,n){if(!this.listens(t,n))return this;var o=e({},i,{type:t,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var r=this._events[t];if(r){this._firingCount=this._firingCount+1||1;for(var s=0,a=r.length;s<a;s++){var h=r[s],u=h.fn;h.once&&this.off(t,u,h.ctx),u.call(h.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},// @method listens(type: String, propagate?: Boolean): Boolean
// @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
// Returns `true` if a particular event type has any listeners attached to it.
// The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
listens:function(t,e,i,n){"string"!=typeof t&&console.warn('"string" type argument expected');// we don't overwrite the input `fn` value, because we need to use it for propagation
var o=e;"function"!=typeof e&&(n=!!e,o=void 0,i=void 0);var r=this._events&&this._events[t];if(r&&r.length&&!1!==this._listens(t,o,i))return!0;if(n){for(var s in this._eventParents)if(this._eventParents[s].listens(t,e,i,n))return!0}return!1},// returns the index (number) or false
_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,r=n.length;o<r;o++)if(n[o].fn===e&&n[o].ctx===i)return o;return!1},// @method once(…): this
// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
once:function(t,e,i){// types can be a map of types/handlers
if("object"==typeof t)for(var n in t)// it's a hot path since Layer uses the on(obj) syntax
this._on(n,t[n],e,!0);else{// types can be a string of space-separated words
t=w(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,i,!0)}return this},// @method addEventParent(obj: Evented): this
// Adds an event parent - an `Evented` that will receive propagated events
addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[f(t)]=t,this},// @method removeEventParent(obj: Evented): this
// Removes an event parent, so it will stop receiving propagated events
removeEventParent:function(t){return this._eventParents&&delete this._eventParents[f(t)],this},_propagateEvent:function(t){for(var i in this._eventParents)this._eventParents[i].fire(t.type,e({layer:t.target,propagatedFrom:t.target},t),!0)}};// aliases; we should ditch those eventually
// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
N.addEventListener=N.on,// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)
// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
N.removeEventListener=N.clearAllEventListeners=N.off,// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
N.addOneTimeEventListener=N.once,// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
N.fireEvent=N.fire,// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
N.hasEventListeners=N.listens;var R=j.extend(N);/*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function D(t,e,i){// @property x: Number; The `x` coordinate of the point
this.x=i?Math.round(t):t,// @property y: Number; The `y` coordinate of the point
this.y=i?Math.round(e):e}var F=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.
// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
function H(t,e,i){return t instanceof D?t:k(t)?new D(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new D(t.x,t.y):new D(t,e,i)}/*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function W(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
function q(t,e){return!t||t instanceof W?t:new W(t,e)}/*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function U(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}// TODO International date line?
// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
function V(t,e){return t instanceof U?t:new U(t,e)}/* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */function G(t,e,i){if(isNaN(t)||isNaN(e))throw Error("Invalid LatLng object: ("+t+", "+e+")");// @property lat: Number
// Latitude in degrees
this.lat=+t,// @property lng: Number
// Longitude in degrees
this.lng=+e,void 0!==i&&(this.alt=+i)}// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.
function $(t,e,i){return t instanceof G?t:k(t)&&"object"!=typeof t[0]?3===t.length?new G(t[0],t[1],t[2]):2===t.length?new G(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new G(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===e?null:new G(t,e,i)}D.prototype={// @method clone(): Point
// Returns a copy of the current point.
clone:function(){return new D(this.x,this.y)},// @method add(otherPoint: Point): Point
// Returns the result of addition of the current and the given points.
add:function(t){// non-destructive, returns a new point
return this.clone()._add(H(t))},_add:function(t){return(// destructive, used directly for performance in situations where it's safe to modify existing point
this.x+=t.x,this.y+=t.y,this)},// @method subtract(otherPoint: Point): Point
// Returns the result of subtraction of the given point from the current.
subtract:function(t){return this.clone()._subtract(H(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},// @method divideBy(num: Number): Point
// Returns the result of division of the current point by the given number.
divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},// @method multiplyBy(num: Number): Point
// Returns the result of multiplication of the current point by the given number.
multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},// @method scaleBy(scale: Point): Point
// Multiply each coordinate of the current point by each coordinate of
// `scale`. In linear algebra terms, multiply the point by the
// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
// defined by `scale`.
scaleBy:function(t){return new D(this.x*t.x,this.y*t.y)},// @method unscaleBy(scale: Point): Point
// Inverse of `scaleBy`. Divide each coordinate of the current point by
// each coordinate of `scale`.
unscaleBy:function(t){return new D(this.x/t.x,this.y/t.y)},// @method round(): Point
// Returns a copy of the current point with rounded coordinates.
round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},// @method floor(): Point
// Returns a copy of the current point with floored coordinates (rounded down).
floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},// @method ceil(): Point
// Returns a copy of the current point with ceiled coordinates (rounded up).
ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},// @method trunc(): Point
// Returns a copy of the current point with truncated coordinates (rounded towards zero).
trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=F(this.x),this.y=F(this.y),this},// @method distanceTo(otherPoint: Point): Number
// Returns the cartesian distance between the current and the given points.
distanceTo:function(t){var e=(t=H(t)).x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},// @method equals(otherPoint: Point): Boolean
// Returns `true` if the given point has the same coordinates.
equals:function(t){return(t=H(t)).x===this.x&&t.y===this.y},// @method contains(otherPoint: Point): Boolean
// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
contains:function(t){return Math.abs((t=H(t)).x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},// @method toString(): String
// Returns a string representation of the point for debugging purposes.
toString:function(){return"Point("+y(this.x)+", "+y(this.y)+")"}},W.prototype={// @method extend(point: Point): this
// Extends the bounds to contain the given point.
// @alternative
// @method extend(otherBounds: Bounds): this
// Extend the bounds to contain the given bounds
extend:function(t){var e,i;if(!t)return this;if(t instanceof D||"number"==typeof t[0]||"x"in t)e=i=H(t);else if(e=(t=q(t)).min,i=t.max,!e||!i)return this;return this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)):(this.min=e.clone(),this.max=i.clone()),this},// @method getCenter(round?: Boolean): Point
// Returns the center point of the bounds.
getCenter:function(t){return H((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},// @method getBottomLeft(): Point
// Returns the bottom-left point of the bounds.
getBottomLeft:function(){return H(this.min.x,this.max.y)},// @method getTopRight(): Point
// Returns the top-right point of the bounds.
getTopRight:function(){return H(this.max.x,this.min.y)},// @method getTopLeft(): Point
// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
getTopLeft:function(){return this.min;// left, top
},// @method getBottomRight(): Point
// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
getBottomRight:function(){return this.max;// right, bottom
},// @method getSize(): Point
// Returns the size of the given bounds
getSize:function(){return this.max.subtract(this.min)},// @method contains(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains(point: Point): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){var e,i;return(t="number"==typeof t[0]||t instanceof D?H(t):q(t))instanceof W?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},// @method intersects(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds
// intersect if they have at least one point in common.
intersects:function(t){t=q(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>=e.x&&n.x<=i.x,s=o.y>=e.y&&n.y<=i.y;return r&&s},// @method overlaps(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds
// overlap if their intersection is an area.
overlaps:function(t){t=q(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>e.x&&n.x<i.x,s=o.y>e.y&&n.y<i.y;return r&&s},// @method isValid(): Boolean
// Returns `true` if the bounds are properly initialized.
isValid:function(){return!!(this.min&&this.max)},// @method pad(bufferRatio: Number): Bounds
// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
// Negative values will retract the bounds.
pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,o=Math.abs(e.y-i.y)*t;return q(H(e.x-n,e.y-o),H(i.x+n,i.y+o))},// @method equals(otherBounds: Bounds): Boolean
// Returns `true` if the rectangle is equivalent to the given bounds.
equals:function(t){return!!t&&(t=q(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight()))}},U.prototype={// @method extend(latlng: LatLng): this
// Extend the bounds to contain the given point
// @alternative
// @method extend(otherBounds: LatLngBounds): this
// Extend the bounds to contain the given bounds
extend:function(t){var e,i,n=this._southWest,o=this._northEast;if(t instanceof G)e=t,i=t;else if(!(t instanceof U))return t?this.extend($(t)||V(t)):this;else if(e=t._southWest,i=t._northEast,!e||!i)return this;return n||o?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),o.lat=Math.max(i.lat,o.lat),o.lng=Math.max(i.lng,o.lng)):(this._southWest=new G(e.lat,e.lng),this._northEast=new G(i.lat,i.lng)),this},// @method pad(bufferRatio: Number): LatLngBounds
// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
// Negative values will retract the bounds.
pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,o=Math.abs(e.lng-i.lng)*t;return new U(new G(e.lat-n,e.lng-o),new G(i.lat+n,i.lng+o))},// @method getCenter(): LatLng
// Returns the center point of the bounds.
getCenter:function(){return new G((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},// @method getSouthWest(): LatLng
// Returns the south-west point of the bounds.
getSouthWest:function(){return this._southWest},// @method getNorthEast(): LatLng
// Returns the north-east point of the bounds.
getNorthEast:function(){return this._northEast},// @method getNorthWest(): LatLng
// Returns the north-west point of the bounds.
getNorthWest:function(){return new G(this.getNorth(),this.getWest())},// @method getSouthEast(): LatLng
// Returns the south-east point of the bounds.
getSouthEast:function(){return new G(this.getSouth(),this.getEast())},// @method getWest(): Number
// Returns the west longitude of the bounds
getWest:function(){return this._southWest.lng},// @method getSouth(): Number
// Returns the south latitude of the bounds
getSouth:function(){return this._southWest.lat},// @method getEast(): Number
// Returns the east longitude of the bounds
getEast:function(){return this._northEast.lng},// @method getNorth(): Number
// Returns the north latitude of the bounds
getNorth:function(){return this._northEast.lat},// @method contains(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle contains the given one.
// @alternative
// @method contains (latlng: LatLng): Boolean
// Returns `true` if the rectangle contains the given point.
contains:function(t){t="number"==typeof t[0]||t instanceof G||"lat"in t?$(t):V(t);var e,i,n=this._southWest,o=this._northEast;return t instanceof U?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=o.lat&&e.lng>=n.lng&&i.lng<=o.lng},// @method intersects(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
intersects:function(t){t=V(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>=e.lat&&n.lat<=i.lat,s=o.lng>=e.lng&&n.lng<=i.lng;return r&&s},// @method overlaps(otherBounds: LatLngBounds): Boolean
// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
overlaps:function(t){t=V(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>e.lat&&n.lat<i.lat,s=o.lng>e.lng&&n.lng<i.lng;return r&&s},// @method toBBoxString(): String
// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,e){return!!t&&(t=V(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e))},// @method isValid(): Boolean
// Returns `true` if the bounds are properly initialized.
isValid:function(){return!!(this._southWest&&this._northEast)}},G.prototype={// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
equals:function(t,e){return!!t&&(t=$(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===e?1e-9:e))},// @method toString(): String
// Returns a string representation of the point (for debugging purposes).
toString:function(t){return"LatLng("+y(this.lat,t)+", "+y(this.lng,t)+")"},// @method distanceTo(otherLatLng: LatLng): Number
// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
distanceTo:function(t){return Y.distance(this,$(t))},// @method wrap(): LatLng
// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
wrap:function(){return Y.wrapLatLng(this)},// @method toBounds(sizeInMeters: Number): LatLngBounds
// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return V([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new G(this.lat,this.lng,this.alt)}};/*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](https://en.wikipedia.org/wiki/Spatial_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */var K={// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
// Projects geographical coordinates into pixel coordinates for a given zoom.
latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},// @method pointToLatLng(point: Point, zoom: Number): LatLng
// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
// zoom into geographical coordinates.
pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},// @method project(latlng: LatLng): Point
// Projects geographical coordinates into coordinates in units accepted for
// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
project:function(t){return this.projection.project(t)},// @method unproject(point: Point): LatLng
// Given a projected coordinate returns the corresponding LatLng.
// The inverse of `project`.
unproject:function(t){return this.projection.unproject(t)},// @method scale(zoom: Number): Number
// Returns the scale used when transforming projected coordinates into
// pixel coordinates for a particular zoom. For example, it returns
// `256 * 2^zoom` for Mercator-based CRS.
scale:function(t){return 256*Math.pow(2,t)},// @method zoom(scale: Number): Number
// Inverse of `scale()`, returns the zoom level corresponding to a scale
// factor of `scale`.
zoom:function(t){return Math.log(t/256)/Math.LN2},// @method getProjectedBounds(zoom: Number): Bounds
// Returns the projection's bounds scaled and transformed for the provided `zoom`.
getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),o=this.transformation.transform(e.max,i);return new W(n,o)},// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates.
// @property code: String
// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
//
// @property wrapLng: Number[]
// An array of two numbers defining whether the longitude (horizontal) coordinate
// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
//
// @property wrapLat: Number[]
// Like `wrapLng`, but for the latitude (vertical) axis.
// wrapLng: [min, max],
// wrapLat: [min, max],
// @property infinite: Boolean
// If true, the coordinate space will be unbounded (infinite in both axes)
infinite:!1,// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where lat and lng has been wrapped according to the
// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
wrapLatLng:function(t){var e=this.wrapLng?g(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?g(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new G(i,e,n)},// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring
// that its center is within the CRS's bounds.
// Only accepts actual `L.LatLngBounds` instances, not arrays.
wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,o=e.lng-i.lng;if(0===n&&0===o)return t;var r=t.getSouthWest(),s=t.getNorthEast(),a=new G(r.lat-n,r.lng-o),h=new G(s.lat-n,s.lng-o);return new U(a,h)}},Y=e({},K,{wrapLng:[-180,180],// Mean Earth Radius, as recommended for use by
// the International Union of Geodesy and Geophysics,
// see https://rosettacode.org/wiki/Haversine_formula
R:6371e3,// distance between two geographical points using spherical law of cosines approximation
distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,r=Math.sin((e.lat-t.lat)*i/2),s=Math.sin((e.lng-t.lng)*i/2),a=r*r+Math.cos(n)*Math.cos(o)*s*s;return this.R*(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)))}}),J={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.sin(Math.max(Math.min(i,t.lat),-i)*e);return new D(this.R*t.lng*e,this.R*Math.log((1+n)/(1-n))/2)},unproject:function(t){var e=180/Math.PI;return new G((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(h=6378137*Math.PI,new W([-h,-h],[h,h]))};/*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
function X(t,e,i,n){if(k(t)){// use array properties
this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}// factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.
// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.
function Q(t,e,i,n){return new X(t,e,i,n)}X.prototype={// @method transform(point: Point, scale?: Number): Point
// Returns a transformed point, optionally multiplied by the given scale.
// Only accepts actual `L.Point` instances, not arrays.
transform:function(t,e){return this._transform(t.clone(),e)},// destructive transform (faster)
_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},// @method untransform(point: Point, scale?: Number): Point
// Returns the reverse transformation of the given point, optionally divided
// by the given scale. Only accepts actual `L.Point` instances, not arrays.
untransform:function(t,e){return e=e||1,new D((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};/*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */var tt=e({},Y,{code:"EPSG:3857",projection:J,transformation:Q(u=.5/(Math.PI*J.R),.5,-u,.5)}),te=e({},tt,{code:"EPSG:900913"});// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:
// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
function ti(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
function tn(t,e){var i,n,o,r,s,a,h="";for(i=0,o=t.length;i<o;i++){for(n=0,r=(s=t[i]).length;n<r;n++)a=s[n],h+=(n?"L":"M")+a.x+" "+a.y;// closes the ring for polygons; "x" is VML syntax
h+=e?tj.svg?"z":"x":""}// SVG complains about empty path strings
return h||"M0 0"}/*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */var to=document.documentElement.style,tr="ActiveXObject"in window,ts=tr&&!document.addEventListener,ta="msLaunchUri"in navigator&&!("documentMode"in document),th=tB("webkit"),tu=tB("android"),tl=tB("android 2")||tB("android 3"),tc=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),t_=tu&&tB("Google")&&tc<537&&!("AudioNode"in window),tp=!!window.opera,tf=!ta&&tB("chrome"),tm=tB("gecko")&&!th&&!tp&&!tr,tg=!tf&&tB("safari"),tv=tB("phantom"),ty="OTransition"in to,tb=0===navigator.platform.indexOf("Win"),tw=tr&&"transition"in to,tx="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!tl,tL="MozPerspective"in to,tP=!window.L_DISABLE_3D&&(tw||tx||tL)&&!ty&&!tv,tT="undefined"!=typeof orientation||tB("mobile"),tM=!window.PointerEvent&&window.MSPointerEvent,tk=!!(window.PointerEvent||tM),tS="ontouchstart"in window||!!window.TouchEvent,tz=!window.L_NO_TOUCH&&(tS||tk),tE=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,tC=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",v,e),window.removeEventListener("testPassiveEventSupport",v,e)}catch(t){// Errors can safely be ignored since this is only a browser support test.
}return t}(),tO=!!document.createElement("canvas").getContext,tZ=!!(document.createElementNS&&ti("svg").createSVGRect),tA=!!tZ&&((l=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(l.firstChild&&l.firstChild.namespaceURI)),tI=!tZ&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}();function tB(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var tj={ie:tr,ielt9:ts,edge:ta,webkit:th,android:tu,android23:tl,androidStock:t_,opera:tp,chrome:tf,gecko:tm,safari:tg,phantom:tv,opera12:ty,win:tb,ie3d:tw,webkit3d:tx,gecko3d:tL,any3d:tP,mobile:tT,mobileWebkit:tT&&th,mobileWebkit3d:tT&&tx,msPointer:tM,pointer:tk,touch:tz,touchNative:tS,mobileOpera:tT&&tp,mobileGecko:tT&&tm,retina:tE,passiveEvents:tC,canvas:tO,svg:tZ,vml:tI,inlineSvg:tA,mac:0===navigator.platform.indexOf("Mac"),linux:0===navigator.platform.indexOf("Linux")},tN=tj.msPointer?"MSPointerDown":"pointerdown",tR=tj.msPointer?"MSPointerMove":"pointermove",tD=tj.msPointer?"MSPointerUp":"pointerup",tF=tj.msPointer?"MSPointerCancel":"pointercancel",tH={touchstart:tN,touchmove:tR,touchend:tD,touchcancel:tF},tW={touchstart:function(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&eL(e),tK(t,e)},touchmove:tK,touchend:tK,touchcancel:tK},tq={},tU=!1;function tV(t){tq[t.pointerId]=t}function tG(t){tq[t.pointerId]&&(tq[t.pointerId]=t)}function t$(t){delete tq[t.pointerId]}function tK(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){for(var i in e.touches=[],tq)e.touches.push(tq[i]);e.changedTouches=[e],t(e)}}/*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
var tY=ei(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),tJ=ei(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),tX="webkitTransition"===tJ||"OTransition"===tJ?tJ+"End":"transitionend";// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
function tQ(t){return"string"==typeof t?document.getElementById(t):t}// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
function t0(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||"auto"===i)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return"auto"===i?null:i}// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
function t1(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}// @function remove(el: HTMLElement)
// Removes `el` from its parent element
function t2(t){var e=t.parentNode;e&&e.removeChild(t)}// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
function t3(t){for(;t.firstChild;)t.removeChild(t.firstChild)}// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
function t5(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
function t8(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
function t4(t,e){if(void 0!==t.classList)return t.classList.contains(e);var i=et(t);return i.length>0&&RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
function t9(t,e){if(void 0!==t.classList)for(var i=w(e),n=0,o=i.length;n<o;n++)t.classList.add(i[n]);else if(!t4(t,e)){var r=et(t);t6(t,(r?r+" ":"")+e)}}// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
function t7(t,e){void 0!==t.classList?t.classList.remove(e):t6(t,b((" "+et(t)+" ").replace(" "+e+" "," ")))}// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
function t6(t,e){void 0===t.className.baseVal?t.className=e:t.className.baseVal=e}// @function getClass(el: HTMLElement): String
// Returns the element's class.
function et(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
function ee(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&function(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";// filters collection throws an error if we try to retrieve a filter that doesn't exist
try{i=t.filters.item(n)}catch(t){// don't set opacity to 1 if we haven't already set an opacity,
// it isn't needed and breaks transparent pngs.
if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}(t,e)}// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
function ei(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
function en(t,e,i){var n=e||new D(0,0);t.style[tY]=(tj.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
function eo(t,e){/*eslint-disable */t._leaflet_pos=e,tj.any3d?en(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
function er(t){// this method is only used for elements previously positioned using setPosition,
// so it's safe to cache the position for performance
return t._leaflet_pos||new D(0,0)}if("onselectstart"in document)i=function(){e_(window,"selectstart",eL)},n=function(){ef(window,"selectstart",eL)};else{var es=ei(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);i=function(){if(es){var t=document.documentElement.style;o=t[es],t[es]="none"}},n=function(){es&&(document.documentElement.style[es]=o,o=void 0)}}// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
function ea(){e_(window,"dragstart",eL)}// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
function eh(){ef(window,"dragstart",eL)}// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
function eu(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(el(),r=t,s=t.style.outlineStyle,t.style.outlineStyle="none",e_(window,"keydown",el))}// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
function el(){r&&(r.style.outlineStyle=s,r=void 0,s=void 0,ef(window,"keydown",el))}// @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.
function ec(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body)return t}// @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
function ed(t){var e=t.getBoundingClientRect();// Read-only in old browsers.
return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}/*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).
// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function e_(t,e,i,n){if(e&&"object"==typeof e)for(var o in e)ev(t,o,e[o],i);else{e=w(e);for(var r=0,s=e.length;r<s;r++)ev(t,e[r],i,n)}return this}var ep="_leaflet_events";// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.
// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
// @alternative
// @function off(el: HTMLElement, types: String): this
// Removes all previously added listeners of given types.
// @alternative
// @function off(el: HTMLElement): this
// Removes all previously added listeners from given HTMLElement
function ef(t,e,i,n){if(1==arguments.length)em(t),delete t[ep];else if(e&&"object"==typeof e)for(var o in e)ey(t,o,e[o],i);else if(e=w(e),2==arguments.length)em(t,function(t){return -1!==S(e,t)});else for(var r=0,s=e.length;r<s;r++)ey(t,e[r],i,n);return this}function em(t,e){for(var i in t[ep]){var n=i.split(/\d/)[0];(!e||e(n))&&ey(t,n,null,null,i)}}var eg={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ev(t,e,i,n){var o=e+f(i)+(n?"_"+f(n):"");if(t[ep]&&t[ep][o])return this;var r=function(e){return i.call(n||t,e||window.event)},s=r;!tj.touchNative&&tj.pointer&&0===e.indexOf("touch")?r=// Provides a touch events wrapper for (ms)pointer events.
// ref https://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890
function(t,e,i){return("touchstart"===e&&(tU||(// we listen document as any drags that end by moving the touch off the screen get fired there
document.addEventListener(tN,tV,!0),document.addEventListener(tR,tG,!0),document.addEventListener(tD,t$,!0),document.addEventListener(tF,t$,!0),tU=!0)),tW[e])?(i=tW[e].bind(this,i),t.addEventListener(tH[e],i,!1),i):(console.warn("wrong event specified:",e),v)}(t,e,r):tj.touch&&"dblclick"===e?r=function(t,e){// Most browsers handle double tap natively
t.addEventListener("dblclick",e);// On some platforms the browser doesn't fire native dblclicks for touch events.
// It seems that in all such cases `detail` property of `click` event is always `1`.
// So here we rely on that fact to avoid excessive 'dblclick' simulation when not needed.
var i,n=0;function o(t){if(1!==t.detail){i=t.detail;// keep in sync to avoid false dblclick in some cases
return}if("mouse"!==t.pointerType&&(!t.sourceCapabilities||t.sourceCapabilities.firesTouchEvents)){// When clicking on an <input>, the browser generates a click on its
// <label> (and vice versa) triggering two clicks in quick succession.
// This ignores clicks on elements which are a label with a 'for'
// attribute (or children of such a label), but not children of
// a <input>.
var o=eT(t);if(!o.some(function(t){return t instanceof HTMLLabelElement&&t.attributes.for})||o.some(function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement})){var r=Date.now();r-n<=200?2==++i&&e(/*
   * Extends the event handling code with double tap support for mobile browsers.
   *
   * Note: currently most browsers fire native dblclick, with only a few exceptions
   * (see https://github.com/Leaflet/Leaflet/issues/7012#issuecomment-595087386)
   */function(t){// in modern browsers `type` cannot be just overridden:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only
var e,i,n={};for(i in t)e=t[i],n[i]=e&&e.bind?e.bind(t):e;return t=n,n.type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}(t)):i=1,n=r}}}return t.addEventListener("click",o),{dblclick:e,simDblclick:o}}(t,r):"addEventListener"in t?"touchstart"===e||"touchmove"===e||"wheel"===e||"mousewheel"===e?t.addEventListener(eg[e]||e,r,!!tj.passiveEvents&&{passive:!1}):"mouseenter"===e||"mouseleave"===e?(r=function(e){ez(t,e=e||window.event)&&s(e)},t.addEventListener(eg[e],r,!1)):t.addEventListener(e,s,!1):t.attachEvent("on"+e,r),t[ep]=t[ep]||{},t[ep][o]=r}function ey(t,e,i,n,o){o=o||e+f(i)+(n?"_"+f(n):"");var r=t[ep]&&t[ep][o];if(!r)return this;!tj.touchNative&&tj.pointer&&0===e.indexOf("touch")?function(t,e,i){if(!tH[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(tH[e],i,!1)}(t,e,r):tj.touch&&"dblclick"===e?(t.removeEventListener("dblclick",r.dblclick),t.removeEventListener("click",r.simDblclick)):"removeEventListener"in t?t.removeEventListener(eg[e]||e,r,!1):t.detachEvent("on"+e,r),t[ep][o]=null}// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
function eb(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).
function ew(t){return ev(t,"wheel",eb),this}// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'dblclick'`, `'contextmenu'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
function ex(t){return e_(t,"mousedown touchstart dblclick contextmenu",eb),t._leaflet_disable_click=!0,this}// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
function eL(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}// @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.
function eP(t){return eL(t),eb(t),this}// @function getPropagationPath(ev: DOMEvent): Array
// Compatibility polyfill for [`Event.composedPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath).
// Returns an array containing the `HTMLElement`s that the given DOM event
// should propagate to (if not stopped).
function eT(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.
function eM(t,e){if(!e)return new D(t.clientX,t.clientY);var i=ed(e),n=i.boundingClientRect;// left and top  values are in page scale (like the event clientX/Y)
return new D(// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
(t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}//  except , Safari and
// We need double the scroll pixels (see #7403 and #4538) for all Browsers
// except OSX (Mac) -> 3x, Chrome running on Linux 1x
var ek=tj.linux&&tj.chrome?window.devicePixelRatio:tj.mac?3*window.devicePixelRatio:window.devicePixelRatio>0?2*window.devicePixelRatio:1;// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a wheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
function eS(t){return tj.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/ek:t.deltaY&&1===t.deltaMode?-(20*t.deltaY):t.deltaY&&2===t.deltaMode?-(60*t.deltaY):t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&32765>Math.abs(t.detail)?-(20*t.detail):t.detail?-(60*(t.detail/32765)):0}// check if element really left/entered the event target (for mouseenter/mouseleave)
function ez(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t}/*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var myPositionMarker = L.marker([48.864716, 2.294694]).addTo(map);
   *
   * myPositionMarker.on("click", function() {
   * 	var pos = map.latLngToLayerPoint(myPositionMarker.getLatLng());
   * 	pos.y -= 25;
   * 	var fx = new L.PosAnimation();
   *
   * 	fx.once('end',function() {
   * 		pos.y += 25;
   * 		fx.run(myPositionMarker._icon, pos, 0.8);
   * 	});
   *
   * 	fx.run(myPositionMarker._icon, pos, 0.3);
   * });
   *
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */var eE=R.extend({// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
// Run an animation of a given element to a new position, optionally setting
// duration in seconds (`0.25` by default) and easing linearity factor (3rd
// argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
// `0.5` by default).
run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=er(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,// @event start: Event
// Fired when the animation starts
this.fire("start"),this._animate()},// @method stop()
// Stops the animation (if currently running).
stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){// animation loop
this._animId=I(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),eo(this._el,i),// @event step: Event
// Fired continuously during the animation.
this.fire("step")},_complete:function(){B(this._animId),this._inProgress=!1,// @event end: Event
// Fired when the animation ends.
this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),eC=R.extend({options:{// @section Map State Options
// @option crs: CRS = L.CRS.EPSG3857
// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
// sure what it means.
crs:tt,// @option center: LatLng = undefined
// Initial geographic center of the map
center:void 0,// @option zoom: Number = undefined
// Initial map zoom level
zoom:void 0,// @option minZoom: Number = *
// Minimum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the lowest of their `minZoom` options will be used instead.
minZoom:void 0,// @option maxZoom: Number = *
// Maximum zoom level of the map.
// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
// the highest of their `maxZoom` options will be used instead.
maxZoom:void 0,// @option layers: Layer[] = []
// Array of layers that will be added to the map initially
layers:[],// @option maxBounds: LatLngBounds = null
// When this option is set, the map restricts the view to the given
// geographical bounds, bouncing the user back if the user tries to pan
// outside the view. To set the restriction dynamically, use
// [`setMaxBounds`](#map-setmaxbounds) method.
maxBounds:void 0,// @option renderer: Renderer = *
// The default method for drawing vector layers on the map. `L.SVG`
// or `L.Canvas` by default depending on browser support.
renderer:void 0,// @section Animation Options
// @option zoomAnimation: Boolean = true
// Whether the map zoom animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
zoomAnimation:!0,// @option zoomAnimationThreshold: Number = 4
// Won't animate zoom if the zoom difference exceeds this value.
zoomAnimationThreshold:4,// @option fadeAnimation: Boolean = true
// Whether the tile fade animation is enabled. By default it's enabled
// in all browsers that support CSS3 Transitions except Android.
fadeAnimation:!0,// @option markerZoomAnimation: Boolean = true
// Whether markers animate their zoom with the zoom animation, if disabled
// they will disappear for the length of the animation. By default it's
// enabled in all browsers that support CSS3 Transitions except Android.
markerZoomAnimation:!0,// @option transform3DLimit: Number = 2^23
// Defines the maximum size of a CSS translation transform. The default
// value should not be changed unless a web browser positions layers in
// the wrong place after doing a large `panBy`.
transform3DLimit:8388608,// @section Interaction Options
// @option zoomSnap: Number = 1
// Forces the map's zoom level to always be a multiple of this, particularly
// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
// By default, the zoom level snaps to the nearest integer; lower values
// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
zoomSnap:1,// @option zoomDelta: Number = 1
// Controls how much the map's zoom level will change after a
// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
zoomDelta:1,// @option trackResize: Boolean = true
// Whether the map automatically handles browser window resize to update itself.
trackResize:!0},initialize:function(t,e){e=x(this,e),// Make sure to assign internal flags at the beginning,
// to avoid inconsistent state in some edge cases.
this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),// hack for https://github.com/Leaflet/Leaflet/issues/1980
this._onResize=_(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),void 0!==e.zoom&&(this._zoom=this._limitZoom(e.zoom)),e.center&&void 0!==e.zoom&&this.setView($(e.center),e.zoom,{reset:!0}),this.callInitHooks(),// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
this._zoomAnimated=tJ&&tj.any3d&&!tj.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),e_(this._proxy,tX,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},// @section Methods for modifying map state
// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) with the given
// animation options.
setView:function(t,i,n){return(i=void 0===i?this._zoom:this._limitZoom(i),t=this._limitCenter($(t),i,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n&&(void 0!==n.animate&&(n.zoom=e({animate:n.animate},n.zoom),n.pan=e({animate:n.animate,duration:n.duration},n.pan)),this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,i,n.zoom):this._tryAnimatedPan(t,n.pan)))?// prevent resize handler call, the view will refresh after animation anyway
clearTimeout(this._sizeTimer):// animation didn't start, just reset the map view
this._resetView(t,i,n.pan&&n.pan.noMoveStart),this},// @method setZoom(zoom: Number, options?: Zoom/pan options): this
// Sets the zoom of the map.
setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},// @method zoomIn(delta?: Number, options?: Zoom options): this
// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomIn:function(t,e){return t=t||(tj.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},// @method zoomOut(delta?: Number, options?: Zoom options): this
// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
zoomOut:function(t,e){return t=t||(tj.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified geographical point on the map
// stationary (e.g. used internally for scroll zoom and double-click zoom).
// @alternative
// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),r=(t instanceof D?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),s=this.containerPointToLatLng(o.add(r));return this.setView(s,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():V(t);var i=H(e.paddingTopLeft||e.padding||[0,0]),n=H(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));if((o="number"==typeof e.maxZoom?Math.min(e.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var r=n.subtract(i).divideBy(2),s=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(s.add(a).divideBy(2).add(r),o),zoom:o}},// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets a map view that contains the given geographical bounds with the
// maximum zoom level possible.
fitBounds:function(t,e){if(!(t=V(t)).isValid())throw Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},// @method fitWorld(options?: fitBounds options): this
// Sets a map view that mostly contains the whole world with the maximum
// zoom level possible.
fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},// @method panTo(latlng: LatLng, options?: Pan options): this
// Pans the map to a given center.
panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},// @method panBy(offset: Point, options?: Pan options): this
// Pans the map by a given number of pixels (animated).
panBy:function(t,e){if(t=H(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");// If we pan too far, Chrome gets issues with tiles
// and makes them disappear or appear in the wrong place (slightly offset) #2602
if(!0!==e.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;// animate pan unless animate: false specified
if(this._panAnim||(this._panAnim=new eE,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),!1!==e.animate){t9(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
// Sets the view of the map (geographical center and zoom) performing a smooth
// pan-zoom animation.
flyTo:function(t,e,i){if(!1===(i=i||{}).animate||!tj.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),o=this.project(t),r=this.getSize(),s=this._zoom;t=$(t),e=void 0===e?s:e;var a=Math.max(r.x,r.y),h=a*this.getZoomScale(s,e),u=o.distanceTo(n)||1;function l(t){var e=t?h:a,i=(h*h-a*a+(t?-1:1)*4.0658689599999995*u*u)/(2*e*2.0164*u),n=Math.sqrt(i*i+1)-i;return n<1e-9?-18:Math.log(n)}function c(t){return(Math.exp(t)-Math.exp(-t))/2}function d(t){return(Math.exp(t)+Math.exp(-t))/2}var _=l(0),p=Date.now(),f=(l(1)-_)/1.42,m=i.duration?1e3*i.duration:1e3*f*.8;return this._moveStart(!0,i.noMoveStart),(function i(){var r,h=(Date.now()-p)/m,l=(1-Math.pow(1-h,1.5))*f;h<=1?(this._flyToFrame=I(i,this),this._move(this.unproject(n.add(o.subtract(n).multiplyBy(a*(d(_)*(c(r=_+1.42*l)/d(r))-c(_))/2.0164/u)),s),this.getScaleZoom(a/(a*(d(_)/d(_+1.42*l))),s),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}).call(this),this},// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},// @method setMaxBounds(bounds: LatLngBounds): this
// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
setMaxBounds:function(t){return(t=V(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid())?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},// @method setMinZoom(zoom: Number): this
// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
setMinZoom:function(t){var e=this.options.minZoom;return(this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom))?this.setZoom(t):this},// @method setMaxZoom(zoom: Number): this
// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
setMaxZoom:function(t){var e=this.options.maxZoom;return(this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom))?this.setZoom(t):this},// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,V(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},// @method panInside(latlng: LatLng, options?: padding options): this
// Pans the map the minimum amount to make the `latlng` visible. Use
// padding options to fit the display to more restricted bounds.
// If `latlng` is already within the (optionally padded) display bounds,
// the map will not be panned.
panInside:function(t,e){var i=H((e=e||{}).paddingTopLeft||e.padding||[0,0]),n=H(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),r=this.project(t),s=this.getPixelBounds(),a=q([s.min.add(i),s.max.subtract(n)]),h=a.getSize();if(!a.contains(r)){this._enforcingBounds=!0;var u=r.subtract(a.getCenter()),l=a.extend(r).getSize().subtract(h);o.x+=u.x<0?-l.x:l.x,o.y+=u.y<0?-l.y:l.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},// @method invalidateSize(options: Zoom/pan options): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default. If `options.pan` is `false`, panning will not occur.
// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
// that it doesn't happen often even if the method is called many
// times in a row.
// @alternative
// @method invalidateSize(animate: Boolean): this
// Checks if the map container size changed and updates the map if so —
// call it after you've changed the map size dynamically, also animating
// pan by default.
invalidateSize:function(t){if(!this._loaded)return this;t=e({animate:!1,pan:!0},!0===t?{animate:!0}:t);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var n=this.getSize(),o=i.divideBy(2).round(),r=n.divideBy(2).round(),s=o.subtract(r);return s.x||s.y?(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(_(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:n})):this},// @section Methods for modifying map state
// @method stop(): this
// Stops the currently running `panTo` or `flyTo` animation, if any.
stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},// @section Geolocation methods
// @method locate(options?: Locate options): this
// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
// and optionally sets the map view to the user's location with respect to
// detection accuracy (or to the world view if geolocation failed).
// Note that, if your page doesn't use HTTPS, this method will fail in
// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
// See `Locate options` for more details.
locate:function(t){if(t=this._locateOptions=e({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=_(this._handleGeolocationResponse,this),n=_(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,n,t):navigator.geolocation.getCurrentPosition(i,n,t),this},// @method stopLocate(): this
// Stops watching location previously initiated by `map.locate({watch: true})`
// and aborts resetting the map view if map.locate was called with
// `{setView: true}`.
stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),// @section Location events
// @event locationerror: ErrorEvent
// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new G(e,i),o=n.toBounds(2*t.coords.accuracy),r=this._locateOptions;if(r.setView){var s=this.getBoundsZoom(o);this.setView(n,r.maxZoom?Math.min(s,r.maxZoom):s)}var a={latlng:n,bounds:o,timestamp:t.timestamp};for(var h in t.coords)"number"==typeof t.coords[h]&&(a[h]=t.coords[h]);// @event locationfound: LocationEvent
// Fired when geolocation (using the [`locate`](#map-locate) method)
// went successfully.
this.fire("locationfound",a)}},// TODO Appropriate docs section?
// @section Other Methods
// @method addHandler(name: String, HandlerClass: Function): this
// Adds a new `Handler` to the map, given its name and constructor function.
addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},// @method remove(): this
// Destroys the map and clears all related event listeners.
remove:function(){var t;if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error("Map container is being reused by another instance");try{// throws error in IE6-8
delete this._container._leaflet_id,delete this._containerId}catch(t){/*eslint-disable */this._container._leaflet_id=void 0,/* eslint-enable */this._containerId=void 0}for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),t2(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(B(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&// @event unload: Event
// Fired when the map is destroyed with [remove](#map-remove) method.
this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)t2(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},// @section Other Methods
// @method createPane(name: String, container?: HTMLElement): HTMLElement
// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
// then returns it. The pane is created as a child of `container`, or
// as a child of the main map pane if not set.
createPane:function(t,e){var i=t1("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),e||this._mapPane);return t&&(this._panes[t]=i),i},// @section Methods for Getting Map State
// @method getCenter(): LatLng
// Returns the geographical center of the map view
getCenter:function(){return(this._checkIfLoaded(),this._lastCenter&&!this._moved())?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},// @method getZoom(): Number
// Returns the current zoom level of the map view
getZoom:function(){return this._zoom},// @method getBounds(): LatLngBounds
// Returns the geographical bounds visible in the current map view
getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new U(e,i)},// @method getMinZoom(): Number
// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},// @method getMaxZoom(): Number
// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
// Returns the maximum zoom level on which the given bounds fit to the map
// view in its entirety. If `inside` (optional) is set to `true`, the method
// instead returns the minimum zoom level on which the map view fits into
// the given bounds in its entirety.
getBoundsZoom:function(t,e,i){t=V(t),i=H(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),r=this.getMaxZoom(),s=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(i),u=q(this.project(a,n),this.project(s,n)).getSize(),l=tj.any3d?this.options.zoomSnap:1,c=h.x/u.x,d=h.y/u.y,_=e?Math.max(c,d):Math.min(c,d);return n=this.getScaleZoom(_,n),l&&(n=Math.round(n/(l/100))*(l/100),n=e?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(r,n))},// @method getSize(): Point
// Returns the current size of the map container (in pixels).
getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new D(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},// @method getPixelBounds(): Bounds
// Returns the bounds of the current map view in projected pixel
// coordinates (sometimes useful in layer and overlay implementations).
getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new W(i,i.add(this.getSize()))},// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
// the map pane? "left point of the map layer" can be confusing, specially
// since there can be negative offsets.
// @method getPixelOrigin(): Point
// Returns the projected pixel coordinates of the top left point of
// the map layer (useful in custom layer and overlay implementations).
getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},// @method getPixelWorldBounds(zoom?: Number): Bounds
// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
// If `zoom` is omitted, the map's current zoom level is used.
getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},// @section Other Methods
// @method getPane(pane: String|HTMLElement): HTMLElement
// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
getPane:function(t){return"string"==typeof t?this._panes[t]:t},// @method getPanes(): Object
// Returns a plain object containing the names of all [panes](#map-pane) as keys and
// the panes as values.
getPanes:function(){return this._panes},// @method getContainer: HTMLElement
// Returns the HTML element that contains the map.
getContainer:function(){return this._container},// @section Conversion Methods
// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
// Returns the scale factor to be applied to a map transition from zoom level
// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
getZoomScale:function(t,e){// TODO replace with universal implementation after refactoring projections
var i=this.options.crs;return e=void 0===e?this._zoom:e,i.scale(t)/i.scale(e)},// @method getScaleZoom(scale: Number, fromZoom: Number): Number
// Returns the zoom level that the map would end up at, if it is at `fromZoom`
// level and everything is scaled by a factor of `scale`. Inverse of
// [`getZoomScale`](#map-getZoomScale).
getScaleZoom:function(t,e){var i=this.options.crs;e=void 0===e?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},// @method project(latlng: LatLng, zoom: Number): Point
// Projects a geographical coordinate `LatLng` according to the projection
// of the map's CRS, then scales it according to `zoom` and the CRS's
// `Transformation`. The result is pixel coordinate relative to
// the CRS origin.
project:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.latLngToPoint($(t),e)},// @method unproject(point: Point, zoom: Number): LatLng
// Inverse of [`project`](#map-project).
unproject:function(t,e){return e=void 0===e?this._zoom:e,this.options.crs.pointToLatLng(H(t),e)},// @method layerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding geographical coordinate (for the current zoom level).
layerPointToLatLng:function(t){var e=H(t).add(this.getPixelOrigin());return this.unproject(e)},// @method latLngToLayerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the [origin pixel](#map-getpixelorigin).
latLngToLayerPoint:function(t){return this.project($(t))._round()._subtract(this.getPixelOrigin())},// @method wrapLatLng(latlng: LatLng): LatLng
// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
// CRS's bounds.
// By default this means longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees.
wrapLatLng:function(t){return this.options.crs.wrapLatLng($(t))},// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
// Returns a `LatLngBounds` with the same size as the given one, ensuring that
// its center is within the CRS's bounds.
// By default this means the center longitude is wrapped around the dateline so its
// value is between -180 and +180 degrees, and the majority of the bounds
// overlaps the CRS's bounds.
wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(V(t))},// @method distance(latlng1: LatLng, latlng2: LatLng): Number
// Returns the distance between two geographical coordinates according to
// the map's CRS. By default this measures distance in meters.
distance:function(t,e){return this.options.crs.distance($(t),$(e))},// @method containerPointToLayerPoint(point: Point): Point
// Given a pixel coordinate relative to the map container, returns the corresponding
// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
containerPointToLayerPoint:function(t){return H(t).subtract(this._getMapPanePos())},// @method layerPointToContainerPoint(point: Point): Point
// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
// returns the corresponding pixel coordinate relative to the map container.
layerPointToContainerPoint:function(t){return H(t).add(this._getMapPanePos())},// @method containerPointToLatLng(point: Point): LatLng
// Given a pixel coordinate relative to the map container, returns
// the corresponding geographical coordinate (for the current zoom level).
containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(H(t));return this.layerPointToLatLng(e)},// @method latLngToContainerPoint(latlng: LatLng): Point
// Given a geographical coordinate, returns the corresponding pixel coordinate
// relative to the map container.
latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint($(t)))},// @method mouseEventToContainerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to the
// map container where the event took place.
mouseEventToContainerPoint:function(t){return eM(t,this._container)},// @method mouseEventToLayerPoint(ev: MouseEvent): Point
// Given a MouseEvent object, returns the pixel coordinate relative to
// the [origin pixel](#map-getpixelorigin) where the event took place.
mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},// @method mouseEventToLatLng(ev: MouseEvent): LatLng
// Given a MouseEvent object, returns geographical coordinate where the
// event took place.
mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},// map initialization methods
_initContainer:function(t){var e=this._container=tQ(t);if(e){if(e._leaflet_id)throw Error("Map container is already initialized.")}else throw Error("Map container not found.");e_(e,"scroll",this._onScroll,this),this._containerId=f(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&tj.any3d,t9(t,"leaflet-container"+(tj.touch?" leaflet-touch":"")+(tj.retina?" leaflet-retina":"")+(tj.ielt9?" leaflet-oldie":"")+(tj.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=t0(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&"sticky"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},// @section
//
// Panes are DOM elements used to control the ordering of layers on the map. You
// can access panes with [`map.getPane`](#map-getpane) or
// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
// [`map.createPane`](#map-createpane) method.
//
// Every map has the following default panes that differ only in zIndex.
//
// @pane mapPane: HTMLElement = 'auto'
// Pane that contains all other map panes
this._mapPane=this.createPane("mapPane",this._container),eo(this._mapPane,new D(0,0)),// @pane tilePane: HTMLElement = 200
// Pane for `GridLayer`s and `TileLayer`s
this.createPane("tilePane"),// @pane overlayPane: HTMLElement = 400
// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
this.createPane("overlayPane"),// @pane shadowPane: HTMLElement = 500
// Pane for overlay shadows (e.g. `Marker` shadows)
this.createPane("shadowPane"),// @pane markerPane: HTMLElement = 600
// Pane for `Icon`s of `Marker`s
this.createPane("markerPane"),// @pane tooltipPane: HTMLElement = 650
// Pane for `Tooltip`s.
this.createPane("tooltipPane"),// @pane popupPane: HTMLElement = 700
// Pane for `Popup`s.
this.createPane("popupPane"),this.options.markerZoomAnimation||(t9(t.markerPane,"leaflet-zoom-hide"),t9(t.shadowPane,"leaflet-zoom-hide"))},// private methods that modify map state
// @section Map state change events
_resetView:function(t,e,i){eo(this._mapPane,new D(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var o=this._zoom!==e;this._moveStart(o,i)._move(t,e)._moveEnd(o),// @event viewreset: Event
// Fired when the map needs to redraw its content (this usually happens
// on map zoom or load). Very useful for creating custom overlays.
this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){void 0===e&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),// @event move: Event
// Fired repeatedly during any movement of the map,
// including pan and fly animations.
this.fire("move",i)),this},_moveEnd:function(t){// @event moveend: Event
// Fired when the center of the map stops changing
// (e.g. user stopped dragging the map or after non-centered zoom).
return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return B(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){eo(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error("Set map center and zoom first.")},// DOM event handling
// @section Interaction events
_initEvents:function(t){this._targets={},this._targets[f(this._container)]=this;var e=t?ef:e_;// @event click: MouseEvent
// Fired when the user clicks (or taps) the map.
// @event dblclick: MouseEvent
// Fired when the user double-clicks (or double-taps) the map.
// @event mousedown: MouseEvent
// Fired when the user pushes the mouse button on the map.
// @event mouseup: MouseEvent
// Fired when the user releases the mouse button on the map.
// @event mouseover: MouseEvent
// Fired when the mouse enters the map.
// @event mouseout: MouseEvent
// Fired when the mouse leaves the map.
// @event mousemove: MouseEvent
// Fired while the mouse moves over the map.
// @event contextmenu: MouseEvent
// Fired when the user pushes the right mouse button on the map, prevents
// default browser context menu from showing if there are listeners on
// this event. Also fired on mobile when the user holds a single touch
// for a second (also called long press).
// @event keypress: KeyboardEvent
// Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
// @event keydown: KeyboardEvent
// Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
// the `keydown` event is fired for keys that produce a character value and for keys
// that do not produce a character value.
// @event keyup: KeyboardEvent
// Fired when the user releases a key from the keyboard while the map is focused.
e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),tj.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){B(this._resizeRequest),this._resizeRequest=I(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&// a pixel offset on very high values, see: https://jsfiddle.net/dg6r5hhb/
this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],o="mouseout"===e||"mouseover"===e,r=t.target||t.srcElement,s=!1;r;){if((i=this._targets[f(r)])&&("click"===e||"preclick"===e)&&this._draggableMoved(i)){// Prevent firing click after you just dragged an object.
s=!0;break}if(i&&i.listens(e,!0)&&(o&&!ez(r,t)||(n.push(i),o))||r===this._container)break;r=r.parentNode}return!n.length&&!s&&!o&&this.listens(e,!0)&&(n=[this]),n},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||"click"===t.type&&this._isClickDisabled(e))){var i=t.type;"mousedown"===i&&eu(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,i,n){if("click"===t.type){// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
// @event preclick: MouseEvent
// Fired before mouse click on the map (sometimes useful when you
// want something to happen on click before any existing click
// handlers start running).
var o=e({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}// Find the layer the event is propagating from and its parents.
var r=this._findEventTargets(t,i);if(n){for(var s=[],a=0;a<n.length;a++)n[a].listens(i,!0)&&s.push(n[a]);r=s.concat(r)}if(r.length){"contextmenu"===i&&eL(t);var h=r[0],u={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var l=h.getLatLng&&(!h._radius||h._radius<=10);u.containerPoint=l?this.latLngToContainerPoint(h.getLatLng()):this.mouseEventToContainerPoint(t),u.layerPoint=this.containerPointToLayerPoint(u.containerPoint),u.latlng=l?h.getLatLng():this.layerPointToLatLng(u.layerPoint)}for(a=0;a<r.length;a++)if(r[a].fire(i,u,!0),u.originalEvent._stopped||!1===r[a].options.bubblingMouseEvents&&-1!==S(this._mouseEvents,i))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},// @section Other Methods
// @method whenReady(fn: Function, context?: Object): this
// Runs the given function `fn` when the map gets initialized with
// a view (center and zoom) and at least one layer, or immediately
// if it's already initialized, optionally passing a function context.
whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},// private methods for getting map state
_getMapPanePos:function(){return er(this._mapPane)||new D(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){return(t&&void 0!==e?this._getNewPixelOrigin(t,e):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return q([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},// layer point of the current center
_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},// offset of the specified place to the current center in pixels
_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},// adjust center for view to get inside bounds
_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),o=this.getSize().divideBy(2),r=new W(n.subtract(o),n.add(o)),s=this._getBoundsOffset(r,i,e);return(// If offset is less than a pixel, ignore.
// This prevents unstable projections from getting into
// an infinite loop of tiny offsets.
1>=Math.abs(s.x)&&1>=Math.abs(s.y)?t:this.unproject(n.add(s),e))},// adjust offset for view to get inside bounds
_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new W(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
_getBoundsOffset:function(t,e,i){var n=q(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),o=n.min.subtract(t.min),r=n.max.subtract(t.max),s=this._rebound(o.x,-r.x),a=this._rebound(o.y,-r.y);return new D(s,a)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=tj.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){t7(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){// difference between the new and current centers in pixels
var i=this._getCenterOffset(t)._trunc();return(// don't animate too far unless animate: true specified in options
!!(!0===(e&&e.animate)||this.getSize().contains(i))&&(this.panBy(i,e),!0))},_createAnimProxy:function(){var t=this._proxy=t1("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var e=this._proxy.style[tY];en(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[tY]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){t2(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();en(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;// don't animate if disabled, not supported or zoom difference is too large
if(i=i||{},!this._zoomAnimated||!1===i.animate||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;// offset is the pixel coords of the zoom origin relative to the current center
var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n);return(// don't animate if the zoom origin isn't within one screen from the current center, unless forced
!!(!0===i.animate||this.getSize().contains(o))&&(I(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0))},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,// remember what center/zoom to set after animation
this._animateToCenter=t,this._animateToZoom=e,t9(this._mapPane,"leaflet-zoom-anim")),// @section Other Events
// @event zoomanim: ZoomAnimEvent
// Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
setTimeout(_(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&t7(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}}),eO=j.extend({// @section
// @aka Control Options
options:{// @option position: String = 'topright'
// The position of the control (one of the map corners). Possible values are `'topleft'`,
// `'topright'`, `'bottomleft'` or `'bottomright'`
position:"topright"},initialize:function(t){x(this,t)},/* @section
  	 * Classes extending L.Control will inherit the following methods:
  	 *
  	 * @method getPosition: string
  	 * Returns the position of the control.
  	 */getPosition:function(){return this.options.position},// @method setPosition(position: string): this
// Sets the position of the control.
setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},// @method getContainer: HTMLElement
// Returns the HTMLElement that contains the control.
getContainer:function(){return this._container},// @method addTo(map: Map): this
// Adds the control to the given map.
addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return t9(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},// @method remove: this
// Removes the control from the map it is currently active on.
remove:function(){return this._map&&(t2(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){// if map exists and event is not a keyboard event
this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),eZ=function(t){return new eO(t)};/* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   *//* @namespace Map
   * @section Methods for Layers and Controls
   */eC.include({// @method addControl(control: Control): this
// Adds the given control to the map
addControl:function(t){return t.addTo(this),this},// @method removeControl(control: Control): this
// Removes the given control from the map
removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=t1("div",e+"control-container",this._container);function n(n,o){var r=e+n+" "+e+o;t[n+o]=t1("div",r,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)t2(this._controlCorners[t]);t2(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});/*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](https://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */var eA=eO.extend({// @section
// @aka Control.Layers options
options:{// @option collapsed: Boolean = true
// If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
collapsed:!0,position:"topright",// @option autoZIndex: Boolean = true
// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
autoZIndex:!0,// @option hideSingleBase: Boolean = false
// If `true`, the base layers in the control will be hidden when there is only one.
hideSingleBase:!1,// @option sortLayers: Boolean = false
// Whether to sort the layers. When `false`, layers will keep the order
// in which they were added to the control.
sortLayers:!1,// @option sortFunction: Function = *
// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
// that will be used for sorting the layers, when `sortLayers` is `true`.
// The function receives both the `L.Layer` instances and their names, as in
// `sortFunction(layerA, layerB, nameA, nameB)`.
// By default, it sorts layers alphabetically by their name.
sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){for(var n in x(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
return eO.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},// @method addBaseLayer(layer: Layer, name: String): this
// Adds a base layer (radio button entry) with the given name to the control.
addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},// @method addOverlay(layer: Layer, name: String): this
// Adds an overlay (checkbox entry) with the given name to the control.
addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},// @method removeLayer(layer: Layer): this
// Remove the given layer from the control.
removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(f(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},// @method expand(): this
// Expand the control container if collapsed.
expand:function(){t9(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(t9(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):t7(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},// @method collapse(): this
// Collapse the control container if expanded.
collapse:function(){return t7(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=t1("div",t),i=this.options.collapsed;// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
e.setAttribute("aria-haspopup",!0),ex(e),ew(e);var n=this._section=t1("section",t+"-list");i&&(this._map.on("click",this.collapse,this),e_(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=t1("a",t+"-toggle",e);o.href="#",o.title="Layers",o.setAttribute("role","button"),e_(o,{keydown:function(t){13===t.keyCode&&this._expandSafely()},// Certain screen readers intercept the key event and instead send a click event
click:function(t){eL(t),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=t1("div",t+"-base",n),this._separator=t1("div",t+"-separator",n),this._overlaysList=t1("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&f(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(_(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;t3(this._baseLayersList),t3(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,o=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(f(t.target)),i=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)},// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
_createRadioElement:function(t,e){var i=document.createElement("div");return i.innerHTML='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",i.firstChild},_addItem:function(t){var e,i=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((e=document.createElement("input")).type="checkbox",e.className="leaflet-control-layers-selector",e.defaultChecked=n):e=this._createRadioElement("leaflet-base-layers_"+f(this),n),this._layerControlInputs.push(e),e.layerId=f(t.layer),e_(e,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;// Helps from preventing layer control flicker when checkboxes are disabled
// https://github.com/Leaflet/Leaflet/issues/2771
var r=document.createElement("span");return i.appendChild(r),r.appendChild(e),r.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){// expanding the control on mobile with a click can cause adding a layer - we don't want this
if(!this._preventClick){var t,e,i=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var r=i.length-1;r>=0;r--)t=i[r],e=this._getLayer(t.layerId).layer,t.checked?n.push(e):t.checked||o.push(e);// Bugfix issue 2318: Should remove all old layers before readding new ones
for(r=0;r<o.length;r++)this._map.hasLayer(o[r])&&this._map.removeLayer(o[r]);for(r=0;r<n.length;r++)this._map.hasLayer(n[r])||this._map.addLayer(n[r]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t,e,i=this._layerControlInputs,n=this._map.getZoom(),o=i.length-1;o>=0;o--)t=i[o],e=this._getLayer(t.layerId).layer,t.disabled=void 0!==e.options.minZoom&&n<e.options.minZoom||void 0!==e.options.maxZoom&&n>e.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,e_(t,"click",eL),this.expand();var e=this;setTimeout(function(){ef(t,"click",eL),e._preventClick=!1})}}),eI=eO.extend({// @section
// @aka Control.Zoom options
options:{position:"topleft",// @option zoomInText: String = '<span aria-hidden="true">+</span>'
// The text set on the 'zoom in' button.
zoomInText:'<span aria-hidden="true">+</span>',// @option zoomInTitle: String = 'Zoom in'
// The title set on the 'zoom in' button.
zoomInTitle:"Zoom in",// @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
// The text set on the 'zoom out' button.
zoomOutText:'<span aria-hidden="true">&#x2212;</span>',// @option zoomOutTitle: String = 'Zoom out'
// The title set on the 'zoom out' button.
zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=t1("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){var r=t1("a",i,n);return r.innerHTML=t,r.href="#",r.title=e,/*
  		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
  		 */r.setAttribute("role","button"),r.setAttribute("aria-label",e),ex(r),e_(r,"click",eP),e_(r,"click",o,this),e_(r,"click",this._refocusOnMap,this),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";t7(this._zoomInButton,e),t7(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(t9(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(t9(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});// @namespace Map
// @section Control options
// @option zoomControl: Boolean = true
// Whether a [zoom control](#control-zoom) is added to the map by default.
eC.mergeOptions({zoomControl:!0}),eC.addInitHook(function(){this.options.zoomControl&&(// @section Controls
// @property zoomControl: Control.Zoom
// The default zoom control (only available if the
// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
this.zoomControl=new eI,this.addControl(this.zoomControl))});/*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */var eB=eO.extend({// @section
// @aka Control.Scale options
options:{position:"bottomleft",// @option maxWidth: Number = 100
// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
maxWidth:100,// @option metric: Boolean = True
// Whether to show the metric scale line (m/km).
metric:!0,// @option imperial: Boolean = True
// Whether to show the imperial scale line (mi/ft).
imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=t1("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=t1("div",e,i)),t.imperial&&(this._iScale=t1("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e,i,n,o=3.2808399*t;o>5280?(e=o/5280,i=this._getRoundNum(e),this._updateScale(this._iScale,i+" mi",i/e)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return e*(i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1)}}),ej=eO.extend({// @section
// @aka Control.Attribution options
options:{position:"bottomright",// @option prefix: String|false = 'Leaflet'
// The HTML text shown before the attributions. Pass `false` to disable.
prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(tj.inlineSvg?'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ':"")+"Leaflet</a>"},initialize:function(t){x(this,t),this._attributions={}},onAdd:function(t){// TODO ugly, refactor
for(var e in t.attributionControl=this,this._container=t1("div","leaflet-control-attribution"),ex(this._container),t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},// @method setPrefix(prefix: String|false): this
// The HTML text shown before the attributions. Pass `false` to disable.
setPrefix:function(t){return this.options.prefix=t,this._update(),this},// @method addAttribution(text: String): this
// Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},// @method removeAttribution(text: String): this
// Removes an attribution text.
removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});// @namespace Map
// @section Control options
// @option attributionControl: Boolean = true
// Whether a [attribution control](#control-attribution) is added to the map by default.
eC.mergeOptions({attributionControl:!0}),eC.addInitHook(function(){this.options.attributionControl&&new ej().addTo(this)}),eO.Layers=eA,eO.Zoom=eI,eO.Scale=eB,eO.Attribution=ej,eZ.layers=function(t,e,i){return new eA(t,e,i)},eZ.zoom=function(t){return new eI(t)},eZ.scale=function(t){return new eB(t)},eZ.attribution=function(t){return new ej(t)};/*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers
var eN=j.extend({initialize:function(t){this._map=t},// @method enable(): this
// Enables the handler
enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},// @method disable(): this
// Disables the handler
disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},// @method enabled(): Boolean
// Returns `true` if the handler is enabled
enabled:function(){return!!this._enabled}});// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.
eN.addTo=function(t,e){return t.addHandler(e,this),this};/*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */var eR=tj.touch?"touchstart mousedown":"mousedown",eD=R.extend({options:{// @section
// @aka Draggable options
// @option clickTolerance: Number = 3
// The max number of pixels a user can shift the mouse pointer during a click
// for it to be considered a valid click (as opposed to a mouse drag).
clickTolerance:3},// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
initialize:function(t,e,i,n){x(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},// @method enable()
// Enables the dragging ability
enable:function(){this._enabled||(e_(this._dragStartTarget,eR,this._onDown,this),this._enabled=!0)},// @method disable()
// Disables the dragging ability
disable:function(){this._enabled&&(eD._dragging===this&&this.finishDrag(!0),ef(this._dragStartTarget,eR,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(!(!this._enabled||(this._moved=!1,t4(this._element,"leaflet-zoom-anim")))){if(t.touches&&1!==t.touches.length){// Finish dragging to avoid conflict with touchZoom
eD._dragging===this&&this.finishDrag();return}if(!eD._dragging&&!t.shiftKey&&(1===t.which||1===t.button||t.touches)&&(eD._dragging=this,this._preventOutline&&eu(this._element),ea(),i(),!this._moving)){// @event down: Event
// Fired when a drag is about to start.
this.fire("down");var e=t.touches?t.touches[0]:t,n=ec(this._element);this._startPoint=new D(e.clientX,e.clientY),this._startPos=er(this._element),// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
this._parentScale=ed(n);var o="mousedown"===t.type;e_(document,o?"mousemove":"touchmove",this._onMove,this),e_(document,o?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&1===t.touches.length?t.touches[0]:t,i=new D(e.clientX,e.clientY)._subtract(this._startPoint);(i.x||i.y)&&(Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(// We assume that the parent container's position, border and scale do not change for the duration of the drag.
// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
// and we can use the cached value for the scale.
i.x/=this._parentScale.x,i.y/=this._parentScale.y,eL(t),this._moved||(// @event dragstart: Event
// Fired when a drag starts
this.fire("dragstart"),this._moved=!0,t9(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),t9(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition()))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};// @event predrag: Event
// Fired continuously during dragging *before* each corresponding
// update of the element's position.
this.fire("predrag",t),eo(this._element,this._newPos),// @event drag: Event
// Fired continuously during dragging.
this.fire("drag",t)},_onUp:function(){// Ignore the event if disabled; this happens in IE11
// under some circumstances, see #3666.
this._enabled&&this.finishDrag()},finishDrag:function(t){t7(document.body,"leaflet-dragging"),this._lastTarget&&(t7(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ef(document,"mousemove touchmove",this._onMove,this),ef(document,"mouseup touchend touchcancel",this._onUp,this),eh(),n();var e=this._moved&&this._moving;this._moving=!1,eD._dragging=!1,e&&// Fired when the drag ends.
this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});/*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   *//* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */function eF(t,e,i){var n,o,r,s,a,h,u,l,c,d=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=e$(t[o],e);// for each edge (left, bottom, right, top)
for(s=0;s<4;s++){for(o=0,l=d[s],n=[],r=(u=t.length)-1;o<u;r=o++)a=t[o],h=t[r],a._code&l?h._code&l||((c=eG(h,a,l,e,i))._code=e$(c,e),n.push(c)):(h._code&l&&((c=eG(h,a,l,e,i))._code=e$(c,e),n.push(c)),n.push(a));t=n}return t}/* @function polygonCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polygon.
   */function eH(t,e){if(!t||0===t.length)throw Error("latlngs not passed");eY(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var i,n,o,r,s,a,h,u,l,c=$([0,0]),d=V(t);d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest())<1700&&(c=eW(t));var _=t.length,p=[];for(i=0;i<_;i++){var f=$(t[i]);p.push(e.project($([f.lat-c.lat,f.lng-c.lng])))}// polygon centroid algorithm;
for(i=0,a=h=u=0,n=_-1;i<_;n=i++)o=p[i],r=p[n],s=o.y*r.x-r.y*o.x,h+=(o.x+r.x)*s,u+=(o.y+r.y)*s,a+=3*s;l=0===a?p[0]:[h/a,u/a];var m=e.unproject(H(l));return $([m.lat+c.lat,m.lng+c.lng])}/* @function centroid(latlngs: LatLng[]): LatLng
   * Returns the 'center of mass' of the passed LatLngs.
   */function eW(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var r=$(t[o]);e+=r.lat,i+=r.lng,n++}return $([e/n,i/n])}/*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.
// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Ramer-Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](https://mourner.github.io/simplify-js/).
function eq(t,e){if(!e||!t.length)return t.slice();var i=e*e;return(// stage 2: Douglas-Peucker simplification
t=// Ramer-Douglas-Peucker simplification, see https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm
function(t,e){var i=t.length,n=new("undefined"!=typeof Uint8Array?Uint8Array:Array)(i);n[0]=n[i-1]=1,function t(e,i,n,o,r){var s,a,h,u=0;for(a=o+1;a<=r-1;a++)(h=eK(e[a],e[o],e[r],!0))>u&&(s=a,u=h);u>n&&(i[s]=1,t(e,i,n,o,s),t(e,i,n,s,r))}(t,n,e,0,i-1);var o,r=[];for(o=0;o<i;o++)n[o]&&r.push(t[o]);return r}(// stage 1: vertex reduction
t=// reduce points that are too close to each other to a single point
function(t,e){for(var i=[t[0]],n=1,o=0,r=t.length;n<r;n++)// square distance (to avoid unnecessary Math.sqrt calls)
(function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n})(t[n],t[o])>e&&(i.push(t[n]),o=n);return o<r-1&&i.push(t[r-1]),i}(t,i),i))}// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.
function eU(t,e,i){return Math.sqrt(eK(t,e,i,!0))}// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.
function eV(t,e,i,n,o){var r,s,h,u=n?a:e$(t,i),l=e$(e,i);for(// save 2nd code to avoid calculating it on the next segment
a=l;;){// if a,b is inside the clip window (trivial accept)
if(!(u|l))return[t,e];// if a,b is outside the clip window (trivial reject)
if(u&l)return!1;h=e$(s=eG(t,e,// other cases
r=u||l,i,o),i),r===u?(t=s,u=h):(e=s,l=h)}}function eG(t,e,i,n,o){var r,s,a=e.x-t.x,h=e.y-t.y,u=n.min,l=n.max;return 8&i?(r=t.x+a*(l.y-t.y)/h,s=l.y):4&i?(r=t.x+a*(u.y-t.y)/h,s=u.y):2&i?(r=l.x,s=t.y+h*(l.x-t.x)/a):1&i&&(r=u.x,s=t.y+h*(u.x-t.x)/a),new D(r,s,o)}function e$(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}// return closest point on segment or distance to that point
function eK(t,e,i,n){var o,r=e.x,s=e.y,a=i.x-r,h=i.y-s,u=a*a+h*h;return u>0&&((o=((t.x-r)*a+(t.y-s)*h)/u)>1?(r=i.x,s=i.y):o>0&&(r+=a*o,s+=h*o)),a=t.x-r,h=t.y-s,n?a*a+h*h:new D(r,s)}// @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.
function eY(t){return!k(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function eJ(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),eY(t)}/* @function polylineCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polyline.
   */function eX(t,e){if(!t||0===t.length)throw Error("latlngs not passed");eY(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var i,n,o,r,s,a,h,u,l=$([0,0]),c=V(t);// tests showed that below 1700 rounding errors are happening
c.getNorthWest().distanceTo(c.getSouthWest())*c.getNorthEast().distanceTo(c.getNorthWest())<1700&&(l=eW(t));var d=t.length,_=[];for(i=0;i<d;i++){var p=$(t[i]);_.push(e.project($([p.lat-l.lat,p.lng-l.lng])))}for(i=0,n=0;i<d-1;i++)n+=_[i].distanceTo(_[i+1])/2;// The line is so small in the current view that all points are on the same pixel.
if(0===n)u=_[0];else for(i=0,r=0;i<d-1;i++)if(s=_[i],a=_[i+1],(r+=o=s.distanceTo(a))>n){h=(r-n)/o,u=[a.x-h*(a.x-s.x),a.y-h*(a.y-s.y)];break}var f=e.unproject(H(u));return $([f.lat+l.lat,f.lng+l.lng])}/*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */var eQ={project:function(t){return new D(t.lng,t.lat)},unproject:function(t){return new G(t.y,t.x)},bounds:new W([-180,-90],[180,90])},e0={R:6378137,R_MINOR:6356752.314245179,bounds:new W([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,r=Math.sqrt(1-o*o),s=r*Math.sin(n);return n=-i*Math.log(Math.max(Math.tan(Math.PI/4-n/2)/Math.pow((1-s)/(1+s),r/2),1e-10)),new D(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,o=this.R_MINOR/n,r=Math.sqrt(1-o*o),s=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(s),h=0,u=.1;h<15&&Math.abs(u)>1e-7;h++)u=Math.PI/2-2*Math.atan(s*(e=Math.pow((1-(e=r*Math.sin(a)))/(1+e),r/2)))-a,a+=u;return new G(a*i,t.x*i/n)}},e1=e({},Y,{code:"EPSG:3395",projection:e0,transformation:Q(c=.5/(Math.PI*e0.R),.5,-c,.5)}),e2=e({},Y,{code:"EPSG:4326",projection:eQ,transformation:Q(1/180,1,-1/180,.5)}),e3=e({},K,{projection:eQ,transformation:Q(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});K.Earth=Y,K.EPSG3395=e1,K.EPSG3857=tt,K.EPSG900913=te,K.EPSG4326=e2,K.Simple=e3;/*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */var e5=R.extend({// Classes extending `L.Layer` will inherit the following options:
options:{// @option pane: String = 'overlayPane'
// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
pane:"overlayPane",// @option attribution: String = null
// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
attribution:null,bubblingMouseEvents:!0},/* @section
  	 * Classes extending `L.Layer` will inherit the following methods:
  	 *
  	 * @method addTo(map: Map|LayerGroup): this
  	 * Adds the layer to the given map or layer group.
  	 */addTo:function(t){return t.addLayer(this),this},// @method remove: this
// Removes the layer from the map it is currently active on.
remove:function(){return this.removeFrom(this._map||this._mapToAdd)},// @method removeFrom(map: Map): this
// Removes the layer from the given map
//
// @alternative
// @method removeFrom(group: LayerGroup): this
// Removes the layer from the given `LayerGroup`
removeFrom:function(t){return t&&t.removeLayer(this),this},// @method getPane(name? : String): HTMLElement
// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[f(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[f(t)],this},// @method getAttribution: String
// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;// check in case layer gets added and then removed before the map is ready
if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});/* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   *//* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */eC.include({// @method addLayer(layer: Layer): this
// Adds the given layer to the map
addLayer:function(t){if(!t._layerAdd)throw Error("The provided object is not a Layer.");var e=f(t);return this._layers[e]||(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},// @method removeLayer(layer: Layer): this
// Removes the given layer from the map.
removeLayer:function(t){var e=f(t);return this._layers[e]&&(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the map
hasLayer:function(t){return f(t) in this._layers},/* @method eachLayer(fn: Function, context?: Object): this
  	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
  	 * ```
  	 * map.eachLayer(function(layer){
  	 *     layer.bindPopup('Hello');
  	 * });
  	 * ```
  	 */eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?k(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[f(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=f(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),e=void 0===o.maxZoom?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});/*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Interactive layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */var e8=e5.extend({initialize:function(t,e){var i,n;if(x(this,e),this._layers={},t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},// @method addLayer(layer: Layer): this
// Adds the given layer to the group.
addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},// @method removeLayer(layer: Layer): this
// Removes the given layer from the group.
// @alternative
// @method removeLayer(id: Number): this
// Removes the layer with the given internal ID from the group.
removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},// @method hasLayer(layer: Layer): Boolean
// Returns `true` if the given layer is currently added to the group.
// @alternative
// @method hasLayer(id: Number): Boolean
// Returns `true` if the given internal ID is currently added to the group.
hasLayer:function(t){return("number"==typeof t?t:this.getLayerId(t))in this._layers},// @method clearLayers(): this
// Removes all the layers from the group.
clearLayers:function(){return this.eachLayer(this.removeLayer,this)},// @method invoke(methodName: String, …): this
// Calls `methodName` on every layer contained in this group, passing any
// additional parameters. Has no effect if the layers contained do not
// implement `methodName`.
invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)(i=this._layers[e])[t]&&i[t].apply(i,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},// @method eachLayer(fn: Function, context?: Object): this
// Iterates over the layers of the group, optionally specifying context of the iterator function.
// ```js
// group.eachLayer(function (layer) {
// 	layer.bindPopup('Hello');
// });
// ```
eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},// @method getLayer(id: Number): Layer
// Returns the layer with the given internal ID.
getLayer:function(t){return this._layers[t]},// @method getLayers(): Layer[]
// Returns an array of all the layers added to the group.
getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},// @method setZIndex(zIndex: Number): this
// Calls `setZIndex` on every layer contained in this group, passing the z-index.
setZIndex:function(t){return this.invoke("setZIndex",t)},// @method getLayerId(layer: Layer): Number
// Returns the internal ID for a layer
getLayerId:function(t){return f(t)}}),e4=e8.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),e8.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),e8.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},// @method setStyle(style: Path options): this
// Sets the given path options to each layer of the group that has a `setStyle` method.
setStyle:function(t){return this.invoke("setStyle",t)},// @method bringToFront(): this
// Brings the layer group to the top of all other layers
bringToFront:function(){return this.invoke("bringToFront")},// @method bringToBack(): this
// Brings the layer group to the back of all other layers
bringToBack:function(){return this.invoke("bringToBack")},// @method getBounds(): LatLngBounds
// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
getBounds:function(){var t=new U;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),e9=j.extend({/* @section
  	 * @aka Icon options
  	 *
  	 * @option iconUrl: String = null
  	 * **(required)** The URL to the icon image (absolute or relative to your script path).
  	 *
  	 * @option iconRetinaUrl: String = null
  	 * The URL to a retina sized version of the icon image (absolute or relative to your
  	 * script path). Used for Retina screen devices.
  	 *
  	 * @option iconSize: Point = null
  	 * Size of the icon image in pixels.
  	 *
  	 * @option iconAnchor: Point = null
  	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
  	 * will be aligned so that this point is at the marker's geographical location. Centered
  	 * by default if size is specified, also can be set in CSS with negative margins.
  	 *
  	 * @option popupAnchor: Point = [0, 0]
  	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
  	 *
  	 * @option tooltipAnchor: Point = [0, 0]
  	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
  	 *
  	 * @option shadowUrl: String = null
  	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
  	 *
  	 * @option shadowRetinaUrl: String = null
  	 *
  	 * @option shadowSize: Point = null
  	 * Size of the shadow image in pixels.
  	 *
  	 * @option shadowAnchor: Point = null
  	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
  	 * as iconAnchor if not specified).
  	 *
  	 * @option className: String = ''
  	 * A custom class name to assign to both icon and shadow images. Empty by default.
  	 */options:{popupAnchor:[0,0],tooltipAnchor:[0,0],// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the tiles.
// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1},initialize:function(t){x(this,t)},// @method createIcon(oldIcon?: HTMLElement): HTMLElement
// Called internally when the icon has to be shown, returns a `<img>` HTML element
// styled according to the options.
createIcon:function(t){return this._createIcon("icon",t)},// @method createShadow(oldIcon?: HTMLElement): HTMLElement
// As `createIcon`, but for the shadow beneath it.
createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&"IMG"===e.tagName?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||""===this.options.crossOrigin)&&(n.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];"number"==typeof n&&(n=[n,n]);var o=H(n),r=H("shadow"===e&&i.shadowAnchor||i.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),r&&(t.style.marginLeft=-r.x+"px",t.style.marginTop=-r.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return(e=e||document.createElement("img")).src=t,e},_getIconUrl:function(t){return tj.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),e7=e9.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){// @option imagePath: String
// `Icon.Default` will try to auto-detect the location of the
// blue icon images. If you are placing these images in a non-standard
// way, set this option to point to the right path.
return"string"!=typeof e7.imagePath&&(e7.imagePath=this._detectIconPath()),(this.options.imagePath||e7.imagePath)+e9.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(t,e,i){var n=e.exec(t);return n&&n[i]};return(t=e(t,/^url\((['"])?(.+)\1\)$/,2))&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=t1("div","leaflet-default-icon-path",document.body),e=t0(t,"background-image")||t0(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e))return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),e6=eN.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new eD(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),t9(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&t7(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,r=er(e._icon),s=i.getPixelBounds(),a=i.getPixelOrigin(),h=q(s.min._subtract(a).add(o),s.max._subtract(a).subtract(o));if(!h.contains(r)){// Compute incremental movement
var u=H((Math.max(h.max.x,r.x)-h.max.x)/(s.max.x-h.max.x)-(Math.min(h.min.x,r.x)-h.min.x)/(s.min.x-h.min.x),(Math.max(h.max.y,r.y)-h.max.y)/(s.max.y-h.max.y)-(Math.min(h.min.y,r.y)-h.min.y)/(s.min.y-h.min.y)).multiplyBy(n);i.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),eo(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=I(this._adjustPan.bind(this,t))}},_onDragStart:function(){// @section Dragging events
// @event dragstart: Event
// Fired when the user starts dragging the marker.
// @event movestart: Event
// Fired when the marker starts moving (because of dragging).
this._oldLatLng=this._marker.getLatLng(),// When using ES6 imports it could not be set when `Popup` was not imported as well
this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(B(this._panRequest),this._panRequest=I(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=er(e._icon),o=e._map.layerPointToLatLng(n);i&&eo(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,// @event drag: Event
// Fired repeatedly while the user drags the marker.
e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){// @event dragend: DragEndEvent
// Fired when the user stops dragging the marker.
B(this._panRequest),// @event moveend: Event
// Fired when the marker stops moving (because of dragging).
delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),it=e5.extend({// @section
// @aka Marker options
options:{// @option icon: Icon = *
// Icon instance to use for rendering the marker.
// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
// If not specified, a common instance of `L.Icon.Default` is used.
icon:new e7,// Option inherited from "Interactive layer" abstract class
interactive:!0,// @option keyboard: Boolean = true
// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
keyboard:!0,// @option title: String = ''
// Text for the browser tooltip that appear on marker hover (no tooltip by default).
// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
title:"",// @option alt: String = 'Marker'
// Text for the `alt` attribute of the icon image.
// [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
alt:"Marker",// @option zIndexOffset: Number = 0
// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
zIndexOffset:0,// @option opacity: Number = 1.0
// The opacity of the marker.
opacity:1,// @option riseOnHover: Boolean = false
// If `true`, the marker will get on top of others when you hover the mouse over it.
riseOnHover:!1,// @option riseOffset: Number = 250
// The z-index offset used for the `riseOnHover` feature.
riseOffset:250,// @option pane: String = 'markerPane'
// `Map pane` where the markers icon will be added.
pane:"markerPane",// @option shadowPane: String = 'shadowPane'
// `Map pane` where the markers shadow will be added.
shadowPane:"shadowPane",// @option bubblingMouseEvents: Boolean = false
// When `true`, a mouse event on this marker will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!1,// @option autoPanOnFocus: Boolean = true
// When `true`, the map will pan whenever the marker is focused (via
// e.g. pressing `tab` on the keyboard) to ensure the marker is
// visible within the map's bounds
autoPanOnFocus:!0,// @section Draggable marker options
// @option draggable: Boolean = false
// Whether the marker is draggable with mouse/touch or not.
draggable:!1,// @option autoPan: Boolean = false
// Whether to pan the map when dragging this marker near its edge or not.
autoPan:!1,// @option autoPanPadding: Point = Point(50, 50)
// Distance (in pixels to the left/right and to the top/bottom) of the
// map edge to start panning the map.
autoPanPadding:[50,50],// @option autoPanSpeed: Number = 10
// Number of pixels the map should pan by.
autoPanSpeed:10},/* @section
  	 *
  	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
  	 */initialize:function(t,e){x(this,e),this._latlng=$(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},// @method getLatLng: LatLng
// Returns the current geographical position of the marker.
getLatLng:function(){return this._latlng},// @method setLatLng(latlng: LatLng): this
// Changes the marker position to the given point.
setLatLng:function(t){var e=this._latlng;// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=$(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},// @method setZIndexOffset(offset: Number): this
// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},// @method getIcon: Icon
// Returns the current icon used by the marker
getIcon:function(){return this.options.icon},// @method setIcon(icon: Icon): this
// Changes the marker icon.
setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),"IMG"===i.tagName&&(i.alt=t.alt||"")),t9(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&e_(i,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),r=!1;o!==this._shadow&&(this._removeShadow(),r=!0),o&&(t9(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&r&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ef(this._icon,"focus",this._panOnFocus,this),t2(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&t2(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&eo(this._icon,t),this._shadow&&eo(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(t9(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),e6)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new e6(this),t&&this.dragging.enable()}},// @method setOpacity(opacity: Number): this
// Changes the opacity of the marker.
setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&ee(this._icon,t),this._shadow&&ee(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?H(e.iconSize):H(0,0),n=e.iconAnchor?H(e.iconAnchor):H(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),ie=e5.extend({// @section
// @aka Path options
options:{// @option stroke: Boolean = true
// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
stroke:!0,// @option color: String = '#3388ff'
// Stroke color
color:"#3388ff",// @option weight: Number = 3
// Stroke width in pixels
weight:3,// @option opacity: Number = 1.0
// Stroke opacity
opacity:1,// @option lineCap: String= 'round'
// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
lineCap:"round",// @option lineJoin: String = 'round'
// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
lineJoin:"round",// @option dashArray: String = null
// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashArray:null,// @option dashOffset: String = null
// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
dashOffset:null,// @option fill: Boolean = depends
// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
fill:!1,// @option fillColor: String = *
// Fill color. Defaults to the value of the [`color`](#path-color) option
fillColor:null,// @option fillOpacity: Number = 0.2
// Fill opacity.
fillOpacity:.2,// @option fillRule: String = 'evenodd'
// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
fillRule:"evenodd",// className: '',
// Option inherited from "Interactive layer" abstract class
interactive:!0,// @option bubblingMouseEvents: Boolean = true
// When `true`, a mouse event on this path will trigger the same event on the map
// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
bubblingMouseEvents:!0},beforeAdd:function(t){// Renderer is set here because we need to call renderer.getEvents
// before this.getEvents.
this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},// @method redraw(): this
// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
redraw:function(){return this._map&&this._renderer._updatePath(this),this},// @method setStyle(style: Path options): this
// Changes the appearance of a Path based on the options in the `Path options` object.
setStyle:function(t){return x(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},// @method bringToFront(): this
// Brings the layer to the top of all path layers.
bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},// @method bringToBack(): this
// Brings the layer to the bottom of all path layers.
bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){// defined in child classes
this._project(),this._update()},_clickTolerance:function(){// used when doing hit detection for Canvas layers
return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ii=ie.extend({// @section
// @aka CircleMarker options
options:{fill:!0,// @option radius: Number = 10
// Radius of the circle marker, in pixels
radius:10},initialize:function(t,e){x(this,e),this._latlng=$(t),this._radius=this.options.radius},// @method setLatLng(latLng: LatLng): this
// Sets the position of a circle marker to a new location.
setLatLng:function(t){var e=this._latlng;// @event move: Event
// Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
return this._latlng=$(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},// @method getLatLng(): LatLng
// Returns the current geographical position of the circle marker
getLatLng:function(){return this._latlng},// @method setRadius(radius: Number): this
// Sets the radius of a circle marker. Units are in pixels.
setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},// @method getRadius(): Number
// Returns the current radius of the circle
getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return ie.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new W(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),io=ii.extend({initialize:function(t,i,n){if("number"==typeof i&&(i=e({},n,{radius:i})),x(this,i),this._latlng=$(t),isNaN(this.options.radius))throw Error("Circle radius cannot be NaN");// @section
// @aka Circle options
// @option radius: Number; Radius of the circle, in meters.
this._mRadius=this.options.radius},// @method setRadius(radius: Number): this
// Sets the radius of a circle. Units are in meters.
setRadius:function(t){return this._mRadius=t,this.redraw()},// @method getRadius(): Number
// Returns the current radius of a circle. Units are in meters.
getRadius:function(){return this._mRadius},// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new U(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:ie.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===Y.distance){var o=Math.PI/180,r=this._mRadius/Y.R/o,s=i.project([e+r,t]),a=i.project([e-r,t]),h=s.add(a).divideBy(2),u=i.unproject(h).lat,l=Math.acos((Math.cos(r*o)-Math.sin(e*o)*Math.sin(u*o))/(Math.cos(e*o)*Math.cos(u*o)))/o;(isNaN(l)||0===l)&&(l=r/Math.cos(Math.PI/180*e)),this._point=h.subtract(i.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-i.project([u,t-l]).x,this._radiusY=h.y-s.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(c).x}this._updateBounds()}}),ir=ie.extend({// @section
// @aka Polyline options
options:{// @option smoothFactor: Number = 1.0
// How much to simplify the polyline on each zoom level. More means
// better performance and smoother look, and less means more accurate representation.
smoothFactor:1,// @option noClip: Boolean = false
// Disable polyline clipping.
noClip:!1},initialize:function(t,e){x(this,e),this._setLatLngs(t)},// @method getLatLngs(): LatLng[]
// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
getLatLngs:function(){return this._latlngs},// @method setLatLngs(latlngs: LatLng[]): this
// Replaces all the points in the polyline with the given array of geographical points.
setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},// @method isEmpty(): Boolean
// Returns `true` if the Polyline has no LatLngs.
isEmpty:function(){return!this._latlngs.length},// @method closestLayerPoint(p: Point): Point
// Returns the point closest to `p` on the Polyline.
closestLayerPoint:function(t){for(var e,i,n=1/0,o=null,r=eK,s=0,a=this._parts.length;s<a;s++)for(var h=this._parts[s],u=1,l=h.length;u<l;u++){var c=r(t,e=h[u-1],i=h[u],!0);c<n&&(n=c,o=r(t,e,i))}return o&&(o.distance=Math.sqrt(n)),o},// @method getCenter(): LatLng
// Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
getCenter:function(){// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw Error("Must add layer to map before using getCenter()");return eX(this._defaultShape(),this._map.options.crs)},// @method getBounds(): LatLngBounds
// Returns the `LatLngBounds` of the path.
getBounds:function(){return this._bounds},// @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
// Adds a given point to the polyline. By default, adds to the first ring of
// the polyline in case of a multi-polyline, but can be overridden by passing
// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
addLatLng:function(t,e){return e=e||this._defaultShape(),t=$(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new U,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return eY(this._latlngs)?this._latlngs:this._latlngs[0]},// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
_convertLatLngs:function(t){for(var e=[],i=eY(t),n=0,o=t.length;n<o;n++)i?(e[n]=$(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new W;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new D(t,t);this._rawPxBounds&&(this._pxBounds=new W([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},// recursively turns latlngs into a set of rings with projected coordinates
_projectLatlngs:function(t,e,i){var n,o,r=t[0]instanceof G,s=t.length;if(r){for(n=0,o=[];n<s;n++)o[n]=this._map.latLngToLayerPoint(t[n]),i.extend(o[n]);e.push(o)}else for(n=0;n<s;n++)this._projectLatlngs(t[n],e,i)},// clip polyline by renderer bounds so that we have less to render for performance
_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip){this._parts=this._rings;return}var e,i,n,o,r,s,a,h=this._parts;for(e=0,n=0,o=this._rings.length;e<o;e++)for(i=0,r=(a=this._rings[e]).length;i<r-1;i++)(s=eV(a[i],a[i+1],t,i,!0))&&(h[n]=h[n]||[],h[n].push(s[0]),(s[1]!==a[i+1]||i===r-2)&&(h[n].push(s[1]),n++))}},// simplify each clipped part of the polyline for performance
_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=eq(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t,e){var i,n,o,r,s,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;// hit detection for polylines
for(i=0,r=this._parts.length;i<r;i++)for(n=0,o=(s=(a=this._parts[i]).length)-1;n<s;o=n++)if((e||0!==n)&&eU(t,a[o],a[n])<=h)return!0;return!1}});// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
ir._flat=eJ;/*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */var is=ir.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},// @method getCenter(): LatLng
// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
getCenter:function(){// throws error when not yet added to map as this center calculation requires projected coordinates
if(!this._map)throw Error("Must add layer to map before using getCenter()");return eH(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=ir.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof G&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){ir.prototype._setLatLngs.call(this,t),eY(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return eY(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){// polygons need a different clipping algorithm so we redefine that
var t=this._renderer._bounds,e=this.options.weight,i=new D(e,e);if(// increase clip padding by stroke width to avoid stroke on clip edges
t=new W(t.min.subtract(i),t.max.add(i)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip){this._parts=this._rings;return}for(var n,o=0,r=this._rings.length;o<r;o++)(n=eF(this._rings[o],t,!0)).length&&this._parts.push(n)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},// Needed by the `Canvas` renderer for interactivity
_containsPoint:function(t){var e,i,n,o,r,s,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;// ray casting algorithm for detecting if point is in polygon
for(o=0,a=this._parts.length;o<a;o++)for(r=0,s=(h=(e=this._parts[o]).length)-1;r<h;s=r++)i=e[r],n=e[s],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);// also check if it's on polygon stroke
return u||ir.prototype._containsPoint.call(this,t,!0)}}),ia=e4.extend({/* @section
  	 * @aka GeoJSON options
  	 *
  	 * @option pointToLayer: Function = *
  	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
  	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
  	 * The default is to spawn a default `Marker`:
  	 * ```js
  	 * function(geoJsonPoint, latlng) {
  	 * 	return L.marker(latlng);
  	 * }
  	 * ```
  	 *
  	 * @option style: Function = *
  	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
  	 * called internally when data is added.
  	 * The default value is to not override any defaults:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return {}
  	 * }
  	 * ```
  	 *
  	 * @option onEachFeature: Function = *
  	 * A `Function` that will be called once for each created `Feature`, after it has
  	 * been created and styled. Useful for attaching events and popups to features.
  	 * The default is to do nothing with the newly created layers:
  	 * ```js
  	 * function (feature, layer) {}
  	 * ```
  	 *
  	 * @option filter: Function = *
  	 * A `Function` that will be used to decide whether to include a feature or not.
  	 * The default is to include all features:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return true;
  	 * }
  	 * ```
  	 * Note: dynamically changing the `filter` option will have effect only on newly
  	 * added data. It will _not_ re-evaluate already included features.
  	 *
  	 * @option coordsToLatLng: Function = *
  	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
  	 * The default is the `coordsToLatLng` static method.
  	 *
  	 * @option markersInheritOptions: Boolean = false
  	 * Whether default Markers for "Point" type Features inherit from group options.
  	 */initialize:function(t,e){x(this,e),this._layers={},t&&this.addData(t)},// @method addData( <GeoJSON> data ): this
// Adds a GeoJSON object to the layer.
addData:function(t){var e,i,n,o=k(t)?t:t.features;if(o){for(e=0,i=o.length;e<i;e++)(// only add this if geometry or geometries are set and not null
(n=o[e]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var r=this.options;if(r.filter&&!r.filter(t))return this;var s=ih(t,r);return s?(s.feature=im(t),s.defaultOptions=s.options,this.resetStyle(s),r.onEachFeature&&r.onEachFeature(t,s),this.addLayer(s)):this},// @method resetStyle( <Path> layer? ): this
// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
// If `layer` is omitted, the style of all features in the current layer is reset.
resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(// reset any custom styles
t.options=e({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},// @method setStyle( <Function> style ): this
// Changes styles of GeoJSON vector layers with the given style function.
setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&("function"==typeof e&&(e=e(t.feature)),t.setStyle(e))}});// @section
// There are several static functions which can be called without instantiating L.GeoJSON:
// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.
function ih(t,e){var i,n,o,r,s="Feature"===t.type?t.geometry:t,a=s?s.coordinates:null,h=[],u=e&&e.pointToLayer,l=e&&e.coordsToLatLng||il;if(!a&&!s)return null;switch(s.type){case"Point":return iu(u,t,i=l(a),e);case"MultiPoint":for(o=0,r=a.length;o<r;o++)i=l(a[o]),h.push(iu(u,t,i,e));return new e4(h);case"LineString":case"MultiLineString":return n=ic(a,"LineString"===s.type?0:1,l),new ir(n,e);case"Polygon":case"MultiPolygon":return n=ic(a,"Polygon"===s.type?1:2,l),new is(n,e);case"GeometryCollection":for(o=0,r=s.geometries.length;o<r;o++){var c=ih({geometry:s.geometries[o],type:"Feature",properties:t.properties},e);c&&h.push(c)}return new e4(h);case"FeatureCollection":for(o=0,r=s.features.length;o<r;o++){var d=ih(s.features[o],e);d&&h.push(d)}return new e4(h);default:throw Error("Invalid GeoJSON object.")}}function iu(t,e,i,n){return t?t(e,i):new it(i,n&&n.markersInheritOptions&&n)}// @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
function il(t){return new G(t[1],t[0],t[2])}// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
function ic(t,e,i){for(var n=[],o=0,r=t.length;o<r;o++)n.push(e?ic(t[o],e-1,i):(i||il)(t[o]));return n}// @function latLngToCoords(latlng: LatLng, precision?: Number|false): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
function id(t,e){return void 0!==(t=$(t)).alt?[y(t.lng,e),y(t.lat,e),y(t.alt,e)]:[y(t.lng,e),y(t.lat,e)]}// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean, precision?: Number|false): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
function i_(t,e,i,n){for(var o=[],r=0,s=t.length;r<s;r++)o.push(e?i_(t[r],eY(t[r])?0:e-1,i,n):id(t[r],n));return!e&&i&&o.length>0&&o.push(o[0].slice()),o}function ip(t,i){return t.feature?e({},t.feature,{geometry:i}):im(i)}// @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.
function im(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var ig={toGeoJSON:function(t){return ip(this,{type:"Point",coordinates:id(this.getLatLng(),t)})}};// @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.
function iv(t,e){return new ia(t,e)}// @namespace Marker
// @section Other methods
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
it.include(ig),// @namespace CircleMarker
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
io.include(ig),ii.include(ig),// @namespace Polyline
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
ir.include({toGeoJSON:function(t){var e=!eY(this._latlngs),i=i_(this._latlngs,e?1:0,!1,t);return ip(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),// @namespace Polygon
// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
is.include({toGeoJSON:function(t){var e=!eY(this._latlngs),i=e&&!eY(this._latlngs[0]),n=i_(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),ip(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),// @namespace LayerGroup
e8.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),ip(this,{type:"MultiPoint",coordinates:e})},// @method toGeoJSON(precision?: Number|false): Object
// Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
// Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===e)return this.toMultiPoint(t);var i="GeometryCollection"===e,n=[];return(this.eachLayer(function(e){if(e.toGeoJSON){var o=e.toGeoJSON(t);if(i)n.push(o.geometry);else{var r=im(o);// Squash nested feature collections
"FeatureCollection"===r.type?n.push.apply(n,r.features):n.push(r)}}}),i)?ip(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});/*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */var iy=e5.extend({// @section
// @aka ImageOverlay options
options:{// @option opacity: Number = 1.0
// The opacity of the image overlay.
opacity:1,// @option alt: String = ''
// Text for the `alt` attribute of the image (useful for accessibility).
alt:"",// @option interactive: Boolean = false
// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
interactive:!1,// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the image.
// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1,// @option errorOverlayUrl: String = ''
// URL to the overlay image to show in place of the overlay that failed to load.
errorOverlayUrl:"",// @option zIndex: Number = 1
// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
zIndex:1,// @option className: String = ''
// A custom class name to assign to the image. Empty by default.
className:""},initialize:function(t,e,i){this._url=t,this._bounds=V(e),x(this,i)},onAdd:function(){!this._image&&(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(t9(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){t2(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},// @method setOpacity(opacity: Number): this
// Sets the opacity of the overlay.
setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},// @method bringToFront(): this
// Brings the layer to the top of all overlays.
bringToFront:function(){return this._map&&t5(this._image),this},// @method bringToBack(): this
// Brings the layer to the bottom of all overlays.
bringToBack:function(){return this._map&&t8(this._image),this},// @method setUrl(url: String): this
// Changes the URL of the image.
setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},// @method setBounds(bounds: LatLngBounds): this
// Update the bounds that this ImageOverlay covers
setBounds:function(t){return this._bounds=V(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @method setZIndex(value: Number): this
// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},// @method getBounds(): LatLngBounds
// Get the bounds that this ImageOverlay covers
getBounds:function(){return this._bounds},// @method getElement(): HTMLElement
// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
// used by this overlay.
getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,e=this._image=t?this._url:t1("img");if(t9(e,"leaflet-image-layer"),this._zoomAnimated&&t9(e,"leaflet-zoom-animated"),this.options.className&&t9(e,this.options.className),e.onselectstart=v,e.onmousemove=v,// @event load: Event
// Fired when the ImageOverlay layer has loaded its image
e.onload=_(this.fire,this,"load"),e.onerror=_(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;en(this._image,i,e)},_reset:function(){var t=this._image,e=new W(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();eo(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){ee(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){// @event error: Event
// Fired when the ImageOverlay layer fails to load its image
this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},// @method getCenter(): LatLng
// Returns the center of the ImageOverlay.
getCenter:function(){return this._bounds.getCenter()}}),ib=iy.extend({// @section
// @aka VideoOverlay options
options:{// @option autoplay: Boolean = true
// Whether the video starts playing automatically when loaded.
// On some browsers autoplay will only work with `muted: true`
autoplay:!0,// @option loop: Boolean = true
// Whether the video will loop back to the beginning when played.
loop:!0,// @option keepAspectRatio: Boolean = true
// Whether the video will save aspect ratio after the projection.
// Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
keepAspectRatio:!0,// @option muted: Boolean = false
// Whether the video starts on mute when loaded.
muted:!1,// @option playsInline: Boolean = true
// Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
playsInline:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,e=this._image=t?this._url:t1("video");if(t9(e,"leaflet-image-layer"),this._zoomAnimated&&t9(e,"leaflet-zoom-animated"),this.options.className&&t9(e,this.options.className),e.onselectstart=v,e.onmousemove=v,// @event load: Event
// Fired when the video has finished loading the first frame
e.onloadeddata=_(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=i.length>0?n:[e.src];return}k(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var r=0;r<this._url.length;r++){var s=t1("source");s.src=this._url[r],e.appendChild(s)}}}),iw=iy.extend({_initImage:function(){var t=this._image=this._url;t9(t,"leaflet-image-layer"),this._zoomAnimated&&t9(t,"leaflet-zoom-animated"),this.options.className&&t9(t,this.options.className),t.onselectstart=v,t.onmousemove=v}}),ix=e5.extend({// @section
// @aka DivOverlay options
options:{// @option interactive: Boolean = false
// If true, the popup/tooltip will listen to the mouse events.
interactive:!1,// @option offset: Point = Point(0, 0)
// The offset of the overlay position.
offset:[0,0],// @option className: String = ''
// A custom CSS class name to assign to the overlay.
className:"",// @option pane: String = undefined
// `Map pane` where the overlay will be added.
pane:void 0,// @option content: String|HTMLElement|Function = ''
// Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
// passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
content:""},initialize:function(t,e){t&&(t instanceof G||k(t))?(this._latlng=$(t),x(this,e)):(x(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},// @method openOn(map: Map): this
// Adds the overlay to the map.
// Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},// @method close(): this
// Closes the overlay.
// Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
// and `layer.closePopup()`/`.closeTooltip()`.
close:function(){return this._map&&this._map.removeLayer(this),this},// @method toggle(layer?: Layer): this
// Opens or closes the overlay bound to layer depending on its current state.
// Argument may be omitted only for overlay bound to layer.
// Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),// open the overlay on the map
this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&ee(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&ee(this._container,1),this.bringToFront(),this.options.interactive&&(t9(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(ee(this._container,0),this._removeTimeout=setTimeout(_(t2,void 0,this._container),200)):t2(this._container),this.options.interactive&&(t7(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},// @namespace DivOverlay
// @method getLatLng: LatLng
// Returns the geographical point of the overlay.
getLatLng:function(){return this._latlng},// @method setLatLng(latlng: LatLng): this
// Sets the geographical point where the overlay will open.
setLatLng:function(t){return this._latlng=$(t),this._map&&(this._updatePosition(),this._adjustPan()),this},// @method getContent: String|HTMLElement
// Returns the content of the overlay.
getContent:function(){return this._content},// @method setContent(htmlContent: String|HTMLElement|Function): this
// Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
// The function should return a `String` or `HTMLElement` to be used in the overlay.
setContent:function(t){return this._content=t,this.update(),this},// @method getElement: String|HTMLElement
// Returns the HTML container of the overlay.
getElement:function(){return this._container},// @method update: null
// Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @method isOpen: Boolean
// Returns `true` when the overlay is visible on the map.
isOpen:function(){return!!this._map&&this._map.hasLayer(this)},// @method bringToFront: this
// Brings this overlay in front of other overlays (in the same map pane).
bringToFront:function(){return this._map&&t5(this._container),this},// @method bringToBack: this
// Brings this overlay to the back of other overlays (in the same map pane).
bringToBack:function(){return this._map&&t8(this._container),this},// prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof e4){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;// Unable to get source layer.
// set overlay source to this layer
this._source=e}if(!t){if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw Error("Unable to get source layer LatLng.")}return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}// @namespace DivOverlay
// @section DivOverlay events
// @event contentupdate: Event
// Fired when the content of the overlay is updated
this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=H(this.options.offset),i=this._getAnchor();this._zoomAnimated?eo(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;// bottom position the overlay in case the height of the overlay changes (images loading etc)
this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});eC.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),e5.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(x(o,n),o._source=this):(o=e&&!n?e:new t(n,this)).setContent(i),o}});/*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   *
   * A popup can be also standalone:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   * or
   * ```js
   * var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */// @namespace Popup
var iL=ix.extend({// @section
// @aka Popup options
options:{// @option pane: String = 'popupPane'
// `Map pane` where the popup will be added.
pane:"popupPane",// @option offset: Point = Point(0, 7)
// The offset of the popup position.
offset:[0,7],// @option maxWidth: Number = 300
// Max width of the popup, in pixels.
maxWidth:300,// @option minWidth: Number = 50
// Min width of the popup, in pixels.
minWidth:50,// @option maxHeight: Number = null
// If set, creates a scrollable container of the given height
// inside a popup if its content exceeds it.
// The scrollable container can be styled using the
// `leaflet-popup-scrolled` CSS class selector.
maxHeight:null,// @option autoPan: Boolean = true
// Set it to `false` if you don't want the map to do panning animation
// to fit the opened popup.
autoPan:!0,// @option autoPanPaddingTopLeft: Point = null
// The margin between the popup and the top left corner of the map
// view after autopanning was performed.
autoPanPaddingTopLeft:null,// @option autoPanPaddingBottomRight: Point = null
// The margin between the popup and the bottom right corner of the map
// view after autopanning was performed.
autoPanPaddingBottomRight:null,// @option autoPanPadding: Point = Point(5, 5)
// Equivalent of setting both top left and bottom right autopan padding to the same value.
autoPanPadding:[5,5],// @option keepInView: Boolean = false
// Set it to `true` if you want to prevent users from panning the popup
// off of the screen while it is open.
keepInView:!1,// @option closeButton: Boolean = true
// Controls the presence of a close button in the popup.
closeButton:!0,// @option autoClose: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the popup closing when another popup is opened.
autoClose:!0,// @option closeOnEscapeKey: Boolean = true
// Set it to `false` if you want to override the default behavior of
// the ESC key for closing of the popup.
closeOnEscapeKey:!0,// @option closeOnClick: Boolean = *
// Set it if you want to override the default behavior of the popup closing when user clicks
// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
// @option className: String = ''
// A custom CSS class name to assign to the popup.
className:""},// @namespace Popup
// @method openOn(map: Map): this
// Alternative to `map.openPopup(popup)`.
// Adds the popup to the map and closes the previous one.
openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,ix.prototype.openOn.call(this,t)},onAdd:function(t){ix.prototype.onAdd.call(this,t),// @namespace Map
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup is opened in the map
t.fire("popupopen",{popup:this}),!this._source||(// @namespace Layer
// @section Popup events
// @event popupopen: PopupEvent
// Fired when a popup bound to this layer is opened
this._source.fire("popupopen",{popup:this},!0),this._source instanceof ie||this._source.on("preclick",eb))},onRemove:function(t){ix.prototype.onRemove.call(this,t),// @namespace Map
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup in the map is closed
t.fire("popupclose",{popup:this}),!this._source||(// @namespace Layer
// @section Popup events
// @event popupclose: PopupEvent
// Fired when a popup bound to this layer is closed
this._source.fire("popupclose",{popup:this},!0),this._source instanceof ie||this._source.off("preclick",eb))},getEvents:function(){var t=ix.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=t1("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=t1("div",t+"-content-wrapper",e);if(this._contentNode=t1("div",t+"-content",i),ex(e),ew(this._contentNode),e_(e,"contextmenu",eb),this._tipContainer=t1("div",t+"-tip-container",e),this._tip=t1("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=t1("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',e_(n,"click",function(t){eL(t),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.max(i=Math.min(i,this.options.maxWidth),this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,o=this.options.maxHeight,r="leaflet-popup-scrolled";o&&n>o?(e.height=o+"px",t9(t,r)):t7(t,r),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();eo(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){// We can endlessly recurse if keepInView is set and the view resets.
// Let's guard against that by exiting early if we're responding to our own autopan.
if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(t0(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,o=new D(this._containerLeft,-i-this._containerBottom);o._add(er(this._container));var r=t.layerPointToContainerPoint(o),s=H(this.options.autoPanPadding),a=H(this.options.autoPanPaddingTopLeft||s),h=H(this.options.autoPanPaddingBottomRight||s),u=t.getSize(),l=0,c=0;r.x+n+h.x>u.x&&(l=r.x+n-u.x+h.x),r.x-l-a.x<0&&(l=r.x-a.x),r.y+i+h.y>u.y&&(c=r.y+i-u.y+h.y),r.y-c-a.y<0&&(c=r.y-a.y),(l||c)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([l,c]))}},_getAnchor:function(){// Where should we anchor the popup on the source layer?
return H(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});/* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */eC.mergeOptions({closePopupOnClick:!0}),// @namespace Map
// @section Methods for Layers and Controls
eC.include({// @method openPopup(popup: Popup): this
// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
// @alternative
// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
// Creates a popup with the specified content and options and opens it in the given point on a map.
openPopup:function(t,e,i){return this._initOverlay(iL,t,e,i).openOn(this),this},// @method closePopup(popup?: Popup): this
// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),/*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */// @section Popup methods
e5.include({// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
// Binds a popup to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindPopup:function(t,e){return this._popup=this._initOverlay(iL,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},// @method unbindPopup(): this
// Removes the popup previously bound with `bindPopup`.
unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},// @method openPopup(latlng?: LatLng): this
// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
openPopup:function(t){return this._popup&&(this instanceof e4||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},// @method closePopup(): this
// Closes the popup bound to this layer if it is open.
closePopup:function(){return this._popup&&this._popup.close(),this},// @method togglePopup(): this
// Opens or closes the popup bound to this layer depending on its current state.
togglePopup:function(){return this._popup&&this._popup.toggle(this),this},// @method isPopupOpen(): boolean
// Returns `true` if the popup bound to this layer is currently open.
isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},// @method setPopupContent(content: String|HTMLElement|Popup): this
// Sets the content of the popup bound to this layer.
setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},// @method getPopup(): Popup
// Returns the popup bound to this layer.
getPopup:function(){return this._popup},_openPopup:function(t){if(this._popup&&this._map){// prevent map click
eP(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof ie)){// treat it like a marker and figure out
// if we should toggle it open/closed
this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});/*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   * If you want to just bind a tooltip to marker:
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Path overlays like polylines also have a `bindTooltip` method.
   *
   * A tooltip can be also standalone:
   *
   * ```js
   * var tooltip = L.tooltip()
   * 	.setLatLng(latlng)
   * 	.setContent('Hello world!<br />This is a nice tooltip.')
   * 	.addTo(map);
   * ```
   * or
   * ```js
   * var tooltip = L.tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'})
   * 	.addTo(map);
   * ```
   *
   *
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */// @namespace Tooltip
var iP=ix.extend({// @section
// @aka Tooltip options
options:{// @option pane: String = 'tooltipPane'
// `Map pane` where the tooltip will be added.
pane:"tooltipPane",// @option offset: Point = Point(0, 0)
// Optional offset of the tooltip position.
offset:[0,0],// @option direction: String = 'auto'
// Direction where to open the tooltip. Possible values are: `right`, `left`,
// `top`, `bottom`, `center`, `auto`.
// `auto` will dynamically switch between `right` and `left` according to the tooltip
// position on the map.
direction:"auto",// @option permanent: Boolean = false
// Whether to open the tooltip permanently or only on mouseover.
permanent:!1,// @option sticky: Boolean = false
// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
sticky:!1,// @option opacity: Number = 0.9
// Tooltip container opacity.
opacity:.9},onAdd:function(t){ix.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),// @namespace Map
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip is opened in the map.
t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),// @namespace Layer
// @section Tooltip events
// @event tooltipopen: TooltipEvent
// Fired when a tooltip bound to this layer is opened.
this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){ix.prototype.onRemove.call(this,t),// @namespace Map
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip in the map is closed.
t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),// @namespace Layer
// @section Tooltip events
// @event tooltipclose: TooltipEvent
// Fired when a tooltip bound to this layer is closed.
this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=ix.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=t1("div",t),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,o=this._container,r=n.latLngToContainerPoint(n.getCenter()),s=n.layerPointToContainerPoint(t),a=this.options.direction,h=o.offsetWidth,u=o.offsetHeight,l=H(this.options.offset),c=this._getAnchor();"top"===a?(e=h/2,i=u):"bottom"===a?(e=h/2,i=0):("center"===a?e=h/2:"right"===a?e=0:"left"===a?e=h:s.x<r.x?(a="right",e=0):(a="left",e=h+(l.x+c.x)*2),i=u/2),t=t.subtract(H(e,i,!0)).add(l).add(c),t7(o,"leaflet-tooltip-right"),t7(o,"leaflet-tooltip-left"),t7(o,"leaflet-tooltip-top"),t7(o,"leaflet-tooltip-bottom"),t9(o,"leaflet-tooltip-"+a),eo(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&ee(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){// Where should we anchor the tooltip on the source layer?
return H(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});// @namespace Map
// @section Methods for Layers and Controls
eC.include({// @method openTooltip(tooltip: Tooltip): this
// Opens the specified tooltip.
// @alternative
// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
// Creates a tooltip with the specified content and options and open it.
openTooltip:function(t,e,i){return this._initOverlay(iP,t,e,i).openOn(this),this},// @method closeTooltip(tooltip: Tooltip): this
// Closes the tooltip given as parameter.
closeTooltip:function(t){return t.close(),this}}),/*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */// @section Tooltip methods
e5.include({// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
// Binds a tooltip to the layer with the passed `content` and sets up the
// necessary event listeners. If a `Function` is passed it will receive
// the layer as the first argument and should return a `String` or `HTMLElement`.
bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(iP,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},// @method unbindTooltip(): this
// Removes the tooltip previously bound with `bindTooltip`.
unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,e.click=this._openTooltip,this._map?this._addFocusListeners():e.add=this._addFocusListeners),this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),this[t?"off":"on"](e),this._tooltipHandlersAdded=!t}},// @method openTooltip(latlng?: LatLng): this
// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
openTooltip:function(t){return this._tooltip&&(this instanceof e4||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(// open the tooltip on the map
this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},// @method closeTooltip(): this
// Closes the tooltip bound to this layer if it is open.
closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},// @method toggleTooltip(): this
// Opens or closes the tooltip bound to this layer depending on its current state.
toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},// @method isTooltipOpen(): boolean
// Returns `true` if the tooltip bound to this layer is currently open.
isTooltipOpen:function(){return this._tooltip.isOpen()},// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
// Sets the content of the tooltip bound to this layer.
setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},// @method getTooltip(): Tooltip
// Returns the tooltip bound to this layer.
getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&(e_(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),e_(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e="function"==typeof t.getElement&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(this._tooltip&&this._map){// If the map is moving, we will show the tooltip after it's done.
if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e,i,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(e=this._map.mouseEventToContainerPoint(t.originalEvent),i=this._map.containerPointToLayerPoint(e),n=this._map.layerPointToLatLng(i)),this._tooltip.setLatLng(n)}});/*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */var iT=e9.extend({options:{// @section
// @aka DivIcon options
iconSize:[12,12],// iconAnchor: (Point),
// popupAnchor: (Point),
// @option html: String|HTMLElement = ''
// Custom HTML code to put inside the div element, empty by default. Alternatively,
// an instance of `HTMLElement`.
html:!1,// @option bgPos: Point = [0, 0]
// Optional relative position of the background, in pixels
bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&"DIV"===t.tagName?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(t3(e),e.appendChild(i.html)):e.innerHTML=!1!==i.html?i.html:"",i.bgPos){var n=H(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});e9.Default=e7;/*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */var iM=e5.extend({// @section
// @aka GridLayer options
options:{// @option tileSize: Number|Point = 256
// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
tileSize:256,// @option opacity: Number = 1.0
// Opacity of the tiles. Can be used in the `createTile()` function.
opacity:1,// @option updateWhenIdle: Boolean = (depends)
// Load new tiles only when panning ends.
// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
updateWhenIdle:tj.mobile,// @option updateWhenZooming: Boolean = true
// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
updateWhenZooming:!0,// @option updateInterval: Number = 200
// Tiles will not update more than once every `updateInterval` milliseconds when panning.
updateInterval:200,// @option zIndex: Number = 1
// The explicit zIndex of the tile layer.
zIndex:1,// @option bounds: LatLngBounds = undefined
// If set, tiles will only be loaded inside the set `LatLngBounds`.
bounds:null,// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,// @option maxZoom: Number = undefined
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:void 0,// @option maxNativeZoom: Number = undefined
// Maximum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
// from `maxNativeZoom` level and auto-scaled.
maxNativeZoom:void 0,// @option minNativeZoom: Number = undefined
// Minimum zoom number the tile source has available. If it is specified,
// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
// from `minNativeZoom` level and auto-scaled.
minNativeZoom:void 0,// @option noWrap: Boolean = false
// Whether the layer is wrapped around the antimeridian. If `true`, the
// GridLayer will only be displayed once at low zoom levels. Has no
// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
// tiles outside the CRS limits.
noWrap:!1,// @option pane: String = 'tilePane'
// `Map pane` where the grid layer will be added.
pane:"tilePane",// @option className: String = ''
// A custom class name to assign to the tile layer. Empty by default.
className:"",// @option keepBuffer: Number = 2
// When panning the map, keep this many rows and columns of tiles before unloading them.
keepBuffer:2},initialize:function(t){x(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),t2(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},// @method bringToFront: this
// Brings the tile layer to the top of all tile layers.
bringToFront:function(){return this._map&&(t5(this._container),this._setAutoZIndex(Math.max)),this},// @method bringToBack: this
// Brings the tile layer to the bottom of all tile layers.
bringToBack:function(){return this._map&&(t8(this._container),this._setAutoZIndex(Math.min)),this},// @method getContainer: HTMLElement
// Returns the HTML element that contains the tiles for this layer.
getContainer:function(){return this._container},// @method setOpacity(opacity: Number): this
// Changes the [opacity](#gridlayer-opacity) of the grid layer.
setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},// @method setZIndex(zIndex: Number): this
// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},// @method isLoading: Boolean
// Returns `true` if any tile in the grid layer has not finished loading.
isLoading:function(){return this._loading},// @method redraw: this
// Causes the layer to clear all the tiles and request them again.
redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},// @section Extension methods
// Layers extending `GridLayer` shall reimplement the following method.
// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, must be overridden by classes extending `GridLayer`.
// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
// is specified, it must be called when the tile has finished loading and drawing.
createTile:function(){return document.createElement("div")},// @section
// @method getTileSize: Point
// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
getTileSize:function(){var t=this.options.tileSize;return t instanceof D?t:new D(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-1/0,1/0),o=0,r=i.length;o<r;o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!tj.ielt9){ee(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var r=Math.min(1,(t-o.loaded)/200);ee(o.el,r),r<1?e=!0:(o.active?i=!0:this._onOpaqueTile(o),o.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(B(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this))}},_onOpaqueTile:v,_initContainer:function(){this._container||(this._container=t1("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(void 0!==t){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(t2(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=t1("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),// force the browser to consider the newly added element for transition
v(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:v,_onRemoveLevel:v,_onCreateLevel:v,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)(e=this._tiles[t]).retain=e.current;for(t in this._tiles)if((e=this._tiles[t]).current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)t2(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var o=Math.floor(t/2),r=Math.floor(e/2),s=i-1,a=new D(+o,+r);a.z=+s;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),s>n&&this._retainParent(o,r,s,n))},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var r=2*e;r<2*e+2;r++){var s=new D(o,r);s.z=i+1;var a=this._tileCoordsToKey(s),h=this._tiles[a];if(h&&h.active){h.retain=!0;continue}h&&h.loaded&&(h.retain=!0),i+1<n&&this._retainChildren(o,r,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return void 0!==e.minNativeZoom&&t<e.minNativeZoom?e.minNativeZoom:void 0!==e.maxNativeZoom&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e);o=void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom?void 0:this._clampZoom(o);var r=this.options.updateWhenZooming&&o!==this._tileZoom;(!n||r)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),i||this._pruneTiles(),// Flag to prevent _updateOpacity from pruning tiles during
// a zoom anim or a pinch gesture
this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();tj.any3d?en(t.el,o,n):eo(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),o=e.project(t,this._tileZoom).floor(),r=e.getSize().divideBy(2*n);return new W(o.subtract(r),o.add(r))},// Private method to load tiles in the grid's active zoom level according to map bounds
_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(void 0===t&&(t=e.getCenter()),void 0!==this._tileZoom){// if out of minzoom/maxzoom
var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),r=o.getCenter(),s=[],a=this.options.keepBuffer,h=new W(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));// Sanity check: panic if the tile range contains Infinity somewhere.
if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new D(l.x,l.y))||(this._tiles[u].current=!1)}// _update just loads more tiles. If the tile zoom level differs too much
// from the map's, let _setView reset levels and prune old tiles.
if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}// create a queue of coordinates to load tiles from
for(var c=o.min.y;c<=o.max.y;c++)for(var d=o.min.x;d<=o.max.x;d++){var _=new D(d,c);if(_.z=this._tileZoom,this._isValidTile(_)){var p=this._tiles[this._tileCoordsToKey(_)];p?p.current=!0:s.push(_)}}if(// sort tile queue to load tiles in order of their distance to center
s.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)}),0!==s.length){// if it's the first batch of tiles to load
this._loading||(this._loading=!0,// @event loading: Event
// Fired when the grid layer starts loading tiles.
this.fire("loading"));// create DOM fragment to append tiles in one batch
var f=document.createDocumentFragment();for(d=0;d<s.length;d++)this._addTile(s[d],f);this._level.el.appendChild(f)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){// don't load tile if it's out of bounds and not wrapped
var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;// don't load tile if it doesn't intersect the bounds in options
var n=this._tileCoordsToBounds(t);return V(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),o=n.add(i);return[e.unproject(n,t.z),e.unproject(o,t.z)]},// converts tile coordinates to its geographical bounds
_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new U(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},// converts tile coordinates to key for the tile cache
_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},// converts tile cache key to coordinates
_keyToTileCoords:function(t){var e=t.split(":"),i=new D(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(t2(e.el),delete this._tiles[t],// @event tileunload: TileEvent
// Fired when a tile is removed (e.g. when a tile goes off the screen).
this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){t9(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=v,t.onmousemove=v,tj.ielt9&&this.options.opacity<1&&ee(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),_(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&I(_(this._tileReady,this,t,null,o)),eo(o,i),// save tile in cache
this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),// @event tileloadstart: TileEvent
// Fired when a tile is requested and starts loading.
this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&// Fired when there is an error loading a tile.
this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);(i=this._tiles[n])&&(i.loaded=+new Date,this._map._fadeAnimated?(ee(i.el,0),B(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(t9(i.el,"leaflet-tile-loaded"),// @event tileload: TileEvent
// Fired when a tile loads.
this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,// @event load: Event
// Fired when the grid layer loaded all visible tiles.
this.fire("load"),tj.ielt9||!this._map._fadeAnimated?I(this._pruneTiles,this):// to trigger a pruning.
setTimeout(_(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new D(this._wrapX?g(t.x,this._wrapX):t.x,this._wrapY?g(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new W(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),ik=iM.extend({// @section
// @aka TileLayer options
options:{// @option minZoom: Number = 0
// The minimum zoom level down to which this layer will be displayed (inclusive).
minZoom:0,// @option maxZoom: Number = 18
// The maximum zoom level up to which this layer will be displayed (inclusive).
maxZoom:18,// @option subdomains: String|String[] = 'abc'
// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
subdomains:"abc",// @option errorTileUrl: String = ''
// URL to the tile image to show in place of the tile that failed to load.
errorTileUrl:"",// @option zoomOffset: Number = 0
// The zoom number used in tile URLs will be offset with this value.
zoomOffset:0,// @option tms: Boolean = false
// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
tms:!1,// @option zoomReverse: Boolean = false
// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
zoomReverse:!1,// @option detectRetina: Boolean = false
// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
detectRetina:!1,// @option crossOrigin: Boolean|String = false
// Whether the crossOrigin attribute will be added to the tiles.
// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
crossOrigin:!1,// @option referrerPolicy: Boolean|String = false
// Whether the referrerPolicy attribute will be added to the tiles.
// If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
// This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
// (e.g. to validate an API token).
// Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
referrerPolicy:!1},initialize:function(t,e){this._url=t,(e=x(this,e)).detectRetina&&tj.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},// @method setUrl(url: String, noRedraw?: Boolean): this
// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
// If the URL does not change, the layer will not be redrawn unless
// the noRedraw parameter is set to false.
setUrl:function(t,e){return this._url===t&&void 0===e&&(e=!0),this._url=t,e||this.redraw(),this},// @method createTile(coords: Object, done?: Function): HTMLElement
// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
// callback is called when the tile has been loaded.
createTile:function(t,e){var i=document.createElement("img");return e_(i,"load",_(this._tileOnLoad,this,e,i)),e_(i,"error",_(this._tileOnError,this,e,i)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),"string"==typeof this.options.referrerPolicy&&(i.referrerPolicy=this.options.referrerPolicy),// The alt attribute is set to the empty string,
// allowing screen readers to ignore the decorative image tiles.
// https://www.w3.org/WAI/tutorials/images/decorative/
// https://www.w3.org/TR/html-aria/#el-img-empty-alt
i.alt="",i.src=this.getTileUrl(t),i},// @section Extension methods
// @uninheritable
// Layers extending `TileLayer` might reimplement the following method.
// @method getTileUrl(coords: Object): String
// Called only internally, returns the URL for a tile given its coordinates.
// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
getTileUrl:function(t){var i={r:tj.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(i.y=n),i["-y"]=n}return M(this._url,e(i,this.options))},_tileOnLoad:function(t,e){// For https://github.com/Leaflet/Leaflet/issues/3332
tj.ielt9?setTimeout(_(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},// stops loading all tiles in the background layer
_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&((e=this._tiles[t].el).onload=v,e.onerror=v,!e.complete)){e.src=z;var i=this._tiles[t].coords;t2(e),delete this._tiles[t],// @event tileabort: TileEvent
// Fired when a tile was loading but is now not wanted.
this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return(// Cancels any pending http requests associated with the tile
e.el.setAttribute("src",z),iM.prototype._removeTile.call(this,t))},_tileReady:function(t,e,i){if(this._map&&(!i||i.getAttribute("src")!==z))return iM.prototype._tileReady.call(this,t,e,i)}});// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
// Instantiates a tile layer object given a `URL template` and optionally an options object.
function iS(t,e){return new ik(t,e)}/*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */var iz=ik.extend({// @section
// @aka TileLayer.WMS options
// If any custom options not documented here are used, they will be sent to the
// WMS server as extra parameters in each request URL. This can be useful for
// [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
defaultWmsParams:{service:"WMS",request:"GetMap",// @option layers: String = ''
// **(required)** Comma-separated list of WMS layers to show.
layers:"",// @option styles: String = ''
// Comma-separated list of WMS styles.
styles:"",// @option format: String = 'image/jpeg'
// WMS image format (use `'image/png'` for layers with transparency).
format:"image/jpeg",// @option transparent: Boolean = false
// If `true`, the WMS service will return images with transparency.
transparent:!1,// @option version: String = '1.1.1'
// Version of the WMS service to use
version:"1.1.1"},options:{// @option crs: CRS = null
// Coordinate Reference System to use for the WMS requests, defaults to
// map CRS. Don't change this if you're not sure what it means.
crs:null,// @option uppercase: Boolean = false
// If `true`, WMS request parameter keys will be uppercase.
uppercase:!1},initialize:function(t,i){this._url=t;var n=e({},this.defaultWmsParams);// all keys that are not TileLayer options go to WMS params
for(var o in i)o in this.options||(n[o]=i[o]);var r=(i=x(this,i)).detectRetina&&tj.retina?2:1,s=this.getTileSize();n.width=s.x*r,n.height=s.y*r,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,ik.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=q(i.project(e[0]),i.project(e[1])),o=n.min,r=n.max,s=(this._wmsVersion>=1.3&&this._crs===e2?[o.y,o.x,r.y,r.x]:[o.x,o.y,r.x,r.y]).join(","),a=ik.prototype.getTileUrl.call(this,t);return a+P(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+s},// @method setParams(params: Object, noRedraw?: Boolean): this
// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
setParams:function(t,i){return e(this.wmsParams,t),i||this.redraw(),this}});ik.WMS=iz,iS.wms=// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
function(t,e){return new iz(t,e)};/*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */var iE=e5.extend({// @section
// @aka Renderer options
options:{// @option padding: Number = 0.1
// How much to extend the clip area around the map view (relative to its size)
// e.g. 0.1 would be 10% of map view in each direction
padding:.1},initialize:function(t){x(this,t),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),// always keep transform-origin as 0 0
t9(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),r=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));tj.any3d?en(this._container,r,i):eo(this._container,r)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
// Subclasses are responsible of firing the 'update' event.
var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new W(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),iC=iE.extend({// @section
// @aka Canvas options
options:{// @option tolerance: Number = 0
// How much to extend the click tolerance around a path/object on the map.
tolerance:0},getEvents:function(){var t=iE.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
this._postponeUpdatePaths=!0},onAdd:function(){iE.prototype.onAdd.call(this),// Redraw vectors since canvas is cleared upon removal,
// in case of removing the renderer itself from the map.
this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");e_(t,"mousemove",this._onMouseMove,this),e_(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),e_(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){B(this._redrawRequest),delete this._ctx,t2(this._container),ef(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){iE.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=tj.retina?2:1;eo(e,t.min),// set canvas size (also clearing it); use double size on retina
e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",tj.retina&&this._ctx.scale(2,2),// translate so we use the same path coordinates after canvas element moves
this._ctx.translate(-t.min.x,-t.min.y),// Tell paths to redraw themselves
this.fire("update")}},_reset:function(){iE.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[f(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[f(t)],this._requestRedraw(t)},_updatePath:function(t){// Redraw the union of the layer's old pixel
// bounds and the new pixel bounds.
this._extendRedrawBounds(t),t._project(),t._update(),// The redraw will extend the redraw bounds
// with the new pixel bounds.
this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var e,i,n=t.options.dashArray.split(/[, ]+/),o=[];for(i=0;i<n.length;i++){// Ignore dash array containing invalid lengths
if(isNaN(e=Number(n[i])))return;o.push(e)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||I(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new W,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,r,s=t._parts,a=s.length,h=this._ctx;if(a){for(h.beginPath(),i=0;i<a;i++){for(n=0,o=s[i].length;n<o;n++)r=s[i][n],h[n?"lineTo":"moveTo"](r.x,r.y);e&&h.closePath()}this._fillStroke(h,t)}}// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;1!==o&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!==o&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},// Canvas obviously doesn't have mouse events for individual drawn objects,
// so we emulate that by calculating what's under the mouse on mousemove/click manually
_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(n)&&(!("click"===t.type||"preclick"===t.type)||!this._map._draggableMoved(e))&&(i=e);this._fireEvent(!!i&&[i],t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving())&&!this._map._animatingZoom){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(// if we're leaving the layer, fire mouseout
t7(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(t9(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(!!this._hoveredLayer&&[this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(_(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(!i)return;i.prev=n,n?n.next=i:i&&// single entry
(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(!n)return;n.next=i,i?i.prev=n:n&&// single entry
(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});// @factory L.canvas(options?: Renderer options)
// Creates a Canvas renderer with the given options.
function iO(t){return tj.canvas?new iC(t):null}/*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */var iZ=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){// Do not return fn from catch block so `e` can be garbage collected
// See https://github.com/Leaflet/Leaflet/pull/7279
}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),iA=tj.vml?iZ:ti,iI=iE.extend({_initContainer:function(){this._container=iA("svg"),// makes it possible to click through svg root; we'll reset it back in individual paths
this._container.setAttribute("pointer-events","none"),this._rootGroup=iA("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){t2(this._container),ef(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!this._map._animatingZoom||!this._bounds){iE.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),// movement: update container viewBox so that we don't have to change coordinates of individual layers
eo(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},// methods below are called by vector layers implementations
_initPath:function(t){var e=t._path=iA("path");t.options.className&&t9(e,t.options.className),t.options.interactive&&t9(e,"leaflet-interactive"),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){t2(t._path),t.removeInteractiveTarget(t._path),delete this._layers[f(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,tn(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,o="a"+i+","+n+" 0 1,0 ",r=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+2*i+",0 "+o+-(2*i)+",0 ";this._setPath(t,r)},_setPath:function(t,e){t._path.setAttribute("d",e)},// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
_bringToFront:function(t){t5(t._path)},_bringToBack:function(t){t8(t._path)}});// @namespace SVG
// @factory L.svg(options?: Renderer options)
// Creates a SVG renderer with the given options.
function iB(t){return tj.svg||tj.vml?new iI(t):null}tj.vml&&iI.include({_initContainer:function(){this._container=t1("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(iE.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=iZ("shape");t9(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=iZ("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;t2(e),t.removeInteractiveTarget(e),delete this._layers[f(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e||(e=t._stroke=iZ("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=k(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=iZ("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){t5(t._container)},_bringToBack:function(t){t8(t._container)}}),eC.include({// @namespace Map; @method getRenderer(layer: Path): Renderer
// Returns the instance of `Renderer` that should be used to render the given
// `Path`. It will ensure that the `renderer` options of the map and paths
// are respected, and that the renderers do exist on the map.
getRenderer:function(t){// @namespace Path; @option renderer: Renderer
// Use this specific instance of `Renderer` for this path. Takes
// precedence over the map's [default renderer](#map-renderer).
var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var e=this._paneRenderers[t];return void 0===e&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){// @namespace Map; @option preferCanvas: Boolean = false
// Whether `Path`s should be rendered on a `Canvas` renderer.
// By default, all `Path`s are rendered in a `SVG` renderer.
return this.options.preferCanvas&&iO(t)||iB(t)}});/*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   *//*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */var ij=is.extend({initialize:function(t,e){is.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},// @method setBounds(latLngBounds: LatLngBounds): this
// Redraws the rectangle with the passed bounds.
setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=V(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});iI.create=iA,iI.pointsToPath=tn,ia.geometryToLayer=ih,ia.coordsToLatLng=il,ia.coordsToLatLngs=ic,ia.latLngToCoords=id,ia.latLngsToCoords=i_,ia.getFeature=ip,ia.asFeature=im,/*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */// @namespace Map
// @section Interaction Options
eC.mergeOptions({// @option boxZoom: Boolean = true
// Whether the map can be zoomed to a rectangular area specified by
// dragging the mouse while pressing the shift key.
boxZoom:!0});var iN=eN.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){e_(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ef(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){t2(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;// Clear the deferred resetState if it hasn't executed yet, otherwise it
// will interrupt the interaction and orphan a box element in the container.
this._clearDeferredResetState(),this._resetState(),i(),ea(),this._startPoint=this._map.mouseEventToContainerPoint(t),e_(document,{contextmenu:eP,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=t1("div","leaflet-zoom-box",this._container),t9(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new W(this._point,this._startPoint),i=e.getSize();eo(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(t2(this._box),t7(this._container,"leaflet-crosshair")),n(),eh(),ef(document,{contextmenu:eP,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){// Postpone to next JS tick so internal click event handling
// still see it as "moved".
this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(_(this._resetState,this),0);var e=new U(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){27===t.keyCode&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});// @section Handlers
// @property boxZoom: Handler
// Box (shift-drag with mouse) zoom handler.
eC.addInitHook("addHandler","boxZoom",iN),/*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */// @namespace Map
// @section Interaction Options
eC.mergeOptions({// @option doubleClickZoom: Boolean|String = true
// Whether the map can be zoomed in by double clicking on it and
// zoomed out by double clicking while holding shift. If passed
// `'center'`, double-click zoom will zoom to the center of the
//  view regardless of where the mouse was.
doubleClickZoom:!0});var iR=eN.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});// @section Handlers
//
// Map properties include interaction handlers that allow you to control
// interaction behavior in runtime, enabling or disabling certain features such
// as dragging or touch zoom (see `Handler` methods). For example:
//
// ```js
// map.doubleClickZoom.disable();
// ```
//
// @property doubleClickZoom: Handler
// Double click zoom handler.
eC.addInitHook("addHandler","doubleClickZoom",iR),/*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */// @namespace Map
// @section Interaction Options
eC.mergeOptions({// @option dragging: Boolean = true
// Whether the map is draggable with mouse/touch or not.
dragging:!0,// @section Panning Inertia Options
// @option inertia: Boolean = *
// If enabled, panning of the map will have an inertia effect where
// the map builds momentum while dragging and continues moving in
// the same direction for some time. Feels especially nice on touch
// devices. Enabled by default.
inertia:!0,// @option inertiaDeceleration: Number = 3000
// The rate with which the inertial movement slows down, in pixels/second².
inertiaDeceleration:3400,// @option inertiaMaxSpeed: Number = Infinity
// Max speed of the inertial movement, in pixels/second.
inertiaMaxSpeed:1/0,// @option easeLinearity: Number = 0.2
easeLinearity:.2,// TODO refactor, move to CRS
// @option worldCopyJump: Boolean = false
// With this option enabled, the map tracks when you pan to another "copy"
// of the world and seamlessly jumps to the original one so that all overlays
// like markers and vector layers are still visible.
worldCopyJump:!1,// @option maxBoundsViscosity: Number = 0.0
// If `maxBounds` is set, this option will control how solid the bounds
// are when dragging the map around. The default value of `0.0` allows the
// user to drag outside the bounds at normal speed, higher values will
// slow down map dragging outside bounds, and `1.0` makes the bounds fully
// solid, preventing the user from dragging outside the bounds.
maxBoundsViscosity:0});var iD=eN.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new eD(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}t9(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){t7(this._map._container,"leaflet-grab"),t7(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=V(this._map.options.maxBounds);this._offsetLimit=q(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){// TODO refactor to be able to adjust map pane position after zoom
var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,r=(n+e+i)%t-e-i;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=Math.abs(o+i)<Math.abs(r+i)?o:r},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,s=i.easeLinearity,a=o.multiplyBy(s/r),h=a.distanceTo([0,0]),u=Math.min(i.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(i.inertiaDeceleration*s),d=l.multiplyBy(-c/2).round();d.x||d.y?(d=e._limitOffset(d,e.options.maxBounds),I(function(){e.panBy(d,{duration:c,easeLinearity:s,noMoveStart:!0,animate:!0})})):e.fire("moveend")}}});// @section Handlers
// @property dragging: Handler
// Map dragging handler (by both mouse and touch).
eC.addInitHook("addHandler","dragging",iD),/*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */// @namespace Map
// @section Keyboard Navigation Options
eC.mergeOptions({// @option keyboard: Boolean = true
// Makes the map focusable and allows users to navigate the map with keyboard
// arrows and `+`/`-` keys.
keyboard:!0,// @option keyboardPanDelta: Number = 80
// Amount of pixels to pan when pressing an arrow key.
keyboardPanDelta:80});var iF=eN.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),e_(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ef(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;e<i;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;e<i;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;e<i;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;e<i;e++)n[o.up[e]]=[0,-1*t]},_setZoomDelta:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;e<i;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;e<i;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){e_(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ef(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!t.altKey&&!t.ctrlKey&&!t.metaKey){var e,i=t.keyCode,n=this._map;if(i in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress){if(e=this._panKeys[i],t.shiftKey&&(e=H(e).multiplyBy(3)),n.options.maxBounds&&(e=n._limitOffset(H(e),n.options.maxBounds)),n.options.worldCopyJump){var o=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(e)));n.panTo(o)}else n.panBy(e)}}else if(i in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[i]);else{if(27!==i||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}eP(t)}}});// @section Handlers
// @section Handlers
// @property keyboard: Handler
// Keyboard navigation handler.
eC.addInitHook("addHandler","keyboard",iF),/*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */// @namespace Map
// @section Interaction Options
eC.mergeOptions({// @section Mouse wheel options
// @option scrollWheelZoom: Boolean|String = true
// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
// it will zoom to the center of the view regardless of where the mouse was.
scrollWheelZoom:!0,// @option wheelDebounceTime: Number = 40
// Limits the rate at which a wheel can fire (in milliseconds). By default
// user can't zoom via wheel more often than once per 40 ms.
wheelDebounceTime:40,// @option wheelPxPerZoomLevel: Number = 60
// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
// mean a change of one full zoom level. Smaller values will make wheel-zooming
// faster (and vice versa).
wheelPxPerZoomLevel:60});var iH=eN.extend({addHooks:function(){e_(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ef(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=eS(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(_(this._performZoom,this),n),eP(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();// map the delta with a sigmoid function to -4..4 range leaning on -1..1
var n=4*Math.log(2/(1+Math.exp(-Math.abs(this._delta/(4*this._map.options.wheelPxPerZoomLevel)))))/Math.LN2,o=i?Math.ceil(n/i)*i:n,r=t._limitZoom(e+(this._delta>0?o:-o))-e;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(e+r):t.setZoomAround(this._lastMousePos,e+r))}});// @section Handlers
// @property scrollWheelZoom: Handler
// Scroll wheel zoom handler.
eC.addInitHook("addHandler","scrollWheelZoom",iH),// @namespace Map
// @section Interaction Options
eC.mergeOptions({// @section Touch interaction options
// @option tapHold: Boolean
// Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
tapHold:tj.touchNative&&tj.safari&&tj.mobile,// @option tapTolerance: Number = 15
// The max number of pixels a user can shift his finger during touch
// for it to be considered a valid tap.
tapTolerance:15});var iW=eN.extend({addHooks:function(){e_(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ef(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),1===t.touches.length){var e=t.touches[0];this._startPos=this._newPos=new D(e.clientX,e.clientY),this._holdTimeout=setTimeout(_(function(){this._cancel(),this._isTapValid()&&(// prevent simulated mouse events https://w3c.github.io/touch-events/#mouse-events
e_(document,"touchend",eL),e_(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),600),e_(document,"touchend touchcancel contextmenu",this._cancel,this),e_(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){ef(document,"touchend",eL),ef(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),ef(document,"touchend touchcancel contextmenu",this._cancel,this),ef(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new D(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,// detail: 1,
screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});// @section Handlers
// @property tapHold: Handler
// Long tap handler to simulate `contextmenu` event (useful in mobile Safari).
eC.addInitHook("addHandler","tapHold",iW),/*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */// @namespace Map
// @section Interaction Options
eC.mergeOptions({// @section Touch interaction options
// @option touchZoom: Boolean|String = *
// Whether the map can be zoomed by touch-dragging with two fingers. If
// passed `'center'`, it will zoom to the center of the view regardless of
// where the touch events (fingers) were. Enabled for touch-capable web
// browsers.
touchZoom:tj.touch,// @option bounceAtZoomLimits: Boolean = true
// Set it to false if you don't want the map to zoom beyond min/max zoom
// and then bounce back when pinch-zooming.
bounceAtZoomLimits:!0});var iq=eN.extend({addHooks:function(){t9(this._map._container,"leaflet-touch-zoom"),e_(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){t7(this._map._container,"leaflet-touch-zoom"),ef(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&!e._animatingZoom&&!this._zooming){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),"center"!==e.options.touchZoom&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),e_(document,"touchmove",this._onTouchMove,this),e_(document,"touchend touchcancel",this._onTouchEnd,this),eL(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1===o)return}else{// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
var r=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1===o&&0===r.x&&0===r.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),B(this._animRequest);var s=_(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=I(s,this,!0),eL(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,B(this._animRequest),ef(document,"touchmove",this._onTouchMove,this),ef(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});// @section Handlers
// @property touchZoom: Handler
// Touch zoom handler.
eC.addInitHook("addHandler","touchZoom",iq),eC.BoxZoom=iN,eC.DoubleClickZoom=iR,eC.Drag=iD,eC.Keyboard=iF,eC.ScrollWheelZoom=iH,eC.TapHold=iW,eC.TouchZoom=iq,t.Bounds=W,t.Browser=tj,t.CRS=K,t.Canvas=iC,t.Circle=io,t.CircleMarker=ii,t.Class=j,t.Control=eO,t.DivIcon=iT,t.DivOverlay=ix,t.DomEvent={__proto__:null,on:e_,off:ef,stopPropagation:eb,disableScrollPropagation:ew,disableClickPropagation:ex,preventDefault:eL,stop:eP,getPropagationPath:eT,getMousePosition:eM,getWheelDelta:eS,isExternalTarget:ez,addListener:e_,removeListener:ef},t.DomUtil={__proto__:null,TRANSFORM:tY,TRANSITION:tJ,TRANSITION_END:tX,get:tQ,getStyle:t0,create:t1,remove:t2,empty:t3,toFront:t5,toBack:t8,hasClass:t4,addClass:t9,removeClass:t7,setClass:t6,getClass:et,setOpacity:ee,testProp:ei,setTransform:en,setPosition:eo,getPosition:er,get disableTextSelection(){return i},get enableTextSelection(){return n},disableImageDrag:ea,enableImageDrag:eh,preventOutline:eu,restoreOutline:el,getSizedParentNode:ec,getScale:ed},t.Draggable=eD,t.Evented=R,t.FeatureGroup=e4,t.GeoJSON=ia,t.GridLayer=iM,t.Handler=eN,t.Icon=e9,t.ImageOverlay=iy,t.LatLng=G,t.LatLngBounds=U,t.Layer=e5,t.LayerGroup=e8,t.LineUtil={__proto__:null,simplify:eq,pointToSegmentDistance:eU,closestPointOnSegment:// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.
function(t,e,i){return eK(t,e,i)},clipSegment:eV,_getEdgeIntersection:eG,_getBitCode:e$,_sqClosestPointOnSegment:eK,isFlat:eY,_flat:eJ,polylineCenter:eX},t.Map=eC,t.Marker=it,t.Mixin={Events:N},t.Path=ie,t.Point=D,t.PolyUtil={__proto__:null,clipPolygon:eF,polygonCenter:eH,centroid:eW},t.Polygon=is,t.Polyline=ir,t.Popup=iL,t.PosAnimation=eE,t.Projection={__proto__:null,LonLat:eQ,Mercator:e0,SphericalMercator:J},t.Rectangle=ij,t.Renderer=iE,t.SVG=iI,t.SVGOverlay=iw,t.TileLayer=ik,t.Tooltip=iP,t.Transformation=X,t.Util={__proto__:null,extend:e,create:d,bind:_,get lastId(){return p},stamp:f,throttle:m,wrapNum:g,falseFn:v,formatNum:y,trim:b,splitWords:w,setOptions:x,getParamString:P,template:M,isArray:k,indexOf:S,emptyImageUrl:z,requestFn:Z,cancelFn:A,requestAnimFrame:I,cancelAnimFrame:B},t.VideoOverlay=ib,t.bind=_,t.bounds=q,t.canvas=iO,t.circle=// @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.
function(t,e,i){return new io(t,e,i)},t.circleMarker=// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.
function(t,e){return new ii(t,e)},t.control=eZ,t.divIcon=// @factory L.divIcon(options: DivIcon options)
// Creates a `DivIcon` instance with the given options.
function(t){return new iT(t)},t.extend=e,t.featureGroup=function(t,e){return new e4(t,e)},t.geoJSON=iv,t.geoJson=iv,t.gridLayer=// @factory L.gridLayer(options?: GridLayer options)
// Creates a new instance of GridLayer with the supplied options.
function(t){return new iM(t)},t.icon=// @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.
function(t){return new e9(t)},t.imageOverlay=function(t,e,i){return new iy(t,e,i)},t.latLng=$,t.latLngBounds=V,t.layerGroup=function(t,e){return new e8(t,e)},t.map=// @section
// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
function(t,e){return new eC(t,e)},t.marker=// factory L.marker(latlng: LatLng, options? : Marker options)
// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.
function(t,e){return new it(t,e)},t.point=H,t.polygon=// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
function(t,e){return new is(t,e)},t.polyline=// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.
function(t,e){return new ir(t,e)},t.popup=function(t,e){return new iL(t,e)},t.rectangle=// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
function(t,e){return new ij(t,e)},t.setOptions=x,t.stamp=f,t.svg=iB,t.svgOverlay=// @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
// Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
// A viewBox attribute is required on the SVG element to zoom in and out properly.
function(t,e,i){return new iw(t,e,i)},t.tileLayer=iS,t.tooltip=function(t,e){return new iP(t,e)},t.transformation=Q,t.version="1.9.4",t.videoOverlay=// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
// geographical bounds it is tied to.
function(t,e,i){return new ib(t,e,i)};var iU=window.L;t.noConflict=function(){return window.L=iU,this},// Always export us to window global (see #2364)
window.L=t}({});class iH extends iP{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-model");constructor(){super(),this._addHandlerShowWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerUploaded(t){this._parentElement.addEventListener("submit",function(e){e.preventDefault();let i=[...new FormData(this)],n=Object.fromEntries(i);t(n)})}/**
   *
   */_generateMarkup(){}}var iW=new iH;class iq extends iP{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(t){window.addEventListener("click",t)}_generateMarkup(){return this._data.map(t=>iT.render(t,!1)).join("")}}var iU=new iq;document.querySelector(".recipe");// console.log('this is the');
const iV=async function(){try{let t=window.location.hash.slice(1);// console.log(id);
if(ik.renderSpinner(),!t)return;ij.renderSpinner(),// ! Loading the recipe
await iE(t),ij.update(iS.recipes),iU.update(iS.bookmark),ik.update(iO()),console.log(iS.recipes)}catch(t){ij.renderError()}},iG=async function(){try{// ! Get search query
let t=iR.getQuery();if(!t)return;// ! Load search result
await iC("avocado"),// ! Render search results
console.log(iS.search.results),ik.render(iS.search.results),ik.update(iO(1)),iF.render(iS.search)}catch(t){console.log(t)}};iG(),ij.addHandlerRender(iV),iR.addHandlerSearch(iG),ij.addHandlerAddBookmark(function(){iS.recipes.bookmarked?iI(iS.recipes):iA(iS.recipes),ij.update(iS.recipes),iU.render(iS.bookmark)}),iF.addHandlerClick(function(t){ik.render(iO(t)),iF.render(iS.search),console.log("Goes to page")}),iW._addHandlerUploaded(function(t){console.log(t)}),// ['load', 'hash'].forEach(ev => window.addEventListener(ev, controlRecipe()));
// controlRecipe();
console.log(51910);//# sourceMappingURL=indexForkify.678839f0.js.map

//# sourceMappingURL=indexForkify.678839f0.js.map
