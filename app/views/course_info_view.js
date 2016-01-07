var Backbone = require("Backbone");
var _ = require('underscore');

//load model
var CourseInfo = require('../models/course_info.js');
var CommentSend = require('../models/comment_send.js');
var CourseLike = require('../models/course_like.js');
//load cookie
var cookie = require("../util/cookie.js");

var course_info_view = Backbone.View.extend({
	className:"course_info",
    template: _.template($("#course_info_template").html()),
    initialize:function(options){
        var that = this;
    	this.options = options;
        this.model = new CourseInfo({id:this.options.id});
        this.model.fetch({headers:cookie.getToken()}).done(function(){
            that.render();
            that.trigger("loaded");
        })
    },
    events: {
        "click .w_comment": "onWCommentClick",
        "click #course_like": "onLikeCourseClick",
        "click .comment_close": "onCommentCloseClick",
        "click .comment_submit": "onAddComments"
    },
      onWCommentClick: function(e) {
        var that = this;
        require.ensure([], function() {
            var React = require("react"),
                ReactDOM = require("react-dom");
                CommentBox = require("../components/comment_box.jsx");
            that.$(".comment_box_pop").show();
            ReactDOM.render(React.createElement(CommentBox, null), document.querySelector(".comment_box")); 
             if (module.hot) {
                module.hot.accept("../components/comment_box.jsx", function() {
                    var CommentBox = require("../components/comment_box.jsx");
                    ReactDOM.render(React.createElement(CommentBox, null), document.querySelector(".comment_box"));
                });
            }             
        })
    },
    onLikeCourseClick: function(e) {
        var m = new CourseLike({c_id:this.course.get("id")});
        m.save({},{headers:this.getToken()});
    },
    onAddComments: function(e) {
        var that = this;
        e.preventDefault();
        this.$(".comment_submit").html("发送中");
        var send = new CommentSend({id:this.options.id});
        var token = btoa(cookie.getCookie("token")+":");
        send.set({body:this.$("#body").val(),tags:this.$("#tags").val()});
        Backbone.sync("create", send,{
                headers:{
                     "Authorization":"Basic "+ token
                }
            }).done(function(data) {
                that.options.userModel.set({newCommentId:data.id})
                Backbone.history.loadUrl(Backbone.history.fragment);
        })
    },
    onCommentCloseClick: function(){
         this.$(".comment_box_pop").hide();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
})

module.exports = course_info_view;