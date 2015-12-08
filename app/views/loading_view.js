var Backbone = require("Backbone");
var _ = require('underscore');

var loading_view = Backbone.View.extend({
	className:"loading",
    template: _.template($("#loading_view_template").html()),
    initialize:function(options){
		this.options = options;
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }
})

module.exports = loading_view;
