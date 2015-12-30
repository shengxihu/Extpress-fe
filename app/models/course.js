var Backbone = require("Backbone");

var Course = Backbone.Model.extend({
	urlRoot:'http://xueer.ccnuer.cn/api/v1.0/courses/'
})

module.exports = Course;