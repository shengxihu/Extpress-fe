var Backbone = require("Backbone");
var _ = require("underscore");

// load model
var CourseInfo = require("../models/course_info.js");
var CommentSend = require("../models/comment_send.js");
var CourseLike = require("../models/course_like.js");

// load cookie
var cookie = require("../util/cookie.js");

// load component
var dialog_view = require("../components/dialog.js");

var course_info_view = Backbone.View.extend({
  className: "course_info",
  template: _.template($("#course_info_template").html()),
  initialize: function(options) {
    var that = this;
    this.options = options;
    this.model = new CourseInfo({
      id: this.options.id,
      sending: false
    });
    this.model.fetch({
      headers: cookie.getToken()
    }).done(function() {
      that.render();
      that.trigger("loaded");
    }).fail(function() {
      that.options.router.navigate("error", {
        trigger: true
      });
    });
  },
  events: {
    "click .w_comment": "onWCommentClick",
    "click #course_like": "onLikeCourseClick",
    "click .comment_close": "onCommentCloseClick",
    "click .comment_submit": "onAddComments"
  },
  onWCommentClick: function(e) {
    var that = this;
    if (!cookie.getCookie("token")) {
      var dialog = new dialog_view({
        router: this.options.router
      });
      this.$el.append(dialog.render().el);
      return;
    }
    require.ensure([], function() {
      var React = require("react"),
        ReactDOM = require("react-dom");
      CommentBox = require("../components/comment_box.jsx");
      that.$(".comment_box_pop").show();
      ReactDOM.render(React.createElement(CommentBox, null), document.querySelector(".comment_box"));
      if (module.hot) {
        module.hot.accept("../components/comment_box.jsx", function() {
          var CommentBox = require("../components/comment_box.jsx");
          ReactDOM.render(React.createElement(CommentBox, null), document.querySelector(".comment_box"));
        });
      }
    });
  },
  onLikeCourseClick: function(e) {
    if (this.model.get("liked")) {
      return;
    } else if (cookie.getCookie("token")) {
      this.$("#course_like").addClass("animating");
      var m = new CourseLike({
        c_id: this.model.get("id")
      });
      m.on("change", this.updateLike, this, m);
      m.save({}, {
        headers: cookie.getToken()
      });
    } else {
      var dialog = new dialog_view({
        router: this.options.router
      });
      this.$el.append(dialog.render().el);
    }
  },
  updateLike: function(m) {
    this.$("#course_like .btn_text").html(m.get("likes"));
    this.$("#course_like").addClass("animated");
    this.model.set({
      liked: true
    });
  },
  onAddComments: function(e) {
    if (this.model.get("sending") == true) {
      return;
    }
    var that = this;
    e.preventDefault();
    this.model.set({
      sending: true
    });
    this.$(".comment_submit").html("发送中");
    var send = new CommentSend({
      cid: this.options.id
    });
    var token = cookie.getToken();
    send.set({
      body: _.escape(this.$("#body").val()).replace(/\n/g, "<br>"),
      tags: this.$("#tags").val()
    });
    Backbone.sync("create", send, {
      headers: token
    }).always(function(data) {
      that.options.userModel.set({
        newCommentId: data.id
      });
      Backbone.history.loadUrl(Backbone.history.fragment);
    });
  },
  onCommentCloseClick: function() {
    this.$(".comment_box_pop").hide();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = course_info_view;
