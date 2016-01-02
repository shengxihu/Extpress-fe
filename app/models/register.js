var Backbone = require("Backbone");

var Register = Backbone.Model.extend({
	initialize:function(options){
		this.options = options;
	},
	url:"http://xueer.ccnuer.cn/api/v1.0/register/"
})

module.exports = Register;