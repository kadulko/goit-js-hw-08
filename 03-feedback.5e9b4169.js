!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(O,t),s?y(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=p();if(T(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function S(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function w(){var e=p(),n=T(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=h(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?u:S(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},T=document.querySelector(".feedback-form"),O="feedback-form-state",S={email:"",message:""};!function(){if(j.load(O)){var e=j.load(O);T.email.value=e.email,T.message.value=e.message}}(),T.addEventListener("input",(function(e){var t=e.currentTarget.elements,n=t.email,r=t.message;S.email=n.value,S.message=r.value})),T.addEventListener("input",e(t)((function(){j.save(O,S)}),500)),T.addEventListener("submit",(function(e){e.preventDefault();var t={email:T.email.value,message:T.message.value};console.log(t),j.remove(O),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.5e9b4169.js.map