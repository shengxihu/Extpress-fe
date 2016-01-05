var Backbone = require("Backbone");
var _ = require('underscore');



var nav_view = Backbone.View.extend({
	className:"nav_view space",
    template: _.template($("#nav_template").html()),
    initialize:function(options){
    	this.model.bind("change",_.bind(this.render,this));
		this.router = options.router;
        this.searchView = options.searchView;
        this.showSearchFlag = false;
        this.listenTo(this.searchView,"hide",this.toggleSearchDisplay);
    },
    events:{
		"click .link":"onLinkClicked",
		"click .back":"onBackClicked",
        "click .search":"toggleSearchDisplay"
    },
    onLinkClicked:function(e){
		this.router.navigate($(e.target).data("link"),{trigger: true});
    },
    toggleSearchDisplay:function(){
        var model = this.router.navModel;
        if (this.showSearchFlag){
            this.showSearchFlag = false;
            model.set({
                currentPage:model.get("prevSet").currentPage,
                hasPrev:model.get("prevSet").hasPrev
            }); 
            $(".search_view").removeClass("search_active").addClass("search_hidden");
        }else{
            this.showSearchFlag = true;
            //this.listenTo(view, 'clickRemove', this.removeSearch);
            var prevSet= {
                currentPage:model.get("currentPage"),
                hasPrev:model.get("hasPrev")
            };
            model.set({
                prevSet:prevSet,
                currentPage:"搜索",
                hasPrev:false
            });
            $(".search_view").removeClass("search_hidden").addClass("search_active");
        }
    },
    onBackClicked:function(){
		window.history.back();
    },
    render: function() {
        this.$el.html(this.template( this.model.toJSON() ));
        return this;
    }
})

module.exports = nav_view;
