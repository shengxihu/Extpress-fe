var Backbone = require("Backbone");
var _ = require("underscore");

// load subview
var comment_item_view = require("./comment_item_view.js");
// load collection
var Comments = require("../collections/hot_comments.js");
// load cookie
var cookie = require("../util/cookie.js");

var hot_comments_view = Backbone.View.extend({
  className: "comments_view hot_comments_view",
  template: _.template($("#hot_comments_template").html()),
  initialize: function(options) {
    var that = this;
    this.options = options;
    this.collection = new Comments([], {
      course_id: that.options.id
    });
    this.collection.fetch({
      headers: cookie.getToken()
    }).done(function(data) {
      if (data.length > 0) {
        that.$el.html(that.template());
        that.render();
      }
      that.trigger("loaded");
    }).fail(function() {
      that.options.router.navigate("error", {
        trigger: true
      });
    });
  },
  render: function() {
    var that = this;
    this.collection.forEach(function(comment) {
      var commentItemView = new comment_item_view({
        router: this.options.router,
        model: comment
      });
      this.$(".comments_view").append(commentItemView.render().el);
    }, that);
    return this;
  }
});

module.exports = hot_comments_view;
