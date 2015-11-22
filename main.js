/**
 * main.js
 *
 * the entry of the whole app
 */

//load css

require("./assets/main.css");

//load deps
var Backbone = require("Backbone");

//load view
var main_view = require("./app/views/main_view");

//load routers
var SiteRouter = require("./app/routers/site_router");

//initialize the app

//initialize router
var siteRouter = new SiteRouter();

//initialize main view

//initialize history pushstate
Backbone.history.start({
    pushState: !0
});
