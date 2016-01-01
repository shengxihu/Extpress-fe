var Backbone = require("Backbone");
var _ = require('underscore');

//load subview
var comment_item_view = require('./comment_item_view.js');

var comments_view = Backbone.View.extend({
	className:"comments_view",
    template: _.template($("#comments_template").html()),
    initialize:function(options){
    	this.options = options;
    },
    render: function() {
        var that = this;
        console.log(this.options.collection)
        this.options.collection.forEach(function(comment){
                var commentItemView = new comment_item_view({model:comment});
                this.$el.append( commentItemView.render().el );
        },that)
        return this;
    }
})

module.exports = comments_view;