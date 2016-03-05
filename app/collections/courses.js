var PageableCollection = require("backbone.paginator");

// load model
var Course = require("../models/courses_item.js");

var Courses = Backbone.PageableCollection.extend({
  initialize: function(model, options) {
    this.options = options
    this.params = this.options.params;
    this.state.currentPage = this.params.page - 0;
    this.state.sortKey = this.params.sort;
    if (this.params.type == 'courses' && this.params.page > 1){
      this.queryParams.num = this.state.currentPage * this.state.pageSize;
    }else{
      this.queryParams.keywords = this.params.keywords
    }
  },
  url: function(){
    return "/api/v1.0/" +  this.params.type + "/"
  },

  model: Course,

  mode: "infinite",
  // Initial pagination states
  state: {
    pageSize: 20,
    firstPage: 1
  },

  // You can remap the query parameters from ``state`` keys from the default
  // to those your server supports. Setting ``null`` on queryParams removed them
  // from being appended to the request URLs.
  queryParams: {
    currentPage: "page",
    totalPages: null,
    totalRecords: null,
    sortKey: "sort",
    order: null,
    directions: {
      "-1": "asc",
      "1": "desc"
    },
    per_page: null
  }

});

module.exports = Courses;
