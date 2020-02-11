
var todos = {
    todos : ["待辦事項1", "待辦事項2", "待辦事項3"],
    listTodos : function(){
        console.log(this.todos);    
    },
    insertTodos : function(item){
        this.todos.push(item);
        this.listTodos();
    },
    updateTodos : function(index,item){	
        this.todos[index] = item;
        this.listTodos();
    },
    deleteTodos : function(index){
        this.todos.splice(index,1);
        this.listTodos();
    }
}






/*====================
	刪除
======================*/
function deleteTodos(index){
	todos.splice(index,1);
	listTodos();
}
