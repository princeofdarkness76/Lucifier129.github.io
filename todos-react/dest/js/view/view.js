define(["require","exports","module","react","./newTodo","./main","./filters"],function(e,t,n){var r=e("react"),i=e("./newTodo"),s=e("./main"),o=e("./filters"),u=r.createClass({displayName:"View",render:function(){return r.createElement("div",null,r.createElement(i,{addTodo:this.props.addTodo}),r.createElement(s,{isAllCompleted:this.props.isAllCompleted,todos:this.props.todos,toggleAll:this.props.toggleAll,updateTodo:this.props.updateTodo,removeTodo:this.props.removeTodo}),r.createElement(o,{hash:this.props.hash,clearCompleted:this.props.clearCompleted,completedCount:this.props.completedCount,todoCount:this.props.todoCount}))}});n.exports=u});