var Backbone = require("Backbone");

var User = Backbone.Model.extend({
	default:{
		username:'',
		isLogin:false
	}
})

module.exports = User;