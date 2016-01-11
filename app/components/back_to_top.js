var Backbone = require("Backbone");
var _ = require('underscore');

var back_to_top_view = Backbone.View.extend({
	className:"back_to_top",
    template: _.template($("#back_to_top_template").html()),
    initialize:function(){
		window.addEventListener("scroll", function(){
			console.log(window.pageYOffset);
		})
    },
    render: function() {
    	this.$el.html(this.template());
        return this;
    }
})

module.exports = back_to_top_view;