var Backbone = require("Backbone");
var _ = require("underscore");

// load cookie
var cookie = require("../util/cookie.js");

// load model
var Login = require("../models/login.js");
var authLogin = require("../models/auth_login.js");
var authInfo = require("../models/auth_info.js");
var Register = require("../models/register.js");
var HasUser = require("../models/has_user.js");

var login_view = Backbone.View.extend({
  className: "login_view l_r_view",
  template: _.template($("#login_view_template").html()),
  initialize: function(options) {
    this.options = options;
    this.model = new Login({
      authFail: [false, false],
      message: ["", ""],
      username: "",
      password: ""
    });
    this.listenTo(this.model, "authFail", this.render);
  },
  events: {
    "click .btn": "onBtnClick"
  },
  validateForm: function() {
    this.model.set({
      username: $(".username").val(),
      password: $(".password").val()
    });
    if ($(".username").val() === "") {
      this.model.set({
        authFail: [true, false],
        message: ["请填写用户名", ""]
      });
      this.model.trigger("authFail");
      return false;
    }
    if ($(".password").val() === "") {
      this.model.set({
        authFail: [false, true],
        message: ["", "请填写密码"]
      });
      this.model.trigger("authFail");
      return false;
    }
    return true;
  },
  onBtnClick: function() {
    if (this.validateForm()) {
      this.send();
    }
  },
  send: function() {
    var that = this;
    var auth = btoa(_.escape($(".username").val()) + ":" + _.escape($(".password").val()));
    var authLoginModel = new authLogin();
    authLoginModel.fetch({
      headers: {
        "Authorization": "Basic " + auth
      }
    }).done(function(res) {
      var authInfoModel = new authInfo({
        uid: res.uid
      });
      authInfoModel.fetch({
        headers: {
          Authorization: "Basic " + $("#grantToken").html()
        }
      }).done(function(res) {
        var h = new HasUser({
          email: res.email
        });
        h.save({}, {
          headers: {
            Authorization: "Basic " + $("#token").html()
          }
        }).done(function(flag) {
          if (flag.user === "true") {
            // get token
            that.getToken(btoa(res.email + ":" + "muxi304"));
          } else {
            // register new user
            var token = "Basic " + $("#token").html();
            var m = new Register({
              username: res.username,
              password: btoa("muxi304"),
              email: res.email
            });
            m.save({}, {
              headers: {
                Authorization: token
              }
            }).done(function() {
              that.getToken(btoa(res.email + ":" + "muxi304"));
            });
          }
        });
      });
    }).fail(function() {
      that.model.set({
        authFail: [true, true],
        message: ["", "用户名或密码错误"],
        username: "",
        password: ""
      });
      that.model.trigger("authFail");
    });
  },
  getToken: function(auth) {
    var that = this;
    this.options.userModel.fetch({
      headers: {
        Authorization: "Basic " + auth
      }
    }).done(function(res) {
      that.options.userModel.set({
        isLogin: true
      });
      cookie.setCookie("token", res.token, 14);
      that.options.router.navigate("", {
        trigger: true
      });
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = login_view;
