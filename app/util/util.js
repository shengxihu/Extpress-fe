var util = (function(){
	var bind_navigate = function(ele,router){
		ele.on("click",function(e){
			e.preventDefault();
			router.navigate($(e.target).data("link"),{trigger: true});
		})
	}
	return {
		bind_navigate : bind_navigate
	}
})();

module.exports = util;