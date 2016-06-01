var Backbone = require("Backbone");
var _ = require("underscore");

var tip_item_view = Backbone.View.extend({
  className: "item",
  template: _.template($("#main_tip_item_template").html()),
  initialize: function(options) {
    this.options = options;
  },
  events: {
    "click .tip_link": "onLinkClicked"
  },
  onLinkClicked: function(e) {
    this.options.router.navigate("tip/" + $(e.target).data("link"), {
      trigger: true
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = tip_item_view;
