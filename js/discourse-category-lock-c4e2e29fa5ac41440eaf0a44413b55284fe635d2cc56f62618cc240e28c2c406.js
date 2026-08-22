define("discourse/plugins/discourse-category-lock/discourse/templates/connectors/category-custom-settings/category-lock",["exports","@ember/template-factory"],(function(e,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,o.createTemplateFactory)({id:"AKo5/L1z",block:'[[[10,"section"],[14,0,"field"],[12],[1,"\\n  "],[10,"h3"],[12],[1,"\\n    "],[1,[28,[35,2],["category.category_lock.title"],null]],[1,"\\n  "],[13],[1,"\\n  "],[10,"label"],[12],[1,"\\n    "],[1,[28,[35,4],null,[["type","checked"],["checkbox",[30,0,["category","custom_fields","category_lock"]]]]]],[1,"\\n    "],[1,[28,[35,2],["category.category_lock.label"],null]],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["section","h3","i18n","label","input"]]',moduleName:"discourse/plugins/discourse-category-lock/discourse/templates/connectors/category-custom-settings/category-lock.hbs",isStrictMode:!1})})),define("discourse/plugins/discourse-category-lock/initializers/category-lock",["exports","discourse/lib/plugin-api","@ember/object"],(function(e,o,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"category-lock",initialize(){(0,o.withPluginApi)("2.0.0",(e=>{const o=e.container.lookup("service:site-settings")
function c(t){const c=e.getCurrentUser()
return c&&t&&t.category&&t.category.category_lock&&t.user_id===c.id&&c.trust_level<=o.category_lock_max_trust_level}o.category_lock_enabled&&(e.modifyClass("controller:topic",{pluginId:"category-lock-topic-controller",showCategoryChooser:(0,t.computed)("model.isPrivateMessage",(function(){return!c(this.model)&&this._super()}))}),e.modifyClass("model:composer",{pluginId:"category-lock-composer",showCategoryChooser:(0,t.computed)("privateMessage","archetype.hasOptions",(function(e,o){return!c(this.topic)&&this._super(e,o)}))}))}))}}}))

//# sourceMappingURL=discourse-category-lock-0dbeb21fc8d7fb89171e176c137a0b2aae15c0642b2d9287ea7b210b3c579b33.map
//!

;
