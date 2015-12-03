var Backbone = require("Backbone");
var _ = require('underscore');


var comment_item_view = Backbone.View.extend({
	className:"comment_item",
    template: _.template($("#comment_item_template").html()),
    render: function() {
    	this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
})

module.exports = comment_item_view;