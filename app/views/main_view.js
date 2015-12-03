var Backbone = require("Backbone");
var _ = require('underscore');

//load view
var main_tab_view = require("./main_tab_view");
var main_tip_view = require("./tip_view");
var main_recommend_view = require("./recommend_view");
var main_all_view = require("./all_view");

var main_view = Backbone.View.extend({
    className:"main_view",
    template: _.template($("#main_template").html()),
    bindNav : function(ele){
        var that = this;
        ele.on("click",function(e){
            e.preventDefault();
            var $t = $(e.target)
            var link = $t.data("link");
            ele.removeClass("current");
            $t.addClass("current");
            switch(link){
                case "tips":
                    var view = new main_tip_view();
                    that.switchView(view);
                    break;
                case "recommend":
                    var view = new main_recommend_view();
                    that.switchView(view);
                    break;
                case "all":
                    var view = new main_all_view();
                    that.switchView(view);
                    break;
            }
        })
    },
    render: function() {
        this.$el.html(this.template());
        var tabView = new main_tab_view();
        var tipView = new main_tip_view();
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
