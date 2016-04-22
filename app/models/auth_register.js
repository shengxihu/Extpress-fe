var Backbone = require("Backbone");

var AuthRegister = Backbone.Model.extend({
	initialize:function(options){
		this.options = options;
	},
	url:"http://120.25.166.213:5050/api/users/"
})

module.exports = AuthRegister;