var Backbone = require("Backbone");
var _ = require('underscore');

var main_tab_view = Backbone.View.extend({
	className:"main_tab space",
    template: _.template($("#main_tab_template").html()),
    render: function() {
        this.$el.html(this.template());
        return this;
    }
})

module.exports = main_tab_view;
