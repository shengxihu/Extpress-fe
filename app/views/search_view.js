var Backbone = require("Backbone");
var _ = require('underscore');

var search_view = Backbone.View.extend({
	className:"search_view",
    template: _.template($("#search_template").html()),
    events:{
		'click .search_btn':'onSearch',
		'click .item':'onClick'
    },
    initialize : function(options){
        this.options = options;
    },
    onSearch:function(){
		if(!this.$('.search_input').val()){
			console.log("no value!");
		}else{
			var url = "search_result/" + this.$('.search_input').val();
			this.options.router.navigate(url,{trigger: true});
		}
    },
    onClick:function(e){
		this.options.router.navigate($(e.target).data("link"),{trigger: true});
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }
})

module.exports = search_view;
