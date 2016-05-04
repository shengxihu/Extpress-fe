var Backbone = require("Backbone");
var _ = require("underscore");

// load subview
var comment_item_view = require("./comment_item_view.js");
// load collection
var Comments = require("../collections/comments.js");
// load cookie
var cookie = require("../util/cookie.js");

var comments_view = Backbone.View.extend({
  className: "comments_view",
  template: _.template($("#comments_template").html()),
  initialize: function(options) {
    var that = this;
    this.options = options;
    this.new_id = this.options.userModel.get("newCommentId");
    this.collection = new Comments([], {
      course_id: that.options.id
    });
    this.collection.getFirstPage({
      headers: cookie.getToken()
    }).done(function() {
      that.render();
      if (that.collection.hasNextPage()) {
        that.$(".comments").append("<div class='more_comments'>展开更多评价</div>");
      } else {
        that.$(".comments").append("<div class='no_more_comments'>∑(っ °Д °;)っ<br>没有更多评价了。<div>");
      }
      that.trigger("loaded");
      var id = "#c_" + that.new_id;
      $(id).parent().addClass("new_comment");
      that.new_id = null;
      if (that.collection.length === 0) {
        that.$(".comments").html(
          "<div class='no_comments'>∑(っ °Д °;)っ<br>没有任何评价，快去添加第一条评价吧。<div>"
        );
      }
    }).fail(function() {
      that.options.router.navigate("error", {
        trigger: true
      });
    });
    this.$el.html(this.template());
  },
  events: {
    "click .more_comments": "onMoreCommentsClick"
  },
  onMoreCommentsClick: function(e) {
    var that = this;
    this.$(".more_comments").html("载入中···");
    this.collection.getNextPage({
      headers: cookie.getToken()
    }).done(function() {
      that.render();
      if (!(that.collection.hasNextPage())) {
        that.$(".more_comments").remove();
        that.$(".comments").append("<div class='no_more_comments'>∑(っ °Д °;)っ<br>没有更多评价了。<div>");
      } else {
        that.$(".more_comments").html("展开更多评价");
      }
    });
  },
  render: function() {
    var that = this;
    var flag;
    if (this.new_id) {
      this.collection.forEach(function(comment) {
        var commentItemView = new comment_item_view({
          router: this.options.router,
          model: comment
        });
        if (comment.id === this.new_id) {
          this.$(".comments_view").prepend(commentItemView.render().el);
          flag = true;
        } else if (!flag) {
          this.$(".comments_view").prepend(commentItemView.render().el);
        } else {
          this.$(".prev_comments").append(commentItemView.render().el);
        }
      }, that);
      this.options.userModel.set({
        newCommentId: null
      });
    } else {
      this.collection.forEach(function(comment) {
        var commentItemView = new comment_item_view({
          router: this.options.router,
          model: comment
        });
        this.$(".comments_view").append(commentItemView.render().el);
      }, that);
    }
    return this;
  }
});

module.exports = comments_view;
