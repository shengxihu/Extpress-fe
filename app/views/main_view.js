var Backbone = require("Backbone");
var _ = require('underscore');

//load view
var main_tab_view = require("./main_tab_view");
var main_tip_view = require("./tip_list_view");
var loading_view = require('./loading_view');

var main_view = Backbone.View.extend({
    className:"main_view",
    template: _.template($("#main_template").html()),
    initialize:function(options){
        this.options = options;
        this.loading_view = new loading_view();
    },
    bindNav : function(ele){
        var that = this;
        ele.on("click",function(e){
            e.preventDefault();
            that.options.router.navigate($(e.target).data("link"),{trigger: true});
        })
    },
    render: function() {

        //var loading_view = new loading_view();
        this.$el.html(this.template());
        this.$el.append(this.loading_view.render().el)
        var tabView = new main_tab_view();
        var tipView = new main_tip_view({router:this.options.router,loadingView:this.loading_view});
        this.currentView = tipView;
        this.$el.append(tabView.render().el)
        this.$el.append(tipView.render().el)
        this.bindNav(this.$(".tab_text"));
        return this;
    }
})

module.exports = main_view;
