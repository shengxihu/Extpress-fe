var Backbone = require("Backbone");

//load model
var Tip = require('../models/tip_item.js');

var TipsCollection = Backbone.Collection.extend({
	model:Tip,
	url:'http://xueer.ccnuer.cn/api/tips'
})

module.exports = TipsCollection;