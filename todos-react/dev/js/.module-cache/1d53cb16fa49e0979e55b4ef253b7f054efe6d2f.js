define(function (require, exports, module) {
var React = require('react')

var ENTER_KEY = 13
var ESCAPE_KEY = 27

var Todo = React.createClass({displayName: "Todo",

	getInitialState: function() {
		return {
			title: this.props.title,
			time: this.props.time,
			completed: this.props.completed,
			onEdit: false
		}
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState(nextProps)
		debugger
	},
	getClassName: function() {
		var className = []
		if (this.state.completed) {
			className.push('completed')
		}
		if (this.state.onEdit) {
			className.push('editing')
		}
		return className.join(' ')
	},

	handleBlur: function(e) {
		var newTitle = e.target.value.trim()
		this.setState({
			onEdit: false
		})
		if (newTitle && newTitle !== this.state.title) {
			this.updateTodo({
				title: newTitle,
				time: new Date().toLocaleString()
			})
		}
	},

	handleKeyup: function(e) {
		var keyCode = e.keyCode
		if (keyCode === ENTER_KEY ||  keyCode === ESCAPE_KEY) {
			this.handleBlur(e)
		}
		console.log(keyCode)
	},

	handleDblclick: function() {
		var editor = this.refs.editor.getDOMNode()
		editor.value = this.state.title
		editor.focus()
		this.setState({
			onEdit: true
		})
	},

	removeTodo: function() {
		this.props.removeTodo(this.props.id)
	},

	toggleTodo: function(e) {
		var options = {
			completed: e.target.checked
		}
		this.updateTodo(options)
	},

	updateTodo: function(options) {
		this.props.updateTodo({
			id: this.props.id,
			title: options.title || this.state.title,
			time: options.time || this.state.time,
			completed: options.completed !== undefined ? options.completed : this.state.completed
		})
	},

	render: function() {
		var toggle
		if (this.state.completed) {
			toggle = React.createElement("input", {className: "toggle", type: "checkbox", onChange: this.toggleTodo, checked: true})
		} else {
			toggle = React.createElement("input", {className: "toggle", type: "checkbox", onChange: this.toggleTodo})
		}
		return (
			React.createElement("li", {className: this.getClassName()}, 
				React.createElement("div", {className: "view"}, 
					toggle, 
					React.createElement("label", {onDoubleClick: this.handleDblclick}, this.state.title), 
					React.createElement("button", {className: "destroy", onClick: this.removeTodo})
				), 
				React.createElement("input", {className: "edit", onBlur: this.handleBlur, onKeyUp: this.handleKeyup, ref: "editor"})
			)
			)
	}
})

module.exports = Todo
});