var Backbone = require("Backbone");
var _ = require('underscore');

//load view
var main_tab_view = require("./main_tab_view");
var main_tip_view = require("./tip_list_view");

var main_view = Backbone.View.extend({
    className:"main_view",
    template: _.template($("#main_template").html()),
    initialize:function(options){
        this.options = options;
    },
    bindNav : function(ele){
        var that = this;
        ele.on("click",function(e){
            e.preventDefault();
            that.options.router.navigate($(e.target).data("link"),{trigger: true});
        })
    },
    render: function() {
        this.$el.html(this.template());
        var tabView = new main_tab_view();
        var tipView = new main_tip_view({router:this.options.router});
        this.currentView = tipView;
        this.$el.append(tabView.render().el)
        this.$el.append(tipView.render().el)
        this.bindNav(this.$(".tab_text"));
        return this;
    },
    switchView: function(view) {
        if (this.currentView) {
            this.currentView.remove();
        }
        this.$el.append( view.render().el );
        this.currentView = view;
    }
})

module.exports = main_view;
