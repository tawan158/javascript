
var todos = {
    todos : [],
    listTodos : function(){
        console.log(this.todos);    
    },
    insertTodos : function(item){
        this.todos.push({
            text : item,
            status : false
        });
        this.listTodos();
    },
    updateTodos : function(index,item){	
        this.todos[index].text = item;
        this.listTodos();
    },
    deleteTodos : function(index){
        this.todos.splice(index,1);
        this.listTodos();
    },
    toggleTodos : function(index){
        todos.todos[index].status = !todos.todos[index].status;
        this.listTodos();
    }
}

todos.insertTodos("清單1");
todos.insertTodos("清單2");
todos.insertTodos("清單3");
todos.insertTodos("清單4");

//編輯
todos.updateTodos(1,"789");

todos.toggleTodos(0);
todos.toggleTodos(1);


