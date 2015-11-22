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
    main: function() {
        //initialize the main view
        console.log('you have reached home');
        var mainView = new main_view({
            el: $("#pageview")
        });
        mainView.render();
        util.bind_navigate(mainView.$(".tab"), this);
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
