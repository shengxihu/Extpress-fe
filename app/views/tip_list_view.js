var Backbone = require("Backbone");
var _ = require('underscore');

//load model
var TipListCollection = require('../collections/tip_list.js');

//load view
var tip_item_view = require('./tip_item_view.js');

var main_tip_view = Backbone.View.extend({
	className : 'tip',
	initialize:function(options){
		this.options = options;
	},
	render: function(){
		var tips = new TipListCollection;
		var that = this;
		tips.fetch().done(function(){
			tips.forEach(function(tip){
				var tipItemView = new tip_item_view({model:tip,router:this.options.router});
				this.$el.append( tipItemView.render().el );
			},that)
			that.options.loadingView.remove()
		});
		return this; 
	}
})

module.exports = main_tip_view;
