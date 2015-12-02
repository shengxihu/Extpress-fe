var Backbone = require("Backbone");
var util = require("../util/util");

//load views
var main_view = require("../views/main_view");
var search_view = require("../views/search_view");
var course_view = require("../views/course_view");

var SiteRouter = Backbone.Router.extend({
    routes: {
        '': 'main',
        'login': 'login',
        'search': 'search',
        'search_result/:keyword(/)': 'search_result',
        'course/:id(/)': 'course'
    },
    initialize : function($container){
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
    },
    login: function() {
        console.log('you have reached login');
    },
    search: function() {
        var view = new search_view({router:this});
        this.switchView(view);
    },
    search_result: function(keyword) {
        console.log('you have searched '+keyword);
    },
    course: function(id) {
        var view = new course_view({router:this,id:id});
        this.switchView(view);
    }
});

module.exports = SiteRouter;
