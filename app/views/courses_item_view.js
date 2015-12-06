var Backbone = require("Backbone");
var _ = require('underscore');


var courses_item_view = Backbone.View.extend({
	className:"courses_list_item",
    template: _.template($("#courses_list_item_template").html()),
    render: function() {
    	this.$el.html(this.template());
        return this;
    }
})

module.exports = courses_item_view;