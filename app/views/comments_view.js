var Backbone = require("Backbone");
var _ = require('underscore');

//load subview
var comment_item_view = require('./comment_item_view.js');
//load collection
var Comments = require('../collections/comments.js');
//load cookie
var cookie = require("../util/cookie.js");

var comments_view = Backbone.View.extend({
    template: _.template($("#comments_template").html()),
    initialize: function(options) {
        var that = this;
        this.options = options;
        this.collection = new Comments([], {
            course_id: that.options.id
        });
        this.collection.getFirstPage({
                headers: cookie.getToken()
            })
            .done(function() {
                that.render();
                if (that.collection.hasNextPage()) {
                    that.$(".comments").append("<div class='more_comments'>展开更多评价</div>")
                }
                that.trigger("loaded");
                var new_id = "#c_" + that.options.userModel.get("newCommentId");
                $(new_id).parent().addClass("new_comment");
                that.options.userModel.set({newCommentId:null});
            })
            /*
            .fail(function() {
                that.$(".comments").html(
                    "<div class='no_comments'>∑(っ °Д °;)っ<br>没有任何评价，快去添加第一条评价吧。<div>"
                );
            })*/
        this.$el.html(this.template());
    },
    events: {
        "click .more_comments": "onMoreCommentsClick"
    },
    onMoreCommentsClick: function(e) {
        var that = this;
        this.$(".more_comments").html("载入中···");
        this.collection.getNextPage({headers:cookie.getToken()}).done(function() {
            that.render();
            if(!(that.collection.hasNextPage())){
                that.$(".more_comments").remove();
                that.$(".comments").append("<div class='no_more_comments'>∑(っ °Д °;)っ<br>没有更多评价了。<div>")
            }else{
                that.$(".more_comments").html("展开更多评价");
            }
        })
    },
    render: function() {
        var that = this;
        this.collection.forEach(function(comment) {
            var commentItemView = new comment_item_view({
                model: comment
            });
            this.$(".comments_view").append(commentItemView.render().el);
        }, that)
        return this;
    }
})

module.exports = comments_view;
