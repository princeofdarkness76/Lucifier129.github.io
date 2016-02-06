define(["require","exports","module"],function(e,t,n){function r(e){this.name=e,this.todos=localStorage.getItem(e),this.todos?this.todos=JSON.parse(this.todos):this.todos=[]}r.prototype={$find:function(e){var t=[],n;return this.todos.forEach(function(n){n[e.name]==e.value&&t.push(n)}),t},getTodo:function(e){return this.$find({name:"id",value:e})[0]},getAll:function(){return this.todos},getActive:function(){return this.$find({name:"completed",value:!1})},getCompleted:function(){return this.$find({name:"completed",value:!0})},setStateForAll:function(e){var t=this.todos;for(var n=t.length-1;n>=0;n--)t[n].completed=e},addTodo:function(e){this.todos.push(e)},removeTodo:function(e){var t=this.getTodo(e),n=this.todos.indexOf(t);n>=0&&this.todos.splice(n,1)},updateTodo:function(e){var t=this.getTodo(e.id);for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},clearCompleted:function(){var e=this.todos;for(var t=e.length-1;t>=0;t--){var n=e[t];n.completed&&e.splice(t,1)}},isAllCompleted:function(){var e=!0,t=this.todos;if(t.length===0)return!1;for(var n=t.length-1;n>=0;n--)if(!t[n].completed){e=!1;break}return e},save:function(){localStorage.setItem(this.name,JSON.stringify(this.todos))}},n.exports=r});