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
        "click .like":"onLikeCourseClick",
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
        this.comments.getNextPage().done(function(data){
            console.log(that.comments.fullCollection);
        })
    },
    render: function() {
    	var that = this;
    	this.course.fetch().done(function(){
    		that.$el.html(that.template(that.course.toJSON()));
            var comments = new Comments();
            var commentsView = new comments_view({collection:comments});
            comments.getFirstPage().done(function(){
                console.log('done');
                that.$el.append( commentsView.render().el );
            });
    	});
        
        return this;
    }
})

module.exports = course_view;
