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
    // int flag
    this.loadingNext = false;
    this.count = 0;

    var that = this;
    this.options = options;
    this.$el.html(this.template());
    var courses = new Courses(null, {
      params: this.options.params
    });
    this.collection = courses;
    var page = this.options.params.page - 0;
    if (page > 1) {
      this.addLoading();
      this.collection.switchMode('client', {fetch:false});
      this.collection.fetch().done(function() {
        that.refresh(true);
        that.collection.switchMode('infinite', {fetch:false});
        that.collection.links[page] = '/api/v1.0/courses/?' + $.param(that.options.params);
        that.collection.queryParams.num = null;
        that.collection.getPage(page, {fetch:true}).done(function(){
          if (!that.collection.hasNextPage()) {
            that.$('.hint').html('(￣▽￣") 已经是全部的结果啦');
          }
        })
      });
    } else {
      this.getFirstPageDone();
    }

    // cache
    this.$body = $('body');
    this.$viewport = $('.viewport');

    window.addEventListener("scroll", this.onScroll.bind(this));
  },
  events: {
    'click .s_item': 'onSortClick',
    'click .p_item': 'onPagiClick',
    'click .c_link': 'onCourseClick',
    'click .filter': 'onFilterClick'
  },
  onFilterClick: function(){
    this.$('.filter_list').toggle();
  },  
  onCourseClick: function(e) {
    this.options.router.navigate("course/" + $(e.target).data("id"), {
      trigger: true
    });
  },
  onScroll: function() {
    if ((window.pageYOffset + this.$body.height()) >= (this.$viewport.height() - 200)) {
      this.onNextPage()
    }
  },
  addLoading: function() {
    this.loading_view = new loading_view();
    this.$el.append(this.loading_view.render().el);
  },
  refresh: function(full) {
    this.render(full);
    this.loading_view.remove();
    this.loadingNext = false;
    if (!this.collection.hasNextPage()) {
      this.$('.hint').html('(￣▽￣") 已经是全部的结果啦');
    }
  },
  onNextPage: function() {
    var that = this;
    if (this.collection.hasNextPage() && !this.loadingNext) {
      this.$('.hint').html('(￣▽￣") 加载中');
      this.loadingNext = true;
      this.collection.getNextPage().done(function() {
        that.refresh();
        var params = that.options.params;
        params.page = that.collection.state.currentPage;
        var queryString = $.param(params);
        var url = 'courses?' + queryString;
        that.options.router.navigate(url, {
          trigger: false,
          replace: true
        });
      });
    }
  },
  getFirstPageDone: function() {
    var that = this;
    this.addLoading();
    this.collection.getPage(this.options.params.page - 0).done(function() {
      that.refresh();
    });
    //this.collection.fetch().done(function() {
    //  that.refresh();
    //  that.collection.switchMode('infinite');
    //});
  },
  onSortClick: function(e) {
    var params = this.options.params;
    params.page = 1;
    params.sort = $(e.target).data("sort");
    var queryString = $.param(params);
    var url = 'courses?' + queryString;
    this.options.router.navigate(url, {
        trigger: true
    });
  },
  render: function(full) {
    //this.$(".list").html("");
  
    var that = this;
    if (full){
      this.collection.fullCollection.forEach(function(course) {
      var coursesItemView = new courses_item_view({
        model: course
      });
      this.$(".list").append(coursesItemView.render().el);
      }, that);
    }else{
      this.collection.forEach(function(course) {
        var coursesItemView = new courses_item_view({
          model: course
        });
        this.$(".list").append(coursesItemView.render().el);
      }, that);
      return this;
    }
  }
});

module.exports = courses_view;
