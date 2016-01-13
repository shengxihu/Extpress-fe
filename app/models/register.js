var Backbone = require("Backbone");

var Register = Backbone.Model.extend({
	initialize:function(options){
		this.options = options;
	},
	url:"/api/v1.0/users/"
})

module.exports = Register;