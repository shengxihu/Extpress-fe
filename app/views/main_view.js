var Backbone = require("Backbone");
var main_tab_view = require("./main_tab_view");


var main_view = Backbone.View.extend({
	template: _.template($("#main_template").html()).bind(Backbone),
	render: function(){
		this.$el.html(this.template());
		var tabView = new main_tab_view();
		this.$(".main_tab").append( tabView.render().$el.html() );
		return this; 
	}
})

module.exports = main_view;