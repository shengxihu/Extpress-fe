var Backbone = require("Backbone");

var CheckUsername = Backbone.Model.extend({
	urlRoot:"http://120.25.166.213:5050/api/check_username/"
})

module.exports = CheckUsername