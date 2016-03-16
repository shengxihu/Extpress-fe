var Backbone = require("Backbone");
var _ = require("underscore");

// load cookie
var cookie = require("../util/cookie.js");

// load model
var authLogin = require("../models/auth_login.js");
var authInfo = require("../models/auth_info.js");
var Register = require("../models/register.js");
var HasUser = require("../models/has_user.js");

var login_view = Backbone.View.extend({
  className: "login_view l_r_view",
  template: _.template($("#login_view_template").html()),
  initialize: function(options) {
    this.options = options;
  },
  events: {
    "click .btn": "onBtnClick"
  },
  onBtnClick: function() {
    var that = this;
    var auth = btoa($(".username").val() + ":" + $(".password").val());
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
            Authorization: "Basic " + $("#grantToken").html()
          }
        }).done(function(flag) {
          if (flag.user == "true") {
            // get token
            that.getToken(btoa(res.email+ ":" + "muxi304"));
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
              that.getToken(btoa(res.email+ ":" + "muxi304"));
            });
          }
        });
      });
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
    this.$el.html(this.template());
    return this;
  }
});

module.exports = login_view;
