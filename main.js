/**
 * main.js
 *
 * the entry of the whole app
 */


//load css
require("./assets/main.min.css");

//load deps
var Backbone = require("Backbone");
var util = require("./app/util/util");

//load view
var nav_view = require("./app/views/nav_view");

//load routers
var SiteRouter = require("./app/routers/site_router");

//initialize nav view
var navView = new nav_view();
$("#nav").append( navView.render().el );

//initialize router
var siteRouter = new SiteRouter($("#pageview"));
util.bind_navigate(navView.$(".link"), siteRouter);

//initialize history pushstate
Backbone.history.start({
    pushState: !0
});
