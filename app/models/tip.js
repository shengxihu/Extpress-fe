var Backbone = require("Backbone");

var Tip = Backbone.Model.extend({
	urlRoot:'/api/tip'
})

module.exports = Tip;
