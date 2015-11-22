var Backbone = require("Backbone");
//load views
var main_recommend_view = require("../views/recommend_view");
var main_all_view = require("../views/all_view");
var main_tip_view = require("../views/tip_view");

var IndexRouter = Backbone.Router.extend({
    routes: {
        'tips':'tips',
        'choice/:id(/)': 'choice',
        'recommend': 'recommend',
        'all': 'all'
    },
    initialize : function($container,defaultView){
        console.log($container, defaultView)
        this.$container = $container;
        this.currentView = defaultView;
    },
    switchView: function(view) {
        if (this.currentView) {
            // Detach the old view
            this.currentView.remove();
        }
        // Render view after it is in the DOM (styles are applied)
        //view.render();
        this.$container.append( view.render().el )
        this.currentView = view;
        //console.log(view);
    },
    choice: function(id) {
        console.log('you have reached choice' + id)
    },
    recommend: function() {
        var view = new main_recommend_view();
        this.switchView(view);
    },
    all: function() {
        var view = new main_all_view();
        this.switchView(view);
    },
    tips: function(){
        var view = new main_tip_view();
        this.switchView(view);
    }
});

module.exports = IndexRouter;