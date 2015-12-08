var Backbone = require("Backbone");
var _ = require('underscore');

var user_view = Backbone.View.extend({
	className : 'user_view',
	template: _.template($("#user_view_template").html()),
	initialize:function(options){
		this.options = options;
	},
	events:{
		"click .btn":"onBtnClick"
	},
	onBtnClick:function(e){
		this.options.router.navigate($(e.target).data("link"),{trigger: true});
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this; 
	}
})

module.exports = user_view;
