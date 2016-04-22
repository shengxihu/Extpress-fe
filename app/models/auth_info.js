var Backbone = require("Backbone");

var AuthInfo = Backbone.Model.extend({
	initialize:function(options){
		this.options = options;
	},
	url:function(){
		var base = "http://120.25.166.213:5050/api/users/";
		return base + this.options.uid+ "/"
	}
})

module.exports = AuthInfo