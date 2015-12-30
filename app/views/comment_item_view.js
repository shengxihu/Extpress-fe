var Backbone = require("Backbone");
var _ = require('underscore');

//load model
var CommentLike = require('../models/comment_like.js');

//load cookie
var cookie = require("../util/cookie.js");

var comment_item_view = Backbone.View.extend({
	className:"comment_item",
    template: _.template($("#comment_item_template").html()),
    events:{
		'click .like_icon':'onLikeClick'
    },
    onLikeClick:function(){
		console.log("clicked!")
		this.like_model = new CommentLike({id:this.model.id});
        var token = btoa(cookie.getCookie("token")+":")
        this.like_model.save(
            {},
            {
                headers:{
                     "Authorization":"Basic "+ token
                }
            })
    },
    render: function() {
    	this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
})

module.exports = comment_item_view;