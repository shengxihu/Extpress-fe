var PageableCollection = require("backbone.paginator");

// load model
var Course = require("../models/courses_item.js");

var Courses = Backbone.PageableCollection.extend({
  initialize: function(model, options) {
    this.params = options.params;
    this.state.currentPage = this.params.page - 0;
    this.state.sortKey = this.params.sort;
    console.log(this.state)
  },
  url: "/api/v1.0/courses/",

  model: Course,
  // Initial pagination states
  state: {
    pageSize: 20,
    firstPage: 1,
    totalRecords: 200
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
