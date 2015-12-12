var Backbone = require("Backbone");

var User = Backbone.Model.extend({
	urlRoot:"http://115.28.152.113:5000/api/v1.0/token/",
	default:{
		username:'',
		password:''
	}
})

module.exports = User;