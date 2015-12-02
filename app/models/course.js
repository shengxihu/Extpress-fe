var Backbone = require("Backbone");

var Course = Backbone.Model.extend({
	urlRoot:'/api/course'
})

module.exports = Course;