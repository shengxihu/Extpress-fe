var PageableCollection = require("backbone.paginator");

//load model
var Comment = require('../models/comment.js');

var Comments = Backbone.PageableCollection.extend({
  url: "https://api.github.com/repositories/952189/issues?state=closed",
  mode: "infinite",
	
  model:Comment,
  // Initial pagination states
  state: {
    pageSize: 10,
    sortKey: "updated",
    order: 1
  },

  // You can remap the query parameters from ``state`` keys from the default
  // to those your server supports. Setting ``null`` on queryParams removed them
  // from being appended to the request URLs.
  queryParams: {
    totalPages: null,
    totalRecords: null,
    sortKey: null,
    order: null,
    directions: null
  }

});

module.exports = Comments;