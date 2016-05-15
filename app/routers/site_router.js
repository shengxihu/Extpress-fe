var Backbone = require("Backbone");
var util = require("../util/util");

// load views
var main_view = require("../views/main_view");
var course_view = require("../views/course_view");
var tip_view = require("../views/tip_view");
var courses_view = require("../views/courses_view");
var user_view = require("../views/user_view");
var login_view = require("../views/login_view");
var register_view = require("../views/register_view");
var error_view = require("../views/error_view");

// load model
var Tip = require("../models/tip.js");

var SiteRouter = Backbone.Router.extend({
  routes: {
    "": "main",
    "login": "login",
    "search_result?*queryString": "search_result",
    "course/:id(/)": "course",
    "tip/:id(/)": "tip",
    "courses?*queryString": "courses",
    "user(/:username)": "user",
    "register": "register",
    "error": "error"
  },
  initialize: function(options) {
    this.$container = options.container;
    this.navModel = options.nav_model;
    this.userModel = options.user_model;
  },
  switchView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.$container.append(view.render().el)
    this.currentView = view;
    console.log("view switch!")
  },
  main: function() {
    var view = new main_view({
      router: this
    });
    this.switchView(view);
    this.navModel.set({
      currentPage: null,
      hasPrev: false
    });
  },
  search_result: function(queryString) {
    var params = this.parseQueryString(queryString);
    var view = new courses_view({
      router: this,
      params: params
    });
    this.switchView(view);
    this.navModel.set({
      currentPage: "搜索结果",
      hasPrev: true
    });
  },
  course: function(id) {
    var view = new course_view({
      router: this,
      id: id,
      userModel: this.userModel
    });
    this.switchView(view);
    this.navModel.set({
      currentPage: "课程详情",
      hasPrev: true
    });
  },
  tip: function(id) {
    var tip = new Tip({
      id: id
    });
    var view = new tip_view({
      router: this,
      model: tip
    });
    this.switchView(view);
    this.navModel.set({
      currentPage: "专题",
      hasPrev: true
    });
  },
  courses: function(queryString) {
    console.log("new courses view init");
    var params = this.parseQueryString(queryString);
    var view = new courses_view({
      router: this,
      params: params
    });
    this.switchView(view);
    this.navModel.set({
      currentPage: "所有课程",
      hasPrev: true
    });
  },
  user: function() {
    var view = new user_view({
      router: this,
      model: this.userModel
    });
    this.switchView(view);
    this.navModel.set({
      currentPage: "我的学而",
      hasPrev: true
    });
  },
  login: function() {
    var view = new login_view({
      router: this,
      userModel: this.userModel
    });
    this.switchView(view);
    this.navModel.set({
      currentPage: "登录",
      hasPrev: false
    });
  },
  register: function() {
    var view = new register_view({
      router: this
    });
    this.switchView(view);
    this.navModel.set({
      currentPage: "注册木犀通行证",
      hasPrev: false
    });
  },
  execute: function(callback, args) {
    var scrollArr = this.navModel.get("scrollPos");
    scrollArr.push(document.body.scrollTop);
    this.navModel.set({
      scrollPos: scrollArr
    });
    if (callback) {
      callback.apply(this, args);
    }
  },
  error: function() {
    var view = new error_view({
      router: this
    });
    this.switchView(view);
    this.navModel.set({
      currentPage: "∑(っ °Д °;)っ出错啦",
      hasPrev: false
    });
  },
  // should be seprate to a single util moudule
  parseQueryString: function(queryString) {
    var params = {};
    if (queryString) {
      _.each(
        _.map(decodeURI(queryString).split(/&/g), function(el) {
          var aux = el.split("=");
          var o = {};
          if (aux.length >= 1) {
            var val;
            if (aux.length === 2) {
              val = aux[1];
            }
            o[aux[0]] = val;
          }
          return o;
        }),
        function(o) {
          _.extend(params, o);
        }
      );
    }
    return params;
  }
});

module.exports = SiteRouter;
