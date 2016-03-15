var Backbone = require("Backbone");

var AuthRegister = Backbone.Model.extend({
	initialize:function(options){
		this.options = options;
	},
	url:"http://115.28.152.113:5050/api/users/"
})

module.exports = AuthRegister;