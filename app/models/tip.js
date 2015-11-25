var Backbone = require("Backbone");

var Tip = Backbone.Model.extend({
	default:{
		title:'',
		url:'',
		views:0,
		likes:0,
		date:''
	}
})

module.exports = Tip;
