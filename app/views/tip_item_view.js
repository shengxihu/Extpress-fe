var Backbone = require("Backbone");
var _ = require('underscore');

var tip_item_view = Backbone.View.extend({
	className : 'item',
	template: _.template($("#main_tip_item_template").html()),
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this; 
	}
})

module.exports = tip_item_view;