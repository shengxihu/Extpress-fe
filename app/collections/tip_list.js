var Backbone = require("Backbone");

//load model
var TipItem = require('../models/tip_item.js');

var TipListCollection = Backbone.Collection.extend({
	model:TipItem,
	url:'http://xueer.ccnuer.cn/api/v1.0/tips'
})

module.exports = TipListCollection;