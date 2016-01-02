var Backbone = require("Backbone");
var _ = require('underscore');

//load model
var Register = require('../models/register.js');

var register_view = Backbone.View.extend({
	className : 'register_view l_r_view',
	template: _.template($("#register_view_template").html()),
	initialize:function(options){
		this.options = options;
	},
	events:{
		"click .submit":"onSubmitClick"
	},
	onSubmitClick:function(e){
	},
	render: function(){
		this.$el.html(this.template());
		return this; 
	}
})

module.exports = register_view;