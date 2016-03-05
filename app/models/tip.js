var Backbone = require("Backbone");

var Tip = Backbone.Model.extend({
	urlRoot:'/api/v1.0/tips'
})

module.exports = Tip;
