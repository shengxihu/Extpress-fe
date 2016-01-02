var Backbone = require("Backbone");
var _ = require('underscore');

//load cookie
var cookie = require("../util/cookie.js");

var user_view = Backbone.View.extend({
	className : 'user_view',
	template: _.template($("#user_view_template").html()),
	initialize:function(options){
		this.options = options;
	},
	events:{
		"click .btn":"onBtnClick",
		"click .logout":"onLogoutClick"
	},
	onBtnClick:function(e){
		this.options.router.navigate($(e.target).data("link"),{trigger: true});
	},
	onLogoutClick:function(){
		cookie.clearCookie("token");
		this.options.model.set({isLogin:false});
		this.options.router.navigate("",{trigger: true});
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this; 
	}
})

module.exports = user_view;
