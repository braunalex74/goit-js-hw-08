!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=c||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,b=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var r,i,u,f,a,c,d=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,d=t,f=e.apply(o,n)}function x(e){return d=e,a=setTimeout(h,t),l?g(e):f}function T(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-d>=u}function h(){var e=m();if(T(e))return O(e);a=setTimeout(h,function(e){var n=t-(e-c);return s?b(n,u-(e-d)):n}(e))}function O(e){return a=void 0,p&&r?g(e):(r=i=void 0,f)}function w(){var e=m(),n=T(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return x(c);if(s)return a=setTimeout(h,t),g(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=j(t)||0,y(n)&&(l=!!n.leading,u=(s="maxWait"in n)?v(j(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),d=0,r=c=i=a=void 0},w.flush=function(){return void 0===a?f:O(m())},w}function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=y(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):i.test(e)?NaN:+e}var g={form:document.querySelector(".js-feedback-form"),textarea:document.querySelector(".js-feedback-form",textarea)};g.form.addEventListener("submit",onFormSubmit),g.textarea.addEventListener("input",onTextareaInput)}();
//# sourceMappingURL=03-feedback.bacad129.js.map