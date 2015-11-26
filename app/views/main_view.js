var Backbone = require("Backbone");
var _ = require('underscore');

//load view
var main_tab_view = require("./main_tab_view");
var main_tip_view = require("./tip_view");

//load router
var IndexRouter = require("../routers/index_router");

var main_view = Backbone.View.extend({
    className:"main_view",
    template: _.template($("#main_template").html()),
    render: function() {
        this.$el.html(this.template());
        var tabView = new main_tab_view();
        var tipView = new main_tip_view();
        this.subrouter = new IndexRouter(this.$el, tipView);
        this.$el.append(tabView.render().el)
        this.$el.append(tipView.render().el)
        return this;
    },
    remove: function() {
    	this.subrouter = null;
        Backbone.View.prototype.remove.call(this);
    }

})

module.exports = main_view;
