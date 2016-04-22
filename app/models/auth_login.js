var Backbone = require("Backbone");

var AuthLogin = Backbone.Model.extend({
	urlRoot:"http://120.25.166.213:5050/api/login/",
	default:{
		username:'',
		password:''
	}
})

module.exports = AuthLogin