var todos = ["待辦事項1", "待辦事項2", "待辦事項3"];

// 查詢
function listTodos(){
	console.log(todos);
}

/*====================
	新增
======================*/
function insertTodos(item){
	todos.push(item);
	listTodos();
}

/*====================
	編輯
======================*/
function updateTodos(index,item){	
	todos[index] = item;
	listTodos();
}

/*====================
	刪除
======================*/
function deleteTodos(index){
	todos.splice(index,1);
	listTodos();
}
