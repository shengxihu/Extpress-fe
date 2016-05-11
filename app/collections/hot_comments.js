var Backbone = require("Backbone");

// load model
var Comment = require("../models/comment.js");

var TipListCollection = Backbone.Collection.extend({
  model: Comment,
  url: function() {
    return "/api/v1.0/courses/" + this.course_id + "/comments/hot/";
  },
  initialize: function(models, options) {
    this.course_id = options.course_id;
  }
});

module.exports = TipListCollection;
