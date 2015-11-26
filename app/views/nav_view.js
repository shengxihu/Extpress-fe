var Backbone = require("Backbone");
var _ = require('underscore');

var nav_view = Backbone.View.extend({
	className:"container",
    template: _.template($("#nav_template").html()),
    render: function() {
        this.$el.html(this.template());
        return this;
    }
})

module.exports = nav_view;
