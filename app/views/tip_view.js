var Backbone = require("Backbone");
var _ = require('underscore');

//load model
var Tip = require('../models/tip.js');
var TipsCollection = require('../collections/tips.js');

//load view
var tip_item_view = require('./tip_item_view.js');

var main_tip_view = Backbone.View.extend({
	className : 'tip',
	//addItem:function(collections, context){
				//console.log(collections, context);
				
	//		},
	render: function(){
		var tips = new TipsCollection;
		var that = this;
		tips.fetch().done(function(){
			tips.forEach(function(tip){
				var tipItemView = new tip_item_view({model:tip});
				console.log(tipItemView.render().el);
				this.$el.append( tipItemView.render().el );
			},that)
		});
		return this; 
	}
})

module.exports = main_tip_view;

