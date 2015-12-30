var Backbone = require("Backbone");

var User = Backbone.Model.extend({
	urlRoot:"http://xueer.ccnuer.cn/api/v1.0/token/",
	default:{
		username:'',
		password:''
	}
})

module.exports = User;