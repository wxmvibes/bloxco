define("discourse/plugins/discourse-enhanced-anonymize/discourse/controllers/admin-plugins-discourse-enhanced-anonymize",["exports","discourse/lib/ajax","discourse/lib/ajax-error","@ember/object/computed","@ember/object","discourse/lib/computed","@ember/controller","@glimmer/tracking"],(function(e,n,t,s,i,c,o,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class u extends o.default{static#e=(()=>dt7948.g(this.prototype,"reference",[r.tracked],(function(){return""})))()
#n=(()=>{dt7948.i(this,"reference")})()
static#t=(()=>dt7948.g(this.prototype,"referenceCounted",[r.tracked],(function(){return null})))()
#s=(()=>{dt7948.i(this,"referenceCounted")})()
static#i=(()=>dt7948.g(this.prototype,"count",[r.tracked],(function(){return null})))()
#c=(()=>{dt7948.i(this,"count")})()
static#o=(()=>dt7948.g(this.prototype,"loading",[r.tracked],(function(){return!1})))()
#r=(()=>{dt7948.i(this,"loading")})()
static#u=(()=>dt7948.g(this.prototype,"success",[r.tracked],(function(){return!1})))()
#d=(()=>{dt7948.i(this,"success")})()
static#a=(()=>dt7948.g(this.prototype,"job",[r.tracked],(function(){return null})))()
#l=(()=>{dt7948.i(this,"job")})()
static#h=(()=>dt7948.g(this.prototype,"counted",[(0,s.notEmpty)("count")]))()
#p=(()=>{dt7948.i(this,"counted")})()
static#f=(()=>dt7948.g(this.prototype,"maxReferences",[(0,c.setting)("discourse_enhanced_anonymize_max_references")]))()
#m=(()=>{dt7948.i(this,"maxReferences")})()
get exceeded(){return this.count&&this.count>this.maxReferences}static#b=(()=>dt7948.n(this.prototype,"exceeded",[(0,i.computed)("count","maxReferences")]))()
get countDisabled(){return this.loading||!this.reference}static#y=(()=>dt7948.n(this.prototype,"countDisabled",[(0,i.computed)("loading","reference")]))()
get submitDisabled(){return this.loading||!this.referenceCounted||this.reference!==this.referenceCounted||0===this.count||this.exceeded}static#g=(()=>dt7948.n(this.prototype,"submitDisabled",[(0,i.computed)("loading","reference","referenceCounted","count","exceeded")]))()
referenceCount(){this.loading=!0,this.success=!1,this.referenceCounted=null,this.count=null,(0,n.ajax)("/admin/plugins/anonymize-reference/count",{data:{reference:this.reference},method:"GET"}).then((e=>{this.referenceCounted=this.reference,this.count=e.count})).catch(t.popupAjaxError).finally((()=>{this.loading=!1}))}static#_=(()=>dt7948.n(this.prototype,"referenceCount",[i.action]))()
submit(){this.loading=!0,this.success=!1,(0,n.ajax)("/admin/plugins/anonymize-reference",{data:{reference:this.referenceCounted},method:"POST"}).then((e=>{this.success=!0,this.job=e.job,this.referenceCounted=null,this.count=null})).catch(t.popupAjaxError).finally((()=>{this.loading=!1}))}static#x=(()=>dt7948.n(this.prototype,"submit",[i.action]))()}e.default=u})),define("discourse/plugins/discourse-enhanced-anonymize/discourse/discourse-enhanced-anonymize-route-map",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={resource:"admin.adminPlugins",path:"/plugins",map(){this.route("discourse-enhanced-anonymize")}}})),define("discourse/plugins/discourse-enhanced-anonymize/discourse/templates/admin/plugins-discourse-enhanced-anonymize",["exports","@ember/template-factory"],(function(e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,n.createTemplateFactory)({id:"Y8aYa0OG",block:'[[[10,0],[14,0,"control-group"],[12],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[10,"label"],[12],[1,[28,[35,2],["discourse_enhanced_anonymize.reference"],null]],[13],[1,"\\n    "],[1,[28,[35,3],null,[["value"],[[30,0,["reference"]]]]]],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[1,[28,[35,4],null,[["class","action","label","disabled"],["btn-default",[28,[37,5],[[30,0],"referenceCount"],null],"discourse_enhanced_anonymize.count",[30,0,["countDisabled"]]]]]],[1,"\\n  "],[13],[1,"\\n\\n"],[41,[51,[30,0,["success"]]],[[[41,[30,0,["counted"]],[[[1,"\\n      "],[10,2],[12],[1,[28,[35,2],["discourse_enhanced_anonymize.result"],null]],[1,": "],[1,[30,0,["count"]]],[13],[1,"\\n\\n      "],[10,0],[14,0,"controls"],[12],[1,"\\n        "],[1,[28,[35,4],null,[["class","action","label","disabled"],["btn-default",[28,[37,5],[[30,0],"submit"],null],"discourse_enhanced_anonymize.submit",[30,0,["submitDisabled"]]]]]],[1,"\\n      "],[13],[1,"\\n\\n"],[41,[30,0,["exceeded"]],[[[1,"\\n        "],[10,"br"],[12],[13],[1,"\\n\\n        "],[10,0],[14,0,"alert alert-error"],[12],[1,"\\n          "],[1,[28,[35,2],["discourse_enhanced_anonymize.exceeded"],null]],[1,"\\n        "],[13],[1,"\\n\\n"]],[]],null],[1,"\\n"]],[]],null]],[]],null],[1,"\\n  "],[1,[28,[35,10],null,[["condition"],[[30,0,["loading"]]]]]],[1,"\\n\\n"],[41,[30,0,["success"]],[[[1,"\\n    "],[10,"br"],[12],[13],[1,"\\n\\n    "],[10,0],[14,0,"alert alert-success"],[12],[1,"\\n      "],[1,[28,[35,2],["discourse_enhanced_anonymize.success"],null]],[1,"\\n      "],[10,"br"],[12],[13],[1,"\\n      "],[1,[28,[35,2],["discourse_enhanced_anonymize.success_job"],null]],[1,": "],[10,"b"],[12],[1,[30,0,["job"]]],[13],[1,"\\n    "],[13],[1,"\\n\\n"]],[]],null],[1,"\\n"],[13],[1,"\\n"]],[],false,["div","label","i18n","input","d-button","action","unless","if","p","br","conditional-loading-spinner","b"]]',moduleName:"discourse/plugins/discourse-enhanced-anonymize/discourse/templates/admin/plugins-discourse-enhanced-anonymize.hbs",isStrictMode:!1})}))

//# sourceMappingURL=discourse-enhanced-anonymize-682c0205c53cc11ad1f2ba499d610ecf9f10d6190f77b943cded3e168c74977d.map
//!

;
