var Backbone = require("Backbone");
var _ = require('underscore');

// load model
var TipLike = require("../models/tip_like.js");

// load cookie
var cookie = require("../util/cookie.js");

var tip_view = Backbone.View.extend({
	className : 'tip_view',
	template: _.template($("#tip_view_template").html()),
	initialize:function(options){
		this.options = options;
	},
	events:{
		"click .tip_btn_like":"onLikeClicked"
	},
	onLikeClicked:function(){
		var that = this;
		this.like_model = new TipLike({
       c_id: this.model.id
    });
    var token = cookie.getToken();
    this.like_model.save({}, {
    	headers: token
    })
    .done(function(data) {
        that.model.set({
          likes: data.likes
        });
        // re-render
        that.$el.html(that.template(that.model.toJSON()));
    });
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

