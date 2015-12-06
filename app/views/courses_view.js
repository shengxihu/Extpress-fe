var Backbone = require("Backbone");
var _ = require('underscore');

//load subview
var courses_item_view = require('./courses_item_view.js');

var courses_view = Backbone.View.extend({
	className : 'courses_list',
	template: _.template($("#courses_list_template").html()),
	render: function(){
		this.$el.html(this.template());
		var coursesItemView = new courses_item_view();
        this.$(".list").append( coursesItemView.render().el );
		return this; 
	}
})

module.exports = courses_view;