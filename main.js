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

//load model
var nav_model = require("./app/models/nav");
var user_model = require('./app/models/user.js');

//initialize nav model
var navModel = new nav_model({currentPage:" ",hasPrev:false});
var userModel = new user_model({isLogin:false});

//initialize router
var siteRouter = new SiteRouter({container:$("#pageview"),nav_model:navModel,user_model:userModel});

//initialize nav view
var navView = new nav_view({model:navModel,router:siteRouter,});
$("#nav").append( navView.render().el );

//initialize history pushstate
Backbone.history.start({
    pushState: !0
});
