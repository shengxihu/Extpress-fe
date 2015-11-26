var Backbone = require("Backbone");
var main_view = require("../views/main_view");
var util = require("../util/util");
var IndexRouter = require("./index_router");

var SiteRouter = Backbone.Router.extend({
    routes: {
        '': 'main',
        'login': 'login',
        'search': 'search',
        'search_result': 'search_result',
        'course/:id(/)': 'course'
    },
    initialize : function($container){
        //console.log($container, defaultView)
        this.$container = $container;
    },
    switchView: function(view) {
        if (this.currentView) {
            this.currentView.remove();
        }
        this.$container.append( view.render().el )
        this.currentView = view;
    },
    main: function() {
        console.log('you have reached home');
        var view = new main_view();
        this.switchView(view);
        util.bind_navigate(view.$(".tab"), this);
    },
    login: function() {
        console.log('you have reached login');
    },
    search: function() {
        console.log('you have reached search');
    },
    search_result: function() {
        console.log('you have reached search result');
    },
    course: function(id) {
        console.log('you have reached course' + id);
    }
});

module.exports = SiteRouter;
