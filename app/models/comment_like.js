var Backbone = require("Backbone");

var CommentLike = Backbone.Model.extend({
	initialize:function(options){
		this.options = options;
	},
	url:function(){
		var base = "/api/v1.0/comments/";
		console.log(base + this.options.c_id + "/like/");
		return base + this.options.c_id + "/like/"
	}
})

module.exports = CommentLike;