_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(i.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},i=r("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,i=e.hasQuery;return r||o&&(void 0!==i&&i)}},"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},"094J":function(e,t,r){"use strict";(function(e){var n=r("q1tI"),o=r("puqk"),i={},s=function(e,t,r){return i[e]||(i[e]={callbacks:[],value:r}),i[e].callbacks.push(t),{deregister:function(){var r=i[e].callbacks,n=r.indexOf(t);n>-1&&r.splice(n,1)},emit:function(r){i[e].value!==r&&(i[e].value=r,i[e].callbacks.forEach((function(e){t!==e&&e(r)})))}}};t.a=function(t,r){if(void 0===r&&(r=e.localStorage),r){var i=(a=r,{get:function(e,t){var r=a.getItem(e);return null===r?"function"==typeof t?t():t:JSON.parse(r)},set:function(e,t){a.setItem(e,JSON.stringify(t))}});return function(e){return function(e,t,r){var i=r.get,a=r.set,u=Object(n.useRef)(null),c=Object(n.useState)((function(){return i(t,e)})),l=c[0],d=c[1];return Object(o.a)("storage",(function(e){var r=e.key,n=JSON.parse(e.newValue);r===t&&l!==n&&d(n)})),Object(n.useEffect)((function(){return u.current=s(t,d,e),function(){u.current.deregister()}}),[]),Object(n.useEffect)((function(){a(t,l),u.current.emit(l)}),[l]),[l,d]}(e,t,i)}}var a;return n.useState}}).call(this,r("yLpj"))},"23aj":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=r("MX0m"),s=r.n(i),a=r("8Kt/"),u=r.n(a);var c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function l(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)n[o]=i[s];return n}var d=Symbol("ATOM"),f={border:["","borderStyles","colors"],flexBasis:"space",color:"colors",backgroundColor:"colors",margin:"space",marginTop:"space",marginLeft:"space",marginRight:"space",marginBottom:"space",padding:"space",paddingTop:"space",paddingLeft:"space",paddingRight:"space",paddingBottom:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",fontSize:"fontSizes",borderColor:"colors",borderTopColor:"colors",borderLeftColor:"colors",borderRightColor:"colors",borderBottomColor:"colors",fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",width:"sizes",height:"sizes",minWidth:"sizes",maxWidth:"sizes",minHeight:"sizes",maxHeight:"sizes",borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderLeftWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",transition:"transitions"},h={border:function(){return function(e){var t=Array.isArray(e)?e:"string"===typeof e?e.split(" "):[e],r={borderTopWidth:t[0],borderRightWidth:t[0],borderBottomWidth:t[0],borderLeftWidth:t[0]};return t.length>1&&(r.borderTopStyle=t[1],r.borderRightStyle=t[1],r.borderBottomStyle=t[1],r.borderLeftStyle=t[1]),t.length>2&&(r.borderTopColor=t[2],r.borderRightColor=t[2],r.borderBottomColor=t[2],r.borderLeftColor=t[2]),r}},boxShadow:function(e){return function(t){return{boxShadow:Array.isArray(t)?t[0]+" "+t[1]+" "+t[2]+" "+(e.tokens&&e.tokens.colors&&e.tokens.colors[t[3]]?e.tokens.colors[t[3]]:t[3]):t}}},flex:function(){return function(e){if(Array.isArray(e)){if(2===e.length)return c({flexGrow:e[0]},isNaN(e[1])?{flexBasis:e[1]}:{flexShrink:e[1]});if(3===e.length)return{flexGrow:e[0],flexShrink:e[1],flexBasis:e[2]}}return isNaN(e)?{flexBasis:e}:{flexGrow:e}}},overflow:function(){return function(e){return{overflowX:e,overflowY:e}}},margin:function(){return function(e){return Array.isArray(e)?2===e.length?{marginLeft:e[1],marginTop:e[0],marginRight:e[1],marginBottom:e[0]}:3===e.length?{marginLeft:e[1],marginTop:e[0],marginRight:e[1],marginBottom:e[2]}:{marginLeft:e[3],marginTop:e[0],marginRight:e[1],marginBottom:e[2]}:{marginLeft:e,marginTop:e,marginRight:e,marginBottom:e}}},padding:function(){return function(e){return Array.isArray(e)?2===e.length?{paddingLeft:e[1],paddingTop:e[0],paddingRight:e[1],paddingBottom:e[0]}:3===e.length?{paddingLeft:e[1],paddingTop:e[0],paddingRight:e[1],paddingBottom:e[2]}:{paddingLeft:e[3],paddingTop:e[0],paddingRight:e[1],paddingBottom:e[2]}:{paddingLeft:e,paddingTop:e,paddingRight:e,paddingBottom:e}}},borderRadius:function(){return function(e){return{borderTopLeftRadius:e,borderTopRightRadius:e,borderBottomLeftRadius:e,borderBottomRightRadius:e}}},borderColor:function(){return function(e){return{borderTopColor:e,borderRightColor:e,borderBottomColor:e,borderLeftColor:e}}},borderStyle:function(){return function(e){return{borderTopStyle:e,borderRightStyle:e,borderBottomStyle:e,borderLeftStyle:e}}},borderWidth:function(){return function(e){return{borderTopWidth:e,borderRightWidth:e,borderBottomWidth:e,borderLeftWidth:e}}}},p=new Map,m=function(){return this._className},v=function(){var e=this.atoms.map((function(e){return e.toString()})).join(" ");return this._className=e,this.toString=m,e},g=function(e,t,r){return void 0===t&&(t={}),function(){var n=r(this,null),o=this.value,i="";return i=2===n.length?"."+n[0]+n[1]+"{"+this.cssHyphenProp+":"+o+";}":"."+n[0]+"{"+this.cssHyphenProp+":"+o+";}",e[this.screen].insertRule(this.screen?t[this.screen](i):i),this._className=n[0],this.toString=m,n[0]}},y=function(e,t){return function(){var r=this,n=(e?e+"-":"")+"theme-"+this.name;return t.insertRule("."+n+"{"+Object.keys(this.definition).reduce((function(e,t){return""+e+Object.keys(r.definition[t]).reduce((function(e,n){return e+"--"+t+"-"+n+":"+r.definition[t][n]+";"}),e)}),"")+"}"),this.toString=function(){return n},n}},b=function(e,t){for(var r=t.length-1;r>=0;r--){var n=t[r];n&&n[d]&&"atoms"in n?b(e,n.atoms):n&&n[d]?e.has(n.id)||e.set(n.id,n):n&&e.set(n,n)}},_=function(e,t){void 0===t&&(t="undefined"===typeof window?null:window);var r="boolean"===typeof e.showFriendlyClassnames&&e.showFriendlyClassnames,n=e.prefix||"",o=t?function(e){var t=e.getComputedStyle(e.document.documentElement),r=Array.from(t).filter((function(e){return"-"===e[0]}));return{vendorPrefix:"-"+(r.join("").match(/-(moz|webkit|ms)-/)||""===t.OLink&&["","o"])[1]+"-",vendorProps:r}}(t):{vendorPrefix:"-node-",vendorProps:[]},i=o.vendorPrefix,s=o.vendorProps;t&&p.has(n)&&p.get(n).dispose();var a=n?r?n+"_":n:"",u=function(e,t){var n=null===t?function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}(""+(e.screen||"")+e.cssHyphenProp.replace(/-(moz|webkit|ms)-/,"")+(e.pseudo||"")+e.value):t,o=r?(e.screen?e.screen+"_":"")+e.cssHyphenProp.replace(/-(moz|webkit|ms)-/,"").split("-").map((function(e){return e[0]})).join("")+"_"+n:"_"+n,i=""+a+o;return e.pseudo?[i,e.pseudo]:[i]},c=function(e,t){void 0===t&&(t={});var r=[];if(e&&e.document){var n=e.document.querySelector("head");if(!n)throw new Error("There is no HEAD element on this document");var o=Array.from(n.querySelectorAll("style")).filter((function(e){return Boolean(e.textContent&&e.textContent.startsWith("/* STITCHES"))}));return{tags:r,sheets:["__variables__",""].concat(Object.keys(t)).reduce((function(t,i,s){var a=o[s];a||(a=e.document.createElement("style"),r.push(a),n.appendChild(a));for(var u=0;u<document.styleSheets.length;u++)if(document.styleSheets[u].ownerNode===a){t[i]=document.styleSheets[u];break}return t}),{})}}return{tags:r,sheets:["__variables__",""].concat(Object.keys(t)).reduce((function(e,t){return e[t]={content:"",cssRules:[],insertRule:function(r){e[t].content+="\n"+r}},e}),{})}}(t,e.screens),l=c.tags,_=c.sheets,S=new Set;for(var w in _)for(var C=0;C<_[w].cssRules.length;C++)S.add(_[w].cssRules[C].selectorText);var k=t?function(e,t,r,n){void 0===t&&(t={});var o=0;return function(){var i=r(this,n.size?null:o++),s=!n.size||!n.has("."+i[0]),a=this.value;if(s){var u="";u=2===i.length?"."+i[0]+i[1]+"{"+this.cssHyphenProp+":"+a+";}":"."+i[0]+"{"+this.cssHyphenProp+":"+a+";}",e[this.screen].insertRule(this.screen?t[this.screen](u):u)}return this.cssHyphenProp=this.value=this.pseudo=this.screen=void 0,this._className=i[0],this.toString=m,i[0]}}(_,e.screens,u,S):g(_,e.screens,u),R=y(a,_.__variables__),x=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=new Map;return b(n,t),(e={atoms:Array.from(n.values()),toString:v})[d]=!0,e},j=function(e,t,r,n){var o;void 0===r&&(r="");var a,u=f[e];a=u?Array.isArray(u)&&Array.isArray(t)?u.map((function(e,r){return u&&E[e]&&E[e][t[r]]?E[e][t[r]]:t[r]})):u&&E[u]&&E[u][t]?E[u][t]:t:t;var c=e[0]===e[0].toUpperCase(),l=e.toLowerCase()+(n?n.split(":").sort().join(":"):"")+r,h=l+t;if(B.has(h))return B.get(h);var p=e.split(/(?=[A-Z])/).map((function(e){return e.toLowerCase()})).join("-");c?p="-"+p:s.includes(""+i+p)&&(p=""+i+p);var m=((o={id:l,cssHyphenProp:p,value:a,pseudo:n,screen:r,toString:k})[d]=!0,o);return B.set(h,m),m},O=function(t,r,n,o,i,s){for(var a in void 0===n&&(n=""),void 0===o&&(o=[]),void 0===i&&(i=!0),void 0===s&&(s=!0),t)if(e.screens&&a in e.screens){if(n)throw new Error('@stitches/css - You are nesting the screen "'+a+'" into "'+n+'", that makes no sense? :-)');O(t[a],r,a,o)}else a[0].match(/[a-zA-Z]/)?i&&a in M?O(M[a](e)(t[a]),r,n,o,!1):s&&a in h?O(h[a](e)(t[a]),r,n,o,!1,!1):r(j(a,t[a],n,o.length?o.join(""):void 0)):O(t[a],r,n,o.concat(a))},T=function(t,r,n,o,i){for(var s in void 0===n&&(n=""),void 0===o&&(o=[]),void 0===i&&(i=!0),t)if("override"===s){if(!i)throw new Error("@stitches/css - You can not override at this level, only at the top level definition");O(t[s],r,n,o)}else if(e.screens&&s in e.screens){if(n)throw new Error('@stitches/css - You are nesting the screen "'+s+'" into "'+n+'", that makes no sense? :-)');T(t[s],r,s,o,!1)}else if(s[0].match(/[a-zA-Z]/)){if(!(s in M))throw new Error('@stitches/css - The prop "'+s+'" is not a valid utility');O(M[s](e)(t[s]),r,n,o,!1)}else T(t[s],r,n,o.concat(s),!1)},A=e.screens||{},M=e.utils||{},E=e.tokens||{},I=":root{";for(var L in E)for(var P in E[L]){var z="--"+L+"-"+P;I+=z+":"+E[L][P]+";",E[L][P]="var("+z+")"}I+="}",S.has(":root")||_.__variables__.insertRule(I);var B=new Map,F=new Map,N=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n=[],o=0,i=0;i<t.length;i++)t[i]&&("string"===typeof t[i]||t[i][d]?n[o++]=t[i]:e.utilityFirst?T(t[i],(function(e){n[o++]=e})):O(t[i],(function(e){n[o++]=e})));return x.apply(void 0,n)};return N.dispose=function(){B.clear(),l.forEach((function(e){var t;null===(t=e.parentNode)||void 0===t||t.removeChild(e)}))},N._config=function(){return e},N.theme=function(e){var t;if(F.has(e))return F.get(e);var r=((t={name:String(F.size),definition:e,toString:R})[d]=!0,t);return F.set(e,r),r},N.getStyles=function(t){for(var r in _)_[r].content="";return I&&_.__variables__.insertRule(I),k=g(_,e.screens,u),R=y(a,_.__variables__),B.forEach((function(e){e.toString=k})),F.forEach((function(e){e.toString=R})),{result:t(),styles:Object.keys(A).reduce((function(e,t){return e.concat("/* STITCHES:"+t+" */\n"+_[t].content)}),["/* STITCHES:__variables__ */\n"+_.__variables__.content,"/* STITCHES */\n"+_[""].content])}},t&&p.set(n,N),N},S=function(e){var t,r=_(e),o=n.forwardRef((function(e,t){var r=e.as||"div";return n.createElement(r,c(c({ref:t},e),{as:void 0}))})),i=r._config().screens,s=function(e,s,a){var u;void 0===e&&(e=function(e){return e.compose()}),void 0===s&&(s={}),void 0===a&&(a=o);var d=t,f=r(e),h=new Map;for(var p in s){var m=new Map;for(var v in s[p]){var g={"":r(s[p][v])};if(i)for(var y in i)g[y]=r(((u={})[y]=s[p][v],u));m.set(v,g)}h.set(p,m)}return function(e){n.useMemo((function(){return e.css}),[]);var t=[f],o={};for(var i in e)if(i in s){var u=h.get(i);if("string"===typeof e[i])t.push((null===u||void 0===u?void 0:u.get(e[i]))[""]);else if(e[i])for(var p in e[i])t.push((null===u||void 0===u?void 0:u.get(e[i][p]))[p])}else o[i]=e[i];return e.css&&t.push(e.css),n.createElement(a,c(c({},o),{as:e.as||d,className:r.apply(void 0,l(t,[e.className]))}))}};return{styled:new Proxy((function(){}),{get:function(e,r){return"Box"===r?o:(t=String(r),s)},apply:function(e,r,n){var o=n[0],i=n[1],a=n[2];return"string"===typeof o?(t=o,s(i,a)):(t=void 0,s(i,a,o))}}),css:r}}({tokens:{}}),w=S.styled,C=S.css,k=r("g+62"),R=o.a.createElement;var x=function(e){var t=e.children,r=e.title,n=void 0===r?"This is the default title":r,i=Object(k.a)().toggle,a=Object(k.a)().value;return R(o.a.Fragment,null,R(u.a,null,R("title",{className:"jsx-2890122250"},n),R("meta",{charSet:"utf-8",className:"jsx-2890122250"}),R("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",className:"jsx-2890122250"}),R("meta",{name:"color-scheme",content:"dark light",className:"jsx-2890122250"})),t,void 0!==a&&R(j,{onClick:i},a?"Dark":"Light"),R(s.a,{id:"2890122250"},["body{font-family:Menlo,Monaco,Consolas,Liberation Mono,Courier New, monospace;line-height:1.25;-webkit-transition:background 250ms,color 250ms;transition:background 250ms,color 250ms;}","body.light-mode{color:#000;background:#fff;}","body.dark-mode{color:#fff;background:#1c1c1c;}",".light-mode a{color:#6b46c1;}",".dark-mode a{color:#9f7aea;}"]))},j=w.button({position:"fixed",top:"2rem",right:"2rem"}),O=o.a.createElement;t.default=function(){return O(x,{title:"Lauriz Hils\xf8e"},O("div",{className:C({maxWidth:"48rem"})},O("p",{className:C({fontSize:"2rem"})},"Hi,"),O("p",null,"My name is Lauritz. I am a software developer based in Copenhagen, Denmark. Most of my work has been web development (React, Node, Kotlin) but now I am studying machine learning at"," ",O("a",{href:"https://studier.ku.dk/bachelor/machine-learning-og-datavidenskab/"},"University of Copenhagen"),"."),O("p",null,"Some of my projects are available at"," ",O("a",{href:"https://github.com/lauritzsh"},"GitHub"),". I am also on"," ",O("a",{href:"https://www.linkedin.com/in/lauritzhilsoe/"},"LinkedIn"),".")))}},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var n,o=r("q1tI");var i=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return i.computeId(t,r)})).join(" ")};var o=n.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},n}(o.Component);t.default=s},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=(n=r("Xuae"))&&n.__esModule?n:{default:n},s=r("lwAK"),a=r("FYa8"),u=r("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var a=0,u=f.length;a<u;a++){var c=f[a];if(o.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?i=!1:r.add(c);else{var l=o.props[c],d=n[c]||new Set;d.has(l)?i=!1:(d.add(l),n[c]=d)}}}return i}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function p(e){var t=e.children,r=(0,o.useContext)(s.AmpStateContext),n=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}p.rewind=function(){};var m=p;t.default=m},"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&h())}function h(){if(!l){var e=a(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},MX0m:function(e,t,r){e.exports=r("3niX")},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),i=r("ZhPi"),s=r("Bnag");e.exports=function(e){return n(e)||o(e)||i(e)||s()}},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=i(r("9kyW")),o=i(r("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var o=String(r),i=t+o;return e[i]||(e[i]="jsx-"+(0,n.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),o=r("lwsE"),i=r("W8MJ"),s=r("PJYZ"),a=r("7W2i"),u=r("a1gu"),c=r("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}t.__esModule=!0,t.default=void 0;var d=r("q1tI"),f=!1,h=function(e){a(r,e);var t=l(r);function r(e){var i;return o(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,f&&i._hasHeadManager&&(i.props.headManager.mountedInstances.add(s(i)),i.emitChange()),i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=h},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,i,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,r("8oxB"))},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},"g+62":function(e,t,r){"use strict";(function(e){var n=r("puqk"),o=r("q1tI"),i=r("094J"),s=function(){},a={classList:{add:s,remove:s}},u=function(t,r,n){void 0===n&&(n=e);var s=t?Object(i.a)(t,r):o.useState,u=n.matchMedia?n.matchMedia("(prefers-color-scheme: dark)"):{},c={addEventListener:function(e,t){return u.addListener&&u.addListener(t)},removeEventListener:function(e,t){return u.removeListener&&u.removeListener(t)}},l="(prefers-color-scheme: dark)"===u.media,d=n.document&&n.document.body||a;return{usePersistedDarkModeState:s,getDefaultOnChange:function(e,t,r){return void 0===e&&(e=d),void 0===t&&(t="dark-mode"),void 0===r&&(r="light-mode"),function(n){e.classList.add(n?t:r),e.classList.remove(n?r:t)}},mediaQueryEventTarget:c,getInitialValue:function(e){return l?u.matches:e}}};t.a=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var r=t.element,i=t.classNameDark,s=t.classNameLight,a=t.onChange,c=t.storageKey;void 0===c&&(c="darkMode");var l=t.storageProvider,d=t.global,f=Object(o.useMemo)((function(){return u(c,l,d)}),[c,l,d]),h=f.getDefaultOnChange,p=f.mediaQueryEventTarget,m=(0,f.usePersistedDarkModeState)((0,f.getInitialValue)(e)),v=m[0],g=m[1],y=Object(o.useMemo)((function(){return a||h(r,i,s)}),[a,r,i,s,h]);return Object(o.useEffect)((function(){y(v)}),[y,v]),Object(n.a)("change",(function(e){return g(e.matches)}),p),{value:v,enable:Object(o.useCallback)((function(){return g(!0)}),[g]),disable:Object(o.useCallback)((function(){return g(!1)}),[g]),toggle:Object(o.useCallback)((function(){return g((function(e){return!e}))}),[g])}}}).call(this,r("yLpj"))},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},puqk:function(e,t,r){"use strict";(function(e){var n=r("q1tI");t.a=function(t,r,o,i){void 0===o&&(o=e),void 0===i&&(i={});var s=Object(n.useRef)(),a=i.capture,u=i.passive,c=i.once;Object(n.useEffect)((function(){s.current=r}),[r]),Object(n.useEffect)((function(){if(o&&o.addEventListener){var e=function(e){return s.current(e)},r={capture:a,passive:u,once:c};return o.addEventListener(t,e,r),function(){o.removeEventListener(t,e,r)}}}),[t,o,a,u,c])}}).call(this,r("yLpj"))},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}e.exports=r}},[["/EDR",0,1]]]);