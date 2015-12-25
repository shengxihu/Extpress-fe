var Backbone = require("Backbone");
var _ = require('underscore');

//load cookie
var cookie = require("../util/cookie.js");

var login_view = Backbone.View.extend({
	className : 'login_view l_r_view',
	template: _.template($("#login_view_template").html()),
	initialize:function(options){
		this.options = options;
	},
	events:{
		"click .btn":"onBtnClick"
	},
	onBtnClick:function(){
		var that = this;
		var auth = btoa($(".username").val()+":"+$(".password").val());
		this.options.userModel.fetch({
			headers:{
				"Authorization":"Basic "+ auth
			}
		}).done(function(res){
			that.options.userModel.set({isLogin:true});
			cookie.setCookie("token",res.token,14);
			that.options.router.navigate("",{trigger: true});
		})
	},
	render: function(){
		this.$el.html(this.template());
		return this; 
	}
})

module.exports = login_view;