var Backbone = require("Backbone");
var _ = require('underscore');

//load view
var main_tab_view = require("./main_tab_view");
var main_tip_view = require("./tip_view");

//load router
var IndexRouter = require("../routers/index_router");

var main_view = Backbone.View.extend({
    template: _.template($("#main_template").html()),
    render: function() {
        this.$el.html(this.template());
        var tabView = new main_tab_view({
            el: $(".main_tab")
        });
        var tipView = new main_tip_view();
        this.subrouter = new IndexRouter($(".main_view"), tipView);
        tabView.render();
        this.$(".main_view").append(tipView.render().el)
        return this;
    },
    remove: function() {
    	this.subrouter = null;
        Backbone.View.prototype.remove.call(this);

    }

})

module.exports = main_view;
