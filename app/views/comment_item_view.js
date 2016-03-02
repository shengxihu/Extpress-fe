var Backbone = require("Backbone");
var _ = require("underscore");

// load model
var CommentLike = require("../models/comment_like.js");

// load cookie
var cookie = require("../util/cookie.js");

var comment_item_view = Backbone.View.extend({
  initialize: function() {
    if (this.model.get("body").length > 60) {
      this.model.set({
        fold: true,
        body_short: this.model.get("body").slice(0, 60)
      });
    } else {
      this.model.set({
        fold: false
      });
    }
    this.model.on("change", this.render, this);
  },
  tagName: "li",
  className: "comment_item",
  template: _.template($("#comment_item_template").html()),
  events: {
    "click .touch_area": "onLikeClick",
    "click .more": "onMoreClick"
  },
  onMoreClick: function() {
    this.model.set({
      fold: false
    });
  },
  onLikeClick: function() {
    var that = this;
    if (!cookie.getCookie("token")) {
      alert("请登录！");
    } else {
      this.like_model = new CommentLike({
        c_id: this.model.id
      });
      var token = cookie.getToken();
      this.like_model.save({}, {
        headers: token
      }).done(function(data) {
        that.model.set({
          likes: data.likes,
          liked: data.liked
        });
      });
    }
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = comment_item_view;
