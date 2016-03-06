var Backbone = require("Backbone");
var _ = require('underscore');

var dialog_view = Backbone.View.extend({
	className:"dialog",
    template: _.template($("#dialog_template").html()),
    initialize:function(options){
        this.options = options;
    },
    events:{
        "click .dialog_btn_cancel":"onCancelBtnClick",
        "click .dialog_btn_login":"onLoginBtnClick"
    },
    onCancelBtnClick:function(e){
        this.remove();
    },
    onLoginBtnClick:function(e){
        this.options.router.navigate('login',{trigger: true});
    },
    render: function() {
    	this.$el.html(this.template());
        return this;
    }
})

module.exports = dialog_view;