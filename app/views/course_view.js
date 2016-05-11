var Backbone = require("Backbone");
var _ = require("underscore");

// load model
var Course = require("../models/course.js");
// load views
var comments_view = require("./comments_view.js");
var hot_comments_view = require("./hot_comments_view.js");
var loading_view = require("./loading_view.js");
var course_info_view = require("./course_info_view.js");
var back_to_top_view = require("../components/back_to_top.js");

// load cookie
var cookie = require("../util/cookie.js");

var course_view = Backbone.View.extend({
  className: "course_view",
  template: _.template($("#course_template").html()),
  initialize: function(options) {
    this.options = options;
    this.model = new Course({
      id: this.options.id
    });
    this.model.set({
      counter: 0
    });
    this.courseInfoView = new course_info_view({
      id: this.options.id,
      course_view: this,
      userModel: this.options.userModel,
      router:this.options.router
    });
    this.commentsView = new comments_view({
      id: this.options.id,
      course_view: this,
      userModel: this.options.userModel,
      router:this.options.router
    });
    this.hotCommentsView = new hot_comments_view({
      id: this.options.id,
      course_view: this,
      userModel: this.options.userModel,
      router:this.options.router
    });
    this.listenTo(this.courseInfoView, "loaded", this.onLoaded);
    this.listenTo(this.commentsView, "loaded", this.onLoaded);
    this.listenTo(this.hotCommentsView, "loaded", this.onLoaded);
  },
  onLoaded: function() {
    var counter = this.model.get("counter");
    if (counter < 2) {
      this.model.set({
        counter: counter + 1
      });
    } else {
      this.$el.prepend(this.courseInfoView.el);
      this.$el.append(this.hotCommentsView.el);
      this.$el.append(this.commentsView.el);
      this.loading_view.remove();
      this.loading_view = null;
      this.model.set({
        counter: 0
      });
    }
  },
  render: function() {
    var that = this;
    this.$el.html(this.template());
    // render loading view & back to top button
    this.loading_view = new loading_view();
    this.back_to_top_view = new back_to_top_view();
    this.$el.append(this.loading_view.render().el);
    this.$el.append(this.back_to_top_view.render().el);
    // render this view
    return this;
  }
})

module.exports = course_view;

