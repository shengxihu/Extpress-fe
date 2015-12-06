var Backbone = require("Backbone");

var Course = Backbone.Model.extend({
	urlRoot:'http://115.28.152.113:5000/api/v1.0/courses/'
})

module.exports = Course;