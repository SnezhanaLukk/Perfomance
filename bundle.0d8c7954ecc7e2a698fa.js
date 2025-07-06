/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// ./src/styles.css
// extracted by mini-css-extract-plugin

;// ./node_modules/preact/dist/preact.module.js
var n,preact_module_l,u,t,i,preact_module_r,o,preact_module_e,f,c,s,a,h,p={},v=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function g(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function _(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===e[o]&&(e[o]=l.defaultProps[o]);return m(l,e,i,r,null)}function m(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u:o,__i:-1,__u:0};return null==o&&null!=preact_module_l.vnode&&preact_module_l.vnode(e),e}function b(){return{current:null}}function k(n){return n.children}function x(n,l){this.props=n,this.context=l}function S(n,l){if(null==l)return n.__?S(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?S(n):null}function C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!$.__r++||preact_module_r!=preact_module_l.debounceRendering)&&((preact_module_r=preact_module_l.debounceRendering)||o)($)}function $(){for(var n,u,t,r,o,f,c,s=1;i.length;)i.length>s&&i.sort(preact_module_e),n=i.shift(),s=i.length,n.__d&&(t=void 0,o=(r=(u=n).__v).__e,f=[],c=[],u.__P&&((t=d({},r)).__v=r.__v+1,preact_module_l.vnode&&preact_module_l.vnode(t),O(u.__P,t,r,u.__n,u.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?S(r):o,!!(32&r.__u),c),t.__v=r.__v,t.__.__k[t.__i]=t,z(f,t,c),t.__e!=o&&C(t)));$.__r=0}function I(n,l,u,t,i,r,o,e,f,c,s){var a,h,y,w,d,g,_=t&&t.__k||v,m=l.length;for(f=P(u,l,_,f,m),a=0;a<m;a++)null!=(y=u.__k[a])&&(h=-1==y.__i?p:_[y.__i]||p,y.__i=a,g=O(n,y,h,i,r,o,e,f,c,s),w=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&q(h.ref,null,y),s.push(y.ref,y.__c||w,y)),null==d&&null!=w&&(d=w),4&y.__u||h.__k===y.__k?f=A(y,f,n):"function"==typeof y.type&&void 0!==g?f=g:w&&(f=w.nextSibling),y.__u&=-7);return u.__e=d,f}function P(n,l,u,t,i){var r,o,e,f,c,s=u.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?(f=r+h,(o=n.__k[r]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?m(null,o,null,null,null):w(o)?m(k,{children:o},null,null,null):null==o.constructor&&o.__b>0?m(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=n,o.__b=n.__b+1,e=null,-1!=(c=o.__i=L(o,u,f,a))&&(a--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>s?h--:i<s&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=S(e)),B(e,e));return t}function A(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=A(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=S(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8==l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(w(n)?n.some(function(n){H(n,l)}):l.push(n)),l}function L(n,l,u,t){var i,r,o=n.key,e=n.type,f=l[u];if(null===f&&null==n.key||f&&o==f.key&&e==f.type&&0==(2&f.__u))return u;if(t>(null!=f&&0==(2&f.__u)?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;){if(i>=0){if((f=l[i])&&0==(2&f.__u)&&o==f.key&&e==f.type)return i;i--}if(r<l.length){if((f=l[r])&&0==(2&f.__u)&&o==f.key&&e==f.type)return r;r++}}return-1}function T(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||y.test(l)?u:u+"px"}function j(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||T(n.style,l,u[l])}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(f,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u.u=t.u:(u.u=c,n.addEventListener(l,r?a:s,r)):n.removeEventListener(l,r?a:s,r);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=c++;else if(u.t<t.u)return;return t(preact_module_l.event?preact_module_l.event(u):u)}}}function O(n,u,t,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,j=u.type;if(null!=u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(a=preact_module_l.__b)&&a(u);n:if("function"==typeof j)try{if(b=u.props,S="prototype"in j&&j.prototype.render,C=(a=j.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(S?u.__c=h=new j(b,M):(u.__c=h=new x(b,M),h.constructor=j,h.render=D),C&&C.sub(h),h.props=b,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,j.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)S&&null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(S&&null==j.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)||u.__v==t.__v){for(u.__v!=t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u)}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_)})}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=preact_module_l.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),L=a,null!=a&&a.type===k&&null==a.key&&(L=N(a.props.children)),f=I(n,w(L)?L:[L],u,t,i,r,o,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null)}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f}else for(T=o.length;T--;)g(o[T]);else u.__e=t.__e,u.__k=t.__k;preact_module_l.__e(n,u,t)}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=V(t.__e,u,t,i,r,o,e,c,s);return(a=preact_module_l.diffed)&&a(u),128&u.__u?void 0:f}function z(n,u,t){for(var i=0;i<t.length;i++)q(t[i],t[++i],t[++i]);preact_module_l.__c&&preact_module_l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){preact_module_l.__e(n,u.__v)}})}function N(n){return"object"!=typeof n||null==n||n.__b&&n.__b>0?n:w(n)?n.map(N):d({},n)}function V(u,t,i,r,o,e,f,c,s){var a,h,v,y,d,_,m,b=i.props,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((d=e[a])&&"setAttribute"in d==!!x&&(x?d.localName==x:3==d.nodeType)){u=d,e[a]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(preact_module_l.__m&&preact_module_l.__m(t,e),c=!1),e=null}if(null==x)b===k||c&&u.data==k||(u.data=k);else{if(e=e&&n.call(u.childNodes),b=i.props||p,!c&&null!=e)for(b={},a=0;a<u.attributes.length;a++)b[(d=u.attributes[a]).name]=d.value;for(a in b)if(d=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=d;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;j(u,a,null,d,o)}for(a in k)d=k[a],"children"==a?y=d:"dangerouslySetInnerHTML"==a?h=d:"value"==a?_=d:"checked"==a?m=d:c&&"function"!=typeof d||b[a]===d||j(u,a,d,b[a],o);if(h)c||v&&(h.__html==v.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),I("template"==t.type?u.content:u,w(y)?y:[y],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&S(i,0),c,s),null!=e)for(a=e.length;a--;)g(e[a]);c||(a="value","progress"==x&&null==_?u.removeAttribute("value"):null!=_&&(_!==u[a]||"progress"==x&&!_||"option"==x&&_!=b[a])&&j(u,a,_,b[a],o),a="checked",null!=m&&m!=u[a]&&j(u,a,m,b[a],o))}return u}function q(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){preact_module_l.__e(n,t)}}function B(n,u,t){var i,r;if(preact_module_l.unmount&&preact_module_l.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||q(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){preact_module_l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&B(i[r],u,t||"function"!=typeof n.type);t||g(n.__e),n.__c=n.__=n.__e=void 0}function D(n,l,u){return this.constructor(n,u)}function E(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),preact_module_l.__&&preact_module_l.__(u,t),o=(r="function"==typeof i)?null:i&&i.__k||t.__k,e=[],f=[],O(t,u=(!r&&i||t).__k=_(k,null,[u]),o||p,p,t.namespaceURI,!r&&i?[i]:o?null:t.firstChild?n.call(t.childNodes):null,e,!r&&i?i:o?o.__e:t.firstChild,r,f),z(e,u,f)}function G(n,l){E(n,l,G)}function J(l,u,t){var i,r,o,e,f=d({},l.props);for(o in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=void 0===u[o]&&null!=e?e[o]:u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),m(l.type,f,i||l.key,r||l.ref,null)}function K(n){function l(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l.__c]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!=n.value&&u.forEach(function(n){n.__e=!0,M(n)})},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n)}}),n.children}return l.__c="__cC"+h++,l.__=n,l.Provider=l.__l=(l.Consumer=function(n,l){return n.children(l)}).contextType=l,l}n=v.slice,preact_module_l={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&null==n.constructor},x.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this))},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this))},x.prototype.render=k,i=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,preact_module_e=function(n,l){return n.__v.__b-l.__v.__b},$.__r=0,f=/(PointerCapture)$|Capture$/i,c=0,s=F(!1),a=F(!0),h=0;
//# sourceMappingURL=preact.module.js.map

