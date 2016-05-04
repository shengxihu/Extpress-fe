var Backbone = require("Backbone");
var _ = require("underscore");

var error_view = Backbone.View.extend({
  className: "error",
  template: _.template($("#error_view_template").html()),
  initialize: function(options) {
    this.options = options;
  },
  events: {
    "click .btn": "onBtnClick"
  },
  onBtnClick: function() {
    window.history.back();
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = error_view;
