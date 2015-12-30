var Backbone = require("Backbone");

var HotSearch = Backbone.Model.extend({
	url:"http://xueer.ccnuer.cn/api/hot_search"
})

module.exports = HotSearch;