;// ./node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_t,hooks_module_r,hooks_module_u,hooks_module_i,hooks_module_o=0,hooks_module_f=[],hooks_module_c=preact_module_l,hooks_module_e=hooks_module_c.__b,hooks_module_a=hooks_module_c.__r,hooks_module_v=hooks_module_c.diffed,l=hooks_module_c.__c,hooks_module_m=hooks_module_c.unmount,hooks_module_s=hooks_module_c.__;function hooks_module_p(n,t){hooks_module_c.__h&&hooks_module_c.__h(hooks_module_r,n,hooks_module_o||t),hooks_module_o=0;var u=hooks_module_r.__H||(hooks_module_r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function hooks_module_d(n){return hooks_module_o=1,hooks_module_h(hooks_module_D,n)}function hooks_module_h(n,u,i){var o=hooks_module_p(hooks_module_t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):hooks_module_D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=hooks_module_r,!hooks_module_r.__f)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return!!n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),c&&c.call(this,n,t,r)||i};hooks_module_r.__f=!0;var c=hooks_module_r.shouldComponentUpdate,e=hooks_module_r.componentWillUpdate;hooks_module_r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},hooks_module_r.shouldComponentUpdate=f}return o.__N||o.__}function hooks_module_y(n,u){var i=hooks_module_p(hooks_module_t++,3);!hooks_module_c.__s&&hooks_module_C(i.__H,u)&&(i.__=n,i.u=u,hooks_module_r.__H.__h.push(i))}function hooks_module_(n,u){var i=hooks_module_p(hooks_module_t++,4);!hooks_module_c.__s&&hooks_module_C(i.__H,u)&&(i.__=n,i.u=u,hooks_module_r.__h.push(i))}function hooks_module_A(n){return hooks_module_o=5,hooks_module_T(function(){return{current:n}},[])}function hooks_module_F(n,t,r){hooks_module_o=6,hooks_module_(function(){if("function"==typeof n){var r=n(t());return function(){n(null),r&&"function"==typeof r&&r()}}if(n)return n.current=t(),function(){return n.current=null}},null==r?r:r.concat(n))}function hooks_module_T(n,r){var u=hooks_module_p(hooks_module_t++,7);return hooks_module_C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function hooks_module_q(n,t){return hooks_module_o=8,hooks_module_T(function(){return n},t)}function hooks_module_x(n){var u=hooks_module_r.context[n.__c],i=hooks_module_p(hooks_module_t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(hooks_module_r)),u.props.value):n.__}function hooks_module_P(n,t){hooks_module_c.useDebugValue&&hooks_module_c.useDebugValue(t?t(n):n)}function hooks_module_b(n){var u=hooks_module_p(hooks_module_t++,10),i=hooks_module_d();return u.__=n,hooks_module_r.componentDidCatch||(hooks_module_r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function hooks_module_g(){var n=hooks_module_p(hooks_module_t++,11);if(!n.__){for(var u=hooks_module_r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function hooks_module_j(){for(var n;n=hooks_module_f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(hooks_module_z),n.__H.__h.forEach(hooks_module_B),n.__H.__h=[]}catch(t){n.__H.__h=[],hooks_module_c.__e(t,n.__v)}}hooks_module_c.__b=function(n){hooks_module_r=null,hooks_module_e&&hooks_module_e(n)},hooks_module_c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),hooks_module_s&&hooks_module_s(n,t)},hooks_module_c.__r=function(n){hooks_module_a&&hooks_module_a(n),hooks_module_t=0;var i=(hooks_module_r=n.__c).__H;i&&(hooks_module_u===hooks_module_r?(i.__h=[],hooks_module_r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(i.__h.forEach(hooks_module_z),i.__h.forEach(hooks_module_B),i.__h=[],hooks_module_t=0)),hooks_module_u=hooks_module_r},hooks_module_c.diffed=function(n){hooks_module_v&&hooks_module_v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==hooks_module_f.push(t)&&hooks_module_i===hooks_module_c.requestAnimationFrame||((hooks_module_i=hooks_module_c.requestAnimationFrame)||hooks_module_w)(hooks_module_j)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),hooks_module_u=hooks_module_r=null},hooks_module_c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(hooks_module_z),n.__h=n.__h.filter(function(n){return!n.__||hooks_module_B(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],hooks_module_c.__e(r,n.__v)}}),l&&l(n,t)},hooks_module_c.unmount=function(n){hooks_module_m&&hooks_module_m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{hooks_module_z(n)}catch(n){t=n}}),r.__H=void 0,t&&hooks_module_c.__e(t,r.__v))};var hooks_module_k="function"==typeof requestAnimationFrame;function hooks_module_w(n){var t,r=function(){clearTimeout(u),hooks_module_k&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,35);hooks_module_k&&(t=requestAnimationFrame(r))}function hooks_module_z(n){var t=hooks_module_r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),hooks_module_r=t}function hooks_module_B(n){var t=hooks_module_r;n.__c=n.__(),hooks_module_r=t}function hooks_module_C(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function hooks_module_D(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map

