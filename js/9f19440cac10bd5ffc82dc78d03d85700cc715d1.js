"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(22,{toggle_icon:"paintbrush",hide_theme_name:!1}),"define"in window&&define("discourse/theme-22/discourse/components/sidebar-theme-toggle",["exports","@ember/component","@glimmer/component","@glimmer/tracking","@ember/object","@ember/service","discourse/lib/theme-selector","@ember/template-factory"],(function(e,t,s,i,o,r,n,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(22)
const c=(0,a.createTemplateFactory)({id:null,block:'[[[41,[30,0,["hasThemes"]],[[[1,"  "],[10,0],[14,0,"sidebar-theme-toggle__wrapper"],[12],[1,"\\n    "],[1,[28,[35,2],[[28,[37,3],[22,"toggle_icon"],null]],null]],[1,"\\n\\n    "],[8,[39,4],[[24,0,"sidebar-theme-toggle-dropdown"]],[["@content","@value","@onChange","@options"],[[30,0,["availableThemes"]],[30,0,["currentTheme"]],[28,[37,5],[[30,0],"setTheme"],null],[28,[37,6],null,[["placementStrategy","placement"],["absolute","top-start"]]]]],null],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],[],false,["if","div","d-icon","theme-setting","combo-box","action","hash"]]',moduleName:"discourse/components/sidebar-theme-toggle.hbs",isStrictMode:!1})
class l extends s.default{static#e=(()=>dt7948.g(this.prototype,"site",[r.service]))()
#t=(()=>{dt7948.i(this,"site")})()
static#s=(()=>dt7948.g(this.prototype,"currentUser",[r.service]))()
#i=(()=>{dt7948.i(this,"currentUser")})()
static#o=(()=>dt7948.g(this.prototype,"availableThemes",[i.tracked],(function(){return(0,n.listThemes)(this.site)})))()
#r=(()=>{dt7948.i(this,"availableThemes")})()
static#n=(()=>dt7948.g(this.prototype,"currentTheme",[i.tracked],(function(){return(0,n.currentThemeId)()})))()
#a=(()=>{dt7948.i(this,"currentTheme")})()
static#c=(()=>dt7948.g(this.prototype,"hasThemes",[i.tracked],(function(){return this.availableThemes?.length>1})))()
#l=(()=>{dt7948.i(this,"hasThemes")})()
setTheme(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
this.currentTheme=e,this.currentUser?this.currentUser.findDetails().then((s=>{t=s.get("user_option.theme_key_seq"),(0,n.setLocalTheme)([e],t),window.location.reload()})):((0,n.setLocalTheme)([e],t),window.location.reload())}static#d=(()=>dt7948.n(this.prototype,"setTheme",[o.action]))()}e.default=l,(0,t.setComponentTemplate)(c,l)})),"define"in window&&define("discourse/theme-22/discourse/templates/connectors/sidebar-footer-actions/sidebar-theme-toggle-connector",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:null,block:'[[[8,[39,0],null,null,null]],[],false,["sidebar-theme-toggle"]]',moduleName:"discourse/theme-22/discourse/templates/connectors/sidebar-footer-actions/sidebar-theme-toggle-connector",isStrictMode:!1})}))

//# sourceMappingURL=9f19440cac10bd5ffc82dc78d03d85700cc715d1.map?__ws=devforum.roblox.com
