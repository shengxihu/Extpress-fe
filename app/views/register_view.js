var Backbone = require("Backbone");
var _ = require("underscore");

// load model
var Register = require("../models/auth_register.js");
var checkUsername = require("../models/check_username.js");
var checkEmail = require("../models/check_email.js");

var register_view = Backbone.View.extend({
  className: "register_view l_r_view",
  template: _.template($("#register_view_template").html()),
  initialize: function(options) {
    this.options = options;
    this.authCount = 0;
    this.model = new Register({
      username: "",
      password: "",
      passwordC: "",
      email: "",
      qq: "",
      phone: "",
      major: "",
      roleid: 1,
      authFail: [false, false, false, false],
      message: ["", "", "", ""],
      validating: false,
      authFinish: false
    });
    this.checkUsername = new checkUsername({});
    this.checkEmail = new checkEmail({});
    this.listenTo(this.model, "authFail", this.render);
  },
  events: {
    "click .submit": "onSubmitClick",
    "click .cancel": "onCancelClick"
  },
  validateForm: function() {
    this.authCount = 0;
    var that = this;
    if (!$("form .username").val()) {
      this.authFail(0, "请填写用户名");
      return false;
    }
    this.authCount += 1;
    if ($("form .username").val().length > 8) {
      this.authFail(0, "用户名必须小于8个字符");
      return false;
    }
    this.authCount += 1;
    this.checkUsername
      .save({
        username: _.escape($("form .username").val())
      })
      .done(function(res) {
        if (res.user === "true") {
          that.authFail(0, "用户名已被注册");
        } else {
          that.authCount += 1;
          that.checkAndSubmit();
        }
      });
    if (!$("form .password").val()) {
      this.authFail(1, "请填写密码");
      return false;
    }
    this.authCount += 1;
    if ($("form .password").val().length < 6) {
      this.authFail(1, "密码不能短于6个字符");
      return false;
    }
    this.authCount += 1;
    if (!$("form #password_c").val()) {
      this.authFail(2, "请填写确认密码");
      return false;
    }
    this.authCount += 1;
    if ($("form #password_c").val() !== $("form .password").val()) {
      this.authFail(2, "确认密码与密码不同");
      return false;
    }
    this.authCount += 1;
    if (!$("form .email").val()) {
      this.authFail(3, "请填写邮箱");
      return false;
    }
    this.checkEmail
      .save({
        email: _.escape($("form .email").val())
      })
      .done(function(res) {
        if (res.user === "true") {
          that.authFail(3, "邮箱已被注册");
        } else {
          that.authCount += 1;
          that.checkAndSubmit();
        }
      });
    this.authCount += 1;
    this.checkAndSubmit();
    return true;
  },
  authFail: function(index, message) {
    var authFail = [false, false, false, false];
    var messageArr = ["", "", "", ""];
    authFail[index] = true;
    messageArr[index] = message;
    this.model.set({
      username: $("form .username").val(),
      password: $("form .password").val(),
      passwordC: $("form #password_c").val(),
      email: $("form .email").val(),
      qq: $("form .qq").val(),
      phone: $("form .phone").val(),
      major: $("form .major").val(),
      authFail: authFail,
      message: messageArr
    });
    this.model.trigger("authFail");
    this.model.set({
      validating: false
    });
  },
  submitForm: function() {
    var token = "Basic " + $("#grantToken").html();
    var that = this;
    this.model.set({
      username: _.escape($("form .username").val()),
      password: _.escape($("form .password").val()),
      email: _.escape($("form .email").val()),
      qq: _.escape($("form .qq").val()),
      phone: _.escape($("form .phone").val()),
      major: _.escape($("form .major").val())
    });
    this.model.save({}, {
      headers: {
        Authorization: token
      }
    }).done(function() {
      that.options.router.navigate("/login", {
        trigger: true
      });
    });
  },
  onSubmitClick: function() {
    if (this.model.get("validating") === true) {
      return;
    }
    this.model.set({
      validating: true
    });
    this.validateForm();
  },
  onCancelClick: function() {
    window.history.back();
  },
  checkAndSubmit: function() {
    if (this.authCount === 9) {
      this.submitForm();
    }
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = register_view;
