define(["require","exports","module","./view/view","./model","react"],function(e,t,n){function o(e,t){this.View=e,this.Model=t}var r=e("./view/view"),i=e("./model"),s=e("react");o.prototype={init:function(){this.model=new this.Model("todos-react"),window.addEventListener("hashchange",this.render.bind(this),!1),window.addEventListener("unload",this.model.save.bind(this.model),!1),this.render()},getTodosByHash:function(){var e="/"+location.hash.replace("#/",""),t={"/":"getAll","/active":"getActive","/completed":"getCompleted"};return this.model[t[e]]},addTodo:function(e){this.model.addTodo(e),this.render()},updateTodos:function(e){this.model.todos=e,this.render()},updateTodo:function(e){var t=this.model.getTodo(e.id);for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);this.render()},removeTodo:function(e){thid.model.removeTodo(e),this.render()},clearCompleted:function(){this.model.clearCompleted(),this.render()},render:function(){var e=this.View;s.render(s.createElement(NewTodo,{addTodo:this.addTodo}),document.getElementById("header")),s.render(s.createElement(Main,{todos:this.getTodosByHash(),updateTodos:this.updateTodos,updateTodo:this.updateTodo,removeTodo:this.removeTodo}),document.getElementById("main")),s.render(s.createElement(Filters,{clearCompleted:this.clearCompleted}),document.getElementById("footer"))}},n.exports=new o(r,i)});