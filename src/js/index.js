var Todo = Backbone.Model.extend({
	defaults:{
		title:"",
		completed:false
	}
});


var myTodo = new Todo({id:1});

console.log(myTodo.id)
