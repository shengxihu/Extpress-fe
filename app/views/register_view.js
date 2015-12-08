var Backbone = require("Backbone");
var _ = require('underscore');

var register_view = Backbone.View.extend({
	className : 'register_view l_r_view',
	template: _.template($("#register_view_template").html()),
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
		this.$el.html(this.template());
		return this; 
	}
})

module.exports = register_view;