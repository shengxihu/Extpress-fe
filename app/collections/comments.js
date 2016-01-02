var PageableCollection = require("backbone.paginator");

//load model
var Comment = require('../models/comment.js');

var Comments = Backbone.PageableCollection.extend({
  initialize:function(models,options){
        this.course_id = options.course_id;
  },
  url: function() {
    return "http://xueer.ccnuer.cn/api/v1.0/courses/" + this.course_id + "/comments/";
  },
  mode: "infinite",
	
  model:Comment,
  // Initial pagination states
  state: {
    firstPage:1,
    currentPage:1,
    pageSize: 10,
    order: 1
  },

  // You can remap the query parameters from ``state`` keys from the default
  // to those your server supports. Setting ``null`` on queryParams removed them
  // from being appended to the request URLs.
  queryParams: {
    currentPage:"page",
    totalPages: null,
    totalRecords: null,
    sortKey: null,
    order: null,
    directions: null
  }

});

module.exports = Comments;