var Backbone = require("Backbone");
var _ = require('underscore');

var search_view = Backbone.View.extend({
	className:"search_view",
    template: _.template($("#search_template").html()),
    render: function() {
        this.$el.html(this.template());
        return this;
    }
})

module.exports = search_view;
