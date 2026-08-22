"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(9,{theme_uploads:{FONT_0B7969EB2585C3882:"//devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/9/1/a/91a9953eeaf4ed11a424ea57bd3c2dfaa686c948.woff2",FONT_43BD528447A758FAF:"//devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/b/4/5/b451a3a2ab0b04170804d6cf823c6465f33f6f44.woff2",FONT_A36B34AC3BD8532CD:"//devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/7/9/8/7985774d3676c27586c71bbf28b1f53598951a05.woff2",FONT_A4F20E8E1A16DF8A8:"//devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/8/c/2/8c21c748004366757a93c587668ab55cb6a4bdf0.woff2",FONT_AFDFD77D599BBB531:"//devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/f/5/1/f514a9e346cd443d196c1bc401f078a9fa147323.woff2"}})
const TESTING_ENABLED=window.location.hostname.includes("localhost")||window.location.hostname.includes("alt");(function(o){function e(o,e,n){var i=document,a="script",t=i.getElementsByTagName(a)[0]
t||(t=i.head)
var s=i.createElement(a)
s.async=n,s.id=o,s.src=e,s.charset="utf-8",t.parentNode.insertBefore(s,t)}handleGoogleAnalytics=function(o){},window.evidon={},window.evidon.id=o,window.evidon.test=!1
var n="//c.evidon.com/",i=function(){var o,e=window.location.hostname.split(".")
if(2===e.length)i=e[0]
else if(e.length>2){var n=e[e.length-2]
i=-1!==["co","com","info","web","info","gov","edu","biz","net","org"].indexOf(o=n)||-1!==["uk","us","fr","es","de","at","au","ae","be","br","ca","ch","cn","co","cz","dk","eg","eu","fi","gb","gr","hk","hr","hu","ie","in","jp","mx","nl","no","nz","pl","ro","ru","se"].indexOf(o)?e[e.length-3]:n}return TESTING_ENABLED?"roblox":i}(),a=n+"sitenotice/"
e("evidon-notice",a+"evidon-sitenotice-tag.js",!1),e("evidon-location",TESTING_ENABLED?n+"tag-fr/country.js":n+"geo/country.js",!0),e("evidon-themes",a+o+"/snthemes.js",!0),i&&e("evidon-settings",a+o+"/"+i+(window.evidon.test?"/test":"")+"/settings.js",!0),window.evidon.priorConsentCallback=function(o,e,n){var i={},a={"google-analytics":"handleGoogleAnalytics"}
for(var t in o){if(o[t])"function"==typeof(d=window.evidon[i[t]])&&d()}for(var s in e){var d
if(e[s])"function"==typeof(d=window.evidon[a[s]])&&d()}e["google-analytics"]||!0===e.all||!0===n.all?handleGoogleAnalytics(!1):void 0!==e["google-analytics"]&&null!==e["google-analytics"]||handleGoogleAnalytics(!0)},window.evidon.closeCallback=function(){},window.evidon.consentWithdrawnCallback=function(){handleGoogleAnalytics(!0),window.evidon.notice.dropSuppressionCookie(360)},window.evidon.consentDeclinedCallback=function(){handleGoogleAnalytics(!0),window.evidon.notice.dropSuppressionCookie(360)},document.addEventListener("DOMContentLoaded",(function(){const o=new MutationObserver(((o,e)=>{const n=document.getElementById("_evidon-message")
if(n){e.disconnect()
const o=n.querySelector(".evidon-consent-link")
o&&window.evidon&&!o.dataset.bound&&(o.dataset.bound="true",o.addEventListener("click",(function(o){o.preventDefault(),window.evidon.notice.showOptions()})))}}))
o.observe(document.body,{childList:!0,subtree:!0}),setTimeout((()=>o.disconnect()),1e4)}))})(3822),TESTING_ENABLED&&setTimeout((function(){window.evidon.notice.setDomain("devforum.roblox.com")}),2e3)

//# sourceMappingURL=a26340204b2e6baaa233e0341324fae51ec6a017.map?__ws=devforum.roblox.com
