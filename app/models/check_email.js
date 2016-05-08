var Backbone = require("Backbone");

var CheckEmail = Backbone.Model.extend({
	urlRoot:"http://120.25.166.213:5050/api/check_email"
})

module.exports = CheckEmail