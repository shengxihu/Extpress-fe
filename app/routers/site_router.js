var Backbone = require("Backbone");
var util = require("../util/util");

//load views
var main_view = require("../views/main_view");
var search_view = require("../views/search_view");
var course_view = require("../views/course_view");
var tip_view = require("../views/tip_view");

//load model
var Tip = require('../models/tip.js');

var SiteRouter = Backbone.Router.extend({
    routes: {
        '': 'main',
        'login': 'login',
        'search': 'search',
        'search_result/:keyword(/)': 'search_result',
        'course/:id(/)': 'course',
        'tip/:id(/)':'tip'
    },
    initialize : function(options){
        console.log(options)
        this.$container = options.container;
        this.navModel = options.nav_model;
    },
    switchView: function(view) {
        if (this.currentView) {
            this.currentView.remove();
        }
        this.$container.append( view.render().el )
        this.currentView = view;
    },
    main: function() {
        var view = new main_view({router:this});
        this.switchView(view);
        this.navModel.set({currentPage:null,hasPrev:false});
    },
    login: function() {
        console.log('you have reached login');
    },
    search: function() {
        var view = new search_view({router:this});
        this.switchView(view);
        this.navModel.set({currentPage:"搜索",hasPrev:false});
    },
    search_result: function(keyword) {
        console.log('you have searched '+keyword);
    },
    course: function(id) {
        var view = new course_view({router:this,id:id});
        this.switchView(view);
        this.navModel.set({currentPage:"课程详情",hasPrev:true});
    },
    tip: function(id) {
        var tip = new Tip({id:id});
        var view = new tip_view({router:this,model:tip});
        this.switchView(view);
        this.navModel.set({currentPage:"专题",hasPrev:true});
    }
});

module.exports = SiteRouter;
