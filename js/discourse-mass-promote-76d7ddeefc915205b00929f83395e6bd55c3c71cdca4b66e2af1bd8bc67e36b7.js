define("discourse/plugins/discourse-mass-promote/discourse/controllers/admin-staff-tools-mass-promote",["exports","@ember/controller","@ember/object","@glimmer/tracking","discourse/lib/ajax","discourse/lib/ajax-error","@ember/service"],(function(e,s,t,o,r,i,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const u=["external_ids","usernames"]
class a extends s.default{static#e=(()=>dt7948.g(this.prototype,"siteSettings",[n.service]))()
#s=(()=>{dt7948.i(this,"siteSettings")})()
static#t=(()=>dt7948.g(this.prototype,"target_users",[o.tracked],(function(){return""})))()
#o=(()=>{dt7948.i(this,"target_users")})()
static#r=(()=>dt7948.g(this.prototype,"loading",[o.tracked],(function(){return!1})))()
#i=(()=>{dt7948.i(this,"loading")})()
static#n=(()=>dt7948.g(this.prototype,"success",[o.tracked],(function(){return!1})))()
#u=(()=>{dt7948.i(this,"success")})()
static#a=(()=>dt7948.g(this.prototype,"currentUserListMode",[o.tracked],(function(){return u[0]})))()
#l=(()=>{dt7948.i(this,"currentUserListMode")})()
static#d=(()=>dt7948.g(this.prototype,"trust_level",[o.tracked],(function(){return this.siteSettings.discourse_mass_promote_default_trust_level})))()
#c=(()=>{dt7948.i(this,"trust_level")})()
get userListModes(){return u.map((e=>({name:I18n.t(`discourse_mass_promote.user_modes.${e}`),value:e})))}get targetUsersEmpty(){return!this.target_users?.trim()}get submitDisabled(){return this.targetUsersEmpty||this.loading}promote(){this.loading=!0,this.success=!1
const e={trust_level:this.trust_level,[this.currentUserListMode]:this.target_users.split("\n")};(0,r.ajax)("/admin/staff-tools/mass-promote.json",{data:e,method:"POST"}).then((()=>{this.success=!0})).catch(i.popupAjaxError).finally((()=>{this.loading=!1}))}static#m=(()=>dt7948.n(this.prototype,"promote",[t.action]))()}e.default=a})),define("discourse/plugins/discourse-mass-promote/discourse/discourse-mass-promote-route-map",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={resource:"admin",path:"/admin",map(){this.route("staff-tools",(function(){this.route("mass-promote")}))}}})),define("discourse/plugins/discourse-mass-promote/discourse/initializers/discourse-mass-promote-admin-sidebar",["exports","discourse/lib/plugin-api"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"discourse-mass-promote-sidebar-link",initialize(){(0,s.withPluginApi)("2.0.0",(e=>{const s=e.getCurrentUser(),t=e.container.lookup("service:site-settings")
s?.staff&&t.discourse_mass_promote_enabled&&e.addAdminSidebarSectionLink("community",{name:"discourse-mass-promote",label:"discourse_mass_promote.title",route:"admin.staff-tools.mass-promote",icon:"envelope",moderator:!0})}))}}})),define("discourse/plugins/discourse-mass-promote/discourse/templates/admin/staff-tools/mass-promote",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"LNsMmCTU",block:'[[[10,0],[14,0,"control-group"],[12],[1,"\\n  "],[10,"h1"],[12],[1,[28,[35,2],["discourse_mass_promote.title"],null]],[13],[1,"\\n  "],[10,"h3"],[12],[1,[28,[35,2],["discourse_mass_promote.users.title"],null]],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[14,"for","mass-promote-user-mode"],[12],[1,[28,[35,2],["discourse_mass_promote.users.mode"],null]],[13],[1,"\\n    "],[1,[28,[35,5],null,[["valueProperty","content","value","id","onChange"],["value",[30,0,["userListModes"]],[30,0,["currentUserListMode"]],"mass-promote-user-mode",[28,[37,6],[[30,0],[28,[37,7],[[30,0,["currentUserListMode"]]],null]],null]]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"br"],[12],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[12],[1,[28,[35,2],["discourse_mass_promote.users.input"],null]],[13],[1,"\\n    "],[1,[28,[35,9],null,[["value"],[[30,0,["target_users"]]]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"br"],[12],[13],[1,"\\n\\n  "],[10,"h3"],[12],[1,[28,[35,2],["discourse_mass_promote.trust_level.title"],null]],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[12],[1,[28,[35,2],["discourse_mass_promote.trust_level.label"],null]],[13],[1,"\\n    "],[1,[28,[35,10],null,[["value","type","class"],[[30,0,["trust_level"]],"number","input-small"]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"br"],[12],[13],[10,"br"],[12],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[1,[28,[35,11],null,[["class","action","disabled","label"],["btn-default",[28,[37,6],[[30,0],"promote"],null],[30,0,["submitDisabled"]],"discourse_mass_promote.promote"]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[1,[28,[35,12],null,[["condition"],[[30,0,["loading"]]]]]],[1,"\\n\\n  "],[10,"br"],[12],[13],[1,"\\n\\n"],[41,[30,0,["success"]],[[[1,"    "],[10,0],[14,0,"alert alert-success"],[12],[1,"\\n      "],[10,2],[12],[1,[28,[35,2],["discourse_mass_promote.success"],null]],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[13],[1,"\\n"]],[],false,["div","h1","i18n","h3","label","combo-box","action","mut","br","textarea","input","d-button","conditional-loading-spinner","if","p"]]',moduleName:"discourse/plugins/discourse-mass-promote/discourse/templates/admin/staff-tools/mass-promote.hbs",isStrictMode:!1})}))

//# sourceMappingURL=discourse-mass-promote-84c5a9d61896f288a92e56a49ccc0971cc87574a7efd1c03dfece8cd728dbb26.map
//!

;
