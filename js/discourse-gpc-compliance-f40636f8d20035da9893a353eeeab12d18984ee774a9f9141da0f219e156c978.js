define("discourse/plugins/discourse-gpc-compliance/discourse/initializers/gpc-compliance",["exports","discourse/lib/plugin-api"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const n="gpc-status-container",o="Feature.Privacy",r="Title.NoOptOutSignal",s="Title.OptOutSignalDetected",c="Body.OptOutRequestHonored",i="Body.PastChoicesConfigured",a="Link.YourPrivacyChoices"
let l=null,u=null
const d={en:"en-us",en_us:"en-us",es:"es-es",es_es:"es-es",pt:"pt-br",pt_br:"pt-br",fr:"fr-fr",fr_fr:"fr-fr",de:"de-de",de_de:"de-de",it:"it-it",it_it:"it-it",ja:"ja-jp",ja_jp:"ja-jp",ko:"ko-kr",ko_kr:"ko-kr",zh_cn:"zh-cn",zh_tw:"zh-tw"}
async function p(e,t){return l||(u||(u=(async()=>{try{const n=e?.react_bootstrapper_cdn||"",r=e?.react_bootstrapper_release_commit_sha||"",s=function(e){try{if(e?.locale){const t=e.locale.toLowerCase()
return d[t]||"en-us"}}catch(t){}return"en-us"}(t),c=localStorage.getItem("rbx-dev-session"),i=null===c?`${n}/locales/${r}/${s}/${o}.json`:`${n}/dev/${c}/locales/${s}/${o}.json`,a=await fetch(i)
if(a.ok){const e=await a.json()
return l=e,e}}catch(n){}return null})(),u))}const f={"Title.NoOptOutSignal":"No Opt-out Signal Detected","Title.OptOutSignalDetected":"Opt-Out Signal Detected","Body.OptOutRequestHonored":"Opt-Out Request Honored","Body.PastChoicesConfigured":"Based on your past choices, your cookies have been configured as shown below","Link.YourPrivacyChoices":"Your Privacy Choices"}
function v(e,t){return t&&t[e]?t[e]:f[e]||e}function A(){try{const t=["OptanonConsent","evidon-consent","evidon_consent_cookie","_evidon_consent_cookie"].some((e=>{let t=document.cookie.split(";").find((t=>t.trim().startsWith(e+"=")))
if(t||e.startsWith("_")||(t=document.cookie.split(";").find((t=>t.trim().startsWith("_"+e+"=")))),t){const r=t.indexOf("="),s=r>=0?t.substring(r+1):""
if(!s||s.length<10)return!1
if("OptanonConsent"===e)try{const e=decodeURIComponent(s),t=e.match(/groups[=:]([^&,]*)/i)
if(t&&t[1]&&t[1].trim().length>0){const e=t[1].split(",")
if(e.some((e=>{const t=e.trim()
if(!t)return!1
const n=t.split(":")
if(n.length>=2){if("1"===n[n.length-1].trim())return!0}return!1})))return!0}const n=e.match(/purposes[=:]([^&,]*)/i)
if(n&&n[1]&&n[1].trim().length>0){const e=n[1].split(",")
if(e.some((e=>{const t=e.trim()
if(!t)return!1
const n=t.split(":")
if(n.length>=2){return"1"===n[n.length-1].trim()}return!1})))return!0}return!1}catch(n){return!1}try{const e=decodeURIComponent(s)
try{const t=JSON.parse(e)
if("object"==typeof t){if(!0===t.consent)return!0
if(Array.isArray(t.vendors)){if(t.vendors.some((e=>!0===e.consent||!0===e.accepted)))return!0}if(t.vendors&&"object"==typeof t.vendors&&!Array.isArray(t.vendors)){const e=Object.values(t.vendors)
if(e.some((e=>{if("object"==typeof e&&null!==e){if(!0===e.consent||!0===e.accepted)return!0
return Object.values(e).some((e=>!0===e))}return!0===e||1===e})))return!0}if(t.categories&&"object"==typeof t.categories&&!Array.isArray(t.categories)){const e=Object.values(t.categories)
if(e.some((e=>{if("object"==typeof e&&null!==e){if(!0===e.consent||!0===e.accepted)return!0
return Object.values(e).some((e=>!0===e))}return!0===e||1===e})))return!0}if(Array.isArray(t.groups)){if(t.groups.some((e=>!0===e.consent||!0===e.consented)))return!0}}}catch(o){const t=e.toLowerCase()
if(t.includes("consent=true")||t.includes("accepted=true")||t.includes("consented=1"))return!0}}catch(n){return!1}}return!1}))
let n=null
try{n=window.evidon?.notice?.getConsentData?.()}catch(e){}if(n){let e=[],t=null,o=null
Array.isArray(n.vendors)?e=n.vendors:n.value&&Array.isArray(n.value.vendors)?e=n.value.vendors:n.value&&"object"==typeof n.value&&(n.value.vendors&&"object"==typeof n.value.vendors&&!Array.isArray(n.value.vendors)&&(t=n.value.vendors),n.value.categories&&"object"==typeof n.value.categories&&!Array.isArray(n.value.categories)&&(o=n.value.categories),n.value.consentData&&Array.isArray(n.value.consentData.vendors)&&(e=n.value.consentData.vendors))
let r=!1
if(e.length>0&&(r=e.some((e=>!0===e.consent||!0===e.accepted))),!r&&t){r=Object.values(t).some((e=>{if("object"==typeof e&&null!==e){if(!0===e.consent||!0===e.accepted)return!0
return Object.values(e).some((e=>!0===e))}return!0===e||1===e}))}if(!r&&o){r=Object.values(o).some((e=>{if("object"==typeof e&&null!==e){if(!0===e.consent||!0===e.accepted)return!0
return Object.values(e).some((e=>!0===e))}return!0===e||1===e}))}if(r)return!0}try{const t=Object.keys(localStorage).concat(Object.keys(sessionStorage)).filter((e=>e.toLowerCase().includes("consent")||e.toLowerCase().includes("evidon")||e.toLowerCase().includes("optanon")))
if(t.length>0){if(t.some((t=>{const n=localStorage.getItem(t)||sessionStorage.getItem(t)
if(!n||n.length<5)return!1
try{const e=JSON.parse(n)
if("object"==typeof e){if(!0===e.consent)return!0
if(Array.isArray(e.vendors)){if(e.vendors.some((e=>!0===e.consent||!0===e.accepted)))return!0}if(Array.isArray(e.groups)){if(e.groups.some((e=>!0===e.consent||!0===e.consented)))return!0}}}catch(e){const o=n.toLowerCase()
if(o.includes("consent=true")||o.includes("accepted=true")||o.includes("consented=1")||o.includes('"consent":true'))return!0}return!1})))return!0}}catch(e){}return t}catch(t){return!1}}async function y(e,t){if(document.getElementById(n))return!0
if(void 0===window.evidon?.notice?.userGpcEnabled)return!1
const o=await p(e,t),a=function(){const e=navigator.globalPrivacyControl,t=window.evidon?.notice?.userGpcEnabled
return Boolean(e||t)}()
let l=!1
try{let e=null
try{e=window.evidon?.notice?.getConsentData?.()}catch(g){}if(e){let t=[],n=null,o=null
if(Array.isArray(e.vendors)?t=e.vendors:e.value&&Array.isArray(e.value.vendors)?t=e.value.vendors:e.value&&"object"==typeof e.value&&(l||!e.value.vendors||"object"!=typeof e.value.vendors||Array.isArray(e.value.vendors)||(n=e.value.vendors),l||!e.value.categories||"object"!=typeof e.value.categories||Array.isArray(e.value.categories)||(o=e.value.categories),!l&&e.value.consentData&&Array.isArray(e.value.consentData.vendors)&&(t=e.value.consentData.vendors)),!l&&t.length>0&&(l=t.some((e=>!0===e.consent||!0===e.accepted))),!l&&n){l=Object.values(n).some((e=>{if("object"==typeof e&&null!==e){if(!0===e.consent||!0===e.accepted)return!0
return Object.values(e).some((e=>!0===e))}return!0===e||1===e}))}if(!l&&o){l=Object.values(o).some((e=>{if("object"==typeof e&&null!==e){if(!0===e.consent||!0===e.accepted)return!0
return Object.values(e).some((e=>!0===e))}return!0===e||1===e}))}}l||(l=A())}catch(g){l=A()}a&&function(){if(window.evidon?.notice)try{if(window.evidon.notice.setConsent){const e=window.evidon.notice.getConsentData?.()
e&&e.vendors&&e.vendors.forEach((e=>{try{window.evidon.notice.setConsent(e.id,!1)}catch(t){}}))}window.evidon.notice.declineAll&&window.evidon.notice.declineAll()}catch(e){}}()
const u=function(e,t,o){const a="margin-top: 22px;",l="color: #d13212; margin: 0; padding: 0;"
return e?t?`\n      <div class="gpc-status-container" id="${n}" style="${a}">\n        <p aria-live="polite" role="status" class="gpc-status" style="${l}">${v(s,o)}</p>\n        <p aria-live="polite" role="status" class="gpc-status" style="${l}">${v(i,o)}</p>\n      </div>\n    `:`\n      <div class="gpc-status-container" id="${n}" style="${a}">\n        <p aria-live="polite" role="status" class="gpc-status" style="${l}">${v(s,o)}</p>\n        <p aria-live="polite" role="status" class="gpc-status" style="${l}">${v(c,o)}</p>\n      </div>\n    `:`\n      <div class="gpc-status-container" id="${n}" style="${a}">\n        <p aria-live="polite" role="status" class="gpc-status" style="${l}">${v(r,o)}</p>\n      </div>\n    `}(a,l,o),d=function(){const e=document.getElementById("prc-tp-cat-message")
if(!e)return null
const t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,null,!1)
let n
for(;n=t.nextNode();)if("H2"===n.tagName&&n.textContent&&/request.*your.*data/i.test(n.textContent))return n
const o=e.querySelectorAll("h2")
for(let r=0;r<o.length;r++)if(o[r].textContent&&/request.*your.*data/i.test(o[r].textContent))return o[r]
return null}()
if(!d){const e=document.getElementById("prc-tp-cat-message")
if(!e)return!1
const t=document.createElement("div")
t.innerHTML=u
const n=t.firstElementChild
return n&&e.insertAdjacentElement("afterend",n),!0}const f=document.createElement("div")
f.innerHTML=u
const y=f.firstElementChild
return y&&d.insertAdjacentElement("beforebegin",y),!0}function g(e,t){let n,o,r=null
const s=async()=>{await y(e,t)&&(n&&clearInterval(n),o&&clearTimeout(o))}
return r=new MutationObserver((()=>{s()})),r.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1}),s(),n=setInterval(s,500),o=setTimeout((()=>{n&&clearInterval(n),r&&r.disconnect()}),1e4),()=>{n&&clearInterval(n),o&&clearTimeout(o),r&&r.disconnect()}}async function m(e,t){const n=await p(e,t),o=setInterval((()=>{let t=null
const r=document.querySelector(".footer-rbx-entrypoint")||document.querySelector('[class*="footer-rbx-entrypoint"]')
if(r)t=r
else{const e=document.querySelector(".below-footer-outlet")
if(e){const n=e.querySelector("#footer_rbx")
t=n||e}else{const e=document.getElementById("footer_rbx")
e&&(t=e)}}if(!t)return
if(document.getElementById("gpc-privacy-choices-link"))return void clearInterval(o)
const s=document.createElement("a")
s.id="gpc-privacy-choices-link",s.href="#",s.className="gpc-privacy-choices-link",s.style.cursor="pointer",s.textContent=v(a,n)
const c=document.createElement("img"),i=e?.react_bootstrapper_cdn||"",l="data:image/png;base64,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"
c.src=i?`${i}/images/Privacy_Icon.png`:l,c.alt="",c.style.marginLeft="8px",c.style.verticalAlign="middle",c.style.height="14px",c.style.width="auto",c.onerror=function(){this.src=l},s.appendChild(c)
const u=document.createElement("div")
u.className="gpc-privacy-choices-container",u.appendChild(s),s.addEventListener("click",(e=>{e.preventDefault(),window.evidon?.notice?.showOptions&&window.evidon.notice.showOptions()})),t.insertAdjacentElement("afterend",u),clearInterval(o)}),500)
setTimeout((()=>{clearInterval(o)}),1e4)}e.default={name:"gpc-compliance",initialize(){(0,t.withPluginApi)("2.0.0",(e=>{const t=e.container.lookup("service:site-settings")
if(!t.gpc_compliance_enabled)return
const n=e.getCurrentUser()
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(()=>{g(t,n),m(t,n)})):(g(t,n),m(t,n))}))}}})),define("discourse/plugins/discourse-gpc-compliance/discourse/templates/connectors/below-footer",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"IymbUxa5",block:'[[[1,[28,[35,0],null,[["name"],["below-footer"]]]],[1,"\\n\\n\\n"]],[],false,["below-footer"]]',moduleName:"discourse/plugins/discourse-gpc-compliance/discourse/templates/connectors/below-footer.hbs",isStrictMode:!1})}))

//# sourceMappingURL=discourse-gpc-compliance-0594727d9b82888064bf0f5ff0a5923dc4073aa52e697edc0f16d282477c8538.map
//!

;
