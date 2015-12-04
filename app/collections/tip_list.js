var Backbone = require("Backbone");

//load model
var TipItem = require('../models/tip_item.js');

var TipListCollection = Backbone.Collection.extend({
	model:TipItem,
	url:'/api/tips.json'
})

module.exports = TipListCollection;