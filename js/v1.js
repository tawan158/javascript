var todos = ["待辦事項1", "待辦事項2", "待辦事項3"];

// 查詢
console.log(todos);

//新增
todos.push("待辦事項4");
console.log(todos);

//編輯
todos[2] = "編輯";
console.log(todos);

//刪除
todos.splice(2,1);
console.log(todos);