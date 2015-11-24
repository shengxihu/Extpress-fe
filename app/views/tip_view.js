var Backbone = require("Backbone");
var _ = require('underscore');

var main_tip_view = Backbone.View.extend({
	className : 'tip',
	template: _.template($("#main_tip_template").html()),
	render: function(){
		this.$el.html(this.template());
		return this; 
	}
})

module.exports = main_tip_view;