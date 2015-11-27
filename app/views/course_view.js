var Backbone = require("Backbone");
var _ = require('underscore');

var course_view = Backbone.View.extend({
	className:"course_view",
    template: _.template($("#course_template").html()),
    render: function() {
        this.$el.html(this.template());
        return this;
    }
})

module.exports = course_view;
