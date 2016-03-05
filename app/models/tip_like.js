var Backbone = require("Backbone");

var TipLike = Backbone.Model.extend({
	initialize:function(options){
		this.options = options;
	},
	url:function(){
		var base = "/api/v1.0/tip/";
		return base + this.options.c_id + "/like/"
	}
})

module.exports = TipLike;