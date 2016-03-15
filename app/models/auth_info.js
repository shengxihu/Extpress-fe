var Backbone = require("Backbone");

var AuthInfo = Backbone.Model.extend({
	initialize:function(options){
		this.options = options;
	},
	url:function(){
		var base = "http://115.28.152.113:5050/api/users/";
		return base + this.options.uid+ "/"
	}
})

module.exports = AuthInfo