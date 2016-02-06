define(function (require, exports, module) {
	var View = require('./view/view')
	var Model = require('./model')

	function APP(View, Model) {
		this.View = View
		this.Model = Model
	}

	App.prototype = {
		init: function() {
			this.model = new this.Model('todos-react')
			window.addEventListener('hashchange', this.render.bind(this), false)
			window.addEventListener('unload', this.model.save.bind(this.model), false)
			this.render()
		},

		getTodosByHash: function() {
			var hash = '/' + location.hash.replace('#/', '')
			var mapping = {
				'/': 'getAll',
				'/active': 'getActive',
				'/completed': 'getCompleted'
			}
			return this.model[mapping[hash]]
		},
		addTodo: function(newTodo) {
			this.model.addTodo(newTodo)
			this.render()
		},
		updateTodos: function(todos) {
			this.model.todos = todos
			this.render()
		},
		updateTodo: function(todo) {
			var target = this.model.getTodo(todo.id)
			for (var key in todo) {
				if (todo.hasOwnProperty(key)) {
					target[key] = todo[key]
				}
			}
			this.render()
		},
		removeTodo: function(id) {
			thid.model.removeTodo(id)
			this.render()
		},
		clearCompleted: function() {
			this.model.clearCompleted()
			this.render()
		},
		render: function() {
			React.render(
				React.createElement(NewTodo, {addTodo: this.addTodo}),
				document.getElementById('header')
				)

			React.render(
				React.createElement(Main, {
					todos: this.getTodosByHash(), 
					updateTodos: this.updateTodos, 
					updateTodo: this.updateTodo, 
					removeTodo: this.removeTodo}),
				document.getElementById('main')
				)

			React.render(
				React.createElement(Filters, {clearCompleted: this.clearCompleted}),
				document.getElementById('footer')
				)
		}
	}

	module.exports = App

});