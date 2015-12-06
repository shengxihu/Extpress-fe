var Backbone = require("Backbone");
var _ = require('underscore');

//load model
var Course = require('../models/course.js');

//load collection
var Comments = require('../collections/comments.js');

//load views
var comments_view = require('./comments_view.js');

var course_view = Backbone.View.extend({
	className:"course_view",
    template: _.template($("#course_template").html()),
    initialize:function(options){
    	this.options = options;
        this.course = new Course({id:this.options.id});
    },
    events:{
        "click .w_comment":"onWCommentClick",
        "click #course_like":"onLikeCourseClick",
        "click .more_comments":"onMoreCommentsClick"
    },
    onWCommentClick:function(e){
        console.log(e.target);
    },
    onLikeCourseClick:function(e){
        console.log(e.target);
    },
    onAddComments:function(){
        console.log("on add!!");
    },
    onMoreCommentsClick:function(e){
        var that = this;
        this.comments.getNextPage().done(function(){
            that.subview.render();
        })
    },
    render: function() {
    	var that = this;
    	this.course.fetch().done(function(){
            //var url = "http://115.28.152.113:5000/api/v1.0/courses/"+that.options.id+"/comments/"
            //console.log(url);
    		that.$el.html(that.template(that.course.toJSON()));
            var comments = new Comments([],{course_id:that.options.id});
            that.comments = comments;
            console.log(comments);
            var commentsView = new comments_view({collection:comments});
            that.subview = commentsView;
            comments.getFirstPage()
                .done(function(){
                    that.$(".comments").append( commentsView.render().el );
                    if(comments.hasNextPage()){
                        that.$el.append("<div class='more_comments'>展开更多评价</div>")
                    }
                })
                .fail(function(){
                    that.$(".comments").html(
                        "<div class='no_comments'>∑(っ °Д °;)っ<br>没有任何评价，快去添加第一条评价吧。<div>"
                        );
                })
    	});
        
        return this;
    }
})

module.exports = course_view;
