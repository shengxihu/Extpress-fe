var PageableCollection = require("backbone.paginator");

//load model
var Course = require('../models/courses_item.js');

var Courses = Backbone.PageableCollection.extend({
  initialize:function(models,options){
        //this.course_id = options.course_id;
        //console.log(this.course_id);
  },
  url: "http://115.28.152.113:5000/api/v1.0/courses/",
  mode: "server",
	
  model:Course,
  // Initial pagination states
  state: {
    pageSize:20,
    firstPage:1,
    currentPage:1,
    sortKey:'view',
    totalRecords:200
  },

  // You can remap the query parameters from ``state`` keys from the default
  // to those your server supports. Setting ``null`` on queryParams removed them
  // from being appended to the request URLs.
  queryParams: {
    currentPage:"page",
    totalPages: null,
    totalRecords: null,
    sortKey: "sort",
    order: null,
    directions: {
      "-1": "asc",
      "1": "desc"
    },
    per_page:null
  }

});

module.exports = Courses;