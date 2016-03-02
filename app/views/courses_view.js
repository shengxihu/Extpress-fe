var Backbone = require("Backbone");
var _ = require("underscore");

// load view
var courses_item_view = require("./courses_item_view.js");
var loading_view = require("./loading_view.js");

// load collection
var Courses = require("../collections/courses.js");

var courses_view = Backbone.View.extend({
  className: "courses_list list",
  template: _.template($("#courses_list_template").html()),
  initialize: function(options) {
    this.options = options;
    this.$el.html(this.template());
    var courses = new Courses(null, {params:this.options.params});
    this.collection = courses;
    this.getFirstPageDone();
  },
  events: {
    'click .s_item': 'onSortClick',
    'click .p_item': 'onPagiClick',
    'click .c_link': 'onCourseClick'
  },
  onCourseClick: function(e) {
    this.options.router.navigate("course/" + $(e.target).data("id"), {
      trigger: true
    });
  },
  addLoading: function() {
    this.loading_view = new loading_view();
    this.$el.append(this.loading_view.render().el);
  },
  refresh: function() {
    this.render();
    this.loading_view.remove();
    if (this.collection.hasPreviousPage()) {
      $('.prev').addClass('active');
    };
    if (this.collection.hasNextPage()) {
      $('.next').addClass('active');
    };
  },
  onPagiClick: function(e) {
    var that = this;
    this.addLoading();
    if ($(e.target).data("dir") === -1) {
      this.collection.getPreviousPage().done(function() {
        that.refresh();
      });
    } else {
      this.collection.getNextPage().done(function() {
        that.refresh();
      });
    }
  },
  getFirstPageDone: function() {
    var that = this;
    this.addLoading();
    this.collection.getPage(this.options.params.page - 0).done(function() {
      that.refresh();
    })
  },
  onSortClick: function(e) {
    var that = this;
    this.collection.setSorting($(e.target).data("sort"));
    this.addLoading();
    $(".s_item").removeClass("active");
    $(e.target).addClass("active");
    this.collection.fetch().done(function() {
      that.refresh();
    });
  },
  render: function() {
    this.$(".list").html("");
    var that = this;
    this.collection.forEach(function(course) {
      var coursesItemView = new courses_item_view({
        model: course
      });
      this.$(".list").append(coursesItemView.render().el);
    }, that);
    return this;
  }
});

module.exports = courses_view;
