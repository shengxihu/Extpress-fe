var Backbone = require("Backbone");
var _ = require('underscore');

var back_to_top_view = Backbone.View.extend({
	className:"back_to_top",
    template: _.template($("#back_to_top_template").html()),
    initialize:function(){
		window.addEventListener("scroll", this.onScroll.bind(this))
    },
    events:{
        "click":"onBtnClick"
    },
    onBtnClick:function(){
        window.scrollTo(0,0);
    },
    onScroll:function(){
        if(window.pageYOffset > 0){
            this.$el.show();
        }else{
            this.$el.hide();
        }
    },
    render: function() {
    	this.$el.html(this.template());
        return this;
    }
})

module.exports = back_to_top_view;