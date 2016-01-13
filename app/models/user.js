var Backbone = require("Backbone");

var User = Backbone.Model.extend({
	urlRoot:"/api/v1.0/token/",
	default:{
		username:'',
		password:''
	}
})

module.exports = User;