;// ./node_modules/preact/compat/dist/compat.module.js
function compat_module_g(n,t){for(var e in t)n[e]=t[e];return n}function compat_module_E(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function compat_module_C(n,t){var e=t(),r=hooks_module_d({t:{__:e,u:t}}),u=r[0].t,o=r[1];return hooks_module_(function(){u.__=e,u.u=t,compat_module_x(u)&&o({t:u})},[n,e,t]),hooks_module_y(function(){return compat_module_x(u)&&o({t:u}),n(function(){compat_module_x(u)&&o({t:u})})},[n]),e}function compat_module_x(n){var t,e,r=n.u,u=n.__;try{var o=r();return!((t=u)===(e=o)&&(0!==t||1/t==1/e)||t!=t&&e!=e)}catch(n){return!0}}function R(n){n()}function compat_module_w(n){return n}function compat_module_k(){return[!1,R]}var compat_module_I=hooks_module_;function compat_module_N(n,t){this.props=n,this.context=t}function compat_module_M(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:compat_module_E(this.props,n)}function u(e){return this.shouldComponentUpdate=r,_(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(compat_module_N.prototype=new x).isPureReactComponent=!0,compat_module_N.prototype.shouldComponentUpdate=function(n,t){return compat_module_E(this.props,n)||compat_module_E(this.state,t)};var compat_module_T=preact_module_l.__b;preact_module_l.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),compat_module_T&&compat_module_T(n)};var compat_module_A="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function compat_module_D(n){function t(t){var e=compat_module_g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=compat_module_A,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var compat_module_L=function(n,t){return null==n?null:H(H(n).map(t))},compat_module_O={map:compat_module_L,forEach:compat_module_L,count:function(n){return n?H(n).length:0},only:function(n){var t=H(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:H},compat_module_F=preact_module_l.__e;preact_module_l.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);compat_module_F(n,t,e,r)};var U=preact_module_l.unmount;function compat_module_V(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=compat_module_g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c.__e=!0,n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return compat_module_V(n,t,e)})),n}function W(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return W(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=e)),n}function compat_module_P(){this.__u=0,this.o=null,this.__b=null}function compat_module_j(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function compat_module_z(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return _(r,o)}return o.displayName="Lazy",o.__f=!0,o}function compat_module_B(){this.i=null,this.l=null}preact_module_l.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),U&&U(n)},(compat_module_P.prototype=new x).__c=function(n,t){var e=t.__c,r=this;null==r.o&&(r.o=[]),r.o.push(e);var u=compat_module_j(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=W(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},compat_module_P.prototype.componentWillUnmount=function(){this.o=[]},compat_module_P.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=compat_module_V(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&_(k,null,n.fallback);return i&&(i.__u&=-33),[_(k,null,e.__a?null:n.children),i]};var compat_module_H=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2]}};function Z(n){return this.getChildContext=function(){return n.context},n.children}function Y(n){var e=this,r=n.h;if(e.componentWillUnmount=function(){E(null,e.v),e.v=null,e.h=null},e.h&&e.h!==r&&e.componentWillUnmount(),!e.v){for(var u=e.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;e.h=r,e.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:u.__m},contains:function(){return!0},insertBefore:function(n,t){this.childNodes.push(n),e.h.insertBefore(n,t)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.h.removeChild(n)}}}E(_(Z,{context:e.context},n.__v),e.v)}function compat_module_$(n,e){var r=_(Y,{__v:n,h:e});return r.containerInfo=e,r}(compat_module_B.prototype=new x).__a=function(n){var t=this,e=compat_module_j(t.__v),r=t.l.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),compat_module_H(t,n,r)):u()};e?e(o):o()}},compat_module_B.prototype.render=function(n){this.i=null,this.l=new Map;var t=H(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},compat_module_B.prototype.componentDidUpdate=compat_module_B.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(t,e){compat_module_H(n,e,t)})};var compat_module_q="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,compat_module_G=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,compat_module_J=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,compat_module_K=/[A-Z0-9]/g,Q="undefined"!=typeof document,X=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function nn(n,t,e){return null==t.__k&&(t.textContent=""),E(n,t),"function"==typeof e&&e(),n?n.__c:null}function tn(n,t,e){return G(n,t),"function"==typeof e&&e(),n?n.__c:null}x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(x.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var en=preact_module_l.event;function rn(){}function un(){return this.cancelBubble}function on(){return this.defaultPrevented}preact_module_l.event=function(n){return en&&(n=en(n)),n.persist=rn,n.isPropagationStopped=un,n.isDefaultPrevented=on,n.nativeEvent=n};var ln,cn={enumerable:!1,configurable:!0,get:function(){return this.class}},fn=preact_module_l.vnode;preact_module_l.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={},o=-1===e.indexOf("-");for(var i in t){var l=t[i];if(!("value"===i&&"defaultValue"in t&&null==l||Q&&"children"===i&&"noscript"===e||"class"===i||"className"===i)){var c=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===l?l="":"translate"===c&&"no"===l?l=!1:"o"===c[0]&&"n"===c[1]?"ondoubleclick"===c?i="ondblclick":"onchange"!==c||"input"!==e&&"textarea"!==e||X(t.type)?"onfocus"===c?i="onfocusin":"onblur"===c?i="onfocusout":compat_module_J.test(i)&&(i=c):c=i="oninput":o&&compat_module_G.test(i)?i=i.replace(compat_module_K,"-$&").toLowerCase():null===l&&(l=void 0),"oninput"===c&&u[i=c]&&(i="oninputCapture"),u[i]=l}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=H(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==e&&null!=u.defaultValue&&(u.value=H(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",cn)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u}(n),n.$$typeof=compat_module_q,fn&&fn(n)};var an=preact_module_l.__r;preact_module_l.__r=function(n){an&&an(n),ln=n.__c};var sn=preact_module_l.diffed;preact_module_l.diffed=function(n){sn&&sn(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),ln=null};var hn={ReactCurrentDispatcher:{current:{readContext:function(n){return ln.__n[n.__c].props.value},useCallback:hooks_module_q,useContext:hooks_module_x,useDebugValue:hooks_module_P,useDeferredValue:compat_module_w,useEffect:hooks_module_y,useId:hooks_module_g,useImperativeHandle:hooks_module_F,useInsertionEffect:compat_module_I,useLayoutEffect:hooks_module_,useMemo:hooks_module_T,useReducer:hooks_module_h,useRef:hooks_module_A,useState:hooks_module_d,useSyncExternalStore:compat_module_C,useTransition:compat_module_k}}},vn="18.3.1";function dn(n){return _.bind(null,n)}function mn(n){return!!n&&n.$$typeof===compat_module_q}function pn(n){return mn(n)&&n.type===k}function yn(n){return!!n&&!!n.displayName&&("string"==typeof n.displayName||n.displayName instanceof String)&&n.displayName.startsWith("Memo(")}function _n(n){return mn(n)?J.apply(null,arguments):n}function bn(n){return!!n.__k&&(E(null,n),!0)}function Sn(n){return n&&(n.base||1===n.nodeType&&n)||null}var gn=function(n,t){return n(t)},En=function(n,t){return n(t)},Cn=k,xn=mn,Rn={useState:hooks_module_d,useId:hooks_module_g,useReducer:hooks_module_h,useEffect:hooks_module_y,useLayoutEffect:hooks_module_,useInsertionEffect:compat_module_I,useTransition:compat_module_k,useDeferredValue:compat_module_w,useSyncExternalStore:compat_module_C,startTransition:R,useRef:hooks_module_A,useImperativeHandle:hooks_module_F,useMemo:hooks_module_T,useCallback:hooks_module_q,useContext:hooks_module_x,useDebugValue:hooks_module_P,version:"18.3.1",Children:compat_module_O,render:nn,hydrate:tn,unmountComponentAtNode:bn,createPortal:compat_module_$,createElement:_,createContext:K,createFactory:dn,cloneElement:_n,createRef:b,Fragment:k,isValidElement:mn,isElement:xn,isFragment:pn,isMemo:yn,findDOMNode:Sn,Component:x,PureComponent:compat_module_N,memo:compat_module_M,forwardRef:compat_module_D,flushSync:En,unstable_batchedUpdates:gn,StrictMode:Cn,Suspense:compat_module_P,SuspenseList:compat_module_B,lazy:compat_module_z,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:hn};
//# sourceMappingURL=compat.module.js.map

;// ./node_modules/preact/compat/client.mjs


function createRoot(container) {
	return {
		// eslint-disable-next-line
		render: function (children) {
			nn(children, container);
		},
		// eslint-disable-next-line
		unmount: function () {
			bn(container);
		}
	};
}

function hydrateRoot(container, children) {
	tn(children, container);
	return createRoot(container);
}

/* harmony default export */ var client = ({
	createRoot,
	hydrateRoot
});

;// ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module_t=/["&<]/;function jsxRuntime_module_n(r){if(0===r.length||!1===jsxRuntime_module_t.test(r))return r;for(var e=0,n=0,o="",f="";n<r.length;n++){switch(r.charCodeAt(n)){case 34:f="&quot;";break;case 38:f="&amp;";break;case 60:f="&lt;";break;default:continue}n!==e&&(o+=r.slice(e,n)),o+=f,e=n+1}return n!==e&&(o+=r.slice(e,n)),o}var jsxRuntime_module_o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,jsxRuntime_module_f=0,jsxRuntime_module_i=Array.isArray;function jsxRuntime_module_u(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--jsxRuntime_module_f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===p[c]&&(p[c]=a[c]);return preact_module_l.vnode&&preact_module_l.vnode(l),l}function jsxRuntime_module_a(r){var t=jsxRuntime_module_u(e,{tpl:r,exprs:[].slice.call(arguments,1)});return t.key=t.__v,t}var jsxRuntime_module_c={},jsxRuntime_module_p=/[A-Z]/g;function jsxRuntime_module_l(e,t){if(r.attr){var f=r.attr(e,t);if("string"==typeof f)return f}if(t=function(r){return null!==r&&"object"==typeof r&&"function"==typeof r.valueOf?r.valueOf():r}(t),"ref"===e||"key"===e)return"";if("style"===e&&"object"==typeof t){var i="";for(var u in t){var a=t[u];if(null!=a&&""!==a){var l="-"==u[0]?u:jsxRuntime_module_c[u]||(jsxRuntime_module_c[u]=u.replace(jsxRuntime_module_p,"-$&").toLowerCase()),s=";";"number"!=typeof a||l.startsWith("--")||jsxRuntime_module_o.test(l)||(s="px;"),i=i+l+":"+a+s}}return e+'="'+jsxRuntime_module_n(i)+'"'}return null==t||!1===t||"function"==typeof t||"object"==typeof t?"":!0===t?e:e+'="'+jsxRuntime_module_n(""+t)+'"'}function jsxRuntime_module_s(r){if(null==r||"boolean"==typeof r||"function"==typeof r)return null;if("object"==typeof r){if(void 0===r.constructor)return r;if(jsxRuntime_module_i(r)){for(var e=0;e<r.length;e++)r[e]=jsxRuntime_module_s(r[e]);return r}}return jsxRuntime_module_n(""+r)}
//# sourceMappingURL=jsxRuntime.module.js.map

;// ./node_modules/preact/compat/jsx-runtime.mjs




;// ./src/components/Header.jsx


function Header() {
  const [expanded, setExpanded] = hooks_module_d(false);
  const [toggled, setToggled] = hooks_module_d(false);
  const onClick = () => {
    if (!toggled) setToggled(true);
    setExpanded(!expanded);
  };
  return /*#__PURE__*/jsxRuntime_module_u("header", {
    className: "header",
    children: [/*#__PURE__*/jsxRuntime_module_u("a", {
      href: "/",
      className: "header__logo",
      "aria-label": "\u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u043E\u043C"
    }), /*#__PURE__*/jsxRuntime_module_u("button", {
      className: "header__menu",
      "aria-expanded": expanded ? "true" : "false",
      onClick: onClick,
      children: /*#__PURE__*/jsxRuntime_module_u("span", {
        className: "header__menu-text a11y-hidden",
        children: expanded ? "Закрыть меню" : "Открыть меню"
      })
    }), /*#__PURE__*/jsxRuntime_module_u("ul", {
      className: "header__links" + (expanded ? " header__links_opened" : "") + (toggled ? " header__links-toggled" : ""),
      children: [/*#__PURE__*/jsxRuntime_module_u("li", {
        className: "header__item",
        children: /*#__PURE__*/jsxRuntime_module_u("a", {
          className: "header__link header__link_current",
          href: "/",
          "aria-current": "page",
          children: "\u0421\u0432\u043E\u0434\u043A\u0430"
        })
      }), /*#__PURE__*/jsxRuntime_module_u("li", {
        className: "header__item",
        children: /*#__PURE__*/jsxRuntime_module_u("a", {
          className: "header__link",
          href: "/devices",
          children: "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
        })
      }), /*#__PURE__*/jsxRuntime_module_u("li", {
        className: "header__item",
        children: /*#__PURE__*/jsxRuntime_module_u("a", {
          className: "header__link",
          href: "/scripts",
          children: "\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438"
        })
      })]
    })]
  });
}
;// ./src/components/Event.jsx


const Event = /*#__PURE__*/Rn.memo(function Event(props) {
  return /*#__PURE__*/jsxRuntime_module_u("li", {
    className: "event" + (props.slim ? " event_slim" : ""),
    children: /*#__PURE__*/jsxRuntime_module_u("button", {
      className: "event__button",
      children: [/*#__PURE__*/jsxRuntime_module_u("span", {
        className: `event__icon event__icon_${props.icon}`,
        role: "img",
        "aria-label": props.iconLabel
      }), /*#__PURE__*/jsxRuntime_module_u("h4", {
        className: "event__title",
        children: props.title
      }), props.subtitle && /*#__PURE__*/jsxRuntime_module_u("span", {
        className: "event__subtitle",
        children: props.subtitle
      })]
    })
  });
});
/* harmony default export */ var components_Event = (Event);
;// ./src/components/tabs.js
const TABS = {
  all: {
    title: "Все",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Yeelight LED Smart Bulb",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "D-Link Omna 180 Cam",
      subtitle: "Включится в 17:00"
    }, {
      icon: "temp",
      iconLabel: "Температура",
      title: "Elgato Eve Degree Connected",
      subtitle: "Выключено до 17:00"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "LIFX Mini Day & Dusk A60 E27",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }]
  },
  kitchen: {
    title: "Кухня",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Yeelight LED Smart Bulb",
      subtitle: "Включено"
    }, {
      icon: "temp",
      iconLabel: "Температура",
      title: "Elgato Eve Degree Connected",
      subtitle: "Выключено до 17:00"
    }]
  },
  hall: {
    title: "Зал",
    items: [{
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Выключено"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Выключено"
    }]
  },
  lights: {
    title: "Лампочки",
    items: [{
      icon: "light",
      iconLabel: "Освещение",
      title: "D-Link Omna 180 Cam",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "LIFX Mini Day & Dusk A60 E27",
      subtitle: "Включится в 17:00"
    }, {
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }, {
      icon: "light",
      iconLabel: "Освещение",
      title: "Philips Zhirui",
      subtitle: "Включено"
    }]
  },
  cameras: {
    title: "Камеры",
    items: [{
      icon: "light2",
      iconLabel: "Освещение",
      title: "Xiaomi Mi Air Purifier 2S",
      subtitle: "Включено"
    }]
  }
};
let uid = 0;
for (const key of Object.keys(TABS)) {
  TABS[key].items = TABS[key].items.map(item => ({
    ...item,
    id: `tab-${key}-${uid++}`
  }));
}
for (let i = 0; i < 6; ++i) {
  TABS.all.items = TABS.all.items.concat(TABS.all.items.map(item => ({
    ...item,
    id: `tab-all-${uid++}`
  })));
}

// for (let i = 0; i < 6; ++i) {
//   TABS.all.items = TABS.all.items.concat(TABS.all.items);
// }
const TABS_KEYS = Object.keys(TABS);
;// ./src/components/MainMenu.jsx




// const Event = lazy(() => import("./Event"));

function MainMenu() {
  const wrapperRef = hooks_module_A();
  const initedRef = hooks_module_A(false);
  const [activeTab, setActiveTab] = hooks_module_d("");
  const [hasRightScroll, setHasRightScroll] = hooks_module_d(false);
  // const observerRef = useRef(null);
  // const activePanelRef = useRef(null);

  hooks_module_y(() => {
    if (!initedRef.current) {
      initedRef.current = true;
      setActiveTab(new URLSearchParams(location.search).get("tab") || "all");
    }
  }, []);

  // useEffect(() => {
  //   const panel = activePanelRef.current;
  //   if (!panel) return;

  //   const checkScroll = () => {
  //     const panelList = panel.querySelector(".section__panel-list");
  //     const wrapper = wrapperRef.current;
  //     if (!panelList || !wrapper) return;

  //     const panelListWidth = panelList.scrollWidth;
  //     const wrapperWidth = wrapper.offsetWidth;

  //     setHasRightScroll(panelListWidth > wrapperWidth);
  //   };

  //   checkScroll();

  //   if (!observerRef.current) {
  //     observerRef.current = new ResizeObserver(checkScroll);
  //   }

  //   observerRef.current.observe(panel);

  //   return () => {
  //     if (panel && observerRef.current) {
  //       observerRef.current.unobserve(panel);
  //     }
  //   };
  // }, [activeTab]);

  hooks_module_y(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const panel = wrapper.querySelector(".section__panel:not(.section__panel_hidden)");
    if (!panel) return;
    const checkScroll = () => {
      const panelList = panel.querySelector(".section__panel-list");
      if (!panelList) return;
      const panelListWidth = panelList.scrollWidth;
      const wrapperWidth = wrapper.offsetWidth;
      setHasRightScroll(panelListWidth > wrapperWidth);
    };
    checkScroll();
    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(panel);
    return () => {
      resizeObserver.disconnect();
    };
  }, [activeTab]);
  const onSelectInput = event => {
    setActiveTab(event.target.value);
  };
  const onArrowClick = () => {
    const scroller = wrapperRef.current.querySelector(".section__panel:not(.section__panel_hidden)");
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth"
      });
    }
  };
  const handleClick = hooks_module_q(key => () => {
    setActiveTab(key);
  }, []);
  const tabOptions = TABS_KEYS.map(key => /*#__PURE__*/jsxRuntime_module_u("option", {
    value: key,
    children: TABS[key].title
  }, key));
  const tabList = TABS_KEYS.map(key => /*#__PURE__*/jsxRuntime_module_u("li", {
    role: "tab",
    "aria-selected": key === activeTab ? "true" : "false",
    tabIndex: key === activeTab ? "0" : undefined,
    className: "section__tab" + (key === activeTab ? " section__tab_active" : ""),
    id: `tab_${key}`,
    "aria-controls": `panel_${key}`,
    onClick: handleClick(key),
    children: TABS[key].title
  }, key));
  const activeTabPanel = TABS[activeTab];
  const tabPanels = /*#__PURE__*/jsxRuntime_module_u("div", {
    role: "tabpanel",
    className: "section__panel",
    "aria-hidden": "false",
    id: `panel_${activeTab}`,
    "aria-labelledby": `tab_${activeTab}`
    // ref={activePanelRef}
    ,
    children: /*#__PURE__*/jsxRuntime_module_u("ul", {
      className: "section__panel-list",
      children: activeTabPanel?.items.map(item => /*#__PURE__*/jsxRuntime_module_u(components_Event, {
        ...item
      }, item.id))
    })
  });
  return /*#__PURE__*/jsxRuntime_module_u("main", {
    className: "main",
    children: [/*#__PURE__*/jsxRuntime_module_u("section", {
      className: "section main__general",
      children: [/*#__PURE__*/jsxRuntime_module_u("h2", {
        className: "section__title section__title-header section__main-title",
        children: "\u0413\u043B\u0430\u0432\u043D\u043E\u0435"
      }), /*#__PURE__*/jsxRuntime_module_u("div", {
        className: "hero-dashboard",
        children: [/*#__PURE__*/jsxRuntime_module_u("div", {
          className: "hero-dashboard__primary",
          children: [/*#__PURE__*/jsxRuntime_module_u("h3", {
            className: "hero-dashboard__title",
            children: "\u041F\u0440\u0438\u0432\u0435\u0442, \u0413\u0435\u043D\u043D\u0430\u0434\u0438\u0439!"
          }), /*#__PURE__*/jsxRuntime_module_u("p", {
            className: "hero-dashboard__subtitle",
            children: "\u0414\u0432\u0435\u0440\u0438 \u0438 \u043E\u043A\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B, \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430."
          }), /*#__PURE__*/jsxRuntime_module_u("ul", {
            className: "hero-dashboard__info",
            children: [/*#__PURE__*/jsxRuntime_module_u("li", {
              className: "hero-dashboard__item",
              children: [/*#__PURE__*/jsxRuntime_module_u("div", {
                className: "hero-dashboard__item-title",
                children: "\u0414\u043E\u043C\u0430"
              }), /*#__PURE__*/jsxRuntime_module_u("div", {
                className: "hero-dashboard__item-details",
                children: ["+23", /*#__PURE__*/jsxRuntime_module_u("span", {
                  className: "a11y-hidden",
                  children: "\xB0"
                })]
              })]
            }), /*#__PURE__*/jsxRuntime_module_u("li", {
              className: "hero-dashboard__item",
              children: [/*#__PURE__*/jsxRuntime_module_u("div", {
                className: "hero-dashboard__item-title",
                children: "\u0417\u0430 \u043E\u043A\u043D\u043E\u043C"
              }), /*#__PURE__*/jsxRuntime_module_u("div", {
                className: "hero-dashboard__item-details",
                children: ["+19", /*#__PURE__*/jsxRuntime_module_u("span", {
                  className: "a11y-hidden",
                  children: "\xB0"
                }), /*#__PURE__*/jsxRuntime_module_u("div", {
                  className: "hero-dashboard__icon hero-dashboard__icon_rain",
                  role: "img",
                  "aria-label": "\u0414\u043E\u0436\u0434\u044C"
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/jsxRuntime_module_u("ul", {
          className: "hero-dashboard__schedule",
          children: [/*#__PURE__*/jsxRuntime_module_u(components_Event, {
            icon: "temp",
            iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
            title: "Philips Cooler",
            subtitle: "\u041D\u0430\u0447\u043D\u0435\u0442 \u043E\u0445\u043B\u0430\u0436\u0434\u0430\u0442\u044C \u0432 16:30"
          }), /*#__PURE__*/jsxRuntime_module_u(components_Event, {
            icon: "light",
            iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
            title: "Xiaomi Yeelight LED Smart Bulb",
            subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
          }), /*#__PURE__*/jsxRuntime_module_u(components_Event, {
            icon: "light",
            iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
            title: "Xiaomi Yeelight LED Smart Bulb",
            subtitle: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0432 17:00"
          })]
        })]
      })]
    }), /*#__PURE__*/jsxRuntime_module_u("section", {
      className: "section main__scripts",
      children: [/*#__PURE__*/jsxRuntime_module_u("h2", {
        className: "section__title section__title-header",
        children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438"
      }), /*#__PURE__*/jsxRuntime_module_u("ul", {
        className: "event-grid",
        children: [/*#__PURE__*/jsxRuntime_module_u(components_Event, {
          slim: true,
          icon: "light2",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u0432\u0435\u0442 \u0432 \u0434\u043E\u043C\u0435 \u0438 \u0432\u043E \u0434\u0432\u043E\u0440\u0435"
        }), /*#__PURE__*/jsxRuntime_module_u(components_Event, {
          slim: true,
          icon: "schedule",
          iconLabel: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
          title: "\u042F \u0443\u0445\u043E\u0436\u0443"
        }), /*#__PURE__*/jsxRuntime_module_u(components_Event, {
          slim: true,
          icon: "light2",
          iconLabel: "\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          title: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442 \u0432 \u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0435"
        }), /*#__PURE__*/jsxRuntime_module_u(components_Event, {
          slim: true,
          icon: "temp2",
          iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
          title: "\u041D\u0430\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0443\u044E \u0432\u0430\u043D\u043D\u0443",
          subtitle: "\u041D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0432 18:00"
        }), /*#__PURE__*/jsxRuntime_module_u(components_Event, {
          slim: true,
          icon: "temp2",
          iconLabel: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
          title: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B \u0442\u0451\u043F\u043B\u044B\u043C \u0432\u043E \u0432\u0441\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435"
        })]
      })]
    }), /*#__PURE__*/jsxRuntime_module_u("section", {
      className: "section main__devices",
      children: [/*#__PURE__*/jsxRuntime_module_u("div", {
        className: "section__title",
        children: [/*#__PURE__*/jsxRuntime_module_u("h2", {
          className: "section__title-header",
          children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
        }), /*#__PURE__*/jsxRuntime_module_u("select", {
          className: "section__select",
          defaultValue: "all",
          onChange: onSelectInput,
          children: tabOptions
        }), /*#__PURE__*/jsxRuntime_module_u("ul", {
          role: "tablist",
          className: "section__tabs",
          children: tabList
        })]
      }), /*#__PURE__*/jsxRuntime_module_u("div", {
        className: "section__panel-wrapper",
        ref: wrapperRef,
        children: [tabPanels, hasRightScroll && /*#__PURE__*/jsxRuntime_module_u("div", {
          className: "section__arrow",
          onClick: onArrowClick
        })]
      })]
    })]
  });
}
;// ./src/components/App.jsx



function App() {
  return /*#__PURE__*/jsxRuntime_module_u(k, {
    children: [/*#__PURE__*/jsxRuntime_module_u(Header, {}), /*#__PURE__*/jsxRuntime_module_u(MainMenu, {})]
  });
}
;// ./src/index.js




const root = client.createRoot(document.getElementById("app"));
root.render(/*#__PURE__*/jsxRuntime_module_u(App, {}));
/******/ })()
;