var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function p(t,e,n){var o,r,i,f,u,a,c=0,p=!1,m=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function j(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function g(t){return c=t,u=setTimeout(T,e),p?j(t):f}function x(t){var n=t-a;return void 0===a||n>=e||n<0||m&&t-c>=i}function T(){var t=d();if(x(t))return h(t);u=setTimeout(T,function(t){var n=e-(t-a);return m?s(n,i-(t-c)):n}(t))}function h(t){return u=void 0,y&&o?j(t):(o=r=void 0,f)}function w(){var t=d(),n=x(t);if(o=arguments,r=this,a=t,n){if(void 0===u)return g(a);if(m)return u=setTimeout(T,e),j(a)}return void 0===u&&(u=setTimeout(T,e)),f}return e=b(e)||0,v(n)&&(p=!!n.leading,i=(m="maxWait"in n)?l(b(n.maxWait)||0,e):i,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},w.flush=function(){return void 0===u?f:h(d())},w}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(v(t)){var f="function"==typeof t.valueOf?t.valueOf():t;t=v(f)?f+"":f}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var u=o.test(t);return u||r.test(t)?i(t.slice(2),u?2:8):n.test(t)?NaN:+t}const m={form:document.querySelector(".js-feedback-form"),textarea:document.querySelector(".js-feedback-form",textarea)};m.form.addEventListener("submit",onFormSubmit),m.textarea.addEventListener("input",onTextareaInput);
//# sourceMappingURL=03-feedback.4cfcdbbe.js.map
