var Backbone = require("Backbone");

var HotSearch = Backbone.Model.extend({
	url:"/api/v1.0/tags"
})

module.exports = HotSearch;