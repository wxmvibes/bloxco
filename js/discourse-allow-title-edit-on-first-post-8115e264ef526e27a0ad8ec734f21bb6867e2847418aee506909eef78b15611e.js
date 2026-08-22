define("discourse/plugins/discourse-allow-title-edit-on-first-post/discourse/initializers/hide-category-chooser",["exports","discourse/lib/plugin-api"],(function(i,e){"use strict"
Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0
i.default={name:"discourse-allow-title-edit-on-first-post",initialize(){(0,e.withPluginApi)((i=>{i.modifyClass("controller:topic",{pluginId:"discourse-allow-title-edit-on-first-post",get showCategoryChooser(){return!this.model?.isPrivateMessage&&!1!==this.model?.can_edit_topic_category}})}))}}}))

//# sourceMappingURL=discourse-allow-title-edit-on-first-post-555587aabc8b2ac08bd6ab6fb19f174408de7efb4849b6abd8e90eb0fad543a4.map
//!

;
