define(["require","exports","module","react","./todo"],function(e,t,n){var r=e("react"),i=e("./todo"),s=r.createClass({displayName:"Todos",render:function(){var e=this.props.updateTodo,t=this.props.removeTodo;return r.createElement("ul",{id:"todo-list"},this.props.todos.map(function(n){return r.createElement(i,r.__spread({},n,{updateTodo:e,removeTodo:t}))}.bind(this)))}});n.exports=s});