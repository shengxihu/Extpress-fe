var Backbone = require("Backbone");
var _ = require('underscore');

var main_recommend_view = Backbone.View.extend({
	className : 'recommend',
	template: _.template($("#main_recommend_template").html()),
	render: function(){
		this.$el.html(this.template());
		return this; 
	}
})

module.exports = main_recommend_view;