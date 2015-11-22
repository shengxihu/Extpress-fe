var Backbone = require("Backbone");
var _ = require('underscore');

var main_all_view = Backbone.View.extend({
	className : 'all',
	template: _.template($("#main_all_template").html()),
	render: function(){
		this.$el.html(this.template());
		return this; 
	}
})

module.exports = main_all_view;