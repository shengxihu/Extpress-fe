var Backbone = require("Backbone");
var _ = require("underscore");

// load model
var Register = require("../models/auth_register.js");

var register_view = Backbone.View.extend({
  className: "register_view l_r_view",
  template: _.template($("#register_view_template").html()),
  initialize: function(options) {
    this.options = options;
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
      message: ["", "", "", ""]
    });
    this.listenTo(this.model, "authFail", this.render);
  },
  events: {
    "click .submit": "onSubmitClick",
    "click .cancel": "onCancelClick"
  },
  validateForm: function() {
    if (!$("form .username").val()) {
      this.authFail(0, "请填写用户名");
      return false;
    }
    if (!$("form .password").val()) {
      this.authFail(1, "请填写密码");
      return false;
    }
    if (!$("form #password_c").val()) {
      this.authFail(2, "请填写确认密码");
      return false;
    }
    if ($("form #password_c").val() !== $("form .password").val()) {
      this.authFail(2, "确认密码与密码不同");
      return false;
    }
    if (!$("form .email").val()) {
      this.authFail(3, "请填写邮箱");
      return false;
    }
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
    if (this.validateForm()) {
      this.submitForm();
    }
  },
  onCancelClick: function() {
    window.history.back();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = register_view;
