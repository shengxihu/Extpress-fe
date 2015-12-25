var Backbone = require("Backbone");

var HotSearch = Backbone.Model.extend({
	url:"/api/hot_search.json"
})

module.exports = HotSearch;