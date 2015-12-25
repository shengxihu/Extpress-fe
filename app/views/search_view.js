var Backbone = require("Backbone");
var _ = require('underscore');

//load model
var HotSearch = require('../models/hot_search.js');

var search_view = Backbone.View.extend({
	className:"search_view",
    template: _.template($("#search_template").html()),
    events:{
		'click .search_btn':'onSearch',
		'click .item':'onClick'
    },
    initialize : function(options){
        this.options = options;
        this.model = new HotSearch();
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
    render: function(){
        var that = this;
        this.$el.html(this.template());
        console.log("render");
        this.model.fetch().done(function(){
            console.log("done");
            that.$(".warpper").addClass("done");
        })
        return this;
    }
})

module.exports = search_view;
