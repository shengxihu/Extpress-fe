var Backbone = require("Backbone");
var _ = require('underscore');

var tip_view = Backbone.View.extend({
	className : 'tip',
	template: _.template($("#tip_view_template").html()),
	initialize:function(options){
		this.options = options;
	},
	render: function(){
		var that = this;
		this.model.fetch().done(function(){
			that.$el.html(that.template(that.model.toJSON()));
		});
		return this; 
	}
})

module.exports = tip_view;

