var Backbone = require("Backbone");

var HotSearch = Backbone.Model.extend({
	url:"/api/v1.0/search/hot/"
})

module.exports = HotSearch;