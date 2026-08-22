define("discourse/plugins/discourse-bulk-messages/discourse/controllers/admin-staff-tools-bulk-messages",["exports","discourse/lib/ajax","discourse/lib/ajax-error","@ember/object/computed","@ember/controller","@ember/object","@glimmer/tracking"],(function(e,s,t,n,i,r,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const o=["external_ids","usernames","template_json"]
class u extends i.default{static#e=(()=>dt7948.g(this.prototype,"pm_users",[l.tracked],(function(){return""})))()
#s=(()=>{dt7948.i(this,"pm_users")})()
static#t=(()=>dt7948.g(this.prototype,"pm_title",[l.tracked],(function(){return""})))()
#n=(()=>{dt7948.i(this,"pm_title")})()
static#i=(()=>dt7948.g(this.prototype,"pm_body",[l.tracked],(function(){return""})))()
#r=(()=>{dt7948.i(this,"pm_body")})()
static#l=(()=>dt7948.g(this.prototype,"loading",[l.tracked],(function(){return!1})))()
#o=(()=>{dt7948.i(this,"loading")})()
static#u=(()=>dt7948.g(this.prototype,"success",[l.tracked],(function(){return!1})))()
#a=(()=>{dt7948.i(this,"success")})()
static#d=(()=>dt7948.g(this.prototype,"error",[l.tracked],(function(){return null})))()
#c=(()=>{dt7948.i(this,"error")})()
static#m=(()=>dt7948.g(this.prototype,"anonymous",[l.tracked],(function(){return!1})))()
#p=(()=>{dt7948.i(this,"anonymous")})()
static#b=(()=>dt7948.g(this.prototype,"closed",[l.tracked],(function(){return!1})))()
#_=(()=>{dt7948.i(this,"closed")})()
static#g=(()=>dt7948.g(this.prototype,"pm_group",[l.tracked],(function(){return null})))()
#h=(()=>{dt7948.i(this,"pm_group")})()
static#y=(()=>dt7948.g(this.prototype,"currentUserListMode",[l.tracked],(function(){return o[0]})))()
#f=(()=>{dt7948.i(this,"currentUserListMode")})()
static#k=(()=>dt7948.g(this.prototype,"messageUsersEmpty",[(0,n.empty)("pm_users")]))()
#v=(()=>{dt7948.i(this,"messageUsersEmpty")})()
static#E=(()=>dt7948.g(this.prototype,"titleEmpty",[(0,n.empty)("pm_title")]))()
#M=(()=>{dt7948.i(this,"titleEmpty")})()
static#w=(()=>dt7948.g(this.prototype,"bodyEmpty",[(0,n.empty)("pm_body")]))()
#x=(()=>{dt7948.i(this,"bodyEmpty")})()
static#j=(()=>dt7948.g(this.prototype,"submitDisabled",[(0,n.or)("messageUsersEmpty","titleEmpty","bodyEmpty","loading")]))()
#U=(()=>{dt7948.i(this,"submitDisabled")})()
get isTemplateMode(){return"template_json"===this.currentUserListMode}get templatePreview(){if(!this.isTemplateMode||!this.pm_body)return null
try{const e=this.pm_users.split("\n").find((e=>e.trim().length>0))
let s=this.pm_body,t=this.pm_title||""
if(e){const n=JSON.parse(e)
for(const[e,r]of Object.entries(n)){const n=Array.isArray(r)?r.map((e=>`- ${e}`)).join("\n"):String(r)
s=s.replaceAll(`{${e}}`,n),t=t.replaceAll(`{${e}}`,n)}const i=n.username
i&&(s=s.replaceAll("%USER%",i))}return{title:t,body:s}}catch{return null}}init(){super.init(...arguments),this.userListModes=o.map((e=>({name:I18n.t(`discourse_bulk_messages.user_modes.${e}`),value:e})))}_parseTemplateEntries(){const e=this.pm_users.split("\n").filter((e=>e.trim().length>0)),s=[]
for(const n of e){const e=JSON.parse(n)
if(!e.username&&!e.external_id)throw new Error(`Each JSON entry must contain a "username" or "external_id" field. Invalid entry: ${n}`)
s.push(e)}if(0===s.length)throw new Error("No valid template entries found.")
const t=[...(this.pm_body+" "+this.pm_title).matchAll(/\{(\w+)\}/g)].map((e=>e[1]))
for(const n of s){const e=t.filter((e=>!(e in n)))
if(e.length>0){const s=n.username||n.external_id
throw new Error(`Entry for "${s}" is missing template keys: ${e.join(", ")}`)}}return s}submit(){this.loading=!0,this.success=!1,this.error=null
const e={anonymous:this.anonymous,closed:this.closed,group:this.pm_group,raw:this.pm_body,title:this.pm_title}
if(this.isTemplateMode)try{e.template_entries=JSON.stringify(this._parseTemplateEntries())}catch(n){return this.error=n.message,void(this.loading=!1)}else e[this.currentUserListMode]=this.pm_users.split("\n");(0,s.ajax)("/admin/staff-tools/bulk-messages",{data:e,method:"POST"}).then((()=>{this.success=!0})).catch(t.popupAjaxError).finally((()=>{this.loading=!1}))}static#L=(()=>dt7948.n(this.prototype,"submit",[r.action]))()}e.default=u})),define("discourse/plugins/discourse-bulk-messages/discourse/discourse-bulk-messages-route-map",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={resource:"admin",path:"/admin",map(){this.route("staff-tools",(function(){this.route("bulk-messages")}))}}})),define("discourse/plugins/discourse-bulk-messages/discourse/initializers/discourse-bulk-messages-admin-sidebar",["exports","discourse/lib/plugin-api"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"discourse-bulk-messages-sidebar-link",initialize(){(0,s.withPluginApi)("2.0.0",(e=>{const s=e.getCurrentUser(),t=e.container.lookup("service:site-settings")
s?.staff&&t.discourse_bulk_messages_enabled&&e.addAdminSidebarSectionLink("community",{name:"discourse-bulk-messages",label:"discourse_bulk_messages.title",route:"admin.staff-tools.bulk-messages",icon:"envelope",moderator:!0})}))}}})),define("discourse/plugins/discourse-bulk-messages/discourse/templates/admin/staff-tools/bulk-messages",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,s.createTemplateFactory)({id:"aMaRAnLO",block:'[[[10,0],[14,0,"control-group"],[12],[1,"\\n  "],[10,"h1"],[12],[1,[28,[35,2],["discourse_bulk_messages.title"],null]],[13],[1,"\\n  "],[10,"h3"],[12],[1,[28,[35,2],["discourse_bulk_messages.users.title"],null]],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[14,"for","bulk-messages-user-mode"],[12],[1,[28,[35,2],["discourse_bulk_messages.users.mode"],null]],[13],[1,"\\n    "],[1,[28,[35,5],null,[["valueProperty","content","value","id","onChange"],["value",[30,0,["userListModes"]],[30,0,["currentUserListMode"]],"bulk-messages-user-mode",[28,[37,6],[[30,0],[28,[37,7],[[30,0,["currentUserListMode"]]],null]],null]]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"br"],[12],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n"],[41,[30,0,["isTemplateMode"]],[[[1,"      "],[10,"label"],[12],[1,[28,[35,2],["discourse_bulk_messages.users.template_input"],null]],[13],[1,"\\n      "],[10,2],[14,0,"desc"],[12],[1,[28,[35,2],["discourse_bulk_messages.users.template_hint"],null]],[13],[1,"\\n"]],[]],[[[1,"      "],[10,"label"],[12],[1,[28,[35,2],["discourse_bulk_messages.users.input"],null]],[13],[1,"\\n"]],[]]],[1,"    "],[1,[28,[35,11],null,[["value"],[[30,0,["pm_users"]]]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"br"],[12],[13],[1,"\\n\\n  "],[10,"h3"],[12],[1,[28,[35,2],["discourse_bulk_messages.message.title"],null]],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[12],[1,[28,[35,2],["discourse_bulk_messages.message.message_title"],null]],[13],[1,"\\n    "],[1,[28,[35,12],null,[["value"],[[30,0,["pm_title"]]]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[12],[1,[28,[35,2],["discourse_bulk_messages.message.message_body"],null]],[13],[1,"\\n    "],[10,2],[14,0,"desc"],[12],[1,[28,[35,2],["discourse_bulk_messages.message.user_placeholder_hint"],null]],[13],[1,"\\n"],[41,[30,0,["isTemplateMode"]],[[[1,"      "],[10,2],[14,0,"desc"],[12],[1,[28,[35,2],["discourse_bulk_messages.message.template_body_hint"],null]],[13],[1,"\\n"]],[]],null],[1,"    "],[1,[28,[35,13],null,[["value"],[[30,0,["pm_body"]]]]]],[1,"\\n  "],[13],[1,"\\n\\n"],[41,[30,0,["templatePreview"]],[[[1,"    "],[10,0],[14,0,"controls template-preview"],[12],[1,"\\n      "],[10,"label"],[12],[1,[28,[35,2],["discourse_bulk_messages.message.preview_label"],null]],[13],[1,"\\n      "],[10,0],[14,0,"template-preview-box"],[12],[1,"\\n        "],[10,2],[14,0,"template-preview-title"],[12],[10,"strong"],[12],[1,[30,0,["templatePreview","title"]]],[13],[13],[1,"\\n        "],[10,"hr"],[12],[13],[1,"\\n        "],[10,2],[14,0,"template-preview-body"],[12],[1,[30,0,["templatePreview","body"]]],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[1,"\\n  "],[10,"br"],[12],[13],[1,"\\n\\n  "],[10,"h3"],[12],[1,[28,[35,2],["discourse_bulk_messages.options.title"],null]],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[12],[1,[28,[35,2],["discourse_bulk_messages.options.group"],null]],[13],[1,"\\n    "],[1,[28,[35,12],null,[["value"],[[30,0,["pm_group"]]]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[12],[1,"\\n      "],[1,[28,[35,12],null,[["type","checked"],["checkbox",[30,0,["anonymous"]]]]]],[1,"\\n      "],[1,[28,[35,2],["discourse_bulk_messages.options.anonymous"],null]],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[12],[1,"\\n      "],[1,[28,[35,12],null,[["type","checked"],["checkbox",[30,0,["closed"]]]]]],[1,"\\n      "],[1,[28,[35,2],["discourse_bulk_messages.options.closed"],null]],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"br"],[12],[13],[10,"br"],[12],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[1,[28,[35,16],null,[["class","action","disabled","label"],["btn-default",[28,[37,6],[[30,0],"submit"],null],[30,0,["submitDisabled"]],"discourse_bulk_messages.submit"]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[1,[28,[35,17],null,[["condition"],[[30,0,["loading"]]]]]],[1,"\\n\\n  "],[10,"br"],[12],[13],[1,"\\n\\n"],[41,[30,0,["success"]],[[[1,"    "],[10,0],[14,0,"alert alert-success"],[12],[1,"\\n      "],[10,2],[12],[1,[28,[35,2],["discourse_bulk_messages.success"],null]],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["error"]],[[[1,"    "],[10,0],[14,0,"alert alert-error"],[12],[1,"\\n      "],[10,2],[12],[1,[30,0,["error"]]],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[13],[1,"\\n"]],[],false,["div","h1","i18n","h3","label","combo-box","action","mut","br","if","p","textarea","input","d-editor","strong","hr","d-button","conditional-loading-spinner"]]',moduleName:"discourse/plugins/discourse-bulk-messages/discourse/templates/admin/staff-tools/bulk-messages.hbs",isStrictMode:!1})}))

//# sourceMappingURL=discourse-bulk-messages-180ee8d2b9114a517f443d2a01ea8ebd91565182b2e872269fbcb2a437578884.map
//!

;
