var Backbone = require("Backbone");
var _ = require('underscore');

//load model
var Course = require('../models/course.js');

var course_view = Backbone.View.extend({
	className:"course_view",
    template: _.template($("#course_template").html()),
    initialize:function(options){
    	this.options = options
    },
    render: function() {
    	var course = new Course({id:this.options.id});
    	var that = this;
    	course.fetch().done(function(){
    		that.$el.html(that.template(course.toJSON()));
    	})
        return this;
    }
})

module.exports = course_view;
