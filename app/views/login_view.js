var Backbone = require("Backbone");
var _ = require('underscore');

var login_view = Backbone.View.extend({
	className : 'login_view l_r_view',
	template: _.template($("#login_view_template").html()),
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

module.exports = login_view;