var Backbone = require("Backbone");

var AuthLogin = Backbone.Model.extend({
	urlRoot:"http://115.28.152.113:5050/api/login/",
	default:{
		username:'',
		password:''
	}
})

module.exports = AuthLogin