var Backbone = require("Backbone");
var _ = require('underscore');

//load model
var CommentLike = require('../models/comment_like.js');

//load cookie
var cookie = require("../util/cookie.js");

var comment_item_view = Backbone.View.extend({
    initialize:function(){
         this.model.on('change', this.render, this);
    },
    tagName:"li",
	className:"comment_item",
    template: _.template($("#comment_item_template").html()),
    events:{
		'click .touch_area':'onLikeClick'
    },
    onLikeClick:function(){
        var that = this;
		if (!cookie.getCookie("token")){
            alert("请登录！")
        }else{
            this.like_model = new CommentLike({c_id:this.model.id});
            var token = btoa(cookie.getCookie("token")+":")
            this.like_model.save(
                {},
                {
                    headers:{
                        "Authorization":"Basic "+ token
                    }
                }).done(function(data){
                    that.model.set({likes:data.likes,liked:data.liked})
                })
        }
    },
    render: function() {
    	this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
})

module.exports = comment_item_view;