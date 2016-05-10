/**
 * main.js
 *
 * the entry of the whole app
 */

// load css
require("./static/x_m/main.min.css");
// load deps
var Backbone = require("Backbone");
var util = require("./app/util/util");
var cookie = require("./app/util/cookie");

// load view
var nav_view = require("./app/views/nav_view");
var search_view = require("./app/views/search_view");

// load routers
var SiteRouter = require("./app/routers/site_router");

// load model
var nav_model = require("./app/models/nav");
var user_model = require("./app/models/user.js");

// initialize nav model
var navModel = new nav_model({
  currentPage: " ",
  hasPrev: false,
  scrollPos: [],
  hot_search: []
});
var userModel = new user_model({
  isLogin: false
});

// check login
var token = cookie.checkCookie("token");
if (token) {
  userModel.set({
    isLogin: true,
    token: token
  });
}

// initialize router
var siteRouter = new SiteRouter({
  container: $("#pageview"),
  nav_model: navModel,
  user_model: userModel
});

// initialize search view
var searchView = new search_view({
  router: siteRouter
});
$(".viewport").append(searchView.render().el);

// initialize nav view
var navView = new nav_view({
  model: navModel,
  router: siteRouter,
  searchView: searchView
});
$("#nav").append(navView.render().el);

// initialize history pushstate
Backbone.history.start({
  pushState: !0
});

$('.viewport').show();

if (window.location.pathname.length > 1) {
  siteRouter.navigate(window.location.pathname.slice(1), {
    trigger: true
  });
}

function scroll() {
  var scrollArr = navModel.get("scrollPos");
  scrollArr.pop();
  window.scrollTo(0, scrollArr.splice([scrollArr.length - 1], 2)[0]);
}

if (navigator.platform === "iPhone") {
  window.onpopstate = function() {
    setTimeout(scroll, 500);
  };
}
