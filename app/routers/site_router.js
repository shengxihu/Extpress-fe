var Backbone = require("Backbone");
var util = require("../util/util");

//load views
var main_view = require("../views/main_view");
var search_view = require("../views/search_view");
var course_view = require("../views/course_view");
var tip_view = require("../views/tip_view");
var courses_view = require("../views/courses_view");
var user_view = require("../views/user_view");
var login_view = require("../views/login_view");
var register_view = require("../views/register_view");

//load model
var Tip = require('../models/tip.js');

var SiteRouter = Backbone.Router.extend({
    routes: {
        '': 'main',
        'login': 'login',
        'search': 'search',
        'search_result/:keyword(/)': 'search_result',
        'course/:id(/)': 'course',
        'tip/:id(/)':'tip',
        'courses':'courses',
        'user(/:username)':'user',
        'login':'login',
        'register':'register'
    },
    initialize : function(options){
        this.$container = options.container;
        this.navModel = options.nav_model;
        this.userModel = options.user_model;
    },
    switchView: function(view) {
        if(this.s_view){
            this.removeSearchView();
        }
        if (this.currentView) {
            this.currentView.remove();
        }
        this.$container.append( view.render().el )
        this.currentView = view;
    },
    removeSearchView:function(){
        if (this.s_view) {
            this.s_view.remove();
            this.s_view = null;
        }
    },
    main: function() {
        var view = new main_view({router:this});
        this.switchView(view);
        this.navModel.set({currentPage:null,hasPrev:false});
    },
    search: function() {
        var view = new search_view({router:this});
        this.s_view = view;
        this.$container.append( view.render().el )
        var prevSet= {
                currentPage:this.navModel.get("currentPage"),
                hasPrev:this.navModel.get("hasPrev")
            };
        this.navModel.set({
            prevSet:prevSet,
            currentPage:"搜索",
            hasPrev:false
        });
    },
    search_result: function(keyword) {
        console.log('you have searched '+keyword);
    },
    course: function(id) {
        var view = new course_view({router:this,id:id,userModel:this.userModel});
        this.switchView(view);
        this.navModel.set({currentPage:"课程详情",hasPrev:true});
    },
    tip: function(id) {
        var tip = new Tip({id:id});
        var view = new tip_view({router:this,model:tip});
        this.switchView(view);
        this.navModel.set({currentPage:"专题",hasPrev:true});
    },
    courses:function(){
        var view = new courses_view({router:this});
        this.switchView(view);
        this.navModel.set({currentPage:"所有课程",hasPrev:true});
    },
    user:function(){
        var view = new user_view({router:this,model:this.userModel});
        this.switchView(view);
        this.navModel.set({currentPage:"我的学而",hasPrev:true});
    },
    login:function(){
        var view = new login_view({router:this,userModel:this.userModel});
        this.switchView(view);
        this.navModel.set({currentPage:"登录",hasPrev:false});
    },
    register:function(){
        var view = new register_view({router:this});
        this.switchView(view);
        this.navModel.set({currentPage:"注册",hasPrev:false});
    }
});

module.exports = SiteRouter;
