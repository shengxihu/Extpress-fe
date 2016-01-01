var Backbone = require("Backbone");

var HotSearch = Backbone.Model.extend({
	url:"http://xueer.ccnuer.cn/api/v1.0/tags"
})

module.exports = HotSearch;