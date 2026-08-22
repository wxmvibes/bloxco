define("discourse/plugins/discourse-group-enroll/discourse/controllers/admin-staff-tools-group-enroll",["exports","@ember/controller","@ember/object","@glimmer/tracking","discourse/lib/ajax","discourse/lib/ajax-error","@ember/object/computed"],(function(t,e,r,o,s,n,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
const u=["external_ids","usernames"]
class l extends e.default{static#t=(()=>dt7948.g(this.prototype,"group_name",[o.tracked],(function(){return""})))()
#e=(()=>{dt7948.i(this,"group_name")})()
static#r=(()=>dt7948.g(this.prototype,"target_users",[o.tracked],(function(){return""})))()
#o=(()=>{dt7948.i(this,"target_users")})()
static#s=(()=>dt7948.g(this.prototype,"loading",[o.tracked],(function(){return!1})))()
#n=(()=>{dt7948.i(this,"loading")})()
static#i=(()=>dt7948.g(this.prototype,"success",[o.tracked],(function(){return!1})))()
#u=(()=>{dt7948.i(this,"success")})()
static#l=(()=>dt7948.g(this.prototype,"hasErrors",[o.tracked],(function(){return!1})))()
#a=(()=>{dt7948.i(this,"hasErrors")})()
static#c=(()=>dt7948.g(this.prototype,"error_text",[o.tracked],(function(){return""})))()
#d=(()=>{dt7948.i(this,"error_text")})()
static#p=(()=>dt7948.g(this.prototype,"error_count",[o.tracked],(function(){return 0})))()
#g=(()=>{dt7948.i(this,"error_count")})()
static#_=(()=>dt7948.g(this.prototype,"count",[o.tracked],(function(){return 0})))()
#m=(()=>{dt7948.i(this,"count")})()
static#h=(()=>dt7948.g(this.prototype,"currentUserListMode",[o.tracked],(function(){return u[0]})))()
#f=(()=>{dt7948.i(this,"currentUserListMode")})()
static#b=(()=>dt7948.g(this.prototype,"userListModes",[o.tracked],(function(){return u.map((t=>({name:I18n.t(`discourse_group_enroll.user_modes.${t}`),value:t})))})))()
#y=(()=>{dt7948.i(this,"userListModes")})()
static#x=(()=>dt7948.g(this.prototype,"targetUsersEmpty",[(0,i.empty)("target_users")]))()
#v=(()=>{dt7948.i(this,"targetUsersEmpty")})()
static#E=(()=>dt7948.g(this.prototype,"groupNameEmpty",[(0,i.empty)("group_name")]))()
#k=(()=>{dt7948.i(this,"groupNameEmpty")})()
static#M=(()=>dt7948.g(this.prototype,"submitDisabled",[(0,i.or)("targetUsersEmpty","groupNameEmpty","loading")]))()
#j=(()=>{dt7948.i(this,"submitDisabled")})()
enroll(){this.loading=!0,this.success=!1,this.hasErrors=!1,this.error_text="",this.error_count=0
const t={group:this.group_name,[this.currentUserListMode]:this.target_users.split("\n")};(0,s.ajax)("/admin/staff-tools/group-enroll.json",{data:t,method:"PUT"}).then((t=>{this.count=t.count,this.error_text=t.errors.join("\n"),this.error_count=t.errors.length,this.hasErrors=t.errors.length>0,this.success=0===t.errors.length})).catch(n.popupAjaxError).finally((()=>{this.loading=!1}))}static#U=(()=>dt7948.n(this.prototype,"enroll",[r.action]))()}t.default=l})),define("discourse/plugins/discourse-group-enroll/discourse/discourse-group-enroll-route-map",["exports"],(function(t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
t.default={resource:"admin",path:"/admin",map(){this.route("staff-tools",(function(){this.route("group-enroll")}))}}})),define("discourse/plugins/discourse-group-enroll/discourse/initializers/discourse-group-enroll-admin-sidebar",["exports","discourse/lib/plugin-api"],(function(t,e){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
t.default={name:"discourse-group-enroll-sidebar-link",initialize(){(0,e.withPluginApi)("2.0.0",(t=>{const e=t.getCurrentUser(),r=t.container.lookup("service:site-settings")
e?.staff&&r.discourse_group_enroll_enabled&&t.addAdminSidebarSectionLink("community",{name:"discourse-group-enroll",label:"discourse_group_enroll.title",route:"admin.staff-tools.group-enroll",icon:"envelope",moderator:!0})}))}}})),define("discourse/plugins/discourse-group-enroll/discourse/templates/admin/staff-tools/group-enroll",["exports","@ember/template-factory"],(function(t,e){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
t.default=(0,e.createTemplateFactory)({id:"iEY3WEA4",block:'[[[10,0],[14,0,"control-group discourse-group-enroll"],[12],[1,"\\n  "],[10,"h1"],[12],[1,[28,[35,2],["discourse_group_enroll.title"],null]],[13],[1,"\\n  "],[10,"h3"],[12],[1,[28,[35,2],["discourse_group_enroll.users.title"],null]],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[14,"for","group-enroll-user-mode"],[12],[1,[28,[35,2],["discourse_group_enroll.users.mode"],null]],[13],[1,"\\n    "],[1,[28,[35,5],null,[["valueProperty","content","value","id","onChange"],["value",[30,0,["userListModes"]],[30,0,["currentUserListMode"]],"group-enroll-user-mode",[28,[37,6],[[30,0],[28,[37,7],[[30,0,["currentUserListMode"]]],null]],null]]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"br"],[12],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[12],[1,[28,[35,2],["discourse_group_enroll.users.input"],null]],[13],[1,"\\n    "],[1,[28,[35,9],null,[["value"],[[30,0,["target_users"]]]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"br"],[12],[13],[1,"\\n\\n  "],[10,"h3"],[12],[1,[28,[35,2],["discourse_group_enroll.group.title"],null]],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[12],[1,[28,[35,2],["discourse_group_enroll.group.label"],null]],[13],[1,"\\n    "],[1,[28,[35,10],null,[["value","class"],[[30,0,["group_name"]],"input-small"]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"br"],[12],[13],[10,"br"],[12],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[1,[28,[35,11],null,[["class","action","disabled","label"],["btn-default",[28,[37,6],[[30,0],"enroll"],null],[30,0,["submitDisabled"]],"discourse_group_enroll.enroll"]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[1,[28,[35,12],null,[["condition"],[[30,0,["loading"]]]]]],[1,"\\n\\n  "],[10,"br"],[12],[13],[1,"\\n\\n"],[41,[30,0,["success"]],[[[1,"    "],[10,0],[14,0,"alert alert-success"],[12],[1,"\\n      "],[10,2],[12],[1,"\\n        "],[1,[28,[35,15],null,[["text","textParams"],["discourse_group_enroll.complete.success",[28,[37,16],null,[["count"],[[30,0,["count"]]]]]]]]],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["hasErrors"]],[[[1,"    "],[10,0],[14,0,"alert alert-warning"],[12],[1,"\\n      "],[10,2],[12],[1,"\\n        "],[1,[28,[35,15],null,[["class","text","textParams"],["result-text","discourse_group_enroll.complete.errors",[28,[37,16],null,[["count","error_count","error_text"],[[30,0,["count"]],[30,0,["error_count"]],[30,0,["error_text"]]]]]]]]],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[13],[1,"\\n"]],[],false,["div","h1","i18n","h3","label","combo-box","action","mut","br","textarea","input","d-button","conditional-loading-spinner","if","p","discourse-linked-text","hash"]]',moduleName:"discourse/plugins/discourse-group-enroll/discourse/templates/admin/staff-tools/group-enroll.hbs",isStrictMode:!1})}))

//# sourceMappingURL=discourse-group-enroll-d098e46091e5ae4a0682f6289054e67edcb41c54f1eaa745c7338bb0e721fad4.map
//!

;
