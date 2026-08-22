define("discourse/plugins/discourse-hide-email/discourse/initializers/hide-email",["exports","discourse/lib/plugin-api","@ember/object"],(function(e,i,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"hide-email",initialize(){(0,i.withPluginApi)("2.0.0",(e=>{const i=e.container.lookup("service:site-settings")
i.hide_email_enabled&&(e.modifyClass("controller:user",{pluginId:"hide-email-user-profile",canCheckEmails:(0,n.computed)((function(){return!1}))}),e.modifyClass("controller:preferences/account",{pluginId:"hide-email-user-preferences",canCheckEmails:(0,n.computed)((function(){return!1}))}),e.modifyClass("component:user-card-contents",{pluginId:"hide-email-user-card",canCheckEmails:(0,n.computed)((function(){return!1}))}),i.hide_email_password_reset_enabled||e.modifyClass("controller:preferences/security",{pluginId:"hide-email-password-reset",canChangePassword:(0,n.computed)((function(){return!1}))}),i.hide_email_recently_used_devices_enabled||e.modifyClass("controller:preferences/security",{pluginId:"hide-email-recently-used",canCheckEmails:(0,n.computed)((function(){return!1}))}))}))}}}))

//# sourceMappingURL=discourse-hide-email-6474faafc8cae835a60d3089248eafb795dd862250813861bf3cf5e9f9962288.map
//!

;
